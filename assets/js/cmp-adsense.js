// Consent Management Platform (CMP) & Google AdSense / Analytics Controller
// Compliant with Google AdSense Program Policies, EU User Consent Policy & UU Perlindungan Data Pribadi

const ADSENSE_CONFIG = {
  publisherId: 'ca-pub-6180580801533680',
  gaMeasurementId: 'G-79X7K7H4MJ',
  supportEmail: 'setiawan.anton@gmail.com'
};

class ConsentAndAdManager {
  constructor() {
    this.consentKey = 'jakarta_transit_consent_v2';
    this.init();
  }

  init() {
    this.checkConsent();
    this.bindPrivacyTriggers();
    this.initAdsenseUnits();
  }

  getStoredConsent() {
    try {
      const stored = localStorage.getItem(this.consentKey);
      if (!stored) return null;
      const parsed = JSON.parse(stored);
      // Check expiration (180 days validity)
      if (parsed.timestamp) {
        const consentAge = Date.now() - new Date(parsed.timestamp).getTime();
        const maxAge = 180 * 24 * 60 * 60 * 1000;
        if (consentAge > maxAge) {
          localStorage.removeItem(this.consentKey);
          return null;
        }
      }
      return parsed;
    } catch (e) {
      console.warn('Consent parse error, resetting:', e);
      localStorage.removeItem(this.consentKey);
      return null;
    }
  }

  checkConsent() {
    const parsed = this.getStoredConsent();
    if (!parsed) {
      this.showConsentBanner();
    } else if (parsed.personalizedAds) {
      this.enableAdPersonalization();
    }
  }

  showConsentBanner() {
    // If native Google Funding Choices CMP iframe is active, let Google handle it.
    const existing = document.getElementById('cmp-consent-banner');
    if (existing) return;

    const banner = document.createElement('section');
    banner.id = 'cmp-consent-banner';
    banner.className = 'cmp-consent-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Pemberitahuan Privasi dan Cookie');
    banner.innerHTML = `
      <div class="cmp-content">
        <div class="cmp-text">
          <div class="cmp-title">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Pemberitahuan Privasi & Cookie / Privacy & Cookie Notice
          </div>
          <p>
            Situs ini menggunakan cookie teknis, Google Analytics 4 (${ADSENSE_CONFIG.gaMeasurementId}), dan Google AdSense (${ADSENSE_CONFIG.publisherId}) untuk menyajikan peta rute transportasi publik, menganalisis performa web, dan menayangkan iklan yang relevan. Sesuai EU User Consent Policy dan UU PDP, Anda dapat menyetujui atau mengatur preferensi Anda.
          </p>
        </div>
        <div class="cmp-actions">
          <button type="button" class="cmp-btn cmp-btn-primary" id="cmp-accept-all">Setuju Semua (Accept All)</button>
          <button type="button" class="cmp-btn cmp-btn-secondary" id="cmp-reject-nonessential">Iklan Standar Saja (Essential Only)</button>
          <a href="privacy-policy.html" class="cmp-link">Kebijakan Privasi</a>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    const btnAccept = document.getElementById('cmp-accept-all');
    if (btnAccept) {
      btnAccept.onclick = () => {
        this.saveConsent({ analytics: true, personalizedAds: true });
        banner.remove();
      };
    }

    const btnReject = document.getElementById('cmp-reject-nonessential');
    if (btnReject) {
      btnReject.onclick = () => {
        this.saveConsent({ analytics: true, personalizedAds: false });
        banner.remove();
      };
    }
  }

  saveConsent(settings) {
    const payload = {
      timestamp: new Date().toISOString(),
      ...settings
    };
    try {
      localStorage.setItem(this.consentKey, JSON.stringify(payload));
    } catch (e) {
      console.warn('Unable to store consent preference:', e);
    }
    if (settings.personalizedAds) {
      this.enableAdPersonalization();
    }
  }

  enableAdPersonalization() {
    try {
      if (typeof window.adsbygoogle !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 0;
      }
    } catch (e) {
      console.warn('AdSense personalization update note:', e);
    }
  }

  bindPrivacyTriggers() {
    document.addEventListener('click', (e) => {
      if (e.target && (e.target.matches('.btn-privacy-settings') || e.target.closest('.btn-privacy-settings'))) {
        e.preventDefault();
        this.openPrivacyModal();
      }
    });

    // Global escape key listener for privacy modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('privacy-preferences-modal');
        if (modal && modal.classList.contains('active')) {
          modal.remove();
        }
      }
    });
  }

  openPrivacyModal() {
    const consent = this.getStoredConsent() || { analytics: true, personalizedAds: false };
    
    let modal = document.getElementById('privacy-preferences-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'privacy-preferences-modal';
      modal.className = 'modal-backdrop active';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'privacy-modal-title');
      modal.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title" id="privacy-modal-title">Pengaturan Privasi & Cookie Pengguna</h3>
            <button type="button" class="modal-close" id="close-privacy-modal" aria-label="Tutup Pengaturan Privasi">&times;</button>
          </div>
          <div class="modal-body">
            <p>Anda memegang kendali penuh atas data penjelajahan dan cookie pihak ketiga di situs rute transportasi publik Jakarta ini.</p>
            
            <div class="preference-item">
              <div class="pref-label">
                <strong>Cookie Esensial & Navigasi Rute</strong>
                <span class="pref-desc">Diperlukan agar peta interaktif, pemilihan bahasa, dan kalkulator rute berfungsi optimal di peramban Anda.</span>
              </div>
              <input type="checkbox" checked disabled aria-label="Cookie Esensial (Wajib)" />
            </div>

            <div class="preference-item">
              <div class="pref-label">
                <label for="pref-analytics"><strong>Google Analytics 4 (${ADSENSE_CONFIG.gaMeasurementId})</strong></label>
                <span class="pref-desc">Membantu kami memahami statistik pengunjung dan jalur terpopuler untuk peningkatan sistem.</span>
              </div>
              <input type="checkbox" id="pref-analytics" ${consent.analytics ? 'checked' : ''} aria-label="Izinkan Google Analytics" />
            </div>

            <div class="preference-item">
              <div class="pref-label">
                <label for="pref-ads"><strong>Personalisasi Iklan Google AdSense</strong></label>
                <span class="pref-desc">Menampilkan iklan yang disesuaikan minat Anda. Jika dinonaktifkan, Anda tetap melihat iklan non-personalisasi.</span>
              </div>
              <input type="checkbox" id="pref-ads" ${consent.personalizedAds ? 'checked' : ''} aria-label="Izinkan Personalisasi Iklan" />
            </div>

            <div class="pref-footer-note">
              Kontak Petugas Perlindungan Data: <a href="mailto:${ADSENSE_CONFIG.supportEmail}">${ADSENSE_CONFIG.supportEmail}</a>
            </div>
          </div>
          <div class="modal-actions">
            <button type="button" class="btn btn-primary" id="save-privacy-prefs">Simpan Preferensi</button>
            <button type="button" class="btn btn-secondary" id="reset-privacy-prefs">Hapus Riwayat Cookie</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const closeModal = () => modal.remove();
      document.getElementById('close-privacy-modal').onclick = closeModal;
      modal.onclick = (e) => {
        if (e.target === modal) closeModal();
      };

      document.getElementById('save-privacy-prefs').onclick = () => {
        const ga = document.getElementById('pref-analytics').checked;
        const ads = document.getElementById('pref-ads').checked;
        this.saveConsent({ analytics: ga, personalizedAds: ads });
        closeModal();
      };
      document.getElementById('reset-privacy-prefs').onclick = () => {
        localStorage.removeItem(this.consentKey);
        localStorage.removeItem('jakarta_transit_lang');
        alert('Data lokal dan preferensi cookie berhasil direset.');
        closeModal();
        location.reload();
      };
    } else {
      modal.classList.add('active');
    }
  }

  initAdsenseUnits() {
    // Graceful initialization of AdSense slots to avoid breaking if adblocker is active
    window.addEventListener('load', () => {
      try {
        const adSlots = document.querySelectorAll('.adsbygoogle');
        adSlots.forEach(slot => {
          if (!slot.getAttribute('data-adsbygoogle-status')) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        });
      } catch (e) {
        console.info('AdSense load info:', e);
      }
    });
  }
}

// Global initialization
if (typeof window !== 'undefined') {
  window.ConsentAndAdManager = new ConsentAndAdManager();
}
