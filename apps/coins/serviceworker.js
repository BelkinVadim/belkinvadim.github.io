const PARAMETERS = {
    version: '0.0.1',
    lifetime: 86400000, // 1 день
    app_cache: [
        './',
        './index2.html',
        './js/webcomponents-sd-ce.js',
        './js/app.js',
    ]
};

function swInstall(event) {
    event.waitUntil(
        caches
            .open('app-cache')
            .then(cache => {
                return cache.addAll(PARAMETERS.app_cache);
            })
    );
}

function swFetch(event) {
    event.respondWith(
        // ищем запрошенный ресурс среди закэшированных
        caches
            .match(event.request)
            .then(function(cachedResponse) {
                let lastModified,
                    fetchRequest,
                    isEndLifetime;

                // если ресурс есть в кэше
                if (cachedResponse) {
                    // получаем дату последнего обновления
                    lastModified = new Date(cachedResponse.headers.get('last-modified'));
                    isEndLifetime = lastModified && (Date.now() - lastModified.getTime()) > PARAMETERS.lifetime;

                    // Если ресурс устарел
                    if (isEndLifetime) {
                        fetchRequest = event.request.clone();
                        // создаём новый запрос
                        return fetch(fetchRequest)
                            .then(function(response) {
                                // при неудаче всегда можно выдать ресурс из кэша
                                if (!response || response.status !== 200) {
                                    return cachedResponse;
                                }

                                // обновляем кэш
                                caches
                                    .open(CACHE_NAME)
                                    .then(function(cache) {
                                        cache.put(event.request, response.clone());
                                    });

                                // возвращаем свежий ресурс
                                return response;
                            })
                            .catch(function() {
                                return cachedResponse;
                            });
                    }
                    return cachedResponse;
                }

                // запрашиваем из сети как обычно
                return fetch(event.request);
            })
    );
}

self.addEventListener('install', swInstall);

self.addEventListener('fetch', swFetch);