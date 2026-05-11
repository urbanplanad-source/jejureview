/* ================================================================
   data/index.js - 병원 기본 정보 인덱스 (경량화)
   상세 정보는 지역별 파일에서 로드
   ================================================================ */

/* ── 병원 기본 정보 인덱스 ───────────────────────────────────── */
const HOSPITAL_INDEX = [
  // 제주시 병원
  {
    id: "areumd",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,  // 외국인환자 유치의료기관 (보건복지부 등록)
    rating: 4.6,
    review_count: 1122,
    name_ko: "아름다운피부과의원",
    name: { zh: "BTSKIN CLINIC", en: "BTSKIN CLINIC", ja: "BTSKIN CLINIC" },
    thumbnail: "images/areumd-thumb.webp",
    lat: 33.4882, lng: 126.4827, coordStatus: "estimated",
    lat: 33.4867661,
    lng: 126.4799162,
    coordStatus: "verified",
    has_detail: true
  },

  // 서귀포 병원
  {
    id: "bellemorn",
    region: "seogwipo",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,  // 외국인환자 유치의료기관 (보건복지부 등록)
    taxi_support: true,
    rating: 4.7,
    review_count: 107,
    name_ko: "벨르몬성형외과의원",
    name: { zh: "贝勒蒙整形外科", en: "Bellemorn Plastic Surgery", ja: "ベルモン整形外科" },
    thumbnail: "images/bellemorn-thumb.jpg",
    lat: 33.3029, lng: 126.2914, coordStatus: "estimated",
    lat: 33.30522,
    lng: 126.31368,
    coordStatus: "verified",
    has_detail: true
  },

  // 추가 피부과/성형외과 병원
  {
    id: "ami",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.3,
    review_count: 353,
    name_ko: "아미의원",
    name: { zh: "阿美医院", en: "Ami Clinic", ja: "アミ医院" },
    thumbnail: "images/ami-thumb.jpg",
    lat: 33.485, lng: 126.48, coordStatus: "estimated",
    has_detail: true
  },
  {
    id: "mimo",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.1,
    review_count: 255,
    name_ko: "미모피부과의원",
    name: { zh: "美毛皮肤科", en: "Mimo Dermatology", ja: "ミモ皮膚科" },
    thumbnail: "images/mimo-thumb.jpg",
    lat: 33.487, lng: 126.483, coordStatus: "estimated",
    has_detail: true
  },
  {
    id: "yeonse",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.0,
    review_count: 282,
    name_ko: "연세피부과의원",
    name: { zh: "延世皮肤科", en: "Yonse Dermatology", ja: "延世皮膚科" },
    thumbnail: "images/yeonse-thumb.jpg",
    lat: 33.489, lng: 126.484, coordStatus: "estimated",
    has_detail: true
  },
  {
    id: "miu",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,
    rating: 4.2,
    review_count: 34,
    name_ko: "미우성형외과의원",
    name: { zh: "美牛整形外科", en: "Miu Plastic Surgery", ja: "ミウ整形外科" },
    thumbnail: "images/miu-thumb.jpg",
    lat: 33.49, lng: 126.485, coordStatus: "estimated",
    lat: 33.4857845,
    lng: 126.478286,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "gonggam",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,
    rating: 4.1,
    review_count: 113,
    name_ko: "공감성형외과의원",
    name: { zh: "共感整形外科", en: "Gonggam Plastic Surgery", ja: "共感整形外科" },
    thumbnail: "images/gonggam-thumb.jpg",
    lat: 33.491, lng: 126.486, coordStatus: "estimated",
    lat: 33.4865627,
    lng: 126.5416626,
    coordStatus: "verified",
    has_detail: true
  },

  // 서귀포 추가 병원
  {
    id: "together",
    region: "seogwipo",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.2,
    review_count: 407,
    name_ko: "투게더피부과의원",
    name: { zh: "一起皮肤科", en: "Together Dermatology", ja: "トゥゲザー皮膚科" },
    thumbnail: "images/together-thumb.jpg",
    lat: 33.2545, lng: 126.5125, coordStatus: "estimated",
    has_detail: true
  },
  {
    id: "we",
    region: "seogwipo",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,
    rating: 4.0,
    review_count: 25,
    name_ko: "WE병원",
    name: { zh: "WE医院", en: "WE Hospital", ja: "WE病院" },
    thumbnail: "images/we-thumb.jpg",
    lat: 33.26, lng: 126.52, coordStatus: "estimated",
    lat: 33.2860178,
    lng: 126.4441437,
    coordStatus: "verified",
    has_detail: true
  },

  // ── 신규 추가 병원 (2026-04 네이버 방문자 리뷰 기준) ──────────

  // 제주시 피부과 신규
  {
    id: "imiae",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.3,
    review_count: 840,
    name_ko: "이미애피부과의원",
    name: { zh: "李美爱皮肤科", en: "Lee Mi-ae Dermatology", ja: "イ・ミエ皮膚科" },
    thumbnail: "images/imiae-thumb.jpg",
    lat: 33.5101, lng: 126.5281, coordStatus: "estimated",
    has_detail: true
  },
  {
    id: "hansen",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    rating: 4.0,
    review_count: 157,
    name_ko: "복지피부과의원",
    name: { zh: "복지피부과의원", en: "Bokji Dermatology Clinic", ja: "福祉皮膚科医院" },
    thumbnail: "images/hansen-thumb.jpg",
    lat: 33.4996, lng: 126.5312, coordStatus: "duplicate",
    lat: 33.4858518,
    lng: 126.4960596,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "degoun",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.1,
    review_count: 373,
    name_ko: "더고운의원",
    name: { zh: "德高温皮肤科", en: "Degoun Skin Clinic", ja: "デゴウンクリニック" },
    thumbnail: "images/degoun-thumb.jpg",
    lat: 33.5082, lng: 126.5427, coordStatus: "duplicate",
    has_detail: true
  },
  {
    id: "ppeum",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    rating: 4.2,
    review_count: 744,
    name_ko: "뿜글로벌의원 제주점",
    name: { zh: "PPEUM全球诊所 济州分院", en: "PPEUM Global Clinic Jeju", ja: "プームグローバルクリニック 済州店" },
    thumbnail: "images/ppeum-thumb.jpg",
    lat: 33.4843, lng: 126.4818, coordStatus: "duplicate",
    lat: 33.48302,
    lng: 126.4812051,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "dermiin",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    rating: 4.2,
    review_count: 137,
    name_ko: "더미인의원",
    name: { zh: "德美人医院", en: "Dermiin Clinic", ja: "ダーミインクリニック" },
    thumbnail: "images/dermiin-thumb.jpg",
    lat: 33.4843, lng: 126.4818, coordStatus: "duplicate",
    lat: 33.4883273,
    lng: 126.4837246,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "misarang",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.1,
    review_count: 113,
    name_ko: "미사랑의원",
    name: { zh: "美思朗医院", en: "Misarang Clinic", ja: "ミサランクリニック" },
    thumbnail: "images/misarang-thumb.jpg",
    lat: 33.5082, lng: 126.5427, coordStatus: "duplicate",
    has_detail: true
  },
  {
    id: "foever",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    rating: 4.2,
    review_count: 520,
    name_ko: "포에버의원 제주",
    name: { zh: "4EVER诊所 济州", en: "4EVER Clinic Jeju", ja: "フォーエバークリニック 済州" },
    thumbnail: "images/foever-thumb.jpg",
    lat: 33.4996, lng: 126.5312, coordStatus: "duplicate",
    lat: 33.4895983,
    lng: 126.4886606,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jeinu",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    rating: 4.2,
    review_count: 294,
    name_ko: "제이뉴피부과의원",
    name: { zh: "J·NEW皮肤科", en: "J·NEW Dermatology", ja: "Jニュー皮膚科" },
    thumbnail: "images/jeinu-thumb.jpg",
    lat: 33.5082, lng: 126.5427, coordStatus: "duplicate",
    lat: 33.4914902,
    lng: 126.5372469,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "newline",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    rating: 4.1,
    review_count: 154,
    name_ko: "서울뉴라인의원",
    name: { zh: "首尔纽莱因皮肤科", en: "Seoul Newline Clinic", ja: "ソウルニューラインクリニック" },
    thumbnail: "images/newline-thumb.jpg",
    lat: 33.4843, lng: 126.4818, coordStatus: "duplicate",
    lat: 33.4790135,
    lng: 126.4697556,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jejuareumd",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.3,
    review_count: 638,
    name_ko: "제주아름다운피부과의원",
    name: { zh: "济州美丽皮肤科", en: "Jeju Areumdaun Dermatology", ja: "済州アルムダウン皮膚科" },
    thumbnail: "images/jejuareumd-thumb.webp",
    lat: 33.5082, lng: 126.5352, coordStatus: "estimated",
    has_detail: true
  },
  {
    id: "rosemary",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.0,
    review_count: 156,
    name_ko: "로즈마리의원",
    name: { zh: "迷迭香医院", en: "Rosemary Clinic", ja: "ローズマリークリニック" },
    thumbnail: "images/rosemary-thumb.jpg",
    lat: 33.5119, lng: 126.5651, coordStatus: "estimated",
    has_detail: true
  },
  {
    id: "vueanmi",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    rating: 4.1,
    review_count: 161,
    name_ko: "뷰앤미의원",
    name: { zh: "VU&ME医院", en: "Vu & Me Clinic", ja: "ビューアンドミークリニック" },
    thumbnail: "images/vueanmi-thumb.jpg",
    lat: 33.4996, lng: 126.5312, coordStatus: "duplicate",
    lat: 33.4860649,
    lng: 126.4828667,
    coordStatus: "verified",
    has_detail: true
  },
  // 제주시 성형외과 신규
  {
    id: "cdrui",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,
    rating: 4.2,
    review_count: 83,
    name_ko: "청담루이성형외과의원",
    name: { zh: "清潭路易整形外科", en: "Cheongdam Rui Plastic Surgery", ja: "チョンダムルイ整形外科" },
    thumbnail: "images/cdrui-thumb.jpg",
    lat: 33.4843, lng: 126.4818, coordStatus: "duplicate",
    lat: 33.4845153,
    lng: 126.4798021,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "kbeauty",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,
    rating: 4.2,
    review_count: 109,
    name_ko: "강남케이뷰티성형외과의원",
    name: { zh: "江南K-Beauty整形外科", en: "Gangnam K-Beauty Plastic Surgery", ja: "カンナムKビューティー整形外科" },
    thumbnail: "images/kbeauty-thumb.jpg",
    lat: 33.5082, lng: 126.5427, coordStatus: "duplicate",
    lat: 33.4890812,
    lng: 126.5395542,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "gangnamstar",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: false,
    rating: 4.1,
    review_count: 71,
    name_ko: "강남스타성형외과의원",
    name: { zh: "江南Star整形外科", en: "Gangnam Star Plastic Surgery", ja: "カンナムスター整形外科" },
    thumbnail: "images/gangnamstar-thumb.jpg",
    lat: 33.4843, lng: 126.4818, coordStatus: "duplicate",
    has_detail: true
  },
  {
    id: "vip",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,
    rating: 4.0,
    review_count: 72,
    name_ko: "VIP성형외과의원",
    name: { zh: "VIP整形外科", en: "VIP Plastic Surgery", ja: "VIP整形外科" },
    thumbnail: "images/vip-thumb.jpg",
    lat: 33.4996, lng: 126.5312, coordStatus: "duplicate",
    lat: 33.4888573,
    lng: 126.4921583,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "marilyn",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: false,
    rating: 4.0,
    review_count: 38,
    name_ko: "마릴린제이의원",
    name: { zh: "玛丽莲J整形外科", en: "Marilyn J Clinic", ja: "マリリンJクリニック" },
    thumbnail: "images/marilyn-thumb.jpg",
    lat: 33.4843, lng: 126.4818, coordStatus: "duplicate",
    has_detail: true
  },

  // 서귀포 피부과 신규
  {
    id: "hwangsur",
    region: "seogwipo",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.2,
    review_count: 176,
    name_ko: "황수란피부과의원",
    name: { zh: "黄秀兰皮肤科", en: "Hwang Su-ran Dermatology", ja: "ファン・スラン皮膚科" },
    thumbnail: "images/hwangsur-thumb.jpg",
    lat: 33.2497, lng: 126.5632, coordStatus: "estimated",
    has_detail: true
  },
  {
    id: "yonsedam",
    region: "seogwipo",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: false,
    rating: 4.1,
    review_count: 143,
    name_ko: "연세예담의원",
    name: { zh: "延世叡谭医院", en: "Yonse Yedam Clinic", ja: "延世イェダムクリニック" },
    thumbnail: "images/yonsedam-thumb.jpg",
    lat: 33.2654, lng: 126.5763, coordStatus: "estimated",
    has_detail: true
  },

  // 서귀포 성형외과 신규
  {
    id: "sam345",
    region: "seogwipo",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,
    rating: 4.2,
    review_count: 57,
    name_ko: "삼사오성형외과제주의원",
    name: { zh: "345整形外科济州医院", en: "345 Plastic Surgery Jeju", ja: "345整形外科済州院" },
    thumbnail: "images/sam345-thumb.jpg",
    lat: 33.2539, lng: 126.4565, coordStatus: "estimated",
    lat: 33.2490026,
    lng: 126.50732,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jeju-sarang-oriental",
    region: "jeju-city",
    specialty: "oriental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "제주사랑한의원",
    name: { zh: "제주사랑한의원", en: "제주사랑한의원", ja: "제주사랑한의원" },
    thumbnail: "",
    lat: 33.4870245,
    lng: 126.4775864,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "dana-dental",
    region: "seogwipo",
    specialty: "dental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "다나치과의원",
    name: { zh: "다나치과의원", en: "다나치과의원", ja: "다나치과의원" },
    thumbnail: "",
    lat: 33.2608944,
    lng: 126.5578025,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jeju-woori-hospital",
    region: "jeju-city",
    specialty: "internal",
    type: "hospital",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "제주우리병원",
    name: { zh: "제주우리병원", en: "제주우리병원", ja: "제주우리병원" },
    thumbnail: "",
    lat: 33.4889664,
    lng: 126.5396637,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jeju-soo-thoracic",
    region: "jeju-city",
    specialty: "internal",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "제주 수 흉부외과",
    name: { zh: "제주 수 흉부외과", en: "제주 수 흉부외과", ja: "제주 수 흉부외과" },
    thumbnail: "",
    lat: 33.4857845,
    lng: 126.478286,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "dandan-orthopedics",
    region: "jeju-city",
    specialty: "orthopedics",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "단단한정형외과의원",
    name: { zh: "단단한정형외과의원", en: "단단한정형외과의원", ja: "단단한정형외과의원" },
    thumbnail: "",
    lat: 33.4815271,
    lng: 126.4893732,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "bareuni-dental",
    region: "jeju-city",
    specialty: "dental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "바른이치과교정과치과의원",
    name: { zh: "바른이치과교정과치과의원", en: "바른이치과교정과치과의원", ja: "바른이치과교정과치과의원" },
    thumbnail: "",
    lat: 33.4816594,
    lng: 126.4826702,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "angel-obgyn",
    region: "seogwipo",
    specialty: "pediatrics",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "엔젤산부인과의원",
    name: { zh: "엔젤산부인과의원", en: "엔젤산부인과의원", ja: "엔젤산부인과의원" },
    thumbnail: "",
    lat: 33.2792637,
    lng: 126.2751029,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "haneulmaeum-oriental",
    region: "jeju-city",
    specialty: "oriental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "하늘마음한의원",
    name: { zh: "하늘마음한의원", en: "하늘마음한의원", ja: "하늘마음한의원" },
    thumbnail: "",
    lat: 33.4892111,
    lng: 126.5394779,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "haneulche-oriental",
    region: "jeju-city",
    specialty: "oriental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "하늘체한의원",
    name: { zh: "하늘체한의원", en: "하늘체한의원", ja: "하늘체한의원" },
    thumbnail: "",
    lat: 33.4845153,
    lng: 126.4798021,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "kahp-jeju",
    region: "jeju-city",
    specialty: "internal",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "한국건강관리협회건강증진의원",
    name: { zh: "한국건강관리협회건강증진의원", en: "한국건강관리협회건강증진의원", ja: "한국건강관리협회건강증진의원" },
    thumbnail: "",
    lat: 33.4820781,
    lng: 126.4933151,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "vivace-plastic",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "비바체성형외과",
    name: { zh: "비바체성형외과", en: "비바체성형외과", ja: "비바체성형외과" },
    thumbnail: "",
    lat: 33.4937977,
    lng: 126.534034,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jewon-oriental",
    region: "jeju-city",
    specialty: "oriental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "제원한의원",
    name: { zh: "제원한의원", en: "제원한의원", ja: "제원한의원" },
    thumbnail: "",
    lat: 33.4879197,
    lng: 126.4927839,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "national-orthopedics",
    region: "jeju-city",
    specialty: "orthopedics",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "국가대표정형외과의원",
    name: { zh: "국가대표정형외과의원", en: "국가대표정형외과의원", ja: "국가대표정형외과의원" },
    thumbnail: "",
    lat: 33.481486,
    lng: 126.4908162,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "tox-n-fill",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "톡스앤필의원",
    name: { zh: "톡스앤필의원", en: "톡스앤필의원", ja: "톡스앤필의원" },
    thumbnail: "",
    lat: 33.48359,
    lng: 126.476304,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "nowmedi",
    region: "jeju-city",
    specialty: "internal",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "나우메디의원",
    name: { zh: "나우메디의원", en: "나우메디의원", ja: "나우메디의원" },
    thumbnail: "",
    lat: 33.4843386,
    lng: 126.5346355,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "kangjuhyun-derm",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "강주현피부과 의원",
    name: { zh: "강주현피부과 의원", en: "강주현피부과 의원", ja: "강주현피부과 의원" },
    thumbnail: "",
    lat: 33.5170977,
    lng: 126.5811813,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "ezbom-eye",
    region: "jeju-city",
    specialty: "ophthalmology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "이지봄안과의원",
    name: { zh: "이지봄안과의원", en: "이지봄안과의원", ja: "이지봄안과의원" },
    thumbnail: "",
    lat: 33.4790135,
    lng: 126.4697556,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "kimminbeom-oriental",
    region: "jeju-city",
    specialty: "oriental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "김민범 한의원",
    name: { zh: "김민범 한의원", en: "김민범 한의원", ja: "김민범 한의원" },
    thumbnail: "",
    lat: 33.4837309,
    lng: 126.4755984,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jeju-anapeun-dental",
    region: "jeju-city",
    specialty: "dental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "제주 아나픈치과의원",
    name: { zh: "제주 아나픈치과의원", en: "제주 아나픈치과의원", ja: "제주 아나픈치과의원" },
    thumbnail: "",
    lat: 33.4826245,
    lng: 126.4750411,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "bliv-jeju",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "블리비의원",
    name: { zh: "블리비의원", en: "블리비의원", ja: "블리비의원" },
    thumbnail: "",
    lat: 33.4857845,
    lng: 126.478286,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "rosen-clinic",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "로즈앤의원",
    name: { zh: "로즈앤의원", en: "로즈앤의원", ja: "로즈앤의원" },
    thumbnail: "",
    lat: 33.4836142,
    lng: 126.4801422,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "inje-ent",
    region: "jeju-city",
    specialty: "ent",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "인제상쾌한이비인후과의원",
    name: { zh: "인제상쾌한이비인후과의원", en: "인제상쾌한이비인후과의원", ja: "인제상쾌한이비인후과의원" },
    thumbnail: "",
    lat: 33.5045977,
    lng: 126.5375336,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "eoullim-clinic",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "어울림의원",
    name: { zh: "어울림의원", en: "어울림의원", ja: "어울림의원" },
    thumbnail: "",
    lat: 33.4826245,
    lng: 126.4750411,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "soldam-oriental-hospital",
    region: "jeju-city",
    specialty: "oriental",
    type: "hospital",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "솔담한방병원",
    name: { zh: "솔담한방병원", en: "솔담한방병원", ja: "솔담한방병원" },
    thumbnail: "",
    lat: 33.4590435,
    lng: 126.4845726,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "central-eye",
    region: "jeju-city",
    specialty: "ophthalmology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "센트럴아이안과의원",
    name: { zh: "센트럴아이안과의원", en: "센트럴아이안과의원", ja: "센트럴아이안과의원" },
    thumbnail: "",
    lat: 33.4933474,
    lng: 126.4330891,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jeju-samsung-eye",
    region: "jeju-city",
    specialty: "ophthalmology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "제주삼성안과의원",
    name: { zh: "제주삼성안과의원", en: "제주삼성안과의원", ja: "제주삼성안과의원" },
    thumbnail: "",
    lat: 33.5128538,
    lng: 126.5262659,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jeju-em365",
    region: "jeju-city",
    specialty: "internal",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "제주이엠365의원",
    name: { zh: "제주이엠365의원", en: "제주이엠365의원", ja: "제주이엠365의원" },
    thumbnail: "",
    lat: 33.4790135,
    lng: 126.4697556,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "glory-clinic",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "글로리 의원",
    name: { zh: "글로리 의원", en: "글로리 의원", ja: "글로리 의원" },
    thumbnail: "",
    lat: 33.4835986,
    lng: 126.4769069,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "dream-internal",
    region: "jeju-city",
    specialty: "internal",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "속편한드림내과의원",
    name: { zh: "속편한드림내과의원", en: "속편한드림내과의원", ja: "속편한드림내과의원" },
    thumbnail: "",
    lat: 33.4749782,
    lng: 126.4827403,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "soo-eye",
    region: "jeju-city",
    specialty: "ophthalmology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "수안과의원",
    name: { zh: "수안과의원", en: "수안과의원", ja: "수안과의원" },
    thumbnail: "",
    lat: 33.4947555,
    lng: 126.5329922,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "vands-jeju",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "밴스의원",
    name: { zh: "밴스의원", en: "밴스의원", ja: "밴스의원" },
    thumbnail: "",
    lat: 33.4860649,
    lng: 126.4828667,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "namjaehee-samsung-derm",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "남재희삼성피부과",
    name: { zh: "남재희삼성피부과", en: "남재희삼성피부과", ja: "남재희삼성피부과" },
    thumbnail: "",
    lat: 33.5129413,
    lng: 126.5196932,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "e-pyeonhan-dental",
    region: "jeju-city",
    specialty: "dental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "e-편한치과의원",
    name: { zh: "e-편한치과의원", en: "e-편한치과의원", ja: "e-편한치과의원" },
    thumbnail: "",
    lat: 33.4851842,
    lng: 126.5361543,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "haearim-oriental",
    region: "jeju-city",
    specialty: "oriental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "해아림한의원",
    name: { zh: "해아림한의원", en: "해아림한의원", ja: "해아림한의원" },
    thumbnail: "",
    lat: 33.48302,
    lng: 126.4812051,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "meili-clinic",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "메이리의원",
    name: { zh: "메이리의원", en: "메이리의원", ja: "메이리의원" },
    thumbnail: "",
    lat: 33.4860649,
    lng: 126.4828667,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jung-dental",
    region: "jeju-city",
    specialty: "dental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "정치과의원",
    name: { zh: "정치과의원", en: "정치과의원", ja: "정치과의원" },
    thumbnail: "",
    lat: 33.4926031,
    lng: 126.5201508,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "jeju365plus-internal",
    region: "seogwipo",
    specialty: "internal",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "제주365플러스내과의원",
    name: { zh: "제주365플러스내과의원", en: "제주365플러스내과의원", ja: "제주365플러스내과의원" },
    thumbnail: "",
    lat: 33.2477,
    lng: 126.5143323,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "nalsseen-clinic",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "날씬의원",
    name: { zh: "날씬의원", en: "날씬의원", ja: "날씬의원" },
    thumbnail: "",
    lat: 33.4867661,
    lng: 126.4799162,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "chaeum-mens",
    region: "jeju-city",
    specialty: "internal",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "채움남성의원",
    name: { zh: "채움남성의원", en: "채움남성의원", ja: "채움남성의원" },
    thumbnail: "",
    lat: 33.4832613,
    lng: 126.4810609,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "easton-clinic",
    region: "seogwipo",
    specialty: "dermatology",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "이스톤의원",
    name: { zh: "이스톤의원", en: "이스톤의원", ja: "이스톤의원" },
    thumbnail: "",
    lat: 33.286509,
    lng: 126.281098,
    coordStatus: "verified",
    has_detail: true
  },
  {
    id: "kimsplant-dental",
    region: "jeju-city",
    specialty: "dental",
    type: "clinic",
    official_licensed: true,
    foreign_official: true,
    rating: 0,
    review_count: 0,
    name_ko: "킴스플란트치과의원",
    name: { zh: "킴스플란트치과의원", en: "킴스플란트치과의원", ja: "킴스플란트치과의원" },
    thumbnail: "",
    lat: 33.4817212,
    lng: 126.4822578,
    coordStatus: "verified",
    has_detail: true
  },


];

/* ── 병원 상세 정보 로더 ────────────────────────────────────── */
const HOSPITAL_DETAILS = {};

// 지역별 상세 정보 파일 경로
const DETAIL_FILES = {
  "jeju-city": "data/jeju-city.js",
  "seogwipo": "data/seogwipo.js"
};

// 상세 정보 로드 함수
async function loadHospitalDetail(hospitalId) {
  // 이미 로드된 경우 캐시에서 반환
  if (HOSPITAL_DETAILS[hospitalId]) {
    return HOSPITAL_DETAILS[hospitalId];
  }
  
  const hospital = HOSPITAL_INDEX.find(h => h.id === hospitalId);
  if (!hospital || !hospital.has_detail) {
    return null;
  }
  
  // 지역별 파일 로드
  const region = hospital.region;
  if (!DETAIL_FILES[region]) {
    return null;
  }
  
  try {
    // 동적 스크립트 로드
    await loadScript(DETAIL_FILES[region]);
    
    // 로드된 데이터에서 해당 병원 찾기
    const regionData = window[`HOSPITALS_${region.toUpperCase().replace('-', '_')}`];
    if (regionData && regionData[hospitalId]) {
      HOSPITAL_DETAILS[hospitalId] = regionData[hospitalId];
      return regionData[hospitalId];
    }
  } catch (e) {
    console.error(`Failed to load hospital detail: ${hospitalId}`, e);
  }
  
  return null;
}

// 스크립트 동적 로드 헬퍼
function loadScript(src) {
  return new Promise((resolve, reject) => {
    // 절대 URL로 변환 (GitHub Pages 서브경로 환경에서도 올바르게 동작)
    const resolvedSrc = new URL(src, window.location.href).href;
    // 이미 로드된 경우
    const existing = document.querySelector(`script[src="${resolvedSrc}"]`);
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = resolvedSrc;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// 모든 병원 기본 정보 반환 (목록용)
function getAllHospitals() {
  return HOSPITAL_INDEX.map(h => ({
    ...h,
    // 기본 정볼만 포함, 상세 정보는 별도 로드
    getDetail: () => loadHospitalDetail(h.id)
  }));
}

// 특정 병원 기본 정보
function getHospitalById(id) {
  return HOSPITAL_INDEX.find(h => h.id === id);
}

// DB 객체와 호환을 위한 래퍼
const DB_PROXY = {
  get hospitals() {
    // 기본 정보 + 상세 정보 병합 (이미 로드된 경우)
    return HOSPITAL_INDEX.map(h => ({
      ...h,
      ...(HOSPITAL_DETAILS[h.id] || {})
    }));
  },
  get contents() {
    return CONTENTS_DB;
  }
};

