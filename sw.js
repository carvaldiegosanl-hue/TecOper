/* Service worker de TecOper.
   - Paginas: primero la red (siempre la version publicada mas nueva);
     si no hay conexion, la ultima copia guardada.
   - Imagenes, fuentes e iconos: se sirven de la copia y se refrescan
     en segundo plano.
   - Nada de terceros (WhatsApp, YouTube, Maps, Formspree) pasa por aqui.
   Al cambiar archivos importantes, sube VERSION para limpiar la cache. */
var VERSION = 'tecoper-v1';
var CORE = [
  './',
  'index.html',
  'manifest.webmanifest',
  'logo.png',
  'hero.jpg',
  'serv-ingenieria.jpg',
  'serv-consultoria.jpg',
  'icon-192.png',
  'fonts/jost-latin.woff2',
  'fonts/figtree-latin.woff2',
  'fonts/plexmono-600-latin.woff2'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put('index.html', copy); });
        return res;
      }).catch(function () {
        return caches.match('index.html');
      })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) { var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(req, copy); }); }
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    })
  );
});
