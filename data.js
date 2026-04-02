/* ================================================================
   data.js — 제주 리뷰 앱 데이터 파일 (다국어판 zh / en / ja)
   병원 추가/수정/콘텐츠 관리는 이 파일만 편집하면 됩니다.
   app-preview.html 코드는 건드리지 않아도 됩니다.
   ================================================================ */

/* ── UI 번역 문자열 ─────────────────────────────────────────── */
const T = {
  zh: {
    /* 탭바 */
    tab_home:      "首页",
    tab_hospitals: "医院",
    tab_contents:  "攻略",
    tab_me:        "我的",

    /* 홈 */
    home_title:    "济州岛医美指南",
    home_subtitle: "精选皮肤科 · 整形外科信息",
    home_pick:     "精选医院",
    home_latest:   "最新攻略",
    home_more:     "查看更多 →",

    /* 병원 목록 */
    hosp_search_ph: "搜索医院名称或项目",
    hosp_region_all:"全部地区",
    hosp_chinese:   "中文服务",
    hosp_reviews:   "条评论",
    hosp_empty:     "暂无符合条件的医院",

    /* 병원 상세 */
    detail_info:      "基本信息",
    detail_address:   "地址",
    detail_phone:     "电话",
    detail_hours:     "营业时间",
    detail_specialty: "主要项目",
    detail_reviews:   "评论总结",
    detail_overall:   "综合评价",
    detail_platforms: "平台评论",
    detail_pros:      "优点",
    detail_cons:      "注意事项",
    detail_cautions:  "综合建议",
    detail_highlights:"亮点",
    detail_contact:   "联系医院",
    detail_map:       "地图导航",
    detail_naver:     "Naver 地图",
    detail_google:    "Google 地图",
    detail_kakao:     "Kakao 地图",

    /* 연락 모달 – WeChat */
    modal_wechat_title: "微信咨询",
    modal_wechat_id:    "微信号",
    modal_wechat_copy:  "复制微信号",
    modal_wechat_note:  "请添加好友后直接发送咨询内容",
    modal_wechat_copied:"已复制！",

    /* 연락 모달 – LINE */
    modal_line_title:   "LINE 咨询",
    modal_line_id:      "LINE ID",
    modal_line_copy:    "复制 LINE ID",
    modal_line_note:    "请添加好友后直接发送咨询内容",
    modal_line_copied:  "已复制！",

    /* 연락 모달 – Instagram */
    modal_ig_title:     "Instagram 咨询",
    modal_ig_handle:    "Instagram",
    modal_ig_copy:      "复制帐号",
    modal_ig_note:      "请在 Instagram 发送 DM 咨询",
    modal_ig_copied:    "已复制！",

    /* 공통 모달 */
    modal_close:        "关闭",
    modal_wechat_btn:   "微信咨询",
    modal_line_btn:     "LINE 咨询",

    /* 콘텐츠 */
    contents_title:  "济州医美攻略",
    contents_empty:  "暂无文章",
    back:            "← 返回",

    /* 마이페이지 */
    me_title:        "我的收藏",
    me_empty:        "还没有收藏的医院",
    me_fav_tip:      "点击医院卡片上的 ♡ 可添加收藏",
    me_lang:         "语言设置",

    /* 별점/리뷰 */
    rating:          "评分",
    reviews:         "条评论",

    /* 영업시간 라벨 */
    hours_weekday:   "平日",
    hours_sat:       "周六",
    hours_closed:    "休息日",
    hours_timezone:  "韩国时间 (KST, UTC+9)",

    /* 인기시술 */
    home_popular:    "人气项目",

    /* 새로운 필드 */
    detail_payment:   "💳 结账方式",
    detail_languages: "🗣️ 语言服务",
    detail_doctor:    "👨‍⚕️ 医生信息",
    detail_booking:   "📞 预约方式",
    exchange_calc:    "💱 CNY 到 KRW 转换",
    exchange_rate:    "1 CNY ≈",
    exchange_krw:     "₩ (参考汇率)",

    /* 진료과목 그리드 */
    home_specialty:  "选择科目",
    spec_beauty:     "医美",
    spec_dental:     "牙科",
    spec_eye:        "眼科",
    spec_ent:        "耳鼻喉",
    spec_internal:   "内科",
    spec_neuro:      "神经科",
    spec_ortho:      "骨科",
    spec_pediatric:  "儿科",
    foreign_badge:   "外语服务",

    /* AI 시술 안내 탭 */
    tab_booking:      "医院信息",
    booking_title:    "医院信息查询",
    booking_intro:    "您可以按施术类别浏览济州岛的医院信息。\n本平台仅展示信息，不负责预约或中介服务。",
    booking_ask_spec: "请选择您感兴趣的项目类别：",
    booking_confirm:  "以下是济州岛相关医院的信息：",
    booking_placeholder: "请输入...",
    booking_send:     "发送",

    /* 가격 섹션 */
    detail_prices:    "参考价格",
    price_note:       "※ 以上为各机构提供的参考基准价，实际费用因施术组合及个人情况而异，请以机构实际报价为准。\n💱 价格单位为韩元(₩)，1元≈190₩ / 1USD≈1,380₩（汇率仅供参考）",

    /* 장소 유형 뱃지 */
    venue_clinic:     "医院",
    venue_skincare:   "美容护肤",
    venue_massage:    "按摩SPA",

    /* 진료과목 그리드 추가 */
    spec_skincare:    "皮肤护理",
    spec_massage:     "按摩SPA",

    /* 기능 필터 버튼 */
    spec_open_now:         "立即就诊",
    spec_foreign_official: "外国人许可",
    spec_popular:          "热门医院",
    spec_derm_cert:        "皮肤科专科",
    spec_oriental:         "韩医院",
    spec_other:            "其他医院",
  },

  en: {
    tab_home:      "Home",
    tab_hospitals: "Clinics",
    tab_contents:  "Guide",
    tab_me:        "My",    tab_booking:   "Info",
    detail_payment:   "💳 Payment Methods",
    detail_languages: "🗣️ Languages Spoken",
    detail_doctor:    "👨‍⚕️ Doctor Info",
    detail_booking:   "📞 How to Book",
    exchange_calc:    "💱 CNY to KRW Converter",
    exchange_rate:    "1 CNY ≈",
    exchange_krw:     "₩ (reference rate)",
    home_title:    "Jeju Medical Beauty Guide",
    home_subtitle: "Dermatology & Aesthetic Clinics",
    home_pick:     "Featured Clinics",
    home_latest:   "Latest Articles",
    home_more:     "See More →",

    hosp_search_ph: "Search clinic or treatment",
    hosp_region_all:"All Areas",
    hosp_chinese:   "Chinese Staff",
    hosp_reviews:   "reviews",
    hosp_empty:     "No clinics found",

    detail_info:      "Information",
    detail_address:   "Address",
    detail_phone:     "Phone",
    detail_hours:     "Hours",
    detail_specialty: "Specialties",
    detail_reviews:   "Review Summary",
    detail_overall:   "Overview",
    detail_platforms: "Platform Reviews",
    detail_pros:      "Pros",
    detail_cons:      "Cons",
    detail_cautions:  "Things to Note",
    detail_highlights:"Highlights",
    detail_contact:   "Contact Clinic",
    detail_map:       "Map",
    detail_naver:     "Naver Map",
    detail_google:    "Google Maps",
    detail_kakao:     "Kakao Map",

    modal_wechat_title: "WeChat Consultation",
    modal_wechat_id:    "WeChat ID",
    modal_wechat_copy:  "Copy WeChat ID",
    modal_wechat_note:  "Add as friend and send your inquiry directly",
    modal_wechat_copied:"Copied!",

    modal_line_title:   "LINE Consultation",
    modal_line_id:      "LINE ID",
    modal_line_copy:    "Copy LINE ID",
    modal_line_note:    "Add as friend and send your inquiry directly",
    modal_line_copied:  "Copied!",

    modal_ig_title:     "Instagram DM",
    modal_ig_handle:    "Instagram",
    modal_ig_copy:      "Copy Handle",
    modal_ig_note:      "Send a DM on Instagram to inquire",
    modal_ig_copied:    "Copied!",

    modal_close:        "Close",
    modal_wechat_btn:   "WeChat",
    modal_line_btn:     "LINE",

    contents_title:  "Jeju Medical Beauty Articles",
    contents_empty:  "No articles yet",
    back:            "← Back",

    me_title:        "My Favorites",
    me_empty:        "No saved clinics yet",
    me_fav_tip:      "Tap ♡ on a clinic card to save it",
    me_lang:         "Language",

    rating:          "Rating",
    reviews:         "reviews",

    hours_weekday:   "Weekday",
    hours_sat:       "Saturday",
    hours_closed:    "Closed",

    /* 인기시술 */
    home_popular:    "Popular Treatments",

    home_specialty:  "Browse by Specialty",
    spec_beauty:     "Beauty",
    spec_dental:     "Dental",
    spec_eye:        "Eye",
    spec_ent:        "ENT",
    spec_internal:   "Internal",
    spec_neuro:      "Neurology",
    spec_ortho:      "Orthopedics",
    spec_pediatric:  "Pediatrics",
    foreign_badge:   "Multilingual",

    tab_booking:     "Info",
    booking_title:    "Clinic Information Search",
    booking_intro:    "Browse clinics in Jeju by treatment category.\nPlease note: This platform provides information only and does not handle bookings or referrals.",
    booking_ask_spec: "What type of treatment are you interested in?",
    booking_confirm:  "Here are Jeju clinics that offer this treatment:",
    booking_placeholder: "Type here...",
    booking_send:     "Send",

    /* 가격 섹션 */
    detail_prices:    "Reference Prices",
    price_note:       "※ Prices above are reference figures provided by each venue. Actual cost varies by treatment combination. Please confirm with the venue directly.\n💱 Prices in KRW (₩). ~1 USD ≈ 1,380₩ (indicative rate)",

    /* 장소 유형 뱃지 */
    venue_clinic:     "Clinic",
    venue_skincare:   "Skincare",
    venue_massage:    "Massage",

    /* 진료과목 그리드 추가 */
    spec_skincare:    "Skincare",
    spec_massage:     "Massage",

    /* 기능 필터 버튼 */
    spec_open_now:         "Open Now",
    spec_foreign_official: "Int'l Certified",
    spec_popular:          "Popular",
    spec_derm_cert:        "Derm Specialist",
    spec_oriental:         "Oriental Med",
    spec_other:            "Other Clinics",
  },

  ja: {
    tab_home:      "ホーム",
    tab_hospitals: "クリニック",
    tab_contents:  "ガイド",
    tab_me:        "マイページ",    tab_booking:   "情報",
    detail_payment:   "💳 決済方法",
    detail_languages: "🗣️ 言語対応",
    detail_doctor:    "👨‍⚕️ 医師情報",
    detail_booking:   "📞 予約方法",
    exchange_calc:    "💱 CNY から KRW へ",
    exchange_rate:    "1 CNY ≈",
    exchange_krw:     "₩ (参考レート)",
    home_title:    "済州島 医療美容ガイド",
    home_subtitle: "皮膚科・整形外科 厳選情報",
    home_pick:     "おすすめクリニック",
    home_latest:   "最新記事",
    home_more:     "もっと見る →",

    hosp_search_ph: "クリニック名・施術を検索",
    hosp_region_all:"全エリア",
    hosp_chinese:   "中国語スタッフ",
    hosp_reviews:   "件のクチコミ",
    hosp_empty:     "該当するクリニックはありません",

    detail_info:      "基本情報",
    detail_address:   "住所",
    detail_phone:     "電話",
    detail_hours:     "営業時間",
    detail_specialty: "主な施術",
    detail_reviews:   "クチコミまとめ",
    detail_overall:   "総合評価",
    detail_platforms: "プラットフォーム別",
    detail_pros:      "良い点",
    detail_cons:      "気になる点",
    detail_cautions:  "注意事項",
    detail_highlights:"ポイント",
    detail_contact:   "クリニックに相談",
    detail_map:       "地図",
    detail_naver:     "Naver マップ",
    detail_google:    "Google マップ",
    detail_kakao:     "Kakao マップ",

    modal_wechat_title: "WeChat 相談",
    modal_wechat_id:    "WeChat ID",
    modal_wechat_copy:  "WeChat ID をコピー",
    modal_wechat_note:  "友達追加後、直接ご相談内容をお送りください",
    modal_wechat_copied:"コピーしました！",

    modal_line_title:   "LINE 相談",
    modal_line_id:      "LINE ID",
    modal_line_copy:    "LINE ID をコピー",
    modal_line_note:    "友達追加後、直接ご相談内容をお送りください",
    modal_line_copied:  "コピーしました！",

    modal_ig_title:     "Instagram DM",
    modal_ig_handle:    "Instagram",
    modal_ig_copy:      "アカウントをコピー",
    modal_ig_note:      "InstagramのDMでお問い合わせください",
    modal_ig_copied:    "コピーしました！",

    modal_close:        "閉じる",
    modal_wechat_btn:   "WeChat",
    modal_line_btn:     "LINE",

    contents_title:  "済州医療美容 記事",
    contents_empty:  "記事がありません",
    back:            "← 戻る",

    me_title:        "お気に入り",
    me_empty:        "保存したクリニックはありません",
    me_fav_tip:      "クリニックカードの ♡ をタップして保存",
    me_lang:         "言語設定",

    rating:          "評価",
    reviews:         "件",

    hours_weekday:   "平日",
    hours_sat:       "土曜",
    hours_closed:    "定休日",

    /* 인기시술 */
    home_popular:    "人気施術",

    home_specialty:  "診療科目で探す",
    spec_beauty:     "医美",
    spec_dental:     "歯科",
    spec_eye:        "眼科",
    spec_ent:        "耳鼻科",
    spec_internal:   "内科",
    spec_neuro:      "神経科",
    spec_ortho:      "整形外科",
    spec_pediatric:  "小児科",
    foreign_badge:   "多言語対応",

    tab_booking:     "情報",
    booking_title:    "クリニック情報検索",
    booking_intro:    "施術カテゴリ別に済州島のクリニック情報をご覧いただけます。\n本プラットフォームは情報提供のみで、予約や紹介業務は行いません。",
    booking_ask_spec: "ご興味のある施術カテゴリを選んでください：",
    booking_confirm:  "済州島でこの施術を提供しているクリニック一覧です：",
    booking_placeholder: "入力してください...",
    booking_send:     "送信",

    /* 가격 섹션 */
    detail_prices:    "参考料金",
    price_note:       "※ 表示価格は各施設が提供する参考価格です。施術の組み合わせ等により実際の料金は異なります。必ず施設に直接ご確認ください。\n💱 価格は韓国ウォン(₩)表記です。1円≈9.2₩（参考レート）",

    /* 장소 유형 뱃지 */
    venue_clinic:     "クリニック",
    venue_skincare:   "スキンケア",
    venue_massage:    "マッサージ",

    /* 진료과목 그리드 추가 */
    spec_skincare:    "スキンケア",
    spec_massage:     "マッサージ",

    /* 기능 필터 버튼 */
    spec_open_now:         "今すぐ診療",
    spec_foreign_official: "外国人許可",
    spec_popular:          "人気医院",
    spec_derm_cert:        "皮膚科専門医",
    spec_oriental:         "漢方医院",
    spec_other:            "その他医院",
  }
};

/* ── 지역 레이블 ─────────────────────────────────────────────── */
const REGION = {
  zh: { all:"全部地区", "jeju-city":"济州市", seogwipo:"西归浦市" },
  en: { all:"All Areas", "jeju-city":"Jeju City", seogwipo:"Seogwipo" },
  ja: { all:"全エリア", "jeju-city":"済州市", seogwipo:"西帰浦市" }
};

/* ── 병원 + 콘텐츠 DB ────────────────────────────────────────── */
const DB = {
  hospitals:[
    {
      id:"areumd", region:"jeju-city",
      specialty:"dermatology",
      foreign_friendly:true,      /* 언어 응대 가능 여부 (기존) */
      foreign_official:false,      /* 외국인 의료관광 유치업자 허가 여부 (추후 확보 시 true로 변경) */
      specialist_cert:"dermatology", /* 전문의 여부: "dermatology"|"plastic"|"dental"|"eye"|null */
      featured:true,
      name:{
        zh:"老衡美丽皮肤科",
        en:"Areumdaun Dermatology (Noheung)",
        ja:"ノヒョン アルムダウン皮膚科"
      },
      name_ko:"아름다운피부과의원",
      address:{
        zh:"济州市 老衡洞 道令路5号 明恩大厦 2·3·5层（老衡五岔路口）",
        en:"Myeongeun Bldg. 2·3·5F, 5 Doryeong-ro, Nohyeong-dong, Jeju City (Nohyeong 5-way Intersection)",
        ja:"済州市 ノヒョン洞 ドリョン路5番 ミョンウンビル 2·3·5階（ノヒョン五叉路）"
      },
      phone:"064-746-7114",
      youtube_url:"https://youtu.be/JFzieBvayOM",
      thumbnail:"images/areumd-thumb.jpg",
      images:["images/areumd-1.jpg","images/areumd-2.jpg"],
      contact:{
        wechat:"jejubtskin",
        line:"",
        instagram:""
      },
      chinese_staff:true,
      hours:{
        weekday:{zh:"平日 10:00 - 19:00", en:"Mon–Fri 10:00–19:00", ja:"平日 10:00–19:00"},
        sat:    {zh:"周六 10:00 - 14:00", en:"Sat 10:00–14:00",    ja:"土曜 10:00–14:00"},
        closed: {zh:"周日 · 公假 休息",   en:"Sun & Holidays Closed", ja:"日曜・祝日 休診"}
      },
      lat:33.4882, lng:126.4827,
      platform_links:{
        naver:"https://map.naver.com/v5/search/아름다운피부과의원%20노형",
        google:"https://www.google.com/maps/search/아름다운피부과의원+제주+노형",
        daum:"https://map.kakao.com/?q=노형아름다운피부과"
      },
      specialties:{
        zh:["激光色素","抗衰提拉","痘痘管理","注射美容"],
        en:["Laser Pigmentation","Anti-aging Lifting","Acne Care","Filler & Botox"],
        ja:["レーザー色素治療","エイジングケア","ニキビ管理","注射美容"]
      },
      type:"clinic",
      rating:4.6, review_count:390,
      /* ── 新增字段 ── */
      payment_methods:{
        zh:["现场刷卡（VISA/MC）","现场现金","国际银行转账（咨询后）"],
        en:["On-site: Card (VISA/MC)","On-site: Cash","Bank transfer (by arrangement)"],
        ja:["現地決済：カード（VISA/MC）","現地決済：現金","国際送金（相談後）"]
      },
      booking_method:{
        zh:"电话优先（中文咨询可用），也支持 WeChat 预询",
        en:"Phone recommended (Chinese staff available), WeChat inquiry welcome",
        ja:"電話推奨（中文対応可）、WeChat問合せ可"
      },
      languages_supported:{
        zh:"韩语·中文（流利）·日语（基础）",
        en:"Korean, Chinese (fluent), Japanese (basic)",
        ja:"韓国語、中国語（流暢）、日本語（基本）"
      },
      doctor_info:{
        zh:"3名皮肤科专科医师（其中1名医学博士），10年以上临床经验",
        en:"3 board-certified dermatologists (1 with PhD), 10+ yrs clinical experience",
        ja:"皮膚科専門医3名（博士1名）、臨床経験10年以上"
      },
      prices:[
        {name:{zh:"激光托宁",           en:"Laser Toning",              ja:"レーザートーニング"},     price:"50,000원~"},
        {name:{zh:"Thermage FLX",      en:"Thermage FLX",              ja:"Thermage FLX"},          price:"500,000원~"},
        {name:{zh:"肉毒素（小）",       en:"Botox (small area)",        ja:"ボトックス（小）"},        price:"50,000원~"},
        {name:{zh:"玻尿酸填充",         en:"Hyaluronic Acid Filler",    ja:"ヒアルロン酸フィラー"},   price:"200,000원~"},
      ],
      review_summary:{
        zh:{
          overall:"4位皮肤科专科医师（医学博士）坐诊。主打「个性化抗衰老矫正」方案——医生1对1诊断，每次结合多种最新设备复合施术。评论中反复出现「说明详细、专业感强」的评价，是济州市区口碑稳定的皮肤科之一。",
          highlights:["4位专科医师坐诊","个人定制方案","复合施术体系","老衡市区交通便利"],
          platforms:{
            naver:{
              source:"Naver 地图", count_hint:"约 320 条",
              summary:"Naver评论以记录型长文为主，较多描述「医生说明清楚」「复合施术效果」「预约流程」等体验细节。评论者多为当地居民，复诊记录占比高，对色素激光（去斑）和痘痘管理项目评价集中。",
              keywords:["说明清楚","专科医生","激光托宁","痘痘","复诊","等待"],
              pros:["4位专科医生各有分工，专业感明显","医生1对1诊断，针对个人皮肤状态制定方案","色素管理和痘痘治疗评论数量多，口碑稳定","位于老衡五岔路口，济州市内交通便利"],
              cons:["人气时段（周末午前）等待时间可能较长","复合施术项目较多，初诊时间会相应增加"],
              cautions:["部分评论来自复诊患者，短期体验感可能不同","激光效果因肤质不同而存在差异，建议综合多条评论判断"]
            },
            google:{
              source:"Google Maps", count_hint:"约 50 条",
              summary:"Google评论以简短评分为主，整体评分偏高。外国旅客评论中出现「staff was helpful」「clean clinic」等关键词。适合快速了解总体口碑方向，细节建议搭配Naver评论阅读。",
              keywords:["干净","友善","专业","满意"],
              pros:["整体评分较高，口碑方向正面","有外国患者评论，说明接待外国人有一定经验"],
              cons:["评论细节较少，个别体验难以判断"],
              cautions:["Google评论数量相对少，建议搭配Naver长评获取更多细节"]
            },
            daum:{
              source:"Kakao Map", count_hint:"约 20 条",
              summary:"Kakao Map评论数量较少，以简短印象为主。部分评论提到「交通方便」「预约顺畅」等实际体验信息，适合作为补充参考。",
              keywords:["交通","预约","满意"],
              pros:["可验证交通便利性等实际信息"],
              cons:["样本量小，代表性有限"],
              cautions:["评论数量少时，个别极端体验会放大影响，请综合判断"]
            }
          }
        },
        en:{
          overall:"Four board-certified dermatologists on staff. The clinic specialises in personalised anti-ageing protocols—each visit includes a one-on-one physician consultation followed by combination laser treatments tailored to the patient's skin condition. Reviewers consistently highlight detailed explanations and a high level of professionalism.",
          highlights:["4 board-certified dermatologists","Personalised treatment plans","Combination laser protocols","Convenient location in Jeju City"],
          platforms:{
            naver:{
              source:"Naver Map", count_hint:"~320 reviews",
              summary:"Naver reviews are mostly detailed long-form posts describing the consultation process, laser outcomes, and wait times. Reviewers are predominantly local residents with multiple return visits. Pigmentation lasers and acne treatments receive the most mentions.",
              keywords:["thorough explanation","specialist","laser toning","acne","repeat visit","wait"],
              pros:["4 specialists each with distinct expertise","1-on-1 physician consultation tailored to skin condition","Strong track record in pigmentation and acne care","Easy access at Nohyeong 5-way intersection"],
              cons:["Possible wait during peak hours (weekend mornings)","Combination treatments may lengthen first-visit duration"],
              cautions:["Many reviewers are repeat patients; single-visit experience may differ","Laser results vary by skin type—read multiple reviews before deciding"]
            },
            google:{
              source:"Google Maps", count_hint:"~50 reviews",
              summary:"Google reviews are mostly brief ratings. Overall score is high. Foreign visitor reviews mention 'staff was helpful' and 'clean clinic'. Good for a quick sense of overall reputation; read Naver reviews for details.",
              keywords:["clean","friendly","professional","satisfied"],
              pros:["High overall rating","Foreign patient reviews indicate experience with international visitors"],
              cons:["Limited detail in reviews"],
              cautions:["Fewer reviews—combine with Naver for a fuller picture"]
            },
            daum:{
              source:"Kakao Map", count_hint:"~20 reviews",
              summary:"Few reviews, mostly brief impressions. Some mention convenient transport and smooth booking—useful as a supplementary reference.",
              keywords:["transport","booking","satisfied"],
              pros:["Corroborates location convenience"],
              cons:["Small sample size"],
              cautions:["Low volume means outlier reviews carry disproportionate weight"]
            }
          }
        },
        ja:{
          overall:"皮膚科専門医4名が在籍。「個別最適化アンチエイジング」を掲げ、医師が1対1で診察し、その都度複数の最新機器を組み合わせた複合施術を提供。口コミには「説明が丁寧」「専門性が高い」との記述が多く、済州市内で安定した評判を持つ皮膚科のひとつ。",
          highlights:["専門医4名在籍","個別カスタマイズプラン","複合施術体制","ノヒョン市街地・アクセス良好"],
          platforms:{
            naver:{
              source:"Naver マップ", count_hint:"約320件",
              summary:"Naverの口コミは記録型の長文が中心で、「医師の説明が丁寧」「複合施術の効果」「予約の流れ」などの体験詳細が多く書かれています。投稿者の多くは地元在住者で再診率も高め。色素レーザー（シミ取り）とニキビ管理の評価が特に集中しています。",
              keywords:["説明が丁寧","専門医","レーザートーニング","ニキビ","再診","待ち時間"],
              pros:["4名の専門医がそれぞれ専門分野を担当","医師による1対1の診察でスキン状態に合わせたプラン策定","色素管理・ニキビ治療の口コミ数が多く安定した評判","ノヒョン五叉路に位置し市内からのアクセスが便利"],
              cons:["人気時間帯（週末午前）は待ち時間が長くなる場合あり","複合施術メニューが多く初診は時間がかかることも"],
              cautions:["口コミの多くは再診患者によるもの。初回体験とは異なる場合があります","レーザーの効果は肌質によって差があります。複数の口コミを参考に判断してください"]
            },
            google:{
              source:"Google マップ", count_hint:"約50件",
              summary:"Googleの口コミは短い評価が中心で全体的にスコアは高め。外国人旅行者の口コミに「staff was helpful」「clean clinic」などのキーワードが見られます。全体的な評判を把握するのに適しており、詳細はNaver口コミと合わせて確認を。",
              keywords:["清潔","親切","専門的","満足"],
              pros:["全体評価が高く口コミの方向性はポジティブ","外国人患者の口コミあり。外国人対応の経験が伺えます"],
              cons:["口コミの詳細が少なく個別体験の判断は難しい"],
              cautions:["件数が少ないためNaverの長文口コミと合わせて確認することを推奨"]
            },
            daum:{
              source:"Kakao マップ", count_hint:"約20件",
              summary:"口コミ数は少なく短い印象記述が中心。「交通が便利」「予約がスムーズ」などの実用的な情報が一部含まれており、補足的な参考情報として活用できます。",
              keywords:["交通","予約","満足"],
              pros:["アクセスの利便性を裏付ける情報あり"],
              cons:["サンプル数が少なく代表性に限界あり"],
              cautions:["件数が少ない場合、一部の極端な体験が影響を与えやすいため総合的に判断してください"]
            }
          }
        }
      }
    },
    {
      id:"bellemorn", region:"seogwipo",
      specialty:"plastic-surgery", foreign_friendly:true, featured:true,
      name:{
        zh:"贝勒蒙整形外科（神话世界）",
        en:"Bellemorn Plastic Surgery (Shinhwa World)",
        ja:"ベルモン整形外科（神話ワールド）"
      },
      name_ko:"벨르몬성형외과의원",
      address:{
        zh:"西归浦市 神话世界 Landing馆 神话购物街",
        en:"Shinhwa World Landing Hall, Shinhwa Shopping Street, Seogwipo",
        ja:"西帰浦市 神話ワールド ランディングホール 神話ショッピングストリート"
      },
      phone:"064-792-5050",
      thumbnail:"images/bellemorn-thumb.jpg",
      images:["images/bellemorn-1.jpg","images/bellemorn-2.jpg"],
      contact:{
        wechat:"jeju-bm",
        line:"",
        instagram:""
      },
      chinese_staff:true,
      hours:{
        weekday:{zh:"10:00 - 19:00（周二起）", en:"10:00–19:00 (Tue–Fri)", ja:"10:00–19:00（火〜金）"},
        sat:    {zh:"10:00 - 19:00（含公假）", en:"10:00–19:00 (incl. holidays)", ja:"10:00–19:00（祝日含む）"},
        closed: {zh:"周日 · 周一 休息 ｜ 须提前预约", en:"Sun & Mon Closed | Appointment required", ja:"日・月 休診 ｜ 要予約"}
      },
      lat:33.3029, lng:126.2914,
      platform_links:{
        naver:"https://map.naver.com/v5/search/벨르몬성형외과",
        google:"https://www.google.com/maps/search/벨르몬성형외과+서귀포",
        daum:"https://map.kakao.com/?q=벨르몬성형외과"
      },
      specialties:{
        zh:["提拉紧致","Thermage FLX","Ulthera","注射美容"],
        en:["Lifting & Tightening","Thermage FLX","Ulthera","Filler & Botox"],
        ja:["リフティング","Thermage FLX","Ulthera","注射美容"]
      },
      type:"clinic",
      rating:4.7, review_count:180,
      /* ── 新增字段 ── */
      payment_methods:{
        zh:["现场刷卡（VISA/MC/银联）","现场现金（KRW）"],
        en:["On-site: Card (VISA/MC/UnionPay)","On-site: Cash (KRW)"],
        ja:["現地決済：カード（VISA/MC/UnionPay）","現地決済：現金（KRW）"]
      },
      booking_method:{
        zh:"建议电话预约（中英文可）或 WeChat，需确认营业日期",
        en:"Phone recommended (Korean/English), WeChat welcome. Confirm operating days.",
        ja:"電話推奨（韓国語/英語対応）、WeChat可。営業日確認必須。"
      },
      languages_supported:{
        zh:"韩语·中文（院长及主要咨询师）·英文（基础）",
        en:"Korean, Chinese (director & main staff), English (basic)",
        ja:"韓国語、中国語（院長・主要スタッフ）、英語（基本）"
      },
      doctor_info:{
        zh:"院长为整形外科专科医师，15年以上临床经验，专攻非手术提拉",
        en:"Director: board-certified plastic surgeon, 15+ yrs, specialist in non-surgical lifting",
        ja:"院長：整形外科専門医、臨床経験15年以上、非手術リフティング専門"
      },
      prices:[
        {name:{zh:"Thermage FLX",      en:"Thermage FLX",              ja:"Thermage FLX"},          price:"500,000원~"},
        {name:{zh:"Ulthera（全脸）",    en:"Ulthera (full face)",       ja:"Ulthera（フルフェイス）"}, price:"600,000원~"},
        {name:{zh:"Rejuran HB",        en:"Rejuran HB",                ja:"Rejuran HB"},             price:"250,000원~"},
        {name:{zh:"肉毒素",             en:"Botox",                     ja:"ボトックス"},              price:"60,000원~"},
      ],
      review_summary:{
        zh:{
          overall:"位于济州神话世界内的整形外科，主理医生全程亲自诊断施术，以「非流水线」精品诊所为定位。主打Thermage FLX+Ulthera联合提拉、Rejuran HB+水光注射等项目。评论中反复出现「院长亲自细致说明」「私密单人护理室」「公假也能来」等关键词。",
          highlights:["院长亲自诊断施术","私密单人护理室","公假正常营业","神话世界免费停车"],
          platforms:{
            naver:{
              source:"Naver 地图", count_hint:"约 120 条",
              summary:"Naver评论集中描述「院长亲自细致说明、非流水线体验」以及具体施术感受。Rejuran HB和Thermage+Ulthera联合提拉项目评论最多，高频出现「满意」「下次还来」。也有提到「西归浦较远」「需要提前预约」的实用注意事项。",
              keywords:["院长直接诊察","细致说明","Thermage","提拉","Rejuran","私密"],
              pros:["院长全程亲自诊察施术，非助手代劳","每次有个人专属护理室，私密性高","周六及公假正常营业，旅游途中可安排","神话世界内部停车免费且方便"],
              cons:["位于西归浦神话世界，从济州市区需约50~60分钟","100%预约制，当天突然来访无法接诊","月/日固定休息，需提前确认"],
              cautions:["Thermage、Ulthera等提拉项目效果因年龄和皮肤状态存在较大个体差异","提拉效果一般需要1~3个月逐渐显现，不适合对即时效果有强烈期待的情况","价格因施术组合不同差异较大，建议先咨询确认"]
            },
            google:{
              source:"Google Maps", count_hint:"约 40 条",
              summary:"Google评论整体评分偏高，简短评价中多出现「professional」「great experience」等正面词汇。有外国旅客留下英文评论，说明接待外国患者有一定经验。",
              keywords:["professional","满意","友善","神话世界"],
              pros:["外国患者评论说明有接诊外国人的经验","整体评分偏高，口碑方向正面"],
              cons:["英文评论较少细节，难以做深入判断"],
              cautions:["Google评论细节不足，建议搭配Naver评论综合阅读"]
            },
            daum:{
              source:"Kakao Map", count_hint:"约 20 条",
              summary:"Kakao Map评论数量较少，出现「神话世界停车方便」「预约顺畅」等实用信息。可作为核实交通和预约体验的参考来源。",
              keywords:["停车","预约","位置"],
              pros:["停车便利性有多条评论印证"],
              cons:["样本量少，整体代表性有限"],
              cautions:["评论数量少时不适合单独作为判断依据，请结合Naver评论使用"]
            }
          }
        },
        en:{
          overall:"A boutique plastic surgery clinic inside Jeju Shinhwa World. The director personally handles all consultations and procedures—no delegation to assistants. Signature treatments include Thermage FLX + Ulthera combination lifting and Rejuran HB + skin booster injections. Reviews repeatedly highlight detailed physician explanations, private treatment rooms, and availability on public holidays.",
          highlights:["Director performs all procedures","Private single-patient rooms","Open on public holidays","Free parking at Shinhwa World"],
          platforms:{
            naver:{
              source:"Naver Map", count_hint:"~120 reviews",
              summary:"Naver reviews focus on the non-assembly-line experience and detailed physician explanations. Rejuran HB and Thermage+Ulthera lifting receive the most mentions, with frequent phrases like 'very satisfied' and 'will return'. Practical notes about the distance from Jeju City and the need to pre-book also appear.",
              keywords:["director consults personally","detailed explanation","Thermage","lifting","Rejuran","private"],
              pros:["Director personally consults and performs all procedures","Private treatment room for every patient","Open Saturdays and public holidays—bookable during trips","Free and convenient parking inside Shinhwa World"],
              cons:["~50–60 min from Jeju City centre","100% appointment-only; walk-ins not accepted","Fixed weekly closures—confirm before visiting"],
              cautions:["Lifting results (Thermage, Ulthera) vary significantly with age and skin laxity","Effects typically appear over 1–3 months; not suited for immediate-result expectations","Pricing varies by treatment combination—request a quote before booking"]
            },
            google:{
              source:"Google Maps", count_hint:"~40 reviews",
              summary:"High overall rating with brief positive reviews including 'professional' and 'great experience'. Foreign visitor reviews indicate international patient experience.",
              keywords:["professional","satisfied","friendly","Shinhwa World"],
              pros:["Foreign patient reviews present—international experience evident","High overall score"],
              cons:["Limited detail in English reviews"],
              cautions:["Supplement with Naver reviews for deeper insight"]
            },
            daum:{
              source:"Kakao Map", count_hint:"~20 reviews",
              summary:"Few reviews. Mentions of convenient Shinhwa World parking and smooth appointment booking. Useful for confirming logistics.",
              keywords:["parking","booking","location"],
              pros:["Parking convenience corroborated by multiple reviews"],
              cons:["Small sample; limited representativeness"],
              cautions:["Use alongside Naver reviews rather than as a standalone reference"]
            }
          }
        },
        ja:{
          overall:"済州神話ワールド内に位置する整形外科。院長が全診察・施術を直接担当する「非量産型」のプレミアムクリニックをコンセプトに掲げています。Thermage FLX+Ulthera複合リフティング、Rejuran HB+水光注射などが主力メニュー。口コミには「院長が丁寧に説明してくれた」「完全個室のケアルーム」「祝日も来られる」といったキーワードが繰り返し登場します。",
          highlights:["院長が全施術を直接担当","完全個室のケアルーム","祝日も営業","神話ワールド無料駐車"],
          platforms:{
            naver:{
              source:"Naver マップ", count_hint:"約120件",
              summary:"Naverの口コミは「院長が直接丁寧に説明してくれる・流れ作業でない体験」と具体的な施術感想が中心。Rejuran HBとThermage+Ulthera複合リフティングの言及が最も多く「大満足」「また来たい」が頻出。「西帰浦は遠い」「要事前予約」といった実用的な注意情報も見られます。",
              keywords:["院長が直接診察","丁寧な説明","Thermage","リフティング","Rejuran","完全個室"],
              pros:["院長が全診察・施術を直接担当（スタッフ代行なし）","毎回専用の個室ケアルームで施術","土曜・祝日も通常営業でき、旅行中でも予定を組みやすい","神話ワールド内は無料駐車で便利"],
              cons:["済州市中心部から車で約50〜60分かかる","完全予約制。当日の飛び込みは対応不可","曜日固定の休診日あり。訪問前に必ず確認を"],
              cautions:["ThermageやUltheraなどのリフティング効果は年齢・肌のたるみ具合で個人差が大きい","リフティング効果は通常1〜3ヶ月かけて現れるため、即効性を強く期待している場合は注意","施術の組み合わせによって料金が大きく異なるため、事前に見積もりの確認を推奨"]
            },
            google:{
              source:"Google マップ", count_hint:"約40件",
              summary:"全体評価は高め。「professional」「great experience」などポジティブな短評が多い。外国人旅行者の英文口コミもあり外国人対応の経験が伺えます。",
              keywords:["professional","満足","親切","神話ワールド"],
              pros:["外国人患者の口コミあり・国際対応の実績が伺える","全体評価が高くポジティブな方向性"],
              cons:["英文口コミは詳細が少なく深い判断は難しい"],
              cautions:["Naverの口コミと合わせて参照することを推奨"]
            },
            daum:{
              source:"Kakao マップ", count_hint:"約20件",
              summary:"口コミ数は少なめ。「神話ワールドの駐車が便利」「予約がスムーズ」などの実用情報が確認できます。交通・予約体験の裏付けとして活用できます。",
              keywords:["駐車","予約","場所"],
              pros:["駐車の利便性を複数の口コミが裏付け"],
              cons:["サンプル数が少なく代表性に限界あり"],
              cautions:["件数が少ないためNaver口コミと併用して判断してください"]
            }
          }
        }
      }
    },
    /* ─── 스킨케어샵 ─────────────────────────────── */
    {
      id:"jejuskinlab", type:"skincare",
      region:"jeju-city",
      specialty:"skincare", foreign_friendly:true, featured:true,
      name:{
        zh:"济州清透皮肤护理",
        en:"Jeju Skin Lab",
        ja:"済州スキンラボ"
      },
      name_ko:"제주스킨랩",
      address:{
        zh:"济州市 老衡洞 道令路 附近（具体地址预约后告知）",
        en:"Near Doryeong-ro, Nohyeong-dong, Jeju City (exact address provided upon booking)",
        ja:"済州市 ノヒョン洞 ドリョン路付近（詳細住所は予約後お知らせ）"
      },
      phone:"064-000-0000",
      thumbnail:"images/jejuskinlab-thumb.jpg",
      images:["images/jejuskinlab-1.jpg","images/jejuskinlab-2.jpg"],
      contact:{wechat:"jejuskinlab", line:"jejuskinlab", instagram:"jejuskinlab"},
      chinese_staff:true,
      hours:{
        weekday:{zh:"10:00 - 20:00", en:"10:00–20:00", ja:"10:00–20:00"},
        sat:    {zh:"10:00 - 18:00", en:"10:00–18:00", ja:"10:00–18:00"},
        closed: {zh:"周日 休息",      en:"Closed Sunday", ja:"日曜 休み"}
      },
      lat:33.4882, lng:126.4827,
      platform_links:{
        naver:"https://map.naver.com/v5/search/제주스킨랩",
        google:"https://www.google.com/maps/search/제주스킨랩",
        daum:"https://map.kakao.com/?q=제주스킨랩"
      },
      specialties:{
        zh:["基础护理","深层清洁","保湿集中护理","背部护理"],
        en:["Basic Facial","Deep Cleansing","Intensive Hydration","Back Care"],
        ja:["ベーシックケア","ディープクレンジング","集中保湿ケア","バックケア"]
      },
      prices:[
        {name:{zh:"基础护理 60分钟",    en:"Basic Facial 60 min",           ja:"ベーシックケア 60分"},     price:"70,000원"},
        {name:{zh:"深层清洁 75分钟",    en:"Deep Cleansing 75 min",         ja:"ディープクレンジング 75分"}, price:"80,000원"},
        {name:{zh:"保湿集中护理 60分钟", en:"Intensive Hydration 60 min",    ja:"集中保湿ケア 60分"},        price:"80,000원"},
        {name:{zh:"背部护理 60分钟",    en:"Back Care 60 min",              ja:"バックケア 60分"},          price:"90,000원"},
      ],
      rating:4.5, review_count:120,
      review_summary:{
        zh:{overall:"位于济州市老衡洞的皮肤护理工作室。中文服务对应，设施干净整洁，以温和专业的护理体验著称。适合旅行途中想要放松皮肤护理的外国旅客。"},
        en:{overall:"A skincare studio in Nohyeong-dong, Jeju City. Chinese-speaking staff available. Known for its clean facilities and professional yet relaxing facials, popular with international visitors."},
        ja:{overall:"済州市ノヒョン洞にあるスキンケアサロン。中国語対応スタッフが在籍。清潔な施設と丁寧な施術が外国人旅行者に好評。旅行中のリラクゼーションにも最適。"}
      }
    },

    /* ─── 마사지샵 ─────────────────────────────── */
    {
      id:"jejuhealing", type:"massage",
      region:"jeju-city",
      specialty:"massage", foreign_friendly:true, featured:false,
      name:{
        zh:"济州岛疗愈按摩",
        en:"Jeju Healing Massage",
        ja:"済州ヒーリングマッサージ"
      },
      name_ko:"제주힐링마사지",
      address:{
        zh:"济州市 莲洞 中央路附近（具体地址预约后告知）",
        en:"Near Jungang-ro, Yeon-dong, Jeju City (exact address provided upon booking)",
        ja:"済州市 蓮洞 中央路付近（詳細住所は予約後お知らせ）"
      },
      phone:"064-000-1111",
      thumbnail:"images/jejuhealing-thumb.jpg",
      images:[],
      contact:{wechat:"jejuhealing", line:"", instagram:""},
      chinese_staff:false,
      hours:{
        weekday:{zh:"11:00 - 22:00", en:"11:00–22:00", ja:"11:00–22:00"},
        sat:    {zh:"10:00 - 22:00", en:"10:00–22:00", ja:"10:00–22:00"},
        closed: {zh:"全年无休",       en:"Open every day", ja:"年中無休"}
      },
      lat:33.4970, lng:126.5295,
      platform_links:{
        naver:"https://map.naver.com/v5/search/제주힐링마사지",
        google:"https://www.google.com/maps/search/제주힐링마사지",
        daum:"https://map.kakao.com/?q=제주힐링마사지"
      },
      specialties:{
        zh:["瑞典式按摩","芳香疗法","热石按摩","足部反射疗法"],
        en:["Swedish Massage","Aromatherapy","Hot Stone","Reflexology"],
        ja:["スウェーディッシュ","アロマセラピー","ホットストーン","リフレクソロジー"]
      },
      prices:[
        {name:{zh:"瑞典式按摩 60分钟",    en:"Swedish Massage 60 min",    ja:"スウェーディッシュ 60分"},   price:"80,000원"},
        {name:{zh:"芳香疗法 90分钟",      en:"Aromatherapy 90 min",       ja:"アロマセラピー 90分"},        price:"120,000원"},
        {name:{zh:"热石按摩 90分钟",      en:"Hot Stone Massage 90 min",  ja:"ホットストーンマッサージ 90分"}, price:"130,000원"},
        {name:{zh:"足部反射疗法 60分钟",  en:"Reflexology 60 min",        ja:"リフレクソロジー 60分"},      price:"70,000원"},
      ],
      rating:4.4, review_count:85,
      review_summary:{
        zh:{overall:"位于济州市莲洞，以合理的价格提供多种按摩菜单。非常适合旅行途中想要放松疲惫身体的旅客。"},
        en:{overall:"Located in Yeon-dong, Jeju City. Offers a variety of massage treatments at reasonable prices. Popular with tourists seeking relaxation after a busy day of sightseeing."},
        ja:{overall:"済州市蓮洞に位置。手頃な価格で多彩なマッサージメニューを提供。観光疲れを癒したい旅行者に人気。"}
      }
    }
  ],

  contents:[
    {
      id:"c-001",
      category:{ zh:"选择指南", en:"Clinic Guide", ja:"選び方ガイド" },
      thumbnail:"https://picsum.photos/seed/jeju-clinic/600/360",
      excerpt:{
        zh:"选医院前必读：5个关键点帮你规避风险、选到适合自己的皮肤科或整形外科。",
        en:"5 essential checks before booking a clinic in Jeju — credentials, devices, reviews, and more.",
        ja:"済州のクリニック選びで失敗しないための5つのチェックポイントを徹底解説。"
      },
      title:{
        zh:"在济州选择皮肤科 / 整形外科的5个要点",
        en:"5 Key Points for Choosing a Clinic in Jeju",
        ja:"済州で皮膚科・整形外科を選ぶ5つのポイント"
      },
      published_at:"2026-03-10",
      body:{
        zh:`<h2>① 确认医生资质</h2>
<p>皮肤科专科医生（피부과전문의）和整形外科专科医生（성형외과전문의）是韩国正式认证的专科资格，建议优先选择持有此资质的院长亲自施术的机构。</p>
<img src="https://picsum.photos/seed/jeju-doctor/600/320" alt="医生资质确认" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>② 了解施术设备</h2>
<p>正品Thermage FLX、Ulthera等设备均有唯一序列号，可在各品牌官网查验。在预约前直接询问「设备型号是什么？」是完全合理的。</p>
<h2>③ 综合参考多平台评论</h2>
<p>Naver评论内容详细，Google评论直观易读，Kakao Map适合核实位置和营业时间。三平台结合使用，判断更全面。</p>
<img src="https://picsum.photos/seed/jeju-review/600/280" alt="评论平台比较" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>④ 确认「院长亲自施术」</h2>
<p>部分机构由助手或非专科人员施术，这在法律上存在一定争议。预约时务必确认「由哪位医生进行施术」。</p>
<h2>⑤ 提前预约</h2>
<p>济州旅游旺季（夏季、春节）诊所预约常常提前2~3周满档。出发前务必完成预约，避免到了济州才发现无法就诊。</p>`,
        en:`<h2>① Verify Doctor Credentials</h2>
<p>Board-certified dermatologists (피부과전문의) and plastic surgeons (성형외과전문의) hold official specialist licences in Korea. Prioritise clinics where the director personally performs procedures with these qualifications.</p>
<img src="https://picsum.photos/seed/jeju-doctor/600/320" alt="Doctor credentials" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>② Check Treatment Devices</h2>
<p>Genuine Thermage FLX and Ulthera units have unique serial numbers verifiable on the manufacturer's website. Asking "what model device do you use?" before booking is completely reasonable.</p>
<h2>③ Cross-reference Multiple Review Platforms</h2>
<p>Naver reviews are detailed and long-form. Google gives a quick overall impression. Kakao Map is best for confirming location and opening hours. Use all three for a balanced view.</p>
<img src="https://picsum.photos/seed/jeju-review/600/280" alt="Review platform comparison" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>④ Confirm the Director Performs Procedures</h2>
<p>Some clinics delegate procedures to assistants or non-specialists. This is legally ambiguous in Korea. Always clarify "who will be performing my treatment?" when booking.</p>
<h2>⑤ Book Well in Advance</h2>
<p>During peak Jeju seasons (summer, Lunar New Year), appointments fill up 2–3 weeks ahead. Reserve before your trip to avoid arriving and finding no availability.</p>`,
        ja:`<h2>① 医師の資格を確認する</h2>
<p>皮膚科専門医（피부과전문의）と整形外科専門医（성형외과전문의）は韓国の正式な専門資格です。院長が直接施術を行うクリニックを優先的に選びましょう。</p>
<img src="https://picsum.photos/seed/jeju-doctor/600/320" alt="医師資格の確認" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>② 施術機器を確認する</h2>
<p>正規品のThermage FLXやUltheraにはシリアル番号があり、公式サイトで照合できます。「どの機種を使用していますか？」と事前に質問することは自然なことです。</p>
<h2>③ 複数プラットフォームの口コミを参考にする</h2>
<p>Naverは詳細な長文口コミが充実。Googleは全体評価の把握に最適。Kakao Mapは場所と営業時間の確認に便利。3つを組み合わせて判断しましょう。</p>
<img src="https://picsum.photos/seed/jeju-review/600/280" alt="口コミプラットフォーム比較" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>④「院長が直接施術」かを確認する</h2>
<p>一部クリニックではスタッフや非専門家が施術を行う場合があります。予約時に「誰が施術を担当しますか？」と確認することが重要です。</p>
<h2>⑤ 事前予約を忘れずに</h2>
<p>済州の観光シーズン（夏・旧正月）はクリニックの予約が2〜3週間前から埋まることもあります。出発前に必ず予約を完了させておきましょう。</p>`
      }
    },
    {
      id:"c-002",
      category:{ zh:"施术解读", en:"Treatment Guide", ja:"施術ガイド" },
      thumbnail:"https://picsum.photos/seed/jeju-lifting/600/360",
      excerpt:{
        zh:"提拉效果不是当场见效的——旅行者在出发前必须了解的提拉项目真相。",
        en:"Lifting results take 1–3 months to appear. Here's what travellers must know before booking.",
        ja:"リフティングの効果は1〜3ヶ月後に現れます。旅行者が知っておくべき重要な事実。"
      },
      title:{
        zh:"Thermage FLX & Ulthera 提拉项目：旅行者须知",
        en:"Thermage FLX & Ulthera Lifting: What Travellers Need to Know",
        ja:"Thermage FLX & Ulthera リフティング：旅行者が知っておくべきこと"
      },
      published_at:"2026-03-08",
      body:{
        zh:`<h2>效果时间线：为什么「当场没感觉」是正常的</h2>
<p>提拉类项目是在济州整形外科最受欢迎的旅游型施术之一。很多旅行者会有「施术完没什么感觉？」的疑惑——这完全正常。</p>
<p>提拉效果通常在施术后<strong>1~3个月</strong>逐渐显现，短期旅行期间无法立即看到最终效果，并非施术失败。</p>
<img src="https://picsum.photos/seed/lifting-timeline/600/320" alt="提拉效果时间线" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>个体差异为什么这么大</h2>
<p>年龄、皮肤松弛程度、生活习惯不同，效果差异可达<strong>2~3倍</strong>。他人评论中的效果仅供参考，不能保证自身相同结果。</p>
<p>特别是35岁以下皮肤弹力较好的人群，相比中年人群感受可能更不明显，这也是正常现象。</p>
<h2>术后注意事项</h2>
<p>施术当天避免剧烈运动和桑拿，术后约<strong>2~4周</strong>内皮肤可能轻微泛红或有轻度肿胀感，属正常反应，无需过度担心。</p>
<img src="https://picsum.photos/seed/lifting-care/600/280" alt="术后护理" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>如何正确阅读评论</h2>
<p>将评论中「施术后立刻怎样」与「1~2个月后怎样」分开阅读——前者反映体感，后者才反映实际提拉效果。这一点很多旅行者都会忽视。</p>`,
        en:`<h2>Effect Timeline: Why "Nothing Happened Immediately" Is Normal</h2>
<p>Lifting treatments are among the most popular procedures for medical tourists visiting Jeju. Many travellers wonder "why don't I feel any difference?"—and the answer is simple.</p>
<p>Lifting results typically emerge gradually over <strong>1–3 months</strong> after treatment. Not seeing immediate dramatic change during your trip is completely normal—it does not mean the treatment failed.</p>
<img src="https://picsum.photos/seed/lifting-timeline/600/320" alt="Lifting effect timeline" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>Why Individual Results Vary So Much</h2>
<p>Results can vary <strong>2–3×</strong> depending on age, degree of skin laxity, and lifestyle. Other people's experiences in reviews are a reference only and cannot guarantee the same outcome for you.</p>
<p>In particular, people under 35 with good skin elasticity may feel less immediate effect than older patients—this is also normal.</p>
<h2>Post-Treatment Care</h2>
<p>Avoid intense exercise and saunas on the day of treatment. Mild redness or slight swelling for <strong>2–4 weeks</strong> afterwards is a normal response and should not cause concern.</p>
<img src="https://picsum.photos/seed/lifting-care/600/280" alt="Post-treatment care" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>How to Read Reviews Correctly</h2>
<p>When reading reviews, distinguish between 'how it felt immediately after' and 'how it looked 1–2 months later'. The former reflects the in-clinic sensation; the latter reflects the actual lifting result. Many travellers miss this distinction.</p>`,
        ja:`<h2>効果のタイミング：「すぐに変化がない」のは正常</h2>
<p>リフティング施術は済州の整形外科を訪れる医療観光客に最も人気の高いメニューのひとつです。「施術後に何も変わらない？」と感じる方も多いですが、それは正常な反応です。</p>
<p>リフティングの効果は施術後<strong>1〜3ヶ月</strong>かけて徐々に現れるのが一般的です。旅行中に劇的な変化を感じなくても施術失敗ではありませんので、ご安心ください。</p>
<img src="https://picsum.photos/seed/lifting-timeline/600/320" alt="リフティング効果の時間軸" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>個人差が大きい理由</h2>
<p>年齢・肌のたるみ具合・生活習慣によって効果は<strong>2〜3倍</strong>の差が生じることもあります。他の人の口コミはあくまで参考であり、同じ結果を保証するものではありません。</p>
<p>特に35歳以下で肌のハリが良い方は、中高年の方と比べて即時効果を感じにくい場合がありますが、これも正常です。</p>
<h2>施術後のケア</h2>
<p>施術当日は激しい運動やサウナを避けてください。施術後<strong>2〜4週間</strong>ほどは軽い赤みや軽度の腫れが出ることがありますが、正常な反応ですので心配不要です。</p>
<img src="https://picsum.photos/seed/lifting-care/600/280" alt="施術後のケア" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>口コミの正しい読み方</h2>
<p>口コミを読む際は「施術直後の感想」と「1〜2ヶ月後の変化」を分けて確認しましょう。前者は施術中の体感、後者が実際のリフティング効果を反映しています。この違いを見落とす旅行者が多いので注意が必要です。</p>`
      }
    },
    {
      id:"c-003",
      category:{ zh:"信息技巧", en:"Research Tips", ja:"調べ方のコツ" },
      thumbnail:"https://picsum.photos/seed/jeju-maps/600/360",
      excerpt:{
        zh:"Naver、Google、Kakao Map——三大平台各有什么优缺点？该怎么组合使用？",
        en:"Naver, Google, Kakao Map — each platform has different strengths. Here's how to use them together.",
        ja:"Naver・Google・Kakao Map、それぞれの強みと使い分け方を徹底解説。"
      },
      title:{
        zh:"韩国医疗评论平台比较：Naver / Google / Kakao Map",
        en:"Comparing Korean Medical Review Platforms: Naver / Google / Kakao Map",
        ja:"韓国の医療口コミプラットフォーム比較：Naver / Google / Kakao Map"
      },
      published_at:"2026-03-05",
      body:{
        zh:`<h2>Naver 地图 — 适合深入研究</h2>
<p>评论数量最多，以长文记录为主，详细描述就诊经过、说明方式、等待时间等体验细节。适合深入了解一家医院的实际情况。</p>
<p>⚠️ <strong>注意：</strong>Naver评论以韩语为主，建议结合Google翻译或Papago工具阅读。</p>
<img src="https://picsum.photos/seed/naver-review/600/300" alt="Naver地图评论" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>Google Maps — 适合快速判断</h2>
<p>评论较简短，评分直观，适合快速了解总体口碑走向。部分国际游客会留下英文或中文评论，对外国患者参考价值较高。</p>
<h2>Kakao Map — 适合核实基础信息</h2>
<p>评论数量较少，但有时出现更具体的情境描述，包含交通、停车、预约等实用信息。适合核实地点和基础信息，也可查看营业时间是否准确。</p>
<img src="https://picsum.photos/seed/kakao-map/600/300" alt="Kakao地图" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>推荐的使用顺序</h2>
<p>① 先看<strong>Google</strong>评分了解大方向 → ② 再看<strong>Naver</strong>长评获取具体细节 → ③ 最后用<strong>Kakao Map</strong>核实营业时间和位置信息。三步组合，判断更全面。</p>`,
        en:`<h2>Naver Map — Best for Deep Research</h2>
<p>The most review-heavy platform. Reviews are predominantly long-form, covering consultation details, wait times, and treatment outcomes. Best for deep research into a specific clinic.</p>
<p>⚠️ <strong>Note:</strong> Naver reviews are mostly in Korean—use Google Translate or Papago to read them.</p>
<img src="https://picsum.photos/seed/naver-review/600/300" alt="Naver Map reviews" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>Google Maps — Best for Quick Impressions</h2>
<p>Reviews are shorter and scores are immediately visible. Some international visitors leave English reviews, making this more accessible for foreign patients. Good for a quick overall assessment.</p>
<h2>Kakao Map — Best for Verifying Basics</h2>
<p>Fewer reviews but sometimes includes specific situational detail—transport, parking, booking experience. Best for confirming exact location, opening hours, and contact details.</p>
<img src="https://picsum.photos/seed/kakao-map/600/300" alt="Kakao Map" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>Recommended Research Order</h2>
<p>① Check <strong>Google</strong> for the overall rating → ② Read <strong>Naver</strong> long-form reviews for specific details → ③ Use <strong>Kakao Map</strong> to verify opening hours and directions. This three-step approach gives you the most complete picture.</p>`,
        ja:`<h2>Naver マップ — 深掘り調査に最適</h2>
<p>口コミ数が最も多く、長文形式が中心。診察の流れ・待ち時間・施術の詳細などが丁寧に書かれており、特定クリニックを深く調べるのに最適です。</p>
<p>⚠️ <strong>注意：</strong>Naverの口コミは主に韓国語です。Google翻訳またはPapagoとの併用を推奨します。</p>
<img src="https://picsum.photos/seed/naver-review/600/300" alt="Naverマップの口コミ" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>Google マップ — 素早い全体把握に最適</h2>
<p>口コミは比較的短く、評価スコアが一目でわかります。外国人旅行者が英語で書いた口コミも一部あり、外国人患者には参考にしやすいプラットフォームです。</p>
<h2>Kakao Map — 基本情報の確認に最適</h2>
<p>口コミ数は少ないですが、交通・駐車・予約など実用的な状況説明が含まれることも。場所・営業時間・連絡先の確認に活用できます。</p>
<img src="https://picsum.photos/seed/kakao-map/600/300" alt="Kakaoマップ" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>おすすめの調査順序</h2>
<p>① <strong>Google</strong>で全体評価を確認 → ② <strong>Naver</strong>の長文口コミで詳細を把握 → ③ <strong>Kakao Map</strong>で営業時間と場所を確認。この3ステップで最も正確な判断ができます。</p>`
      }
    },
    {
      id:"c-004",
      category:{ zh:"施术解读", en:"Treatment Guide", ja:"施術ガイド" },
      thumbnail:"https://picsum.photos/seed/jeju-laser/600/360",
      excerpt:{
        zh:"色素激光、点阵激光、水光针……济州皮肤科的激光项目种类繁多，旅行者该如何选择？",
        en:"From pigmentation lasers to skin boosters — a quick guide to laser treatments available in Jeju.",
        ja:"色素レーザー・フラクショナル・スキンブースター——済州のレーザー施術を種類別に解説。"
      },
      title:{
        zh:"济州岛皮肤激光项目入门指南",
        en:"Beginner's Guide to Skin Laser Treatments in Jeju",
        ja:"済州島 皮膚レーザー施術 入門ガイド"
      },
      published_at:"2026-03-01",
      body:{
        zh:`<h2>色素激光（去斑）— 需要多次施术</h2>
<p>针对雀斑、晒斑、肤色不均。以<strong>激光托宁（Laser Toning）</strong>为代表，通常需要多次施术才能看到明显效果，单次旅行难以完成疗程。建议提前咨询「单次效果预期」。</p>
<img src="https://picsum.photos/seed/laser-toning/600/300" alt="色素激光去斑" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>毛孔 / 痘印 / 疤痕 — 恢复期较长</h2>
<p>以<strong>点阵激光（Fraxel类）</strong>或<strong>Potenza射频微针</strong>为主，术后恢复期约3~7天。旅行期间请务必预留恢复时间，建议安排在行程后期。</p>
<h2>皮肤弹力 / 水光 — 最适合旅行</h2>
<p>使用<strong>Rejuran（再生针）</strong>、水光针等注射类项目。效果较温和，恢复期短，适合旅行途中单次体验。不影响正常旅游行程。</p>
<img src="https://picsum.photos/seed/skin-booster/600/300" alt="水光针皮肤注射" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>重要提醒：防晒必须做到位</h2>
<p>激光项目在术后需避免紫外线直射。济州阳光较强，施术后需<strong>严格防晒</strong>（SPF50+）。建议将激光项目安排在旅行后期或回国前进行，以减少后续暴晒风险。</p>`,
        en:`<h2>Pigmentation Lasers (Spot Removal) — Requires Multiple Sessions</h2>
<p>Target freckles, sun spots, and uneven skin tone. <strong>Laser Toning</strong> is the most common option, but visible results typically require multiple sessions. A single-visit treatment won't complete a full course—ask your clinic about 'single-session expectations' before booking.</p>
<img src="https://picsum.photos/seed/laser-toning/600/300" alt="Pigmentation laser treatment" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>Pores / Acne Marks / Scars — Longer Downtime</h2>
<p>Primarily treated with <strong>fractional lasers (Fraxel-type)</strong> or <strong>Potenza RF microneedling</strong>. Downtime is approximately 3–7 days. Factor this into your travel schedule and plan these treatments towards the end of your trip.</p>
<h2>Skin Elasticity / Hydration — Best for Travellers</h2>
<p><strong>Rejuran</strong> (polynucleotide injection) and <strong>skin booster</strong> injections offer gentle effects with minimal downtime. Well-suited to a single in-trip treatment without disrupting your itinerary.</p>
<img src="https://picsum.photos/seed/skin-booster/600/300" alt="Skin booster injection" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>Important: Sun Protection Is Essential</h2>
<p>All laser treatments require strict sun protection afterwards. Jeju receives strong UV radiation year-round, so apply <strong>SPF50+ sunscreen</strong> diligently. Plan your laser treatment towards the end of your trip or just before departure to minimise post-treatment sun exposure.</p>`,
        ja:`<h2>色素レーザー（シミ取り）— 複数回の施術が必要</h2>
<p>そばかす・シミ・色ムラに対応。<strong>レーザートーニング</strong>が代表的ですが、複数回の施術で効果が出るのが一般的で、1回の旅行でコースを完了するのは難しいです。「1回施術の効果目安」を事前に確認しましょう。</p>
<img src="https://picsum.photos/seed/laser-toning/600/300" alt="色素レーザー施術" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>毛穴・ニキビ跡・傷跡 — ダウンタイムが長め</h2>
<p><strong>フラクショナルレーザー（Fraxel系）</strong>または<strong>PotenzaRFマイクロニードリング</strong>が主流。ダウンタイムは約3〜7日のため、旅程に回復時間を確保し、旅行の後半に計画することをおすすめします。</p>
<h2>肌弾力・水分補給 — 旅行中の施術に最適</h2>
<p><strong>Rejuran（リジュラン）</strong>や<strong>水光注射</strong>などの注射系メニューは効果が穏やかでダウンタイムも短く、旅行中の1回体験に最適。通常の観光スケジュールにも影響しません。</p>
<img src="https://picsum.photos/seed/skin-booster/600/300" alt="スキンブースター注射" style="width:100%;border-radius:12px;margin:12px 0;">
<h2>重要：日焼け止めは必須</h2>
<p>レーザー施術後は紫外線を避ける必要があります。済州島は年間を通じて紫外線が強いため、施術後は<strong>SPF50+の日焼け止め</strong>を徹底してください。施術は旅行の後半か帰国直前に計画するのがおすすめです。</p>`
      }
    }
  ]
};
