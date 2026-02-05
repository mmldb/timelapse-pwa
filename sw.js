// Version: 0.6.5
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
