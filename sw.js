// Version: 0.7.7
self.addEventListener('fetch', (event) => { event.respondWith(fetch(event.request)); });
