// Version: 0.6.6
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
