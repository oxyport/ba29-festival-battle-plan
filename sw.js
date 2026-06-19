// BA29 Festival Battle Plan — Service Worker v1
// iOS-bulletproof: caches Firebase SDK & Fonts so ES-module imports work offline.

const CACHE_NAME = 'ba29-v2';

const LOCAL_FILES = [
  './',
  './index.html',
  './schedule.js',       // festival data — cache it
  './manifest.webmanifest',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png',
  './splash-750x1334.png',
  './splash-828x1792.png',
  './splash-1125x2436.png',
  './splash-1170x2532.png',
  './splash-1179x2556.png',
  './splash-1242x2208.png',
  './splash-1242x2688.png',
  './splash-1284x2778.png',
  './splash-1290x2796.png',
  // config.js is intentionally NOT cached — it may be absent (demo mode)
];

const EXTERNAL_PRECACHE = [
  'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Oswald:wght@700;900&family=Barlow+Condensed:wght@400;700;900&display=swap',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js',
];

const CACHEABLE_EXTERNAL_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'www.gstatic.com',
];

function isLiveOnly(url) {
  if (url.hostname.endsWith('.firebaseio.com')) return true;
  if (url.hostname.endsWith('.firebasedatabase.app')) return true;
  if (url.hostname.endsWith('.firebaseapp.com') && url.pathname.startsWith('/__')) return true;
  if (url.hostname === 'identitytoolkit.googleapis.com') return true;
  if (url.hostname === 'securetoken.googleapis.com') return true;
  return false;
}

async function cachePutSafe(cache, url) {
  try {
    let response = await fetch(url, { mode: 'cors', credentials: 'omit' });
    if (response && response.ok) { await cache.put(url, response); return true; }
    response = await fetch(url, { mode: 'no-cors' });
    if (response) { await cache.put(url, response); return true; }
  } catch (e) {
    console.warn('[SW] Pre-cache failed for', url, e.message);
  }
  return false;
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(LOCAL_FILES.map(async (url) => {
      try {
        const r = await fetch(url, { cache: 'reload' });
        if (r.ok) await cache.put(url, r);
      } catch (e) {}
    }));
    await Promise.all(EXTERNAL_PRECACHE.map((url) => cachePutSafe(cache, url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  if (isLiveOnly(url)) {
    event.respondWith(
      fetch(event.request).catch(() => new Response(JSON.stringify({}), {
        status: 503, headers: { 'Content-Type': 'application/json' }
      }))
    );
    return;
  }

  const isExternalCacheable = CACHEABLE_EXTERNAL_HOSTS.includes(url.hostname);
  const isNavigation = event.request.mode === 'navigate' ||
    (event.request.headers.get('accept') || '').includes('text/html');

  if (isNavigation) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(event.request);
        if (fresh.ok) {
          const clone = fresh.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, clone);
          if (url.pathname === '/' || url.pathname.endsWith('/index.html')) {
            await cache.put('./', fresh.clone());
          }
        }
        return fresh;
      } catch (e) {
        return await caches.match(event.request) ||
               await caches.match('./') ||
               await caches.match('./index.html') ||
               new Response('Offline. Please open once with internet.', {
                 status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
               });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) {
      if (isExternalCacheable || url.origin === self.location.origin) {
        fetch(event.request).then(async (fresh) => {
          if (fresh && (fresh.ok || fresh.type === 'opaque')) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(event.request, fresh.clone());
          }
        }).catch(() => {});
      }
      return cached;
    }
    try {
      const fresh = await fetch(event.request);
      if (fresh && (fresh.ok || fresh.type === 'opaque')) {
        if (isExternalCacheable || url.origin === self.location.origin) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, fresh.clone());
        }
      }
      return fresh;
    } catch (e) {
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});
