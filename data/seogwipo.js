/* ================================================================
   data/seogwipo.js - 서귀포 병원 상세 정보
   ================================================================ */

var HOSPITALS_SEOGWIPO = {
  "bellemorn": {
    id: "bellemorn",
    region: "seogwipo",
    specialty: "plastic-surgery",
    foreign_friendly: true,
    featured: true,
    name: {
      zh: "贝勒蒙整形外科（神话世界）",
      en: "Bellemorn Plastic Surgery (Shinhwa World)",
      ja: "ベルモン整形外科（神話ワールド）"
    },
    name_ko: "벨르몬성형외과의원",
    address: {
      zh: "西归浦市 神话世界 Landing馆 神话购物街",
      en: "Shinhwa World Landing Hall, Shinhwa Shopping Street, Seogwipo",
      ja: "西帰浦市 神話ワールド ランディングホール 神話ショッピングストリート"
    },
    phone: "064-792-5050",
    thumbnail: "images/bellemorn-thumb.jpg",
    images: ["images/bellemorn-1.jpg", "images/bellemorn-2.jpg"],
    contact: { wechat: "jeju-bm", line: "", instagram: "" },
    chinese_staff: true,
    hours: {
      weekday: { zh: "10:00 - 19:00（周二起）", en: "10:00–19:00 (Tue–Fri)", ja: "10:00–19:00（火〜金）" },
      sat: { zh: "10:00 - 19:00（含公假）", en: "10:00–19:00 (incl. holidays)", ja: "10:00–19:00（祝日含む）" },
      closed: { zh: "周日 · 周一 休息 ｜ 须提前预约", en: "Sun & Mon Closed | Appointment required", ja: "日・月 休診 ｜ 要予約" }
    },
    lat: 33.3029, lng: 126.2914,
    lat: 33.3057735,
    lng: 126.3134242,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/벨르몬성형외과",
      google: "https://www.google.com/maps/search/벨르몬성형외과+서귀포",
      daum: "https://map.kakao.com/?q=벨르몬성형외과"
    },
    specialties: {
      zh: ["提拉紧致", "Thermage FLX", "Ulthera", "注射美容"],
      en: ["Lifting & Tightening", "Thermage FLX", "Ulthera", "Filler & Botox"],
      ja: ["リフティング", "Thermage FLX", "Ulthera", "注射美容"]
    },
    type: "clinic",
    rating: 4.7, review_count: 107,
    payment_methods: {
      zh: ["现场刷卡（VISA/MC/银联）", "现场现金（KRW）"],
      en: ["On-site: Card (VISA/MC/UnionPay)", "On-site: Cash (KRW)"],
      ja: ["現地決済：カード（VISA/MC/UnionPay）", "現地決済：現金（KRW）"]
    },
    booking_method: {
      zh: "建议电话预约（中英文可）或 WeChat，需确认营业日期",
      en: "Phone recommended (Korean/English), WeChat welcome. Confirm operating days.",
      ja: "電話推奨（韓国語/英語対応）、WeChat可。営業日確認必須。"
    },
    languages_supported: {
      zh: "韩语·中文（院长及主要咨询师）·英文（基础）",
      en: "Korean, Chinese (director & main staff), English (basic)",
      ja: "韓国語、中国語（院長・主要スタッフ）、英語（基本）"
    },
    doctor_info: {
      zh: "院长为整形外科专科医师，15年以上临床经验，专攻非手术提拉",
      en: "Director: board-certified plastic surgeon, 15+ yrs, specialist in non-surgical lifting",
      ja: "院長：整形外科専門医、臨床経験15年以上、非手術リフティング専門"
    },
    prices: [
      { name: { zh: "Thermage FLX", en: "Thermage FLX", ja: "Thermage FLX" }, price: "500,000원~" },
      { name: { zh: "Ulthera（全脸）", en: "Ulthera (full face)", ja: "Ulthera（フルフェイス）" }, price: "600,000원~" },
      { name: { zh: "Rejuran HB", en: "Rejuran HB", ja: "Rejuran HB" }, price: "250,000원~" },
      { name: { zh: "肉毒素", en: "Botox", ja: "ボトックス" }, price: "60,000원~" }
    ],
    review_summary: {
      zh: {
        overall: "位于济州神话世界内的整形外科，主理医生全程亲自诊断施术，以「非流水线」精品诊所为定位。",
        highlights: ["院长亲自诊断施术", "私密单人护理室", "公假正常营业", "神话世界免费停车"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 120 条",
            summary: "Naver评论集中描述「院长亲自细致说明、非流水线体验」以及具体施术感受。",
            keywords: ["院长直接诊察", "细致说明", "Thermage", "提拉", "Rejuran", "私密"],
            pros: ["院长全程亲自诊察施术，非助手代劳", "每次有个人专属护理室，私密性高", "周六及公假正常营业，旅游途中可安排", "神话世界内部停车免费且方便"],
            cons: ["位于西归浦神话世界，从济州市区需约50~60分钟", "100%预约制，当天突然来访无法接诊", "月/日固定休息，需提前确认"],
            cautions: ["Thermage、Ulthera等提拉项目效果因年龄和皮肤状态存在较大个体差异", "提拉效果一般需要1~3个月逐渐显现", "价格因施术组合不同差异较大，建议先咨询确认"]
          },
          google: {
            source: "Google Maps", count_hint: "约 40 条",
            summary: "Google评论整体评分偏高，简短评价中多出现「professional」「great experience」等正面词汇。",
            keywords: ["professional", "满意", "友善", "神话世界"],
            pros: ["外国患者评论说明有接诊外国人的经验", "整体评分偏高，口碑方向正面"],
            cons: ["英文评论较少细节，难以做深入判断"],
            cautions: ["Google评论细节不足，建议搭配Naver评论综合阅读"]
          },
          daum: {
            source: "Kakao Map", count_hint: "约 20 条",
            summary: "Kakao Map评论数量较少，出现「神话世界停车方便」「预约顺畅」等实用信息。",
            keywords: ["停车", "预约", "位置"],
            pros: ["停车便利性有多条评论印证"],
            cons: ["样本量少，整体代表性有限"],
            cautions: ["评论数量少时不适合单独作为判断依据，请结合Naver评论使用"]
          }
        }
      },
      en: {
        overall: "A boutique plastic surgery clinic inside Jeju Shinhwa World. The director personally handles all consultations and procedures.",
        highlights: ["Director performs all procedures", "Private single-patient rooms", "Open on public holidays", "Free parking at Shinhwa World"],
        platforms: {
          naver: {
            source: "Naver Map", count_hint: "~120 reviews",
            summary: "Naver reviews focus on the non-assembly-line experience and detailed physician explanations.",
            keywords: ["director consults personally", "detailed explanation", "Thermage", "lifting", "Rejuran", "private"],
            pros: ["Director personally consults and performs all procedures", "Private treatment room for every patient", "Open Saturdays and public holidays", "Free and convenient parking inside Shinhwa World"],
            cons: ["~50–60 min from Jeju City centre", "100% appointment-only; walk-ins not accepted", "Fixed weekly closures"],
            cautions: ["Lifting results vary significantly with age and skin laxity", "Effects typically appear over 1–3 months", "Pricing varies by treatment combination"]
          },
          google: {
            source: "Google Maps", count_hint: "~40 reviews",
            summary: "High overall rating with brief positive reviews including 'professional' and 'great experience'.",
            keywords: ["professional", "satisfied", "friendly", "Shinhwa World"],
            pros: ["Foreign patient reviews present", "High overall score"],
            cons: ["Limited detail in English reviews"],
            cautions: ["Supplement with Naver reviews for deeper insight"]
          },
          daum: {
            source: "Kakao Map", count_hint: "~20 reviews",
            summary: "Few reviews. Mentions of convenient Shinhwa World parking and smooth appointment booking.",
            keywords: ["parking", "booking", "location"],
            pros: ["Parking convenience corroborated by multiple reviews"],
            cons: ["Small sample; limited representativeness"],
            cautions: ["Use alongside Naver reviews rather than as a standalone reference"]
          }
        }
      },
      ja: {
        overall: "済州神話ワールド内に位置する整形外科。院長が全診察・施術を直接担当する「非量産型」のプレミアムクリニック。",
        highlights: ["院長が全施術を直接担当", "完全個室のケアルーム", "祝日も営業", "神話ワールド無料駐車"],
        platforms: {
          naver: {
            source: "Naver マップ", count_hint: "約120件",
            summary: "Naverの口コミは「院長が直接丁寧に説明してくれる・流れ作業でない体験」と具体的な施術感想が中心。",
            keywords: ["院長が直接診察", "丁寧な説明", "Thermage", "リフティング", "Rejuran", "完全個室"],
            pros: ["院長が全診察・施術を直接担当（スタッフ代行なし）", "毎回専用の個室ケアルームで施術", "土曜・祝日も通常営業でき、旅行中でも予定を組みやすい", "神話ワールド内は無料駐車で便利"],
            cons: ["済州市中心部から車で約50〜60分かかる", "完全予約制。当日の飛び込みは対応不可", "曜日固定の休診日あり"],
            cautions: ["ThermageやUltheraなどのリフティング効果は年齢・肌のたるみ具合で個人差が大きい", "リフティング効果は通常1〜3ヶ月かけて現れるため、即効性を強く期待している場合は注意", "施術の組み合わせによって料金が大きく異なるため、事前に見積もりの確認を推奨"]
          },
          google: {
            source: "Google マップ", count_hint: "約40件",
            summary: "全体評価は高め。「professional」「great experience」などポジティブな短評が多い。",
            keywords: ["professional", "満足", "親切", "神話ワールド"],
            pros: ["外国人患者の口コミあり・国際対応の実績が伺える", "全体評価が高くポジティブな方向性"],
            cons: ["英文口コミは詳細が少なく深い判断は難しい"],
            cautions: ["Naverの口コミと合わせて参照することを推奨"]
          },
          daum: {
            source: "Kakao マップ", count_hint: "約20件",
            summary: "口コミ数は少なめ。「神話ワールドの駐車が便利」「予約がスムーズ」などの実用情報が確認できます。",
            keywords: ["駐車", "予約", "場所"],
            pros: ["駐車の利便性を複数の口コミが裏付け"],
            cons: ["サンプル数が少なく代表性に限界あり"],
            cautions: ["件数が少ないためNaver口コミと併用して判断してください"]
          }
        }
      }
    }
  },

  /* ─── 추가 병원: 서귀포 피부과/성형외과 ─────────────────────────────── */
  "together": {
    id: "together",
    region: "seogwipo",
    specialty: "dermatology",
    foreign_friendly: true,
    featured: false,
    name: {
      zh: "一起皮肤科",
      en: "Together Dermatology",
      ja: "トゥゲザー皮膚科"
    },
    name_ko: "투게더피부과의원",
    address: {
      zh: "西归浦市 世界杯路8号 4楼（江汀洞）",
      en: "4F, 8 World Cup-ro, Gangjeong-dong, Seogwipo",
      ja: "西帰浦市 ワールドカップ路8 4階"
    },
    phone: "064-739-4500",
    thumbnail: "images/together-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 休息", en: "Sun Closed", ja: "日曜 休診" }
    },
    lat: 33.2545, lng: 126.5125,
    platform_links: {
      naver: "https://map.naver.com/v5/search/투게더피부과의원%20서귀포",
      google: "https://www.google.com/maps/search/투게더피부과의원+서귀포",
      daum: "https://map.kakao.com/?q=투게더피부과의원+서귀포"
    },
    specialties: {
      zh: ["皮肤治疗", "激光美容", "痘痘管理"],
      en: ["Skin Treatment", "Laser Aesthetics", "Acne Care"],
      ja: ["皮膚治療", "レーザー美容", "ニキビ治療"]
    },
    type: "clinic",
    rating: 4.2, review_count: 407,
    payment_methods: {
      zh: ["现场刷卡", "现场现金"],
      en: ["On-site: Card", "On-site: Cash"],
      ja: ["現地払い：カード", "現地払い：現金"]
    },
    booking_method: {
      zh: "电话预约",
      en: "Phone reservation",
      ja: "電話予約"
    },
    languages_supported: {
      zh: "韩语",
      en: "Korean",
      ja: "韓国語"
    },
    doctor_info: {
      zh: "皮肤科专科医师",
      en: "Board-certified dermatologist",
      ja: "皮膚科専門医"
    },
    review_summary: {
      zh: {
        overall: "位于西归浦世界杯路的皮肤科，提供皮肤治疗、激光美容和痘痘管理服务。医生专业，设备较新。",
        highlights: ["痘痘治疗", "激光治疗", "皮肤管理"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 70 条",
            summary: "Naver评论中「痘痘治疗效果明显」「激光设备先进」「医生专业」等评价较多。适合有皮肤问题困扰的患者。",
            keywords: ["痘痘治疗", "激光", "专业", "效果明显"],
            pros: ["痘痘治疗效果明显", "激光设备较新", "医生专业且耐心", "位置便利"],
            cons: [ "价格相对较高", "中文服务有限"],
            cautions: ["皮肤治疗需要疗程", "效果因人而异"]
          },
          google: {
            source: "Google Maps", count_hint: "约 20 条",
            summary: "Google评论数量不多，但评价正面，提到「good for acne treatment」「professional equipment」。",
            keywords: ["acne", "laser", "professional"],
            pros: ["痘痘治疗效果好", "设备专业", "医生耐心"],
            cons: ["价格偏高", "语言沟通"],
            cautions: ["建议提前咨询价格", "治疗需要多次访问"]
          },
          daum: {
            source: "Kakao Map", count_hint: "约 12 条",
            summary: "Kakao Map评论较少，主要提到「位置好」「环境干净」。",
            keywords: ["位置", "环境", "干净"],
            pros: ["位置便利", "诊疗环境干净"],
            cons: ["评论样本少"],
            cautions: ["建议参考Naver评论"]
          }
        }
      },
      en: {
        overall: "A dermatology clinic on World Cup Road in Seogwipo. Offers skin treatment, laser aesthetics, and acne care. Professional doctor with modern equipment.",
        highlights: ["Acne treatment", "Laser therapy", "Skin management"],
        platforms: {
          naver: {
            source: "Naver Map", count_hint: "~70 reviews",
            summary: "Naver reviews mention 'effective acne treatment', 'advanced laser equipment', 'professional doctor'. Suitable for patients with skin concerns.",
            keywords: ["acne treatment", "laser", "professional", "effective"],
            pros: ["Effective acne treatment", "Modern laser equipment", "Professional and patient doctor", "Convenient location"],
            cons: ["Relatively higher prices", "Limited Chinese language support"],
            cautions: ["Skin treatment requires multiple sessions", "Results vary by individual"]
          },
          google: {
            source: "Google Maps", count_hint: "~20 reviews",
            summary: "Few but positive Google reviews mentioning 'good for acne treatment' and 'professional equipment'.",
            keywords: ["acne", "laser", "professional"],
            pros: ["Good acne treatment results", "Professional equipment", "Patient doctor"],
            cons: ["Higher prices", "Language barrier"],
            cautions: ["Recommend consulting prices in advance", "Treatment requires multiple visits"]
          },
          daum: {
            source: "Kakao Map", count_hint: "~12 reviews",
            summary: "Limited reviews on Kakao Map, mainly mentioning 'good location' and 'clean environment'.",
            keywords: ["location", "environment", "clean"],
            pros: ["Convenient location", "Clean clinic environment"],
            cons: ["Small sample size"],
            cautions: ["Recommend referring to Naver reviews"]
          }
        }
      },
      ja: {
        overall: "西帰浦ワールドカップ路にある皮膚科。皮膚治療、レーザー美容、ニキビ治療を提供。専門的な医師と最新設備。",
        highlights: ["ニキビ治療", "レーザー治療", "スキンケア"],
        platforms: {
          naver: {
            source: "Naver マップ", count_hint: "約70件",
            summary: "Naverの口コミでは「ニキビ治療の効果が目立つ」「レーザー設備が最新」「医師が専門的」などの評価が多い。皮膚に関する悩みを持つ患者が確認しておきたい情報が多い。",
            keywords: ["ニキビ治療", "レーザー", "専門的", "効果的"],
            pros: ["ニキビ治療の効果が目立つ", "レーザー設備が最新", "医師が専門的で丁寧", "立地が便利"],
            cons: ["価格がやや高め", "中国語対応が限定的"],
            cautions: ["皮膚治療は複数回の通院が必要", "効果には個人差がある"]
          },
          google: {
            source: "Google マップ", count_hint: "約20件",
            summary: "Googleの口コミは少ないが評価は良好。「good for acne treatment」「professional equipment」などのコメントあり。",
            keywords: ["acne", "laser", "professional"],
            pros: ["ニキビ治療の効果が良い", "設備が専門的", "医師が丁寧"],
            cons: ["価格が高め", "言語の壁"],
            cautions: ["事前に価格を確認することを推奨", "治療は複数回の通院が必要"]
          },
          daum: {
            source: "Kakao マップ", count_hint: "約12件",
            summary: "Kakao Mapの口コミは少なめ。「場所が良い」「環境が清潔」などの情報が中心。",
            keywords: ["場所", "環境", "清潔"],
            pros: ["立地が便利", "診療環境が清潔"],
            cons: ["サンプル数が少ない"],
            cautions: ["Naverの口コミを参考にすることを推奨"]
          }
        }
      }
    }
  },

  "we": {
    id: "we",
    region: "seogwipo",
    specialty: "plastic-surgery",
    foreign_friendly: true,
    foreign_official: true,
    featured: false,
    name: {
      zh: "WE医院",
      en: "WE Hospital",
      ja: "WE病院"
    },
    name_ko: "WE병원",
    address: {
      zh: "西归浦市 1100路 453-95",
      en: "453-95, 1100-ro, Seogwipo",
      ja: "西帰浦市 1100路 453-95"
    },
    phone: "064-738-8000",
    thumbnail: "images/we-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "09:00 - 18:00", en: "Mon–Fri 09:00–18:00", ja: "平日 09:00–18:00" },
      sat: { zh: "休息", en: "Sat Closed", ja: "土曜 休診" },
      closed: { zh: "周六、周日、公假休息", en: "Sat, Sun, Holidays Closed", ja: "土・日・祝日 休診" }
    },
    lat: 33.2600, lng: 126.5200,
    lat: 33.2860178,
    lng: 126.4441437,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/WE병원%20제주",
      google: "https://www.google.com/maps/search/WE병원+제주",
      daum: "https://map.kakao.com/?q=WE병원+제주"
    },
    specialties: {
      zh: ["健康体检", "美容整形", "医疗SPA"],
      en: ["Health Checkup", "Aesthetic Surgery", "Medical Spa"],
      ja: ["健康診断", "美容整形", "メディカルスパ"]
    },
    type: "clinic",
    rating: 4.0, review_count: 25,
    payment_methods: {
      zh: ["现场刷卡", "现场现金"],
      en: ["On-site: Card", "On-site: Cash"],
      ja: ["現地払い：カード", "現地払い：現金"]
    },
    booking_method: {
      zh: "电话预约",
      en: "Phone reservation",
      ja: "電話予約"
    },
    languages_supported: {
      zh: "韩语",
      en: "Korean",
      ja: "韓国語"
    },
    doctor_info: {
      zh: "多位专科医师",
      en: "Multiple specialists",
      ja: "複数の専門医"
    },
    review_summary: {
      zh: {
        overall: "位于西归浦的综合性美容医院，提供健康体检、美容整形和医疗SPA服务。设施较新，环境舒适。",
        highlights: ["健康体检", "美容中心", "医疗SPA"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 50 条",
            summary: "Naver评论中「设施新」「环境好」「健康体检项目全面」等评价较多。适合想要综合健康管理和美容服务的顾客。",
            keywords: ["设施新", "环境好", "健康体检", "SPA"],
            pros: ["设施现代化", "诊疗环境舒适", "健康体检项目全面", "美容和SPA结合"],
            cons: ["周末不营业", "价格偏高", "位置较偏"],
            cautions: ["需要提前预约", "部分项目需要咨询后定价"]
          },
          google: {
            source: "Google Maps", count_hint: "约 15 条",
            summary: "Google评论数量较少，提到「modern facility」「good for health checkup」。",
            keywords: ["modern", "health checkup", "spa"],
            pros: ["设施现代化", "健康体检全面", "SPA舒适"],
            cons: ["周末休息", "位置偏远", "价格较高"],
            cautions: ["建议提前预约", "确认营业时间"]
          },
          daum: {
            source: "Kakao Map", count_hint: "约 10 条",
            summary: "Kakao Map评论较少，主要提到「环境好」「设施新」。",
            keywords: ["环境", "设施", "新"],
            pros: ["环境舒适", "设施现代化"],
            cons: ["评论样本少", "周末不营业"],
            cautions: ["建议参考其他平台评论"]
          }
        }
      },
      en: {
        overall: "A comprehensive aesthetic hospital in Seogwipo offering health checkups, aesthetic surgery, and medical spa services. Modern facilities with comfortable environment.",
        highlights: ["Health checkup", "Aesthetic center", "Medical spa"],
        platforms: {
          naver: {
            source: "Naver Map", count_hint: "~50 reviews",
            summary: "Naver reviews mention 'modern facilities', 'comfortable environment', 'comprehensive health checkup programs'. Suitable for customers wanting integrated health and beauty services.",
            keywords: ["modern", "environment", "health checkup", "spa"],
            pros: ["Modern facilities", "Comfortable clinic environment", "Comprehensive health checkup programs", "Combined beauty and spa services"],
            cons: ["Closed on weekends", "Higher prices", "Remote location"],
            cautions: ["Advance reservation required", "Some programs require consultation for pricing"]
          },
          google: {
            source: "Google Maps", count_hint: "~15 reviews",
            summary: "Limited Google reviews mentioning 'modern facility' and 'good for health checkup'.",
            keywords: ["modern", "health checkup", "spa"],
            pros: ["Modern facilities", "Comprehensive health checkup", "Comfortable spa"],
            cons: ["Closed weekends", "Remote location", "Higher prices"],
            cautions: ["Recommend advance booking", "Confirm operating hours"]
          },
          daum: {
            source: "Kakao Map", count_hint: "~10 reviews",
            summary: "Few reviews on Kakao Map, mainly mentioning 'good environment' and 'new facilities'.",
            keywords: ["environment", "facilities", "new"],
            pros: ["Comfortable environment", "Modern facilities"],
            cons: ["Small sample size", "Closed weekends"],
            cautions: ["Recommend referring to other platform reviews"]
          }
        }
      },
      ja: {
        overall: "西帰浦にある総合美容病院。健康診断、美容整形、メディカルスパを提供。最新設備で快適な環境。",
        highlights: ["健康診断", "美容センター", "メディカルスパ"],
        platforms: {
          naver: {
            source: "Naver マップ", count_hint: "約50件",
            summary: "Naverの口コミでは「施設が新しい」「環境が良い」「健康診断が充実」などの評価が多い。健康管理と美容を同時に確認したい方に参考になる情報が多い。",
            keywords: ["施設新", "環境良", "健康診断", "スパ"],
            pros: ["施設が最新", "診療環境が快適", "健康診断メニューが充実", "美容とスパの組み合わせ"],
            cons: ["週末休診", "価格が高め", "立地が遠い"],
            cautions: ["事前予約が必要", "一部メニューは相談後の価格設定"]
          },
          google: {
            source: "Google マップ", count_hint: "約15件",
            summary: "Googleの口コミは少ないが「modern facility」「good for health checkup」などのコメントあり。",
            keywords: ["modern", "health checkup", "spa"],
            pros: ["施設が最新", "健康診断が充実", "スパが快適"],
            cons: ["週末休診", "立地が遠い", "価格が高め"],
            cautions: ["事前予約を推奨", "営業時間を確認"]
          },
          daum: {
            source: "Kakao マップ", count_hint: "約10件",
            summary: "Kakao Mapの口コミは少なめ。「環境が良い」「施設が新しい」などの情報が中心。",
            keywords: ["環境", "施設", "新"],
            pros: ["環境が快適", "施設が最新"],
            cons: ["サンプル数が少ない", "週末休診"],
            cautions: ["他のプラットフォームの口コミを参考にすることを推奨"]
          }
        }
      }
    }
  }

,
  // ── 신규 추가: 서귀포 병원 ──────────────────────────────────────

  "hwangsur": {
    id: "hwangsur", region: "seogwipo", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "dermatology",
    name: { zh: "黄秀兰皮肤科", en: "Hwang Su-ran Dermatology", ja: "ファン・スラン皮膚科" },
    name_ko: "황수란피부과의원",
    address: { zh: "西归浦市 서귀동", en: "Seogwi-dong, Seogwipo City", ja: "西帰浦市 서귀동" },
    phone: "064-732-1575", thumbnail: "images/hwangsur-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 09:00–18:00", en: "Mon–Fri 09:00–18:00", ja: "平日 09:00–18:00" },
      sat: { zh: "土曜 09:00–13:00", en: "Sat 09:00–13:00", ja: "土曜 09:00–13:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.2497, lng: 126.5632,
    platform_links: {
      naver: "https://map.naver.com/v5/search/황수란피부과의원+서귀포",
      google: "https://www.google.com/maps/search/황수란피부과의원+서귀포",
      daum: "https://map.kakao.com/?q=황수란피부과의원+서귀포"
    },
    specialties: {
      zh: ["皮肤疾患", "激光护肤", "色素治疗", "注射美容"],
      en: ["Skin Disease", "Laser Care", "Pigmentation", "Filler & Botox"],
      ja: ["皮膚疾患", "レーザーケア", "色素治療", "注射美容"]
    },
    type: "clinic", rating: 4.2, review_count: 176,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "皮肤科专科医师 1名", en: "1 board-certified dermatologist", ja: "皮膚科専門医 1名" },
    prices: [],
    review_summary: {
      zh: { overall: "西归浦市서귀동皮肤科，皮肤科专科医师坐诊，提供皮肤疾患诊疗和激光美容。", highlights: ["专科医师坐诊", "서귀포시청 인근"], platforms: { naver: { rating: 4.2, count: 176 } } },
      en: { overall: "Dermatology clinic in Seogwi-dong, Seogwipo, with a board-certified specialist.", highlights: ["Board-certified specialist", "Near Seogwipo City Hall"], platforms: { naver: { rating: 4.2, count: 176 } } },
      ja: { overall: "서귀포市서귀洞の皮膚科。専門医在籍。", highlights: ["専門医在籍", "서귀포市街"], platforms: { naver: { rating: 4.2, count: 176 } } }
    }
  },

  "yonsedam": {
    id: "yonsedam", region: "seogwipo", specialty: "dermatology",
    foreign_friendly: true, foreign_official: false, specialist_cert: "",
    name: { zh: "延世叡谭医院", en: "Yonse Yedam Clinic", ja: "延世イェダムクリニック" },
    name_ko: "연세예담의원",
    address: { zh: "西归浦市 东洪洞", en: "Donghong-dong, Seogwipo City", ja: "西帰浦市 동홍동" },
    phone: "", thumbnail: "images/yonsedam-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 09:00–18:00", en: "Mon–Fri 09:00–18:00", ja: "平日 09:00–18:00" },
      sat: { zh: "土曜 09:00–13:00", en: "Sat 09:00–13:00", ja: "土曜 09:00–13:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.2654, lng: 126.5763,
    platform_links: {
      naver: "https://map.naver.com/v5/search/연세예담의원+서귀포",
      google: "https://www.google.com/maps/search/연세예담의원+서귀포",
      daum: "https://map.kakao.com/?q=연세예담의원+서귀포"
    },
    specialties: {
      zh: ["激光护肤", "注射美容", "皮肤管理"],
      en: ["Laser Care", "Filler & Botox", "Skin Management"],
      ja: ["レーザーケア", "注射美容", "スキン管理"]
    },
    type: "clinic", rating: 4.1, review_count: 143,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语", en: "Korean", ja: "韓国語" },
    doctor_info: { zh: "미용 진료", en: "Aesthetic care", ja: "美容診療" },
    prices: [],
    review_summary: {
      zh: { overall: "西归浦市东洪洞皮肤美容诊所，提供激光护肤和注射美容疗程。", highlights: ["东洪洞位置"], platforms: { naver: { rating: 4.1, count: 143 } } },
      en: { overall: "Aesthetic clinic in Donghong-dong, Seogwipo.", highlights: ["Donghong-dong location"], platforms: { naver: { rating: 4.1, count: 143 } } },
      ja: { overall: "서귀포市동홍洞の美容クリニック。", highlights: ["동홍동"], platforms: { naver: { rating: 4.1, count: 143 } } }
    }
  },

  "sam345": {
    id: "sam345", region: "seogwipo", specialty: "plastic-surgery",
    foreign_friendly: true, foreign_official: false, specialist_cert: "plastic-surgery",
    name: { zh: "345整形外科济州医院", en: "345 Plastic Surgery Jeju", ja: "345整形外科済州院" },
    name_ko: "삼사오성형외과제주의원",
    address: { zh: "西归浦市 江汀洞", en: "Gangjung-dong, Seogwipo City", ja: "西帰浦市 강정동" },
    phone: "064-738-7538", thumbnail: "images/sam345-thumb.jpg", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "平日 10:00–19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "土曜 10:00–17:00", en: "Sat 10:00–17:00", ja: "土曜 10:00–17:00" },
      closed: { zh: "周日·公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.2539, lng: 126.4565,
    lat: 33.2490026,
    lng: 126.50732,
    coordStatus: "verified",
    platform_links: {
      naver: "https://map.naver.com/v5/search/삼사오성형외과제주의원",
      google: "https://www.google.com/maps/search/삼사오성형외과+제주",
      daum: "https://map.kakao.com/?q=삼사오성형외과+제주"
    },
    specialties: {
      zh: ["眼部整形", "鼻部整形", "提拉抗衰", "注射美容"],
      en: ["Eye Surgery", "Nose Surgery", "Lifting", "Filler & Botox"],
      ja: ["目の整形", "鼻の整形", "リフティング", "注射美容"]
    },
    type: "clinic", rating: 4.2, review_count: 57,
    payment_methods: { zh: ["刷卡", "现金"], en: ["Card", "Cash"], ja: ["カード", "現金"] },
    booking_method: { zh: "电话预约", en: "Phone", ja: "電話" },
    languages_supported: { zh: "韩语·基础英语", en: "Korean, basic English", ja: "韓国語・基礎英語" },
    doctor_info: { zh: "성형외과 专科医师 2名", en: "2 plastic surgery specialists", ja: "整形外科専門医 2名" },
    prices: [],
    review_summary: {
      zh: { overall: "西归浦市强汀洞成形外科，2名成形外科专科医师坐诊，提供眼部·鼻部整形和提拉疗程。", highlights: ["2名专科医师", "西归浦 위치"], platforms: { naver: { rating: 4.2, count: 57 } } },
      en: { overall: "Plastic surgery clinic in Gangjung-dong, Seogwipo, staffed by 2 certified specialists.", highlights: ["2 certified specialists", "Seogwipo location"], platforms: { naver: { rating: 4.2, count: 57 } } },
      ja: { overall: "서귀포市강정洞の整形外科。専門医2名在籍。", highlights: ["専門医2名", "서귀포"], platforms: { naver: { rating: 4.2, count: 57 } } }
    }
  },


  "dana-dental": {
    id: "dana-dental", region: "seogwipo", specialty: "dental",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "다나치과의원", en: "다나치과의원", ja: "다나치과의원" },
    name_ko: "다나치과의원",
    address: { zh: "제주특별자치도 서귀포시 중앙로 189, 203-103(서홍동, 일호지오빌 2-2차)", en: "제주특별자치도 서귀포시 중앙로 189, 203-103(서홍동, 일호지오빌 2-2차)", ja: "제주특별자치도 서귀포시 중앙로 189, 203-103(서홍동, 일호지오빌 2-2차)" },
    phone: "064-762-7528", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.2608944,
    lng: 126.5578025,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/다나치과의원 ??", google: "https://www.google.com/maps/search/다나치과의원 ??", daum: "https://map.kakao.com/?q=다나치과의원 ??" },
    specialties: { zh: "치과의원", en: "치과의원", ja: "치과의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "angel-obgyn": {
    id: "angel-obgyn", region: "seogwipo", specialty: "pediatrics",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "엔젤산부인과의원", en: "엔젤산부인과의원", ja: "엔젤산부인과의원" },
    name_ko: "엔젤산부인과의원",
    address: { zh: "제주특별자치도 서귀포시 대정읍 에듀시티로239번길 12 (보성리) 2층 엔젤산부인과", en: "제주특별자치도 서귀포시 대정읍 에듀시티로239번길 12 (보성리) 2층 엔젤산부인과", ja: "제주특별자치도 서귀포시 대정읍 에듀시티로239번길 12 (보성리) 2층 엔젤산부인과" },
    phone: "064-756-7575", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.2792637,
    lng: 126.2751029,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/엔젤산부인과의원 ??", google: "https://www.google.com/maps/search/엔젤산부인과의원 ??", daum: "https://map.kakao.com/?q=엔젤산부인과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },


  "jeju365plus-internal": {
    id: "jeju365plus-internal", region: "seogwipo", specialty: "internal",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "제주365플러스내과의원", en: "제주365플러스내과의원", ja: "제주365플러스내과의원" },
    name_ko: "제주365플러스내과의원",
    address: { zh: "제주특별자치도 서귀포시 일주동로 9159 (법환동) 4층", en: "제주특별자치도 서귀포시 일주동로 9159 (법환동) 4층", ja: "제주특별자치도 서귀포시 일주동로 9159 (법환동) 4층" },
    phone: "064-767-3650", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.2477,
    lng: 126.5143323,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/제주365플러스내과의원 ??", google: "https://www.google.com/maps/search/제주365플러스내과의원 ??", daum: "https://map.kakao.com/?q=제주365플러스내과의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },

  "easton-clinic": {
    id: "easton-clinic", region: "seogwipo", specialty: "dermatology",
    type: "clinic", foreign_friendly: true, foreign_official: true, official_licensed: true,
    name: { zh: "이스톤의원", en: "이스톤의원", ja: "이스톤의원" },
    name_ko: "이스톤의원",
    address: { zh: "제주특별자치도 서귀포시 대정읍 에듀시티로 102 (보성리, 한신더휴) 한신더휴 단지내 상가 201~205호", en: "제주특별자치도 서귀포시 대정읍 에듀시티로 102 (보성리, 한신더휴) 한신더휴 단지내 상가 201~205호", ja: "제주특별자치도 서귀포시 대정읍 에듀시티로 102 (보성리, 한신더휴) 한신더휴 단지내 상가 201~205호" },
    phone: "064-792-3537", thumbnail: "", images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {},
    lat: 33.286509,
    lng: 126.281098,
    coordStatus: "verified",
    platform_links: { naver: "https://map.naver.com/v5/search/이스톤의원 ??", google: "https://www.google.com/maps/search/이스톤의원 ??", daum: "https://map.kakao.com/?q=이스톤의원 ??" },
    specialties: { zh: "의원", en: "의원", ja: "의원" },
    rating: 0, review_count: 0,
    payment_methods: {}, booking_method: {}, languages_supported: {}, doctor_info: {}, prices: [],
    review_summary: {
      zh: { overall: "Registered for international patient services. Information is based on public registration data." },
      en: { overall: "Registered for international patient services. Information is based on public registration data." },
      ja: { overall: "Registered for international patient services. Information is based on public registration data." }
    }
  },


};
