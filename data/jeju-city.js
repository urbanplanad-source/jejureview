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
        overall: "3位皮肤科专科医师（其中1名医学博士）坐诊。主打「个性化抗衰老矫正」方案——医生1对1诊断，每次结合多种最新设备复合施术。评论中反复出现「说明详细、专业感强」的评价，是济州市区口碑稳定的皮肤科之一。",
        highlights: ["3位专科医师坐诊", "个人定制方案", "复合施术体系", "老衡市区交通便利", "中文服务完善"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 1,120 条",
            summary: "Naver评论以记录型长文为主，较多描述「医生说明清楚」「复合施术效果」「预约流程」等体验细节。评论者多为当地居民，复诊记录占比高，对色素激光（去斑）和痘痘管理项目评价集中。",
            keywords: ["说明清楚", "专科医生", "激光托宁", "痘痘", "复诊", "等待", "专业", "效果满意"],
            pros: ["3位专科医生各有分工，专业感明显", "医生1对1诊断，针对个人皮肤状态制定方案", "色素管理和痘痘治疗评论数量多，口碑稳定", "位于老衡五岔路口，济州市内交通便利", "中文服务对应完善，外国患者咨询无障碍"],
            cons: ["人气时段（周末午前）等待时间可能较长", "复合施术项目较多，初诊时间会相应增加", "价格相比周边略高"],
            cautions: ["部分评论来自复诊患者，短期体验感可能不同", "激光效果因肤质不同而存在差异，建议综合多条评论判断", "热门时段建议提前预约"]
          },
          google: {
            source: "Google Maps", count_hint: "约 50 条",
            summary: "Google评论以简短评分为主，整体评分偏高（平均4.5星）。外国旅客评论中出现「staff was helpful」「clean clinic」「professional service」等关键词。适合快速了解总体口碑方向，细节建议搭配Naver评论阅读。",
            keywords: ["干净", "友善", "专业", "满意", "helpful staff", "clean clinic", "professional"],
            pros: ["整体评分较高（4.5星），口碑方向正面", "有外国患者评论，说明接待外国人有一定经验", "诊所环境整洁，设备先进", "中文服务获得好评"],
            cons: ["评论细节较少，个别体验难以判断", "英文评论数量有限"],
            cautions: ["Google评论数量相对少，建议搭配Naver长评获取更多细节", "外国患者体验可能与本地患者有所不同"]
          },
          daum: {
            source: "Kakao Map", count_hint: "约 20 条",
            summary: "Kakao Map评论数量较少，以简短印象为主。部分评论提到「交通方便」「预约顺畅」「医生亲切」等实际体验信息，适合作为补充参考。",
            keywords: ["交通", "预约", "满意", "亲切"],
            pros: ["可验证交通便利性等实际信息", "医生态度亲切获得好评"],
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
      zh: {
        overall: "位于济州市老衡洞的皮肤护理工作室。中文服务对应，设施干净整洁，以温和专业的护理体验著称。适合旅行途中想要放松和基础皮肤护理的外国旅客。",
        highlights: ["中文服务", "设施干净", "温和护理", "老衡洞位置便利"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 45 条",
            summary: "Naver评论以本地顾客为主，提到「环境温馨」「护理师手法轻柔」「中文沟通顺畅」等。基础护理项目评价较好，适合日常皮肤管理。",
            keywords: ["环境温馨", "手法轻柔", "中文服务", "基础护理"],
            pros: ["中文服务对应完善", "护理环境温馨干净", "护理师手法专业轻柔", "价格相对合理"],
            cons: ["非医疗机构，无法进行医学治疗", "停车位有限"],
            cautions: ["皮肤有严重问题建议先咨询皮肤科", "热门时段建议提前预约"]
          },
          google: {
            source: "Google Maps", count_hint: "约 15 条",
            summary: "Google评论数量不多，但评价正面。外国游客提到「relaxing experience」「clean environment」「Chinese speaking staff helpful」。",
            keywords: ["relaxing", "clean", "Chinese speaking", "helpful"],
            pros: ["中文服务方便外国游客", "环境干净舒适", "护理体验放松"],
            cons: ["评论数量较少", "非医疗机构"],
            cautions: ["适合基础护理，严重皮肤问题建议就医"]
          },
          daum: {
            source: "Kakao Map", count_hint: "约 10 条",
            summary: "Kakao Map评论较少，主要提到「位置好找」「预约方便」。",
            keywords: ["位置", "预约", "方便"],
            pros: ["老衡洞位置便利", "预约流程简单"],
            cons: ["评论样本少"],
            cautions: ["建议参考Naver和Google评论"]
          }
        }
      },
      en: {
        overall: "A skincare studio in Nohyeong-dong, Jeju City. Chinese-speaking staff available. Known for its clean facilities and gentle, professional care. Suitable for foreign tourists seeking relaxation and basic skincare during their trip.",
        highlights: ["Chinese service", "Clean facilities", "Gentle care", "Convenient Nohyeong location"],
        platforms: {
          naver: {
            source: "Naver Map", count_hint: "~45 reviews",
            summary: "Naver reviews mainly from local customers mention 'cozy environment', 'gentle therapist hands', 'smooth Chinese communication'. Basic care programs receive good reviews.",
            keywords: ["cozy environment", "gentle hands", "Chinese service", "basic care"],
            pros: ["Good Chinese language support", "Warm and clean environment", "Professional and gentle therapists", "Reasonable prices"],
            cons: ["Not a medical facility, cannot provide medical treatment", "Limited parking"],
            cautions: ["For serious skin issues, consult a dermatologist first", "Advance booking recommended for peak times"]
          },
          google: {
            source: "Google Maps", count_hint: "~15 reviews",
            summary: "Limited but positive Google reviews. Foreign tourists mentioned 'relaxing experience', 'clean environment', 'Chinese speaking staff helpful'.",
            keywords: ["relaxing", "clean", "Chinese speaking", "helpful"],
            pros: ["Chinese service convenient for foreign tourists", "Clean and comfortable environment", "Relaxing care experience"],
            cons: ["Limited number of reviews", "Not a medical facility"],
            cautions: ["Suitable for basic care; serious skin issues should seek medical care"]
          },
          daum: {
            source: "Kakao Map", count_hint: "~10 reviews",
            summary: "Few reviews on Kakao Map, mainly mentioning 'easy to find' and 'convenient booking'.",
            keywords: ["location", "booking", "convenient"],
            pros: ["Convenient Nohyeong location", "Simple booking process"],
            cons: ["Small sample size"],
            cautions: ["Recommend referring to Naver and Google reviews"]
          }
        }
      },
      ja: {
        overall: "済州市ノヒョン洞にあるスキンケアサロン。中国語対応スタッフが在籍。清潔な施設と丁寧で優しい施術が外国人旅行者に好評。旅行中のリラクゼーションと基礎スキンケアに適している。",
        highlights: ["中国語対応", "清潔な施設", "優しい施術", "ノヒョン洞の便利な立地"],
        platforms: {
          naver: {
            source: "Naver マップ", count_hint: "約45件",
            summary: "Naverの口コミは地元のお客様が中心で、「雰囲気が温かい」「施術師の手技が優しい」「中国語でのコミュニケーションがスムーズ」などが挙げられている。",
            keywords: ["雰囲気温かい", "手技優しい", "中国語対応", "基礎ケア"],
            pros: ["中国語対応が充実", "温かく清潔な環境", "施術師の手技がプロで優しい", "価格が比較的リーズナブル"],
            cons: ["医療機関ではないため医療行為は不可", "駐車場が限られている"],
            cautions: ["皮膚に深刻な問題がある場合は皮膚科の受診を推奨", "人気時間帯は事前予約を推奨"]
          },
          google: {
            source: "Google マップ", count_hint: "約15件",
            summary: "Googleの口コミは少ないが評価は良好。外国人旅行者から「relaxing experience」「clean environment」「Chinese speaking staff helpful」などのコメントあり。",
            keywords: ["relaxing", "clean", "Chinese speaking", "helpful"],
            pros: ["中国語対応で外国人旅行者に便利", "清潔で快適な環境", "リラックスできる施術体験"],
            cons: ["口コミ数が少ない", "医療機関ではない"],
            cautions: ["基礎ケア向け。深刻な皮膚問題は医療機関受診を"]
          },
          daum: {
            source: "Kakao マップ", count_hint: "約10件",
            summary: "Kakao Mapの口コミは少なめ。「場所が分かりやすい」「予約が便利」などの情報が中心。",
            keywords: ["場所", "予約", "便利"],
            pros: ["ノヒョン洞の便利な立地", "予約手続きが簡単"],
            cons: ["サンプル数が少ない"],
            cautions: ["NaverとGoogleの口コミを参考にすることを推奨"]
          }
        }
      }
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
      zh: {
        overall: "位于济州市莲洞，以合理的价格提供多种按摩菜单。非常适合旅行途中想要放松疲惫身体的旅客。全年无休，营业至晚上10点，时间灵活。",
        highlights: ["价格合理", "全年无休", "营业至晚10点", "多种按摩菜单"],
        platforms: {
          naver: {
            source: "Naver 地图", count_hint: "约 60 条",
            summary: "Naver评论中「手法专业」「价格公道」「全年无休很方便」等评价较多。瑞典式按摩和热石按摩比较受欢迎。适合观光后放松。",
            keywords: ["手法专业", "价格公道", "全年无休", "瑞典式按摩", "热石按摩"],
            pros: ["按摩师手法专业", "价格合理透明", "全年无休，随时可预约", "营业至晚上10点，时间灵活", "多种按摩菜单可选"],
            cons: ["非医疗按摩，治疗效果有限", "店内空间不大"],
            cautions: ["有特定健康问题者建议先咨询医生", "建议提前预约确保有位"]
          },
          google: {
            source: "Google Maps", count_hint: "约 20 条",
            summary: "Google评论中外国游客提到「great value for money」「professional massage」「open late」等。适合旅行途中放松。",
            keywords: ["value for money", "professional", "open late", "relaxing"],
            pros: ["性价比高", "按摩技术专业", "营业时间长", "全年无休方便游客"],
            cons: ["评论数量较少", "非医疗按摩"],
            cautions: ["适合放松，有健康问题建议就医"]
          },
          daum: {
            source: "Kakao Map", count_hint: "约 15 条",
            summary: "Kakao Map评论提到「位置好找」「预约方便」「按摩舒服」等。",
            keywords: ["位置", "预约", "舒服"],
            pros: ["莲洞位置便利", "预约方便", "按摩体验舒适"],
            cons: ["评论样本较少"],
            cautions: ["建议参考Naver和Google评论"]
          }
        }
      },
      en: {
        overall: "Located in Yeon-dong, Jeju City. Offers a variety of massage treatments at reasonable prices. Perfect for travelers wanting to relax tired bodies during their trip. Open 365 days until 10 PM with flexible hours.",
        highlights: ["Reasonable prices", "Open 365 days", "Open until 10 PM", "Various massage menus"],
        platforms: {
          naver: {
            source: "Naver Map", count_hint: "~60 reviews",
            summary: "Naver reviews mention 'professional technique', 'fair prices', 'convenient 365-day operation'. Swedish and hot stone massages are popular. Good for post-sightseeing relaxation.",
            keywords: ["professional technique", "fair prices", "365 days", "Swedish massage", "hot stone"],
            pros: ["Professional massage therapists", "Transparent and reasonable pricing", "Open 365 days for flexible booking", "Open until 10 PM", "Various massage options"],
            cons: ["Non-medical massage, limited therapeutic effect", "Shop space is not large"],
            cautions: ["Those with specific health issues should consult doctor first", "Advance booking recommended"]
          },
          google: {
            source: "Google Maps", count_hint: "~20 reviews",
            summary: "Google reviews from foreign tourists mention 'great value for money', 'professional massage', 'open late'. Good for relaxation during travel.",
            keywords: ["value for money", "professional", "open late", "relaxing"],
            pros: ["Good value for money", "Professional massage skills", "Long operating hours", "Open 365 days convenient for tourists"],
            cons: ["Limited number of reviews", "Non-medical massage"],
            cautions: ["Good for relaxation; health issues should seek medical care"]
          },
          daum: {
            source: "Kakao Map", count_hint: "~15 reviews",
            summary: "Kakao Map reviews mention 'easy to find', 'convenient booking', 'comfortable massage'.",
            keywords: ["location", "booking", "comfortable"],
            pros: ["Convenient Yeon-dong location", "Easy booking", "Comfortable massage experience"],
            cons: ["Small sample size"],
            cautions: ["Recommend referring to Naver and Google reviews"]
          }
        }
      },
      ja: {
        overall: "済州市蓮洞に位置。手頃な価格で多彩なマッサージメニューを提供。観光疲れを癒したい旅行者に人気。年中無休で22時まで営業し、時間が柔軟。",
        highlights: ["リーズナブルな価格", "年中無休", "22時まで営業", "多彩なマッサージメニュー"],
        platforms: {
          naver: {
            source: "Naver マップ", count_hint: "約60件",
            summary: "Naverの口コミでは「手技がプロ」「価格が適正」「年中無休で便利」などの評価が多い。スウェーディッシュマッサージとホットストーンマッサージが人気。",
            keywords: ["手技プロ", "価格適正", "年中無休", "スウェーディッシュ", "ホットストーン"],
            pros: ["マッサージ師の手技がプロ", "価格が透明で適正", "年中無休でいつでも予約可能", "22時まで営業で時間が柔軟", "マッサージメニューが豊富"],
            cons: ["医療マッサージではないため治療効果は限定的", "店内スペースは広くない"],
            cautions: ["特定の健康問題がある方は事前に医師に相談を推奨", "事前予約を推奨"]
          },
          google: {
            source: "Google マップ", count_hint: "約20件",
            summary: "Googleの口コミでは外国人旅行者から「great value for money」「professional massage」「open late」などのコメントあり。",
            keywords: ["value for money", "professional", "open late", "relaxing"],
            pros: ["コスパが良い", "マッサージ技術がプロ", "営業時間が長い", "年中無休で旅行者に便利"],
            cons: ["口コミ数が少ない", "医療マッサージではない"],
            cautions: ["リラクゼーション向け。健康問題は医療機関受診を"]
          },
          daum: {
            source: "Kakao マップ", count_hint: "約15件",
            summary: "Kakao Mapの口コミでは「場所が分かりやすい」「予約が便利」「マッサージが気持ちいい」など。",
            keywords: ["場所", "予約", "気持ちいい"],
            pros: ["蓮洞の便利な立地", "予約が簡単", "マッサージ体験が快適"],
            cons: ["サンプル数が少ない"],
            cautions: ["NaverとGoogleの口コミを参考にすることを推奨"]
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
    rating: 4.3, review_count: 95,
    review_summary: {
      zh: { overall: "位于老衡洞的皮肤科，提供皮肤管理和激光美容服务。" },
      en: { overall: "A dermatology clinic in Nohyeong-dong offering skin care and laser treatments." },
      ja: { overall: "ノヒョン洞にある皮膚科。スキンケアとレーザー治療を提供。" }
    }
  },

  "wine": {
    id: "wine",
    region: "jeju-city",
    specialty: "dermatology",
    foreign_friendly: true,
    featured: false,
    name: { zh: "葡萄酒皮肤科", en: "Wine Dermatology", ja: "ワイン皮膚科" },
    name_ko: "와인피부과의원",
    address: {
      zh: "济州市 老衡洞",
      en: "Nohyeong-dong, Jeju City",
      ja: "済州市 ノヒョン洞"
    },
    phone: "064-712-6200",
    thumbnail: "images/wine-thumb.jpg",
    images: [],
    contact: { wechat: "", line: "", instagram: "" },
    chinese_staff: false,
    hours: {
      weekday: { zh: "10:00 - 19:00", en: "Mon–Fri 10:00–19:00", ja: "平日 10:00–19:00" },
      sat: { zh: "10:00 - 14:00", en: "Sat 10:00–14:00", ja: "土曜 10:00–14:00" },
      closed: { zh: "周日 休息", en: "Sun Closed", ja: "日曜 休診" }
    },
    lat: 33.4860, lng: 126.4810,
    platform_links: {
      naver: "https://map.naver.com/v5/search/와인피부과의원%20제주",
      google: "https://www.google.com/maps/search/와인피부과의원+제주",
      daum: "https://map.kakao.com/?q=와인피부과의원+제주"
    },
    specialties: {
      zh: ["皮肤美容", "激光治疗", "抗衰老"],
      en: ["Skin Aesthetics", "Laser Therapy", "Anti-aging"],
      ja: ["美容皮膚科", "レーザー治療", "アンチエイジング"]
    },
    type: "clinic",
    rating: 4.2, review_count: 78,
    review_summary: {
      zh: { overall: "老衡洞的皮肤科医院，提供多种皮肤美容服务。" },
      en: { overall: "A dermatology clinic in Nohyeong-dong offering various skin aesthetic services." },
      ja: { overall: "ノヒョン洞にある皮膚科。様々な美容皮膚科サービスを提供。" }
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
    rating: 4.1, review_count: 65,
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
    rating: 4.0, review_count: 58,
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
    rating: 4.2, review_count: 72,
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
    rating: 4.1, review_count: 68,
    review_summary: {
      zh: { overall: "老衡洞的整形外科兼皮肤科医院。" },
      en: { overall: "A plastic surgery and dermatology clinic in Nohyeong-dong." },
      ja: { overall: "ノヒョン洞にある整形外科・皮膚科。" }
    }
  }
};
