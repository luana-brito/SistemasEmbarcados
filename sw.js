// Arquivo: sw.js

const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/html/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/favicon'
];

self.addEventListener('install', (event) => {
  // Instala o Service Worker e armazena os recursos em cache
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Intercepta as solicitações e serve os recursos do cache, se disponíveis
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna a resposta do cache se disponível; caso contrário, busca na rede
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  // Remove caches antigos quando o Service Worker é ativado
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
