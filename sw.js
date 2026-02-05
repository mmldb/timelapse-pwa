// Version: 0.6.1
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
