/* ================================================================
   data/seogwipo.js - 서귀포 병원 상세 정보
   ================================================================ */

const HOSPITALS_SEOGWIPO = {
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
    name_ko: "벨륭성형외과의원",
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
    platform_links: {
      naver: "https://map.naver.com/v5/search/벨륭성형외과",
      google: "https://www.google.com/maps/search/벨륭성형외과+서귀포",
      daum: "https://map.kakao.com/?q=벨륭성형외과"
    },
    specialties: {
      zh: ["提拉紧致", "Thermage FLX", "Ulthera", "注射美容"],
      en: ["Lifting & Tightening", "Thermage FLX", "Ulthera", "Filler & Botox"],
      ja: ["リフティング", "Thermage FLX", "Ulthera", "注射美容"]
    },
    type: "clinic",
    rating: 4.7, review_count: 180,
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
  "seoulfirst": {
    id: "seoulfirst",
    region: "seogwipo",
    specialty: "plastic-surgery",
    foreign_friendly: true,
    featured: false,
    name: {
      zh: "首尔第一整形外科",
      en: "Seoul First Plastic Surgery",
      ja: "ソウルファースト整形外科"
    },
    name_ko: "서울퍼스트성형외과의원",
    address: {
      zh: "西归浦市 世界杯路8号 松山广场2楼202号（江汀洞）",
      en: "2F Songsan Plaza, 8 World Cup-ro, Gangjeong-dong, Seogwipo",
      ja: "西帰浦市 ワールドカップ路8 松山プラザ2階202号"
    },
    phone: "064-738-7538",
    thumbnail: "images/seoulfirst-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 休息", en: "Sun Closed", ja: "日曜 休診" }
    },
    lat: 33.2540, lng: 126.5120,
    platform_links: {
      naver: "https://map.naver.com/v5/search/서울퍼스트성형외과의원%20서귀포",
      google: "https://www.google.com/maps/search/서울퍼스트성형외과의원+서귀포",
      daum: "https://map.kakao.com/?q=서울퍼스트성형외과의원+서귀포"
    },
    specialties: {
      zh: ["眼部整形", "鼻部整形", "皮肤美容"],
      en: ["Eye Surgery", "Nose Surgery", "Skin Aesthetics"],
      ja: ["目の整形", "鼻の整形", "美容皮膚科"]
    },
    type: "clinic",
    rating: 4.3, review_count: 112,
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
      zh: "整形外科专科医师",
      en: "Board-certified plastic surgeon",
      ja: "整形外科専門医"
    },
    review_summary: {
      zh: {
        overall: "位于西归浦江汀洞的整形外科，提供眼部、鼻部整形及皮肤美容服务。医生经验丰富，咨询细致。",
        highlights: ["眼部整形专业", "鼻部整形", "皮肤管理"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 85 条",
            summary: "Naver评论中多次提到「医生经验丰富」「咨询详细」「术后管理到位」。眼部整形手术评价较好。",
            keywords: ["眼部整形", "经验丰富", "咨询详细", "术后管理"],
            pros: ["医生整形经验丰富", "术前咨询详细", "术后管理到位", "位置便利（世界杯路附近）"],
            cons: ["中文服务有限", "预约等待时间较长"],
            cautions: ["整形手术存在个体差异", "术后恢复期因人而异"]
          },
          google: {
            source: "Google Maps", count_hint: "约 25 条",
            summary: "Google评论整体评分中等偏上，有外国游客留下评价，提到「professional service」「good results」。",
            keywords: ["professional", "good results", "experienced"],
            pros: ["医生经验丰富", "手术效果满意", "位置便利"],
            cons: ["语言沟通可能有障碍", "价格信息不够透明"],
            cautions: ["建议提前确认价格", "术后护理需要充分时间"]
          },
          daum: {
            source: "Kakao Map", count_hint: "约 15 条",
            summary: "Kakao Map评论数量较少，主要提到「位置好找」「停车方便」等实用信息。",
            keywords: ["位置", "停车", "方便"],
            pros: ["位置便利", "松山广场停车方便"],
            cons: ["评论样本少"],
            cautions: ["建议结合Naver评论综合判断"]
          }
        }
      },
      en: {
        overall: "A plastic surgery clinic in Gangjeong-dong, Seogwipo. Offers eye, nose surgery and skin aesthetics. Experienced doctor with detailed consultation.",
        highlights: ["Eye surgery specialist", "Nose surgery", "Skin management"],
        platforms: {
          naver: {
            source: "Naver Map", count_hint: "~85 reviews",
            summary: "Naver reviews mention 'experienced doctor', 'detailed consultation', 'good post-op care'. Eye surgery receives positive feedback.",
            keywords: ["eye surgery", "experienced", "detailed consultation", "post-op care"],
            pros: ["Doctor has extensive experience", "Detailed pre-op consultation", "Good post-operative management", "Convenient location near World Cup Road"],
            cons: ["Limited Chinese language support", "Longer wait times for appointments"],
            cautions: ["Individual results may vary", "Recovery period varies by person"]
          },
          google: {
            source: "Google Maps", count_hint: "~25 reviews",
            summary: "Google reviews show above-average ratings. Some foreign tourists mentioned 'professional service' and 'good results'.",
            keywords: ["professional", "good results", "experienced"],
            pros: ["Experienced doctor", "Satisfactory surgical results", "Convenient location"],
            cons: ["Language barrier possible", "Pricing not very transparent"],
            cautions: ["Confirm pricing in advance", "Post-op care requires adequate time"]
          },
          daum: {
            source: "Kakao Map", count_hint: "~15 reviews",
            summary: "Few reviews on Kakao Map, mainly mentioning 'easy to find' and 'convenient parking'.",
            keywords: ["location", "parking", "convenient"],
            pros: ["Convenient location", "Easy parking at Songsan Plaza"],
            cons: ["Small sample size"],
            cautions: ["Recommend combining with Naver reviews"]
          }
        }
      },
      ja: {
        overall: "西帰浦江汀洞にある整形外科。目・鼻の整形と美容皮膚科サービスを提供。経験豊富な医師が丁寧に相談に乗る。",
        highlights: ["目の整形専門", "鼻の整形", "スキンケア"],
        platforms: {
          naver: {
            source: "Naver マップ", count_hint: "約85件",
            summary: "Naverの口コミでは「経験豊富な医師」「丁寧な相談」「充実した術後管理」が多く挙げられている。目の整形の評価が特に良い。",
            keywords: ["目の整形", "経験豊富", "丁寧な相談", "術後管理"],
            pros: ["医師の整形経験が豊富", "術前の相談が丁寧", "術後管理が充実", "ワールドカップ路近くで便利"],
            cons: ["中国語対応が限定的", "予約待ち時間が長め"],
            cautions: ["整形効果には個人差がある", "術後の回復期間は人によって異なる"]
          },
          google: {
            source: "Google マップ", count_hint: "約25件",
            summary: "Googleの口コミは中上の評価。外国人旅行者から「professional service」「good results」というコメントあり。",
            keywords: ["professional", "good results", "experienced"],
            pros: ["医師が経験豊富", "手術結果に満足", "立地が便利"],
            cons: ["言語の壁がある可能性", "価格情報が不透明"],
            cautions: ["事前に価格を確認することを推奨", "術後ケアに十分な時間が必要"]
          },
          daum: {
            source: "Kakao マップ", count_hint: "約15件",
            summary: "Kakao Mapの口コミは少なめ。「場所が分かりやすい」「駐車が便利」などの情報が中心。",
            keywords: ["場所", "駐車", "便利"],
            pros: ["立地が便利", "松山プラザの駐車場が使いやすい"],
            cons: ["サンプル数が少ない"],
            cautions: ["Naverの口コミと合わせて参照することを推奨"]
          }
        }
      }
    }
  },

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
    rating: 4.2, review_count: 89,
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
            summary: "Naverの口コミでは「ニキビ治療の効果が目立つ」「レーザー設備が最新」「医師が専門的」などの評価が多い。皮膚で悩む患者におすすめ。",
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
    rating: 4.0, review_count: 65,
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
            summary: "Naverの口コミでは「施設が新しい」「環境が良い」「健康診断が充実」などの評価が多い。健康管理と美容を同時に行いたい方におすすめ。",
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
};
