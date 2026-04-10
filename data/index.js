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
    featured: true,
    rating: 4.6,
    review_count: 390,
    name_ko: "아름다운피부과의원",
    name: { zh: "老衡美丽皮肤科", en: "Areumdaun Dermatology", ja: "ノヒョン アルムダウン皮膚科" },
    thumbnail: "images/areumd-thumb.jpg",
    has_detail: true
  },
  {
    id: "jejuskinlab",
    region: "jeju-city",
    specialty: "skincare",
    type: "skincare",
    featured: true,
    rating: 4.5,
    review_count: 120,
    name_ko: "제주스킨랩",
    name: { zh: "济州清透皮肤护理", en: "Jeju Skin Lab", ja: "済州スキンラボ" },
    thumbnail: "images/jejuskinlab-thumb.jpg",
    has_detail: true
  },
  {
    id: "jejuhealing",
    region: "jeju-city",
    specialty: "massage",
    type: "massage",
    featured: false,
    rating: 4.4,
    review_count: 85,
    name_ko: "제주힐링마사지",
    name: { zh: "济州岛疗愈按摩", en: "Jeju Healing Massage", ja: "済州ヒーリングマッサージ" },
    thumbnail: "images/jejuhealing-thumb.jpg",
    has_detail: true
  },
  // 서귀포 병원
  {
    id: "bellemorn",
    region: "seogwipo",
    specialty: "plastic-surgery",
    type: "clinic",
    featured: true,
    rating: 4.7,
    review_count: 180,
    name_ko: "벨륭성형외과의원",
    name: { zh: "贝勒蒙整形外科", en: "Bellemorn Plastic Surgery", ja: "ベルモン整形外科" },
    thumbnail: "images/bellemorn-thumb.jpg",
    has_detail: true
  },

  // 추가 피부과/성형외과 병원
  {
    id: "ami",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    featured: false,
    rating: 4.3,
    review_count: 95,
    name_ko: "아미의원",
    name: { zh: "阿美医院", en: "Ami Clinic", ja: "アミ医院" },
    thumbnail: "images/ami-thumb.jpg",
    has_detail: true
  },

  {
    id: "mimo",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    featured: false,
    rating: 4.1,
    review_count: 65,
    name_ko: "미모피부과의원",
    name: { zh: "美毛皮肤科", en: "Mimo Dermatology", ja: "ミモ皮膚科" },
    thumbnail: "images/mimo-thumb.jpg",
    has_detail: true
  },
  {
    id: "yeonse",
    region: "jeju-city",
    specialty: "dermatology",
    type: "clinic",
    featured: false,
    rating: 4.0,
    review_count: 58,
    name_ko: "연세피부과의원",
    name: { zh: "延世皮肤科", en: "Yonse Dermatology", ja: "延世皮膚科" },
    thumbnail: "images/yeonse-thumb.jpg",
    has_detail: true
  },
  {
    id: "miu",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    featured: false,
    rating: 4.2,
    review_count: 72,
    name_ko: "미우성형외과의원",
    name: { zh: "美牛整形外科", en: "Miu Plastic Surgery", ja: "ミウ整形外科" },
    thumbnail: "images/miu-thumb.jpg",
    has_detail: true
  },
  {
    id: "gonggam",
    region: "jeju-city",
    specialty: "plastic-surgery",
    type: "clinic",
    featured: false,
    rating: 4.1,
    review_count: 68,
    name_ko: "공감성형외과의원",
    name: { zh: "共感整形外科", en: "Gonggam Plastic Surgery", ja: "共感整形外科" },
    thumbnail: "images/gonggam-thumb.jpg",
    has_detail: true
  },

  // 서귀포 추가 병원
  {
    id: "seoulfirst",
    region: "seogwipo",
    specialty: "plastic-surgery",
    type: "clinic",
    featured: false,
    rating: 4.3,
    review_count: 112,
    name_ko: "서울퍼스트성형외과의원",
    name: { zh: "首尔第一整形外科", en: "Seoul First Plastic Surgery", ja: "ソウルファースト整形外科" },
    thumbnail: "images/seoulfirst-thumb.jpg",
    has_detail: true
  },
  {
    id: "together",
    region: "seogwipo",
    specialty: "dermatology",
    type: "clinic",
    featured: false,
    rating: 4.2,
    review_count: 89,
    name_ko: "투게더피부과의원",
    name: { zh: "一起皮肤科", en: "Together Dermatology", ja: "トゥゲザー皮膚科" },
    thumbnail: "images/together-thumb.jpg",
    has_detail: true
  },
  {
    id: "we",
    region: "seogwipo",
    specialty: "plastic-surgery",
    type: "clinic",
    featured: false,
    rating: 4.0,
    review_count: 65,
    name_ko: "WE병원",
    name: { zh: "WE医院", en: "WE Hospital", ja: "WE病院" },
    thumbnail: "images/we-thumb.jpg",
    has_detail: true
  }
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
    // 이미 로드된 경우
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = src;
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
