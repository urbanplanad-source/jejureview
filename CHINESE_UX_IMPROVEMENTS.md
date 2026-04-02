# 중국 사용자 UX 개선사항 (우선순위별)

## 🔴 **HIGH PRIORITY** - 즉시 개선 권장

### 1. **병원 결제방법 정보 안내** (심각도: HIGH)
**현재 상황**: 
- 연락처만 있음 → 중국 사용자는 "병원에서 어떻게 결제받나?" 궁금
- 사이트에서 결제처리 X, 병원에서 직접 결제하는 것이므로 **정보만 표시**

**개선안** (사이트 내 결제 기능 없음):
```javascript
// data.js 예시 - 병원이 받는 결제방법 정보만 저장
hospitals: [{
  id: "areumd",
  // ... 기존 정보
  payment_methods: {
    zh: ["현장 결제 (카드/현금)", "국제 송금 가능", "WeChat 중국계좌는 불가"],
    en: ["On-site payment (card/cash)", "Int'l bank transfer available"],
    ja: ["現地払い（カード/現金）", "国際送金対応"]
  }
}]
```

**UI 역할**: 병원 상세 페이지에 "💳 결제 방법" 정보 섹션으로 표시만 함
- ✅ 병원의 결제방법 정보 제공
- ❌ 사이트에서 결제 처리 없음
- ✅ 사용자가 병원에 연락 시 예상 결제수단을 미리 알 수 있음

---

### 2. **환율 계산기 부재**
**문제**: 
- 가격이 한국원(₩)인데 중국인은 CNY로 계산하고 싶음
- "50,000₩ = ?元" 계산이 번거로움

**개선안**:
```javascript
// T 객체에 추가
zh: {
  exchange_rate: "환율 계산기",
  cny_to_krw: "1 CNY ≈ 200₩ (실시간 환율: 자동 갱신)",
}

// 홈 페이지 통계 섹션 근처에 추가
function renderExchangeRate() {
  return `
    <div class="card" style="margin-top:16px">
      <div style="display:flex;align-items:center;gap:8px">
        <span>💱</span>
        <span style="flex:1">CNY to KRW Converter</span>
        <input id="cnyInput" type="number" placeholder="输入金额" 
          style="width:80px;padding:6px;border:1px solid #e5e7eb;border-radius:8px"
        />
        <span id="krwOutput" style="font-weight:700;color:#1a1a2e;min-width:80px">
          = 0₩
        </span>
      </div>
    </div>
  `;
}

// JavaScript
document.getElementById('cnyInput')?.addEventListener('input', (e) => {
  const cny = parseFloat(e.target.value) || 0;
  const krw = Math.round(cny * 200);
  document.getElementById('krwOutput').textContent = `= ${krw.toLocaleString()}₩`;
});
```

---

### 3. **예약 개념 명확화**
**현재**: "AI 안내" 탭은 병원 추천만 함 → 실제 예약은 직접 연락

**개선안**: 병원 카드에 "⏱️ 예약 방법" 배지 추가
```javascript
// 병원 카드 하단에 추가
<div class="booking-method-badge">
  ${h.booking_method_zh} // "직접 전화 필수" / "WeChat 예약 가능" 등
</div>
```

---

### 4. **중국 지역 필터링 강화**
**현재**: "위치" → 지도에 GPS 기반 필터만 함

**개선안**: 중국발 사용자가 많으므로 시간대/언어별 그룹핑
```javascript
const REGIONS_CN_OPTIMIZED = {
  zh: {
    all:        "전체",
    "jeju-city": "가까운 순 (공항 기준)",  // 중국인 대부분 공항 경유
    seogwipo:   "오른쪽 (신화월드 쇼핑)"  // 중국 관광객 핫스팟
  }
};

// GPS 대신 "시내 중심"/"신화월드" 초기값으로 설정
state.location = isChinese ? "jeju-city" : "all";
```

---

### 5. **통화 /시간대 명확화**
**문제**: 중국 사용자가 "營業時間 10:00–19:00"을 보면 한국 시간인지 중국 시간인지 혼동

**개선안**:
```javascript
// 시간표 옆에 타임존 표시
<div class="hours-note" style="font-size:11px;color:#9ca3af;margin-top:4px">
  🕐 한국 시간 (KST, UTC+9)
  // 중국 사용자용: 한국은 중국과 시간이 같음
</div>
```

---

## 🟡 **MEDIUM PRIORITY** - 개선하면 좋음

### 6. **병원 사진 품질**
**현재**: 썸네일 이미지 없는 곳이 많음 → 🏥 기본 아이콘만 표시

**개선안**:
```javascript
// data.js hospital 객체
images: [
  "images/areumd-1.jpg",  // 최소 3~5개 권장
  "images/areumd-2.jpg",  // 대기실 / 의료장비 / 의료진 등
]

// 사진이 없으면 AI 생성 썸네일 제시
// "아직 사진이 없습니다: 병원에 문의하면 제공가능" 안내
```

---

### 7. **의료진 정보 (선택사항)**
**중국 사용자의 관심사**:
- "의사는 몇 년 경력인가?"
- "공식 병원인가 개인 병원인가?"

**개선안**:
```javascript
hospitals: [{
  id: "areumd",
  doctor_info: {
    zh: ["4명의 피부과 전문의", "최대 경력: 15년", "국제학회 참석"],
  }
}]

// UI: 병원 상세 페이지의 "아이콘 + 의사 정보" 섹션
```

---

### 8. **만족도 리뷰 분류**
**현재**: 평점 4.6만 표시 → 구체적인 만족원인이 불명확

**개선안**:
```javascript
// 리뷰 요약의 키워드를 카테고리화
satellites: {
  "친절도": "⭐⭐⭐⭐⭐ (5/5)",
  "결과 만족도": "⭐⭐⭐⭐ (4/5)",
  "가격 합리성": "⭐⭐⭐ (3/5)",
  "위생 상태": "⭐⭐⭐⭐⭐ (5/5)",
  "대기 시간": "⭐⭐⭐ (3/5)"
}

// UI: 레이더 차트 또는 가로 바 차트
```

---

### 9. **언어 지원 명시**
**현재**: "외어 서비스" 뱃지만 있음 → 구체적으로 뭘 지원하는지 불명

**개선안**:
```javascript
hospitals: [{
  languages_supported: {
    zh: ["만다린", "웨이보 상담 가능"],  // 구체적으로!
    en: ["English", "WeChat support available"],
  }
}]

// UI: "🗣️ 중문 상담 가능" → 온마우스 시 "만다린 ✓ 광동어 ✗"
```

---

### 10. **방문 후기 vs. 원격 상담 후기 구분**
**현재**: 모든 리뷰가 섞여있음 → 신뢰도 낮음

**개선안**:
```javascript
// 리뷰에 "verified_visit" 플래그 추가
reviews: [
  {text: "...", rating: 4.5, verified_visit: true},  // 실제 방문자
  {text: "...", rating: 5, verified_visit: false},   // 원격 상담만
]

// UI: "✅ 실제 방문 후기" 뱃지로 구분
```

---

## 🟢 **LOW PRIORITY** - 향후 고려

### 11. **소셜 미디어 통합**
- WeChat 공식 계정 링크
- 중국 Little Red Book (小红书) 링크
- Douyin (抖音) 유튜브 쇼츠 같은 것

### 12. **다국어 지원 확대**
- 광동어 (繁체) 추가 (홍콩, 마카오 등)
- 스페인어, 포르투갈어 (다른 의료관광객)

### 13. **비교 기능**
- 병원 2개 선택 → "비교" 보기
- 가격 / 평점 / 위치 한눈에 비교

### 14. **저장(찜) 기능 강화**
- 현재: 하트만 있음
- 추가: "비교 목록" / "공유 목록" / "나중에 보기"

---

## 📊 **중국 사용자 행동 분석 기반 개선**

### 이탈 포인트 (추측)
1. **결제 방법 불명확** → 즉시 떠남
2. **가격을 원화로 환산할 수 없음** → 번거로워서 떠남
3. **의료진 정보 부족** → 신뢰 못함

### 해결 순서
1. 환율 계산기 (5분)
2. 결제 안내 추가 (10분)
3. 의료진 소개 (30분)

---

## 🎯 **추천 적용 순서**

```
1주차: #1 결제방법 + #2 환율계산기 (가장 중요)
2주차: #3 예약방법 + #5 시간대 명확화
3주차: #4 지역필터링 + #7 의료진정보
4주차: #6 사진추가 + #8-10 고급 기능

이후: #11-14 장기 개선
```

---

## 코드 삽입 위치

### 병원 상세 페이지 (renderHospitalDetail)
```html
<!-- 기존 위치정보 다음에 추가 -->
<div class="info-box green">
  <div class="info-box-title">💳 결제 방법</div>
  ${Array.isArray(h.payment_methods) 
    ? h.payment_methods.map(m => `<div class="info-box-item">${m}</div>`).join('')
    : '<div class="info-box-item">직접 문의 필요</div>'}
</div>

<div class="info-box blue">
  <div class="info-box-title">🗣️ 언어 지원</div>
  <div class="info-box-item">${lng(h.languages_supported)}</div>
</div>
```

### 홈 페이지 (renderHome)
```html
<!-- 통계 섹션 다음에 -->
<div class="card" style="margin:16px 0">
  <div style="font-size:13px;font-weight:700;margin-bottom:10px">💱 환율 계산</div>
  <div style="display:flex;gap:8px;align-items:center">
    <input id="cnyInput" type="number" placeholder="입력..." 
      style="flex:1;padding:8px;border:1px solid #e5e7eb;border-radius:8px"
    />
    <span id="krwOutput" style="font-weight:700;color:#3b82f6;min-width:100px">
      = 0₩
    </span>
  </div>
</div>
```

---

## 📝 **병원 정보 추가 시 템플릿**

```javascript
{
  id: "hospital-id",
  name_ko: "병원명",
  name: {
    zh: "中文名称",
    en: "English Name",
    ja: "日本語名"
  },
  
  // ✅ NEW: 결제
  payment_methods: {
    zh: ["현장 결제 (카드)", "국제송금"],
    en: ["On-site card", "Int'l bank transfer"],
    ja: ["現地払い", "国際送金"]
  },
  
  // ✅ NEW: 언어
  languages_supported: {
    zh: "만다린, 영어 상담 가능",
    en: "Mandarin, English available",
    ja: "中国語、英語対応"
  },
  
  // ✅ NEW: 의료진
  doctor_info: {
    zh: "3명의 전문의, 최대 20년 경력",
    en: "3 specialists, up to 20 years exp",
    ja: "3人の専門医、最大20年の経験"
  },
  
  // ✅ NEW: 예약
  booking_method: {
    zh: "전화/WeChat/카톡",
    en: "Phone/WeChat",
    ja: "電話/WeChat"
  },
  
  // ... 기존 필드들
}
```

