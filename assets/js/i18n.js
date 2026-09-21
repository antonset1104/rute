// 10 Major World Languages Internationalization Dictionary for Jakarta Transit Integration
// Supported: id (Indonesian), en (English), zh (Chinese), ja (Japanese), ko (Korean), 
// ar (Arabic - RTL), es (Spanish), fr (French), de (German), ru (Russian)

const I18N_LANGUAGES = {
  id: { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' },
  en: { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  zh: { code: 'zh', name: '简体中文', flag: '🇨🇳', dir: 'ltr' },
  ja: { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },
  ko: { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr' },
  ar: { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  ru: { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' }
};

const I18N_TRANSLATIONS = {
  id: {
    siteTitle: 'Peta & Rute Integrasi Transportasi Umum Jakarta (Jabodetabek)',
    siteTagline: 'Panduan Lengkap MRT, LRT, Commuter Line, Kereta Cepat Whoosh, KA Bandara, dan TransJakarta',
    navMap: 'Peta Interaktif',
    navPlanner: 'Cari Rute',
    navLines: 'Jalur & Koridor',
    navStations: 'Daftar Stasiun',
    navFares: 'Tarif & JakLingko',
    navTourism: 'Panduan Wisata',
    navPrivacy: 'Kebijakan Privasi',
    heroBadge: 'Peta Integrasi Resmi Jabodetabek 2026',
    heroTitle: 'Jelajahi Jakarta dengan Transportasi Publik Terintegrasi',
    heroSubtitle: 'Rencanakan perjalanan dengan mudah melintasi 8 moda transportasi: MRT Jakarta, LRT Jabodebek, LRT Jakarta, KRL Commuter Line, Kereta Cepat Whoosh, KA Bandara, TransJakarta, dan Mikrotrans.',
    searchPlaceholderOrigin: 'Pilih stasiun keberangkatan...',
    searchPlaceholderDest: 'Pilih stasiun tujuan...',
    btnFindRoute: 'Temukan Rute Terbaik',
    btnSwapRoute: 'Tukar Asal & Tujuan',
    quickDestinations: 'Destinasi Populer:',
    filterAll: 'Semua Moda',
    filterMRT: 'MRT Jakarta',
    filterLRTJdb: 'LRT Jabodebek',
    filterLRTJkt: 'LRT Jakarta',
    filterKRL: 'KRL Commuter',
    filterWhoosh: 'Whoosh Kereta Cepat',
    filterAirport: 'KA Bandara SHIA',
    filterTJ: 'TransJakarta BRT',
    mapViewSchematic: 'Peta Vektor Interaktif',
    mapViewOfficial: 'Peta Integrasi Resmi (HD)',
    mapZoomIn: 'Perbesar',
    mapZoomOut: 'Perkecil',
    mapReset: 'Reset Tampilan',
    mapFullscreen: 'Layar Penuh',
    routeResultTitle: 'Hasil Rekomendasi Rute',
    routeEstimatedTime: 'Estimasi Durasi',
    routeEstimatedFare: 'Perkiraan Tarif',
    routeTransfers: 'Peralihan Moda (Transit)',
    routeStepOrigin: 'Berangkat dari',
    routeStepLine: 'Naik',
    routeStepTransfer: 'Transit di',
    routeStepDest: 'Tiba di tujuan',
    stationModalTitle: 'Informasi Stasiun / Halte',
    stationLines: 'Jalur yang Melayani:',
    stationTransfers: 'Koneksi Antarmoda:',
    stationFacilities: 'Fasilitas Stasiun:',
    stationNearby: 'Tempat Terdekat / Wisata:',
    stationSetOrigin: 'Jadikan Titik Keberangkatan',
    stationSetDest: 'Jadikan Titik Tujuan',
    hubsSectionTitle: 'Simpul Integrasi Utama (Transit Hubs)',
    hubsSectionSub: 'Titik pertukaran antarmoda terpenting yang memudahkan perjalanan Anda tanpa macet.',
    tourismSectionTitle: 'Jelajahi Ikon Jakarta dengan Transportasi Publik',
    tourismSectionSub: 'Cara termudah, tercepat, dan hemat biaya menuju landmark bersejarah dan atraksi modern.',
    btnViewDetails: 'Lihat Panduan Lengkap',
    faresCardTitle: 'Tarif Terintegrasi JakLingko',
    faresCardDesc: 'Hanya Rp 10.000 untuk perjalanan multimoda selama 3 jam dengan kartu JakLingko / e-money.',
    cookieSettings: 'Pengaturan Privasi / Cookie',
    footerDisclaimer: 'Data dihimpun dari peta integrasi resmi Dinas Perhubungan DKI Jakarta, MRT Jakarta, LRT, KAI Commuter, KCIC, dan PT Transportasi Jakarta.',
    copyright: '© 2026 Peta Integrasi Transportasi Jakarta. Seluruh hak cipta dilindungi.'
  },

  en: {
    siteTitle: 'Jakarta Public Transit Integration Map & Route Guide (Jabodetabek)',
    siteTagline: 'Comprehensive Guide to MRT, LRT, Commuter Line, Whoosh High-Speed Rail, Airport Train & TransJakarta',
    navMap: 'Interactive Map',
    navPlanner: 'Route Planner',
    navLines: 'Lines & Corridors',
    navStations: 'Station Directory',
    navFares: 'Fares & JakLingko',
    navTourism: 'Tourist Guide',
    navPrivacy: 'Privacy Policy',
    heroBadge: 'Official Greater Jakarta Transit Map 2026',
    heroTitle: 'Navigate Jakarta Seamlessly via Integrated Transit',
    heroSubtitle: 'Easily plan your journeys across 8 seamless transit systems: Jakarta MRT, Jabodebek LRT, Jakarta LRT, KRL Commuter Line, Whoosh Bullet Train, Airport Railink, TransJakarta BRT, and Mikrotrans.',
    searchPlaceholderOrigin: 'Choose origin station...',
    searchPlaceholderDest: 'Choose destination station...',
    btnFindRoute: 'Find Best Route',
    btnSwapRoute: 'Swap Origin & Destination',
    quickDestinations: 'Popular Destinations:',
    filterAll: 'All Transit Modes',
    filterMRT: 'MRT Jakarta',
    filterLRTJdb: 'LRT Jabodebek',
    filterLRTJkt: 'LRT Jakarta',
    filterKRL: 'KRL Commuter',
    filterWhoosh: 'Whoosh Bullet Train',
    filterAirport: 'Airport Train (SHIA)',
    filterTJ: 'TransJakarta BRT',
    mapViewSchematic: 'Interactive Vector Map',
    mapViewOfficial: 'Official High-Res Map',
    mapZoomIn: 'Zoom In',
    mapZoomOut: 'Zoom Out',
    mapReset: 'Reset View',
    mapFullscreen: 'Fullscreen',
    routeResultTitle: 'Recommended Route Plan',
    routeEstimatedTime: 'Estimated Travel Time',
    routeEstimatedFare: 'Estimated Fare',
    routeTransfers: 'Transfers / Interchange',
    routeStepOrigin: 'Depart from',
    routeStepLine: 'Board',
    routeStepTransfer: 'Transfer at',
    routeStepDest: 'Arrive at destination',
    stationModalTitle: 'Station / Stop Details',
    stationLines: 'Serving Lines:',
    stationTransfers: 'Intermodal Connections:',
    stationFacilities: 'Station Amenities:',
    stationNearby: 'Nearby Landmarks & Attractions:',
    stationSetOrigin: 'Set as Origin',
    stationSetDest: 'Set as Destination',
    hubsSectionTitle: 'Major Transit Hubs',
    hubsSectionSub: 'Strategic interchange hubs designed for seamless walking transfers across train and bus networks.',
    tourismSectionTitle: 'Explore Jakarta Landmarks by Transit',
    tourismSectionSub: 'The quickest, eco-friendly, and cost-effective way to experience Jakarta iconic sights.',
    btnViewDetails: 'View Full Guide',
    faresCardTitle: 'JakLingko Integrated Fare',
    faresCardDesc: 'Capped at IDR 10,000 for up to 3 hours of multi-modal travel across MRT, LRT, and TransJakarta.',
    cookieSettings: 'Cookie & Privacy Preferences',
    footerDisclaimer: 'Grounded on official integration maps provided by Dishub DKI Jakarta, MRT Jakarta, LRT, KAI Commuter, KCIC, and PT Transportasi Jakarta.',
    copyright: '© 2026 Jakarta Public Transit Integration. All rights reserved.'
  },

  zh: {
    siteTitle: '雅加达公共交通集成路线与地图 (大雅加达地区)',
    siteTagline: '雅加达捷运地铁、轻轨、通勤列车、Whoosh高铁、机场快线及BRT完整导览',
    navMap: '交互式地图',
    navPlanner: '路线规划',
    navLines: '线路与走廊',
    navStations: '车站总览',
    navFares: '票价与交通卡',
    navTourism: '观光指南',
    navPrivacy: '隐私政策',
    heroBadge: '2026大雅加达官方交通整合图',
    heroTitle: '畅游雅加达：一站式公共交通出行指南',
    heroSubtitle: '无缝换乘雅加达地铁(MRT)、大雅加达轻轨(LRT)、雅加达轻轨、通勤铁路(KRL)、雅万高铁(Whoosh)、机场快线与快速公交(TransJakarta)。',
    searchPlaceholderOrigin: '请选择始发站...',
    searchPlaceholderDest: '请选择目的站...',
    btnFindRoute: '查询最佳换乘路线',
    btnSwapRoute: '对调起点与终点',
    quickDestinations: '热门景点：',
    filterAll: '全部交通方式',
    filterMRT: '雅加达地铁 MRT',
    filterLRTJdb: 'Jabodebek 轻轨',
    filterLRTJkt: '雅加达轻轨 LRT',
    filterKRL: '通勤铁路 KRL',
    filterWhoosh: '雅万高铁 Whoosh',
    filterAirport: '机场快线 SHIA',
    filterTJ: '快速公交 TransJakarta',
    mapViewSchematic: '交互式矢量线路图',
    mapViewOfficial: '官方高清全景图',
    mapZoomIn: '放大',
    mapZoomOut: '缩小',
    mapReset: '重置',
    mapFullscreen: '全屏模式',
    routeResultTitle: '推荐乘车方案',
    routeEstimatedTime: '预估耗时',
    routeEstimatedFare: '参考票价',
    routeTransfers: '换乘次数',
    routeStepOrigin: '出发地',
    routeStepLine: '乘坐',
    routeStepTransfer: '换乘车站',
    routeStepDest: '到达终点',
    stationModalTitle: '车站详细信息',
    stationLines: '经停线路：',
    stationTransfers: '换乘连接：',
    stationFacilities: '车站设施：',
    stationNearby: '周边地标与景点：',
    stationSetOrigin: '设为出发站',
    stationSetDest: '设为终点站',
    hubsSectionTitle: '核心交通枢纽',
    hubsSectionSub: '高标准一体化综合交通枢纽，无缝衔接地铁、轻轨与通勤列车。',
    tourismSectionTitle: '搭乘公共交通游览雅加达',
    tourismSectionSub: '最经济、准时且环保的方式探访国家独立纪念碑、老城广场与各大商圈。',
    btnViewDetails: '查看完整指引',
    faresCardTitle: 'JakLingko 整合票价',
    faresCardDesc: '持一卡通或App在地铁、轻轨及公交间换乘，3小时内封顶仅需10,000印尼盾。',
    cookieSettings: 'Cookie 与隐私设置',
    footerDisclaimer: '数据源自雅加达交通局、MRT、LRT、KAI及TransJakarta官方发布的综合交通图。',
    copyright: '© 2026 雅加达公共交通集成网。保留所有权利。'
  },

  ja: {
    siteTitle: 'ジャカルタ公共交通統合路線図・乗り換え案内 (Jabodetabek)',
    siteTagline: 'MRT・LRT・通勤鉄道・高速鉄道Whoosh・空港鉄道・BRTの完全ガイド',
    navMap: '路線図マップ',
    navPlanner: 'ルート検索',
    navLines: '路線一覧',
    navStations: '駅一覧',
    navFares: '運賃・JakLingko',
    navTourism: '観光ガイド',
    navPrivacy: 'プライバシーポリシー',
    heroBadge: '2026年公式 ジャカルタ交通統合マップ',
    heroTitle: '渋滞知らず！統合交通で巡るジャカルタ',
    heroSubtitle: 'ジャカルタMRT、LRT、KRL通勤線、高速鉄道Whoosh、空港鉄道、トランスジャカルタBRTをシームレスに乗り継ぐ最適ルートをご案内します。',
    searchPlaceholderOrigin: '出発駅を選択...',
    searchPlaceholderDest: '到着駅を選択...',
    btnFindRoute: '最適ルートを検索',
    btnSwapRoute: '出発・到着を入替',
    quickDestinations: '人気の目的地：',
    filterAll: 'すべての交通機関',
    filterMRT: 'ジャカルタMRT',
    filterLRTJdb: 'LRTジャボデベック',
    filterLRTJkt: 'LRTジャカルタ',
    filterKRL: 'KRL通勤鉄道',
    filterWhoosh: '高速鉄道Whoosh',
    filterAirport: '空港鉄道 (SHIA)',
    filterTJ: 'トランスジャカルタ (BRT)',
    mapViewSchematic: 'インタラクティブ路線図',
    mapViewOfficial: '公式高解像度マップ',
    mapZoomIn: '拡大',
    mapZoomOut: '縮小',
    mapReset: 'リセット',
    mapFullscreen: '全画面表示',
    routeResultTitle: 'おすすめルート案内',
    routeEstimatedTime: '所要時間目安',
    routeEstimatedFare: '概算運賃',
    routeTransfers: '乗り換え回数',
    routeStepOrigin: '出発駅',
    routeStepLine: '乗車路線',
    routeStepTransfer: '乗換駅',
    routeStepDest: '到着駅',
    stationModalTitle: '駅・停留所情報',
    stationLines: '利用可能路線:',
    stationTransfers: '連絡交通機関:',
    stationFacilities: '駅構内設備:',
    stationNearby: '周辺ランドマーク・観光名所:',
    stationSetOrigin: 'ここを出発地に設定',
    stationSetDest: 'ここを到着地に設定',
    hubsSectionTitle: '主要ターミナル・乗換拠点',
    hubsSectionSub: '歩行者専用ペデストリアンデッキで複数の鉄道路線が直結する先進の交通ハブ。',
    tourismSectionTitle: '公共交通で巡るジャカルタ観光',
    tourismSectionSub: 'モナス独立記念塔、コタ・トゥア旧市街、GBKスタジアムへのスマートアクセス。',
    btnViewDetails: '詳細を見る',
    faresCardTitle: 'JakLingko 統合運賃制度',
    faresCardDesc: 'MRT・LRT・バスの乗り継ぎが3時間以内なら上限わずか10,000ルピア（約100円）。',
    cookieSettings: 'クッキー・プライバシー設定',
    footerDisclaimer: 'ジャカルタ運輸局、MRT、LRT、KAI、KCIC、TransJakarta公式データに基づく情報です。',
    copyright: '© 2026 Jakarta Public Transit Integration. 無断転載を禁じます。'
  },

  ko: {
    siteTitle: '자카르타 대중교통 통합 노선도 및 길찾기 (자보데타벡)',
    siteTagline: 'MRT, LRT, 통근열차, 우슈 고속철도, 공항철도, 트랜스자카르타 통합 안내',
    navMap: '노선도 지도',
    navPlanner: '경로 찾기',
    navLines: '노선 정보',
    navStations: '역 목록',
    navFares: '요금 및 JakLingko',
    navTourism: '관광 가이드',
    navPrivacy: '개인정보처리방침',
    heroBadge: '2026 공식 자카르타 통합 교통 지도',
    heroTitle: '대중교통으로 편리하게 연결되는 자카르타',
    heroSubtitle: '자카르타 지하철(MRT), 자보데베크 경전철(LRT), 통근열차(KRL), 우슈 고속열차, 공항철도, 트랜스자카르타 BRT를 환승하여 빠르게 이동하세요.',
    searchPlaceholderOrigin: '출발역 선택...',
    searchPlaceholderDest: '도착역 선택...',
    btnFindRoute: '최적 경로 검색',
    btnSwapRoute: '출발지/도착지 변경',
    quickDestinations: '주요 목적지:',
    filterAll: '전체 교통수단',
    filterMRT: '자카르타 MRT',
    filterLRTJdb: '자보데베크 LRT',
    filterLRTJkt: '자카르타 LRT',
    filterKRL: 'KRL 통근열차',
    filterWhoosh: '우슈 고속철도',
    filterAirport: '공항철도 (SHIA)',
    filterTJ: '트랜스자카르타 BRT',
    mapViewSchematic: '인터랙티브 노선도',
    mapViewOfficial: '공식 고화질 지도',
    mapZoomIn: '확대',
    mapZoomOut: '축소',
    mapReset: '초기화',
    mapFullscreen: '전체 화면',
    routeResultTitle: '추천 환승 경로',
    routeEstimatedTime: '예상 소요시간',
    routeEstimatedFare: '예상 요금',
    routeTransfers: '환승 횟수',
    routeStepOrigin: '출발역',
    routeStepLine: '탑승 노선',
    routeStepTransfer: '환승역',
    routeStepDest: '도착지',
    stationModalTitle: '역사 상세 정보',
    stationLines: '운행 노선:',
    stationTransfers: '환승 연계:',
    stationFacilities: '편의 시설:',
    stationNearby: '주변 명소 및 랜드마크:',
    stationSetOrigin: '출발지로 설정',
    stationSetDest: '도착지로 설정',
    hubsSectionTitle: '주요 환승 복합 거점',
    hubsSectionSub: '보행자 전용 연결 통로로 지하철, 경전철, 기차를 매끄럽게 연결하는 교통 허브.',
    tourismSectionTitle: '대중교통으로 즐기는 자카르타 명소',
    tourismSectionSub: '모나스 독립기념탑, 코타투아 구시가지, 쇼핑몰을 교통체증 없이 방문하세요.',
    btnViewDetails: '상세 안내 보기',
    faresCardTitle: 'JakLingko 환승 할인 요금제',
    faresCardDesc: 'MRT, LRT, 버스를 3시간 이내에 환승할 경우 최대 요금은 단 10,000 루피아입니다.',
    cookieSettings: '쿠키 및 개인정보 설정',
    footerDisclaimer: '자카르타 교통국, MRT, LRT, KAI, KCIC 및 TransJakarta 공식 지도를 기반으로 제작되었습니다.',
    copyright: '© 2026 Jakarta Public Transit Integration. All rights reserved.'
  },

  ar: {
    siteTitle: 'خريطة ودليل مسارات النقل العام المتكامل في جاكرتا',
    siteTagline: 'دليل شامل لمترو جاكرتا، والقطار الخفيف، وقطار الركاب، وقطار ووش فائق السرعة، وقطار المطار، وترانس جاكرتا',
    navMap: 'الخريطة التفاعلية',
    navPlanner: 'مخطط الرحلات',
    navLines: 'الخطوط والممرات',
    navStations: 'دليل المحطات',
    navFares: 'الأسعار وبطاقة جاكلينغكو',
    navTourism: 'دليل السياحة',
    navPrivacy: 'سياسة الخصوصية',
    heroBadge: 'الخريطة الرسمية المتكاملة لجاكرتا الكبرى 2026',
    heroTitle: 'استكشف جاكرتا عبر شبكة النقل العام المتكاملة',
    heroSubtitle: 'خطط لرحلتك بسلاسة عبر 8 وسائل نقل حديثة: مترو جاكرتا، قطار جابوديبك الخفيف، قطار الركاب، قطار ووش فائق السرعة، قطار مطار سوكارنو-هاتا، وحافلات ترانس جاكرتا السريعة.',
    searchPlaceholderOrigin: 'اختر محطة الانطلاق...',
    searchPlaceholderDest: 'اختر محطة الوصول...',
    btnFindRoute: 'البحث عن أفضل مسار',
    btnSwapRoute: 'تبديل نقطتي الانطلاق والوصول',
    quickDestinations: 'وجهات شهيرة:',
    filterAll: 'جميع الوسائل',
    filterMRT: 'مترو جاكرتا MRT',
    filterLRTJdb: 'قطار جابوديبك LRT',
    filterLRTJkt: 'قطار جاكرتا LRT',
    filterKRL: 'قطار الركاب KRL',
    filterWhoosh: 'قطار ووش السريع Whoosh',
    filterAirport: 'قطار المطار SHIA',
    filterTJ: 'حافلات ترانس جاكرتا BRT',
    mapViewSchematic: 'الخريطة التفاعلية الرقمية',
    mapViewOfficial: 'الخريطة الرسمية عالية الدقة',
    mapZoomIn: 'تكبير',
    mapZoomOut: 'تصغير',
    mapReset: 'إعادة ضبط',
    mapFullscreen: 'ملء الشاشة',
    routeResultTitle: 'خطة المسار المقترحة',
    routeEstimatedTime: 'الوقت التقديري للرحلة',
    routeEstimatedFare: 'الأجرة التقديرية',
    routeTransfers: 'نقاط التبديل (الترانزيت)',
    routeStepOrigin: 'الانطلاق من',
    routeStepLine: 'ركوب خط',
    routeStepTransfer: 'التحويل في محطة',
    routeStepDest: 'الوصول إلى الوجهة',
    stationModalTitle: 'تفاصيل المحطة / الموقف',
    stationLines: 'الخطوط المخدومة:',
    stationTransfers: 'وسائل النقل المتصلة:',
    stationFacilities: 'مرافق المحطة:',
    stationNearby: 'المعالم السياحية القريبة:',
    stationSetOrigin: 'تحديد كمحطة انطلاق',
    stationSetDest: 'تحديد كوجهة نهائية',
    hubsSectionTitle: 'مراكز النقل التبادلية الكبرى',
    hubsSectionSub: 'محطات متكاملة صممت لتوفير انتقال سلس وسريع بين القطارات والحافلات دون مواجهة الازدحام.',
    tourismSectionTitle: 'زيارة معالم جاكرتا بالمواصلات العامة',
    tourismSectionSub: 'الطريقة الأسرع والأكثر اقتصادية لزيارة نصب موناس الوطني والمدينة التاريخية كوتا توا ومراكز التسوق.',
    btnViewDetails: 'عرض الدليل الكامل',
    faresCardTitle: 'التعرفة الموحدة JakLingko',
    faresCardDesc: 'حد أقصى 10,000 روبية إندونيسية فقط للتنقل المشترك لمدة 3 ساعات بين المترو والقطار الخفيف والحافلات.',
    cookieSettings: 'إعدادات الخصوصية وملفات تعريف الارتباط',
    footerDisclaimer: 'تستند البيانات إلى الخرائط الرسمية الصادرة عن هيئة النقل في جاكرتا وشركات المترو والقطارات والحافلات.',
    copyright: '© 2026 شبكة النقل العام المتكاملة في جاكرتا. جميع الحقوق محفوظة.'
  },

  es: {
    siteTitle: 'Mapa y Rutas del Transporte Público Integrado de Yakarta (Jabodetabek)',
    siteTagline: 'Guía Completa de MRT, LRT, Tren de Cercanías KRL, Tren de Alta Velocidad Whoosh, Tren al Aeropuerto y TransJakarta',
    navMap: 'Mapa Interactivo',
    navPlanner: 'Planificador de Rutas',
    navLines: 'Líneas y Corredores',
    navStations: 'Directorio de Estaciones',
    navFares: 'Tarifas y JakLingko',
    navTourism: 'Guía Turística',
    navPrivacy: 'Política de Privacidad',
    heroBadge: 'Mapa Oficial de Integración 2026',
    heroTitle: 'Recorre Yakarta con Transporte Público Integrado',
    heroSubtitle: 'Planifica tus viajes sin congestión vial a través de 8 medios de transporte: MRT, LRT Jabodebek, LRT Yakarta, KRL, Tren bala Whoosh, Tren al Aeropuerto y BRT TransJakarta.',
    searchPlaceholderOrigin: 'Seleccionar estación de origen...',
    searchPlaceholderDest: 'Seleccionar estación de destino...',
    btnFindRoute: 'Buscar Mejor Ruta',
    btnSwapRoute: 'Intercambiar Origen y Destino',
    quickDestinations: 'Destinos Populares:',
    filterAll: 'Todos los Modos',
    filterMRT: 'MRT Yakarta',
    filterLRTJdb: 'LRT Jabodebek',
    filterLRTJkt: 'LRT Yakarta',
    filterKRL: 'Cercanías KRL',
    filterWhoosh: 'Tren Bala Whoosh',
    filterAirport: 'Tren al Aeropuerto',
    filterTJ: 'TransJakarta BRT',
    mapViewSchematic: 'Mapa Vectorial Interactivo',
    mapViewOfficial: 'Mapa Oficial en Alta Resolución',
    mapZoomIn: 'Acercar',
    mapZoomOut: 'Alejar',
    mapReset: 'Restablecer',
    mapFullscreen: 'Pantalla Completa',
    routeResultTitle: 'Ruta Recomendada',
    routeEstimatedTime: 'Tiempo Estimado',
    routeEstimatedFare: 'Tarifa Aproximada',
    routeTransfers: 'Transbordos',
    routeStepOrigin: 'Salida desde',
    routeStepLine: 'Tomar la línea',
    routeStepTransfer: 'Transbordo en',
    routeStepDest: 'Llegada a',
    stationModalTitle: 'Detalles de la Estación',
    stationLines: 'Líneas que prestan servicio:',
    stationTransfers: 'Conexiones Intermodales:',
    stationFacilities: 'Instalaciones:',
    stationNearby: 'Lugares de Interés Cercanos:',
    stationSetOrigin: 'Establecer como Origen',
    stationSetDest: 'Establecer como Destino',
    hubsSectionTitle: 'Grandes Nodos de Intercambio',
    hubsSectionSub: 'Centros estratégicos diseñados para una conexión peatonal directa entre trenes y autobuses.',
    tourismSectionTitle: 'Descubre Yakarta en Transporte Público',
    tourismSectionSub: 'La forma más rápida, económica y sostenible de llegar al Monumento Nacional (Monas), Kota Tua y centros comerciales.',
    btnViewDetails: 'Ver Guía Completa',
    faresCardTitle: 'Tarifa Integrada JakLingko',
    faresCardDesc: 'Tarifa máxima de solo 10.000 IDR para viajes multimodales de hasta 3 horas combinando metro, tren ligero y autobús.',
    cookieSettings: 'Preferencias de Privacidad y Cookies',
    footerDisclaimer: 'Datos elaborados con base en los mapas oficiales del Departamento de Transporte de Yakarta y los operadores ferroviarios.',
    copyright: '© 2026 Red de Transporte Público de Yakarta. Todos los derechos reservados.'
  },

  fr: {
    siteTitle: 'Carte et Itinéraires des Transports Publics Intégrés de Jakarta',
    siteTagline: 'Guide complet du Métro MRT, LRT, Train de Banlieue KRL, TGV Whoosh, Train de l’Aéroport et TransJakarta',
    navMap: 'Carte Interactive',
    navPlanner: 'Calculateur d’Itinéraire',
    navLines: 'Lignes & Corridors',
    navStations: 'Annuaire des Stations',
    navFares: 'Tarifs & JakLingko',
    navTourism: 'Guide Touristique',
    navPrivacy: 'Politique de Confidentialité',
    heroBadge: 'Carte Officielle d’Intégration du Grand Jakarta 2026',
    heroTitle: 'Explorez Jakarta avec des Transports Publics Fluides',
    heroSubtitle: 'Planifiez vos déplacements à travers 8 réseaux interconnectés : MRT Jakarta, LRT Jabodebek, LRT Jakarta, trains de banlieue KRL, train à grande vitesse Whoosh, train express aéroportuaire et bus TransJakarta.',
    searchPlaceholderOrigin: 'Choisir la station de départ...',
    searchPlaceholderDest: 'Choisir la station d’arrivée...',
    btnFindRoute: 'Trouver le Meilleur Itinéraire',
    btnSwapRoute: 'Inverser Départ et Arrivée',
    quickDestinations: 'Destinations Populaires :',
    filterAll: 'Tous les Réseaux',
    filterMRT: 'Métro MRT Jakarta',
    filterLRTJdb: 'LRT Jabodebek',
    filterLRTJkt: 'LRT Jakarta',
    filterKRL: 'Banlieue KRL',
    filterWhoosh: 'TGV Whoosh',
    filterAirport: 'Train Aéroport (SHIA)',
    filterTJ: 'Bus TransJakarta',
    mapViewSchematic: 'Plan Vectoriel Interactif',
    mapViewOfficial: 'Carte Officielle Haute Résolution',
    mapZoomIn: 'Zoom Avant',
    mapZoomOut: 'Zoom Arrière',
    mapReset: 'Réinitialiser',
    mapFullscreen: 'Plein Écran',
    routeResultTitle: 'Itinéraire Recommandé',
    routeEstimatedTime: 'Durée Estimée',
    routeEstimatedFare: 'Tarif Estimé',
    routeTransfers: 'Correspondances',
    routeStepOrigin: 'Départ de',
    routeStepLine: 'Prendre la ligne',
    routeStepTransfer: 'Correspondance à',
    routeStepDest: 'Arrivée à destination',
    stationModalTitle: 'Fiche de la Station',
    stationLines: 'Lignes en Service :',
    stationTransfers: 'Correspondances Intermodales :',
    stationFacilities: 'Équipements de la Station :',
    stationNearby: 'Monuments et Sites d’Intérêt Proches :',
    stationSetOrigin: 'Définir comme Départ',
    stationSetDest: 'Définir comme Destination',
    hubsSectionTitle: 'Pôles d’Échange Multimodaux Majeurs',
    hubsSectionSub: 'Des passerelles piétonnes aériennes et souterraines reliant trains urbains et bus sans affronter la circulation.',
    tourismSectionTitle: 'Visitez Jakarta en Transports en Commun',
    tourismSectionSub: 'Le moyen le plus rapide, économique et écologique de rejoindre le Monument National (Monas) ou la vieille ville de Kota Tua.',
    btnViewDetails: 'Consulter le Guide',
    faresCardTitle: 'Tarif Intégré JakLingko',
    faresCardDesc: 'Plafond à 10 000 IDR seulement pour 3 heures de trajets combinés métro, train léger et bus.',
    cookieSettings: 'Préférences de Confidentialité & Cookies',
    footerDisclaimer: 'Données basées sur les cartes officielles fournies par Dishub DKI Jakarta et les opérateurs de transport.',
    copyright: '© 2026 Réseau de Transport Intégré de Jakarta. Tous droits réservés.'
  },

  de: {
    siteTitle: 'Öffentlicher Nahverkehr Jakarta: Liniennetz & Routenplaner',
    siteTagline: 'Kompletter Leitfaden für MRT, LRT, S-Bahn KRL, Whoosh-Hochgeschwindigkeitszug, Flughafenbahn & TransJakarta',
    navMap: 'Interaktiver Netzplan',
    navPlanner: 'Routenplaner',
    navLines: 'Linien & Korridore',
    navStations: 'Bahnhofsverzeichnis',
    navFares: 'Tarife & JakLingko',
    navTourism: 'Tourismusführer',
    navPrivacy: 'Datenschutz',
    heroBadge: 'Offizieller Verbundnetzplan Groß-Jakarta 2026',
    heroTitle: 'Jakarta staufrei entdecken mit integriertem Nahverkehr',
    heroSubtitle: 'Planen Sie Ihre Fahrten über 8 koordinierte Verkehrsträger: MRT U-Bahn, Jabodebek LRT, KRL Vorortbahn, Whoosh Hochgeschwindigkeitszug, Flughafenexpress und TransJakarta Schnellbusse.',
    searchPlaceholderOrigin: 'Startbahnhof wählen...',
    searchPlaceholderDest: 'Zielbahnhof wählen...',
    btnFindRoute: 'Beste Verbindung suchen',
    btnSwapRoute: 'Start & Ziel tauschen',
    quickDestinations: 'Beliebte Reiseziele:',
    filterAll: 'Alle Verkehrsmittel',
    filterMRT: 'U-Bahn MRT',
    filterLRTJdb: 'LRT Jabodebek',
    filterLRTJkt: 'LRT Jakarta',
    filterKRL: 'S-Bahn KRL',
    filterWhoosh: 'Whoosh Schnellzug',
    filterAirport: 'Flughafenbahn (SHIA)',
    filterTJ: 'TransJakarta BRT',
    mapViewSchematic: 'Interaktiver Vektor-Netzplan',
    mapViewOfficial: 'Offizielle HD-Verbundkarte',
    mapZoomIn: 'Vergrößern',
    mapZoomOut: 'Verkleinern',
    mapReset: 'Zurücksetzen',
    mapFullscreen: 'Vollbild',
    routeResultTitle: 'Empfohlene Verbindung',
    routeEstimatedTime: 'Geschätzte Fahrzeit',
    routeEstimatedFare: 'Geschätzter Fahrpreis',
    routeTransfers: 'Umstiege',
    routeStepOrigin: 'Abfahrt ab',
    routeStepLine: 'Einsteigen in Linie',
    routeStepTransfer: 'Umsteigen am Bahnhof',
    routeStepDest: 'Ankunft am Ziel',
    stationModalTitle: 'Bahnhofs- & Haltestellendetails',
    stationLines: 'Bediente Linien:',
    stationTransfers: 'Umstiegsmöglichkeiten:',
    stationFacilities: 'Ausstattung & Service:',
    stationNearby: 'Sehenswürdigkeiten in der Nähe:',
    stationSetOrigin: 'Als Startpunkt festlegen',
    stationSetDest: 'Als Ziel festlegen',
    hubsSectionTitle: 'Wichtige Verkehrsknotenpunkte',
    hubsSectionSub: 'Moderne Umsteigepunkte mit wettergeschützten Übergängen zwischen Bahn und Bus.',
    tourismSectionTitle: 'Sehenswürdigkeiten mit Bahn & Bus entdecken',
    tourismSectionSub: 'Schnell, günstig und umweltfreundlich zum Nationaldenkmal (Monas), zur Altstadt Kota Tua und zu Stadien.',
    btnViewDetails: 'Vollständigen Leitfaden ansehen',
    faresCardTitle: 'JakLingko Verbundtarif',
    faresCardDesc: 'Maximal 10.000 IDR für bis zu 3 Stunden vernetztes Fahren mit U-Bahn, Stadtbahn und Bus.',
    cookieSettings: 'Cookie- & Datenschutzeinstellungen',
    footerDisclaimer: 'Daten basieren auf den offiziellen Verbundplänen des Verkehrsministeriums DKI Jakarta und der Betreiber.',
    copyright: '© 2026 Jakarta Public Transit Integration. Alle Rechte vorbehalten.'
  },

  ru: {
    siteTitle: 'Карта и Маршруты Общественного Транспорта Джакарты (Jabodetabek)',
    siteTagline: 'Полный путеводитель по MRT, LRT, пригородным поездам KRL, ВСМ Whoosh, аэроэкспрессу и TransJakarta',
    navMap: 'Интерактивная карта',
    navPlanner: 'Поиск маршрута',
    navLines: 'Линии и коридоры',
    navStations: 'Каталог станций',
    navFares: 'Тарифы и JakLingko',
    navTourism: 'Туристический гид',
    navPrivacy: 'Политика конфиденциальности',
    heroBadge: 'Официальная интеграционная карта Большой Джакарты 2026',
    heroTitle: 'Путешествуйте по Джакарте без пробок на общественном транспорте',
    heroSubtitle: 'Удобное планирование поездок по 8 видам транспорта: метрополитен MRT, легкое метро LRT, электрички KRL, высокоскоростной поезд Whoosh, аэроэкспресс и скоростные автобусы TransJakarta.',
    searchPlaceholderOrigin: 'Выберите станцию отправления...',
    searchPlaceholderDest: 'Выберите станцию назначения...',
    btnFindRoute: 'Найти лучший маршрут',
    btnSwapRoute: 'Поменять местами',
    quickDestinations: 'Популярные места:',
    filterAll: 'Все виды транспорта',
    filterMRT: 'Метро MRT Джакарта',
    filterLRTJdb: 'LRT Джабодебек',
    filterLRTJkt: 'LRT Джакарта',
    filterKRL: 'Электрички KRL',
    filterWhoosh: 'ВСМ Whoosh',
    filterAirport: 'Аэроэкспресс (SHIA)',
    filterTJ: 'Автобусы TransJakarta',
    mapViewSchematic: 'Векторная интерактивная схема',
    mapViewOfficial: 'Официальная карта высокого разрешения',
    mapZoomIn: 'Приблизить',
    mapZoomOut: 'Отдалить',
    mapReset: 'Сбросить',
    mapFullscreen: 'На весь экран',
    routeResultTitle: 'Рекомендуемый маршрут',
    routeEstimatedTime: 'Примерное время в пути',
    routeEstimatedFare: 'Ориентировочная стоимость',
    routeTransfers: 'Пересадок',
    routeStepOrigin: 'Отправление со станции',
    routeStepLine: 'Сесть на поезд/автобус',
    routeStepTransfer: 'Пересадка на станции',
    routeStepDest: 'Прибытие на станцию',
    stationModalTitle: 'Информация о станции',
    stationLines: 'Проходящие линии:',
    stationTransfers: 'Пересадки на другие виды:',
    stationFacilities: 'Удобства на станции:',
    stationNearby: 'Ближайшие достопримечательности:',
    stationSetOrigin: 'Выбрать как станцию отправления',
    stationSetDest: 'Выбрать как станцию назначения',
    hubsSectionTitle: 'Главные транспортные узлы (Хабы)',
    hubsSectionSub: 'Современные пересадочные комплексы с надземными галереями для комфортного перехода без выхода на автомагистрали.',
    tourismSectionTitle: 'Достопримечательности Джакарты на общественном транспорте',
    tourismSectionSub: 'Самый быстрый и доступный способ добраться до монумента Монас, исторического квартала Кота Туа и стадионов.',
    btnViewDetails: 'Смотреть подробный гид',
    faresCardTitle: 'Единый пересадочный тариф JakLingko',
    faresCardDesc: 'Максимум 10 000 индонезийских рупий за 3 часа поездок с пересадками между метро, LRT и автобусами.',
    cookieSettings: 'Настройки конфиденциальности и Cookie',
    footerDisclaimer: 'Данные основаны на официальных картах Департамента транспорта Джакарты и транспортных операторов.',
    copyright: '© 2026 Интегрированная транспортная система Джакарты. Все права защищены.'
  }
};

// Global i18n controller
class I18nManager {
  constructor() {
    this.currentLang = this.getInitialLanguage();
    this.init();
  }

  getInitialLanguage() {
    // Check URL param first (?lang=en)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && I18N_LANGUAGES[urlLang]) {
      return urlLang;
    }
    // Check localStorage
    const stored = localStorage.getItem('jakarta_transit_lang');
    if (stored && I18N_LANGUAGES[stored]) {
      return stored;
    }
    // Check browser languages
    const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').slice(0, 2).toLowerCase();
    if (I18N_LANGUAGES[browserLang]) {
      return browserLang;
    }
    return 'id'; // Default to Indonesian
  }

  init() {
    this.applyLanguage(this.currentLang, false);
  }

  setLanguage(langCode) {
    if (!I18N_LANGUAGES[langCode]) return;
    this.currentLang = langCode;
    localStorage.setItem('jakarta_transit_lang', langCode);
    this.applyLanguage(langCode, true);
  }

  applyLanguage(langCode, updateUrl = true) {
    const langMeta = I18N_LANGUAGES[langCode] || I18N_LANGUAGES.id;
    const dict = I18N_TRANSLATIONS[langCode] || I18N_TRANSLATIONS.id;

    // Update HTML root attributes
    document.documentElement.setAttribute('lang', langCode);
    document.documentElement.setAttribute('dir', langMeta.dir);

    if (langMeta.dir === 'rtl') {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }

    // Update document title if matches key
    if (dict.siteTitle) {
      document.title = `${dict.siteTitle} - Transit Jakarta`;
    }

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', dict[key]);
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update active state in language pickers
    const langSelectButtons = document.querySelectorAll('.lang-item-btn, .lang-btn');
    langSelectButtons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === langCode) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    const activeFlag = document.getElementById('current-lang-flag');
    const activeLabel = document.getElementById('current-lang-label');
    if (activeFlag) activeFlag.textContent = langMeta.flag;
    if (activeLabel) activeLabel.textContent = langMeta.name;

    // Update URL query string without reloading page
    if (updateUrl && history.replaceState) {
      const url = new URL(window.location);
      url.searchParams.set('lang', langCode);
      window.history.replaceState({}, '', url);
    }

    // Dispatch custom event for other modules
    window.dispatchEvent(new CustomEvent('transit_language_changed', { detail: { lang: langCode, dict: dict } }));
  }

  t(key) {
    const dict = I18N_TRANSLATIONS[this.currentLang] || I18N_TRANSLATIONS.id;
    return dict[key] || key;
  }
}

// Instantiate globally
if (typeof window !== 'undefined') {
  window.i18n = new I18nManager();
}
