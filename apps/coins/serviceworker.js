/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const PARAMETERS = {
    version: '0.0.1',
    lifetime: 86400000, // 7 дней
    app_cache: ['./', './index.html', './js/webcomponents-sd-ce.js', './js/app.js']
};

function swInstall(event) {
    event.waitUntil(caches.open('app-cache').then(cache => {
        return cache.addAll(PARAMETERS.app_cache);
    }));
}

function swFetch(event) {
    event.respondWith(
    // ищем запрошенный ресурс среди закэшированных
    caches.match(event.request).then(function (cachedResponse) {
        let lastModified, fetchRequest, isEndLifetime;

        // если ресурс есть в кэше
        if (cachedResponse) {
            // получаем дату последнего обновления
            lastModified = new Date(cachedResponse.headers.get('last-modified'));
            isEndLifetime = lastModified && Date.now() - lastModified.getTime() > PARAMETERS.lifetime;

            // Если ресурс устарел
            if (isEndLifetime) {
                fetchRequest = event.request.clone();
                // создаём новый запрос
                return fetch(fetchRequest).then(function (response) {
                    // при неудаче всегда можно выдать ресурс из кэша
                    if (!response || response.status !== 200) {
                        return cachedResponse;
                    }

                    // обновляем кэш
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, response.clone());
                    });

                    // возвращаем свежий ресурс
                    return response;
                }).catch(function () {
                    return cachedResponse;
                });
            }
            return cachedResponse;
        }

        // запрашиваем из сети как обычно
        return fetch(event.request);
    }));
}

self.addEventListener('install', swInstall);

self.addEventListener('fetch', swFetch);

/***/ })

/******/ });