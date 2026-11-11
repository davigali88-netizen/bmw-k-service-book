const CACHE_NAME = 'bmw-k-service-book-v4';
const APP_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './documents.css',
  './app.js',
  './manifest.webmanifest',
  './icon.svg',
  './k75s-reference.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith('bmw-k-service-book-') && key !== CACHE_NAME)
        .map(key => caches.delete(key))
    )),
    self.clients.claim()
  ]));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => {
    if (cached) return cached;
    return fetch(event.request).then(response => {
      if (response.status === 200) {
        const copy = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(event.request, copy))
          .catch(error => console.error('Could not cache offline resource:', error));
      }
      return response;
    }).catch(() => {
      if (event.request.mode === 'navigate') return caches.match('./index.html');
      throw new Error('Offline resource unavailable');
    });
  }));
});
