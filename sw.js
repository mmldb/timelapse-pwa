// Version: 0.6.8
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
