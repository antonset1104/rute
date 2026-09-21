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
    // Backward-compatibility mapping from legacy hub names to actual station IDs
    this.aliasMap = {
      'dukuh_atas_hub': 'dukuh_atas_mrt',
      'lebak_bulus_hub': 'lebak_bulus',
      'blok_m_hub': 'blok_m',
      'csw_asean_hub': 'asean',
      'senayan_hub': 'senayan',
      'bundaran_hi_hub': 'bundaran_hi',
      'cawang_hub': 'cawang_krl',
      'halim_hub': 'halim_whoosh',
      'velodrome_hub': 'velodrome',
      'jakarta_kota_hub': 'jakarta_kota',
      'manggarai_hub': 'manggarai',
      'tanah_abang_hub': 'tanah_abang',
      'senen_hub': 'pasar_senen',
      'bandara_shia_hub': 'bandara_shia',
      'monas_hub': 'monas'
    };

    // Map stations by id
    this.data.stations.forEach(st => {
      this.stationMap[st.id] = st;
      if (!this.graph[st.id]) this.graph[st.id] = [];
    });

    // Also register legacy aliases in stationMap so any legacy lookup works
    Object.entries(this.aliasMap).forEach(([legacyId, actualId]) => {
      if (this.stationMap[actualId] && !this.stationMap[legacyId]) {
        this.stationMap[legacyId] = this.stationMap[actualId];
        if (!this.graph[legacyId]) this.graph[legacyId] = [];
      }
    });

    // Connect stations along lines
    this.data.lines.forEach(line => {
      const stationIds = line.stations;
      for (let i = 0; i < stationIds.length - 1; i++) {
        const u = this.resolveStationId(stationIds[i]);
        const v = this.resolveStationId(stationIds[i + 1]);

        if (u === v) continue;

        if (this.stationMap[u] && this.stationMap[v]) {
          this.addEdge(u, v, line.id, line.system);
          this.addEdge(v, u, line.id, line.system);
        }
      }
    });

    // Physical Intermodal Transfers (Walking Connections / Skybridges)
    const transferClusters = [
      // Dukuh Atas TOD Superhub
      ['dukuh_atas_mrt', 'dukuh_atas_lrt', 3],
      ['dukuh_atas_mrt', 'sudirman', 3],
      ['dukuh_atas_mrt', 'bni_city', 3],
      ['dukuh_atas_mrt', 'dukuh_atas_tj', 2],
      ['dukuh_atas_lrt', 'galunggung', 2],
      ['dukuh_atas_lrt', 'sudirman', 4],
      ['sudirman', 'bni_city', 2],
      ['sudirman', 'dukuh_atas_tj', 2],
      // CSW - ASEAN - Blok M Cluster
      ['asean', 'csw_integrasi', 2],
      ['blok_m', 'csw_integrasi', 4],
      ['asean', 'blok_m', 5],
      // Kebayoran Skybridge to Velbak (Koridor 13 & 8)
      ['kebayoran', 'velbak', 3],
      // Cawang / Cikoko Multimoda Hub
      ['cikoko', 'cawang_krl', 2],
      ['cawang_lrt', 'cawang_otista', 3],
      ['cawang_lrt', 'cawang_sutoyo', 3],
      ['cawang_krl', 'cawang_lrt', 4],
      // Halim HSR & LRT Skybridge
      ['halim_lrt', 'halim_whoosh', 2],
      // Velodrome & Pemuda Rawamangun Skybridge
      ['velodrome', 'pemuda_rawamangun', 3],
      // Pulomas & Cempaka Timur Skybridge
      ['pulomas', 'cempaka_timur', 3],
      // Juanda & Pasar Baru
      ['juanda', 'pasar_baru', 4],
      // Senen Intermodal
      ['pasar_senen', 'senen', 3],
      // Bundaran HI MRT & TJ
      ['bundaran_hi', 'bundaran_hi_tj', 2],
      // Rawa Buaya KRL & TJ
      ['rawa_buaya', 'rawa_buaya_tj', 3],
      // Kalideres KRL & TJ
      ['kalideres_krl', 'kalideres_tj', 5],
      // Kampung Rambutan LRT & TJ
      ['kampung_rambutan_lrt', 'kampung_rambutan', 3],
      // PGC Cililitan
      ['pgc', 'cawang_sutoyo', 4],
      // Matraman KRL & TJ
      ['matraman', 'pramuka', 3],
      // Jatinegara KRL & TJ
      ['jatinegara', 'kampung_melayu', 6]
    ];

    transferClusters.forEach(([from, to, time]) => {
      if (from === to || time === 0) return;
      const u = this.resolveStationId(from);
      const v = this.resolveStationId(to);
      if (this.stationMap[u] && this.stationMap[v]) {
        this.graph[u].push({ node: v, lineId: 'transfer_walk', system: 'walk', weight: time });
        this.graph[v].push({ node: u, lineId: 'transfer_walk', system: 'walk', weight: time });
      }
    });
  }

  addEdge(u, v, lineId, system) {
    if (!this.graph[u]) this.graph[u] = [];
    let weight = 3; // default transit time in minutes per stop
    if (system === 'whoosh') weight = 15;
    else if (system === 'ka_bandara') weight = 7;
    else if (system === 'krl') weight = 3.5;
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
