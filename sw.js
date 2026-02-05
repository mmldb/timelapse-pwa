// Version: 0.6.0
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
