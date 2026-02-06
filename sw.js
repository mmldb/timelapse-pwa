// Version: 0.7.2
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
