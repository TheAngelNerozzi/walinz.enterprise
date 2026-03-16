const CACHE_NAME = 'walinz-enterprise-v2';
const urlsToCache = [
    '/', '/index.html', '/manifest.json', '/favicon.svg',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => 
            cache.addAll(urlsToCache).catch(() => cache.addAll(['/index.html', '/manifest.json']))
        )
    );
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            if (response) return response;
            return fetch(event.request).then(resp => {
                if (!resp || resp.status !== 200 || resp.type !== 'basic') return resp;
                const clone = resp.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return resp;
            }).catch(() => {
                if (event.request.mode === 'navigate') return caches.match('/index.html');
            });
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(names => Promise.all(
            names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
        ))
    );
    self.clients.claim();
});