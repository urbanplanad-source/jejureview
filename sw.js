/* ================================================================
   insight-medi Service Worker
   Development-friendly cache policy:
   - HTML / JS / JSON / data files: network first
   - images and static assets: cache first
   - external map tiles/CDNs: network only
   ================================================================ */

const CACHE_VERSION = "v4";
const CACHE_NAME = "insight-medi-" + CACHE_VERSION;

const APP_SHELL = [
  "./manifest.json",
  "./images/areumd-thumb.webp",
  "./images/areumd-1.webp",
  "./images/areumd-2.webp",
  "./images/icon-192.png",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith("insight-medi-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const isExternal = url.origin !== self.location.origin;

  // Do not cache third-party CDN or map tile requests.
  if (isExternal) {
    event.respondWith(fetch(req).catch(() => new Response("", { status: 503 })));
    return;
  }

  const freshAsset =
    req.destination === "document" ||
    url.pathname.endsWith(".html") ||
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".json") ||
    url.pathname.includes("/data/");

  if (freshAsset) {
    event.respondWith(
      fetch(req, { cache: "no-store" })
        .then(response => {
          if (response && response.status === 200) {
            const cloned = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, cloned));
          }
          return response;
        })
        .catch(() =>
          caches.match(req).then(cached =>
            cached || caches.match("./index.html") || new Response("", { status: 503 })
          )
        )
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req)
        .then(response => {
          if (!response || response.status !== 200 || response.type === "error") return response;
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, cloned));
          return response;
        })
        .catch(() => new Response("", { status: 503, statusText: "Offline" }));
    })
  );
});
