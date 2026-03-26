const CACHE = 'manarat-v1';
const ASSETS = ['./index.html','./dashboard.html','./plangen2.html','./app.css','./style.css','./dashboard.css','./vanilla-calendar.min.js','./vanilla-calendar.min.css','./manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { if (e.request.method !== 'GET') return; e.respondWith(fetch(e.request).then(r => { const clone = r.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); return r; }).catch(() => caches.match(e.request))); });
