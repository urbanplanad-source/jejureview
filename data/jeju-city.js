/* ================================================================
   data/jeju-city.js - 제주시 병원 상세 정보
   ================================================================ */

const HOSPITALS_JEJU_CITY = {
  "areumd": {
    id: "areumd",
    region: "jeju-city",
    specialty: "dermatology",
    foreign_friendly: true,
    foreign_official: false,
    specialist_cert: "dermatology",
    featured: true,
    name: {
      zh: "老衡美丽皮肤科",
      en: "Areumdaun Dermatology (Noheung)",
      ja: "ノヒョン アルムダウン皮膚科"
    },
    name_ko: "아름다운피부과의원",
    address: {
      zh: "济州市 老衡洞 道令路5号 明恩大厦 2·3·5层（老衡五岔路口）",
      en: "Myeongeun Bldg. 2·3·5F, 5 Doryeong-ro, Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞 ドリョン路5番 ミョンウンビル 2·3·5階"
    },
    phone: "064-746-7114",
    youtube_url: "https://youtu.be/JFzieBvayOM",
    thumbnail: "images/areumd-thumb.jpg",
    images: ["images/areumd-1.jpg", "images/areumd-2.jpg"],
    contact: { wechat: "jejubtskin", line: "", instagram: "" },
    chinese_staff: true,
    hours: {
      weekday: { zh: "平日 10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "周六 10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 · 公假 休息", en: "Sun & Holidays Closed", ja: "日曜・祝日 休診" }
    },
    lat: 33.4882, lng: 126.4827,
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
    rating: 4.6, review_count: 390,
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
      zh: "3名皮肤科专科医师（其中1名医学博士），10年以上临床经验",
      en: "3 board-certified dermatologists (1 with PhD), 10+ yrs clinical experience",
      ja: "皮膚科専門医3名（博士1名）、臨床経験10年以上"
    },
    prices: [
      { name: { zh: "激光托宁", en: "Laser Toning", ja: "レーザートーニング" }, price: "50,000원~" },
      { name: { zh: "Thermage FLX", en: "Thermage FLX", ja: "Thermage FLX" }, price: "500,000원~" },
      { name: { zh: "肉毒素（小）", en: "Botox (small area)", ja: "ボトックス（小）" }, price: "50,000원~" },
      { name: { zh: "玻尿酸填充", en: "Hyaluronic Acid Filler", ja: "ヒアルロン酸フィラー" }, price: "200,000원~" }
    ],
    review_summary: {
      zh: {
        overall: "4位皮肤科专科医师（医学博士）坐诊。主打「个性化抗衰老矫正」方案——医生1对1诊断，每次结合多种最新设备复合施术。",
        highlights: ["4位专科医师坐诊", "个人定制方案", "复合施术体系", "老衡市区交通便利"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 1,120 条",
            summary: "Naver评论以记录型长文为主，较多描述「医生说明清楚」「复合施术效果」等体验细节。",
            keywords: ["说明清楚", "专科医生", "激光托宁", "痘痘", "复诊", "等待"],
            pros: ["4位专科医生各有分工，专业感明显", "医生1对1诊断，针对个人皮肤状态制定方案"],
            cons: ["人气时段（周末午前）等待时间可能较长", "复合施术项目较多，初诊时间会相应增加"],
            cautions: ["部分评论来自复诊患者，短期体验感可能不同", "激光效果因肤质不同而存在差异"]
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

  "jejuskinlab": {
    id: "jejuskinlab",
    type: "skincare",
    region: "jeju-city",
    specialty: "skincare",
    foreign_friendly: true,
    featured: true,
    name: { zh: "济州清透皮肤护理", en: "Jeju Skin Lab", ja: "済州スキンラボ" },
    name_ko: "제주스킨랩",
    address: {
      zh: "济州市 老衡洞 道令路 附近（具体地址预约后告知）",
      en: "Near Doryeong-ro, Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞 ドリョン路付近"
    },
    phone: "064-000-0000",
    thumbnail: "images/jejuskinlab-thumb.jpg",
    images: ["images/jejuskinlab-1.jpg", "images/jejuskinlab-2.jpg"],
    contact: { wechat: "jejuskinlab", line: "jejuskinlab", instagram: "jejuskinlab" },
    chinese_staff: true,
    hours: {
      weekday: { zh: "10:00 - 20:00", en: "10:00–20:00", ja: "10:00–20:00" },
      sat: { zh: "10:00 - 18:00", en: "10:00–18:00", ja: "10:00–18:00" },
      closed: { zh: "周日 休息", en: "Closed Sunday", ja: "日曜 休み" }
    },
    lat: 33.4882, lng: 126.4827,
    platform_links: {
      naver: "https://map.naver.com/v5/search/제주스킨랩",
      google: "https://www.google.com/maps/search/제주스킨랩",
      daum: "https://map.kakao.com/?q=제주스킨랩"
    },
    specialties: {
      zh: ["基础护理", "深层清洁", "保湿集中护理", "背部护理"],
      en: ["Basic Facial", "Deep Cleansing", "Intensive Hydration", "Back Care"],
      ja: ["ベーシックケア", "ディープクレンジング", "集中保湿ケア", "バックケア"]
    },
    prices: [
      { name: { zh: "基础护理 60分钟", en: "Basic Facial 60 min", ja: "ベーシックケア 60分" }, price: "70,000원" },
      { name: { zh: "深层清洁 75分钟", en: "Deep Cleansing 75 min", ja: "ディープクレンジング 75分" }, price: "80,000원" },
      { name: { zh: "保湿集中护理 60分钟", en: "Intensive Hydration 60 min", ja: "集中保湿ケア 60分" }, price: "80,000원" },
      { name: { zh: "背部护理 60分钟", en: "Back Care 60 min", ja: "バックケア 60分" }, price: "90,000원" }
    ],
    rating: 4.5, review_count: 120,
    review_summary: {
      zh: { overall: "位于济州市老衡洞的皮肤护理工作室。中文服务对应，设施干净整洁，以温和专业的护理体验著称。" },
      en: { overall: "A skincare studio in Nohyeong-dong, Jeju City. Chinese-speaking staff available. Known for its clean facilities." },
      ja: { overall: "済州市ノヒョン洞にあるスキンケアサロン。中国語対応スタッフが在籍。清潔な施設と丁寧な施術が外国人旅行者に好評。" }
    }
  },

  "jejuhealing": {
    id: "jejuhealing",
    type: "massage",
    region: "jeju-city",
    specialty: "massage",
    foreign_friendly: true,
    featured: false,
    name: { zh: "济州岛疗愈按摩", en: "Jeju Healing Massage", ja: "済州ヒーリングマッサージ" },
    name_ko: "제주힐링마사지",
    address: {
      zh: "济州市 莲洞 中央路附近（具体地址预约后告知）",
      en: "Near Jungang-ro, Yeon-dong, Jeju City",
      ja: "済州市 蓮洞 中央路付近"
    },
    phone: "064-000-1111",
    thumbnail: "images/jejuhealing-thumb.jpg",
    images: [],
    contact: { wechat: "jejuhealing", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "11:00 - 22:00", en: "11:00–22:00", ja: "11:00–22:00" },
      sat: { zh: "10:00 - 22:00", en: "10:00–22:00", ja: "10:00–22:00" },
      closed: { zh: "全年无休", en: "Open every day", ja: "年中無休" }
    },
    lat: 33.4970, lng: 126.5295,
    platform_links: {
      naver: "https://map.naver.com/v5/search/제주힐링마사지",
      google: "https://www.google.com/maps/search/제주힐링마사지",
      daum: "https://map.kakao.com/?q=제주힐링마사지"
    },
    specialties: {
      zh: ["瑞典式按摩", "芳香疗法", "热石按摩", "足部反射疗法"],
      en: ["Swedish Massage", "Aromatherapy", "Hot Stone", "Reflexology"],
      ja: ["スウェーディッシュ", "アロマセラピー", "ホットストーン", "リフレクソロジー"]
    },
    prices: [
      { name: { zh: "瑞典式按摩 60分钟", en: "Swedish Massage 60 min", ja: "スウェーディッシュ 60分" }, price: "80,000원" },
      { name: { zh: "芳香疗法 90分钟", en: "Aromatherapy 90 min", ja: "アロマセラピー 90分" }, price: "120,000원" },
      { name: { zh: "热石按摩 90分钟", en: "Hot Stone Massage 90 min", ja: "ホットストーンマッサージ 90分" }, price: "130,000원" },
      { name: { zh: "足部反射疗法 60分钟", en: "Reflexology 60 min", ja: "リフレクソロジー 60分" }, price: "70,000원" }
    ],
    rating: 4.4, review_count: 85,
    review_summary: {
      zh: { overall: "位于济州市莲洞，以合理的价格提供多种按摩菜单。非常适合旅行途中想要放松疲惫身体的旅客。" },
      en: { overall: "Located in Yeon-dong, Jeju City. Offers a variety of massage treatments at reasonable prices." },
      ja: { overall: "済州市蓮洞に位置。手頃な価格で多彩なマッサージメニューを提供。観光疲れを癒したい旅行者に人気。" }
    }
  }
};
