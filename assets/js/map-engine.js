// Interactive Vector Map & Official Map Viewer for Jakarta Transit
// Supports SVG vector schematic, station pins, line filters, route highlighting, and HD pan/zoom

class JakartaMapEngine {
  constructor(containerId, transitData) {
    this.container = document.getElementById(containerId);
    this.data = transitData;
    this.currentFilter = 'all';
    this.currentViewMode = 'schematic'; // 'schematic' or 'official'
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.activeRoute = null;

    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
    this.bindEvents();
  }

  render() {
    this.container.innerHTML = `
      <div class="map-wrapper" id="map-wrapper">
        <!-- Schematic SVG Vector Map Layer -->
        <div class="map-layer schematic-layer active" id="schematic-layer">
          <svg id="transit-svg" viewBox="0 0 960 820" preserveAspectRatio="xMidYMid meet" class="transit-svg-canvas">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <!-- Patterns -->
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(226, 232, 240, 0.4)" stroke-width="1"/>
              </pattern>
            </defs>

            <!-- Background Grid -->
            <rect width="100%" height="100%" fill="url(#grid)" />

            <!-- Geographic Water/Bay Indicator (Teluk Jakarta) -->
            <path d="M 0,0 L 960,0 L 960,110 Q 500,140 0,110 Z" fill="#e0f2fe" opacity="0.7"/>
            <text x="480" y="60" text-anchor="middle" fill="#0284c7" font-weight="700" font-size="14" letter-spacing="3">TELUK JAKARTA (JAKARTA BAY)</text>

            <!-- Transit Lines Paths -->
            <g id="svg-lines-group" class="svg-lines-group"></g>

            <!-- Transit Stations & Hubs -->
            <g id="svg-stations-group" class="svg-stations-group"></g>
          </svg>
        </div>

        <!-- Official High-Resolution Map Layer -->
        <div class="map-layer official-layer" id="official-layer">
          <div class="panzoom-container" id="panzoom-container">
            <img src="assets/images/peta-integrasi.jpg" alt="Peta Integrasi Transportasi Umum Jakarta" id="official-map-img" class="official-map-img" loading="eager" />
          </div>
        </div>

        <!-- Floating Map Controls -->
        <div class="map-controls">
          <button class="map-ctrl-btn" id="ctrl-zoom-in" title="Zoom In" aria-label="Zoom In">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </button>
          <button class="map-ctrl-btn" id="ctrl-zoom-out" title="Zoom Out" aria-label="Zoom Out">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
          </button>
          <button class="map-ctrl-btn" id="ctrl-reset" title="Reset Map" aria-label="Reset Map">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>
          </button>
          <button class="map-ctrl-btn" id="ctrl-fullscreen" title="Fullscreen" aria-label="Fullscreen">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
          </button>
        </div>

        <!-- Mode View Switcher Badge -->
        <div class="map-view-switcher">
          <button class="view-switch-btn active" data-view="schematic" data-i18n="mapViewSchematic">Peta Vektor Interaktif</button>
          <button class="view-switch-btn" data-view="official" data-i18n="mapViewOfficial">Peta Integrasi Resmi (HD)</button>
        </div>
      </div>
    `;

    this.renderSvgNetwork();
  }

  renderSvgNetwork() {
    const linesGroup = document.getElementById('svg-lines-group');
    const stationsGroup = document.getElementById('svg-stations-group');
    if (!linesGroup || !stationsGroup) return;

    linesGroup.innerHTML = '';
    stationsGroup.innerHTML = '';

    // Primary Transit Lines Schematic Coordinates
    const networkPaths = [
      // 1. MRT North-South (Red/Dark Red)
      { id: 'mrt_ns', color: '#d92d20', width: 6, d: 'M 480,370 L 480,420 L 440,490 L 420,560 L 420,600 L 380,720', name: 'MRT North-South' },
      
      // 2. LRT Jabodebek Cibubur Line (Sky Blue)
      { id: 'lrt_cibubur', color: '#0284c7', width: 5, d: 'M 480,420 L 510,450 L 580,510 L 630,620 L 640,700', name: 'LRT Cibubur' },
      
      // 3. LRT Jabodebek Bekasi Line (Teal)
      { id: 'lrt_bekasi', color: '#0d9488', width: 5, d: 'M 480,420 L 510,450 L 580,510 L 680,540 L 820,540 L 890,560', name: 'LRT Bekasi' },
      
      // 4. LRT Jakarta (Coral)
      { id: 'lrt_jkt_1', color: '#e11d48', width: 5, d: 'M 650,380 L 650,290 L 690,240 L 730,220', name: 'LRT Jakarta' },
      
      // 5. KRL Bogor Line (Red)
      { id: 'krl_bogor', color: '#dc2626', width: 5, d: 'M 480,190 L 480,240 L 520,330 L 540,460 L 580,510 L 580,680 L 580,780', name: 'KRL Bogor' },
      
      // 6. KRL Cikarang Loop Line (Blue)
      { id: 'krl_cikarang', color: '#2563eb', width: 5, d: 'M 480,190 L 380,220 L 380,330 L 430,380 L 480,420 L 540,460 L 620,460 L 780,460 L 920,460', name: 'KRL Cikarang' },
      
      // 7. KRL Rangkasbitung Line (Green)
      { id: 'krl_rangkas', color: '#16a34a', width: 5, d: 'M 430,380 L 370,450 L 320,530 L 260,610 L 160,700', name: 'KRL Rangkasbitung' },
      
      // 8. KRL Tangerang Line (Brown)
      { id: 'krl_tangerang', color: '#ca8a04', width: 5, d: 'M 380,330 L 320,330 L 250,330 L 170,330 L 90,330', name: 'KRL Tangerang' },
      
      // 9. KRL Tanjung Priok (Pink)
      { id: 'krl_priok', color: '#db2777', width: 4, d: 'M 480,190 L 570,160 L 690,160', name: 'KRL Tg Priok' },
      
      // 10. KA Bandara Soekarno-Hatta (Navy)
      { id: 'ka_bandara_shia', color: '#1e3a8a', width: 5, strokeDasharray: '7,4', d: 'M 180,200 L 250,280 L 320,330 L 380,330 L 480,420 L 540,460', name: 'KA Bandara' },
      
      // 11. KCIC Whoosh High Speed Train (Burgundy)
      { id: 'whoosh_hsr', color: '#881337', width: 6, strokeDasharray: '10,4', d: 'M 680,540 L 760,570 L 860,630 L 940,690', name: 'Whoosh KCIC' },
      
      // 12. TransJakarta Koridor 1 (Blok M - Kota)
      { id: 'tj_1', color: '#f59e0b', width: 3.5, strokeDasharray: '4,3', d: 'M 480,190 L 480,300 L 480,370 L 480,420 L 440,490 L 420,560 L 420,600', name: 'TJ Koridor 1' },
      
      // 13. TransJakarta Koridor 13 Elevated (Purple)
      { id: 'tj_13', color: '#8b5cf6', width: 4, d: 'M 250,560 L 420,560 L 520,560', name: 'TJ Koridor 13' }
    ];

    // Draw lines
    networkPaths.forEach(line => {
      const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      pathEl.setAttribute('d', line.d);
      pathEl.setAttribute('stroke', line.color);
      pathEl.setAttribute('stroke-width', line.width);
      pathEl.setAttribute('fill', 'none');
      pathEl.setAttribute('stroke-linecap', 'round');
      pathEl.setAttribute('stroke-linejoin', 'round');
      pathEl.setAttribute('class', `transit-line-path line-${line.id}`);
      pathEl.setAttribute('data-line-id', line.id);
      if (line.strokeDasharray) {
        pathEl.setAttribute('stroke-dasharray', line.strokeDasharray);
      }
      linesGroup.appendChild(pathEl);
    });

    // Draw stations & Hubs
    this.data.stations.forEach(st => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', `station-node ${st.isHub ? 'hub-node' : ''}`);
      g.setAttribute('data-station-id', st.id);
      g.setAttribute('transform', `translate(${st.x}, ${st.y})`);
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', `${st.name} (${st.modes.join(', ')})`);
      g.style.cursor = 'pointer';

      if (st.isHub) {
        // Outer pulsing ring for key hubs
        const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        ring.setAttribute('r', '13');
        ring.setAttribute('fill', 'none');
        ring.setAttribute('stroke', '#0284c7');
        ring.setAttribute('stroke-width', '2.5');
        ring.setAttribute('class', 'hub-ring-pulse');
        g.appendChild(ring);

        // Core white circle
        const core = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        core.setAttribute('r', '8');
        core.setAttribute('fill', '#ffffff');
        core.setAttribute('stroke', '#0f172a');
        core.setAttribute('stroke-width', '3');
        g.appendChild(core);

        // Inner mode badge dot
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('r', '3.5');
        dot.setAttribute('fill', '#d92d20');
        g.appendChild(dot);
      } else {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('r', '5');
        circle.setAttribute('fill', '#ffffff');
        circle.setAttribute('stroke', '#334155');
        circle.setAttribute('stroke-width', '2');
        g.appendChild(circle);
      }

      // Station Label
      const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', st.x > 700 ? -12 : 14);
      label.setAttribute('y', 4);
      label.setAttribute('text-anchor', st.x > 700 ? 'end' : 'start');
      label.setAttribute('class', `station-svg-label ${st.isHub ? 'hub-label' : ''}`);
      label.textContent = st.shortName || st.name;
      g.appendChild(label);

      // Station Click & Keyboard Event -> Open Modal
      const triggerModal = (e) => {
        e.stopPropagation();
        this.openStationModal(st);
      };

      g.addEventListener('click', triggerModal);
      g.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerModal(e);
        }
      });

      stationsGroup.appendChild(g);
    });
  }

  filterByMode(mode) {
    this.currentFilter = mode;
    const paths = document.querySelectorAll('.transit-line-path');
    const nodes = document.querySelectorAll('.station-node');

    if (mode === 'all') {
      paths.forEach(p => p.classList.remove('dimmed', 'highlighted'));
      nodes.forEach(n => n.classList.remove('dimmed', 'highlighted'));
      return;
    }

    // Determine matching line prefixes
    const modePrefixes = {
      mrt: ['mrt_ns'],
      lrt_jdb: ['lrt_cibubur', 'lrt_bekasi'],
      lrt_jkt: ['lrt_jkt_1'],
      krl: ['krl_bogor', 'krl_cikarang', 'krl_rangkas', 'krl_tangerang', 'krl_priok'],
      whoosh: ['whoosh_hsr'],
      ka_bandara: ['ka_bandara_shia'],
      tj: ['tj_1', 'tj_13']
    };

    const targetLines = modePrefixes[mode] || [];

    paths.forEach(p => {
      const lineId = p.getAttribute('data-line-id');
      if (targetLines.includes(lineId)) {
        p.classList.remove('dimmed');
        p.classList.add('highlighted');
      } else {
        p.classList.add('dimmed');
        p.classList.remove('highlighted');
      }
    });

    nodes.forEach(n => {
      const stId = n.getAttribute('data-station-id');
      const st = this.data.stations.find(s => s.id === stId);
      if (st && st.lines.some(l => targetLines.includes(l))) {
        n.classList.remove('dimmed');
        n.classList.add('highlighted');
      } else {
        n.classList.add('dimmed');
        n.classList.remove('highlighted');
      }
    });
  }

  highlightRoute(route) {
    this.activeRoute = route;
    if (!route || !route.steps) return;

    // Highlight stations along path
    const stationIds = new Set();
    const lineIds = new Set();

    route.steps.forEach(step => {
      if (step.station) stationIds.add(step.station.id);
      if (step.fromStation) stationIds.add(step.fromStation.id);
      if (step.toStation) stationIds.add(step.toStation.id);
      if (step.line) lineIds.add(step.line.id);
    });

    const paths = document.querySelectorAll('.transit-line-path');
    const nodes = document.querySelectorAll('.station-node');

    paths.forEach(p => {
      const id = p.getAttribute('data-line-id');
      if (lineIds.has(id)) {
        p.classList.remove('dimmed');
        p.classList.add('route-active');
      } else {
        p.classList.add('dimmed');
        p.classList.remove('route-active');
      }
    });

    nodes.forEach(n => {
      const stId = n.getAttribute('data-station-id');
      if (stationIds.has(stId)) {
        n.classList.remove('dimmed');
        n.classList.add('route-active');
      } else {
        n.classList.add('dimmed');
        n.classList.remove('route-active');
      }
    });
  }

  clearRouteHighlight() {
    this.activeRoute = null;
    this.filterByMode(this.currentFilter);
    const paths = document.querySelectorAll('.transit-line-path');
    const nodes = document.querySelectorAll('.station-node');
    paths.forEach(p => p.classList.remove('route-active'));
    nodes.forEach(n => n.classList.remove('route-active'));
  }

  openStationModal(st) {
    const modal = document.getElementById('station-modal');
    if (!modal) return;

    const title = document.getElementById('modal-station-title');
    const modesContainer = document.getElementById('modal-station-modes');
    const linesContainer = document.getElementById('modal-station-lines');
    const transfersContainer = document.getElementById('modal-station-transfers');
    const facilitiesContainer = document.getElementById('modal-station-facilities');
    const nearbyContainer = document.getElementById('modal-station-nearby');
    const desc = document.getElementById('modal-station-desc');
    const btnOrigin = document.getElementById('modal-btn-set-origin');
    const btnDest = document.getElementById('modal-btn-set-dest');

    if (title) title.textContent = st.name;
    if (desc) desc.textContent = st.description || '';

    // Modes
    if (modesContainer) {
      modesContainer.innerHTML = st.modes.map(m => `<span class="mode-badge badge-${m.toLowerCase().replace(/[^a-z]/g, '')}">${m}</span>`).join(' ');
    }

    // Transfers
    if (transfersContainer) {
      transfersContainer.innerHTML = st.transfers.map(t => `<li class="transfer-item">${t}</li>`).join('');
    }

    // Facilities
    if (facilitiesContainer) {
      facilitiesContainer.innerHTML = st.facilities.map(f => `<span class="facility-chip"><svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> ${f}</span>`).join(' ');
    }

    // Nearby
    if (nearbyContainer) {
      nearbyContainer.innerHTML = st.nearby.map(n => `<li class="nearby-item">${n}</li>`).join('');
    }

    // Origin / Destination Quick Setters
    if (btnOrigin) {
      btnOrigin.onclick = () => {
        const originSelect = document.getElementById('route-origin');
        if (originSelect) originSelect.value = st.id;
        modal.classList.remove('active');
        const plannerSection = document.getElementById('route-planner-section');
        if (plannerSection) plannerSection.scrollIntoView({ behavior: 'smooth' });
      };
    }

    if (btnDest) {
      btnDest.onclick = () => {
        const destSelect = document.getElementById('route-dest');
        if (destSelect) destSelect.value = st.id;
        modal.classList.remove('active');
        const plannerSection = document.getElementById('route-planner-section');
        if (plannerSection) plannerSection.scrollIntoView({ behavior: 'smooth' });
      };
    }

    modal.classList.add('active');
  }

  bindEvents() {
    // Zoom buttons
    const btnZoomIn = document.getElementById('ctrl-zoom-in');
    const btnZoomOut = document.getElementById('ctrl-zoom-out');
    const btnReset = document.getElementById('ctrl-reset');
    const btnFullscreen = document.getElementById('ctrl-fullscreen');

    if (btnZoomIn) {
      btnZoomIn.onclick = () => this.applyZoom(1.25);
    }
    if (btnZoomOut) {
      btnZoomOut.onclick = () => this.applyZoom(0.8);
    }
    if (btnReset) {
      btnReset.onclick = () => this.resetMap();
    }
    if (btnFullscreen) {
      btnFullscreen.onclick = () => this.toggleFullscreen();
    }

    // View Switcher (Schematic vs Official HD)
    const viewButtons = document.querySelectorAll('.view-switch-btn');
    viewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        viewButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.getAttribute('data-view');
        this.switchView(view);
      });
    });

    // Pan / Drag for Official Map Image using modern Pointer Events
    const panContainer = document.getElementById('panzoom-container');
    const img = document.getElementById('official-map-img');
    if (panContainer && img) {
      panContainer.addEventListener('pointerdown', (e) => {
        this.isDragging = true;
        this.startX = e.clientX - this.panX;
        this.startY = e.clientY - this.panY;
        try {
          panContainer.setPointerCapture(e.pointerId);
        } catch (_) {}
        panContainer.style.cursor = 'grabbing';
      });

      panContainer.addEventListener('pointermove', (e) => {
        if (!this.isDragging) return;
        this.panX = e.clientX - this.startX;
        this.panY = e.clientY - this.startY;
        this.updateTransform();
      });

      const endDrag = (e) => {
        if (this.isDragging) {
          this.isDragging = false;
          try {
            panContainer.releasePointerCapture(e.pointerId);
          } catch (_) {}
          panContainer.style.cursor = 'grab';
        }
      };

      panContainer.addEventListener('pointerup', endDrag);
      panContainer.addEventListener('pointercancel', endDrag);

      panContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 1.15 : 0.85;
        this.applyZoom(delta);
      }, { passive: false });
    }
  }

  switchView(view) {
    this.currentViewMode = view;
    const schematicLayer = document.getElementById('schematic-layer');
    const officialLayer = document.getElementById('official-layer');

    if (view === 'schematic') {
      schematicLayer.classList.add('active');
      officialLayer.classList.remove('active');
    } else {
      schematicLayer.classList.remove('active');
      officialLayer.classList.add('active');
    }
    this.resetMap();
  }

  applyZoom(factor) {
    this.zoomLevel = Math.max(0.6, Math.min(this.zoomLevel * factor, 4.0));
    this.updateTransform();
  }

  updateTransform() {
    if (this.currentViewMode === 'schematic') {
      const svg = document.getElementById('transit-svg');
      if (svg) {
        svg.style.transform = `scale(${this.zoomLevel})`;
        svg.style.transformOrigin = 'center center';
      }
    } else {
      const img = document.getElementById('official-map-img');
      if (img) {
        img.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoomLevel})`;
      }
    }
  }

  resetMap() {
    this.zoomLevel = 1;
    this.panX = 0;
    this.panY = 0;
    this.updateTransform();
  }

  toggleFullscreen() {
    const wrapper = document.getElementById('map-wrapper');
    if (!wrapper) return;
    const isFs = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    if (!isFs) {
      if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen().catch(err => console.warn(err));
      } else if (wrapper.webkitRequestFullscreen) {
        wrapper.webkitRequestFullscreen();
      } else if (wrapper.mozRequestFullScreen) {
        wrapper.mozRequestFullScreen();
      } else if (wrapper.msRequestFullscreen) {
        wrapper.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(err => console.warn(err));
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
}

// Global Export
if (typeof window !== 'undefined') {
  window.JakartaMapEngine = JakartaMapEngine;
}
