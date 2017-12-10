(function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='/',t(t.s=173)})([,function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.Base=void 0;var n=a(43);a(3),a(186),a(187),a(30),a(31),a(188),a(189),a(191);t.Base=(0,n.LegacyElementMixin)(HTMLElement).prototype},function(){'use strict';window.JSCompiler_renameProperty=function(e){return e}},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.Polymer=void 0;var n=a(185);t.Polymer=function(e){let t;return t='function'==typeof e?e:(0,n.Class)(e),customElements.define(t.is,t),t}},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.addDebouncer=t.flush=t.matchesSelector=t.dom=t.DomApi=void 0,a(2),a(10);var n=a(184),o=a(14);const r=Element.prototype,s=r.matches||r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector,d=function(e,t){return s.call(e,t)};class l{constructor(e){this.node=e}observeNodes(e){return new n.FlattenedNodesObserver(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(this.node.contains(e))return!0;let t=e,a=e.ownerDocument;for(;t&&t!==a&&t!==this.node;)t=t.parentNode||t.host;return t===this.node}getOwnerRoot(){return this.node.getRootNode()}getDistributedNodes(){return'slot'===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=this.node.assignedSlot;for(;t;)e.push(t),t=t.assignedSlot;return e}importNode(e,t){let a=this.node instanceof Document?this.node:this.node.ownerDocument;return a.importNode(e,t)}getEffectiveChildNodes(){return n.FlattenedNodesObserver.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),a=[];for(let n=0,o=t.length,r;n<o&&(r=t[n]);n++)r.nodeType===Node.ELEMENT_NODE&&d(r,e)&&a.push(r);return a}get activeElement(){let e=this.node;return e._activeElement===void 0?e.activeElement:e._activeElement}}(function(e,t){for(let a=0,n;a<t.length;a++)n=t[a],e[n]=function(){return this.node[n].apply(this.node,arguments)}})(l.prototype,['cloneNode','appendChild','insertBefore','removeChild','replaceChild','setAttribute','removeAttribute','querySelector','querySelectorAll']),function(e,t){for(let a=0,n;a<t.length;a++)n=t[a],Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}(l.prototype,['parentNode','firstChild','lastChild','nextSibling','previousSibling','firstElementChild','lastElementChild','nextElementSibling','previousElementSibling','childNodes','children','classList']),function(e,t){for(let a=0,n;a<t.length;a++)n=t[a],Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}(l.prototype,['textContent','innerHTML']);class u{constructor(e){this.event=e}get rootTarget(){return this.event.composedPath()[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}t.DomApi=l;t.dom=function(e){if(e=e||document,!e.__domApi){let t;t=e instanceof Event?new u(e):new l(e),e.__domApi=t}return e.__domApi};t.matchesSelector=d,t.flush=o.flush,t.addDebouncer=o.enqueueDebouncer},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.Element=void 0;var n=a(22);const o=(0,n.ElementMixin)(HTMLElement);t.Element=o},function(e,t,a){'use strict';function n(){}Object.defineProperty(t,'__esModule',{value:!0}),t.dedupingMixin=void 0,a(2);let o=0;n.prototype.__mixinApplications,n.prototype.__mixinSet;t.dedupingMixin=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let a=o++;return function(n){let o=n.__mixinSet;if(o&&o[a])return n;let r=t,s=r.get(n);s||(s=e(n),r.set(n,s));let d=Object.create(s.__mixinSet||o||null);return d[a]=!0,s.__mixinSet=d,s}}},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.microTask=t.idlePeriod=t.animationFrame=t.timeOut=void 0,a(2);let n=0,o=0,r=[],s=0,d=document.createTextNode('');new window.MutationObserver(function(){const e=r.length;for(let t=0,a;t<e;t++)if(a=r[t],a)try{a()}catch(t){setTimeout(()=>{throw t})}r.splice(0,e),o+=e}).observe(d,{characterData:!0});const l=t.timeOut={after(e){return{run(t){return setTimeout(t,e)},cancel:window.clearTimeout.bind(window)}},run:window.setTimeout.bind(window),cancel:window.clearTimeout.bind(window)},u=t.animationFrame={run:window.requestAnimationFrame.bind(window),cancel:window.cancelAnimationFrame.bind(window)},c=t.idlePeriod={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},p=t.microTask={run(e){return d.textContent=s++,r.push(e),n++},cancel(e){const t=e-o;if(0<=t){if(!r[t])throw new Error('invalid async handle: '+e);r[t]=null}}}},function(e,t,a){'use strict';a(1);const n=document.createElement('div');n.setAttribute('style','display: none;'),n.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`,document.head.appendChild(n)},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.Debouncer=void 0,a(2),a(6),a(7);class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,a){return e instanceof n?e.cancel():e=new n,e.setConfig(t,a),e}}t.Debouncer=n},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.setSanitizeDOMValue=t.sanitizeDOMValue=t.setRootPath=t.rootPath=t.Settings=t.useNativeCustomElements=t.useNativeCSSProperties=t.useShadow=void 0,a(2);var n=a(11);const o=t.useShadow=!window.ShadyDOM,r=t.useNativeCSSProperties=!(window.ShadyCSS&&!window.ShadyCSS.nativeCss),s=t.useNativeCustomElements=!window.customElements.polyfillWrapFlushCallback;t.Settings={};let d=(0,n.pathFromUrl)(document.baseURI||window.location.href);t.rootPath=d;t.setRootPath=function(e){t.rootPath=d=e};let l;t.sanitizeDOMValue=l;t.setSanitizeDOMValue=function(e){t.sanitizeDOMValue=l=e}},function(e,t,a){'use strict';function n(e,t){if(e&&r.test(e))return e;if(void 0==s){s=!1;try{const e=new URL('b','http://a');e.pathname='c%20d',s='http://a/c%20d'===e.href}catch(t){}}return(t||(t=document.baseURI||window.location.href),s)?new URL(e,t).href:(d||(d=document.implementation.createHTMLDocument('temp'),d.base=d.createElement('base'),d.head.appendChild(d.base),d.anchor=d.createElement('a'),d.body.appendChild(d.anchor)),d.base.href=t,d.anchor.href=e,d.anchor.href||e)}Object.defineProperty(t,'__esModule',{value:!0}),t.pathFromUrl=t.resolveUrl=t.resolveCss=void 0,a(2);let o=/(url\()([^)]*)(\))/g,r=/(^\/)|(^#)|(^[\w-\d]*:)/,s,d;t.resolveCss=function(e,t){return e.replace(o,function(e,a,o,r){return a+'\''+n(o.replace(/["']/g,''),t)+'\''+r})},t.resolveUrl=n,t.pathFromUrl=function(e){return e.substring(0,e.lastIndexOf('/')+1)}},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.dashToCamelCase=function(e){return n[e]||(n[e]=0>e.indexOf('-')?e:e.replace(o,(e)=>e[1].toUpperCase()))},t.camelToDashCase=function(e){return n[e]||(n[e]=e.replace(r,'-$1').toLowerCase())},a(2);const n={},o=/-[a-z]/g,r=/([A-Z])/g},function(e,t,a){'use strict';function n(e){return 0<=e.indexOf('.')}function o(e,t){return 0===e.indexOf(t+'.')}function r(e,t){return 0===t.indexOf(e+'.')}function s(e){if(Array.isArray(e)){let t=[];for(let a=0,n;a<e.length;a++){n=e[a].toString().split('.');for(let e=0;e<n.length;e++)t.push(n[e])}return t.join('.')}return e}function d(e){return Array.isArray(e)?s(e).split('.'):e.toString().split('.')}Object.defineProperty(t,'__esModule',{value:!0}),t.isDeep=void 0,t.isPath=n,t.root=function(e){let t=e.indexOf('.');return-1===t?e:e.slice(0,t)},t.isAncestor=o,t.isDescendant=r,t.translate=function(e,t,a){return t+a.slice(e.length)},t.matches=function(e,t){return e===t||o(e,t)||r(e,t)},t.normalize=s,t.split=d,t.get=function(e,t,a){let n=e,o=d(t);for(let r=0;r<o.length;r++){if(!n)return;let e=o[r];n=n[e]}return a&&(a.path=o.join('.')),n},t.set=function(e,t,a){let n=e,o=d(t),r=o[o.length-1];if(1<o.length){for(let e=0,t;e<o.length-1;e++)if(t=o[e],n=n[t],!n)return;n[r]=a}else n[t]=a;return o.join('.')},a(2);t.isDeep=n},function(e,t,a){'use strict';function n(){const e=!!o.length;for(;o.length;)try{o.shift().flush()}catch(t){setTimeout(()=>{throw t})}return e}Object.defineProperty(t,'__esModule',{value:!0}),t.flush=t.enqueueDebouncer=void 0,a(2);let o=[];const r=t.enqueueDebouncer=function(e){o.push(e)},s=t.flush=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=n();while(e||t)}},function(e,t,a){'use strict';function n(e,t,a,n,o){let r;o&&(r='object'==typeof a&&null!==a,r&&(n=e.__dataTemp[t]));let s=n!==a&&(n===n||a===a);return r&&s&&(e.__dataTemp[t]=a),s}Object.defineProperty(t,'__esModule',{value:!0}),t.OptionalMutableData=t.MutableData=void 0;var o=a(6);const r=t.MutableData=(0,o.dedupingMixin)((e)=>{class t extends e{_shouldPropertyChange(e,t,a){return n(this,e,t,a,!0)}}return t.prototype.mutableData=!1,t}),s=t.OptionalMutableData=(0,o.dedupingMixin)((e)=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,a){return n(this,e,t,a,this.mutableData)}}return t});r._mutablePropertyChange=n},function(e,t,a){'use strict';var n=a(1);a(51),a(8);var o=a(3),r=a(4);(0,o.Polymer)({_template:`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:'iron-icon',properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:n.Base.create('iron-meta',{type:'iconset'})}},observers:['_updateIcon(_meta, isAttached)','_updateIcon(theme, isAttached)','_srcChanged(src, isAttached)','_iconChanged(icon, isAttached)'],_DEFAULT_ICONSET:'icons',_iconChanged:function(e){var t=(e||'').split(':');this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,r.dom)(this.root).removeChild(this._img),''===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,'iron-iconset-added','_updateIcon')):this.listen(window,'iron-iconset-added','_updateIcon'))):(this._iconset&&this._iconset.removeIcon(this),!this._img&&(this._img=document.createElement('img'),this._img.style.width='100%',this._img.style.height='100%',this._img.draggable=!1),this._img.src=this.src,(0,r.dom)(this.root).appendChild(this._img))}})},function(e,t,a){'use strict';a(1),a(52);const n=document.createElement('div');n.setAttribute('style','display: none;'),n.innerHTML=`<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.html for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`,document.head.appendChild(n)},function(e,t,a){'use strict';var n=Math.min,o=Math.max,r=Math.abs;a(1),a(8);var s=a(211),d=a(32),l=a(3),u=a(4);(0,l.Polymer)({_template:`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:'app-header',behaviors:[s.AppScrollEffectsBehavior,d.AppLayoutBehavior],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:['_configChanged(isAttached, condenses, fixed)'],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e=(0,u.dom)(this.$.slot).getDistributedNodes(),t=0,a;a=e[t];t++)if(a.nodeType===Node.ELEMENT_NODE)if(a.hasAttribute('sticky')){this._stickyElRef=a;break}else this._stickyElRef||(this._stickyElRef=a);return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,a=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._dHeight=this._mayMove()?this._stickyEl?this._height-this._stickyEl.offsetHeight:0:0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=a}},_updateScrollState:function(e,t){if(0!==this._height){var a=0,n=0,s=this._top,d=this._lastScrollTop,l=this._maxHeaderTop,u=e-this._lastScrollTop,c=r(u),p=e>this._lastScrollTop,_=performance.now();if(this._mayMove()&&(n=this._clamp(this.reveals?s+u:e,0,l)),e>=this._dHeight&&(n=this.condenses&&!this.fixed?o(this._dHeight,n):n,this.style.transitionDuration='0ms'),this.reveals&&!this.disabled&&100>c&&((300<_-this._initTimestamp||this._wasScrollingDown!==p)&&(this._initScrollTop=e,this._initTimestamp=_),e>=l))if(30<r(this._initScrollTop-e)||10<c){p&&e>=l?n=l:!p&&e>=this._dHeight&&(n=this.condenses&&!this.fixed?this._dHeight:0);var m=u/(_-this._lastTimestamp);this.style.transitionDuration=this._clamp((n-s)/m,0,300)+'ms'}else n=this._top;a=0===this._dHeight?0<e?1:0:n/this._dHeight,t||(this._lastScrollTop=e,this._top=n,this._wasScrollingDown=p,this._lastTimestamp=_),(t||a!==this._progress||s!==n||0===e)&&(this._progress=a,this._runEffects(a,n),this._transformHeader(n))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return 0<this._dHeight&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?0<this._clampedScrollTop:0<=this._clampedScrollTop-this._maxHeaderTop},_transformHeader:function(e){this.translate3d(0,-e+'px',0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?n(e,this._dHeight)-this._stickyElTop+'px':0,0,this._stickyEl)},_clamp:function(e,t,a){return n(a,o(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement('div'),this._bgContainer.id='background',this._bgRear=document.createElement('div'),this._bgRear.id='backgroundRearLayer',this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement('div'),this._bgFront.id='backgroundFrontLayer',this._bgContainer.appendChild(this._bgFront),(0,u.dom)(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){return'backgroundFrontLayer'===e?(this._ensureBgContainers(),this._bgFront):'backgroundRearLayer'===e?(this._ensureBgContainers(),this._bgRear):'background'===e?(this._ensureBgContainers(),this._bgContainer):'mainTitle'===e?(0,u.dom)(this).querySelector('[main-title]'):'condensedTitle'===e?(0,u.dom)(this).querySelector('[condensed-title]'):null},getScrollState:function(){return{progress:this._progress,top:this._top}}})},function(e,t,a){'use strict';a(1),a(8);var n=a(32),o=a(3),r=a(4);(0,o.Polymer)({_template:`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:'app-header-layout',behaviors:[n.AppLayoutBehavior],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:['resetLayout(isAttached, hasScrollingRegion)'],get header(){return(0,r.dom)(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove('initializing'),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left='',e.style.right=''):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),a=document.documentElement.clientWidth-t.right;e.style.left=t.left+'px',e.style.right=a+'px'}.bind(this));var a=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(a.marginTop=t+'px',a.paddingTop=''):(a.paddingTop=t+'px',a.marginTop='')}}})},function(e,t,a){'use strict';a(1),a(8);var n=a(3);(0,n.Polymer)({_template:`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:'app-toolbar'})},function(e,t,a){'use strict';a(1),a(16);var n=a(214);a(17);var o=a(3);const r=document.createElement('div');r.setAttribute('style','display: none;'),r.innerHTML=`<dom-module id="paper-icon-button">
  <template strip-whitespace="">
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]" alt\$="[[alt]]"></iron-icon>
  </template>

  
</dom-module>`,document.head.appendChild(r),(0,o.Polymer)({is:'paper-icon-button',hostAttributes:{role:'button',tabindex:'0'},behaviors:[n.PaperInkyFocusBehavior],properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:'_altChanged'}},_altChanged:function(e,t){var a=this.getAttribute('aria-label');a&&t!=a||this.setAttribute('aria-label',e)}})},function(e,t,a){'use strict';function n(e){console.log('['+e.is+']: registered')}function o(e){y.push(e),void 0}Object.defineProperty(t,'__esModule',{value:!0}),t.updateStyles=t.registrations=t.instanceCount=t.ElementMixin=void 0,t._regLog=n,t.register=o,t.dumpRegistrations=function(){y.forEach(n)},a(2);var r=a(10),s=a(6),d=a(12),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(d),u=a(41),c=a(11),p=a(42),_=a(23);t.ElementMixin=(0,s.dedupingMixin)((e)=>{function a(e){return e.hasOwnProperty(JSCompiler_renameProperty('__ownProperties',e))||(e.__ownProperties=e.hasOwnProperty(JSCompiler_renameProperty('properties',e))?e.properties:{}),e.__ownProperties}function n(e){return e.hasOwnProperty(JSCompiler_renameProperty('__ownObservers',e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty('observers',e))?e.observers:[]),e.__ownObservers}function s(e,t){for(let a in t){let n=t[a];'function'==typeof n&&(n={type:n}),e[a]=n}return e}function y(e){if(!e.hasOwnProperty(JSCompiler_renameProperty('__classProperties',e))){e.__classProperties=s({},a(e));let t=Object.getPrototypeOf(e.prototype).constructor;t.prototype instanceof I&&(e.__classProperties=Object.assign(Object.create(y(t)),e.__classProperties))}return e.__classProperties}function h(e){if(!e.hasOwnProperty(JSCompiler_renameProperty('__classPropertyDefaults',e))){e.__classPropertyDefaults=null;let t=y(e);for(let a in t){let n=t[a];'value'in n&&(e.__classPropertyDefaults=e.__classPropertyDefaults||{},e.__classPropertyDefaults[a]=n)}}return e.__classPropertyDefaults}function f(e){return e.hasOwnProperty(JSCompiler_renameProperty('__finalized',e))}function g(e){let t=e.prototype,a=Object.getPrototypeOf(t).constructor;a.prototype instanceof I&&a.finalize(),v(e)}function v(e){e.__finalized=!0;let t=e.prototype;e.hasOwnProperty(JSCompiler_renameProperty('is',e))&&e.is&&o(t);let r=a(e);r&&b(t,r);let s=n(e);s&&T(t,s,r);let d=e.template;if(d){if('string'==typeof d){let e=document.createElement('template');e.innerHTML=d,d=e}else d=d.cloneNode(!0);t._template=d}}function b(e,t){for(let a in t)S(e,a,t[a],t)}function T(e,t,a){for(let n=0;n<t.length;n++)e._createMethodObserver(t[n],a)}function S(e,t,a,n){a.computed&&(a.readOnly=!0),a.computed&&!e._hasReadOnlyEffect(t)&&e._createComputedProperty(t,a.computed,n),a.readOnly&&!e._hasReadOnlyEffect(t)&&e._createReadOnlyProperty(t,!a.computed),a.reflectToAttribute&&!e._hasReflectEffect(t)&&e._createReflectedProperty(t),a.notify&&!e._hasNotifyEffect(t)&&e._createNotifyingProperty(t),a.observer&&e._createPropertyObserver(t,a.observer,n[a.observer])}function E(e,t,a,n,o){let r=(0,u.cssFromModuleImports)(n)+(0,u.cssFromTemplate)(t,a);if(r){let e=document.createElement('style');e.textContent=r,t.content.insertBefore(e,t.content.firstChild)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n,o),e._bindTemplate(t)}const k=(0,_.PropertyEffects)(e);class I extends k{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty('__observedAttributes',this))){let e=[],t=y(this);for(let a in t)e.push((0,d.camelToDashCase)(a));this.__observedAttributes=e}return this.__observedAttributes}static finalize(){f(this)||g(this)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty('_template',this))||(this._template=p.DomModule&&p.DomModule.import(this.is,'template')||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty('_importPath',this))){const e=p.DomModule&&p.DomModule.import(this.is);this._importPath=e?e.assetpath:Object.getPrototypeOf(this.prototype).constructor.importPath}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){t.instanceCount=m+=1,this.constructor.finalize();const e=this.constructor.importPath;if(this._template&&!this._template.__polymerFinalized){this._template.__polymerFinalized=!0;const t=e?(0,c.resolveUrl)(e):'';E(this.__proto__,this._template,t,this.localName)}super._initializeProperties(),this.rootPath=r.rootPath,this.importPath=e;let a=h(this.constructor);if(a)for(let e in a){let t=a[e];if(!this.hasOwnProperty(e)){let a='function'==typeof t.value?t.value.call(this):t.value;this._hasAccessor(e)?this._setPendingProperty(e,a,!0):this[e]=a}}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),this._enableProperties()}disconnectedCallback(){}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){if(this.attachShadow)return e?(this.shadowRoot||this.attachShadow({mode:'open'}),this.shadowRoot.appendChild(e),this.shadowRoot):null;throw new Error('ShadowDOM not available. Polymer.Element can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.')}attributeChangedCallback(e,t,a){if(t!==a){let t=l.dashToCamelCase(e),n=y(this.constructor)[t].type;this._hasReadOnlyEffect(t)||this._attributeToProperty(e,a,n)}}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=(0,c.resolveUrl)(this.importPath)),(0,c.resolveUrl)(e,t)}static _parseTemplateContent(e,t,a){return t.dynamicFns=t.dynamicFns||y(this),super._parseTemplateContent(e,t,a)}}return I});let m=t.instanceCount=0;const y=t.registrations=[],h=t.updateStyles=function(e){window.ShadyCSS&&window.ShadyCSS.styleDocument(e)}},function(e,t,a){'use strict';function n(e,t){let a=e[t];if(!a)a=e[t]={};else if(!e.hasOwnProperty(t))for(let n in a=e[t]=Object.create(e[t]),a){let e=a[n],t=a[n]=Array(e.length);for(let a=0;a<e.length;a++)t[a]=e[a]}return a}function o(e,t,a,n,o,s){if(t){let d=!1,l=Y++;for(let u in a)r(e,t,l,u,a,n,o,s)&&(d=!0);return d}return!1}function r(e,t,a,n,o,r,d,u){let c=!1,l=d?(0,z.root)(n):n,p=t[l];if(p)for(let t=0,_=p.length,l;t<_&&(l=p[t]);t++)l.info&&l.info.lastRun===a||d&&!s(n,l.trigger)||(l.info&&(l.info.lastRun=a),l.fn(e,n,o,r,l.info,d,u),c=!0);return c}function s(e,t){if(t){let a=t.name;return a==e||t.structured&&(0,z.isAncestor)(a,e)||t.wildcard&&(0,z.isDescendant)(a,e)}return!0}function d(e,t,a,n,o){let r=e[o.methodName],s=o.property;r?r.call(e,e.__data[s],n[s]):!o.dynamicFn&&console.warn('observer method `'+o.methodName+'` not defined')}function l(e,t,a,n,o){let s=e[G.NOTIFY],d=Y++,l;for(let c in t)t[c]&&(s&&r(e,s,d,c,a,n,o)?l=!0:o&&u(e,c,a)&&(l=!0));let c;l&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function u(e,t,a){let n=(0,z.root)(t);if(n!==t){let o=(0,U.camelToDashCase)(n)+'-changed';return c(e,o,a[t],t),!0}return!1}function c(e,t,a,n){let o={value:a,queueProperty:!0};n&&(o.path=n),e.dispatchEvent(new CustomEvent(t,{detail:o}))}function p(e,t,a,n,o,r){let s=r?(0,z.root)(t):t,d=s==t?null:t,l=d?(0,z.get)(e,d):e.__data[t];d&&l===void 0&&(l=a[t]),c(e,o.eventName,l,d)}function _(e,t,a,n,o){let r=e.detail,s=r&&r.path,d;s?(n=(0,z.translate)(a,n,s),d=r&&r.value):d=e.target[a],d=o?!d:d,t[G.READ_ONLY]&&t[G.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,d,!0,!!s)||r&&r.queueProperty||t._invalidateProperties()}function m(e,t,a,n,o){let r=e.__data[t];K.sanitizeDOMValue&&(r=(0,K.sanitizeDOMValue)(r,o.attrName,'attribute',e)),e._propertyToAttribute(t,o.attrName,r)}function y(e,t,a,n){let r=e[G.COMPUTE];if(r)for(let s=t;o(e,r,s,a,n);)Object.assign(a,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}function h(e,t,a,n,o){let r=w(e,t,a,n,o),s=o.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[s]?e._setPendingProperty(s,r,!0):e[s]=r}function f(e,t,n){let o=e.__dataLinkedPaths;if(o){let r;for(let s in o){let a=o[s];(0,z.isDescendant)(s,t)?(r=(0,z.translate)(s,a,t),e._setPendingPropertyOrPath(r,n,!0,!0)):(0,z.isDescendant)(a,t)&&(r=(0,z.translate)(a,s,t),e._setPendingPropertyOrPath(r,n,!0,!0))}}}function g(e,t,a,n,o,r,s){a.bindings=a.bindings||[];let d={kind:n,target:o,parts:r,literal:s,isCompound:1!==r.length};if(a.bindings.push(d),E(d)){let{event:e,negate:t}=d.parts[0];d.listenerEvent=e||W.camelToDashCase(o)+'-changed',d.listenerNegate=t}let l=t.nodeInfoList.length;for(let u=0,c;u<d.parts.length;u++)c=d.parts[u],c.compoundIndex=u,v(e,t,d,c,l)}function v(e,t,a,n,o){if(!n.literal)if('attribute'===a.kind&&'-'===a.target[0])console.warn('Cannot set attribute '+a.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,s={index:o,binding:a,part:n,evaluator:e};for(let a=0,n;a<r.length;a++)n=r[a],'string'==typeof n&&(n=M(n),n.wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:b,info:s,trigger:n})}}function b(e,t,a,n,o,r,s){let d=s[o.index],l=o.binding,u=o.part;if(r&&u.source&&t.length>u.source.length&&'property'==l.kind&&!l.isCompound&&d.__dataHasAccessor&&d.__dataHasAccessor[l.target]){let n=a[t];t=(0,z.translate)(u.source,l.target,t),d._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(d)}else{let s=o.evaluator._evaluateBinding(e,u,t,a,n,r);T(e,d,l,u,s)}}function T(e,t,a,n,o){if(o=S(t,o,a,n),K.sanitizeDOMValue&&(o=(0,K.sanitizeDOMValue)(o,a.target,a.kind,t)),'attribute'==a.kind)e._valueToNodeAttribute(t,o,a.target);else{let n=a.target;t.__dataHasAccessor&&t.__dataHasAccessor[n]?(!t[G.READ_ONLY]||!t[G.READ_ONLY][n])&&t._setPendingProperty(n,o)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,o)}}function S(e,t,a,n){if(a.isCompound){let o=e.__dataCompoundStorage[a.target];o[n.compoundIndex]=t,t=o.join('')}return'attribute'!==a.kind&&('textContent'===a.target||'input'==e.localName&&'value'==a.target)&&(t=void 0==t?'':t),t}function E(e){return!!e.target&&'attribute'!=e.kind&&'text'!=e.kind&&!e.isCompound&&'{'===e.parts[0].mode}function k(e,t){let{nodeList:a,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let o=n[t],r=a[t],s=o.bindings;if(s)for(let t=0,a;t<s.length;t++)a=s[t],I(r,a),C(r,e,a);r.__dataHost=e}}function I(e,t){if(t.isCompound){let a=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,o=Array(n.length);for(let e=0;e<n.length;e++)o[e]=n[e].literal;let r=t.target;a[r]=o,t.literal&&'property'==t.kind&&(e[r]=t.literal)}}function C(e,t,a){if(a.listenerEvent){let n=a.parts[0];e.addEventListener(a.listenerEvent,function(o){_(o,t,a.target,n.source,n.negate)})}}function P(e,t,a,n,o,r){r=t.static||r&&('object'!=typeof r||r[t.methodName]);let s={methodName:t.methodName,args:t.args,methodInfo:o,dynamicFn:r};for(let d=0,l;d<t.args.length&&(l=t.args[d]);d++)l.literal||e._addPropertyEffect(l.rootProperty,a,{fn:n,info:s,trigger:l});r&&e._addPropertyEffect(t.methodName,a,{fn:n,info:s})}function w(e,t,a,n,o){let r=e._methodHost||e,s=r[o.methodName];if(s){let n=x(e.__data,o.args,t,a);return s.apply(r,n)}o.dynamicFn||console.warn('method `'+o.methodName+'` not defined')}function O(e){let t='';for(let a=0,n;a<e.length;a++)n=e[a].literal,t+=n||'';return t}function D(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e=t[1],a={methodName:e,static:!0,args:Z};if(t[2].trim()){let e=t[2].replace(/\\,/g,'&comma;').split(',');return A(e,a)}return a}return null}function A(e,t){return t.args=e.map(function(e){let a=M(e);return a.literal||(t.static=!1),a},this),t}function M(e){let t=e.trim().replace(/&comma;/g,',').replace(/\\(.)/g,'$1'),n={name:t,value:'',literal:!1},a=t[0];return'-'===a&&(a=t[1]),'0'<=a&&'9'>=a&&(a='#'),'\''===a||'"'===a?(n.value=t.slice(1,-1),n.literal=!0):'#'===a?(n.value=+t,n.literal=!0):void 0,(n.literal||(n.rootProperty=(0,z.root)(t),n.structured=(0,z.isPath)(t),n.structured&&(n.wildcard='.*'==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n)}function x(e,t,a,n){let o=[];for(let r=0,s=t.length;r<s;r++){let s=t[r],d=s.name,l;if(s.literal?l=s.value:s.structured?(l=(0,z.get)(e,d),void 0===l&&(l=n[d])):l=e[d],s.wildcard){let e=0===d.indexOf(a+'.'),t=0===a.indexOf(d)&&!e;o[r]={path:t?a:d,value:t?n[a]:l,base:l}}else o[r]=l}return o}function N(e,t,a,n){let o=a+'.splices';e.notifyPath(o,{indexSplices:n}),e.notifyPath(a+'.length',t.length),e.__data[o]={indexSplices:null}}function L(e,t,a,n,o,r){N(e,t,a,[{index:n,addedCount:o,removed:r,object:t,type:'splice'}])}function R(e){return e[0].toUpperCase()+e.substring(1)}var F=Math.floor;Object.defineProperty(t,'__esModule',{value:!0}),t.PropertyEffects=void 0,a(2);var H=a(6),z=a(13),U=a(12),V=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(U),B=a(175),q=a(176),K=a(10);const W=V;let Y=0;const G={COMPUTE:'__computeEffects',REFLECT:'__reflectEffects',NOTIFY:'__notifyEffects',PROPAGATE:'__propagateEffects',OBSERVE:'__observeEffects',READ_ONLY:'__readOnly'};let j;const Z=[],X='(?:[a-zA-Z_$][\\w.:$\\-*]*)',$='(?:('+X+'|'+'(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)'+'|'+('(?:'+'(?:\'(?:[^\'\\\\]|\\\\.)*\')'+'|'+'(?:"(?:[^"\\\\]|\\\\.)*")'+')')+')\\s*)',J=/(\[\[|{{)\s*(?:(!)\s*)?((?:[a-zA-Z_$][\w.:$\-*]*)\s*(?:\(\s*(?:(?:(?:((?:[a-zA-Z_$][\w.:$\-*]*)|(?:[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\]|\\.)*')|(?:"(?:[^"\\]|\\.)*")))\s*)(?:,\s*(?:((?:[a-zA-Z_$][\w.:$\-*]*)|(?:[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\]|\\.)*')|(?:"(?:[^"\\]|\\.)*")))\s*))*)?)\)\s*)?)(?:]]|}})/g,Q=t.PropertyEffects=(0,H.dedupingMixin)((e)=>{const t=(0,q.TemplateStamp)((0,B.PropertyAccessors)(e));class a extends t{constructor(){super(),this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__dataCounter,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return G}_initializeProperties(){super._initializeProperties(),ee.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[G.READ_ONLY];for(let a in e)t&&t[a]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=e[a])}_addPropertyEffect(e,t,a){this._createPropertyAccessor(e,t==G.READ_ONLY);let o=n(this,t)[e];o||(o=this[t][e]=[]),o.push(a)}_removePropertyEffect(e,t,a){let o=n(this,t)[e],r=o.indexOf(a);0<=r&&o.splice(r,1)}_hasPropertyEffect(e,t){let a=this[t];return!!(a&&a[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,G.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,G.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,G.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,G.COMPUTE)}_setPendingPropertyOrPath(e,t,a,n){if(n||(0,z.root)(Array.isArray(e)?e[0]:e)!==e){if(!n){let a=(0,z.get)(this,e);if(e=(0,z.set)(this,e,t),!e||!super._shouldPropertyChange(e,t,a))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,a))return f(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,a);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,a){(a!==e[t]||'object'==typeof a)&&(e[t]=a)}_setPendingProperty(e,t,a){let n=this.__dataHasPaths&&(0,z.isPath)(e),o=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,o[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[G.NOTIFY]&&this[G.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=a),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0,a;t<e.length;t++)a=e[t],a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let a in e)!t&&this[G.READ_ONLY]&&this[G.READ_ONLY][a]||this._setPendingPropertyOrPath(a,e[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,a){let n=this.__dataHasPaths;this.__dataHasPaths=!1,y(this,t,a,n);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,a,n),this._flushClients(),o(this,this[G.REFLECT],t,a,n),o(this,this[G.OBSERVE],t,a,n),r&&l(this,r,t,a,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,a){this[G.PROPAGATE]&&o(this,this[G.PROPAGATE],e,t,a);for(let n=this.__templateInfo;n;)o(this,n.propertyEffects,e,t,a,n.nodeList),n=n.nextTemplateInfo}linkPaths(e,t){e=(0,z.normalize)(e),t=(0,z.normalize)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=(0,z.normalize)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let a={path:''},n=(0,z.get)(this,e,a);N(this,n,a.path,t)}get(e,t){return(0,z.get)(t||this,e)}set(e,t,a){a?(0,z.set)(a,e,t):(!this[G.READ_ONLY]||!this[G.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let a={path:''},n=(0,z.get)(this,e,a),o=n.length,r=n.push(...t);return t.length&&L(this,n,a.path,o,t.length,[]),r}pop(e){let t={path:''},a=(0,z.get)(this,e,t),n=!!a.length,o=a.pop();return n&&L(this,a,t.path,a.length,0,[o]),o}splice(e,t,a,...n){let o={path:''},r=(0,z.get)(this,e,o);t=0>t?r.length-F(-t):F(t),t||(t=0);let s=r.splice(t,a,...n);return(n.length||s.length)&&L(this,r,o.path,t,n.length,s),s}shift(e){let t={path:''},a=(0,z.get)(this,e,t),n=!!a.length,o=a.shift();return n&&L(this,a,t.path,0,0,[o]),o}unshift(e,...t){let a={path:''},n=(0,z.get)(this,e,a),o=n.unshift(...t);return t.length&&L(this,n,a.path,0,t.length,[]),o}notifyPath(e,t){let a;if(1==arguments.length){let n={path:''};t=(0,z.get)(this,e,n),a=n.path}else a=Array.isArray(e)?(0,z.normalize)(e):e;this._setPendingPropertyOrPath(a,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,G.READ_ONLY),t&&(this['_set'+R(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,a){let n={property:e,methodName:t,dynamicFn:!!a};this._addPropertyEffect(e,G.OBSERVE,{fn:d,info:n,trigger:{name:e}}),a&&this._addPropertyEffect(t,G.OBSERVE,{fn:d,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let a=D(e);if(!a)throw new Error('Malformed observer expression \''+e+'\'');P(this,a,G.OBSERVE,w,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,G.NOTIFY,{fn:p,info:{eventName:W.camelToDashCase(e)+'-changed',property:e}})}_createReflectedProperty(e){let t=W.camelToDashCase(e);'-'===t[0]?console.warn('Property '+e+' cannot be reflected to attribute '+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property thisead.'):this._addPropertyEffect(e,G.REFLECT,{fn:m,info:{attrName:t}})}_createComputedProperty(e,t,a){let n=D(t);if(!n)throw new Error('Malformed computed expression \''+t+'\'');P(this,n,G.COMPUTE,h,e,a)}static addPropertyEffect(e,t,a){this.prototype._addPropertyEffect(e,t,a)}static createPropertyObserver(e,t,a){this.prototype._createPropertyObserver(e,t,a)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,a){this.prototype._createComputedProperty(e,t,a)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let a=this.constructor._parseTemplate(e),n=this.__templateInfo==a;if(!n)for(let e in a.propertyEffects)this._createPropertyAccessor(e);if(t&&(a=Object.create(a),a.wasPreBound=n,!n&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=a,a.previousTemplateInfo=e,a}return this.__templateInfo=a}static _addTemplatePropertyEffect(e,t,a){let n=e.hostProps=e.hostProps||{};n[t]=!0;let o=e.propertyEffects=e.propertyEffects||{},r=o[t]=o[t]||[];r.push(a)}_stampTemplate(e){ee.beginHosting(this);let t=super._stampTemplate(e);ee.endHosting(this);let a=this._bindTemplate(e,!0);if(a.nodeList=t.nodeList,!a.wasPreBound){let e=a.childNodes=[];for(let a=t.firstChild;a;a=a.nextSibling)e.push(a)}return t.templateInfo=a,k(this,a),this.__dataReady&&o(this,a.propertyEffects,this.__data,null,!1,a.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let a=t.childNodes;for(let t=0,n;t<a.length;t++)n=a[t],n.parentNode.removeChild(n)}static _parseTemplateNode(e,t,a){let n=super._parseTemplateNode(e,t,a);if(e.nodeType===Node.TEXT_NODE){let o=this._parseBindings(e.textContent,t);o&&(e.textContent=O(o)||' ',g(this,t,a,'text','textContent',o),n=!0)}return n}static _parseTemplateNodeAttribute(e,t,a,n,o){let r=this._parseBindings(o,t);if(r){let o=n,s='property';'$'==n[n.length-1]&&(n=n.slice(0,-1),s='attribute');let d=O(r);return d&&'attribute'==s&&e.setAttribute(n,d),'input'===e.localName&&'value'===o&&e.setAttribute(o,''),e.removeAttribute(o),'property'==s&&(n=(0,U.dashToCamelCase)(n)),g(this,t,a,s,n,r,d),!0}return super._parseTemplateNodeAttribute(e,t,a,n,o)}static _parseTemplateNestedTemplate(e,t,a){let n=super._parseTemplateNestedTemplate(e,t,a),o=a.templateInfo.hostProps;for(let n in o){g(this,t,a,'property','_host_'+n,[{mode:'{',source:n,dependencies:[n]}])}return n}static _parseBindings(e,t){let a=[],n=0,o;for(;null!==(o=J.exec(e));){o.index>n&&a.push({literal:e.slice(n,o.index)});let r=o[1][0],s=!!o[2],d=o[3].trim(),l=!1,u='',c=-1;'{'==r&&0<(c=d.indexOf('::'))&&(u=d.substring(c+2),d=d.substring(0,c),l=!0);let p=D(d),_=[];if(p){let{args:e,methodName:a}=p;for(let t=0,a;t<e.length;t++)a=e[t],a.literal||_.push(a);let n=t.dynamicFns;(n&&n[a]||p.static)&&(_.push(a),p.dynamicFn=!0)}else _.push(d);a.push({source:d,mode:r,negate:s,customEvent:l,signature:p,dependencies:_,event:u}),n=J.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&a.push({literal:t})}return a.length?a:null}static _evaluateBinding(e,t,a,n,o,r){let s;return s=t.signature?w(e,a,n,o,t.signature):a==t.source?r&&(0,z.isPath)(a)?(0,z.get)(e,a):e.__data[a]:(0,z.get)(e,t.source),t.negate&&(s=!s),s}}return j=a,a});let ee={stack:[],registerHost(e){if(this.stack.length){let t=this.stack[this.stack.length-1];t._enqueueClient(e)}},beginHosting(e){this.stack.push(e)},endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},function(e,t){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function a(e){t.nativeCssVariables=e&&e.shimcssproperties?o=!1:o=n||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports('box-shadow','0 0 0 var(--foo)'))}Object.defineProperty(t,'__esModule',{value:!0});let n=t.nativeShadow=!(window.ShadyDOM&&window.ShadyDOM.inUse),o=t.nativeCssVariables=void 0;window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?t.nativeCssVariables=o=window.ShadyCSS.nativeCss:window.ShadyCSS?(a(window.ShadyCSS),window.ShadyCSS=void 0):a(window.WebComponents&&window.WebComponents.flags)},function(e,t){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function a(e){return e.replace(h.comments,'').replace(h.port,'')}function n(e){let t=new _;t.start=0,t.end=e.length;let a=t;for(let n=0,o=e.length;n<o;n++)if(e[n]===m){a.rules||(a.rules=[]);let e=a,t=e.rules[e.rules.length-1]||null;a=new _,a.start=n+1,a.parent=e,a.previous=t,e.rules.push(a)}else e[n]===y&&(a.end=n+1,a=a.parent||t);return t}function o(e,a){let n=a.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=a.substring(t,e.start-1),n=r(n),n=n.replace(h.multipleSpaces,' '),n=n.substring(n.lastIndexOf(';')+1);let o=e.parsedSelector=e.selector=n.trim();e.atRule=0===o.indexOf(v),e.atRule?0===o.indexOf(g)?e.type=p.MEDIA_RULE:o.match(h.keyframesRule)&&(e.type=p.KEYFRAMES_RULE,e.keyframesName=e.selector.split(h.multipleSpaces).pop()):0===o.indexOf(f)?e.type=p.MIXIN_RULE:e.type=p.STYLE_RULE}let t=e.rules;if(t)for(let e=0,n=t.length,s;e<n&&(s=t[e]);e++)o(s,a);return e}function r(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e='0'+e;return'\\'+e})}function s(e,t,a=''){let n='';if(e.cssText||e.rules){let a=e.rules;if(a&&!d(a))for(let e=0,o=a.length,d;e<o&&(d=a[e]);e++)n=s(d,t,n);else n=t?e.cssText:l(e.cssText),n=n.trim(),n&&(n='  '+n+'\n')}return n&&(e.selector&&(a+=e.selector+' '+m+'\n'),a+=n,e.selector&&(a+=y+'\n\n')),a}function d(e){let t=e[0];return!!t&&!!t.selector&&0===t.selector.indexOf(f)}function l(e){return e=u(e),c(e)}function u(e){return e.replace(h.customProp,'').replace(h.mixinProp,'')}function c(e){return e.replace(h.mixinApply,'').replace(h.varApply,'')}Object.defineProperty(t,'__esModule',{value:!0}),t.parse=function(e){return e=a(e),o(n(e),e)},t.stringify=s,t.removeCustomPropAssignment=u;class _{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText='',this.cssText='',this.atRule=!1,this.type=0,this.keyframesName='',this.selector='',this.parsedSelector=''}}t.StyleNode=_;const p=t.types={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},m='{',y='}',h={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},f='--',g='@media',v='@'},function(e,t){'use strict';Object.defineProperty(t,'__esModule',{value:!0});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a=t.VAR_ASSIGN=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,n=t.MIXIN_MATCH=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=t.VAR_CONSUMED=/(--[\w-]+)\s*([:,;)]|$)/gi,r=t.ANIMATION_MATCH=/(animation\s*:)|(animation-name\s*:)/,s=t.MEDIA_MATCH=/@media\s(.*)/,d=t.IS_VAR=/^--/,l=t.BRACKETED=/\{[^}]*\}/g,u=t.HOST_PREFIX='(?:^|[^.#[:])',c=t.HOST_SUFFIX='($|[.:[\\s>+~])'},function(e,t,a){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object.defineProperty(t,'__esModule',{value:!0}),t.updateNativeProperties=function(e,t){for(let a in t)null===a?e.style.removeProperty(a):e.style.setProperty(a,t[a])},t.getComputedStyleValue=function(e,t){const a=window.getComputedStyle(e).getPropertyValue(t);return a?a.trim():''},t.detectMixin=function(e){const t=n.MIXIN_MATCH.test(e)||n.VAR_ASSIGN.test(e);return n.MIXIN_MATCH.lastIndex=0,n.VAR_ASSIGN.lastIndex=0,t};var n=a(26)},function(e,t,a){'use strict';function n(){d=!0,requestAnimationFrame(function(){d=!1,o(l),setTimeout(function(){r(u)})})}function o(e){for(;e.length;)s(e.shift())}function r(e){for(let t=0,a=e.length;t<a;t++)s(e.shift())}function s(e){const t=e[0],a=e[1],n=e[2];try{a.apply(t,n)}catch(t){setTimeout(()=>{throw t})}}Object.defineProperty(t,'__esModule',{value:!0}),t.flush=void 0,t.beforeNextRender=function(e,t,a){d||n(),l.push([e,t,a])},t.afterNextRender=function(e,t,a){d||n(),u.push([e,t,a])},a(2);let d=!1,l=[],u=[];t.flush=function(){for(;l.length||u.length;)o(l),o(u);d=!1}},function(e,t,a){'use strict';function n(){return y}function o(e,t){y=e,Object.setPrototypeOf(e,t.prototype),new t,y=null}function r(e){let t=e.__dataHost;return t&&t._methodHost||t}function s(e,t,a){let n=a.mutableData?b:v,o=class extends n{};return o.prototype.__templatizeOptions=a,o.prototype._bindTemplate(e),u(o,e,t,a),o}function d(e,t,a){let n=a.forwardHostProp;if(n){let r=t.templatizeTemplateClass;if(!r){let e=a.mutableData?f:h;r=t.templatizeTemplateClass=class extends e{};let o=t.hostProps;for(let e in o)r.prototype._addPropertyEffect('_host_'+e,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:l(e,n)}),r.prototype._createNotifyingProperty('_host_'+e)}o(e,r),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function l(e,t){return function(e,a,n){t.call(e.__templatizeOwner,a.substring(6),n[a])}}function u(e,t,a,n){let o=a.hostProps||{};for(let r in n.instanceProps){delete o[r];let t=n.notifyInstanceProp;t&&e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:c(r,t)})}if(n.forwardHostProp&&t.__dataHost)for(let t in o)e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:p()})}function c(e,t){return function(e,a,n){t.call(e.__templatizeOwner,e,a,n[a])}}function p(){return function(e,t,a){e.__dataHost._setPendingPropertyOrPath('_host_'+t,a[t],!0,!0)}}Object.defineProperty(t,'__esModule',{value:!0}),t.TemplateInstanceBase=t.Templatize=void 0,a(2);var _=a(23),m=a(15);let y=null;n.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:n,writable:!0}});const h=(0,_.PropertyEffects)(n),f=(0,m.MutableData)(h),g=(0,_.PropertyEffects)(class{});class v extends g{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=this.children=[];for(let a=this.root.firstChild;a;a=a.nextSibling)t.push(a),a.__templatizeInstance=this;this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let a=this.__templatizeOptions;(e&&a.instanceProps||!a.instanceProps)&&this._enableProperties()}_configureProperties(e){let t=this.__templatizeOptions;if(e)for(let a in t.instanceProps)a in e&&this._setPendingProperty(a,e[a]);for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost['_host_'+t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,a){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,(t)=>{t.model=this,a(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,a)}}_showHideChildren(e){let t=this.children;for(let a=0,o;a<t.length;a++)o=t[a],!!e!=!!o.__hideTemplateChildren__&&(o.nodeType===Node.TEXT_NODE?e?(o.__polymerTextContent__=o.textContent,o.textContent=''):o.textContent=o.__polymerTextContent__:o.style&&(e?(o.__polymerDisplay__=o.style.display,o.style.display='none'):o.style.display=o.__polymerDisplay__)),o.__hideTemplateChildren__=e,o._showHideChildren&&o._showHideChildren(e)}_setUnmanagedPropertyToNode(e,t,a){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&'textContent'==t?e.__polymerTextContent__=a:super._setUnmanagedPropertyToNode(e,t,a)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do e=e.__dataHost.__dataHost;while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}}v.prototype.__dataHost,v.prototype.__templatizeOptions,v.prototype._methodHost,v.prototype.__templatizeOwner,v.prototype.__hostProps;const b=(0,m.MutableData)(v),T={templatize(e,t,a){if(a=a||{},e.__templatizeOwner)throw new Error('A <template> can only be templatized once');e.__templatizeOwner=t;let n=t.constructor._parseTemplate(e),o=n.templatizeInstanceClass;o||(o=s(e,n,a),n.templatizeInstanceClass=o),d(e,n,a);let l=class extends o{};return l.prototype._methodHost=r(e),l.prototype.__dataHost=e,l.prototype.__templatizeOwner=t,l.prototype.__hostProps=n.hostProps,l},modelForElement(e,t){for(let a;t;)if(!(a=t.__templatizeInstance))t=t.parentNode;else if(a.__dataHost!=e)t=a.__dataHost;else return a;return null}};t.Templatize=T,t.TemplateInstanceBase=v},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.DomRepeat=void 0;var n=a(5),o=a(29),r=a(9),s=a(14),d=a(15),l=a(13),u=a(7);o.TemplateInstanceBase;const c=(0,d.OptionalMutableData)(n.Element);class p extends c{static get is(){return'dom-repeat'}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:'item'},indexAs:{type:String,value:'index'},itemsIndexAs:{type:String,value:'itemsIndex'},sort:{type:Function,observer:'__sortChanged'},filter:{type:Function,observer:'__filterChanged'},observe:{type:String,observer:'__observeChanged'},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:'__initializeChunking'},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:'__computeFrameTime(targetFramerate)'}}}static get observers(){return['__itemsChanged(items.*)']}constructor(){super(),this.__instances=[],this.__limit=Infinity,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.__isDetached){this.__isDetached=!1;let e=this.parentNode;for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector('template');if(!e){let e=new MutationObserver(()=>{if(this.querySelector('template'))e.disconnect(),this.__render();else throw new Error('dom-repeat requires a <template> child')});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=o.Templatize.templatize(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let a=this.__instances;for(let n=0,o;n<a.length&&(o=a[n]);n++)o.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,a){if((0,l.matches)(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=a);let o=(0,l.translate)(this.as,'items.'+n,t);this.notifyPath(o,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__sortChanged(e){let t=this.__getMethodHost();this.__sortFn=e&&('function'==typeof e?e:function(){return t[e].apply(t,arguments)}),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){let t=this.__getMethodHost();this.__filterFn=e&&('function'==typeof e?e:function(){return t[e].apply(t,arguments)}),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace('.*','.').split(' ')}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn('dom-repeat expected array for `items`, found',this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__observePaths){e=e.substring(e.indexOf('.')+1);let t=this.__observePaths;for(let a=0;a<t.length;a++)if(0===e.indexOf(t[a]))return this.__debounceRender(this.__render,this.delay),!0}}__debounceRender(e,t=0){this.__renderDebouncer=r.Debouncer.debounce(this.__renderDebouncer,0<t?u.timeOut.after(t):u.microTask,e.bind(this)),(0,s.enqueueDebouncer)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),(0,s.flush)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent('dom-change',{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=Array(e.length);for(let a=0;a<e.length;a++)t[a]=a;this.__filterFn&&(t=t.filter((t,a,n)=>this.__filterFn(e[t],a,n))),this.__sortFn&&t.sort((t,a)=>this.__sortFn(e[t],e[a]));const a=this.__itemsIdxToInstIdx={};let n=0;for(const o=Math.min(t.length,this.__limit);n<o;n++){let o=this.__instances[n],r=t[n],s=e[r];a[r]=n,o&&n<this.__limit?(o._setPendingProperty(this.as,s),o._setPendingProperty(this.indexAs,n),o._setPendingProperty(this.itemsIndexAs,r),o._flushProperties()):this.__insertInstance(s,n,r)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];for(let a=0,n;a<t.children.length;a++)n=t.children[a],t.root.appendChild(n);return t}__attachInstance(e,t){let a=this.__instances[e];t.insertBefore(a.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,a){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=a,new this.__ctor(n)}__insertInstance(e,t,a){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,e),n._setPendingProperty(this.indexAs,t),n._setPendingProperty(this.itemsIndexAs,a),n._flushProperties()):n=this.__stampInstance(e,t,a);let o=this.__instances[t+1],r=o?o.children[0]:this;return this.parentNode.insertBefore(n.root,r),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let a=e.slice(6),n=a.indexOf('.'),o=0>n?a:a.substring(0,n);if(o==parseInt(o,10)){let e=0>n?'':a.substring(n+1);this.__handleObservedPaths(e);let r=this.__itemsIdxToInstIdx[o],s=this.__instances[r];if(s){let a=this.as+(e?'.'+e:'');s._setPendingPropertyOrPath(a,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return o.Templatize.modelForElement(this.template,e)}}customElements.define(p.is,p),t.DomRepeat=p},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.DomIf=void 0;var n=a(5),o=a(29),r=a(9),s=a(14),d=a(7),l=a(13);class u extends n.Element{static get is(){return'dom-if'}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:'__debounceRender'},restamp:{type:Boolean,observer:'__debounceRender'}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null}__debounceRender(){this.__renderDebouncer=r.Debouncer.debounce(this.__renderDebouncer,d.microTask,()=>this.__render()),(0,s.enqueueDebouncer)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback(),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.if&&this.__debounceRender()}render(){(0,s.flush)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent('dom-change',{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=this.parentNode;if(e){if(!this.__ctor){let e=this.querySelector('template');if(!e){let e=new MutationObserver(()=>{if(this.querySelector('template'))e.disconnect(),this.__render();else throw new Error('dom-if requires a <template> child')});return e.observe(this,{childList:!0}),!1}this.__ctor=o.Templatize.templatize(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[(0,l.root)(e)]=!0))}})}if(!this.__instance)this.__instance=new this.__ctor,e.insertBefore(this.__instance.root,this);else{this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){let a=this.previousSibling;if(a!==t[t.length-1])for(let a=0,o;a<t.length&&(o=t[a]);a++)e.insertBefore(o,this)}}}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=e[0].parentNode;for(let a=0,o;a<e.length&&(o=e[a]);a++)t.removeChild(o)}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(u.is,u),t.DomIf=u},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.AppLayoutBehavior=void 0,a(1);var n=a(33),o=a(4),r=a(7),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(r),d=a(9),l=a(14);t.AppLayoutBehavior=[n.IronResizableBehavior,{listeners:{"app-reset-layout":'_appResetLayoutHandler',"iron-resize":'resetLayout'},attached:function(){this.fire('app-reset-layout')},_appResetLayoutHandler:function(t){(0,o.dom)(t).path[0]===this||(this.resetLayout(),t.stopPropagation())},_updateLayoutStates:function(){console.error('unimplemented')},resetLayout:function(){var e=this,t=this._updateLayoutStates.bind(this);s&&r.animationFrame?(this._layoutDebouncer=d.Debouncer.debounce(this._layoutDebouncer,r.animationFrame,t),(0,l.enqueueDebouncer)(this._layoutDebouncer)):this.debounce('resetLayout',t),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var e=this;requestAnimationFrame(function(){e.fire('app-reset-layout')})},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this)}}]},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.IronResizableBehavior=void 0,a(1);var n=a(10),o=a(4);t.IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:'_parentResizableChanged'},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":'_onIronRequestResizeNotifications'},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):window.removeEventListener('resize',this._boundNotifyResize),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable=e},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);-1<t&&(this._interestedResizables.splice(t,1),this.unlisten(e,'iron-resize','_onDescendantIronResize'))},resizerShouldNotify:function(){return!0},_onDescendantIronResize:function(e){return this._notifyingDescendant?void e.stopPropagation():void(!n.Settings.useShadow&&this._fireResize())},_fireResize:function(){this.fire('iron-resize',null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=(0,o.dom)(e).rootTarget;t===this||(-1===this._interestedResizables.indexOf(t)&&(this._interestedResizables.push(t),this.listen(t,'iron-resize','_onDescendantIronResize')),t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener('resize',this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if('loading'===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener('readystatechange',function t(){document.removeEventListener('readystatechange',t),e()})}else this.fire('iron-request-resize-notifications',null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable||(window.addEventListener('resize',this._boundNotifyResize),this.notifyResize())}}},function(e,t,a){'use strict';a(1);var n=a(3);(0,n.Polymer)({is:'app-route',properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_queryParamsUpdating:{type:Boolean,value:!1},_matched:{type:String,value:''}},observers:['__tryToMatch(route.path, pattern)','__updatePathOnDataChange(data.*)','__tailPathChanged(tail.path)','__routeQueryParamsChanged(route.__queryParams)','__tailQueryParamsChanged(tail.__queryParams)','__queryParamsChanged(queryParams.*)'],created:function(){this.linkPaths('route.__queryParams','tail.__queryParams'),this.linkPaths('tail.__queryParams','route.__queryParams')},__routeQueryParamsChanged:function(e){if(e&&this.tail){if(this.tail.__queryParams!==e&&this.set('tail.__queryParams',e),!this.active||this._queryParamsUpdating)return;var t={},a=!1;for(var n in e)t[n]=e[n],(a||!this.queryParams||e[n]!==this.queryParams[n])&&(a=!0);for(var n in this.queryParams)if(a||!(n in e)){a=!0;break}if(!a)return;this._queryParamsUpdating=!0,this.set('queryParams',t),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(e){e&&this.route&&this.route.__queryParams!=e&&this.set('route.__queryParams',e)},__queryParamsChanged:function(e){!this.active||this._queryParamsUpdating||this.set('route.__'+e.path,e.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var e=this.route.path,t=this.pattern;if(t){if(!e)return void this.__resetProperties();for(var a=e.split('/'),n=t.split('/'),o=[],r={},s=0,d,l;s<n.length&&(d=n[s],d||''===d);s++){if(l=a.shift(),!l&&''!==l)return void this.__resetProperties();if(o.push(l),':'==d.charAt(0))r[d.slice(1)]=l;else if(d!==l)return void this.__resetProperties()}this._matched=o.join('/');var u={};this.active||(u.active=!0);var c=this.route.prefix+this._matched,p=a.join('/');for(var _ in 0<a.length&&(p='/'+p),this.tail&&this.tail.prefix===c&&this.tail.path===p||(u.tail={prefix:c,path:p,__queryParams:this.route.__queryParams}),u.data=r,this._dataInUrl={},r)this._dataInUrl[_]=r[_];this.setProperties?(!this.active&&this._setActive(!0),this.setProperties(u)):this.__setMulti(u)}}},__tailPathChanged:function(e){if(this.active){var t=e,a=this._matched;t&&('/'!==t.charAt(0)&&(t='/'+t),a+=t),this.set('route.path',a)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var e=this.__getLink({}),t=this.__getLink(this._dataInUrl);e===t||this.set('route.path',e)}},__getLink:function(e){var t={tail:null};for(var a in this.data)t[a]=this.data[a];for(var a in e)t[a]=e[a];var n=this.pattern.split('/'),o=n.map(function(e){return':'==e[0]&&(e=t[e.slice(1)]),e},this);return t.tail&&t.tail.path&&(0<o.length&&'/'===t.tail.path.charAt(0)?o.push(t.tail.path.slice(1)):o.push(t.tail.path)),o.join('/')},__setMulti:function(e){for(var t in e)this._propertySetter(t,e[t]);e.data!==void 0&&(this._pathEffector('data',this.data),this._notifyChange('data')),e.active!==void 0&&(this._pathEffector('active',this.active),this._notifyChange('active')),e.tail!==void 0&&(this._pathEffector('tail',this.tail),this._notifyChange('tail'))}})},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.IronSelectableBehavior=void 0,a(1);var n=a(201),o=a(4),r=a(12);t.IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:'tap',observer:'_activateEventChanged'},selectable:String,selectedClass:{type:String,value:'iron-selected'},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:['_updateAttrForSelected(attrForSelected)','_updateSelected(selected)','_checkFallback(fallbackSelection)'],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new n.IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&(0,o.dom)(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items.indexOf(e)},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=(+this._valueToIndex(this.selected)-1+e)%e;this.selected=this._indexToValue(t)},selectNext:function(){var e=(+this._valueToIndex(this.selected)+1)%this.items.length;this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&'function'==typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,'_activateHandler')},_removeListener:function(e){this.unlisten(this,e,'_activateHandler')},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=(0,o.dom)(this).queryDistributedElements(this.selectable||'*');e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(this.attrForSelected){for(var t=0,a;a=this.items[t];t++)if(this._valueForItem(a)==e)return t;}else return+e},_indexToValue:function(e){if(this.attrForSelected){var t=this.items[e];if(t)return this._valueForItem(t)}else return e},_valueForItem:function(e){if(!e)return null;var t=e[(0,r.dashToCamelCase)(this.attrForSelected)];return t==void 0?e.getAttribute(this.attrForSelected):t},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire('iron-'+(t?'select':'deselect'),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return(0,o.dom)(e).observeNodes(function(e){this._updateItems(),this._updateSelected(),this.fire('iron-items-changed',e,{bubbles:!1,cancelable:!1})})},_activateHandler:function(a){for(var e=a.target,t=this.items;e&&e!=this;){var n=t.indexOf(e);if(0<=n){var o=this._indexToValue(n);return void this._itemActivate(o,e)}e=e.parentNode}},_itemActivate:function(e,t){this.fire('iron-activate',{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}}},function(e,t,a){'use strict';a(1),a(8),a(37);var n=a(203);a(204);var o=a(3);(0,o.Polymer)({_template:`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:'paper-icon-item',behaviors:[n.PaperItemBehavior]})},function(e,t,a){'use strict';a(1),a(202);const n=document.createElement('div');n.setAttribute('style','display: none;'),n.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`,document.head.appendChild(n)},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.IronButtonState=t.IronButtonStateImpl=void 0,a(1);var n=a(39);a(40);var o=a(4);const r=t.IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:'_pressedChanged'},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:'aria-pressed',observer:'_ariaActiveAttributeChanged'}},listeners:{down:'_downHandler',up:'_upHandler',tap:'_tapHandler'},observers:['_focusChanged(focused)','_activeChanged(active, ariaActiveAttribute)'],keyBindings:{"enter:keydown":'_asyncClick',"space:keydown":'_spaceKeyDownHandler',"space:keyup":'_spaceKeyUpHandler'},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire('change'))},_downHandler:function(){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,a=(0,o.dom)(t).localTarget;this.isLightDescendant(a)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,a=(0,o.dom)(t).localTarget;this.isLightDescendant(a)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?'true':'false'):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},s=t.IronButtonState=[n.IronA11yKeysBehavior,r]},function(e,t,a){'use strict';function n(e,t){var a='';if(e){var n=e.toLowerCase();' '===n||g.test(n)?a='space':v.test(n)?a='esc':1==n.length?(!t||y.test(n))&&(a=n):f.test(n)?a=n.replace('arrow',''):'multiply'==n?a='*':a=n}return a}function o(e){var t='';return e&&(e in p?t=p[e]:h.test(e)?(e=parseInt(e.replace('U+','0x'),16),t=c(e).toLowerCase()):t=e.toLowerCase()),t}function r(e){var t='';return+e&&(65<=e&&90>=e?t=c(32+e):112<=e&&123>=e?t='f'+(e-112+1):48<=e&&57>=e?t=e-48+'':96<=e&&105>=e?t=e-96+'':t=_[e]),t}function s(e,t){return e.key?n(e.key,t):e.detail&&e.detail.key?n(e.detail.key,t):o(e.keyIdentifier)||r(e.keyCode)||''}function d(e,t){var a=s(t,e.hasModifiers);return a===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function l(e){return 1===e.length?{combo:e,key:e,event:'keydown'}:e.split('+').reduce(function(e,t){var a=t.split(':'),n=a[0],o=a[1];return n in m?(e[m[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=o||'keydown'),e},{combo:e.split(':').shift()})}function u(e){return e.trim().split(' ').map(function(e){return l(e)})}var c=String.fromCharCode;Object.defineProperty(t,'__esModule',{value:!0}),t.IronA11yKeysBehavior=void 0,a(1);var p={"U+0008":'backspace',"U+0009":'tab',"U+001B":'esc',"U+0020":'space',"U+007F":'del'},_={8:'backspace',9:'tab',13:'enter',27:'esc',32:'space',33:'pageup',34:'pagedown',35:'end',36:'home',37:'left',38:'up',39:'right',40:'down',46:'del',106:'*'},m={shift:'shiftKey',ctrl:'ctrlKey',alt:'altKey',meta:'metaKey'},y=/[a-z0-9*]/,h=/U\+/,f=/^arrow/,g=/^space(bar)?/,v=/^escape$/;t.IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var a=u(t),n=0;n<a.length;++n)if(d(a[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(e){return e.keyBindings});return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(e,t){var a=e[0].hasModifiers,n=t[0].hasModifiers;return a===n?0:a?-1:1})},_addKeyBinding:function(e,t){u(e).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],a=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,a]),this.keyEventTarget.addEventListener(e,a)},this)},_unlistenKeyEventListeners:function(){for(var e,t,a,n;this._boundKeyHandlers.length;)e=this._boundKeyHandlers.pop(),t=e[0],a=e[1],n=e[2],t.removeEventListener(a,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var a=0;a<e.length;a++){var n=e[a][0],o=e[a][1];if(d(n,t)&&(this._triggerKeyHandler(n,o,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,a){var n=Object.create(e);n.keyboardEvent=a;var o=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,o),o.defaultPrevented&&a.preventDefault()}}},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.IronControlState=void 0,a(1);var n=a(5),o=a(4);t.IronControlState={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:'_disabledChanged',reflectToAttribute:!0},_oldTabIndex:{type:Number},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}},__handleEventRetargeting:{type:Boolean,value:function(){return!this.shadowRoot&&!n.Element}}},observers:['_changedControlState(focused, disabled)'],ready:function(){this.addEventListener('focus',this._boundFocusBlurHandler,!0),this.addEventListener('blur',this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){if(n.Element)return void this._setFocused('focus'===e.type);if(e.target===this)this._setFocused('focus'===e.type);else if(this.__handleEventRetargeting){var t=(0,o.dom)(e).localTarget;this.isLightDescendant(t)||this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})}},_disabledChanged:function(e){this.setAttribute('aria-disabled',e?'true':'false'),this.style.pointerEvents=e?'none':'',e?(this._oldTabIndex=this.tabIndex,this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this.tabIndex=this._oldTabIndex)},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}},function(e,t,a){'use strict';function n(e){const t=customElements.get('dom-module');return t?t.import(e):null}function o(e){let t=e.trim().split(/\s+/),a='';for(let n=0;n<t.length;n++)a+=r(t[n]);return a}function r(e){let a=n(e);if(a&&void 0===a._cssText){let e=d(a),n=a.querySelector('template');n&&(e+=s(n,a.assetpath)),a._cssText=e||null}return a||console.warn('Could not find style data in module named',e),a&&a._cssText||''}function s(e,t){let a='',n=e.content.querySelectorAll('style');for(let r=0;r<n.length;r++){let s=n[r],e=s.getAttribute(c);e&&(a+=o(e)),s.parentNode.removeChild(s),a+=t?(0,l.resolveCss)(s.textContent,t):s.textContent}return a}function d(e){let t='',a=e.querySelectorAll(u);for(let n=0,o;n<a.length;n++)if(o=a[n],o.import){let e=o.import,a=e.body?e.body:e;t+=(0,l.resolveCss)(a.textContent,e.baseURI)}return t}Object.defineProperty(t,'__esModule',{value:!0}),t.cssFromModules=o,t.cssFromModule=r,t.cssFromTemplate=s,t.cssFromModuleImports=function(e){let t=n(e);return t?d(t):''},t._cssFromModuleImports=d;var l=a(11);const u='link[rel=import][type~=css]',c='include'},function(e,t,a){'use strict';function n(e){return s[e]||d[e.toLowerCase()]}function o(e){e.querySelector('style')&&console.warn('dom-module %s has style outside template',e.id)}Object.defineProperty(t,'__esModule',{value:!0}),t.DomModule=void 0,a(2);var r=a(11);let s={},d={};class l extends HTMLElement{static get observedAttributes(){return['id']}static import(e,t){if(e){let a=n(e);return a&&t?a.querySelector(t):a}return null}attributeChangedCallback(e,t,a){t!==a&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=(0,r.resolveUrl)(this.getAttribute('assetpath')||'',e.baseURI);this.__assetpath=(0,r.pathFromUrl)(t)}return this.__assetpath}register(e){e=e||this.id,e&&(this.id=e,s[e]=this,d[e.toLowerCase()]=this,o(this))}}l.prototype.modules=s,customElements.define('dom-module',l),t.DomModule=l},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.LegacyElementMixin=void 0,a(178);var n=a(22),o=a(48),r=a(6),s=a(182);a(28),a(183);var d=a(4),l=a(49),u=a(9),c=a(7),p=a(13);let _=window.ShadyCSS;t.LegacyElementMixin=(0,r.dedupingMixin)((e)=>{const t=(0,o.GestureEventListeners)((0,n.ElementMixin)(e)),a={x:'pan-x',y:'pan-y',none:'none',all:'auto'};class r extends t{constructor(){super(),this.root=this,this.isAttached,this.__boundListeners,this._debouncers,this.created()}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,a){t!==a&&(super.attributeChangedCallback(e,t,a),this.attributeChanged(e,t,a))}attributeChanged(){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty('__hasRegisterFinished')||(e.__hasRegisterFinished=!0,this._registered()),super._initializeProperties()}_registered(){}ready(){this._ensureAttributes(),this._applyListeners(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,a){this._propertyToAttribute(e,t,a)}serializeValueToAttribute(e,t,a){this._valueToNodeAttribute(a||this,e,t)}extend(e,t){if(!(e&&t))return e||t;let a=Object.getOwnPropertyNames(t);for(let o=0,r,n;o<a.length&&(r=a[o]);o++)n=Object.getOwnPropertyDescriptor(t,r),n&&Object.defineProperty(e,r,n);return e}mixin(e,t){for(let a in t)e[a]=t[a];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e),a=document.importNode(t,!0);return a}fire(e,t,a){a=a||{},t=null===t||void 0===t?{}:t;let n=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:!!a.cancelable,composed:void 0===a.composed||a.composed});n.detail=t;let o=a.node||this;return o.dispatchEvent(n),n}listen(e,t,a){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),o=n.get(e);o||(o={},n.set(e,o));let r=t+a;o[r]||(o[r]=this._addMethodEventListenerToNode(e,t,a,this))}unlisten(e,t,a){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),o=t+a,r=n&&n[o];r&&(this._removeEventListenerFromNode(e,t,r),n[o]=null)}setScrollDirection(e,t){(0,l.setTouchAction)(t||this,a[e]||'auto')}$$(e){return this.root.querySelector(e)}get domHost(){let e=this.getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){window.ShadyDOM&&this.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return(0,d.dom)(this).getEffectiveChildNodes()}queryDistributedElements(e){return(0,d.dom)(this).queryDistributedElements(e)}getEffectiveChildren(){let e=this.getEffectiveChildNodes();return e.filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let a=0,n;n=e[a];a++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join('')}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||'slot');return t?(0,d.dom)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}isLightDescendant(e){return this!==e&&this.contains(e)&&this.getRootNode()===e.getRootNode()}isLocalDescendant(e){return this.root===e.getRootNode()}scopeSubtree(){}getComputedStyleValue(e){return _.getComputedStyleValue(this,e)}debounce(e,t,a){return this._debouncers=this._debouncers||{},this._debouncers[e]=u.Debouncer.debounce(this._debouncers[e],0<a?c.timeOut.after(a):c.microTask,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!!(t&&t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return 0<t?c.timeOut.run(e.bind(this),t):~c.microTask.run(e.bind(this))}cancelAsync(e){0>e?c.microTask.cancel(~e):c.timeOut.cancel(e)}create(e,t){let a=document.createElement(e);if(t)if(a.setProperties)a.setProperties(t);else for(let e in t)a[e]=t[e];return a}importHref(e,t,a,n){let o=t?t.bind(this):null,r=a?a.bind(this):null;return(0,s.importHref)(e,o,r,n)}elementMatches(e,t){return(0,d.matchesSelector)(t||this,e)}toggleAttribute(e,t,a){a=a||this,1==arguments.length&&(t=!a.hasAttribute(e)),t?a.setAttribute(e,''):a.removeAttribute(e)}toggleClass(e,t,a){a=a||this,1==arguments.length&&(t=!a.classList.contains(e)),t?a.classList.add(e):a.classList.remove(e)}transform(e,t){t=t||this,t.style.webkitTransform=e,t.style.transform=e}translate3d(e,t,a,n){n=n||this,this.transform('translate3d('+e+','+t+','+a+')',n)}arrayDelete(e,t){let a;if(!Array.isArray(e)){let n=(0,p.get)(this,e);if(a=n.indexOf(t),0<=a)return this.splice(e,a,1)}else if(a=e.indexOf(t),0<=a)return e.splice(a,1);return null}_logger(e,t){Array.isArray(t)&&1===t.length&&(t=t[0]),'log'===e||'warn'===e||'error'===e?console[e](...t):void 0}_log(...e){this._logger('log',e)}_warn(...e){this._logger('warn',e)}_error(...e){this._logger('error',e)}_logf(e,...t){return['[%s::%s]',this.is,e,...t]}}return r.prototype.is='',r})},function(e,t,a){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e,t,a,o){if(!e)return;let r=!1,s=e.type;if(o&&s===u.types.MEDIA_RULE){let t=e.selector.match(c.MEDIA_MATCH);t&&!window.matchMedia(t[1]).matches&&(r=!0)}s===u.types.STYLE_RULE?t(e):a&&s===u.types.KEYFRAMES_RULE?a(e):s===u.types.MIXIN_RULE&&(r=!0);let d=e.rules;if(d&&!r)for(let e=0,s=d.length,l;e<s&&(l=d[e]);e++)n(l,t,a,o)}function o(e,t){let a=document.createElement('style');return t&&a.setAttribute('scope',t),a.textContent=e,a}function r(e,t,a){t=t||document.head;let n=a&&a.nextSibling||t.firstChild;if(t.insertBefore(e,n),!_)_=e;else{let t=e.compareDocumentPosition(_);t===Node.DOCUMENT_POSITION_PRECEDING&&(_=e)}}function s(e,t){let a=0;for(let n=t,o=e.length;n<o;n++)if('('===e[n])a++;else if(')'===e[n]&&0==--a)return n;return-1}function d(e,t){let a=e.indexOf('var(');if(-1===a)return t(e,'','','');let n=s(e,a+3),o=e.substring(a+4,n),r=e.substring(0,a),l=d(e.substring(n+1),t),u=o.indexOf(',');if(-1===u)return t(r,o.trim(),'',l);let c=o.substring(0,u).trim(),p=o.substring(u+1).trim();return t(r,c,p,l)}Object.defineProperty(t,'__esModule',{value:!0}),t.toCssText=function(e,t){return e?('string'==typeof e&&(e=(0,u.parse)(e)),t&&n(e,t),(0,u.stringify)(e,l.nativeCssVariables)):''},t.rulesForStyle=function(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=(0,u.parse)(e.textContent)),e.__cssRules||null},t.isKeyframesSelector=function(e){return!!e.parent&&e.parent.type===u.types.KEYFRAMES_RULE},t.forEachRule=n,t.applyCss=function(e,t,a,n){let s=o(e,t);return r(s,a,n),s},t.createScopeStyle=o,t.applyStylePlaceHolder=function(e){let t=document.createComment(' Shady DOM styles for '+e+' '),a=_?_.nextSibling:null,n=document.head;return n.insertBefore(t,a||n.firstChild),_=t,t},t.applyStyle=r,t.isTargetedBuild=function(e){return l.nativeShadow?'shadow'===e:'shady'===e},t.getCssBuildType=function(e){return e.getAttribute('css-build')},t.processVariableAndFallback=d,t.setElementClassRaw=function(e,t){l.nativeShadow?e.setAttribute('class',t):window.ShadyDOM.nativeMethods.setAttribute.call(e,'class',t)},t.getIsExtends=function(e){let t=e.localName,a='',n='';return t?-1<t.indexOf('-')?a=t:(n=t,a=e.getAttribute&&e.getAttribute('is')||''):(a=e.is,n=e.extends),{is:a,typeExtension:n}},t.gatherStyleText=function(e){const t=[],a=e.querySelectorAll('style');for(let n=0;n<a.length;n++){const e=a[n];(0,p.isUnscopedStyle)(e)?!l.nativeShadow&&((0,p.processUnscopedStyle)(e),e.parentNode.removeChild(e)):(t.push(e.textContent),e.parentNode.removeChild(e))}return t.join('').trim()};var l=a(24),u=a(25),c=a(26),p=a(180);let _=null},function(e,t){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object.defineProperty(t,'__esModule',{value:!0});t.default={}},function(e,t){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object.defineProperty(t,'__esModule',{value:!0}),t.default=function(e){requestAnimationFrame(function(){n?n(e):(!a&&(a=new Promise((e)=>{o=e}),'complete'===document.readyState?o():document.addEventListener('readystatechange',()=>{'complete'===document.readyState&&o()})),a.then(function(){e&&e()}))})};let a=null,n=window.HTMLImports&&window.HTMLImports.whenReady||null,o},function(e,t,a){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object.defineProperty(t,'__esModule',{value:!0}),t.CustomStyleInterfaceInterface=t.CustomStyleProvider=void 0;var n=a(46),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.CustomStyleProvider=void 0;const r='__seenByShadyCSS',s='__shadyCSSCachedStyle';let d=null,l=null;class u{constructor(){this.customStyles=[],this.enqueued=!1}enqueueDocumentValidation(){this.enqueued||!l||(this.enqueued=!0,(0,o.default)(l))}addCustomStyle(e){e[r]||(e[r]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[s])return e[s];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const a=e[t];if(a[s])continue;const n=this.getStyleForCustomStyle(a);if(n){const e=n.__appliedElement||n;d&&d(e),a[s]=e}}return e}}t.default=u,u.prototype.addCustomStyle=u.prototype.addCustomStyle,u.prototype.getStyleForCustomStyle=u.prototype.getStyleForCustomStyle,u.prototype.processStyles=u.prototype.processStyles,Object.defineProperties(u.prototype,{transformCallback:{get(){return d},set(e){d=e}},validateCallback:{get(){return l},set(e){let t=!1;l||(t=!0),l=e,t&&this.enqueueDocumentValidation()}}});t.CustomStyleInterfaceInterface=void 0},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.GestureEventListeners=void 0,a(2);var n=a(6),o=a(49),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(o);const s=r,d=t.GestureEventListeners=(0,n.dedupingMixin)((e)=>{return class extends e{_addEventListenerToNode(e,t,a){s.addListener(e,t,a)||super._addEventListenerToNode(e,t,a)}_removeEventListenerFromNode(e,t,a){s.removeListener(e,t,a)||super._removeEventListenerFromNode(e,t,a)}}})},function(e,t,a){'use strict';function n(e){let t=R?['click']:M;for(let a=0,n;a<t.length;a++)n=t[a],e?document.addEventListener(n,H,!0):document.removeEventListener(n,H,!0)}function o(e){let t=e.type;if(-1===M.indexOf(t))return!1;if('mousemove'===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!N&&(t=x[e.which]||0),!!(1&t)}else{let t=void 0===e.button?0:e.button;return 0===t}}function r(e){if('click'===e.type){if(0===e.detail)return!0;let a=c(e);if(!a.nodeType||a.nodeType!==Node.ELEMENT_NODE)return!0;let t=a.getBoundingClientRect(),n=e.pageX,o=e.pageY;return!(n>=t.left&&n<=t.right&&o>=t.top&&o<=t.bottom)}return!1}function s(e){let t='auto',a=e.composedPath&&e.composedPath();if(a)for(let e=0,o;e<a.length;e++)if(o=a[e],o[O]){t=o[O];break}return t}function d(e,t,a){e.movefn=t,e.upfn=a,document.addEventListener('mousemove',t),document.addEventListener('mouseup',a)}function l(e){document.removeEventListener('mousemove',e.movefn),document.removeEventListener('mouseup',e.upfn),e.movefn=null,e.upfn=null}function u(e,t){let a=document.elementFromPoint(e,t),n=a;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let o=n;if(n=n.shadowRoot.elementFromPoint(e,t),o===n)break;n&&(a=n)}return a}function c(e){return e.composedPath?e.composedPath()[0]:e.target}function p(e){let a=e.type,t=e.currentTarget,n=t[P],o;if(n){let t=n[a];if(t){if(!e[w]&&(e[w]={},'touch'===a.slice(0,5))){e=e;let n=e.changedTouches[0];if('touchstart'===a&&1===e.touches.length&&(z.touch.id=n.identifier),z.touch.id!==n.identifier)return;C||'touchstart'!==a&&'touchmove'!==a||_(e)}if(o=e[w],!o.skip){for(let a=0,n;a<V.length;a++)n=V[a],t[n.name]&&!o[n.name]&&n.flow&&-1<n.flow.start.indexOf(e.type)&&n.reset&&n.reset();for(let n=0,s;n<V.length;n++)s=V[n],t[s.name]&&!o[s.name]&&(o[s.name]=!0,s[a](e))}}}}function _(e){let a=e.changedTouches[0],t=e.type;if('touchstart'===t)z.touch.x=a.clientX,z.touch.y=a.clientY,z.touch.scrollDecided=!1;else if('touchmove'===t){if(z.touch.scrollDecided)return;z.touch.scrollDecided=!0;let t=s(e),n=!1,o=E(z.touch.x-a.clientX),r=E(z.touch.y-a.clientY);e.cancelable&&('none'===t?n=!0:'pan-x'===t?n=r>o:'pan-y'===t&&(n=o>r)),n?e.preventDefault():n('track')}}function m(e,t,a){return!!U[t]&&(h(e,t,a),!0)}function y(e,t,a){return!!U[t]&&(f(e,t,a),!0)}function h(e,t,a){let n=U[t],o=n.deps,r=n.name,s=e[P];s||(e[P]=s={});for(let n=0,d,l;n<o.length;n++)(d=o[n],!(R&&-1<M.indexOf(d)&&'click'!==d))&&(l=s[d],l||(s[d]=l={_count:0}),0===l._count&&e.addEventListener(d,p),l[r]=(l[r]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,a),n.touchAction&&b(e,n.touchAction)}function f(e,t,a){let n=U[t],o=n.deps,r=n.name,s=e[P];if(s)for(let t=0,a,n;t<o.length;t++)a=o[t],n=s[a],n&&n[r]&&(n[r]=(n[r]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(a,p));e.removeEventListener(t,a)}function g(e){V.push(e);for(let t=0;t<e.emits.length;t++)U[e.emits[t]]=e}function v(e){for(let t=0,a;t<V.length;t++){a=V[t];for(let t=0,o;t<a.emits.length;t++)if(o=a.emits[t],o===e)return a}return null}function b(e,t){C&&(e.style.touchAction=t),e[O]=t}function T(e,t,a){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=a,e.dispatchEvent(n),n.defaultPrevented){let e=a.preventer||a.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function S(e){let t=v(e);t.info&&(t.info.prevent=!0)}var E=Math.abs;Object.defineProperty(t,'__esModule',{value:!0}),t.remove=t.add=t.findOriginalTarget=t.recognizers=t.gestures=void 0,t.deepTargetFind=u,t._findOriginalTarget=c,t._handleNative=p,t._handleTouchAction=_,t.addListener=m,t.removeListener=y,t._add=h,t._remove=f,t.register=g,t._findRecognizerByEvent=v,t.setTouchAction=b,t._fire=T,t.prevent=S,t.resetMouseCanceller=function(){z.mouse.mouseIgnoreJob&&z.mouse.mouseIgnoreJob.flush()},a(2);var k=a(7),I=a(9);let C='string'==typeof document.head.style.touchAction,P='__polymerGestures',w='__polymerGesturesHandled',O='__polymerGesturesTouchAction',D=25,A=5,M=['mousedown','mousemove','mouseup','click'],x=[0,1,4,2],N=function(){try{return 1===new MouseEvent('test',{buttons:1}).buttons}catch(t){return!1}}(),L=!1;(function(){try{let e=Object.defineProperty({},'passive',{get:function(){L=!0}});window.addEventListener('test',null,e),window.removeEventListener('test',null,e)}catch(t){}})();let R=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),F=function(){};F.prototype.reset=function(){},F.prototype.mousedown,F.prototype.mousemove,F.prototype.mouseup,F.prototype.touchstart,F.prototype.touchmove,F.prototype.touchend,F.prototype.click;let H=function(e){let t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e[w]={skip:!0},'click'===e.type)){let t=e.composedPath&&e.composedPath();if(t)for(let e=0;e<t.length;e++)if(t[e]===z.mouse.target)return;e.preventDefault(),e.stopPropagation()}},z={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};document.addEventListener('touchend',function(t){z.mouse.mouseIgnoreJob||n(!0);z.mouse.target=t.composedPath()[0],z.mouse.mouseIgnoreJob=I.Debouncer.debounce(z.mouse.mouseIgnoreJob,k.timeOut.after(2500),function(){n(),z.mouse.target=null,z.mouse.mouseIgnoreJob=null})},!!L&&{passive:!0});const U=t.gestures={},V=t.recognizers=[];g({name:'downup',deps:['mousedown','touchstart','touchend'],flow:{start:['mousedown','touchstart'],end:['mouseup','touchend']},emits:['down','up'],info:{movefn:null,upfn:null},reset:function(){l(this.info)},mousedown:function(a){if(!o(a))return;let n=c(a),t=this;d(this.info,function(a){o(a)||(t._fire('up',n,a),l(t.info))},function(a){o(a)&&t._fire('up',n,a),l(t.info)}),this._fire('down',n,a)},touchstart:function(t){this._fire('down',c(t),t.changedTouches[0],t)},touchend:function(t){this._fire('up',c(t),t.changedTouches[0],t)},_fire:function(e,t,a,n){T(t,e,{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:n,prevent:function(t){return S(t)}})}}),g({name:'track',touchAction:'none',deps:['mousedown','touchstart','touchmove','touchend'],flow:{start:['mousedown','touchstart'],end:['mouseup','touchend']},emits:['track'],info:{x:0,y:0,state:'start',started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state='start',this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,l(this.info)},hasMovedEnough:function(e,t){if(this.info.prevent)return!1;if(this.info.started)return!0;let a=E(this.info.x-e),n=E(this.info.y-t);return a>=A||n>=A},mousedown:function(a){if(!o(a))return;let n=c(a),t=this,r=function(a){let e=a.clientX,r=a.clientY;t.hasMovedEnough(e,r)&&(t.info.state=t.info.started?'mouseup'===a.type?'end':'track':'start','start'===t.info.state&&S('tap'),t.info.addMove({x:e,y:r}),!o(a)&&(t.info.state='end',l(t.info)),t._fire(n,a),t.info.started=!0)};d(this.info,r,function(a){t.info.started&&r(a),l(t.info)}),this.info.x=a.clientX,this.info.y=a.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(a){let e=c(a),t=a.changedTouches[0],n=t.clientX,o=t.clientY;this.hasMovedEnough(n,o)&&('start'===this.info.state&&S('tap'),this.info.addMove({x:n,y:o}),this._fire(e,t),this.info.state='track',this.info.started=!0)},touchend:function(a){let e=c(a),t=a.changedTouches[0];this.info.started&&(this.info.state='end',this.info.addMove({x:t.clientX,y:t.clientY}),this._fire(e,t,a))},_fire:function(e,t){let a=this.info.moves[this.info.moves.length-2],n=this.info.moves[this.info.moves.length-1],o=n.x-this.info.x,r=n.y-this.info.y,s=0,d;a&&(d=n.x-a.x,s=n.y-a.y),T(e,'track',{state:this.info.state,x:t.clientX,y:t.clientY,dx:o,dy:r,ddx:d,ddy:s,sourceEvent:t,hover:function(){return u(t.clientX,t.clientY)}})}}),g({name:'tap',deps:['mousedown','click','touchstart','touchend'],flow:{start:['mousedown','touchstart'],end:['click','touchend']},emits:['tap'],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},save:function(t){this.info.x=t.clientX,this.info.y=t.clientY},mousedown:function(t){o(t)&&this.save(t)},click:function(t){o(t)&&this.forward(t)},touchstart:function(t){this.save(t.changedTouches[0],t)},touchend:function(t){this.forward(t.changedTouches[0],t)},forward:function(a,n){let o=E(a.clientX-this.info.x),s=E(a.clientY-this.info.y),d=c(n||a);(isNaN(o)||isNaN(s)||o<=D&&s<=D||r(a))&&!this.info.prevent&&T(d,'tap',{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:n})}});const B=t.findOriginalTarget=c,q=t.add=m,K=t.remove=y},function(e,t,a){'use strict';function n(e,t,a){return{index:e,removed:t,addedCount:a}}function o(e,t,a,n,o,r){let s=r-o+1,d=a-t+1,l=Array(s);for(let u=0;u<s;u++)l[u]=Array(d),l[u][0]=u;for(let s=0;s<d;s++)l[0][s]=s;for(let c=1;c<s;c++)for(let a=1;a<d;a++)if(u(e[t+a-1],n[o+c-1]))l[c][a]=l[c-1][a-1];else{let e=l[c-1][a]+1,t=l[c][a-1]+1;l[c][a]=e<t?e:t}return l}function r(e){let t=e.length-1,a=e[0].length-1,n=e[t][a],o=[];for(;0<t||0<a;){if(0==t){o.push(_),a--;continue}if(0==a){o.push(m),t--;continue}let r=e[t-1][a-1],s=e[t-1][a],d=e[t][a-1],l;l=s<d?s<r?s:r:d<r?d:r,l==r?(r==n?o.push(c):(o.push(p),n=r),t--,a--):l==s?(o.push(m),t--,n=s):(o.push(_),a--,n=d)}return o.reverse(),o}function s(e,t,a,s,u,y){let h=0,f=0,g=Math.min(a-t,y-u),v;if(0==t&&0==u&&(h=d(e,s,g)),a==e.length&&y==s.length&&(f=l(e,s,g-h)),t+=h,u+=h,a-=f,y-=f,0==a-t&&0==y-u)return[];if(t==a){for(v=n(t,[],0);u<y;)v.removed.push(s[u++]);return[v]}if(u==y)return[n(t,[],a-t)];let b=r(o(e,t,a,s,u,y));v=void 0;let T=[],S=t,E=u;for(let o=0;o<b.length;o++)switch(b[o]){case c:v&&(T.push(v),v=void 0),S++,E++;break;case p:v||(v=n(S,[],0)),v.addedCount++,S++,v.removed.push(s[E]),E++;break;case _:v||(v=n(S,[],0)),v.addedCount++,S++;break;case m:v||(v=n(S,[],0)),v.removed.push(s[E]),E++;}return v&&T.push(v),T}function d(e,t,a){for(let n=0;n<a;n++)if(!u(e[n],t[n]))return n;return a}function l(e,t,a){let n=e.length,o=t.length,r=0;for(;r<a&&u(e[--n],t[--o]);)r++;return r}function u(e,t){return e===t}Object.defineProperty(t,'__esModule',{value:!0}),t.calculateSplices=void 0,a(2);const c=0,p=1,_=2,m=3;t.calculateSplices=function(e,t){return s(e,0,e.length,t,0,t.length)}},function(e,t,a){'use strict';function n(e){this.type=e&&e.type||'default',this.key=e&&e.key,'value'in e&&(this.value=e.value)}Object.defineProperty(t,'__esModule',{value:!0}),t.IronMeta=void 0,a(1);var o=a(3);n.types={},n.prototype={get value(){var e=this.type,t=this.key;if(e&&t)return n.types[e]&&n.types[e][t]},set value(e){var t=this.type,a=this.key;t&&a&&(t=n.types[t]=n.types[t]||{},null==e?delete t[a]:t[a]=e)},get list(){var e=this.type;if(e)return Object.keys(n.types[this.type]).map(function(e){return r[this.type][e]},this)},byKey:function(e){return this.key=e,this.value}},t.IronMeta=n;var r=n.types;(0,o.Polymer)({is:'iron-meta',properties:{type:{type:String,value:'default'},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:'_selfChanged'},__meta:{type:Boolean,computed:'__computeMeta(type, key, value)'}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,a){var o=new n({type:e,key:t});return void 0!==a&&a!==o.value?o.value=a:this.value!==o.value&&(this.value=o.value),o},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new n({type:this.type,key:e}).value}})},function(e,t,a){'use strict';a(1);const n=document.createElement('div');n.setAttribute('style','display: none;'),n.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>`,document.head.appendChild(n)},function(e,t,a){'use strict';a(1);var n=a(205);a(17);var o=a(3);(0,o.Polymer)({_template:`
    <style>
      :host {
        display: block;
        padding: 8px 0;

        background: var(--paper-listbox-background-color, var(--primary-background-color));
        color: var(--paper-listbox-color, var(--primary-text-color));

        @apply --paper-listbox;
      }
    </style>

    <slot></slot>
`,is:'paper-listbox',behaviors:[n.IronMenuBehavior],hostAttributes:{role:'listbox'}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){'use strict';a(1),a(8),a(17),a(37);var n=a(3);(0,n.Polymer)({_template:`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:'paper-item-body'})},function(e,t,a){'use strict';a(174)},function(e,t,a){'use strict';var n=a(5);a(177),a(192),a(194),a(34),a(198),a(200),a(36),a(53),a(207),a(210),a(217),a(223),a(224);class o extends n.Element{static get is(){return'wallet-app'}static get template(){return`
            <style>
                :host {
                    --shadow-elevation-2dp_-_box-shadow:
                            0 0 4px rgba(0, 0, 0, .14),
                            0 3px 4px rgba(0, 0, 0, .12),
                            0 1px 5px rgba(0, 0, 0, .2);
                }

                paper-listbox hr {
                    margin: 4px 0;
                    border: none;
                    border-top: 1px solid var(--divider-color);
                }

                .paper-item-link {
                    color: inherit;
                    text-decoration: none;
                }

                app-drawer paper-item,
                app-drawer paper-icon-item {
                    font-size: var(--paper-font-menu_-_font-size);
                    font-weight: var(--paper-font-menu_-_font-weight);
                    line-height: var(--paper-font-menu_-_line-height);
                    color: var(--light-theme-text-color);
                }

                app-drawer paper-icon-item iron-icon {
                    color: var(--paper-grey-600);
                }
            </style>

            <app-store
                wallets="{{wallets}}"
                wallet-id="[[walletId]]"
                wallet="{{wallet}}"
                categories="{{categories}}"
                category-id="[[categoryId]]"
                category="{{category}}"
                transactions="{{transactions}}"
                transaction-id="[[transactionId]]"
                transaction="{{transaction}}"></app-store>

            <app-location
                route="{{route}}"
                use-hash-as-path></app-location>

            <app-route
                route="{{route}}"
                pattern="/:page"
                data="{{routeData}}"
                tail="{{subroute}}"></app-route>

            <app-drawer-layout>
                <app-drawer slot="drawer" swipe-open>
                    <paper-listbox>
                        <a class="paper-item-link" href="#/wallets" tabindex="-1">
                            <paper-icon-item>
                                <iron-icon icon="account-balance-wallet" slot="item-icon"></iron-icon>
                                Wallets
                            </paper-icon-item>
                        </a>
                        <a class="paper-item-link" href="#/transactions" tabindex="-1">
                            <paper-icon-item>
                                <iron-icon icon="inbox" slot="item-icon"></iron-icon>
                                Transactions
                            </paper-icon-item>
                        </a>
                        <hr>
                        <paper-icon-item>
                            <iron-icon icon="settings" slot="item-icon"></iron-icon>
                            Settings
                        </paper-icon-item>
                        <paper-icon-item>
                            <iron-icon icon="info" slot="item-icon"></iron-icon>
                            Information
                        </paper-icon-item>
                    </paper-listbox>
                </app-drawer>

                <iron-pages
                    selected="[[routeData.page]]"
                    attr-for-selected="name"
                    selected-attribute="active"
                    fallback-selection="transactions">

                        <page-transactions
                            name="transactions"
                            wallets="[[wallets]]"
                            categories="[[categories]]"
                            transactions="[[transactions]]"></page-transactions>

                        <page-transaction
                            name="transaction"
                            transaction-id="{{transactionId}}"
                            transaction="{{transaction}}"
                            route="[[subroute]]"></page-transaction>

                        <page-wallets
                            name="wallets"
                            wallets="[[wallets]]"
                            categories="[[categories]]"
                            transactions="[[transactions]]"></page-wallets>

                        <page-wallet
                            name="wallet"
                            wallet-id="{{walletId}}"
                            wallet="{{wallet}}"
                            route="[[subroute]]"></page-wallet>

                </iron-pages>
            </app-drawer-layout>
        `}static get properties(){return{route:Object,routeData:Object,wallets:Array,walletId:String,wallet:Object,categories:Array,categoryId:String,category:Object,transactions:Array,transactionId:String,transaction:Object}}constructor(){super()}}customElements.define(o.is,o)},function(e,t,a){'use strict';function n(e,t){if(!c[t]){let a=e[t];a!==void 0&&(e.__data?e._setPendingProperty(t,a):(e.__dataProto?!e.hasOwnProperty(JSCompiler_renameProperty('__dataProto',e))&&(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=a))}}Object.defineProperty(t,'__esModule',{value:!0}),t.PropertyAccessors=void 0,a(2);var o=a(6),r=a(12),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(r),d=a(7);let l=s,u=d.microTask;const c={};for(let n=HTMLElement.prototype;n;){let e=Object.getOwnPropertyNames(n);for(let t=0;t<e.length;t++)c[e[t]]=!0;n=Object.getPrototypeOf(n)}t.PropertyAccessors=(0,o.dedupingMixin)((e)=>{return class extends e{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(l.dashToCamelCase(e[t]))}constructor(){super(),this.__serializing,this.__dataCounter,this.__dataEnabled,this.__dataReady,this.__dataInvalid,this.__data,this.__dataPending,this.__dataOld,this.__dataProto,this.__dataHasAccessor,this.__dataInstanceProps,this._initializeProperties()}attributeChangedCallback(e,t,a){t!==a&&this._attributeToProperty(e,a)}_initializeProperties(){for(let e in this.__serializing=!1,this.__dataCounter=0,this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_initializeInstanceProperties(e){Object.assign(this,e)}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_attributeToProperty(e,t,a){if(!this.__serializing){let n=l.dashToCamelCase(e);this[n]=this._deserializeValue(t,a)}}_propertyToAttribute(e,t,a){this.__serializing=!0,a=3>arguments.length?this[e]:a,this._valueToNodeAttribute(this,a,t||l.camelToDashCase(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,a){let n=this._serializeValue(t);n===void 0?e.removeAttribute(a):e.setAttribute(a,n)}_serializeValue(e){switch(typeof e){case'boolean':return e?'':void 0;case'object':if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return''}default:return null==e?void 0:e.toString();}}_deserializeValue(e,t){let a;switch(t){case Number:a=+e;break;case Boolean:a=null!==e;break;case Object:try{a=JSON.parse(e)}catch(e){}break;case Array:try{a=JSON.parse(e)}catch(t){a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:a=new Date(e);break;case String:default:a=e;}return a}_createPropertyAccessor(e,t){this.hasOwnProperty('__dataHasAccessor')||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,n(this,e),Object.defineProperty(this,e,{get:function(){return this.__data[e]},set:t?function(){}:function(t){this._setProperty(e,t)}}))}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_setPendingProperty(e,t){let a=this.__data[e],n=this._shouldPropertyChange(e,t,a);return n&&(!this.__dataPending&&(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=a),this.__data[e]=t,this.__dataPending[e]=t),n}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,u.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){if(this.__dataPending&&this.__dataOld){let e=this.__dataPending;this.__dataPending=null,this.__dataCounter++,this._propertiesChanged(this.__data,e,this.__dataOld),this.__dataCounter--}}ready(){this.__dataReady=!0,this._flushProperties()}_propertiesChanged(){}_shouldPropertyChange(e,t,a){return a!==t&&(a===a||t===t)}}})},function(e,t,a){'use strict';function n(e){let a=e.getAttribute('is');if(a&&c[a]){let n=e;for(n.removeAttribute('is'),e=n.ownerDocument.createElement(a),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function o(e,t){let a=t.parentInfo&&o(e,t.parentInfo);if(a){for(let e=a.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e;}else return e}function r(e,t,a,n){n.id&&(t[n.id]=a)}function s(t,a,n){if(n.events&&n.events.length)for(let o=0,r=n.events,s;o<r.length&&(s=r[o]);o++)t._addMethodEventListenerToNode(a,s.name,s.value,t)}function d(e,t,a){a.templateInfo&&(t._templateInfo=a.templateInfo)}function l(t,e,a){t=t._methodHost||t;return function(n){t[a]?t[a](n,n.detail):console.warn('listener method `'+a+'` not defined')}}Object.defineProperty(t,'__esModule',{value:!0}),t.TemplateStamp=void 0,a(2);var u=a(6);const c={"dom-if":!0,"dom-repeat":!0},p=t.TemplateStamp=(0,u.dedupingMixin)((e)=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let a=e._templateInfo={};a.nodeInfoList=[],a.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute('strip-whitespace'),this._parseTemplateContent(e,a,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,a){return this._parseTemplateNode(e.content,t,a)}static _parseTemplateNode(e,t,a){let n=e,o;return'template'!=n.localName||n.hasAttribute('preserve-content')?'slot'===n.localName&&(t.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(n,t,a)||o,n.firstChild&&(o=this._parseTemplateChildNodes(n,t,a)||o),n.hasAttributes&&n.hasAttributes()&&(o=this._parseTemplateNodeAttributes(n,t,a)||o),o}static _parseTemplateChildNodes(e,t,a){for(let o=e.firstChild,r=0,s;o;o=s){if('template'==o.localName&&(o=n(o)),s=o.nextSibling,o.nodeType===Node.TEXT_NODE){for(let t=s;t&&t.nodeType===Node.TEXT_NODE;)o.textContent+=t.textContent,s=t.nextSibling,e.removeChild(t),t=s;if(t.stripWhiteSpace&&!o.textContent.trim()){e.removeChild(o);continue}}let d={parentIndex:r,parentInfo:a};this._parseTemplateNode(o,t,d)&&(d.infoIndex=t.nodeInfoList.push(d)-1),o.parentNode&&r++}}static _parseTemplateNestedTemplate(e,t,a){let n=this._parseTemplate(e,t),o=n.content=e.content.ownerDocument.createDocumentFragment();return o.appendChild(e.content),a.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,n){let o=!1,r=Array.from(e.attributes);for(let s=r.length-1,d;d=r[s];s--)o=this._parseTemplateNodeAttribute(e,t,n,d.name,d.value)||o;return o}static _parseTemplateNodeAttribute(e,t,a,n,o){return'on-'===n.slice(0,3)?(e.removeAttribute(n),a.events=a.events||[],a.events.push({name:n.slice(3),value:o}),!0):!('id'!==n)&&(a.id=o,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),a=t.nodeInfoList,n=t.content||e.content,u=document.importNode(n,!0);u.__noInsertionPoint=!t.hasInsertionPoint;let c=u.nodeList=Array(a.length);u.$={};for(let t=0,n=a.length,l,p;t<n&&(l=a[t]);t++)p=c[t]=o(u,l),r(this,u.$,p,l),d(this,p,l),s(this,p,l);return u}_addMethodEventListenerToNode(e,t,a,n){n=n||e;let o=l(n,t,a);return this._addEventListenerToNode(e,t,o),o}_addEventListenerToNode(e,t,a){e.addEventListener(t,a)}_removeEventListenerFromNode(e,t,a){e.removeEventListener(t,a)}}})},function(e,t,a){'use strict';var n=Math.min,o=Math.max;a(1),a(8);var r=a(3),s=a(28),d=a(4);(0,r.Polymer)({_template:`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: 120px 0;

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:'app-drawer',properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:'left'},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:['resetLayout(position, isAttached)','_resetPosition(align, isAttached)','_styleTransitionDuration(transitionDuration)','_openedPersistentChanged(opened, persistent)'],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){(0,s.afterNextRender)(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener('keydown',this._tabKeydownHandler.bind(this)),this.listen(this,'track','_track'),this.setScrollDirection('y')}),this.fire('app-reset-layout')},detached:function(){document.removeEventListener('keydown',this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return'rtl'===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case'start':return void this._setPosition(this._isRTL()?'right':'left');case'end':return void this._setPosition(this._isRTL()?'left':'right');}this._setPosition(this.align)},_escKeydownHandler:function(e){e.keyCode===27&&(e.preventDefault(),this.close())},_track:function(e){if(!(this.persistent||this.disableSwipe))switch(e.preventDefault(),e.detail.state){case'start':this._trackStart(e);break;case'track':this._trackMove(e);break;case'end':this._trackEnd(e);}},_trackStart:function(){this._drawerState=this._DRAWER_STATE.TRACKING;var e=this.$.contentContainer.getBoundingClientRect();this._savedWidth=e.width,this._translateOffset='left'===this.position?e.left:e.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility='visible'},_trackMove:function(e){this._translateDrawer(e.detail.dx+this._translateOffset),this._trackDetails.push({dx:e.detail.dx,timeStamp:Date.now()})},_trackEnd:function(e){var t=e.detail.dx+this._translateOffset,a=this.getWidth(),n='left'===this.position,o=n?0<=t||t<=-a:0>=t||t>=a;if(!o){var r=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(e,r),this._drawerState===this._DRAWER_STATE.FLINGING)return}var s=a/2;e.detail.dx<-s?this.opened='right'===this.position:e.detail.dx>s&&(this.opened='left'===this.position),o?this.debounce('_resetDrawerState',this._resetDrawerState):this.debounce('_resetDrawerState',this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=''},_calculateVelocity:function(e,t){for(var a=Date.now(),n=0,o=t.length-1,r;n<=o;){var s=n+o>>1,l=t[s];l.timeStamp>=a-100?(r=l,o=s-1):n=s+1}if(r){var d=e.detail.dx-r.dx,u=a-r.timeStamp||1;return d/u}return 0},_flingDrawer:function(e,a){var r=this._calculateVelocity(e,a);if(!(Math.abs(r)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var s=e.detail.dx+this._translateOffset,d=this.getWidth(),l='left'===this.position,u=0<r,c;c=!u&&l?-(s+d):u&&!l?d-s:-s,u?(r=o(r,this._MIN_TRANSITION_VELOCITY),this.opened='left'===this.position):(r=n(r,-this._MIN_TRANSITION_VELOCITY),this.opened='right'===this.position);var p=this._FLING_INITIAL_SLOPE*c/r;this._styleTransitionDuration(p),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce('_resetDrawerState',this._resetDrawerState,p)}},_styleTransitionDuration:function(e){this.style.transitionDuration=e+'ms',this.$.contentContainer.style.transitionDuration=e+'ms',this.$.scrim.style.transitionDuration=e+'ms'},_styleTransitionTimingFunction:function(e){this.$.contentContainer.style.transitionTimingFunction=e,this.$.scrim.style.transitionTimingFunction=e},_translateDrawer:function(e){var t=this.getWidth();'left'===this.position?(e=o(-t,n(e,0)),this.$.scrim.style.opacity=1+e/t):(e=o(0,n(e,t)),this.$.scrim.style.opacity=1-e/t),this.translate3d(e+'px','0','0',this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity='',this.transform('',this.$.contentContainer)},_resetDrawerState:function(){var e=this._drawerState;e===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(''),this.style.visibility=''),this._savedWidth=null,this._drawerState=this.opened?this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._DRAWER_STATE.CLOSED,e!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener('keydown',this._boundEscKeydownHandler),document.body.style.overflow='hidden'):(document.removeEventListener('keydown',this._boundEscKeydownHandler),document.body.style.overflow=''),e!==this._DRAWER_STATE.INIT&&this.fire('app-drawer-transitioned'))},resetLayout:function(){this.fire('app-reset-layout')},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var e=(0,d.dom)(this).querySelectorAll('a[href]:not([tabindex="-1"]),area[href]:not([tabindex="-1"]),input:not([disabled]):not([tabindex="-1"]),select:not([disabled]):not([tabindex="-1"]),textarea:not([disabled]):not([tabindex="-1"]),button:not([disabled]):not([tabindex="-1"]),iframe:not([tabindex="-1"]),[tabindex]:not([tabindex="-1"]),[contentEditable=true]:not([tabindex="-1"])');0<e.length?(this._firstTabStop=e[0],this._lastTabStop=e[e.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var t=this.getAttribute('tabindex');t&&-1<parseInt(t,10)?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(e){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&e.keyCode===9&&(e.shiftKey?this._firstTabStop&&(0,d.dom)(e).localTarget===this._firstTabStop&&(e.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&(0,d.dom)(e).localTarget===this._lastTabStop&&(e.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(e,t){this.toggleClass('visible',e&&!t,this.$.scrim),this.debounce('_resetDrawerState',this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:0.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:'cubic-bezier(0.667, 1, 0.667, 1)',_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}})},function(e,t,a){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e){return e&&e.__esModule?e:{default:e}}var o=a(179),r=n(o),s=a(45),d=n(s),l=a(44),u=a(181),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(u),p=a(46),_=n(p),m=a(27),y=a(47),h=a(24);const f=new r.default;class g{constructor(){this.customStyleInterface=null,(0,_.default)(()=>{this.ensure()}),f.invalidCallback=c.invalidate}ensure(){this.customStyleInterface||(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface&&(this.customStyleInterface.transformCallback=(e)=>{f.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})}))}prepareTemplate(e,t){this.ensure(),d.default[t]=e;let a=f.transformTemplate(e,t);e._styleAst=a}flushCustomStyles(){if(this.ensure(),!!this.customStyleInterface){let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let a=e[t],n=this.customStyleInterface.getStyleForCustomStyle(a);n&&f.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}}styleSubtree(e,t){if(this.ensure(),t&&(0,m.updateNativeProperties)(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=(0,l.getIsExtends)(e),a=d.default[t];if(a&&!c.templateIsValid(a)){c.templateIsValidating(a)||(this.prepareTemplate(a,t),c.startValidatingTemplate(a));let n=e.shadowRoot;if(n){let e=n.querySelector('style');e&&(e.__cssRules=a._styleAst,e.textContent=(0,l.toCssText)(a._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new g;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,a){e.flushCustomStyles(),e.prepareTemplate(t,a)},styleSubtree(t,a){e.flushCustomStyles(),e.styleSubtree(t,a)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue(e,t){return(0,m.getComputedStyleValue)(e,t)},nativeCss:h.nativeCssVariables,nativeShadow:h.nativeShadow},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=f},function(e,t,a){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object.defineProperty(t,'__esModule',{value:!0});var n=a(44),o=a(26),r=a(27),s=a(25);const d=/;\s*/m,l=/^\s*(initial)|(inherit)\s*$/,u='_-_';class c{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let p=null;class _{constructor(){this._currentElement=null,this._measureElement=null,this._map=new c}detectMixin(e){return(0,r.detectMixin)(e)}gatherStyles(e){const t=(0,n.gatherStyleText)(e.content);if(t){const a=document.createElement('style');return a.textContent=t,e.content.insertBefore(a,e.content.firstChild),a}return null}transformTemplate(e,t){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const a=e._gatheredStyle;return a?this.transformStyle(a,t):null}transformStyle(e,t=''){let a=(0,n.rulesForStyle)(e);return this.transformRules(a,t),e.textContent=(0,n.toCssText)(a),a}transformCustomStyle(e){let t=(0,n.rulesForStyle)(e);return(0,n.forEachRule)(t,(e)=>{':root'===e.selector&&(e.selector='html'),this.transformRule(e)}),e.textContent=(0,n.toCssText)(t),t}transformRules(e,t){this._currentElement=t,(0,n.forEachRule)(e,(e)=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText),':root'===e.selector&&(e.selector=':host > *')}transformCssText(e){return e=e.replace(o.VAR_ASSIGN,(e,t,a,n)=>this._produceCssProperties(e,t,a,n)),this._consumeCssProperties(e)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement('meta'),this._measureElement.setAttribute('apply-shim-measure',''),this._measureElement.style.all='initial',document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_consumeCssProperties(e){for(let t=null;t=o.MIXIN_MATCH.exec(e);){let a=t[0],n=t[1],r=t.index,s=r+a.indexOf('@apply'),d=r+a.length,l=e.slice(0,s),u=e.slice(d),c=this._cssTextToMap(l),p=this._atApplyToCssProperties(n,c);e=`${l}${p}${u}`,o.MIXIN_MATCH.lastIndex=r+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(d,'');let a=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){this._currentElement&&(n.dependants[this._currentElement]=!0);let o,r,s;for(o in n.properties)s=t&&t[o],r=[o,': var(',e,u,o],s&&r.push(',',s),r.push(')'),a.push(r.join(''))}return a.join('; ')}_replaceInitialOrInherit(e,t){let a=l.exec(t);return a&&(a[1]?t=this._getInitialValueForProperty(e):t='apply-shim-inherit'),t}_cssTextToMap(e){let t=e.split(';'),a={},n,o;for(let r=0,s,d;r<t.length;r++)s=t[r],s&&(d=s.split(':'),1<d.length&&(n=d[0].trim(),o=this._replaceInitialOrInherit(n,d.slice(1).join(':')),a[n]=o));return a}_invalidateMixinEntry(e){if(p)for(let t in e.dependants)t!==this._currentElement&&p(t)}_produceCssProperties(e,t,a,o){if(a&&(0,n.processVariableAndFallback)(a,(e,t)=>{t&&this._map.get(t)&&(o=`@apply ${t};`)}),!o)return e;let r=this._consumeCssProperties(o),s=e.slice(0,e.indexOf('--')),d=this._cssTextToMap(r),l=d,c=this._map.get(t),_=c&&c.properties;_?l=Object.assign(Object.create(_),d):this._map.set(t,l);let m=[],y=!1,h,p;for(h in l)p=d[h],void 0===p&&(p='initial'),_&&!(h in _)&&(y=!0),m.push(`${t}${u}${h}: ${p}`);return y&&this._invalidateMixinEntry(c),c&&(c.properties=l),a&&(s=`${e};${s}`),`${s}${m.join('; ')};`}}_.prototype.detectMixin=_.prototype.detectMixin,_.prototype.transformStyle=_.prototype.transformStyle,_.prototype.transformCustomStyle=_.prototype.transformCustomStyle,_.prototype.transformRules=_.prototype.transformRules,_.prototype.transformRule=_.prototype.transformRule,_.prototype.transformTemplate=_.prototype.transformTemplate,_.prototype._separator=u,Object.defineProperty(_.prototype,'invalidCallback',{get(){return p},set(e){p=e}}),t.default=_},function(e,t){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object.defineProperty(t,'__esModule',{value:!0}),t.processUnscopedStyle=function(e){const t=e.textContent;if(!a.has(t)){a.add(t);const n=e.cloneNode(!0);document.head.appendChild(n)}},t.isUnscopedStyle=function(e){return e.hasAttribute(n)};const a=new Set,n=t.scopingAttribute='shady-unscoped'},function(e,t,a){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e){e[c]=e[c]||0,e[_]=e[_]||0,e[p]=(e[p]||0)+1}function o(e){return e[c]===e[p]}function r(e){return!o(e)&&e[_]===e[p]}function s(e){e[_]=e[p],e._validating||(e._validating=!0,m.then(function(){e[c]=e[p],e._validating=!1}))}Object.defineProperty(t,'__esModule',{value:!0}),t.invalidate=function(e){let t=l.default[e];t&&n(t)},t.invalidateTemplate=n,t.isValid=function(e){let t=l.default[e];return!t||o(t)},t.templateIsValid=o,t.isValidating=function(e){let t=l.default[e];return!!t&&r(t)},t.templateIsValidating=r,t.startValidating=function(e){let t=l.default[e];s(t)},t.startValidatingTemplate=s,t.elementsAreInvalid=function(){for(let e in l.default){let t=l.default[e];if(!o(t))return!0}return!1};var d=a(45),l=function(e){return e&&e.__esModule?e:{default:e}}(d),u=a(25);const c='_applyShimCurrentVersion',p='_applyShimNextVersion',_='_applyShimValidatingVersion',m=Promise.resolve()},function(e,t,a){'use strict';function n(e){window.HTMLImports?HTMLImports.whenReady(e):e()}Object.defineProperty(t,'__esModule',{value:!0}),t.importHref=void 0,a(2);t.importHref=function(e,t,a,o){let r=document.head.querySelector('link[href="'+e+'"][import-href]');r||(r=document.createElement('link'),r.rel='import',r.href=e,r.setAttribute('import-href','')),o&&r.setAttribute('async','');let s=function(){r.removeEventListener('load',d),r.removeEventListener('error',l)},d=function(e){s(),r.__dynamicImportLoaded=!0,t&&n(()=>{t(e)})},l=function(e){s(),r.parentNode&&r.parentNode.removeChild(r),a&&n(()=>{a(e)})};return r.addEventListener('load',d),r.addEventListener('error',l),null==r.parentNode?document.head.appendChild(r):r.__dynamicImportLoaded&&r.dispatchEvent(new Event('load')),r}},function(){'use strict';function e(){document.body.removeAttribute('unresolved')}'interactive'===document.readyState||'complete'===document.readyState?e():window.addEventListener('DOMContentLoaded',e)},function(e,t,a){'use strict';function o(e){return'slot'===e.localName}Object.defineProperty(t,'__esModule',{value:!0}),t.FlattenedNodesObserver=void 0,a(2);var n=a(50),r=a(7);t.FlattenedNodesObserver=class{static getFlattenedNodes(e){return o(e)?e.assignedNodes({flatten:!0}):Array.from(e.childNodes).map((e)=>o(e)?e.assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){o(this._target)?this._listenSlots([this._target]):(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,(e)=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver((e)=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){o(this._target)?this._unlistenSlots([this._target]):(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,r.microTask.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0,a;t<e.length;t++)a=e[t],a.addedNodes&&this._listenSlots(a.addedNodes),a.removedNodes&&this._unlistenSlots(a.removedNodes)}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),a=(0,n.calculateSplices)(t,this._effectiveNodes);for(let t=0,o;t<a.length&&(o=a[t]);t++)for(let t=0,a;t<o.removed.length&&(a=o.removed[t]);t++)e.removedNodes.push(a);for(let n=0,o;n<a.length&&(o=a[n]);n++)for(let a=o.index;a<o.index+o.addedCount;a++)e.addedNodes.push(t[a]);this._effectiveNodes=t;let o=!1;return(e.addedNodes.length||e.removedNodes.length)&&(o=!0,this.callback.call(this._target,e)),o}_listenSlots(e){for(let t=0,a;t<e.length;t++)a=e[t],o(a)&&a.addEventListener('slotchange',this._boundSchedule)}_unlistenSlots(e){for(let t=0,a;t<e.length;t++)a=e[t],o(a)&&a.removeEventListener('slotchange',this._boundSchedule)}}},function(e,t,a){'use strict';function n(e,t){if(!e)return t;t=(0,d.LegacyElementMixin)(t),Array.isArray(e)||(e=[e]);let a=t.prototype.behaviors;return e=r(e,null,a),t=o(e,t),a&&(e=a.concat(e)),t.prototype.behaviors=e,t}function o(e,t){for(let a=0,n;a<e.length;a++)n=e[a],n&&(t=Array.isArray(n)?o(n,t):s(n,t));return t}function r(e,t,a){t=t||[];for(let n=e.length-1,o;0<=n;n--)o=e[n],o?Array.isArray(o)?r(o,t):0>t.indexOf(o)&&(!a||0>a.indexOf(o))&&t.unshift(o):console.warn('behavior is null, check for missing or 404 import');return t}function s(e,t){class a extends t{static get properties(){return e.properties}static get observers(){return e.observers}static get template(){return e._template||l.DomModule&&l.DomModule.import(this.is,'template')||t.template||this.prototype._template||null}created(){super.created(),e.created&&e.created.call(this)}_registered(){super._registered(),e.beforeRegister&&e.beforeRegister.call(Object.getPrototypeOf(this)),e.registered&&e.registered.call(Object.getPrototypeOf(this))}_applyListeners(){if(super._applyListeners(),e.listeners)for(let t in e.listeners)this._addMethodEventListenerToNode(this,t,e.listeners[t])}_ensureAttributes(){if(e.hostAttributes)for(let t in e.hostAttributes)this._ensureAttribute(t,e.hostAttributes[t]);super._ensureAttributes()}ready(){super.ready(),e.ready&&e.ready.call(this)}attached(){super.attached(),e.attached&&e.attached.call(this)}detached(){super.detached(),e.detached&&e.detached.call(this)}attributeChanged(t,a,n){super.attributeChanged(t,a,n),e.attributeChanged&&e.attributeChanged.call(this,t,a,n)}}for(let n in a.generatedFrom=e,e)if(!(n in u)){let t=Object.getOwnPropertyDescriptor(e,n);t&&Object.defineProperty(a.prototype,n,t)}return a}Object.defineProperty(t,'__esModule',{value:!0}),t.mixinBehaviors=t.Class=void 0;var d=a(43),l=a(42);let u={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0};t.Class=function(e){e||console.warn('Polymer.Class requires `info` argument');let t=s(e,e.behaviors?n(e.behaviors,HTMLElement):(0,d.LegacyElementMixin)(HTMLElement));return t.is=e.is,t};t.mixinBehaviors=n},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.Templatizer=void 0;var n=a(29);let o=n.TemplateInstanceBase,r={templatize(e,t){this._templatizerTemplate=e,this.ctor=n.Templatize.templatize(e,this,{mutableData:!!t,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return n.Templatize.modelForElement(this._templatizerTemplate,e)}};t.Templatizer=r},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.DomBind=void 0,a(2);var n=a(23),o=a(15),r=a(48);const s=(0,r.GestureEventListeners)((0,o.OptionalMutableData)((0,n.PropertyEffects)(HTMLElement)));class d extends s{static get observedAttributes(){return['mutable-data']}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector('template'),!e){let t=new MutationObserver(()=>{if(e=this.querySelector('template'),e)t.disconnect(),this.render();else throw new Error('dom-bind requires a <template> child')});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent('dom-change',{bubbles:!0,composed:!0}))}}customElements.define('dom-bind',d),t.DomBind=d},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.ArraySelector=t.ArraySelectorMixin=void 0;var n=a(5),o=a(6),r=a(50),s=a(22);let d=(0,o.dedupingMixin)((e)=>{let t=(0,s.ElementMixin)(e);class a extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return['__updateSelection(multi, items.*)']}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let a=t.path;if('items'==a){let a=t.base||[],n=this.__lastItems,o=this.__lastMulti;if(e!==o&&this.clearSelection(),n){let e=(0,r.calculateSplices)(a,n);this.__applySplices(e)}this.__lastItems=a,this.__lastMulti=e}else if('items.splices'==t.path)this.__applySplices(t.value.indexSplices);else{let e=a.slice(6),t=parseInt(e,10);0>e.indexOf('.')&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let a=0,n;a<e.length;a++){n=e[a],t.forEach((e,a)=>{e<n.index||(e>=n.index+n.removed.length?t.set(a,e+n.addedCount-n.removed.length):t.set(a,-1))});for(let e=0,a;e<n.addedCount;e++)a=n.index+e,t.has(this.items[a])&&t.set(this.items[a],a)}this.__updateLinks();let a=0;t.forEach((e,n)=>{0>e?(this.multi?this.splice('selected',a,1):this.selected=this.selectedItem=null,t.delete(n)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach((t)=>{0<=t&&this.linkPaths('items.'+t,'selected.'+e++)})}else this.__selectedMap.forEach((e)=>{this.linkPaths('selected','items.'+e),this.linkPaths('selectedItem','items.'+e)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(0<=t){let e=0;this.__selectedMap.forEach((a,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths['items.'+e];if(t)return parseInt(t.slice(9),10)}deselect(e){let t=this.__selectedMap.get(e);if(0<=t){this.__selectedMap.delete(e);let a;this.multi&&(a=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice('selected',a,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(!this.multi&&this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push('selected',t):this.selected=this.selectedItem=t)}}return a});t.ArraySelectorMixin=d;let l=d(n.Element);class u extends l{static get is(){return'array-selector'}}customElements.define(u.is,u),t.ArraySelector=u},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.CustomStyle=void 0,a(190);var n=a(41);const o='include',r=window.ShadyCSS.CustomStyleInterface;class s extends HTMLElement{constructor(){super(),this._style=null,r.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector('style');if(!e)return null;this._style=e;const t=e.getAttribute(o);return t&&(e.removeAttribute(o),e.textContent=(0,n.cssFromModules)(t)+e.textContent),this._style}}window.customElements.define('custom-style',s),t.CustomStyle=s},function(e,t,a){'use strict';/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var n=a(47),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=a(27),s=a(24);const d=new o.default;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(){},styleSubtree(e,t){d.processStyles(),(0,r.updateNativeProperties)(e,t)},styleElement(){d.processStyles()},styleDocument(e){d.processStyles(),(0,r.updateNativeProperties)(document.body,e)},getComputedStyleValue(e,t){return(0,r.getComputedStyleValue)(e,t)},nativeCss:s.nativeCssVariables,nativeShadow:s.nativeShadow}),window.ShadyCSS.CustomStyleInterface=d},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.OptionalMutableDataBehavior=t.MutableDataBehavior=void 0;var n=a(15);let o;(function(){o=n.MutableData._mutablePropertyChange})();const r=t.MutableDataBehavior={_shouldPropertyChange(e,t,a){return o(this,e,t,a,!0)}},s=t.OptionalMutableDataBehavior={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,a){return o(this,e,t,a,this.mutableData)}}},function(e,t,a){'use strict';a(1),a(193);var n=a(32),o=a(3),r=a(4),s=a(28);(0,o.Polymer)({_template:`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:'app-drawer-layout',behaviors:[n.AppLayoutBehavior],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:'640px'},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:'_clickHandler'},observers:['_narrowChanged(narrow)'],get drawer(){return(0,r.dom)(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var e=this.drawer;e&&e.setAttribute('no-transition','')},_clickHandler:function(t){var e=(0,r.dom)(t).localTarget;if(e&&e.hasAttribute('drawer-toggle')){var a=this.drawer;a&&!a.persistent&&a.toggle()}},_updateLayoutStates:function(){var e=this.drawer;this.isAttached&&e&&(this._drawerPosition=this.narrow?null:e.position,this._drawerNeedsReset&&(this.narrow?(e.opened=this.openedWhenNarrow,e.persistent=!1):e.opened=e.persistent=!0,e.hasAttribute('no-transition')&&(0,s.afterNextRender)(this,function(){e.removeAttribute('no-transition')}),this._drawerNeedsReset=!1))},_narrowChanged:function(){this._drawerNeedsReset=!0,this.resetLayout()},_onQueryMatchesChanged:function(e){this._setNarrow(e.detail.value)},_computeMediaQuery:function(e,t){return e?'(min-width: 0px)':'(max-width: '+t+')'}})},function(e,t,a){'use strict';a(1);var n=a(3);(0,n.Polymer)({is:'iron-media-query',properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:'queryChanged'},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display='none',this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(!this.full&&'('!==e[0]&&(e='('+e+')'),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}})},function(e,t,a){'use strict';a(1),a(195),a(196);var n=a(197),o=a(3);(0,o.Polymer)({_template:`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="{{urlSpaceRegex}}">
    </iron-location>
`,is:'app-location',properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:'__onPathChanged'},_isReady:{type:Boolean}},behaviors:[n.AppRouteConverterBehavior],observers:['__computeRoutePath(useHashAsPath, __hash, __path)'],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){this._isReady&&(this.useHashAsPath?this.__hash=this.path:this.__path=this.path)}})},function(e,t,a){'use strict';function n(e,t){if(void 0==s){s=!1;try{var a=new URL('b','http://a');a.pathname='c%20d',s='http://a/c%20d'===a.href,s=s&&'http://www.google.com/?foo%20bar'===new URL('http://www.google.com/?foo bar').href}catch(t){}}return s?new URL(e,t):(d||(d=document.implementation.createHTMLDocument('url'),l=d.createElement('base'),d.head.appendChild(l),c=d.createElement('a')),l.href=t,c.href=e.replace(/ /g,'%20'),c)}a(1);var o=a(3),r=a(4),s,d,l,c;(0,o.Polymer)({is:'iron-location',properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:''},_urlSpaceRegExp:{computed:'_makeRegExp(urlSpaceRegex)'},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:['_updateUrl(path, query, hash)'],attached:function(){this.listen(window,'hashchange','_hashChanged'),this.listen(window,'location-changed','_urlChanged'),this.listen(window,'popstate','_urlChanged'),this.listen(document.body,'click','_globalOnClick'),this._lastChangedAt=window.performance.now()-(this.dwellTime-200),this._initialized=!0,this._urlChanged()},detached:function(){this.unlisten(window,'hashchange','_hashChanged'),this.unlisten(window,'location-changed','_urlChanged'),this.unlisten(window,'popstate','_urlChanged'),this.unlisten(document.body,'click','_globalOnClick'),this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(window.location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(window.location.pathname),this.query=window.location.search.substring(1),this._dontUpdateUrl=!1,this._updateUrl()},_getUrl:function(){var e=window.encodeURI(this.path).replace(/\#/g,'%23').replace(/\?/g,'%3F'),t='';this.query&&(t='?'+this.query.replace(/\#/g,'%23'));var a='';return this.hash&&(a='#'+window.encodeURI(this.hash)),e+t+a},_updateUrl:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(window.location.pathname)||this.query!==window.location.search.substring(1)||this.hash!==window.decodeURIComponent(window.location.hash.substring(1)))){var e=this._getUrl(),t=n(e,window.location.protocol+'//'+window.location.host).href,a=window.performance.now(),o=this._lastChangedAt+this.dwellTime>a;this._lastChangedAt=a,o?window.history.replaceState({},'',t):window.history.pushState({},'',t),this.fire('location-changed',{},{node:window})}},_globalOnClick:function(e){if(!e.defaultPrevented){var t=this._getSameOriginLinkHref(e);t&&(e.preventDefault(),t===window.location.href||(window.history.pushState({},'',t),this.fire('location-changed',{},{node:window})))}},_getSameOriginLinkHref:function(e){if(0!==e.button)return null;if(e.metaKey||e.ctrlKey)return null;for(var t=(0,r.dom)(e).path,a=null,o=0,s;o<t.length;o++)if(s=t[o],'A'===s.tagName&&s.href){a=s;break}if(!a)return null;if('_blank'===a.target)return null;if(('_top'===a.target||'_parent'===a.target)&&window.top!==window)return null;var d=a.href,l;l=null==document.baseURI?n(d):n(d,document.baseURI);var u=window.location.origin?window.location.origin:window.location.protocol+'//'+window.location.host;var c;if(c=l.origin?l.origin:l.protocol+'//'+l.host,c!==u)return null;var p=l.pathname+l.search+l.hash;if('/'!==p[0]&&(p='/'+p),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(p))return null;var _=n(p,window.location.href).href;return _},_makeRegExp:function(e){return RegExp(e)}})},function(e,t,a){'use strict';a(1);var n=a(3);'use strict',(0,n.Polymer)({is:'iron-query-params',properties:{paramsString:{type:String,notify:!0,observer:'paramsStringChanged'},paramsObject:{type:Object,notify:!0,value:function(){return{}}},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:['paramsObjectChanged(paramsObject.*)'],paramsStringChanged:function(){this._dontReact=!0,this.paramsObject=this._decodeParams(this.paramsString),this._dontReact=!1},paramsObjectChanged:function(){this._dontReact||(this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,'?').replace(/%2F/g,'/').replace(/'/g,'%27'))},_encodeParams:function(e){var t=[];for(var a in e){var n=e[a];''===n?t.push(encodeURIComponent(a)):n&&t.push(encodeURIComponent(a)+'='+encodeURIComponent(n.toString()))}return t.join('&')},_decodeParams:function(e){var t={};e=(e||'').replace(/\+/g,'%20');for(var a=e.split('&'),n=0,o;n<a.length;n++)o=a[n].split('='),o[0]&&(t[decodeURIComponent(o[0])]=decodeURIComponent(o[1]||''));return t}})},function(e,t){'use strict';Object.defineProperty(t,'__esModule',{value:!0});t.AppRouteConverterBehavior={properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:['_locationChanged(path, queryParams)','_routeChanged(route.prefix, route.path)','_routeQueryParamsChanged(route.__queryParams)'],created:function(){this.linkPaths('route.__queryParams','queryParams'),this.linkPaths('queryParams','route.__queryParams')},_locationChanged:function(){this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams||(this.route={prefix:'',path:this.path,__queryParams:this.queryParams})},_routeChanged:function(){this.route&&(this.path=this.route.prefix+this.route.path)},_routeQueryParamsChanged:function(e){this.route&&(this.queryParams=e)}}},function(e,t,a){'use strict';a(16),a(199);const n=document.createElement('div');n.setAttribute('style','display: none;'),n.innerHTML=`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attach-money"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/><path d="M0 0h24v24H0z" fill="none"/></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`,document.head.appendChild(n)},function(e,t,a){'use strict';a(1);var n=a(51),o=a(3),r=a(4);(0,o.Polymer)({is:'iron-iconset-svg',properties:{name:{type:String,observer:'_nameChanged'},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1}},created:function(){this._meta=new n.IronMeta({type:'iconset',key:null,value:null})},attached:function(){this.style.display='none'},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(e){return this.name+':'+e},this)},applyIcon:function(e,t){this.removeIcon(e);var a=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(a){var n=(0,r.dom)(e.root||e);return n.insertBefore(a,n.childNodes[0]),e._svgIcon=a}return null},removeIcon:function(e){e._svgIcon&&((0,r.dom)(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){return null==this.__targetIsRTL&&(e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&'rtl'===window.getComputedStyle(e).direction),this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire('iron-iconset-added',this,{node:window})})},_createIconMap:function(){var e=Object.create(null);return(0,r.dom)(this).querySelectorAll('[id]').forEach(function(t){e[t.id]=t}),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,a){if(e){var n=e.cloneNode(!0),o=document.createElementNS('http://www.w3.org/2000/svg','svg'),r=n.getAttribute('viewBox')||'0 0 '+t+' '+t,s='pointer-events: none; display: block; width: 100%; height: 100%;';return a&&n.hasAttribute('mirror-in-rtl')&&(s+='-webkit-transform:scale(-1,1);transform:scale(-1,1);'),o.setAttribute('viewBox',r),o.setAttribute('preserveAspectRatio','xMidYMid meet'),o.setAttribute('focusable','false'),o.style.cssText=s,o.appendChild(n).removeAttribute('id'),o}return null}})},function(e,t,a){'use strict';a(1);var n=a(33),o=a(35),r=a(3);(0,r.Polymer)({_template:`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:'iron-pages',behaviors:[n.IronResizableBehavior,o.IronSelectableBehavior],properties:{activateEvent:{type:String,value:null}},observers:['_selectedPageChanged(selected)'],_selectedPageChanged:function(){this.async(this.notifyResize)}})},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.IronSelection=void 0,a(1);const n=t.IronSelection=function(e){this.selection=[],this.selectCallback=e};n.prototype={get:function(){return this.multi?this.selection.slice():this.selection[0]},clear:function(e){this.selection.slice().forEach(function(t){(!e||0>e.indexOf(t))&&this.setItemSelected(t,!1)},this)},isSelected:function(e){return 0<=this.selection.indexOf(e)},setItemSelected:function(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var a=this.selection.indexOf(e);0<=a&&this.selection.splice(a,1)}this.selectCallback&&this.selectCallback(e,t)}},select:function(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))},toggle:function(e){this.setItemSelected(e,!this.isSelected(e))}}},function(){'use strict';const e=document.createElement('div');e.setAttribute('style','display: none;'),e.innerHTML=`
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic" crossorigin="anonymous">
`,document.head.appendChild(e)},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.PaperItemBehavior=t.PaperItemBehaviorImpl=void 0,a(1);var n=a(38),o=a(40);const r=t.PaperItemBehaviorImpl={hostAttributes:{role:'option',tabindex:'0'}},s=t.PaperItemBehavior=[n.IronButtonState,o.IronControlState,r]},function(e,t,a){'use strict';a(8),a(52),a(17),a(37);const n=document.createElement('div');n.setAttribute('style','display: none;'),n.innerHTML=`<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`,document.head.appendChild(n)},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.IronMenuBehavior=t.IronMenuBehaviorImpl=void 0,a(1);var n=a(206),o=a(39),r=a(4),s=a(35);const d=t.IronMenuBehaviorImpl={properties:{focusedItem:{observer:'_focusedItemChanged',readOnly:!0,type:Object},attrForItemTitle:{type:String},disabled:{type:Boolean,value:!1,observer:'_disabledChanged'}},_MODIFIER_KEYS:['Alt','AltGraph','CapsLock','Control','Fn','FnLock','Hyper','Meta','NumLock','OS','ScrollLock','Shift','Super','Symbol','SymbolLock'],_SEARCH_RESET_TIMEOUT_MS:1e3,_previousTabIndex:0,hostAttributes:{role:'menu'},observers:['_updateMultiselectable(multi)'],listeners:{focus:'_onFocus',keydown:'_onKeydown',"iron-items-changed":'_onIronItemsChanged'},keyBindings:{up:'_onUpKey',down:'_onDownKey',esc:'_onEscKey',"shift+tab:keydown":'_onShiftTabDown'},attached:function(){this._resetTabindices()},select:function(e){this._defaultFocusAsync&&(this.cancelAsync(this._defaultFocusAsync),this._defaultFocusAsync=null);var t=this._valueToItem(e);t&&t.hasAttribute('disabled')||(this._setFocusedItem(t),n.IronMultiSelectableBehaviorImpl.select.apply(this,arguments))},_resetTabindices:function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this.items.forEach(function(t){t.setAttribute('tabindex',t===e?'0':'-1')},this)},_updateMultiselectable:function(e){e?this.setAttribute('aria-multiselectable','true'):this.removeAttribute('aria-multiselectable')},_focusWithKeyboardEvent:function(e){if(-1===this._MODIFIER_KEYS.indexOf(e.key)){this.cancelDebouncer('_clearSearchText');var t=this._searchText||'',a=e.key&&1==e.key.length?e.key:String.fromCharCode(e.keyCode);t+=a.toLocaleLowerCase();for(var n=t.length,o=0,r;r=this.items[o];o++)if(!r.hasAttribute('disabled')){var s=this.attrForItemTitle||'textContent',d=(r[s]||r.getAttribute(s)||'').trim();if(!(d.length<n)&&d.slice(0,n).toLocaleLowerCase()==t){this._setFocusedItem(r);break}}this._searchText=t,this.debounce('_clearSearchText',this._clearSearchText,this._SEARCH_RESET_TIMEOUT_MS)}},_clearSearchText:function(){this._searchText=''},_focusPrevious:function(){for(var e=this.items.length,t=+this.indexOf(this.focusedItem),a=1,n;a<e+1;a++)if(n=this.items[(t-a+e)%e],!n.hasAttribute('disabled')){var o=(0,r.dom)(n).getOwnerRoot()||document;if(this._setFocusedItem(n),(0,r.dom)(o).activeElement==n)return}},_focusNext:function(){for(var e=this.items.length,t=+this.indexOf(this.focusedItem),a=1,n;a<e+1;a++)if(n=this.items[(t+a)%e],!n.hasAttribute('disabled')){var o=(0,r.dom)(n).getOwnerRoot()||document;if(this._setFocusedItem(n),(0,r.dom)(o).activeElement==n)return}},_applySelection:function(e,t){t?e.setAttribute('aria-selected','true'):e.removeAttribute('aria-selected'),s.IronSelectableBehavior._applySelection.apply(this,arguments)},_focusedItemChanged:function(e,t){t&&t.setAttribute('tabindex','-1'),!e||e.hasAttribute('disabled')||this.disabled||(e.setAttribute('tabindex','0'),e.focus())},_onIronItemsChanged:function(e){e.detail.addedNodes.length&&this._resetTabindices()},_onShiftTabDown:function(){var e=this.getAttribute('tabindex');d._shiftTabPressed=!0,this._setFocusedItem(null),this.setAttribute('tabindex','-1'),this.async(function(){this.setAttribute('tabindex',e),d._shiftTabPressed=!1},1)},_onFocus:function(e){if(!d._shiftTabPressed){var t=(0,r.dom)(e).rootTarget;(t===this||'undefined'==typeof t.tabIndex||this.isLightDescendant(t))&&(this._defaultFocusAsync=this.async(function(){var e=this.multi?this.selectedItems&&this.selectedItems[0]:this.selectedItem;this._setFocusedItem(null),e?this._setFocusedItem(e):this.items[0]&&this._focusNext()}))}},_onUpKey:function(e){this._focusPrevious(),e.detail.keyboardEvent.preventDefault()},_onDownKey:function(e){this._focusNext(),e.detail.keyboardEvent.preventDefault()},_onEscKey:function(){var e=this.focusedItem;e&&e.blur()},_onKeydown:function(e){this.keyboardEventMatchesKeys(e,'up down esc')||this._focusWithKeyboardEvent(e),e.stopPropagation()},_activateHandler:function(e){s.IronSelectableBehavior._activateHandler.call(this,e),e.stopPropagation()},_disabledChanged:function(e){e?(this._previousTabIndex=this.hasAttribute('tabindex')?this.tabIndex:0,this.removeAttribute('tabindex')):!this.hasAttribute('tabindex')&&this.setAttribute('tabindex',this._previousTabIndex)}};d._shiftTabPressed=!1;t.IronMenuBehavior=[n.IronMultiSelectableBehavior,o.IronA11yKeysBehavior,d]},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.IronMultiSelectableBehavior=t.IronMultiSelectableBehaviorImpl=void 0,a(1);var n=a(35);const o=t.IronMultiSelectableBehaviorImpl={properties:{multi:{type:Boolean,value:!1,observer:'multiChanged'},selectedValues:{type:Array,notify:!0,value:function(){return[]}},selectedItems:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}}},observers:['_updateSelected(selectedValues.splices)'],select:function(e){this.multi?this._toggleSelected(e):this.selected=e},multiChanged:function(e){this._selection.multi=e,this._updateSelected()},get _shouldUpdateSelection(){return null!=this.selected||null!=this.selectedValues&&this.selectedValues.length},_updateAttrForSelected:function(){this.multi?this.selectedItems&&0<this.selectedItems.length&&(this.selectedValues=this.selectedItems.map(function(e){return this._indexToValue(this.indexOf(e))},this).filter(function(e){return null!=e},this)):n.IronSelectableBehavior._updateAttrForSelected.apply(this)},_updateSelected:function(){this.multi?this._selectMulti(this.selectedValues):this._selectSelected(this.selected)},_selectMulti:function(e){e=e||[];var t=(this._valuesToItems(e)||[]).filter(function(e){return null!==e&&e!==void 0});this._selection.clear(t);for(var a=0;a<t.length;a++)this._selection.setItemSelected(t[a],!0);if(this.fallbackSelection&&!this._selection.get().length){var n=this._valueToItem(this.fallbackSelection);n&&this.select(this.fallbackSelection)}},_selectionChange:function(){var e=this._selection.get();this.multi?(this._setSelectedItems(e),this._setSelectedItem(e.length?e[0]:null)):null!==e&&e!==void 0?(this._setSelectedItems([e]),this._setSelectedItem(e)):(this._setSelectedItems([]),this._setSelectedItem(null))},_toggleSelected:function(e){var t=this.selectedValues.indexOf(e);0>t?this.push('selectedValues',e):this.splice('selectedValues',t,1)},_valuesToItems:function(e){return null==e?null:e.map(function(e){return this._valueToItem(e)},this)}},r=t.IronMultiSelectableBehavior=[n.IronSelectableBehavior,o]},function(e,t,a){'use strict';function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(o,r){try{var s=t[o](r),d=s.value}catch(e){return void a(e)}return s.done?void e(d):Promise.resolve(d).then(function(e){n('next',e)},function(e){n('throw',e)})}return n('next')})}}var r=a(208),s=n(r),d=a(5),l=a(209),u=n(l);const c=[{id:'64757b5b-cd6f-4019-b4f2-2fbbe90c1234',title:'Cash'},{id:'bfc57043-bc0c-451e-b6a4-5f735401714d',title:'Card'},{id:'d14cb9cf-733a-40f2-9467-c9733573bc1e',title:'Credit card'},{id:'901f8455-6ee1-43cc-97f7-081228f94630',title:'Bank account'}],p=[{id:'a101eac2-34a8-4810-9bcb-939bde397afd',title:'Purchase',type:0},{id:'e7bf6562-99d3-4dce-85e0-3b3bc482e6a7',title:'Salary',type:1},{id:'9254e8b2-2962-4504-99df-9b30e12ee1bf',title:'Taxes',type:0},{id:'eed64a3b-7b93-4faa-acd8-19bce7fe41c9',title:'Subscription fee',type:0},{id:'d8cdfd8d-5f0d-4bed-b3b7-8667b4851a37',title:'Entertainment',type:0},{id:'a669037b-ec7f-49f0-a7d0-73fff4c859af',title:'Catering',type:0}],_=[{id:'f45dfe28-0a47-4b6b-8a91-9616011d458c',walletId:'64757b5b-cd6f-4019-b4f2-2fbbe90c1234',categoryId:'a101eac2-34a8-4810-9bcb-939bde397afd',amount:2671,date:Date.now()-6566400000,note:'Note 1'},{id:'32d0791b-99e8-4a49-be56-a65b84a7ae1e',walletId:'d14cb9cf-733a-40f2-9467-c9733573bc1e',categoryId:'d8cdfd8d-5f0d-4bed-b3b7-8667b4851a37',amount:3250,date:Date.now()-11577600000,note:'Note 2'},{id:'1eb51152-2c0d-4d1f-8c49-2344429b001a',walletId:'d14cb9cf-733a-40f2-9467-c9733573bc1e',categoryId:'a669037b-ec7f-49f0-a7d0-73fff4c859af',amount:7300,date:Date.now()-1036800000,note:'Note 3'},{id:'ae06924f-770d-4e8c-9598-53fdace6aa9a',walletId:'901f8455-6ee1-43cc-97f7-081228f94630',categoryId:'e7bf6562-99d3-4dce-85e0-3b3bc482e6a7',amount:54500,date:Date.now()-172800000,note:'Note 4'},{id:'49659ac4-3f0d-43b5-b409-24f22c6ecfb3',walletId:'d14cb9cf-733a-40f2-9467-c9733573bc1e',categoryId:'d8cdfd8d-5f0d-4bed-b3b7-8667b4851a37',amount:1245,date:Date.now()-172800000,note:'Note 5'},{id:'eee7b9d9-4c15-4084-819b-cf797583cfef',walletId:'64757b5b-cd6f-4019-b4f2-2fbbe90c1234',categoryId:'a669037b-ec7f-49f0-a7d0-73fff4c859af',amount:23545,date:Date.now()-172800000,note:'Note 6'}];class m extends d.Element{static get is(){return'app-store'}static get properties(){return{database:{Type:Object},wallets:{Type:Array,value:c,readOnly:!0,notify:!0},walletId:String,wallet:{type:Object,computed:'_computeWallet(walletId)',notify:!0},categories:{Type:Array,value:p,readOnly:!0,notify:!0},categoryId:String,category:{type:Object,computed:'_computeCategory(categoryId)',notify:!0},transactions:{Type:Array,value:_,readOnly:!0,notify:!0},transactionId:String,transaction:{type:Object,computed:'_computeTransaction(transactionId)',notify:!0}}}constructor(){super()}connectedCallback(){super.connectedCallback()}initIndexedDB(){var e=this;return o(function*(){const{name:t,version:a,stores:n}=u.default;let r;e.database=s.default.open(t,a,function(e){n.map(function(t){const{name:a,options:n}=t;e.createObjectStore(a,n)})}),r=yield e.database,n.map((()=>{var t=o(function*(t){const{name:a}=t;e[a]=yield r.transaction(a).objectStore(a).getAll()});return function(){return t.apply(this,arguments)}})())})()}_computeWallet(e){return this.wallets.find((t)=>t.id===e)}_computeCategory(e){return this.categories.find((t)=>t.id===e)}_computeTransaction(e){return this.transactions.find((t)=>t.id===e)}}customElements.define(m.is,m)},function(e){'use strict';(function(){function t(e){return Array.prototype.slice.call(e)}function a(e){return new Promise(function(t,a){e.onsuccess=function(){t(e.result)},e.onerror=function(){a(e.error)}})}function n(e,t,n){var o=new Promise(function(o,s){r=e[t].apply(e,n),a(r).then(o,s)}),r;return o.request=r,o}function o(e,t,a){var o=n(e,t,a);return o.then(function(e){return e?new c(e,o.request):void 0})}function r(e,t,a){a.forEach(function(a){Object.defineProperty(e.prototype,a,{get:function(){return this[t][a]},set:function(e){this[t][a]=e}})})}function s(e,t,a,o){o.forEach(function(o){o in a.prototype&&(e.prototype[o]=function(){return n(this[t],o,arguments)})})}function d(e,t,a,n){n.forEach(function(n){n in a.prototype&&(e.prototype[n]=function(){return this[t][n].apply(this[t],arguments)})})}function l(e,t,a,n){n.forEach(function(n){n in a.prototype&&(e.prototype[n]=function(){return o(this[t],n,arguments)})})}function u(e){this._index=e}function c(e,t){this._cursor=e,this._request=t}function p(e){this._store=e}function _(e){this._tx=e,this.complete=new Promise(function(t,a){e.oncomplete=function(){t()},e.onerror=function(){a(e.error)},e.onabort=function(){a(e.error)}})}function m(e,t,a){this._db=e,this.oldVersion=t,this.transaction=new _(a)}function y(e){this._db=e}r(u,'_index',['name','keyPath','multiEntry','unique']),s(u,'_index',IDBIndex,['get','getKey','getAll','getAllKeys','count']),l(u,'_index',IDBIndex,['openCursor','openKeyCursor']),r(c,'_cursor',['direction','key','primaryKey','value']),s(c,'_cursor',IDBCursor,['update','delete']),['advance','continue','continuePrimaryKey'].forEach(function(e){e in IDBCursor.prototype&&(c.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then(function(){return t._cursor[e].apply(t._cursor,n),a(t._request).then(function(e){return e?new c(e,t._request):void 0})})})}),p.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},p.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},r(p,'_store',['name','keyPath','indexNames','autoIncrement']),s(p,'_store',IDBObjectStore,['put','add','delete','clear','get','getAll','getKey','getAllKeys','count']),l(p,'_store',IDBObjectStore,['openCursor','openKeyCursor']),d(p,'_store',IDBObjectStore,['deleteIndex']),_.prototype.objectStore=function(){return new p(this._tx.objectStore.apply(this._tx,arguments))},r(_,'_tx',['objectStoreNames','mode']),d(_,'_tx',IDBTransaction,['abort']),m.prototype.createObjectStore=function(){return new p(this._db.createObjectStore.apply(this._db,arguments))},r(m,'_db',['name','version','objectStoreNames']),d(m,'_db',IDBDatabase,['deleteObjectStore','close']),y.prototype.transaction=function(){return new _(this._db.transaction.apply(this._db,arguments))},r(y,'_db',['name','version','objectStoreNames']),d(y,'_db',IDBDatabase,['close']),['openCursor','openKeyCursor'].forEach(function(e){[p,u].forEach(function(a){a.prototype[e.replace('open','iterate')]=function(){var a=t(arguments),n=a[a.length-1],o=this._store||this._index,r=o[e].apply(o,a.slice(0,-1));r.onsuccess=function(){n(r.result)}}})}),[u,p].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var a=this,n=[];return new Promise(function(o){a.iterateCursor(e,function(e){return e?(n.push(e.value),void 0!==t&&n.length==t?void o(n):void e.continue()):void o(n)})})})});var h={open:function(e,t,a){var o=n(indexedDB,'open',[e,t]),r=o.request;return r.onupgradeneeded=function(e){a&&a(new m(r.result,e.oldVersion,r.transaction))},o.then(function(e){return new y(e)})},delete:function(e){return n(indexedDB,'deleteDatabase',[e])}};e.exports=h,e.exports.default=e.exports})()},function(e){e.exports={name:'WalletDB',version:1,stores:[{name:'wallets',options:{keyPath:'id'}},{name:'categories',options:{keyPath:'id'}},{name:'transactions',options:{keyPath:'id'}}]}},function(e,t,a){'use strict';var n=a(5);a(18),a(19),a(20),a(34),a(21);class o extends n.Element{static get is(){return'page-transaction'}static get template(){return`
            <style>
                app-header {
                    color: var(--dark-theme-text-color);
                    background-color: var(--primary-color);
                }

                :host-context(app-drawer-layout:not([narrow])) [hidden-on-wide] {
                    display: none;
                }
            </style>

            <app-route
                route="{{route}}"
                pattern="/:id"
                data="{{routeData}}"></app-route>

            <app-header-layout>
                <app-header slot="header" fixed shadow>
                    <app-toolbar>
                        <paper-icon-button icon="menu" hidden-on-wide></paper-icon-button>
                        <div main-title>Transaction</div>
                    </app-toolbar>
                </app-header>

                <div style="padding: 16px;">
                    <p>Transaction id: <b>[[transaction.id]]</b></p>
                    <p>Transaction wallet id: <b>[[transaction.walletId]]</b></p>
                    <p>Transaction category id: <b>[[transaction.categoryId]]</b></p>
                </div>
            </app-header-layout>
        `}static get properties(){return{route:Object,routeData:Object,transactionId:{type:Boolean,computed:'_return(routeData.id)',notify:!0},transaction:{Type:Object,notify:!0}}}constructor(){super()}_return(e){return e}}customElements.define(o.is,o)},function(e,t,a){'use strict';var n=Math.max;Object.defineProperty(t,'__esModule',{value:!0}),t.AppScrollEffectsBehavior=void 0,a(1);var o=a(212),r=a(213);t.AppScrollEffectsBehavior=[o.IronScrollTargetBehavior,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:['_effectsChanged(effects, effectsConfig, isAttached)'],_updateScrollState:function(){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return n(0,this._scrollTop)},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var a=r._scrollEffects[e];if(!a)throw new ReferenceError(this._getUndefinedMsg(e));var n=this._boundEffect(a,t||{});return n.setUp(),n},_effectsChanged:function(e,t,a){this._tearDownEffects();e&&a&&(e.split(' ').forEach(function(e){var a;''!==e&&((a=r._scrollEffects[e])?this._effects.push(this._boundEffect(a,t[e])):console.warn(this._getUndefinedMsg(e)))},this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var a=parseFloat(t.startsAt||0),o=parseFloat(t.endsAt||1),r=function(){},s=0===a&&1===o?e.run:function(t,r){e.run.call(this,n(0,(t-a)/(o-a)),r)};return{setUp:e.setUp?e.setUp.bind(this,t):r,run:e.run?s.bind(this):r,tearDown:e.tearDown?e.tearDown.bind(this):r}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach(function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)},this))},_tearDownEffects:function(){this._effects&&this._effects.forEach(function(e){e.tearDown()}),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach(function(a){a(e,t)})},_scrollHandler:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),0<this.threshold&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn('_getDOMRef','`'+e+'` is undefined')},_getUndefinedMsg:function(e){return'Scroll effect `'+e+'` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/'+e+'.html ?'}}]},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.IronScrollTargetBehavior=void 0,a(1);var n=a(4);t.IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:['_scrollTargetChanged(scrollTarget, isAttached)'],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),!!t)if('document'===e)this.scrollTarget=this._doc;else if('string'==typeof e){var a=this.domHost;this.scrollTarget=a&&a.$?a.$[e]:(0,n.dom)(this.ownerDocument).querySelector('#'+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){this.scrollTarget===this._doc?window.scrollTo(e,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var a=t===this._doc?window:t;e?!this._boundScrollHandler&&(this._boundScrollHandler=this._scrollHandler.bind(this),a.addEventListener('scroll',this._boundScrollHandler)):this._boundScrollHandler&&(a.removeEventListener('scroll',this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.scroll=t.queryAllRoot=t.registerEffect=t.scrollTimingFunction=t._scrollEffects=void 0,a(1);const n=t._scrollEffects={},o=t.scrollTimingFunction=function(e,t,a,n){return e/=n,-a*e*(e-2)+t},r=t.registerEffect=function(e,t){if(null!=n[e])throw new Error('effect `'+e+'` is already registered.');n[e]=t},s=t.queryAllRoot=function(e,t){for(var a=[t],n=[];0<a.length;){var o=a.shift();for(n.push.apply(n,o.querySelectorAll(e)),i=0;o.children[i];i++)o.children[i].shadowRoot&&a.push(o.children[i].shadowRoot)}return n},d=t.scroll=function(e){e=e||{};var t=document.documentElement,a=e.target||t,n='scrollBehavior'in a.style&&a.scroll,r=e.top||0,d=e.left||0,l=a===t?window.scrollTo:function(e,t){a.scrollLeft=e,a.scrollTop=t};if('smooth'===e.behavior){if(n)a.scroll(e);else{var u=o,c=Date.now(),p=a===t?window.pageYOffset:a.scrollTop,_=a===t?window.pageXOffset:a.scrollLeft,m=300,y=function e(){var t=Date.now(),a=t-c;a<m?(l(u(a,_,d-_,m),u(a,p,r-p,m)),requestAnimationFrame(e)):l(d,r)}.bind(this);y()}}else if('silent'===e.behavior){var h=s('app-header',document.body);h.forEach(function(e){e.setAttribute('silent-scroll','')}),window.cancelAnimationFrame(Polymer.AppLayout._scrollTimer),Polymer.AppLayout._scrollTimer=window.requestAnimationFrame(function(){h.forEach(function(e){e.removeAttribute('silent-scroll')}),Polymer.AppLayout._scrollTimer=null}),l(d,r)}else l(d,r)}},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.PaperInkyFocusBehavior=t.PaperInkyFocusBehaviorImpl=void 0,a(1);var n=a(38),o=a(215),r=a(40);const s=t.PaperInkyFocusBehaviorImpl={observers:['_focusedChanged(receivedFocusFromKeyboard)'],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=o.PaperRippleBehavior._createRipple();return e.id='ink',e.setAttribute('center',''),e.classList.add('circle'),e}},d=t.PaperInkyFocusBehavior=[n.IronButtonState,r.IronControlState,o.PaperRippleBehavior,s]},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0}),t.PaperRippleBehavior=void 0,a(1),a(216);var n=a(38),o=a(4);t.PaperRippleBehavior={properties:{noink:{type:Boolean,observer:'_noinkChanged'},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){n.IronButtonStateImpl._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&(0,o.dom)(t).appendChild(this._ripple),e){var a=(0,o.dom)(this._rippleContainer||this),n=(0,o.dom)(e).rootTarget;a.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){return document.createElement('paper-ripple')},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}},function(e,t,a){'use strict';function n(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=d(this.width,this.height)}function o(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement('div'),this.waveContainer=document.createElement('div'),this.wave.style.backgroundColor=this.color,this.wave.classList.add('wave'),this.waveContainer.classList.add('wave-container'),(0,u.dom)(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}var r=Math.sqrt,s=Math.min,d=Math.max;a(1);var l=a(39),u=a(4),c=a(3),p={distance:function(e,t,a,n){var o=e-a,s=t-n;return r(o*o+s*s)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};n.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var a=p.distance(e,t,0,0),n=p.distance(e,t,this.width,0),o=p.distance(e,t,0,this.height),r=p.distance(e,t,this.width,this.height);return d(a,n,o,r)}},o.MAX_RADIUS=300,o.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=p.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?p.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,a=1.1*s(r(e+t),o.MAX_RADIUS)+5,n=1.1-0.2*(a/o.MAX_RADIUS),d=this.mouseInteractionSeconds/n,l=a*(1-Math.pow(80,-d));return Math.abs(l)},get opacity(){return this.mouseUpStart?d(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=0.3*this.mouseUpElapsedSeconds,t=this.opacity;return d(0,s(e,t))},get isOpacityFullyDecayed(){return 0.01>this.opacity&&this.radius>=s(this.maxRadius,o.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=s(this.maxRadius,o.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return s(1,2*(this.radius/this.containerMetrics.size)/1.4142135623730951)},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new n(this.element)},draw:function(){var e,t,a;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,a=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform='translate('+t+'px, '+a+'px)',this.waveContainer.style.transform='translate3d('+t+'px, '+a+'px, 0)',this.wave.style.webkitTransform='scale('+e+','+e+')',this.wave.style.transform='scale3d('+e+','+e+',1)'},downAction:function(e){var t=this.containerMetrics.width/2,a=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=p.now(),this.center?(this.xStart=t,this.yStart=a,this.slideDistance=p.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=a,this.slideDistance=p.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+'px',this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+'px',this.waveContainer.style.width=this.containerMetrics.size+'px',this.waveContainer.style.height=this.containerMetrics.size+'px'},upAction:function(){this.isMouseDown&&(this.mouseUpStart=p.now())},remove:function(){(0,u.dom)(this.waveContainer.parentNode).removeChild(this.waveContainer)}},(0,c.Polymer)({_template:`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:'paper-ripple',behaviors:[l.IronA11yKeysBehavior],properties:{initialOpacity:{type:Number,value:0.25},opacityDecayVelocity:{type:Number,value:0.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:'_holdDownChanged'},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":'_onEnterKeydown',"space:keydown":'_onSpaceKeydown',"space:keyup":'_onSpaceKeyup'},attached:function(){this.keyEventTarget=11==this.parentNode.nodeType?(0,u.dom)(this).getOwnerRoot().host:this.parentNode;var e=this.keyEventTarget;this.listen(e,'up','uiUpAction'),this.listen(e,'down','uiDownAction')},detached:function(){this.unlisten(this.keyEventTarget,'up','uiUpAction'),this.unlisten(this.keyEventTarget,'down','uiDownAction'),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){if(!(this.holdDown&&0<this.ripples.length)){var t=this.addRipple();t.downAction(e),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire('transitionend')},addRipple:function(){var e=new o(this);return(0,u.dom)(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);0>t||(this.ripples.splice(t,1),e.remove(),!this.ripples.length&&this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)t=this.ripples[e],t.draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0===t||(e?this.downAction():this.upAction())}})},function(e,t,a){'use strict';var n=a(5);a(18),a(19),a(20),a(21),a(218);class o extends n.Element{static get is(){return'page-transactions'}static get template(){return`
            <style>
                app-header {
                    color: var(--dark-theme-text-color);
                    background-color: var(--primary-color);
                }

                :host-context(app-drawer-layout:not([narrow])) [hidden-on-wide] {
                    display: none;
                }

                :host-context(app-drawer-layout:not([narrow])) transactions-list {
                    margin: 16px;
                }
            </style>

            <app-header-layout>
                <app-header slot="header" fixed shadow>
                    <app-toolbar>
                        <paper-icon-button icon="menu" hidden-on-wide></paper-icon-button>
                        <div main-title>Transactions</div>
                    </app-toolbar>
                </app-header>

                <transactions-list
                    transactions="[[transactions]]"
                    wallets="[[wallets]]"
                    categories="[[categories]]"
                    grouping></transactions-list>
            </app-header-layout>
        `}static get properties(){return{wallets:{Type:Array,notify:!0},categories:{Type:Array,notify:!0},transactions:{Type:Array,notify:!0}}}constructor(){super()}}customElements.define(o.is,o)},function(e,t,a){'use strict';var n=a(229),o=a(5);a(221),a(31),a(30),a(222);class r extends o.Element{static get is(){return'transactions-list'}static get template(){return`
            <style>
                :host {
                    display: block;
                }

                .group {
                    padding: 8px 0;
                    background-color: var(--primary-background-color);
                    box-shadow: var(--shadow-elevation-2dp_-_box-shadow)
                }

                .group + .group {
                    margin-top: 16px;
                }

                .group__title {
                    margin: 0;
                    padding: 0 16px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 48px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    color: var(--secondary-text-color);
                    cursor: pointer;
                    user-select: none;
                }

                .group hr {
                    margin: 4px 0;
                    border: none;
                    border-top: 1px solid var(--divider-color);
                }
            </style>

            <dom-if if="[[!grouping]]">
                <template>
                    <div class="group">
                        <dom-repeat items="[[transactions]]" as="transaction">
                            <template>
                                <transaction-item
                                    wallets="[[wallets]]"
                                    categories="[[categories]]"
                                    transaction="[[transaction]]"></transaction-item>
                            </template>
                        </dom-repeat>
                    </div>
                </template>
            </dom-if>

            <dom-if if="[[grouping]]">
                <template>
                    <dom-repeat items="[[groups]]" as="group">
                        <template>
                            <div class="group">
                                <div class="group__title" on-click="handleToggleGroup" group-id$="group-[[index]]">[[_groupTitle(group)]]</div>
                                <iron-collapse id="group-[[index]]" opened>
                                    <hr>
                                    <dom-repeat items="[[group]]" as="transaction">
                                        <template>
                                            <transaction-item
                                                wallets="[[wallets]]"
                                                categories="[[categories]]"
                                                transaction="[[transaction]]"></transaction-item>
                                        </template>
                                    </dom-repeat>
                                </iron-collapse>
                            </div>
                        </template>
                    </dom-repeat>
                </template>
            </dom-if>
        `}static get properties(){return{wallets:{Type:Array,notify:!0},categories:{Type:Array,notify:!0},transactions:{Type:Array,notify:!0},grouping:Boolean,groups:{Type:Array,computed:'_groups(transactions)'},groupTitle:{Type:String,computed:'_groupTitle(group)'}}}constructor(){super()}_groups(e){return e.sort((e,t)=>t.date-e.date).reduce((t,a,o)=>{const r=t[t.length-1],s=n.DateTime.fromMillis(a.date).toLocaleString(n.DateTime.DATE_FULL),d=e[o-1],l=n.DateTime.fromMillis(d?d.date:null).toLocaleString(n.DateTime.DATE_FULL);return s===l&&r?r.push(a):t.push([a]),t},[])}_groupTitle(e){const t=n.DateTime.local(),a=n.DateTime.fromMillis(e[0].date),o=t.diff(a,['years']).toObject().years,r=1>o?{month:'long',day:'numeric'}:n.DateTime.DATE_FULL;return a.toLocaleString(r)}handleToggleGroup(e){this.shadowRoot.querySelector(`#${e.currentTarget.getAttribute('group-id')}`).toggle()}}customElements.define(r.is,r)},,,function(e,t,a){'use strict';var n=a(1),o=a(33),r=a(3),s=a(4);(0,r.Polymer)({_template:`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:'iron-collapse',behaviors:[o.IronResizableBehavior],properties:{horizontal:{type:Boolean,value:!1,observer:'_horizontalChanged'},opened:{type:Boolean,value:!1,notify:!0,observer:'_openedChanged'},transitioning:{type:Boolean,notify:!0,readOnly:!0},noAnimation:{type:Boolean},_desiredSize:{type:String,value:''}},get dimension(){return this.horizontal?'width':'height'},get _dimensionMax(){return this.horizontal?'maxWidth':'maxHeight'},get _dimensionMaxCss(){return this.horizontal?'max-width':'max-height'},hostAttributes:{role:'group',"aria-hidden":'true',"aria-expanded":'false'},listeners:{transitionend:'_onTransitionEnd'},toggle:function(){this.opened=!this.opened},show:function(){this.opened=!0},hide:function(){this.opened=!1},updateSize:function(e,t){e='auto'===e?'':e;var a=t&&!this.noAnimation&&this.isAttached&&this._desiredSize!==e;if(this._desiredSize=e,this._updateTransition(!1),a){var n=this._calcSize();''===e&&(this.style[this._dimensionMax]='',e=this._calcSize()),this.style[this._dimensionMax]=n,this.scrollTop=this.scrollTop,this._updateTransition(!0),a=e!==n}this.style[this._dimensionMax]=e,a||this._transitionEnd()},enableTransition:function(e){n.Base._warn('`enableTransition()` is deprecated, use `noAnimation` instead.'),this.noAnimation=!e},_updateTransition:function(e){this.style.transitionDuration=e&&!this.noAnimation?'':'0s'},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var e='maxWidth'===this._dimensionMax?'maxHeight':'maxWidth';this.style[e]='',this.updateSize(this.opened?'auto':'0px',!1)},_openedChanged:function(){this.setAttribute('aria-expanded',this.opened),this.setAttribute('aria-hidden',!this.opened),this._setTransitioning(!0),this.toggleClass('iron-collapse-closed',!1),this.toggleClass('iron-collapse-opened',!1),this.updateSize(this.opened?'auto':'0px',!0),this.opened&&this.focus()},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass('iron-collapse-closed',!this.opened),this.toggleClass('iron-collapse-opened',this.opened),this._updateTransition(!1),this.notifyResize(),this._setTransitioning(!1)},_onTransitionEnd:function(e){(0,s.dom)(e).rootTarget===this&&this._transitionEnd()},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+'px'}})},function(e,t,a){'use strict';var n=a(5);a(16),a(36),a(172),a(31);class o extends n.Element{static get is(){return'transaction-item'}static get template(){return`
            <style>
                :host {
                    --transaction-color: var(--primary-color);
                }

                .paper-item-link {
                    color: inherit;
                    text-decoration: none;
                }

                .has-in {
                    --transaction-color: var(--paper-green-500);
                }

                .has-out {
                    --transaction-color: var(--paper-red-500);
                }

                .icon {
                    position: relative;
                    display: inline-flex;
                    width: 40px;
                    height: 40px;
                    align-items: center;
                    justify-content: center;
                    color: var(--dark-theme-text-color);
                    background: var(--primary-color);
                    border-radius: 50%;
                }

                .sub-icon {
                    position: absolute;
                    bottom: -2px;
                    right: -2px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--dark-theme-text-color);
                    background-color: var(--transaction-color);
                    border: 2px solid var(--dark-theme-text-color);
                    border-radius: 50%;
                    --iron-icon-width: 16px;
                    --iron-icon-height: 16px;
                }

                .has-out .sub-icon iron-icon {
                    transform: rotate(180deg);
                }

                .heading {
                    display: flex;
                }

                .category,
                .amount {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }

                .category {
                    flex: 1 1 auto;
                }

                .amount {
                    flex: 0 0 auto;
                    padding-left: 16px;
                    text-align: right;
                    color: var(--transaction-color);
                }
            </style>

            <a class="paper-item-link" href="#/transaction/{{transaction.id}}" tabindex="-1">
                <paper-icon-item class$="[[transactionTypeClassName]]" role="listitem">
                    <div class="icon" slot="item-icon">
                        <iron-icon icon="attach-money"></iron-icon>
                        <div class="sub-icon">                        
                            <iron-icon icon="arrow-forward"></iron-icon>
                        </div>
                    </div>
                    <paper-item-body two-line>
                        <div class="heading">
                            <span class="category">[[category.title]]</span>
                            <span class="amount">[[amount]]</span>
                        </div>
                        <div secondary>[[transaction.note]]</div>
                    </paper-item-body>
                </paper-icon-item>
            </a>
        `}static get properties(){return{wallets:{Type:Array,notify:!0},categories:{Type:Array,notify:!0},transaction:{Type:Object,notify:!0},category:{Type:Object,computed:'_category(transaction, categories)'},transactionTypeClassName:{Type:String,computed:'_transactionTypeClassName(transaction)'},amount:{Type:String,computed:'_amount(transaction)'}}}constructor(){super(),this.attachShadow({mode:'open',delegatesFocus:!0})}_category(e,t){const{categoryId:a}=e;return t.find((e)=>e.id===a)||{}}_transactionTypeClassName(){return 0===this.category.type?'has-out':'has-in'}_amount(e){let{amount:t}=e;return 0===this.category.type&&(t*=-1),`${t}`.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 ')}}customElements.define(o.is,o)},function(e,t,a){'use strict';var n=a(5);a(18),a(19),a(20),a(34),a(21);class o extends n.Element{static get is(){return'page-wallet'}static get template(){return`
            <style>
                app-header {
                    color: var(--dark-theme-text-color);
                    background-color: var(--primary-color);
                }

                :host-context(app-drawer-layout:not([narrow])) [hidden-on-wide] {
                    display: none;
                }
            </style>

            <app-route
                route="{{route}}"
                pattern="/:id"
                data="{{routeData}}"></app-route>

            <app-header-layout>
                <app-header slot="header" fixed shadow>
                    <app-toolbar>
                        <paper-icon-button icon="menu" hidden-on-wide></paper-icon-button>
                        <div main-title>Wallet</div>
                    </app-toolbar>
                </app-header>

                <div style="padding: 16px;">
                    <p>Wallet title: <b>[[wallet.title]]</b></p>
                    <p>Wallet id: <b>[[wallet.id]]</b></p>
                </div>
            </app-header-layout>
        `}static get properties(){return{route:Object,routeData:Object,walletId:{type:Boolean,computed:'_return(routeData.id)',notify:!0},wallet:{Type:Object,notify:!0}}}constructor(){super()}_return(e){return e}}customElements.define(o.is,o)},function(e,t,a){'use strict';var n=a(5);a(18),a(19),a(20),a(21),a(225);class o extends n.Element{static get is(){return'page-wallets'}static get template(){return`
            <style>
                app-header {
                    color: var(--dark-theme-text-color);
                    background-color: var(--primary-color);
                }

                :host-context(app-drawer-layout:not([narrow])) [hidden-on-wide] {
                    display: none;
                }

                :host-context(app-drawer-layout:not([narrow])) wallets-list {
                    margin: 16px;
                    box-shadow:
                        0 0 4px rgba(0, 0, 0, .14),
                        0 3px 4px rgba(0, 0, 0, .12),
                        0 1px 5px rgba(0, 0, 0, .2);
                }
            </style>

            <app-header-layout>
                <app-header slot="header" fixed shadow>
                    <app-toolbar>
                        <paper-icon-button icon="menu" hidden-on-wide></paper-icon-button>
                        <div main-title>Wallets</div>
                    </app-toolbar>
                </app-header>

                <wallets-list
                    wallets="[[wallets]]"
                    categories="[[categories]]"
                    transactions="[[transactions]]"></wallets-list>
            </app-header-layout>
        `}static get properties(){return{wallets:{Type:Array,notify:!0},categories:{Type:Array,notify:!0},transactions:{Type:Array,notify:!0}}}constructor(){super()}}customElements.define(o.is,o)},function(e,t,a){'use strict';var n=a(5);a(53),a(30),a(226);class o extends n.Element{static get is(){return'wallets-list'}static get template(){return`
            <style>
                :host {
                    display: block;
                }
            </style>

            <paper-listbox>
                <dom-repeat items="{{wallets}}" as="wallet">
                    <template>
                        <wallet-item
                            wallet="[[wallet]]"
                            categories="[[categories]]"
                            transactions="[[transactions]]"></wallet-item>
                    </template>
                </dom-repeat>
            </paper-listbox>
        `}static get properties(){return{wallets:{Type:Array,notify:!0},categories:{Type:Array,notify:!0},transactions:{Type:Array,notify:!0}}}constructor(){super()}}customElements.define(o.is,o)},function(e,t,a){'use strict';var n=a(5);a(16),a(36),a(172);class o extends n.Element{static get is(){return'wallet-item'}static get template(){return`
            <style>
                .paper-item-link {
                    color: inherit;
                    text-decoration: none;
                }

                .icon {
                    position: relative;
                    display: inline-flex;
                    width: 40px;
                    height: 40px;
                    align-items: center;
                    justify-content: center;
                    color: var(--dark-theme-text-color);
                    background: var(--primary-color);
                    border-radius: 50%;
                }
            </style>

            <a class="paper-item-link" href="#/wallet/{{wallet.id}}" tabindex="-1">
                <paper-icon-item role="listitem">
                    <div class="icon" slot="item-icon">
                        <iron-icon icon="account-balance-wallet"></iron-icon>
                    </div>
                    <paper-item-body two-line>
                        <div>[[wallet.title]]</div>
                        <div secondary>Balance: [[balance]]</div>
                    </paper-item-body>
                </paper-icon-item>
            </a>
        `}static get properties(){return{wallet:{Type:Object,notify:!0},categories:{Type:Array,notify:!0},transactions:{Type:Array,notify:!0},balance:{Type:Number,computed:'_balance(wallet, categories, transactions)',notify:!0}}}constructor(){super(),this.attachShadow({mode:'open',delegatesFocus:!0})}_balance(e,t,a){const n=a.reduce((a,n)=>{const{categoryId:o,walletId:r}=n,s=t.find((e)=>e.id===o);return e.id===r?a+(0===s.type?-1*n.amount:n.amount):a},0);return`${n}`.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 ')}}customElements.define(o.is,o)},,,function(e,t){'use strict';function a(e,t){var a=e.format(t).replace(/\u200E/g,''),n=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a),o=he(n,7),r=o[1],s=o[2],d=o[3],l=o[4],u=o[5],c=o[6];return[d,r,s,l,u,c]}function n(e,t){for(var a=e.formatToParts(t),n=[],o=0;o<a.length;o++){var r=a[o],s=r.type,d=r.value,l=Oe[s];je.isUndefined(l)||(n[l]=parseInt(d,10))}return n}function o(e){try{return new Intl.DateTimeFormat('en-US',{timeZone:e}).format(),!0}catch(t){return!1}}function r(e){var t=oe(e.fixed/60),a=de(e.fixed%60),n=0<t?'+':'-',o=n+de(t);return 0<a?o+':'+je.padStart(a,2):o}function s(e){return JSON.stringify(e,Object.keys(e).sort())}function d(e,t){var a='',n=!0,o=!1,r;try{for(var s=e[Symbol.iterator](),d,l;!(n=(d=s.next()).done);n=!0)l=d.value,a+=l.literal?l.val:t(l.val)}catch(e){o=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw r}}return a}function l(){return Fe?Fe:je.hasIntl()?(Fe=new Intl.DateTimeFormat().resolvedOptions().locale,Fe):(Fe='en-US',Fe)}function u(e,t,a){return je.hasIntl()?(e=Array.isArray(e)?e:[e],(a||t)&&(e=e.map(function(e){return e+='-u',a&&(e+='-ca-'+a),t&&(e+='-nu-'+t),e})),e):[]}function c(e){for(var t=[],a=1,n;12>=a;a++)n=Ht.utc(2016,a,1),t.push(e(n));return t}function p(e){for(var t=[],a=1,n;7>=a;a++)n=Ht.utc(2016,11,13+a),t.push(e(n));return t}function _(e,t,a,n,o){var r=e.listingMode(a);return'error'===r?null:'en'===r?n(t):o(t)}function m(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t.reduce(function(e,t){return e+t.source},'');return RegExp('^'+n+'$')}function y(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce(function(t,a){var n=he(t,3),o=n[0],r=n[1],s=n[2],d=a(e,s),l=he(d,3),u=l[0],c=l[1],p=l[2];return[Object.assign(o,u),r||c,p]},[{},null,1]).slice(0,2)}}function h(e){if(null==e)return[null,null];for(var t=arguments.length,a=Array(1<t?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var o=!0,r=!1,s;try{for(var d=a[Symbol.iterator](),l;!(o=(l=d.next()).done);o=!0){var u=l.value,c=he(u,2),p=c[0],_=c[1],y=p.exec(e);if(y)return _(y)}}catch(e){r=!0,s=e}finally{try{!o&&d.return&&d.return()}finally{if(r)throw s}}return[null,null]}function f(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e,a){var n={},o;for(o=0;o<t.length;o++)n[t[o]]=parseInt(e[a+o]);return[n,null,a+o]}}function g(e,t){var a={year:parseInt(e[t]),month:parseInt(e[t+1])||1,day:parseInt(e[t+2])||1};return[a,null,t+3]}function v(e,t){var a={hour:parseInt(e[t])||0,minute:parseInt(e[t+1])||0,second:parseInt(e[t+2])||0,millisecond:je.parseMillis(e[t+3])};return[a,null,t+4]}function b(e,t){var a=!e[t]&&!e[t+1],n=je.signedOffset(e[t+1],e[t+2]),o=a?null:Me.instance(n);return[{},o,t+3]}function T(e,t){var a=e[t]?new De(e[t]):null;return[{},a,t+1]}function S(e){var t=he(e,8),a=t[1],n=t[2],o=t[3],r=t[4],s=t[5],d=t[6],l=t[7];return{years:parseInt(a),months:parseInt(n),weeks:parseInt(l),days:parseInt(o),hours:parseInt(r),minutes:parseInt(s),seconds:parseInt(d)}}function E(e,t,a,n,o,r,s){var d={year:2===t.length?je.untruncateYear(parseInt(t)):parseInt(t),month:2===a.length?parseInt(a,10):Ne.monthsShort.indexOf(a)+1,day:parseInt(n),hour:parseInt(o),minute:parseInt(r)};return s&&(d.second=parseInt(s)),e&&(d.weekday=3<e.length?Ne.weekdaysLong.indexOf(e)+1:Ne.weekdaysShort.indexOf(e)+1),d}function k(e){var t=he(e,12),a=t[1],n=t[2],o=t[3],r=t[4],s=t[5],d=t[6],l=t[7],u=t[8],c=t[9],p=t[10],_=t[11],m=E(a,r,o,n,s,d,l),y;return y=u?dt[u]:c?0:je.signedOffset(p,_),[m,new Me(y)]}function I(e){return e.replace(/\([^)]*\)|[\n\t]/g,' ').replace(/(\s\s+)/g,' ').trim()}function C(e){var t=he(e,8),a=t[1],n=t[2],o=t[3],r=t[4],s=t[5],d=t[6],l=t[7],u=E(a,r,o,n,s,d,l);return[u,Me.utcInstance]}function P(e){var t=he(e,8),a=t[1],n=t[2],o=t[3],r=t[4],s=t[5],d=t[6],l=t[7],u=E(a,l,n,o,r,s,d);return[u,Me.utcInstance]}function w(e,t){var a=2<arguments.length&&arguments[2]!==void 0&&arguments[2],n={values:a?t.values:Object.assign(e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy};return new bt(n)}function O(e){var t=!0,a=!1,n;try{for(var o=vt[Symbol.iterator](),r,s;!(t=(r=o.next()).done);t=!0)if(s=r.value,e[s])return 0>e[s]}catch(e){a=!0,n=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw n}}return!1}function D(e,t){return!!e&&!!t&&e.isValid&&t.isValid&&e<=t}function A(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:function(e){return e};return{regex:e,deser:function(e){var a=he(e,1),n=a[0];return t(parseInt(n))}}}function M(e){return e.replace(/\./,'\\.?')}function x(e){return e.replace(/\./,'').toLowerCase()}function N(e,t){return null===e?null:{regex:RegExp(e.map(M).join('|')),deser:function(a){var n=he(a,1),o=n[0];return e.findIndex(function(e){return x(o)===x(e)})+t}}}function L(e,t){return{regex:e,deser:function(e){var t=he(e,3),a=t[1],n=t[2];return je.signedOffset(a,n)},groups:t}}function R(e){return{regex:e,deser:function(e){var t=he(e,1),a=t[0];return a}}}function F(e,a){var n=/\d/,o=/\d{2}/,r=/\d{3}/,s=/\d{4}/,d=/\d{1,2}/,l=/\d{1,3}/,u=/\d{2,4}/,c=function(e){return{regex:RegExp(e.val),deser:function(e){var t=he(e,1),a=t[0];return a},literal:!0}},t=function(p){if(e.literal)return c(p);switch(p.val){case'G':return N(a.eras('short',!1),0);case'GG':return N(a.eras('long',!1),0);case'y':return A(/\d{1,6}/);case'yy':return A(u,je.untruncateYear);case'yyyy':return A(s);case'yyyyy':return A(/\d{4,6}/);case'yyyyyy':return A(/\d{6}/);case'M':return A(d);case'MM':return A(o);case'MMM':return N(a.months('short',!1,!1),1);case'MMMM':return N(a.months('long',!1,!1),1);case'L':return A(d);case'LL':return A(o);case'LLL':return N(a.months('short',!0,!1),1);case'LLLL':return N(a.months('long',!0,!1),1);case'd':return A(d);case'dd':return A(o);case'o':return A(l);case'ooo':return A(r);case'HH':return A(o);case'H':return A(d);case'hh':return A(o);case'h':return A(d);case'mm':return A(o);case'm':return A(d);case's':return A(d);case'ss':return A(o);case'S':return A(l);case'SSS':return A(r);case'u':return R(/\d{1,9}/);case'a':return N(a.meridiems(),0);case'kkkk':return A(s);case'kk':return A(u,je.untruncateYear);case'W':return A(d);case'WW':return A(o);case'E':case'c':return A(n);case'EEE':return N(a.weekdays('short',!1,!1),1);case'EEEE':return N(a.weekdays('long',!1,!1),1);case'ccc':return N(a.weekdays('short',!0,!1),1);case'cccc':return N(a.weekdays('long',!0,!1),1);case'Z':case'ZZ':return L(/([+-]\d{1,2})(?::(\d{2}))?/,2);case'ZZZ':return L(/([+-]\d{1,2})(\d{2})?/,2);case'z':return R(/[A-Za-z_]{1,256}\/[A-Za-z_]{1,256}/);default:return c(p);}}(e)||{invalidReason:kt};return t.token=e,t}function H(e){var t=e.map(function(e){return e.regex}).reduce(function(e,t){return e+'('+t.source+')'},'');return['^'+t+'$',e]}function z(e,t,a){var n=e.match(t);if(n){var o={},r=1;for(var s in a)if(a.hasOwnProperty(s)){var d=a[s],l=d.groups?d.groups+1:1;!d.literal&&d.token&&(o[d.token.val[0]]=d.deser(n.slice(r,r+l))),r+=l}return[n,o]}return[n,{}]}function U(e){var t=function(e){return'S'===e?'millisecond':'s'===e?'second':'m'===e?'minute':'h'===e||'H'===e?'hour':'d'===e?'day':'o'===e?'ordinal':'L'===e||'M'===e?'month':'y'===e?'year':'E'===e||'c'===e?'weekday':'W'===e?'weekNumber':'k'===e?'weekYear':null},a;a=je.isUndefined(e.Z)?je.isUndefined(e.z)?null:new De(e.z):new Me(e.Z),je.isUndefined(e.h)||(12>e.h&&1===e.a?e.h+=12:12===e.h&&0===e.a&&(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),je.isUndefined(e.u)||(e.S=je.parseMillis(e.u));var n=Object.keys(e).reduce(function(a,n){var o=t(n);return o&&(a[o]=e[n]),a},{});return[n,a]}function V(e,t,a){var n=new Date(Date.UTC(e,t-1,a)).getUTCDay();return 0===n?7:n}function B(e){var t=(e+ie(e/4)-ie(e/100)+ie(e/400))%7,a=e-1,n=(a+ie(a/4)-ie(a/100)+ie(a/400))%7;return 4==t||3==n?53:52}function q(e,t,a){return a+(je.isLeapYear(e)?Pt:Ct)[t-1]}function K(e,t){var a=je.isLeapYear(e)?Pt:Ct,n=a.findIndex(function(e){return e<t}),o=t-a[n];return{month:n+1,day:o}}function W(e){return null===e.weekData&&(e.weekData=wt.gregorianToWeek(e.c)),e.weekData}function Y(e,t){var a={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalidReason:e.invalidReason};return new Ht(Object.assign({},a,t,{old:a}))}function G(e,t,a){var n=e-1e3*(60*t),o=a.offset(n);if(t===o)return[n,t];n-=1e3*(60*(o-t));var r=a.offset(n);return o===r?[n,o]:[e-1e3*(60*se(o,r)),Math.max(o,r)]}function j(e,t){e+=1e3*(60*t);var a=new Date(e);return{year:a.getUTCFullYear(),month:a.getUTCMonth()+1,day:a.getUTCDate(),hour:a.getUTCHours(),minute:a.getUTCMinutes(),second:a.getUTCSeconds(),millisecond:a.getUTCMilliseconds()}}function Z(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return 100>e.year&&0<=e.year&&(t=new Date(t),t.setUTCFullYear(e.year)),+t}function X(e,t,a){return G(Z(e),t,a)}function $(e,t){var a=e.o,n=Object.assign({},e.c,{year:e.c.year+t.years,month:e.c.month+t.months,day:e.c.day+t.days+7*t.weeks}),r=bt.fromObject({hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as('milliseconds'),s=Z(n),d=G(s,a,e.zone),l=he(d,2),u=l[0],c=l[1];return 0!==r&&(u+=r,c=e.zone.offset(u)),{ts:u,o:c}}function J(e,t,a){var n=a.setZone,o=a.zone;if(e&&0!==Object.keys(e).length){var r=Ht.fromObject(Object.assign(e,a,{zone:t||o}));return n?r:r.setZone(o)}return Ht.invalid(At)}function Q(e,t){return e.isValid?Re.create(Ue.create('en-US')).formatDateTimeFromString(e,t):null}function ee(e,t){var a=t.suppressSeconds,n=t.suppressMilliseconds,o=t.includeOffset,r=void 0===o||o,s=t.includeZone,d=void 0!==s&&s,l=t.spaceZone,u='HH:mm';return void 0!==a&&a&&0===e.second&&0===e.millisecond||(u+=':ss',(!(void 0!==n&&n)||0!==e.millisecond)&&(u+='.SSS')),(d||r)&&void 0!==l&&l&&(u+=' '),d?u+='z':r&&(u+='ZZ'),Q(e,u)}function te(e){var t=1<arguments.length&&arguments[1]!==void 0&&arguments[1],a={year:'year',years:'year',month:'month',months:'month',day:'day',days:'day',hour:'hour',hours:'hour',minute:'minute',minutes:'minute',second:'second',seconds:'second',millisecond:'millisecond',milliseconds:'millisecond',weekday:'weekday',weekdays:'weekday',weeknumber:'weekNumber',weeksnumber:'weekNumber',weeknumbers:'weekNumber',weekyear:'weekYear',weekyears:'weekYear',ordinal:'ordinal'}[e?e.toLowerCase():e];if(!t&&!a)throw new Ee(e);return a}function ae(e,t){var a=!0,n=!1,r;try{for(var s=Lt[Symbol.iterator](),d,l;!(a=(d=s.next()).done);a=!0)l=d.value,je.isUndefined(e[l])&&(e[l]=Mt[l])}catch(e){n=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}var u=wt.hasInvalidGregorianData(e)||wt.hasInvalidTimeData(e);if(u)return Ht.invalid(u);var c=Ge.now(),p=t.offset(c),_=X(e,p,t),m=he(_,2),y=m[0],h=m[1];return new Ht({ts:y,zone:t,o:h})}var ne=Number.isNaN,oe=Math.trunc,re=Math.round,ie=Math.floor,se=Math.min,de=Math.abs;Object.defineProperty(t,'__esModule',{value:!0});var le='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&'function'==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?'symbol':typeof e},ue=function(){function e(e){this.value=e}function t(t){function a(o,r){try{var s=t[o](r),d=s.value;d instanceof e?Promise.resolve(d.value).then(function(e){a('next',e)},function(e){a('throw',e)}):n(s.done?'return':'normal',s.value)}catch(e){n('throw',e)}}function n(e,t){'return'===e?o.resolve({value:t,done:!0}):'throw'===e?o.reject(t):o.resolve({value:t,done:!1});o=o.next,o?a(o.key,o.arg):r=null}var o,r;this._invoke=function(e,t){return new Promise(function(n,s){var d={key:e,arg:t,resolve:n,reject:s,next:null};r?r=r.next=d:(o=r=d,a(e,t))})},'function'!=typeof t.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke('next',e)},t.prototype.throw=function(e){return this._invoke('throw',e)},t.prototype.return=function(e){return this._invoke('return',e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),ce=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var a=0,n;a<t.length;a++)n=t[a],n.enumerable=n.enumerable||!1,n.configurable=!0,'value'in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_e=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},me=function(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},ye=function(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e},he=function(){function e(e,t){var a=[],n=!0,o=!1,r;try{for(var s=e[Symbol.iterator](),d;!(n=(d=s.next()).done)&&(a.push(d.value),!(t&&a.length===t));n=!0);}catch(e){o=!0,r=e}finally{try{!n&&s['return']&&s['return']()}finally{if(o)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),fe=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)},ge=function(e){function t(){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return me(t,e),t}(Error),ve=function(e){function t(e){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,'Invalid DateTime: '+e))}return me(t,e),t}(ge),be=function(e){function t(e){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,'Invalid Interval: '+e))}return me(t,e),t}(ge),Te=function(e){function t(e){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,'Invalid Duration: '+e))}return me(t,e),t}(ge),Se=function(e){function t(){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return me(t,e),t}(ge),Ee=function(e){function t(e){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,'Invalid unit '+e))}return me(t,e),t}(ge),ke=function(e){function t(){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return me(t,e),t}(ge),Ie=function(e){function t(){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,'Zone is an abstract class'))}return me(t,e),t}(ge),Ce=function(){function e(){ce(this,e)}return pe(e,[{key:'offset',value:function(){throw new Ie}},{key:'equals',value:function(){throw new Ie}},{key:'type',get:function(){throw new Ie}},{key:'name',get:function(){throw new Ie}},{key:'universal',get:function(){throw new Ie}},{key:'isValid',get:function(){throw new Ie}}],[{key:'offsetName',value:function(){throw new Ie}}]),e}(),Pe=null,we=function(e){function t(){return ce(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return me(t,e),pe(t,[{key:'offsetName',value:function(e,t){var a=t.format,n=t.locale;return je.parseZoneInfo(e,a,n)}},{key:'offset',value:function(e){return-new Date(e).getTimezoneOffset()}},{key:'equals',value:function(e){return'local'===e.type}},{key:'type',get:function(){return'local'}},{key:'name',get:function(){return je.hasIntl()?new Intl.DateTimeFormat().resolvedOptions().timeZone:'local'}},{key:'universal',get:function(){return!1}},{key:'isValid',get:function(){return!0}}],[{key:'instance',get:function(){return null==Pe&&(Pe=new t),Pe}}]),t}(Ce),Oe={year:0,month:1,day:2,hour:3,minute:4,second:5},De=function(e){function t(e){ce(this,t);var a=ye(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.zoneName=e,a.valid=o(e),a}return me(t,e),pe(t,null,[{key:'isValidSpecier',value:function(e){return e&&e.match(/[a-z_]{1,256}\/[a-z_]{1,256}/i)}}]),pe(t,[{key:'offsetName',value:function(e,t){var a=t.format,n=t.locale;return je.parseZoneInfo(e,a,n,this.zoneName)}},{key:'offset',value:function(e){var t=new Date(e),o=new Intl.DateTimeFormat('en-US',{hour12:!1,timeZone:this.zoneName,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}),r=o.formatToParts?n(o,t):a(o,t),s=he(r,6),d=s[0],l=s[1],u=s[2],c=s[3],p=s[4],_=s[5],m=Date.UTC(d,l-1,u,c,p,_),y=t.valueOf();return y-=y%1e3,(m-y)/60000}},{key:'equals',value:function(e){return'iana'===e.type&&e.zoneName===this.zoneName}},{key:'type',get:function(){return'iana'}},{key:'name',get:function(){return this.zoneName}},{key:'universal',get:function(){return!1}},{key:'isValid',get:function(){return this.valid}}]),t}(Ce),Ae=null,Me=function(e){function t(e){ce(this,t);var a=ye(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.fixed=e,a}return me(t,e),pe(t,null,[{key:'instance',value:function(e){return 0===e?t.utcInstance:new t(e)}},{key:'parseSpecifier',value:function(e){if(e){var a=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(a)return new t(je.signedOffset(a[1],a[2]))}return null}},{key:'utcInstance',get:function(){return null==Ae&&(Ae=new t(0)),Ae}}]),pe(t,[{key:'offsetName',value:function(){return this.name}},{key:'offset',value:function(){return this.fixed}},{key:'equals',value:function(e){return'fixed'===e.type&&e.fixed===this.fixed}},{key:'type',get:function(){return'fixed'}},{key:'name',get:function(){return 0===this.fixed?'UTC':'UTC'+r(this)}},{key:'universal',get:function(){return!0}},{key:'isValid',get:function(){return!0}}]),t}(Ce),xe=function e(){ce(this,e)};xe.DATE_SHORT={year:'numeric',month:'numeric',day:'numeric'},xe.DATE_MED={year:'numeric',month:'short',day:'numeric'},xe.DATE_FULL={year:'numeric',month:'long',day:'numeric'},xe.DATE_HUGE={year:'numeric',month:'long',day:'numeric',weekday:'long'},xe.TIME_SIMPLE={hour:'numeric',minute:'2-digit'},xe.TIME_WITH_SECONDS={hour:'numeric',minute:'2-digit',second:'2-digit'},xe.TIME_WITH_SHORT_OFFSET={hour:'numeric',minute:'2-digit',second:'2-digit',timeZoneName:'short'},xe.TIME_WITH_LONG_OFFSET={hour:'numeric',minute:'2-digit',second:'2-digit',timeZoneName:'long'},xe.TIME_24_SIMPLE={hour:'numeric',minute:'2-digit',hour12:!1},xe.TIME_24_WITH_SECONDS={hour:'numeric',minute:'2-digit',second:'2-digit',hour12:!1},xe.TIME_24_WITH_SHORT_OFFSET={hour:'numeric',minute:'2-digit',second:'2-digit',hour12:!1,timeZoneName:'short'},xe.TIME_24_WITH_LONG_OFFSET={hour:'numeric',minute:'2-digit',second:'2-digit',hour12:!1,timeZoneName:'long'},xe.DATETIME_SHORT={year:'numeric',month:'numeric',day:'numeric',hour:'numeric',minute:'2-digit'},xe.DATETIME_SHORT_WITH_SECONDS={year:'numeric',month:'numeric',day:'numeric',hour:'numeric',minute:'2-digit',second:'2-digit'},xe.DATETIME_MED={year:'numeric',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'},xe.DATETIME_MED_WITH_SECONDS={year:'numeric',month:'short',day:'numeric',hour:'numeric',minute:'2-digit',second:'2-digit'},xe.DATETIME_FULL={year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'2-digit',timeZoneName:'short'},xe.DATETIME_FULL_WITH_SECONDS={year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'2-digit',second:'2-digit',timeZoneName:'short'},xe.DATETIME_HUGE={year:'numeric',month:'long',day:'numeric',weekday:'long',hour:'numeric',minute:'2-digit',timeZoneName:'long'},xe.DATETIME_HUGE_WITH_SECONDS={year:'numeric',month:'long',day:'numeric',weekday:'long',hour:'numeric',minute:'2-digit',second:'2-digit',timeZoneName:'long'};var Ne=function(){function e(){ce(this,e)}return pe(e,null,[{key:'months',value:function(t){return'narrow'===t?e.monthsNarrow:'short'===t?e.monthsShort:'long'===t?e.monthsLong:'numeric'===t?['1','2','3','4','5','6','7','8','9','10','11','12']:'2-digit'===t?['01','02','03','04','05','06','07','08','09','10','11','12']:null}},{key:'weekdays',value:function(t){return'narrow'===t?e.weekdaysNarrow:'short'===t?e.weekdaysShort:'long'===t?e.weekdaysLong:'numeric'===t?['1','2','3','4','5','6','7']:null}},{key:'eras',value:function(t){return'narrow'===t?e.erasNarrow:'short'===t?e.erasShort:'long'===t?e.erasLong:null}},{key:'meridiemForDateTime',value:function(t){return e.meridiems[12>t.hour?0:1]}},{key:'weekdayForDateTime',value:function(t,a){return e.weekdays(a)[t.weekday-1]}},{key:'monthForDateTime',value:function(t,a){return e.months(a)[t.month-1]}},{key:'eraForDateTime',value:function(t,a){return e.eras(a)[0>t.year?0:1]}},{key:'formatString',value:function(e){var t=je.pick(e,['weekday','era','year','month','day','hour','minute','second','timeZoneName','hour12']),a=s(t),n='EEEE, LLLL d, yyyy, h:mm a';return a===s(xe.DATE_SHORT)?'M/d/yyyy':a===s(xe.DATE_MED)?'LLL d, yyyy':a===s(xe.DATE_FULL)?'LLLL d, yyyy':a===s(xe.DATE_HUGE)?'EEEE, LLLL d, yyyy':a===s(xe.TIME_SIMPLE)?'h:mm a':a===s(xe.TIME_WITH_SECONDS)?'h:mm:ss a':a===s(xe.TIME_WITH_SHORT_OFFSET)?'h:mm a':a===s(xe.TIME_WITH_LONG_OFFSET)?'h:mm a':a===s(xe.TIME_24_SIMPLE)?'HH:mm':a===s(xe.TIME_24_WITH_SECONDS)?'HH:mm:ss':a===s(xe.TIME_24_WITH_SHORT_OFFSET)?'HH:mm':a===s(xe.TIME_24_WITH_LONG_OFFSET)?'HH:mm':a===s(xe.DATETIME_SHORT)?'M/d/yyyy, h:mm a':a===s(xe.DATETIME_MED)?'LLL d, yyyy, h:mm a':a===s(xe.DATETIME_FULL)?'LLLL d, yyyy, h:mm a':a===s(xe.DATETIME_HUGE)?n:a===s(xe.DATETIME_SHORT_WITH_SECONDS)?'M/d/yyyy, h:mm:ss a':a===s(xe.DATETIME_MED_WITH_SECONDS)?'LLL d, yyyy, h:mm:ss a':a===s(xe.DATETIME_FULL_WITH_SECONDS)?'LLLL d, yyyy, h:mm:ss a':a===s(xe.DATETIME_HUGE_WITH_SECONDS)?'EEEE, LLLL d, yyyy, h:mm:ss a':n}},{key:'monthsLong',get:function(){return['January','February','March','April','May','June','July','August','September','October','November','December']}},{key:'monthsShort',get:function(){return['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']}},{key:'monthsNarrow',get:function(){return['J','F','M','A','M','J','J','A','S','O','N','D']}},{key:'weekdaysLong',get:function(){return['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']}},{key:'weekdaysShort',get:function(){return['Mon','Tue','Wed','Thu','Fri','Sat','Sun']}},{key:'weekdaysNarrow',get:function(){return['M','T','W','T','F','S','S']}},{key:'meridiems',get:function(){return['AM','PM']}},{key:'erasLong',get:function(){return['Before Christ','Anno Domini']}},{key:'erasShort',get:function(){return['BC','AD']}},{key:'erasNarrow',get:function(){return['B','A']}}]),e}(),Le={D:xe.DATE_SHORT,DD:xe.DATE_MED,DDD:xe.DATE_FULL,DDDD:xe.DATE_HUGE,t:xe.TIME_SIMPLE,tt:xe.TIME_WITH_SECONDS,ttt:xe.TIME_WITH_SHORT_OFFSET,tttt:xe.TIME_WITH_LONG_OFFSET,T:xe.TIME_24_SIMPLE,TT:xe.TIME_24_WITH_SECONDS,TTT:xe.TIME_24_WITH_SHORT_OFFSET,TTTT:xe.TIME_24_WITH_LONG_OFFSET,f:xe.DATETIME_SHORT,ff:xe.DATETIME_MED,fff:xe.DATETIME_FULL,ffff:xe.DATETIME_HUGE,F:xe.DATETIME_SHORT_WITH_SECONDS,FF:xe.DATETIME_MED_WITH_SECONDS,FFF:xe.DATETIME_FULL_WITH_SECONDS,FFFF:xe.DATETIME_HUGE_WITH_SECONDS},Re=function(){function e(t,a){ce(this,e),this.opts=a,this.loc=t,this.systemLoc=null}return pe(e,null,[{key:'create',value:function(t){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},{round:!0},a);return new e(t,n)}},{key:'parseFormat',value:function(e){for(var t=null,a='',n=!1,o=[],r=0,s;r<e.length;r++)s=e.charAt(r),'\''===s?(0<a.length&&o.push({literal:n,val:a}),t=null,a='',n=!n):n?a+=s:s===t?a+=s:(0<a.length&&o.push({literal:!1,val:a}),a=s,t=s);return 0<a.length&&o.push({literal:n,val:a}),o}}]),pe(e,[{key:'formatWithSystemDefault',value:function(e,t){null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem());var a=this.systemLoc.dtFormatter(e,Object.assign({},this.opts,t));return a.format()}},{key:'formatDateTime',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=this.loc.dtFormatter(e,Object.assign({},this.opts,t));return a.format()}},{key:'formatDateTimeParts',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=this.loc.dtFormatter(e,Object.assign({},this.opts,t));return a.formatToParts()}},{key:'resolvedOptions',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=this.loc.dtFormatter(e,Object.assign({},this.opts,t));return a.resolvedOptions()}},{key:'num',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,a=Object.assign({},this.opts);return 0<t&&(a.padTo=t),this.loc.numberFormatter(a).format(e)}},{key:'formatDateTimeFromString',value:function(t,a){var n=this,o='en'===this.loc.listingMode(),r=function(e,a){return n.loc.extract(t,e,a)},s=function(e){if(t.isOffsetFixed&&0===t.offset&&e.allowZ)return'Z';var a=oe(t.offset/60),o=de(t.offset%60),r=0<=a?'+':'-',s=''+r+de(a);switch(e.format){case'short':return''+r+n.num(de(a),2)+':'+n.num(o,2);case'narrow':return 0<o?s+':'+o:s;case'techie':return''+r+n.num(de(a),2)+n.num(o,2);default:throw new RangeError('Value format '+e.format+' is out of range for property format');}},l=function(){return o?Ne.meridiemForDateTime(t):r({hour:'numeric',hour12:!0},'dayperiod')},u=function(e,a){return o?Ne.monthForDateTime(t,e):r(a?{month:e}:{month:e,day:'numeric'},'month')},c=function(e,a){return o?Ne.weekdayForDateTime(t,e):r(a?{weekday:e}:{weekday:e,month:'long',day:'numeric'},'weekday')},p=function(e){var a=Le[e];return a?n.formatWithSystemDefault(t,a):e},_=function(e){return o?Ne.eraForDateTime(t,e):r({era:e},'era')};return d(e.parseFormat(a),function(e){var a=n.loc.outputCalendar;return'S'===e?n.num(t.millisecond):'u'===e||'SSS'===e?n.num(t.millisecond,3):'s'===e?n.num(t.second):'ss'===e?n.num(t.second,2):'m'===e?n.num(t.minute):'mm'===e?n.num(t.minute,2):'h'===e?n.num(0==t.hour%12?12:t.hour%12):'hh'===e?n.num(0==t.hour%12?12:t.hour%12,2):'H'===e?n.num(t.hour):'HH'===e?n.num(t.hour,2):'Z'===e?s({format:'narrow',allowZ:!0}):'ZZ'===e?s({format:'short',allowZ:!0}):'ZZZ'===e?s({format:'techie',allowZ:!1}):'ZZZZ'===e?t.offsetNameShort:'ZZZZZ'===e?t.offsetNameLong:'z'===e?t.zoneName:'a'===e?l():'d'===e?a?r({day:'numeric'},'day'):n.num(t.day):'dd'===e?a?r({day:'2-digit'},'day'):n.num(t.day,2):'c'===e?n.num(t.weekday):'ccc'===e?c('short',!0):'cccc'===e?c('long',!0):'ccccc'===e?c('narrow',!0):'E'===e?n.num(t.weekday):'EEE'===e?c('short',!1):'EEEE'===e?c('long',!1):'EEEEE'===e?c('narrow',!1):'L'===e?a?r({month:'numeric',day:'numeric'},'month'):n.num(t.month):'LL'===e?a?r({month:'2-digit',day:'numeric'},'month'):n.num(t.month,2):'LLL'===e?u('short',!0):'LLLL'===e?u('long',!0):'LLLLL'===e?u('narrow',!0):'M'===e?a?r({month:'numeric'},'month'):n.num(t.month):'MM'===e?a?r({month:'2-digit'},'month'):n.num(t.month,2):'MMM'===e?u('short',!1):'MMMM'===e?u('long',!1):'MMMMM'===e?u('narrow',!1):'y'===e?a?r({year:'numeric'},'year'):n.num(t.year):'yy'===e?a?r({year:'2-digit'},'year'):n.num(t.year.toString().slice(-2),2):'yyyy'===e?a?r({year:'numeric'},'year'):n.num(t.year,4):'yyyyyy'===e?a?r({year:'numeric'},'year'):n.num(t.year,6):'G'===e?_('short'):'GG'===e?_('long'):'GGGGG'===e?_('narrow'):'kk'===e?n.num(t.weekYear.toString().slice(-2),2):'kkkk'===e?n.num(t.weekYear,4):'W'===e?n.num(t.weekNumber):'WW'===e?n.num(t.weekNumber,2):'o'===e?n.num(t.ordinal):'ooo'===e?n.num(t.ordinal,3):p(e)})}},{key:'formatDurationFromString',value:function(t,a){var n=this,o=function(e){switch(e[0]){case'S':return'millisecond';case's':return'second';case'm':return'minute';case'h':return'hour';case'd':return'day';case'M':return'month';case'y':return'year';default:return null;}},r=e.parseFormat(a),s=r.reduce(function(e,t){var a=t.literal,n=t.val;return a?e:e.concat(n)},[]),l=t.shiftTo.apply(t,fe(s.map(o).filter(function(e){return e})));return d(r,function(e){return function(t){var a=o(t);return a?n.num(e.get(a),t.length):t}}(l))}}]),e}(),Fe=null,He=function(){function e(t){ce(this,e),this.padTo=t.padTo||0,this.round=t.round||!1}return pe(e,[{key:'format',value:function(e){var t=this.round?re(e):e;return je.padStart(t.toString(),this.padTo)}}]),e}(),ze=function(){function e(t,a,n){ce(this,e),this.opts=n,this.hasIntl=je.hasIntl();var o;if(t.zone.universal?(this.dt=0===t.offset?t:Ht.fromMillis(t.ts+1e3*(60*t.offset)),o='UTC'):'local'===t.zone.type?this.dt=t:(this.dt=t,o=t.zone.name),this.hasIntl){var r=Object.assign({},this.opts);o&&(r.timeZone=o),this.dtf=new Intl.DateTimeFormat(a,r)}}return pe(e,[{key:'format',value:function(){if(this.hasIntl)return this.dtf.format(this.dt.toJSDate());var e=Ne.formatString(this.opts),t=Ue.create('en-US');return Re.create(t).formatDateTimeFromString(this.dt,e)}},{key:'formatToParts',value:function(){return this.hasIntl&&je.hasFormatToParts()?this.dtf.formatToParts(this.dt.toJSDate()):[]}},{key:'resolvedOptions',value:function(){return this.hasIntl?this.dtf.resolvedOptions():{locale:'en-US',numberingSystem:'latn',outputCalendar:'gregory'}}}]),e}(),Ue=function(){function e(t,a,n,o){ce(this,e),this.locale=t,this.numberingSystem=a,this.outputCalendar=n,this.intl=u(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o}return pe(e,null,[{key:'fromOpts',value:function(t){return e.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}},{key:'create',value:function(t,a,n){var o=3<arguments.length&&void 0!==arguments[3]&&arguments[3],r=t||Ge.defaultLocale,s=r||(o?'en-US':l()),d=a||Ge.defaultNumberingSystem,u=n||Ge.defaultOutputCalendar;return new e(s,d,u,r)}},{key:'resetCache',value:function(){Fe=null}},{key:'fromObject',value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=t.locale,n=t.numberingSystem,o=t.outputCalendar;return e.create(a,n,o)}}]),pe(e,[{key:'listingMode',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0,t=je.hasIntl(),a=t&&je.hasFormatToParts(),n='en'===this.locale||'en-us'===this.locale.toLowerCase()||t&&Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us'),o=(null===this.numberingSystem||'latn'===this.numberingSystem)&&(null===this.outputCalendar||'gregory'===this.outputCalendar);return a||n&&o||e?!a||n&&o?'en':'intl':'error'}},{key:'clone',value:function(t){return t&&0!==Object.getOwnPropertyNames(t).length?e.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1):this}},{key:'redefaultToEN',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.clone(Object.assign({},e,{defaultToEN:!0}))}},{key:'redefaultToSystem',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.clone(Object.assign({},e,{defaultToEN:!1}))}},{key:'months',value:function(e){var t=this,a=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0;return _(this,e,n,Ne.months,function(){var n=a?{month:e,day:'numeric'}:{month:e},o=a?'format':'standalone';return t.monthsCache[o][e]||(t.monthsCache[o][e]=c(function(e){return t.extract(e,n,'month')})),t.monthsCache[o][e]})}},{key:'weekdays',value:function(e){var t=this,a=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0;return _(this,e,n,Ne.weekdays,function(){var n=a?{weekday:e,year:'numeric',month:'long',day:'numeric'}:{weekday:e},o=a?'format':'standalone';return t.weekdaysCache[o][e]||(t.weekdaysCache[o][e]=p(function(e){return t.extract(e,n,'weekday')})),t.weekdaysCache[o][e]})}},{key:'meridiems',value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0;return _(this,void 0,t,function(){return Ne.meridiems},function(){if(!e.meridiemCache){var t={hour:'numeric',hour12:!0};e.meridiemCache=[Ht.utc(2016,11,13,9),Ht.utc(2016,11,13,19)].map(function(a){return e.extract(a,t,'dayperiod')})}return e.meridiemCache})}},{key:'eras',value:function(e){var t=this,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0;return _(this,e,a,Ne.eras,function(){var a={era:e};return t.eraCache[e]||(t.eraCache[e]=[Ht.utc(-40,1,1),Ht.utc(2017,1,1)].map(function(e){return t.extract(e,a,'era')})),t.eraCache[e]})}},{key:'extract',value:function(e,t,a){var n=this.dtFormatter(e,t),o=n.formatToParts(),r=o.find(function(e){return e.type.toLowerCase()===a});return r?r.value:null}},{key:'numberFormatter',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(je.hasIntl()){var a=Object.assign({useGrouping:!1},t);return 0<e.padTo&&(a.minimumIntegerDigits=e.padTo),e.round&&(a.maximumFractionDigits=0),new Intl.NumberFormat(this.intl,a)}return new He(e)}},{key:'dtFormatter',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new ze(e,this.intl,t)}},{key:'equals',value:function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}]),e}(),Ve=function(){return new Date().valueOf()},Be=null,qe=null,Ke=null,We=null,Ye=!1,Ge=function(){function e(){ce(this,e)}return pe(e,null,[{key:'resetCaches',value:function(){Ue.resetCache()}},{key:'now',get:function(){return Ve},set:function(e){Ve=e}},{key:'defaultZoneName',get:function(){return(Be||we.instance).name},set:function(e){Be=je.normalizeZone(e)}},{key:'defaultZone',get:function(){return Be||we.instance}},{key:'defaultLocale',get:function(){return qe},set:function(e){qe=e}},{key:'defaultNumberingSystem',get:function(){return Ke},set:function(e){Ke=e}},{key:'defaultOutputCalendar',get:function(){return We},set:function(e){We=e}},{key:'throwOnInvalid',get:function(){return Ye},set:function(e){Ye=e}}]),e}(),je=function(){function e(){ce(this,e)}return pe(e,null,[{key:'isUndefined',value:function(e){return'undefined'==typeof e}},{key:'isNumber',value:function(e){return'number'==typeof e}},{key:'isString',value:function(e){return'string'==typeof e}},{key:'isDate',value:function(e){return'[object Date]'===Object.prototype.toString.call(e)}},{key:'maybeArray',value:function(e){return Array.isArray(e)?e:[e]}},{key:'bestBy',value:function(e,t,a){return e.reduce(function(e,n){var o=[t(n),n];return e?a.apply(null,[e[0],o[0]])===e[0]?e:o:o},null)[1]}},{key:'pick',value:function(e,t){return t.reduce(function(t,a){return t[a]=e[a],t},{})}},{key:'numberBetween',value:function(t,a,n){return e.isNumber(t)&&t>=a&&t<=n}},{key:'padStart',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:2;return('0'.repeat(t)+e).slice(-t)}},{key:'parseMillis',value:function(e){if(e){var t=1e3*parseFloat('0.'+e);return re(t)}return 0}},{key:'isLeapYear',value:function(e){return 0==e%4&&(0!=e%100||0==e%400)}},{key:'daysInYear',value:function(t){return e.isLeapYear(t)?366:365}},{key:'daysInMonth',value:function(t,a){return 2===a?e.isLeapYear(t)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][a-1]}},{key:'untruncateYear',value:function(e){return 99<e?e:60<e?1900+e:2e3+e}},{key:'parseZoneInfo',value:function(t,a,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=new Date(t),s={hour12:!1,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'};o&&(s.timeZone=o);var d=Object.assign({timeZoneName:a},s),l=e.hasIntl();if(l&&e.hasFormatToParts()){var u=new Intl.DateTimeFormat(n,d).formatToParts(r).find(function(e){return'timezonename'===e.type.toLowerCase()});return u?u.value:null}if(l){var c=new Intl.DateTimeFormat(n,s).format(r),p=new Intl.DateTimeFormat(n,d).format(r),_=p.substring(c.length),m=_.replace(/^[, ]+/,'');return m}return null}},{key:'signedOffset',value:function(e,t){var a=parseInt(e,10)||0,n=parseInt(t,10)||0,o=0>a?-n:n;return 60*a+o}},{key:'friendlyDuration',value:function(t){if(e.isNumber(t))return bt.fromMillis(t);if(t instanceof bt)return t;if(t instanceof Object)return bt.fromObject(t);throw new ke('Unknown duration argument')}},{key:'friendlyDateTime',value:function(t){if(t instanceof Ht)return t;if(t.valueOf&&e.isNumber(t.valueOf()))return Ht.fromJSDate(t);if(t instanceof Object)return Ht.fromObject(t);throw new ke('Unknown datetime argument')}},{key:'normalizeZone',value:function(t){if(e.isUndefined(t)||null===t)return we.instance;if(t instanceof Ce)return t;if(e.isString(t)){var a=t.toLowerCase();return'local'===a?we.instance:'utc'===a?Me.utcInstance:De.isValidSpecier(a)?new De(t):Me.parseSpecifier(a)||Ge.defaultZone}return e.isNumber(t)?Me.instance(t):'object'===('undefined'==typeof t?'undefined':le(t))&&t.offset?t:Ge.defaultZone}},{key:'normalizeObject',value:function(t,a){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o={};for(var r in t)if(t.hasOwnProperty(r)){var s=t[r];if(null!==s&&!e.isUndefined(s)&&!ne(s)){var d=a(r,n);d&&(o[d]=s)}}return o}},{key:'timeObject',value:function(t){return e.pick(t,['hour','minute','second','millisecond'])}},{key:'hasIntl',value:function(){return'undefined'!=typeof Intl&&Intl.DateTimeFormat}},{key:'hasFormatToParts',value:function(){return!e.isUndefined(Intl.DateTimeFormat.prototype.formatToParts)}}]),e}(),Ze=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Xe=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,$e=RegExp(''+Xe.source+Ze.source+'?'),Je=RegExp('(?:T'+$e.source+')?'),Qe=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,et=/(\d{4})-?W(\d\d)-?(\d)/,tt=/(\d{4})-?(\d{3})/,at=f('weekYear','weekNumber','weekDay'),nt=f('year','ordinal'),ot=/(\d{4})-(\d\d)-(\d\d)/,rt=RegExp(Xe.source+' ?(?:'+Ze.source+'|([a-zA-Z_]{1,256}/[a-zA-Z_]{1,256}))?'),it=RegExp('(?: '+rt.source+')?'),st=/^P(?:(?:(\d{1,9})Y)?(?:(\d{1,9})M)?(?:(\d{1,9})D)?(?:T(?:(\d{1,9})H)?(?:(\d{1,9})M)?(?:(\d{1,9})S)?)?|(\d{1,9})W)$/,dt={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480},lt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/,ut=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,ct=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,pt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/,_t=function(){function e(){ce(this,e)}return pe(e,null,[{key:'parseISODate',value:function(e){return h(e,[m(Qe,Je),y(g,v,b)],[m(et,Je),y(at,v,b)],[m(tt,Je),y(nt,v)],[m($e),y(v,b)])}},{key:'parseRFC2822Date',value:function(e){return h(I(e),[lt,k])}},{key:'parseHTTPDate',value:function(e){return h(e,[ut,C],[ct,C],[pt,P])}},{key:'parseISODuration',value:function(e){return h(e,[st,S])}},{key:'parseSQL',value:function(e){return h(e,[m(ot,it),y(g,v,b,T)],[m(rt),y(v,b,T)])}}]),e}(),mt={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:604800000},days:{hours:24,minutes:1440,seconds:86400,milliseconds:86400000},hours:{minutes:60,seconds:3600,milliseconds:3600000},minutes:{seconds:60,milliseconds:60000},seconds:{milliseconds:1e3}},yt=Object.assign({years:{months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536000,milliseconds:31536000000},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592000,milliseconds:2592000000}},mt),ht=146097/400,ft=146097/4800,gt=Object.assign({years:{months:12,weeks:ht/7,days:ht,hours:24*ht,minutes:60*(24*ht),seconds:60*(60*(24*ht)),milliseconds:1e3*(60*(60*(24*ht)))},months:{weeks:ft/7,days:ft,hours:24*ht,minutes:60*(24*ht),seconds:60*(60*(24*ht)),milliseconds:1e3*(60*(60*(24*ht)))}},mt),vt=['years','months','weeks','days','hours','minutes','seconds','milliseconds'],bt=function(){function e(t){ce(this,e);var a='longterm'===t.conversionAccuracy||!1;this.values=t.values,this.loc=t.loc||Ue.create(),this.conversionAccuracy=a?'longterm':'casual',this.invalid=t.invalidReason||null,this.matrix=a?gt:yt}return pe(e,[{key:'toFormat',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.isValid?Re.create(this.loc,t).formatDurationFromString(this,e):'Invalid Duration'}},{key:'toObject',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.isValid)return{};var t=Object.assign({},this.values);return e.includeConfig&&(t.conversionAccuracy=this.conversionAccuracy,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}},{key:'toISO',value:function(){if(!this.isValid)return null;var e='P',t=this.normalize();return t=O(t.values)?t.negate():t,0<t.years&&(e+=t.years+'Y'),0<t.months&&(e+=t.months+'M'),(0<t.days||0<t.weeks)&&(e+=t.days+7*t.weeks+'D'),(0<t.hours||0<t.minutes||0<t.seconds||0<t.milliseconds)&&(e+='T'),0<t.hours&&(e+=t.hours+'H'),0<t.minutes&&(e+=t.minutes+'M'),0<t.seconds&&(e+=t.seconds+'S'),e}},{key:'toJSON',value:function(){return this.toISO()}},{key:'toString',value:function(){return this.toISO()}},{key:'inspect',value:function(){return this.isValid?'Duration {\n  values: '+this.toISO()+',\n  locale: '+this.locale+',\n  conversionAccuracy: '+this.conversionAccuracy+' }':'Duration { Invalid, reason: '+this.invalidReason+' }'}},{key:'plus',value:function(e){if(!this.isValid)return this;var t=je.friendlyDuration(e),a={},n=!0,o=!1,r;try{for(var s=vt[Symbol.iterator](),d;!(n=(d=s.next()).done);n=!0){var l=d.value,u=t.get(l)+this.get(l);0!==u&&(a[l]=u)}}catch(e){o=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw r}}return w(this,{values:a},!0)}},{key:'minus',value:function(e){if(!this.isValid)return this;var t=je.friendlyDuration(e);return this.plus(t.negate())}},{key:'get',value:function(t){return this[e.normalizeUnit(t)]}},{key:'set',value:function(t){var a=Object.assign(this.values,je.normalizeObject(t,e.normalizeUnit));return w(this,{values:a})}},{key:'reconfigure',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.locale,a=e.numberingSystem,n=e.conversionAccuracy,o=this.loc.clone({locale:t,numberingSystem:a}),r={loc:o};return n&&(r.conversionAccuracy=n),w(this,r)}},{key:'as',value:function(e){return this.isValid?this.shiftTo(e).get(e):NaN}},{key:'normalize',value:function(){if(!this.isValid)return this;var e=O(this.values),t=e?this.negate():this,a=t.shiftTo.apply(t,fe(Object.keys(this.values)));return e?a.negate():a}},{key:'shiftTo',value:function(){for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];if(!this.isValid)return this;if(0===a.length)return this;a=a.map(function(t){return e.normalizeUnit(t)});var o={},r={},s=this.toObject(),d=!0,l=!1,u,c;try{for(var p=vt[Symbol.iterator](),_,m;!(d=(_=p.next()).done);d=!0)if(m=_.value,0<=a.indexOf(m)){u=m;var y=0;for(var h in r)r.hasOwnProperty(h)&&(y+=this.matrix[h][m]*r[h],r[h]=0);je.isNumber(s[m])&&(y+=s[m]);var f=oe(y);for(var g in o[m]=f,r[m]=y-f,s)if(vt.indexOf(g)>vt.indexOf(m)){var v=this.matrix[m][g],b=ie(s[g]/v);o[m]+=b,s[g]-=b*v}}else je.isNumber(s[m])&&(r[m]=s[m])}catch(e){l=!0,c=e}finally{try{!d&&p.return&&p.return()}finally{if(l)throw c}}if(u)for(var T in r)r.hasOwnProperty(T)&&0<r[T]&&(o[u]+=T===u?r[T]:r[T]/this.matrix[u][T]);return w(this,{values:o},!0)}},{key:'negate',value:function(){if(!this.isValid)return this;var e={},t=!0,a=!1,n;try{for(var o=Object.keys(this.values)[Symbol.iterator](),r,s;!(t=(r=o.next()).done);t=!0)s=r.value,e[s]=-this.values[s]}catch(e){a=!0,n=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw n}}return w(this,{values:e})}},{key:'equals',value:function(e){if(!this.isValid||!e.isValid)return!1;if(!this.loc.equals(e.loc))return!1;var t=!0,a=!1,n;try{for(var o=vt[Symbol.iterator](),r,s;!(t=(r=o.next()).done);t=!0)if(s=r.value,this.values[s]!==e.values[s])return!1}catch(e){a=!0,n=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw n}}return!0}},{key:'locale',get:function(){return this.loc.locale}},{key:'numberingSystem',get:function(){return this.loc.numberingSystem}},{key:'years',get:function(){return this.isValid?this.values.years||0:NaN}},{key:'months',get:function(){return this.isValid?this.values.months||0:NaN}},{key:'weeks',get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:'days',get:function(){return this.isValid?this.values.days||0:NaN}},{key:'hours',get:function(){return this.isValid?this.values.hours||0:NaN}},{key:'minutes',get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:'seconds',get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:'milliseconds',get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:'isValid',get:function(){return null===this.invalidReason}},{key:'invalidReason',get:function(){return this.invalid}}],[{key:'fromMillis',value:function(t,a){return e.fromObject(Object.assign({milliseconds:t},a))}},{key:'fromObject',value:function(t){return new e({values:je.normalizeObject(t,e.normalizeUnit,!0),loc:Ue.fromObject(t),conversionAccuracy:t.conversionAccuracy})}},{key:'fromISO',value:function(t,a){var n=Object.assign(_t.parseISODuration(t),a);return e.fromObject(n)}},{key:'invalid',value:function(t){if(!t)throw new ke('need to specify a reason the DateTime is invalid');if(Ge.throwOnInvalid)throw new Te(t);else return new e({invalidReason:t})}},{key:'normalizeUnit',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],a={year:'years',years:'years',month:'months',months:'months',week:'weeks',weeks:'weeks',day:'days',days:'days',hour:'hours',hours:'hours',minute:'minutes',minutes:'minutes',second:'seconds',seconds:'seconds',millisecond:'milliseconds',milliseconds:'milliseconds'}[e?e.toLowerCase():e];if(!t&&!a)throw new Ee(e);return a}}]),e}(),Tt='Invalid Interval',St=function(){function t(e){ce(this,t),this.s=e.start,this.e=e.end,this.invalid=e.invalidReason||null}return pe(t,[{key:'length',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'milliseconds';return this.isValid?this.toDuration.apply(this,[e]).get(e):NaN}},{key:'count',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'milliseconds';if(!this.isValid)return NaN;var t=this.start.startOf(e),a=this.end.startOf(e);return ie(a.diff(t,e).get(e))+1}},{key:'hasSame',value:function(e){return!!this.isValid&&this.e.minus(1).hasSame(this.s,e)}},{key:'isEmpty',value:function(){return this.s.valueOf()===this.e.valueOf()}},{key:'isAfter',value:function(e){return!!this.isValid&&this.s>e}},{key:'isBefore',value:function(e){return!!this.isValid&&this.e.plus(1)<e}},{key:'contains',value:function(e){return!!this.isValid&&this.s<=e&&this.e>e}},{key:'set',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=e.start,n=e.end;return this.isValid?t.fromDateTimes(a||this.s,n||this.e):this}},{key:'splitAt',value:function(){if(!this.isValid)return[];for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];for(var o=a.map(je.friendlyDateTime).sort(),r=[],d=this.s,s=0;d<this.e;){var l=o[s]||this.e,u=+l>+this.e?this.e:l;r.push(t.fromDateTimes(d,u)),d=u,s+=1}return r}},{key:'splitBy',value:function(e){if(!this.isValid)return[];for(var a=je.friendlyDuration(e),n=[],o=this.s,r,s;o<this.e;)r=o.plus(a),s=+r>+this.e?this.e:r,n.push(t.fromDateTimes(o,s)),o=s;return n}},{key:'divideEqually',value:function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}},{key:'overlaps',value:function(e){return this.e>e.s&&this.s<e.e}},{key:'abutsStart',value:function(e){return!!this.isValid&&+this.e==+e.s}},{key:'abutsEnd',value:function(e){return!!this.isValid&&+e.e==+this.s}},{key:'engulfs',value:function(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}},{key:'equals',value:function(e){return this.s.equals(e.s)&&this.e.equals(e.e)}},{key:'intersection',value:function(a){if(!this.isValid)return this;var n=this.s>a.s?this.s:a.s,o=this.e<a.e?this.e:a.e;return n>o?null:t.fromDateTimes(n,o)}},{key:'union',value:function(a){if(!this.isValid)return this;var n=this.s<a.s?this.s:a.s,o=this.e>a.e?this.e:a.e;return t.fromDateTimes(n,o)}},{key:'difference',value:function(){for(var e=this,a=arguments.length,n=Array(a),o=0;o<a;o++)n[o]=arguments[o];return t.xor([this].concat(n)).map(function(t){return e.intersection(t)}).filter(function(e){return e&&!e.isEmpty()})}},{key:'toString',value:function(){return this.isValid?'['+this.s.toISO()+' \u2013 '+this.e.toISO()+')':Tt}},{key:'inspect',value:function(){return this.isValid?'Interval {\n  start: '+this.start.toISO()+',\n  end: '+this.end.toISO()+',\n  zone:   '+this.start.zone.name+',\n  locale:   '+this.start.locale+' }':'Interval { Invalid, reason: '+this.invalidReason+' }'}},{key:'toISO',value:function(e){return this.isValid?this.s.toISO(e)+'/'+this.e.toISO(e):Tt}},{key:'toFormat',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=t.separator,n=void 0===a?' \u2013 ':a;return this.isValid?''+this.s.toFormat(e)+n+this.e.toFormat(e):Tt}},{key:'toDuration',value:function(e,t){return this.isValid?this.e.diff(this.s,e,t):bt.invalid(this.invalidReason)}},{key:'start',get:function(){return this.isValid?this.s:null}},{key:'end',get:function(){return this.isValid?this.e:null}},{key:'isValid',get:function(){return null===this.invalidReason}},{key:'invalidReason',get:function(){return this.invalid}}],[{key:'invalid',value:function(e){if(!e)throw new ke('need to specify a reason the DateTime is invalid');if(Ge.throwOnInvalid)throw new be(e);else return new t({invalidReason:e})}},{key:'fromDateTimes',value:function(e,a){var n=je.friendlyDateTime(e),o=je.friendlyDateTime(a);return new t({start:n,end:o,invalidReason:D(n,o)?null:'invalid endpoints'})}},{key:'after',value:function(e,a){var n=je.friendlyDuration(a),o=je.friendlyDateTime(e);return t.fromDateTimes(o,o.plus(n))}},{key:'before',value:function(e,a){var n=je.friendlyDuration(a),o=je.friendlyDateTime(e);return t.fromDateTimes(o.minus(n),o)}},{key:'fromISO',value:function(a,n){if(a){var o=a.split(/\//),r=he(o,2),d=r[0],s=r[1];if(d&&s)return t.fromDateTimes(Ht.fromISO(d,n),Ht.fromISO(s,n))}return t.invalid('invalid ISO format')}},{key:'merge',value:function(e){var t=e.sort(function(e,t){return e.s-t.s}).reduce(function(e,t){var a=he(e,2),n=a[0],o=a[1];return o?o.overlaps(t)||o.abutsStart(t)?[n,o.union(t)]:[n.concat([o]),t]:[n,t]},[[],null]),a=he(t,2),n=a[0],o=a[1];return o&&n.push(o),n}},{key:'xor',value:function(e){var a=null,n=0,o=[],r=e.map(function(e){return[{time:e.s,type:'s'},{time:e.e,type:'e'}]}),s=(c=Array.prototype).concat.apply(c,fe(r)),d=s.sort(function(e,t){return e.time-t.time}),l=!0,u=!1,c,p;try{for(var _=d[Symbol.iterator](),m,y;!(l=(m=_.next()).done);l=!0)y=m.value,n+='s'===y.type?1:-1,1==n?a=y.time:(a&&+a!=+y.time&&o.push(t.fromDateTimes(a,y.time)),a=null)}catch(e){u=!0,p=e}finally{try{!l&&_.return&&_.return()}finally{if(u)throw p}}return t.merge(o)}}]),t}(),Et=function(){function e(){ce(this,e)}return pe(e,null,[{key:'hasDST',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Ge.defaultZone,t=Ht.local().setZone(e).set({month:12});return!e.universal&&t.offset!==t.set({month:6}).offset}},{key:'months',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'long',t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=t.locale,n=void 0===a?null:a,o=t.numberingSystem,r=void 0===o?null:o,s=t.outputCalendar,d=void 0===s?'gregory':s;return Ue.create(n,r,d).months(e)}},{key:'monthsFormat',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'long',t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=t.locale,n=void 0===a?null:a,o=t.numberingSystem,r=void 0===o?null:o,s=t.outputCalendar,d=void 0===s?'gregory':s;return Ue.create(n,r,d).months(e,!0)}},{key:'weekdays',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'long',t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=t.locale,n=void 0===a?null:a,o=t.numberingSystem,r=void 0===o?null:o;return Ue.create(n,r,null).weekdays(e)}},{key:'weekdaysFormat',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'long',t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=t.locale,n=void 0===a?null:a,o=t.numberingSystem,r=void 0===o?null:o;return Ue.create(n,r,null).weekdays(e,!0)}},{key:'meridiems',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.locale,a=void 0===t?null:t;return Ue.create(a).meridiems()}},{key:'eras',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'short',t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=t.locale,n=void 0===a?null:a;return Ue.create(n,null,'gregory').eras(e)}},{key:'features',value:function(){var e=!1,t=!1,a=!1;if(je.hasIntl()){e=!0,t=je.hasFormatToParts();try{a='America/New_York'===new Intl.DateTimeFormat('en',{timeZone:'America/New_York'}).resolvedOptions().timeZone}catch(t){a=!1}}return{intl:e,intlTokens:t,zones:a}}}]),e}(),kt='missing Intl.DateTimeFormat.formatToParts support',It=function(){function e(t){ce(this,e),this.loc=t}return pe(e,[{key:'explainParse',value:function(e,t){var a=this,n=Re.parseFormat(t),o=n.map(function(e){return F(e,a.loc)}),r=o.find(function(e){return e.invalidReason});if(r)return{input:e,tokens:n,invalidReason:r.invalidReason};var s=H(o),d=he(s,2),l=d[0],u=d[1],c=RegExp(l,'i'),p=z(e,c,u),_=he(p,2),m=_[0],y=_[1],h=y?U(y):[null,null],f=he(h,2),g=f[0],v=f[1];return{input:e,tokens:n,regex:c,rawMatches:m,matches:y,result:g,zone:v}}},{key:'parseDateTime',value:function(e,t){var a=this.explainParse(e,t),n=a.result,o=a.zone,r=a.invalidReason;return[n,o,r]}}]),e}(),Ct=[0,31,59,90,120,151,181,212,243,273,304,334],Pt=[0,31,60,91,121,152,182,213,244,274,305,335],wt=function(){function e(){ce(this,e)}return pe(e,null,[{key:'gregorianToWeek',value:function(e){var t=e.year,a=e.month,n=e.day,o=q(t,a,n),r=V(t,a,n),s=ie((o-r+10)/7),d;return 1>s?(d=t-1,s=B(d)):s>B(t)?(d=t+1,s=1):d=t,Object.assign({weekYear:d,weekNumber:s,weekday:r},je.timeObject(e))}},{key:'weekToGregorian',value:function(e){var t=e.weekYear,a=e.weekNumber,n=e.weekday,o=V(t,1,4),r=je.daysInYear(t),s=7*a+n-o-3,d;1>s?(d=t-1,s+=je.daysInYear(d)):s>r?(d=t+1,s-=je.daysInYear(d)):d=t;var l=K(d,s),u=l.month,c=l.day;return Object.assign({year:d,month:u,day:c},je.timeObject(e))}},{key:'gregorianToOrdinal',value:function(e){var t=e.year,a=e.month,n=e.day,o=q(t,a,n);return Object.assign({year:t,ordinal:o},je.timeObject(e))}},{key:'ordinalToGregorian',value:function(e){var t=e.year,a=e.ordinal,n=K(t,a),o=n.month,r=n.day;return Object.assign({year:t,month:o,day:r},je.timeObject(e))}},{key:'hasInvalidWeekData',value:function(e){var t=je.isNumber(e.weekYear),a=je.numberBetween(e.weekNumber,1,B(e.weekYear)),n=je.numberBetween(e.weekday,1,7);return t?a?!n&&'weekday out of range':'week out of range':'weekYear out of range'}},{key:'hasInvalidOrdinalData',value:function(e){var t=je.isNumber(e.year),a=je.numberBetween(e.ordinal,1,je.daysInYear(e.year));return t?!a&&'ordinal out of range':'year out of range'}},{key:'hasInvalidGregorianData',value:function(e){var t=je.isNumber(e.year),a=je.numberBetween(e.month,1,12),n=je.numberBetween(e.day,1,je.daysInMonth(e.year,e.month));return t?a?!n&&'day out of range':'month out of range':'year out of range'}},{key:'hasInvalidTimeData',value:function(e){var t=je.numberBetween(e.hour,0,23),a=je.numberBetween(e.minute,0,59),n=je.numberBetween(e.second,0,59),o=je.numberBetween(e.millisecond,0,999);return t?a?n?!o&&'millisecond out of range':'second out of range':'minute out of range':'hour out of range'}}]),e}(),Ot='Invalid DateTime',Dt='unsupported zone',At='unparsable',Mt={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},xt={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Nt={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Lt=['year','month','day','hour','minute','second','millisecond'],Rt=['weekYear','weekNumber','weekday','hour','minute','second','millisecond'],Ft=['year','ordinal','hour','minute','second','millisecond'],Ht=function(){function e(t){ce(this,e);var a=t.zone||Ge.defaultZone,n=t.invalidReason||(ne(t.ts)?'invalid input':null)||(a.isValid?null:Dt),r=t.ts||Ge.now(),s=null,d=null;if(!n){var o=t.old&&t.old.ts===r&&t.old.zone.equals(a);s=o?t.old.c:j(r,a.offset(r)),d=o?t.old.o:a.offset(r)}this.ts=je.isUndefined(t.ts)?Ge.now():t.ts,this.zone=a,this.loc=t.loc||Ue.create(),this.invalid=n,this.weekData=null,this.c=s,this.o=d}return pe(e,[{key:'get',value:function(e){return this[e]}},{key:'resolvedLocaleOpts',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=Re.create(this.loc.clone(e),e).resolvedOptions(this),a=t.locale,n=t.numberingSystem,o=t.calendar;return{locale:a,numberingSystem:n,outputCalendar:o}}},{key:'toUTC',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.setZone(Me.instance(e),t)}},{key:'toLocal',value:function(){return this.setZone(new we)}},{key:'setZone',value:function(t){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=a.keepCalendarTime;if(t=je.normalizeZone(t),t.equals(this.zone))return this;if(!t.isValid)return e.invalid(Dt);var o=void 0!==n&&n?this.ts+1e3*(60*(this.o-t.offset(this.ts))):this.ts;return Y(this,{ts:o,zone:t})}},{key:'reconfigure',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.locale,a=e.numberingSystem,n=e.outputCalendar,o=this.loc.clone({locale:t,numberingSystem:a,outputCalendar:n});return Y(this,{loc:o})}},{key:'setLocale',value:function(e){return this.reconfigure({locale:e})}},{key:'set',value:function(e){if(!this.isValid)return this;var t=je.normalizeObject(e,te),a=!je.isUndefined(t.weekYear)||!je.isUndefined(t.weekNumber)||!je.isUndefined(t.weekday),n;a?n=wt.weekToGregorian(Object.assign(wt.gregorianToWeek(this.c),t)):je.isUndefined(t.ordinal)?(n=Object.assign(this.toObject(),t),je.isUndefined(t.day)&&(n.day=se(je.daysInMonth(n.year,n.month),n.day))):n=wt.ordinalToGregorian(Object.assign(wt.gregorianToOrdinal(this.c),t));var r=X(n,this.o,this.zone),s=he(r,2),d=s[0],l=s[1];return Y(this,{ts:d,o:l})}},{key:'plus',value:function(e){if(!this.isValid)return this;var t=je.friendlyDuration(e);return Y(this,$(this,t))}},{key:'minus',value:function(e){if(!this.isValid)return this;var t=je.friendlyDuration(e).negate();return Y(this,$(this,t))}},{key:'startOf',value:function(e){if(!this.isValid)return this;var t={},a=bt.normalizeUnit(e);switch(a){case'years':t.month=1;case'months':t.day=1;case'weeks':case'days':t.hour=0;case'hours':t.minute=0;case'minutes':t.second=0;case'seconds':t.millisecond=0;break;case'milliseconds':break;default:throw new Ee(e);}return'weeks'===a&&(t.weekday=1),this.set(t)}},{key:'endOf',value:function(e){return this.isValid?this.startOf(e).plus(_e({},e,1)).minus(1):this}},{key:'toFormat',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.isValid?Re.create(this.loc.redefaultToEN(),t).formatDateTimeFromString(this,e):Ot}},{key:'toLocaleString',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:xe.DATE_SHORT;return this.isValid?Re.create(this.loc.clone(e),e).formatDateTime(this):Ot}},{key:'toLocaleParts',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.isValid?Re.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}},{key:'toISO',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.isValid?this.toISODate()+'T'+this.toISOTime(e):null}},{key:'toISODate',value:function(){return Q(this,'yyyy-MM-dd')}},{key:'toISOWeekDate',value:function(){return Q(this,'kkkk-\'W\'WW-c')}},{key:'toISOTime',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.suppressMilliseconds,a=e.suppressSeconds,n=e.includeOffset;return ee(this,{suppressSeconds:void 0!==a&&a,suppressMilliseconds:void 0!==t&&t,includeOffset:void 0===n||n})}},{key:'toRFC2822',value:function(){return Q(this,'EEE, dd LLL yyyy hh:mm:ss ZZZ')}},{key:'toHTTP',value:function(){return Q(this.toUTC(),'EEE, dd LLL yyyy HH:mm:ss \'GMT\'')}},{key:'toSQLDate',value:function(){return Q(this,'yyyy-MM-dd')}},{key:'toSQLTime',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.includeOffset,a=e.includeZone;return ee(this,{includeOffset:void 0===t||t,includeZone:void 0!==a&&a,spaceZone:!0})}},{key:'toSQL',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.isValid?this.toSQLDate()+' '+this.toSQLTime(e):null}},{key:'toString',value:function(){return this.isValid?this.toISO():Ot}},{key:'inspect',value:function(){return this.isValid?'DateTime {\n  ts: '+this.toISO()+',\n  zone: '+this.zone.name+',\n  locale: '+this.locale+' }':'DateTime { Invalid, reason: '+this.invalidReason+' }'}},{key:'valueOf',value:function(){return this.isValid?this.ts:NaN}},{key:'toJSON',value:function(){return this.toISO()}},{key:'toObject',value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.isValid)return{};var t=Object.assign({},this.c);return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}},{key:'toJSDate',value:function(){return new Date(this.isValid?this.ts:NaN)}},{key:'diff',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'milliseconds',a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(!this.isValid||!e.isValid)return bt.invalid(this.invalidReason||e.invalidReason);var n=je.maybeArray(t).map(bt.normalizeUnit),o=e.valueOf()>this.valueOf(),r=o?e:this,s={},d=o?this:e,l=null;if(0<=n.indexOf('years')){var u=r.year-d.year;d=d.set({year:r.year}),d>r&&(d=d.minus({years:1}),u-=1),s.years=u,l='years'}if(0<=n.indexOf('months')){var c=r.year-d.year,p=r.month-d.month+12*c;d=d.set({year:r.year,month:r.month}),d>r&&(d=d.minus({months:1}),p-=1),s.months=p,l='months'}var _=function(){var e=function(e){return e.toUTC(0,{keepCalendarTime:!0}).startOf('day').valueOf()},t=e(r)-e(d);return ie(bt.fromMillis(t,a).shiftTo('days').days)};if(0<=n.indexOf('weeks')){var m=_(),y=(m-m%7)/7;d=d.plus({weeks:y}),d>r&&(d=d.minus({weeks:1}),y-=1),s.weeks=y,l='weeks'}if(0<=n.indexOf('days')){var h=_();d=d.set({year:r.year,month:r.month,day:r.day}),d>r&&(d=d.minus({days:1}),h-=1),s.days=h,l='days'}var f=bt.fromMillis(r-d,a),g=n.filter(function(e){return 0<=['hours','minutes','seconds','milliseconds'].indexOf(e)}),v=0<g.length?g:[l],b=f.shiftTo.apply(f,fe(v)),T=b.plus(bt.fromObject(Object.assign(s,a)));return o?T.negate():T}},{key:'diffNow',value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:'milliseconds',a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.diff(e.local(),t,a)}},{key:'until',value:function(e){return this.isValid?St.fromDateTimes(this,e):this}},{key:'hasSame',value:function(e,t){if(!this.isValid)return!1;if('millisecond'===t)return this.valueOf()===e.valueOf();var a=e.valueOf();return this.startOf(t)<=a&&a<=this.endOf(t)}},{key:'equals',value:function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}},{key:'isValid',get:function(){return null===this.invalidReason}},{key:'invalidReason',get:function(){return this.invalid}},{key:'locale',get:function(){return this.loc.locale}},{key:'numberingSystem',get:function(){return this.loc.numberingSystem}},{key:'outputCalendar',get:function(){return this.loc.outputCalendar}},{key:'zoneName',get:function(){return this.zone.name}},{key:'year',get:function(){return this.isValid?this.c.year:NaN}},{key:'month',get:function(){return this.isValid?this.c.month:NaN}},{key:'day',get:function(){return this.isValid?this.c.day:NaN}},{key:'hour',get:function(){return this.isValid?this.c.hour:NaN}},{key:'minute',get:function(){return this.isValid?this.c.minute:NaN}},{key:'second',get:function(){return this.isValid?this.c.second:NaN}},{key:'millisecond',get:function(){return this.isValid?this.c.millisecond:NaN}},{key:'weekYear',get:function(){return this.isValid?W(this).weekYear:NaN}},{key:'weekNumber',get:function(){return this.isValid?W(this).weekNumber:NaN}},{key:'weekday',get:function(){return this.isValid?W(this).weekday:NaN}},{key:'ordinal',get:function(){return this.isValid?wt.gregorianToOrdinal(this.c).ordinal:NaN}},{key:'monthShort',get:function(){return this.isValid?Et.months('short',{locale:this.locale})[this.month-1]:null}},{key:'monthLong',get:function(){return this.isValid?Et.months('long',{locale:this.locale})[this.month-1]:null}},{key:'weekdayShort',get:function(){return this.isValid?Et.weekdays('short',{locale:this.locale})[this.weekday-1]:null}},{key:'weekdayLong',get:function(){return this.isValid?Et.weekdays('long',{locale:this.locale})[this.weekday-1]:null}},{key:'offset',get:function(){return this.isValid?this.zone.offset(this.ts):NaN}},{key:'offsetNameShort',get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:'short',locale:this.locale}):null}},{key:'offsetNameLong',get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:'long',locale:this.locale}):null}},{key:'isOffsetFixed',get:function(){return this.zone.universal}},{key:'isInDST',get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1}).offset||this.offset>this.set({month:5}).offset)}},{key:'isInLeapYear',get:function(){return je.isLeapYear(this.year)}},{key:'daysInMonth',get:function(){return je.daysInMonth(this.year,this.month)}},{key:'daysInYear',get:function(){return this.isValid?je.daysInYear(this.year):NaN}}],[{key:'local',value:function(t,a,n,o,r,s,d){return je.isUndefined(t)?new e({ts:Ge.now()}):ae({year:t,month:a,day:n,hour:o,minute:r,second:s,millisecond:d},Ge.defaultZone)}},{key:'utc',value:function(t,a,n,o,r,s,d){return je.isUndefined(t)?new e({ts:Ge.now(),zone:Me.utcInstance}):ae({year:t,month:a,day:n,hour:o,minute:r,second:s,millisecond:d},Me.utcInstance)}},{key:'fromJSDate',value:function(t){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new e({ts:je.isDate(t)?t.valueOf():NaN,zone:je.normalizeZone(a.zone),loc:Ue.fromObject(a)})}},{key:'fromMillis',value:function(t){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new e({ts:t,zone:je.normalizeZone(a.zone),loc:Ue.fromObject(a)})}},{key:'fromObject',value:function(t){var a=je.normalizeZone(t.zone);if(!a.isValid)return e.invalid(Dt);var n=Ge.now(),o=a.offset(n),r=je.normalizeObject(t,te,!0),s=!je.isUndefined(r.ordinal),d=!je.isUndefined(r.year),l=!je.isUndefined(r.month)||!je.isUndefined(r.day),c=d||l,p=r.weekYear||r.weekNumber,_=Ue.fromObject(t);if((c||s)&&p)throw new Se('Can\'t mix weekYear/weekNumber units with year/month/day or ordinals');if(l&&s)throw new Se('Can\'t mix ordinal dates with month/day');var m=p||r.weekday&&!c,y=j(n,o),h,f;m?(h=Rt,f=xt,y=wt.gregorianToWeek(y)):s?(h=Ft,f=Nt,y=wt.gregorianToOrdinal(y)):(h=Lt,f=Mt);var g=!1,b=!0,T=!1,S;try{for(var E=h[Symbol.iterator](),k;!(b=(k=E.next()).done);b=!0){var I=k.value,u=r[I];je.isUndefined(u)?g?r[I]=f[I]:r[I]=y[I]:g=!0}}catch(e){T=!0,S=e}finally{try{!b&&E.return&&E.return()}finally{if(T)throw S}}var v=m?wt.hasInvalidWeekData(r):s?wt.hasInvalidOrdinalData(r):wt.hasInvalidGregorianData(r),C=v||wt.hasInvalidTimeData(r);if(C)return e.invalid(C);var P=m?wt.weekToGregorian(r):s?wt.ordinalToGregorian(r):r,w=X(P,o,a),O=he(w,2),D=O[0],A=O[1],M=new e({ts:D,zone:a,o:A,loc:_});return r.weekday&&c&&t.weekday!==M.weekday?e.invalid('mismatched weekday'):M}},{key:'fromISO',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=_t.parseISODate(e),n=he(a,2),o=n[0],r=n[1];return J(o,r,t)}},{key:'fromRFC2822',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=_t.parseRFC2822Date(e),n=he(a,2),o=n[0],r=n[1];return J(o,r,t)}},{key:'fromHTTP',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=_t.parseHTTPDate(e),n=he(a,2),o=n[0],r=n[1];return J(o,r,t)}},{key:'fromString',value:function(t,a){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(je.isUndefined(t)||je.isUndefined(a))throw new ke('fromString requires an input string and a format');var o=n.locale,r=void 0===o?null:o,s=n.numberingSystem,d=void 0===s?null:s,l=new It(Ue.fromOpts({locale:r,numberingSystem:d,defaultToEN:!0})),u=l.parseDateTime(t,a),c=he(u,3),p=c[0],_=c[1],m=c[2];return m?e.invalid(m):J(p,_,n)}},{key:'fromSQL',value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},a=_t.parseSQL(e),n=he(a,2),o=n[0],r=n[1];return J(o,r,t)}},{key:'invalid',value:function(t){if(!t)throw new ke('need to specify a reason the DateTime is invalid');if(Ge.throwOnInvalid)throw new ve(t);else return new e({invalidReason:t})}},{key:'min',value:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return je.bestBy(t,function(e){return e.valueOf()},Math.min)}},{key:'max',value:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return je.bestBy(t,function(e){return e.valueOf()},Math.max)}},{key:'fromStringExplain',value:function(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=new It(Ue.fromOpts(a));return n.explainParse(e,t)}},{key:'DATE_SHORT',get:function(){return xe.DATE_SHORT}},{key:'DATE_MED',get:function(){return xe.DATE_MED}},{key:'DATE_FULL',get:function(){return xe.DATE_FULL}},{key:'DATE_HUGE',get:function(){return xe.DATE_HUGE}},{key:'TIME_SIMPLE',get:function(){return xe.TIME_SIMPLE}},{key:'TIME_WITH_SECONDS',get:function(){return xe.TIME_WITH_SECONDS}},{key:'TIME_WITH_SHORT_OFFSET',get:function(){return xe.TIME_WITH_SHORT_OFFSET}},{key:'TIME_WITH_LONG_OFFSET',get:function(){return xe.TIME_WITH_LONG_OFFSET}},{key:'TIME_24_SIMPLE',get:function(){return xe.TIME_24_SIMPLE}},{key:'TIME_24_WITH_SECONDS',get:function(){return xe.TIME_24_WITH_SECONDS}},{key:'TIME_24_WITH_SHORT_OFFSET',get:function(){return xe.TIME_24_WITH_SHORT_OFFSET}},{key:'TIME_24_WITH_LONG_OFFSET',get:function(){return xe.TIME_24_WITH_LONG_OFFSET}},{key:'DATETIME_SHORT',get:function(){return xe.DATETIME_SHORT}},{key:'DATETIME_SHORT_WITH_SECONDS',get:function(){return xe.DATETIME_SHORT_WITH_SECONDS}},{key:'DATETIME_MED',get:function(){return xe.DATETIME_MED}},{key:'DATETIME_MED_WITH_SECONDS',get:function(){return xe.DATETIME_MED_WITH_SECONDS}},{key:'DATETIME_FULL',get:function(){return xe.DATETIME_FULL}},{key:'DATETIME_FULL_WITH_SECONDS',get:function(){return xe.DATETIME_FULL_WITH_SECONDS}},{key:'DATETIME_HUGE',get:function(){return xe.DATETIME_HUGE}},{key:'DATETIME_HUGE_WITH_SECONDS',get:function(){return xe.DATETIME_HUGE_WITH_SECONDS}}]),e}();t.DateTime=Ht,t.Duration=bt,t.Interval=St,t.Info=Et,t.Zone=Ce,t.Settings=Ge}]);