/* ================================================================
   data/common.js - 공통 데이터 (다국어, 지역, 콘텐츠)
   ================================================================ */

/* ── UI 번역 문자열 ─────────────────────────────────────────── */
const T = {
  zh: {
    tab_home: "首页", tab_hospitals: "医院", tab_contents: "攻略", tab_me: "我的", tab_booking: "医院信息",
    home_title: "因赛特美医", home_subtitle: "精选皮肤科 · 整形外科信息",
    home_pick: "精选医院", home_latest: "最新攻略", home_more: "查看更多 →",
    hosp_search_ph: "搜索医院名称或项目", hosp_region_all: "全部地区",
    hosp_chinese: "中文服务", hosp_reviews: "条评论", hosp_empty: "暂无符合条件的医院",
    detail_info: "基本信息", detail_address: "地址", detail_phone: "电话",
    detail_hours: "营业时间", detail_specialty: "主要项目", detail_reviews: "评论总结",
    detail_overall: "综合评价", detail_platforms: "平台评论", detail_pros: "优点",
    detail_cons: "注意事项", detail_cautions: "综合建议", detail_highlights: "亮点",
    detail_contact: "联系医院", detail_map: "地图导航", detail_naver: "Naver 地图",
    detail_google: "Google 地图", detail_kakao: "Kakao 地图",
    modal_wechat_title: "微信咨询", modal_wechat_id: "微信号",
    modal_wechat_copy: "复制微信号", modal_wechat_note: "请添加好友后直接发送咨询内容",
    modal_wechat_copied: "已复制！",
    modal_line_title: "LINE 咨询", modal_line_id: "LINE ID",
    modal_line_copy: "复制 LINE ID", modal_line_note: "请添加好友后直接发送咨询内容",
    modal_line_copied: "已复制！",
    modal_ig_title: "Instagram 咨询", modal_ig_handle: "Instagram",
    modal_ig_copy: "复制帐号", modal_ig_note: "请在 Instagram 发送 DM 咨询",
    modal_ig_copied: "已复制！",
    modal_close: "关闭", modal_wechat_btn: "微信咨询", modal_line_btn: "LINE 咨询",
    contents_title: "济州医美攻略", contents_empty: "暂无文章", back: "← 返回",
    me_title: "我的收藏", me_empty: "还没有收藏的医院",
    me_fav_tip: "点击医院卡片上的 ♡ 可添加收藏", me_lang: "语言设置",
    rating: "评分", reviews: "条评论",
    hours_weekday: "平日", hours_sat: "周六", hours_closed: "休息日",
    hours_timezone: "韩国时间 (KST, UTC+9)",
    home_popular: "人气项目", home_specialty: "选择科目",
    spec_beauty: "医美", spec_dental: "牙科", spec_eye: "眼科",
    spec_ent: "耳鼻喉", spec_internal: "内科", spec_neuro: "神经科",
    spec_ortho: "骨科", spec_pediatric: "儿科", foreign_badge: "外语服务",
    tab_booking: "医院信息", booking_title: "医院信息查询",
    booking_intro: "您可以按施术类别浏览济州岛的医院信息。\n本平台仅展示信息，不负责预约或中介服务。",
    booking_ask_spec: "请选择您感兴趣的项目类别：",
    booking_confirm: "以下是济州岛相关医院的信息：",
    booking_placeholder: "请输入...", booking_send: "发送",
    detail_prices: "参考价格",
    price_note: "※ 以上为各机构提供的参考基准价，实际费用因施术组合及个人情况而异，请以机构实际报价为准。\n💱 价格单位为韩元(₩)，1元≈190₩ / 1USD≈1,380₩（汇率仅供参考）",
    venue_clinic: "医院", venue_skincare: "美容护肤", venue_massage: "按摩SPA",
    spec_skincare: "皮肤护理", spec_massage: "按摩SPA",
    spec_open_now: "立即就诊", spec_foreign_official: "外国人许可",
    spec_popular: "热门医院", spec_derm_cert: "皮肤科专科",
    spec_oriental: "韩医院", spec_other: "其他医院",
    detail_payment: "💳 结账方式", detail_languages: "🗣️ 语言服务",
    detail_doctor: "👨‍⚕️ 医生信息", detail_booking: "📞 预约方式",
    exchange_calc: "💱 韩元汇率换算", exchange_rate: "1 KRW ≈",
    exchange_to_cny: "输入韩元金额", exchange_result: "换算结果"
  },
  en: {
    tab_home: "Home", tab_hospitals: "Clinics", tab_contents: "Guide",
    tab_me: "My", tab_booking: "Info",
    home_title: "insight-medi", home_subtitle: "Dermatology & Aesthetic Clinics",
    home_pick: "Featured Clinics", home_latest: "Latest Articles", home_more: "See More →",
    hosp_search_ph: "Search clinic or treatment", hosp_region_all: "All Areas",
    hosp_chinese: "Chinese Staff", hosp_reviews: "reviews", hosp_empty: "No clinics found",
    detail_info: "Information", detail_address: "Address", detail_phone: "Phone",
    detail_hours: "Hours", detail_specialty: "Specialties", detail_reviews: "Review Summary",
    detail_overall: "Overview", detail_platforms: "Platform Reviews", detail_pros: "Pros",
    detail_cons: "Cons", detail_cautions: "Things to Note", detail_highlights: "Highlights",
    detail_contact: "Contact Clinic", detail_map: "Map", detail_naver: "Naver Map",
    detail_google: "Google Maps", detail_kakao: "Kakao Map",
    modal_wechat_title: "WeChat Consultation", modal_wechat_id: "WeChat ID",
    modal_wechat_copy: "Copy WeChat ID", modal_wechat_note: "Add as friend and send your inquiry directly",
    modal_wechat_copied: "Copied!",
    modal_line_title: "LINE Consultation", modal_line_id: "LINE ID",
    modal_line_copy: "Copy LINE ID", modal_line_note: "Add as friend and send your inquiry directly",
    modal_line_copied: "Copied!",
    modal_ig_title: "Instagram DM", modal_ig_handle: "Instagram",
    modal_ig_copy: "Copy Handle", modal_ig_note: "Send a DM on Instagram to inquire",
    modal_ig_copied: "Copied!",
    modal_close: "Close", modal_wechat_btn: "WeChat", modal_line_btn: "LINE",
    contents_title: "Jeju Medical Beauty Articles", contents_empty: "No articles yet", back: "← Back",
    me_title: "My Favorites", me_empty: "No saved clinics yet",
    me_fav_tip: "Tap ♡ on a clinic card to save it", me_lang: "Language",
    rating: "Rating", reviews: "reviews",
    hours_weekday: "Weekday", hours_sat: "Saturday", hours_closed: "Closed",
    home_popular: "Popular Treatments", home_specialty: "Browse by Specialty",
    spec_beauty: "Beauty", spec_dental: "Dental", spec_eye: "Eye",
    spec_ent: "ENT", spec_internal: "Internal", spec_neuro: "Neurology",
    spec_ortho: "Orthopedics", spec_pediatric: "Pediatrics", foreign_badge: "Multilingual",
    booking_title: "Clinic Information Search",
    booking_intro: "Browse clinics in Jeju by treatment category.\nPlease note: This platform provides information only and does not handle bookings or referrals.",
    booking_ask_spec: "What type of treatment are you interested in?",
    booking_confirm: "Here are Jeju clinics that offer this treatment:",
    booking_placeholder: "Type here...", booking_send: "Send",
    detail_prices: "Reference Prices",
    price_note: "※ Prices above are reference figures provided by each venue. Actual cost varies by treatment combination. Please confirm with the venue directly.\n💱 Prices in KRW (₩). ~1 USD ≈ 1,380₩ (indicative rate)",
    venue_clinic: "Clinic", venue_skincare: "Skincare", venue_massage: "Massage",
    spec_skincare: "Skincare", spec_massage: "Massage",
    spec_open_now: "Open Now", spec_foreign_official: "Int'l Certified",
    spec_popular: "Popular", spec_derm_cert: "Derm Specialist",
    spec_oriental: "Oriental Med", spec_other: "Other Clinics",
    detail_payment: "💳 Payment Methods", detail_languages: "🗣️ Languages Spoken",
    detail_doctor: "👨‍⚕️ Doctor Info", detail_booking: "📞 How to Book",
    exchange_calc: "💱 KRW to USD Converter", exchange_rate: "1 KRW ≈",
    exchange_to_usd: "Enter KRW amount", exchange_result: "Converted"
  },
  ja: {
    tab_home: "ホーム", tab_hospitals: "クリニック", tab_contents: "ガイド",
    tab_me: "マイページ", tab_booking: "情報",
    home_title: "insight-medi", home_subtitle: "皮膚科・整形外科 厳選情報",
    home_pick: "おすすめクリニック", home_latest: "最新記事", home_more: "もっと見る →",
    hosp_search_ph: "クリニック名・施術を検索", hosp_region_all: "全エリア",
    hosp_chinese: "中国語スタッフ", hosp_reviews: "件のクチコミ", hosp_empty: "該当するクリニックはありません",
    detail_info: "基本情報", detail_address: "住所", detail_phone: "電話",
    detail_hours: "営業時間", detail_specialty: "主な施術", detail_reviews: "クチコミまとめ",
    detail_overall: "総合評価", detail_platforms: "プラットフォーム別", detail_pros: "良い点",
    detail_cons: "気になる点", detail_cautions: "注意事項", detail_highlights: "ポイント",
    detail_contact: "クリニックに相談", detail_map: "地図", detail_naver: "Naver マップ",
    detail_google: "Google マップ", detail_kakao: "Kakao マップ",
    modal_wechat_title: "WeChat 相談", modal_wechat_id: "WeChat ID",
    modal_wechat_copy: "WeChat ID をコピー", modal_wechat_note: "友達追加後、直接ご相談内容をお送りください",
    modal_wechat_copied: "コピーしました！",
    modal_line_title: "LINE 相談", modal_line_id: "LINE ID",
    modal_line_copy: "LINE ID をコピー", modal_line_note: "友達追加後、直接ご相談内容をお送りください",
    modal_line_copied: "コピーしました！",
    modal_ig_title: "Instagram DM", modal_ig_handle: "Instagram",
    modal_ig_copy: "アカウントをコピー", modal_ig_note: "InstagramのDMでお問い合わせください",
    modal_ig_copied: "コピーしました！",
    modal_close: "閉じる", modal_wechat_btn: "WeChat", modal_line_btn: "LINE",
    contents_title: "済州医療美容 記事", contents_empty: "記事がありません", back: "← 戻る",
    me_title: "お気に入り", me_empty: "保存したクリニックはありません",
    me_fav_tip: "クリニックカードの ♡ をタップして保存", me_lang: "言語設定",
    rating: "評価", reviews: "件",
    hours_weekday: "平日", hours_sat: "土曜", hours_closed: "定休日",
    home_popular: "人気施術", home_specialty: "診療科目で探す",
    spec_beauty: "医美", spec_dental: "歯科", spec_eye: "眼科",
    spec_ent: "耳鼻科", spec_internal: "内科", spec_neuro: "神経科",
    spec_ortho: "整形外科", spec_pediatric: "小児科", foreign_badge: "多言語対応",
    booking_title: "クリニック情報検索",
    booking_intro: "施術カテゴリ別に済州島のクリニック情報をご覧いただけます。\n本プラットフォームは情報提供のみで、予約や紹介業務は行いません。",
    booking_ask_spec: "ご興味のある施術カテゴリを選んでください：",
    booking_confirm: "済州島でこの施術を提供しているクリニック一覧です：",
    booking_placeholder: "入力してください...", booking_send: "送信",
    detail_prices: "参考料金",
    price_note: "※ 表示価格は各施設が提供する参考価格です。施術の組み合わせ等により実際の料金は異なります。必ず施設に直接ご確認ください。\n💱 価格は韓国ウォン(₩)表記です。1円≈9.2₩（参考レート）",
    venue_clinic: "クリニック", venue_skincare: "スキンケア", venue_massage: "マッサージ",
    spec_skincare: "スキンケア", spec_massage: "マッサージ",
    spec_open_now: "今すぐ診療", spec_foreign_official: "外国人許可",
    spec_popular: "人気医院", spec_derm_cert: "皮膚科専門医",
    spec_oriental: "漢方医院", spec_other: "その他医院",
    detail_payment: "💳 決済方法", detail_languages: "🗣️ 言語対応",
    detail_doctor: "👨‍⚕️ 医師情報", detail_booking: "📞 予約方法",
    exchange_calc: "💱 KRW → JPY 変換", exchange_rate: "1 KRW ≈",
    exchange_to_jpy: "韓国ウォン金額", exchange_result: "換算結果"
  }
};

/* ── 지역 레이블 ─────────────────────────────────────────────── */
const REGION = {
  zh: { all: "全部地区", "jeju-city": "济州市", seogwipo: "西归浦市" },
  en: { all: "All Areas", "jeju-city": "Jeju City", seogwipo: "Seogwipo" },
  ja: { all: "全エリア", "jeju-city": "済州市", seogwipo: "西帰浦市" }
};

/* ── 콘텐츠 DB ─────────────────────────────────────────────── */
const CONTENTS_DB = [
  {
    id: "c-001",
    category: { zh: "选择指南", en: "Clinic Guide", ja: "選び方ガイド" },
    thumbnail: "https://picsum.photos/seed/jeju-clinic/600/360",
    excerpt: {
      zh: "选医院前必读：5个关键点帮你规避风险、选到适合自己的皮肤科或整形外科。",
      en: "5 essential checks before booking a clinic in Jeju — credentials, devices, reviews, and more.",
      ja: "済州のクリニック選びで失敗しないための5つのチェックポイントを徹底解説。"
    },
    title: {
      zh: "在济州选择皮肤科 / 整形外科的5个要点",
      en: "5 Key Points for Choosing a Clinic in Jeju",
      ja: "済州で皮膚科・整形外科を選ぶ5つのポイント"
    },
    published_at: "2026-03-10",
    body: {
      zh: `<h2>① 确认医生资质</h2><p>皮肤科专科医生（피부과전문의）和整形外科专科医生（성형외과전문의）是韩国正式认证的专科资格，建议优先选择持有此资质的院长亲自施术的机构。</p><h2>② 了解施术设备</h2><p>正品Thermage FLX、Ulthera等设备均有唯一序列号，可在各品牌官网查验。</p><h2>③ 综合参考多平台评论</h2><p>Naver评论内容详细，Google评论直观易读，Kakao Map适合核实位置和营业时间。</p><h2>④ 确认「院长亲自施术」</h2><p>部分机构由助手或非专科人员施术，这在法律上存在一定争议。</p><h2>⑤ 提前预约</h2><p>济州旅游旺季诊所预约常常提前2~3周满档。</p>`,
      en: `<h2>① Verify Doctor Credentials</h2><p>Board-certified dermatologists and plastic surgeons hold official specialist licences in Korea.</p><h2>② Check Treatment Devices</h2><p>Genuine Thermage FLX and Ulthera units have unique serial numbers.</p><h2>③ Cross-reference Multiple Review Platforms</h2><p>Naver reviews are detailed, Google gives quick impressions, Kakao Map confirms location.</p><h2>④ Confirm the Director Performs Procedures</h2><p>Some clinics delegate to assistants. Always clarify when booking.</p><h2>⑤ Book Well in Advance</h2><p>During peak seasons, appointments fill up 2–3 weeks ahead.</p>`,
      ja: `<h2>① 医師の資格を確認する</h2><p>皮膚科専門医と整形外科専門医は韓国の正式な専門資格です。</p><h2>② 施術機器を確認する</h2><p>正規品のThermage FLXやUltheraにはシリアル番号があります。</p><h2>③ 複数プラットフォームの口コミを参考にする</h2><p>Naverは詳細な長文、Googleは全体評価、Kakao Mapは場所確認に最適。</p><h2>④「院長が直接施術」かを確認する</h2><p>一部クリニックではスタッフや非専門家が施術を行う場合があります。</p><h2>⑤ 事前予約を忘れずに</h2><p>観光シーズンは2〜3週間前から予約が埋まることもあります。</p>`
    }
  },
  {
    id: "c-002",
    category: { zh: "施术解读", en: "Treatment Guide", ja: "施術ガイド" },
    thumbnail: "https://picsum.photos/seed/jeju-lifting/600/360",
    excerpt: {
      zh: "提拉效果不是当场见效的——旅行者在出发前必须了解的提拉项目真相。",
      en: "Lifting results take 1–3 months to appear. Here's what travellers must know before booking.",
      ja: "リフティングの効果は1〜3ヶ月後に現れます。旅行者が知っておくべき重要な事実。"
    },
    title: {
      zh: "Thermage FLX & Ulthera 提拉项目：旅行者须知",
      en: "Thermage FLX & Ulthera Lifting: What Travellers Need to Know",
      ja: "Thermage FLX & Ulthera リフティング：旅行者が知っておくべきこと"
    },
    published_at: "2026-03-08",
    body: {
      zh: `<h2>效果时间线</h2><p>提拉效果通常在施术后<strong>1~3个月</strong>逐渐显现，短期旅行期间无法立即看到最终效果。</p><h2>个体差异</h2><p>年龄、皮肤松弛程度不同，效果差异可达<strong>2~3倍</strong>。</p><h2>术后注意事项</h2><p>施术当天避免剧烈运动，术后约<strong>2~4周</strong>内皮肤可能轻微泛红。</p>`,
      en: `<h2>Effect Timeline</h2><p>Results typically emerge over <strong>1–3 months</strong> after treatment.</p><h2>Individual Variation</h2><p>Results can vary <strong>2–3×</strong> depending on age and skin laxity.</p><h2>Post-Treatment Care</h2><p>Avoid intense exercise on the day of treatment. Mild redness for <strong>2–4 weeks</strong> is normal.</p>`,
      ja: `<h2>効果のタイミング</h2><p>効果は施術後<strong>1〜3ヶ月</strong>かけて徐々に現れます。</p><h2>個人差</h2><p>年齢・肌のたるみ具合によって効果は<strong>2〜3倍</strong>の差が生じることも。</p><h2>施術後のケア</h2><p>施術当日は激しい運動を避けてください。<strong>2〜4週間</strong>ほどは軽い赤みが出ることがあります。</p>`
    }
  },
  {
    id: "c-003",
    category: { zh: "信息技巧", en: "Research Tips", ja: "調べ方のコツ" },
    thumbnail: "https://picsum.photos/seed/jeju-maps/600/360",
    excerpt: {
      zh: "Naver、Google、Kakao Map——三大平台各有什么优缺点？该怎么组合使用？",
      en: "Naver, Google, Kakao Map — each platform has different strengths. Here's how to use them together.",
      ja: "Naver・Google・Kakao Map、それぞれの強みと使い分け方を徹底解説。"
    },
    title: {
      zh: "韩国医疗评论平台比较：Naver / Google / Kakao Map",
      en: "Comparing Korean Medical Review Platforms: Naver / Google / Kakao Map",
      ja: "韓国の医療口コミプラットフォーム比較：Naver / Google / Kakao Map"
    },
    published_at: "2026-03-05",
    body: {
      zh: `<h2>Naver 地图 — 适合深入研究</h2><p>评论数量最多，以长文记录为主，详细描述就诊经过。</p><h2>Google Maps — 适合快速判断</h2><p>评论较简短，评分直观，适合快速了解总体口碑走向。</p><h2>Kakao Map — 适合核实基础信息</h2><p>评论数量较少，但有时出现更具体的情境描述。</p><h2>推荐的使用顺序</h2><p>① Google → ② Naver → ③ Kakao Map</p>`,
      en: `<h2>Naver Map — Best for Deep Research</h2><p>The most review-heavy platform. Reviews are predominantly long-form.</p><h2>Google Maps — Best for Quick Impressions</h2><p>Reviews are shorter and scores are immediately visible.</p><h2>Kakao Map — Best for Verifying Basics</h2><p>Fewer reviews but sometimes includes specific situational detail.</p><h2>Recommended Research Order</h2><p>① Google → ② Naver → ③ Kakao Map</p>`,
      ja: `<h2>Naver マップ — 深掘り調査に最適</h2><p>口コミ数が最も多く、長文形式が中心。</p><h2>Google マップ — 素早い全体把握に最適</h2><p>口コミは比較的短く、評価スコアが一目でわかります。</p><h2>Kakao Map — 基本情報の確認に最適</h2><p>口コミ数は少ないですが、実用的な状況説明が含まれることも。</p><h2>おすすめの調査順序</h2><p>① Google → ② Naver → ③ Kakao Map</p>`
    }
  }
];
