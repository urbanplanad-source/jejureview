/* ================================================================
   data/jeju-city.js - 제주시 병원 상세 정보
   ================================================================ */

var HOSPITALS_JEJU_CITY = {
  "areumd": {
    id: "areumd",
    region: "jeju-city",
    specialty: "dermatology",
    foreign_friendly: true,
    foreign_official: false,
    specialist_cert: "dermatology",
    featured: true,
    name: {
      zh: "BTSKIN CLINIC",
      en: "BTSKIN CLINIC",
      ja: "BTSKIN CLINIC"
    },
    name_ko: "아름다운피부과의원",
    address: {
      zh: "济州市 老衡洞 道令路5号 明恩大厦 2·3·5层（老衡五岔路口）",
      en: "Myeongeun Bldg. 2·3·5F, 5 Doryeong-ro, Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞 ドリョン路5番 ミョンウンビル 2·3·5階"
    },
    phone: "064-746-7114",
    youtube_url: "https://youtu.be/JFzieBvayOM",
    thumbnail: "images/areumd-thumb.webp",
    images: ["images/areumd-1.webp", "images/areumd-2.webp"],
    contact: { wechat: "jejubtskin", line: "", instagram: "" },
    chinese_staff: true,
    hours: {
      weekday: { zh: "平日 10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "周六 10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 · 公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4882, lng: 126.4827,
    lat: 33.4867661,
    lng: 126.4799162,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/아름다운피부과의원%20노형",
      google: "https://www.google.com/maps/search/아름다운피부과의원+제주+노형",
      daum: "https://map.kakao.com/?q=노형아름다운피부과"
    },
    specialties: {
      zh: ["激光色素", "抗衰提拉", "痘痘管理", "注射美容"],
      en: ["Laser Pigmentation", "Anti-aging Lifting", "Acne Care", "Filler & Botox"],
      ja: ["レーザー色素治療", "エイジングケア", "ニキビ管理", "注射美容"]
    },
    type: "clinic",
    rating: 4.6, review_count: 1122,
    payment_methods: {
      zh: ["现场刷卡（VISA/MC）", "现场现金", "国际银行转账（咨询后）"],
      en: ["On-site: Card (VISA/MC)", "On-site: Cash", "Bank transfer (by arrangement)"],
      ja: ["現地決済：カード（VISA/MC）", "現地決済：現金", "国際送金（相談後）"]
    },
    booking_method: {
      zh: "电话优先（中文咨询可用），也支持 WeChat 预询",
      en: "Phone recommended (Chinese staff available), WeChat inquiry welcome",
      ja: "電話推奨（中文対応可）、WeChat問合せ可"
    },
    languages_supported: {
      zh: "韩语·中文（流利）·日语（基础）",
      en: "Korean, Chinese (fluent), Japanese (basic)",
      ja: "韓国語、中国語（流暢）、日本語（基本）"
    },
    doctor_info: {
      zh: "3名皮肤科专科医师（其中1名医学博士），平均10年以上临床经验",
      en: "3 board-certified dermatologists (1 with PhD), avg 10+ yrs clinical experience",
      ja: "皮膚科専門医3名（博士1名）、平均臨床経験10年以上"
    },
    prices: [
      { name: { zh: "激光托宁", en: "Laser Toning", ja: "レーザートーニング" }, price: "50,000원~" },
      { name: { zh: "Thermage FLX", en: "Thermage FLX", ja: "Thermage FLX" }, price: "500,000원~" },
      { name: { zh: "肉毒素（小）", en: "Botox (small area)", ja: "ボトックス（小）" }, price: "50,000원~" },
      { name: { zh: "玻尿酸填充", en: "Hyaluronic Acid Filler", ja: "ヒアルロン酸フィラー" }, price: "200,000원~" }
    ],
    review_summary: {
      zh: {
        overall: "3位皮肤科专科医师（医学博士）坐诊。主打「个性化抗衰老矫正」方案——医生1对1诊断，每次结合多种最新设备复合施术。评论中反复出现「说明详细、专业感强」的评价，是济州市区口碑稳定的皮肤科之一。",
        highlights: ["3位专科医师坐诊", "个人定制方案", "复合施术体系", "老衡市区交通便利", "中文服务完善"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 1,120 条",
            summary: "Naver评论以记录型长文为主，较多描述「医生说明清楚」「复合施术效果」等体验细节。",
            keywords: ["说明清楚", "专科医生", "激光托宁", "痘痘", "复诊", "等待"],
            pros: ["3位专科医生各有分工，专业感明显", "医生1对1诊断，针对个人皮肤状态制定方案", "色素管理和痘痘治疗评论数量多，口碑稳定", "位于老衡五岔路口，济州市内交通便利", "中文服务对应完善，外国患者咨询无障碍"],
            cons: ["人气时段（周末午前）等待时间可能较长", "复合施术项目较多，初诊时间会相应增加", "价格相比周边略高"],
            cautions: ["部分评论来自复诊患者，短期体验感可能不同", "激光效果因肤质不同而存在差异，建议综合多条评论判断", "热门时段建议提前预约"]
          },
          google: {
            source: "Google Maps", count_hint: "约 50 条",
            summary: "Google评论以简短评分为主，整体评分偏高。外国旅客评论中出现「staff was helpful」「clean clinic」等关键词。",
            keywords: ["干净", "友善", "专业", "满意"],
            pros: ["整体评分较高，口碑方向正面", "有外国患者评论，说明接待外国人有一定经验"],
            cons: ["评论细节较少，个别体验难以判断"],
            cautions: ["Google评论数量相对少，建议搭配Naver长评获取更多细节"]
          },
          daum: {
            source: "Kakao Map", count_hint: "约 20 条",
            summary: "Kakao Map评论数量较少，以简短印象为主。部分评论提到「交通方便」「预约顺畅」等实际体验信息。",
            keywords: ["交通", "预约", "满意"],
            pros: ["可验证交通便利性等实际信息"],
            cons: ["样本量小，代表性有限"],
            cautions: ["评论数量少时，个别极端体验会放大影响，请综合判断"]
          }
        }
      },
      en: {
        overall: "Four board-certified dermatologists on staff. The clinic specialises in personalised anti-ageing protocols—each visit includes a one-on-one physician consultation.",
        highlights: ["4 board-certified dermatologists", "Personalised treatment plans", "Combination laser protocols", "Convenient location in Jeju City"],
        platforms: {
          naver: {
            source: "Naver Map", count_hint: "~320 reviews",
            summary: "Naver reviews are mostly detailed long-form posts describing the consultation process, laser outcomes, and wait times.",
            keywords: ["thorough explanation", "specialist", "laser toning", "acne", "repeat visit", "wait"],
            pros: ["4 specialists each with distinct expertise", "1-on-1 physician consultation tailored to skin condition"],
            cons: ["Possible wait during peak hours (weekend mornings)", "Combination treatments may lengthen first-visit duration"],
            cautions: ["Many reviewers are repeat patients; single-visit experience may differ", "Laser results vary by skin type"]
          },
          google: {
            source: "Google Maps", count_hint: "~50 reviews",
            summary: "Google reviews are mostly brief ratings. Overall score is high. Foreign visitor reviews mention helpful staff.",
            keywords: ["clean", "friendly", "professional", "satisfied"],
            pros: ["High overall rating", "Foreign patient reviews indicate experience with international visitors"],
            cons: ["Limited detail in reviews"],
            cautions: ["Fewer reviews—combine with Naver for a fuller picture"]
          },
          daum: {
            source: "Kakao Map", count_hint: "~20 reviews",
            summary: "Few reviews, mostly brief impressions. Some mention convenient transport and smooth booking.",
            keywords: ["transport", "booking", "satisfied"],
            pros: ["Corroborates location convenience"],
            cons: ["Small sample size"],
            cautions: ["Low volume means outlier reviews carry disproportionate weight"]
          }
        }
      },
      ja: {
        overall: "皮膚科専門医4名が在籍。「個別最適化アンチエイジング」を掲げ、医師が1対1で診察し、その都度複数の最新機器を組み合わせた複合施術を提供。",
        highlights: ["専門医4名在籍", "個別カスタマイズプラン", "複合施術体制", "ノヒョン市街地・アクセス良好"],
        platforms: {
          naver: {
            source: "Naver マップ", count_hint: "約320件",
            summary: "Naverの口コミは記録型の長文が中心で、「医師の説明が丁寧」「複合施術の効果」などの体験詳細が多く書かれています。",
            keywords: ["説明が丁寧", "専門医", "レーザートーニング", "ニキビ", "再診", "待ち時間"],
            pros: ["4名の専門医がそれぞれ専門分野を担当", "医師による1対1の診察でスキン状態に合わせたプラン策定"],
            cons: ["人気時間帯（週末午前）は待ち時間が長くなる場合あり", "複合施術メニューが多く初診は時間がかかることも"],
            cautions: ["口コミの多くは再診患者によるもの。初回体験とは異なる場合があります", "レーザーの効果は肌質によって差があります"]
          },
          google: {
            source: "Google マップ", count_hint: "約50件",
            summary: "Googleの口コミは短い評価が中心で全体的にスコアは高め。外国人旅行者の口コミに親切なスタッフという記述が見られます。",
            keywords: ["清潔", "親切", "専門的", "満足"],
            pros: ["全体評価が高く口コミの方向性はポジティブ", "外国人患者の口コミあり。外国人対応の経験が伺えます"],
            cons: ["口コミの詳細が少なく個別体験の判断は難しい"],
            cautions: ["件数が少ないためNaverの長文口コミと合わせて確認することを推奨"]
          },
          daum: {
            source: "Kakao マップ", count_hint: "約20件",
            summary: "口コミ数は少なく短い印象記述が中心。「交通が便利」「予約がスムーズ」などの実用的な情報が一部含まれています。",
            keywords: ["交通", "予約", "満足"],
            pros: ["アクセスの利便性を裏付ける情報あり"],
            cons: ["サンプル数が少なく代表性に限界あり"],
            cautions: ["件数が少ない場合、一部の極端な体験が影響を与えやすいため総合的に判断してください"]
          }
        }
      }
    }
  },
  /* ─── 추가 병원: 피부과/성형외과 ─────────────────────────────── */
  "ami": {
    id: "ami",
    region: "jeju-city",
    specialty: "dermatology",
    foreign_friendly: true,
    featured: false,
    name: { zh: "阿美医院", en: "Ami Clinic", ja: "アミ医院" },
    name_ko: "아미의원",
    address: {
      zh: "济州市 老衡洞 老衡14街12号 HO大厦3楼",
      en: "3F HO Bldg, 12 Nohyeong 14-gil, Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞 ノヒョン14キル12 HOビル3階"
    },
    phone: "064-747-3778",
    thumbnail: "images/ami-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "10:00 - 15:00", en: "Sat 10:00–15:00", ja: "土曜 10:00–15:00" },
      closed: { zh: "周日 休息", en: "Sun Closed", ja: "日曜 休診" }
    },
    lat: 33.4850, lng: 126.4800,
    platform_links: {
      naver: "https://map.naver.com/v5/search/아미의원%20제주",
      google: "https://www.google.com/maps/search/아미의원+제주",
      daum: "https://map.kakao.com/?q=아미의원+제주"
    },
    specialties: {
      zh: ["皮肤管理", "激光美容", "微整形"],
      en: ["Skin Care", "Laser Treatment", "Aesthetic Procedures"],
      ja: ["スキンケア", "レーザー美容", "美容施術"]
    },
    type: "clinic",
    rating: 4.3, review_count: 353,
    review_summary: {
      zh: { overall: "位于老衡洞的皮肤科，提供皮肤管理和激光美容服务。" },
      en: { overall: "A dermatology clinic in Nohyeong-dong offering skin care and laser treatments." },
      ja: { overall: "ノヒョン洞にある皮膚科。スキンケアとレーザー治療を提供。" }
    }
  },

  "mimo": {
    id: "mimo",
    region: "jeju-city",
    specialty: "dermatology",
    foreign_friendly: true,
    featured: false,
    name: { zh: "美毛皮肤科", en: "Mimo Dermatology", ja: "ミモ皮膚科" },
    name_ko: "미모피부과의원",
    address: {
      zh: "济州市 老衡洞",
      en: "Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞"
    },
    phone: "064-744-7582",
    thumbnail: "images/mimo-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 休息", en: "Sun Closed", ja: "日曜 休診" }
    },
    lat: 33.4870, lng: 126.4830,
    platform_links: {
      naver: "https://map.naver.com/v5/search/미모피부과의원%20제주",
      google: "https://www.google.com/maps/search/미모피부과의원+제주",
      daum: "https://map.kakao.com/?q=미모피부과의원+제주"
    },
    specialties: {
      zh: ["皮肤管理", "激光", "注射美容"],
      en: ["Skin Care", "Laser", "Injectables"],
      ja: ["スキンケア", "レーザー", "注射美容"]
    },
    type: "clinic",
    rating: 4.1, review_count: 255,
    review_summary: {
      zh: { overall: "老衡洞的皮肤科医院。" },
      en: { overall: "A dermatology clinic in Nohyeong-dong." },
      ja: { overall: "ノヒョン洞にある皮膚科。" }
    }
  },

  "yeonse": {
    id: "yeonse",
    region: "jeju-city",
    specialty: "dermatology",
    foreign_friendly: true,
    featured: false,
    name: { zh: "延世皮肤科", en: "Yonse Dermatology", ja: "延世皮膚科" },
    name_ko: "연세피부과의원",
    address: {
      zh: "济州市 老衡洞",
      en: "Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞"
    },
    phone: "064-755-0075",
    thumbnail: "images/yeonse-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 休息", en: "Sun Closed", ja: "日曜 休診" }
    },
    lat: 33.4890, lng: 126.4840,
    platform_links: {
      naver: "https://map.naver.com/v5/search/연세피부과의원%20제주",
      google: "https://www.google.com/maps/search/연세피부과의원+제주",
      daum: "https://map.kakao.com/?q=연세피부과의원+제주"
    },
    specialties: {
      zh: ["皮肤治疗", "激光", "微整形"],
      en: ["Skin Treatment", "Laser", "Aesthetics"],
      ja: ["皮膚治療", "レーザー", "美容施術"]
    },
    type: "clinic",
    rating: 4.0, review_count: 282,
    review_summary: {
      zh: { overall: "老衡洞的皮肤科医院。" },
      en: { overall: "A dermatology clinic in Nohyeong-dong." },
      ja: { overall: "ノヒョン洞にある皮膚科。" }
    }
  },

  "miu": {
    id: "miu",
    region: "jeju-city",
    specialty: "plastic-surgery",
    foreign_friendly: true,
    featured: false,
    name: { zh: "美牛整形外科", en: "Miu Plastic Surgery", ja: "ミウ整形外科" },
    name_ko: "미우성형외과의원",
    address: {
      zh: "济州市 老衡洞",
      en: "Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞"
    },
    phone: "064-773-8888",
    thumbnail: "images/miu-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 休息", en: "Sun Closed", ja: "日曜 休診" }
    },
    lat: 33.4900, lng: 126.4850,
    lat: 33.4857845,
    lng: 126.478286,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/미우성형외과의원%20제주",
      google: "https://www.google.com/maps/search/미우성형외과의원+제주",
      daum: "https://map.kakao.com/?q=미우성형외과의원+제주"
    },
    specialties: {
      zh: ["眼部整形", "鼻部整形", "面部轮廓"],
      en: ["Eye Surgery", "Nose Surgery", "Facial Contouring"],
      ja: ["目の整形", "鼻の整形", "輪郭整形"]
    },
    type: "clinic",
    rating: 4.2, review_count: 34,
    review_summary: {
      zh: { overall: "老衡洞的整形外科医院。" },
      en: { overall: "A plastic surgery clinic in Nohyeong-dong." },
      ja: { overall: "ノヒョン洞にある整形外科。" }
    }
  },

  "gonggam": {
    id: "gonggam",
    region: "jeju-city",
    specialty: "plastic-surgery",
    foreign_friendly: true,
    foreign_official: true,
    featured: false,
    name: { zh: "共感整形外科", en: "Gonggam Plastic Surgery", ja: "共感整形外科" },
    name_ko: "공감성형외과의원",
    address: {
      zh: "济州市 老衡洞",
      en: "Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞"
    },
    phone: "064-702-0310",
    thumbnail: "images/gonggam-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 休息", en: "Sun Closed", ja: "日曜 休診" }
    },
    lat: 33.4910, lng: 126.4860,
    lat: 33.4865627,
    lng: 126.5416626,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/공감성형외과의원%20제주",
      google: "https://www.google.com/maps/search/공감성형외과의원+제주",
      daum: "https://map.kakao.com/?q=공감성형외과의원+제주"
    },
    specialties: {
      zh: ["眼部整形", "鼻部整形", "皮肤美容"],
      en: ["Eye Surgery", "Nose Surgery", "Skin Aesthetics"],
      ja: ["目の整形", "鼻の整形", "美容皮膚科"]
    },
    type: "clinic",
    rating: 4.1, review_count: 113,
    review_summary: {
      zh: { overall: "老衡洞的整形外科兼皮肤科医院。" },
      en: { overall: "A plastic surgery and dermatology clinic in Nohyeong-dong." },
      ja: { overall: "ノヒョン洞にある整形外科・皮膚科。" }
    }
  }

,
  // ── 신규 추가: 제주시 피부과 ──────────────────────────────────
  "imiae": {
    id: "imiae", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "dermatology",
    name: { zh: "李美爱皮肤科", en: "Lee Mi-ae Dermatology", ja: "イ・ミエ皮膚科" },
    name_ko: "이미애피부과의원",
    address: { zh: "济州市 三道一洞 西光路 267", en: "267 Seogwang-ro, Samdo 1-dong, Jeju City", ja: "済州市 三道一洞 서광로 267" },
    phone: "064-755-5885", thumbnail: "images/imiae-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 09:00–18:00", en: "Mon–Fri 09:00–18:00", ja: "平日 09:00–18:00" },
      sat: { zh: "土曜 09:00–13:00", en: "Sat 09:00–13:00", ja: "土曜 09:00–13:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.5101, lng: 126.5281,
    platform_links: {
      naver: "https://map.naver.com/v5/search/이미애피부과의원",
      google: "https://www.google.com/maps/search/이미애피부과의원+제주",
      daum: "https://map.kakao.com/?q=이미애피부과의원"
    },
    specialties: {
      zh: ["皮肤疾患", "痘痘治疗", "激光护肤", "色素管理"],
      en: ["Skin Disease", "Acne Treatment", "Laser Care", "Pigmentation"],
      ja: ["皮膚疾患", "ニキビ治療", "レーザーケア", "色素管理"]
    },
    type: "clinic", rating: 4.3, review_count: 840,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "皮肤科专科医师 1名", en: "1 board-certified dermatologist", ja: "皮膚科専門医 1名" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市三道洞老牌皮肤科，皮肤科专科医师坐诊，以皮肤疾患和痘痘治疗为主，口碑稳定。", highlights: ["老字号诊所", "专科医师坐诊", "市中心位置"], platforms: { naver: { rating: 4.3, count: 840 } } },
      en: { overall: "Long-established dermatology clinic in central Jeju with a board-certified specialist.", highlights: ["Established clinic", "Board-certified specialist", "Central location"], platforms: { naver: { rating: 4.3, count: 840 } } },
      ja: { overall: "済州市中心部の老舗皮膚科。専門医による皮膚疾患・ニキビ治療が評判。", highlights: ["老舗クリニック", "専門医在籍", "市街中心"], platforms: { naver: { rating: 4.3, count: 840 } } }
    }
  },

  "hansen": {
    id: "hansen", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: false, foreign_official: false, specialist_cert: "dermatology",
    name: { zh: "복지피부과의원", en: "Bokji Dermatology Clinic", ja: "福祉皮膚科医院" },
    name_ko: "복지피부과의원",
    address: { zh: "济州市 渊洞", en: "Yeon-dong, Jeju City", ja: "済州市 渊洞" },
    phone: "064-747-2559", thumbnail: "images/hansen-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 09:00–18:00", en: "Mon–Fri 09:00–18:00", ja: "平日 09:00–18:00" },
      sat: { zh: "周六 休息", en: "Sat Closed", ja: "土曜 休診" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4996, lng: 126.5312,
    lat: 33.4858518,
    lng: 126.4960596,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/복지피부과의원",
      google: "https://www.google.com/maps/search/한센복지피부과+제주",
      daum: "https://map.kakao.com/?q=한센복지피부과+제주"
    },
    specialties: {
      zh: ["皮肤疾患", "一般皮肤诊疗"],
      en: ["Skin Disease", "General Dermatology"],
      ja: ["皮膚疾患", "一般皮膚診療"]
    },
    type: "clinic", rating: 4.0, review_count: 157,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "皮肤科专科医师", en: "Board-certified dermatologist", ja: "皮膚科専門医" },
    prices: [],
    review_summary: {
      zh: { overall: "韩国汉森福利协会运营的皮肤科，以一般皮肤疾患诊疗为主。", highlights: ["福利型诊所"], platforms: { naver: { rating: 4.0, count: 157 } } },
      en: { overall: "Welfare dermatology clinic run by Hansen Welfare Association.", highlights: ["Welfare clinic"], platforms: { naver: { rating: 4.0, count: 157 } } },
      ja: { overall: "ハンセン福祉協会が運営する皮膚科クリニック。", highlights: ["福祉クリニック"], platforms: { naver: { rating: 4.0, count: 157 } } }
    }
  },

  "degoun": {
    id: "degoun", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "",
    name: { zh: "德高温皮肤科", en: "Degoun Skin Clinic", ja: "デゴウンクリニック" },
    name_ko: "더고운의원",
    address: { zh: "济州市 二道二洞", en: "Ido 2-dong, Jeju City", ja: "済州市 二道二洞" },
    phone: "064-727-9919", thumbnail: "images/degoun-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 09:30–18:30", en: "Mon–Fri 09:30–18:30", ja: "平日 09:30–18:30" },
      sat: { zh: "土曜 09:30–13:00", en: "Sat 09:30–13:00", ja: "土曜 09:30–13:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.5082, lng: 126.5427,
    platform_links: {
      naver: "https://map.naver.com/v5/search/더고운의원+제주",
      google: "https://www.google.com/maps/search/더고운의원+제주",
      daum: "https://map.kakao.com/?q=더고운의원+제주"
    },
    specialties: {
      zh: ["激光护肤", "色素治疗", "注射美容", "皮肤管理"],
      en: ["Laser Care", "Pigmentation", "Filler & Botox", "Skin Management"],
      ja: ["レーザーケア", "色素治療", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.1, review_count: 373,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "피부과 진료", en: "Skin care specialist", ja: "皮膚科診療" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市二道洞皮肤科诊所，提供激光护肤和注射美容疗程。", highlights: ["方便位置", "多样疗程"], platforms: { naver: { rating: 4.1, count: 373 } } },
      en: { overall: "Skin clinic in Ido-dong offering laser and injection treatments.", highlights: ["Convenient", "Variety of treatments"], platforms: { naver: { rating: 4.1, count: 373 } } },
      ja: { overall: "二道洞のスキンクリニック。レーザー・注射施術を提供。", highlights: ["便利な立地", "多様な施術"], platforms: { naver: { rating: 4.1, count: 373 } } }
    }
  },

  "ppeum": {
    id: "ppeum", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: true, specialist_cert: "plastic-surgery",
    name: { zh: "PPEUM全球诊所 济州分院", en: "PPEUM Global Clinic Jeju", ja: "プームグローバルクリニック 済州店" },
    name_ko: "뿜글로벌의원 제주점",
    address: { zh: "济州市 老衡洞", en: "Nohyeong-dong, Jeju City", ja: "済州市 老衡洞" },
    phone: "064-900-2600", thumbnail: "images/ppeum-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–17:00", en: "Sat 10:00–17:00", ja: "土曜 10:00–17:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4843, lng: 126.4818,
    lat: 33.48302,
    lng: 126.4812051,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/뿜글로벌의원+제주",
      google: "https://www.google.com/maps/search/뿜글로벌의원+제주",
      daum: "https://map.kakao.com/?q=뿜글로벌의원+제주"
    },
    specialties: {
      zh: ["激光护肤", "提拉抗衰", "注射美容", "皮肤管理"],
      en: ["Laser Care", "Lifting & Anti-aging", "Filler & Botox", "Skin Management"],
      ja: ["レーザーケア", "リフティング", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.2, review_count: 744,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "성형외과 专科医师", en: "Plastic surgery specialist", ja: "整形外科専門医" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市老衡洞皮肤·미용诊所，成形外科专科医师坐诊，提供激光护肤和提拉疗程。", highlights: ["成形外科专科医师", "老衡洞位置", "综合美容"], platforms: { naver: { rating: 4.2, count: 744 } } },
      en: { overall: "Beauty clinic in Nohyeong-dong staffed by a plastic surgery specialist.", highlights: ["Specialist on staff", "Nohyeong location", "Comprehensive care"], platforms: { naver: { rating: 4.2, count: 744 } } },
      ja: { overall: "老衡洞の美容クリニック。整形外科専門医が在籍。", highlights: ["専門医在籍", "老衡洞"], platforms: { naver: { rating: 4.2, count: 744 } } }
    }
  },

  "dermiin": {
    id: "dermiin", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "",
    name: { zh: "德美人医院", en: "Dermiin Clinic", ja: "ダーミインクリニック" },
    name_ko: "더미인의원",
    address: { zh: "济州市 老衡洞", en: "Nohyeong-dong, Jeju City", ja: "済州市 老衡洞" },
    phone: "064-749-5222", thumbnail: "images/dermiin-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–18:30", en: "Mon–Fri 10:00–18:30", ja: "平日 10:00–18:30" },
      sat: { zh: "土曜 10:00–14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4843, lng: 126.4818,
    lat: 33.4883273,
    lng: 126.4837246,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/더미인의원+제주",
      google: "https://www.google.com/maps/search/더미인의원+제주",
      daum: "https://map.kakao.com/?q=더미인의원+제주"
    },
    specialties: {
      zh: ["激光护肤", "注射美容", "皮肤管理", "色素治疗"],
      en: ["Laser Care", "Filler & Botox", "Skin Management", "Pigmentation"],
      ja: ["レーザーケア", "注射美容", "スキン管理", "色素治療"]
    },
    type: "clinic", rating: 4.2, review_count: 137,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "피부과 진료", en: "Skin care", ja: "皮膚科診療" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市老衡洞皮肤美容诊所，提供激光护肤和注射美容疗程。", highlights: ["老衡洞位置", "多样疗程"], platforms: { naver: { rating: 4.2, count: 137 } } },
      en: { overall: "Aesthetic skin clinic in Nohyeong-dong.", highlights: ["Nohyeong location"], platforms: { naver: { rating: 4.2, count: 137 } } },
      ja: { overall: "老衡洞の美容皮膚クリニック。", highlights: ["老衡洞"], platforms: { naver: { rating: 4.2, count: 137 } } }
    }
  },

  "misarang": {
    id: "misarang", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "",
    name: { zh: "美思朗医院", en: "Misarang Clinic", ja: "ミサランクリニック" },
    name_ko: "미사랑의원",
    address: { zh: "济州市 二道二洞", en: "Ido 2-dong, Jeju City", ja: "済州市 二道二洞" },
    phone: "064-725-7727", thumbnail: "images/misarang-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 09:30–18:30", en: "Mon–Fri 09:30–18:30", ja: "平日 09:30–18:30" },
      sat: { zh: "土曜 09:30–13:00", en: "Sat 09:30–13:00", ja: "土曜 09:30–13:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.5082, lng: 126.5427,
    platform_links: {
      naver: "https://map.naver.com/v5/search/미사랑의원+제주",
      google: "https://www.google.com/maps/search/미사랑의원+제주",
      daum: "https://map.kakao.com/?q=미사랑의원+제주"
    },
    specialties: {
      zh: ["激光护肤", "注射美容", "皮肤管理"],
      en: ["Laser Care", "Filler & Botox", "Skin Management"],
      ja: ["レーザーケア", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.1, review_count: 113,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "피부과 진료", en: "Skin care", ja: "皮膚科診療" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市二道洞皮肤美容诊所，提供激光护肤疗程。", highlights: ["二道洞位置"], platforms: { naver: { rating: 4.1, count: 113 } } },
      en: { overall: "Skin care clinic in Ido-dong.", highlights: ["Convenient location"], platforms: { naver: { rating: 4.1, count: 113 } } },
      ja: { overall: "二道洞のスキンケアクリニック。", highlights: ["好アクセス"], platforms: { naver: { rating: 4.1, count: 113 } } }
    }
  },

  "foever": {
    id: "foever", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: true, specialist_cert: "",
    name: { zh: "4EVER诊所 济州", en: "4EVER Clinic Jeju", ja: "フォーエバークリニック 済州" },
    name_ko: "포에버의원 제주",
    address: { zh: "济州市 渊洞", en: "Yeon-dong, Jeju City", ja: "済州市 渊洞" },
    phone: "064-711-8448", thumbnail: "images/foever-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–17:00", en: "Sat 10:00–17:00", ja: "土曜 10:00–17:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4996, lng: 126.5312,
    lat: 33.4895983,
    lng: 126.4886606,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/포에버의원+제주",
      google: "https://www.google.com/maps/search/포에버의원+제주",
      daum: "https://map.kakao.com/?q=포에버의원+제주"
    },
    specialties: {
      zh: ["激光护肤", "提拉抗衰", "注射美容", "皮肤管理"],
      en: ["Laser Care", "Lifting", "Filler & Botox", "Skin Management"],
      ja: ["レーザーケア", "リフティング", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.2, review_count: 520,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "미용 진료", en: "Aesthetic care", ja: "美容診療" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市渊洞综合美容诊所，提供激光护肤和提拉疗程，口碑较好。", highlights: ["渊洞位置", "综合美容"], platforms: { naver: { rating: 4.2, count: 520 } } },
      en: { overall: "Aesthetic clinic in Yeon-dong with a wide range of skin treatments.", highlights: ["Central location", "Variety of treatments"], platforms: { naver: { rating: 4.2, count: 520 } } },
      ja: { overall: "渊洞の総合美容クリニック。多様な皮膚ケアを提供。", highlights: ["渊洞"], platforms: { naver: { rating: 4.2, count: 520 } } }
    }
  },

  "jeinu": {
    id: "jeinu", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "dermatology",
    name: { zh: "J·NEW皮肤科", en: "J·NEW Dermatology", ja: "Jニュー皮膚科" },
    name_ko: "제이뉴피부과의원",
    address: { zh: "济州市 二道二洞", en: "Ido 2-dong, Jeju City", ja: "済州市 二道二洞" },
    phone: "", thumbnail: "images/jeinu-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.5082, lng: 126.5427,
    lat: 33.4914902,
    lng: 126.5372469,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/제이뉴피부과의원",
      google: "https://www.google.com/maps/search/제이뉴피부과의원+제주",
      daum: "https://map.kakao.com/?q=제이뉴피부과의원"
    },
    specialties: {
      zh: ["激光护肤", "色素治疗", "注射美容", "皮肤疾患"],
      en: ["Laser Care", "Pigmentation", "Filler & Botox", "Skin Disease"],
      ja: ["レーザーケア", "色素治療", "注射美容", "皮膚疾患"]
    },
    type: "clinic", rating: 4.2, review_count: 294,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "皮肤科专科医师 1名", en: "1 board-certified dermatologist", ja: "皮膚科専門医 1名" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市二道洞皮肤科诊所，皮肤科专科医师坐诊，提供激光护肤和色素治疗。", highlights: ["专科医师坐诊", "二道洞位置"], platforms: { naver: { rating: 4.2, count: 294 } } },
      en: { overall: "Dermatology clinic in Ido-dong staffed by a board-certified specialist.", highlights: ["Board-certified specialist"], platforms: { naver: { rating: 4.2, count: 294 } } },
      ja: { overall: "二道洞の皮膚科クリニック。専門医在籍。", highlights: ["専門医在籍"], platforms: { naver: { rating: 4.2, count: 294 } } }
    }
  },

  "newline": {
    id: "newline", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: true, specialist_cert: "",
    name: { zh: "首尔纽莱因皮肤科", en: "Seoul Newline Clinic", ja: "ソウルニューラインクリニック" },
    name_ko: "서울뉴라인의원",
    address: { zh: "济州市 老衡洞", en: "Nohyeong-dong, Jeju City", ja: "済州市 老衡洞" },
    phone: "064-744-7570", thumbnail: "images/newline-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–15:00", en: "Sat 10:00–15:00", ja: "土曜 10:00–15:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4843, lng: 126.4818,
    lat: 33.4790135,
    lng: 126.4697556,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/서울뉴라인의원+제주",
      google: "https://www.google.com/maps/search/서울뉴라인의원+제주",
      daum: "https://map.kakao.com/?q=서울뉴라인의원+제주"
    },
    specialties: {
      zh: ["激光护肤", "提拉抗衰", "注射美容", "皮肤管理"],
      en: ["Laser Care", "Lifting", "Filler & Botox", "Skin Management"],
      ja: ["レーザーケア", "リフティング", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.1, review_count: 154,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "피부 미용 진료", en: "Aesthetic skin care", ja: "美容皮膚診療" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市老衡洞皮肤美容诊所，提供激光护肤和提拉疗程。", highlights: ["老衡洞位置"], platforms: { naver: { rating: 4.1, count: 154 } } },
      en: { overall: "Skin aesthetics clinic in Nohyeong-dong.", highlights: ["Nohyeong location"], platforms: { naver: { rating: 4.1, count: 154 } } },
      ja: { overall: "老衡洞のスキン美容クリニック。", highlights: ["老衡洞"], platforms: { naver: { rating: 4.1, count: 154 } } }
    }
  },

  "jejuareumd": {
    id: "jejuareumd", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "dermatology",
    name: { zh: "济州美丽皮肤科", en: "Jeju Areumdaun Dermatology", ja: "済州アルムダウン皮膚科" },
    name_ko: "제주아름다운피부과의원",
    address: { zh: "济州市 二道一洞", en: "Ido 1-dong, Jeju City", ja: "済州市 二道一洞" },
    phone: "064-746-7114", thumbnail: "images/jejuareumd-thumb.webp", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–18:00", en: "Mon–Fri 10:00–18:00", ja: "平日 10:00–18:00" },
      sat: { zh: "土曜 10:00–14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.5082, lng: 126.5352,
    platform_links: {
      naver: "https://map.naver.com/v5/search/제주아름다운피부과의원",
      google: "https://www.google.com/maps/search/제주아름다운피부과의원",
      daum: "https://map.kakao.com/?q=제주아름다운피부과의원"
    },
    specialties: {
      zh: ["激光护肤", "色素治疗", "注射美容", "抗衰提拉"],
      en: ["Laser Care", "Pigmentation", "Filler & Botox", "Anti-aging"],
      ja: ["レーザーケア", "色素治療", "注射美容", "エイジングケア"]
    },
    type: "clinic", rating: 4.3, review_count: 638,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "皮肤科专科医师 2名", en: "2 board-certified dermatologists", ja: "皮膚科専門医 2名" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市二道洞皮肤科，2名皮肤科专科医师坐诊，口碑稳定，提供激光和抗衰疗程。", highlights: ["2名专科医师", "二道洞位置", "激光抗衰"], platforms: { naver: { rating: 4.3, count: 638 } } },
      en: { overall: "Dermatology clinic with 2 board-certified specialists in Ido-dong.", highlights: ["2 specialists", "Ido-dong location"], platforms: { naver: { rating: 4.3, count: 638 } } },
      ja: { overall: "二道洞の皮膚科。専門医2名在籍で安定した評判。", highlights: ["専門医2名", "二道洞"], platforms: { naver: { rating: 4.3, count: 638 } } }
    }
  },

  "rosemary": {
    id: "rosemary", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "",
    name: { zh: "迷迭香医院", en: "Rosemary Clinic", ja: "ローズマリークリニック" },
    name_ko: "로즈마리의원",
    address: { zh: "济州市 道连一洞", en: "Doryeon 1-dong, Jeju City", ja: "済州市 道連一洞" },
    phone: "", thumbnail: "images/rosemary-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 09:30–18:00", en: "Mon–Fri 09:30–18:00", ja: "平日 09:30–18:00" },
      sat: { zh: "土曜 09:30–13:00", en: "Sat 09:30–13:00", ja: "土曜 09:30–13:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.5119, lng: 126.5651,
    platform_links: {
      naver: "https://map.naver.com/v5/search/로즈마리의원+제주",
      google: "https://www.google.com/maps/search/로즈마리의원+제주",
      daum: "https://map.kakao.com/?q=로즈마리의원+제주"
    },
    specialties: {
      zh: ["激光护肤", "注射美容", "皮肤管理"],
      en: ["Laser Care", "Filler & Botox", "Skin Management"],
      ja: ["レーザーケア", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.0, review_count: 156,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "피부 미용 진료", en: "Aesthetic skin care", ja: "美容皮膚診療" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市道连洞皮肤美容诊所。", highlights: ["道连洞位置"], platforms: { naver: { rating: 4.0, count: 156 } } },
      en: { overall: "Skin care clinic in Doryeon-dong.", highlights: ["Doryeon location"], platforms: { naver: { rating: 4.0, count: 156 } } },
      ja: { overall: "道連洞のスキンケアクリニック。", highlights: ["道連洞"], platforms: { naver: { rating: 4.0, count: 156 } } }
    }
  },

  "vueanmi": {
    id: "vueanmi", region: "jeju-city", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "",
    name: { zh: "VU&ME医院", en: "Vu & Me Clinic", ja: "ビューアンドミークリニック" },
    name_ko: "뷰앤미의원",
    address: { zh: "济州市 渊洞", en: "Yeon-dong, Jeju City", ja: "済州市 渊洞" },
    phone: "064-743-0075", thumbnail: "images/vueanmi-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–18:30", en: "Mon–Fri 10:00–18:30", ja: "平日 10:00–18:30" },
      sat: { zh: "土曜 10:00–14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4996, lng: 126.5312,
    lat: 33.4860649,
    lng: 126.4828667,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/뷰앤미의원+제주",
      google: "https://www.google.com/maps/search/뷰앤미의원+제주",
      daum: "https://map.kakao.com/?q=뷰앤미의원+제주"
    },
    specialties: {
      zh: ["激光护肤", "注射美容", "皮肤管理"],
      en: ["Laser Care", "Filler & Botox", "Skin Management"],
      ja: ["レーザーケア", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.1, review_count: 161,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "피부 미용 진료", en: "Aesthetic skin care", ja: "美容皮膚診療" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市渊洞皮肤美容诊所，提供激光护肤和注射疗程。", highlights: ["渊洞位置"], platforms: { naver: { rating: 4.1, count: 161 } } },
      en: { overall: "Aesthetic clinic in Yeon-dong.", highlights: ["Central location"], platforms: { naver: { rating: 4.1, count: 161 } } },
      ja: { overall: "渊洞の美容クリニック。", highlights: ["渊洞"], platforms: { naver: { rating: 4.1, count: 161 } } }
    }
  },
  // ── 신규 추가: 제주시 성형외과 ──────────────────────────────────

  "cdrui": {
    id: "cdrui", region: "jeju-city", specialty: "plastic-surgery",
    foreign_friendly: true, foreign_official: true, specialist_cert: "plastic-surgery",
    name: { zh: "清潭路易整形外科", en: "Cheongdam Rui Plastic Surgery", ja: "チョンダムルイ整形外科" },
    name_ko: "청담루이성형외과의원",
    address: { zh: "济州市 老衡洞 老衡14路 14号 3层", en: "3F, 14 Nohyeong 14-gil, Nohyeong-dong, Jeju City", ja: "済州市 老衡洞 老衡14ギル14 3階" },
    phone: "064-712-8999", thumbnail: "images/cdrui-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "cdrui_official" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–17:00", en: "Sat 10:00–17:00", ja: "土曜 10:00–17:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4843, lng: 126.4818,
    lat: 33.4845153,
    lng: 126.4798021,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/청담루이성형외과의원",
      google: "https://www.google.com/maps/search/청담루이성형외과+제주",
      daum: "https://map.kakao.com/?q=청담루이성형외과"
    },
    specialties: {
      zh: ["眼部整形", "鼻部整形", "提拉紧致", "皮肤激光"],
      en: ["Eye Surgery", "Nose Surgery", "Lifting", "Laser Skin Care"],
      ja: ["目の整形", "鼻の整形", "リフティング", "レーザー皮膚ケア"]
    },
    type: "clinic", rating: 4.2, review_count: 83,
    payment_methods: { zh: ["刷卡（VISA/MC）", "现金"], en: ["Card (VISA/MC)", "Cash"], ja: ["カード（VISA/MC）", "現金"] },
    booking_method: { zh: "电话预约（需提前预约）", en: "Phone (appointment required)", ja: "電話（要予約）" },
    languages_supported: { zh: "韩语·基础英语", en: "Korean, basic English", ja: "韓国語・基礎英語" },
    doctor_info: { zh: "성형외과 専科医师 1名（麻醉科专科医师 1名）", en: "1 plastic surgery specialist (+ 1 anesthesiologist)", ja: "整形外科専門医1名（麻酔科専門医1名）" },
    prices: [
      { name: { zh: "双眼皮（埋线法）", en: "Double eyelid (non-incision)", ja: "二重まぶた（埋没法）" }, price: "문의" },
      { name: { zh: "肉毒素注射", en: "Botox", ja: "ボトックス" }, price: "문의" }
    ],
    review_summary: {
      zh: { overall: "济州市老衡洞成形外科，마취科专科医师负责麻醉，눈성형·코성형·提拉疗程，신제주이마트 对面3층。", highlights: ["成形外科专科医师", "麻醉科配合", "老衡洞位置"], platforms: { naver: { rating: 4.2, count: 83 } } },
      en: { overall: "Plastic surgery clinic opposite Shinjeje Emart in Nohyeong-dong, staffed by certified specialist and anesthesiologist.", highlights: ["Certified specialist", "Anesthesiologist on staff", "Nohyeong location"], platforms: { naver: { rating: 4.2, count: 83 } } },
      ja: { overall: "老衡洞の整形外科。専門医と麻酔科医が在籍。신제주이마트맞은편3층。", highlights: ["整形外科専門医", "麻酔科在籍", "老衡洞"], platforms: { naver: { rating: 4.2, count: 83 } } }
    }
  },

  "kbeauty": {
    id: "kbeauty", region: "jeju-city", specialty: "plastic-surgery",
    foreign_friendly: true, foreign_official: true, specialist_cert: "plastic-surgery",
    name: { zh: "江南K-Beauty整形外科", en: "Gangnam K-Beauty Plastic Surgery", ja: "カンナムKビューティー整形外科" },
    name_ko: "강남케이뷰티성형외과의원",
    address: { zh: "济州市 二道二洞", en: "Ido 2-dong, Jeju City", ja: "済州市 二道二洞" },
    phone: "064-758-1800", thumbnail: "images/kbeauty-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–17:00", en: "Sat 10:00–17:00", ja: "土曜 10:00–17:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.5082, lng: 126.5427,
    lat: 33.4890812,
    lng: 126.5395542,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/강남케이뷰티성형외과의원",
      google: "https://www.google.com/maps/search/강남케이뷰티성형외과+제주",
      daum: "https://map.kakao.com/?q=강남케이뷰티성형외과"
    },
    specialties: {
      zh: ["眼部整形", "鼻部整形", "提拉抗衰", "注射美容"],
      en: ["Eye Surgery", "Nose Surgery", "Lifting", "Filler & Botox"],
      ja: ["目の整形", "鼻の整形", "リフティング", "注射美容"]
    },
    type: "clinic", rating: 4.2, review_count: 109,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语·英语", en: "Korean, English", ja: "韓国語・英語" },
    doctor_info: { zh: "성형외과 专科医师", en: "Plastic surgery specialist", ja: "整形外科専門医" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市二道洞成形外科，提供眼部·鼻부성형和提拉疗程，방문자 리뷰 109件。", highlights: ["成形外科专科医师", "二道洞位置", "K-Beauty品牌"], platforms: { naver: { rating: 4.2, count: 109 } } },
      en: { overall: "K-Beauty branded plastic surgery clinic in Ido-dong with 109 visitor reviews.", highlights: ["K-Beauty brand", "Ido-dong location"], platforms: { naver: { rating: 4.2, count: 109 } } },
      ja: { overall: "二道洞のK-Beauty整形外科。方訪者レビュー109件。", highlights: ["K-Beautyブランド", "二道洞"], platforms: { naver: { rating: 4.2, count: 109 } } }
    }
  },

  "gangnamstar": {
    id: "gangnamstar", region: "jeju-city", specialty: "plastic-surgery",
    foreign_friendly: true, foreign_official: false, specialist_cert: "plastic-surgery",
    name: { zh: "江南Star整形外科", en: "Gangnam Star Plastic Surgery", ja: "カンナムスター整形外科" },
    name_ko: "강남스타성형외과의원",
    address: { zh: "济州市 老衡洞 新衡路 14号 2·3层", en: "2·3F, 14 Sinhyeong-ro, Nohyeong-dong, Jeju City", ja: "済州市 老衡洞 신형로 14 2·3階" },
    phone: "064-745-7456", thumbnail: "images/gangnamstar-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–17:00", en: "Sat 10:00–17:00", ja: "土曜 10:00–17:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4843, lng: 126.4818,
    platform_links: {
      naver: "https://map.naver.com/v5/search/강남스타성형외과의원",
      google: "https://www.google.com/maps/search/강남스타성형외과+제주",
      daum: "https://map.kakao.com/?q=강남스타성형외과"
    },
    specialties: {
      zh: ["眼部整形", "鼻部整形", "面部轮廓", "提拉抗衰"],
      en: ["Eye Surgery", "Nose Surgery", "Facial Contouring", "Lifting"],
      ja: ["目の整形", "鼻の整形", "輪郭形成", "リフティング"]
    },
    type: "clinic", rating: 4.1, review_count: 71,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "성형외과 专科医师 1名", en: "1 plastic surgery specialist", ja: "整形外科専門医 1名" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市老衡洞成形外科，提供眼部·鼻部整形和提拉疗程。", highlights: ["老衡洞位置", "多样성형"], platforms: { naver: { rating: 4.1, count: 71 } } },
      en: { overall: "Plastic surgery clinic in Nohyeong-dong offering a range of procedures.", highlights: ["Nohyeong location"], platforms: { naver: { rating: 4.1, count: 71 } } },
      ja: { overall: "老衡洞の整形外科。多様な施術を提供。", highlights: ["老衡洞"], platforms: { naver: { rating: 4.1, count: 71 } } }
    }
  },

  "vip": {
    id: "vip", region: "jeju-city", specialty: "plastic-surgery",
    foreign_friendly: true, foreign_official: true, specialist_cert: "plastic-surgery",
    name: { zh: "VIP整形外科", en: "VIP Plastic Surgery", ja: "VIP整形外科" },
    name_ko: "VIP성형외과의원",
    address: { zh: "济州市 渊洞", en: "Yeon-dong, Jeju City", ja: "済州市 渊洞" },
    phone: "064-713-1007", thumbnail: "images/vip-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–17:00", en: "Sat 10:00–17:00", ja: "土曜 10:00–17:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4996, lng: 126.5312,
    lat: 33.4888573,
    lng: 126.4921583,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/VIP성형외과의원+제주",
      google: "https://www.google.com/maps/search/VIP성형외과+제주",
      daum: "https://map.kakao.com/?q=VIP성형외과+제주"
    },
    specialties: {
      zh: ["眼部整形", "鼻部整形", "提拉抗衰", "注射美容"],
      en: ["Eye Surgery", "Nose Surgery", "Lifting", "Filler & Botox"],
      ja: ["目の整形", "鼻の整形", "リフティング", "注射美容"]
    },
    type: "clinic", rating: 4.0, review_count: 72,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语·基础英语", en: "Korean, basic English", ja: "韓国語・基礎英語" },
    doctor_info: { zh: "성형외과 专科医师 2名", en: "2 plastic surgery specialists", ja: "整形外科専門医 2名" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市渊洞成形外科，2名专科医师坐诊，提供眼部·鼻部整形疗程。", highlights: ["2名专科医师", "渊洞位置"], platforms: { naver: { rating: 4.0, count: 72 } } },
      en: { overall: "Plastic surgery clinic in Yeon-dong with 2 certified specialists.", highlights: ["2 specialists", "Yeon-dong location"], platforms: { naver: { rating: 4.0, count: 72 } } },
      ja: { overall: "渊洞の整形外科。専門医2名在籍。", highlights: ["専門医2名", "渊洞"], platforms: { naver: { rating: 4.0, count: 72 } } }
    }
  },

  "marilyn": {
    id: "marilyn", region: "jeju-city", specialty: "plastic-surgery",
    foreign_friendly: true, foreign_official: false, specialist_cert: "",
    name: { zh: "玛丽莲J整形外科", en: "Marilyn J Clinic", ja: "マリリンJクリニック" },
    name_ko: "마릴린제이의원",
    address: { zh: "济州市 老衡洞", en: "Nohyeong-dong, Jeju City", ja: "済州市 老衡洞" },
    phone: "", thumbnail: "images/marilyn-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–16:00", en: "Sat 10:00–16:00", ja: "土曜 10:00–16:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4843, lng: 126.4818,
    platform_links: {
      naver: "https://map.naver.com/v5/search/마릴린제이의원+제주",
      google: "https://www.google.com/maps/search/마릴린제이의원+제주",
      daum: "https://map.kakao.com/?q=마릴린제이의원+제주"
    },
    specialties: {
      zh: ["眼部整形", "注射美容", "皮肤管理"],
      en: ["Eye Surgery", "Filler & Botox", "Skin Management"],
      ja: ["目の整形", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.0, review_count: 38,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "성형 미용 진료", en: "Aesthetic surgery", ja: "美容整形" },
    prices: [],
    review_summary: {
      zh: { overall: "济州市老衡洞美容成形诊所，提供眼部整形和注射美容。", highlights: ["老衡洞位置"], platforms: { naver: { rating: 4.0, count: 38 } } },
      en: { overall: "Aesthetic clinic in Nohyeong-dong.", highlights: ["Nohyeong location"], platforms: { naver: { rating: 4.0, count: 38 } } },
      ja: { overall: "老衡洞の美容クリニック。", highlights: ["老衡洞"], platforms: { naver: { rating: 4.0, count: 38 } } }
    }
  },




  "jeju-sarang-oriental": {
    id: "jeju-sarang-oriental", region: "jeju-city", specialty: "oriental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "제주사랑한의원", en: "제주사랑한의원", ja: "제주사랑한의원" },
    name_ko: "제주사랑한의원",
    address: { zh: "제주특별자치도 제주시 월랑로 13(노형동)", en: "제주특별자치도 제주시 월랑로 13(노형동)", ja: "제주특별자치도 제주시 월랑로 13(노형동)" },
    phone: "064-744-7755", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4870245,
    lng: 126.4775864,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/제주사랑한의원 ??", google: "https://www.google.com/maps/search/제주사랑한의원 ??", daum: "https://map.kakao.com/?q=제주사랑한의원 ??" },
    specialties: { zh: "한의원", en: "한의원", ja: "한의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "jeju-woori-hospital": {
    id: "jeju-woori-hospital", region: "jeju-city", specialty: "internal",
    type: "hospital", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "제주우리병원", en: "제주우리병원", ja: "제주우리병원" },
    name_ko: "제주우리병원",
    address: { zh: "제주특별자치도 제주시 중앙로 373, 1층(이도이동)", en: "제주특별자치도 제주시 중앙로 373, 1층(이도이동)", ja: "제주특별자치도 제주시 중앙로 373, 1층(이도이동)" },
    phone: "064-728-0345", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4889664,
    lng: 126.5396637,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/제주우리병원 ??", google: "https://www.google.com/maps/search/제주우리병원 ??", daum: "https://map.kakao.com/?q=제주우리병원 ??" },
    specialties: { zh: "병원", en: "병원", ja: "병원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "jeju-soo-thoracic": {
    id: "jeju-soo-thoracic", region: "jeju-city", specialty: "internal",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "제주 수 흉부외과", en: "제주 수 흉부외과", ja: "제주 수 흉부외과" },
    name_ko: "제주 수 흉부외과",
    address: { zh: "제주특별자치도 제주시 노형로 407, 307호(노형동, 노형타워)", en: "제주특별자치도 제주시 노형로 407, 307호(노형동, 노형타워)", ja: "제주특별자치도 제주시 노형로 407, 307호(노형동, 노형타워)" },
    phone: "064-747-2185", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4857845,
    lng: 126.478286,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/제주 수 흉부외과 ??", google: "https://www.google.com/maps/search/제주 수 흉부외과 ??", daum: "https://map.kakao.com/?q=제주 수 흉부외과 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "dandan-orthopedics": {
    id: "dandan-orthopedics", region: "jeju-city", specialty: "orthopedics",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "단단한정형외과의원", en: "단단한정형외과의원", ja: "단단한정형외과의원" },
    name_ko: "단단한정형외과의원",
    address: { zh: "제주특별자치도 제주시 연북로 76, 3층(연동)", en: "제주특별자치도 제주시 연북로 76, 3층(연동)", ja: "제주특별자치도 제주시 연북로 76, 3층(연동)" },
    phone: "064-749-7577", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4815271,
    lng: 126.4893732,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/단단한정형외과의원 ??", google: "https://www.google.com/maps/search/단단한정형외과의원 ??", daum: "https://map.kakao.com/?q=단단한정형외과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "bareuni-dental": {
    id: "bareuni-dental", region: "jeju-city", specialty: "dental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "바른이치과교정과치과의원", en: "바른이치과교정과치과의원", ja: "바른이치과교정과치과의원" },
    name_ko: "바른이치과교정과치과의원",
    address: { zh: "제주특별자치도 제주시 연북로 14, 401(노형동, 온정오피스텔)", en: "제주특별자치도 제주시 연북로 14, 401(노형동, 온정오피스텔)", ja: "제주특별자치도 제주시 연북로 14, 401(노형동, 온정오피스텔)" },
    phone: "064-746-7570", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4816594,
    lng: 126.4826702,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/바른이치과교정과치과의원 ??", google: "https://www.google.com/maps/search/바른이치과교정과치과의원 ??", daum: "https://map.kakao.com/?q=바른이치과교정과치과의원 ??" },
    specialties: { zh: "치과의원", en: "치과의원", ja: "치과의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "haneulmaeum-oriental": {
    id: "haneulmaeum-oriental", region: "jeju-city", specialty: "oriental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "하늘마음한의원", en: "하늘마음한의원", ja: "하늘마음한의원" },
    name_ko: "하늘마음한의원",
    address: { zh: "제주특별자치도 제주시 중앙로 371 (이도이동) 3층, 하늘마음한의원", en: "제주특별자치도 제주시 중앙로 371 (이도이동) 3층, 하늘마음한의원", ja: "제주특별자치도 제주시 중앙로 371 (이도이동) 3층, 하늘마음한의원" },
    phone: "064-723-8575", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4892111,
    lng: 126.5394779,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/하늘마음한의원 ??", google: "https://www.google.com/maps/search/하늘마음한의원 ??", daum: "https://map.kakao.com/?q=하늘마음한의원 ??" },
    specialties: { zh: "한의원", en: "한의원", ja: "한의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "haneulche-oriental": {
    id: "haneulche-oriental", region: "jeju-city", specialty: "oriental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "하늘체한의원", en: "하늘체한의원", ja: "하늘체한의원" },
    name_ko: "하늘체한의원",
    address: { zh: "제주특별자치도 제주시 노형14길 14 (노형동) 3층", en: "제주특별자치도 제주시 노형14길 14 (노형동) 3층", ja: "제주특별자치도 제주시 노형14길 14 (노형동) 3층" },
    phone: "064-900-7582", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4845153,
    lng: 126.4798021,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/하늘체한의원 ??", google: "https://www.google.com/maps/search/하늘체한의원 ??", daum: "https://map.kakao.com/?q=하늘체한의원 ??" },
    specialties: { zh: "한의원", en: "한의원", ja: "한의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "kahp-jeju": {
    id: "kahp-jeju", region: "jeju-city", specialty: "internal",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "한국건강관리협회건강증진의원", en: "한국건강관리협회건강증진의원", ja: "한국건강관리협회건강증진의원" },
    name_ko: "한국건강관리협회건강증진의원",
    address: { zh: "제주특별자치도 제주시 연북로 111 (연동, 한국건강관리협회) 한국건강관리협회 제주특별자치도지부", en: "제주특별자치도 제주시 연북로 111 (연동, 한국건강관리협회) 한국건강관리협회 제주특별자치도지부", ja: "제주특별자치도 제주시 연북로 111 (연동, 한국건강관리협회) 한국건강관리협회 제주특별자치도지부" },
    phone: "064-740-0200", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4820781,
    lng: 126.4933151,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/한국건강관리협회건강증진의원 ??", google: "https://www.google.com/maps/search/한국건강관리협회건강증진의원 ??", daum: "https://map.kakao.com/?q=한국건강관리협회건강증진의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "vivace-plastic": {
    id: "vivace-plastic", region: "jeju-city", specialty: "plastic-surgery",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "비바체성형외과", en: "비바체성형외과", ja: "비바체성형외과" },
    name_ko: "비바체성형외과",
    address: { zh: "제주특별자치도 제주시 중앙로 302 (이도이동, 더스프링) 2층", en: "제주특별자치도 제주시 중앙로 302 (이도이동, 더스프링) 2층", ja: "제주특별자치도 제주시 중앙로 302 (이도이동, 더스프링) 2층" },
    phone: "064-755-1945", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4937977,
    lng: 126.534034,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/비바체성형외과 ??", google: "https://www.google.com/maps/search/비바체성형외과 ??", daum: "https://map.kakao.com/?q=비바체성형외과 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "jewon-oriental": {
    id: "jewon-oriental", region: "jeju-city", specialty: "oriental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "제원한의원", en: "제원한의원", ja: "제원한의원" },
    name_ko: "제원한의원",
    address: { zh: "제주특별자치도 제주시 신대로14길 36 (연동) 2층 제원한의원", en: "제주특별자치도 제주시 신대로14길 36 (연동) 2층 제원한의원", ja: "제주특별자치도 제주시 신대로14길 36 (연동) 2층 제원한의원" },
    phone: "064-747-7533", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4879197,
    lng: 126.4927839,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/제원한의원 ??", google: "https://www.google.com/maps/search/제원한의원 ??", daum: "https://map.kakao.com/?q=제원한의원 ??" },
    specialties: { zh: "한의원", en: "한의원", ja: "한의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "national-orthopedics": {
    id: "national-orthopedics", region: "jeju-city", specialty: "orthopedics",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "국가대표정형외과의원", en: "국가대표정형외과의원", ja: "국가대표정형외과의원" },
    name_ko: "국가대표정형외과의원",
    address: { zh: "제주특별자치도 제주시 연북로 90 (연동) 바디빌딩 2,3층 국가대표정형외과의원", en: "제주특별자치도 제주시 연북로 90 (연동) 바디빌딩 2,3층 국가대표정형외과의원", ja: "제주특별자치도 제주시 연북로 90 (연동) 바디빌딩 2,3층 국가대표정형외과의원" },
    phone: "064-745-5566", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.481486,
    lng: 126.4908162,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/국가대표정형외과의원 ??", google: "https://www.google.com/maps/search/국가대표정형외과의원 ??", daum: "https://map.kakao.com/?q=국가대표정형외과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "tox-n-fill": {
    id: "tox-n-fill", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "톡스앤필의원", en: "톡스앤필의원", ja: "톡스앤필의원" },
    name_ko: "톡스앤필의원",
    address: { zh: "제주특별자치도 제주시 노형로 378 (노형동) 201호 톡스앤필의원", en: "제주특별자치도 제주시 노형로 378 (노형동) 201호 톡스앤필의원", ja: "제주특별자치도 제주시 노형로 378 (노형동) 201호 톡스앤필의원" },
    phone: "064-711-4842", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.48359,
    lng: 126.476304,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/톡스앤필의원 ??", google: "https://www.google.com/maps/search/톡스앤필의원 ??", daum: "https://map.kakao.com/?q=톡스앤필의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "nowmedi": {
    id: "nowmedi", region: "jeju-city", specialty: "internal",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "나우메디의원", en: "나우메디의원", ja: "나우메디의원" },
    name_ko: "나우메디의원",
    address: { zh: "제주특별자치도 제주시 연북로 511 (아라일동, 에이플렉스) 3층 나우메디의원", en: "제주특별자치도 제주시 연북로 511 (아라일동, 에이플렉스) 3층 나우메디의원", ja: "제주특별자치도 제주시 연북로 511 (아라일동, 에이플렉스) 3층 나우메디의원" },
    phone: "064-727-1339", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4843386,
    lng: 126.5346355,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/나우메디의원 ??", google: "https://www.google.com/maps/search/나우메디의원 ??", daum: "https://map.kakao.com/?q=나우메디의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "kangjuhyun-derm": {
    id: "kangjuhyun-derm", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "강주현피부과 의원", en: "강주현피부과 의원", ja: "강주현피부과 의원" },
    name_ko: "강주현피부과 의원",
    address: { zh: "제주특별자치도 제주시 건주로 27 (도련일동) 광산빌딩 3층", en: "제주특별자치도 제주시 건주로 27 (도련일동) 광산빌딩 3층", ja: "제주특별자치도 제주시 건주로 27 (도련일동) 광산빌딩 3층" },
    phone: "064-805-0079", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.5170977,
    lng: 126.5811813,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/강주현피부과 의원 ??", google: "https://www.google.com/maps/search/강주현피부과 의원 ??", daum: "https://map.kakao.com/?q=강주현피부과 의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "ezbom-eye": {
    id: "ezbom-eye", region: "jeju-city", specialty: "ophthalmology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "이지봄안과의원", en: "이지봄안과의원", ja: "이지봄안과의원" },
    name_ko: "이지봄안과의원",
    address: { zh: "제주특별자치도 제주시 노형로 390 (노형동) 이지봄안과의원 건물 2-6층", en: "제주특별자치도 제주시 노형로 390 (노형동) 이지봄안과의원 건물 2-6층", ja: "제주특별자치도 제주시 노형로 390 (노형동) 이지봄안과의원 건물 2-6층" },
    phone: "064-747-0112", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4790135,
    lng: 126.4697556,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/이지봄안과의원 ??", google: "https://www.google.com/maps/search/이지봄안과의원 ??", daum: "https://map.kakao.com/?q=이지봄안과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "kimminbeom-oriental": {
    id: "kimminbeom-oriental", region: "jeju-city", specialty: "oriental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "김민범 한의원", en: "김민범 한의원", ja: "김민범 한의원" },
    name_ko: "김민범 한의원",
    address: { zh: "제주특별자치도 제주시 노형로 373 (노형동) 2층", en: "제주특별자치도 제주시 노형로 373 (노형동) 2층", ja: "제주특별자치도 제주시 노형로 373 (노형동) 2층" },
    phone: "064-746-7975", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4837309,
    lng: 126.4755984,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/김민범 한의원 ??", google: "https://www.google.com/maps/search/김민범 한의원 ??", daum: "https://map.kakao.com/?q=김민범 한의원 ??" },
    specialties: { zh: "한의원", en: "한의원", ja: "한의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },


  "jeju-anapeun-dental": {
    id: "jeju-anapeun-dental", region: "jeju-city", specialty: "dental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "제주 아나픈치과의원", en: "제주 아나픈치과의원", ja: "제주 아나픈치과의원" },
    name_ko: "제주 아나픈치과의원",
    address: { zh: "제주특별자치도 제주시 노형로 362 (노형동) 4층 제주아나픈치과", en: "제주특별자치도 제주시 노형로 362 (노형동) 4층 제주아나픈치과", ja: "제주특별자치도 제주시 노형로 362 (노형동) 4층 제주아나픈치과" },
    phone: "064-747-2875", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4826245,
    lng: 126.4750411,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/제주 아나픈치과의원 ??", google: "https://www.google.com/maps/search/제주 아나픈치과의원 ??", daum: "https://map.kakao.com/?q=제주 아나픈치과의원 ??" },
    specialties: { zh: "치과의원", en: "치과의원", ja: "치과의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "bliv-jeju": {
    id: "bliv-jeju", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "블리비의원", en: "블리비의원", ja: "블리비의원" },
    name_ko: "블리비의원",
    address: { zh: "제주특별자치도 제주시 노형로 407 (노형동, 노형타워) 2층", en: "제주특별자치도 제주시 노형로 407 (노형동, 노형타워) 2층", ja: "제주특별자치도 제주시 노형로 407 (노형동, 노형타워) 2층" },
    phone: "064-1833-6988", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4857845,
    lng: 126.478286,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/블리비의원 ??", google: "https://www.google.com/maps/search/블리비의원 ??", daum: "https://map.kakao.com/?q=블리비의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "rosen-clinic": {
    id: "rosen-clinic", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "로즈앤의원", en: "로즈앤의원", ja: "로즈앤의원" },
    name_ko: "로즈앤의원",
    address: { zh: "제주특별자치도 제주시 1100로 3333 (노형동) 4층", en: "제주특별자치도 제주시 1100로 3333 (노형동) 4층", ja: "제주특별자치도 제주시 1100로 3333 (노형동) 4층" },
    phone: "064-803-3723", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4836142,
    lng: 126.4801422,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/로즈앤의원 ??", google: "https://www.google.com/maps/search/로즈앤의원 ??", daum: "https://map.kakao.com/?q=로즈앤의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "inje-ent": {
    id: "inje-ent", region: "jeju-city", specialty: "ent",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "인제상쾌한이비인후과의원", en: "인제상쾌한이비인후과의원", ja: "인제상쾌한이비인후과의원" },
    name_ko: "인제상쾌한이비인후과의원",
    address: { zh: "제주특별자치도 제주시 동광로 86 (이도이동) 2,3,4,5,6층", en: "제주특별자치도 제주시 동광로 86 (이도이동) 2,3,4,5,6층", ja: "제주특별자치도 제주시 동광로 86 (이도이동) 2,3,4,5,6층" },
    phone: "064-751-0050", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.5045977,
    lng: 126.5375336,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/인제상쾌한이비인후과의원 ??", google: "https://www.google.com/maps/search/인제상쾌한이비인후과의원 ??", daum: "https://map.kakao.com/?q=인제상쾌한이비인후과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },


  "eoullim-clinic": {
    id: "eoullim-clinic", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "어울림의원", en: "어울림의원", ja: "어울림의원" },
    name_ko: "어울림의원",
    address: { zh: "제주특별자치도 제주시 노형로 362 (노형동) 태영빌딩 3층", en: "제주특별자치도 제주시 노형로 362 (노형동) 태영빌딩 3층", ja: "제주특별자치도 제주시 노형로 362 (노형동) 태영빌딩 3층" },
    phone: "064-747-0678", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4826245,
    lng: 126.4750411,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/어울림의원 ??", google: "https://www.google.com/maps/search/어울림의원 ??", daum: "https://map.kakao.com/?q=어울림의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "soldam-oriental-hospital": {
    id: "soldam-oriental-hospital", region: "jeju-city", specialty: "oriental",
    type: "hospital", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "솔담한방병원", en: "솔담한방병원", ja: "솔담한방병원" },
    name_ko: "솔담한방병원",
    address: { zh: "제주특별자치도 제주시 1100로 3055 (노형동) 솔담한방병원", en: "제주특별자치도 제주시 1100로 3055 (노형동) 솔담한방병원", ja: "제주특별자치도 제주시 1100로 3055 (노형동) 솔담한방병원" },
    phone: "064-746-1075", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4590435,
    lng: 126.4845726,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/솔담한방병원 ??", google: "https://www.google.com/maps/search/솔담한방병원 ??", daum: "https://map.kakao.com/?q=솔담한방병원 ??" },
    specialties: { zh: "한방병원", en: "한방병원", ja: "한방병원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "central-eye": {
    id: "central-eye", region: "jeju-city", specialty: "ophthalmology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "센트럴아이안과의원", en: "센트럴아이안과의원", ja: "센트럴아이안과의원" },
    name_ko: "센트럴아이안과의원",
    address: { zh: "제주특별자치도 제주시 일주서로 7356 (외도이동) 3층", en: "제주특별자치도 제주시 일주서로 7356 (외도이동) 3층", ja: "제주특별자치도 제주시 일주서로 7356 (외도이동) 3층" },
    phone: "064-742-7112", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4933474,
    lng: 126.4330891,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/센트럴아이안과의원 ??", google: "https://www.google.com/maps/search/센트럴아이안과의원 ??", daum: "https://map.kakao.com/?q=센트럴아이안과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "jeju-samsung-eye": {
    id: "jeju-samsung-eye", region: "jeju-city", specialty: "ophthalmology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "제주삼성안과의원", en: "제주삼성안과의원", ja: "제주삼성안과의원" },
    name_ko: "제주삼성안과의원",
    address: { zh: "제주특별자치도 제주시 관덕로 66 (일도일동, 후생빌딩) 3층", en: "제주특별자치도 제주시 관덕로 66 (일도일동, 후생빌딩) 3층", ja: "제주특별자치도 제주시 관덕로 66 (일도일동, 후생빌딩) 3층" },
    phone: "064-724-0220", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.5128538,
    lng: 126.5262659,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/제주삼성안과의원 ??", google: "https://www.google.com/maps/search/제주삼성안과의원 ??", daum: "https://map.kakao.com/?q=제주삼성안과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "jeju-em365": {
    id: "jeju-em365", region: "jeju-city", specialty: "internal",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "제주이엠365의원", en: "제주이엠365의원", ja: "제주이엠365의원" },
    name_ko: "제주이엠365의원",
    address: { zh: "제주특별자치도 제주시 노형로 380 (노형동) 4층", en: "제주특별자치도 제주시 노형로 380 (노형동) 4층", ja: "제주특별자치도 제주시 노형로 380 (노형동) 4층" },
    phone: "064-748-9110", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4790135,
    lng: 126.4697556,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/제주이엠365의원 ??", google: "https://www.google.com/maps/search/제주이엠365의원 ??", daum: "https://map.kakao.com/?q=제주이엠365의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "glory-clinic": {
    id: "glory-clinic", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "글로리 의원", en: "글로리 의원", ja: "글로리 의원" },
    name_ko: "글로리 의원",
    address: { zh: "제주특별자치도 제주시 노형9길 1 (노형동) 6층", en: "제주특별자치도 제주시 노형9길 1 (노형동) 6층", ja: "제주특별자치도 제주시 노형9길 1 (노형동) 6층" },
    phone: "064-805-7525", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4835986,
    lng: 126.4769069,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/글로리 의원 ??", google: "https://www.google.com/maps/search/글로리 의원 ??", daum: "https://map.kakao.com/?q=글로리 의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "dream-internal": {
    id: "dream-internal", region: "jeju-city", specialty: "internal",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "속편한드림내과의원", en: "속편한드림내과의원", ja: "속편한드림내과의원" },
    name_ko: "속편한드림내과의원",
    address: { zh: "제주특별자치도 제주시 1100로 3323-1 (노형동) 3,4,5층", en: "제주특별자치도 제주시 1100로 3323-1 (노형동) 3,4,5층", ja: "제주특별자치도 제주시 1100로 3323-1 (노형동) 3,4,5층" },
    phone: "064-712-8575", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4749782,
    lng: 126.4827403,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/속편한드림내과의원 ??", google: "https://www.google.com/maps/search/속편한드림내과의원 ??", daum: "https://map.kakao.com/?q=속편한드림내과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "soo-eye": {
    id: "soo-eye", region: "jeju-city", specialty: "ophthalmology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "수안과의원", en: "수안과의원", ja: "수안과의원" },
    name_ko: "수안과의원",
    address: { zh: "제주특별자치도 제주시 중앙로 286 (이도이동) 3층", en: "제주특별자치도 제주시 중앙로 286 (이도이동) 3층", ja: "제주특별자치도 제주시 중앙로 286 (이도이동) 3층" },
    phone: "064-723-1516", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4947555,
    lng: 126.5329922,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/수안과의원 ??", google: "https://www.google.com/maps/search/수안과의원 ??", daum: "https://map.kakao.com/?q=수안과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "vands-jeju": {
    id: "vands-jeju", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "밴스의원", en: "밴스의원", ja: "밴스의원" },
    name_ko: "밴스의원",
    address: { zh: "제주특별자치도 제주시 노연로 49 (노형동) 201호", en: "제주특별자치도 제주시 노연로 49 (노형동) 201호", ja: "제주특별자치도 제주시 노연로 49 (노형동) 201호" },
    phone: "064-803-0024", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4860649,
    lng: 126.4828667,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/밴스의원 ??", google: "https://www.google.com/maps/search/밴스의원 ??", daum: "https://map.kakao.com/?q=밴스의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "namjaehee-samsung-derm": {
    id: "namjaehee-samsung-derm", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "남재희삼성피부과", en: "남재희삼성피부과", ja: "남재희삼성피부과" },
    name_ko: "남재희삼성피부과",
    address: { zh: "제주특별자치도 제주시 관덕로 5 (삼도이동, 호재빌딩) 2층, 3층", en: "제주특별자치도 제주시 관덕로 5 (삼도이동, 호재빌딩) 2층, 3층", ja: "제주특별자치도 제주시 관덕로 5 (삼도이동, 호재빌딩) 2층, 3층" },
    phone: "064-757-1117", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.5129413,
    lng: 126.5196932,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/남재희삼성피부과 ??", google: "https://www.google.com/maps/search/남재희삼성피부과 ??", daum: "https://map.kakao.com/?q=남재희삼성피부과 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "e-pyeonhan-dental": {
    id: "e-pyeonhan-dental", region: "jeju-city", specialty: "dental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "e-편한치과의원", en: "e-편한치과의원", ja: "e-편한치과의원" },
    name_ko: "e-편한치과의원",
    address: { zh: "제주특별자치도 제주시 연북로 527 (아라일동) 반디빌딩", en: "제주특별자치도 제주시 연북로 527 (아라일동) 반디빌딩", ja: "제주특별자치도 제주시 연북로 527 (아라일동) 반디빌딩" },
    phone: "064-758-2800", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4851842,
    lng: 126.5361543,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/e-편한치과의원 ??", google: "https://www.google.com/maps/search/e-편한치과의원 ??", daum: "https://map.kakao.com/?q=e-편한치과의원 ??" },
    specialties: { zh: "치과의원", en: "치과의원", ja: "치과의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "haearim-oriental": {
    id: "haearim-oriental", region: "jeju-city", specialty: "oriental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "해아림한의원", en: "해아림한의원", ja: "해아림한의원" },
    name_ko: "해아림한의원",
    address: { zh: "제주특별자치도 제주시 1100로 3324 (노형동) 2층", en: "제주특별자치도 제주시 1100로 3324 (노형동) 2층", ja: "제주특별자치도 제주시 1100로 3324 (노형동) 2층" },
    phone: "064-805-3338", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.48302,
    lng: 126.4812051,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/해아림한의원 ??", google: "https://www.google.com/maps/search/해아림한의원 ??", daum: "https://map.kakao.com/?q=해아림한의원 ??" },
    specialties: { zh: "한의원", en: "한의원", ja: "한의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "meili-clinic": {
    id: "meili-clinic", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "메이리의원", en: "메이리의원", ja: "메이리의원" },
    name_ko: "메이리의원",
    address: { zh: "제주특별자치도 제주시 노연로 34 (노형동) 2층 202호", en: "제주특별자치도 제주시 노연로 34 (노형동) 2층 202호", ja: "제주특별자치도 제주시 노연로 34 (노형동) 2층 202호" },
    phone: "064-747-3401", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4860649,
    lng: 126.4828667,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/메이리의원 ??", google: "https://www.google.com/maps/search/메이리의원 ??", daum: "https://map.kakao.com/?q=메이리의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "jung-dental": {
    id: "jung-dental", region: "jeju-city", specialty: "dental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "정치과의원", en: "정치과의원", ja: "정치과의원" },
    name_ko: "정치과의원",
    address: { zh: "제주특별자치도 제주시 연삼로 259 (오라일동) 3층", en: "제주특별자치도 제주시 연삼로 259 (오라일동) 3층", ja: "제주특별자치도 제주시 연삼로 259 (오라일동) 3층" },
    phone: "064-722-3836", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4926031,
    lng: 126.5201508,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/정치과의원 ??", google: "https://www.google.com/maps/search/정치과의원 ??", daum: "https://map.kakao.com/?q=정치과의원 ??" },
    specialties: { zh: "치과의원", en: "치과의원", ja: "치과의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "nalsseen-clinic": {
    id: "nalsseen-clinic", region: "jeju-city", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "날씬의원", en: "날씬의원", ja: "날씬의원" },
    name_ko: "날씬의원",
    address: { zh: "제주특별자치도 제주시 도령로 5 (노형동, 명은빌딩) 6층", en: "제주특별자치도 제주시 도령로 5 (노형동, 명은빌딩) 6층", ja: "제주특별자치도 제주시 도령로 5 (노형동, 명은빌딩) 6층" },
    phone: "064-744-0570", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4867661,
    lng: 126.4799162,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/날씬의원 ??", google: "https://www.google.com/maps/search/날씬의원 ??", daum: "https://map.kakao.com/?q=날씬의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "chaeum-mens": {
    id: "chaeum-mens", region: "jeju-city", specialty: "internal",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "채움남성의원", en: "채움남성의원", ja: "채움남성의원" },
    name_ko: "채움남성의원",
    address: { zh: "제주특별자치도 제주시 1100로 3328 (노형동, 정원빌딩) 정원빌딩4층", en: "제주특별자치도 제주시 1100로 3328 (노형동, 정원빌딩) 정원빌딩4층", ja: "제주특별자치도 제주시 1100로 3328 (노형동, 정원빌딩) 정원빌딩4층" },
    phone: "064-711-1064", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4832613,
    lng: 126.4810609,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/채움남성의원 ??", google: "https://www.google.com/maps/search/채움남성의원 ??", daum: "https://map.kakao.com/?q=채움남성의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "kimsplant-dental": {
    id: "kimsplant-dental", region: "jeju-city", specialty: "dental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "킴스플란트치과의원", en: "킴스플란트치과의원", ja: "킴스플란트치과의원" },
    name_ko: "킴스플란트치과의원",
    address: { zh: "제주특별자치도 제주시 연북로 10 (노형동, 신영빌딩) 5층 킴스플란트 치과의원", en: "제주특별자치도 제주시 연북로 10 (노형동, 신영빌딩) 5층 킴스플란트 치과의원", ja: "제주특별자치도 제주시 연북로 10 (노형동, 신영빌딩) 5층 킴스플란트 치과의원" },
    phone: "064-711-2875", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.4817212,
    lng: 126.4822578,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/킴스플란트치과의원 ??", google: "https://www.google.com/maps/search/킴스플란트치과의원 ??", daum: "https://map.kakao.com/?q=킴스플란트치과의원 ??" },
    specialties: { zh: "치과의원", en: "치과의원", ja: "치과의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  }
};
