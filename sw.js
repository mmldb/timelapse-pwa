// Version: 0.7.4
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
