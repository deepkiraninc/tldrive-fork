/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcActionCaption.js":
/*!************************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcActionCaption.js ***!
  \************************************************************************/
/***/ ((module) => {

/*! For license information please see NcActionCaption.js.LICENSE.txt */
!function(e,n){ true?module.exports=n():0}(self,(()=>(()=>{var e={250:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var o=t(7537),r=t.n(o),i=t(3645),a=t.n(i)()(r());a.push([e.id,".material-design-icon[data-v-1fb0f760]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.app-navigation-caption[data-v-1fb0f760]{color:var(--color-text-maxcontrast);line-height:44px;white-space:nowrap;text-overflow:ellipsis;box-shadow:none !important;user-select:none;pointer-events:none;margin-left:12px;padding-right:14px;height:44px;display:flex;align-items:center}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcActionCaption/NcActionCaption.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCND,yCACC,mCAAA,CACA,gBCqBgB,CDpBhB,kBAAA,CACA,sBAAA,CACA,0BAAA,CACA,gBAAA,CACA,mBAAA,CACA,gBAAA,CACA,kBAAA,CACA,WCagB,CDZhB,YAAA,CACA,kBAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n.app-navigation-caption {\n\tcolor: var(--color-text-maxcontrast);\n\tline-height: $clickable-area;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tbox-shadow: none !important;\n\tuser-select: none;\n\tpointer-events: none;\n\tmargin-left: 12px;\n\tpadding-right: 14px;\n\theight: $clickable-area;\n\tdisplay: flex;\n\talign-items: center;\n}\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const s=a},3645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),n.push(u))}},n}},7537:e=>{"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},3379:e=>{"use strict";var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],p=o.base?c[0]+o.base:c[0],u=i[p]||0,l="".concat(p," ").concat(u);i[p]=u+1;var d=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var v=r(f,o);o.byIndex=s,n.splice(s,0,{identifier:l,updater:v,references:1})}a.push(l)}return a}function r(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=o(e,r),p=0;p<i.length;p++){var u=t(i[p]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},9216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},1904:()=>{}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var o={};return(()=>{"use strict";t.r(o),t.d(o,{default:()=>y});const e={name:"NcActionCaption",props:{name:{type:String,required:!0}}};var n=t(3379),r=t.n(n),i=t(7795),a=t.n(i),s=t(569),c=t.n(s),p=t(3565),u=t.n(p),l=t(9216),d=t.n(l),f=t(4589),v=t.n(f),h=t(250),m={};m.styleTagTransform=v(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d();r()(h.Z,m);h.Z&&h.Z.locals&&h.Z.locals;var A=t(1904),g=t.n(A),b=function(e,n,t,o,r,i,a,s){var c,p="function"==typeof e?e.options:e;if(n&&(p.render=n,p.staticRenderFns=t,p._compiled=!0),o&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},p._ssrRegister=c):r&&(c=s?function(){r.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(p.functional){p._injectStyles=c;var u=p.render;p.render=function(e,n){return c.call(n),u(e,n)}}else{var l=p.beforeCreate;p.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:p}}(e,(function(){var e=this;return(0,e._self._c)("li",{staticClass:"app-navigation-caption"},[e._v("\n\t"+e._s(e.name)+"\n")])}),[],!1,null,"1fb0f760",null);"function"==typeof g()&&g()(b);const y=b.exports})(),o})()));
//# sourceMappingURL=NcActionCaption.js.map

/***/ }),

/***/ "./apps/updatenotification/src/init.js":
/*!*********************************************!*\
  !*** ./apps/updatenotification/src/init.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_UpdateNotification_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UpdateNotification.vue */ "./apps/updatenotification/src/components/UpdateNotification.vue");
/**
 * @copyright Copyright (c) 2018 Joas Schilling <coding@schilljs.com>
 *
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



vue__WEBPACK_IMPORTED_MODULE_2__["default"].mixin({
  methods: {
    t(app, text, vars, count, options) {
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)(app, text, vars, count, options);
    },
    n(app, textSingular, textPlural, count, vars, options) {
      return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translatePlural)(app, textSingular, textPlural, count, vars, options);
    }
  }
});

// eslint-disable-next-line no-new
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: '#updatenotification',
  render: h => h(_components_UpdateNotification_vue__WEBPACK_IMPORTED_MODULE_1__["default"])
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActions.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActions.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionCaption_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionCaption.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionCaption.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionCaption_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionCaption_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionLink_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionLink.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionLink.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionLink_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionLink_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcNoteCard.js */ "./node_modules/@nextcloud/vue/dist/Components/NcNoteCard.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSelect.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSelect.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-material-design-icons/ChevronDown.vue */ "./node_modules/vue-material-design-icons/ChevronDown.vue");
/* harmony import */ var vue_material_design_icons_Link_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-material-design-icons/Link.vue */ "./node_modules/vue-material-design-icons/Link.vue");
/* harmony import */ var vue_material_design_icons_NewBox_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-material-design-icons/NewBox.vue */ "./node_modules/vue-material-design-icons/NewBox.vue");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_15__);
















const logger = (0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_2__.getLoggerBuilder)().setApp('updatenotification').detectUser().build();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UpdateNotification',
  components: {
    IconChevronDown: vue_material_design_icons_ChevronDown_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    IconLink: vue_material_design_icons_Link_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    IconNewBox: vue_material_design_icons_NewBox_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    NcActions: (_nextcloud_vue_dist_Components_NcActions_js__WEBPACK_IMPORTED_MODULE_5___default()),
    NcActionButton: (_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_6___default()),
    NcActionCaption: (_nextcloud_vue_dist_Components_NcActionCaption_js__WEBPACK_IMPORTED_MODULE_7___default()),
    NcActionLink: (_nextcloud_vue_dist_Components_NcActionLink_js__WEBPACK_IMPORTED_MODULE_8___default()),
    NcNoteCard: (_nextcloud_vue_dist_Components_NcNoteCard_js__WEBPACK_IMPORTED_MODULE_9___default()),
    NcSelect: (_nextcloud_vue_dist_Components_NcSelect_js__WEBPACK_IMPORTED_MODULE_10___default()),
    NcSettingsSection: (_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_11___default())
  },
  data() {
    return {
      loadingGroups: false,
      newVersionString: '',
      lastCheckedDate: '',
      isUpdateChecked: false,
      webUpdaterEnabled: true,
      isWebUpdaterRecommended: true,
      updaterEnabled: true,
      versionIsEol: false,
      downloadLink: '',
      isNewVersionAvailable: false,
      hasValidSubscription: false,
      updateServerURL: '',
      changelogURL: '',
      whatsNewData: [],
      currentChannel: '',
      channels: [],
      notifyGroups: '',
      groups: [],
      isDefaultUpdateServerURL: true,
      enableChangeWatcher: false,
      availableAppUpdates: [],
      missingAppUpdates: [],
      appStoreFailed: false,
      appStoreDisabled: false,
      isListFetched: false,
      hideMissingUpdates: false,
      hideAvailableUpdates: true,
      openedWhatsNew: false,
      openedUpdateChannelMenu: false
    };
  },
  computed: {
    newVersionAvailableString() {
      return t('updatenotification', 'A new version is available: <strong>{newVersionString}</strong>', {
        newVersionString: this.newVersionString
      });
    },
    noteDelayedStableString() {
      return t('updatenotification', 'Note that after a new release the update only shows up after the first minor release or later. We roll out new versions spread out over time to our users and sometimes skip a version when issues are found. Learn more about updates and release channels at {link}').replace('{link}', '<a href="https://nextcloud.com/release-channels/">https://nextcloud.com/release-channels/</a>');
    },
    lastCheckedOnString() {
      return t('updatenotification', 'Checked on {lastCheckedDate}', {
        lastCheckedDate: this.lastCheckedDate
      });
    },
    statusText() {
      if (!this.isListFetched) {
        return t('updatenotification', 'Checking apps for compatible versions');
      }
      if (this.appStoreDisabled) {
        return t('updatenotification', 'Please make sure your config.php does not set <samp>appstoreenabled</samp> to false.');
      }
      if (this.appStoreFailed) {
        return t('updatenotification', 'Could not connect to the App Store or no updates have been returned at all. Search manually for updates or make sure your server has access to the internet and can connect to the App Store.');
      }
      return this.missingAppUpdates.length === 0 ? t('updatenotification', '<strong>All</strong> apps have a compatible version for this Nextcloud version available.', this) : n('updatenotification', '<strong>%n</strong> app has no compatible version for this Nextcloud version available.', '<strong>%n</strong> apps have no compatible version for this Nextcloud version available.', this.missingAppUpdates.length);
    },
    channelList() {
      const channelList = [];
      channelList.push({
        text: t('updatenotification', 'Enterprise'),
        longtext: t('updatenotification', 'For enterprise use. Provides always the latest patch level, but will not update to the next major release immediately. That update happens once Nextcloud GmbH has done additional hardening and testing for large-scale and mission-critical deployments. This channel is only available to customers and provides the Nextcloud Enterprise package.'),
        icon: 'icon-star',
        active: this.currentChannel === 'enterprise',
        disabled: !this.hasValidSubscription,
        action: this.changeReleaseChannelToEnterprise
      });
      channelList.push({
        text: t('updatenotification', 'Stable'),
        longtext: t('updatenotification', 'The most recent stable version. It is suited for regular use and will always update to the latest major version.'),
        icon: 'icon-checkmark',
        active: this.currentChannel === 'stable',
        action: this.changeReleaseChannelToStable
      });
      channelList.push({
        text: t('updatenotification', 'Beta'),
        longtext: t('updatenotification', 'A pre-release version only for testing new features, not for production environments.'),
        icon: 'icon-category-customization',
        active: this.currentChannel === 'beta',
        action: this.changeReleaseChannelToBeta
      });
      if (this.isNonDefaultChannel) {
        channelList.push({
          text: this.currentChannel,
          icon: 'icon-rename',
          active: true,
          action: () => {}
        });
      }
      return channelList;
    },
    isNonDefaultChannel() {
      return this.currentChannel !== 'enterprise' && this.currentChannel !== 'stable' && this.currentChannel !== 'beta';
    },
    localizedChannelName() {
      switch (this.currentChannel) {
        case 'enterprise':
          return t('updatenotification', 'Enterprise');
        case 'stable':
          return t('updatenotification', 'Stable');
        case 'beta':
          return t('updatenotification', 'Beta');
        default:
          return this.currentChannel;
      }
    }
  },
  watch: {
    notifyGroups(selectedOptions) {
      if (!this.enableChangeWatcher) {
        // The first time is when loading the app
        this.enableChangeWatcher = true;
        return;
      }
      const groups = this.notifyGroups.map(group => {
        return group.id;
      });
      OCP.AppConfig.setValue('updatenotification', 'notify_groups', JSON.stringify(groups));
    },
    isNewVersionAvailable() {
      if (!this.isNewVersionAvailable) {
        return;
      }
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateOcsUrl)('apps/updatenotification/api/v1/applist/{newVersion}', {
        newVersion: this.newVersion
      })).then(_ref => {
        let {
          data
        } = _ref;
        this.availableAppUpdates = data.ocs.data.available;
        this.missingAppUpdates = data.ocs.data.missing;
        this.isListFetched = true;
        this.appStoreFailed = false;
      }).catch(_ref2 => {
        let {
          data
        } = _ref2;
        this.availableAppUpdates = [];
        this.missingAppUpdates = [];
        this.appStoreDisabled = data.ocs.data.appstore_disabled;
        this.isListFetched = true;
        this.appStoreFailed = true;
      });
    }
  },
  beforeMount() {
    // Parse server data
    const data = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('updatenotification', 'data');
    this.newVersion = data.newVersion;
    this.newVersionString = data.newVersionString;
    this.lastCheckedDate = data.lastChecked;
    this.isUpdateChecked = data.isUpdateChecked;
    this.webUpdaterEnabled = data.webUpdaterEnabled;
    this.isWebUpdaterRecommended = data.isWebUpdaterRecommended;
    this.updaterEnabled = data.updaterEnabled;
    this.downloadLink = data.downloadLink;
    this.isNewVersionAvailable = data.isNewVersionAvailable;
    this.updateServerURL = data.updateServerURL;
    this.currentChannel = data.currentChannel;
    this.channels = data.channels;
    this.notifyGroups = data.notifyGroups;
    this.isDefaultUpdateServerURL = data.isDefaultUpdateServerURL;
    this.versionIsEol = data.versionIsEol;
    this.hasValidSubscription = data.hasValidSubscription;
    if (data.changes && data.changes.changelogURL) {
      this.changelogURL = data.changes.changelogURL;
    }
    if (data.changes && data.changes.whatsNew) {
      if (data.changes.whatsNew.admin) {
        this.whatsNewData = this.whatsNewData.concat(data.changes.whatsNew.admin);
      }
      this.whatsNewData = this.whatsNewData.concat(data.changes.whatsNew.regular);
    }
  },
  mounted() {
    this.searchGroup();
  },
  methods: {
    searchGroup: debounce__WEBPACK_IMPORTED_MODULE_15___default()(async function (query) {
      this.loadingGroups = true;
      try {
        const response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateOcsUrl)('cloud/groups/details'), {
          search: query,
          limit: 20,
          offset: 0
        });
        this.groups = response.data.ocs.data.groups.sort(function (a, b) {
          return a.displayname.localeCompare(b.displayname);
        });
      } catch (err) {
        logger.error('Could not fetch groups', err);
      } finally {
        this.loadingGroups = false;
      }
    }, 500),
    /**
     * Creates a new authentication token and loads the updater URL
     */
    clickUpdaterButton() {
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].get((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateUrl)('/apps/updatenotification/credentials')).then(_ref3 => {
        let {
          data
        } = _ref3;
        // create a form to send a proper post request to the updater
        const form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.getRootUrl)() + '/updater/');
        const hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', 'updater-secret-input');
        hiddenField.setAttribute('value', data);
        form.appendChild(hiddenField);
        document.body.appendChild(form);
        form.submit();
      });
    },
    changeReleaseChannelToEnterprise() {
      this.changeReleaseChannel('enterprise');
    },
    changeReleaseChannelToStable() {
      this.changeReleaseChannel('stable');
    },
    changeReleaseChannelToBeta() {
      this.changeReleaseChannel('beta');
    },
    changeReleaseChannel(channel) {
      this.currentChannel = channel;
      _nextcloud_axios__WEBPACK_IMPORTED_MODULE_4__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_3__.generateUrl)('/apps/updatenotification/channel'), {
        channel: this.currentChannel
      }).then(_ref4 => {
        let {
          data
        } = _ref4;
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(data.data.message);
      });
      this.openedUpdateChannelMenu = false;
    },
    toggleHideMissingUpdates() {
      this.hideMissingUpdates = !this.hideMissingUpdates;
    },
    toggleHideAvailableUpdates() {
      this.hideAvailableUpdates = !this.hideAvailableUpdates;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("NcSettingsSection", {
    attrs: {
      id: "updatenotification",
      name: _vm.t("updatenotification", "Update")
    }
  }, [_c("div", {
    staticClass: "update"
  }, [_vm.isNewVersionAvailable ? [_vm.versionIsEol ? _c("NcNoteCard", {
    attrs: {
      type: "warning"
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("updatenotification", "The version you are running is not maintained anymore. Please make sure to update to a supported version as soon as possible.")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("p", [_c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.newVersionAvailableString)
    }
  }), _c("br"), _vm._v(" "), !_vm.isListFetched ? _c("span", {
    staticClass: "icon icon-loading-small"
  }) : _vm._e(), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.statusText)
    }
  })]), _vm._v(" "), _vm.missingAppUpdates.length ? [_c("h3", {
    staticClass: "clickable",
    on: {
      click: _vm.toggleHideMissingUpdates
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("updatenotification", "Apps missing compatible version")) + "\n\t\t\t\t\t"), !_vm.hideMissingUpdates ? _c("span", {
    staticClass: "icon icon-triangle-n"
  }) : _vm._e(), _vm._v(" "), _vm.hideMissingUpdates ? _c("span", {
    staticClass: "icon icon-triangle-s"
  }) : _vm._e()]), _vm._v(" "), !_vm.hideMissingUpdates ? _c("ul", {
    staticClass: "applist"
  }, _vm._l(_vm.missingAppUpdates, function (app, index) {
    return _c("li", {
      key: index
    }, [_c("a", {
      attrs: {
        href: "https://apps.nextcloud.com/apps/" + app.appId,
        title: _vm.t("settings", "View in store")
      }
    }, [_vm._v(_vm._s(app.appName) + " ↗")])]);
  }), 0) : _vm._e()] : _vm._e(), _vm._v(" "), _vm.availableAppUpdates.length ? [_c("h3", {
    staticClass: "clickable",
    on: {
      click: _vm.toggleHideAvailableUpdates
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("updatenotification", "Apps with compatible version")) + "\n\t\t\t\t\t"), !_vm.hideAvailableUpdates ? _c("span", {
    staticClass: "icon icon-triangle-n"
  }) : _vm._e(), _vm._v(" "), _vm.hideAvailableUpdates ? _c("span", {
    staticClass: "icon icon-triangle-s"
  }) : _vm._e()]), _vm._v(" "), !_vm.hideAvailableUpdates ? _c("ul", {
    staticClass: "applist"
  }, _vm._l(_vm.availableAppUpdates, function (app, index) {
    return _c("li", {
      key: index
    }, [_c("a", {
      attrs: {
        href: "https://apps.nextcloud.com/apps/" + app.appId,
        title: _vm.t("settings", "View in store")
      }
    }, [_vm._v(_vm._s(app.appName) + " ↗")])]);
  }), 0) : _vm._e()] : _vm._e(), _vm._v(" "), !_vm.isWebUpdaterRecommended && _vm.updaterEnabled && _vm.webUpdaterEnabled ? [_c("h3", {
    staticClass: "warning"
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("updatenotification", "Please note that the web updater is not recommended with more than 100 users! Please use the command line updater instead!")) + "\n\t\t\t\t")])] : _vm._e(), _vm._v(" "), _c("div", [_vm.updaterEnabled && _vm.webUpdaterEnabled ? _c("a", {
    staticClass: "button primary",
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.clickUpdaterButton
    }
  }, [_vm._v(_vm._s(_vm.t("updatenotification", "Open updater")))]) : _vm._e(), _vm._v(" "), _vm.downloadLink ? _c("a", {
    staticClass: "button",
    class: {
      hidden: !_vm.updaterEnabled
    },
    attrs: {
      href: _vm.downloadLink
    }
  }, [_vm._v(_vm._s(_vm.t("updatenotification", "Download now")))]) : _vm._e(), _vm._v(" "), _vm.updaterEnabled && !_vm.webUpdaterEnabled ? _c("span", [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("updatenotification", "Please use the command line updater to update.")) + "\n\t\t\t\t")]) : _vm._e(), _vm._v(" "), _vm.whatsNewData || _vm.changelogURL ? _c("NcActions", {
    attrs: {
      "force-menu": true,
      "menu-name": _vm.t("updatenotification", "What's new?"),
      type: "tertiary"
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconNewBox", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }, {
      key: "default",
      fn: function () {
        return [_vm._l(_vm.whatsNewData, function (changes, index) {
          return _c("NcActionCaption", {
            key: index,
            attrs: {
              name: changes
            }
          });
        }), _vm._v(" "), _vm.changelogURL ? _c("NcActionLink", {
          attrs: {
            href: _vm.changelogURL,
            "close-after-click": "",
            target: "_blank"
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("IconLink", {
                attrs: {
                  size: 20
                }
              })];
            },
            proxy: true
          }], null, false, 3963853667)
        }, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(_vm.t("updatenotification", "View changelog")) + "\n\t\t\t\t\t\t\t")]) : _vm._e()];
      },
      proxy: true
    }], null, false, 1184001031)
  }) : _vm._e()], 1)] : !_vm.isUpdateChecked ? [_vm._v("\n\t\t\t" + _vm._s(_vm.t("updatenotification", "The update check is not yet finished. Please refresh the page.")) + "\n\t\t")] : [_vm._v("\n\t\t\t" + _vm._s(_vm.t("updatenotification", "Your version is up to date.")) + "\n\t\t\t"), _c("span", {
    staticClass: "icon-info svg",
    attrs: {
      title: _vm.lastCheckedOnString,
      "aria-label": _vm.lastCheckedOnString
    }
  })], _vm._v(" "), !_vm.isDefaultUpdateServerURL ? [_c("p", {
    staticClass: "topMargin"
  }, [_c("em", [_vm._v(_vm._s(_vm.t("updatenotification", "A non-default update server is in use to be checked for updates:")) + " "), _c("code", [_vm._v(_vm._s(_vm.updateServerURL))])])])] : _vm._e()], 2), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.t("updatenotification", "Update channel")))]), _vm._v(" "), _c("p", {
    staticClass: "inlineblock"
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("updatenotification", "Changing the update channel also affects the apps management page. E.g. after switching to the beta channel, beta app updates will be offered to you in the apps management page.")) + "\n\t")]), _vm._v(" "), _c("div", {
    staticClass: "update-channel-selector"
  }, [_c("span", [_vm._v(_vm._s(_vm.t("updatenotification", "Current update channel:")))]), _vm._v(" "), _c("NcActions", {
    attrs: {
      "force-menu": true,
      "menu-name": _vm.localizedChannelName,
      type: "tertiary"
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("IconChevronDown", {
          attrs: {
            size: 20
          }
        })];
      },
      proxy: true
    }, {
      key: "default",
      fn: function () {
        return _vm._l(_vm.channelList, function (channel, index) {
          return _c("NcActionButton", {
            key: index,
            staticClass: "update-channel-action",
            attrs: {
              "aria-checked": channel.active ? "true" : "false",
              "aria-label": channel.text,
              disabled: !!channel.disabled,
              icon: channel.icon,
              name: channel.text,
              "close-after-click": "",
              role: "menuitemradio"
            },
            on: {
              click: channel.action
            }
          }, [_vm._v("\n\t\t\t\t\t" + _vm._s(channel.longtext) + "\n\t\t\t\t")]);
        });
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("p", [_c("em", [_vm._v(_vm._s(_vm.t("updatenotification", "You can always update to a newer version. But you can never downgrade to a more stable version.")))]), _c("br"), _vm._v(" "), _c("em", {
    domProps: {
      innerHTML: _vm._s(_vm.noteDelayedStableString)
    }
  })]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.t("updatenotification", "Notify members of the following groups about available updates:")))]), _vm._v(" "), _c("NcSelect", {
    attrs: {
      options: _vm.groups,
      multiple: true,
      label: "displayname",
      loading: _vm.loadingGroups,
      "close-on-select": false
    },
    on: {
      search: _vm.searchGroup
    },
    scopedSlots: _vm._u([{
      key: "no-options",
      fn: function () {
        return [_vm._v("\n\t\t\t" + _vm._s(_vm.t("updatenotification", "No groups")) + "\n\t\t")];
      },
      proxy: true
    }]),
    model: {
      value: _vm.notifyGroups,
      callback: function ($$v) {
        _vm.notifyGroups = $$v;
      },
      expression: "notifyGroups"
    }
  }), _vm._v(" "), _c("p", [_vm.currentChannel === "daily" || _vm.currentChannel === "git" ? _c("em", [_vm._v(_vm._s(_vm.t("updatenotification", "Only notifications for app updates are available.")))]) : _vm._e(), _vm._v(" "), _vm.currentChannel === "daily" ? _c("em", [_vm._v(_vm._s(_vm.t("updatenotification", "The selected update channel makes dedicated notifications for the server obsolete.")))]) : _vm.currentChannel === "git" ? _c("em", [_vm._v(_vm._s(_vm.t("updatenotification", "The selected update channel does not support updates of the server.")))]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `#updatenotification > *[data-v-82102c34] {
  max-width: 900px;
}
#updatenotification .topMargin[data-v-82102c34] {
  margin-top: 15px;
}
#updatenotification div.update[data-v-82102c34],
#updatenotification p[data-v-82102c34]:not(.inlineblock) {
  margin-bottom: 25px;
}
#updatenotification h2.inlineblock[data-v-82102c34] {
  margin-top: 25px;
}
#updatenotification h3.clickable[data-v-82102c34] {
  cursor: pointer;
}
#updatenotification h3.clickable .icon[data-v-82102c34] {
  cursor: pointer;
}
#updatenotification h3[data-v-82102c34]:first-of-type {
  margin-top: 0;
}
#updatenotification h4[data-v-82102c34] {
  margin-block-end: 0.7rem;
}
#updatenotification .update-channel-selector[data-v-82102c34] {
  display: flex;
  align-items: center;
  gap: 12px;
}
#updatenotification .icon[data-v-82102c34] {
  display: inline-block;
  margin-bottom: -3px;
}
#updatenotification .icon-triangle-s[data-v-82102c34], #updatenotification .icon-triangle-n[data-v-82102c34] {
  opacity: 0.5;
}
#updatenotification .applist[data-v-82102c34] {
  margin-bottom: 25px;
}
#updatenotification .update-menu[data-v-82102c34] {
  position: relative;
  cursor: pointer;
  margin-left: 3px;
  display: inline-block;
}
#updatenotification .update-menu .icon-update-menu[data-v-82102c34] {
  cursor: inherit;
}
#updatenotification .update-menu .icon-update-menu .icon-triangle-s[data-v-82102c34] {
  display: inline-block;
  vertical-align: middle;
  cursor: inherit;
  opacity: 1;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.update-channel-action[aria-checked=true] {
  border-inline-start: 4px solid var(--color-primary-element);
}
.update-channel-action[aria-checked=true]:hover, .update-channel-action[aria-checked=true]:focus-within {
  background-color: var(--color-primary-element-light-hover);
}
.update-channel-action[aria-checked=true] button {
  background-color: var(--color-primary-element-light);
  color: var(--color-primary-element-light-text);
}
.update-channel-action[aria-checked] {
  margin-block: 2px;
}
#updatenotification {
  /* override needed to replace yellow hover state with a dark one */
}
#updatenotification .update-menu .icon-star:hover,
#updatenotification .update-menu .icon-star:focus {
  background-image: var(--icon-starred);
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_id_82102c34_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_id_82102c34_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_id_82102c34_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_id_82102c34_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_id_82102c34_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue":
/*!***********************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true& */ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true&");
/* harmony import */ var _UpdateNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateNotification.vue?vue&type=script&lang=js& */ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js&");
/* harmony import */ var _UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& */ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&");
/* harmony import */ var _UpdateNotification_vue_vue_type_style_index_1_id_82102c34_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss& */ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _UpdateNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "82102c34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/updatenotification/src/components/UpdateNotification.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Link.vue":
/*!*********************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Link.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Link_vue_vue_type_template_id_63bcadb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link.vue?vue&type=template&id=63bcadb4& */ "./node_modules/vue-material-design-icons/Link.vue?vue&type=template&id=63bcadb4&");
/* harmony import */ var _Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/Link.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Link_vue_vue_type_template_id_63bcadb4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Link_vue_vue_type_template_id_63bcadb4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Link.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Link.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Link.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LinkIcon",
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

/***/ "./node_modules/vue-material-design-icons/NewBox.vue":
/*!***********************************************************!*\
  !*** ./node_modules/vue-material-design-icons/NewBox.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewBox_vue_vue_type_template_id_00cf6bb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewBox.vue?vue&type=template&id=00cf6bb7& */ "./node_modules/vue-material-design-icons/NewBox.vue?vue&type=template&id=00cf6bb7&");
/* harmony import */ var _NewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewBox.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/NewBox.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewBox_vue_vue_type_template_id_00cf6bb7___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewBox_vue_vue_type_template_id_00cf6bb7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/NewBox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/NewBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/NewBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NewBoxIcon",
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

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNotification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_template_id_82102c34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=template&id=82102c34&scoped=true&");


/***/ }),

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_0_id_82102c34_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=0&id=82102c34&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UpdateNotification_vue_vue_type_style_index_1_id_82102c34_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/updatenotification/src/components/UpdateNotification.vue?vue&type=style&index=1&id=82102c34&lang=scss&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Link.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Link.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Link.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Link.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/NewBox.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/NewBox.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_NewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./NewBox.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/NewBox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_NewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Link.vue?vue&type=template&id=63bcadb4&":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Link.vue?vue&type=template&id=63bcadb4& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_63bcadb4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_63bcadb4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Link_vue_vue_type_template_id_63bcadb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Link.vue?vue&type=template&id=63bcadb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Link.vue?vue&type=template&id=63bcadb4&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/NewBox.vue?vue&type=template&id=00cf6bb7&":
/*!******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/NewBox.vue?vue&type=template&id=00cf6bb7& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_NewBox_vue_vue_type_template_id_00cf6bb7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_NewBox_vue_vue_type_template_id_00cf6bb7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_NewBox_vue_vue_type_template_id_00cf6bb7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./NewBox.vue?vue&type=template&id=00cf6bb7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/NewBox.vue?vue&type=template&id=00cf6bb7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Link.vue?vue&type=template&id=63bcadb4&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Link.vue?vue&type=template&id=63bcadb4& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        staticClass: "material-design-icon link-icon",
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
                d: "M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z",
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/NewBox.vue?vue&type=template&id=00cf6bb7&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/NewBox.vue?vue&type=template&id=00cf6bb7& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        staticClass: "material-design-icon new-box-icon",
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
                d: "M20,4C21.11,4 22,4.89 22,6V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V6C2,4.89 2.89,4 4,4H20M8.5,15V9H7.25V12.5L4.75,9H3.5V15H4.75V11.5L7.3,15H8.5M13.5,10.26V9H9.5V15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5M20.5,14V9H19.25V13.5H18.13V10H16.88V13.5H15.75V9H14.5V14A1,1 0 0,0 15.5,15H19.5A1,1 0 0,0 20.5,14Z",
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
/******/ 			"updatenotification-updatenotification": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/updatenotification/src/init.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=updatenotification-updatenotification.js.map?v=28d578e2faeb65cacee6