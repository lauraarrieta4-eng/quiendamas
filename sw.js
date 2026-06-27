const CACHE_NAME = 'quiendamas-v20260627';

const ARCHIVOS_CACHE = [
  '/vidriera.html',
  '/login.html',
  '/terminos.html',
  '/index.html',
  '/config.js',
  '/conexion.js',
  '/logo.jpg',
  '/manifest.json'
];

// Instalación: guarda los archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS_CACHE))
  );
  self.skipWaiting();
});

// Activación: limpia cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: primero intenta red, si falla usa caché
self.addEventListener('fetch', e => {
  // Solo intercepta peticiones GET
  if (e.request.method !== 'GET') return;

  // Peticiones a Supabase siempre van a la red (datos en tiempo real)
  if (e.request.url.includes('supabase.co')) return;

  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Si la respuesta es válida, la guarda en caché y la devuelve
        if (response && response.status === 200) {
          const copia = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, copia));
        }
        return response;
      })
      .catch(() => {
        // Sin red: devuelve desde caché
        return caches.match(e.request).then(cached => {
          if (cached) return cached;
          // Si no hay caché, muestra vidriera como fallback
          return caches.match('/vidriera.html');
        });
      })
  );
});
