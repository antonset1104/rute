// Jakarta Integrated Public Transit Data
// Sources: MRT Jakarta, LRT Jabodebek, LRT Jakarta, KAI Commuter, KCIC Whoosh, TransJakarta, JakLingko
// Detailed station directory, full network topology, tourist guide, and fares

const TRANSIT_DATA = {
  "systems": [
    {
      "id": "mrt",
      "name": "MRT Jakarta",
      "operator": "PT MRT Jakarta",
      "color": "#005baa",
      "badge": "MRT"
    },
    {
      "id": "lrt_jkt",
      "name": "LRT Jakarta",
      "operator": "PT LRT Jakarta",
      "color": "#e11d48",
      "badge": "LRT"
    },
    {
      "id": "lrt_jdb",
      "name": "LRT Jabodebek",
      "operator": "PT Kereta Api Indonesia",
      "color": "#0284c7",
      "badge": "LRT"
    },
    {
      "id": "krl",
      "name": "KAI Commuter",
      "operator": "KAI Commuter",
      "color": "#dc2626",
      "badge": "KRL"
    },
    {
      "id": "whoosh",
      "name": "Kereta Cepat Whoosh",
      "operator": "PT KCIC",
      "color": "#881337",
      "badge": "KCIC"
    },
    {
      "id": "ka_bandara",
      "name": "KA Bandara Soekarno-Hatta",
      "operator": "KAI Bandara",
      "color": "#1e3a8a",
      "badge": "AIR"
    },
    {
      "id": "tj",
      "name": "TransJakarta BRT",
      "operator": "PT Transportasi Jakarta",
      "color": "#ea580c",
      "badge": "TJ"
    },
    {
      "id": "jaklingko",
      "name": "JakLingko / Mikrotrans",
      "operator": "Dishub DKI Jakarta",
      "color": "#16a34a",
      "badge": "JL"
    }
  ],
  "lines": [
    {
      "id": "mrt_ns",
      "system": "mrt",
      "name": "North-South Line (Lin Merah)",
      "code": "M",
      "color": "#d92d20",
      "textColor": "#ffffff",
      "from": "Lebak Bulus Grab",
      "to": "Bundaran HI Bank DKI",
      "operatingHours": "05:00 - 24:00 (Hari Kerja: tiap 5-10 mnt)",
      "baseFare": 3000,
      "maxFare": 14000,
      "stations": [
        "lebak_bulus",
        "fatmawati",
        "cipete_raya",
        "haji_nawi",
        "blok_a",
        "blok_m",
        "asean",
        "senayan",
        "istora",
        "bendungan_hilir",
        "setiabudi_astra",
        "dukuh_atas_mrt",
        "bundaran_hi"
      ]
    },
    {
      "id": "lrt_jkt_1",
      "system": "lrt_jkt",
      "name": "LRT Jakarta Line 1",
      "code": "S",
      "color": "#e11d48",
      "textColor": "#ffffff",
      "from": "Pegangsaan Dua",
      "to": "Velodrome",
      "operatingHours": "05:30 - 23:00 (Headway 10 mnt)",
      "flatFare": 5000,
      "stations": [
        "pegangsaan_dua",
        "boulevard_utara",
        "boulevard_selatan",
        "pulomas",
        "equestrian",
        "velodrome"
      ]
    },
    {
      "id": "lrt_cibubur",
      "system": "lrt_jdb",
      "name": "Cibubur Line",
      "code": "CB",
      "color": "#0284c7",
      "textColor": "#ffffff",
      "from": "Dukuh Atas",
      "to": "Harjamukti",
      "operatingHours": "05:15 - 23:00 (Headway 10-20 mnt)",
      "baseFare": 5000,
      "maxFare": 20000,
      "stations": [
        "dukuh_atas_lrt",
        "setiabudi_lrt",
        "rasuna_said",
        "kuningan",
        "pancoran",
        "cikoko",
        "ciliwung",
        "cawang_lrt",
        "tmii",
        "kampung_rambutan_lrt",
        "ciracas",
        "harjamukti"
      ]
    },
    {
      "id": "lrt_bekasi",
      "system": "lrt_jdb",
      "name": "Bekasi Line",
      "code": "BK",
      "color": "#0d9488",
      "textColor": "#ffffff",
      "from": "Dukuh Atas",
      "to": "Jati Mulya",
      "operatingHours": "05:30 - 23:00 (Headway 10-20 mnt)",
      "baseFare": 5000,
      "maxFare": 20000,
      "stations": [
        "dukuh_atas_lrt",
        "setiabudi_lrt",
        "rasuna_said",
        "kuningan",
        "pancoran",
        "cikoko",
        "ciliwung",
        "cawang_lrt",
        "halim_lrt",
        "jatibening_baru",
        "cikunir_1",
        "cikunir_2",
        "bekasi_barat",
        "jati_mulya"
      ]
    },
    {
      "id": "krl_bogor",
      "system": "krl",
      "name": "Bogor Line (Red)",
      "code": "B",
      "color": "#dc2626",
      "textColor": "#ffffff",
      "from": "Jakarta Kota",
      "to": "Bogor / Nambo",
      "operatingHours": "04:00 - 24:00 (Headway 5-15 mnt)",
      "baseFare": 3000,
      "stations": [
        "jakarta_kota",
        "jayakarta",
        "mangga_besar",
        "sawah_besar",
        "juanda",
        "gondangdia",
        "cikini",
        "manggarai",
        "tebet",
        "cawang_krl",
        "duren_kalibata",
        "pasar_minggu_baru",
        "pasar_minggu",
        "tanjung_barat",
        "lenteng_agung",
        "univ_pancasila",
        "univ_indonesia",
        "pondok_cina",
        "depok_baru",
        "depok",
        "citayam",
        "bojong_gede",
        "cilebut",
        "bogor"
      ]
    },
    {
      "id": "krl_cikarang",
      "system": "krl",
      "name": "Cikarang Loop Line (Blue)",
      "code": "C",
      "color": "#2563eb",
      "textColor": "#ffffff",
      "from": "Cikarang",
      "to": "Kampung Bandan / Angke / Manggarai (Loop)",
      "operatingHours": "04:30 - 23:30 (Headway 10-20 mnt)",
      "baseFare": 3000,
      "stations": [
        "cikarang",
        "tambun",
        "bekasi_timur",
        "bekasi",
        "kranji",
        "cakung",
        "klender_baru",
        "buaran",
        "klender",
        "jatinegara",
        "matraman",
        "manggarai",
        "sudirman",
        "bni_city",
        "karet",
        "tanah_abang",
        "duri",
        "angke",
        "kampung_bandan",
        "rajawali",
        "kemayoran",
        "pasar_senen",
        "gang_sentiong",
        "kramat",
        "pondok_jati"
      ]
    },
    {
      "id": "krl_rangkas",
      "system": "krl",
      "name": "Rangkasbitung Line (Green)",
      "code": "R",
      "color": "#16a34a",
      "textColor": "#ffffff",
      "from": "Tanah Abang",
      "to": "Rangkasbitung",
      "operatingHours": "04:30 - 23:30 (Headway 10-15 mnt)",
      "baseFare": 3000,
      "stations": [
        "tanah_abang",
        "palmerah",
        "kebayoran",
        "pondok_ranji",
        "jurang_mangu",
        "sudimara",
        "rawa_buntu",
        "serpong",
        "cisauk",
        "cicayur",
        "parung_panjang",
        "cilejit",
        "daru",
        "tenjo",
        "tigaraksa",
        "cikoya",
        "maja",
        "citeras",
        "rangkasbitung"
      ]
    },
    {
      "id": "krl_tangerang",
      "system": "krl",
      "name": "Tangerang Line (Brown)",
      "code": "T",
      "color": "#ca8a04",
      "textColor": "#ffffff",
      "from": "Duri",
      "to": "Tangerang",
      "operatingHours": "04:30 - 23:30 (Headway 15 mnt)",
      "baseFare": 3000,
      "stations": [
        "duri",
        "grogol",
        "pesing",
        "taman_kota",
        "bojong_indah",
        "rawa_buaya",
        "kalideres_krl",
        "poris",
        "batu_ceper",
        "tanah_tinggi",
        "tangerang"
      ]
    },
    {
      "id": "krl_priok",
      "system": "krl",
      "name": "Tanjung Priok Line (Pink)",
      "code": "TP",
      "color": "#db2777",
      "textColor": "#ffffff",
      "from": "Jakarta Kota",
      "to": "Tanjung Priok",
      "operatingHours": "05:30 - 20:00 (Headway 30 mnt)",
      "baseFare": 3000,
      "stations": [
        "jakarta_kota",
        "kampung_bandan",
        "ancol",
        "tanjung_priok"
      ]
    },
    {
      "id": "whoosh_hsr",
      "system": "whoosh",
      "name": "Whoosh Kereta Cepat Jakarta-Bandung",
      "code": "KC",
      "color": "#881337",
      "textColor": "#ffffff",
      "from": "Halim (Jakarta)",
      "to": "Tegalluar (Bandung)",
      "operatingHours": "06:00 - 21:00 (Durasi 30-45 mnt)",
      "baseFare": 150000,
      "maxFare": 300000,
      "stations": [
        "halim_whoosh",
        "karawang",
        "padalarang",
        "tegalluar"
      ]
    },
    {
      "id": "ka_bandara_shia",
      "system": "ka_bandara",
      "name": "KA Bandara Soekarno-Hatta (SHIA Express)",
      "code": "A",
      "color": "#1e3a8a",
      "textColor": "#ffffff",
      "from": "Manggarai",
      "to": "Bandara Soekarno-Hatta",
      "operatingHours": "05:00 - 21:30 (Headway 30 mnt)",
      "baseFare": 30000,
      "maxFare": 70000,
      "stations": [
        "manggarai",
        "bni_city",
        "duri",
        "rawa_buaya",
        "batu_ceper",
        "bandara_shia"
      ]
    },
    {
      "id": "tj_1",
      "system": "tj",
      "name": "Koridor 1: Blok M - Kota",
      "code": "1",
      "color": "#dc2626",
      "textColor": "#ffffff",
      "from": "Blok M",
      "to": "Kota",
      "operatingHours": "24 Jam (Layanan Malam Hari Amari)",
      "flatFare": 3500,
      "stations": [
        "blok_m",
        "asean",
        "senayan",
        "istora",
        "bendungan_hilir",
        "dukuh_atas_tj",
        "bundaran_hi_tj",
        "monas",
        "harmoni",
        "sawah_besar_tj",
        "mangga_besar_tj",
        "glodok",
        "jakarta_kota"
      ]
    },
    {
      "id": "tj_2",
      "system": "tj",
      "name": "Koridor 2: Pulo Gadung - Monas",
      "code": "2",
      "color": "#0284c7",
      "textColor": "#ffffff",
      "from": "Pulo Gadung 1",
      "to": "Monas",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "pulogadung",
        "cempaka_timur",
        "senen",
        "juanda",
        "monas"
      ]
    },
    {
      "id": "tj_3",
      "system": "tj",
      "name": "Koridor 3: Kalideres - Monas via Veteran",
      "code": "3",
      "color": "#eab308",
      "textColor": "#000000",
      "from": "Kalideres",
      "to": "Monas",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "kalideres_tj",
        "rawa_buaya_tj",
        "grogol",
        "harmoni",
        "monas"
      ]
    },
    {
      "id": "tj_4",
      "system": "tj",
      "name": "Koridor 4: Pulo Gadung - Galunggung",
      "code": "4",
      "color": "#9333ea",
      "textColor": "#ffffff",
      "from": "Pulo Gadung 2",
      "to": "Galunggung (Dukuh Atas)",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "pulogadung",
        "pemuda_rawamangun",
        "pramuka",
        "matraman",
        "manggarai",
        "galunggung"
      ]
    },
    {
      "id": "tj_5",
      "system": "tj",
      "name": "Koridor 5: Kampung Melayu - Ancol",
      "code": "5",
      "color": "#ea580c",
      "textColor": "#ffffff",
      "from": "Kampung Melayu",
      "to": "Ancol",
      "operatingHours": "24 Jam",
      "flatFare": 3500,
      "stations": [
        "kampung_melayu",
        "matraman",
        "senen",
        "pasar_baru",
        "mangga_dua",
        "ancol"
      ]
    },
    {
      "id": "tj_6",
      "system": "tj",
      "name": "Koridor 6: Ragunan - Galunggung",
      "code": "6",
      "color": "#16a34a",
      "textColor": "#ffffff",
      "from": "Ragunan",
      "to": "Galunggung (Dukuh Atas)",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "ragunan",
        "mampang_prapatan",
        "kuningan",
        "rasuna_said_tj",
        "galunggung"
      ]
    },
    {
      "id": "tj_7",
      "system": "tj",
      "name": "Koridor 7: Kampung Rambutan - Kampung Melayu",
      "code": "7",
      "color": "#ec4899",
      "textColor": "#ffffff",
      "from": "Kampung Rambutan",
      "to": "Kampung Melayu",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "kampung_rambutan",
        "pasar_rebo",
        "pgc",
        "cawang_otista",
        "kampung_melayu"
      ]
    },
    {
      "id": "tj_8",
      "system": "tj",
      "name": "Koridor 8: Lebak Bulus - Pasar Baru",
      "code": "8",
      "color": "#84cc16",
      "textColor": "#000000",
      "from": "Lebak Bulus",
      "to": "Pasar Baru",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "lebak_bulus",
        "pondok_indah",
        "kebayoran_lama",
        "grogol",
        "harmoni",
        "pasar_baru"
      ]
    },
    {
      "id": "tj_9",
      "system": "tj",
      "name": "Koridor 9: Pinang Ranti - Pluit",
      "code": "9",
      "color": "#06b6d4",
      "textColor": "#ffffff",
      "from": "Pinang Ranti",
      "to": "Pluit",
      "operatingHours": "24 Jam",
      "flatFare": 3500,
      "stations": [
        "pinang_ranti",
        "tamini",
        "cawang_sutoyo",
        "pancoran",
        "gatot_subroto",
        "semanggi",
        "slipi",
        "grogol",
        "pluit"
      ]
    },
    {
      "id": "tj_10",
      "system": "tj",
      "name": "Koridor 10: PGC 2 - Tanjung Priok",
      "code": "10",
      "color": "#6366f1",
      "textColor": "#ffffff",
      "from": "PGC Cililitan",
      "to": "Tanjung Priok",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "pgc",
        "cawang_sutoyo",
        "pedati_prumpung",
        "cempaka_putih",
        "sunter_kelapa_gading",
        "tanjung_priok"
      ]
    },
    {
      "id": "tj_11",
      "system": "tj",
      "name": "Koridor 11: Pulo Gebang - Kampung Melayu",
      "code": "11",
      "color": "#14b8a6",
      "textColor": "#ffffff",
      "from": "Terminal Pulo Gebang",
      "to": "Kampung Melayu",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "pulo_gebang",
        "kantor_walikota_jaktim",
        "buaran_tj",
        "klender_tj",
        "jatinegara",
        "kampung_melayu"
      ]
    },
    {
      "id": "tj_12",
      "system": "tj",
      "name": "Koridor 12: Penjaringan - Tanjung Priok",
      "code": "12",
      "color": "#f97316",
      "textColor": "#ffffff",
      "from": "Penjaringan / Pluit",
      "to": "Tanjung Priok",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "pluit",
        "penjaringan",
        "jakarta_kota",
        "mangga_dua",
        "gunung_sahari",
        "sunter_kelapa_gading",
        "tanjung_priok"
      ]
    },
    {
      "id": "tj_13",
      "system": "tj",
      "name": "Koridor 13: CBD Ciledug - Tendean (Elevated BRT)",
      "code": "13",
      "color": "#8b5cf6",
      "textColor": "#ffffff",
      "from": "Puri Beta / CBD Ciledug",
      "to": "Tegal Mampang / Tendean",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "cbd_ciledug",
        "puri_beta",
        "cipulir",
        "mayestik",
        "velbak",
        "csw_integrasi",
        "tendean"
      ]
    },
    {
      "id": "tj_14",
      "system": "tj",
      "name": "Koridor 14: JIS - Senen Raya",
      "code": "14",
      "color": "#3b82f6",
      "textColor": "#ffffff",
      "from": "Jakarta International Stadium (JIS)",
      "to": "Senen Raya",
      "operatingHours": "05:00 - 22:00",
      "flatFare": 3500,
      "stations": [
        "jis",
        "danau_agung",
        "kemayoran_tj",
        "tanah_tinggi_tj",
        "senen"
      ]
    }
  ],
  "stations": [
    {
      "id": "lebak_bulus",
      "name": "Stasiun MRT Lebak Bulus Grab",
      "shortName": "Lebak Bulus",
      "city": "Jakarta Selatan",
      "x": 380,
      "y": 720,
      "isHub": true,
      "modes": [
        "MRT",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "tj_8"
      ],
      "transfers": [
        "TransJakarta Koridor 8",
        "Mikrotrans JAK.32 / JAK.45",
        "Park & Ride Lebak Bulus"
      ],
      "facilities": [
        "Eskalator & Lift Prioritas",
        "Toilet Difabel",
        "Musholla",
        "Park & Ride",
        "Tap-in Gate"
      ],
      "nearby": [
        "Poins Square",
        "Terminal Lebak Bulus",
        "Kawasan Cilandak",
        "RS Siloam TB Simatupang"
      ],
      "description": "Stasiun terminus selatan MRT Jakarta dengan fasilitas Depo Kereta dan area Park & Ride terluas."
    },
    {
      "id": "fatmawati",
      "name": "Stasiun MRT Fatmawati Indomaret",
      "shortName": "Fatmawati",
      "city": "Jakarta Selatan",
      "x": 390,
      "y": 690,
      "isHub": false,
      "modes": [
        "MRT"
      ],
      "lines": [
        "mrt_ns"
      ],
      "transfers": [
        "Mikrotrans JAK.31",
        "Feeder Busway TB Simatupang"
      ],
      "facilities": [
        "Eskalator",
        "Lift Prioritas",
        "Toilet",
        "Musholla",
        "Retail/Minimarket"
      ],
      "nearby": [
        "RSUP Fatmawati",
        "Cilandak Town Square (Citos)",
        "One Bellpark",
        "Museum Layang-Layang"
      ],
      "description": "Stasiun layang MRT strategis di persimpangan Jalan Fatmawati dan Jalan TB Simatupang."
    },
    {
      "id": "cipete_raya",
      "name": "Stasiun MRT Cipete Raya",
      "shortName": "Cipete Raya",
      "city": "Jakarta Selatan",
      "x": 400,
      "y": 660,
      "isHub": false,
      "modes": [
        "MRT"
      ],
      "lines": [
        "mrt_ns"
      ],
      "transfers": [
        "Mikrotrans",
        "Koneksi Pejalan Kaki"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Sentra Kuliner Cipete",
        "Kawasan Kafe & Resto Jalan Cipete Raya",
        "Lotte Mart Fatmawati"
      ],
      "description": "Stasiun layang ramah pejalan kaki di pusat kuliner kekinian dan kedai kopi hipster Jakarta Selatan."
    },
    {
      "id": "haji_nawi",
      "name": "Stasiun MRT Haji Nawi",
      "shortName": "Haji Nawi",
      "city": "Jakarta Selatan",
      "x": 405,
      "y": 635,
      "isHub": false,
      "modes": [
        "MRT"
      ],
      "lines": [
        "mrt_ns"
      ],
      "transfers": [
        "Mikrotrans",
        "Angkutan Pengumpan"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "ITC Fatmawati",
        "Kawasan Pemukiman Gandaria Selatan"
      ],
      "description": "Stasiun layang MRT yang melayani area pemukiman padat dan pertokoan Fatmawati."
    },
    {
      "id": "blok_a",
      "name": "Stasiun MRT Blok A",
      "shortName": "Blok A",
      "city": "Jakarta Selatan",
      "x": 412,
      "y": 610,
      "isHub": false,
      "modes": [
        "MRT"
      ],
      "lines": [
        "mrt_ns"
      ],
      "transfers": [
        "TransJakarta Non-BRT",
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pasar Blok A",
        "Kebayoran Baru",
        "Sentra Mebel & Kayu Antik"
      ],
      "description": "Stasiun layang MRT dekat Pasar Blok A yang kini tertata rapi dan terintegrasi transit."
    },
    {
      "id": "blok_m",
      "name": "Stasiun MRT Blok M BCA",
      "shortName": "Blok M",
      "city": "Jakarta Selatan",
      "x": 420,
      "y": 580,
      "isHub": true,
      "modes": [
        "MRT",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "tj_1"
      ],
      "transfers": [
        "TransJakarta Koridor 1",
        "Terminal Bus Blok M",
        "M Bloc Pedestrian Link"
      ],
      "facilities": [
        "Integrasi Skybridge Langsung ke Mall",
        "Lift",
        "Eskalator",
        "Pusat Informasi",
        "Toilet Difabel"
      ],
      "nearby": [
        "M Bloc Space",
        "Blok M Plaza",
        "Blok M Square",
        "Pasaraya Grande",
        "Taman Martha Tiahahu",
        "Little Tokyo Melawai"
      ],
      "description": "Hub transit tersibuk di Jakarta Selatan yang menghubungkan MRT, Terminal Bus Antarkota & BRT TransJakarta langsung ke mall dan kawasan kreatif M Bloc."
    },
    {
      "id": "asean",
      "name": "Stasiun MRT ASEAN",
      "shortName": "ASEAN",
      "city": "Jakarta Selatan",
      "x": 420,
      "y": 550,
      "isHub": true,
      "modes": [
        "MRT",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "tj_1",
        "tj_13",
        "tj_6"
      ],
      "transfers": [
        "TJ Koridor 13 (Halte CSW Melayang)",
        "TJ Koridor 1",
        "Halte ASEAN"
      ],
      "facilities": [
        "Skybridge Multilevel CSW 5 Lantai",
        "Lift Prioritas Kaca",
        "Musholla",
        "Area Kuliner",
        "Toilet"
      ],
      "nearby": [
        "Sekretariat ASEAN",
        "Kejaksaan Agung RI",
        "Taman Literasi Martha Tiahahu",
        "MABES POLRI"
      ],
      "description": "Mahakarya integrasi transportasi multilevel CSW yang menghubungkan MRT bawah tanah/layang dengan Halte BRT Koridor 13 di ketinggian 20 meter."
    },
    {
      "id": "senayan",
      "name": "Stasiun MRT Senayan Mastercard",
      "shortName": "Senayan",
      "city": "Jakarta Selatan",
      "x": 440,
      "y": 510,
      "isHub": false,
      "modes": [
        "MRT",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "tj_1"
      ],
      "transfers": [
        "TransJakarta Koridor 1 (Halte Bundaran Senayan)",
        "Mikrotrans"
      ],
      "facilities": [
        "Underground Concourse",
        "Lift",
        "Eskalator",
        "Toilet",
        "Retail"
      ],
      "nearby": [
        "Ratu Plaza",
        "Senayan City",
        "Plaza Senayan",
        "Kementerian Pendidikan Dasar & Menengah"
      ],
      "description": "Stasiun bawah tanah pertama dari arah selatan di koridor Sudirman, dekat mall mewah Senayan."
    },
    {
      "id": "istora",
      "name": "Stasiun MRT Istora Mandiri",
      "shortName": "Istora Mandiri",
      "city": "Jakarta Selatan",
      "x": 455,
      "y": 480,
      "isHub": true,
      "modes": [
        "MRT",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "tj_1"
      ],
      "transfers": [
        "TransJakarta Koridor 1 (Halte GBK)",
        "Koneksi Pintu Masuk Gelora Bung Karno"
      ],
      "facilities": [
        "Underground Concourse",
        "Lift",
        "Eskalator",
        "Pusat Informasi Wisatawan",
        "Musholla"
      ],
      "nearby": [
        "Gelora Bung Karno (GBK)",
        "Hutan Kota Plataran GBK",
        "Stadion Utama GBK",
        "Pacific Place (SCBD)",
        "Sentral Bisnis SCBD"
      ],
      "description": "Gerbang utama menuju komplek olahraga kebanggaan nasional GBK, hutan kota, dan kawasan finansial elite SCBD."
    },
    {
      "id": "bendungan_hilir",
      "name": "Stasiun MRT Bendungan Hilir",
      "shortName": "Bendungan Hilir",
      "city": "Jakarta Pusat",
      "x": 468,
      "y": 450,
      "isHub": false,
      "modes": [
        "MRT",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "tj_1"
      ],
      "transfers": [
        "TransJakarta Koridor 1 (Halte Benhil)",
        "TJ Koridor 9 via JPO Semanggi"
      ],
      "facilities": [
        "Underground Concourse",
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kawasan Kuliner Benhil",
        "RS Siloam Semanggi",
        "Plaza Semanggi",
        "Atma Jaya"
      ],
      "description": "Stasiun bawah tanah dekat jembatan Semanggi dan sentra kuliner legendaris Bendungan Hilir."
    },
    {
      "id": "setiabudi_astra",
      "name": "Stasiun MRT Setiabudi Astra",
      "shortName": "Setiabudi Astra",
      "city": "Jakarta Pusat",
      "x": 475,
      "y": 435,
      "isHub": false,
      "modes": [
        "MRT",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "tj_1"
      ],
      "transfers": [
        "TransJakarta Koridor 1 (Halte Karet Sudirman)",
        "Underground Passage"
      ],
      "facilities": [
        "Underground Concourse",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Menara Astra",
        "Chase Plaza",
        "MidPlaza",
        "Hotel Ayana Midplaza"
      ],
      "description": "Stasiun bawah tanah yang melayani kawasan perkantoran Sudirman dan pusat bisnis multinasional."
    },
    {
      "id": "dukuh_atas_mrt",
      "name": "Stasiun MRT Dukuh Atas BNI",
      "shortName": "Dukuh Atas BNI",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 420,
      "isHub": true,
      "modes": [
        "MRT",
        "LRT Jabodebek",
        "KRL",
        "KA Bandara",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "lrt_cibubur",
        "lrt_bekasi",
        "krl_cikarang",
        "ka_bandara_shia",
        "tj_1",
        "tj_4",
        "tj_6"
      ],
      "transfers": [
        "LRT Jabodebek Dukuh Atas",
        "KRL Stasiun Sudirman",
        "KA Bandara BNI City",
        "TJ Galunggung",
        "TJ Dukuh Atas"
      ],
      "facilities": [
        "Jembatan Penyeberangan Multiguna (JPM)",
        "Underground Concourse",
        "Lift",
        "Eskalator",
        "ATM Center",
        "Toilet Difabel"
      ],
      "nearby": [
        "Terowongan Kendal",
        "Taman Dukuh Atas",
        "Grand Indonesia",
        "Wisma BNI 46",
        "Kawasan Thamrin"
      ],
      "description": "Pusat superhub integrasi 5 moda transportasi umum terbesar dan paling terhubung di Republik Indonesia."
    },
    {
      "id": "bundaran_hi",
      "name": "Stasiun MRT Bundaran HI Bank DKI",
      "shortName": "Bundaran HI",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 370,
      "isHub": true,
      "modes": [
        "MRT",
        "TransJakarta"
      ],
      "lines": [
        "mrt_ns",
        "tj_1"
      ],
      "transfers": [
        "TransJakarta Koridor 1 (Halte Bundaran HI Astra)",
        "Underpass Mall Access"
      ],
      "facilities": [
        "Underground Concourse",
        "Akses Langsung Bawah Tanah ke Mall",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Monumen Selamat Datang",
        "Grand Indonesia",
        "Plaza Indonesia",
        "Hotel Indonesia Kempinski",
        "Mandarin Oriental"
      ],
      "description": "Terminus utara MRT Jalur 1 di pusat episentrum metropolitan Jakarta, terhubung langsung ke ikon Patung Selamat Datang dan mall kelas dunia."
    },
    {
      "id": "dukuh_atas_lrt",
      "name": "Stasiun LRT Dukuh Atas",
      "shortName": "LRT Dukuh Atas",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 420,
      "isHub": true,
      "modes": [
        "LRT Jabodebek",
        "MRT",
        "KRL",
        "KA Bandara",
        "TransJakarta"
      ],
      "lines": [
        "lrt_cibubur",
        "lrt_bekasi",
        "mrt_ns",
        "krl_cikarang",
        "ka_bandara_shia",
        "tj_4"
      ],
      "transfers": [
        "JPM Dukuh Atas ke MRT & KRL",
        "Halte TJ Galunggung Koridor 4 & 6"
      ],
      "facilities": [
        "Jembatan Penyeberangan Multiguna",
        "Lift",
        "Eskalator",
        "Musholla",
        "Toilet"
      ],
      "nearby": [
        "Waduk Setiabudi Barat",
        "Landmark Tower",
        "Sudirman Business District"
      ],
      "description": "Stasiun terminus barat LRT Jabodebek terintegrasi penuh dengan seluruh moda transportasi publik Jakarta."
    },
    {
      "id": "setiabudi_lrt",
      "name": "Stasiun LRT Setiabudi",
      "shortName": "LRT Setiabudi",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 440,
      "isHub": false,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_cibubur",
        "lrt_bekasi"
      ],
      "transfers": [
        "TransJakarta Koridor 6 (Halte Setiabudi Utara)"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kuningan City",
        "Menara Imperium",
        "Kawasan Rasuna Said"
      ],
      "description": "Stasiun layang di gerbang utara Jalan HR Rasuna Said Kuningan."
    },
    {
      "id": "rasuna_said",
      "name": "Stasiun LRT Rasuna Said",
      "shortName": "Rasuna Said",
      "city": "Jakarta Selatan",
      "x": 520,
      "y": 460,
      "isHub": false,
      "modes": [
        "LRT Jabodebek",
        "TransJakarta"
      ],
      "lines": [
        "lrt_cibubur",
        "lrt_bekasi",
        "tj_6"
      ],
      "transfers": [
        "TransJakarta Koridor 6 (Halte GOR Soemantri)"
      ],
      "facilities": [
        "Skybridge Integrasi Halte TJ",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Plaza Festival",
        "Epicentrum Walk",
        "GOR Soemantri Brodjonegoro",
        "Kedutaan Besar Australia & Rusia"
      ],
      "description": "Stasiun transit layang di pusat olahraga, kuliner Plaza Festival, dan sentra perkantoran Rasuna Said."
    },
    {
      "id": "kuningan",
      "name": "Stasiun LRT Kuningan",
      "shortName": "Kuningan",
      "city": "Jakarta Selatan",
      "x": 540,
      "y": 480,
      "isHub": false,
      "modes": [
        "LRT Jabodebek",
        "TransJakarta"
      ],
      "lines": [
        "lrt_cibubur",
        "lrt_bekasi",
        "tj_6"
      ],
      "transfers": [
        "TransJakarta Koridor 6 (Halte Departemen Kesehatan)"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kementerian Kesehatan RI",
        "Kemenkumham",
        "Mall Ambasador",
        "ITC Kuningan"
      ],
      "description": "Stasiun layang strategis di tengah distrik diplomatik dan kementerian negara Republik Indonesia."
    },
    {
      "id": "pancoran",
      "name": "Stasiun LRT Pancoran",
      "shortName": "Pancoran",
      "city": "Jakarta Selatan",
      "x": 560,
      "y": 495,
      "isHub": false,
      "modes": [
        "LRT Jabodebek",
        "TransJakarta"
      ],
      "lines": [
        "lrt_cibubur",
        "lrt_bekasi",
        "tj_9"
      ],
      "transfers": [
        "TransJakarta Koridor 9 (Halte Pancoran Tugu)"
      ],
      "facilities": [
        "Skybridge Integrasi",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Tugu Pancoran (Dirgantara)",
        "Kawasan Perkantoran MT Haryono",
        "Menara Bidakara"
      ],
      "description": "Stasiun layang persimpangan segitiga emas Pancoran dan jalan protokol MT Haryono."
    },
    {
      "id": "cikoko",
      "name": "Stasiun LRT Cikoko",
      "shortName": "Cikoko",
      "city": "Jakarta Selatan",
      "x": 580,
      "y": 510,
      "isHub": true,
      "modes": [
        "LRT Jabodebek",
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "lrt_cibubur",
        "lrt_bekasi",
        "krl_bogor",
        "tj_9"
      ],
      "transfers": [
        "KRL Stasiun Cawang",
        "TransJakarta Koridor 9 (Halte Cikoko)"
      ],
      "facilities": [
        "Jembatan Penyeberangan Skybridge Terintegrasi",
        "Lift",
        "Eskalator",
        "Toilet Difabel"
      ],
      "nearby": [
        "Menara Saidah",
        "Tebet Eco Park",
        "Stasiun KRL Cawang"
      ],
      "description": "Pusat integrasi tiga moda (LRT, KRL Commuter Line Bogor, dan BRT TransJakarta) via skybridge megah di Cikoko."
    },
    {
      "id": "ciliwung",
      "name": "Stasiun LRT Ciliwung",
      "shortName": "Ciliwung",
      "city": "Jakarta Selatan",
      "x": 600,
      "y": 520,
      "isHub": false,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_cibubur",
        "lrt_bekasi"
      ],
      "transfers": [
        "TransJakarta Koridor 9 (Halte Cawang Ciliwung)"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Tebet Eco Park (akses selatan)",
        "Wisma Indomobil",
        "MT Haryono"
      ],
      "description": "Stasiun terdekat menuju taman kota peraih penghargaan Tebet Eco Park."
    },
    {
      "id": "cawang_lrt",
      "name": "Stasiun LRT Cawang",
      "shortName": "LRT Cawang",
      "city": "Jakarta Timur",
      "x": 620,
      "y": 530,
      "isHub": true,
      "modes": [
        "LRT Jabodebek",
        "TransJakarta"
      ],
      "lines": [
        "lrt_cibubur",
        "lrt_bekasi",
        "tj_7",
        "tj_9",
        "tj_10"
      ],
      "transfers": [
        "TransJakarta Halte BNN / Cawang Otista",
        "Percabangan Jalur Cibubur & Bekasi"
      ],
      "facilities": [
        "Skybridge Integrasi Halte BNN",
        "Lift",
        "Eskalator",
        "Toilet",
        "Retail Area"
      ],
      "nearby": [
        "Gedung BNN RI",
        "Universitas Kristen Indonesia (UKI)",
        "Simpang Susun Cawang"
      ],
      "description": "Stasiun percabangan utama LRT Jabodebek ke arah Cibubur (Harjamukti) dan Bekasi (Jati Mulya)."
    },
    {
      "id": "tmii",
      "name": "Stasiun LRT TMII",
      "shortName": "TMII",
      "city": "Jakarta Timur",
      "x": 630,
      "y": 600,
      "isHub": true,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_cibubur"
      ],
      "transfers": [
        "Shuttle Bus Gratis TMII",
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla",
        "Parkir"
      ],
      "nearby": [
        "Taman Mini Indonesia Indah (TMII)",
        "Museum Transportasi",
        "Green Terrace TMII",
        "Tamini Square"
      ],
      "description": "Gerbang utama wisatawan menuju Taman Mini Indonesia Indah dengan layanan shuttle bus listrik ramah lingkungan."
    },
    {
      "id": "kampung_rambutan_lrt",
      "name": "Stasiun LRT Kampung Rambutan",
      "shortName": "LRT Kp Rambutan",
      "city": "Jakarta Timur",
      "x": 635,
      "y": 640,
      "isHub": true,
      "modes": [
        "LRT Jabodebek",
        "TransJakarta"
      ],
      "lines": [
        "lrt_cibubur",
        "tj_7"
      ],
      "transfers": [
        "Terminal Bus Antarkota Kampung Rambutan",
        "TJ Koridor 7"
      ],
      "facilities": [
        "Jembatan Penghubung Terminal",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Terminal Bus Kampung Rambutan",
        "Pasar Induk Kramat Jati"
      ],
      "description": "Stasiun integrasi LRT dengan terminal bus antarkota terbesar di Jakarta Timur."
    },
    {
      "id": "ciracas",
      "name": "Stasiun LRT Ciracas",
      "shortName": "Ciracas",
      "city": "Jakarta Timur",
      "x": 638,
      "y": 670,
      "isHub": false,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_cibubur"
      ],
      "transfers": [
        "Mikrotrans",
        "Angkot Lokal"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Kawasan Pemukiman Ciracas",
        "GOR Ciracas"
      ],
      "description": "Stasiun LRT yang melayani mobilitas warga pemukiman padat Jakarta Timur."
    },
    {
      "id": "harjamukti",
      "name": "Stasiun LRT Harjamukti",
      "shortName": "Harjamukti",
      "city": "Kota Depok",
      "x": 640,
      "y": 710,
      "isHub": true,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_cibubur"
      ],
      "transfers": [
        "TransJakarta Cibubur",
        "Shuttle Kawasan Cibubur",
        "Park & Ride"
      ],
      "facilities": [
        "Park & Ride Luas",
        "Lift",
        "Eskalator",
        "Musholla",
        "Toilet"
      ],
      "nearby": [
        "Cibubur Junction",
        "Trans Studio Mall Cibubur",
        "Buperta Cibubur",
        "Kawasan Hunian Cibubur"
      ],
      "description": "Terminus selatan LRT Jabodebek Lin Cibubur dengan fasilitas Park and Ride bagi komuter Depok/Bogor."
    },
    {
      "id": "halim_lrt",
      "name": "Stasiun LRT Halim",
      "shortName": "Halim",
      "city": "Jakarta Timur",
      "x": 680,
      "y": 540,
      "isHub": true,
      "modes": [
        "LRT Jabodebek",
        "Whoosh"
      ],
      "lines": [
        "lrt_bekasi",
        "whoosh_hsr"
      ],
      "transfers": [
        "Skybridge Langsung ke Stasiun Kereta Cepat Whoosh Halim",
        "Shuttle Bandara Halim"
      ],
      "facilities": [
        "Skybridge Megah Terhubung Langsung",
        "Lift",
        "Eskalator",
        "Lounge",
        "Food Court"
      ],
      "nearby": [
        "Stasiun Kereta Cepat Whoosh",
        "Bandara Halim Perdanakusuma",
        "Tol Jakarta-Cikampek"
      ],
      "description": "Stasiun transit layang ultra-modern yang menghubungkan jaringan transit Jabodebek langsung ke Kereta Cepat Whoosh Jakarta-Bandung."
    },
    {
      "id": "jatibening_baru",
      "name": "Stasiun LRT Jatibening Baru",
      "shortName": "Jatibening Baru",
      "city": "Kota Bekasi",
      "x": 730,
      "y": 540,
      "isHub": false,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_bekasi"
      ],
      "transfers": [
        "Angkutan Kota Bekasi",
        "Parkir"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kawasan Pemukiman Jatibening",
        "Sentra Kuliner Caman"
      ],
      "description": "Stasiun pertama LRT Jabodebek di wilayah Kota Bekasi di sisi jalan tol Jakarta-Cikampek."
    },
    {
      "id": "cikunir_1",
      "name": "Stasiun LRT Cikunir 1",
      "shortName": "Cikunir 1",
      "city": "Kota Bekasi",
      "x": 770,
      "y": 540,
      "isHub": false,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_bekasi"
      ],
      "transfers": [
        "Angkot Bekasi"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Simpang Susun Tol Cikunir",
        "Perumahan Jaticempaka"
      ],
      "description": "Stasiun LRT dekat persimpangan tol JORR dan tol Jakarta-Cikampek."
    },
    {
      "id": "cikunir_2",
      "name": "Stasiun LRT Cikunir 2",
      "shortName": "Cikunir 2",
      "city": "Kota Bekasi",
      "x": 810,
      "y": 540,
      "isHub": false,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_bekasi"
      ],
      "transfers": [
        "Angkot Bekasi"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Grand Galaxy City",
        "Galaxy Park"
      ],
      "description": "Melayani kawasan hunian modern Grand Galaxy City dan Cikunir."
    },
    {
      "id": "bekasi_barat",
      "name": "Stasiun LRT Bekasi Barat",
      "shortName": "Bekasi Barat",
      "city": "Kota Bekasi",
      "x": 850,
      "y": 540,
      "isHub": true,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_bekasi"
      ],
      "transfers": [
        "TransPatriot Bekasi",
        "Skybridge Mall"
      ],
      "facilities": [
        "Skybridge ke Mall",
        "Lift",
        "Eskalator",
        "Musholla",
        "Toilet"
      ],
      "nearby": [
        "Revo Town Mall",
        "Grand Metropolitan Mall",
        "Mega Bekasi Hypermall",
        "Tol Bekasi Barat"
      ],
      "description": "Stasiun sentral komuter di jantung pusat bisnis dan perbelanjaan Kota Bekasi."
    },
    {
      "id": "jati_mulya",
      "name": "Stasiun LRT Jati Mulya",
      "shortName": "Jati Mulya",
      "city": "Kabupaten Bekasi",
      "x": 890,
      "y": 560,
      "isHub": true,
      "modes": [
        "LRT Jabodebek"
      ],
      "lines": [
        "lrt_bekasi"
      ],
      "transfers": [
        "Depo LRT Jabodebek",
        "Park & Ride"
      ],
      "facilities": [
        "Park & Ride Bertingkat",
        "Lift",
        "Eskalator",
        "Depo LRT Jati Mulya",
        "Toilet"
      ],
      "nearby": [
        "Depo LRT Jabodebek",
        "Kawasan Industri Tambun",
        "Grand Wisata Bekasi"
      ],
      "description": "Terminus timur LRT Jabodebek Lin Bekasi terintegrasi fasilitas Depo Kereta dan Park & Ride."
    },
    {
      "id": "pegangsaan_dua",
      "name": "Stasiun LRT Pegangsaan Dua",
      "shortName": "Pegangsaan Dua",
      "city": "Jakarta Utara",
      "x": 730,
      "y": 220,
      "isHub": true,
      "modes": [
        "LRT Jakarta"
      ],
      "lines": [
        "lrt_jkt_1"
      ],
      "transfers": [
        "Mikrotrans JAK.60 / JAK.112",
        "Depo LRT Jakarta"
      ],
      "facilities": [
        "Depo Kereta",
        "Lift Prioritas",
        "Eskalator",
        "Toilet Difabel",
        "Musholla"
      ],
      "nearby": [
        "Depo LRT Jakarta",
        "Mall of Indonesia (MOI)",
        "Kawasan Kelapa Gading Permai"
      ],
      "description": "Terminus utara LRT Jakarta dan lokasi Depo Perawatan LRT Jakarta."
    },
    {
      "id": "boulevard_utara",
      "name": "Stasiun LRT Boulevard Utara",
      "shortName": "Boulevard Utara",
      "city": "Jakarta Utara",
      "x": 710,
      "y": 250,
      "isHub": true,
      "modes": [
        "LRT Jakarta"
      ],
      "lines": [
        "lrt_jkt_1"
      ],
      "transfers": [
        "Skybridge Mall Kelapa Gading",
        "Mikrotrans"
      ],
      "facilities": [
        "Jembatan Skybridge Terhubung Langsung ke Mall",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Mall Kelapa Gading (MKG 1-5)",
        "La Piazza",
        "Gading Food City",
        "Sentra Kuliner 24 Jam"
      ],
      "description": "Stasiun teramai LRT Jakarta dengan akses jembatan langsung ke dalam Mall Kelapa Gading."
    },
    {
      "id": "boulevard_selatan",
      "name": "Stasiun LRT Boulevard Selatan",
      "shortName": "Boulevard Selatan",
      "city": "Jakarta Utara",
      "x": 690,
      "y": 280,
      "isHub": false,
      "modes": [
        "LRT Jakarta"
      ],
      "lines": [
        "lrt_jkt_1"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Kawasan Resto Boulevard Kelapa Gading",
        "Al-Azhar Kelapa Gading"
      ],
      "description": "Melayani kawasan pertokoan dan kuliner elit Boulevard Kelapa Gading."
    },
    {
      "id": "pulomas",
      "name": "Stasiun LRT Pulomas",
      "shortName": "Pulomas",
      "city": "Jakarta Timur",
      "x": 670,
      "y": 310,
      "isHub": true,
      "modes": [
        "LRT Jakarta",
        "TransJakarta"
      ],
      "lines": [
        "lrt_jkt_1",
        "tj_2"
      ],
      "transfers": [
        "TransJakarta Koridor 2 (Halte Pulomas) via JPO"
      ],
      "facilities": [
        "Skybridge Integrasi",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Pacuan Kuda Pulomas",
        "Rumah Sakit Columbia Asia",
        "Bella Terra Lifestyle Center"
      ],
      "description": "Stasiun integrasi antarmoda antara LRT Jakarta dan Halte TransJakarta Koridor 2 di Jalan Perintis Kemerdekaan."
    },
    {
      "id": "equestrian",
      "name": "Stasiun LRT Equestrian",
      "shortName": "Equestrian",
      "city": "Jakarta Timur",
      "x": 660,
      "y": 345,
      "isHub": false,
      "modes": [
        "LRT Jakarta"
      ],
      "lines": [
        "lrt_jkt_1"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Jakarta International Equestrian Park (JIEPP)",
        "Taman Pacuan Kuda Pulomas"
      ],
      "description": "Stasiun ramah keluarga berhadapan langsung dengan arena pacuan kuda berstandar Olimpiade JIEPP."
    },
    {
      "id": "velodrome",
      "name": "Stasiun LRT Velodrome Rawamangun",
      "shortName": "Velodrome",
      "city": "Jakarta Timur",
      "x": 650,
      "y": 380,
      "isHub": true,
      "modes": [
        "LRT Jakarta",
        "TransJakarta"
      ],
      "lines": [
        "lrt_jkt_1",
        "tj_4"
      ],
      "transfers": [
        "TransJakarta Koridor 4 (Halte Pemuda Rawamangun via Skybridge)"
      ],
      "facilities": [
        "Skybridge Pejalan Kaki Ber-AC",
        "Lift",
        "Eskalator",
        "Toilet",
        "Komersial"
      ],
      "nearby": [
        "Jakarta International Velodrome (JIV)",
        "Gelanggang Remaja Rawamangun",
        "Arion Mall"
      ],
      "description": "Terminus selatan LRT Jakarta yang terhubung skybridge ber-AC ke Halte TransJakarta Koridor 4 dan venue balap sepeda dunia Velodrome."
    },
    {
      "id": "jakarta_kota",
      "name": "Stasiun Jakarta Kota (Beos)",
      "shortName": "Jakarta Kota",
      "city": "Jakarta Barat",
      "x": 480,
      "y": 190,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_bogor",
        "krl_priok",
        "tj_1",
        "tj_12"
      ],
      "transfers": [
        "KRL Bogor Line",
        "KRL Tanjung Priok Line",
        "TJ Koridor 1 & 12 (Halte Kota)"
      ],
      "facilities": [
        "Bangunan Cagar Budaya Art Deco",
        "Underpass Plaza Fatahillah",
        "Lift",
        "Toilet",
        "ATM Center"
      ],
      "nearby": [
        "Kota Tua Jakarta",
        "Museum Fatahillah",
        "Museum Bank Indonesia",
        "Chinatown Glodok",
        "Pasar Asemka"
      ],
      "description": "Stasiun terminus bersejarah peninggalan 1926 dengan arsitektur Art Deco megah, pintu gerbang utama wisata Kota Tua."
    },
    {
      "id": "jayakarta",
      "name": "Stasiun KRL Jayakarta",
      "shortName": "Jayakarta",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 210,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Kawasan Mangga Besar",
        "Pecinan Jakarta"
      ],
      "description": "Stasiun layang di jalur layang Jakarta Kota - Manggarai."
    },
    {
      "id": "mangga_besar",
      "name": "Stasiun KRL Mangga Besar",
      "shortName": "Mangga Besar",
      "city": "Jakarta Barat",
      "x": 480,
      "y": 230,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Pusat Kuliner Malam Mangga Besar",
        "RS Husada"
      ],
      "description": "Stasiun layang komuter di pusat kuliner malam legendaris."
    },
    {
      "id": "sawah_besar",
      "name": "Stasiun KRL Sawah Besar",
      "shortName": "Sawah Besar",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 250,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Pasar Baru",
        "Kawasan Kantor Pajak"
      ],
      "description": "Stasiun layang komuter di kawasan perdagangan Sawah Besar."
    },
    {
      "id": "juanda",
      "name": "Stasiun KRL Juanda",
      "shortName": "Juanda",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 280,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_bogor",
        "tj_2",
        "tj_3"
      ],
      "transfers": [
        "TransJakarta Koridor 2 & 3 (Halte Juanda)",
        "Skybridge Istiqlal"
      ],
      "facilities": [
        "Skybridge ke Halte TJ",
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Masjid Istiqlal",
        "Gereja Katedral Jakarta",
        "Pasar Baru",
        "Kementerian Keuangan"
      ],
      "description": "Stasiun integrasi utama wisatawan menuju Masjid Istiqlal, Gereja Katedral, dan Pasar Baru."
    },
    {
      "id": "gondangdia",
      "name": "Stasiun KRL Gondangdia",
      "shortName": "Gondangdia",
      "city": "Jakarta Pusat",
      "x": 500,
      "y": 310,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "TransJakarta Pengumpan",
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Monas (pintu timur)",
        "Sentra Kuliner Jalan Sabang",
        "Gereja Theresia",
        "Kawasan Menteng"
      ],
      "description": "Stasiun transit favorit menuju kawasan wisata kuliner Jalan Sabang dan perkantoran Menteng."
    },
    {
      "id": "cikini",
      "name": "Stasiun KRL Cikini",
      "shortName": "Cikini",
      "city": "Jakarta Pusat",
      "x": 520,
      "y": 340,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Taman Ismail Marzuki (TIM)",
        "Planetarium Jakarta",
        "Perpustakaan Jakarta",
        "Sentra Toko Roti & Bunga Cikini"
      ],
      "description": "Stasiun kereta cagar budaya melayani kawasan seni, budaya, dan teater Taman Ismail Marzuki."
    },
    {
      "id": "manggarai",
      "name": "Stasiun Sentral Manggarai",
      "shortName": "Manggarai",
      "city": "Jakarta Selatan",
      "x": 540,
      "y": 460,
      "isHub": true,
      "modes": [
        "KRL",
        "KA Bandara",
        "TransJakarta"
      ],
      "lines": [
        "krl_bogor",
        "krl_cikarang",
        "ka_bandara_shia",
        "tj_4"
      ],
      "transfers": [
        "KRL Bogor Line (Lt 2)",
        "KRL Cikarang Loop (Lt 1)",
        "KA Bandara SHIA",
        "TJ Koridor 4"
      ],
      "facilities": [
        "Stasiun Bertingkat Double Decker",
        "Lift",
        "Eskalator",
        "Ruang Ibu & Anak",
        "Klinik",
        "Retail"
      ],
      "nearby": [
        "Pasaraya Manggarai",
        "Pasar Rumput",
        "Kawasan Tebet"
      ],
      "description": "Stasiun sentral komuter terbesar di Asia Tenggara, pusat peralihan jalur KRL Bogor, Cikarang Loop, dan Kereta Bandara."
    },
    {
      "id": "tebet",
      "name": "Stasiun KRL Tebet",
      "shortName": "Tebet",
      "city": "Jakarta Selatan",
      "x": 560,
      "y": 485,
      "isHub": false,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "TransJakarta Pengumpan Tebet - Karet",
        "Mikrotrans"
      ],
      "facilities": [
        "Underpass Penyeberangan",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kawasan Kuliner Tebet",
        "Kota Kasablanka (Kokas)"
      ],
      "description": "Stasiun komuter tersibuk untuk akses pekerja kantor Sudirman-Rasuna Said via shuttle."
    },
    {
      "id": "cawang_krl",
      "name": "Stasiun KRL Cawang",
      "shortName": "Cawang KRL",
      "city": "Jakarta Selatan",
      "x": 580,
      "y": 510,
      "isHub": true,
      "modes": [
        "KRL",
        "LRT Jabodebek",
        "TransJakarta"
      ],
      "lines": [
        "krl_bogor",
        "lrt_cibubur",
        "lrt_bekasi",
        "tj_9"
      ],
      "transfers": [
        "LRT Jabodebek Cikoko via Skybridge",
        "TJ Koridor 9 Halte Cikoko"
      ],
      "facilities": [
        "Skybridge Multimoda",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Tebet Eco Park",
        "Menara Saidah",
        "Kawasan MT Haryono"
      ],
      "description": "Stasiun KRL terintegrasi skybridge langsung ke LRT Cikoko dan Halte TransJakarta."
    },
    {
      "id": "duren_kalibata",
      "name": "Stasiun KRL Duren Kalibata",
      "shortName": "Kalibata",
      "city": "Jakarta Selatan",
      "x": 580,
      "y": 540,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Jembatan Penyeberangan",
        "Toilet"
      ],
      "nearby": [
        "Mall Kalibata City",
        "TMP Kalibata",
        "Plaza Kalibata"
      ],
      "description": "Melayani pemukiman Kalibata City dan Taman Makam Pahlawan Nasional."
    },
    {
      "id": "pasar_minggu_baru",
      "name": "Stasiun KRL Pasar Minggu Baru",
      "shortName": "Ps Minggu Baru",
      "city": "Jakarta Selatan",
      "x": 580,
      "y": 570,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kawasan Pengadegan",
        "Perkantoran Pancoran"
      ],
      "description": "Stasiun komuter wilayah pemukiman Pancoran-Pasar Minggu."
    },
    {
      "id": "pasar_minggu",
      "name": "Stasiun KRL Pasar Minggu",
      "shortName": "Pasar Minggu",
      "city": "Jakarta Selatan",
      "x": 580,
      "y": 600,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "TransJakarta Koridor 9D / 4B",
        "Terminal Bus Pasar Minggu"
      ],
      "facilities": [
        "Underpass Stasiun",
        "Toilet",
        "Musholla",
        "Parkir"
      ],
      "nearby": [
        "Pasar Tradisional Pasar Minggu",
        "Terminal Pasar Minggu",
        "Sentra Buah"
      ],
      "description": "Pusat transit utama komuter Jakarta Selatan wilayah Pasar Minggu dan Jagakarsa."
    },
    {
      "id": "tanjung_barat",
      "name": "Stasiun KRL Tanjung Barat",
      "shortName": "Tanjung Barat",
      "city": "Jakarta Selatan",
      "x": 580,
      "y": 630,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Skybridge Mall AEON",
        "Mikrotrans"
      ],
      "facilities": [
        "Jembatan Skybridge Langsung ke Mall",
        "Lift",
        "Eskalator"
      ],
      "nearby": [
        "AEON Mall Tanjung Barat",
        "Perkantoran TB Simatupang",
        "Taman Margasatwa Ragunan (akses timur)"
      ],
      "description": "Stasiun modern terhubung skybridge langsung ke mall AEON Tanjung Barat."
    },
    {
      "id": "lenteng_agung",
      "name": "Stasiun KRL Lenteng Agung",
      "shortName": "Lenteng Agung",
      "city": "Jakarta Selatan",
      "x": 580,
      "y": 660,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "JPO Ramah Difabel",
        "Toilet"
      ],
      "nearby": [
        "Pasar Lenteng Agung",
        "Universitas IISIP"
      ],
      "description": "Melayani warga komuter kawasan Lenteng Agung dan Jagakarsa."
    },
    {
      "id": "univ_pancasila",
      "name": "Stasiun KRL Universitas Pancasila",
      "shortName": "Univ Pancasila",
      "city": "Jakarta Selatan",
      "x": 580,
      "y": 680,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Akses Kampus"
      ],
      "facilities": [
        "Underpass",
        "Toilet"
      ],
      "nearby": [
        "Kampus Universitas Pancasila"
      ],
      "description": "Stasiun komuter tepat di depan gerbang Universitas Pancasila."
    },
    {
      "id": "univ_indonesia",
      "name": "Stasiun KRL Universitas Indonesia",
      "shortName": "UI Depok",
      "city": "Kota Depok",
      "x": 580,
      "y": 700,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Bus Kuning Kampus UI",
        "Bikun"
      ],
      "facilities": [
        "Gerbang Khusus Mahasiswa & Umum",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kampus Universitas Indonesia",
        "Hutan Kota UI",
        "Danau UI"
      ],
      "description": "Stasiun hijau di tengah rimbunnya pepohonan kampus Universitas Indonesia."
    },
    {
      "id": "pondok_cina",
      "name": "Stasiun KRL Pondok Cina",
      "shortName": "Pondok Cina",
      "city": "Kota Depok",
      "x": 580,
      "y": 720,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Skybridge Margo City Mall"
      ],
      "facilities": [
        "JPO Modern",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Margo City Mall",
        "Depok Town Square (Detos)",
        "RSUI Depok"
      ],
      "description": "Stasiun komuter teramai di Jalan Margonda Depok, pusat perbelanjaan dan hunian mahasiswa."
    },
    {
      "id": "depok_baru",
      "name": "Stasiun KRL Depok Baru",
      "shortName": "Depok Baru",
      "city": "Kota Depok",
      "x": 580,
      "y": 740,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Terminal Bus Terpadu Margonda",
        "TransJakarta Depok"
      ],
      "facilities": [
        "Jembatan Penyeberangan",
        "Park & Ride",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kantor Walikota Depok",
        "ITC Depok",
        "Terminal Depok"
      ],
      "description": "Stasiun pusat pemerintahan dan perdagangan Kota Depok."
    },
    {
      "id": "depok",
      "name": "Stasiun KRL Depok (Depok Lama)",
      "shortName": "Depok Lama",
      "city": "Kota Depok",
      "x": 580,
      "y": 760,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Depo KRL Depok (terbesar di Asia Tenggara)"
      ],
      "facilities": [
        "Depo KRL",
        "Park & Ride",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kawasan Heritage Depok Lama",
        "Gereja Immanuel Depok"
      ],
      "description": "Stasiun bersejarah dan lokasi Depo Kereta Rel Listrik terbesar di Asia Tenggara."
    },
    {
      "id": "citayam",
      "name": "Stasiun KRL Citayam",
      "shortName": "Citayam",
      "city": "Kabupaten Bogor",
      "x": 580,
      "y": 780,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Percabangan Jalur Nambo"
      ],
      "facilities": [
        "Overpass Stasiun",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pasar Citayam",
        "Percabangan Cibinong / Nambo"
      ],
      "description": "Stasiun percabangan komuter menuju Nambo/Cibinong dan Bogor."
    },
    {
      "id": "bojong_gede",
      "name": "Stasiun KRL Bojong Gede",
      "shortName": "Bojong Gede",
      "city": "Kabupaten Bogor",
      "x": 580,
      "y": 800,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Skybridge Terminal Bojong Gede"
      ],
      "facilities": [
        "Skybridge ke Terminal",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pusat Pemkab Bogor Cibinong (akses angkot)"
      ],
      "description": "Stasiun komuter padat terhubung skybridge ke terminal angkutan."
    },
    {
      "id": "cilebut",
      "name": "Stasiun KRL Cilebut",
      "shortName": "Cilebut",
      "city": "Kabupaten Bogor",
      "x": 580,
      "y": 820,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Angkot"
      ],
      "facilities": [
        "Parkir Motor Luas",
        "Toilet"
      ],
      "nearby": [
        "Kawasan Perumahan Bogor Utara"
      ],
      "description": "Stasiun komuter penyangga Bogor."
    },
    {
      "id": "bogor",
      "name": "Stasiun KRL Bogor",
      "shortName": "Bogor",
      "city": "Kota Bogor",
      "x": 580,
      "y": 850,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_bogor"
      ],
      "transfers": [
        "Biskita Trans Pakuan",
        "Alun-alun Kota Bogor Link"
      ],
      "facilities": [
        "Akses Langsung ke Alun-Alun Bogor",
        "Park & Ride",
        "Toilet",
        "ATM",
        "Pusat Wisatawan"
      ],
      "nearby": [
        "Kebun Raya Bogor",
        "Istana Kepresidenan Bogor",
        "Alun-Alun Kota Bogor",
        "Pusat Kuliner Surya Kencana"
      ],
      "description": "Terminus utama Bogor Line peninggalan era kolonial 1881, gerbang utama wisata Kebun Raya Bogor dan kuliner legendaris."
    },
    {
      "id": "sudirman",
      "name": "Stasiun KRL Sudirman",
      "shortName": "Sudirman",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 420,
      "isHub": true,
      "modes": [
        "KRL",
        "MRT",
        "LRT Jabodebek",
        "KA Bandara",
        "TransJakarta"
      ],
      "lines": [
        "krl_cikarang",
        "mrt_ns",
        "lrt_cibubur",
        "lrt_bekasi",
        "ka_bandara_shia",
        "tj_1"
      ],
      "transfers": [
        "JPM Dukuh Atas",
        "MRT Dukuh Atas BNI",
        "KA Bandara BNI City",
        "LRT Dukuh Atas",
        "TJ Tosari/Dukuh Atas"
      ],
      "facilities": [
        "Jembatan Penyeberangan Multiguna (JPM)",
        "Underground Passage",
        "Lift",
        "Toilet"
      ],
      "nearby": [
        "Jalan Jenderal Sudirman",
        "Terowongan Kendal",
        "Plaza Indonesia",
        "Grand Indonesia"
      ],
      "description": "Stasiun komuter tersibuk di jantung distrik finansial Sudirman, terhubung ke JPM Dukuh Atas."
    },
    {
      "id": "bni_city",
      "name": "Stasiun BNI City (Sudirman Baru)",
      "shortName": "BNI City",
      "city": "Jakarta Pusat",
      "x": 470,
      "y": 420,
      "isHub": true,
      "modes": [
        "KA Bandara",
        "KRL"
      ],
      "lines": [
        "ka_bandara_shia",
        "krl_cikarang"
      ],
      "transfers": [
        "JPM Dukuh Atas",
        "MRT Dukuh Atas",
        "KRL Sudirman"
      ],
      "facilities": [
        "Lounge Eksekutif",
        "Check-in Display Bandara",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Wisma BNI 46",
        "Shangri-La Hotel",
        "Kawasan Dukuh Atas"
      ],
      "description": "Stasiun khusus KA Bandara Soekarno-Hatta dan KRL komuter bertaraf bandara internasional."
    },
    {
      "id": "karet",
      "name": "Stasiun KRL Karet",
      "shortName": "Karet",
      "city": "Jakarta Pusat",
      "x": 450,
      "y": 400,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Jembatan Penyeberangan",
        "Toilet"
      ],
      "nearby": [
        "Kawasan Karet Tengsin",
        "Sentra Kain"
      ],
      "description": "Stasiun komuter di antara Sudirman dan Tanah Abang."
    },
    {
      "id": "tanah_abang",
      "name": "Stasiun KRL Tanah Abang",
      "shortName": "Tanah Abang",
      "city": "Jakarta Pusat",
      "x": 430,
      "y": 380,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang",
        "krl_rangkas"
      ],
      "transfers": [
        "KRL Rangkasbitung Line",
        "KRL Cikarang Loop",
        "JPO Skybridge Pasar Tanah Abang"
      ],
      "facilities": [
        "Skybridge Penghubung Pasar Grosir",
        "Peron Pulau Bertingkat",
        "Lift",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pasar Grosir Tekstil Tanah Abang (Blok A, B, F)",
        "Museum Tekstil",
        "Jembatan Penyeberangan Multiguna"
      ],
      "description": "Pusat transit akbar pertemuan jalur KRL Banten/Rangkasbitung dengan Cikarang Loop, gerbang pusat tekstil terbesar se-Asia Tenggara."
    },
    {
      "id": "duri",
      "name": "Stasiun KRL Duri",
      "shortName": "Duri",
      "city": "Jakarta Barat",
      "x": 380,
      "y": 330,
      "isHub": true,
      "modes": [
        "KRL",
        "KA Bandara"
      ],
      "lines": [
        "krl_cikarang",
        "krl_tangerang",
        "ka_bandara_shia"
      ],
      "transfers": [
        "KRL Tangerang Line",
        "KRL Cikarang Loop",
        "KA Bandara SHIA"
      ],
      "facilities": [
        "Peron Bertingkat 3 Lantai",
        "Eskalator",
        "Lift",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Kawasan Tambora",
        "Pasar Duri"
      ],
      "description": "Stasiun transit strategis bertingkat pertemuan jalur Tangerang, Cikarang Loop, dan KA Bandara."
    },
    {
      "id": "angke",
      "name": "Stasiun KRL Angke",
      "shortName": "Angke",
      "city": "Jakarta Barat",
      "x": 380,
      "y": 260,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pasar Jembatan Lima",
        "Kawasan Tambora"
      ],
      "description": "Stasiun awal/akhir beberapa perjalanan KRL Cikarang Loop."
    },
    {
      "id": "kampung_bandan",
      "name": "Stasiun KRL Kampung Bandan",
      "shortName": "Kp Bandan",
      "city": "Jakarta Utara",
      "x": 440,
      "y": 190,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang",
        "krl_priok"
      ],
      "transfers": [
        "KRL Tanjung Priok Line",
        "KRL Cikarang Loop"
      ],
      "facilities": [
        "Peron Atas & Bawah (Segitiga Pembalik)",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "WTC Mangga Dua",
        "ITC Mangga Dua",
        "Pasar Pagi"
      ],
      "description": "Stasiun transit layang dan darat unik segitiga perkeretaapian Jakarta Utara dekat Mangga Dua."
    },
    {
      "id": "rajawali",
      "name": "Stasiun KRL Rajawali",
      "shortName": "Rajawali",
      "city": "Jakarta Pusat",
      "x": 490,
      "y": 200,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet"
      ],
      "nearby": [
        "Kawasan Gunung Sahari",
        "PRJ Kemayoran (akses barat)"
      ],
      "description": "Stasiun komuter di persimpangan rel lingkar utara."
    },
    {
      "id": "kemayoran",
      "name": "Stasiun KRL Kemayoran",
      "shortName": "Kemayoran",
      "city": "Jakarta Pusat",
      "x": 520,
      "y": 230,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pasar Jiung",
        "Kawasan Bekas Bandara Kemayoran",
        "Masjid Akbar Kemayoran"
      ],
      "description": "Stasiun komuter bersejarah di Kemayoran."
    },
    {
      "id": "pasar_senen",
      "name": "Stasiun Pasar Senen",
      "shortName": "Pasar Senen",
      "city": "Jakarta Pusat",
      "x": 530,
      "y": 260,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_cikarang",
        "tj_2",
        "tj_5",
        "tj_14"
      ],
      "transfers": [
        "Kereta Api Jarak Jauh (KAJJ)",
        "Halte Sentral TJ Senen",
        "Underpass Senen"
      ],
      "facilities": [
        "Underpass Penyeberangan Penumpang",
        "Ruang Tunggu KAJJ Ber-AC",
        "Lift",
        "Toilet",
        "Food Court"
      ],
      "nearby": [
        "Pasar Senen Jaya",
        "Plaza Atrium Senen",
        "Pasar Kue Subuh Senen",
        "Museum Sumpah Pemuda"
      ],
      "description": "Pusat transit terpadu kereta api antarkota, KRL komuter, dan halte sentral TransJakarta."
    },
    {
      "id": "gang_sentiong",
      "name": "Stasiun KRL Gang Sentiong",
      "shortName": "Gang Sentiong",
      "city": "Jakarta Pusat",
      "x": 535,
      "y": 290,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet"
      ],
      "nearby": [
        "Kawasan Kramat",
        "Pasar Paseban"
      ],
      "description": "Stasiun komuter di Jalan Kramat Pulo."
    },
    {
      "id": "kramat",
      "name": "Stasiun KRL Kramat",
      "shortName": "Kramat",
      "city": "Jakarta Pusat",
      "x": 538,
      "y": 320,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet"
      ],
      "nearby": [
        "Percetakan Negara",
        "Kawasan Salemba"
      ],
      "description": "Melayani area Salemba dan Percetakan Negara."
    },
    {
      "id": "pondok_jati",
      "name": "Stasiun KRL Pondok Jati",
      "shortName": "Pondok Jati",
      "city": "Jakarta Timur",
      "x": 540,
      "y": 350,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet"
      ],
      "nearby": [
        "Kawasan Matraman",
        "Kayu Manis"
      ],
      "description": "Stasiun komuter di perbatasan Matraman dan Jatinegara."
    },
    {
      "id": "matraman",
      "name": "Stasiun KRL Matraman",
      "shortName": "Matraman",
      "city": "Jakarta Timur",
      "x": 540,
      "y": 410,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_cikarang",
        "tj_4",
        "tj_5"
      ],
      "transfers": [
        "TransJakarta Koridor 4 & 5 via Halte Matraman Baru"
      ],
      "facilities": [
        "Stasiun Shelter Modern",
        "Lift Prioritas",
        "Eskalator",
        "Toilet Difabel"
      ],
      "nearby": [
        "Pasar Pramuka (Sentra Obat)",
        "Gramedia Matraman",
        "Kawasan Salemba"
      ],
      "description": "Stasiun baru ramah disabilitas yang mengurai kepadatan transit Stasiun Manggarai dan Jatinegara."
    },
    {
      "id": "jatinegara",
      "name": "Stasiun KRL Jatinegara",
      "shortName": "Jatinegara",
      "city": "Jakarta Timur",
      "x": 620,
      "y": 460,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_cikarang",
        "tj_11"
      ],
      "transfers": [
        "Kereta Api Jarak Jauh",
        "TransJakarta Koridor 11 (Halte Flyover Jatinegara)"
      ],
      "facilities": [
        "Skybridge Integrasi Halte TJ",
        "Overpass Megah",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Pasar Jatinegara",
        "Pasar Rawa Bening (Batu Akik)",
        "City Plaza Jatinegara"
      ],
      "description": "Stasiun cagar budaya dan transit akbar di Jakarta Timur terhubung skybridge langsung ke Halte TransJakarta."
    },
    {
      "id": "klender",
      "name": "Stasiun KRL Klender",
      "shortName": "Klender",
      "city": "Jakarta Timur",
      "x": 670,
      "y": 460,
      "isHub": false,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_cikarang",
        "tj_11"
      ],
      "transfers": [
        "TransJakarta Koridor 11"
      ],
      "facilities": [
        "Overpass Penyeberangan",
        "Lift",
        "Toilet"
      ],
      "nearby": [
        "Pasar Klender",
        "Sentra Mebel Klender"
      ],
      "description": "Stasiun komuter modern di jalur rel ganda ganda (DDT)."
    },
    {
      "id": "buaran",
      "name": "Stasiun KRL Buaran",
      "shortName": "Buaran",
      "city": "Jakarta Timur",
      "x": 710,
      "y": 460,
      "isHub": false,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_cikarang",
        "tj_11"
      ],
      "transfers": [
        "TransJakarta Koridor 11 (Halte Buaran)"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Buaran Plaza",
        "Sentra Niaga Raden Inten"
      ],
      "description": "Terhubung langsung dengan Halte TransJakarta Koridor 11."
    },
    {
      "id": "klender_baru",
      "name": "Stasiun KRL Klender Baru",
      "shortName": "Klender Baru",
      "city": "Jakarta Timur",
      "x": 750,
      "y": 460,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Overpass",
        "Toilet"
      ],
      "nearby": [
        "Sentra Penggilingan",
        "Perumahan Klender"
      ],
      "description": "Stasiun komuter modern DDT di Penggilingan."
    },
    {
      "id": "cakung",
      "name": "Stasiun KRL Cakung",
      "shortName": "Cakung",
      "city": "Jakarta Timur",
      "x": 790,
      "y": 460,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Feeder Bus Terminal Pulo Gebang"
      ],
      "facilities": [
        "Park & Ride Luas",
        "Lift",
        "Eskalator",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Terminal Terpadu Pulo Gebang",
        "Kantor Walikota Jakarta Timur"
      ],
      "description": "Stasiun perbatasan timur DKI Jakarta terhubung dengan shuttle ke Terminal Pulo Gebang."
    },
    {
      "id": "kranji",
      "name": "Stasiun KRL Kranji",
      "shortName": "Kranji",
      "city": "Kota Bekasi",
      "x": 830,
      "y": 460,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Angkot Bekasi"
      ],
      "facilities": [
        "Overpass",
        "Parkir",
        "Toilet"
      ],
      "nearby": [
        "Pasar Kranji",
        "Jalan Sudirman Bekasi"
      ],
      "description": "Stasiun komuter pertama di wilayah administratif Kota Bekasi."
    },
    {
      "id": "bekasi",
      "name": "Stasiun KRL Bekasi",
      "shortName": "Bekasi",
      "city": "Kota Bekasi",
      "x": 870,
      "y": 460,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "TransPatriot Bekasi",
        "Kereta Api Jarak Jauh"
      ],
      "facilities": [
        "Gedung Stasiun Megah 2 Lantai",
        "Lift",
        "Eskalator",
        "Musholla",
        "Toilet Difabel",
        "Park & Ride"
      ],
      "nearby": [
        "Summarecon Mall Bekasi",
        "Stadion Patriot Candrabhaga",
        "Alun-Alun Bekasi",
        "Pasar Proyek"
      ],
      "description": "Stasiun utama Kota Bekasi yang melayani ratusan ribu komuter dan perhentian kereta api jarak jauh."
    },
    {
      "id": "bekasi_timur",
      "name": "Stasiun KRL Bekasi Timur",
      "shortName": "Bekasi Timur",
      "city": "Kota Bekasi",
      "x": 900,
      "y": 460,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "TransPatriot"
      ],
      "facilities": [
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Terminal Bus Bekasi Timur",
        "BTC Mall"
      ],
      "description": "Terletak berdampingan dengan Terminal Bus Kota Bekasi Timur."
    },
    {
      "id": "tambun",
      "name": "Stasiun KRL Tambun",
      "shortName": "Tambun",
      "city": "Kabupaten Bekasi",
      "x": 930,
      "y": 460,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "Angkot Kab Bekasi"
      ],
      "facilities": [
        "Gedung Cagar Budaya",
        "Toilet"
      ],
      "nearby": [
        "Gedung Juang 45 Tambun",
        "Museum Bekasi"
      ],
      "description": "Stasiun komuter bersejarah dekat Museum Gedung Juang 45."
    },
    {
      "id": "cikarang",
      "name": "Stasiun KRL Cikarang",
      "shortName": "Cikarang",
      "city": "Kabupaten Bekasi",
      "x": 960,
      "y": 460,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_cikarang"
      ],
      "transfers": [
        "KRD Walahar Purwakarta",
        "Kereta Api Antarkota"
      ],
      "facilities": [
        "Stasiun Terminus Bertingkat",
        "Lift",
        "Eskalator",
        "Park & Ride Luas",
        "Toilet"
      ],
      "nearby": [
        "Kawasan Industri Cikarang (Jababeka, MM2100, GIIC)",
        "Sentra Grosir Cikarang (SGC)"
      ],
      "description": "Terminus timur KRL Commuter Line dan gerbang utama komuter kawasan industri terbesar di Asia Tenggara."
    },
    {
      "id": "palmerah",
      "name": "Stasiun KRL Palmerah",
      "shortName": "Palmerah",
      "city": "Jakarta Pusat",
      "x": 410,
      "y": 420,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_rangkas",
        "tj_1"
      ],
      "transfers": [
        "TransJakarta Pengumpan Palmerah - Bundaran Senayan"
      ],
      "facilities": [
        "Jembatan Penyeberangan Megah",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Gedung DPR/MPR RI",
        "Kompas Gramedia",
        "Pasar Palmerah",
        "GBK (pintu barat)"
      ],
      "description": "Stasiun terdekat menuju komplek Parlemen DPR/MPR RI dan akses barat Gelora Bung Karno."
    },
    {
      "id": "kebayoran",
      "name": "Stasiun KRL Kebayoran",
      "shortName": "Kebayoran",
      "city": "Jakarta Selatan",
      "x": 380,
      "y": 470,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_rangkas",
        "tj_13",
        "tj_8"
      ],
      "transfers": [
        "Skybridge Kebayoran ke Halte TJ Velbak (Koridor 13 & 8)"
      ],
      "facilities": [
        "Skybridge Terpanjang di Jakarta (500m)",
        "Eskalator",
        "Lift Prioritas",
        "Toilet"
      ],
      "nearby": [
        "Pasar Kebayoran Lama",
        "Gandaria City",
        "Pusat Grosir Cipulir"
      ],
      "description": "Hub integrasi skybridge ikonik terpanjang yang menghubungkan KRL Rangkasbitung dengan dua koridor TransJakarta."
    },
    {
      "id": "pondok_ranji",
      "name": "Stasiun KRL Pondok Ranji",
      "shortName": "Pondok Ranji",
      "city": "Tangerang Selatan",
      "x": 350,
      "y": 510,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Shuttle Bintaro Jaya (InTrans)"
      ],
      "facilities": [
        "Akses Baru Mall Bintaro Plaza",
        "Park & Ride",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Bintaro Plaza",
        "Kawasan Bintaro Sektor 1-3"
      ],
      "description": "Pintu gerbang komuter utama kota mandiri Bintaro Jaya."
    },
    {
      "id": "jurang_mangu",
      "name": "Stasiun KRL Jurang Mangu",
      "shortName": "Jurang Mangu",
      "city": "Tangerang Selatan",
      "x": 320,
      "y": 550,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Skybridge Bintaro Jaya Xchange Mall"
      ],
      "facilities": [
        "Terowongan Bawah Tanah & Skybridge Langsung Mall",
        "Eskalator",
        "Lift"
      ],
      "nearby": [
        "Bintaro Jaya Xchange Mall (BXc 1 & 2)",
        "Oceanarium BXSea",
        "Ice Skating Rink BX Rink",
        "Universitas Pembangunan Jaya"
      ],
      "description": "Stasiun modern terhubung terowongan langsung ke mall Bintaro Xchange dan akuarium raksasa BXSea."
    },
    {
      "id": "sudimara",
      "name": "Stasiun KRL Sudimara",
      "shortName": "Sudimara",
      "city": "Tangerang Selatan",
      "x": 290,
      "y": 580,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Angkot Tangsel"
      ],
      "facilities": [
        "Park & Ride",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pasar Jombang",
        "Kawasan Bintaro Sektor 9"
      ],
      "description": "Stasiun komuter penyangga Tangerang Selatan."
    },
    {
      "id": "rawa_buntu",
      "name": "Stasiun KRL Rawa Buntu",
      "shortName": "Rawa Buntu",
      "city": "Tangerang Selatan",
      "x": 260,
      "y": 610,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Shuttle BSD Link",
        "TransJakarta S11 BSD"
      ],
      "facilities": [
        "Park & Ride Luas",
        "Overpass",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Bumi Serpong Damai (BSD City)",
        "Tol Jakarta-Serpong",
        "Taman Kota 1 BSD"
      ],
      "description": "Stasiun komuter utama warga BSD City dengan feeder bus BSD Link gratis."
    },
    {
      "id": "serpong",
      "name": "Stasiun KRL Serpong",
      "shortName": "Serpong",
      "city": "Tangerang Selatan",
      "x": 230,
      "y": 640,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Angkot"
      ],
      "facilities": [
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pasar Serpong",
        "Kawasan Puspiptek"
      ],
      "description": "Stasiun komuter di Serpong lama dekat Cisadane."
    },
    {
      "id": "cisauk",
      "name": "Stasiun KRL Cisauk Intermoda BSD",
      "shortName": "Cisauk",
      "city": "Kabupaten Tangerang",
      "x": 200,
      "y": 670,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Skybridge Terpadu Terminal Intermoda BSD & Pasar Modern"
      ],
      "facilities": [
        "Skybridge Integrasi Megah",
        "Terminal Bus BSD Link",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Pasar Modern BSD Intermoda",
        "AEON Mall BSD City",
        "ICE BSD (Indonesia Convention Exhibition)"
      ],
      "description": "Mahakarya kawasan TOD terintegrasi menghubungkan KRL, shuttle bus kota mandiri, dan pasar modern."
    },
    {
      "id": "parung_panjang",
      "name": "Stasiun KRL Parung Panjang",
      "shortName": "Parung Panjang",
      "city": "Kabupaten Bogor",
      "x": 170,
      "y": 700,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Park & Ride"
      ],
      "facilities": [
        "Depo Kereta",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pemukiman Parung Panjang",
        "Pasar Parung Panjang"
      ],
      "description": "Stasiun terminus beberapa rangkaian KRL Green Line."
    },
    {
      "id": "tigaraksa",
      "name": "Stasiun KRL Tigaraksa",
      "shortName": "Tigaraksa",
      "city": "Kabupaten Tangerang",
      "x": 140,
      "y": 730,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Park & Ride"
      ],
      "facilities": [
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pusat Pemerintahan Kab Tangerang"
      ],
      "description": "Melayani kawasan Tigaraksa dan pusat pemerintahan Kabupaten Tangerang."
    },
    {
      "id": "maja",
      "name": "Stasiun KRL Maja",
      "shortName": "Maja",
      "city": "Kabupaten Lebak",
      "x": 110,
      "y": 760,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Shuttle Kota Kekerabatan Maja"
      ],
      "facilities": [
        "Overpass",
        "Toilet"
      ],
      "nearby": [
        "Kota Baru Publik Maja",
        "Citra Maja Raya"
      ],
      "description": "Pusat transit komuter kota baru publik Maja."
    },
    {
      "id": "rangkasbitung",
      "name": "Stasiun KRL Rangkasbitung",
      "shortName": "Rangkasbitung",
      "city": "Kabupaten Lebak",
      "x": 80,
      "y": 790,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "KA Lokal Merak (KRL - Kereta Diesel Merak)"
      ],
      "facilities": [
        "Depo Kereta",
        "Overpass",
        "Park & Ride",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Museum Multatuli",
        "Alun-Alun Rangkasbitung",
        "Pelabuhan Merak (via KA Lokal)"
      ],
      "description": "Terminus barat KRL Commuter Line, titik transit bagi wisatawan dan penumpang menuju Pelabuhan Merak/Sumatera."
    },
    {
      "id": "grogol",
      "name": "Stasiun KRL Grogol",
      "shortName": "Grogol",
      "city": "Jakarta Barat",
      "x": 340,
      "y": 300,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_tangerang",
        "tj_3",
        "tj_8",
        "tj_9"
      ],
      "transfers": [
        "TransJakarta Halte Grogol Reformasi via Skybridge"
      ],
      "facilities": [
        "Skybridge Integrasi",
        "Lift",
        "Toilet"
      ],
      "nearby": [
        "Universitas Trisakti",
        "Untar",
        "Mall Ciputra (Citraland)"
      ],
      "description": "Stasiun terintegrasi Halte BRT Grogol dan kawasan universitas ternama."
    },
    {
      "id": "pesing",
      "name": "Stasiun KRL Pesing",
      "shortName": "Pesing",
      "city": "Jakarta Barat",
      "x": 310,
      "y": 290,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_tangerang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet"
      ],
      "nearby": [
        "Daan Mogot",
        "Kawasan Industri Pesing"
      ],
      "description": "Melayani area Daan Mogot Jakarta Barat."
    },
    {
      "id": "taman_kota",
      "name": "Stasiun KRL Taman Kota",
      "shortName": "Taman Kota",
      "city": "Jakarta Barat",
      "x": 280,
      "y": 280,
      "isHub": false,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_tangerang",
        "tj_3"
      ],
      "transfers": [
        "TJ Koridor 3 via Halte Taman Kota"
      ],
      "facilities": [
        "Toilet"
      ],
      "nearby": [
        "Kawasan Pemukiman Kembangan Utara"
      ],
      "description": "Stasiun komuter di Jalan Daan Mogot."
    },
    {
      "id": "bojong_indah",
      "name": "Stasiun KRL Bojong Indah",
      "shortName": "Bojong Indah",
      "city": "Jakarta Barat",
      "x": 250,
      "y": 270,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_tangerang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet"
      ],
      "nearby": [
        "Perumahan Bojong Indah",
        "Puri Indah (akses angkot)"
      ],
      "description": "Melayani pemukiman Bojong Indah Cengkareng."
    },
    {
      "id": "rawa_buaya",
      "name": "Stasiun KRL Rawa Buaya",
      "shortName": "Rawa Buaya",
      "city": "Jakarta Barat",
      "x": 220,
      "y": 260,
      "isHub": true,
      "modes": [
        "KRL",
        "KA Bandara",
        "TransJakarta"
      ],
      "lines": [
        "krl_tangerang",
        "ka_bandara_shia",
        "tj_3"
      ],
      "transfers": [
        "KA Bandara Soekarno-Hatta",
        "TransJakarta Koridor 3"
      ],
      "facilities": [
        "Peron Bertingkat",
        "Lift",
        "Eskalator",
        "Toilet",
        "Park & Ride"
      ],
      "nearby": [
        "Kantor Samsat Jakarta Barat",
        "Kawasan Cengkareng"
      ],
      "description": "Stasiun integrasi KRL Tangerang Line dengan Kereta Bandara Soekarno-Hatta di Jakarta Barat."
    },
    {
      "id": "kalideres_krl",
      "name": "Stasiun KRL Kalideres",
      "shortName": "Kalideres KRL",
      "city": "Jakarta Barat",
      "x": 190,
      "y": 250,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_tangerang"
      ],
      "transfers": [
        "Mikrotrans"
      ],
      "facilities": [
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Perumahan Daan Mogot Baru",
        "Terminal Kalideres (1 km)"
      ],
      "description": "Stasiun komuter perbatasan Jakarta Barat dan Tangerang."
    },
    {
      "id": "poris",
      "name": "Stasiun KRL Poris",
      "shortName": "Poris",
      "city": "Kota Tangerang",
      "x": 160,
      "y": 240,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_tangerang"
      ],
      "transfers": [
        "Angkot Tangerang"
      ],
      "facilities": [
        "Parkir",
        "Toilet"
      ],
      "nearby": [
        "Perumahan Poris Indah",
        "Terminal Poris Plawad (akses jalan kaki)"
      ],
      "description": "Melayani kawasan hunian padat Poris Plawad."
    },
    {
      "id": "batu_ceper",
      "name": "Stasiun Batu Ceper Intermodal",
      "shortName": "Batu Ceper",
      "city": "Kota Tangerang",
      "x": 130,
      "y": 230,
      "isHub": true,
      "modes": [
        "KRL",
        "KA Bandara",
        "TransJakarta"
      ],
      "lines": [
        "krl_tangerang",
        "ka_bandara_shia"
      ],
      "transfers": [
        "KA Bandara Soekarno-Hatta",
        "Terminal Poris Plawad"
      ],
      "facilities": [
        "Skybridge Integrasi Megah",
        "Lift",
        "Eskalator",
        "Lounge Bandara",
        "Toilet",
        "Park & Ride"
      ],
      "nearby": [
        "Terminal Poris Plawad",
        "Jalan Daan Mogot Tangerang",
        "Sentra Bus Antarkota"
      ],
      "description": "Pusat transfer multimoda strategis Kota Tangerang menuju Bandara Internasional Soekarno-Hatta."
    },
    {
      "id": "tanah_tinggi",
      "name": "Stasiun KRL Tanah Tinggi",
      "shortName": "Tanah Tinggi",
      "city": "Kota Tangerang",
      "x": 100,
      "y": 220,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_tangerang"
      ],
      "transfers": [
        "Angkot"
      ],
      "facilities": [
        "Toilet"
      ],
      "nearby": [
        "Pasar Induk Tanah Tinggi",
        "Kawasan Benteng Tangerang"
      ],
      "description": "Stasiun komuter dekat pasar induk buah dan sayur Tangerang."
    },
    {
      "id": "tangerang",
      "name": "Stasiun KRL Tangerang",
      "shortName": "Tangerang",
      "city": "Kota Tangerang",
      "x": 70,
      "y": 210,
      "isHub": true,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_tangerang"
      ],
      "transfers": [
        "TransBenteng",
        "TransKota Tangerang"
      ],
      "facilities": [
        "Gedung Stasiun Kolonial",
        "Park & Ride",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Pasar Lama Tangerang (Pusat Kuliner)",
        "Museum Benteng Heritage",
        "Klenteng Boen Tek Bio",
        "Masjid Raya Al-A'zhom"
      ],
      "description": "Terminus Tangerang Line peninggalan Belanda, pintu masuk wisata cagar budaya Pecinan Pasar Lama dan kuliner malam."
    },
    {
      "id": "ancol",
      "name": "Stasiun KRL Ancol",
      "shortName": "Ancol",
      "city": "Jakarta Utara",
      "x": 530,
      "y": 160,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_priok",
        "tj_5"
      ],
      "transfers": [
        "TransJakarta Koridor 5 (Halte Ancol)"
      ],
      "facilities": [
        "JPO Penyeberangan",
        "Toilet"
      ],
      "nearby": [
        "Taman Impian Jaya Ancol",
        "Dufan",
        "Sea World",
        "Pasar Seni Ancol"
      ],
      "description": "Stasiun komuter terdekat dengan gerbang rekreasi pantai Taman Impian Jaya Ancol."
    },
    {
      "id": "tanjung_priok",
      "name": "Stasiun KRL Tanjung Priok",
      "shortName": "Tanjung Priok",
      "city": "Jakarta Utara",
      "x": 650,
      "y": 140,
      "isHub": true,
      "modes": [
        "KRL",
        "TransJakarta"
      ],
      "lines": [
        "krl_priok",
        "tj_10",
        "tj_12"
      ],
      "transfers": [
        "TransJakarta Koridor 10 & 12 (Halte Tanjung Priok)",
        "Pelabuhan Penumpang Pelni"
      ],
      "facilities": [
        "Kubah Kanopi Besi Raksasa Cagar Budaya",
        "Toilet",
        "Musholla",
        "Area Parkir"
      ],
      "nearby": [
        "Pelabuhan Tanjung Priok",
        "Terminal Bus Tanjung Priok",
        "Museum Bahari (via bus)"
      ],
      "description": "Mahakarya stasiun cagar budaya bergaya Art Deco Belanda dengan kubah kanopi terluas di Indonesia, gerbang pelabuhan laut utama."
    },
    {
      "id": "halim_whoosh",
      "name": "Stasiun Kereta Cepat Whoosh Halim",
      "shortName": "Halim Whoosh",
      "city": "Jakarta Timur",
      "x": 680,
      "y": 540,
      "isHub": true,
      "modes": [
        "Whoosh",
        "LRT Jabodebek"
      ],
      "lines": [
        "whoosh_hsr",
        "lrt_bekasi"
      ],
      "transfers": [
        "LRT Jabodebek Stasiun Halim via Skybridge",
        "Shuttle Bandara Halim"
      ],
      "facilities": [
        "Lounge VIP Whoosh",
        "Gate Tiket Otomatis QR",
        "Skybridge Ber-AC",
        "Food Court Mewah",
        "Parkir Mobil Luas",
        "Musholla Eksekutif"
      ],
      "nearby": [
        "Stasiun LRT Halim",
        "Bandara Halim Perdanakusuma",
        "Tol Jagorawi & Cikampek"
      ],
      "description": "Stasiun keberangkatan utama Kereta Cepat pertama di Asia Tenggara, menempuh rute Jakarta-Bandung hanya 30-45 menit."
    },
    {
      "id": "karawang",
      "name": "Stasiun Kereta Cepat Karawang",
      "shortName": "Karawang Whoosh",
      "city": "Kabupaten Karawang",
      "x": 850,
      "y": 600,
      "isHub": false,
      "modes": [
        "Whoosh"
      ],
      "lines": [
        "whoosh_hsr"
      ],
      "transfers": [
        "Shuttle Kawasan Industri Karawang"
      ],
      "facilities": [
        "Lounge Penumpang",
        "Toilet Modern",
        "Parkir"
      ],
      "nearby": [
        "Kawasan Industri KIIC",
        "Surya Cipta",
        "Kota Deltamas"
      ],
      "description": "Stasiun kereta cepat penghubung sentra industri otomotif dan manufaktur nasional."
    },
    {
      "id": "padalarang",
      "name": "Stasiun Kereta Cepat Padalarang Hub",
      "shortName": "Padalarang",
      "city": "Kabupaten Bandung Barat",
      "x": 920,
      "y": 650,
      "isHub": true,
      "modes": [
        "Whoosh",
        "KAI Feeder Bandung"
      ],
      "lines": [
        "whoosh_hsr"
      ],
      "transfers": [
        "KA Feeder Whoosh langsung ke Stasiun Bandung Kota (15 menit)"
      ],
      "facilities": [
        "Skybridge Khusus KA Feeder",
        "Lounge Eksekutif",
        "Food Gallery"
      ],
      "nearby": [
        "Kota Baru Parahyangan",
        "Bumi Pancasona",
        "Situ Ciburuy"
      ],
      "description": "Stasiun hub integrasi transit kereta cepat ke KA Feeder menuju jantung pusat Kota Bandung."
    },
    {
      "id": "tegalluar",
      "name": "Stasiun Whoosh Tegalluar Summarecon",
      "shortName": "Tegalluar",
      "city": "Kabupaten Bandung",
      "x": 950,
      "y": 700,
      "isHub": true,
      "modes": [
        "Whoosh"
      ],
      "lines": [
        "whoosh_hsr"
      ],
      "transfers": [
        "Shuttle Bus Damri ke Alun-Alun Bandung & Mall Summarecon"
      ],
      "facilities": [
        "Lounge",
        "Komersial",
        "Parkir"
      ],
      "nearby": [
        "Stadion Gelora Bandung Lautan Api (GBLA)",
        "Masjid Raya Al-Jabbar",
        "Summarecon Bandung"
      ],
      "description": "Terminus timur Whoosh di Bandung Timur dekat Masjid Raya Al-Jabbar dan Stadion GBLA."
    },
    {
      "id": "bandara_shia",
      "name": "Stasiun KA Bandara Soekarno-Hatta (SHIA)",
      "shortName": "Bandara Soetta",
      "city": "Kota Tangerang",
      "x": 100,
      "y": 170,
      "isHub": true,
      "modes": [
        "KA Bandara",
        "Skytrain Kalayang"
      ],
      "lines": [
        "ka_bandara_shia"
      ],
      "transfers": [
        "Skytrain Kalayang Bandara gratis menghubungkan Terminal 1, 2, dan 3"
      ],
      "facilities": [
        "Lounge Eksekutif",
        "Check-in Kiosk",
        "Baggage Drop Info",
        "Eskalator & Lift",
        "Toilet Difabel",
        "Restoran"
      ],
      "nearby": [
        "Terminal 1, 2, 3 Bandara Soekarno-Hatta",
        "Hotel Bandara",
        "Area Kargo"
      ],
      "description": "Stasiun kereta bandara terintegrasi langsung dengan Kalayang (APMS) ke seluruh terminal penerbangan."
    },
    {
      "id": "harmoni",
      "name": "Halte Sentral TransJakarta Harmoni",
      "shortName": "Harmoni",
      "city": "Jakarta Pusat",
      "x": 470,
      "y": 280,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_1",
        "tj_2",
        "tj_3",
        "tj_8"
      ],
      "transfers": [
        "Koridor 1, 2, 3, 8",
        "Calon Stasiun MRT Harmoni"
      ],
      "facilities": [
        "Halte Transit Terluas",
        "Tap-in Gate Cepat",
        "Toilet Ramah Difabel"
      ],
      "nearby": [
        "Pusat Pertokoan Harmoni Exchange",
        "Sekretariat Negara",
        "Komplek Duta Merlin"
      ],
      "description": "Pusat persilangan koridor busway terbesar di kawasan pusat kota Jakarta."
    },
    {
      "id": "monas",
      "name": "Halte TransJakarta Monas",
      "shortName": "Halte Monas",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 300,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_1",
        "tj_2",
        "tj_3"
      ],
      "transfers": [
        "Koridor 1, 2, 3",
        "Calon Stasiun MRT Monas"
      ],
      "facilities": [
        "Halte Cagar Budaya Modern",
        "Tap-in Gate",
        "Papan Rute Digital"
      ],
      "nearby": [
        "Monumen Nasional (Monas)",
        "Museum Nasional (Gajah)",
        "Istana Merdeka",
        "Balai Kota DKI Jakarta"
      ],
      "description": "Halte utama wisatawan di pelataran barat Monas dan museum sejarah nasional."
    },
    {
      "id": "bundaran_hi_tj",
      "name": "Halte TransJakarta Bundaran HI Astra",
      "shortName": "Halte Bundaran HI",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 370,
      "isHub": true,
      "modes": [
        "TransJakarta",
        "MRT"
      ],
      "lines": [
        "tj_1",
        "mrt_ns"
      ],
      "transfers": [
        "MRT Bundaran HI",
        "Underground Concourse"
      ],
      "facilities": [
        "Anjungan Pandang Kapal Phinisi (Skydeck Foto)",
        "Lift Prioritas",
        "Toilet"
      ],
      "nearby": [
        "Patung Selamat Datang",
        "Grand Indonesia",
        "Plaza Indonesia"
      ],
      "description": "Halte ikonik dua lantai berbentuk anjungan kapal phinisi dengan spot foto terbaik Bundaran HI."
    },
    {
      "id": "dukuh_atas_tj",
      "name": "Halte TransJakarta Dukuh Atas",
      "shortName": "Halte Dukuh Atas",
      "city": "Jakarta Pusat",
      "x": 480,
      "y": 420,
      "isHub": true,
      "modes": [
        "TransJakarta",
        "MRT",
        "KRL",
        "KA Bandara"
      ],
      "lines": [
        "tj_1",
        "mrt_ns",
        "krl_cikarang",
        "ka_bandara_shia"
      ],
      "transfers": [
        "MRT Dukuh Atas BNI",
        "KRL Sudirman",
        "KA Bandara BNI City via JPM"
      ],
      "facilities": [
        "Jembatan Integrasi",
        "Lift",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Terowongan Kendal",
        "Wisma BNI 46",
        "Sudirman Walk"
      ],
      "description": "Halte Koridor 1 di kawasan superhub TOD Dukuh Atas."
    },
    {
      "id": "galunggung",
      "name": "Halte TransJakarta Galunggung (Dukuh Atas 2)",
      "shortName": "Halte Galunggung",
      "city": "Jakarta Selatan",
      "x": 490,
      "y": 425,
      "isHub": true,
      "modes": [
        "TransJakarta",
        "LRT Jabodebek"
      ],
      "lines": [
        "tj_4",
        "tj_6",
        "lrt_cibubur",
        "lrt_bekasi"
      ],
      "transfers": [
        "LRT Jabodebek Stasiun Dukuh Atas via Jembatan Multiguna",
        "KRL Sudirman"
      ],
      "facilities": [
        "Skybridge Integrasi LRT",
        "Lift",
        "Toilet"
      ],
      "nearby": [
        "Waduk Setiabudi",
        "Landmark Tower"
      ],
      "description": "Halte terminus Koridor 4 & 6 terintegrasi langsung dengan peron LRT Jabodebek Dukuh Atas."
    },
    {
      "id": "csw_integrasi",
      "name": "Halte Integrasi CSW (Cakra Selaras Wahana)",
      "shortName": "CSW Integrasi",
      "city": "Jakarta Selatan",
      "x": 420,
      "y": 550,
      "isHub": true,
      "modes": [
        "TransJakarta",
        "MRT"
      ],
      "lines": [
        "tj_13",
        "tj_1",
        "mrt_ns"
      ],
      "transfers": [
        "MRT Stasiun ASEAN",
        "Koridor 13 Melayang",
        "Koridor 1"
      ],
      "facilities": [
        "Skybridge Melingkar 5 Lantai",
        "Lift Kaca",
        "Musholla",
        "Kedai Kopi"
      ],
      "nearby": [
        "Taman Martha Tiahahu",
        "Kejaksaan Agung",
        "MABES POLRI"
      ],
      "description": "Halte layang melingkar 5 lantai yang menghubungkan jalur layang Koridor 13 dengan MRT ASEAN."
    },
    {
      "id": "velbak",
      "name": "Halte TransJakarta Velbak Skybridge",
      "shortName": "Velbak",
      "city": "Jakarta Selatan",
      "x": 380,
      "y": 470,
      "isHub": true,
      "modes": [
        "TransJakarta",
        "KRL"
      ],
      "lines": [
        "tj_13",
        "tj_8",
        "krl_rangkas"
      ],
      "transfers": [
        "KRL Stasiun Kebayoran via Skybridge Kebayoran",
        "Koridor 8"
      ],
      "facilities": [
        "Skybridge 500 Meter",
        "Eskalator",
        "Lift"
      ],
      "nearby": [
        "Pasar Kebayoran Lama",
        "Gandaria City"
      ],
      "description": "Halte melayang Koridor 13 yang terhubung skybridge terpanjang ke Stasiun KRL Kebayoran."
    },
    {
      "id": "kampung_melayu",
      "name": "Terminal Bus & Halte TJ Kampung Melayu",
      "shortName": "Kp Melayu",
      "city": "Jakarta Timur",
      "x": 590,
      "y": 470,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_5",
        "tj_7",
        "tj_11"
      ],
      "transfers": [
        "Koridor 5, 7, 11",
        "Mikrotrans"
      ],
      "facilities": [
        "Halte Transit Besar",
        "Area UMKM",
        "Toilet"
      ],
      "nearby": [
        "Pasar Kampung Melayu",
        "Kawasan Jatinegara Barat",
        "Sungai Ciliwung"
      ],
      "description": "Terminal transit tersibuk di Jakarta Timur penghubung Ancol, Pulo Gebang, dan Kampung Rambutan."
    },
    {
      "id": "pulogadung",
      "name": "Terminal Bus & Halte TJ Pulo Gadung",
      "shortName": "Pulo Gadung",
      "city": "Jakarta Timur",
      "x": 720,
      "y": 360,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_2",
        "tj_4"
      ],
      "transfers": [
        "Koridor 2 & 4",
        "Angkutan Antarkota"
      ],
      "facilities": [
        "Terminal Bus",
        "Musholla",
        "Toilet"
      ],
      "nearby": [
        "Kawasan Industri Pulogadung (JIEP)",
        "Pasar Pulogadung"
      ],
      "description": "Terminal transit di perbatasan Jakarta Timur dan Jakarta Utara."
    },
    {
      "id": "pulo_gebang",
      "name": "Terminal Terpadu Pulo Gebang",
      "shortName": "Pulo Gebang",
      "city": "Jakarta Timur",
      "x": 820,
      "y": 430,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_11"
      ],
      "transfers": [
        "Bus AKAP Antarkota Se-Jawa & Sumatera",
        "KRL Cakung (feeder)"
      ],
      "facilities": [
        "Terminal Bus Terbesar di Asia Tenggara",
        "Lift",
        "Eskalator",
        "Hotel Transit",
        "Pusat Perbelanjaan",
        "Musholla Luas"
      ],
      "nearby": [
        "Kantor Walikota Jakarta Timur",
        "Sentra Penggilingan"
      ],
      "description": "Terminal bus tipe A termegah dan terbesar di Asia Tenggara dengan fasilitas bertaraf bandara internasional."
    },
    {
      "id": "kalideres_tj",
      "name": "Terminal & Halte TJ Kalideres",
      "shortName": "Kalideres TJ",
      "city": "Jakarta Barat",
      "x": 180,
      "y": 260,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_3"
      ],
      "transfers": [
        "Koridor 3",
        "Bus Antarkota Banten & Jawa"
      ],
      "facilities": [
        "Terminal Bus",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Daan Mogot",
        "Kawasan Niaga Kalideres"
      ],
      "description": "Terminal perbatasan barat DKI Jakarta melayani rute Koridor 3 ke Monas."
    },
    {
      "id": "ragunan",
      "name": "Terminal & Halte TJ Ragunan",
      "shortName": "Ragunan",
      "city": "Jakarta Selatan",
      "x": 530,
      "y": 690,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_6"
      ],
      "transfers": [
        "Koridor 6",
        "Mikrotrans"
      ],
      "facilities": [
        "Halte Luas Pintu Gerbang Zoo",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Taman Margasatwa Ragunan",
        "Pusat Primata Schmutzer",
        "GOR Ragunan"
      ],
      "description": "Terminus Koridor 6 tepat di pintu masuk utama Kebun Binatang Ragunan."
    },
    {
      "id": "pinang_ranti",
      "name": "Terminal & Halte TJ Pinang Ranti",
      "shortName": "Pinang Ranti",
      "city": "Jakarta Timur",
      "x": 650,
      "y": 600,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_9"
      ],
      "transfers": [
        "Koridor 9",
        "Mikrotrans"
      ],
      "facilities": [
        "Terminal Transit",
        "Toilet",
        "Musholla"
      ],
      "nearby": [
        "Asrama Haji Pondok Gede",
        "Tamini Square",
        "TMII"
      ],
      "description": "Terminus timur Koridor 9 melayani rute Pluit dan Grogol."
    },
    {
      "id": "pgc",
      "name": "Halte TransJakarta PGC Cililitan",
      "shortName": "PGC Cililitan",
      "city": "Jakarta Timur",
      "x": 610,
      "y": 550,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_7",
        "tj_10"
      ],
      "transfers": [
        "Koridor 7 & 10",
        "Mikrotrans"
      ],
      "facilities": [
        "Halte Terintegrasi Pusat Grosir",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Pusat Grosir Cililitan (PGC)",
        "Kawasan Mayjen Sutoyo"
      ],
      "description": "Halte transit yang menyatu langsung dengan pusat perbelanjaan PGC Cililitan."
    },
    {
      "id": "jis",
      "name": "Halte Jakarta International Stadium (JIS)",
      "shortName": "JIS",
      "city": "Jakarta Utara",
      "x": 530,
      "y": 140,
      "isHub": true,
      "modes": [
        "TransJakarta",
        "KRL (Dalam Perencanaan)"
      ],
      "lines": [
        "tj_14"
      ],
      "transfers": [
        "Koridor 14",
        "Feeder JIS - Harmoni"
      ],
      "facilities": [
        "Concourse Megah Ramah Pejalan Kaki",
        "Lift Difabel",
        "Toilet"
      ],
      "nearby": [
        "Jakarta International Stadium (JIS)",
        "Danau Cincin",
        "Taman BMW"
      ],
      "description": "Halte akses langsung menuju stadion bertaraf FIFA berkapasitas 82.000 penonton."
    },
    {
      "id": "pluit",
      "name": "Halte TransJakarta Pluit",
      "shortName": "Pluit",
      "city": "Jakarta Utara",
      "x": 310,
      "y": 160,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_9",
        "tj_12"
      ],
      "transfers": [
        "Koridor 9 & 12",
        "Feeder Pantai Indah Kapuk (PIK)"
      ],
      "facilities": [
        "Halte Transit",
        "Toilet"
      ],
      "nearby": [
        "Pluit Junction",
        "Pluit Village",
        "Kawasan Muara Karang"
      ],
      "description": "Terminus barat Koridor 9 dan 12 dekat sentra kuliner Muara Karang dan akses ke PIK."
    },
    {
      "id": "pasar_baru",
      "name": "Halte TransJakarta Pasar Baru",
      "shortName": "Pasar Baru",
      "city": "Jakarta Pusat",
      "x": 490,
      "y": 270,
      "isHub": true,
      "modes": [
        "TransJakarta",
        "KRL"
      ],
      "lines": [
        "tj_5",
        "tj_8",
        "krl_bogor"
      ],
      "transfers": [
        "Koridor 5 & 8",
        "KRL Stasiun Juanda"
      ],
      "facilities": [
        "Halte Transit",
        "Toilet"
      ],
      "nearby": [
        "Kawasan Heritage Pasar Baru",
        "Gedung Kesenian Jakarta (GKJ)",
        "Kantor Pos Filateli"
      ],
      "description": "Gerbang masuk kawasan belanja heritage tertua di Jakarta Pasar Baru dan Gedung Kesenian Jakarta."
    },
    {
      "id": "senen",
      "name": "Halte Sentral TransJakarta Senen",
      "shortName": "Senen Sentral",
      "city": "Jakarta Pusat",
      "x": 530,
      "y": 265,
      "isHub": true,
      "modes": [
        "TransJakarta",
        "KRL"
      ],
      "lines": [
        "tj_2",
        "tj_5",
        "tj_14",
        "krl_cikarang"
      ],
      "transfers": [
        "Stasiun KRL Pasar Senen via JPO Ber-AC",
        "Koridor 2, 5, 14"
      ],
      "facilities": [
        "JPO Cakra Senen Ikonik",
        "Lift Difabel",
        "Eskalator",
        "Toilet"
      ],
      "nearby": [
        "Pasar Senen Jaya",
        "Plaza Atrium Senen",
        "Pasar Kue Subuh Senen"
      ],
      "description": "Halte transit akbar tiga koridor BRT yang terhubung jembatan megah ke Stasiun KRL Pasar Senen."
    },
    {
      "id": "cbd_ciledug",
      "name": "Halte BRT CBD Ciledug",
      "shortName": "CBD Ciledug",
      "city": "Kota Tangerang",
      "x": 290,
      "y": 550,
      "isHub": true,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_13"
      ],
      "transfers": [
        "Koridor 13 Jalur Layang (Elevated BRT)"
      ],
      "facilities": [
        "Halte Transit",
        "Parkir",
        "Toilet"
      ],
      "nearby": [
        "Mall CBD Ciledug",
        "Kawasan Ciledug Raya"
      ],
      "description": "Terminus barat Koridor 13 bus layang bebas macet yang menghubungkan Tangerang ke Tendean Jakarta Selatan."
    },
    {
      "id": "cempaka_timur",
      "name": "Halte TJ Cempaka Timur",
      "shortName": "Cempaka Timur",
      "city": "Jakarta Pusat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_2"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Cempaka Timur"
      ],
      "description": "Stasiun / Halte Halte TJ Cempaka Timur melayani jaringan terintegrasi."
    },
    {
      "id": "rawa_buaya_tj",
      "name": "Halte TJ Rawa Buaya",
      "shortName": "Rawa Buaya TJ",
      "city": "Jakarta Barat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_3"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Rawa Buaya"
      ],
      "description": "Stasiun / Halte Halte TJ Rawa Buaya melayani jaringan terintegrasi."
    },
    {
      "id": "pemuda_rawamangun",
      "name": "Halte TJ Pemuda Rawamangun",
      "shortName": "Pemuda Rawamangun",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta",
        "LRT Jakarta"
      ],
      "lines": [
        "tj_4",
        "lrt_jkt_1"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Pemuda Rawamangun"
      ],
      "description": "Stasiun / Halte Halte TJ Pemuda Rawamangun melayani jaringan terintegrasi."
    },
    {
      "id": "pramuka",
      "name": "Halte TJ Pramuka",
      "shortName": "Pramuka",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_4"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Pramuka"
      ],
      "description": "Stasiun / Halte Halte TJ Pramuka melayani jaringan terintegrasi."
    },
    {
      "id": "mangga_dua",
      "name": "Halte TJ Mangga Dua",
      "shortName": "Mangga Dua",
      "city": "Jakarta Utara",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_5",
        "tj_12"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Mangga Dua"
      ],
      "description": "Stasiun / Halte Halte TJ Mangga Dua melayani jaringan terintegrasi."
    },
    {
      "id": "mampang_prapatan",
      "name": "Halte TJ Mampang Prapatan",
      "shortName": "Mampang",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_6"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Mampang Prapatan"
      ],
      "description": "Stasiun / Halte Halte TJ Mampang Prapatan melayani jaringan terintegrasi."
    },
    {
      "id": "rasuna_said_tj",
      "name": "Halte TJ Rasuna Said",
      "shortName": "Rasuna Said TJ",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_6"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Rasuna Said"
      ],
      "description": "Stasiun / Halte Halte TJ Rasuna Said melayani jaringan terintegrasi."
    },
    {
      "id": "pasar_rebo",
      "name": "Halte TJ Pasar Rebo",
      "shortName": "Pasar Rebo",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_7"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Pasar Rebo"
      ],
      "description": "Stasiun / Halte Halte TJ Pasar Rebo melayani jaringan terintegrasi."
    },
    {
      "id": "cawang_otista",
      "name": "Halte TJ Cawang Otista",
      "shortName": "Cawang Otista",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_7"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Cawang Otista"
      ],
      "description": "Stasiun / Halte Halte TJ Cawang Otista melayani jaringan terintegrasi."
    },
    {
      "id": "pondok_indah",
      "name": "Halte TJ Pondok Indah",
      "shortName": "Pondok Indah",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_8"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Pondok Indah"
      ],
      "description": "Stasiun / Halte Halte TJ Pondok Indah melayani jaringan terintegrasi."
    },
    {
      "id": "kebayoran_lama",
      "name": "Halte TJ Kebayoran Lama",
      "shortName": "Kebayoran Lama",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_8"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Kebayoran Lama"
      ],
      "description": "Stasiun / Halte Halte TJ Kebayoran Lama melayani jaringan terintegrasi."
    },
    {
      "id": "tamini",
      "name": "Halte TJ Tamini Square",
      "shortName": "Tamini",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_9"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Tamini Square"
      ],
      "description": "Stasiun / Halte Halte TJ Tamini Square melayani jaringan terintegrasi."
    },
    {
      "id": "cawang_sutoyo",
      "name": "Halte TJ Cawang Sutoyo",
      "shortName": "Cawang Sutoyo",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_9",
        "tj_10"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Cawang Sutoyo"
      ],
      "description": "Stasiun / Halte Halte TJ Cawang Sutoyo melayani jaringan terintegrasi."
    },
    {
      "id": "gatot_subroto",
      "name": "Halte TJ Gatot Subroto",
      "shortName": "Gatot Subroto",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_9"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Gatot Subroto"
      ],
      "description": "Stasiun / Halte Halte TJ Gatot Subroto melayani jaringan terintegrasi."
    },
    {
      "id": "semanggi",
      "name": "Halte TJ Semanggi",
      "shortName": "Semanggi",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_9"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Semanggi"
      ],
      "description": "Stasiun / Halte Halte TJ Semanggi melayani jaringan terintegrasi."
    },
    {
      "id": "slipi",
      "name": "Halte TJ Slipi Petamburan",
      "shortName": "Slipi",
      "city": "Jakarta Barat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_9"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Slipi Petamburan"
      ],
      "description": "Stasiun / Halte Halte TJ Slipi Petamburan melayani jaringan terintegrasi."
    },
    {
      "id": "pedati_prumpung",
      "name": "Halte TJ Pedati Prumpung",
      "shortName": "Pedati Prumpung",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_10"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Pedati Prumpung"
      ],
      "description": "Stasiun / Halte Halte TJ Pedati Prumpung melayani jaringan terintegrasi."
    },
    {
      "id": "cempaka_putih",
      "name": "Halte TJ Cempaka Putih",
      "shortName": "Cempaka Putih",
      "city": "Jakarta Pusat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_10"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Cempaka Putih"
      ],
      "description": "Stasiun / Halte Halte TJ Cempaka Putih melayani jaringan terintegrasi."
    },
    {
      "id": "sunter_kelapa_gading",
      "name": "Halte TJ Sunter Kelapa Gading",
      "shortName": "Sunter KG",
      "city": "Jakarta Utara",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_10",
        "tj_12"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Sunter Kelapa Gading"
      ],
      "description": "Stasiun / Halte Halte TJ Sunter Kelapa Gading melayani jaringan terintegrasi."
    },
    {
      "id": "kantor_walikota_jaktim",
      "name": "Halte TJ Kantor Walikota Jaktim",
      "shortName": "Walikota Jaktim",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_11"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Kantor Walikota Jaktim"
      ],
      "description": "Stasiun / Halte Halte TJ Kantor Walikota Jaktim melayani jaringan terintegrasi."
    },
    {
      "id": "buaran_tj",
      "name": "Halte TJ Buaran",
      "shortName": "Buaran TJ",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_11"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Buaran"
      ],
      "description": "Stasiun / Halte Halte TJ Buaran melayani jaringan terintegrasi."
    },
    {
      "id": "klender_tj",
      "name": "Halte TJ Klender",
      "shortName": "Klender TJ",
      "city": "Jakarta Timur",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_11"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Klender"
      ],
      "description": "Stasiun / Halte Halte TJ Klender melayani jaringan terintegrasi."
    },
    {
      "id": "penjaringan",
      "name": "Halte TJ Penjaringan",
      "shortName": "Penjaringan",
      "city": "Jakarta Utara",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_12"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Penjaringan"
      ],
      "description": "Stasiun / Halte Halte TJ Penjaringan melayani jaringan terintegrasi."
    },
    {
      "id": "gunung_sahari",
      "name": "Halte TJ Gunung Sahari",
      "shortName": "Gunung Sahari",
      "city": "Jakarta Utara",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_12"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Gunung Sahari"
      ],
      "description": "Stasiun / Halte Halte TJ Gunung Sahari melayani jaringan terintegrasi."
    },
    {
      "id": "puri_beta",
      "name": "Halte TJ Puri Beta",
      "shortName": "Puri Beta",
      "city": "Kota Tangerang",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_13"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Puri Beta"
      ],
      "description": "Stasiun / Halte Halte TJ Puri Beta melayani jaringan terintegrasi."
    },
    {
      "id": "cipulir",
      "name": "Halte TJ Cipulir",
      "shortName": "Cipulir",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_13"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Cipulir"
      ],
      "description": "Stasiun / Halte Halte TJ Cipulir melayani jaringan terintegrasi."
    },
    {
      "id": "mayestik",
      "name": "Halte TJ Mayestik",
      "shortName": "Mayestik",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_13"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Mayestik"
      ],
      "description": "Stasiun / Halte Halte TJ Mayestik melayani jaringan terintegrasi."
    },
    {
      "id": "tendean",
      "name": "Halte TJ Tegal Mampang / Tendean",
      "shortName": "Tendean",
      "city": "Jakarta Selatan",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_13"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Tegal Mampang / Tendean"
      ],
      "description": "Stasiun / Halte Halte TJ Tegal Mampang / Tendean melayani jaringan terintegrasi."
    },
    {
      "id": "danau_agung",
      "name": "Halte TJ Danau Agung",
      "shortName": "Danau Agung",
      "city": "Jakarta Utara",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_14"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Danau Agung"
      ],
      "description": "Stasiun / Halte Halte TJ Danau Agung melayani jaringan terintegrasi."
    },
    {
      "id": "kemayoran_tj",
      "name": "Halte TJ Kemayoran Landas Pacu",
      "shortName": "Kemayoran TJ",
      "city": "Jakarta Pusat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_14"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Kemayoran Landas Pacu"
      ],
      "description": "Stasiun / Halte Halte TJ Kemayoran Landas Pacu melayani jaringan terintegrasi."
    },
    {
      "id": "tanah_tinggi_tj",
      "name": "Halte TJ Tanah Tinggi Senen",
      "shortName": "Tanah Tinggi TJ",
      "city": "Jakarta Pusat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_14"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Tanah Tinggi Senen"
      ],
      "description": "Stasiun / Halte Halte TJ Tanah Tinggi Senen melayani jaringan terintegrasi."
    },
    {
      "id": "sawah_besar_tj",
      "name": "Halte TJ Sawah Besar",
      "shortName": "Sawah Besar TJ",
      "city": "Jakarta Pusat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_1"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Sawah Besar"
      ],
      "description": "Stasiun / Halte Halte TJ Sawah Besar melayani jaringan terintegrasi."
    },
    {
      "id": "mangga_besar_tj",
      "name": "Halte TJ Mangga Besar",
      "shortName": "Mangga Besar TJ",
      "city": "Jakarta Barat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_1"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Mangga Besar"
      ],
      "description": "Stasiun / Halte Halte TJ Mangga Besar melayani jaringan terintegrasi."
    },
    {
      "id": "glodok",
      "name": "Halte TJ Glodok Chinatown",
      "shortName": "Glodok",
      "city": "Jakarta Barat",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "TransJakarta"
      ],
      "lines": [
        "tj_1"
      ],
      "transfers": [
        "Koneksi transit TransJakarta"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Halte TJ Glodok Chinatown"
      ],
      "description": "Stasiun / Halte Halte TJ Glodok Chinatown melayani jaringan terintegrasi."
    },
    {
      "id": "cicayur",
      "name": "Stasiun KRL Cicayur",
      "shortName": "Cicayur",
      "city": "Kabupaten Tangerang",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Koneksi transit KRL"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Stasiun KRL Cicayur"
      ],
      "description": "Stasiun / Halte Stasiun KRL Cicayur melayani jaringan terintegrasi."
    },
    {
      "id": "cilejit",
      "name": "Stasiun KRL Cilejit",
      "shortName": "Cilejit",
      "city": "Kabupaten Bogor",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Koneksi transit KRL"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Stasiun KRL Cilejit"
      ],
      "description": "Stasiun / Halte Stasiun KRL Cilejit melayani jaringan terintegrasi."
    },
    {
      "id": "daru",
      "name": "Stasiun KRL Daru",
      "shortName": "Daru",
      "city": "Kabupaten Tangerang",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Koneksi transit KRL"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Stasiun KRL Daru"
      ],
      "description": "Stasiun / Halte Stasiun KRL Daru melayani jaringan terintegrasi."
    },
    {
      "id": "tenjo",
      "name": "Stasiun KRL Tenjo",
      "shortName": "Tenjo",
      "city": "Kabupaten Bogor",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Koneksi transit KRL"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Stasiun KRL Tenjo"
      ],
      "description": "Stasiun / Halte Stasiun KRL Tenjo melayani jaringan terintegrasi."
    },
    {
      "id": "cikoya",
      "name": "Stasiun KRL Cikoya",
      "shortName": "Cikoya",
      "city": "Kabupaten Tangerang",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Koneksi transit KRL"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Stasiun KRL Cikoya"
      ],
      "description": "Stasiun / Halte Stasiun KRL Cikoya melayani jaringan terintegrasi."
    },
    {
      "id": "citeras",
      "name": "Stasiun KRL Citeras",
      "shortName": "Citeras",
      "city": "Kabupaten Lebak",
      "x": 500,
      "y": 400,
      "isHub": false,
      "modes": [
        "KRL"
      ],
      "lines": [
        "krl_rangkas"
      ],
      "transfers": [
        "Koneksi transit KRL"
      ],
      "facilities": [
        "Tap-in Gate",
        "Toilet"
      ],
      "nearby": [
        "Area sekitar Stasiun KRL Citeras"
      ],
      "description": "Stasiun / Halte Stasiun KRL Citeras melayani jaringan terintegrasi."
    }
  ],
  "landmarks": [
    {
      "id": "bundaran_hi",
      "name": "Bundaran HI & Skydeck Halte Phinisi",
      "category": "Ikon Modern & Belanja",
      "mode": "MRT Jakarta",
      "stationId": "bundaran_hi",
      "accessMode": "MRT Stasiun Bundaran HI Bank DKI / TJ Koridor 1 Halte Bundaran HI Astra",
      "description": "Spot foto panorama ibu kota terbaik dari anjungan kapal phinisi menghadap Patung Selamat Datang, terkoneksi langsung ke Grand Indonesia dan Plaza Indonesia."
    },
    {
      "id": "gbk",
      "name": "Gelora Bung Karno (GBK) & Hutan Kota Plataran",
      "category": "Olahraga & Alam",
      "mode": "MRT Jakarta",
      "stationId": "istora",
      "accessMode": "MRT Stasiun Istora Mandiri atau Senayan / TJ Koridor 1 Halte GBK",
      "description": "Pusat olahraga berstandar dunia dengan jogging track terpopuler, Hutan Kota rindang berlatar gedung pencakar langit Sudirman, dan panggung konser internasional."
    },
    {
      "id": "m_bloc",
      "name": "M Bloc Space & Pasar Kuliner Blok M",
      "category": "Kreatif & Kuliner",
      "mode": "MRT Jakarta",
      "stationId": "blok_m",
      "accessMode": "MRT Stasiun Blok M BCA / TJ Koridor 1 & 13 Halte CSW/Blok M",
      "description": "Kawasan kreatif anak muda dengan deretan kafe vintage, gigs musik indie, toko rekaman vinyl, galeri seni, dan sentra kuliner legendaris Gultik serta Little Tokyo Melawai."
    },
    {
      "id": "taman_literasi",
      "name": "Taman Literasi Martha Christina Tiahahu & CSW",
      "category": "Taman & Edukasi",
      "mode": "MRT Jakarta",
      "stationId": "asean",
      "accessMode": "MRT Stasiun ASEAN / Halte CSW Melayang Koridor 13 & 1",
      "description": "Taman kota melingkar dengan perpustakaan terbuka ramah buku, plaza amfiteater seni, dan jembatan skybridge multilevel CSW berarsitektur spektakuler."
    },
    {
      "id": "cipete_kuliner",
      "name": "Sentra Kuliner & Artisan Coffee Cipete",
      "category": "Wisata Kuliner",
      "mode": "MRT Jakarta",
      "stationId": "cipete_raya",
      "accessMode": "MRT Stasiun Cipete Raya",
      "description": "Surga pecinta kopi dan kuliner di Jakarta Selatan dengan puluhan kedai kopi specialty, restoran Nusantara modern, dan pastry artisan."
    },
    {
      "id": "museum_layang",
      "name": "Museum Layang-Layang Indonesia & Cilandak",
      "category": "Seni & Budaya",
      "mode": "MRT Jakarta",
      "stationId": "fatmawati",
      "accessMode": "MRT Stasiun Fatmawati Indomaret dilanjutkan angkot/ojek 5 menit",
      "description": "Museum unik pertama di Indonesia yang menyimpan lebih dari 600 koleksi layang-layang tradisional dari Sabang sampai Merauke beserta workshop pembuatan layang-layang."
    },
    {
      "id": "tmii",
      "name": "Taman Mini Indonesia Indah (TMII)",
      "category": "Budaya & Rekreasi",
      "mode": "LRT Jabodebek",
      "stationId": "tmii",
      "accessMode": "LRT Jabodebek Stasiun TMII dilanjutkan shuttle bus listrik gratis ke pintu gerbang",
      "description": "Taman budaya seluas 150 hektar berkonsep hijau ramah pejalan kaki dengan miniatur kepulauan Nusantara, anjungan 38 provinsi, kereta gantung, dan museum budaya."
    },
    {
      "id": "whoosh_halim",
      "name": "Stasiun Kereta Cepat Whoosh Halim",
      "category": "Transportasi Modern",
      "mode": "LRT Jabodebek",
      "stationId": "halim_lrt",
      "accessMode": "LRT Jabodebek Lin Bekasi turun di Stasiun Halim terhubung skybridge langsung",
      "description": "Rasakan kemegahan stasiun kereta cepat pertama di Asia Tenggara berkecepatan 350 km/jam melintasi pegunungan menuju Bandung dalam 30 menit."
    },
    {
      "id": "tebet_eco_park",
      "name": "Tebet Eco Park & Infinity Link Bridge",
      "category": "Taman & Rekreasi",
      "mode": "LRT Jabodebek",
      "stationId": "ciliwung",
      "accessMode": "LRT Jabodebek Stasiun Ciliwung atau KRL Stasiun Cawang",
      "description": "Taman kota seluas 7 hektar peraih penghargaan arsitektur dunia dengan jembatan melingkar Infinity Link Bridge, plaza tematik anak, dan wetland alami."
    },
    {
      "id": "rasuna_epicentrum",
      "name": "Kawasan Rasuna Epicentrum & Riverwalk",
      "category": "Gaya Hidup & Kuliner",
      "mode": "LRT Jabodebek",
      "stationId": "rasuna_said",
      "accessMode": "LRT Jabodebek Stasiun Rasuna Said / TJ Koridor 6 Halte GOR Soemantri",
      "description": "Kawasan waterfront riverwalk di tengah segitiga emas Kuningan dengan pusat kuliner Plaza Festival, gedung pertunjukan seni Usmar Ismail Hall, dan bioskop bioskop premier."
    },
    {
      "id": "trans_studio_cibubur",
      "name": "Trans Studio Mall & Theme Park Cibubur",
      "category": "Taman Hiburan & Belanja",
      "mode": "LRT Jabodebek",
      "stationId": "harjamukti",
      "accessMode": "LRT Jabodebek Stasiun Harjamukti dilanjutkan angkutan pengumpan 5 menit",
      "description": "Taman bermain indoor berteknologi mutakhir kelas dunia dengan wahana rollercoaster ekstrim, wahana 4D, dan pusat perbelanjaan keluarga megah."
    },
    {
      "id": "summarecon_bekasi",
      "name": "Summarecon Mall Bekasi & Danau Bulevar",
      "category": "Belanja & Hiburan",
      "mode": "LRT Jabodebek",
      "stationId": "bekasi_barat",
      "accessMode": "LRT Jabodebek Stasiun Bekasi Barat atau KRL Stasiun Bekasi",
      "description": "Mall megah keluarga di Kota Bekasi dengan sentra kuliner The Downtown Walk, wahana permainan salju Trans Snow World, dan danau asri."
    },
    {
      "id": "velodrome_jiv",
      "name": "Jakarta International Velodrome (JIV)",
      "category": "Olahraga & Rekreasi",
      "mode": "LRT Jakarta",
      "stationId": "velodrome",
      "accessMode": "LRT Jakarta Stasiun Velodrome / TJ Koridor 4 Halte Pemuda Rawamangun",
      "description": "Arena balap sepeda kayu Siberia bersertifikasi internasional UCI terbaik di Asia dengan pelataran taman luas untuk jogging, sepatu roda, dan kuliner sore."
    },
    {
      "id": "mall_kelapa_gading",
      "name": "Mall Kelapa Gading (MKG) & La Piazza",
      "category": "Belanja & Kuliner",
      "mode": "LRT Jakarta",
      "stationId": "boulevard_utara",
      "accessMode": "LRT Jakarta Stasiun Boulevard Utara via skybridge langsung ke mall",
      "description": "Kawasan perbelanjaan seluas 150.000 m² terintegrasi dengan ratusan restoran legendaris di Gading Food City, event kuliner internasional, dan bioskop IMAX."
    },
    {
      "id": "equestrian_park",
      "name": "Jakarta International Equestrian Park (JIEPP)",
      "category": "Alam & Rekreasi",
      "mode": "LRT Jakarta",
      "stationId": "equestrian",
      "accessMode": "LRT Jakarta Stasiun Equestrian",
      "description": "Arena pacuan kuda modern berstandar Olimpiade yang dikelilingi taman hijau rimbun dan jogging track teduh di kawasan Pulomas."
    },
    {
      "id": "kota_tua",
      "name": "Kota Tua Jakarta & Museum Fatahillah",
      "category": "Warisan Sejarah (Heritage)",
      "mode": "KRL Commuter",
      "stationId": "jakarta_kota",
      "accessMode": "KRL Stasiun Jakarta Kota (Beos) keluar terowongan langsung ke plaza / TJ Koridor 1",
      "description": "Pusat kolonial Batavia abad ke-17 dengan gedung bersejarah peninggalan VOC, persewaan sepeda ontel warna-warni, Museum Wayang, Cafe Batavia, dan Museum Keramik."
    },
    {
      "id": "istiqlal_katedral",
      "name": "Masjid Istiqlal & Gereja Katedral Jakarta",
      "category": "Simbol Toleransi & Religi",
      "mode": "KRL Commuter",
      "stationId": "juanda",
      "accessMode": "KRL Stasiun Juanda / TJ Koridor 2 Halte Juanda",
      "description": "Dua rumah ibadah megah bersejarah yang berdiri berdampingan dan terhubung oleh Terowongan Silaturahmi bawah tanah sebagai simbol kerukunan beragama di Indonesia."
    },
    {
      "id": "pasar_baru",
      "name": "Pasar Baru Heritage & Little India",
      "category": "Heritage & Belanja",
      "mode": "KRL Commuter",
      "stationId": "juanda",
      "accessMode": "KRL Stasiun Juanda jalan kaki 5 menit atau TJ Koridor 8 Halte Pasar Baru",
      "description": "Kawasan perbelanjaan tertua di Jakarta yang berdiri sejak tahun 1820, terkenal dengan toko tekstil India, tailor jas tradisional, kacamata antik, dan kuliner Bakmi Gang Kelinci."
    },
    {
      "id": "tanah_abang_market",
      "name": "Pasar Grosir Tekstil Tanah Abang",
      "category": "Belanja Grosir & Fashion",
      "mode": "KRL Commuter",
      "stationId": "tanah_abang",
      "accessMode": "KRL Stasiun Tanah Abang terhubung langsung via skybridge jembatan multiguna",
      "description": "Pusat perdagangan grosir tekstil dan pakaian muslim terbesar di Asia Tenggara dengan ribuan gerai pedagang busana fashion."
    },
    {
      "id": "tim_cikini",
      "name": "Taman Ismail Marzuki (TIM) & Perpustakaan Jakarta",
      "category": "Seni & Literasi",
      "mode": "KRL Commuter",
      "stationId": "cikini",
      "accessMode": "KRL Stasiun Cikini jalan kaki 7 menit",
      "description": "Pusat kesenian dan kebudayaan Jakarta yang baru saja direvitalisasi megah, memiliki teater modern, galeri seni rupa, Planetarium, dan Perpustakaan Jakarta bertaraf internasional."
    },
    {
      "id": "ragunan_zoo",
      "name": "Taman Margasatwa Ragunan (Kebun Binatang)",
      "category": "Edukasi & Satwa",
      "mode": "TransJakarta",
      "stationId": "ragunan",
      "accessMode": "TransJakarta Koridor 6 langsung ke Halte Terminal Ragunan / KRL Stasiun Tanjung Barat",
      "description": "Kebun binatang tropis seluas 147 hektar dengan lebih dari 2.000 satwa langka, Pusat Primata Schmutzer berstandar dunia, dan danau rekreasi keluarga."
    },
    {
      "id": "kebun_raya_bogor",
      "name": "Kebun Raya Bogor & Istana Kepresidenan",
      "category": "Alam & Sejarah",
      "mode": "KRL Commuter",
      "stationId": "bogor",
      "accessMode": "KRL Stasiun Bogor lanjut jalan kaki 10 menit melalui Alun-Alun Kota Bogor",
      "description": "Kebun botani tertua di Asia Tenggara seluas 87 hektar peninggalan tahun 1817 yang memelihara 15.000 koleksi pohon dan tanaman langka berhadapan dengan Istana Kepresidenan."
    },
    {
      "id": "chinatown_glodok",
      "name": "Kawasan Pecinan Glodok & Petak Sembilan",
      "category": "Heritage & Kuliner",
      "mode": "KRL Commuter",
      "stationId": "jakarta_kota",
      "accessMode": "KRL Stasiun Jakarta Kota / TJ Koridor 1 Halte Glodok",
      "description": "Jelajahi gang-gang bersejarah Pecinan tertua di Jakarta, Vihara Dharma Bhakti, Kedai Teh Pantjoran Tea House, dan kuliner otentik Gang Gloria."
    },
    {
      "id": "bintaro_xchange",
      "name": "BXSea Oceanarium & Bintaro Jaya Xchange",
      "category": "Hiburan & Keluarga",
      "mode": "KRL Commuter",
      "stationId": "jurang_mangu",
      "accessMode": "KRL Green Line Stasiun Jurang Mangu via skybridge terowongan langsung",
      "description": "Akuarium raksasa bawah laut terpanjang di Indonesia BXSea dengan 25.000 biota laut dan arena ice skating bertaraf internasional BX Rink."
    },
    {
      "id": "pasar_lama_tangerang",
      "name": "Pasar Lama Tangerang & Klenteng Boen Tek Bio",
      "category": "Heritage & Kuliner Malam",
      "mode": "KRL Commuter",
      "stationId": "tangerang",
      "accessMode": "KRL Brown Line Stasiun Tangerang jalan kaki 5 menit",
      "description": "Sentra kuliner malam kaki lima paling populer di Tangerang, Museum Benteng Heritage, dan klenteng tertua abad ke-17 di tepi Sungai Cisadane."
    },
    {
      "id": "monas",
      "name": "Monumen Nasional (Monas) & Museum Nasional",
      "category": "Ikon Nasional & Sejarah",
      "mode": "TransJakarta",
      "stationId": "monas",
      "accessMode": "TransJakarta Koridor 1, 2, 3 Halte Monas / KRL Juanda",
      "description": "Tugu peringatan kemerdekaan setinggi 132 meter dengan lidah api dilapisi emas 50 kg, museum diorama sejarah nasional, dan Museum Gajah berisikan koleksi arca prasejarah terlengkap."
    },
    {
      "id": "ancol_dufan",
      "name": "Taman Impian Jaya Ancol & Dunia Fantasi (Dufan)",
      "category": "Pantai & Wahana Bermain",
      "mode": "TransJakarta",
      "stationId": "ancol",
      "accessMode": "TransJakarta Koridor 5 Halte Ancol / KRL Pink Line Stasiun Ancol",
      "description": "Taman hiburan pesisir laut terbesar di Indonesia: wahana mendebarkan Dunia Fantasi, Sea World Jakarta, wahana air Atlantis, dan pantai pasir putih Lagoon."
    },
    {
      "id": "pantai_indah_kapuk",
      "name": "Kawasan Wisata Pesisir PIK & Hutan Mangrove",
      "category": "Wisata Bahari & Kuliner",
      "mode": "TransJakarta",
      "stationId": "pluit",
      "accessMode": "TransJakarta Koridor 9/12 Halte Pluit dilanjutkan Bus Feeder PIK 1A",
      "description": "Kawasan wisata pantai modern Pantai Pasir Putih PIK 2, Pantjoran PIK bertema Tionghoa megah, dan Konservasi Suaka Margasatwa Mangrove Muara Angke."
    },
    {
      "id": "jis_stadium",
      "name": "Jakarta International Stadium (JIS)",
      "category": "Olahraga & Arsitektur",
      "mode": "TransJakarta",
      "stationId": "jis",
      "accessMode": "TransJakarta Koridor 14 langsung ke Halte JIS",
      "description": "Stadion sepak bola modern beratap buka-tutup (retractable roof) terbesar di Asia dengan concourse ramah pejalan kaki dan pemandangan Danau Sunter."
    },
    {
      "id": "bandara_soetta",
      "name": "Bandara Soekarno-Hatta & Skytrain Kalayang",
      "category": "Transportasi & Seni",
      "mode": "KA Bandara SHIA",
      "stationId": "bandara_shia",
      "accessMode": "KA Bandara Railink dari Stasiun Manggarai / BNI City / Duri / Batu Ceper",
      "description": "Gerbang udara utama Republik Indonesia dengan galeri seni instalasi budaya Nusantara megah di Terminal 3 dan kereta layang otomatis Kalayang gratis antar-terminal."
    }
  ],
  "paymentGuide": {
    "jaklingkoIntegration": {
      "name": "Tarif Integrasi JakLingko",
      "maxFare": 10000,
      "timeLimitMinutes": 180,
      "description": "Pindah moda antara MRT Jakarta, LRT Jakarta, dan TransJakarta hanya membayar maksimal Rp 10.000 dalam durasi 3 jam menggunakan Kartu Uang Elektronik yang sama atau Aplikasi JakLingko."
    },
    "acceptedCards": [
      {
        "name": "Kartu JakLingko",
        "issuer": "JakLingko Indonesia",
        "whereToBuy": "Halte TransJakarta, Stasiun MRT, Stasiun LRT",
        "minBalance": 5000
      },
      {
        "name": "Flazz",
        "issuer": "BCA",
        "whereToBuy": "ATM BCA, Minimarket (Indomaret/Alfamart)",
        "minBalance": 5000
      },
      {
        "name": "e-Money",
        "issuer": "Bank Mandiri",
        "whereToBuy": "ATM Mandiri, Minimarket, Stasiun",
        "minBalance": 5000
      },
      {
        "name": "TapCash",
        "issuer": "BNI",
        "whereToBuy": "ATM BNI, Minimarket, Stasiun KRL/MRT",
        "minBalance": 5000
      },
      {
        "name": "Brizzi",
        "issuer": "BRI",
        "whereToBuy": "ATM BRI, Agen BRILink, Minimarket",
        "minBalance": 5000
      },
      {
        "name": "Kartu Multi Trip (KMT)",
        "issuer": "KAI Commuter",
        "whereToBuy": "Loket Stasiun Commuter Line",
        "minBalance": 5000
      }
    ],
    "mobileApps": [
      {
        "name": "Aplikasi JakLingko",
        "features": "QR Tiket multimoda, integrasi GoJek/Grab, rekomendasi rute instan"
      },
      {
        "name": "MyMRTJ App",
        "features": "Pembelian tiket QR MRT, loyalty points Marti, info stasiun realtime"
      },
      {
        "name": "Access by KAI",
        "features": "Tiket KRL Commuter Line QR, KA Bandara, Whoosh, KA Antarkota"
      },
      {
        "name": "Whoosh Mobile App",
        "features": "Pemesanan tiket Kereta Cepat Halim-Bandung, pilih kursi, refund cepat"
      }
    ]
  }
};

// Export to window
if (typeof window !== 'undefined') {
  window.TRANSIT_DATA = TRANSIT_DATA;
}
