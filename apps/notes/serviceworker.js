const appCache = [
    './',
    './index.html',
    './manifest.json',
    './css/main.css',
    './css/fonts/Roboto/Roboto-Light.woff2',
    './css/fonts/Roboto/Roboto-Regular.woff2',
    './css/fonts/Roboto/Roboto-Medium.woff2',
    './css/fonts/Roboto/Roboto-Bold.woff2',
    './js/app.js',
    './img/icons.svg',
    './img/touch/icon-144x144.png',
    './img/touch/icon-192x192.png',
];

// период обновления кэша - одни сутки
const MAX_AGE = 86400000;

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('app-cache').then(cache => {
            return cache.addAll(appCache);
        })
    );
});

self.addEventListener('fetch', function(event) {

    event.respondWith(
        // ищем запрошенный ресурс среди закэшированных
        caches.match(event.request).then(function(cachedResponse) {
            let lastModified, fetchRequest;

            // если ресурс есть в кэше
            if (cachedResponse) {
                // получаем дату последнего обновления
                lastModified = new Date(cachedResponse.headers.get('last-modified'));
                // и если мы считаем ресурс устаревшим
                if (lastModified && (Date.now() - lastModified.getTime()) > MAX_AGE) {

                    fetchRequest = event.request.clone();
                    // создаём новый запрос
                    return fetch(fetchRequest).then(function(response) {
                        // при неудаче всегда можно выдать ресурс из кэша
                        if (!response || response.status !== 200) {
                            return cachedResponse;
                        }
                        // обновляем кэш
                        caches.open(CACHE_NAME).then(function(cache) {
                            cache.put(event.request, response.clone());
                        });
                        // возвращаем свежий ресурс
                        return response;
                    }).catch(function() {
                        return cachedResponse;
                    });
                }
                return cachedResponse;
            }

            // запрашиваем из сети как обычно
            return fetch(event.request);
        })
    );
});