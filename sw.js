/* ================================================================
   insight-medi Service Worker
   캐시 전략: 앱 셸(HTML/JS/CSS) → Cache First, 이미지 → Cache First
   ================================================================ */

const CACHE_VERSION = 'v3';
const CACHE_NAME    = 'insight-medi-' + CACHE_VERSION;

/* 최초 설치 시 캐시할 정적 자산 (앱 셸) */
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './data/index.js',
  './data/common.js',
  /* 이미지 — WebP 변환 후 선캐시 */
  './images/areumd-thumb.webp',
  './images/areumd-1.webp',
  './images/areumd-2.webp',
  './images/icon-192.png',
];

/* ── INSTALL: 앱 셸 캐시 ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())   // 새 SW 즉시 활성화
  );
});

/* ── ACTIVATE: 구버전 캐시 삭제 ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('insight-medi-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: 캐시 우선 전략 ── */
self.addEventListener('fetch', event => {
  const req = event.request;

  // POST 등 GET 이외 요청은 네트워크로 직행
  if(req.method !== 'GET') return;

  // Google Maps / YouTube iframe 등 외부 요청은 네트워크 직행
  const url = new URL(req.url);
  const isExternal = url.origin !== self.location.origin;
  if(isExternal){
    event.respondWith(fetch(req).catch(() => new Response('', {status: 503})));
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      if(cached) return cached;

      // 캐시 미스 → 네트워크 fetch 후 캐시에 저장
      return fetch(req).then(response => {
        // 정상 응답만 캐시 (에러, opaque 응답 제외)
        if(!response || response.status !== 200 || response.type === 'error'){
          return response;
        }
        const cloned = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, cloned));
        return response;
      }).catch(() => {
        // 오프라인 + 캐시 미스: 최소한의 fallback
        if(req.destination === 'document'){
          return caches.match('./index.html');
        }
        return new Response('', {status: 503, statusText: 'Offline'});
      });
    })
  );
});
