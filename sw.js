// Version: 0.6.2
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
