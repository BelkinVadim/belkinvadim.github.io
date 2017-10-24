(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='/',b(b.s=5)})([function(a){'use strict';function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='+e.sourceRoot+a+' */'});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+b)+' */'}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '+c[2]+'{'+d+'}':d}).join('')},c.i=function(a,b){'string'==typeof a&&(a=[[null,a,'']]);for(var d,e={},f=0;f<this.length;f++)d=this[f][0],'number'==typeof d&&(e[d]=!0);for(f=0;f<a.length;f++){var g=a[f];'number'==typeof g[0]&&e[g[0]]||(b&&!g[2]?g[2]=b:b&&(g[2]='('+g[2]+') and ('+b+')'),c.push(g))}},c}},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}Object.defineProperty(b,'__esModule',{value:!0});var e=c(36),f=function(a){return a&&a.__esModule?a:{default:a}}(e);const g={name:'NotesDB',version:1,stores:[{name:'notes',options:{keyPath:'id',autoIncrement:!0},indexes:[{name:'id',keyPath:'id',parameters:{unique:!0}},{name:'title',keyPath:'title',parameters:{unique:!1}},{name:'text',keyPath:'text',parameters:{unique:!1}},{name:'creation_date',keyPath:'creation_date',parameters:{unique:!1}},{name:'update_date',keyPath:'update_date',parameters:{unique:!1}}]}]};b.default=new class{constructor(){this.database=null,this.notes=[]}init(){var a=this;return d(function*(){yield a.loadDataBase(),yield a.loadStore('notes')})()}loadDataBase(){return new Promise((a,b)=>{const c=window.indexedDB.open(g.name,g.version);c.onsuccess=(b)=>{this.database=b.target.result,a()},c.onupgradeneeded=(a)=>{const b=a.target.result;g.stores.forEach((c)=>{if(!b.objectStoreNames.contains(c.name)){const b=a.target.result.createObjectStore(c.name,c.options);c.indexes.forEach((a)=>{b.createIndex(a.name,a.keyPath,a.parameters)})}})},c.onerror=()=>{b(Error(c.error))}})}loadStore(a){return new Promise((b)=>{const c=this.database.transaction(a).objectStore(a);c.openCursor().onsuccess=(c)=>{const d=c.target.result;if(d){let b=d.value;this[a].push(b),d.continue()}else b()}})}saveNote(a){return new Promise((b,c)=>{a.id||(a.id=f.default.v4()),a.creation_date||(a.creation_date=Date.now()),a.update_date=Date.now();const d=this.database.transaction('notes','readwrite').objectStore('notes'),e=d.put(a);e.onsuccess=()=>{const c=this.notes.findIndex((b)=>b.id===a.id);-1===c?this.notes.push(a):this.notes.splice(c,1,a),b()},e.onerror=()=>{c(Error(e.error))}})}removeNote(a){return new Promise((b,c)=>{a.id||c();const d=this.database.transaction('notes','readwrite').objectStore('notes'),e=d.delete(a.id);e.onsuccess=()=>{const c=this.notes.findIndex((b)=>b.id===a.id);this.notes.splice(c,1),b()},e.onerror=()=>{c(Error(e.error))}})}}},function(a,b,c){'use strict';var d=c(6),e=function(a){return a&&a.__esModule?a:{default:a}}(d);const f={add:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>',arrow_back:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',delete:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>',done:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>'};class g extends HTMLElement{static get is(){return'custom-icon'}static get template(){return`
            <style>${e.default}</style>
            <div class="content"></div>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(a){'icon'===a&&this.icon&&(this.shadowRoot.querySelector('.content').innerHTML=f[this.icon])}static get observedAttributes(){return['icon']}set icon(a){this.setAttribute('icon',a)}get icon(){return this.getAttribute('icon')}}window.customElements.define(g.is,g)},function(a,b,c){'use strict';(function(b){var c,d=b.crypto||b.msCrypto;if(d&&d.getRandomValues){var e=new Uint8Array(16);c=function(){return d.getRandomValues(e),e}}if(!c){var f=Array(16);c=function(){for(var a,b=0;16>b;b++)0==(3&b)&&(a=4294967296*Math.random()),f[b]=255&a>>>((3&b)<<3);return f}}a.exports=c}).call(b,c(38))},function(a){'use strict';for(var b=[],c=0;256>c;++c)b[c]=(c+256).toString(16).substr(1);a.exports=function(a,c){var d=c||0,e=b;return e[a[d++]]+e[a[d++]]+e[a[d++]]+e[a[d++]]+'-'+e[a[d++]]+e[a[d++]]+'-'+e[a[d++]]+e[a[d++]]+'-'+e[a[d++]]+e[a[d++]]+'-'+e[a[d++]]+e[a[d++]]+e[a[d++]]+e[a[d++]]+e[a[d++]]+e[a[d++]]}},function(a,b,c){'use strict';c(2),c(8),c(11),c(14),c(17),c(20),c(23),c(26),c(29),c(32),c(35),c(40),c(41)},function(a,b,c){var d=c(7);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tvertical-align: middle;\r\n\tfill: currentcolor;\r\n\tstroke: none;\r\n\topacity: var(--custom-icon-opacity, 1);\r\n\ttransition:\r\n\t\t\tcolor .3s ease,\r\n\t\t\topacity .3s ease;\r\n}\r\n\r\n:host([hidden]) {\r\n\tdisplay: none;\r\n}\r\n\r\nsvg {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}',''])},function(a,b,c){'use strict';var d=c(9),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'flat-button'}static get template(){return`
            <style>${e.default}</style>
            <div class="shade"></div>
            <slot></slot>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(){}static get observedAttributes(){return['pressed','disabled']}set pressed(a){!!a?this.setAttribute('pressed',''):this.removeAttribute('pressed')}get pressed(){return this.hasAttribute('pressed')}set disabled(a){!!a?this.setAttribute('disabled',''):this.removeAttribute('disabled')}get disabled(){return this.hasAttribute('disabled')}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(10);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\t/*min-width: 88px;*/\r\n\theight: 36px;\r\n\tpadding: 0 16px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tline-height: 36px;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tborder-radius: 2px;\r\n\toutline: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n\ttransition:\r\n\t\t\tcolor .3s ease,\r\n\t\t\tbackground-color .3s ease,\r\n\t\t\tbox-shadow .3s ease;\r\n}\r\n\r\n:host .shade {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: var(--button-shade-background-color, transparent);\r\n\ttransition: background-color .3s ease;\r\n\tpointer-events: none;\r\n}\r\n\r\n:host(:hover),\r\n:host(:focus) {\r\n\t--button-shade-background-color: rgba(153, 153, 153, .2);\r\n}\r\n\r\n:host(:active) {\r\n\t--button-shade-background-color: rgba(153, 153, 153, .4);\r\n}\r\n\r\n:host(.primary) {\r\n\tcolor: var(--primary-color);\r\n}\r\n\r\n:host(.accent) {\r\n\tcolor: var(--accent-color);\r\n}\r\n\r\n:host([disabled]) {\r\n\tcolor: rgba(0, 0, 0, .26);\r\n\tbackground-color: rgba(0, 0, 0, .12);\r\n\tpointer-events: none;\r\n\tcursor: auto;\r\n}',''])},function(a,b,c){'use strict';c(2);var d=c(12),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'icon-button'}static get template(){return`
            <style>${e.default}</style>
            <custom-icon></custom-icon>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(a){if('icon'===a&&this.icon){const a=this.shadowRoot.querySelector('custom-icon');a.icon=this.icon}}static get observedAttributes(){return['pressed','disabled','icon']}set icon(a){this.setAttribute('icon',a)}get icon(){return this.getAttribute('icon')}set pressed(a){!!a?this.setAttribute('pressed',''):this.removeAttribute('pressed')}get pressed(){return this.hasAttribute('pressed')}set disabled(a){!!a?this.setAttribute('disabled',''):this.removeAttribute('disabled')}get disabled(){return this.hasAttribute('disabled')}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(13);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: relative;\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tpadding: 8px;\r\n\toutline: none;\r\n\tuser-select: none;\r\n\tcursor: pointer;\r\n\tbox-sizing: border-box;\r\n\ttransition: color .3s ease;\r\n\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n\t-webkit-tap-highlight-color: transparent;\r\n\t--custom-icon-opacity: .54;\r\n}\r\n\r\n:host(:hover),\r\n:host(:focus) {\r\n\t--custom-icon-opacity: .87;\r\n}\r\n\r\n:host([disabled]) {\r\n\tpointer-events: none;\r\n\tcursor: auto;\r\n\t--custom-icon-opacity: .38;\r\n}\r\n\r\n:host([hidden]) {\r\n\tdisplay: none;\r\n}\r\n\r\ncustom-icon {\r\n\tpointer-events: none;\r\n}',''])},function(a,b,c){'use strict';var d=c(15),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'list-item'}static get template(){return`
            <style>${e.default}</style>
            <slot></slot>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(){}static get observedAttributes(){}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(16);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: relative;\r\n\tdisplay: grid;\r\n\talign-items: center;\r\n\talign-content: center;\r\n\tmin-height: 48px;\r\n\tpadding: 12px 16px;\r\n\tfont-size: 16px;\r\n\tline-height: 20px;\r\n\tcolor: var(--primary-text-color);\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n:host(:not(:last-child)) {\r\n\tborder-bottom: 1px solid var(--divider-color);\r\n}\r\n\r\n::slotted(.primary-text),\r\n::slotted(.secondary-text) {\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n}\r\n\r\n::slotted(.primary-text) {}\r\n\r\n::slotted(.secondary-text) {\r\n\tfont-size: 14px;\r\n\tcolor: var(--secondary-text-color);\r\n}\r\n\r\n::slotted(.info-text) {\r\n\tfont-size: 14px;\r\n\tcolor: var(--secondary-text-color);\r\n}\r\n\r\n\r\n\r\n:host(.note) {\r\n\tmin-height: 56px;\r\n\ttransition: background-color .3s ease;\r\n\tuser-select: none;\r\n\toutline: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n:host(.note:hover),\r\n:host(.note:focus) {\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\n:host(.note) ::slotted(.secondary-text) {\r\n\theight: 20px;\r\n\tcolor: inherit;\r\n}',''])},function(a,b,c){'use strict';var d=c(18),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'list-box'}static get template(){return`
            <style>${e.default}</style>
            <slot></slot>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(){}static get observedAttributes(){}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(19);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tpadding-top: 8px;\r\n\tpadding-bottom: 8px;\r\n}\r\n\r\n::slotted(.heading) {\r\n\tmargin: 0;\r\n\tpadding: 0 16px;\r\n\tline-height: 48px;\r\n\tfont-weight: 500;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tcolor: var(--secondary-text-color);\r\n}',''])},function(a,b,c){'use strict';var d=c(21),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'note-editor'}static get template(){return`
            <style>${e.default}</style>
            <div class="title" placeholder="Заголовок" contenteditable></div>
            <div class="text" placeholder="Текст" contenteditable></div>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template,this.handlePaste=this.handlePaste.bind(this)}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(){}static get observedAttributes(){}get noteTitle(){return this.shadowRoot.querySelector('.title').innerHTML}set noteTitle(a){this.shadowRoot.querySelector('.title').innerHTML=a}get noteText(){return this.shadowRoot.querySelector('.text').innerHTML}set noteText(a){this.shadowRoot.querySelector('.text').innerHTML=a}handlePaste(a){a.preventDefault(),document.execCommand('insertText',!1,a.clipboardData.getData('text/plain'))}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(22);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: relative;\r\n\tdisplay: grid;\r\n\tgrid-template-areas:\r\n\t\t\t"title"\r\n\t\t\t"text";\r\n\tgrid-template-rows: auto 1fr;\r\n\tmin-height: 100%;\r\n\tfont-size: 14px;\r\n\tline-height: 24px;\r\n\tcolor: var(--primary-text-color);\r\n\toutline: none;\r\n}\r\n\r\n.title,\r\n.text {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\tpadding: 16px 16px 0;\r\n}\r\n\r\n.title:last-child,\r\n.text:last-child {\r\n\tpadding-bottom: 16px;\r\n}\r\n\r\n.title:empty[placeholder]::before,\r\n.text:empty[placeholder]::before {\r\n\tcontent: attr(placeholder);\r\n\tcolor: var(--secondary-text-color);\r\n\tpointer-events: none;\r\n}\r\n\r\n.title {\r\n\tgrid-area: title;\r\n\tfont-size: 24px;\r\n\tline-height: 32px;\r\n\toutline: none;\r\n}\r\n\r\n.text {\r\n\tgrid-area: text;\r\n\toutline: none;\r\n}',''])},function(a,b,c){'use strict';var d=c(24),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'app-toolbar'}static get template(){return`
            <style>${e.default}</style>
            <slot></slot>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(){}static get observedAttributes(){}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(25);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\theight: 56px;\r\n\tpadding: 0 8px;\r\n\tfont-size: 20px;\r\n\tpointer-events: none;\r\n}\r\n\r\n:host > ::slotted(*:not([disabled])) {\r\n\tpointer-events: auto;\r\n}\r\n\r\n:host > ::slotted(.title) {\r\n\tflex: 1 1 auto;\r\n\tmargin-left: 24px;\r\n\ttext-overflow: ellipsis;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n}\r\n\r\n:host > ::slotted(.title:first-child) {\r\n\tmargin-left: 16px;\r\n}\r\n\r\n:host ::slotted(icon-button) {\r\n\t--custom-icon-opacity: .7;\r\n}\r\n\r\n:host ::slotted(icon-button:focus),\r\n:host ::slotted(icon-button:active) {\r\n\t--custom-icon-opacity: 1;\r\n}\r\n\r\n:host ::slotted(icon-button[disabled]) {\r\n\t--custom-icon-opacity: .5;\r\n}\r\n\r\n:host(.primary) {\r\n\tcolor: var(--primary-color-contrast);\r\n\tbackground-color: var(--primary-color);\r\n}\r\n\r\n:host(.accent) {\r\n\tcolor: var(--accent-color-contrast);\r\n\tbackground-color: var(--accent-color);\r\n}\r\n\r\n/* Tablet */\r\n@media (min-width: 768px) {\r\n\t:host {\r\n\t\theight: 64px;\r\n\t\tpadding: 0 16px;\r\n\t}\r\n}',''])},function(a,b,c){'use strict';var d=c(27),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'app-header'}static get template(){return`
            <style>${e.default}</style>
            <slot></slot>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(){}static get observedAttributes(){}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(28);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n    position: relative;\r\n    display: block;\r\n    box-shadow: var(--shadow-elevation-4);\r\n    z-index: 4;\r\n}',''])},function(a,b,c){'use strict';var d=c(30),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'app-loader'}static get template(){return`
            <style>${e.default}</style>
            <div class="loader">
                <svg height="100" width="100" viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                </svg>
            </div>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(){}static get observedAttributes(){}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(31);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--primary-color);\r\n    opacity: 1;\r\n    transition: opacity .3s ease;\r\n    z-index: 9999;\r\n}\r\n\r\n:host([hidden]) {\r\n    opacity: 0;\r\n}\r\n\r\n.loader {\r\n    position: absolute;\r\n    top: calc(50% - .5em);\r\n    left: calc(50% - .5em);\r\n    width: 1em;\r\n    height: 1em;\r\n    font-size: 125px;\r\n}\r\n\r\n:host([hidden]) .loader {\r\n    display: none;\r\n}\r\n\r\nsvg {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    animation: rotate 2s linear infinite;\r\n}\r\n\r\ncircle {\r\n    stroke: #fff;\r\n    stroke-dasharray: 1,200;\r\n    stroke-dashoffset: 0;\r\n    stroke-linecap: round;\r\n    animation: dash 1.5s ease-in-out infinite;\r\n}\r\n\r\n@keyframes rotate {\r\n    100%{\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes dash {\r\n    0%{\r\n        stroke-dasharray: 1,200;\r\n        stroke-dashoffset: 0;\r\n    }\r\n    50%{\r\n        stroke-dasharray: 89,200;\r\n        stroke-dashoffset: -35;\r\n    }\r\n    100%{\r\n        stroke-dasharray: 89,200;\r\n        stroke-dashoffset: -124;\r\n    }\r\n}',''])},function(a,b,c){'use strict';var d=c(33),e=function(a){return a&&a.__esModule?a:{default:a}}(d);class f extends HTMLElement{static get is(){return'app-screen'}static get template(){return`
            <style>${e.default}</style>
            <div class="header">
	            <slot name="header"></slot>
            </div>
	        <div class="body">
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(){}static get observedAttributes(){}}window.customElements.define(f.is,f)},function(a,b,c){var d=c(34);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: stretch;\r\n\tjustify-content: flex-start;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.header {}\r\n\r\n.body {\r\n\tposition: relative;\r\n\tflex: 1 1 auto;\r\n}\r\n\r\n.content {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t/*padding-left: calc((100% - 768px) / 2);\r\n\tpadding-right: calc((100% - 768px) / 2);*/\r\n\toverflow: auto;\r\n\tbox-sizing: border-box;\r\n}',''])},function(a,b,c){'use strict';function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}var e=c(1),f=function(a){return a&&a.__esModule?a:{default:a}}(e);class g extends HTMLElement{static get is(){return'screen-note'}static get template(){return`
            <app-screen>
                <app-header slot="header">
                    <app-toolbar class="primary">
                        <icon-button class="js-back" icon="arrow_back" tabindex="0" role="button" aria-label="К списку заметок"></icon-button>
                        <div class="title"></div>
                        <icon-button class="js-remove" icon="delete" tabindex="0" role="button" aria-label="Удалить заметку"></icon-button>
                        <icon-button class="js-save" icon="done" tabindex="0" role="button" aria-label="Сохранить изменения"></icon-button>
                    </app-toolbar>
                </app-header>
                <note-editor></note-editor>
            </app-screen>
        `}static get observedAttributes(){return['note']}get note(){return f.default.notes.find((a)=>a.id===this.getAttribute('note'))}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template,this.handleSave=this.handleSave.bind(this),this.handleRemove=this.handleRemove.bind(this),this.handleBack=this.handleBack.bind(this)}connectedCallback(){this.shadowRoot.querySelector('.js-save').addEventListener('click',this.handleSave),this.shadowRoot.querySelector('.js-remove').addEventListener('click',this.handleRemove),this.shadowRoot.querySelector('.js-back').addEventListener('click',this.handleBack),this.render()}disconnectedCallback(){}attributeChangedCallback(){this.render()}render(){const{note:a}=this,b=this.shadowRoot.querySelector('.title'),c=this.shadowRoot.querySelector('.js-remove'),d=this.shadowRoot.querySelector('note-editor');b.innerHTML=a?'\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C':'\u0421\u043E\u0437\u0434\u0430\u0442\u044C',c.hidden=!a,c.setAttribute('aria-hidden',!a),a&&(d.noteTitle=a.title,d.noteText=a.text)}handleSave(){var a=this;return d(function*(){const b=a.note||{},c=a.shadowRoot.querySelector('note-editor'),d=c.noteTitle,e=c.noteText;d||e?(b.title=d,b.text=e,yield f.default.saveNote(b)):b.id&&(yield f.default.removeNote(b)),a.handleBack()})()}handleRemove(){var a=this;return d(function*(){const{note:b}=a;b&&(yield f.default.removeNote(b)),a.handleBack()})()}handleBack(){document.querySelector('app-main').page='notes',document.querySelector('app-main').note=''}}window.customElements.define(g.is,g)},function(a,b,c){'use strict';var d=c(37),e=c(39),f=e;f.v1=d,f.v4=e,a.exports=f},function(a,b,c){'use strict';var d=c(3),e=c(4),f=d(),g=[1|f[0],f[1],f[2],f[3],f[4],f[5]],h=16383&(f[6]<<8|f[7]),j=0,k=0;a.exports=function(a,c,d){var f=c&&d||0,i=c||[];a=a||{};var b=void 0===a.clockseq?h:a.clockseq,l=void 0===a.msecs?new Date().getTime():a.msecs,m=void 0===a.nsecs?k+1:a.nsecs,o=l-j+(m-k)/1e4;if(0>o&&void 0===a.clockseq&&(b=16383&b+1),(0>o||l>j)&&void 0===a.nsecs&&(m=0),1e4<=m)throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');j=l,k=m,h=b,l+=1.22192928e13;var p=(1e4*(268435455&l)+m)%4294967296;i[f++]=255&p>>>24,i[f++]=255&p>>>16,i[f++]=255&p>>>8,i[f++]=255&p;var q=268435455&1e4*(l/4294967296);i[f++]=255&q>>>8,i[f++]=255&q,i[f++]=16|15&q>>>24,i[f++]=255&q>>>16,i[f++]=128|b>>>8,i[f++]=255&b;for(var r=a.node||g,s=0;6>s;++s)i[f+s]=r[s];return c?c:e(i)}},function(a){'use strict';var b=function(){return this}();try{b=b||Function('return this')()||(1,eval)('this')}catch(a){'object'==typeof window&&(b=window)}a.exports=b},function(a,b,c){'use strict';var d=c(3),e=c(4);a.exports=function(a,b,c){var f=b&&c||0;'string'==typeof a&&(b='binary'==a?Array(16):null,a=null),a=a||{};var g=a.random||(a.rng||d)();if(g[6]=64|15&g[6],g[8]=128|63&g[8],b)for(var h=0;16>h;++h)b[f+h]=g[h];return b||e(g)}},function(a,b,c){'use strict';function d(a){const b=new Date,c=new Date(a),d=b.getFullYear()===c.getFullYear(),e=b.getMonth()===c.getMonth(),f=b.getDate()===c.getDate();let g,h='toLocaleDateString';return f&&e&&d?(h='toLocaleTimeString',g={hour:'numeric',minute:'numeric'}):d?g={day:'numeric',month:'short'}:g={year:'numeric',day:'numeric',month:'short'},c[h]('ru',g)}var e=c(1),f=function(a){return a&&a.__esModule?a:{default:a}}(e);class g extends HTMLElement{static get is(){return'screen-notes'}static get template(){return`
            <app-screen>
                <app-header slot="header">
                    <app-toolbar class="primary">
                        <div class="title">Заметки</div>
                        <icon-button class="js-create" icon="add" tabindex="0" role="button" aria-label="Создать заметку"></icon-button>
                    </app-toolbar>
                </app-header>
                <div id="content"></div>
            </app-screen>
        `}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template,this.handleCreate=this.handleCreate.bind(this)}connectedCallback(){this.shadowRoot.querySelector('.js-create').addEventListener('click',this.handleCreate),this.render()}disconnectedCallback(){}render(){const a=this.createNotesList();this.shadowRoot.querySelector('#content').innerHTML='',this.shadowRoot.querySelector('#content').append(a)}createNotesList(){const{notes:a}=f.default,b=document.createElement('list-box');return a.sort((c,a)=>a.update_date-c.update_date).forEach((a)=>{const c=this.createNoteItem(a);b.append(c)}),b}createNoteItem(a){const{id:b,title:c,text:e,update_date:f}=a,g=document.createElement('list-item');return g.classList.add('note'),g.setAttribute('tabindex',0),g.innerHTML=`
            <div class="primary-text">
                ${c}
            </div>
            <div class="secondary-text">
                ${e}
            </div>
            <div class="info-text">
                Изменено: ${d(f)}
            </div>
        `,g.addEventListener('click',()=>{document.querySelector('app-main').page='note',document.querySelector('app-main').note=b}),g}handleCreate(){document.querySelector('app-main').page='note'}}window.customElements.define(g.is,g)},function(a,b,c){'use strict';function d(a){return a&&a.__esModule?a:{default:a}}var e=c(1),f=d(e),g=c(42),h=d(g);class i extends HTMLElement{static get is(){return'app-main'}static get template(){return`
            <style>${h.default}</style>
            <slot></slot>
        `}static get observedAttributes(){return['page','note']}get page(){return this.getAttribute('page')}set page(a){this.setAttribute('page',a)}get note(){return this.getAttribute('note')}set note(a){this.setAttribute('note',a)}constructor(){super(),this.attachShadow({mode:'open'}),this.shadowRoot.innerHTML=this.constructor.template}connectedCallback(){const a=+new Date,b=document.createElement('app-loader');document.body.append(b),f.default.init().then(()=>{const c=+new Date,d=c-a;this.render(),setTimeout(()=>{b.hidden=!0,b.addEventListener('transitionend',()=>{b.remove()},!1)},1e3>d?1e3-d:0)})}disconnectedCallback(){}attributeChangedCallback(){this.render()}render(){const{page:a,note:b}=this;let c;switch(a){case'note':c=`<screen-note note="${b}"></screen-note>`;break;default:c=`<screen-notes></screen-notes>`;}this.innerHTML=c}}window.customElements.define(i.is,i)},function(a,b,c){var d=c(43);a.exports='string'==typeof d?d:d.toString()},function(a,b,c){b=a.exports=c(0)(void 0),b.push([a.i,':host {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}',''])}]);