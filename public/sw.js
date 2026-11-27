const CACHE_NAME = 'finixbooks-media-v1';
const MEDIA_EXT = /\.(?:jpeg|jpg|png|webp|svg|mp4|woff2)$/i;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (!MEDIA_EXT.test(url.pathname) && !url.pathname.startsWith('/assets/')) return;

  // Skip Range requests (206 Partial Content) so browser video streaming works natively
  if (request.headers.has('range')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) return cached;

      const response = await fetch(request);
      if (response.status === 200) {
        cache.put(request, response.clone());
      }
      return response;
    })
  );
});
