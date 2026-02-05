// Version: 0.6.7
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
