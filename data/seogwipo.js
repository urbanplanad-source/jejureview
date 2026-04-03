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
    name_ko: "벨르e?몽성형외과의원",
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
      naver: "https://map.naver.com/v5/search/벨르e?몽성형외과",
      google: "https://www.google.com/maps/search/벨르e?몽성형외과+서귀포",
      daum: "https://map.kakao.com/?q=벨르e?몽성형외과"
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
  }
};
