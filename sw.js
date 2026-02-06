// Version: 0.7.6
const CACHE_NAME = 'capsule-v0.7.6';
const ASSETS = ['./', './index.html', './icon.png', './manifest.json'];

self.addEventListener('install', (e) => {
    self.skipWaiting(); // FORCE NEW VERSION IMMEDIATELY
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then(keys => Promise.all(
        keys.map(k => { if(k !== CACHE_NAME) return caches.delete(k); })
    )).then(() => self.clients.claim())); // TAKE CONTROL OF OPEN TABS
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
