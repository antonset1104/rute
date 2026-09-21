// Main Application Controller for Jakarta Transit Integration Portal

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Route Planner & Map Engine
  if (typeof window.TRANSIT_DATA === 'undefined') {
    console.error('TRANSIT_DATA not loaded');
    return;
  }

  const transitData = window.TRANSIT_DATA;
  const planner = new RoutePlanner(transitData);
  const mapEngine = new JakartaMapEngine('map-container-root', transitData);

  // 2. Populate Origin & Destination Select dropdowns
  const originSelect = document.getElementById('route-origin');
  const destSelect = document.getElementById('route-dest');

  if (originSelect && destSelect) {
    // Group stations by primary mode / system for clean navigation
    const modeGroups = {
      'mrt': { label: '🚇 MRT Jakarta (Lin Utara-Selatan)', stations: [] },
      'lrt_jdb': { label: '🚝 LRT Jabodebek (Lin Cibubur & Bekasi)', stations: [] },
      'lrt_jkt': { label: '🚈 LRT Jakarta (Kelapa Gading - Velodrome)', stations: [] },
      'krl': { label: '🚆 KRL Commuter Line Jabodetabek', stations: [] },
      'whoosh': { label: '🚅 Kereta Cepat Whoosh Jakarta-Bandung', stations: [] },
      'ka_bandara': { label: '✈️ KA Bandara Soekarno-Hatta (SHIA)', stations: [] },
      'tj': { label: '🚌 TransJakarta BRT (Halte & Terminal Utama)', stations: [] }
    };

    transitData.stations.forEach(st => {
      let primaryMode = 'tj';
      if (st.modes.includes('MRT')) primaryMode = 'mrt';
      else if (st.modes.includes('LRT Jabodebek')) primaryMode = 'lrt_jdb';
      else if (st.modes.includes('LRT Jakarta')) primaryMode = 'lrt_jkt';
      else if (st.modes.includes('Whoosh')) primaryMode = 'whoosh';
      else if (st.modes.includes('KA Bandara')) primaryMode = 'ka_bandara';
      else if (st.modes.includes('KRL')) primaryMode = 'krl';
      else if (st.modes.includes('TransJakarta')) primaryMode = 'tj';

      if (modeGroups[primaryMode]) {
        modeGroups[primaryMode].stations.push(st);
      }
    });

    originSelect.innerHTML = '';
    destSelect.innerHTML = '';

    Object.values(modeGroups).forEach(group => {
      if (group.stations.length === 0) return;
      const grpOrigin = document.createElement('optgroup');
      grpOrigin.label = group.label;
      const grpDest = document.createElement('optgroup');
      grpDest.label = group.label;

      group.stations.sort((a, b) => a.name.localeCompare(b.name)).forEach(st => {
        const optOrigin = document.createElement('option');
        optOrigin.value = st.id;
        optOrigin.textContent = `${st.name} (${st.city})`;
        grpOrigin.appendChild(optOrigin);

        const optDest = document.createElement('option');
        optDest.value = st.id;
        optDest.textContent = `${st.name} (${st.city})`;
        grpDest.appendChild(optDest);
      });

      originSelect.appendChild(grpOrigin);
      destSelect.appendChild(grpDest);
    });

    // Default selection: Lebak Bulus to Bundaran HI
    originSelect.value = 'lebak_bulus';
    destSelect.value = 'bundaran_hi';

    // Deep linking from tourism and station directory
    const urlParams = new URLSearchParams(window.location.search);
    const paramOrigin = urlParams.get('origin');
    const paramDest = urlParams.get('dest');

    if (paramOrigin && transitData.stations.some(s => s.id === paramOrigin)) {
      originSelect.value = paramOrigin;
    }
    if (paramDest && transitData.stations.some(s => s.id === paramDest)) {
      destSelect.value = paramDest;
    }
    if (paramOrigin || paramDest) {
      setTimeout(() => executeRouteSearch(), 200);
    }
  }

  // 3. Swap Origin and Destination
  const btnSwap = document.getElementById('btn-swap-route');
  if (btnSwap) {
    btnSwap.addEventListener('click', () => {
      const temp = originSelect.value;
      originSelect.value = destSelect.value;
      destSelect.value = temp;
    });
  }

  // 4. Quick Destination Chips
  const chipButtons = document.querySelectorAll('.chip-btn');
  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target-station');
      if (destSelect && targetId) {
        destSelect.value = targetId;
        executeRouteSearch();
      }
    });
  });

  // 5. Search Route Execution
  const btnFind = document.getElementById('btn-find-route');
  if (btnFind) {
    btnFind.addEventListener('click', executeRouteSearch);
  }

  function executeRouteSearch() {
    const originId = originSelect.value;
    const destId = destSelect.value;

    if (!originId || !destId) {
      alert('Pilih stasiun keberangkatan dan tujuan terlebih dahulu.');
      return;
    }

    if (originId === destId) {
      alert('Stasiun asal dan tujuan sama. Pilih stasiun yang berbeda.');
      return;
    }

    const route = planner.findRoute(originId, destId);
    renderRouteResult(route);
    mapEngine.highlightRoute(route);
  }

  function renderRouteResult(route) {
    const container = document.getElementById('route-result-container');
    if (!container || !route) return;

    const timeEl = document.getElementById('route-est-time');
    const fareEl = document.getElementById('route-est-fare');
    const transfersEl = document.getElementById('route-est-transfers');
    const timelineEl = document.getElementById('route-timeline-steps');

    if (timeEl) timeEl.textContent = `${route.durationMinutes} Menit`;
    if (fareEl) fareEl.textContent = route.estimatedFare.fareText;
    if (transfersEl) transfersEl.textContent = `${route.transfers}x`;

    if (timelineEl) {
      timelineEl.innerHTML = route.steps.map((step, idx) => {
        let markerClass = '';
        if (step.type === 'depart') markerClass = 'origin';
        else if (step.type === 'arrive') markerClass = 'dest';
        else if (step.type === 'transfer') markerClass = 'transfer';

        let badge = '';
        if (step.line) {
          badge = `<span class="mode-badge" style="background:${step.line.color}; color:${step.line.textColor || '#fff'}">${step.line.name}</span>`;
        }

        return `
          <li class="route-step-item">
            <div class="step-marker ${markerClass}"></div>
            <div class="step-body">
              <div class="step-action-title">${step.text} ${badge}</div>
              ${step.duration ? `<div class="step-subtext">Estimasi perjalanan ~${step.duration} menit</div>` : ''}
              ${step.station && step.station.transfers ? `<div class="step-subtext">Koneksi: ${step.station.transfers.join(', ')}</div>` : ''}
            </div>
          </li>
        `;
      }).join('');
    }

    container.classList.add('show');
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // 6. Mode Filter Buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      mapEngine.filterByMode(mode);
    });
  });

  // 7. Render Transit Hubs Grid
  const hubsContainer = document.getElementById('transit-hubs-grid');
  if (hubsContainer) {
    const keyHubs = transitData.stations.filter(s => s.isHub).slice(0, 12);
    hubsContainer.innerHTML = keyHubs.map(hub => {
      return `
        <article class="hub-card" id="card-${hub.id}">
          <div class="hub-header">
            <div>
              <h3 class="hub-name">${hub.name}</h3>
              <div class="hub-location">📍 ${hub.city}</div>
            </div>
          </div>
          <div class="hub-modes-list">
            ${hub.modes.map(m => `<span class="mode-badge badge-${m.toLowerCase().replace(/[^a-z]/g, '')}">${m}</span>`).join(' ')}
          </div>
          <p class="hub-desc">${hub.description}</p>
          <div class="hub-transfers-label">Jalur & Halte Penghubung:</div>
          <div class="hub-transfers-tags">
            ${hub.transfers.map(t => `<span class="transfer-tag">⇄ ${t}</span>`).join(' ')}
          </div>
        </article>
      `;
    }).join('');
  }

  // 8. Render Tourism Grid
  const tourismContainer = document.getElementById('tourism-cards-grid');
  if (tourismContainer) {
    tourismContainer.innerHTML = transitData.landmarks.map(item => {
      return `
        <article class="tourism-card">
          <div class="tourism-category">${item.category}</div>
          <h3 class="tourism-title">${item.name}</h3>
          <p class="tourism-desc">${item.description}</p>
          <div class="tourism-transit-box">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20" style="display:inline;vertical-align:middle"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            ${item.accessMode}
          </div>
        </article>
      `;
    }).join('');
  }

  // 9. Language Dropdown Controller (10 Languages)
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langMenu = document.getElementById('lang-dropdown-menu');

  if (langToggleBtn && langMenu) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langMenu.classList.remove('show');
    });

    const langItems = document.querySelectorAll('.lang-item-btn');
    langItems.forEach(item => {
      item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        if (window.i18n) {
          window.i18n.setLanguage(lang);
        }
        langMenu.classList.remove('show');
      });
    });
  }

  // 10. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
    });
  }

  // 11. Modal Close handler & Escape key accessibility
  const stationModal = document.getElementById('station-modal');
  const closeStationModal = document.getElementById('close-station-modal');
  if (stationModal && closeStationModal) {
    const hideModal = () => stationModal.classList.remove('active');
    closeStationModal.addEventListener('click', hideModal);
    stationModal.addEventListener('click', (e) => {
      if (e.target === stationModal) hideModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && stationModal.classList.contains('active')) {
        hideModal();
      }
    });
  }

  // 12. Smooth scroll to interactive map when clicking Peta Interaktif link
  const mapNavLinks = document.querySelectorAll('a[href="#interactive-map-section"]');
  mapNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const mapSection = document.getElementById('interactive-map-section');
      if (mapSection) {
        e.preventDefault();
        mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navMenu) navMenu.classList.remove('mobile-active');
      }
    });
  });
});
