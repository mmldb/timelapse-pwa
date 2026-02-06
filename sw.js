// Version: 0.7.3
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
