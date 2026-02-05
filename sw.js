// Version: 0.6.4
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
