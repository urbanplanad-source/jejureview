# 웹↔안드로이드 앱 공유 아키텍처 가이드

## 1. 데이터 공유 방식 (현재)

### 구조
```
data.js (단일 진실 공급원)
├── Web (index.html)
└── Android App (WebView / React Native)
```

### 특징
- ✅ 같은 `data.js` 파일 사용
- ✅ 언어별 문자열 한 곳에서 관리
- ✅ 병원 정보 일원화

---

## 2. 안드로이드 앱 연동 권장사항

### A. WebView 기반 (현재 최적)
```javascript
// Android WebView에서
webView.loadUrl("file:///android_asset/web/index.html")
// 또는 원격
webView.loadUrl("https://your-domain.com")
```

**장점**:
- 웹 코드 그대로 재사용
- data.js 자동 동기화
- 개발 속도 빠름

**단점**:
- 오프라인 지원 필요 → Service Worker 추가 필요
- 앱스토어 심사 기준 충족 필요

### B. React Native / Flutter (향후 고려)
```javascript
// API로 변환 필요
// data.js → REST API (Node.js)
fetch('https://api.your-domain.com/api/hospitals')
  .then(res => res.json())
```

---

## 3. 실방운영 체크리스트

### 공유 데이터 관리
- [ ] `data.js` 버전 관리 (주석으로 마지막 업데이트 날짜 기록)
- [ ] 웹 배포 시 안드로이드 앱도 업데이트 스케줄 확인
- [ ] 병원 정보 추가/수정 시 양쪽 모두 테스트

### 플랫폼별 기능
- [ ] 앱: 오프라인 모드 (ServiceWorker 또는 로컬 캐시)
- [ ] 앱: 푸시 알림 (새 병원 정보, 이벤트)
- [ ] 웹: SEO (이미 설정됨)

### 동기화 전략
**Option 1: 정적 파일 (현재)**
- 매월 1회 `data.js` 수동 업데이트
- 웹 배포 후 앱도 함께 업데이트

**Option 2: JSON API (향후, 병원 정보 100개 이상)**
```
백엔드 (Node.js / Python)
  ↓
data.json (API)
  ├── Web (fetch)
  └── App (fetch)
```

---

## 4. 협업 워크플로우 제안

```
병원 정보 추가
  ↓
data.js 수정
  ↓
웹 테스트 (index.html)
  ↓
안드로이드 앱 테스트 (WebView)
  ↓
배포 (web + app 함께)
```

---

## 5. 앱 스토어 배포 시 주의사항

### iOS App Store
- ✋ "정보 제공만" 명시 필수
- ⚠️ 의료 관련 앱 심사 후 주의
- 병원과 계약 관계 없음 명시

### Google Play
- ✅ 상대적으로 관대함
- 개인정보처리방침 URL 필수
- 중국: Google Play 미지원 (Huawei AppGallery 등 별도 배포)

---

## 6. 중국 사용자를 위한 앱 특화 기능

- [ ] WeChat 공식 계정 연동
- [ ] AliPay / WeChat Pay 결제 (향후, 필수 아님)
- [ ] 중국 앱스토어 (Tencent, Huawei, Xiaomi) 배포
- [ ] 현지 시간대 타임존 처리
- [ ] 중국어 간체/번체 분리 옵션

---

## 참고: 파일 체크리스트

### 웹사이트
- `index.html` (메인, 모든 기능 포함)
- `data.js` (모든 정보: 병원, 콘텐츠, 번역)
- `robots.txt` (SEO)
- `sitemap.xml` (SEO)

### Android 앱 필요 파일
```
Android Project
├── assets/
│   └── web/
│       ├── index.html
│       ├── data.js
│       └── images/
├── AndroidManifest.xml (인터넷 권한)
└── WebViewActivity.java
```

