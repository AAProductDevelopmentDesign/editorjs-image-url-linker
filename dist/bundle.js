!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleImage=e():t.SimpleImage=e()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){function i(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t){if(t.includes("aviationaustralia.aero")){if(t.includes("file")&&7===t.split("/").length){var e=t.split("/");return"".concat(e[0],"//").concat(e[2],"/items/").concat(e[4],"/0/").concat(e[6])}if(t.includes("items")){if(t.includes("/0/"))return t;var n=t.match(/\/([0-9]+)\//g)[0],i=t.split(n);return"".concat(i[0],"/0/").concat(i[1])}}return t}n(1).toString();var s=function(){function t(e){var n=e.data,i=(e.config,e.api),r=e.readOnly;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=i,this.readOnly=r,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-simple-image",imageHolder:"cdx-simple-image__picture",caption:"cdx-simple-image__caption",style:"cdx-simple-image__style",displayUrl:"cdx-simple-image__url"},this.nodes={wrapper:null,imageHolder:null,image:null,caption:null,style:null},this.data={url:n.url||"",caption:n.caption||"",style:n.style||"",withBorder:void 0!==n.withBorder&&n.withBorder,withBackground:void 0!==n.withBackground&&n.withBackground,stretched:void 0!==n.stretched&&n.stretched},this.settings=[{name:"withBorder",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>'},{name:"stretched",icon:'<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>'},{name:"withBackground",icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.043 8.265l3.183-3.183h-2.924L4.75 10.636v2.923l4.15-4.15v2.351l-2.158 2.159H8.9v2.137H4.7c-1.215 0-2.2-.936-2.2-2.09v-8.93c0-1.154.985-2.09 2.2-2.09h10.663l.033-.033.034.034c1.178.04 2.12.96 2.12 2.089v3.23H15.3V5.359l-2.906 2.906h-2.35zM7.951 5.082H4.75v3.201l3.201-3.2zm5.099 7.078v3.04h4.15v-3.04h-4.15zm-1.1-2.137h6.35c.635 0 1.15.489 1.15 1.092v5.13c0 .603-.515 1.092-1.15 1.092h-6.35c-.635 0-1.15-.489-1.15-1.092v-5.13c0-.603.515-1.092 1.15-1.092z"/></svg>'}]}var e,n,r;return e=t,r=[{key:"sanitize",get:function(){return{url:{},withBorder:{},withBackground:{},stretched:{},caption:{br:!0}}}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"pasteConfig",get:function(){return{patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg)$/i},tags:["img"],files:{mimeTypes:["image/*"]}}}}],(n=[{key:"render",value:function(){var t=this,e=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),n=this._make("div",this.CSS.loading),i=this._make("div",this.CSS.imageHolder),r=this._make("img"),a=this._make("div","grid-container"),s=this._make("div","left"),l=this._make("div","right"),c=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption||""}),d=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.style||""}),u=this._make("p",this.CSS.displayUrl);return d.id="style-element",c.dataset.placeholder="Enter a caption",c.style.maxWidth="484px",d.dataset.placeholder="Max height (px)",d.style.maxWidth="160px",e.appendChild(n),this.data.url&&(r.src=o(this.data.url),u.innerHTML=o(this.data.url),e.appendChild(u)),setTimeout((function(){r.complete&&r.naturalWidth||console.log("Image took too long to load")}),8e3),r.onload=function(){e.classList.remove(t.CSS.loading),u.remove(),i.appendChild(r),e.appendChild(i),u.innerHTML=t.data.url,e.appendChild(u),e.appendChild(a),a.appendChild(s),a.appendChild(l),s.appendChild(c),l.appendChild(d),n.remove(),t._acceptTuneView()},r.onerror=function(t){console.log("Failed to load an image",t)},this.nodes.imageHolder=i,this.nodes.wrapper=e,this.nodes.image=r,this.nodes.caption=c,this.nodes.style=d,e}},{key:"save",value:function(t){var e=t.querySelector("img"),n=t.querySelector("."+this.CSS.input),i=t.querySelector("#style-element");return e?(this.data.style&&!Number.isNaN(parseInt(this.data.style))?parseInt(this.data.style)>300?(e.style.maxHeight="".concat(this.data.style,"px"),i.style.color="#0cad5d"):i.style.color="#b81f14":this.data.style&&(i.style.color="#b81f14"),Object.assign(this.data,{url:e.src,caption:n.innerHTML,style:i.innerHTML})):this.data}},{key:"onDropHandler",value:function(t){var e=new FileReader;return e.readAsDataURL(t),new Promise((function(n){e.onload=function(e){n({url:e.target.result,caption:t.name})}}))}},{key:"onPaste",value:function(t){var e=this;switch(t.type){case"tag":var n=t.detail.data;this.data={url:n.src};break;case"pattern":var i=t.detail.data;this.data={url:i};break;case"file":var r=t.detail.file;this.onDropHandler(r).then((function(t){e.data=t}))}}},{key:"data",get:function(){return this._data},set:function(t){this._data=Object.assign({},this.data,t),this.nodes.image&&(this.nodes.image.src=this.data.url),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption),this.nodes.style&&(this.nodes.caption.innerHTML=this.data.style)}},{key:"renderSettings",value:function(){var t=this,e=document.createElement("div");return this.settings.forEach((function(n){var i=document.createElement("div");i.classList.add(t.CSS.settingsButton),i.innerHTML=n.icon,i.addEventListener("click",(function(){t._toggleTune(n.name),i.classList.toggle(t.CSS.settingsButtonActive)})),i.classList.toggle(t.CSS.settingsButtonActive,t.data[n.name]),e.appendChild(i)})),e}},{key:"_make",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=document.createElement(t);for(var o in Array.isArray(n)?(e=a.classList).add.apply(e,i(n)):n&&a.classList.add(n),r)a[o]=r[o];return a}},{key:"_toggleTune",value:function(t){this.data[t]=!this.data[t],this._acceptTuneView()}},{key:"_acceptTuneView",value:function(){var t=this;this.settings.forEach((function(e){t.nodes.imageHolder.classList.toggle(t.CSS.imageHolder+"--"+e.name.replace(/([A-Z])/g,(function(t){return"-".concat(t[0].toLowerCase())})),!!t.data[e.name]),"stretched"===e.name&&t.api.blocks.stretchBlock(t.blockIndex,!!t.data.stretched)}))}}])&&a(e.prototype,n),r&&a(e,r),t}();t.exports=s},function(t,e,n){var i=n(2);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(4)(i,r);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".cdx-simple-image {}\n\n.cdx-simple-image .cdx-loader {\n  min-height: 80px;\n}\n\n.cdx-simple-image .cdx-input {\n  margin-top: 10px;\n}\n\n.cdx-simple-image img {\n  max-width: 100%;\n  vertical-align: bottom;\n  display: block;\n  margin: auto;\n}\n\n/* .cdx-simple-image__caption {\n  max-width: 48%;\n  float:left;\n}\n\n.cdx-simple-image__caption:first-child {\n  margin-right: 4%;\n} */\n\n.grid-container {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1.5fr 0.5fr;\n  grid-template-rows: 1fr;\n  gap: 10px 10px;\n}\n\n.left { grid-area: 1 / 1 / 2 / 3; }\n\n.right { grid-area: 1 / 2 / 2 / 3; }\n\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n  max-width: 50%;\n}\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.cdx-simple-image__url {\n  color: #707684;\n  font-weight: normal;\n  font-size: 8pt;\n  text-align: center;\n}\n\n\n.cdx-simple-image__picture--with-background {\n  background: #eff2f5;\n  padding: 10px;\n}\n\n.cdx-simple-image__picture--with-background img {\n  display: block;\n  max-width: 60%;\n  margin: 0 auto;\n}\n\n.cdx-simple-image__picture--with-border {\n  border: 1px solid #e8e8eb;\n  padding: 1px;\n}\n\n.cdx-simple-image__picture--stretched img {\n  max-width: none;\n  width: 100%;\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(o=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(a).concat([r]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var i,r,a={},o=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(t){return document.querySelector(t)},l=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),c=null,d=0,u=[],p=n(5);function f(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=a[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(b(i.parts[o],e))}else{var s=[];for(o=0;o<i.parts.length;o++)s.push(b(i.parts[o],e));a[i.id]={id:i.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],i={},r=0;r<t.length;r++){var a=t[r],o=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):n.push(i[o]={id:o,parts:[s]})}return n}function m(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,r)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),m(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,i,r,a;if(e.transform&&t.css){if(!(a=e.transform(t.css)))return function(){};t.css=a}if(e.singleton){var o=d++;n=c||(c=v(e)),i=S.bind(null,n,o,!1),r=S.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),m(t,e),e}(e),i=k.bind(null,n,e),r=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),i=_.bind(null,n),r=function(){g(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return f(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var o=n[r];(s=a[o.id]).refs--,i.push(s)}t&&f(h(t,e),e);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function S(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var a=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function _(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function k(t,e,n){var i=n.css,r=n.sourceMap,a=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||a)&&(i=p(i)),r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var r,a=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?t:(r=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:i+a.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}}])}));