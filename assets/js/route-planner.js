// Jakarta Transit Journey Planner & Route Finder
// Computes multi-modal transit paths, transfers, estimated time, and integrated fares

class RoutePlanner {
  constructor(transitData) {
    this.data = transitData;
    this.graph = {};
    this.stationMap = {};
    this.aliasMap = {};
    this.buildGraph();
  }

  /**
   * Maps line-level station IDs to their hub equivalents.
   * Line data uses granular IDs (e.g., 'dukuh_atas_mrt', 'lebak_bulus')
   * while the station directory uses hub IDs (e.g., 'dukuh_atas_hub').
   */
  resolveStationId(rawId) {
    if (this.stationMap[rawId]) return rawId;
    if (this.aliasMap[rawId]) return this.aliasMap[rawId];
    return rawId;
  }

  buildGraph() {
    // Build alias map: line station IDs → hub station IDs
    // This resolves the mismatch between line.stations[] and stations[] arrays.
    const aliasRules = {
      // MRT N-S line stations
      'lebak_bulus': 'lebak_bulus_hub',
      'blok_m': 'blok_m_hub',
      'asean': 'csw_asean_hub',
      'senayan': 'senayan_hub',
      'istora': 'senayan_hub',
      'dukuh_atas_mrt': 'dukuh_atas_hub',
      'bundaran_hi': 'bundaran_hi_hub',
      'setiabudi_astra': 'dukuh_atas_hub',
      // LRT Jabodebek
      'dukuh_atas_lrt': 'dukuh_atas_hub',
      'setiabudi_lrt': 'dukuh_atas_hub',
      'cawang': 'cawang_hub',
      'cikoko': 'cawang_hub',
      'halim_lrt': 'halim_hub',
      'halim_whoosh': 'halim_hub',
      // LRT Jakarta
      'velodrome': 'velodrome_hub',
      // KRL stations
      'jakarta_kota': 'jakarta_kota_hub',
      'manggarai': 'manggarai_hub',
      'tanah_abang': 'tanah_abang_hub',
      'pasar_senen': 'senen_hub',
      'senen': 'senen_hub',
      'sudirman': 'dukuh_atas_hub',
      'bni_city': 'dukuh_atas_hub',
      'duri': 'tanah_abang_hub',
      'kampung_bandan': 'jakarta_kota_hub',
      'cawang_krl': 'cawang_hub',
      // KA Bandara
      'bandara_shia': 'bandara_shia_hub',
      // TransJakarta
      'dukuh_atas_tj': 'dukuh_atas_hub',
      'bundaran_hi_tj': 'bundaran_hi_hub',
      'monas': 'monas_hub',
      'harmoni': 'monas_hub',
      'galunggung': 'dukuh_atas_hub',
      'csw_integrasi': 'csw_asean_hub',
      // Whoosh
      'karawang': 'halim_hub'
    };

    this.aliasMap = aliasRules;

    // Map stations by id
    this.data.stations.forEach(st => {
      this.stationMap[st.id] = st;
      if (!this.graph[st.id]) this.graph[st.id] = [];
    });

    // Connect stations along lines, resolving aliases
    this.data.lines.forEach(line => {
      const stationIds = line.stations;
      for (let i = 0; i < stationIds.length - 1; i++) {
        const u = this.resolveStationId(stationIds[i]);
        const v = this.resolveStationId(stationIds[i + 1]);

        // Skip self-loops (two line stations mapping to the same hub)
        if (u === v) continue;

        // Only build edges between known stations
        if (this.stationMap[u] && this.stationMap[v]) {
          this.addEdge(u, v, line.id, line.system);
          this.addEdge(v, u, line.id, line.system);
        }
      }
    });

    // Add intermodal transfer links between hubs
    const transferClusters = [
      ['dukuh_atas_hub', 'bundaran_hi_hub', 4],
      ['dukuh_atas_hub', 'senayan_hub', 8],
      ['dukuh_atas_hub', 'manggarai_hub', 6],
      ['dukuh_atas_hub', 'tanah_abang_hub', 7],
      ['csw_asean_hub', 'blok_m_hub', 3],
      ['csw_asean_hub', 'senayan_hub', 6],
      ['monas_hub', 'bundaran_hi_hub', 6],
      ['monas_hub', 'jakarta_kota_hub', 10],
      ['monas_hub', 'senen_hub', 7],
      ['manggarai_hub', 'senen_hub', 11],
      ['manggarai_hub', 'cawang_hub', 8],
      ['cawang_hub', 'halim_hub', 9],
      ['velodrome_hub', 'senen_hub', 15],
      ['velodrome_hub', 'manggarai_hub', 18],
      ['tanah_abang_hub', 'tanah_abang_hub', 0],
      ['bandara_shia_hub', 'dukuh_atas_hub', 45],
      ['bandara_shia_hub', 'manggarai_hub', 52],
      ['lebak_bulus_hub', 'blok_m_hub', 15],
      ['lebak_bulus_hub', 'csw_asean_hub', 17]
    ];

    transferClusters.forEach(([from, to, time]) => {
      if (from === to || time === 0) return;
      if (this.stationMap[from] && this.stationMap[to]) {
        this.graph[from].push({ node: to, lineId: 'transfer_walk', system: 'walk', weight: time });
        this.graph[to].push({ node: from, lineId: 'transfer_walk', system: 'walk', weight: time });
      }
    });
  }

  addEdge(u, v, lineId, system) {
    if (!this.graph[u]) this.graph[u] = [];
    let weight = 3; // default transit time in minutes per stop
    if (system === 'whoosh') weight = 15;
    else if (system === 'ka_bandara') weight = 8;
    else if (system === 'krl') weight = 4;
    else if (system === 'mrt' || system === 'lrt_jdb' || system === 'lrt_jkt') weight = 2.5;

    this.graph[u].push({ node: v, lineId, system, weight });
  }

  findRoute(startId, endId) {
    if (!startId || !endId) return null;
    if (startId === endId) {
      return {
        sameStation: true,
        origin: this.stationMap[startId],
        destination: this.stationMap[endId]
      };
    }

    // Dijkstra's Shortest Path Algorithm
    const distances = {};
    const previous = {};
    const visited = new Set();
    const queue = [];

    Object.keys(this.stationMap).forEach(stId => {
      distances[stId] = Infinity;
      previous[stId] = null;
    });

    distances[startId] = 0;
    queue.push({ node: startId, dist: 0 });

    while (queue.length > 0) {
      // Sort queue for minimal distance
      queue.sort((a, b) => a.dist - b.dist);
      const current = queue.shift();
      const u = current.node;

      if (u === endId) break;
      if (visited.has(u)) continue;
      visited.add(u);

      const neighbors = this.graph[u] || [];
      for (const edge of neighbors) {
        const v = edge.node;
        if (visited.has(v)) continue;

        // Add penalty for line transfers to favor direct lines
        const prevEdge = previous[u] ? previous[u].edge : null;
        let transferPenalty = 0;
        if (prevEdge && prevEdge.lineId !== edge.lineId) {
          transferPenalty = 6; // 6 minute transfer penalty
        }

        const alt = distances[u] + edge.weight + transferPenalty;
        if (alt < distances[v]) {
          distances[v] = alt;
          previous[v] = { node: u, edge };
          queue.push({ node: v, dist: alt });
        }
      }
    }

    // Trace path
    const path = [];
    let curr = endId;
    while (curr && previous[curr]) {
      path.unshift({
        from: previous[curr].node,
        to: curr,
        edge: previous[curr].edge
      });
      curr = previous[curr].node;
    }

    if (path.length === 0 && startId !== endId) {
      // Fallback heuristic direct estimation between hubs
      return this.generateDirectEstimate(startId, endId);
    }

    return this.formatRouteResult(startId, endId, path, distances[endId]);
  }

  generateDirectEstimate(startId, endId) {
    const origin = this.stationMap[startId];
    const destination = this.stationMap[endId];
    if (!origin || !destination) return null;

    // Check common lines
    const commonLines = origin.lines.filter(l => destination.lines.includes(l));
    const isDirect = commonLines.length > 0;

    const estimatedMins = isDirect ? 20 : 35;
    const transfers = isDirect ? 0 : 1;

    return {
      origin,
      destination,
      durationMinutes: estimatedMins,
      transfers,
      steps: [
        {
          type: 'depart',
          station: origin,
          text: `Berangkat dari ${origin.name}`
        },
        {
          type: 'ride',
          line: commonLines[0] ? this.getLine(commonLines[0]) : this.getLine(origin.lines[0]),
          fromStation: origin,
          toStation: isDirect ? destination : this.stationMap['dukuh_atas_hub'] || destination,
          text: `Naik moda transit menuju ${destination.name}`
        },
        {
          type: 'arrive',
          station: destination,
          text: `Tiba di ${destination.name}`
        }
      ],
      estimatedFare: this.calculateFare(origin, destination, transfers)
    };
  }

  formatRouteResult(startId, endId, path, totalDistance) {
    const origin = this.stationMap[startId];
    const destination = this.stationMap[endId];

    const steps = [];
    let transfers = 0;
    let currentLineId = null;

    steps.push({
      type: 'depart',
      station: origin,
      text: `Berangkat dari ${origin.name}`
    });

    path.forEach((segment, idx) => {
      const line = this.getLine(segment.edge.lineId);
      const fromSt = this.stationMap[segment.from];
      const toSt = this.stationMap[segment.to];

      if (currentLineId && currentLineId !== segment.edge.lineId) {
        transfers++;
        steps.push({
          type: 'transfer',
          station: fromSt,
          fromLine: this.getLine(currentLineId),
          toLine: line,
          text: `Transit di ${fromSt.name}`
        });
      }

      steps.push({
        type: 'ride',
        line: line,
        fromStation: fromSt,
        toStation: toSt,
        duration: Math.round(segment.edge.weight),
        text: `Naik ${line ? line.name : 'Angkutan Terintegrasi'} menuju ${toSt.name}`
      });

      currentLineId = segment.edge.lineId;
    });

    steps.push({
      type: 'arrive',
      station: destination,
      text: `Tiba di tujuan: ${destination.name}`
    });

    const durationMinutes = Math.max(15, Math.round(totalDistance || 25));
    const estimatedFare = this.calculateFare(origin, destination, transfers);

    return {
      origin,
      destination,
      durationMinutes,
      transfers,
      steps,
      estimatedFare
    };
  }

  calculateFare(origin, destination, transfers) {
    // Determine fare breakdown
    let minFare = 3500;
    let maxFare = 10000;
    let note = 'Tarif Integrasi JakLingko Max Rp 10.000 (3 Jam)';

    const hasWhoosh = origin.modes.includes('Whoosh') || destination.modes.includes('Whoosh');
    const hasAirport = origin.modes.includes('KA Bandara') || destination.modes.includes('KA Bandara');

    if (hasWhoosh) {
      return {
        fareText: 'Rp 150.000 - Rp 250.000',
        tariffType: 'Whoosh Premium High-Speed Rail',
        note: 'Pemesanan tiket melalui aplikasi Whoosh atau Access by KAI'
      };
    }

    if (hasAirport) {
      return {
        fareText: 'Rp 30.000 - Rp 70.000',
        tariffType: 'Kereta Bandara Railink',
        note: 'Bisa dibeli via mesin tiket stasiun atau KAI Access'
      };
    }

    if (transfers === 0 && origin.modes.includes('TransJakarta') && destination.modes.includes('TransJakarta')) {
      return {
        fareText: 'Rp 3.500',
        tariffType: 'Tarif Flat BRT TransJakarta',
        note: 'Gratis transfer antarkoridor di dalam halte integrasi'
      };
    }

    return {
      fareText: 'Rp 3.500 - Rp 10.000',
      tariffType: 'Tarif Terintegrasi JakLingko',
      note: 'Maksimal Rp 10.000 untuk MRT + LRT + TransJakarta dalam 180 menit'
    };
  }

  getLine(lineId) {
    if (!lineId) return null;
    return this.data.lines.find(l => l.id === lineId) || {
      id: lineId,
      name: lineId === 'transfer_walk' ? 'Jalan Kaki / Skybridge' : 'Jalur Transit',
      color: '#64748b'
    };
  }
}

// Global Export
if (typeof window !== 'undefined') {
  window.RoutePlanner = RoutePlanner;
}
