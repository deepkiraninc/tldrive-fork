/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcListItem.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcListItem.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/*! For license information please see NcListItem.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{var e={8250:(e,t,a)=>{"use strict";a.d(t,{default:()=>R});var o=a(3089),i=a(2297),n=a(1205),s=a(932),r=a(2734),l=a.n(r),c=a(1441),m=a.n(c);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var o=a.call(e,t||"default");if("object"!==d(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}var k=".focusable";const A={name:"NcActions",components:{NcButton:o.default,DotsHorizontal:m(),NcPopover:i.default},props:{open:{type:Boolean,default:!1},manualOpen:{type:Boolean,default:!1},forceMenu:{type:Boolean,default:!1},forceName:{type:Boolean,default:!1},menuName:{type:String,default:null},primary:{type:Boolean,default:!1},type:{type:String,validator:function(e){return-1!==["primary","secondary","tertiary","tertiary-no-background","tertiary-on-primary","error","warning","success"].indexOf(e)},default:null},defaultIcon:{type:String,default:""},ariaLabel:{type:String,default:(0,s.t)("Actions")},ariaHidden:{type:Boolean,default:null},placement:{type:String,default:"bottom"},boundariesElement:{type:Element,default:function(){return document.querySelector("body")}},container:{type:[String,Object,Element,Boolean],default:"body"},disabled:{type:Boolean,default:!1},inline:{type:Number,default:0}},emits:["open","update:open","close","focus","blur"],data:function(){return{opened:this.open,focusIndex:0,randomId:"menu-".concat((0,n.Z)())}},computed:{triggerBtnType:function(){return this.type||(this.primary?"primary":this.menuName?"secondary":"tertiary")}},watch:{open:function(e){e!==this.opened&&(this.opened=e)}},methods:{isValidSingleAction:function(e){var t,a,o,i=null!==(t=null==e||null===(a=e.componentOptions)||void 0===a||null===(a=a.Ctor)||void 0===a||null===(a=a.extendOptions)||void 0===a?void 0:a.name)&&void 0!==t?t:null==e||null===(o=e.componentOptions)||void 0===o?void 0:o.tag;return["NcActionButton","NcActionLink","NcActionRouter"].includes(i)},openMenu:function(e){this.opened||(this.opened=!0,this.$emit("update:open",!0),this.$emit("open"))},closeMenu:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.opened&&(this.opened=!1,this.$refs.popover.clearFocusTrap({returnFocus:e}),this.$emit("update:open",!1),this.$emit("close"),this.focusIndex=0,this.$refs.menuButton.$el.focus())},onOpen:function(e){var t=this;this.$nextTick((function(){t.focusFirstAction(e)}))},onMouseFocusAction:function(e){if(document.activeElement!==e.target){var t=e.target.closest("li");if(t){var a=t.querySelector(k);if(a){var o=g(this.$refs.menu.querySelectorAll(k)).indexOf(a);o>-1&&(this.focusIndex=o,this.focusAction())}}}},onKeydown:function(e){(38===e.keyCode||9===e.keyCode&&e.shiftKey)&&this.focusPreviousAction(e),(40===e.keyCode||9===e.keyCode&&!e.shiftKey)&&this.focusNextAction(e),33===e.keyCode&&this.focusFirstAction(e),34===e.keyCode&&this.focusLastAction(e),27===e.keyCode&&(this.closeMenu(),e.preventDefault())},removeCurrentActive:function(){var e=this.$refs.menu.querySelector("li.active");e&&e.classList.remove("active")},focusAction:function(){var e=this.$refs.menu.querySelectorAll(k)[this.focusIndex];if(e){this.removeCurrentActive();var t=e.closest("li.action");e.focus(),t&&t.classList.add("active")}},focusPreviousAction:function(e){this.opened&&(0===this.focusIndex?this.closeMenu():(this.preventIfEvent(e),this.focusIndex=this.focusIndex-1),this.focusAction())},focusNextAction:function(e){if(this.opened){var t=this.$refs.menu.querySelectorAll(k).length-1;this.focusIndex===t?this.closeMenu():(this.preventIfEvent(e),this.focusIndex=this.focusIndex+1),this.focusAction()}},focusFirstAction:function(e){this.opened&&(this.preventIfEvent(e),this.focusIndex=0,this.focusAction())},focusLastAction:function(e){this.opened&&(this.preventIfEvent(e),this.focusIndex=this.$refs.menu.querySelectorAll(k).length-1,this.focusAction())},preventIfEvent:function(e){e&&(e.preventDefault(),e.stopPropagation())},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e)}},render:function(e){var t=this,a=(this.$slots.default||[]).filter((function(e){var t,a;return(null==e||null===(t=e.componentOptions)||void 0===t?void 0:t.tag)||(null==e||null===(a=e.componentOptions)||void 0===a||null===(a=a.Ctor)||void 0===a||null===(a=a.extendOptions)||void 0===a?void 0:a.name)})),o=a.every((function(e){var t,a,o,i;return"NcActionLink"===(null!==(t=null==e||null===(a=e.componentOptions)||void 0===a||null===(a=a.Ctor)||void 0===a||null===(a=a.extendOptions)||void 0===a?void 0:a.name)&&void 0!==t?t:null==e||null===(o=e.componentOptions)||void 0===o?void 0:o.tag)&&(null==e||null===(i=e.componentOptions)||void 0===i||null===(i=i.propsData)||void 0===i||null===(i=i.href)||void 0===i?void 0:i.startsWith(window.location.origin))})),i=a.filter(this.isValidSingleAction);if(this.forceMenu&&i.length>0&&this.inline>0&&(l().util.warn("Specifying forceMenu will ignore any inline actions rendering."),i=[]),0!==a.length){var n=function(a){var o,i,n,s,r,l,c,m,d,u,h,g,v=(null==a||null===(o=a.data)||void 0===o||null===(o=o.scopedSlots)||void 0===o||null===(o=o.icon())||void 0===o?void 0:o[0])||e("span",{class:["icon",null==a||null===(i=a.componentOptions)||void 0===i||null===(i=i.propsData)||void 0===i?void 0:i.icon]}),k=null==a||null===(n=a.componentOptions)||void 0===n||null===(n=n.listeners)||void 0===n?void 0:n.click,A=null==a||null===(s=a.componentOptions)||void 0===s||null===(s=s.children)||void 0===s||null===(s=s[0])||void 0===s||null===(s=s.text)||void 0===s||null===(r=s.trim)||void 0===r?void 0:r.call(s),y=(null==a||null===(l=a.componentOptions)||void 0===l||null===(l=l.propsData)||void 0===l?void 0:l.ariaLabel)||A,f=t.forceName?A:"",C=null==a||null===(c=a.componentOptions)||void 0===c||null===(c=c.propsData)||void 0===c?void 0:c.title;return t.forceName||C||(C=A),e("NcButton",{class:["action-item action-item--single",null==a||null===(m=a.data)||void 0===m?void 0:m.staticClass,null==a||null===(d=a.data)||void 0===d?void 0:d.class],attrs:{"aria-label":y,title:C},ref:null==a||null===(u=a.data)||void 0===u?void 0:u.ref,props:p({type:t.type||(f?"secondary":"tertiary"),disabled:t.disabled||(null==a||null===(h=a.componentOptions)||void 0===h||null===(h=h.propsData)||void 0===h?void 0:h.disabled),ariaHidden:t.ariaHidden},null==a||null===(g=a.componentOptions)||void 0===g?void 0:g.propsData),on:p({focus:t.onFocus,blur:t.onBlur},!!k&&{click:function(e){k&&k(e)}})},[e("template",{slot:"icon"},[v]),f])},s=function(a){var i,n,s=(null===(i=t.$slots.icon)||void 0===i?void 0:i[0])||(t.defaultIcon?e("span",{class:["icon",t.defaultIcon]}):e("DotsHorizontal",{props:{size:20}}));return e("NcPopover",{ref:"popover",props:{delay:0,handleResize:!0,shown:t.opened,placement:t.placement,boundary:t.boundariesElement,container:t.container,popoverBaseClass:"action-item__popper",setReturnFocus:null===(n=t.$refs.menuButton)||void 0===n?void 0:n.$el},attrs:p(p({delay:0,handleResize:!0,shown:t.opened,placement:t.placement,boundary:t.boundariesElement,container:t.container},t.manualOpen&&{triggers:[]}),{},{popoverBaseClass:"action-item__popper"}),on:{show:t.openMenu,"after-show":t.onOpen,hide:t.closeMenu}},[e("NcButton",{class:"action-item__menutoggle",props:{type:t.triggerBtnType,disabled:t.disabled,ariaHidden:t.ariaHidden},slot:"trigger",ref:"menuButton",attrs:{"aria-haspopup":o?null:"menu","aria-label":t.ariaLabel,"aria-controls":t.opened?t.randomId:null,"aria-expanded":t.opened.toString()},on:{focus:t.onFocus,blur:t.onBlur}},[e("template",{slot:"icon"},[s]),t.menuName]),e("div",{class:{open:t.opened},attrs:{tabindex:"-1"},on:{keydown:t.onKeydown,mousemove:t.onMouseFocusAction},ref:"menu"},[e("ul",{attrs:{id:t.randomId,tabindex:"-1",role:o?null:"menu"}},[a])])])};if(1===a.length&&1===i.length&&!this.forceMenu)return n(i[0]);if(i.length>0&&this.inline>0){var r=i.slice(0,this.inline),c=a.filter((function(e){return!r.includes(e)}));return e("div",{class:["action-items","action-item--".concat(this.triggerBtnType)]},[].concat(g(r.map(n)),[c.length>0?e("div",{class:["action-item",{"action-item--open":this.opened}]},[s(c)]):null]))}return e("div",{class:["action-item action-item--default-popover","action-item--".concat(this.triggerBtnType),{"action-item--open":this.opened}]},[s(a)])}}};var y=a(3379),f=a.n(y),C=a(7795),P=a.n(C),b=a(569),S=a.n(b),w=a(3565),N=a.n(w),j=a(9216),O=a.n(j),E=a(4589),x=a.n(E),z=a(4825),B={};B.styleTagTransform=x(),B.setAttributes=N(),B.insert=S().bind(null,"head"),B.domAPI=P(),B.insertStyleElement=O();f()(z.Z,B);z.Z&&z.Z.locals&&z.Z.locals;var F=a(4946),M={};M.styleTagTransform=x(),M.setAttributes=N(),M.insert=S().bind(null,"head"),M.domAPI=P(),M.insertStyleElement=O();f()(F.Z,M);F.Z&&F.Z.locals&&F.Z.locals;var _=a(1900),T=a(5727),G=a.n(T),D=(0,_.Z)(A,undefined,undefined,!1,null,"29452b76",null);"function"==typeof G()&&G()(D);const R=D.exports},3089:(e,t,a)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,t||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,{default:()=>N});const r={name:"NcButton",props:{alignment:{type:String,default:"center",validator:function(e){return["start","start-reverse","center","center-reverse","end","end-reverse"].includes(e)}},disabled:{type:Boolean,default:!1},type:{type:String,validator:function(e){return-1!==["primary","secondary","tertiary","tertiary-no-background","tertiary-on-primary","error","warning","success"].indexOf(e)},default:"secondary"},nativeType:{type:String,validator:function(e){return-1!==["submit","reset","button"].indexOf(e)},default:"button"},wide:{type:Boolean,default:!1},ariaLabel:{type:String,default:null},href:{type:String,default:null},download:{type:String,default:null},to:{type:[String,Object],default:null},exact:{type:Boolean,default:!1},ariaHidden:{type:Boolean,default:null},pressed:{type:Boolean,default:null}},emits:["update:pressed","click"],computed:{realType:function(){return this.pressed?"primary":!1===this.pressed&&"primary"===this.type?"secondary":this.type},flexAlignment:function(){return this.alignment.split("-")[0]},isReverseAligned:function(){return this.alignment.includes("-")}},render:function(e){var t,a,o,i=this,r=null===(t=this.$slots.default)||void 0===t||null===(t=t[0])||void 0===t||null===(t=t.text)||void 0===t||null===(a=t.trim)||void 0===a?void 0:a.call(t),l=!!r,c=null===(o=this.$slots)||void 0===o?void 0:o.icon;r||this.ariaLabel||console.warn("You need to fill either the text or the ariaLabel props in the button component.",{text:r,ariaLabel:this.ariaLabel},this);var m=function(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=a.navigate,m=a.isActive,d=a.isExactActive;return e(i.to||!i.href?"button":"a",{class:["button-vue",(t={"button-vue--icon-only":c&&!l,"button-vue--text-only":l&&!c,"button-vue--icon-and-text":c&&l},s(t,"button-vue--vue-".concat(i.realType),i.realType),s(t,"button-vue--wide",i.wide),s(t,"button-vue--".concat(i.flexAlignment),"center"!==i.flexAlignment),s(t,"button-vue--reverse",i.isReverseAligned),s(t,"active",m),s(t,"router-link-exact-active",d),t)],attrs:n({"aria-label":i.ariaLabel,"aria-pressed":i.pressed,disabled:i.disabled,type:i.href?null:i.nativeType,role:i.href?"button":null,href:!i.to&&i.href?i.href:null,target:!i.to&&i.href?"_self":null,rel:!i.to&&i.href?"nofollow noreferrer noopener":null,download:!i.to&&i.href&&i.download?i.download:null},i.$attrs),on:n(n({},i.$listeners),{},{click:function(e){"boolean"==typeof i.pressed&&i.$emit("update:pressed",!i.pressed),i.$emit("click",e),null==o||o(e)}})},[e("span",{class:"button-vue__wrapper"},[c?e("span",{class:"button-vue__icon",attrs:{"aria-hidden":i.ariaHidden}},[i.$slots.icon]):null,l?e("span",{class:"button-vue__text"},[r]):null])])};return this.to?e("router-link",{props:{custom:!0,to:this.to,exact:this.exact},scopedSlots:{default:m}}):m()}};var l=a(3379),c=a.n(l),m=a(7795),d=a.n(m),u=a(569),p=a.n(u),h=a(3565),g=a.n(h),v=a(9216),k=a.n(v),A=a(4589),y=a.n(A),f=a(7294),C={};C.styleTagTransform=y(),C.setAttributes=g(),C.insert=p().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=k();c()(f.Z,C);f.Z&&f.Z.locals&&f.Z.locals;var P=a(1900),b=a(2102),S=a.n(b),w=(0,P.Z)(r,undefined,undefined,!1,null,"7aad13a0",null);"function"==typeof S()&&S()(w);const N=w.exports},6594:(e,t,a)=>{"use strict";a.d(t,{default:()=>P});const o={name:"NcCounterBubble",props:{type:{type:String,default:"",validator:function(e){return-1!==["highlighted","outlined",""].indexOf(e)}}},computed:{counterClassObject:function(){return{"counter-bubble__counter--highlighted":"highlighted"===this.type,"counter-bubble__counter--outlined":"outlined"===this.type}}}};var i=a(3379),n=a.n(i),s=a(7795),r=a.n(s),l=a(569),c=a.n(l),m=a(3565),d=a.n(m),u=a(9216),p=a.n(u),h=a(4589),g=a.n(h),v=a(2600),k={};k.styleTagTransform=g(),k.setAttributes=d(),k.insert=c().bind(null,"head"),k.domAPI=r(),k.insertStyleElement=p();n()(v.Z,k);v.Z&&v.Z.locals&&v.Z.locals;var A=a(1900),y=a(7633),f=a.n(y),C=(0,A.Z)(o,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"counter-bubble__counter",class:e.counterClassObject},[e._t("default")],2)}),[],!1,null,"df4551c0",null);"function"==typeof f()&&f()(C);const P=C.exports},2297:(e,t,a)=>{"use strict";a.d(t,{default:()=>E});var o=a(9454),i=a(4505),n=a(1206);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function r(){r=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,o=Object.defineProperty||function(e,t,a){e[t]=a.value},i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function m(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{m({},"")}catch(e){m=function(e,t,a){return e[t]=a}}function d(e,t,a,i){var n=t&&t.prototype instanceof h?t:h,s=Object.create(n.prototype),r=new j(i||[]);return o(s,"_invoke",{value:b(e,a,r)}),s}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var p={};function h(){}function g(){}function v(){}var k={};m(k,n,(function(){return this}));var A=Object.getPrototypeOf,y=A&&A(A(O([])));y&&y!==t&&a.call(y,n)&&(k=y);var f=v.prototype=h.prototype=Object.create(k);function C(e){["next","throw","return"].forEach((function(t){m(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function i(o,n,r,l){var c=u(e[o],e,n);if("throw"!==c.type){var m=c.arg,d=m.value;return d&&"object"==s(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){i("next",e,r,l)}),(function(e){i("throw",e,r,l)})):t.resolve(d).then((function(e){m.value=e,r(m)}),(function(e){return i("throw",e,r,l)}))}l(c.arg)}var n;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,o){i(e,a,t,o)}))}return n=n?n.then(o,o):o()}})}function b(e,t,a){var o="suspendedStart";return function(i,n){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw n;return E()}for(a.method=i,a.arg=n;;){var s=a.delegate;if(s){var r=S(s,a);if(r){if(r===p)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===o)throw o="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o="executing";var l=u(e,t,a);if("normal"===l.type){if(o=a.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(o="completed",a.method="throw",a.arg=l.arg)}}}function S(e,t){var a=t.method,o=e.iterator[a];if(void 0===o)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var i=u(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var n=i.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function O(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return g.prototype=v,o(f,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:g,configurable:!0}),g.displayName=m(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,m(e,c,"GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},C(P.prototype),m(P.prototype,l,(function(){return this})),e.AsyncIterator=P,e.async=function(t,a,o,i,n){void 0===n&&(n=Promise);var s=new P(d(t,a,o,i),n);return e.isGeneratorFunction(a)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},C(f),m(f,c,"Generator"),m(f,n,(function(){return this})),m(f,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var o in t)a.push(o);return a.reverse(),function e(){for(;a.length;){var o=a.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(a,o){return s.type="throw",s.arg=e,t.next=a,o&&(t.method="next",t.arg=void 0),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],s=n.completion;if("root"===n.tryLoc)return o("end");if(n.tryLoc<=this.prev){var r=a.call(n,"catchLoc"),l=a.call(n,"finallyLoc");if(r&&l){if(this.prev<n.catchLoc)return o(n.catchLoc,!0);if(this.prev<n.finallyLoc)return o(n.finallyLoc)}else if(r){if(this.prev<n.catchLoc)return o(n.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return o(n.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=e,s.arg=t,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var o=a.completion;if("throw"===o.type){var i=o.arg;N(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}function l(e,t,a,o,i,n,s){try{var r=e[n](s),l=r.value}catch(e){return void a(e)}r.done?t(l):Promise.resolve(l).then(o,i)}const c={name:"NcPopover",components:{Dropdown:o.Dropdown},inheritAttrs:!1,props:{popoverBaseClass:{type:String,default:""},focusTrap:{type:Boolean,default:!0},setReturnFocus:{default:void 0,type:[HTMLElement,SVGElement,String,Boolean]}},emits:["after-show","after-hide"],beforeDestroy:function(){this.clearFocusTrap()},methods:{useFocusTrap:function(){var e,t=this;return(e=r().mark((function e(){var a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(t.focusTrap){e.next=4;break}return e.abrupt("return");case 4:if(o=null===(a=t.$refs.popover)||void 0===a||null===(a=a.$refs.popperContent)||void 0===a?void 0:a.$el){e.next=7;break}return e.abrupt("return");case 7:t.$focusTrap=(0,i.createFocusTrap)(o,{escapeDeactivates:!1,allowOutsideClick:!0,setReturnFocus:t.setReturnFocus,trapStack:(0,n.L)()}),t.$focusTrap.activate();case 9:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(o,i){var n=e.apply(t,a);function s(e){l(n,o,i,s,r,"next",e)}function r(e){l(n,o,i,s,r,"throw",e)}s(void 0)}))})()},clearFocusTrap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t;null===(t=this.$focusTrap)||void 0===t||t.deactivate(e),this.$focusTrap=null}catch(e){console.warn(e)}},afterShow:function(){var e=this;this.$nextTick((function(){e.$emit("after-show"),e.useFocusTrap()}))},afterHide:function(){this.$emit("after-hide"),this.clearFocusTrap()}}},m=c;var d=a(3379),u=a.n(d),p=a(7795),h=a.n(p),g=a(569),v=a.n(g),k=a(3565),A=a.n(k),y=a(9216),f=a.n(y),C=a(4589),P=a.n(C),b=a(1625),S={};S.styleTagTransform=P(),S.setAttributes=A(),S.insert=v().bind(null,"head"),S.domAPI=h(),S.insertStyleElement=f();u()(b.Z,S);b.Z&&b.Z.locals&&b.Z.locals;var w=a(1900),N=a(2405),j=a.n(N),O=(0,w.Z)(m,(function(){var e=this;return(0,e._self._c)("Dropdown",e._g(e._b({ref:"popover",attrs:{distance:10,"arrow-padding":10,"no-auto-focus":!0,"popper-class":e.popoverBaseClass},on:{"apply-show":e.afterShow,"apply-hide":e.afterHide},scopedSlots:e._u([{key:"popper",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},"Dropdown",e.$attrs,!1),e.$listeners),[e._t("trigger")],2)}),[],!1,null,null,null);"function"==typeof j()&&j()(O);const E=O.exports},3329:(e,t,a)=>{"use strict";a.d(t,{default:()=>i});const o={name:"NcVNodes",props:{vnodes:{type:[Array,Object],default:null}},render:function(e){var t,a,o;return this.vnodes||(null===(t=this.$slots)||void 0===t?void 0:t.default)||(null===(a=this.$scopedSlots)||void 0===a||null===(o=a.default)||void 0===o?void 0:o.call(a))}};const i=(0,a(1900).Z)(o,undefined,undefined,!1,null,null,null).exports},932:(e,t,a)=>{"use strict";a.d(t,{t:()=>s});var o=a(7931),i=(0,o.getGettextBuilder)().detectLocale();[{locale:"af",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ar",translations:{"{tag} (invisible)":"{tag} (غير مرئي)","{tag} (restricted)":"{tag} (مقيد)","a few seconds ago":"منذ عدة ثوانٍ مضت",Actions:"الإجراءات",'Actions for item with name "{name}"':'إجراءات على العنصر المُسمَّى "{name}"',Activities:"الحركات","Animals & Nature":"الحيوانات والطبيعة","Any link":"أيَّ رابطٍ","Anything shared with the same group of people will show up here":"أي مادة تمت مشاركتها مع نفس المجموعة من الأشخاص سيتم عرضها هنا","Avatar of {displayName}":"الرمز التجسيدي avatar ـ {displayName}  ","Avatar of {displayName}, {status}":"الرمز التجسيدي لـ {displayName}، {status}",Back:"عودة","Back to provider selection":"عودة إلى اختيار المُزوِّد","Cancel changes":"إلغاء التغييرات","Change name":"تغيير الاسم",Choose:"إختَر","Clear search":"محو البحث","Clear text":"محو النص",Close:"أغلِق","Close modal":"أغلِق النافذة الصُّورِية","Close navigation":"أغلِق المُتصفِّح","Close sidebar":"قفل الشريط الجانبي","Close Smart Picker":"أغلِق اللاقط الذكي Smart Picker","Collapse menu":"طَيّ القائمة","Confirm changes":"تأكيد التغييرات",Custom:"مُخصَّص","Edit item":"تعديل عنصر","Enter link":"أدخِل الرابط","Error getting related resources. Please contact your system administrator if you have any questions.":"خطأ في الحصول على الموارد ذات الصلة. يرجى الاتصال بمشرف النظام عندك إذا كان لديك أيّ أسئلة.","External documentation for {name}":"التوثيق الخارجي لـ {name}",Favorite:"المُفضَّلة",Flags:"الأعلام","Food & Drink":"الطعام والشراب","Frequently used":"شائعة الاستعمال",Global:"شامل","Go back to the list":"عودة إلى القائمة","Hide password":"إخفاء كلمة المرور",'Load more "{options}""':'حمّل "{options}"" أكثر',"Message limit of {count} characters reached":"تمّ الوصول إلى الحد الأقصى لعدد الأحرف في الرسالة: {count} حرف","More items …":"عناصر أخرى ...","More options":"خيارات أخرى ...",Next:"التالي","No emoji found":"لم يتم العثور على أي إيموجي emoji","No link provider found":"لا يوجد أيّ مزود روابط link provider","No results":"ليس هناك أية نتيجة",Objects:"أشياء","Open contact menu":"إفتَح قائمة جهات الاتصال",'Open link to "{resourceName}"':'إفتَح الرابط إلى "{resourceName}"',"Open menu":"إفتَح القائمة","Open navigation":"إفتَح المتصفح","Open settings menu":"إفتَح قائمة الإعدادات","Password is secure":"كلمة المرور مُؤمّنة","Pause slideshow":"تجميد عرض الشرائح","People & Body":"ناس و أجسام","Pick a date":"إختَر التاريخ","Pick a date and a time":"إختَر التاريخ و الوقت","Pick a month":"إختَر الشهر","Pick a time":"إختَر الوقت","Pick a week":"إختَر الأسبوع","Pick a year":"إختَر السنة","Pick an emoji":"إختَر رمز إيموجي emoji","Please select a time zone:":"الرجاء تحديد المنطقة الزمنية:",Previous:"السابق","Provider icon":"أيقونة المُزوِّد","Raw link {options}":" الرابط الخام raw link ـ {options}","Related resources":"مصادر ذات صلة",Search:"بحث","Search emoji":"بحث عن إيموجي emoji","Search results":"نتائج البحث","sec. ago":"ثانية مضت","seconds ago":"ثوان مضت","Select a tag":"إختَر سِمَةً tag","Select provider":"إختَر مٌزوِّداً",Settings:"الإعدادات","Settings navigation":"إعدادات التّصفُّح","Show password":"أظهِر كلمة المرور","Smart Picker":"اللاقط الذكي smart picker","Smileys & Emotion":"وجوهٌ ضاحكة و مشاعر","Start slideshow":"إبدإ العرض","Start typing to search":"إبدإ كتابة مفردات البحث",Submit:"إرسال",Symbols:"رموز","Travel & Places":"سفر و أماكن","Type to search time zone":"أكتُب للبحث عن منطقة زمنية","Unable to search the group":"تعذّر البحث في المجموعة","Undo changes":"تراجع عن التغييرات",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'أكتُب رسالةً؛ إستعمِل "@" للإشارة إلى شخص ما، و استخدم ":" للإكمال التلقائي لرموز الإيموجي ...'}},{locale:"ast",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"az",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"be",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"bg",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"bn_BD",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"br",translations:{"{tag} (invisible)":"{tag} (diwelus)","{tag} (restricted)":"{tag} (bevennet)","a few seconds ago":"",Actions:"Oberioù",'Actions for item with name "{name}"':"",Activities:"Oberiantizoù","Animals & Nature":"Loened & Natur","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Dibab","Clear search":"","Clear text":"",Close:"Serriñ","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"Personelañ","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Bannieloù","Food & Drink":"Boued & Evajoù","Frequently used":"Implijet alies",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"Da heul","No emoji found":"Emoji ebet kavet","No link provider found":"","No results":"Disoc'h ebet",Objects:"Traoù","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Arsav an diaporama","People & Body":"Tud & Korf","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Choaz un emoji","Please select a time zone:":"",Previous:"A-raok","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Klask","Search emoji":"","Search results":"Disoc'hoù an enklask","sec. ago":"","seconds ago":"","Select a tag":"Choaz ur c'hlav","Select provider":"",Settings:"Arventennoù","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"Smileyioù & Fromoù","Start slideshow":"Kregiñ an diaporama","Start typing to search":"",Submit:"",Symbols:"Arouezioù","Travel & Places":"Beaj & Lec'hioù","Type to search time zone":"","Unable to search the group":"Dibosupl eo klask ar strollad","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"bs",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ca",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringit)","a few seconds ago":"",Actions:"Accions",'Actions for item with name "{name}"':"",Activities:"Activitats","Animals & Nature":"Animals i natura","Any link":"","Anything shared with the same group of people will show up here":"Qualsevol cosa compartida amb el mateix grup de persones es mostrarà aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Cancel·la els canvis","Change name":"",Choose:"Tria","Clear search":"","Clear text":"Netejar text",Close:"Tanca","Close modal":"Tancar el mode","Close navigation":"Tanca la navegació","Close sidebar":"Tancar la barra lateral","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Confirmeu els canvis",Custom:"Personalitzat","Edit item":"Edita l'element","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Preferit",Flags:"Marques","Food & Drink":"Menjar i begudes","Frequently used":"Utilitzats recentment",Global:"Global","Go back to the list":"Torna a la llista","Hide password":"Amagar contrasenya",'Load more "{options}""':"","Message limit of {count} characters reached":"S'ha arribat al límit de {count} caràcters per missatge","More items …":"Més artícles...","More options":"",Next:"Següent","No emoji found":"No s'ha trobat cap emoji","No link provider found":"","No results":"Sense resultats",Objects:"Objectes","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Obre la navegació","Open settings menu":"","Password is secure":"Contrasenya segura<br>","Pause slideshow":"Atura la presentació","People & Body":"Persones i cos","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Trieu un emoji","Please select a time zone:":"Seleccioneu una zona horària:",Previous:"Anterior","Provider icon":"","Raw link {options}":"","Related resources":"Recursos relacionats",Search:"Cerca","Search emoji":"","Search results":"Resultats de cerca","sec. ago":"","seconds ago":"","Select a tag":"Seleccioneu una etiqueta","Select provider":"",Settings:"Paràmetres","Settings navigation":"Navegació d'opcions","Show password":"Mostrar contrasenya","Smart Picker":"","Smileys & Emotion":"Cares i emocions","Start slideshow":"Inicia la presentació","Start typing to search":"",Submit:"Envia",Symbols:"Símbols","Travel & Places":"Viatges i llocs","Type to search time zone":"Escriviu per cercar la zona horària","Unable to search the group":"No es pot cercar el grup","Undo changes":"Desfés els canvis",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escriu missatge, fes servir "@" per esmentar algú, fes servir ":" per autocompletar emojis...'}},{locale:"cs",translations:{"{tag} (invisible)":"{tag} (neviditelné)","{tag} (restricted)":"{tag} (omezené)","a few seconds ago":"před několika sekundami",Actions:"Akce",'Actions for item with name "{name}"':"Akce pro položku s názvem „{name}“",Activities:"Aktivity","Animals & Nature":"Zvířata a příroda","Any link":"Jakýkoli odkaz","Anything shared with the same group of people will show up here":"Cokoli nasdíleného stejné skupině lidí se zobrazí zde","Avatar of {displayName}":"Zástupný obrázek uživatele {displayName}","Avatar of {displayName}, {status}":"Zástupný obrázek uživatele {displayName}, {status}",Back:"Zpět","Back to provider selection":"Zpět na výběr poskytovatele","Cancel changes":"Zrušit změny","Change name":"Změnit název",Choose:"Zvolit","Clear search":"Vyčistit vyhledávání","Clear text":"Čitelný text",Close:"Zavřít","Close modal":"Zavřít dialogové okno","Close navigation":"Zavřít navigaci","Close sidebar":"Zavřít postranní panel","Close Smart Picker":"Zavřít inteligentní výběr","Collapse menu":"Sbalit nabídku","Confirm changes":"Potvrdit změny",Custom:"Uživatelsky určené","Edit item":"Upravit položku","Enter link":"Zadat odkaz","Error getting related resources. Please contact your system administrator if you have any questions.":"Chyba při získávání souvisejících prostředků. Pokud máte jakékoli dotazy, obraťte se na správce vámi využívaného systému.","External documentation for {name}":"Externí dokumentace pro {name}",Favorite:"Oblíbené",Flags:"Příznaky","Food & Drink":"Jídlo a pití","Frequently used":"Často používané",Global:"Globální","Go back to the list":"Jít zpět na seznam","Hide password":"Skrýt heslo",'Load more "{options}""':"Načíst více „{options}“","Message limit of {count} characters reached":"Dosaženo limitu počtu ({count}) znaků zprávy","More items …":"Další položky…","More options":"Další volby",Next:"Následující","No emoji found":"Nenalezeno žádné emoji","No link provider found":"Nenalezen žádný poskytovatel odkazů","No results":"Nic nenalezeno",Objects:"Objekty","Open contact menu":"Otevřít nabídku kontaktů",'Open link to "{resourceName}"':"Otevřít odkaz na „{resourceName}“","Open menu":"Otevřít nabídku","Open navigation":"Otevřít navigaci","Open settings menu":"Otevřít nabídku nastavení","Password is secure":"Heslo je bezpečné","Pause slideshow":"Pozastavit prezentaci","People & Body":"Lidé a tělo","Pick a date":"Vybrat datum","Pick a date and a time":"Vybrat datum a čas","Pick a month":"Vybrat měsíc","Pick a time":"Vybrat čas","Pick a week":"Vybrat týden","Pick a year":"Vybrat rok","Pick an emoji":"Vybrat emoji","Please select a time zone:":"Vyberte časovou zónu:",Previous:"Předchozí","Provider icon":"Ikona poskytovatele","Raw link {options}":"Holý odkaz {options}","Related resources":"Související prostředky",Search:"Hledat","Search emoji":"Hledat emoji","Search results":"Výsledky hledání","sec. ago":"sek. před","seconds ago":"sekund předtím","Select a tag":"Vybrat štítek","Select provider":"Vybrat poskytovatele",Settings:"Nastavení","Settings navigation":"Pohyb po nastavení","Show password":"Zobrazit heslo","Smart Picker":"Inteligentní výběr","Smileys & Emotion":"Úsměvy a emoce","Start slideshow":"Spustit prezentaci","Start typing to search":"Vyhledávejte psaním",Submit:"Odeslat",Symbols:"Symboly","Travel & Places":"Cestování a místa","Type to search time zone":"Psaním vyhledejte časovou zónu","Unable to search the group":"Nedaří se hledat skupinu","Undo changes":"Vzít změny zpět",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Napište zprávu – pokud chcete někoho zmínit, napište před jeho uživatelským jménem „@“ (zavináč); automatické doplňování emotikonů zahájíte napsáním „:“ (dvojtečky)…"}},{locale:"cy_GB",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"da",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (begrænset)","a few seconds ago":"et par sekunder siden",Actions:"Handlinger",'Actions for item with name "{name}"':'Handlinger for element med navnet "{name}"',Activities:"Aktiviteter","Animals & Nature":"Dyr & Natur","Any link":"Ethvert link","Anything shared with the same group of people will show up here":"Alt der deles med samme gruppe af personer vil vises her","Avatar of {displayName}":"Avatar af {displayName}","Avatar of {displayName}, {status}":"Avatar af {displayName}, {status}",Back:"Tilbage","Back to provider selection":"Tilbage til udbydervalg","Cancel changes":"Annuller ændringer","Change name":"Ændre navn",Choose:"Vælg","Clear search":"Ryd søgning","Clear text":"Ryd tekst",Close:"Luk","Close modal":"Luk vindue","Close navigation":"Luk navigation","Close sidebar":"Luk sidepanel","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Bekræft ændringer",Custom:"Brugerdefineret","Edit item":"Rediger emne","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favorit",Flags:"Flag","Food & Drink":"Mad & Drikke","Frequently used":"Ofte brugt",Global:"Global","Go back to the list":"Tilbage til listen","Hide password":"Skjul kodeord",'Load more "{options}""':"","Message limit of {count} characters reached":"Begrænsning på {count} tegn er nået","More items …":"Mere ...","More options":"",Next:"Videre","No emoji found":"Ingen emoji fundet","No link provider found":"","No results":"Ingen resultater",Objects:"Objekter","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Åbn navigation","Open settings menu":"","Password is secure":"Kodeordet er sikkert","Pause slideshow":"Suspender fremvisning","People & Body":"Mennesker & Menneskekroppen","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Vælg en emoji","Please select a time zone:":"Vælg venligst en tidszone:",Previous:"Forrige","Provider icon":"","Raw link {options}":"","Related resources":"Relaterede emner",Search:"Søg","Search emoji":"","Search results":"Søgeresultater","sec. ago":"","seconds ago":"","Select a tag":"Vælg et mærke","Select provider":"",Settings:"Indstillinger","Settings navigation":"Naviger i indstillinger","Show password":"Vis kodeord","Smart Picker":"","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start fremvisning","Start typing to search":"",Submit:"Send",Symbols:"Symboler","Travel & Places":"Rejser & Rejsemål","Type to search time zone":"Indtast for at søge efter tidszone","Unable to search the group":"Kan ikke søge på denne gruppe","Undo changes":"Fortryd ændringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv besked, brug "@" for at nævne nogen, brug ":" til emoji-autofuldførelse ...'}},{locale:"de",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)","a few seconds ago":"",Actions:"Aktionen",'Actions for item with name "{name}"':"",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Any link":"","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Änderungen verwerfen","Change name":"",Choose:"Auswählen","Clear search":"","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen",'Load more "{options}""':"","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …","More options":"",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No link provider found":"","No results":"Keine Ergebnisse",Objects:"Gegenstände","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Navigation öffnen","Open settings menu":"","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte wählen Sie eine Zeitzone:",Previous:"Vorherige","Provider icon":"","Raw link {options}":"","Related resources":"Verwandte Ressourcen",Search:"Suche","Search emoji":"","Search results":"Suchergebnisse","sec. ago":"","seconds ago":"","Select a tag":"Schlagwort auswählen","Select provider":"",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smart Picker":"","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten","Start typing to search":"",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um Zeitzone zu suchen","Unable to search the group":"Die Gruppe konnte nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"de_DE",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)","a few seconds ago":"vor ein paar Sekunden",Actions:"Aktionen",'Actions for item with name "{name}"':'Aktionen für Element mit dem Namen "{name}“',Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Any link":"Irgendein Link","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}",Back:"Zurück","Back to provider selection":"Zurück zur Anbieterauswahl","Cancel changes":"Änderungen verwerfen","Change name":"Namen ändern",Choose:"Auswählen","Clear search":"Suche leeren","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Close Smart Picker":"Intelligente Auswahl schließen","Collapse menu":"Menü einklappen","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Enter link":"Link eingeben","Error getting related resources. Please contact your system administrator if you have any questions.":"Fehler beim Abrufen verwandter Ressourcen. Bei Fragen wenden Sie sich bitte an Ihren Systemadministrator.","External documentation for {name}":"Externe Dokumentation für {name}",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen",'Load more "{options}""':'Weitere "{options}“ laden',"Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …","More options":"Mehr Optionen",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No link provider found":"Kein Linkanbieter gefunden","No results":"Keine Ergebnisse",Objects:"Objekte","Open contact menu":"Kontaktmenü öffnen",'Open link to "{resourceName}"':'Link zu "{resourceName}“ öffnen',"Open menu":"Menü öffnen","Open navigation":"Navigation öffnen","Open settings menu":"Einstellungsmenü öffnen","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick a date":"Ein Datum auswählen","Pick a date and a time":"Datum und Uhrzeit auswählen","Pick a month":"Einen Monat auswählen","Pick a time":"Eine Uhrzeit auswählen","Pick a week":"Eine Woche auswählen","Pick a year":"Ein Jahr auswählen","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte eine Zeitzone auswählen:",Previous:"Vorherige","Provider icon":"Anbietersymbol","Raw link {options}":"Unverarbeiteter Link {Optionen}","Related resources":"Verwandte Ressourcen",Search:"Suche","Search emoji":"Emoji suchen","Search results":"Suchergebnisse","sec. ago":"Sek. zuvor","seconds ago":"Sekunden zuvor","Select a tag":"Schlagwort auswählen","Select provider":"Anbieter auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smart Picker":"Intelligente Auswahl","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten","Start typing to search":"Mit der Eingabe beginnen, um zu suchen",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um eine Zeitzone zu suchen","Unable to search the group":"Die Gruppe kann nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"el",translations:{"{tag} (invisible)":"{tag} (αόρατο)","{tag} (restricted)":"{tag} (περιορισμένο)","a few seconds ago":"",Actions:"Ενέργειες",'Actions for item with name "{name}"':"",Activities:"Δραστηριότητες","Animals & Nature":"Ζώα & Φύση","Any link":"","Anything shared with the same group of people will show up here":"Οτιδήποτε μοιράζεται με την ίδια ομάδα ατόμων θα εμφανίζεται εδώ","Avatar of {displayName}":"Άβαταρ του {displayName}","Avatar of {displayName}, {status}":"Άβαταρ του {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Ακύρωση αλλαγών","Change name":"",Choose:"Επιλογή","Clear search":"","Clear text":"Εκκαθάριση κειμένου",Close:"Κλείσιμο","Close modal":"Βοηθητικό κλείσιμο","Close navigation":"Κλείσιμο πλοήγησης","Close sidebar":"Κλείσιμο πλευρικής μπάρας","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Επιβεβαίωση αλλαγών",Custom:"Προσαρμογή","Edit item":"Επεξεργασία","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Αγαπημένα",Flags:"Σημαίες","Food & Drink":"Φαγητό & Ποτό","Frequently used":"Συχνά χρησιμοποιούμενο",Global:"Καθολικό","Go back to the list":"Επιστροφή στην αρχική λίστα ","Hide password":"Απόκρυψη κωδικού πρόσβασης",'Load more "{options}""':"","Message limit of {count} characters reached":"Συμπληρώθηκε το όριο των {count} χαρακτήρων του μηνύματος","More items …":"Περισσότερα στοιχεία …","More options":"",Next:"Επόμενο","No emoji found":"Δεν βρέθηκε emoji","No link provider found":"","No results":"Κανένα αποτέλεσμα",Objects:"Αντικείμενα","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Άνοιγμα πλοήγησης","Open settings menu":"","Password is secure":"Ο κωδικός πρόσβασης είναι ασφαλής","Pause slideshow":"Παύση προβολής διαφανειών","People & Body":"Άνθρωποι & Σώμα","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Επιλέξτε ένα emoji","Please select a time zone:":"Παρακαλούμε επιλέξτε μια ζώνη ώρας:",Previous:"Προηγούμενο","Provider icon":"","Raw link {options}":"","Related resources":"Σχετικοί πόροι",Search:"Αναζήτηση","Search emoji":"","Search results":"Αποτελέσματα αναζήτησης","sec. ago":"","seconds ago":"","Select a tag":"Επιλογή ετικέτας","Select provider":"",Settings:"Ρυθμίσεις","Settings navigation":"Πλοήγηση ρυθμίσεων","Show password":"Εμφάνιση κωδικού πρόσβασης","Smart Picker":"","Smileys & Emotion":"Φατσούλες & Συναίσθημα","Start slideshow":"Έναρξη προβολής διαφανειών","Start typing to search":"",Submit:"Υποβολή",Symbols:"Σύμβολα","Travel & Places":"Ταξίδια & Τοποθεσίες","Type to search time zone":"Πληκτρολογήστε για αναζήτηση ζώνης ώρας","Unable to search the group":"Δεν είναι δυνατή η αναζήτηση της ομάδας","Undo changes":"Αναίρεση Αλλαγών",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Γράψτε μήνυμα, χρησιμοποιείστε "@" για να αναφέρετε κάποιον, χρησιμοποιείστε ":" για αυτόματη συμπλήρωση emoji …'}},{locale:"en_GB",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)","a few seconds ago":"a few seconds ago",Actions:"Actions",'Actions for item with name "{name}"':'Actions for item with name "{name}"',Activities:"Activities","Animals & Nature":"Animals & Nature","Any link":"Any link","Anything shared with the same group of people will show up here":"Anything shared with the same group of people will show up here","Avatar of {displayName}":"Avatar of {displayName}","Avatar of {displayName}, {status}":"Avatar of {displayName}, {status}",Back:"Back","Back to provider selection":"Back to provider selection","Cancel changes":"Cancel changes","Change name":"Change name",Choose:"Choose","Clear search":"Clear search","Clear text":"Clear text",Close:"Close","Close modal":"Close modal","Close navigation":"Close navigation","Close sidebar":"Close sidebar","Close Smart Picker":"Close Smart Picker","Collapse menu":"Collapse menu","Confirm changes":"Confirm changes",Custom:"Custom","Edit item":"Edit item","Enter link":"Enter link","Error getting related resources. Please contact your system administrator if you have any questions.":"Error getting related resources. Please contact your system administrator if you have any questions.","External documentation for {name}":"External documentation for {name}",Favorite:"Favourite",Flags:"Flags","Food & Drink":"Food & Drink","Frequently used":"Frequently used",Global:"Global","Go back to the list":"Go back to the list","Hide password":"Hide password",'Load more "{options}""':'Load more "{options}""',"Message limit of {count} characters reached":"Message limit of {count} characters reached","More items …":"More items …","More options":"More options",Next:"Next","No emoji found":"No emoji found","No link provider found":"No link provider found","No results":"No results",Objects:"Objects","Open contact menu":"Open contact menu",'Open link to "{resourceName}"':'Open link to "{resourceName}"',"Open menu":"Open menu","Open navigation":"Open navigation","Open settings menu":"Open settings menu","Password is secure":"Password is secure","Pause slideshow":"Pause slideshow","People & Body":"People & Body","Pick a date":"Pick a date","Pick a date and a time":"Pick a date and a time","Pick a month":"Pick a month","Pick a time":"Pick a time","Pick a week":"Pick a week","Pick a year":"Pick a year","Pick an emoji":"Pick an emoji","Please select a time zone:":"Please select a time zone:",Previous:"Previous","Provider icon":"Provider icon","Raw link {options}":"Raw link {options}","Related resources":"Related resources",Search:"Search","Search emoji":"Search emoji","Search results":"Search results","sec. ago":"sec. ago","seconds ago":"seconds ago","Select a tag":"Select a tag","Select provider":"Select provider",Settings:"Settings","Settings navigation":"Settings navigation","Show password":"Show password","Smart Picker":"Smart Picker","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start slideshow","Start typing to search":"Start typing to search",Submit:"Submit",Symbols:"Symbols","Travel & Places":"Travel & Places","Type to search time zone":"Type to search time zone","Unable to search the group":"Unable to search the group","Undo changes":"Undo changes",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Write message, use "@" to mention someone, use ":" for emoji autocompletion …'}},{locale:"eo",translations:{"{tag} (invisible)":"{tag} (kaŝita)","{tag} (restricted)":"{tag} (limigita)","a few seconds ago":"",Actions:"Agoj",'Actions for item with name "{name}"':"",Activities:"Aktiveco","Animals & Nature":"Bestoj & Naturo","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Elektu","Clear search":"","Clear text":"",Close:"Fermu","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"Propra","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Flagoj","Food & Drink":"Manĝaĵo & Trinkaĵo","Frequently used":"Ofte uzataj",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"La limo je {count} da literoj atingita","More items …":"","More options":"",Next:"Sekva","No emoji found":"La emoĝio forestas","No link provider found":"","No results":"La rezulto forestas",Objects:"Objektoj","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Payzi bildprezenton","People & Body":"Homoj & Korpo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Elekti emoĝion ","Please select a time zone:":"",Previous:"Antaŭa","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Serĉi","Search emoji":"","Search results":"Serĉrezultoj","sec. ago":"","seconds ago":"","Select a tag":"Elektu etikedon","Select provider":"",Settings:"Agordo","Settings navigation":"Agorda navigado","Show password":"","Smart Picker":"","Smileys & Emotion":"Ridoj kaj Emocioj","Start slideshow":"Komenci bildprezenton","Start typing to search":"",Submit:"",Symbols:"Signoj","Travel & Places":"Vojaĵoj & Lokoj","Type to search time zone":"","Unable to search the group":"Ne eblas serĉi en la grupo","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringido)","a few seconds ago":"hace unos pocos segundos",Actions:"Acciones",'Actions for item with name "{name}"':'Acciones para el elemento con nombre "{name}"',Activities:"Actividades","Animals & Nature":"Animales y naturaleza","Any link":"Cualquier enlace","Anything shared with the same group of people will show up here":"Cualquier cosa que sea compartida con el mismo grupo de personas se mostrará aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"Atrás","Back to provider selection":"Volver a la selección de proveedor","Cancel changes":"Cancelar cambios","Change name":"Cambiar nombre",Choose:"Elegir","Clear search":"Limpiar búsqueda","Clear text":"Limpiar texto",Close:"Cerrar","Close modal":"Cerrar modal","Close navigation":"Cerrar navegación","Close sidebar":"Cerrar barra lateral","Close Smart Picker":"Cerrar selector inteligente","Collapse menu":"Ocultar menú","Confirm changes":"Confirmar cambios",Custom:"Personalizado","Edit item":"Editar elemento","Enter link":"Ingrese enlace","Error getting related resources. Please contact your system administrator if you have any questions.":"Error al obtener recursos relacionados. Por favor, contacta a tu administrador del sistema si tienes alguna pregunta.","External documentation for {name}":"Documentación externa para {name}",Favorite:"Favorito",Flags:"Banderas","Food & Drink":"Comida y bebida","Frequently used":"Usado con frecuenca",Global:"Global","Go back to the list":"Volver a la lista","Hide password":"Ocultar contraseña",'Load more "{options}""':'Cargar más "{options}"',"Message limit of {count} characters reached":"El mensaje ha alcanzado el límite de {count} caracteres","More items …":"Más ítems...","More options":"Más opciones",Next:"Siguiente","No emoji found":"No hay ningún emoji","No link provider found":"No se encontró ningún proveedor de enlaces","No results":" Ningún resultado",Objects:"Objetos","Open contact menu":"Abrir menú de contactos",'Open link to "{resourceName}"':'Abrir enlace a "{resourceName}"',"Open menu":"Abrir menú","Open navigation":"Abrir navegación","Open settings menu":"Abrir menú de ajustes","Password is secure":"La contraseña es segura","Pause slideshow":"Pausar la presentación ","People & Body":"Personas y cuerpos","Pick a date":"Seleccione una fecha","Pick a date and a time":"Seleccione una fecha y hora","Pick a month":"Seleccione un mes","Pick a time":"Seleccione una hora","Pick a week":"Seleccione una semana","Pick a year":"Seleccione un año","Pick an emoji":"Elegir un emoji","Please select a time zone:":"Por favor elige un huso de horario:",Previous:"Anterior","Provider icon":"Ícono del proveedor","Raw link {options}":"Enlace directo {options}","Related resources":"Recursos relacionados",Search:"Buscar","Search emoji":"Buscar emoji","Search results":"Resultados de la búsqueda","sec. ago":"hace segundos","seconds ago":"segundos atrás","Select a tag":"Seleccione una etiqueta","Select provider":"Seleccione proveedor",Settings:"Ajustes","Settings navigation":"Navegación por ajustes","Show password":"Mostrar contraseña","Smart Picker":"Selector inteligente","Smileys & Emotion":"Smileys y emoticonos","Start slideshow":"Iniciar la presentación","Start typing to search":"Comience a escribir para buscar",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viajes y lugares","Type to search time zone":"Escribe para buscar un huso de horario","Unable to search the group":"No es posible buscar en el grupo","Undo changes":"Deshacer cambios",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escribir mensaje, utilice "@" para mencionar a alguien, utilice ":" para autocompletado de emojis ...'}},{locale:"es_419",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_AR",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_CL",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_CO",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_CR",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_DO",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_EC",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)","a few seconds ago":"hace unos segundos",Actions:"Acciones",'Actions for item with name "{name}"':'Acciones para el elemento con nombre "{name}"',Activities:"Actividades","Animals & Nature":"Animales y Naturaleza","Any link":"Cualquier enlace","Anything shared with the same group of people will show up here":"Cualquier cosa compartida con el mismo grupo de personas aparecerá aquí.","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"Atrás","Back to provider selection":"Volver a la selección de proveedor","Cancel changes":"Cancelar cambios","Change name":"Cambiar nombre",Choose:"Elegir","Clear search":"Limpiar búsqueda","Clear text":"Limpiar texto",Close:"Cerrar","Close modal":"Cerrar modal","Close navigation":"Cerrar navegación","Close sidebar":"Cerrar barra lateral","Close Smart Picker":"Cerrar selector inteligente","Collapse menu":"Ocultar menú","Confirm changes":"Confirmar cambios",Custom:"Personalizado","Edit item":"Editar elemento","Enter link":"Ingresar enlace","Error getting related resources. Please contact your system administrator if you have any questions.":"Error al obtener recursos relacionados. Por favor, contacta a tu administrador del sistema si tienes alguna pregunta.","External documentation for {name}":"Documentación externa para {name}",Favorite:"Favorito",Flags:"Marcas","Food & Drink":"Comida y Bebida","Frequently used":"Frecuentemente utilizado",Global:"Global","Go back to the list":"Volver a la lista","Hide password":"Ocultar contraseña",'Load more "{options}""':'Cargar más "{options}"',"Message limit of {count} characters reached":"Se ha alcanzado el límite de caracteres del mensaje {count}","More items …":"Más elementos...","More options":"Más opciones",Next:"Siguiente","No emoji found":"No se encontró ningún emoji","No link provider found":"No se encontró ningún proveedor de enlaces","No results":"Sin resultados",Objects:"Objetos","Open contact menu":"Abrir menú de contactos",'Open link to "{resourceName}"':'Abrir enlace a "{resourceName}"',"Open menu":"Abrir menú","Open navigation":"Abrir navegación","Open settings menu":"Abrir menú de configuración","Password is secure":"La contraseña es segura","Pause slideshow":"Pausar presentación de diapositivas","People & Body":"Personas y Cuerpo","Pick a date":"Seleccionar una fecha","Pick a date and a time":"Seleccionar una fecha y una hora","Pick a month":"Seleccionar un mes","Pick a time":"Seleccionar una semana","Pick a week":"Seleccionar una semana","Pick a year":"Seleccionar un año","Pick an emoji":"Seleccionar un emoji","Please select a time zone:":"Por favor, selecciona una zona horaria:",Previous:"Anterior","Provider icon":"Ícono del proveedor","Raw link {options}":"Enlace directo {options}","Related resources":"Recursos relacionados",Search:"Buscar","Search emoji":"Buscar emoji","Search results":"Resultados de búsqueda","sec. ago":"hace segundos","seconds ago":"Segundos atrás","Select a tag":"Seleccionar una etiqueta","Select provider":"Seleccionar proveedor",Settings:"Configuraciones","Settings navigation":"Navegación de configuraciones","Show password":"Mostrar contraseña","Smart Picker":"Selector inteligente","Smileys & Emotion":"Caritas y Emociones","Start slideshow":"Iniciar presentación de diapositivas","Start typing to search":"Comienza a escribir para buscar",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viajes y Lugares","Type to search time zone":"Escribe para buscar la zona horaria","Unable to search the group":"No se puede buscar en el grupo","Undo changes":"Deshacer cambios",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escribir mensaje, usar "@" para mencionar a alguien, usar ":" para autocompletar emojis...'}},{locale:"es_GT",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_HN",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_MX",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_NI",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_PA",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_PE",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_PR",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_PY",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_SV",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_UY",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"et_EE",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"eu",translations:{"{tag} (invisible)":"{tag} (ikusezina)","{tag} (restricted)":"{tag} (mugatua)","a few seconds ago":"",Actions:"Ekintzak",'Actions for item with name "{name}"':"",Activities:"Jarduerak","Animals & Nature":"Animaliak eta Natura","Any link":"","Anything shared with the same group of people will show up here":"Pertsona-talde berarekin partekatutako edozer agertuko da hemen","Avatar of {displayName}":"{displayName}-(e)n irudia","Avatar of {displayName}, {status}":"{displayName} -(e)n irudia, {status}",Back:"","Back to provider selection":"","Cancel changes":"Ezeztatu aldaketak","Change name":"",Choose:"Aukeratu","Clear search":"","Clear text":"Garbitu testua",Close:"Itxi","Close modal":"Itxi modala","Close navigation":"Itxi nabigazioa","Close sidebar":"Itxi albo-barra","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Baieztatu aldaketak",Custom:"Pertsonalizatua","Edit item":"Editatu elementua","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Gogokoa",Flags:"Banderak","Food & Drink":"Janaria eta edariak","Frequently used":"Askotan erabilia",Global:"Globala","Go back to the list":"Bueltatu zerrendara","Hide password":"Ezkutatu pasahitza",'Load more "{options}""':"","Message limit of {count} characters reached":"Mezuaren {count} karaketere-limitera heldu zara","More items …":"Elementu gehiago …","More options":"",Next:"Hurrengoa","No emoji found":"Ez da emojirik aurkitu","No link provider found":"","No results":"Emaitzarik ez",Objects:"Objektuak","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Ireki nabigazioa","Open settings menu":"","Password is secure":"Pasahitza segurua da","Pause slideshow":"Pausatu diaporama","People & Body":"Jendea eta gorputza","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Hautatu emoji bat","Please select a time zone:":"Mesedez hautatu ordu-zona bat:",Previous:"Aurrekoa","Provider icon":"","Raw link {options}":"","Related resources":"Erlazionatutako baliabideak",Search:"Bilatu","Search emoji":"","Search results":"Bilaketa emaitzak","sec. ago":"","seconds ago":"","Select a tag":"Hautatu etiketa bat","Select provider":"",Settings:"Ezarpenak","Settings navigation":"Nabigazio ezarpenak","Show password":"Erakutsi pasahitza","Smart Picker":"","Smileys & Emotion":"Smileyak eta emozioa","Start slideshow":"Hasi diaporama","Start typing to search":"",Submit:"Bidali",Symbols:"Sinboloak","Travel & Places":"Bidaiak eta lekuak","Type to search time zone":"Idatzi ordu-zona bat bilatzeko","Unable to search the group":"Ezin izan da taldea bilatu","Undo changes":"Aldaketak desegin",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Idatzi mezua, erabili "@" norbait aipatzeko, erabili ":" emojiak automatikoki osatzeko...'}},{locale:"fa",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"fi",translations:{"{tag} (invisible)":"{tag} (näkymätön)","{tag} (restricted)":"{tag} (rajoitettu)","a few seconds ago":"",Actions:"Toiminnot",'Actions for item with name "{name}"':"",Activities:"Aktiviteetit","Animals & Nature":"Eläimet & luonto","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Käyttäjän {displayName} avatar","Avatar of {displayName}, {status}":"Käyttäjän {displayName} avatar, {status}",Back:"","Back to provider selection":"","Cancel changes":"Peruuta muutokset","Change name":"",Choose:"Valitse","Clear search":"","Clear text":"",Close:"Sulje","Close modal":"","Close navigation":"Sulje navigaatio","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Vahvista muutokset",Custom:"Mukautettu","Edit item":"Muokkaa kohdetta","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Liput","Food & Drink":"Ruoka & juoma","Frequently used":"Usein käytetyt",Global:"Yleinen","Go back to the list":"Siirry takaisin listaan","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Viestin merkken enimmäisimäärä {count} täynnä ","More items …":"","More options":"",Next:"Seuraava","No emoji found":"Emojia ei löytynyt","No link provider found":"","No results":"Ei tuloksia",Objects:"Esineet & asiat","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Avaa navigaatio","Open settings menu":"","Password is secure":"","Pause slideshow":"Keskeytä diaesitys","People & Body":"Ihmiset & keho","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Valitse emoji","Please select a time zone:":"Valitse aikavyöhyke:",Previous:"Edellinen","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Etsi","Search emoji":"","Search results":"Hakutulokset","sec. ago":"","seconds ago":"","Select a tag":"Valitse tagi","Select provider":"",Settings:"Asetukset","Settings navigation":"Asetusnavigaatio","Show password":"","Smart Picker":"","Smileys & Emotion":"Hymiöt & tunteet","Start slideshow":"Aloita diaesitys","Start typing to search":"",Submit:"Lähetä",Symbols:"Symbolit","Travel & Places":"Matkustus & kohteet","Type to search time zone":"Kirjoita etsiäksesi aikavyöhyke","Unable to search the group":"Ryhmää ei voi hakea","Undo changes":"Kumoa muutokset",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"fo",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"fr",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restreint)","a few seconds ago":"il y a quelques instants",Actions:"Actions",'Actions for item with name "{name}"':"",Activities:"Activités","Animals & Nature":"Animaux & Nature","Any link":"","Anything shared with the same group of people will show up here":"Tout ce qui est partagé avec le même groupe de personnes apparaîtra ici","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"Retour","Back to provider selection":"","Cancel changes":"Annuler les modifications","Change name":"Modifier le nom",Choose:"Choisir","Clear search":"Effacer la recherche","Clear text":"Effacer le texte",Close:"Fermer","Close modal":"Fermer la fenêtre","Close navigation":"Fermer la navigation","Close sidebar":"Fermer la barre latérale","Close Smart Picker":"","Collapse menu":"Réduire le menu","Confirm changes":"Confirmer les modifications",Custom:"Personnalisé","Edit item":"Éditer l'élément","Enter link":"Saisissez le lien","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"Documentation externe pour {name}",Favorite:"Favori",Flags:"Drapeaux","Food & Drink":"Nourriture & Boissons","Frequently used":"Utilisés fréquemment",Global:"Global","Go back to the list":"Retourner à la liste","Hide password":"Cacher le mot de passe",'Load more "{options}""':"","Message limit of {count} characters reached":"Limite de messages de {count} caractères atteinte","More items …":"Plus d'éléments...","More options":"Plus d'options",Next:"Suivant","No emoji found":"Pas d’émoji trouvé","No link provider found":"","No results":"Aucun résultat",Objects:"Objets","Open contact menu":"Ouvrir le menu Contact",'Open link to "{resourceName}"':"","Open menu":"Ouvrir le menu","Open navigation":"Ouvrir la navigation","Open settings menu":"Ouvrir le menu Paramètres","Password is secure":"Le mot de passe est sécurisé","Pause slideshow":"Mettre le diaporama en pause","People & Body":"Personnes & Corps","Pick a date":"Sélectionner une date","Pick a date and a time":"Sélectionner une date et une heure","Pick a month":"Sélectionner un mois","Pick a time":"Sélectionner une heure","Pick a week":"Sélectionner une semaine","Pick a year":"Sélectionner une année","Pick an emoji":"Choisissez un émoji","Please select a time zone:":"Sélectionnez un fuseau horaire : ",Previous:"Précédent","Provider icon":"","Raw link {options}":"","Related resources":"Ressources liées",Search:"Chercher","Search emoji":"Rechercher un emoji","Search results":"Résultats de recherche","sec. ago":"","seconds ago":"","Select a tag":"Sélectionnez une balise","Select provider":"",Settings:"Paramètres","Settings navigation":"Navigation dans les paramètres","Show password":"Afficher le mot de passe","Smart Picker":"","Smileys & Emotion":"Smileys & Émotions","Start slideshow":"Démarrer le diaporama","Start typing to search":"",Submit:"Valider",Symbols:"Symboles","Travel & Places":"Voyage & Lieux","Type to search time zone":"Saisissez les premiers lettres pour rechercher un fuseau horaire","Unable to search the group":"Impossible de chercher le groupe","Undo changes":"Annuler les changements",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Écrire un message, utiliser "@" pour mentionner une personne, ":" pour l\'autocomplétion des émojis...'}},{locale:"gd",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"gl",translations:{"{tag} (invisible)":"{tag} (invisíbel)","{tag} (restricted)":"{tag} (restrinxido)","a few seconds ago":"",Actions:"Accións",'Actions for item with name "{name}"':"",Activities:"Actividades","Animals & Nature":"Animais e natureza","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"Cancelar os cambios","Change name":"",Choose:"Escoller","Clear search":"","Clear text":"",Close:"Pechar","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Confirma os cambios",Custom:"Personalizado","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Bandeiras","Food & Drink":"Comida e bebida","Frequently used":"Usado con frecuencia",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Acadouse o límite de {count} caracteres por mensaxe","More items …":"","More options":"",Next:"Seguinte","No emoji found":"Non se atopou ningún «emoji»","No link provider found":"","No results":"Sen resultados",Objects:"Obxectos","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Pausar o diaporama","People & Body":"Persoas e corpo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Escolla un «emoji»","Please select a time zone:":"",Previous:"Anterir","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Buscar","Search emoji":"","Search results":"Resultados da busca","sec. ago":"","seconds ago":"","Select a tag":"Seleccione unha etiqueta","Select provider":"",Settings:"Axustes","Settings navigation":"Navegación polos axustes","Show password":"","Smart Picker":"","Smileys & Emotion":"Sorrisos e emocións","Start slideshow":"Iniciar o diaporama","Start typing to search":"",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viaxes e lugares","Type to search time zone":"","Unable to search the group":"Non foi posíbel buscar o grupo","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"he",translations:{"{tag} (invisible)":"{tag} (נסתר)","{tag} (restricted)":"{tag} (מוגבל)","a few seconds ago":"לפני מספר שניות",Actions:"פעולות",'Actions for item with name "{name}"':"פעולות לפריט בשם „{name}”",Activities:"פעילויות","Animals & Nature":"חיות וטבע","Any link":"קישור כלשהו","Anything shared with the same group of people will show up here":"כל מה שמשותף עם אותה קבוצת האנשים יופיע כאן","Avatar of {displayName}":"תמונה ייצוגית של {displayName}","Avatar of {displayName}, {status}":"תמונה ייצוגית של {displayName}, {status}",Back:"חזרה","Back to provider selection":"חזרה לבחירת ספק","Cancel changes":"ביטול שינויים","Change name":"החלפת שם",Choose:"בחירה","Clear search":"פינוי חיפוש","Clear text":"פינוי טקסט",Close:"סגירה","Close modal":"סגירת החלונית","Close navigation":"סגירת הניווט","Close sidebar":"סגירת סרגל הצד","Close Smart Picker":"סגירת הבורר החכם","Collapse menu":"צמצום התפריט","Confirm changes":"אישור השינויים",Custom:"בהתאמה אישית","Edit item":"עריכת פריט","Enter link":"מילוי קישור","Error getting related resources. Please contact your system administrator if you have any questions.":"שגיאה בקבלת המשאבים הקשורים. נא ליצור קשר עם הנהלת המערכת אם יש לך שאלות.","External documentation for {name}":"תיעוד חיצוני עבור {name}",Favorite:"למועדפים",Flags:"דגלים","Food & Drink":"מזון ומשקאות","Frequently used":"בשימוש תדיר",Global:"כללי","Go back to the list":"חזרה לרשימה","Hide password":"הסתרת סיסמה",'Load more "{options}""':"טעינת „{options}” נוספות","Message limit of {count} characters reached":"הגעת למגבלה של {count} תווים","More items …":"פריטים נוספים…","More options":"אפשרויות נוספות",Next:"הבא","No emoji found":"לא נמצא אמוג׳י","No link provider found":"לא נמצא ספק קישורים","No results":"אין תוצאות",Objects:"חפצים","Open contact menu":"פתיחת תפריט קשר",'Open link to "{resourceName}"':"פתיחת קישור אל „{resourceName}”","Open menu":"פתיחת תפריט","Open navigation":"פתיחת ניווט","Open settings menu":"פתיחת תפריט הגדרות","Password is secure":"הסיסמה מאובטחת","Pause slideshow":"השהיית מצגת","People & Body":"אנשים וגוף","Pick a date":"נא לבחור תאריך","Pick a date and a time":"נא לבחור תאריך ושעה","Pick a month":"נא לבחור חודש","Pick a time":"נא לבחור שעה","Pick a week":"נא לבחור שבוע","Pick a year":"נא לבחור שנה","Pick an emoji":"נא לבחור אמוג׳י","Please select a time zone:":"נא לבחור אזור זמן:",Previous:"הקודם","Provider icon":"סמל ספק","Raw link {options}":"קישור גולמי {options}","Related resources":"משאבים קשורים",Search:"חיפוש","Search emoji":"חיפוש אמוג׳י","Search results":"תוצאות חיפוש","sec. ago":"לפני מספר שניות","seconds ago":"לפני מס׳ שניות","Select a tag":"בחירת תגית","Select provider":"בחירת ספק",Settings:"הגדרות","Settings navigation":"ניווט בהגדרות","Show password":"הצגת סיסמה","Smart Picker":"בורר חכם","Smileys & Emotion":"חייכנים ורגשונים","Start slideshow":"התחלת המצגת","Start typing to search":"התחלת הקלדה מחפשת",Submit:"הגשה",Symbols:"סמלים","Travel & Places":"טיולים ומקומות","Type to search time zone":"יש להקליד כדי לחפש אזור זמן","Unable to search the group":"לא ניתן לחפש בקבוצה","Undo changes":"ביטול שינויים",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"כאן ניתן לכתוב הודעה, אפשר להשתמש ב־„@” כדי לאזכר מישהו, ב־„:” להשלמה אוטומטית של אמוג׳י…"}},{locale:"hi_IN",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"hr",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"hsb",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"hu",translations:{"{tag} (invisible)":"{tag} (láthatatlan)","{tag} (restricted)":"{tag} (korlátozott)","a few seconds ago":"",Actions:"Műveletek",'Actions for item with name "{name}"':"",Activities:"Tevékenységek","Animals & Nature":"Állatok és természet","Any link":"","Anything shared with the same group of people will show up here":"Minden, amit ugyanazzal a csoporttal oszt meg, itt fog megjelenni","Avatar of {displayName}":"{displayName} profilképe","Avatar of {displayName}, {status}":"{displayName} profilképe, {status}",Back:"","Back to provider selection":"","Cancel changes":"Változtatások elvetése","Change name":"",Choose:"Válassszon","Clear search":"","Clear text":"Szöveg törlése",Close:"Bezárás","Close modal":"Ablak bezárása","Close navigation":"Navigáció bezárása","Close sidebar":"Oldalsáv bezárása","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Változtatások megerősítése",Custom:"Egyéni","Edit item":"Elem szerkesztése","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Kedvenc",Flags:"Zászlók","Food & Drink":"Étel és ital","Frequently used":"Gyakran használt",Global:"Globális","Go back to the list":"Ugrás vissza a listához","Hide password":"Jelszó elrejtése",'Load more "{options}""':"","Message limit of {count} characters reached":"{count} karakteres üzenetkorlát elérve","More items …":"További elemek...","More options":"",Next:"Következő","No emoji found":"Nem található emodzsi","No link provider found":"","No results":"Nincs találat",Objects:"Tárgyak","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Navigáció megnyitása","Open settings menu":"","Password is secure":"A jelszó biztonságos","Pause slideshow":"Diavetítés szüneteltetése","People & Body":"Emberek és test","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Válasszon egy emodzsit","Please select a time zone:":"Válasszon időzónát:",Previous:"Előző","Provider icon":"","Raw link {options}":"","Related resources":"Kapcsolódó erőforrások",Search:"Keresés","Search emoji":"","Search results":"Találatok","sec. ago":"","seconds ago":"","Select a tag":"Válasszon címkét","Select provider":"",Settings:"Beállítások","Settings navigation":"Navigáció a beállításokban","Show password":"Jelszó megjelenítése","Smart Picker":"","Smileys & Emotion":"Mosolyok és érzelmek","Start slideshow":"Diavetítés indítása","Start typing to search":"",Submit:"Beküldés",Symbols:"Szimbólumok","Travel & Places":"Utazás és helyek","Type to search time zone":"Gépeljen az időzóna kereséséhez","Unable to search the group":"A csoport nem kereshető","Undo changes":"Változtatások visszavonása",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Írjon egy üzenetet, használja a „@”-ot valaki megemlítéséhet, illetve a „:”-ot az emodzsik automatikus kiegészítéséhez…"}},{locale:"hy",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ia",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"id",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ig",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"is",translations:{"{tag} (invisible)":"{tag} (ósýnilegt)","{tag} (restricted)":"{tag} (takmarkað)","a few seconds ago":"",Actions:"Aðgerðir",'Actions for item with name "{name}"':"",Activities:"Aðgerðir","Animals & Nature":"Dýr og náttúra","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Velja","Clear search":"","Clear text":"",Close:"Loka","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"Sérsniðið","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Flögg","Food & Drink":"Matur og drykkur","Frequently used":"Oftast notað",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"Næsta","No emoji found":"Ekkert tjáningartákn fannst","No link provider found":"","No results":"Engar niðurstöður",Objects:"Hlutir","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Gera hlé á skyggnusýningu","People & Body":"Fólk og líkami","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Veldu tjáningartákn","Please select a time zone:":"",Previous:"Fyrri","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Leita","Search emoji":"","Search results":"Leitarniðurstöður","sec. ago":"","seconds ago":"","Select a tag":"Veldu merki","Select provider":"",Settings:"Stillingar","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"Broskallar og tilfinningar","Start slideshow":"Byrja skyggnusýningu","Start typing to search":"",Submit:"",Symbols:"Tákn","Travel & Places":"Staðir og ferðalög","Type to search time zone":"","Unable to search the group":"Get ekki leitað í hópnum","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"it",translations:{"{tag} (invisible)":"{tag} (invisibile)","{tag} (restricted)":"{tag} (limitato)","a few seconds ago":"",Actions:"Azioni",'Actions for item with name "{name}"':"",Activities:"Attività","Animals & Nature":"Animali e natura","Any link":"","Anything shared with the same group of people will show up here":"Tutto ciò che è stato condiviso con lo stesso gruppo di persone viene visualizzato qui","Avatar of {displayName}":"Avatar di {displayName}","Avatar of {displayName}, {status}":"Avatar di {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Annulla modifiche","Change name":"",Choose:"Scegli","Clear search":"","Clear text":"Cancella il testo",Close:"Chiudi","Close modal":"Chiudi il messaggio modale","Close navigation":"Chiudi la navigazione","Close sidebar":"Chiudi la barra laterale","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Conferma modifiche",Custom:"Personalizzato","Edit item":"Modifica l'elemento","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Preferito",Flags:"Bandiere","Food & Drink":"Cibo e bevande","Frequently used":"Usati di frequente",Global:"Globale","Go back to the list":"Torna all'elenco","Hide password":"Nascondi la password",'Load more "{options}""':"","Message limit of {count} characters reached":"Limite dei messaggi di {count} caratteri raggiunto","More items …":"Più elementi ...","More options":"",Next:"Successivo","No emoji found":"Nessun emoji trovato","No link provider found":"","No results":"Nessun risultato",Objects:"Oggetti","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Apri la navigazione","Open settings menu":"","Password is secure":"La password è sicura","Pause slideshow":"Presentazione in pausa","People & Body":"Persone e corpo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Scegli un emoji","Please select a time zone:":"Si prega di selezionare un fuso orario:",Previous:"Precedente","Provider icon":"","Raw link {options}":"","Related resources":"Risorse correlate",Search:"Cerca","Search emoji":"","Search results":"Risultati di ricerca","sec. ago":"","seconds ago":"","Select a tag":"Seleziona un'etichetta","Select provider":"",Settings:"Impostazioni","Settings navigation":"Navigazione delle impostazioni","Show password":"Mostra la password","Smart Picker":"","Smileys & Emotion":"Faccine ed emozioni","Start slideshow":"Avvia presentazione","Start typing to search":"",Submit:"Invia",Symbols:"Simboli","Travel & Places":"Viaggi e luoghi","Type to search time zone":"Digita per cercare un fuso orario","Unable to search the group":"Impossibile cercare il gruppo","Undo changes":"Cancella i cambiamenti",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrivi un messaggio, "@" per menzionare qualcuno, ":" per il completamento automatico delle emoji ...'}},{locale:"ja",translations:{"{tag} (invisible)":"{タグ} (不可視)","{tag} (restricted)":"{タグ} (制限付)","a few seconds ago":"",Actions:"操作",'Actions for item with name "{name}"':"",Activities:"アクティビティ","Animals & Nature":"動物と自然","Any link":"","Anything shared with the same group of people will show up here":"同じグループで共有しているものは、全てここに表示されます","Avatar of {displayName}":"{displayName} のアバター","Avatar of {displayName}, {status}":"{displayName}, {status} のアバター",Back:"","Back to provider selection":"","Cancel changes":"変更をキャンセル","Change name":"",Choose:"選択","Clear search":"","Clear text":"テキストをクリア",Close:"閉じる","Close modal":"モーダルを閉じる","Close navigation":"ナビゲーションを閉じる","Close sidebar":"サイドバーを閉じる","Close Smart Picker":"","Collapse menu":"","Confirm changes":"変更を承認",Custom:"カスタム","Edit item":"編集","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"お気に入り",Flags:"国旗","Food & Drink":"食べ物と飲み物","Frequently used":"よく使うもの",Global:"全体","Go back to the list":"リストに戻る","Hide password":"パスワードを非表示",'Load more "{options}""':"","Message limit of {count} characters reached":"{count} 文字のメッセージ上限に達しています","More items …":"他のアイテム","More options":"",Next:"次","No emoji found":"絵文字が見つかりません","No link provider found":"","No results":"なし",Objects:"物","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"ナビゲーションを開く","Open settings menu":"","Password is secure":"パスワードは保護されています","Pause slideshow":"スライドショーを一時停止","People & Body":"様々な人と体の部位","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"絵文字を選択","Please select a time zone:":"タイムゾーンを選んで下さい：",Previous:"前","Provider icon":"","Raw link {options}":"","Related resources":"関連リソース",Search:"検索","Search emoji":"","Search results":"検索結果","sec. ago":"","seconds ago":"","Select a tag":"タグを選択","Select provider":"",Settings:"設定","Settings navigation":"ナビゲーション設定","Show password":"パスワードを表示","Smart Picker":"","Smileys & Emotion":"感情表現","Start slideshow":"スライドショーを開始","Start typing to search":"",Submit:"提出",Symbols:"記号","Travel & Places":"旅行と場所","Type to search time zone":"タイムゾーン検索のため入力してください","Unable to search the group":"グループを検索できません","Undo changes":"変更を取り消し",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'メッセージを記入、"@"でメンション、"："で絵文字の自動補完 ...'}},{locale:"ka",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ka_GE",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"kab",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"kk",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"km",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"kn",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ko",translations:{"{tag} (invisible)":"{tag}(숨김)","{tag} (restricted)":"{tag}(제한)","a few seconds ago":"방금 전",Actions:"",'Actions for item with name "{name}"':"",Activities:"활동","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"la",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"lb",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"lo",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"lt_LT",translations:{"{tag} (invisible)":"{tag} (nematoma)","{tag} (restricted)":"{tag} (apribota)","a few seconds ago":"",Actions:"Veiksmai",'Actions for item with name "{name}"':"",Activities:"Veiklos","Animals & Nature":"Gyvūnai ir gamta","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Pasirinkti","Clear search":"","Clear text":"",Close:"Užverti","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"Tinkinti","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Vėliavos","Food & Drink":"Maistas ir gėrimai","Frequently used":"Dažniausiai naudoti",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Pasiekta {count} simbolių žinutės riba","More items …":"","More options":"",Next:"Kitas","No emoji found":"Nerasta jaustukų","No link provider found":"","No results":"Nėra rezultatų",Objects:"Objektai","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Pristabdyti skaidrių rodymą","People & Body":"Žmonės ir kūnas","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Pasirinkti jaustuką","Please select a time zone:":"",Previous:"Ankstesnis","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Ieškoti","Search emoji":"","Search results":"Paieškos rezultatai","sec. ago":"","seconds ago":"","Select a tag":"Pasirinkti žymę","Select provider":"",Settings:"Nustatymai","Settings navigation":"Naršymas nustatymuose","Show password":"","Smart Picker":"","Smileys & Emotion":"Šypsenos ir emocijos","Start slideshow":"Pradėti skaidrių rodymą","Start typing to search":"",Submit:"Pateikti",Symbols:"Simboliai","Travel & Places":"Kelionės ir vietos","Type to search time zone":"","Unable to search the group":"Nepavyko atlikti paiešką grupėje","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"lv",translations:{"{tag} (invisible)":"{tag} (neredzams)","{tag} (restricted)":"{tag} (ierobežots)","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Izvēlēties","Clear search":"","Clear text":"",Close:"Aizvērt","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"Nākamais","No emoji found":"","No link provider found":"","No results":"Nav rezultātu",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Pauzēt slaidrādi","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"Iepriekšējais","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"Izvēlēties birku","Select provider":"",Settings:"Iestatījumi","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"Sākt slaidrādi","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"mk",translations:{"{tag} (invisible)":"{tag} (невидливо)","{tag} (restricted)":"{tag} (ограничено)","a few seconds ago":"",Actions:"Акции",'Actions for item with name "{name}"':"",Activities:"Активности","Animals & Nature":"Животни & Природа","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Аватар на {displayName}","Avatar of {displayName}, {status}":"Аватар на {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Откажи ги промените","Change name":"",Choose:"Избери","Clear search":"","Clear text":"",Close:"Затвори","Close modal":"Затвори модал","Close navigation":"Затвори навигација","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Потврди ги промените",Custom:"Прилагодени","Edit item":"Уреди","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Фаворити",Flags:"Знамиња","Food & Drink":"Храна & Пијалоци","Frequently used":"Најчесто користени",Global:"Глобално","Go back to the list":"Врати се на листата","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Ограничувањето на должината на пораката од {count} карактери е надминато","More items …":"","More options":"",Next:"Следно","No emoji found":"Не се пронајдени емотикони","No link provider found":"","No results":"Нема резултати",Objects:"Објекти","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Отвори навигација","Open settings menu":"","Password is secure":"","Pause slideshow":"Пузирај слајдшоу","People & Body":"Луѓе & Тело","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Избери емотикон","Please select a time zone:":"Изберете временска зона:",Previous:"Предходно","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Барај","Search emoji":"","Search results":"Резултати од барувањето","sec. ago":"","seconds ago":"","Select a tag":"Избери ознака","Select provider":"",Settings:"Параметри","Settings navigation":"Параметри за навигација","Show password":"","Smart Picker":"","Smileys & Emotion":"Смешковци & Емотикони","Start slideshow":"Стартувај слајдшоу","Start typing to search":"",Submit:"Испрати",Symbols:"Симболи","Travel & Places":"Патувања & Места","Type to search time zone":"Напишете за да пребарате временска зона","Unable to search the group":"Неможе да се принајде групата","Undo changes":"Врати ги промените",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"mn",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"mr",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ms_MY",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"my",translations:{"{tag} (invisible)":"{tag} (ကွယ်ဝှက်ထား)","{tag} (restricted)":"{tag} (ကန့်သတ်)","a few seconds ago":"",Actions:"လုပ်ဆောင်ချက်များ",'Actions for item with name "{name}"':"",Activities:"ပြုလုပ်ဆောင်တာများ","Animals & Nature":"တိရစ္ဆာန်များနှင့် သဘာဝ","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"{displayName} ၏ ကိုယ်ပွား","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်","Change name":"",Choose:"ရွေးချယ်ရန်","Clear search":"","Clear text":"",Close:"ပိတ်ရန်","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"ပြောင်းလဲမှုများ အတည်ပြုရန်",Custom:"အလိုကျချိန်ညှိမှု","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"အလံများ","Food & Drink":"အစားအသောက်","Frequently used":"မကြာခဏအသုံးပြုသော",Global:"ကမ္ဘာလုံးဆိုင်ရာ","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"ကန့်သတ် စာလုံးရေ {count} လုံး ပြည့်ပါပြီ","More items …":"","More options":"",Next:"နောက်သို့ဆက်ရန်","No emoji found":"အီမိုဂျီ ရှာဖွေမတွေ့နိုင်ပါ","No link provider found":"","No results":"ရလဒ်မရှိပါ",Objects:"အရာဝတ္ထုများ","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"စလိုက်ရှိုး ခေတ္တရပ်ရန်","People & Body":"လူပုဂ္ဂိုလ်များနှင့် ခန္ဓာကိုယ်","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"အီမိုဂျီရွေးရန်","Please select a time zone:":"ဒေသစံတော်ချိန် ရွေးချယ်ပေးပါ",Previous:"ယခင်","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"ရှာဖွေရန်","Search emoji":"","Search results":"ရှာဖွေမှု ရလဒ်များ","sec. ago":"","seconds ago":"","Select a tag":"tag ရွေးချယ်ရန်","Select provider":"",Settings:"ချိန်ညှိချက်များ","Settings navigation":"ချိန်ညှိချက်အညွှန်း","Show password":"","Smart Picker":"","Smileys & Emotion":"စမိုင်လီများနှင့် အီမိုရှင်း","Start slideshow":"စလိုက်ရှိုးအား စတင်ရန်","Start typing to search":"",Submit:"တင်သွင်းရန်",Symbols:"သင်္ကေတများ","Travel & Places":"ခရီးသွားလာခြင်းနှင့် နေရာများ","Type to search time zone":"ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ","Unable to search the group":"အဖွဲ့အား ရှာဖွေ၍ မရနိုင်ပါ","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"nb",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (beskyttet)","a few seconds ago":"",Actions:"Handlinger",'Actions for item with name "{name}"':"",Activities:"Aktiviteter","Animals & Nature":"Dyr og natur","Any link":"","Anything shared with the same group of people will show up here":"Alt som er delt med den samme gruppen vil vises her","Avatar of {displayName}":"Avataren til {displayName}","Avatar of {displayName}, {status}":"{displayName}'s avatar, {status}",Back:"","Back to provider selection":"","Cancel changes":"Avbryt endringer","Change name":"",Choose:"Velg","Clear search":"","Clear text":"Fjern tekst",Close:"Lukk","Close modal":"Lukk modal","Close navigation":"Lukk navigasjon","Close sidebar":"Lukk sidepanel","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Bekreft endringer",Custom:"Tilpasset","Edit item":"Rediger","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favoritt",Flags:"Flagg","Food & Drink":"Mat og drikke","Frequently used":"Ofte brukt",Global:"Global","Go back to the list":"Gå tilbake til listen","Hide password":"Skjul passord",'Load more "{options}""':"","Message limit of {count} characters reached":"Karakter begrensing {count} nådd i melding","More items …":"Flere gjenstander...","More options":"",Next:"Neste","No emoji found":"Fant ingen emoji","No link provider found":"","No results":"Ingen resultater",Objects:"Objekter","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Åpne navigasjon","Open settings menu":"","Password is secure":"Passordet er sikkert","Pause slideshow":"Pause lysbildefremvisning","People & Body":"Mennesker og kropp","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Velg en emoji","Please select a time zone:":"Vennligst velg tidssone",Previous:"Forrige","Provider icon":"","Raw link {options}":"","Related resources":"Relaterte ressurser",Search:"Søk","Search emoji":"","Search results":"Søkeresultater","sec. ago":"","seconds ago":"","Select a tag":"Velg en merkelapp","Select provider":"",Settings:"Innstillinger","Settings navigation":"Navigasjonsinstillinger","Show password":"Vis passord","Smart Picker":"","Smileys & Emotion":"Smilefjes og følelser","Start slideshow":"Start lysbildefremvisning","Start typing to search":"",Submit:"Send",Symbols:"Symboler","Travel & Places":"Reise og steder","Type to search time zone":"Tast for å søke etter tidssone","Unable to search the group":"Kunne ikke søke i gruppen","Undo changes":"Tilbakestill endringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv melding, bruk "@" for å nevne noen, bruk ":" for autofullføring av emoji...'}},{locale:"ne",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"nl",translations:{"{tag} (invisible)":"{tag} (onzichtbaar)","{tag} (restricted)":"{tag} (beperkt)","a few seconds ago":"",Actions:"Acties",'Actions for item with name "{name}"':"",Activities:"Activiteiten","Animals & Nature":"Dieren & Natuur","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Avatar van {displayName}","Avatar of {displayName}, {status}":"Avatar van {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Wijzigingen annuleren","Change name":"",Choose:"Kies","Clear search":"","Clear text":"",Close:"Sluiten","Close modal":"","Close navigation":"Navigatie sluiten","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Wijzigingen bevestigen",Custom:"Aangepast","Edit item":"Item bewerken","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Vlaggen","Food & Drink":"Eten & Drinken","Frequently used":"Vaak gebruikt",Global:"Globaal","Go back to the list":"Ga terug naar de lijst","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Berichtlimiet van {count} karakters bereikt","More items …":"","More options":"",Next:"Volgende","No emoji found":"Geen emoji gevonden","No link provider found":"","No results":"Geen resultaten",Objects:"Objecten","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Navigatie openen","Open settings menu":"","Password is secure":"","Pause slideshow":"Pauzeer diavoorstelling","People & Body":"Mensen & Lichaam","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Kies een emoji","Please select a time zone:":"Selecteer een tijdzone:",Previous:"Vorige","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Zoeken","Search emoji":"","Search results":"Zoekresultaten","sec. ago":"","seconds ago":"","Select a tag":"Selecteer een label","Select provider":"",Settings:"Instellingen","Settings navigation":"Instellingen navigatie","Show password":"","Smart Picker":"","Smileys & Emotion":"Smileys & Emotie","Start slideshow":"Start diavoorstelling","Start typing to search":"",Submit:"Verwerken",Symbols:"Symbolen","Travel & Places":"Reizen & Plaatsen","Type to search time zone":"Type om de tijdzone te zoeken","Unable to search the group":"Kan niet in de groep zoeken","Undo changes":"Wijzigingen ongedaan maken",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"nn_NO",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"oc",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (limit)","a few seconds ago":"",Actions:"Accions",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Causir","Clear search":"","Clear text":"",Close:"Tampar","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"Seguent","No emoji found":"","No link provider found":"","No results":"Cap de resultat",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Metre en pausa lo diaporama","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"Precedent","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"Seleccionar una etiqueta","Select provider":"",Settings:"Paramètres","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"Lançar lo diaporama","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"pl",translations:{"{tag} (invisible)":"{tag} (niewidoczna)","{tag} (restricted)":"{tag} (ograniczona)","a few seconds ago":"",Actions:"Działania",'Actions for item with name "{name}"':"",Activities:"Aktywność","Animals & Nature":"Zwierzęta i natura","Any link":"","Anything shared with the same group of people will show up here":"Tutaj pojawi się wszystko, co zostało udostępnione tej samej grupie osób","Avatar of {displayName}":"Awatar {displayName}","Avatar of {displayName}, {status}":"Awatar {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Anuluj zmiany","Change name":"",Choose:"Wybierz","Clear search":"","Clear text":"Wyczyść tekst",Close:"Zamknij","Close modal":"Zamknij modal","Close navigation":"Zamknij nawigację","Close sidebar":"Zamknij pasek boczny","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Potwierdź zmiany",Custom:"Zwyczajne","Edit item":"Edytuj element","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Ulubiony",Flags:"Flagi","Food & Drink":"Jedzenie i picie","Frequently used":"Często używane",Global:"Globalnie","Go back to the list":"Powrót do listy","Hide password":"Ukryj hasło",'Load more "{options}""':"","Message limit of {count} characters reached":"Przekroczono limit wiadomości wynoszący {count} znaków","More items …":"Więcej pozycji…","More options":"",Next:"Następny","No emoji found":"Nie znaleziono emoji","No link provider found":"","No results":"Brak wyników",Objects:"Obiekty","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Otwórz nawigację","Open settings menu":"","Password is secure":"Hasło jest bezpieczne","Pause slideshow":"Wstrzymaj pokaz slajdów","People & Body":"Ludzie i ciało","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Wybierz emoji","Please select a time zone:":"Wybierz strefę czasową:",Previous:"Poprzedni","Provider icon":"","Raw link {options}":"","Related resources":"Powiązane zasoby",Search:"Szukaj","Search emoji":"","Search results":"Wyniki wyszukiwania","sec. ago":"","seconds ago":"","Select a tag":"Wybierz etykietę","Select provider":"",Settings:"Ustawienia","Settings navigation":"Ustawienia nawigacji","Show password":"Pokaż hasło","Smart Picker":"","Smileys & Emotion":"Buźki i emotikony","Start slideshow":"Rozpocznij pokaz slajdów","Start typing to search":"",Submit:"Wyślij",Symbols:"Symbole","Travel & Places":"Podróże i miejsca","Type to search time zone":"Wpisz, aby wyszukać strefę czasową","Unable to search the group":"Nie można przeszukać grupy","Undo changes":"Cofnij zmiany",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Napisz wiadomość, "@" aby o kimś wspomnieć, ":" dla autouzupełniania emoji…'}},{locale:"ps",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"pt_BR",translations:{"{tag} (invisible)":"{tag} (invisível)","{tag} (restricted)":"{tag} (restrito) ","a few seconds ago":"",Actions:"Ações",'Actions for item with name "{name}"':"",Activities:"Atividades","Animals & Nature":"Animais & Natureza","Any link":"","Anything shared with the same group of people will show up here":"Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Cancelar alterações","Change name":"",Choose:"Escolher","Clear search":"","Clear text":"Limpar texto",Close:"Fechar","Close modal":"Fechar modal","Close navigation":"Fechar navegação","Close sidebar":"Fechar barra lateral","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Confirmar alterações",Custom:"Personalizado","Edit item":"Editar item","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favorito",Flags:"Bandeiras","Food & Drink":"Comida & Bebida","Frequently used":"Mais usados",Global:"Global","Go back to the list":"Volte para a lista","Hide password":"Ocultar a senha",'Load more "{options}""':"","Message limit of {count} characters reached":"Limite de mensagem de {count} caracteres atingido","More items …":"Mais itens …","More options":"",Next:"Próximo","No emoji found":"Nenhum emoji encontrado","No link provider found":"","No results":"Sem resultados",Objects:"Objetos","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Abrir navegação","Open settings menu":"","Password is secure":"A senha é segura","Pause slideshow":"Pausar apresentação de slides","People & Body":"Pessoas & Corpo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Escolha um emoji","Please select a time zone:":"Selecione um fuso horário: ",Previous:"Anterior","Provider icon":"","Raw link {options}":"","Related resources":"Recursos relacionados",Search:"Pesquisar","Search emoji":"","Search results":"Resultados da pesquisa","sec. ago":"","seconds ago":"","Select a tag":"Selecionar uma tag","Select provider":"",Settings:"Configurações","Settings navigation":"Navegação de configurações","Show password":"Mostrar senha","Smart Picker":"","Smileys & Emotion":"Smiles & Emoções","Start slideshow":"Iniciar apresentação de slides","Start typing to search":"",Submit:"Enviar",Symbols:"Símbolo","Travel & Places":"Viagem & Lugares","Type to search time zone":"Digite para pesquisar o fuso horário ","Unable to search the group":"Não foi possível pesquisar o grupo","Undo changes":"Desfazer modificações",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escreva mensagens, use "@" para mencionar algum, use ":" for autocompletar emoji …'}},{locale:"pt_PT",translations:{"{tag} (invisible)":"{tag} (invisivel)","{tag} (restricted)":"{tag} (restrito)","a few seconds ago":"alguns segundos atrás",Actions:"Ações",'Actions for item with name "{name}"':'Ações para objeto com o nome "[name]"',Activities:"Atividades","Animals & Nature":"Animais e Natureza","Any link":"Qualquer link","Anything shared with the same group of people will show up here":"Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"Voltar atrás","Back to provider selection":"Voltar à seleção de fornecedor","Cancel changes":"Cancelar alterações","Change name":"Alterar nome",Choose:"Escolher","Clear search":"Limpar a pesquisa","Clear text":"Limpar texto",Close:"Fechar","Close modal":"Fechar modal","Close navigation":"Fechar navegação","Close sidebar":"Fechar barra lateral","Close Smart Picker":'Fechar "Smart Picker"',"Collapse menu":"Comprimir menu","Confirm changes":"Confirmar alterações",Custom:"Personalizado","Edit item":"Editar item","Enter link":"Introduzir link","Error getting related resources. Please contact your system administrator if you have any questions.":"Erro em obter info relacionadas. Por favor contacte o administrador do sistema para esclarecimentos adicionais.","External documentation for {name}":"Documentação externa para {name}",Favorite:"Favorito",Flags:"Bandeiras","Food & Drink":"Comida e Bebida","Frequently used":"Mais utilizados",Global:"Global","Go back to the list":"Voltar para a lista","Hide password":"Ocultar a senha",'Load more "{options}""':'Obter mais "{options}""',"Message limit of {count} characters reached":"Atingido o limite de {count} carateres da mensagem.","More items …":"Mais itens …","More options":"Mais opções",Next:"Seguinte","No emoji found":"Nenhum emoji encontrado","No link provider found":"Nenhum fornecedor de link encontrado","No results":"Sem resultados",Objects:"Objetos","Open contact menu":"Abrir o menu de contato",'Open link to "{resourceName}"':'Abrir link para "{resourceName}"',"Open menu":"Abrir menu","Open navigation":"Abrir navegação","Open settings menu":"Abrir menu de configurações","Password is secure":"A senha é segura","Pause slideshow":"Pausar diaporama","People & Body":"Pessoas e Corpo","Pick a date":"Escolha uma data","Pick a date and a time":"Escolha uma data e um horário","Pick a month":"Escolha um mês","Pick a time":"Escolha um horário","Pick a week":"Escolha uma semana","Pick a year":"Escolha um ano","Pick an emoji":"Escolha um emoji","Please select a time zone:":"Por favor, selecione um fuso horário: ",Previous:"Anterior","Provider icon":"Icon do fornecedor","Raw link {options}":"Link inicial {options}","Related resources":"Recursos relacionados",Search:"Pesquisar","Search emoji":"Pesquisar emoji","Search results":"Resultados da pesquisa","sec. ago":"seg. atrás","seconds ago":"segundos atrás","Select a tag":"Selecionar uma etiqueta","Select provider":"Escolha de fornecedor",Settings:"Definições","Settings navigation":"Navegação de configurações","Show password":"Mostrar senha","Smart Picker":"Smart Picker","Smileys & Emotion":"Sorrisos e Emoções","Start slideshow":"Iniciar diaporama","Start typing to search":"Comece a digitar para pesquisar",Submit:"Submeter",Symbols:"Símbolos","Travel & Places":"Viagem e Lugares","Type to search time zone":"Digite para pesquisar o fuso horário ","Unable to search the group":"Não é possível pesquisar o grupo","Undo changes":"Anular alterações",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escreva a mensagem, use "@" para mencionar alguém, use ":" para obter um emoji …'}},{locale:"ro",translations:{"{tag} (invisible)":"{tag} (invizibil)","{tag} (restricted)":"{tag} (restricționat)","a few seconds ago":"",Actions:"Acțiuni",'Actions for item with name "{name}"':"",Activities:"Activități","Animals & Nature":"Animale și natură","Any link":"","Anything shared with the same group of people will show up here":"Tot ceea ce este partajat cu același grup de persoane va fi afișat aici","Avatar of {displayName}":"Avatarul lui {displayName}","Avatar of {displayName}, {status}":"Avatarul lui {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Anulează modificările","Change name":"",Choose:"Alegeți","Clear search":"","Clear text":"Șterge textul",Close:"Închideți","Close modal":"Închideți modulul","Close navigation":"Închideți navigarea","Close sidebar":"Închide bara laterală","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Confirmați modificările",Custom:"Personalizat","Edit item":"Editați elementul","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favorit",Flags:"Marcaje","Food & Drink":"Alimente și băuturi","Frequently used":"Utilizate frecvent",Global:"Global","Go back to the list":"Întoarceți-vă la listă","Hide password":"Ascunde parola",'Load more "{options}""':"","Message limit of {count} characters reached":"Limita mesajului de {count} caractere a fost atinsă","More items …":"Mai multe articole ...","More options":"",Next:"Următorul","No emoji found":"Nu s-a găsit niciun emoji","No link provider found":"","No results":"Nu există rezultate",Objects:"Obiecte","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Deschideți navigația","Open settings menu":"","Password is secure":"Parola este sigură","Pause slideshow":"Pauză prezentare de diapozitive","People & Body":"Oameni și corp","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Alege un emoji","Please select a time zone:":"Vă rugăm să selectați un fus orar:",Previous:"Anterior","Provider icon":"","Raw link {options}":"","Related resources":"Resurse legate",Search:"Căutare","Search emoji":"","Search results":"Rezultatele căutării","sec. ago":"","seconds ago":"","Select a tag":"Selectați o etichetă","Select provider":"",Settings:"Setări","Settings navigation":"Navigare setări","Show password":"Arată parola","Smart Picker":"","Smileys & Emotion":"Zâmbete și emoții","Start slideshow":"Începeți prezentarea de diapozitive","Start typing to search":"",Submit:"Trimiteți",Symbols:"Simboluri","Travel & Places":"Călătorii și locuri","Type to search time zone":"Tastați pentru a căuta fusul orar","Unable to search the group":"Imposibilitatea de a căuta în grup","Undo changes":"Anularea modificărilor",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrie un mesaj, folosește "@" pentru a menționa pe cineva, folosește ":" pentru autocompletarea cu emoji ...'}},{locale:"ru",translations:{"{tag} (invisible)":"{tag} (невидимое)","{tag} (restricted)":"{tag} (ограниченное)","a few seconds ago":"",Actions:"Действия ",'Actions for item with name "{name}"':"",Activities:"События","Animals & Nature":"Животные и природа ","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Фотография {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Отменить изменения","Change name":"",Choose:"Выберите","Clear search":"","Clear text":"",Close:"Закрыть","Close modal":"Закрыть модальное окно","Close navigation":"Закрыть навигацию","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Подтвердить изменения",Custom:"Пользовательское","Edit item":"Изменить элемент","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Флаги","Food & Drink":"Еда, напиток","Frequently used":"Часто используемый",Global:"Глобальный","Go back to the list":"Вернуться к списку","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Достигнуто ограничение на количество символов в {count}","More items …":"","More options":"",Next:"Следующее","No emoji found":"Эмодзи не найдено","No link provider found":"","No results":"Результаты отсуствуют",Objects:"Объекты","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Открыть навигацию","Open settings menu":"","Password is secure":"","Pause slideshow":"Приостановить показ слйдов","People & Body":"Люди и тело","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Выберите эмодзи","Please select a time zone:":"Пожалуйста, выберите часовой пояс:",Previous:"Предыдущее","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Поиск","Search emoji":"","Search results":"Результаты поиска","sec. ago":"","seconds ago":"","Select a tag":"Выберите метку","Select provider":"",Settings:"Параметры","Settings navigation":"Навигация по настройкам","Show password":"","Smart Picker":"","Smileys & Emotion":"Смайлики и эмоции","Start slideshow":"Начать показ слайдов","Start typing to search":"",Submit:"Утвердить",Symbols:"Символы","Travel & Places":"Путешествия и места","Type to search time zone":"Введите для поиска часового пояса","Unable to search the group":"Невозможно найти группу","Undo changes":"Отменить изменения",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sc",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"si",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sk",translations:{"{tag} (invisible)":"{tag} (neviditeľný)","{tag} (restricted)":"{tag} (obmedzený)","a few seconds ago":"",Actions:"Akcie",'Actions for item with name "{name}"':"",Activities:"Aktivity","Animals & Nature":"Zvieratá a príroda","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Avatar {displayName}","Avatar of {displayName}, {status}":"Avatar {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Zrušiť zmeny","Change name":"",Choose:"Vybrať","Clear search":"","Clear text":"",Close:"Zatvoriť","Close modal":"","Close navigation":"Zavrieť navigáciu","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Potvrdiť zmeny",Custom:"Zvyk","Edit item":"Upraviť položku","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Vlajky","Food & Drink":"Jedlo a nápoje","Frequently used":"Často používané",Global:"Globálne","Go back to the list":"Naspäť na zoznam","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Limit správy na {count} znakov dosiahnutý","More items …":"","More options":"",Next:"Ďalší","No emoji found":"Nenašli sa žiadne emodži","No link provider found":"","No results":"Žiadne výsledky",Objects:"Objekty","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Otvoriť navigáciu","Open settings menu":"","Password is secure":"","Pause slideshow":"Pozastaviť prezentáciu","People & Body":"Ľudia a telo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Vyberte si emodži","Please select a time zone:":"Prosím vyberte časovú zónu:",Previous:"Predchádzajúci","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Hľadať","Search emoji":"","Search results":"Výsledky vyhľadávania","sec. ago":"","seconds ago":"","Select a tag":"Vybrať štítok","Select provider":"",Settings:"Nastavenia","Settings navigation":"Navigácia v nastaveniach","Show password":"","Smart Picker":"","Smileys & Emotion":"Smajlíky a emócie","Start slideshow":"Začať prezentáciu","Start typing to search":"",Submit:"Odoslať",Symbols:"Symboly","Travel & Places":"Cestovanie a miesta","Type to search time zone":"Začníte písať pre vyhľadávanie časovej zóny","Unable to search the group":"Skupinu sa nepodarilo nájsť","Undo changes":"Vrátiť zmeny",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sl",translations:{"{tag} (invisible)":"{tag} (nevidno)","{tag} (restricted)":"{tag} (omejeno)","a few seconds ago":"",Actions:"Dejanja",'Actions for item with name "{name}"':"",Activities:"Dejavnosti","Animals & Nature":"Živali in Narava","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Podoba {displayName}","Avatar of {displayName}, {status}":"Prikazna slika {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Prekliči spremembe","Change name":"",Choose:"Izbor","Clear search":"","Clear text":"Počisti besedilo",Close:"Zapri","Close modal":"Zapri pojavno okno","Close navigation":"Zapri krmarjenje","Close sidebar":"Zapri stransko vrstico","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Potrdi spremembe",Custom:"Po meri","Edit item":"Uredi predmet","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Priljubljeno",Flags:"Zastavice","Food & Drink":"Hrana in Pijača","Frequently used":"Pogostost uporabe",Global:"Splošno","Go back to the list":"Vrni se na seznam","Hide password":"Skrij geslo",'Load more "{options}""':"","Message limit of {count} characters reached":"Dosežena omejitev {count} znakov na sporočilo.","More items …":"Več predmetov ...","More options":"",Next:"Naslednji","No emoji found":"Ni najdenih izraznih ikon","No link provider found":"","No results":"Ni zadetkov",Objects:"Predmeti","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Odpri krmarjenje","Open settings menu":"","Password is secure":"Geslo je varno","Pause slideshow":"Ustavi predstavitev","People & Body":"Ljudje in Telo","Pick a date":"Izbor datuma","Pick a date and a time":"Izbor datuma in časa","Pick a month":"Izbor meseca","Pick a time":"Izbor časa","Pick a week":"Izbor tedna","Pick a year":"Izbor leta","Pick an emoji":"Izbor izrazne ikone","Please select a time zone:":"Izbor časovnega pasu:",Previous:"Predhodni","Provider icon":"","Raw link {options}":"","Related resources":"Povezani viri",Search:"Iskanje","Search emoji":"","Search results":"Zadetki iskanja","sec. ago":"","seconds ago":"","Select a tag":"Izbor oznake","Select provider":"",Settings:"Nastavitve","Settings navigation":"Krmarjenje nastavitev","Show password":"Pokaži geslo","Smart Picker":"","Smileys & Emotion":"Izrazne ikone","Start slideshow":"Začni predstavitev","Start typing to search":"",Submit:"Pošlji",Symbols:"Simboli","Travel & Places":"Potovanja in Kraji","Type to search time zone":"Vpišite niz za iskanje časovnega pasu","Unable to search the group":"Ni mogoče iskati po skupini","Undo changes":"Razveljavi spremembe",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sq",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sr",translations:{"{tag} (invisible)":"{tag} (nevidljivo)","{tag} (restricted)":"{tag} (ograničeno)","a few seconds ago":"",Actions:"Radnje",'Actions for item with name "{name}"':"",Activities:"Aktivnosti","Animals & Nature":"Životinje i Priroda","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Avatar za {displayName}","Avatar of {displayName}, {status}":"Avatar za {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Otkaži izmene","Change name":"",Choose:"Изаберите","Clear search":"","Clear text":"",Close:"Затвори","Close modal":"Zatvori modal","Close navigation":"Zatvori navigaciju","Close sidebar":"Zatvori bočnu traku","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Potvrdite promene",Custom:"Po meri","Edit item":"Uredi stavku","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Omiljeni",Flags:"Zastave","Food & Drink":"Hrana i Piće","Frequently used":"Često korišćeno",Global:"Globalno","Go back to the list":"Natrag na listu","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Dostignuto je ograničenje za poruke od {count} znakova","More items …":"","More options":"",Next:"Следеће","No emoji found":"Nije pronađen nijedan emodži","No link provider found":"","No results":"Нема резултата",Objects:"Objekti","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Otvori navigaciju","Open settings menu":"","Password is secure":"","Pause slideshow":"Паузирај слајд шоу","People & Body":"Ljudi i Telo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Izaberi emodži","Please select a time zone:":"Molimo izaberite vremensku zonu:",Previous:"Претходно","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Pretraži","Search emoji":"","Search results":"Rezultati pretrage","sec. ago":"","seconds ago":"","Select a tag":"Изаберите ознаку","Select provider":"",Settings:"Поставке","Settings navigation":"Navigacija u podešavanjima","Show password":"","Smart Picker":"","Smileys & Emotion":"Smajli i Emocije","Start slideshow":"Покрени слајд шоу","Start typing to search":"",Submit:"Prihvati",Symbols:"Simboli","Travel & Places":"Putovanja i Mesta","Type to search time zone":"Ukucaj da pretražiš vremenske zone","Unable to search the group":"Nije moguće pretražiti grupu","Undo changes":"Poništi promene",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sr@latin",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sv",translations:{"{tag} (invisible)":"{tag} (osynlig)","{tag} (restricted)":"{tag} (begränsad)","a few seconds ago":"några sekunder sedan",Actions:"Åtgärder",'Actions for item with name "{name}"':'Åtgärder för objekt med namn "{name}"',Activities:"Aktiviteter","Animals & Nature":"Djur & Natur","Any link":"Vilken länk som helst","Anything shared with the same group of people will show up here":"Något som delats med samma grupp av personer kommer att visas här","Avatar of {displayName}":"{displayName}s avatar","Avatar of {displayName}, {status}":"{displayName}s avatar, {status}",Back:"Tillbaka","Back to provider selection":"Tillbaka till leverantörsval","Cancel changes":"Avbryt ändringar","Change name":"Ändra namn",Choose:"Välj","Clear search":"Rensa sökning","Clear text":"Ta bort text",Close:"Stäng","Close modal":"Stäng modal","Close navigation":"Stäng navigering","Close sidebar":"Stäng sidopanel","Close Smart Picker":"Stäng Smart Picker","Collapse menu":"Komprimera menyn","Confirm changes":"Bekräfta ändringar",Custom:"Anpassad","Edit item":"Ändra","Enter link":"Ange länk","Error getting related resources. Please contact your system administrator if you have any questions.":"Det gick inte att hämta relaterade resurser. Kontakta din systemadministratör om du har några frågor.","External documentation for {name}":"Extern dokumentation för {name}",Favorite:"Favorit",Flags:"Flaggor","Food & Drink":"Mat & Dryck","Frequently used":"Används ofta",Global:"Global","Go back to the list":"Gå tillbaka till listan","Hide password":"Göm lössenordet",'Load more "{options}""':'Ladda fler "{options}""',"Message limit of {count} characters reached":"Meddelandegräns {count} tecken används","More items …":"Fler objekt","More options":"Fler alternativ",Next:"Nästa","No emoji found":"Hittade inga emojis","No link provider found":"Ingen länkleverantör hittades","No results":"Inga resultat",Objects:"Objekt","Open contact menu":"Öppna kontaktmenyn",'Open link to "{resourceName}"':'Öppna länken till "{resourceName}"',"Open menu":"Öppna menyn","Open navigation":"Öppna navigering","Open settings menu":"Öppna inställningsmenyn","Password is secure":"Lössenordet är säkert","Pause slideshow":"Pausa bildspelet","People & Body":"Kropp & Själ","Pick a date":"Välj datum","Pick a date and a time":"Välj datum och tid","Pick a month":"Välj månad","Pick a time":"Välj tid","Pick a week":"Välj vecka","Pick a year":"Välj år","Pick an emoji":"Välj en emoji","Please select a time zone:":"Välj tidszon:",Previous:"Föregående","Provider icon":"Leverantörsikon","Raw link {options}":"Oformaterad länk {options}","Related resources":"Relaterade resurser",Search:"Sök","Search emoji":"Sök emoji","Search results":"Sökresultat","sec. ago":"sek. sedan","seconds ago":"sekunder sedan","Select a tag":"Välj en tag","Select provider":"Välj leverantör",Settings:"Inställningar","Settings navigation":"Inställningsmeny","Show password":"Visa lössenordet","Smart Picker":"Smart Picker","Smileys & Emotion":"Selfies & Känslor","Start slideshow":"Starta bildspelet","Start typing to search":"Börja skriva för att söka",Submit:"Skicka",Symbols:"Symboler","Travel & Places":"Resor & Sevärdigheter","Type to search time zone":"Skriv för att välja tidszon","Unable to search the group":"Kunde inte söka i gruppen","Undo changes":"Ångra ändringar",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv meddelande, använd "@" för att nämna någon, använd ":" för automatiska emojiförslag ...'}},{locale:"sw",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ta",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"th",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"tk",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"tr",translations:{"{tag} (invisible)":"{tag} (görünmez)","{tag} (restricted)":"{tag} (kısıtlı)","a few seconds ago":"birkaç saniye önce",Actions:"İşlemler",'Actions for item with name "{name}"':"{name} adındaki öge için işlemler",Activities:"Etkinlikler","Animals & Nature":"Hayvanlar ve Doğa","Any link":"Herhangi bir bağlantı","Anything shared with the same group of people will show up here":"Aynı kişi grubu ile paylaşılan herşey burada görüntülenir","Avatar of {displayName}":"{displayName} avatarı","Avatar of {displayName}, {status}":"{displayName}, {status} avatarı",Back:"Geri","Back to provider selection":"Sağlayıcı seçimine dön","Cancel changes":"Değişiklikleri iptal et","Change name":"Adı değiştir",Choose:"Seçin","Clear search":"Aramayı temizle","Clear text":"Metni temizle",Close:"Kapat","Close modal":"Üste açılan pencereyi kapat","Close navigation":"Gezinmeyi kapat","Close sidebar":"Yan çubuğu kapat","Close Smart Picker":"Akıllı seçimi kapat","Collapse menu":"Menüyü daralt","Confirm changes":"Değişiklikleri onayla",Custom:"Özel","Edit item":"Ögeyi düzenle","Enter link":"Bağlantıyı yazın","Error getting related resources. Please contact your system administrator if you have any questions.":"İlgili kaynaklara ulaşılırken sorun çıktı. Herhangi bir sorunuz varsa lütfen sistem yöneticiniz ile görüşün ","External documentation for {name}":"{name} için dış belgeler",Favorite:"Sık kullanılanlara ekle",Flags:"Bayraklar","Food & Drink":"Yeme ve içme","Frequently used":"Sık kullanılanlar",Global:"Evrensel","Go back to the list":"Listeye dön","Hide password":"Parolayı gizle",'Load more "{options}""':'Diğer "{options}"',"Message limit of {count} characters reached":"{count} karakter ileti sınırına ulaşıldı","More items …":"Diğer ögeler…","More options":"Diğer seçenekler",Next:"Sonraki","No emoji found":"Herhangi bir emoji bulunamadı","No link provider found":"Bağlantı sağlayıcısı bulunamadı","No results":"Herhangi bir sonuç bulunamadı",Objects:"Nesneler","Open contact menu":"İletişim menüsünü aç",'Open link to "{resourceName}"':"{resourceName} bağlantısını aç","Open menu":"Menüyü aç","Open navigation":"Gezinmeyi aç","Open settings menu":"Ayarlar menüsünü aç","Password is secure":"Parola güvenli","Pause slideshow":"Slayt sunumunu duraklat","People & Body":"İnsanlar ve beden","Pick a date":"Bir tarih seçin","Pick a date and a time":"Bir tarih ve saat seçin","Pick a month":"Bir ay seçin","Pick a time":"Bir saat seçin","Pick a week":"Bir hafta seçin","Pick a year":"Bir yıl seçin","Pick an emoji":"Bir emoji seçin","Please select a time zone:":"Lütfen bir saat dilimi seçin:",Previous:"Önceki","Provider icon":"Sağlayıcı simgesi","Raw link {options}":"Ham bağlantı {options}","Related resources":"İlgili kaynaklar",Search:"Arama","Search emoji":"Emoji ara","Search results":"Arama sonuçları","sec. ago":"sn. önce","seconds ago":"saniye önce","Select a tag":"Bir etiket seçin","Select provider":"Sağlayıcı seçin",Settings:"Ayarlar","Settings navigation":"Gezinme ayarları","Show password":"Parolayı görüntüle","Smart Picker":"Akıllı seçim","Smileys & Emotion":"İfadeler ve duygular","Start slideshow":"Slayt sunumunu başlat","Start typing to search":"Aramak için yazmaya başlayın",Submit:"Gönder",Symbols:"Simgeler","Travel & Places":"Gezi ve yerler","Type to search time zone":"Saat dilimi aramak için yazmaya başlayın","Unable to search the group":"Grupta arama yapılamadı","Undo changes":"Değişiklikleri geri al",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'İleti yazın, birini anmak için @, otomatik emoji tamamlamak için ":" kullanın…'}},{locale:"ug",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"uk",translations:{"{tag} (invisible)":"{tag} (невидимий)","{tag} (restricted)":"{tag} (обмежений)","a few seconds ago":"декілька секунд тому",Actions:"Дії",'Actions for item with name "{name}"':'Дії для об\'єкту "{name}"',Activities:"Діяльність","Animals & Nature":"Тварини та природа","Any link":"Будь-яке посилання","Anything shared with the same group of people will show up here":"Будь-що доступне для цієї же групи людей буде показано тут","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Аватар {displayName}, {status}",Back:"Назад","Back to provider selection":"Назад до вибору постачальника","Cancel changes":"Скасувати зміни","Change name":"Змінити назву",Choose:"Виберіть","Clear search":"Очистити пошук","Clear text":"Очистити текст",Close:"Закрити","Close modal":"Закрити модаль","Close navigation":"Закрити навігацію","Close sidebar":"Закрити бічну панель","Close Smart Picker":"Закрити асистент вибору","Collapse menu":"Згорнути меню","Confirm changes":"Підтвердити зміни",Custom:"Власне","Edit item":"Редагувати елемент","Enter link":"Зазначте посилання","Error getting related resources. Please contact your system administrator if you have any questions.":"Помилка під час отримання пов'язаних ресурсів. Будь ласка, сконтактуйте з системним адміністратором, якщо у вас виникли запитання.","External documentation for {name}":"Зовнішня документація для {name}",Favorite:"Із зірочкою",Flags:"Прапори","Food & Drink":"Їжа та напої","Frequently used":"Найчастіші",Global:"Глобальний","Go back to the list":"Повернутися до списку","Hide password":"Приховати пароль",'Load more "{options}""':'Завантажити більше "{options}"',"Message limit of {count} characters reached":"Вичерпано ліміт у {count} символів для повідомлення","More items …":"Більше об'єктів...","More options":"Більше об'єктів",Next:"Вперед","No emoji found":"Емоційки відсутні","No link provider found":"Не наведено посилання","No results":"Відсутні результати",Objects:"Об'єкти","Open contact menu":"Відкрити меню контактів",'Open link to "{resourceName}"':'Відкрити посилання на "{resourceName}"',"Open menu":"Відкрити меню","Open navigation":"Відкрити навігацію","Open settings menu":"Відкрити меню налаштувань","Password is secure":"Пароль безпечний","Pause slideshow":"Пауза у показі слайдів","People & Body":"Люди та жести","Pick a date":"Вибрати дату","Pick a date and a time":"Виберіть дату та час","Pick a month":"Виберіть місяць","Pick a time":"Виберіть час","Pick a week":"Виберіть тиждень","Pick a year":"Виберіть рік","Pick an emoji":"Виберіть емоційку","Please select a time zone:":"Виберіть часовий пояс:",Previous:"Назад","Provider icon":"Піктограма постачальника","Raw link {options}":"Пряме посилання {options}","Related resources":"Пов'язані ресурси",Search:"Пошук","Search emoji":"Шукати емоційки","Search results":"Результати пошуку","sec. ago":"с тому","seconds ago":"с тому","Select a tag":"Виберіть позначку","Select provider":"Виберіть постачальника",Settings:"Налаштування","Settings navigation":"Навігація у налаштуваннях","Show password":"Показати пароль","Smart Picker":"Асистент вибору","Smileys & Emotion":"Смайли та емоції","Start slideshow":"Почати показ слайдів","Start typing to search":"Почніть вводити для пошуку",Submit:"Надіслати",Symbols:"Символи","Travel & Places":"Поїздки та місця","Type to search time zone":"Введіть для пошуку часовий пояс","Unable to search the group":"Неможливо шукати в групі","Undo changes":"Скасувати зміни",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Додайте "@", щоби згадати коористувача або ":" для вибору емоційки...'}},{locale:"ur_PK",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"uz",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"vi",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"zh_CN",translations:{"{tag} (invisible)":"{tag} （不可见）","{tag} (restricted)":"{tag} （受限）","a few seconds ago":"",Actions:"行为",'Actions for item with name "{name}"':"",Activities:"活动","Animals & Nature":"动物 & 自然","Any link":"","Anything shared with the same group of people will show up here":"与同组用户分享的所有内容都会显示于此","Avatar of {displayName}":"{displayName}的头像","Avatar of {displayName}, {status}":"{displayName}的头像，{status}",Back:"","Back to provider selection":"","Cancel changes":"取消更改","Change name":"",Choose:"选择","Clear search":"","Clear text":"清除文本",Close:"关闭","Close modal":"关闭窗口","Close navigation":"关闭导航","Close sidebar":"关闭侧边栏","Close Smart Picker":"","Collapse menu":"","Confirm changes":"确认更改",Custom:"自定义","Edit item":"编辑项目","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"喜爱",Flags:"旗帜","Food & Drink":"食物 & 饮品","Frequently used":"经常使用",Global:"全局","Go back to the list":"返回至列表","Hide password":"隐藏密码",'Load more "{options}""':"","Message limit of {count} characters reached":"已达到 {count} 个字符的消息限制","More items …":"更多项目…","More options":"",Next:"下一个","No emoji found":"表情未找到","No link provider found":"","No results":"无结果",Objects:"物体","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"开启导航","Open settings menu":"","Password is secure":"密码安全","Pause slideshow":"暂停幻灯片","People & Body":"人 & 身体","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"选择一个表情","Please select a time zone:":"请选择一个时区：",Previous:"上一个","Provider icon":"","Raw link {options}":"","Related resources":"相关资源",Search:"搜索","Search emoji":"","Search results":"搜索结果","sec. ago":"","seconds ago":"","Select a tag":"选择一个标签","Select provider":"",Settings:"设置","Settings navigation":"设置向导","Show password":"显示密码","Smart Picker":"","Smileys & Emotion":"笑脸 & 情感","Start slideshow":"开始幻灯片","Start typing to search":"",Submit:"提交",Symbols:"符号","Travel & Places":"旅游 & 地点","Type to search time zone":"打字以搜索时区","Unable to search the group":"无法搜索分组","Undo changes":"撤销更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'写信息，使用"@"来提及某人，使用":"进行表情符号自动完成 ...'}},{locale:"zh_HK",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)","a few seconds ago":"",Actions:"動作",'Actions for item with name "{name}"':"",Activities:"活動","Animals & Nature":"動物與自然","Any link":"","Anything shared with the same group of people will show up here":"與同一組人共享的任何內容都會顯示在此處","Avatar of {displayName}":"{displayName} 的頭像","Avatar of {displayName}, {status}":"{displayName} 的頭像，{status}",Back:"","Back to provider selection":"","Cancel changes":"取消更改","Change name":"",Choose:"選擇","Clear search":"","Clear text":"清除文本",Close:"關閉","Close modal":"關閉模態","Close navigation":"關閉導航","Close sidebar":"關閉側邊欄","Close Smart Picker":"","Collapse menu":"","Confirm changes":"確認更改",Custom:"自定義","Edit item":"編輯項目","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"喜愛",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"經常使用",Global:"全球的","Go back to the list":"返回清單","Hide password":"隱藏密碼",'Load more "{options}""':"","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制","More items …":"更多項目 …","More options":"",Next:"下一個","No emoji found":"未找到表情符號","No link provider found":"","No results":"無結果",Objects:"物件","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"開啟導航","Open settings menu":"","Password is secure":"密碼是安全的","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"選擇表情符號","Please select a time zone:":"請選擇時區：",Previous:"上一個","Provider icon":"","Raw link {options}":"","Related resources":"相關資源",Search:"搜尋","Search emoji":"","Search results":"搜尋結果","sec. ago":"","seconds ago":"","Select a tag":"選擇標籤","Select provider":"",Settings:"設定","Settings navigation":"設定值導覽","Show password":"顯示密碼","Smart Picker":"","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片","Start typing to search":"",Submit:"提交",Symbols:"標誌","Travel & Places":"旅遊與景點","Type to search time zone":"鍵入以搜索時區","Unable to search the group":"無法搜尋群組","Undo changes":"取消更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'寫訊息，使用 "@" 來指代某人，使用 ":" 用於表情符號自動填充 ...'}},{locale:"zh_TW",translations:{"{tag} (invisible)":"{tag}（隱藏）","{tag} (restricted)":"{tag}（受限）","a few seconds ago":"幾秒前",Actions:"動作",'Actions for item with name "{name}"':"",Activities:"活動","Animals & Nature":"動物與自然","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"選擇","Clear search":"","Clear text":"",Close:"關閉","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"自定義","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"最近使用",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制","More items …":"","More options":"",Next:"下一個","No emoji found":"未找到表情符號","No link provider found":"","No results":"無結果",Objects:"物件","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"選擇表情符號","Please select a time zone:":"",Previous:"上一個","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"搜尋","Search emoji":"","Search results":"搜尋結果","sec. ago":"","seconds ago":"","Select a tag":"選擇標籤","Select provider":"",Settings:"設定","Settings navigation":"設定值導覽","Show password":"","Smart Picker":"","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片","Start typing to search":"",Submit:"",Symbols:"標誌","Travel & Places":"旅遊與景點","Type to search time zone":"","Unable to search the group":"無法搜尋群組","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"zu_ZA",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}}].forEach((function(e){var t={};for(var a in e.translations)e.translations[a].pluralId?t[a]={msgid:a,msgid_plural:e.translations[a].pluralId,msgstr:e.translations[a].msgstr}:t[a]={msgid:a,msgstr:[e.translations[a]]};i.addTranslation(e.locale,{translations:{"":t}})}));var n=i.build(),s=(n.ngettext.bind(n),n.gettext.bind(n))},1205:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=function(e){return Math.random().toString(36).replace(/[^a-z]+/g,"").slice(0,e||5)}},1206:(e,t,a)=>{"use strict";a.d(t,{L:()=>o});var o=function(){return Object.assign(window,{_nc_focus_trap:window._nc_focus_trap||[]}),window._nc_focus_trap}},4825:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(7537),i=a.n(o),n=a(3645),s=a.n(n)()(i());s.push([e.id,".material-design-icon[data-v-29452b76]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.action-items[data-v-29452b76]{display:flex;align-items:center}.action-items>button[data-v-29452b76]{margin-right:7px}.action-item[data-v-29452b76]{--open-background-color: var(--color-background-hover, $action-background-hover);position:relative;display:inline-block}.action-item.action-item--primary[data-v-29452b76]{--open-background-color: var(--color-primary-element-hover)}.action-item.action-item--secondary[data-v-29452b76]{--open-background-color: var(--color-primary-element-light-hover)}.action-item.action-item--error[data-v-29452b76]{--open-background-color: var(--color-error-hover)}.action-item.action-item--warning[data-v-29452b76]{--open-background-color: var(--color-warning-hover)}.action-item.action-item--success[data-v-29452b76]{--open-background-color: var(--color-success-hover)}.action-item.action-item--tertiary-no-background[data-v-29452b76]{--open-background-color: transparent}.action-item.action-item--open .action-item__menutoggle[data-v-29452b76]{background-color:var(--open-background-color)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcActions/NcActions.vue"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,+BACC,YAAA,CACA,kBAAA,CAGA,sCACC,gBAAA,CAIF,8BACC,gFAAA,CACA,iBAAA,CACA,oBAAA,CAEA,mDACC,2DAAA,CAGD,qDACC,iEAAA,CAGD,iDACC,iDAAA,CAGD,mDACC,mDAAA,CAGD,mDACC,mDAAA,CAGD,kEACC,oCAAA,CAGD,yEACC,6CAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n// Inline buttons\n.action-items {\n\tdisplay: flex;\n\talign-items: center;\n\n\t// Spacing between buttons\n\t& > button {\n\t\tmargin-right: math.div($icon-margin, 2);\n\t}\n}\n\n.action-item {\n\t--open-background-color: var(--color-background-hover, $action-background-hover);\n\tposition: relative;\n\tdisplay: inline-block;\n\n\t&.action-item--primary {\n\t\t--open-background-color: var(--color-primary-element-hover);\n\t}\n\n\t&.action-item--secondary {\n\t\t--open-background-color: var(--color-primary-element-light-hover);\n\t}\n\n\t&.action-item--error {\n\t\t--open-background-color: var(--color-error-hover);\n\t}\n\n\t&.action-item--warning {\n\t\t--open-background-color: var(--color-warning-hover);\n\t}\n\n\t&.action-item--success {\n\t\t--open-background-color: var(--color-success-hover);\n\t}\n\n\t&.action-item--tertiary-no-background {\n\t\t--open-background-color: transparent;\n\t}\n\n\t&.action-item--open .action-item__menutoggle {\n\t\tbackground-color: var(--open-background-color);\n\t}\n}\n"],sourceRoot:""}]);const r=s},4946:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(7537),i=a.n(o),n=a(3645),s=a.n(n)()(i());s.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper{border-radius:var(--border-radius-large);overflow:hidden}.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper .v-popper__inner{border-radius:var(--border-radius-large);padding:4px;max-height:calc(50vh - 16px);overflow:auto}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcActions/NcActions.vue"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCJD,kFACC,wCAAA,CACA,eAAA,CAEA,mGACC,wCAAA,CACA,WAAA,CACA,4BAAA,CACA,aAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n// We overwrote the popover base class, so we can style\n// the popover__inner for actions only.\n.v-popper--theme-dropdown.v-popper__popper.action-item__popper .v-popper__wrapper {\n\tborder-radius: var(--border-radius-large);\n\toverflow:hidden;\n\n\t.v-popper__inner {\n\t\tborder-radius: var(--border-radius-large);\n\t\tpadding: 4px;\n\t\tmax-height: calc(50vh - 16px);\n\t\toverflow: auto;\n\t}\n}\n"],sourceRoot:""}]);const r=s},7294:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(7537),i=a.n(o),n=a(3645),s=a.n(n)()(i());s.push([e.id,".material-design-icon[data-v-7aad13a0]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.button-vue[data-v-7aad13a0]{position:relative;width:fit-content;overflow:hidden;border:0;padding:0;font-size:var(--default-font-size);font-weight:bold;min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:22px;transition-property:color,border-color,background-color;transition-duration:.1s;transition-timing-function:linear;color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue *[data-v-7aad13a0],.button-vue span[data-v-7aad13a0]{cursor:pointer}.button-vue[data-v-7aad13a0]:focus{outline:none}.button-vue[data-v-7aad13a0]:disabled{cursor:default;opacity:.5;filter:saturate(0.7)}.button-vue:disabled *[data-v-7aad13a0]{cursor:default}.button-vue[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-primary-element-light-hover)}.button-vue[data-v-7aad13a0]:active{background-color:var(--color-primary-element-light)}.button-vue__wrapper[data-v-7aad13a0]{display:inline-flex;align-items:center;justify-content:center;width:100%}.button-vue--end .button-vue__wrapper[data-v-7aad13a0]{justify-content:end}.button-vue--start .button-vue__wrapper[data-v-7aad13a0]{justify-content:start}.button-vue--reverse .button-vue__wrapper[data-v-7aad13a0]{flex-direction:row-reverse}.button-vue--reverse.button-vue--icon-and-text[data-v-7aad13a0]{padding-inline:calc(var(--default-grid-baseline)*4) var(--default-grid-baseline)}.button-vue__icon[data-v-7aad13a0]{height:44px;width:44px;min-height:44px;min-width:44px;display:flex;justify-content:center;align-items:center}.button-vue__text[data-v-7aad13a0]{font-weight:bold;margin-bottom:1px;padding:2px 0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.button-vue--icon-only[data-v-7aad13a0]{width:44px !important}.button-vue--text-only[data-v-7aad13a0]{padding:0 12px}.button-vue--text-only .button-vue__text[data-v-7aad13a0]{margin-left:4px;margin-right:4px}.button-vue--icon-and-text[data-v-7aad13a0]{padding-block:0;padding-inline:var(--default-grid-baseline) calc(var(--default-grid-baseline)*4)}.button-vue--wide[data-v-7aad13a0]{width:100%}.button-vue[data-v-7aad13a0]:focus-visible{outline:2px solid var(--color-main-text) !important;box-shadow:0 0 0 4px var(--color-main-background) !important}.button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-7aad13a0]{outline:2px solid var(--color-primary-element-text);border-radius:var(--border-radius);background-color:rgba(0,0,0,0)}.button-vue--vue-primary[data-v-7aad13a0]{background-color:var(--color-primary-element);color:var(--color-primary-element-text)}.button-vue--vue-primary[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-primary-element-hover)}.button-vue--vue-primary[data-v-7aad13a0]:active{background-color:var(--color-primary-element)}.button-vue--vue-secondary[data-v-7aad13a0]{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue--vue-secondary[data-v-7aad13a0]:hover:not(:disabled){color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light-hover)}.button-vue--vue-tertiary[data-v-7aad13a0]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-background-hover)}.button-vue--vue-tertiary-no-background[data-v-7aad13a0]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-no-background[data-v-7aad13a0]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-7aad13a0]{color:var(--color-primary-element-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-7aad13a0]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-success[data-v-7aad13a0]{background-color:var(--color-success);color:#fff}.button-vue--vue-success[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-success-hover)}.button-vue--vue-success[data-v-7aad13a0]:active{background-color:var(--color-success)}.button-vue--vue-warning[data-v-7aad13a0]{background-color:var(--color-warning);color:#fff}.button-vue--vue-warning[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-warning-hover)}.button-vue--vue-warning[data-v-7aad13a0]:active{background-color:var(--color-warning)}.button-vue--vue-error[data-v-7aad13a0]{background-color:var(--color-error);color:#fff}.button-vue--vue-error[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-error-hover)}.button-vue--vue-error[data-v-7aad13a0]:active{background-color:var(--color-error)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcButton/NcButton.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,6BACC,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CACA,kCAAA,CACA,gBAAA,CACA,eCcgB,CDbhB,cCagB,CDZhB,YAAA,CACA,kBAAA,CACA,sBAAA,CAGA,cAAA,CAKA,kBAAA,CACA,uDAAA,CACA,uBAAA,CACA,iCAAA,CAkBA,6CAAA,CACA,mDAAA,CA1BA,iEAEC,cAAA,CAQD,mCACC,YAAA,CAGD,sCACC,cAAA,CAIA,UCIiB,CDFjB,oBAAA,CALA,wCACC,cAAA,CAUF,kDACC,yDAAA,CAKD,oCACC,mDAAA,CAGD,sCACC,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CAGD,uDACC,mBAAA,CAED,yDACC,qBAAA,CAED,2DACC,0BAAA,CAGD,gEACC,gFAAA,CAGD,mCACC,WCrDe,CDsDf,UCtDe,CDuDf,eCvDe,CDwDf,cCxDe,CDyDf,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,mCACC,gBAAA,CACA,iBAAA,CACA,aAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CAID,wCACC,qBAAA,CAID,wCACC,cAAA,CACA,0DACC,eAAA,CACA,gBAAA,CAKF,4CACC,eAAA,CACA,gFAAA,CAID,mCACC,UAAA,CAGD,2CACC,mDAAA,CACA,4DAAA,CACA,+EACC,mDAAA,CACA,kCAAA,CACA,8BAAA,CAOF,0CACC,6CAAA,CACA,uCAAA,CACA,+DACC,mDAAA,CAID,iDACC,6CAAA,CAKF,4CACC,6CAAA,CACA,mDAAA,CACA,iEACC,6CAAA,CACA,yDAAA,CAKF,2CACC,4BAAA,CACA,8BAAA,CACA,gEACC,8CAAA,CAKF,yDACC,4BAAA,CACA,8BAAA,CACA,8EACC,8BAAA,CAKF,sDACC,uCAAA,CACA,8BAAA,CAEA,2EACC,8BAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,wCACC,mCAAA,CACA,UAAA,CACA,6DACC,yCAAA,CAID,+CACC,mCAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n\n.button-vue {\n\tposition: relative;\n\twidth: fit-content;\n\toverflow: hidden;\n\tborder: 0;\n\tpadding: 0;\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\tmin-height: $clickable-area;\n\tmin-width: $clickable-area;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t// Cursor pointer on element and all children\n\tcursor: pointer;\n\t& *,\n\tspan {\n\t\tcursor: pointer;\n\t}\n\tborder-radius: math.div($clickable-area, 2);\n\ttransition-property: color, border-color, background-color;\n\ttransition-duration: 0.1s;\n\ttransition-timing-function: linear;\n\n\t// No outline feedback for focus. Handled with a toggled class in js (see data)\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&:disabled {\n\t\tcursor: default;\n\t\t& * {\n\t\t\tcursor: default;\n\t\t}\n\t\topacity: $opacity_disabled;\n\t\t// Gives a wash out effect\n\t\tfilter: saturate($opacity_normal);\n\t}\n\n\t// Default button type\n\tcolor: var(--color-primary-element-light-text);\n\tbackground-color: var(--color-primary-element-light);\n\t&:hover:not(:disabled) {\n\t\tbackground-color: var(--color-primary-element-light-hover);\n\t}\n\n\t// Back to the default color for this button when active\n\t// TODO: add ripple effect\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n\n\t&__wrapper {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t&--end &__wrapper {\n\t\tjustify-content: end;\n\t}\n\t&--start &__wrapper {\n\t\tjustify-content: start;\n\t}\n\t&--reverse &__wrapper {\n\t\tflex-direction: row-reverse;\n\t}\n\n\t&--reverse#{&}--icon-and-text {\n\t\tpadding-inline: calc(var(--default-grid-baseline) * 4) var(--default-grid-baseline);\n\t}\n\n\t&__icon {\n\t\theight: $clickable-area;\n\t\twidth: $clickable-area;\n\t\tmin-height: $clickable-area;\n\t\tmin-width: $clickable-area;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\n\t&__text {\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 1px;\n\t\tpadding: 2px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t// Icon-only button\n\t&--icon-only {\n\t\twidth: $clickable-area !important;\n\t}\n\n\t// Text-only button\n\t&--text-only {\n\t\tpadding: 0 12px;\n\t\t& .button-vue__text {\n\t\t\tmargin-left: 4px;\n\t\t\tmargin-right: 4px;\n\t\t}\n\t}\n\n\t// Icon and text button\n\t&--icon-and-text {\n\t\tpadding-block: 0;\n\t\tpadding-inline: var(--default-grid-baseline) calc(var(--default-grid-baseline) * 4);\n\t}\n\n\t// Wide button spans the whole width of the container\n\t&--wide {\n\t\twidth: 100%;\n\t}\n\n\t&:focus-visible {\n\t\toutline: 2px solid var(--color-main-text) !important;\n\t\tbox-shadow: 0 0 0 4px var(--color-main-background) !important;\n\t\t&.button-vue--vue-tertiary-on-primary {\n\t\t\toutline: 2px solid var(--color-primary-element-text);\n\t\t\tborder-radius: var(--border-radius);\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Button types\n\n\t// Primary\n\t&--vue-primary {\n\t\tbackground-color: var(--color-primary-element);\n\t\tcolor: var(--color-primary-element-text);\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-primary-element-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-primary-element);\n\t\t}\n\t}\n\n\t// Secondary\n\t&--vue-secondary {\n\t\tcolor: var(--color-primary-element-light-text);\n\t\tbackground-color: var(--color-primary-element-light);\n\t\t&:hover:not(:disabled) {\n\t\t\tcolor: var(--color-primary-element-light-text);\n\t\t\tbackground-color: var(--color-primary-element-light-hover);\n\t\t}\n\t}\n\n\t// Tertiary\n\t&--vue-tertiary {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t}\n\n\t// Tertiary, no background\n\t&--vue-tertiary-no-background {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Tertiary on primary color (like the header)\n\t&--vue-tertiary-on-primary {\n\t\tcolor: var(--color-primary-element-text);\n\t\tbackground-color: transparent;\n\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Success\n\t&--vue-success {\n\t\tbackground-color: var(--color-success);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-success-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// : add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-success);\n\t\t}\n\t}\n\n\t// Warning\n\t&--vue-warning {\n\t\tbackground-color: var(--color-warning);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-warning-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-warning);\n\t\t}\n\t}\n\n\t// Error\n\t&--vue-error {\n\t\tbackground-color: var(--color-error);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-error-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-error);\n\t\t}\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const r=s},2600:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(7537),i=a.n(o),n=a(3645),s=a.n(n)()(i());s.push([e.id,".material-design-icon[data-v-df4551c0]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.counter-bubble__counter[data-v-df4551c0]{font-size:calc(var(--default-font-size)*.8);overflow:hidden;width:fit-content;max-width:44px;text-align:center;text-overflow:ellipsis;line-height:1em;padding:4px 6px;border-radius:var(--border-radius-pill);background-color:var(--color-primary-element-light);font-weight:bold;color:var(--color-primary-element-light-text)}.counter-bubble__counter--highlighted[data-v-df4551c0]{color:var(--color-primary-element-text);background-color:var(--color-primary-element)}.counter-bubble__counter--outlined[data-v-df4551c0]{color:var(--color-primary-element);background:rgba(0,0,0,0);box-shadow:inset 0 0 0 2px}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcCounterBubble/NcCounterBubble.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCND,0CACC,2CAAA,CACA,eAAA,CACA,iBAAA,CACA,cCmBgB,CDlBhB,iBAAA,CACA,sBAAA,CACA,eAAA,CACA,eAAA,CACA,uCAAA,CACA,mDAAA,CACA,gBAAA,CACA,6CAAA,CAEA,uDACC,uCAAA,CACA,6CAAA,CAGD,oDACC,kCAAA,CACA,wBAAA,CACA,0BAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n.counter-bubble__counter {\n\tfont-size: calc(var(--default-font-size) * .8);\n\toverflow: hidden;\n\twidth: fit-content;\n\tmax-width: $clickable-area;\n\ttext-align: center;\n\ttext-overflow: ellipsis;\n\tline-height: 1em;\n\tpadding: 4px 6px;\n\tborder-radius: var(--border-radius-pill);\n\tbackground-color: var(--color-primary-element-light);\n\tfont-weight: bold;\n\tcolor: var(--color-primary-element-light-text);\n\n\t&--highlighted {\n\t\tcolor: var(--color-primary-element-text);\n\t\tbackground-color: var(--color-primary-element);\n\t}\n\n\t&--outlined {\n\t\tcolor: var(--color-primary-element);\n\t\tbackground: transparent;\n\t\tbox-shadow: inset 0 0 0 2px;\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const r=s},194:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(7537),i=a.n(o),n=a(3645),s=a.n(n)()(i());s.push([e.id,".material-design-icon[data-v-d8f99630]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.list-item__wrapper[data-v-d8f99630]{position:relative;width:100%}.list-item__wrapper--active .list-item[data-v-d8f99630],.list-item__wrapper:active .list-item[data-v-d8f99630],.list-item__wrapper.active .list-item[data-v-d8f99630]{background-color:var(--color-primary-element-light)}.list-item[data-v-d8f99630]{display:block;position:relative;flex:0 0 auto;justify-content:flex-start;padding:8px;border-radius:32px;margin:2px 0;width:100%;cursor:pointer;transition:background-color var(--animation-quick) ease-in-out;list-style:none}.list-item[data-v-d8f99630]:hover,.list-item[data-v-d8f99630]:focus{background-color:var(--color-background-hover)}.list-item-content__wrapper[data-v-d8f99630]{display:flex;align-items:center;height:48px}.list-item-content__wrapper--compact[data-v-d8f99630]{height:36px}.list-item-content__wrapper--compact .line-one[data-v-d8f99630],.list-item-content__wrapper--compact .line-two[data-v-d8f99630]{margin-top:-4px;margin-bottom:-4px}.list-item-content[data-v-d8f99630]{display:flex;flex:1 1 auto;justify-content:space-between;padding-left:8px}.list-item-content__main[data-v-d8f99630]{flex:1 1 auto;width:0;margin:auto 0}.list-item-content__main--oneline[data-v-d8f99630]{display:flex}.list-item-content__actions[data-v-d8f99630]{flex:0 0 auto;align-self:center;justify-content:center;margin-left:4px}.list-item__extra[data-v-d8f99630]{margin-top:4px}[data-themes*=highcontrast] .list-item__wrapper--active .list-item[data-v-d8f99630],[data-themes*=highcontrast] .list-item__wrapper:active .list-item[data-v-d8f99630],[data-themes*=highcontrast] .list-item__wrapper.active .list-item[data-v-d8f99630]{background-color:var(--color-primary-element-light-hover)}.line-one[data-v-d8f99630]{display:flex;align-items:center;justify-content:space-between;white-space:nowrap;margin:0 auto 0 0;overflow:hidden}.line-one__name[data-v-d8f99630]{overflow:hidden;flex-grow:1;cursor:pointer;text-overflow:ellipsis;color:var(--color-main-text);font-weight:bold}.line-one__details[data-v-d8f99630]{color:var(--color-text-maxcontrast);margin:0 8px;font-weight:normal}.line-two[data-v-d8f99630]{display:flex;align-items:flex-start;justify-content:space-between;white-space:nowrap}.line-two--bold[data-v-d8f99630]{font-weight:bold}.line-two__subname[data-v-d8f99630]{overflow:hidden;flex-grow:1;cursor:pointer;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.line-two__additional_elements[data-v-d8f99630]{margin:2px 4px 0 4px;display:flex;align-items:center}.line-two__indicator[data-v-d8f99630]{margin:0 5px}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcListItem/NcListItem.vue"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,qCACC,iBAAA,CACA,UAAA,CAKC,sKACC,mDAAA,CAMH,4BACC,aAAA,CACA,iBAAA,CACA,aAAA,CACA,0BAAA,CACA,WAAA,CAGA,kBAAA,CACA,YAAA,CACA,UAAA,CACA,cAAA,CACA,8DAAA,CACA,eAAA,CACA,oEAEC,8CAAA,CAGD,6CACC,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,sDACC,WAAA,CAEA,gIACC,eAAA,CACA,kBAAA,CAKH,oCACC,YAAA,CACA,aAAA,CACA,6BAAA,CACA,gBAAA,CAEA,0CACC,aAAA,CACA,OAAA,CACA,aAAA,CAEA,mDACC,YAAA,CAIF,6CACC,aAAA,CACA,iBAAA,CACA,sBAAA,CACA,eAAA,CAIF,mCACC,cAAA,CAUC,0PACC,yDAAA,CAMJ,2BACC,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,kBAAA,CACA,iBAAA,CACA,eAAA,CAEA,iCACC,eAAA,CACA,WAAA,CACA,cAAA,CACA,sBAAA,CACA,4BAAA,CACA,gBAAA,CAGD,oCACC,mCAAA,CACA,YAAA,CACA,kBAAA,CAIF,2BACC,YAAA,CACA,sBAAA,CACA,6BAAA,CACA,kBAAA,CACA,iCACC,gBAAA,CAGD,oCACC,eAAA,CACA,WAAA,CACA,cAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,gDACC,oBAAA,CACA,YAAA,CACA,kBAAA,CAGD,sCACC,YAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n\n.list-item__wrapper {\n\tposition: relative;\n\twidth: 100%;\n\n\t&--active,\n\t&:active,\n\t&.active {\n\t\t.list-item {\n\t\t\tbackground-color: var(--color-primary-element-light);\n\t\t}\n\t}\n}\n\n// NcListItem\n.list-item {\n\tdisplay: block;\n\tposition: relative;\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\tpadding: 8px;\n\t// Fix for border-radius being too large for 3-line entries like in Mail\n\t// 44px avatar size / 2 + 8px padding, and 2px for better visual quality\n\tborder-radius: 32px;\n\tmargin: 2px 0;\n\twidth: 100%;\n\tcursor: pointer;\n\ttransition: background-color var(--animation-quick) ease-in-out;\n\tlist-style: none;\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: var(--color-background-hover);\n\t}\n\n\t&-content__wrapper {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 48px;\n\n\t\t&--compact {\n\t\t\theight: 36px;\n\n\t\t\t.line-one, .line-two {\n\t\t\t\tmargin-top: -4px;\n\t\t\t\tmargin-bottom: -4px;\n\t\t\t}\n\t\t}\n\t}\n\n\t&-content {\n\t\tdisplay: flex;\n\t\tflex: 1 1 auto;\n\t\tjustify-content: space-between;\n\t\tpadding-left: 8px;\n\n\t\t&__main {\n\t\t\tflex: 1 1 auto;\n\t\t\twidth: 0;\n\t\t\tmargin: auto 0;\n\n\t\t\t&--oneline {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t}\n\n\t\t&__actions {\n\t\t\tflex: 0 0 auto;\n\t\t\talign-self: center;\n\t\t\tjustify-content: center;\n\t\t\tmargin-left: 4px;\n\t\t}\n\t}\n\n\t&__extra {\n\t\tmargin-top: 4px;\n\t}\n}\n\n// Add more contrast for active entry\n[data-themes*='highcontrast'] {\n\t.list-item__wrapper {\n\t\t&--active,\n\t\t&:active,\n\t\t&.active {\n\t\t\t.list-item {\n\t\t\t\tbackground-color: var(--color-primary-element-light-hover);\n\t\t\t}\n\t\t}\n\t}\n}\n\n.line-one {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\twhite-space: nowrap;\n\tmargin: 0 auto 0 0;\n\toverflow: hidden;\n\n\t&__name {\n\t\toverflow: hidden;\n\t\tflex-grow: 1;\n\t\tcursor: pointer;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-main-text);\n\t\tfont-weight: bold;\n\t}\n\n\t&__details {\n\t\tcolor: var(--color-text-maxcontrast);\n\t\tmargin: 0 8px;\n\t\tfont-weight: normal;\n\t}\n}\n\n.line-two {\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: space-between;\n\twhite-space: nowrap;\n\t&--bold {\n\t\tfont-weight: bold;\n\t}\n\n\t&__subname {\n\t\toverflow: hidden;\n\t\tflex-grow: 1;\n\t\tcursor: pointer;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__additional_elements {\n\t\tmargin: 2px 4px 0 4px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t&__indicator {\n\t\tmargin: 0 5px;\n\t}\n}\n\n"],sourceRoot:""}]);const r=s},1625:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(7537),i=a.n(o),n=a(3645),s=a.n(n)()(i());s.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:rgba(0,0,0,0);pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.v-popper--theme-dropdown.v-popper__popper{z-index:100000;top:0;left:0;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.v-popper--theme-dropdown.v-popper__popper .v-popper__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius-large);overflow:hidden;background:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container{position:absolute;z-index:1;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);border-width:10px}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container{bottom:-10px;border-bottom-width:0;border-top-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:-10px;border-top-width:0;border-bottom-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container{left:-10px;border-left-width:0;border-right-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px;border-right-width:0;border-left-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true]{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false]{visibility:visible;transition:opacity var(--animation-quick);opacity:1}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcPopover/NcPopover.vue"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,iBACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,mBAAA,CACA,aAAA,CACA,eAAA,CACA,SAAA,CAGD,wBACC,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,mBAAA,CACA,UAAA,CAMA,2CACC,cAAA,CACA,KAAA,CACA,MAAA,CACA,wBAAA,CAEA,sDAAA,CAEA,4DACC,SAAA,CACA,4BAAA,CACA,wCAAA,CACA,eAAA,CACA,uCAAA,CAGD,sEACC,iBAAA,CACA,SAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,0BAAA,CACA,iBA1BW,CA6BZ,kGACC,YAAA,CACA,qBAAA,CACA,6CAAA,CAGD,qGACC,SAAA,CACA,kBAAA,CACA,gDAAA,CAGD,oGACC,UAAA,CACA,mBAAA,CACA,+CAAA,CAGD,mGACC,WAAA,CACA,oBAAA,CACA,8CAAA,CAGD,6DACC,iBAAA,CACA,2EAAA,CACA,SAAA,CAGD,8DACC,kBAAA,CACA,yCAAA,CACA,SAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n\n.resize-observer {\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tz-index:-1;\n\twidth:100%;\n\theight:100%;\n\tborder:none;\n\tbackground-color:transparent;\n\tpointer-events:none;\n\tdisplay:block;\n\toverflow:hidden;\n\topacity:0\n}\n\n.resize-observer object {\n\tdisplay:block;\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\theight:100%;\n\twidth:100%;\n\toverflow:hidden;\n\tpointer-events:none;\n\tz-index:-1\n}\n\n$arrow-width: 10px;\n\n.v-popper--theme-dropdown {\n\t&.v-popper__popper {\n\t\tz-index: 100000;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tdisplay: block !important;\n\n\t\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t\t.v-popper__inner {\n\t\t\tpadding: 0;\n\t\t\tcolor: var(--color-main-text);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t\toverflow: hidden;\n\t\t\tbackground: var(--color-main-background);\n\t\t}\n\n\t\t.v-popper__arrow-container {\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: transparent;\n\t\t\tborder-width: $arrow-width;\n\t\t}\n\n\t\t&[data-popper-placement^='top'] .v-popper__arrow-container {\n\t\t\tbottom: -$arrow-width;\n\t\t\tborder-bottom-width: 0;\n\t\t\tborder-top-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='bottom'] .v-popper__arrow-container {\n\t\t\ttop: -$arrow-width;\n\t\t\tborder-top-width: 0;\n\t\t\tborder-bottom-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='right'] .v-popper__arrow-container {\n\t\t\tleft: -$arrow-width;\n\t\t\tborder-left-width: 0;\n\t\t\tborder-right-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='left'] .v-popper__arrow-container {\n\t\t\tright: -$arrow-width;\n\t\t\tborder-right-width: 0;\n\t\t\tborder-left-color: var(--color-main-background);\n\t\t}\n\n\t\t&[aria-hidden='true'] {\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\t\topacity: 0;\n\t\t}\n\n\t\t&[aria-hidden='false'] {\n\t\t\tvisibility: visible;\n\t\t\ttransition: opacity var(--animation-quick);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const r=s},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",o=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),o&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),o&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,o,i,n){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var m=[].concat(e[c]);o&&s[m[0]]||(void 0!==n&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=n),a&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=a):m[2]=a),i&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=i):m[4]="".concat(i)),t.push(m))}},t}},7537:e=>{"use strict";e.exports=function(e){var t=e[1],a=e[3];if(!a)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),n="/*# ".concat(i," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},3379:e=>{"use strict";var t=[];function a(e){for(var a=-1,o=0;o<t.length;o++)if(t[o].identifier===e){a=o;break}return a}function o(e,o){for(var n={},s=[],r=0;r<e.length;r++){var l=e[r],c=o.base?l[0]+o.base:l[0],m=n[c]||0,d="".concat(c," ").concat(m);n[c]=m+1;var u=a(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=i(p,o);o.byIndex=r,t.splice(r,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function i(e,t){var a=t.domAPI(t);a.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,i){var n=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<n.length;s++){var r=a(n[s]);t[r].references--}for(var l=o(e,i),c=0;c<n.length;c++){var m=a(n[c]);0===t[m].references&&(t[m].updater(),t.splice(m,1))}n=l}}},569:e=>{"use strict";var t={};e.exports=function(e,a){var o=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}},9216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,a)=>{"use strict";e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var o="";a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,i&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}");var n=a.sourceMap;n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},5727:()=>{},2102:()=>{},7633:()=>{},1560:()=>{},2405:()=>{},1900:(e,t,a)=>{"use strict";function o(e,t,a,o,i,n,s,r){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var m=c.render;c.render=function(e,t){return l.call(t),m(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}a.d(t,{Z:()=>o})},7931:e=>{"use strict";e.exports=__webpack_require__(/*! @nextcloud/l10n/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.js")},9454:e=>{"use strict";e.exports=__webpack_require__(/*! floating-vue */ "./node_modules/floating-vue/dist/floating-vue.es.js")},4505:e=>{"use strict";e.exports=__webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js")},2734:e=>{"use strict";e.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js")},1441:e=>{"use strict";e.exports=__webpack_require__(/*! vue-material-design-icons/DotsHorizontal.vue */ "./node_modules/vue-material-design-icons/DotsHorizontal.vue")}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={id:o,exports:{}};return e[o](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nc=void 0;var o={};return(()=>{"use strict";a.r(o),a.d(o,{default:()=>w});var e=a(8250),t=a(6594),i=a(3329),n=a(932);const s={name:"NcListItem",components:{NcActions:e.default,NcCounterBubble:t.default,NcVNodes:i.default},props:{details:{type:String,default:""},name:{type:String,required:!0},exact:{type:Boolean,default:!1},to:{type:[String,Object],default:null},href:{type:String,default:"#"},anchorId:{type:String,default:""},bold:{type:Boolean,default:!1},compact:{type:Boolean,default:!1},active:{type:Boolean,default:!1},linkAriaLabel:{type:String,default:""},actionsAriaLabel:{type:String,default:""},counterNumber:{type:[Number,String],default:0},counterType:{type:String,default:"",validator:function(e){return-1!==["highlighted","outlined",""].indexOf(e)}},forceDisplayActions:{type:Boolean,default:!1}},emits:["click","update:menuOpen"],data:function(){return{hovered:!1,focused:!1,hasActions:!1,hasSubname:!1,displayActionsOnHoverFocus:!1,menuOpen:!1,hasIndicator:!1}},computed:{hasDetails:function(){return""!==this.details},oneLine:function(){return!this.hasSubname&&!this.showDetails},showAdditionalElements:function(){return!this.displayActionsOnHoverFocus||this.forceDisplayActions},showDetails:function(){return this.hasDetails&&(!this.displayActionsOnHoverFocus||this.forceDisplayActions)},computedActionsAriaLabel:function(){return this.actionsAriaLabel||(0,n.t)('Actions for item with name "{name}"',{name:this.name})}},watch:{menuOpen:function(e){e||this.hovered||(this.displayActionsOnHoverFocus=!1)}},mounted:function(){this.checkSlots()},updated:function(){this.checkSlots()},methods:{onClick:function(e,t,a){this.$emit("click",e),e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||a&&(null==t||t(e),e.preventDefault())},handleMouseover:function(){this.showActions(),this.hovered=!0},showActions:function(){this.hasActions&&(this.displayActionsOnHoverFocus=!0),this.hovered=!1},hideActions:function(){this.displayActionsOnHoverFocus=!1},handleFocus:function(){this.focused=!0,this.showActions()},handleBlur:function(){this.focused=!1},handleMouseleave:function(){this.menuOpen||(this.displayActionsOnHoverFocus=!1),this.hovered=!1},handleTab:function(e){this.focused&&this.hasActions?(e.preventDefault(),this.$refs.actions.$refs.menuButton.$el.focus(),this.focused=!1):(this.displayActionsOnHoverFocus=!1,this.$refs.actions.$refs.menuButton.$el.blur())},handleActionsUpdateOpen:function(e){this.menuOpen=e,this.$emit("update:menuOpen",e)},checkSlots:function(){this.hasActions!==!!this.$slots.actions&&(this.hasActions=!!this.$slots.actions),this.hasSubname!==!!this.$slots.subname&&(this.hasSubname=!!this.$slots.subname),this.hasIndicator!==!!this.$slots.indicator&&(this.hasIndicator=!!this.$slots.indicator)}}};var r=a(3379),l=a.n(r),c=a(7795),m=a.n(c),d=a(569),u=a.n(d),p=a(3565),h=a.n(p),g=a(9216),v=a.n(g),k=a(4589),A=a.n(k),y=a(194),f={};f.styleTagTransform=A(),f.setAttributes=h(),f.insert=u().bind(null,"head"),f.domAPI=m(),f.insertStyleElement=v();l()(y.Z,f);y.Z&&y.Z.locals&&y.Z.locals;var C=a(1900),P=a(1560),b=a.n(P),S=(0,C.Z)(s,(function(){var e=this,t=e._self._c;return t(e.to?"router-link":"NcVNodes",{tag:"component",attrs:{custom:!!e.to||null,to:e.to,exact:e.to?e.exact:null},scopedSlots:e._u([{key:"default",fn:function(a){var o=a.href,i=a.navigate,n=a.isActive;return[t("li",{staticClass:"list-item__wrapper",class:{"list-item__wrapper--active":n}},[t("a",{ref:"list-item",staticClass:"list-item",attrs:{id:e.anchorId,href:o||e.href,target:"#"===e.href?void 0:"_blank",rel:"#"===e.href?void 0:"noopener noreferrer","aria-label":e.linkAriaLabel},on:{mouseover:e.handleMouseover,mouseleave:e.handleMouseleave,focus:e.handleFocus,blur:e.handleBlur,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.handleTab.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.hideActions.apply(null,arguments)}],click:function(t){return e.onClick(t,i,o)}}},[t("div",{staticClass:"list-item-content__wrapper",class:{"list-item-content__wrapper--compact":e.compact}},[e._t("icon"),e._v(" "),t("div",{staticClass:"list-item-content"},[t("div",{staticClass:"list-item-content__main",class:{"list-item-content__main--oneline":e.oneLine}},[t("div",{staticClass:"line-one"},[t("span",{staticClass:"line-one__name"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.name)+"\n\t\t\t\t\t\t\t")]),e._v(" "),e.showDetails?t("span",{staticClass:"line-one__details"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.details)+"\n\t\t\t\t\t\t\t")]):e._e()]),e._v(" "),t("div",{staticClass:"line-two",class:{"line-two--bold":e.bold}},[e.hasSubname?t("span",{staticClass:"line-two__subname"},[e._t("subname")],2):e._e(),e._v(" "),e.showAdditionalElements?t("span",{staticClass:"line-two__additional_elements"},[0!=e.counterNumber?t("NcCounterBubble",{staticClass:"line-two__counter",attrs:{type:e.counterType}},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(e.counterNumber)+"\n\t\t\t\t\t\t\t\t")]):e._e(),e._v(" "),e.hasIndicator?t("span",{staticClass:"line-two__indicator"},[e._t("indicator")],2):e._e()],1):e._e()])]),e._v(" "),e.forceDisplayActions?e._e():t("div",{directives:[{name:"show",rawName:"v-show",value:e.displayActionsOnHoverFocus,expression:"displayActionsOnHoverFocus"}],staticClass:"list-item-content__actions",on:{click:function(e){e.preventDefault(),e.stopPropagation()}}},[t("NcActions",{ref:"actions",attrs:{"aria-label":e.computedActionsAriaLabel},on:{"update:open":e.handleActionsUpdateOpen}},[e._t("actions")],2)],1)]),e._v(" "),e.forceDisplayActions?t("div",{staticClass:"list-item-content__actions",on:{click:function(e){e.preventDefault(),e.stopPropagation()}}},[t("NcActions",{ref:"actions",attrs:{"aria-label":e.computedActionsAriaLabel},on:{"update:open":e.handleActionsUpdateOpen}},[e._t("actions")],2)],1):e._e()],2),e._v(" "),e.$slots.extra?t("div",{staticClass:"list-item__extra"},[e._t("extra")],2):e._e()])])]}}],null,!0)})}),[],!1,null,"d8f99630",null);"function"==typeof b()&&b()(S);const w=S.exports})(),o})()));
//# sourceMappingURL=NcListItem.js.map

/***/ }),

/***/ "./apps/files_versions/src/files_versions_tab.js":
/*!*******************************************************!*\
  !*** ./apps/files_versions/src/files_versions_tab.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _views_VersionTab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/VersionTab.vue */ "./apps/files_versions/src/views/VersionTab.vue");
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var _mdi_svg_svg_backup_restore_svg_raw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdi/svg/svg/backup-restore.svg?raw */ "./node_modules/@mdi/svg/svg/backup-restore.svg?raw");
/**
 * @copyright 2022 Carl Schwan <carl@carlschwan.eu>
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





// eslint-disable-next-line n/no-missing-import, import/no-unresolved

vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.t = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate;
vue__WEBPACK_IMPORTED_MODULE_4__["default"].prototype.n = _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translatePlural;
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(v_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"]);

// Init Sharing tab component
const View = vue__WEBPACK_IMPORTED_MODULE_4__["default"].extend(_views_VersionTab_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
let TabInstance = null;
window.addEventListener('DOMContentLoaded', function () {
  var _OCA$Files;
  if (((_OCA$Files = OCA.Files) === null || _OCA$Files === void 0 ? void 0 : _OCA$Files.Sidebar) === undefined) {
    return;
  }
  OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({
    id: 'version_vue',
    name: (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_0__.translate)('files_versions', 'Versions'),
    iconSvg: _mdi_svg_svg_backup_restore_svg_raw__WEBPACK_IMPORTED_MODULE_3__,
    async mount(el, fileInfo, context) {
      if (TabInstance) {
        TabInstance.$destroy();
      }
      TabInstance = new View({
        // Better integration with vue parent component
        parent: context
      });
      // Only mount after we have all the info we need
      await TabInstance.update(fileInfo);
      TabInstance.$mount(el);
    },
    update(fileInfo) {
      TabInstance.update(fileInfo);
    },
    setIsActive(isActive) {
      TabInstance.setIsActive(isActive);
    },
    destroy() {
      TabInstance.$destroy();
      TabInstance = null;
    },
    enabled(fileInfo) {
      var _fileInfo$isDirectory;
      return !((_fileInfo$isDirectory = fileInfo === null || fileInfo === void 0 ? void 0 : fileInfo.isDirectory()) !== null && _fileInfo$isDirectory !== void 0 ? _fileInfo$isDirectory : true);
    }
  }));
});

/***/ }),

/***/ "./apps/files_versions/src/utils/davClient.js":
/*!****************************************************!*\
  !*** ./apps/files_versions/src/utils/davClient.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webdav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webdav */ "./node_modules/webdav/dist/web/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
var _getRequestToken;
/**
 * @copyright 2022 Louis Chemineau <mlouis@chmn.me>
 *
 * @author Louis Chemineau <mlouis@chmn.me>
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
 */




const rootPath = 'dav';

// init webdav client on default dav endpoint
const remote = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_1__.generateRemoteUrl)(rootPath);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,webdav__WEBPACK_IMPORTED_MODULE_0__.createClient)(remote, {
  headers: {
    // Add this so the server knows it is an request from the browser
    'X-Requested-With': 'XMLHttpRequest',
    // Inject user auth
    requesttoken: (_getRequestToken = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_2__.getRequestToken)()) !== null && _getRequestToken !== void 0 ? _getRequestToken : ''
  }
}));

/***/ }),

/***/ "./apps/files_versions/src/utils/davRequest.js":
/*!*****************************************************!*\
  !*** ./apps/files_versions/src/utils/davRequest.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @copyright Copyright (c) 2019 Louis Chmn <louis@chmn.me>
 *
 * @author Louis Chmn <louis@chmn.me>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\"?>\n<d:propfind xmlns:d=\"DAV:\"\n\txmlns:oc=\"http://owncloud.org/ns\"\n\txmlns:nc=\"http://nextcloud.org/ns\"\n\txmlns:ocs=\"http://open-collaboration-services.org/ns\">\n\t<d:prop>\n\t\t<d:getcontentlength />\n\t\t<d:getcontenttype />\n\t\t<d:getlastmodified />\n\t\t<nc:version-label />\n\t\t<nc:has-preview />\n\t</d:prop>\n</d:propfind>");

/***/ }),

/***/ "./apps/files_versions/src/utils/logger.js":
/*!*************************************************!*\
  !*** ./apps/files_versions/src/utils/logger.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/logger */ "./node_modules/@nextcloud/logger/dist/index.js");
/**
 * @copyright 2022 Louis Chemineau <mlouis@chmn.me>
 *
 * @author Louis Chemineau <mlouis@chmn.me>
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
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_nextcloud_logger__WEBPACK_IMPORTED_MODULE_0__.getLoggerBuilder)().setApp('files_version').detectUser().build());

/***/ }),

/***/ "./apps/files_versions/src/utils/versions.js":
/*!***************************************************!*\
  !*** ./apps/files_versions/src/utils/versions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteVersion: () => (/* binding */ deleteVersion),
/* harmony export */   fetchVersions: () => (/* binding */ fetchVersions),
/* harmony export */   restoreVersion: () => (/* binding */ restoreVersion),
/* harmony export */   setVersionLabel: () => (/* binding */ setVersionLabel)
/* harmony export */ });
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* harmony import */ var _utils_davClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/davClient.js */ "./apps/files_versions/src/utils/davClient.js");
/* harmony import */ var _utils_davRequest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/davRequest.js */ "./apps/files_versions/src/utils/davRequest.js");
/* harmony import */ var _utils_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/logger.js */ "./apps/files_versions/src/utils/logger.js");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_6__);
/**
 * @copyright 2022 Louis Chemineau <mlouis@chmn.me>
 *
 * @author Louis Chemineau <mlouis@chmn.me>
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
 */









/**
 * @typedef {object} Version
 * @property {string} fileId - The id of the file associated to the version.
 * @property {string} label - 'Current version' or ''
 * @property {string} fileName - File name relative to the version DAV endpoint
 * @property {string} mimeType - Empty for the current version, else the actual mime type of the version
 * @property {string} size - Human readable size
 * @property {string} type - 'file'
 * @property {number} mtime - Version creation date as a timestamp
 * @property {boolean} hasPreview - Whether the version has a preview
 * @property {string} preview - Preview URL of the version
 * @property {string} url - Download URL of the version
 * @property {string|null} fileVersion - The version id, null for the current version
 */

/**
 * @param fileInfo
 * @return {Promise<Version[]>}
 */
async function fetchVersions(fileInfo) {
  var _getCurrentUser;
  const path = "/versions/".concat((_getCurrentUser = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) === null || _getCurrentUser === void 0 ? void 0 : _getCurrentUser.uid, "/versions/").concat(fileInfo.id);
  try {
    /** @type {import('webdav').ResponseDataDetailed<import('webdav').FileStat[]>} */
    const response = await _utils_davClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDirectoryContents(path, {
      data: _utils_davRequest_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      details: true
    });
    return response.data
    // Filter out root
    .filter(_ref => {
      let {
        mime
      } = _ref;
      return mime !== '';
    }).map(version => formatVersion(version, fileInfo));
  } catch (exception) {
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('Could not fetch version', {
      exception
    });
    throw exception;
  }
}

/**
 * Restore the given version
 *
 * @param {Version} version
 */
async function restoreVersion(version) {
  try {
    var _getCurrentUser2, _getCurrentUser3;
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].debug('Restoring version', {
      url: version.url
    });
    await _utils_davClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].moveFile("/versions/".concat((_getCurrentUser2 = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) === null || _getCurrentUser2 === void 0 ? void 0 : _getCurrentUser2.uid, "/versions/").concat(version.fileId, "/").concat(version.fileVersion), "/versions/".concat((_getCurrentUser3 = (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_0__.getCurrentUser)()) === null || _getCurrentUser3 === void 0 ? void 0 : _getCurrentUser3.uid, "/restore/target"));
  } catch (exception) {
    _utils_logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].error('Could not restore version', {
      exception
    });
    throw exception;
  }
}

/**
 * Format version
 *
 * @param {object} version - raw version received from the versions DAV endpoint
 * @param {object} fileInfo - file properties received from the files DAV endpoint
 * @return {Version}
 */
function formatVersion(version, fileInfo) {
  return {
    fileId: fileInfo.id,
    label: version.props['version-label'],
    fileName: version.filename,
    mimeType: version.mime,
    size: version.size,
    type: version.type,
    mtime: _nextcloud_moment__WEBPACK_IMPORTED_MODULE_6___default()(version.lastmod).unix() * 1000,
    hasPreview: version.props['has-preview'] === 1,
    preview: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_5__.generateUrl)('/apps/files_versions/preview?file={file}&version={fileVersion}', {
      file: (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.joinPaths)(fileInfo.path, fileInfo.name),
      fileVersion: version.basename
    }),
    url: (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_4__.joinPaths)('/remote.php/dav', version.filename),
    fileVersion: version.basename
  };
}

/**
 * @param {Version} version
 * @param {string} newLabel
 */
async function setVersionLabel(version, newLabel) {
  return await _utils_davClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].customRequest(version.fileName, {
    method: 'PROPPATCH',
    data: "<?xml version=\"1.0\"?>\n\t\t\t\t\t<d:propertyupdate xmlns:d=\"DAV:\"\n\t\t\t\t\t\txmlns:oc=\"http://owncloud.org/ns\"\n\t\t\t\t\t\txmlns:nc=\"http://nextcloud.org/ns\"\n\t\t\t\t\t\txmlns:ocs=\"http://open-collaboration-services.org/ns\">\n\t\t\t\t\t<d:set>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<nc:version-label>".concat(newLabel, "</nc:version-label>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t</d:set>\n\t\t\t\t\t</d:propertyupdate>")
  });
}

/**
 * @param {Version} version
 */
async function deleteVersion(version) {
  await _utils_davClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteFile(version.fileName);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_material_design_icons_BackupRestore_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-material-design-icons/BackupRestore.vue */ "./node_modules/vue-material-design-icons/BackupRestore.vue");
/* harmony import */ var vue_material_design_icons_Download_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-material-design-icons/Download.vue */ "./node_modules/vue-material-design-icons/Download.vue");
/* harmony import */ var vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-material-design-icons/Pencil.vue */ "./node_modules/vue-material-design-icons/Pencil.vue");
/* harmony import */ var vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Check.vue */ "./node_modules/vue-material-design-icons/Check.vue");
/* harmony import */ var vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Delete.vue */ "./node_modules/vue-material-design-icons/Delete.vue");
/* harmony import */ var vue_material_design_icons_ImageOffOutline_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/ImageOffOutline.vue */ "./node_modules/vue-material-design-icons/ImageOffOutline.vue");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionLink_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcActionLink.js */ "./node_modules/@nextcloud/vue/dist/Components/NcActionLink.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcActionLink_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcActionLink_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcListItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcListItem.js */ "./node_modules/@nextcloud/vue/dist/Components/NcListItem.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcListItem_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcListItem_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcModal.js */ "./node_modules/@nextcloud/vue/dist/Components/NcModal.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcButton.js */ "./node_modules/@nextcloud/vue/dist/Components/NcButton.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcTextField.js */ "./node_modules/@nextcloud/vue/dist/Components/NcTextField.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextcloud/vue/dist/Directives/Tooltip.js */ "./node_modules/@nextcloud/vue/dist/Directives/Tooltip.js");
/* harmony import */ var _nextcloud_vue_dist_Directives_Tooltip_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Directives_Tooltip_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextcloud/moment */ "./node_modules/@nextcloud/moment/dist/index.js");
/* harmony import */ var _nextcloud_moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _nextcloud_l10n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nextcloud/l10n */ "./node_modules/@nextcloud/l10n/dist/index.mjs");
/* harmony import */ var _nextcloud_paths__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nextcloud/paths */ "./node_modules/@nextcloud/paths/dist/index.js");
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");


















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Version',
  components: {
    NcActionLink: (_nextcloud_vue_dist_Components_NcActionLink_js__WEBPACK_IMPORTED_MODULE_7___default()),
    NcActionButton: (_nextcloud_vue_dist_Components_NcActionButton_js__WEBPACK_IMPORTED_MODULE_6___default()),
    NcListItem: (_nextcloud_vue_dist_Components_NcListItem_js__WEBPACK_IMPORTED_MODULE_8___default()),
    NcModal: (_nextcloud_vue_dist_Components_NcModal_js__WEBPACK_IMPORTED_MODULE_9___default()),
    NcButton: (_nextcloud_vue_dist_Components_NcButton_js__WEBPACK_IMPORTED_MODULE_10___default()),
    NcTextField: (_nextcloud_vue_dist_Components_NcTextField_js__WEBPACK_IMPORTED_MODULE_11___default()),
    BackupRestore: vue_material_design_icons_BackupRestore_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Download: vue_material_design_icons_Download_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Pencil: vue_material_design_icons_Pencil_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Check: vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Delete: vue_material_design_icons_Delete_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ImageOffOutline: vue_material_design_icons_ImageOffOutline_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  directives: {
    tooltip: (_nextcloud_vue_dist_Directives_Tooltip_js__WEBPACK_IMPORTED_MODULE_12___default())
  },
  filters: {
    /**
     * @param {number} bytes
     * @return {string}
     */
    humanReadableSize(bytes) {
      return OC.Util.humanFileSize(bytes);
    },
    /**
     * @param {number} timestamp
     * @return {string}
     */
    humanDateFromNow(timestamp) {
      return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_13___default()(timestamp).fromNow();
    }
  },
  props: {
    /** @type {Vue.PropOptions<import('../utils/versions.js').Version>} */
    version: {
      type: Object,
      required: true
    },
    fileInfo: {
      type: Object,
      required: true
    },
    isCurrent: {
      type: Boolean,
      default: false
    },
    isFirstVersion: {
      type: Boolean,
      default: false
    },
    loadPreview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      previewLoaded: false,
      showVersionLabelForm: false,
      formVersionLabelValue: this.version.label,
      capabilities: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_17__.loadState)('core', 'capabilities', {
        files: {
          version_labeling: false,
          version_deletion: false
        }
      })
    };
  },
  computed: {
    /**
     * @return {string}
     */
    versionLabel() {
      var _this$version$label;
      const label = (_this$version$label = this.version.label) !== null && _this$version$label !== void 0 ? _this$version$label : '';
      if (this.isCurrent) {
        if (label === '') {
          return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_14__.translate)('files_versions', 'Current version');
        } else {
          return "".concat(label, " (").concat((0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_14__.translate)('files_versions', 'Current version'), ")");
        }
      }
      if (this.isFirstVersion && label === '') {
        return (0,_nextcloud_l10n__WEBPACK_IMPORTED_MODULE_14__.translate)('files_versions', 'Initial version');
      }
      return label;
    },
    /**
     * @return {string}
     */
    downloadURL() {
      if (this.isCurrent) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_16__.getRootUrl)() + (0,_nextcloud_paths__WEBPACK_IMPORTED_MODULE_15__.joinPaths)('/remote.php/webdav', this.fileInfo.path, this.fileInfo.name);
      } else {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_16__.getRootUrl)() + this.version.url;
      }
    },
    /**
     * @return {string}
     */
    previewURL() {
      if (this.isCurrent) {
        return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_16__.generateUrl)('/core/preview?fileId={fileId}&c={fileEtag}&x=250&y=250&forceIcon=0&a=0', {
          fileId: this.fileInfo.id,
          fileEtag: this.fileInfo.etag
        });
      } else {
        return this.version.preview;
      }
    },
    /** @return {string} */
    formattedDate() {
      return _nextcloud_moment__WEBPACK_IMPORTED_MODULE_13___default()(this.version.mtime).format('LLL');
    },
    /** @return {boolean} */
    enableLabeling() {
      return this.capabilities.files.version_labeling === true && this.fileInfo.mountType !== 'group';
    },
    /** @return {boolean} */
    enableDeletion() {
      return this.capabilities.files.version_deletion === true && this.fileInfo.mountType !== 'group';
    }
  },
  methods: {
    openVersionLabelModal() {
      this.showVersionLabelForm = true;
      this.$nextTick(() => {
        this.$refs.labelInput.$el.getElementsByTagName('input')[0].focus();
      });
    },
    restoreVersion() {
      this.$emit('restore', this.version);
    },
    setVersionLabel(label) {
      this.formVersionLabelValue = label;
      this.showVersionLabelForm = false;
      this.$emit('label-update', this.version, label);
    },
    deleteVersion() {
      this.$emit('delete', this.version);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _utils_versions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/versions.js */ "./apps/files_versions/src/utils/versions.js");
/* harmony import */ var _components_Version_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Version.vue */ "./apps/files_versions/src/components/Version.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VersionTab',
  components: {
    Version: _components_Version_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data() {
    return {
      fileInfo: null,
      isActive: false,
      /** @type {import('../utils/versions.js').Version[]} */
      versions: [],
      loading: false
    };
  },
  computed: {
    /**
     * Order versions by mtime.
     * Put the current version at the top.
     *
     * @return {import('../utils/versions.js').Version[]}
     */
    orderedVersions() {
      return [...this.versions].sort((a, b) => {
        if (a.mtime === this.fileInfo.mtime) {
          return -1;
        } else if (b.mtime === this.fileInfo.mtime) {
          return 1;
        } else {
          return b.mtime - a.mtime;
        }
      });
    },
    /**
     * Return the mtime of the first version to display "Initial version" label
     *
     * @return {number}
     */
    initialVersionMtime() {
      return this.versions.map(version => version.mtime).reduce((a, b) => Math.min(a, b));
    }
  },
  methods: {
    /**
     * Update current fileInfo and fetch new data
     *
     * @param {object} fileInfo the current file FileInfo
     */
    async update(fileInfo) {
      this.fileInfo = fileInfo;
      this.resetState();
      this.fetchVersions();
    },
    /**
     * @param {boolean} isActive whether the tab is active
     */
    async setIsActive(isActive) {
      this.isActive = isActive;
    },
    /**
     * Get the existing versions infos
     */
    async fetchVersions() {
      try {
        this.loading = true;
        this.versions = await (0,_utils_versions_js__WEBPACK_IMPORTED_MODULE_1__.fetchVersions)(this.fileInfo);
      } finally {
        this.loading = false;
      }
    },
    /**
     * Handle restored event from Version.vue
     *
     * @param {import('../utils/versions.js').Version} version
     */
    async handleRestore(version) {
      // Update local copy of fileInfo as rendering depends on it.
      const oldFileInfo = this.fileInfo;
      this.fileInfo = {
        ...this.fileInfo,
        size: version.size,
        mtime: version.mtime
      };
      try {
        await (0,_utils_versions_js__WEBPACK_IMPORTED_MODULE_1__.restoreVersion)(version);
        if (version.label !== '') {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(t('files_versions', "".concat(version.label, " restored")));
        } else if (version.mtime === this.initialVersionMtime) {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(t('files_versions', 'Initial version restored'));
        } else {
          (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showSuccess)(t('files_versions', 'Version restored'));
        }
        await this.fetchVersions();
      } catch (exception) {
        this.fileInfo = oldFileInfo;
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(t('files_versions', 'Could not restore version'));
      }
    },
    /**
     * Handle label-updated event from Version.vue
     *
     * @param {import('../utils/versions.js').Version} version
     * @param {string} newName
     */
    async handleLabelUpdate(version, newName) {
      const oldLabel = version.label;
      version.label = newName;
      try {
        await (0,_utils_versions_js__WEBPACK_IMPORTED_MODULE_1__.setVersionLabel)(version, newName);
      } catch (exception) {
        version.label = oldLabel;
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(t('files_versions', 'Could not set version name'));
      }
    },
    /**
     * Handle deleted event from Version.vue
     *
     * @param {import('../utils/versions.js').Version} version
     * @param {string} newName
     */
    async handleDelete(version) {
      const index = this.versions.indexOf(version);
      this.versions.splice(index, 1);
      try {
        await (0,_utils_versions_js__WEBPACK_IMPORTED_MODULE_1__.deleteVersion)(version);
      } catch (exception) {
        this.versions.push(version);
        (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_0__.showError)(t('files_versions', 'Could not delete version'));
      }
    },
    /**
     * Reset the current view to its default state
     */
    resetState() {
      this.$set(this, 'versions', []);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("NcListItem", {
    staticClass: "version",
    attrs: {
      name: _vm.versionLabel,
      href: _vm.downloadURL,
      "force-display-actions": true,
      "data-files-versions-version": ""
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [!(_vm.loadPreview || _vm.previewLoaded) ? _c("div", {
          staticClass: "version__image"
        }) : _vm.isCurrent || _vm.version.hasPreview ? _c("img", {
          staticClass: "version__image",
          attrs: {
            src: _vm.previewURL,
            alt: "",
            decoding: "async",
            fetchpriority: "low",
            loading: "lazy"
          },
          on: {
            load: function ($event) {
              _vm.previewLoaded = true;
            }
          }
        }) : _c("div", {
          staticClass: "version__image"
        }, [_c("ImageOffOutline", {
          attrs: {
            size: 20
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "subname",
      fn: function () {
        return [_c("div", {
          staticClass: "version__info"
        }, [_c("span", {
          attrs: {
            title: _vm.formattedDate
          }
        }, [_vm._v(_vm._s(_vm._f("humanDateFromNow")(_vm.version.mtime)))]), _vm._v(" "), _c("span", {
          staticClass: "version__info__size"
        }, [_vm._v("•")]), _vm._v(" "), _c("span", {
          staticClass: "version__info__size"
        }, [_vm._v(_vm._s(_vm._f("humanReadableSize")(_vm.version.size)))])])];
      },
      proxy: true
    }, {
      key: "actions",
      fn: function () {
        return [_vm.enableLabeling ? _c("NcActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: _vm.openVersionLabelModal
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Pencil", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }], null, false, 3072546167)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.version.label === "" ? _vm.t("files_versions", "Name this version") : _vm.t("files_versions", "Edit version name")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.isCurrent ? _c("NcActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: _vm.restoreVersion
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("BackupRestore", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }], null, false, 2239038444)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files_versions", "Restore version")) + "\n\t\t\t")]) : _vm._e(), _vm._v(" "), _c("NcActionLink", {
          attrs: {
            href: _vm.downloadURL,
            "close-after-click": true,
            download: _vm.downloadURL
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Download", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }])
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files_versions", "Download version")) + "\n\t\t\t")]), _vm._v(" "), !_vm.isCurrent && _vm.enableDeletion ? _c("NcActionButton", {
          attrs: {
            "close-after-click": true
          },
          on: {
            click: _vm.deleteVersion
          },
          scopedSlots: _vm._u([{
            key: "icon",
            fn: function () {
              return [_c("Delete", {
                attrs: {
                  size: 22
                }
              })];
            },
            proxy: true
          }], null, false, 2429175571)
        }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("files_versions", "Delete version")) + "\n\t\t\t")]) : _vm._e()];
      },
      proxy: true
    }])
  }), _vm._v(" "), _vm.showVersionLabelForm ? _c("NcModal", {
    attrs: {
      title: _vm.t("files_versions", "Name this version")
    },
    on: {
      close: function ($event) {
        _vm.showVersionLabelForm = false;
      }
    }
  }, [_c("form", {
    staticClass: "version-label-modal",
    on: {
      submit: function ($event) {
        $event.preventDefault();
        return _vm.setVersionLabel(_vm.formVersionLabelValue);
      }
    }
  }, [_c("label", [_c("div", {
    staticClass: "version-label-modal__title"
  }, [_vm._v(_vm._s(_vm.t("photos", "Version name")))]), _vm._v(" "), _c("NcTextField", {
    ref: "labelInput",
    attrs: {
      value: _vm.formVersionLabelValue,
      placeholder: _vm.t("photos", "Version name"),
      "label-outside": true
    },
    on: {
      "update:value": function ($event) {
        _vm.formVersionLabelValue = $event;
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "version-label-modal__info"
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.t("photos", "Named versions are persisted, and excluded from automatic cleanups when your storage quota is full.")) + "\n\t\t\t")]), _vm._v(" "), _c("div", {
    staticClass: "version-label-modal__actions"
  }, [_c("NcButton", {
    attrs: {
      disabled: _vm.formVersionLabelValue.trim().length === 0
    },
    on: {
      click: function ($event) {
        return _vm.setVersionLabel("");
      }
    }
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("files_versions", "Remove version name")) + "\n\t\t\t\t")]), _vm._v(" "), _c("NcButton", {
    attrs: {
      type: "primary",
      "native-type": "submit"
    },
    scopedSlots: _vm._u([{
      key: "icon",
      fn: function () {
        return [_c("Check")];
      },
      proxy: true
    }], null, false, 2308323205)
  }, [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.t("files_versions", "Save version name")) + "\n\t\t\t\t")])], 1)])]) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666& ***!
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
  return _c("ul", {
    attrs: {
      "data-files-versions-versions-list": ""
    }
  }, _vm._l(_vm.orderedVersions, function (version) {
    return _c("Version", {
      key: version.mtime,
      attrs: {
        "load-preview": _vm.isActive,
        version: version,
        "file-info": _vm.fileInfo,
        "is-current": version.mtime === _vm.fileInfo.mtime,
        "is-first-version": version.mtime === _vm.initialVersionMtime
      },
      on: {
        restore: _vm.handleRestore,
        "label-update": _vm.handleLabelUpdate,
        delete: _vm.handleDelete
      }
    });
  }), 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.version[data-v-52902ab2] {
  display: flex;
  flex-direction: row;
}
.version__info[data-v-52902ab2] {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
.version__info__size[data-v-52902ab2] {
  color: var(--color-text-lighter);
}
.version__image[data-v-52902ab2] {
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-large);
  display: flex;
  justify-content: center;
  color: var(--color-text-light);
}
.version-label-modal[data-v-52902ab2] {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 250px;
  padding: 16px;
}
.version-label-modal__title[data-v-52902ab2] {
  margin-bottom: 12px;
  font-weight: 600;
}
.version-label-modal__info[data-v-52902ab2] {
  margin-top: 12px;
  color: var(--color-text-maxcontrast);
}
.version-label-modal__actions[data-v-52902ab2] {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/files_versions/src/components/Version.vue":
/*!********************************************************!*\
  !*** ./apps/files_versions/src/components/Version.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Version.vue?vue&type=template&id=52902ab2&scoped=true& */ "./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true&");
/* harmony import */ var _Version_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Version.vue?vue&type=script&lang=js& */ "./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js&");
/* harmony import */ var _Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& */ "./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Version_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "52902ab2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_versions/src/components/Version.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/files_versions/src/views/VersionTab.vue":
/*!******************************************************!*\
  !*** ./apps/files_versions/src/views/VersionTab.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VersionTab.vue?vue&type=template&id=48ce6666& */ "./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666&");
/* harmony import */ var _VersionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionTab.vue?vue&type=script&lang=js& */ "./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VersionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__.render,
  _VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/files_versions/src/views/VersionTab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-material-design-icons/BackupRestore.vue":
/*!******************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/BackupRestore.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackupRestore_vue_vue_type_template_id_37a4e5f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackupRestore.vue?vue&type=template&id=37a4e5f0& */ "./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=template&id=37a4e5f0&");
/* harmony import */ var _BackupRestore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackupRestore.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BackupRestore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackupRestore_vue_vue_type_template_id_37a4e5f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _BackupRestore_vue_vue_type_template_id_37a4e5f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/BackupRestore.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BackupRestoreIcon",
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

/***/ "./node_modules/vue-material-design-icons/Download.vue":
/*!*************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Download.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Download_vue_vue_type_template_id_4c92e0b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Download.vue?vue&type=template&id=4c92e0b4& */ "./node_modules/vue-material-design-icons/Download.vue?vue&type=template&id=4c92e0b4&");
/* harmony import */ var _Download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Download.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/Download.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Download_vue_vue_type_template_id_4c92e0b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Download_vue_vue_type_template_id_4c92e0b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/Download.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Download.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Download.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DownloadIcon",
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

/***/ "./node_modules/vue-material-design-icons/ImageOffOutline.vue":
/*!********************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ImageOffOutline.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageOffOutline_vue_vue_type_template_id_3976bb12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageOffOutline.vue?vue&type=template&id=3976bb12& */ "./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=template&id=3976bb12&");
/* harmony import */ var _ImageOffOutline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageOffOutline.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageOffOutline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageOffOutline_vue_vue_type_template_id_3976bb12___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImageOffOutline_vue_vue_type_template_id_3976bb12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/ImageOffOutline.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ImageOffOutlineIcon",
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

/***/ "./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Version.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VersionTab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_template_id_52902ab2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Version.vue?vue&type=template&id=52902ab2&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=template&id=52902ab2&scoped=true&");


/***/ }),

/***/ "./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666&":
/*!*************************************************************************************!*\
  !*** ./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VersionTab_vue_vue_type_template_id_48ce6666___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VersionTab.vue?vue&type=template&id=48ce6666& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/views/VersionTab.vue?vue&type=template&id=48ce6666&");


/***/ }),

/***/ "./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Version_vue_vue_type_style_index_0_id_52902ab2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/files_versions/src/components/Version.vue?vue&type=style&index=0&id=52902ab2&scoped=true&lang=scss&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_BackupRestore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./BackupRestore.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_BackupRestore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/Download.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Download.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_Download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./Download.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Download.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_Download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_ImageOffOutline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./ImageOffOutline.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_ImageOffOutline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=template&id=37a4e5f0&":
/*!*************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=template&id=37a4e5f0& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_BackupRestore_vue_vue_type_template_id_37a4e5f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_BackupRestore_vue_vue_type_template_id_37a4e5f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_BackupRestore_vue_vue_type_template_id_37a4e5f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./BackupRestore.vue?vue&type=template&id=37a4e5f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=template&id=37a4e5f0&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/Download.vue?vue&type=template&id=4c92e0b4&":
/*!********************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/Download.vue?vue&type=template&id=4c92e0b4& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Download_vue_vue_type_template_id_4c92e0b4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Download_vue_vue_type_template_id_4c92e0b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_Download_vue_vue_type_template_id_4c92e0b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./Download.vue?vue&type=template&id=4c92e0b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Download.vue?vue&type=template&id=4c92e0b4&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=template&id=3976bb12&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=template&id=3976bb12& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ImageOffOutline_vue_vue_type_template_id_3976bb12___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ImageOffOutline_vue_vue_type_template_id_3976bb12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ImageOffOutline_vue_vue_type_template_id_3976bb12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./ImageOffOutline.vue?vue&type=template&id=3976bb12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=template&id=3976bb12&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=template&id=37a4e5f0&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/BackupRestore.vue?vue&type=template&id=37a4e5f0& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        staticClass: "material-design-icon backup-restore-icon",
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
                d: "M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Download.vue?vue&type=template&id=4c92e0b4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/Download.vue?vue&type=template&id=4c92e0b4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        staticClass: "material-design-icon download-icon",
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
            { attrs: { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" } },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=template&id=3976bb12&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageOffOutline.vue?vue&type=template&id=3976bb12& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        staticClass: "material-design-icon image-off-outline-icon",
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
                d: "M22 20.7L3.3 2L2 3.3L3 4.3V19C3 20.1 3.9 21 5 21H19.7L20.7 22L22 20.7M5 19V6.3L12.6 13.9L11.1 15.8L9 13.1L6 17H15.7L17.7 19H5M8.8 5L6.8 3H19C20.1 3 21 3.9 21 5V17.2L19 15.2V5H8.8",
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

/***/ "./node_modules/@mdi/svg/svg/backup-restore.svg?raw":
/*!**********************************************************!*\
  !*** ./node_modules/@mdi/svg/svg/backup-restore.svg?raw ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"mdi-backup-restore\" viewBox=\"0 0 24 24\"><path d=\"M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z\" /></svg>";

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
/******/ 			"files_versions-files_versions": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/files_versions/src/files_versions_tab.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=files_versions-files_versions.js.map?v=b308c47c4e8230a9e279