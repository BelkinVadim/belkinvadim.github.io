(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/',b(b.s=73)})({73:function(){'use strict';const a={version:'0.0.1',lifetime:8.64e7,app_cache:['./','./index.html','./css/main.css','./css/fonts/Roboto/Roboto-Light.woff2','./css/fonts/Roboto/Roboto-Regular.woff2','./css/fonts/Roboto/Roboto-Medium.woff2','./css/fonts/Roboto/Roboto-Bold.woff2','./js/app.js']};self.addEventListener('install',function(b){b.waitUntil(caches.open('app-cache').then((b)=>b.addAll(a.app_cache)))}),self.addEventListener('fetch',function(b){b.respondWith(caches.match(b.request).then(function(c){let d,e,f;return c?(d=new Date(c.headers.get('last-modified')),f=d&&Date.now()-d.getTime()>a.lifetime,f?(e=b.request.clone(),fetch(e).then(function(a){return a&&200===a.status?(caches.open(CACHE_NAME).then(function(c){c.put(b.request,a.clone())}),a):c}).catch(function(){return c})):c):fetch(b.request)}))})}});