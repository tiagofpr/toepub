/* Service worker do PDF para EPUB: cache offline + recebimento de PDFs pelo menu Compartilhar */
const VERSION = 'pdf-epub-1.2.0'; // mantenha igual ao APP_VERSION do index.html
const SHARED = 'shared-files';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];
const LIBS = [
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await cache.addAll(ASSETS);
    await Promise.all(LIBS.map(async url => {
      try { const r = await fetch(url, { mode: 'cors' }); if (r.ok) await cache.put(url, r); } catch (_) {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== VERSION && key !== SHARED) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // PDF compartilhado por outro app (Android): guarda e abre o conversor
  if (req.method === 'POST' && url.pathname.endsWith('/share-target')) {
    event.respondWith((async () => {
      try {
        const form = await req.formData();
        const file = form.get('pdf');
        if (file && typeof file !== 'string') {
          const cache = await caches.open(SHARED);
          await cache.put(new URL('shared-pdf', self.registration.scope).href, new Response(file, {
            headers: { 'Content-Type': 'application/pdf', 'X-File-Name': encodeURIComponent(file.name || 'compartilhado.pdf') }
          }));
        }
      } catch (_) {}
      return Response.redirect(new URL('./?shared=1', self.registration.scope).href, 303);
    })());
    return;
  }

  if (req.method !== 'GET') return;

  // Páginas: tenta a rede (pega atualizações) e cai no cache se estiver offline
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(VERSION);
        cache.put('./index.html', fresh.clone());
        return fresh;
      } catch (_) {
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  // Demais arquivos (ícones, bibliotecas): cache primeiro, rede como reserva
  if (url.origin === self.location.origin || url.hostname === 'cdnjs.cloudflare.com') {
    event.respondWith((async () => {
      const hit = await caches.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok && (res.type === 'basic' || res.type === 'cors')) {
        const cache = await caches.open(VERSION);
        cache.put(req, res.clone());
      }
      return res;
    })());
  }
});
