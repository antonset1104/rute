# Peta & Rute Integrasi Transportasi Umum Jakarta (Jabodetabek)

Portal web interaktif dan dinamis untuk panduan rute transportasi umum terintegrasi di wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi (Jabodetabek).

Dibangun berdasarkan Peta Integrasi Resmi Transportasi Jakarta yang mengintegrasikan 8 moda transportasi utama:
1. **MRT Jakarta** (Lin Utara-Selatan & Bundaran HI)
2. **LRT Jabodebek** (Lin Cibubur & Lin Bekasi)
3. **LRT Jakarta** (Kelapa Gading - Velodrome)
4. **KRL Commuter Line** (Lin Bogor, Cikarang, Rangkasbitung, Tangerang, Tanjung Priok)
5. **Kereta Cepat Whoosh KCIC** (Halim - Padalarang - Tegalluar)
6. **KA Bandara SHIA Railink** (Manggarai - BNI City - Bandara Soekarno-Hatta)
7. **TransJakarta BRT** (14 Koridor Utama Terintegrasi)
8. **Mikrotrans JakLingko** (Angkutan Pengumpan / Feeder)

---

## 🌟 Fitur Utama

- **Kalkulator & Rekomendasi Rute Antarmoda:** Algoritma graf teroptimasi (Dijkstra) untuk menghitung estimasi waktu perjalanan, rute transit tercepat, jumlah transfer moda, dan perkiraan tarif antar-simpul integrasi.
- **Peta Vektor Interaktif (SVG):** Visualisasi skematik jalur dan stasiun/halte dengan penandaan visual, indikator denyut simpul (*pulsing hubs*), dan filter per-moda transportasi.
- **Peta Integrasi Resmi Beresolusi Tinggi (HD):** Mode tampilan peta resmi dengan fitur *pan & zoom* berbasis *Pointer Events* dengan akselerasi GPU.
- **Dukungan 10 Bahasa Utama Dunia (i18n):**
  - 🇮🇩 Bahasa Indonesia (Bawaan)
  - 🇬🇧 English
  - 🇨🇳 简体中文 (Chinese Simplified)
  - 🇯🇵 日本語 (Japanese)
  - 🇰🇷 한국어 (Korean)
  - 🇸🇦 العربية (Arabic - Dukungan Penuh Layout RTL)
  - 🇪🇸 Español (Spanish)
  - 🇫🇷 Français (French)
  - 🇩🇪 Deutsch (German)
  - 🇷🇺 Русский (Russian)
- **Kepatuhan Privasi (GDPR & UU PDP):** Dilengkapi sistem *Consent Management Platform* (CMP) mandiri dan terintegrasi dengan Google Funding Choices serta dialog preferensi cookie.
- **Monetisasi & Analitik Resmi:**
  - Google AdSense terintegrasi (`ca-pub-6180580801533680`)
  - Google Analytics 4 terkonfigurasi (`G-79X7K7H4MJ`)
  - Berkas validasi `ads.txt`
- **SEO Lengkap & Valid:**
  - Tag kanonikal dan 11 varian `hreflang` pada seluruh halaman
  - Skema data terstruktur JSON-LD (`TransitMap`, `FAQPage`, `Organization`)
  - Berkas `sitemap.xml` dan `robots.txt`
- **Aksesibilitas Web (WCAG 2.2 Level AA):**
  - Navigasi penuh via papan ketik (*focus-visible*, shortcut Escape)
  - Pelabelan semantik ARIA dan kompatibilitas pembaca layar (*screen reader*)

---

## 📂 Struktur Proyek

```
.
├── index.html              # Halaman Utama (Peta Interaktif & Pencari Rute)
├── stations.html           # Direktori Stasiun & Simpul Transit
├── lines.html              # Direktori Jalur & Koridor Transportasi
├── fares.html              # Panduan Tarif & Integrasi JakLingko
├── tourism.html            # Panduan Wisata Transit Jakarta
├── privacy-policy.html     # Kebijakan Privasi (GDPR & UU PDP)
├── terms.html              # Syarat & Ketentuan Penggunaan
├── contact.html            # Kontak Pengelola Portal
├── ads.txt                 # Verifikasi Otorisasi Google AdSense
├── robots.txt              # Konfigurasi Perayap Mesin Pencari
├── sitemap.xml             # Peta Situs Multi-Bahasa
└── assets/
    ├── css/
    │   ├── main.css        # Tata Letak & Sistem Desain (Design System)
    │   ├── map.css         # Gaya Peta Vektor & Pan-Zoom
    │   └── rtl.css         # Aturan Tata Letak Kanan-ke-Kiri (Bahasa Arab)
    ├── data/
    │   └── transit-data.js # Basis Data Terpadu Jalur, Stasiun, Tarif & Hub
    ├── js/
    │   ├── i18n.js         # Pengontrol Internasionalisasi 10 Bahasa
    │   ├── route-planner.js# Algoritma Pencarian Jalur Graf Dijkstra
    │   ├── map-engine.js   # Mesin Peta SVG & Pan-Zoom
    │   ├── cmp-adsense.js  # Pengelola Konsen & Google AdSense/GA4
    │   └── app.js          # Inisialisasi & Pengendali Interaksi UI
    └── images/
        ├── favicon.svg     # Ikon Situs
        └── peta-integrasi.jpg # Peta Integrasi Resmi Jabodetabek HD
```

---

## 🚀 Cara Menjalankan

Situs ini dibangun menggunakan murni standar web modern (**Pure HTML5, CSS3, ES6 JavaScript**) tanpa ketergantungan *build step* atau dependensi runtime berat.

### Menjalankan secara Lokal:

1. Klon repositori ini:
   ```bash
   git clone https://github.com/antonset1104/rute.git
   cd rute
   ```

2. Jalankan server lokal sederhana (misal menggunakan Python):
   ```bash
   python3 -m http.server 8000
   ```

3. Buka peramban Anda di:
   ```
   http://localhost:8000
   ```

---

## 📜 Lisensi & Atribusi Data

- Hak Cipta © 2026 Peta Integrasi Transportasi Jakarta. Seluruh hak cipta dilindungi.
- Data rute dan peta integrasi mengacu pada publikasi resmi Dinas Perhubungan DKI Jakarta, PT MRT Jakarta, PT LRT Jakarta, PT Kereta Commuter Indonesia (KAI Commuter), PT Kereta Cepat Indonesia China (KCIC), dan PT Transportasi Jakarta.
