// Jakarta Integrated Public Transit Data
// Sources: MRT Jakarta, LRT Jabodebek, LRT Jakarta, KAI Commuter, KCIC Whoosh, TransJakarta, JakLingko

const TRANSIT_DATA = {
  systems: [
    { id: 'mrt', name: 'MRT Jakarta', operator: 'PT MRT Jakarta', color: '#005baa', badge: 'MRT' },
    { id: 'lrt_jkt', name: 'LRT Jakarta', operator: 'PT LRT Jakarta', color: '#e11d48', badge: 'LRT' },
    { id: 'lrt_jdb', name: 'LRT Jabodebek', operator: 'PT Kereta Api Indonesia', color: '#0284c7', badge: 'LRT' },
    { id: 'krl', name: 'KAI Commuter', operator: 'KAI Commuter', color: '#dc2626', badge: 'KRL' },
    { id: 'whoosh', name: 'Kereta Cepat Whoosh', operator: 'PT KCIC', color: '#881337', badge: 'KCIC' },
    { id: 'ka_bandara', name: 'KA Bandara Soekarno-Hatta', operator: 'KAI Bandara', color: '#1e3a8a', badge: 'AIR' },
    { id: 'tj', name: 'TransJakarta BRT', operator: 'PT Transportasi Jakarta', color: '#ea580c', badge: 'TJ' },
    { id: 'jaklingko', name: 'JakLingko / Mikrotrans', operator: 'Dishub DKI Jakarta', color: '#16a34a', badge: 'JL' }
  ],

  lines: [
    // --- MRT ---
    {
      id: 'mrt_ns',
      system: 'mrt',
      name: 'North-South Line',
      code: 'M',
      color: '#d92d20',
      textColor: '#ffffff',
      from: 'Lebak Bulus Grab',
      to: 'Bundaran HI Bank DKI',
      operatingHours: '05:00 - 24:00 (Hari Kerja: tiap 5-10 mnt)',
      baseFare: 3000,
      maxFare: 14000,
      stations: [
        'lebak_bulus', 'fatmawati', 'cipete_raya', 'haji_nawi', 'blok_a',
        'blok_m', 'asean', 'senayan', 'istora', 'bendungan_hilir',
        'setiabudi_astra', 'dukuh_atas_mrt', 'bundaran_hi'
      ]
    },

    // --- LRT JAKARTA ---
    {
      id: 'lrt_jkt_1',
      system: 'lrt_jkt',
      name: 'LRT Jakarta Line 1',
      code: 'S',
      color: '#e11d48',
      textColor: '#ffffff',
      from: 'Pegangsaan Dua',
      to: 'Velodrome',
      operatingHours: '05:30 - 23:00 (Headway 10 mnt)',
      flatFare: 5000,
      stations: [
        'pegangsaan_dua', 'boulevard_utara', 'boulevard_selatan',
        'pulomas', 'equestrian', 'velodrome'
      ]
    },

    // --- LRT JABODEBEK ---
    {
      id: 'lrt_cibubur',
      system: 'lrt_jdb',
      name: 'Cibubur Line',
      code: 'CB',
      color: '#0284c7',
      textColor: '#ffffff',
      from: 'Dukuh Atas',
      to: 'Harjamukti',
      operatingHours: '05:15 - 23:00 (Headway 10-20 mnt)',
      baseFare: 5000,
      maxFare: 20000,
      stations: [
        'dukuh_atas_lrt', 'setiabudi_lrt', 'rasuna_said', 'kuningan', 'pancoran',
        'cikoko', 'ciliwung', 'cawang', 'tmii', 'kampung_rambutan', 'ciracas', 'harjamukti'
      ]
    },
    {
      id: 'lrt_bekasi',
      system: 'lrt_jdb',
      name: 'Bekasi Line',
      code: 'BK',
      color: '#0d9488',
      textColor: '#ffffff',
      from: 'Dukuh Atas',
      to: 'Jati Mulya',
      operatingHours: '05:30 - 23:00 (Headway 10-20 mnt)',
      baseFare: 5000,
      maxFare: 20000,
      stations: [
        'dukuh_atas_lrt', 'setiabudi_lrt', 'rasuna_said', 'kuningan', 'pancoran',
        'cikoko', 'ciliwung', 'cawang', 'halim_lrt', 'jatibening_baru',
        'cikunir_1', 'cikunir_2', 'bekasi_barat', 'jati_mulya'
      ]
    },

    // --- KAI COMMUTER ---
    {
      id: 'krl_bogor',
      system: 'krl',
      name: 'Bogor Line (Red)',
      code: 'B',
      color: '#dc2626',
      textColor: '#ffffff',
      from: 'Jakarta Kota',
      to: 'Bogor / Nambo',
      operatingHours: '04:00 - 24:00 (Headway 5-15 mnt)',
      baseFare: 3000,
      stations: [
        'jakarta_kota', 'jayakarta', 'mangga_besar', 'sawah_besar', 'juanda',
        'gondangdia', 'cikini', 'manggarai', 'tebet', 'cawang_krl', 'duren_kalibata',
        'pasar_minggu_baru', 'pasar_minggu', 'tanjung_barat', 'lenteng_agung',
        'univ_pancasila', 'univ_indonesia', 'pondok_cina', 'depok_baru', 'depok',
        'citayam', 'bojong_gede', 'cilebut', 'bogor'
      ]
    },
    {
      id: 'krl_cikarang',
      system: 'krl',
      name: 'Cikarang Loop Line (Blue)',
      code: 'C',
      color: '#2563eb',
      textColor: '#ffffff',
      from: 'Cikarang',
      to: 'Kampung Bandan / Angke / Manggarai (Loop)',
      operatingHours: '04:30 - 23:30 (Headway 10-20 mnt)',
      baseFare: 3000,
      stations: [
        'cikarang', 'tambun', 'bekasi_timur', 'bekasi', 'kranji', 'cakung',
        'klender_baru', 'buaran', 'klender', 'jatinegara', 'matraman', 'manggarai',
        'sudirman', 'bni_city', 'karet', 'tanah_abang', 'duri', 'angke',
        'kampung_bandan', 'rajawali', 'kemayoran', 'pasar_senen', 'gang_sentiong',
        'kramat', 'pondok_jati'
      ]
    },
    {
      id: 'krl_rangkas',
      system: 'krl',
      name: 'Rangkasbitung Line (Green)',
      code: 'R',
      color: '#16a34a',
      textColor: '#ffffff',
      from: 'Tanah Abang',
      to: 'Rangkasbitung',
      operatingHours: '04:30 - 23:30 (Headway 10-15 mnt)',
      baseFare: 3000,
      stations: [
        'tanah_abang', 'palmerah', 'kebayoran', 'pondok_ranji', 'jurang_mangu',
        'sudimara', 'rawa_buntu', 'serpong', 'cisauk', 'cicayur', 'parung_panjang',
        'cilejit', 'daru', 'tenjo', 'tigaraksa', 'cikoya', 'maja', 'citeras', 'rangkasbitung'
      ]
    },
    {
      id: 'krl_tangerang',
      system: 'krl',
      name: 'Tangerang Line (Brown)',
      code: 'T',
      color: '#ca8a04',
      textColor: '#ffffff',
      from: 'Duri',
      to: 'Tangerang',
      operatingHours: '04:30 - 23:30 (Headway 15 mnt)',
      baseFare: 3000,
      stations: [
        'duri', 'grogol', 'pesing', 'taman_kota', 'bojong_indah', 'rawa_buaya',
        'kalideres_krl', 'poris', 'batu_ceper', 'tanah_tinggi', 'tangerang'
      ]
    },
    {
      id: 'krl_priok',
      system: 'krl',
      name: 'Tanjung Priok Line (Pink)',
      code: 'TP',
      color: '#db2777',
      textColor: '#ffffff',
      from: 'Jakarta Kota',
      to: 'Tanjung Priok',
      operatingHours: '05:30 - 20:00 (Headway 30 mnt)',
      baseFare: 3000,
      stations: ['jakarta_kota', 'kampung_bandan', 'ancol', 'tanjung_priok']
    },

    // --- WHOOSH BULLET TRAIN ---
    {
      id: 'whoosh_hsr',
      system: 'whoosh',
      name: 'Whoosh Kereta Cepat Jakarta-Bandung',
      code: 'KC',
      color: '#881337',
      textColor: '#ffffff',
      from: 'Halim (Jakarta)',
      to: 'Tegalluar (Bandung)',
      operatingHours: '06:00 - 21:00 (Durasi 30-45 mnt)',
      baseFare: 150000,
      maxFare: 300000,
      stations: ['halim_whoosh', 'karawang', 'padalarang', 'tegalluar']
    },

    // --- AIRPORT TRAIN ---
    {
      id: 'ka_bandara_shia',
      system: 'ka_bandara',
      name: 'KA Bandara Soekarno-Hatta (SHIA Express)',
      code: 'A',
      color: '#1e3a8a',
      textColor: '#ffffff',
      from: 'Manggarai',
      to: 'Bandara Soekarno-Hatta',
      operatingHours: '05:00 - 21:30 (Headway 30 mnt)',
      baseFare: 30000,
      maxFare: 70000,
      stations: ['manggarai', 'bni_city', 'duri', 'rawa_buaya', 'batu_ceper', 'bandara_shia']
    },

    // --- TRANSJAKARTA BRT CORRIDORS ---
    {
      id: 'tj_1',
      system: 'tj',
      name: 'Koridor 1: Blok M - Kota',
      code: '1',
      color: '#dc2626',
      textColor: '#ffffff',
      from: 'Blok M',
      to: 'Kota',
      operatingHours: '24 Jam (Malam 22:00-05:00 Amari)',
      flatFare: 3500,
      stations: ['blok_m', 'asean', 'senayan', 'istora', 'bendungan_hilir', 'dukuh_atas_tj', 'bundaran_hi_tj', 'monas', 'harmoni', 'sawah_besar_tj', 'mangga_besar_tj', 'glodok', 'jakarta_kota']
    },
    {
      id: 'tj_2',
      system: 'tj',
      name: 'Koridor 2: Pulo Gadung - Monas',
      code: '2',
      color: '#0284c7',
      textColor: '#ffffff',
      from: 'Pulo Gadung 1',
      to: 'Monas',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['pulogadung', 'cempaka_timur', 'senen', 'juanda', 'monas']
    },
    {
      id: 'tj_3',
      system: 'tj',
      name: 'Koridor 3: Kalideres - Monas via Veteran',
      code: '3',
      color: '#eab308',
      textColor: '#000000',
      from: 'Kalideres',
      to: 'Monas',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['kalideres_tj', 'rawa_buaya_tj', 'grogol', 'harmoni', 'monas']
    },
    {
      id: 'tj_4',
      system: 'tj',
      name: 'Koridor 4: Pulo Gadung - Galunggung',
      code: '4',
      color: '#9333ea',
      textColor: '#ffffff',
      from: 'Pulo Gadung 2',
      to: 'Galunggung (Dukuh Atas)',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['pulogadung', 'pemuda_rawamangun', 'pramuka', 'matraman', 'manggarai', 'galunggung']
    },
    {
      id: 'tj_5',
      system: 'tj',
      name: 'Koridor 5: Kampung Melayu - Ancol',
      code: '5',
      color: '#ea580c',
      textColor: '#ffffff',
      from: 'Kampung Melayu',
      to: 'Ancol',
      operatingHours: '24 Jam',
      flatFare: 3500,
      stations: ['kampung_melayu', 'matraman', 'senen', 'pasar_baru', 'mangga_dua', 'ancol']
    },
    {
      id: 'tj_6',
      system: 'tj',
      name: 'Koridor 6: Ragunan - Galunggung',
      code: '6',
      color: '#16a34a',
      textColor: '#ffffff',
      from: 'Ragunan',
      to: 'Galunggung (Dukuh Atas)',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['ragunan', 'mampang_prapatan', 'kuningan', 'rasuna_said_tj', 'galunggung']
    },
    {
      id: 'tj_7',
      system: 'tj',
      name: 'Koridor 7: Kampung Rambutan - Kampung Melayu',
      code: '7',
      color: '#ec4899',
      textColor: '#ffffff',
      from: 'Kampung Rambutan',
      to: 'Kampung Melayu',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['kampung_rambutan', 'pasar_rebo', 'pgc', 'cawang_otista', 'kampung_melayu']
    },
    {
      id: 'tj_8',
      system: 'tj',
      name: 'Koridor 8: Lebak Bulus - Pasar Baru',
      code: '8',
      color: '#84cc16',
      textColor: '#000000',
      from: 'Lebak Bulus',
      to: 'Pasar Baru',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['lebak_bulus', 'pondok_indah', 'kebayoran_lama', 'grogol', 'harmoni', 'pasar_baru']
    },
    {
      id: 'tj_9',
      system: 'tj',
      name: 'Koridor 9: Pinang Ranti - Pluit',
      code: '9',
      color: '#06b6d4',
      textColor: '#ffffff',
      from: 'Pinang Ranti',
      to: 'Pluit',
      operatingHours: '24 Jam',
      flatFare: 3500,
      stations: ['pinang_ranti', 'tamini', 'cawang', 'pancoran', 'gatot_subroto', 'semanggi', 'slipi', 'grogol', 'pluit']
    },
    {
      id: 'tj_10',
      system: 'tj',
      name: 'Koridor 10: PGC 2 - Tanjung Priok',
      code: '10',
      color: '#6366f1',
      textColor: '#ffffff',
      from: 'PGC Cililitan',
      to: 'Tanjung Priok',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['pgc', 'cawang_sutoyo', 'pedati_prumpung', 'cempaka_putih', 'sunter_kelapa_gading', 'tanjung_priok']
    },
    {
      id: 'tj_11',
      system: 'tj',
      name: 'Koridor 11: Pulo Gebang - Kampung Melayu',
      code: '11',
      color: '#14b8a6',
      textColor: '#ffffff',
      from: 'Terminal Pulo Gebang',
      to: 'Kampung Melayu',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['pulo_gebang', 'kantor_walikota_jaktim', 'buaran_tj', 'klender_tj', 'stasiun_jatinegara', 'kampung_melayu']
    },
    {
      id: 'tj_12',
      system: 'tj',
      name: 'Koridor 12: Penjaringan - Tanjung Priok',
      code: '12',
      color: '#f97316',
      textColor: '#ffffff',
      from: 'Penjaringan / Pluit',
      to: 'Tanjung Priok',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['pluit', 'penjaringan', 'kota_tj', 'mangga_dua', 'gunung_sahari', 'sunter_kelapa_gading', 'tanjung_priok']
    },
    {
      id: 'tj_13',
      system: 'tj',
      name: 'Koridor 13: CBD Ciledug - Tendean (Elevated BRT)',
      code: '13',
      color: '#8b5cf6',
      textColor: '#ffffff',
      from: 'Puri Beta / CBD Ciledug',
      to: 'Tegal Mampang / Tendean',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['cbd_ciledug', 'puri_beta', 'cipulir', 'mayestik', 'csw_integrasi', 'tendean']
    },
    {
      id: 'tj_14',
      system: 'tj',
      name: 'Koridor 14: JIS - Senen Raya',
      code: '14',
      color: '#3b82f6',
      textColor: '#ffffff',
      from: 'Jakarta International Stadium (JIS)',
      to: 'Senen Raya',
      operatingHours: '05:00 - 22:00',
      flatFare: 3500,
      stations: ['jis', 'danau_agung', 'kemayoran_tj', 'tanah_tinggi_tj', 'senen']
    }
  ],

  // Key Intermodal Transit Stations with Coordinates for Interactive Map
  stations: [
    // Hub 1: Dukuh Atas TOD Superhub
    {
      id: 'dukuh_atas_hub',
      name: 'Dukuh Atas TOD / Sudirman Intermodal Hub',
      shortName: 'Dukuh Atas',
      city: 'Jakarta Pusat',
      x: 480,
      y: 420,
      isHub: true,
      modes: ['MRT', 'LRT Jabodebek', 'KRL', 'KA Bandara', 'TransJakarta'],
      lines: ['mrt_ns', 'lrt_cibubur', 'lrt_bekasi', 'krl_cikarang', 'ka_bandara_shia', 'tj_1', 'tj_4', 'tj_6'],
      transfers: ['MRT Dukuh Atas BNI', 'LRT Jabodebek Dukuh Atas', 'KRL Sudirman', 'KA Bandara BNI City', 'TJ Dukuh Atas', 'TJ Galunggung'],
      facilities: ['Jembatan Penyeberangan Multiguna (JPM)', 'Lift/Escalator', 'Musholla', 'Toilet', 'Komersial/Kuliner', 'ATM Center', 'Tap-in Integrasi'],
      nearby: ['Terowongan Kendal', 'Taman Dukuh Atas', 'Wisma BNI 46', 'Grand Indonesia (walking distance)', 'Thamrin City'],
      description: 'Pusat integrasi transportasi tersibuk di Indonesia yang menghubungkan 5 moda utama transportasi publik dalam satu kawasan ramah pejalan kaki.'
    },

    // Hub 2: CSW - ASEAN Intermodal Hub
    {
      id: 'csw_asean_hub',
      name: 'CSW - ASEAN Multilevel Transit Hub',
      shortName: 'CSW / ASEAN',
      city: 'Jakarta Selatan',
      x: 420,
      y: 560,
      isHub: true,
      modes: ['MRT', 'TransJakarta'],
      lines: ['mrt_ns', 'tj_1', 'tj_13', 'tj_6'],
      transfers: ['MRT ASEAN', 'TJ CSW 1 (Koridor 13 Melayang)', 'TJ CSW 2', 'TJ ASEAN', 'TJ Kejaksaan Agung'],
      facilities: ['Skybridge Melayang 5 Lantai', 'Lift Prioritas', 'Musholla', 'Restoran & Coffee Shop', 'Toilet Difabel'],
      nearby: ['Sekretariat ASEAN', 'Kejaksaan Agung RI', 'Taman Literasi Martha Christina Tiahahu', 'Blok M Square'],
      description: 'Mahakarya integrasi layang (multilevel) yang menghubungkan halte TransJakarta Koridor 13 di ketinggian 20 meter dengan stasiun MRT ASEAN di bawah tanah.'
    },

    // Hub 3: Manggarai Central Commuter Station
    {
      id: 'manggarai_hub',
      name: 'Stasiun Sentral Manggarai',
      shortName: 'Manggarai',
      city: 'Jakarta Selatan',
      x: 540,
      y: 460,
      isHub: true,
      modes: ['KRL', 'KA Bandara', 'TransJakarta'],
      lines: ['krl_bogor', 'krl_cikarang', 'ka_bandara_shia', 'tj_4'],
      transfers: ['KRL Bogor Line', 'KRL Cikarang Loop Line', 'KA Bandara Soekarno-Hatta', 'TJ Stasiun Manggarai Koridor 4'],
      facilities: ['Stasiun Dua Tingkat (Double Decker)', 'Lift & Escalator', 'Ruang Menyusui', 'Klinik Kesehatan', 'Area UMKM'],
      nearby: ['Pasaraya Manggarai', 'Kawasan Tebet', 'Pasar Rumput'],
      description: 'Stasiun transit kereta komuter terbesar dan tersibuk di Asia Tenggara, pusat peralihan jalur Bogor, Bekasi/Cikarang, Bandara, dan Kereta Jarak Jauh.'
    },

    // Hub 4: Halim HSR & LRT Hub
    {
      id: 'halim_hub',
      name: 'Stasiun Kereta Cepat Halim & LRT Jabodebek',
      shortName: 'Halim Whoosh',
      city: 'Jakarta Timur',
      x: 680,
      y: 540,
      isHub: true,
      modes: ['Whoosh', 'LRT Jabodebek', 'TransJakarta'],
      lines: ['whoosh_hsr', 'lrt_bekasi', 'lrt_cibubur'],
      transfers: ['Kereta Cepat Whoosh Jakarta-Bandung', 'LRT Jabodebek Halim', 'Shuttle Bandara Halim Perdanakusuma'],
      facilities: ['Koneksi Skybridge Langsung', 'Lounge VIP Whoosh', 'Food Court Modern', 'Parkir Luas', 'Musholla Eksekutif'],
      nearby: ['Bandara Halim Perdanakusuma', 'Tol Jakarta-Cikampek', 'Kawasan Cawang'],
      description: 'Pusat keberangkatan kereta cepat pertama di Asia Tenggara, terintegrasi mulus dengan LRT Jabodebek untuk akses cepat ke pusat kota Jakarta dalam 20 menit.'
    },

    // Hub 5: Bundaran HI / Thamrin
    {
      id: 'bundaran_hi_hub',
      name: 'Bundaran HI Bank DKI / Plaza Indonesia',
      shortName: 'Bundaran HI',
      city: 'Jakarta Pusat',
      x: 480,
      y: 370,
      isHub: true,
      modes: ['MRT', 'TransJakarta'],
      lines: ['mrt_ns', 'tj_1'],
      transfers: ['MRT Bundaran HI', 'TJ Bundaran HI Astra'],
      facilities: ['Halte Kapal Phinisi dengan View Deck', 'Underground Concourse', 'Lift Difabel', 'Akses Mall Langsung'],
      nearby: ['Monumen Selamat Datang', 'Plaza Indonesia', 'Grand Indonesia', 'Hotel Indonesia Kempinski'],
      description: 'Jantung distrik bisnis dan perbelanjaan Jakarta dengan anjungan pandang megah menghadap Patung Selamat Datang.'
    },

    // Hub 6: Monas / Harmoni Central
    {
      id: 'monas_hub',
      name: 'Monas / Harmoni Sentral',
      shortName: 'Monas',
      city: 'Jakarta Pusat',
      x: 480,
      y: 300,
      isHub: true,
      modes: ['TransJakarta', 'MRT Phase 2 (Under Construction)'],
      lines: ['tj_1', 'tj_2', 'tj_3'],
      transfers: ['TJ Koridor 1, 2, 3', 'Calon Stasiun MRT Monas'],
      facilities: ['Halte Transit Luas', 'Akses Wisatawan', 'Papan Informasi Digital'],
      nearby: ['Monumen Nasional (Monas)', 'Museum Nasional', 'Istana Merdeka', 'Balai Kota DKI'],
      description: 'Titik temu utama wisatawan dan komuter menuju Monas dan kantor-kantor pemerintahan Republik Indonesia.'
    },

    // Hub 7: Jakarta Kota / Kota Tua Heritage Hub
    {
      id: 'jakarta_kota_hub',
      name: 'Stasiun Jakarta Kota (Beos) & Kota Tua',
      shortName: 'Jakarta Kota',
      city: 'Jakarta Barat',
      x: 480,
      y: 190,
      isHub: true,
      modes: ['KRL', 'TransJakarta'],
      lines: ['krl_bogor', 'krl_priok', 'tj_1', 'tj_12'],
      transfers: ['KRL Bogor Line', 'KRL Tanjung Priok Line', 'TJ Koridor 1 & 12'],
      facilities: ['Stasiun Cagar Budaya Bersejarah Art Deco', 'Underground Passage Plaza Fatahillah', 'ATM', 'Pusat Informasi'],
      nearby: ['Kawasan Wisata Kota Tua', 'Museum Fatahillah', 'Museum Bank Indonesia', 'Museum Mandiri', 'Chinatown Glodok'],
      description: 'Stasiun terminus bersejarah bergaya Art Deco Belanda abad ke-20, gerbang utama menuju wisata sejarah Kota Tua Jakarta.'
    },

    // Hub 8: Pasar Senen
    {
      id: 'senen_hub',
      name: 'Pasar Senen Intermodal',
      shortName: 'Pasar Senen',
      city: 'Jakarta Pusat',
      x: 550,
      y: 290,
      isHub: true,
      modes: ['KRL', 'Kereta Jarak Jauh', 'TransJakarta'],
      lines: ['krl_cikarang', 'tj_2', 'tj_5', 'tj_14'],
      transfers: ['KRL Cikarang Loop Line', 'KA Jarak Jauh Antarkota', 'TJ Senen (Koridor 2, 5, 14)'],
      facilities: ['JPO Megah Senen dengan Lift', 'Underpass', 'Area Kuliner Malam'],
      nearby: ['Pasar Senen', 'Plaza Atrium', 'Kwitang'],
      description: 'Simpul konektivitas komuter dan antarkota legendaris dengan Jembatan Penyeberangan modern berkonsep piano.'
    },

    // Hub 9: Tanah Abang Textile & Rail Hub
    {
      id: 'tanah_abang_hub',
      name: 'Stasiun Tanah Abang',
      shortName: 'Tanah Abang',
      city: 'Jakarta Pusat',
      x: 430,
      y: 380,
      isHub: true,
      modes: ['KRL', 'Mikrotrans'],
      lines: ['krl_cikarang', 'krl_rangkas'],
      transfers: ['KRL Rangkasbitung / Serpong Line', 'KRL Cikarang Loop Line', 'Jembatan Multiguna Skybridge Tanah Abang'],
      facilities: ['Skybridge ke Pasar Tanah Abang', 'Musholla', 'Eskalator Luas'],
      nearby: ['Pasar Grosir Tekstil Terbesar se-Asia Tenggara Tanah Abang', 'Museum Tekstil'],
      description: 'Pusat transit pedagang dan komuter dari arah Banten, Serpong, dan Tangerang Selatan menuju pusat grosir terbesar Asia Tenggara.'
    },

    // Hub 10: Velodrome / Pemuda Rawamangun
    {
      id: 'velodrome_hub',
      name: 'Velodrome Rawamangun Integrasi',
      shortName: 'Velodrome',
      city: 'Jakarta Timur',
      x: 650,
      y: 380,
      isHub: true,
      modes: ['LRT Jakarta', 'TransJakarta'],
      lines: ['lrt_jkt_1', 'tj_4'],
      transfers: ['LRT Jakarta Pegangsaan-Velodrome', 'TJ Pemuda Rawamangun Koridor 4'],
      facilities: ['JPO Integrasi Skybridge', 'Lift', 'Bike Sharing Station', 'Toilet Standar Internasional'],
      nearby: ['Jakarta International Velodrome', 'Arion Mall', 'Pacuan Kuda Pulomas'],
      description: 'Penghubung modern koridor Kelapa Gading - Rawamangun menuju pusat bisnis Kuningan dan Sudirman.'
    },

    // Hub 11: Soekarno-Hatta Airport (SHIA)
    {
      id: 'bandara_shia_hub',
      name: 'Bandara Internasional Soekarno-Hatta (CGK)',
      shortName: 'Bandara CGK',
      city: 'Tangerang / Banten',
      x: 180,
      y: 200,
      isHub: true,
      modes: ['KA Bandara', 'Kalayang Skytrain', 'Bus Bandara'],
      lines: ['ka_bandara_shia'],
      transfers: ['KA Bandara Railink', 'Skytrain APMS (Terminal 1, 2, 3)', 'Bus DAMRI'],
      facilities: ['Ruang Tunggu Premium', 'Luggage Trolley', 'Charging Station', 'Restoran & Toko Suvenir'],
      nearby: ['Terminal 1, 2, 3 CGK', 'Bandara International Soekarno-Hatta'],
      description: 'Gerbang penerbangan internasional utama Indonesia, terhubung langsung ke Manggarai & BNI City via kereta bandara ekspres.'
    },

    // Hub 12: Lebak Bulus
    {
      id: 'lebak_bulus_hub',
      name: 'Lebak Bulus Grab Terminal & Depot',
      shortName: 'Lebak Bulus',
      city: 'Jakarta Selatan',
      x: 380,
      y: 720,
      isHub: true,
      modes: ['MRT', 'TransJakarta', 'Bus AKAP'],
      lines: ['mrt_ns', 'tj_8'],
      transfers: ['MRT North-South Terminus', 'TJ Koridor 8', 'Terminal Bus Antarkota'],
      facilities: ['Park and Ride', 'Depo MRT Jakarta', 'Skybridge Transit', 'Lift & Escalator'],
      nearby: ['Poins Square', 'RS Siloam TB Simatupang', 'Kawasan Bisnis Cilandak'],
      description: 'Terminus selatan MRT Jakarta dengan fasilitas park & ride untuk komuter dari Depok dan Tangerang Selatan.'
    },

    // Hub 13: Blok M / M Bloc Space
    {
      id: 'blok_m_hub',
      name: 'Blok M BCA / Terminal Blok M',
      shortName: 'Blok M',
      city: 'Jakarta Selatan',
      x: 420,
      y: 600,
      isHub: true,
      modes: ['MRT', 'TransJakarta', 'Mikrotrans'],
      lines: ['mrt_ns', 'tj_1'],
      transfers: ['MRT Blok M BCA', 'Terminal Bus TransJakarta Blok M', 'Mikrotrans Feeder'],
      facilities: ['Akses Langsung Mall', 'Taman Literasi', 'Kuliner Kuliner Legendaris'],
      nearby: ['M Bloc Space', 'Blok M Plaza', 'Pasaraya Blok M', 'Gultik Blok M'],
      description: 'Pusat anak muda, kuliner kreatif, musik indie, dan titik transit legendaris Jakarta Selatan.'
    },

    // Hub 14: Senayan / Gelora Bung Karno (GBK)
    {
      id: 'senayan_hub',
      name: 'Senayan Mastercard & Gelora Bung Karno',
      shortName: 'Senayan / GBK',
      city: 'Jakarta Pusat',
      x: 440,
      y: 490,
      isHub: true,
      modes: ['MRT', 'TransJakarta'],
      lines: ['mrt_ns', 'tj_1'],
      transfers: ['MRT Senayan Mastercard', 'MRT Istora Mandiri', 'TJ Halte GBK'],
      facilities: ['Akses Pejalan Kaki Teduh', 'Pedestrian Walkway Mewah', 'Lift Difabel'],
      nearby: ['Stadion Utama Gelora Bung Karno (SUGBK)', 'Hutan Kota GBK', 'Senayan City', 'Plaza Senayan', 'FX Sudirman'],
      description: 'Pusat olahraga, konser musik kelas dunia, pameran internasional, dan gaya hidup sehat Jakarta.'
    },

    // Hub 15: Cawang Intermodal
    {
      id: 'cawang_hub',
      name: 'Cawang Intermodal Hub (KRL Cikoko & LRT Cikoko)',
      shortName: 'Cawang / Cikoko',
      city: 'Jakarta Selatan',
      x: 580,
      y: 510,
      isHub: true,
      modes: ['LRT Jabodebek', 'KRL', 'TransJakarta'],
      lines: ['lrt_cibubur', 'lrt_bekasi', 'krl_bogor', 'tj_9'],
      transfers: ['LRT Cikoko', 'KRL Cawang', 'TJ Cikoko Stasiun Cawang'],
      facilities: ['Jembatan Penyeberangan Integrasi Beratap', 'Lift', 'Eskalator'],
      nearby: ['Menara Saidah', 'Kawasan MT Haryono', 'Pancoran'],
      description: 'Simpul pertukaran penting penghubung jalur KRL Bogor Line dengan LRT Jabodebek dan TransJakarta Tol Dalam Kota.'
    }
  ],

  // Tourist Landmarks & Nearest Stations
  landmarks: [
    {
      id: 'monas',
      name: 'Monumen Nasional (Monas)',
      category: 'Sejarah & Budaya',
      stationId: 'monas_hub',
      accessMode: 'TransJakarta Koridor 1, 2, 3 (Halte Monas) / KRL Stasiun Juanda / Gondangdia',
      description: 'Ikon utama Indonesia dengan lidah api berlapis emas setinggi 132 meter dan museum diorama sejarah nasional.'
    },
    {
      id: 'kota_tua',
      name: 'Kota Tua Jakarta & Museum Fatahillah',
      category: 'Warisan Sejarah (Heritage)',
      stationId: 'jakarta_kota_hub',
      accessMode: 'KRL Bogor/Priok Line ke Stasiun Jakarta Kota / TJ Koridor 1 Halte Kota',
      description: 'Alun-alun kolonial abad ke-17 dengan bangunan megah peninggalan Batavia, cafe ontel, dan museum bersejarah.'
    },
    {
      id: 'gbk',
      name: 'Gelora Bung Karno (GBK) & Hutan Kota',
      category: 'Olahraga & Rekreasi',
      stationId: 'senayan_hub',
      accessMode: 'MRT Senayan atau Istora Mandiri / TJ Koridor 1 Halte GBK',
      description: 'Kompleks olahraga termegah di Indonesia dengan jogging track berstandar internasional dan oasis hijau di tengah pencakar langit.'
    },
    {
      id: 'bundaran_hi',
      name: 'Bundaran HI & Patung Selamat Datang',
      category: 'Ikon Modern & Belanja',
      stationId: 'bundaran_hi_hub',
      accessMode: 'MRT Stasiun Bundaran HI / TJ Koridor 1 Halte Bundaran HI Astra',
      description: 'Spot foto terbaik dengan latar air mancur megah, hotel bintang lima legendaris, dan mall kelas dunia Grand Indonesia.'
    },
    {
      id: 'm_bloc',
      name: 'M Bloc Space & Pasar Burung Barito',
      category: 'Kreatif & Kuliner',
      stationId: 'blok_m_hub',
      accessMode: 'MRT Stasiun Blok M BCA / CSW Integrasi',
      description: 'Bekas perumahan Peruri yang disulap menjadi ruang kreatif kekinian anak muda Jakarta berisi galeri seni, distro lokal, konser musik, dan kafe santai.'
    },
    {
      id: 'istiqlal_katedral',
      name: 'Masjid Istiqlal & Gereja Katedral Jakarta',
      category: 'Simbol Toleransi & Religi',
      stationId: 'monas_hub',
      accessMode: 'KRL Stasiun Juanda / TJ Koridor 2 Halte Juanda',
      description: 'Dua rumah ibadah megah berdampingan yang dihubungkan Terowongan Silaturahmi, simbol kerukunan umat beragama di Indonesia.'
    },
    {
      id: 'tmii',
      name: 'Taman Mini Indonesia Indah (TMII)',
      category: 'Taman Budaya & Rekreasi',
      stationId: 'halim_hub',
      accessMode: 'LRT Jabodebek Stasiun TMII (Cibubur Line) dilanjutkan shuttle gratis ke pintu masuk',
      description: 'Wahana miniatur kebudayaan 38 provinsi di Indonesia dengan anjungan rumah adat tradisional, danau kepulauan, dan kereta gantung.'
    },
    {
      id: 'ancol',
      name: 'Taman Impian Jaya Ancol & Dufan',
      category: 'Hiburan Pantai & Taman Bermain',
      stationId: 'jakarta_kota_hub',
      accessMode: 'TJ Koridor 5 Halte Ancol / KRL Pink Line Stasiun Ancol',
      description: 'Pusat rekreasi tepi pantai terlengkap: Dunia Fantasi (Dufan), Sea World, Atlantis Water Adventures, dan Pantai Lagoon.'
    },
    {
      id: 'ragunan',
      name: 'Taman Margasatwa Ragunan (Kebun Binatang)',
      category: 'Wisata Edukasi & Flora Fauna',
      stationId: 'dukuh_atas_hub',
      accessMode: 'TJ Koridor 6 langsung ke Halte Terminal Ragunan',
      description: 'Kebun binatang tropis seluas 147 hektar dengan lebih dari 2.000 satwa dan Pusat Primata Schmutzer di Jakarta Selatan.'
    },
    {
      id: 'whoosh_experience',
      name: 'Pengalaman Kereta Cepat Whoosh (Halim)',
      category: 'Transportasi Berteknologi Tinggi',
      stationId: 'halim_hub',
      accessMode: 'LRT Jabodebek ke Stasiun Halim',
      description: 'Sensasi meluncur dengan kecepatan 350 km/jam dari Jakarta ke Bandung hanya dalam 30 menit.'
    }
  ],

  // Integrated Fares and Payment Methods
  paymentGuide: {
    jaklingkoIntegration: {
      name: 'Tarif Integrasi JakLingko',
      maxFare: 10000,
      timeLimitMinutes: 180,
      description: 'Pindah moda antara MRT Jakarta, LRT Jakarta, dan TransJakarta hanya membayar maksimal Rp 10.000 dalam durasi 3 jam menggunakan Kartu Uang Elektronik yang sama atau Aplikasi JakLingko.'
    },
    acceptedCards: [
      { name: 'Kartu JakLingko', issuer: 'JakLingko Indonesia', whereToBuy: 'Halte TransJakarta, Stasiun MRT, Stasiun LRT', minBalance: 5000 },
      { name: 'Flazz', issuer: 'BCA', whereToBuy: 'ATM BCA, Minimarket (Indomaret/Alfamart)', minBalance: 5000 },
      { name: 'e-Money', issuer: 'Bank Mandiri', whereToBuy: 'ATM Mandiri, Minimarket, Stasiun', minBalance: 5000 },
      { name: 'TapCash', issuer: 'BNI', whereToBuy: 'ATM BNI, Minimarket, Stasiun KRL/MRT', minBalance: 5000 },
      { name: 'Brizzi', issuer: 'BRI', whereToBuy: 'ATM BRI, Agen BRILink, Minimarket', minBalance: 5000 },
      { name: 'Kartu Multi Trip (KMT)', issuer: 'KAI Commuter', whereToBuy: 'Loket Stasiun Commuter Line', minBalance: 5000 }
    ],
    mobileApps: [
      { name: 'Aplikasi JakLingko', features: 'QR Tiket multimoda, integrasi GoJek/Grab, rekomendasi rute instan' },
      { name: 'MyMRTJ App', features: 'Pembelian tiket QR MRT, loyalty points Marti, info stasiun realtime' },
      { name: 'Access by KAI', features: 'Tiket KRL Commuter Line QR, KA Bandara, Whoosh, KA Antarkota' },
      { name: 'Whoosh Mobile App', features: 'Pemesanan tiket Kereta Cepat Halim-Bandung, pilih kursi, refund cepat' }
    ]
  }
};

// Export to window
if (typeof window !== 'undefined') {
  window.TRANSIT_DATA = TRANSIT_DATA;
}
