/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcHeaderMenu.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcHeaderMenu.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*! For license information please see NcHeaderMenu.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={6730:(t,e,n)=>{"use strict";n.d(e,{default:()=>r});const r={props:{excludeClickOutsideSelectors:{type:[String,Array],default:function(){return[]}}},computed:{clickOutsideOptions:function(){return{ignore:Array.isArray(this.excludeClickOutsideSelectors)?this.excludeClickOutsideSelectors:[this.excludeClickOutsideSelectors]}}}}},8136:()=>{"use strict"},334:(t,e,n)=>{"use strict";var r=n(2734);new(n.n(r)())({data:function(){return{isMobile:!1}},watch:{isMobile:function(t){this.$emit("changed",t)}},created:function(){window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleWindowResize)},methods:{handleWindowResize:function(){this.isMobile=document.documentElement.clientWidth<1024}}})},9917:(t,e,n)=>{"use strict";n(3330);__webpack_require__(/*! linkify-string */ "./node_modules/linkify-string/dist/linkify-string.es.js");__webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");__webpack_require__(/*! striptags */ "./node_modules/striptags/src/striptags.js");n(2734);var r="(?:^|\\s)",o="(?:[^a-z]|$)";new RegExp("".concat(r,"(@[a-zA-Z0-9_.@\\-']+)(").concat(o,")"),"gi"),new RegExp("".concat(r,"(@&quot;[a-zA-Z0-9 _.@\\-']+&quot;)(").concat(o,")"),"gi")},8789:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(7537),o=n.n(r),i=n(3645),a=n.n(i)()(o());a.push([t.id,'.material-design-icon[data-v-170aecfd]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.header-menu[data-v-170aecfd]{position:relative;width:var(--header-height);height:var(--header-height)}.header-menu__trigger[data-v-170aecfd]{display:flex;align-items:center;justify-content:center;width:var(--header-height);height:var(--header-height);margin:0;padding:0;cursor:pointer;opacity:.85;filter:none !important;color:var(--color-primary-text) !important}.header-menu--opened .header-menu__trigger[data-v-170aecfd],.header-menu__trigger[data-v-170aecfd]:hover,.header-menu__trigger[data-v-170aecfd]:focus,.header-menu__trigger[data-v-170aecfd]:active{opacity:1}.header-menu__trigger[data-v-170aecfd]:focus-visible{outline:none}.header-menu__wrapper[data-v-170aecfd]{position:fixed;z-index:2000;top:50px;right:0;box-sizing:border-box;margin:0 8px;padding:8px;border-radius:0 0 var(--border-radius) var(--border-radius);border-radius:var(--border-radius-large);background-color:var(--color-main-background);filter:drop-shadow(0 1px 5px var(--color-box-shadow))}.header-menu__carret[data-v-170aecfd]{position:absolute;z-index:2001;bottom:0;left:calc(50% - 10px);width:0;height:0;content:" ";pointer-events:none;border:10px solid rgba(0,0,0,0);border-bottom-color:var(--color-main-background)}.header-menu__content[data-v-170aecfd]{overflow:auto;width:350px;max-width:calc(100vw - 16px);min-height:66px;max-height:calc(100vh - 100px)}.header-menu__content[data-v-170aecfd] .empty-content{margin:12vh 10px}@media only screen and (max-width: 512px){.header-menu[data-v-170aecfd]{width:44px}.header-menu__trigger[data-v-170aecfd]{width:44px}}',"",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcHeaderMenu/NcHeaderMenu.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCFD,8BACC,iBAAA,CACA,0BAAA,CACA,2BAAA,CAEA,uCACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,0BAAA,CACA,2BAAA,CACA,QAAA,CACA,SAAA,CACA,cAAA,CACA,WAAA,CAGA,sBAAA,CACA,0CAAA,CAGD,oMAIC,SAAA,CAGD,qDACC,YAAA,CAGD,uCACC,cAAA,CACA,YAAA,CACA,QAAA,CACA,OAAA,CACA,qBAAA,CACA,YAAA,CACA,WAAA,CACA,2DAAA,CACA,wCAAA,CACA,6CAAA,CAEA,qDAAA,CAGD,sCACC,iBAAA,CACA,YAAA,CACA,QAAA,CACA,qBAAA,CACA,OAAA,CACA,QAAA,CACA,WAAA,CACA,mBAAA,CACA,+BAAA,CACA,gDAAA,CAGD,uCACC,aAAA,CACA,WAAA,CACA,4BAAA,CACA,eAAA,CACA,8BAAA,CACA,sDACC,gBAAA,CAKH,0CACC,8BACC,UCvDe,CDyDf,uCACC,UC1Dc,CAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n// content inner and outer margin\n// Also used for menu top-right positioning\n$externalMargin: 8px;\n\n.header-menu {\n\tposition: relative;\n\twidth: var(--header-height);\n\theight: var(--header-height);\n\n\t&__trigger {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: var(--header-height);\n\t\theight: var(--header-height);\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tcursor: pointer;\n\t\topacity: .85;\n\n\t\t// header is filled with primary or image background\n\t\tfilter: none !important;\n\t\tcolor: var(--color-primary-text) !important;\n\t}\n\n\t&--opened &__trigger,\n\t&__trigger:hover,\n\t&__trigger:focus,\n\t&__trigger:active {\n\t\topacity: 1;\n\t}\n\n\t&__trigger:focus-visible {\n\t\toutline: none;\n\t}\n\n\t&__wrapper {\n\t\tposition: fixed;\n\t\tz-index: 2000;\n\t\ttop: 50px;\n\t\tright: 0;\n\t\tbox-sizing: border-box;\n\t\tmargin: 0 $externalMargin;\n\t\tpadding: 8px;\n\t\tborder-radius: 0 0 var(--border-radius) var(--border-radius);\n\t\tborder-radius: var(--border-radius-large);\n\t\tbackground-color: var(--color-main-background);\n\n\t\tfilter: drop-shadow(0 1px 5px var(--color-box-shadow));\n\t}\n\n\t&__carret {\n\t\tposition: absolute;\n\t\tz-index: 2001; // Because __wrapper is 2000.\n\t\tbottom: 0;\n\t\tleft: calc(50% - 10px);\n\t\twidth: 0;\n\t\theight: 0;\n\t\tcontent: ' ';\n\t\tpointer-events: none;\n\t\tborder: 10px solid transparent;\n\t\tborder-bottom-color: var(--color-main-background);\n\t}\n\n\t&__content {\n\t\toverflow: auto;\n\t\twidth: 350px;\n\t\tmax-width: calc(100vw - 2 * $externalMargin);\n\t\tmin-height: calc(44px * 1.5);\n\t\tmax-height: calc(100vh - 50px * 2);\n\t\t:deep(.empty-content) {\n\t\t\tmargin: 12vh 10px;\n\t\t}\n\t}\n}\n\n@media only screen and (max-width: math.div($breakpoint-mobile, 2)) {\n\t.header-menu {\n\t\twidth: $clickable-area;\n\n\t\t&__trigger {\n\t\t\twidth: $clickable-area;\n\t\t}\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const c=a},6466:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(7537),o=n.n(r),i=n(3645),a=n.n(i)()(o());a.push([t.id,".material-design-icon[data-v-7dba3f6e]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.mention-bubble--primary .mention-bubble__content[data-v-7dba3f6e]{color:var(--color-primary-element-text);background-color:var(--color-primary-element)}.mention-bubble__wrapper[data-v-7dba3f6e]{max-width:150px;height:18px;vertical-align:text-bottom;display:inline-flex;align-items:center}.mention-bubble__content[data-v-7dba3f6e]{display:inline-flex;overflow:hidden;align-items:center;max-width:100%;height:20px;-webkit-user-select:none;user-select:none;padding-right:6px;padding-left:2px;border-radius:10px;background-color:var(--color-background-dark)}.mention-bubble__icon[data-v-7dba3f6e]{position:relative;width:16px;height:16px;border-radius:8px;background-color:var(--color-background-darker);background-repeat:no-repeat;background-position:center;background-size:12px}.mention-bubble__icon--with-avatar[data-v-7dba3f6e]{color:inherit;background-size:cover}.mention-bubble__title[data-v-7dba3f6e]{overflow:hidden;margin-left:2px;white-space:nowrap;text-overflow:ellipsis}.mention-bubble__title[data-v-7dba3f6e]::before{content:attr(title)}.mention-bubble__select[data-v-7dba3f6e]{position:absolute;z-index:-1;left:-1000px}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcRichContenteditable/NcMentionBubble.vue"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CAAA,mECCC,uCAAA,CACA,6CAAA,CAGD,0CACC,eAXiB,CAajB,WAAA,CACA,0BAAA,CACA,mBAAA,CACA,kBAAA,CAGD,0CACC,mBAAA,CACA,eAAA,CACA,kBAAA,CACA,cAAA,CACA,WAzBc,CA0Bd,wBAAA,CACA,gBAAA,CACA,iBAAA,CACA,gBA3Be,CA4Bf,kBAAA,CACA,6CAAA,CAGD,uCACC,iBAAA,CACA,UAjCmB,CAkCnB,WAlCmB,CAmCnB,iBAAA,CACA,+CAAA,CACA,2BAAA,CACA,0BAAA,CACA,oBAAA,CAEA,oDACC,aAAA,CACA,qBAAA,CAIF,wCACC,eAAA,CACA,eAlDe,CAmDf,kBAAA,CACA,sBAAA,CAEA,gDACC,mBAAA,CAKF,yCACC,iBAAA,CACA,UAAA,CACA,YAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n$bubble-height: 20px;\n$bubble-max-width: 150px;\n$bubble-padding: 2px;\n$bubble-avatar-size: $bubble-height - 2 * $bubble-padding;\n\n.mention-bubble {\n\t&--primary &__content {\n\t\tcolor: var(--color-primary-element-text);\n\t\tbackground-color: var(--color-primary-element);\n\t}\n\n\t&__wrapper {\n\t\tmax-width: $bubble-max-width;\n\t\t// Align with text\n\t\theight: $bubble-height - $bubble-padding;\n\t\tvertical-align: text-bottom;\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t}\n\n\t&__content {\n\t\tdisplay: inline-flex;\n\t\toverflow: hidden;\n\t\talign-items: center;\n\t\tmax-width: 100%;\n\t\theight: $bubble-height ;\n\t\t-webkit-user-select: none;\n\t\tuser-select: none;\n\t\tpadding-right: $bubble-padding * 3;\n\t\tpadding-left: $bubble-padding;\n\t\tborder-radius: math.div($bubble-height, 2);\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&__icon {\n\t\tposition: relative;\n\t\twidth: $bubble-avatar-size;\n\t\theight: $bubble-avatar-size;\n\t\tborder-radius: math.div($bubble-avatar-size, 2);\n\t\tbackground-color: var(--color-background-darker);\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center;\n\t\tbackground-size: $bubble-avatar-size - 2 * $bubble-padding;\n\n\t\t&--with-avatar {\n\t\t\tcolor: inherit;\n\t\t\tbackground-size: cover;\n\t\t}\n\t}\n\n\t&__title {\n\t\toverflow: hidden;\n\t\tmargin-left: $bubble-padding;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\t// Put title in ::before so it is not selectable\n\t\t&::before {\n\t\t\tcontent: attr(title);\n\t\t}\n\t}\n\n\t// Hide the mention id so it is selectable\n\t&__select {\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tleft: -1000px;\n\t}\n}\n\n"],sourceRoot:""}]);const c=a},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},7537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},3379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=n(d),A={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(A);else{var h=o(A,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(t,e){var n=e.domAPI(e);n.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var l=n(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},3330:(t,e,n)=>{"use strict";n.d(e,{Z:()=>g});var r=n(4262);const o={name:"NcMentionBubble",props:{id:{type:String,required:!0},title:{type:String,required:!0},icon:{type:String,required:!0},iconUrl:{type:[String,null],default:null},source:{type:String,required:!0},primary:{type:Boolean,default:!1}},computed:{avatarUrl:function(){return this.iconUrl?this.iconUrl:this.id&&"users"===this.source?this.getAvatarUrl(this.id,44):null},mentionText:function(){return this.id.includes(" ")||this.id.includes("/")?'@"'.concat(this.id,'"'):"@".concat(this.id)}},methods:{getAvatarUrl:function(t,e){return(0,r.generateUrl)("/avatar/{user}/{size}",{user:t,size:e})}}};var i=n(3379),a=n.n(i),c=n(7795),s=n.n(c),u=n(569),l=n.n(u),d=n(3565),p=n.n(d),A=n(9216),h=n.n(A),f=n(4589),v=n.n(f),b=n(6466),m={};m.styleTagTransform=v(),m.setAttributes=p(),m.insert=l().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=h();a()(b.Z,m);b.Z&&b.Z.locals&&b.Z.locals;const g=(0,n(1900).Z)(o,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"mention-bubble",class:{"mention-bubble--primary":t.primary},attrs:{contenteditable:"false"}},[e("span",{staticClass:"mention-bubble__wrapper"},[e("span",{staticClass:"mention-bubble__content"},[e("span",{staticClass:"mention-bubble__icon",class:[t.icon,"mention-bubble__icon--".concat(t.avatarUrl?"with-avatar":"")],style:t.avatarUrl?{backgroundImage:"url(".concat(t.avatarUrl,")")}:null}),t._v(" "),e("span",{staticClass:"mention-bubble__title",attrs:{role:"heading",title:t.title}})]),t._v(" "),e("span",{staticClass:"mention-bubble__select",attrs:{role:"none"}},[t._v(t._s(t.mentionText))])])])}),[],!1,null,"7dba3f6e",null).exports},156:()=>{},1900:(t,e,n)=>{"use strict";function r(t,e,n,r,o,i,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):o&&(s=c?function(){o.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(t,e){return s.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:t,options:u}}n.d(e,{Z:()=>r})},4262:t=>{"use strict";t.exports=__webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js")},2734:t=>{"use strict";t.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0;var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>B});const t=__webpack_require__(/*! @vueuse/components */ "./node_modules/@vueuse/components/index.cjs"),e=__webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");var o=n(6730);n(8136),n(334),n(9917);__webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.js"),__webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.cjs");__webpack_require__(/*! @nextcloud/capabilities */ "./node_modules/@nextcloud/capabilities/dist/index.js");n(4262);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function d(t,e,n,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new B(o||[]);return r(a,"_invoke",{value:w(t,n,c)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var A={};function h(){}function f(){}function v(){}var b={};l(b,c,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==e&&n.call(g,c)&&(b=g);var C=v.prototype=h.prototype=Object.create(b);function y(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(r,a,c,s){var u=p(t[r],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==i(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function w(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===A)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=p(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===A)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),A;var o=p(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,A;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,A):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,A)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=v,r(C,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:f,configurable:!0}),f.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},y(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(d(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(C),l(C,u,"Generator"),l(C,c,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,A):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),A},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),A}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;$(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),A}},t}function c(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}const s={name:"NcHeaderMenu",directives:{ClickOutside:t.vOnClickOutside},mixins:[o.default],props:{id:{type:String,required:!0},ariaLabel:{type:String,default:""},open:{type:Boolean,default:!1}},emits:["close","closed","open","opened","update:open","cancel"],data:function(){var t,e;return{focusTrap:null,opened:this.open,shortcutsDisabled:null===(t=window.OCP)||void 0===t||null===(t=t.Accessibility)||void 0===t||null===(e=t.disableKeyboardShortcuts)||void 0===e?void 0:e.call(t)}},computed:{clickOutsideConfig:function(){return[this.closeMenu,this.clickOutsideOptions]}},watch:{open:function(t){t?this.openMenu():this.closeMenu()}},mounted:function(){document.addEventListener("keydown",this.onKeyDown)},beforeDestroy:function(){document.removeEventListener("keydown",this.onKeyDown)},methods:{toggleMenu:function(){this.opened?this.closeMenu():this.openMenu()},closeMenu:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.opened=!1,this.$emit(e?"cancel":"close"),this.$emit("update:open",!1),this.clearFocusTrap(),this.$nextTick((function(){t.$emit("closed")}))},openMenu:function(){var t=this;this.opened=!0,this.$emit("open"),this.$emit("update:open",!0),this.$nextTick((function(){t.useFocusTrap(),t.$emit("opened")}))},onKeyDown:function(t){!this.shortcutsDisabled&&this.opened&&"Escape"===t.key&&(t.preventDefault(),this.closeMenu(!0))},useFocusTrap:function(){var t,n=this;return(t=a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.focusTrap){t.next=2;break}return t.abrupt("return");case 2:r=n.$refs.content,n.focusTrap=(0,e.createFocusTrap)(r,{allowOutsideClick:!0,trapStack:(Object.assign(window,{_nc_focus_trap:window._nc_focus_trap||[]}),window._nc_focus_trap),fallbackFocus:n.$refs.trigger}),n.focusTrap.activate();case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)}))})()},clearFocusTrap:function(){var t;null===(t=this.focusTrap)||void 0===t||t.deactivate(),this.focusTrap=null}}};var u=n(3379),l=n.n(u),d=n(7795),p=n.n(d),A=n(569),h=n.n(A),f=n(3565),v=n.n(f),b=n(9216),m=n.n(b),g=n(4589),C=n.n(g),y=n(8789),x={};x.styleTagTransform=C(),x.setAttributes=v(),x.insert=h().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=m();l()(y.Z,x);y.Z&&y.Z.locals&&y.Z.locals;var w=n(1900),_=n(156),k=n.n(_),$=(0,w.Z)(s,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickOutsideConfig,expression:"clickOutsideConfig"}],staticClass:"header-menu",class:{"header-menu--opened":t.opened},attrs:{id:t.id}},[e("a",{ref:"trigger",staticClass:"header-menu__trigger",attrs:{href:"#","aria-label":t.ariaLabel,"aria-controls":"header-menu-".concat(t.id),"aria-expanded":t.opened.toString()},on:{click:function(e){return e.preventDefault(),t.toggleMenu.apply(null,arguments)}}},[t._t("trigger")],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.opened,expression:"opened"}],staticClass:"header-menu__carret"}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.opened,expression:"opened"}],staticClass:"header-menu__wrapper",attrs:{id:"header-menu-".concat(t.id),role:"menu"}},[e("div",{ref:"content",staticClass:"header-menu__content"},[t._t("default")],2)])])}),[],!1,null,"170aecfd",null);"function"==typeof k()&&k()($);const B=$.exports})(),r})()));
//# sourceMappingURL=NcHeaderMenu.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcHighlight.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcHighlight.js ***!
  \********************************************************************/
/***/ ((module) => {

/*! For license information please see NcHighlight.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={1336:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=function(t,e){for(var r=[],n=0,o=t.toLowerCase().indexOf(e.toLowerCase(),n),i=0;o>-1&&i<t.length;)n=o+e.length,r.push({start:o,end:n}),o=t.toLowerCase().indexOf(e.toLowerCase(),n),i++;return r}},6274:()=>{},1900:(t,e,r)=>{"use strict";function n(t,e,r,n,o,i,s,u){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=a):o&&(a=u?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(c.functional){c._injectStyles=a;var l=c.render;c.render=function(t,e){return a.call(e),l(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,a):[a]}return{exports:t,options:c}}r.d(e,{Z:()=>n})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>f});var t=r(1336);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}const u={name:"NcHighlight",props:{text:{type:String,default:""},search:{type:String,default:""},highlight:{type:Array,default:function(){return[]}}},computed:{ranges:function(){var e=this,r=[];return this.search||0!==this.highlight.length?(r=this.highlight.length>0?this.highlight:(0,t.Z)(this.text,this.search),r.forEach((function(t,e){t.end<t.start&&(r[e]={start:t.end,end:t.start})})),r=r.reduce((function(t,r){return r.start<e.text.length&&r.end>0&&t.push({start:r.start<0?0:r.start,end:r.end>e.text.length?e.text.length:r.end}),t}),[]),r.sort((function(t,e){return t.start-e.start})),r=r.reduce((function(t,e){if(t.length){var r=t.length-1;t[r].end>=e.start?t[r]={start:t[r].start,end:Math.max(t[r].end,e.end)}:t.push(e)}else t.push(e);return t}),[]),r):r},chunks:function(){if(0===this.ranges.length)return[{start:0,end:this.text.length,highlight:!1,text:this.text}];for(var t=[],e=0,r=0;e<this.text.length;){var n=this.ranges[r];n.start!==e?(t.push({start:e,end:n.start,highlight:!1,text:this.text.slice(e,n.start)}),e=n.start):(t.push(i(i({},n),{},{highlight:!0,text:this.text.slice(n.start,n.end)})),r++,e=n.end,r>=this.ranges.length&&e<this.text.length&&(t.push({start:e,end:this.text.length,highlight:!1,text:this.text.slice(e)}),e=this.text.length))}return t}},render:function(t){return this.ranges.length?t("span",{},this.chunks.map((function(e){return e.highlight?t("strong",{},e.text):e.text}))):t("span",{},this.text)}};var a=r(1900),c=r(6274),l=r.n(c),h=(0,a.Z)(u,undefined,undefined,!1,null,null,null);"function"==typeof l()&&l()(h);const f=h.exports})(),n})()));
//# sourceMappingURL=NcHighlight.js.map

/***/ }),

/***/ "./core/src/services/UnifiedSearchService.js":
/*!***************************************************!*\
  !*** ./core/src/services/UnifiedSearchService.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLimit: () => (/* binding */ defaultLimit),
/* harmony export */   enableLiveSearch: () => (/* binding */ enableLiveSearch),
/* harmony export */   getTypes: () => (/* binding */ getTypes),
/* harmony export */   minSearchLength: () => (/* binding */ minSearchLength),
/* harmony export */   regexFilterIn: () => (/* binding */ regexFilterIn),
/* harmony export */   regexFilterNot: () => (/* binding */ regexFilterNot),
/* harmony export */   search: () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/**
 * @copyright 2020, John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author Christoph Wurst <christoph@winzerhof-wurst.at>
 * @author Daniel Calviño Sánchez <danxuliu@gmail.com>
 * @author Joas Schilling <coding@schilljs.com>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




const defaultLimit = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('unified-search', 'limit-default');
const minSearchLength = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('unified-search', 'min-search-length', 1);
const enableLiveSearch = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('unified-search', 'live-search', true);
const regexFilterIn = /(^|\s)in:([a-z_-]+)/ig;
const regexFilterNot = /(^|\s)-in:([a-z_-]+)/ig;

/**
 * Create a cancel token
 *
 * @return {import('axios').CancelTokenSource}
 */
const createCancelToken = () => _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].CancelToken.source();

/**
 * Get the list of available search providers
 *
 * @return {Promise<Array>}
 */
async function getTypes() {
  try {
    const {
      data
    } = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('search/providers'), {
      params: {
        // Sending which location we're currently at
        from: window.location.pathname.replace('/index.php', '') + window.location.search
      }
    });
    if ('ocs' in data && 'data' in data.ocs && Array.isArray(data.ocs.data) && data.ocs.data.length > 0) {
      // Providers are sorted by the api based on their order key
      return data.ocs.data;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}

/**
 * Get the list of available search providers
 *
 * @param {object} options destructuring object
 * @param {string} options.type the type to search
 * @param {string} options.query the search
 * @param {number|string|undefined} options.cursor the offset for paginated searches
 * @return {object} {request: Promise, cancel: Promise}
 */
function search(_ref) {
  let {
    type,
    query,
    cursor
  } = _ref;
  /**
   * Generate an axios cancel token
   */
  const cancelToken = createCancelToken();
  const request = async () => _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('search/providers/{type}/search', {
    type
  }), {
    cancelToken: cancelToken.token,
    params: {
      term: query,
      cursor,
      // Sending which location we're currently at
      from: window.location.pathname.replace('/index.php', '') + window.location.search
    }
  });
  return {
    request,
    cancel: cancelToken.cancel
  };
}

/***/ }),

/***/ "./core/src/unified-search.js":
/*!************************************!*\
  !*** ./core/src/unified-search.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _views_UnifiedSearch_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/UnifiedSearch.vue */ "./core/src/views/UnifiedSearch.vue");
/**
 * @copyright Copyright (c) 2020 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */







// eslint-disable-next-line camelcase
__webpack_require__.nc = btoa((0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_1__.getRequestToken)());
const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('unified-search').detectUser().build();
vue__WEBPACK_IMPORTED_MODULE_4__["default"].mixin({
  data() {
    return {
      logger
    };
  },
  methods: {
    t: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translate,
    n: _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_2__.translatePlural
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  el: '#unified-search',
  // eslint-disable-next-line vue/match-component-file-name
  name: 'UnifiedSearchRoot',
  render: h => h(_views_UnifiedSearch_vue__WEBPACK_IMPORTED_MODULE_3__["default"])
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_vue_dist_Components_NcHighlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcHighlight.js */ "./node_modules/@nextcloud/vue/dist/Components/NcHighlight.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcHighlight_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcHighlight_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SearchResult',
  components: {
    NcHighlight: (_nextcloud_vue_dist_Components_NcHighlight_js__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    thumbnailUrl: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    subline: {
      type: String,
      default: null
    },
    resourceUrl: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    },
    query: {
      type: String,
      default: ''
    },
    /**
     * Only used for the first result as a visual feedback
     * so we can keep the search input focused but pressing
     * enter still opens the first result
     */
    focused: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasValidThumbnail: this.thumbnailUrl && this.thumbnailUrl.trim() !== '',
      loaded: false
    };
  },
  computed: {
    isIconUrl() {
      // If we're facing an absolute url
      if (this.icon.startsWith('/')) {
        return true;
      }

      // Otherwise, let's check if this is a valid url
      try {
        // eslint-disable-next-line no-new
        new URL(this.icon);
      } catch {
        return false;
      }
      return true;
    }
  },
  watch: {
    // Make sure to reset state on change even when vue recycle the component
    thumbnailUrl() {
      this.hasValidThumbnail = this.thumbnailUrl && this.thumbnailUrl.trim() !== '';
      this.loaded = false;
    }
  },
  methods: {
    reEmitEvent(e) {
      this.$emit(e.type, e);
    },
    /**
     * If the image fails to load, fallback to iconClass
     */
    onError() {
      this.hasValidThumbnail = false;
    },
    onLoad() {
      this.loaded = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SearchResultPlaceholders',
  data() {
    return {
      light: null,
      dark: null
    };
  },
  mounted() {
    const styles = getComputedStyle(document.documentElement);
    this.dark = styles.getPropertyValue('--color-placeholder-dark');
    this.light = styles.getPropertyValue('--color-placeholder-light');
  },
  methods: {
    randWidth() {
      return Math.floor(Math.random() * 20) + 30;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/event-bus */ "./node_modules/@nextcloud/event-bus/dist/index.mjs");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcEmptyContent.js */ "./node_modules/@nextcloud/vue/dist/Components/NcEmptyContent.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcHeaderMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcHeaderMenu.js */ "./node_modules/@nextcloud/vue/dist/Components/NcHeaderMenu.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcHeaderMenu_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcHeaderMenu_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_material_design_icons_Magnify_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-material-design-icons/Magnify.vue */ "./node_modules/vue-material-design-icons/Magnify.vue");
/* harmony import */ var _components_UnifiedSearch_SearchResult_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UnifiedSearch/SearchResult.vue */ "./core/src/components/UnifiedSearch/SearchResult.vue");
/* harmony import */ var _components_UnifiedSearch_SearchResultPlaceholders_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UnifiedSearch/SearchResultPlaceholders.vue */ "./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue");
/* harmony import */ var _services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/UnifiedSearchService.js */ "./core/src/services/UnifiedSearchService.js");











const REQUEST_FAILED = 0;
const REQUEST_OK = 1;
const REQUEST_CANCELED = 2;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UnifiedSearch',
  components: {
    Magnify: vue_material_design_icons_Magnify_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    NcActionButton: (_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcActions: (_nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_4___default()),
    NcEmptyContent: (_nextcloud_vue_dist_Components_NcEmptyContent_js__WEBPACK_IMPORTED_MODULE_5___default()),
    NcHeaderMenu: (_nextcloud_vue_dist_Components_NcHeaderMenu_js__WEBPACK_IMPORTED_MODULE_6___default()),
    SearchResult: _components_UnifiedSearch_SearchResult_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    SearchResultPlaceholders: _components_UnifiedSearch_SearchResultPlaceholders_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data() {
    return {
      types: [],
      // Cursors per types
      cursors: {},
      // Various search limits per types
      limits: {},
      // Loading types
      loading: {},
      // Reached search types
      reached: {},
      // Pending cancellable requests
      requests: [],
      // List of all results
      results: {},
      query: '',
      focused: null,
      triggered: false,
      defaultLimit: _services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.defaultLimit,
      minSearchLength: _services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.minSearchLength,
      enableLiveSearch: _services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.enableLiveSearch,
      open: false
    };
  },
  computed: {
    typesIDs() {
      return this.types.map(type => type.id);
    },
    typesNames() {
      return this.types.map(type => type.name);
    },
    typesMap() {
      return this.types.reduce((prev, curr) => {
        prev[curr.id] = curr.name;
        return prev;
      }, {});
    },
    ariaLabel() {
      return t('core', 'Search');
    },
    /**
     * Is there any result to display
     *
     * @return {boolean}
     */
    hasResults() {
      return Object.keys(this.results).length !== 0;
    },
    /**
     * Return ordered results
     *
     * @return {Array}
     */
    orderedResults() {
      return this.typesIDs.filter(type => type in this.results).map(type => ({
        type,
        list: this.results[type]
      }));
    },
    /**
     * Available filters
     * We only show filters that are available on the results
     *
     * @return {string[]}
     */
    availableFilters() {
      return Object.keys(this.results);
    },
    /**
     * Applied filters
     *
     * @return {string[]}
     */
    usedFiltersIn() {
      let match;
      const filters = [];
      while ((match = _services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.regexFilterIn.exec(this.query)) !== null) {
        filters.push(match[2]);
      }
      return filters;
    },
    /**
     * Applied anti filters
     *
     * @return {string[]}
     */
    usedFiltersNot() {
      let match;
      const filters = [];
      while ((match = _services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.regexFilterNot.exec(this.query)) !== null) {
        filters.push(match[2]);
      }
      return filters;
    },
    /**
     * Valid query empty content title
     *
     * @return {string}
     */
    validQueryTitle() {
      return this.triggered ? t('core', 'No results for {query}', {
        query: this.query
      }) : t('core', 'Press Enter to start searching');
    },
    /**
     * Short query empty content description
     *
     * @return {string}
     */
    shortQueryDescription() {
      if (!this.isShortQuery) {
        return '';
      }
      return n('core', 'Please enter {minSearchLength} character or more to search', 'Please enter {minSearchLength} characters  or more to search', this.minSearchLength, {
        minSearchLength: this.minSearchLength
      });
    },
    /**
     * Is the current search too short
     *
     * @return {boolean}
     */
    isShortQuery() {
      return this.query && this.query.trim().length < _services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.minSearchLength;
    },
    /**
     * Is the current search valid
     *
     * @return {boolean}
     */
    isValidQuery() {
      return this.query && this.query.trim() !== '' && !this.isShortQuery;
    },
    /**
     * Have we reached the end of all types searches
     *
     * @return {boolean}
     */
    isDoneSearching() {
      return Object.values(this.reached).every(state => state === false);
    },
    /**
     * Is there any search in progress
     *
     * @return {boolean}
     */
    isLoading() {
      return Object.values(this.loading).some(state => state === true);
    }
  },
  async created() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.subscribe)('files:navigation:changed', this.onNavigationChange);
    this.types = await (0,_services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.getTypes)();
    this.logger.debug('Unified Search initialized with the following providers', this.types);
  },
  beforeDestroy() {
    (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.unsubscribe)('files:navigation:changed', this.onNavigationChange);
  },
  mounted() {
    if (OCP.Accessibility.disableKeyboardShortcuts()) {
      return;
    }
    document.addEventListener('keydown', event => {
      // if not already opened, allows us to trigger default browser on second keydown
      if (event.ctrlKey && event.key === 'f' && !this.open) {
        event.preventDefault();
        this.open = true;
      }

      // https://www.w3.org/WAI/GL/wiki/Using_ARIA_menus
      if (this.open) {
        // If arrow down, focus next result
        if (event.key === 'ArrowDown') {
          this.focusNext(event);
        }

        // If arrow up, focus prev result
        if (event.key === 'ArrowUp') {
          this.focusPrev(event);
        }
      }
    });
  },
  methods: {
    async onOpen() {
      // Update types list in the background
      this.types = await (0,_services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.getTypes)();
    },
    onClose() {
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('nextcloud:unified-search.close');
    },
    onNavigationChange() {
      this.$el.querySelector('form[role="search"]').reset();
    },
    /**
     * Reset the search state
     */
    onReset() {
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('nextcloud:unified-search.reset');
      this.logger.debug('Search reset');
      this.query = '';
      this.resetState();
      this.focusInput();
    },
    async resetState() {
      this.cursors = {};
      this.limits = {};
      this.reached = {};
      this.results = {};
      this.focused = null;
      this.triggered = false;
      await this.cancelPendingRequests();
    },
    /**
     * Cancel any ongoing searches
     */
    async cancelPendingRequests() {
      // Cloning so we can keep processing other requests
      const requests = this.requests.slice(0);
      this.requests = [];

      // Cancel all pending requests
      await Promise.all(requests.map(cancel => cancel()));
    },
    /**
     * Focus the search input on next tick
     */
    focusInput() {
      this.$nextTick(() => {
        this.$refs.input.focus();
        this.$refs.input.select();
      });
    },
    /**
     * If we have results already, open first one
     * If not, trigger the search again
     */
    onInputEnter() {
      if (this.hasResults) {
        const results = this.getResultsList();
        results[0].click();
        return;
      }
      this.onInput();
    },
    /**
     * Start searching on input
     */
    async onInput() {
      // emit the search query
      (0,_nextcloud_event_bus__WEBPACK_IMPORTED_MODULE_1__.emit)('nextcloud:unified-search.search', {
        query: this.query
      });

      // Do not search if not long enough
      if (this.query.trim() === '' || this.isShortQuery) {
        for (const type of this.typesIDs) {
          this.$delete(this.results, type);
        }
        return;
      }
      let types = this.typesIDs;
      let query = this.query;

      // Filter out types
      if (this.usedFiltersNot.length > 0) {
        types = this.typesIDs.filter(type => this.usedFiltersNot.indexOf(type) === -1);
      }

      // Only use those filters if any and check if they are valid
      if (this.usedFiltersIn.length > 0) {
        types = this.typesIDs.filter(type => this.usedFiltersIn.indexOf(type) > -1);
      }

      // Remove any filters from the query
      query = query.replace(_services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.regexFilterIn, '').replace(_services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.regexFilterNot, '');

      // Reset search if the query changed
      await this.resetState();
      this.triggered = true;
      if (!types.length) {
        // no results since no types were selected
        this.logger.error('No types to search in');
        return;
      }
      this.$set(this.loading, 'all', true);
      this.logger.debug("Searching ".concat(query, " in"), types);
      Promise.all(types.map(async type => {
        try {
          // Init cancellable request
          const {
            request,
            cancel
          } = (0,_services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.search)({
            type,
            query
          });
          this.requests.push(cancel);

          // Fetch results
          const {
            data
          } = await request();

          // Process results
          if (data.ocs.data.entries.length > 0) {
            this.$set(this.results, type, data.ocs.data.entries);
          } else {
            this.$delete(this.results, type);
          }

          // Save cursor if any
          if (data.ocs.data.cursor) {
            this.$set(this.cursors, type, data.ocs.data.cursor);
          } else if (!data.ocs.data.isPaginated) {
            // If no cursor and no pagination, we save the default amount
            // provided by server's initial state `defaultLimit`
            this.$set(this.limits, type, this.defaultLimit);
          }

          // Check if we reached end of pagination
          if (data.ocs.data.entries.length < this.defaultLimit) {
            this.$set(this.reached, type, true);
          }

          // If none already focused, focus the first rendered result
          if (this.focused === null) {
            this.focused = 0;
          }
          return REQUEST_OK;
        } catch (error) {
          this.$delete(this.results, type);

          // If this is not a cancelled throw
          if (error.response && error.response.status) {
            this.logger.error("Error searching for ".concat(this.typesMap[type]), error);
            (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_2__.showError)(this.t('core', 'An error occurred while searching for {type}', {
              type: this.typesMap[type]
            }));
            return REQUEST_FAILED;
          }
          return REQUEST_CANCELED;
        }
      })).then(results => {
        // Do not declare loading finished if the request have been cancelled
        // This means another search was triggered and we're therefore still loading
        if (results.some(result => result === REQUEST_CANCELED)) {
          return;
        }
        // We finished all searches
        this.loading = {};
      });
    },
    onInputDebounced: _services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.enableLiveSearch ? debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
      this.onInput(e);
    }, 500) : function () {
      this.triggered = false;
    },
    /**
     * Load more results for the provided type
     *
     * @param {string} type type
     */
    async loadMore(type) {
      // If already loading, ignore
      if (this.loading[type]) {
        return;
      }
      if (this.cursors[type]) {
        // Init cancellable request
        const {
          request,
          cancel
        } = (0,_services_UnifiedSearchService_js__WEBPACK_IMPORTED_MODULE_10__.search)({
          type,
          query: this.query,
          cursor: this.cursors[type]
        });
        this.requests.push(cancel);

        // Fetch results
        const {
          data
        } = await request();

        // Save cursor if any
        if (data.ocs.data.cursor) {
          this.$set(this.cursors, type, data.ocs.data.cursor);
        }

        // Process results
        if (data.ocs.data.entries.length > 0) {
          this.results[type].push(...data.ocs.data.entries);
        }

        // Check if we reached end of pagination
        if (data.ocs.data.entries.length < this.defaultLimit) {
          this.$set(this.reached, type, true);
        }
      } else {
        // If no cursor, we might have all the results already,
        // let's fake pagination and show the next xxx entries
        if (this.limits[type] && this.limits[type] >= 0) {
          this.limits[type] += this.defaultLimit;

          // Check if we reached end of pagination
          if (this.limits[type] >= this.results[type].length) {
            this.$set(this.reached, type, true);
          }
        }
      }

      // Focus result after render
      if (this.focused !== null) {
        this.$nextTick(() => {
          this.focusIndex(this.focused);
        });
      }
    },
    /**
     * Return a subset of the array if the search provider
     * doesn't supports pagination
     *
     * @param {Array} list the results
     * @param {string} type the type
     * @return {Array}
     */
    limitIfAny(list, type) {
      if (type in this.limits) {
        return list.slice(0, this.limits[type]);
      }
      return list;
    },
    getResultsList() {
      return this.$el.querySelectorAll('.unified-search__results .unified-search__result');
    },
    /**
     * Focus the first result if any
     *
     * @param {Event} event the keydown event
     */
    focusFirst(event) {
      const results = this.getResultsList();
      if (results && results.length > 0) {
        if (event) {
          event.preventDefault();
        }
        this.focused = 0;
        this.focusIndex(this.focused);
      }
    },
    /**
     * Focus the next result if any
     *
     * @param {Event} event the keydown event
     */
    focusNext(event) {
      if (this.focused === null) {
        this.focusFirst(event);
        return;
      }
      const results = this.getResultsList();
      // If we're not focusing the last, focus the next one
      if (results && results.length > 0 && this.focused + 1 < results.length) {
        event.preventDefault();
        this.focused++;
        this.focusIndex(this.focused);
      }
    },
    /**
     * Focus the previous result if any
     *
     * @param {Event} event the keydown event
     */
    focusPrev(event) {
      if (this.focused === null) {
        this.focusFirst(event);
        return;
      }
      const results = this.getResultsList();
      // If we're not focusing the first, focus the previous one
      if (results && results.length > 0 && this.focused > 0) {
        event.preventDefault();
        this.focused--;
        this.focusIndex(this.focused);
      }
    },
    /**
     * Focus the specified result index if it exists
     *
     * @param {number} index the result index
     */
    focusIndex(index) {
      const results = this.getResultsList();
      if (results && results[index]) {
        results[index].focus();
      }
    },
    /**
     * Set the current focused element based on the target
     *
     * @param {Event} event the focus event
     */
    setFocusedIndex(event) {
      const entry = event.target;
      const results = this.getResultsList();
      const index = [...results].findIndex(search => search === entry);
      if (index > -1) {
        // let's not use focusIndex as the entry is already focused
        this.focused = index;
      }
    },
    onClickFilter(filter) {
      this.query = "".concat(this.query, " ").concat(filter).replace(/ {2}/g, ' ').trim();
      this.onInput();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=template&id=69f8eb86&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=template&id=69f8eb86&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    staticClass: "unified-search__result",
    class: {
      "unified-search__result--focused": _vm.focused
    },
    attrs: {
      href: _vm.resourceUrl || "#"
    },
    on: {
      click: _vm.reEmitEvent,
      focus: _vm.reEmitEvent
    }
  }, [_c("div", {
    staticClass: "unified-search__result-icon",
    class: {
      "unified-search__result-icon--rounded": _vm.rounded,
      "unified-search__result-icon--no-preview": !_vm.hasValidThumbnail && !_vm.loaded,
      "unified-search__result-icon--with-thumbnail": _vm.hasValidThumbnail && _vm.loaded,
      [_vm.icon]: !_vm.loaded && !_vm.isIconUrl
    },
    style: {
      backgroundImage: _vm.isIconUrl ? "url(".concat(_vm.icon, ")") : ""
    }
  }, [_vm.hasValidThumbnail ? _c("img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loaded,
      expression: "loaded"
    }],
    attrs: {
      src: _vm.thumbnailUrl,
      alt: ""
    },
    on: {
      error: _vm.onError,
      load: _vm.onLoad
    }
  }) : _vm._e()]), _vm._v(" "), _c("span", {
    staticClass: "unified-search__result-content"
  }, [_c("span", {
    staticClass: "unified-search__result-line-one",
    attrs: {
      title: _vm.title
    }
  }, [_c("NcHighlight", {
    attrs: {
      text: _vm.title,
      search: _vm.query
    }
  })], 1), _vm._v(" "), _vm.subline ? _c("span", {
    staticClass: "unified-search__result-line-two",
    attrs: {
      title: _vm.subline
    }
  }, [_vm._v(_vm._s(_vm.subline))]) : _vm._e()])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=template&id=ff2497f4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=template&id=ff2497f4&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("ul", [_c("svg", {
    staticClass: "unified-search__result-placeholder-gradient"
  }, [_c("defs", [_c("linearGradient", {
    attrs: {
      id: "unified-search__result-placeholder-gradient"
    }
  }, [_c("stop", {
    attrs: {
      offset: "0%",
      "stop-color": _vm.light
    }
  }, [_c("animate", {
    attrs: {
      attributeName: "stop-color",
      values: "".concat(_vm.light, "; ").concat(_vm.light, "; ").concat(_vm.dark, "; ").concat(_vm.dark, "; ").concat(_vm.light),
      dur: "2s",
      repeatCount: "indefinite"
    }
  })]), _vm._v(" "), _c("stop", {
    attrs: {
      offset: "100%",
      "stop-color": _vm.dark
    }
  }, [_c("animate", {
    attrs: {
      attributeName: "stop-color",
      values: "".concat(_vm.dark, "; ").concat(_vm.light, "; ").concat(_vm.light, "; ").concat(_vm.dark, "; ").concat(_vm.dark),
      dur: "2s",
      repeatCount: "indefinite"
    }
  })])], 1)], 1)]), _vm._v(" "), _vm._l([1, 2, 3], function (placeholder) {
    return _c("li", {
      key: placeholder
    }, [_c("svg", {
      staticClass: "unified-search__result-placeholder",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "url(#unified-search__result-placeholder-gradient)"
      }
    }, [_c("rect", {
      staticClass: "unified-search__result-placeholder-icon"
    }), _vm._v(" "), _c("rect", {
      staticClass: "unified-search__result-placeholder-line-one"
    }), _vm._v(" "), _c("rect", {
      staticClass: "unified-search__result-placeholder-line-two",
      style: {
        width: "calc(".concat(_vm.randWidth(), "%)")
      }
    })])]);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=template&id=d79c2f68&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=template&id=d79c2f68&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("NcHeaderMenu", {
    staticClass: "unified-search",
    attrs: {
      id: "unified-search",
      "exclude-click-outside-selectors": [".popover"],
      open: _vm.open,
      "aria-label": _vm.ariaLabel
    },
    on: {
      "update:open": function ($event) {
        _vm.open = $event;
      },
      open: _vm.onOpen,
      close: _vm.onClose
    },
    scopedSlots: _vm._u([{
      key: "trigger",
      fn: function () {
        return [_c("Magnify", {
          staticClass: "unified-search__trigger",
          attrs: {
            size: 22 /* fit better next to other 20px icons */
          }
        })];
      },

      proxy: true
    }])
  }, [_vm._v(" "), _c("div", {
    staticClass: "unified-search__input-wrapper"
  }, [_c("label", {
    attrs: {
      for: "unified-search__input"
    }
  }, [_vm._v(_vm._s(_vm.ariaLabel))]), _vm._v(" "), _c("div", {
    staticClass: "unified-search__input-row"
  }, [_c("form", {
    staticClass: "unified-search__form",
    class: {
      "icon-loading-small": _vm.isLoading
    },
    attrs: {
      role: "search"
    },
    on: {
      submit: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.onInputEnter.apply(null, arguments);
      },
      reset: function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.onReset.apply(null, arguments);
      }
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.query,
      expression: "query"
    }],
    ref: "input",
    staticClass: "unified-search__form-input",
    class: {
      "unified-search__form-input--with-reset": !!_vm.query
    },
    attrs: {
      id: "unified-search__input",
      type: "search",
      placeholder: _vm.t("core", "Search {types} …", {
        types: _vm.typesNames.join(", ")
      }),
      "aria-describedby": "unified-search-desc"
    },
    domProps: {
      value: _vm.query
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.query = $event.target.value;
      }, _vm.onInputDebounced],
      keypress: function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.onInputEnter.apply(null, arguments);
      }
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "hidden-visually",
    attrs: {
      id: "unified-search-desc"
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("core", "Search starts once you start typing and results may be reached with the arrow keys")) + "\n\t\t\t\t")]), _vm._v(" "), !!_vm.query && !_vm.isLoading ? _c("input", {
    staticClass: "unified-search__form-reset icon-close",
    attrs: {
      type: "reset",
      "aria-label": _vm.t("core", "Reset search"),
      value: ""
    }
  }) : _vm._e(), _vm._v(" "), !!_vm.query && !_vm.isLoading && !_vm.enableLiveSearch ? _c("input", {
    staticClass: "unified-search__form-submit icon-confirm",
    attrs: {
      type: "submit",
      "aria-label": _vm.t("core", "Start search"),
      value: ""
    }
  }) : _vm._e()]), _vm._v(" "), _vm.availableFilters.length > 1 ? _c("NcActions", {
    staticClass: "unified-search__filters",
    attrs: {
      placement: "bottom",
      container: ".unified-search__input-wrapper"
    }
  }, _vm._l(_vm.availableFilters, function (filter) {
    return _c("NcActionButton", {
      key: filter,
      attrs: {
        icon: "icon-filter",
        title: _vm.t("core", "Search for {name} only", {
          name: _vm.typesMap[filter]
        })
      },
      on: {
        click: function ($event) {
          $event.stopPropagation();
          return _vm.onClickFilter("in:".concat(filter));
        }
      }
    }, [_vm._v("\n\t\t\t\t\t" + _vm._s("in:".concat(filter)) + "\n\t\t\t\t")]);
  }), 1) : _vm._e()], 1)]), _vm._v(" "), !_vm.hasResults ? [_vm.isLoading ? _c("SearchResultPlaceholders") : _vm.isValidQuery ? _c("NcEmptyContent", {
    attrs: {
      title: _vm.validQueryTitle
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Magnify")];
      },
      proxy: true
    }], null, false, 931131664)
  }) : !_vm.isLoading || _vm.isShortQuery ? _c("NcEmptyContent", {
    attrs: {
      title: _vm.t("core", "Start typing to search"),
      description: _vm.shortQueryDescription
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Magnify")];
      },
      proxy: true
    }], null, false, 931131664)
  }) : _vm._e()] : _vm._l(_vm.orderedResults, function (_ref, typesIndex) {
    let {
      list,
      type
    } = _ref;
    return _c("ul", {
      key: type,
      staticClass: "unified-search__results",
      class: "unified-search__results-".concat(type),
      attrs: {
        "aria-label": _vm.typesMap[type]
      }
    }, [_c("h2", {
      staticClass: "unified-search__results-header"
    }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.typesMap[type]) + "\n\t\t\t")]), _vm._v(" "), _vm._l(_vm.limitIfAny(list, type), function (result, index) {
      return _c("li", {
        key: result.resourceUrl
      }, [_c("SearchResult", _vm._b({
        attrs: {
          query: _vm.query,
          focused: _vm.focused === 0 && typesIndex === 0 && index === 0
        },
        on: {
          focus: _vm.setFocusedIndex
        }
      }, "SearchResult", result, false))], 1);
    }), _vm._v(" "), _c("li", [!_vm.reached[type] ? _c("SearchResult", {
      staticClass: "unified-search__result-more",
      attrs: {
        title: _vm.loading[type] ? _vm.t("core", "Loading more results …") : _vm.t("core", "Load more results"),
        "icon-class": _vm.loading[type] ? "icon-loading-small" : ""
      },
      on: {
        click: function ($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.loadMore(type);
        },
        focus: _vm.setFocusedIndex
      }
    }) : _vm._e()], 1)], 2);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.unified-search__result[data-v-69f8eb86] {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: var(--border-radius-large) !important;
}
.unified-search__result--focused[data-v-69f8eb86] {
  background-color: var(--color-background-hover);
}
.unified-search__result[data-v-69f8eb86]:active, .unified-search__result[data-v-69f8eb86]:hover, .unified-search__result[data-v-69f8eb86]:focus {
  background-color: var(--color-background-hover);
  border: 2px solid var(--color-border-maxcontrast);
}
.unified-search__result *[data-v-69f8eb86] {
  cursor: pointer;
}
.unified-search__result-icon[data-v-69f8eb86] {
  overflow: hidden;
  width: 44px;
  height: 44px;
  border-radius: var(--border-radius);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 32px;
}
.unified-search__result-icon--rounded[data-v-69f8eb86] {
  border-radius: 22px;
}
.unified-search__result-icon--no-preview[data-v-69f8eb86] {
  background-size: 32px;
}
.unified-search__result-icon--with-thumbnail[data-v-69f8eb86] {
  background-size: cover;
}
.unified-search__result-icon--with-thumbnail[data-v-69f8eb86]:not(.unified-search__result-icon--rounded) {
  max-width: 42px;
  max-height: 42px;
  border: 1px solid var(--color-border);
}
.unified-search__result-icon img[data-v-69f8eb86] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.unified-search__result-icon[data-v-69f8eb86], .unified-search__result-actions[data-v-69f8eb86] {
  flex: 0 0 44px;
}
.unified-search__result-content[data-v-69f8eb86] {
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  flex-wrap: wrap;
  min-width: 0;
  padding-left: 10px;
}
.unified-search__result-line-one[data-v-69f8eb86], .unified-search__result-line-two[data-v-69f8eb86] {
  overflow: hidden;
  flex: 1 1 100%;
  margin: 1px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: inherit;
  font-size: inherit;
}
.unified-search__result-line-two[data-v-69f8eb86] {
  opacity: 0.7;
  font-size: var(--default-font-size);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.unified-search__result-placeholder-gradient[data-v-ff2497f4] {
  position: fixed;
  height: 0;
  width: 0;
  z-index: -1;
}
.unified-search__result-placeholder[data-v-ff2497f4] {
  width: calc(100% - 2 * 10px);
  height: 44px;
  margin: 10px;
}
.unified-search__result-placeholder-icon[data-v-ff2497f4] {
  width: 44px;
  height: 44px;
  rx: var(--border-radius);
  ry: var(--border-radius);
}
.unified-search__result-placeholder-line-one[data-v-ff2497f4], .unified-search__result-placeholder-line-two[data-v-ff2497f4] {
  width: calc(100% - 54px);
  height: 1em;
  x: 54px;
}
.unified-search__result-placeholder-line-one[data-v-ff2497f4] {
  y: 5px;
}
.unified-search__result-placeholder-line-two[data-v-ff2497f4] {
  y: 25px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.unified-search__input-wrapper[data-v-d79c2f68] {
  position: sticky;
  z-index: 2;
  top: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: var(--color-main-background);
}
.unified-search__input-wrapper label[for=unified-search__input][data-v-d79c2f68] {
  align-self: flex-start;
  font-weight: bold;
  font-size: 19px;
  margin-left: 13px;
}
.unified-search__form-input[data-v-d79c2f68] {
  margin: 0 !important;
}
.unified-search__input-row[data-v-d79c2f68] {
  display: flex;
  width: 100%;
  align-items: center;
}
.unified-search__filters[data-v-d79c2f68] {
  margin: 10px 0 10px 5px;
}
.unified-search__filters ul[data-v-d79c2f68] {
  display: inline-flex;
  justify-content: space-between;
}
.unified-search__form[data-v-d79c2f68] {
  position: relative;
  width: 100%;
  margin: 10px 0;
}
.unified-search__form[data-v-d79c2f68]::after {
  right: 6px;
  left: auto;
}
.unified-search__form-input[data-v-d79c2f68], .unified-search__form-reset[data-v-d79c2f68] {
  margin: 3px;
}
.unified-search__form-input[data-v-d79c2f68] {
  width: 100%;
  height: 34px;
  padding: 6px;
}
.unified-search__form-input[data-v-d79c2f68], .unified-search__form-input[placeholder][data-v-d79c2f68], .unified-search__form-input[data-v-d79c2f68]::placeholder {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.unified-search__form-input[data-v-d79c2f68]::-webkit-search-decoration, .unified-search__form-input[data-v-d79c2f68]::-webkit-search-cancel-button, .unified-search__form-input[data-v-d79c2f68]::-webkit-search-results-button, .unified-search__form-input[data-v-d79c2f68]::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.icon-loading-small .unified-search__form-input[data-v-d79c2f68], .unified-search__form-input--with-reset[data-v-d79c2f68] {
  padding-right: 34px;
}
.unified-search__form-reset[data-v-d79c2f68], .unified-search__form-submit[data-v-d79c2f68] {
  position: absolute;
  top: 0;
  right: 4px;
  width: 28px;
  height: 28px;
  min-height: 30px;
  padding: 0;
  opacity: 0.5;
  border: none;
  background-color: transparent;
  margin-right: 0;
}
.unified-search__form-reset[data-v-d79c2f68]:hover, .unified-search__form-reset[data-v-d79c2f68]:focus, .unified-search__form-reset[data-v-d79c2f68]:active, .unified-search__form-submit[data-v-d79c2f68]:hover, .unified-search__form-submit[data-v-d79c2f68]:focus, .unified-search__form-submit[data-v-d79c2f68]:active {
  opacity: 1;
}
.unified-search__form-submit[data-v-d79c2f68] {
  right: 28px;
}
.unified-search__results[data-v-d79c2f68] {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.unified-search__results-header[data-v-d79c2f68] {
  display: block;
  margin: 10px;
  margin-bottom: 6px;
  margin-left: 13px;
  color: var(--color-primary-element);
  font-size: 19px;
  font-weight: bold;
}
.unified-search .unified-search__result-more[data-v-d79c2f68] {
  color: var(--color-text-maxcontrast);
}
.unified-search .empty-content[data-v-d79c2f68] {
  margin: 10vh 0;
}
.unified-search .empty-content[data-v-d79c2f68] .empty-content__title {
  font-weight: normal;
  font-size: var(--default-font-size);
  padding: 0 15px;
  text-align: center;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_id_69f8eb86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_id_69f8eb86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_id_69f8eb86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_id_69f8eb86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_id_69f8eb86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_style_index_0_id_ff2497f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_style_index_0_id_ff2497f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_style_index_0_id_ff2497f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_style_index_0_id_ff2497f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_style_index_0_id_ff2497f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_style_index_0_id_d79c2f68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_style_index_0_id_d79c2f68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_style_index_0_id_d79c2f68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_style_index_0_id_d79c2f68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_style_index_0_id_d79c2f68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./core/src/components/UnifiedSearch/SearchResult.vue":
/*!************************************************************!*\
  !*** ./core/src/components/UnifiedSearch/SearchResult.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchResult_vue_vue_type_template_id_69f8eb86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResult.vue?vue&type=template&id=69f8eb86&scoped=true& */ "./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=template&id=69f8eb86&scoped=true&");
/* harmony import */ var _SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResult.vue?vue&type=script&lang=js& */ "./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=script&lang=js&");
/* harmony import */ var _SearchResult_vue_vue_type_style_index_0_id_69f8eb86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true& */ "./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchResult_vue_vue_type_template_id_69f8eb86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchResult_vue_vue_type_template_id_69f8eb86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "69f8eb86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "core/src/components/UnifiedSearch/SearchResult.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue":
/*!************************************************************************!*\
  !*** ./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchResultPlaceholders_vue_vue_type_template_id_ff2497f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultPlaceholders.vue?vue&type=template&id=ff2497f4&scoped=true& */ "./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=template&id=ff2497f4&scoped=true&");
/* harmony import */ var _SearchResultPlaceholders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResultPlaceholders.vue?vue&type=script&lang=js& */ "./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=script&lang=js&");
/* harmony import */ var _SearchResultPlaceholders_vue_vue_type_style_index_0_id_ff2497f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true& */ "./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchResultPlaceholders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchResultPlaceholders_vue_vue_type_template_id_ff2497f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchResultPlaceholders_vue_vue_type_template_id_ff2497f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ff2497f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "core/src/components/UnifiedSearch/SearchResultPlaceholders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./core/src/views/UnifiedSearch.vue":
/*!******************************************!*\
  !*** ./core/src/views/UnifiedSearch.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UnifiedSearch_vue_vue_type_template_id_d79c2f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnifiedSearch.vue?vue&type=template&id=d79c2f68&scoped=true& */ "./core/src/views/UnifiedSearch.vue?vue&type=template&id=d79c2f68&scoped=true&");
/* harmony import */ var _UnifiedSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnifiedSearch.vue?vue&type=script&lang=js& */ "./core/src/views/UnifiedSearch.vue?vue&type=script&lang=js&");
/* harmony import */ var _UnifiedSearch_vue_vue_type_style_index_0_id_d79c2f68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true& */ "./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UnifiedSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnifiedSearch_vue_vue_type_template_id_d79c2f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UnifiedSearch_vue_vue_type_template_id_d79c2f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d79c2f68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "core/src/views/UnifiedSearch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Magnify.vue":
/*!************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Magnify.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Magnify_vue_vue_type_template_id_1d382cb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Magnify.vue?vue&type=template&id=1d382cb6& */ "./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6&");
/* harmony import */ var _Magnify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Magnify.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Magnify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Magnify_vue_vue_type_template_id_1d382cb6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Magnify_vue_vue_type_template_id_1d382cb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Magnify.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MagnifyIcon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
});


/***/ }),

/***/ "./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchResultPlaceholders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./core/src/views/UnifiedSearch.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./core/src/views/UnifiedSearch.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UnifiedSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=template&id=69f8eb86&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=template&id=69f8eb86&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_69f8eb86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_69f8eb86_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_template_id_69f8eb86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchResult.vue?vue&type=template&id=69f8eb86&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=template&id=69f8eb86&scoped=true&");


/***/ }),

/***/ "./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=template&id=ff2497f4&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=template&id=ff2497f4&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_template_id_ff2497f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_template_id_ff2497f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_template_id_ff2497f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchResultPlaceholders.vue?vue&type=template&id=ff2497f4&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=template&id=ff2497f4&scoped=true&");


/***/ }),

/***/ "./core/src/views/UnifiedSearch.vue?vue&type=template&id=d79c2f68&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./core/src/views/UnifiedSearch.vue?vue&type=template&id=d79c2f68&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_template_id_d79c2f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_template_id_d79c2f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_template_id_d79c2f68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UnifiedSearch.vue?vue&type=template&id=d79c2f68&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=template&id=d79c2f68&scoped=true&");


/***/ }),

/***/ "./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_style_index_0_id_69f8eb86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResult.vue?vue&type=style&index=0&id=69f8eb86&lang=scss&scoped=true&");


/***/ }),

/***/ "./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResultPlaceholders_vue_vue_type_style_index_0_id_ff2497f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/components/UnifiedSearch/SearchResultPlaceholders.vue?vue&type=style&index=0&id=ff2497f4&lang=scss&scoped=true&");


/***/ }),

/***/ "./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UnifiedSearch_vue_vue_type_style_index_0_id_d79c2f68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./core/src/views/UnifiedSearch.vue?vue&type=style&index=0&id=d79c2f68&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Magnify.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6&":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_template_id_1d382cb6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_template_id_1d382cb6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Magnify_vue_vue_type_template_id_1d382cb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Magnify.vue?vue&type=template&id=1d382cb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Magnify.vue?vue&type=template&id=1d382cb6& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "span",
    _vm._b(
      {
        staticClass: "material-design-icon magnify-icon",
        attrs: {
          "aria-hidden": !_vm.title,
          "aria-label": _vm.title,
          role: "img",
        },
        on: {
          click: function ($event) {
            return _vm.$emit("click", $event)
          },
        },
      },
      "span",
      _vm.$attrs,
      false
    ),
    [
      _c(
        "svg",
        {
          staticClass: "material-design-icon__svg",
          attrs: {
            fill: _vm.fillColor,
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 24 24",
          },
        },
        [
          _c(
            "path",
            {
              attrs: {
                d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",
              },
            },
            [_vm.title ? _c("title", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"core-unified-search": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknextcloud"] = self["webpackChunknextcloud"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./core/src/unified-search.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=core-unified-search.js.map?v=60b5e51fa733c4e1a8a3