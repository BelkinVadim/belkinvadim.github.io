(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=37)})({37:function(){'use strict';const a=['./','./index.html','./manifest.json','./css/main.css','./css/fonts/Roboto/Roboto-Light.woff2','./css/fonts/Roboto/Roboto-Regular.woff2','./css/fonts/Roboto/Roboto-Medium.woff2','./css/fonts/Roboto/Roboto-Bold.woff2','./js/app.js'];self.addEventListener('install',(b)=>{b.waitUntil(caches.open('app-cache').then((b)=>b.addAll(a)))}),self.addEventListener('fetch',function(a){a.respondWith(caches.match(a.request).then(function(b){let c,d;return b?(c=new Date(b.headers.get('last-modified')),c&&Date.now()-c.getTime()>8.64e7?(d=a.request.clone(),fetch(d).then(function(c){return c&&200===c.status?(caches.open(CACHE_NAME).then(function(b){b.put(a.request,c.clone())}),c):b}).catch(function(){return b})):b):fetch(a.request)}))})}});