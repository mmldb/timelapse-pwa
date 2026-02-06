// Version: 0.7.5
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
