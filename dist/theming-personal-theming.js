/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nextcloud/vue/dist/Components/NcColorPicker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/NcColorPicker.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");
/*! For license information please see NcColorPicker.js.LICENSE.txt */
!function(e,a){ true?module.exports=a():0}(self,(()=>(()=>{var e={3089:(e,a,t)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a,t){return(a=function(e){var a=function(e,a){if("object"!==o(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,a||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"===o(a)?a:String(a)}(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,{default:()=>N});const r={name:"NcButton",props:{alignment:{type:String,default:"center",validator:function(e){return["start","start-reverse","center","center-reverse","end","end-reverse"].includes(e)}},disabled:{type:Boolean,default:!1},type:{type:String,validator:function(e){return-1!==["primary","secondary","tertiary","tertiary-no-background","tertiary-on-primary","error","warning","success"].indexOf(e)},default:"secondary"},nativeType:{type:String,validator:function(e){return-1!==["submit","reset","button"].indexOf(e)},default:"button"},wide:{type:Boolean,default:!1},ariaLabel:{type:String,default:null},href:{type:String,default:null},download:{type:String,default:null},to:{type:[String,Object],default:null},exact:{type:Boolean,default:!1},ariaHidden:{type:Boolean,default:null},pressed:{type:Boolean,default:null}},emits:["update:pressed","click"],computed:{realType:function(){return this.pressed?"primary":!1===this.pressed&&"primary"===this.type?"secondary":this.type},flexAlignment:function(){return this.alignment.split("-")[0]},isReverseAligned:function(){return this.alignment.includes("-")}},render:function(e){var a,t,o,i=this,r=null===(a=this.$slots.default)||void 0===a||null===(a=a[0])||void 0===a||null===(a=a.text)||void 0===a||null===(t=a.trim)||void 0===t?void 0:t.call(a),l=!!r,c=null===(o=this.$slots)||void 0===o?void 0:o.icon;r||this.ariaLabel||console.warn("You need to fill either the text or the ariaLabel props in the button component.",{text:r,ariaLabel:this.ariaLabel},this);var m=function(){var a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.navigate,m=t.isActive,d=t.isExactActive;return e(i.to||!i.href?"button":"a",{class:["button-vue",(a={"button-vue--icon-only":c&&!l,"button-vue--text-only":l&&!c,"button-vue--icon-and-text":c&&l},s(a,"button-vue--vue-".concat(i.realType),i.realType),s(a,"button-vue--wide",i.wide),s(a,"button-vue--".concat(i.flexAlignment),"center"!==i.flexAlignment),s(a,"button-vue--reverse",i.isReverseAligned),s(a,"active",m),s(a,"router-link-exact-active",d),a)],attrs:n({"aria-label":i.ariaLabel,"aria-pressed":i.pressed,disabled:i.disabled,type:i.href?null:i.nativeType,role:i.href?"button":null,href:!i.to&&i.href?i.href:null,target:!i.to&&i.href?"_self":null,rel:!i.to&&i.href?"nofollow noreferrer noopener":null,download:!i.to&&i.href&&i.download?i.download:null},i.$attrs),on:n(n({},i.$listeners),{},{click:function(e){"boolean"==typeof i.pressed&&i.$emit("update:pressed",!i.pressed),i.$emit("click",e),null==o||o(e)}})},[e("span",{class:"button-vue__wrapper"},[c?e("span",{class:"button-vue__icon",attrs:{"aria-hidden":i.ariaHidden}},[i.$slots.icon]):null,l?e("span",{class:"button-vue__text"},[r]):null])])};return this.to?e("router-link",{props:{custom:!0,to:this.to,exact:this.exact},scopedSlots:{default:m}}):m()}};var l=t(3379),c=t.n(l),m=t(7795),d=t.n(m),u=t(569),p=t.n(u),h=t(3565),g=t.n(h),v=t(9216),k=t.n(v),y=t(4589),A=t.n(y),f=t(7294),C={};C.styleTagTransform=A(),C.setAttributes=g(),C.insert=p().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=k();c()(f.Z,C);f.Z&&f.Z.locals&&f.Z.locals;var P=t(1900),S=t(2102),w=t.n(S),b=(0,P.Z)(r,undefined,undefined,!1,null,"7aad13a0",null);"function"==typeof w()&&w()(b);const N=b.exports},2297:(e,a,t)=>{"use strict";t.d(a,{default:()=>E});var o=t(9454),i=t(4505),n=t(1206);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function r(){r=function(){return e};var e={},a=Object.prototype,t=a.hasOwnProperty,o=Object.defineProperty||function(e,a,t){e[a]=t.value},i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function m(e,a,t){return Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[a]}try{m({},"")}catch(e){m=function(e,a,t){return e[a]=t}}function d(e,a,t,i){var n=a&&a.prototype instanceof h?a:h,s=Object.create(n.prototype),r=new j(i||[]);return o(s,"_invoke",{value:S(e,t,r)}),s}function u(e,a,t){try{return{type:"normal",arg:e.call(a,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var p={};function h(){}function g(){}function v(){}var k={};m(k,n,(function(){return this}));var y=Object.getPrototypeOf,A=y&&y(y(O([])));A&&A!==a&&t.call(A,n)&&(k=A);var f=v.prototype=h.prototype=Object.create(k);function C(e){["next","throw","return"].forEach((function(a){m(e,a,(function(e){return this._invoke(a,e)}))}))}function P(e,a){function i(o,n,r,l){var c=u(e[o],e,n);if("throw"!==c.type){var m=c.arg,d=m.value;return d&&"object"==s(d)&&t.call(d,"__await")?a.resolve(d.__await).then((function(e){i("next",e,r,l)}),(function(e){i("throw",e,r,l)})):a.resolve(d).then((function(e){m.value=e,r(m)}),(function(e){return i("throw",e,r,l)}))}l(c.arg)}var n;o(this,"_invoke",{value:function(e,t){function o(){return new a((function(a,o){i(e,t,a,o)}))}return n=n?n.then(o,o):o()}})}function S(e,a,t){var o="suspendedStart";return function(i,n){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw n;return E()}for(t.method=i,t.arg=n;;){var s=t.delegate;if(s){var r=w(s,t);if(r){if(r===p)continue;return r}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===o)throw o="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);o="executing";var l=u(e,a,t);if("normal"===l.type){if(o=t.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:t.done}}"throw"===l.type&&(o="completed",t.method="throw",t.arg=l.arg)}}}function w(e,a){var t=a.method,o=e.iterator[t];if(void 0===o)return a.delegate=null,"throw"===t&&e.iterator.return&&(a.method="return",a.arg=void 0,w(e,a),"throw"===a.method)||"return"!==t&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+t+"' method")),p;var i=u(o,e.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,p;var n=i.arg;return n?n.done?(a[e.resultName]=n.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,p):n:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,p)}function b(e){var a={tryLoc:e[0]};1 in e&&(a.catchLoc=e[1]),2 in e&&(a.finallyLoc=e[2],a.afterLoc=e[3]),this.tryEntries.push(a)}function N(e){var a=e.completion||{};a.type="normal",delete a.arg,e.completion=a}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var a=e[n];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function a(){for(;++o<e.length;)if(t.call(e,o))return a.value=e[o],a.done=!1,a;return a.value=void 0,a.done=!0,a};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return g.prototype=v,o(f,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:g,configurable:!0}),g.displayName=m(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var a="function"==typeof e&&e.constructor;return!!a&&(a===g||"GeneratorFunction"===(a.displayName||a.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,m(e,c,"GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},C(P.prototype),m(P.prototype,l,(function(){return this})),e.AsyncIterator=P,e.async=function(a,t,o,i,n){void 0===n&&(n=Promise);var s=new P(d(a,t,o,i),n);return e.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},C(f),m(f,c,"Generator"),m(f,n,(function(){return this})),m(f,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var a=Object(e),t=[];for(var o in a)t.push(o);return t.reverse(),function e(){for(;t.length;){var o=t.pop();if(o in a)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var a in this)"t"===a.charAt(0)&&t.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function o(t,o){return s.type="throw",s.arg=e,a.next=t,o&&(a.method="next",a.arg=void 0),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],s=n.completion;if("root"===n.tryLoc)return o("end");if(n.tryLoc<=this.prev){var r=t.call(n,"catchLoc"),l=t.call(n,"finallyLoc");if(r&&l){if(this.prev<n.catchLoc)return o(n.catchLoc,!0);if(this.prev<n.finallyLoc)return o(n.finallyLoc)}else if(r){if(this.prev<n.catchLoc)return o(n.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return o(n.finallyLoc)}}}},abrupt:function(e,a){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&t.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=a&&a<=n.finallyLoc&&(n=null);var s=n?n.completion:{};return s.type=e,s.arg=a,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(s)},complete:function(e,a){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&a&&(this.next=a),p},finish:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),N(t),p}},catch:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc===e){var o=t.completion;if("throw"===o.type){var i=o.arg;N(t)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,t){return this.delegate={iterator:O(e),resultName:a,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},e}function l(e,a,t,o,i,n,s){try{var r=e[n](s),l=r.value}catch(e){return void t(e)}r.done?a(l):Promise.resolve(l).then(o,i)}const c={name:"NcPopover",components:{Dropdown:o.Dropdown},inheritAttrs:!1,props:{popoverBaseClass:{type:String,default:""},focusTrap:{type:Boolean,default:!0},setReturnFocus:{default:void 0,type:[HTMLElement,SVGElement,String,Boolean]}},emits:["after-show","after-hide"],beforeDestroy:function(){this.clearFocusTrap()},methods:{useFocusTrap:function(){var e,a=this;return(e=r().mark((function e(){var t,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$nextTick();case 2:if(a.focusTrap){e.next=4;break}return e.abrupt("return");case 4:if(o=null===(t=a.$refs.popover)||void 0===t||null===(t=t.$refs.popperContent)||void 0===t?void 0:t.$el){e.next=7;break}return e.abrupt("return");case 7:a.$focusTrap=(0,i.createFocusTrap)(o,{escapeDeactivates:!1,allowOutsideClick:!0,setReturnFocus:a.setReturnFocus,trapStack:(0,n.L)()}),a.$focusTrap.activate();case 9:case"end":return e.stop()}}),e)})),function(){var a=this,t=arguments;return new Promise((function(o,i){var n=e.apply(a,t);function s(e){l(n,o,i,s,r,"next",e)}function r(e){l(n,o,i,s,r,"throw",e)}s(void 0)}))})()},clearFocusTrap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var a;null===(a=this.$focusTrap)||void 0===a||a.deactivate(e),this.$focusTrap=null}catch(e){console.warn(e)}},afterShow:function(){var e=this;this.$nextTick((function(){e.$emit("after-show"),e.useFocusTrap()}))},afterHide:function(){this.$emit("after-hide"),this.clearFocusTrap()}}},m=c;var d=t(3379),u=t.n(d),p=t(7795),h=t.n(p),g=t(569),v=t.n(g),k=t(3565),y=t.n(k),A=t(9216),f=t.n(A),C=t(4589),P=t.n(C),S=t(1625),w={};w.styleTagTransform=P(),w.setAttributes=y(),w.insert=v().bind(null,"head"),w.domAPI=h(),w.insertStyleElement=f();u()(S.Z,w);S.Z&&S.Z.locals&&S.Z.locals;var b=t(1900),N=t(2405),j=t.n(N),O=(0,b.Z)(m,(function(){var e=this;return(0,e._self._c)("Dropdown",e._g(e._b({ref:"popover",attrs:{distance:10,"arrow-padding":10,"no-auto-focus":!0,"popper-class":e.popoverBaseClass},on:{"apply-show":e.afterShow,"apply-hide":e.afterHide},scopedSlots:e._u([{key:"popper",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},"Dropdown",e.$attrs,!1),e.$listeners),[e._t("trigger")],2)}),[],!1,null,null,null);"function"==typeof j()&&j()(O);const E=O.exports},1206:(e,a,t)=>{"use strict";t.d(a,{L:()=>o});var o=function(){return Object.assign(window,{_nc_focus_trap:window._nc_focus_trap||[]}),window._nc_focus_trap}},7294:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});var o=t(7537),i=t.n(o),n=t(3645),s=t.n(n)()(i());s.push([e.id,".material-design-icon[data-v-7aad13a0]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.button-vue[data-v-7aad13a0]{position:relative;width:fit-content;overflow:hidden;border:0;padding:0;font-size:var(--default-font-size);font-weight:bold;min-height:44px;min-width:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:22px;transition-property:color,border-color,background-color;transition-duration:.1s;transition-timing-function:linear;color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue *[data-v-7aad13a0],.button-vue span[data-v-7aad13a0]{cursor:pointer}.button-vue[data-v-7aad13a0]:focus{outline:none}.button-vue[data-v-7aad13a0]:disabled{cursor:default;opacity:.5;filter:saturate(0.7)}.button-vue:disabled *[data-v-7aad13a0]{cursor:default}.button-vue[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-primary-element-light-hover)}.button-vue[data-v-7aad13a0]:active{background-color:var(--color-primary-element-light)}.button-vue__wrapper[data-v-7aad13a0]{display:inline-flex;align-items:center;justify-content:center;width:100%}.button-vue--end .button-vue__wrapper[data-v-7aad13a0]{justify-content:end}.button-vue--start .button-vue__wrapper[data-v-7aad13a0]{justify-content:start}.button-vue--reverse .button-vue__wrapper[data-v-7aad13a0]{flex-direction:row-reverse}.button-vue--reverse.button-vue--icon-and-text[data-v-7aad13a0]{padding-inline:calc(var(--default-grid-baseline)*4) var(--default-grid-baseline)}.button-vue__icon[data-v-7aad13a0]{height:44px;width:44px;min-height:44px;min-width:44px;display:flex;justify-content:center;align-items:center}.button-vue__text[data-v-7aad13a0]{font-weight:bold;margin-bottom:1px;padding:2px 0;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.button-vue--icon-only[data-v-7aad13a0]{width:44px !important}.button-vue--text-only[data-v-7aad13a0]{padding:0 12px}.button-vue--text-only .button-vue__text[data-v-7aad13a0]{margin-left:4px;margin-right:4px}.button-vue--icon-and-text[data-v-7aad13a0]{padding-block:0;padding-inline:var(--default-grid-baseline) calc(var(--default-grid-baseline)*4)}.button-vue--wide[data-v-7aad13a0]{width:100%}.button-vue[data-v-7aad13a0]:focus-visible{outline:2px solid var(--color-main-text) !important;box-shadow:0 0 0 4px var(--color-main-background) !important}.button-vue:focus-visible.button-vue--vue-tertiary-on-primary[data-v-7aad13a0]{outline:2px solid var(--color-primary-element-text);border-radius:var(--border-radius);background-color:rgba(0,0,0,0)}.button-vue--vue-primary[data-v-7aad13a0]{background-color:var(--color-primary-element);color:var(--color-primary-element-text)}.button-vue--vue-primary[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-primary-element-hover)}.button-vue--vue-primary[data-v-7aad13a0]:active{background-color:var(--color-primary-element)}.button-vue--vue-secondary[data-v-7aad13a0]{color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light)}.button-vue--vue-secondary[data-v-7aad13a0]:hover:not(:disabled){color:var(--color-primary-element-light-text);background-color:var(--color-primary-element-light-hover)}.button-vue--vue-tertiary[data-v-7aad13a0]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-background-hover)}.button-vue--vue-tertiary-no-background[data-v-7aad13a0]{color:var(--color-main-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-no-background[data-v-7aad13a0]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-7aad13a0]{color:var(--color-primary-element-text);background-color:rgba(0,0,0,0)}.button-vue--vue-tertiary-on-primary[data-v-7aad13a0]:hover:not(:disabled){background-color:rgba(0,0,0,0)}.button-vue--vue-success[data-v-7aad13a0]{background-color:var(--color-success);color:#fff}.button-vue--vue-success[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-success-hover)}.button-vue--vue-success[data-v-7aad13a0]:active{background-color:var(--color-success)}.button-vue--vue-warning[data-v-7aad13a0]{background-color:var(--color-warning);color:#fff}.button-vue--vue-warning[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-warning-hover)}.button-vue--vue-warning[data-v-7aad13a0]:active{background-color:var(--color-warning)}.button-vue--vue-error[data-v-7aad13a0]{background-color:var(--color-error);color:#fff}.button-vue--vue-error[data-v-7aad13a0]:hover:not(:disabled){background-color:var(--color-error-hover)}.button-vue--vue-error[data-v-7aad13a0]:active{background-color:var(--color-error)}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcButton/NcButton.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,6BACC,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CACA,kCAAA,CACA,gBAAA,CACA,eCcgB,CDbhB,cCagB,CDZhB,YAAA,CACA,kBAAA,CACA,sBAAA,CAGA,cAAA,CAKA,kBAAA,CACA,uDAAA,CACA,uBAAA,CACA,iCAAA,CAkBA,6CAAA,CACA,mDAAA,CA1BA,iEAEC,cAAA,CAQD,mCACC,YAAA,CAGD,sCACC,cAAA,CAIA,UCIiB,CDFjB,oBAAA,CALA,wCACC,cAAA,CAUF,kDACC,yDAAA,CAKD,oCACC,mDAAA,CAGD,sCACC,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CAGD,uDACC,mBAAA,CAED,yDACC,qBAAA,CAED,2DACC,0BAAA,CAGD,gEACC,gFAAA,CAGD,mCACC,WCrDe,CDsDf,UCtDe,CDuDf,eCvDe,CDwDf,cCxDe,CDyDf,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,mCACC,gBAAA,CACA,iBAAA,CACA,aAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CAID,wCACC,qBAAA,CAID,wCACC,cAAA,CACA,0DACC,eAAA,CACA,gBAAA,CAKF,4CACC,eAAA,CACA,gFAAA,CAID,mCACC,UAAA,CAGD,2CACC,mDAAA,CACA,4DAAA,CACA,+EACC,mDAAA,CACA,kCAAA,CACA,8BAAA,CAOF,0CACC,6CAAA,CACA,uCAAA,CACA,+DACC,mDAAA,CAID,iDACC,6CAAA,CAKF,4CACC,6CAAA,CACA,mDAAA,CACA,iEACC,6CAAA,CACA,yDAAA,CAKF,2CACC,4BAAA,CACA,8BAAA,CACA,gEACC,8CAAA,CAKF,yDACC,4BAAA,CACA,8BAAA,CACA,8EACC,8BAAA,CAKF,sDACC,uCAAA,CACA,8BAAA,CAEA,2EACC,8BAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,0CACC,qCAAA,CACA,UAAA,CACA,+DACC,2CAAA,CAID,iDACC,qCAAA,CAKF,wCACC,mCAAA,CACA,UAAA,CACA,6DACC,yCAAA,CAID,+CACC,mCAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n\n.button-vue {\n\tposition: relative;\n\twidth: fit-content;\n\toverflow: hidden;\n\tborder: 0;\n\tpadding: 0;\n\tfont-size: var(--default-font-size);\n\tfont-weight: bold;\n\tmin-height: $clickable-area;\n\tmin-width: $clickable-area;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\t// Cursor pointer on element and all children\n\tcursor: pointer;\n\t& *,\n\tspan {\n\t\tcursor: pointer;\n\t}\n\tborder-radius: math.div($clickable-area, 2);\n\ttransition-property: color, border-color, background-color;\n\ttransition-duration: 0.1s;\n\ttransition-timing-function: linear;\n\n\t// No outline feedback for focus. Handled with a toggled class in js (see data)\n\t&:focus {\n\t\toutline: none;\n\t}\n\n\t&:disabled {\n\t\tcursor: default;\n\t\t& * {\n\t\t\tcursor: default;\n\t\t}\n\t\topacity: $opacity_disabled;\n\t\t// Gives a wash out effect\n\t\tfilter: saturate($opacity_normal);\n\t}\n\n\t// Default button type\n\tcolor: var(--color-primary-element-light-text);\n\tbackground-color: var(--color-primary-element-light);\n\t&:hover:not(:disabled) {\n\t\tbackground-color: var(--color-primary-element-light-hover);\n\t}\n\n\t// Back to the default color for this button when active\n\t// TODO: add ripple effect\n\t&:active {\n\t\tbackground-color: var(--color-primary-element-light);\n\t}\n\n\t&__wrapper {\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t}\n\n\t&--end &__wrapper {\n\t\tjustify-content: end;\n\t}\n\t&--start &__wrapper {\n\t\tjustify-content: start;\n\t}\n\t&--reverse &__wrapper {\n\t\tflex-direction: row-reverse;\n\t}\n\n\t&--reverse#{&}--icon-and-text {\n\t\tpadding-inline: calc(var(--default-grid-baseline) * 4) var(--default-grid-baseline);\n\t}\n\n\t&__icon {\n\t\theight: $clickable-area;\n\t\twidth: $clickable-area;\n\t\tmin-height: $clickable-area;\n\t\tmin-width: $clickable-area;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n\n\t&__text {\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 1px;\n\t\tpadding: 2px 0;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\toverflow: hidden;\n\t}\n\n\t// Icon-only button\n\t&--icon-only {\n\t\twidth: $clickable-area !important;\n\t}\n\n\t// Text-only button\n\t&--text-only {\n\t\tpadding: 0 12px;\n\t\t& .button-vue__text {\n\t\t\tmargin-left: 4px;\n\t\t\tmargin-right: 4px;\n\t\t}\n\t}\n\n\t// Icon and text button\n\t&--icon-and-text {\n\t\tpadding-block: 0;\n\t\tpadding-inline: var(--default-grid-baseline) calc(var(--default-grid-baseline) * 4);\n\t}\n\n\t// Wide button spans the whole width of the container\n\t&--wide {\n\t\twidth: 100%;\n\t}\n\n\t&:focus-visible {\n\t\toutline: 2px solid var(--color-main-text) !important;\n\t\tbox-shadow: 0 0 0 4px var(--color-main-background) !important;\n\t\t&.button-vue--vue-tertiary-on-primary {\n\t\t\toutline: 2px solid var(--color-primary-element-text);\n\t\t\tborder-radius: var(--border-radius);\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Button types\n\n\t// Primary\n\t&--vue-primary {\n\t\tbackground-color: var(--color-primary-element);\n\t\tcolor: var(--color-primary-element-text);\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-primary-element-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-primary-element);\n\t\t}\n\t}\n\n\t// Secondary\n\t&--vue-secondary {\n\t\tcolor: var(--color-primary-element-light-text);\n\t\tbackground-color: var(--color-primary-element-light);\n\t\t&:hover:not(:disabled) {\n\t\t\tcolor: var(--color-primary-element-light-text);\n\t\t\tbackground-color: var(--color-primary-element-light-hover);\n\t\t}\n\t}\n\n\t// Tertiary\n\t&--vue-tertiary {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t}\n\n\t// Tertiary, no background\n\t&--vue-tertiary-no-background {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: transparent;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Tertiary on primary color (like the header)\n\t&--vue-tertiary-on-primary {\n\t\tcolor: var(--color-primary-element-text);\n\t\tbackground-color: transparent;\n\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t}\n\n\t// Success\n\t&--vue-success {\n\t\tbackground-color: var(--color-success);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-success-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// : add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-success);\n\t\t}\n\t}\n\n\t// Warning\n\t&--vue-warning {\n\t\tbackground-color: var(--color-warning);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-warning-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-warning);\n\t\t}\n\t}\n\n\t// Error\n\t&--vue-error {\n\t\tbackground-color: var(--color-error);\n\t\tcolor: white;\n\t\t&:hover:not(:disabled) {\n\t\t\tbackground-color: var(--color-error-hover);\n\t\t}\n\t\t// Back to the default color for this button when active\n\t\t// TODO: add ripple effect\n\t\t&:active {\n\t\t\tbackground-color: var(--color-error);\n\t\t}\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const r=s},3246:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});var o=t(7537),i=t.n(o),n=t(3645),s=t.n(n)()(i());s.push([e.id,".material-design-icon[data-v-6cccc0ac]{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.color-picker[data-v-6cccc0ac]{display:flex;overflow:hidden;align-content:flex-end;flex-direction:column;justify-content:space-between;box-sizing:content-box !important;width:176px;padding:8px;border-radius:3px}.color-picker--advanced-fields[data-v-6cccc0ac]{width:264px}.color-picker__simple[data-v-6cccc0ac]{display:grid;grid-template-columns:repeat(auto-fit, 44px);grid-auto-rows:44px}.color-picker__simple-color-circle[data-v-6cccc0ac]{display:flex;align-items:center;justify-content:center;width:34px;height:34px;min-height:34px;margin:auto;padding:0;color:#fff;border:1px solid rgba(0,0,0,.25);border-radius:50%;font-size:16px}.color-picker__simple-color-circle[data-v-6cccc0ac]:hover{opacity:.6}.color-picker__simple-color-circle--active[data-v-6cccc0ac]{width:38px;height:38px;min-height:38px;transition:all 100ms ease-in-out;opacity:1 !important}.color-picker__advanced[data-v-6cccc0ac]{box-shadow:none !important}.color-picker__navigation[data-v-6cccc0ac]{display:flex;flex-direction:row;justify-content:space-between;margin-top:10px}[data-v-6cccc0ac]  .vc-chrome{width:unset;background-color:var(--color-main-background)}[data-v-6cccc0ac]  .vc-chrome-color-wrap{width:30px;height:30px}[data-v-6cccc0ac]  .vc-chrome-active-color{width:34px;height:34px;border-radius:17px}[data-v-6cccc0ac]  .vc-chrome-body{padding:14px 0 0 0;background-color:var(--color-main-background)}[data-v-6cccc0ac]  .vc-chrome-body .vc-input__input{box-shadow:none}[data-v-6cccc0ac]  .vc-chrome-toggle-btn{filter:var(--background-invert-if-dark)}[data-v-6cccc0ac]  .vc-chrome-saturation-wrap{border-radius:3px}[data-v-6cccc0ac]  .vc-chrome-saturation-circle{width:20px;height:20px}.slide-enter[data-v-6cccc0ac]{transform:translateX(-50%);opacity:0}.slide-enter-to[data-v-6cccc0ac]{transform:translateX(0);opacity:1}.slide-leave[data-v-6cccc0ac]{transform:translateX(0);opacity:1}.slide-leave-to[data-v-6cccc0ac]{transform:translateX(-50%);opacity:0}.slide-enter-active[data-v-6cccc0ac],.slide-leave-active[data-v-6cccc0ac]{transition:all 50ms ease-in-out}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcColorPicker/NcColorPicker.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,uCACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCND,+BACC,YAAA,CACA,eAAA,CACA,sBAAA,CACA,qBAAA,CACA,6BAAA,CACA,iCAAA,CACA,WAAA,CACA,WAAA,CACA,iBAAA,CAEA,gDACC,WAAA,CAGD,uCACC,YAAA,CACA,4CAAA,CACA,mBCKe,CDHf,oDACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,WAAA,CACA,SAAA,CACA,UAAA,CACA,gCAAA,CACA,iBAAA,CACA,cAAA,CACA,0DACC,UAAA,CAED,4DACC,UAAA,CACA,WAAA,CACA,eAAA,CACA,gCAAA,CACA,oBAAA,CAKH,yCACC,0BAAA,CAGD,2CACC,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,eAAA,CAKD,8BACC,WAAA,CACA,6CAAA,CAEA,yCACC,UAAA,CACA,WAAA,CAGD,2CACC,UAAA,CACA,WAAA,CACA,kBAAA,CAGD,mCACC,kBAAA,CACA,6CAAA,CACA,oDACC,eAAA,CAIF,yCACC,uCAAA,CAIA,8CACC,iBAAA,CAGD,gDACC,UAAA,CACA,WAAA,CAOH,8BACC,0BAAA,CACA,SAAA,CAED,iCACC,uBAAA,CACA,SAAA,CAED,8BACC,uBAAA,CACA,SAAA,CAED,iCACC,0BAAA,CACA,SAAA,CAED,0EAEC,+BAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n.color-picker {\n\tdisplay: flex;\n\toverflow: hidden;\n\talign-content: flex-end;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbox-sizing: content-box !important;\n\twidth: 176px;\n\tpadding: 8px;\n\tborder-radius: 3px;\n\n\t&--advanced-fields {\n\t\twidth: 264px;\n\t}\n\n\t&__simple {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto-fit, $clickable-area);\n\t\tgrid-auto-rows: $clickable-area;\n\n\t\t&-color-circle {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\twidth: 34px;\n\t\t\theight: 34px;\n\t\t\tmin-height: 34px;\n\t\t\tmargin: auto;\n\t\t\tpadding: 0;\n\t\t\tcolor: white;\n\t\t\tborder: 1px solid rgba(0, 0, 0, 0.25);\n\t\t\tborder-radius: 50%;\n\t\t\tfont-size: 16px;\n\t\t\t&:hover {\n\t\t\t\topacity: .6;\n\t\t\t}\n\t\t\t&--active {\n\t\t\t\twidth: 38px;\n\t\t\t\theight: 38px;\n\t\t\t\tmin-height: 38px;\n\t\t\t\ttransition: all 100ms ease-in-out;\n\t\t\t\topacity: 1 !important;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__advanced {\n\t\tbox-shadow: none !important;\n\t}\n\n\t&__navigation {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\tmargin-top: 10px;\n\t}\n}\n\n:deep() .vc {\n\t&-chrome {\n\t\twidth: unset;\n\t\tbackground-color: var(--color-main-background);\n\n\t\t&-color-wrap {\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t}\n\n\t\t&-active-color {\n\t\t\twidth: 34px;\n\t\t\theight: 34px;\n\t\t\tborder-radius: 17px;\n\t\t}\n\n\t\t&-body {\n\t\t\tpadding: 14px 0 0 0;\n\t\t\tbackground-color: var(--color-main-background);\n\t\t\t.vc-input__input {\n\t\t\t\tbox-shadow: none;\n\t\t\t}\n\t\t}\n\n\t\t&-toggle-btn {\n\t\t\tfilter: var(--background-invert-if-dark);\n\t\t}\n\n\t\t&-saturation {\n\t\t\t&-wrap {\n\t\t\t\tborder-radius: 3px;\n\t\t\t}\n\n\t\t\t&-circle {\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t}\n\t\t}\n\t}\n}\n\n.slide {\n\t&-enter {\n\t\ttransform: translateX(-50%);\n\t\topacity: 0;\n\t}\n\t&-enter-to {\n\t\ttransform: translateX(0);\n\t\topacity: 1;\n\t}\n\t&-leave {\n\t\ttransform: translateX(0);\n\t\topacity: 1;\n\t}\n\t&-leave-to {\n\t\ttransform: translateX(-50%);\n\t\topacity: 0;\n\t}\n\t&-enter-active,\n\t&-leave-active {\n\t\ttransition: all 50ms ease-in-out;\n\t}\n}\n\n","/**\n * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n\n// https://uxplanet.org/7-rules-for-mobile-ui-button-design-e9cf2ea54556\n// recommended is 48px\n// 44px is what we choose and have very good visual-to-usability ratio\n$clickable-area: 44px;\n\n// background icon size\n// also used for the scss icon font\n$icon-size: 16px;\n\n// icon padding for a $clickable-area width and a $icon-size icon\n// ( 44px - 16px ) / 2\n$icon-margin: math.div($clickable-area - $icon-size, 2);\n\n// transparency background for icons\n$icon-focus-bg: rgba(127, 127, 127, .25);\n\n// popovermenu arrow width from the triangle center\n$arrow-width: 9px;\n\n// opacities\n$opacity_disabled: .5;\n$opacity_normal: .7;\n$opacity_full: 1;\n\n// menu round background hover feedback\n// good looking on dark AND white bg\n$action-background-hover: rgba(127, 127, 127, .25);\n\n// various structure data used in the \n// `AppNavigation` component\n$header-height: 50px;\n$navigation-width: 300px;\n\n// mobile breakpoint\n$breakpoint-mobile: 1024px;\n\n// top-bar spacing\n$topbar-margin: 4px;\n\n// navigation spacing\n$app-navigation-settings-margin: 3px;\n"],sourceRoot:""}]);const r=s},1625:(e,a,t)=>{"use strict";t.d(a,{Z:()=>r});var o=t(7537),i=t.n(o),n=t(3645),s=t.n(n)()(i());s.push([e.id,".material-design-icon{display:flex;align-self:center;justify-self:center;align-items:center;justify-content:center}.resize-observer{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:rgba(0,0,0,0);pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.v-popper--theme-dropdown.v-popper__popper{z-index:100000;top:0;left:0;display:block !important;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.v-popper--theme-dropdown.v-popper__popper .v-popper__inner{padding:0;color:var(--color-main-text);border-radius:var(--border-radius-large);overflow:hidden;background:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper .v-popper__arrow-container{position:absolute;z-index:1;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0);border-width:10px}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=top] .v-popper__arrow-container{bottom:-10px;border-bottom-width:0;border-top-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=bottom] .v-popper__arrow-container{top:-10px;border-top-width:0;border-bottom-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=right] .v-popper__arrow-container{left:-10px;border-left-width:0;border-right-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[data-popper-placement^=left] .v-popper__arrow-container{right:-10px;border-right-width:0;border-left-color:var(--color-main-background)}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=true]{visibility:hidden;transition:opacity var(--animation-quick),visibility var(--animation-quick);opacity:0}.v-popper--theme-dropdown.v-popper__popper[aria-hidden=false]{visibility:visible;transition:opacity var(--animation-quick);opacity:1}","",{version:3,sources:["webpack://./src/assets/material-icons.css","webpack://./src/components/NcPopover/NcPopover.vue"],names:[],mappings:"AAGA,sBACC,YAAA,CACA,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CCLD,iBACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,8BAAA,CACA,mBAAA,CACA,aAAA,CACA,eAAA,CACA,SAAA,CAGD,wBACC,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,mBAAA,CACA,UAAA,CAMA,2CACC,cAAA,CACA,KAAA,CACA,MAAA,CACA,wBAAA,CAEA,sDAAA,CAEA,4DACC,SAAA,CACA,4BAAA,CACA,wCAAA,CACA,eAAA,CACA,uCAAA,CAGD,sEACC,iBAAA,CACA,SAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,0BAAA,CACA,iBA1BW,CA6BZ,kGACC,YAAA,CACA,qBAAA,CACA,6CAAA,CAGD,qGACC,SAAA,CACA,kBAAA,CACA,gDAAA,CAGD,oGACC,UAAA,CACA,mBAAA,CACA,+CAAA,CAGD,mGACC,WAAA,CACA,oBAAA,CACA,8CAAA,CAGD,6DACC,iBAAA,CACA,2EAAA,CACA,SAAA,CAGD,8DACC,kBAAA,CACA,yCAAA,CACA,SAAA",sourcesContent:["/*\n* Ensure proper alignment of the vue material icons\n*/\n.material-design-icon {\n\tdisplay: flex;\n\talign-self: center;\n\tjustify-self: center;\n\talign-items: center;\n\tjustify-content: center;\n}\n","@use 'sass:math'; $scope_version:\"0bb2eca\"; @import 'variables'; @import 'material-icons';\n\n\n.resize-observer {\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\tz-index:-1;\n\twidth:100%;\n\theight:100%;\n\tborder:none;\n\tbackground-color:transparent;\n\tpointer-events:none;\n\tdisplay:block;\n\toverflow:hidden;\n\topacity:0\n}\n\n.resize-observer object {\n\tdisplay:block;\n\tposition:absolute;\n\ttop:0;\n\tleft:0;\n\theight:100%;\n\twidth:100%;\n\toverflow:hidden;\n\tpointer-events:none;\n\tz-index:-1\n}\n\n$arrow-width: 10px;\n\n.v-popper--theme-dropdown {\n\t&.v-popper__popper {\n\t\tz-index: 100000;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tdisplay: block !important;\n\n\t\tfilter: drop-shadow(0 1px 10px var(--color-box-shadow));\n\n\t\t.v-popper__inner {\n\t\t\tpadding: 0;\n\t\t\tcolor: var(--color-main-text);\n\t\t\tborder-radius: var(--border-radius-large);\n\t\t\toverflow: hidden;\n\t\t\tbackground: var(--color-main-background);\n\t\t}\n\n\t\t.v-popper__arrow-container {\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: transparent;\n\t\t\tborder-width: $arrow-width;\n\t\t}\n\n\t\t&[data-popper-placement^='top'] .v-popper__arrow-container {\n\t\t\tbottom: -$arrow-width;\n\t\t\tborder-bottom-width: 0;\n\t\t\tborder-top-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='bottom'] .v-popper__arrow-container {\n\t\t\ttop: -$arrow-width;\n\t\t\tborder-top-width: 0;\n\t\t\tborder-bottom-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='right'] .v-popper__arrow-container {\n\t\t\tleft: -$arrow-width;\n\t\t\tborder-left-width: 0;\n\t\t\tborder-right-color: var(--color-main-background);\n\t\t}\n\n\t\t&[data-popper-placement^='left'] .v-popper__arrow-container {\n\t\t\tright: -$arrow-width;\n\t\t\tborder-right-width: 0;\n\t\t\tborder-left-color: var(--color-main-background);\n\t\t}\n\n\t\t&[aria-hidden='true'] {\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity var(--animation-quick), visibility var(--animation-quick);\n\t\t\topacity: 0;\n\t\t}\n\n\t\t&[aria-hidden='false'] {\n\t\t\tvisibility: visible;\n\t\t\ttransition: opacity var(--animation-quick);\n\t\t\topacity: 1;\n\t\t}\n\t}\n}\n\n"],sourceRoot:""}]);const r=s},3645:e=>{"use strict";e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t="",o=void 0!==a[5];return a[4]&&(t+="@supports (".concat(a[4],") {")),a[2]&&(t+="@media ".concat(a[2]," {")),o&&(t+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),t+=e(a),o&&(t+="}"),a[2]&&(t+="}"),a[4]&&(t+="}"),t})).join("")},a.i=function(e,t,o,i,n){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var m=[].concat(e[c]);o&&s[m[0]]||(void 0!==n&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=n),t&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=t):m[2]=t),i&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=i):m[4]="".concat(i)),a.push(m))}},a}},7537:e=>{"use strict";e.exports=function(e){var a=e[1],t=e[3];if(!t)return a;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),n="/*# ".concat(i," */");return[a].concat([n]).join("\n")}return[a].join("\n")}},3379:e=>{"use strict";var a=[];function t(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function o(e,o){for(var n={},s=[],r=0;r<e.length;r++){var l=e[r],c=o.base?l[0]+o.base:l[0],m=n[c]||0,d="".concat(c," ").concat(m);n[c]=m+1;var u=t(d),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)a[u].references++,a[u].updater(p);else{var h=i(p,o);o.byIndex=r,a.splice(r,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function i(e,a){var t=a.domAPI(a);t.update(e);return function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap&&a.supports===e.supports&&a.layer===e.layer)return;t.update(e=a)}else t.remove()}}e.exports=function(e,i){var n=o(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<n.length;s++){var r=t(n[s]);a[r].references--}for(var l=o(e,i),c=0;c<n.length;c++){var m=t(n[c]);0===a[m].references&&(a[m].updater(),a.splice(m,1))}n=l}}},569:e=>{"use strict";var a={};e.exports=function(e,t){var o=function(e){if(void 0===a[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},9216:e=>{"use strict";e.exports=function(e){var a=document.createElement("style");return e.setAttributes(a,e.attributes),e.insert(a,e.options),a}},3565:(e,a,t)=>{"use strict";e.exports=function(e){var a=t.nc;a&&e.setAttribute("nonce",a)}},7795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var a=e.insertStyleElement(e);return{update:function(t){!function(e,a,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var n=t.sourceMap;n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),a.styleTagTransform(o,e,a.options)}(a,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)}}}},4589:e=>{"use strict";e.exports=function(e,a){if(a.styleSheet)a.styleSheet.cssText=e;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(e))}}},2102:()=>{},1554:()=>{},2405:()=>{},1900:(e,a,t)=>{"use strict";function o(e,a,t,o,i,n,s,r){var l,c="function"==typeof e?e.options:e;if(a&&(c.render=a,c.staticRenderFns=t,c._compiled=!0),o&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var m=c.render;c.render=function(e,a){return l.call(a),m(e,a)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}t.d(a,{Z:()=>o})},9454:e=>{"use strict";e.exports=__webpack_require__(/*! floating-vue */ "./node_modules/floating-vue/dist/floating-vue.es.js")},4505:e=>{"use strict";e.exports=__webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js")}},a={};function t(o){var i=a[o];if(void 0!==i)return i.exports;var n=a[o]={id:o,exports:{}};return e[o](n,n.exports,t),n.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nc=void 0;var o={};return(()=>{"use strict";t.r(o),t.d(o,{default:()=>R});var e=t(3089),a=t(2297);var i=(0,(__webpack_require__(/*! @nextcloud/l10n/gettext */ "./node_modules/@nextcloud/l10n/dist/gettext.js").getGettextBuilder))().detectLocale();[{locale:"af",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ar",translations:{"{tag} (invisible)":"{tag} (غير مرئي)","{tag} (restricted)":"{tag} (مقيد)","a few seconds ago":"منذ عدة ثوانٍ مضت",Actions:"الإجراءات",'Actions for item with name "{name}"':'إجراءات على العنصر المُسمَّى "{name}"',Activities:"الحركات","Animals & Nature":"الحيوانات والطبيعة","Any link":"أيَّ رابطٍ","Anything shared with the same group of people will show up here":"أي مادة تمت مشاركتها مع نفس المجموعة من الأشخاص سيتم عرضها هنا","Avatar of {displayName}":"الرمز التجسيدي avatar ـ {displayName}  ","Avatar of {displayName}, {status}":"الرمز التجسيدي لـ {displayName}، {status}",Back:"عودة","Back to provider selection":"عودة إلى اختيار المُزوِّد","Cancel changes":"إلغاء التغييرات","Change name":"تغيير الاسم",Choose:"إختَر","Clear search":"محو البحث","Clear text":"محو النص",Close:"أغلِق","Close modal":"أغلِق النافذة الصُّورِية","Close navigation":"أغلِق المُتصفِّح","Close sidebar":"قفل الشريط الجانبي","Close Smart Picker":"أغلِق اللاقط الذكي Smart Picker","Collapse menu":"طَيّ القائمة","Confirm changes":"تأكيد التغييرات",Custom:"مُخصَّص","Edit item":"تعديل عنصر","Enter link":"أدخِل الرابط","Error getting related resources. Please contact your system administrator if you have any questions.":"خطأ في الحصول على الموارد ذات الصلة. يرجى الاتصال بمشرف النظام عندك إذا كان لديك أيّ أسئلة.","External documentation for {name}":"التوثيق الخارجي لـ {name}",Favorite:"المُفضَّلة",Flags:"الأعلام","Food & Drink":"الطعام والشراب","Frequently used":"شائعة الاستعمال",Global:"شامل","Go back to the list":"عودة إلى القائمة","Hide password":"إخفاء كلمة المرور",'Load more "{options}""':'حمّل "{options}"" أكثر',"Message limit of {count} characters reached":"تمّ الوصول إلى الحد الأقصى لعدد الأحرف في الرسالة: {count} حرف","More items …":"عناصر أخرى ...","More options":"خيارات أخرى ...",Next:"التالي","No emoji found":"لم يتم العثور على أي إيموجي emoji","No link provider found":"لا يوجد أيّ مزود روابط link provider","No results":"ليس هناك أية نتيجة",Objects:"أشياء","Open contact menu":"إفتَح قائمة جهات الاتصال",'Open link to "{resourceName}"':'إفتَح الرابط إلى "{resourceName}"',"Open menu":"إفتَح القائمة","Open navigation":"إفتَح المتصفح","Open settings menu":"إفتَح قائمة الإعدادات","Password is secure":"كلمة المرور مُؤمّنة","Pause slideshow":"تجميد عرض الشرائح","People & Body":"ناس و أجسام","Pick a date":"إختَر التاريخ","Pick a date and a time":"إختَر التاريخ و الوقت","Pick a month":"إختَر الشهر","Pick a time":"إختَر الوقت","Pick a week":"إختَر الأسبوع","Pick a year":"إختَر السنة","Pick an emoji":"إختَر رمز إيموجي emoji","Please select a time zone:":"الرجاء تحديد المنطقة الزمنية:",Previous:"السابق","Provider icon":"أيقونة المُزوِّد","Raw link {options}":" الرابط الخام raw link ـ {options}","Related resources":"مصادر ذات صلة",Search:"بحث","Search emoji":"بحث عن إيموجي emoji","Search results":"نتائج البحث","sec. ago":"ثانية مضت","seconds ago":"ثوان مضت","Select a tag":"إختَر سِمَةً tag","Select provider":"إختَر مٌزوِّداً",Settings:"الإعدادات","Settings navigation":"إعدادات التّصفُّح","Show password":"أظهِر كلمة المرور","Smart Picker":"اللاقط الذكي smart picker","Smileys & Emotion":"وجوهٌ ضاحكة و مشاعر","Start slideshow":"إبدإ العرض","Start typing to search":"إبدإ كتابة مفردات البحث",Submit:"إرسال",Symbols:"رموز","Travel & Places":"سفر و أماكن","Type to search time zone":"أكتُب للبحث عن منطقة زمنية","Unable to search the group":"تعذّر البحث في المجموعة","Undo changes":"تراجع عن التغييرات",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'أكتُب رسالةً؛ إستعمِل "@" للإشارة إلى شخص ما، و استخدم ":" للإكمال التلقائي لرموز الإيموجي ...'}},{locale:"ast",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"az",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"be",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"bg",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"bn_BD",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"br",translations:{"{tag} (invisible)":"{tag} (diwelus)","{tag} (restricted)":"{tag} (bevennet)","a few seconds ago":"",Actions:"Oberioù",'Actions for item with name "{name}"':"",Activities:"Oberiantizoù","Animals & Nature":"Loened & Natur","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Dibab","Clear search":"","Clear text":"",Close:"Serriñ","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"Personelañ","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Bannieloù","Food & Drink":"Boued & Evajoù","Frequently used":"Implijet alies",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"Da heul","No emoji found":"Emoji ebet kavet","No link provider found":"","No results":"Disoc'h ebet",Objects:"Traoù","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Arsav an diaporama","People & Body":"Tud & Korf","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Choaz un emoji","Please select a time zone:":"",Previous:"A-raok","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Klask","Search emoji":"","Search results":"Disoc'hoù an enklask","sec. ago":"","seconds ago":"","Select a tag":"Choaz ur c'hlav","Select provider":"",Settings:"Arventennoù","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"Smileyioù & Fromoù","Start slideshow":"Kregiñ an diaporama","Start typing to search":"",Submit:"",Symbols:"Arouezioù","Travel & Places":"Beaj & Lec'hioù","Type to search time zone":"","Unable to search the group":"Dibosupl eo klask ar strollad","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"bs",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ca",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringit)","a few seconds ago":"",Actions:"Accions",'Actions for item with name "{name}"':"",Activities:"Activitats","Animals & Nature":"Animals i natura","Any link":"","Anything shared with the same group of people will show up here":"Qualsevol cosa compartida amb el mateix grup de persones es mostrarà aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Cancel·la els canvis","Change name":"",Choose:"Tria","Clear search":"","Clear text":"Netejar text",Close:"Tanca","Close modal":"Tancar el mode","Close navigation":"Tanca la navegació","Close sidebar":"Tancar la barra lateral","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Confirmeu els canvis",Custom:"Personalitzat","Edit item":"Edita l'element","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Preferit",Flags:"Marques","Food & Drink":"Menjar i begudes","Frequently used":"Utilitzats recentment",Global:"Global","Go back to the list":"Torna a la llista","Hide password":"Amagar contrasenya",'Load more "{options}""':"","Message limit of {count} characters reached":"S'ha arribat al límit de {count} caràcters per missatge","More items …":"Més artícles...","More options":"",Next:"Següent","No emoji found":"No s'ha trobat cap emoji","No link provider found":"","No results":"Sense resultats",Objects:"Objectes","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Obre la navegació","Open settings menu":"","Password is secure":"Contrasenya segura<br>","Pause slideshow":"Atura la presentació","People & Body":"Persones i cos","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Trieu un emoji","Please select a time zone:":"Seleccioneu una zona horària:",Previous:"Anterior","Provider icon":"","Raw link {options}":"","Related resources":"Recursos relacionats",Search:"Cerca","Search emoji":"","Search results":"Resultats de cerca","sec. ago":"","seconds ago":"","Select a tag":"Seleccioneu una etiqueta","Select provider":"",Settings:"Paràmetres","Settings navigation":"Navegació d'opcions","Show password":"Mostrar contrasenya","Smart Picker":"","Smileys & Emotion":"Cares i emocions","Start slideshow":"Inicia la presentació","Start typing to search":"",Submit:"Envia",Symbols:"Símbols","Travel & Places":"Viatges i llocs","Type to search time zone":"Escriviu per cercar la zona horària","Unable to search the group":"No es pot cercar el grup","Undo changes":"Desfés els canvis",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escriu missatge, fes servir "@" per esmentar algú, fes servir ":" per autocompletar emojis...'}},{locale:"cs",translations:{"{tag} (invisible)":"{tag} (neviditelné)","{tag} (restricted)":"{tag} (omezené)","a few seconds ago":"před několika sekundami",Actions:"Akce",'Actions for item with name "{name}"':"Akce pro položku s názvem „{name}“",Activities:"Aktivity","Animals & Nature":"Zvířata a příroda","Any link":"Jakýkoli odkaz","Anything shared with the same group of people will show up here":"Cokoli nasdíleného stejné skupině lidí se zobrazí zde","Avatar of {displayName}":"Zástupný obrázek uživatele {displayName}","Avatar of {displayName}, {status}":"Zástupný obrázek uživatele {displayName}, {status}",Back:"Zpět","Back to provider selection":"Zpět na výběr poskytovatele","Cancel changes":"Zrušit změny","Change name":"Změnit název",Choose:"Zvolit","Clear search":"Vyčistit vyhledávání","Clear text":"Čitelný text",Close:"Zavřít","Close modal":"Zavřít dialogové okno","Close navigation":"Zavřít navigaci","Close sidebar":"Zavřít postranní panel","Close Smart Picker":"Zavřít inteligentní výběr","Collapse menu":"Sbalit nabídku","Confirm changes":"Potvrdit změny",Custom:"Uživatelsky určené","Edit item":"Upravit položku","Enter link":"Zadat odkaz","Error getting related resources. Please contact your system administrator if you have any questions.":"Chyba při získávání souvisejících prostředků. Pokud máte jakékoli dotazy, obraťte se na správce vámi využívaného systému.","External documentation for {name}":"Externí dokumentace pro {name}",Favorite:"Oblíbené",Flags:"Příznaky","Food & Drink":"Jídlo a pití","Frequently used":"Často používané",Global:"Globální","Go back to the list":"Jít zpět na seznam","Hide password":"Skrýt heslo",'Load more "{options}""':"Načíst více „{options}“","Message limit of {count} characters reached":"Dosaženo limitu počtu ({count}) znaků zprávy","More items …":"Další položky…","More options":"Další volby",Next:"Následující","No emoji found":"Nenalezeno žádné emoji","No link provider found":"Nenalezen žádný poskytovatel odkazů","No results":"Nic nenalezeno",Objects:"Objekty","Open contact menu":"Otevřít nabídku kontaktů",'Open link to "{resourceName}"':"Otevřít odkaz na „{resourceName}“","Open menu":"Otevřít nabídku","Open navigation":"Otevřít navigaci","Open settings menu":"Otevřít nabídku nastavení","Password is secure":"Heslo je bezpečné","Pause slideshow":"Pozastavit prezentaci","People & Body":"Lidé a tělo","Pick a date":"Vybrat datum","Pick a date and a time":"Vybrat datum a čas","Pick a month":"Vybrat měsíc","Pick a time":"Vybrat čas","Pick a week":"Vybrat týden","Pick a year":"Vybrat rok","Pick an emoji":"Vybrat emoji","Please select a time zone:":"Vyberte časovou zónu:",Previous:"Předchozí","Provider icon":"Ikona poskytovatele","Raw link {options}":"Holý odkaz {options}","Related resources":"Související prostředky",Search:"Hledat","Search emoji":"Hledat emoji","Search results":"Výsledky hledání","sec. ago":"sek. před","seconds ago":"sekund předtím","Select a tag":"Vybrat štítek","Select provider":"Vybrat poskytovatele",Settings:"Nastavení","Settings navigation":"Pohyb po nastavení","Show password":"Zobrazit heslo","Smart Picker":"Inteligentní výběr","Smileys & Emotion":"Úsměvy a emoce","Start slideshow":"Spustit prezentaci","Start typing to search":"Vyhledávejte psaním",Submit:"Odeslat",Symbols:"Symboly","Travel & Places":"Cestování a místa","Type to search time zone":"Psaním vyhledejte časovou zónu","Unable to search the group":"Nedaří se hledat skupinu","Undo changes":"Vzít změny zpět",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Napište zprávu – pokud chcete někoho zmínit, napište před jeho uživatelským jménem „@“ (zavináč); automatické doplňování emotikonů zahájíte napsáním „:“ (dvojtečky)…"}},{locale:"cy_GB",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"da",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (begrænset)","a few seconds ago":"et par sekunder siden",Actions:"Handlinger",'Actions for item with name "{name}"':'Handlinger for element med navnet "{name}"',Activities:"Aktiviteter","Animals & Nature":"Dyr & Natur","Any link":"Ethvert link","Anything shared with the same group of people will show up here":"Alt der deles med samme gruppe af personer vil vises her","Avatar of {displayName}":"Avatar af {displayName}","Avatar of {displayName}, {status}":"Avatar af {displayName}, {status}",Back:"Tilbage","Back to provider selection":"Tilbage til udbydervalg","Cancel changes":"Annuller ændringer","Change name":"Ændre navn",Choose:"Vælg","Clear search":"Ryd søgning","Clear text":"Ryd tekst",Close:"Luk","Close modal":"Luk vindue","Close navigation":"Luk navigation","Close sidebar":"Luk sidepanel","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Bekræft ændringer",Custom:"Brugerdefineret","Edit item":"Rediger emne","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favorit",Flags:"Flag","Food & Drink":"Mad & Drikke","Frequently used":"Ofte brugt",Global:"Global","Go back to the list":"Tilbage til listen","Hide password":"Skjul kodeord",'Load more "{options}""':"","Message limit of {count} characters reached":"Begrænsning på {count} tegn er nået","More items …":"Mere ...","More options":"",Next:"Videre","No emoji found":"Ingen emoji fundet","No link provider found":"","No results":"Ingen resultater",Objects:"Objekter","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Åbn navigation","Open settings menu":"","Password is secure":"Kodeordet er sikkert","Pause slideshow":"Suspender fremvisning","People & Body":"Mennesker & Menneskekroppen","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Vælg en emoji","Please select a time zone:":"Vælg venligst en tidszone:",Previous:"Forrige","Provider icon":"","Raw link {options}":"","Related resources":"Relaterede emner",Search:"Søg","Search emoji":"","Search results":"Søgeresultater","sec. ago":"","seconds ago":"","Select a tag":"Vælg et mærke","Select provider":"",Settings:"Indstillinger","Settings navigation":"Naviger i indstillinger","Show password":"Vis kodeord","Smart Picker":"","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start fremvisning","Start typing to search":"",Submit:"Send",Symbols:"Symboler","Travel & Places":"Rejser & Rejsemål","Type to search time zone":"Indtast for at søge efter tidszone","Unable to search the group":"Kan ikke søge på denne gruppe","Undo changes":"Fortryd ændringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv besked, brug "@" for at nævne nogen, brug ":" til emoji-autofuldførelse ...'}},{locale:"de",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)","a few seconds ago":"",Actions:"Aktionen",'Actions for item with name "{name}"':"",Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Any link":"","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Änderungen verwerfen","Change name":"",Choose:"Auswählen","Clear search":"","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen",'Load more "{options}""':"","Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …","More options":"",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No link provider found":"","No results":"Keine Ergebnisse",Objects:"Gegenstände","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Navigation öffnen","Open settings menu":"","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte wählen Sie eine Zeitzone:",Previous:"Vorherige","Provider icon":"","Raw link {options}":"","Related resources":"Verwandte Ressourcen",Search:"Suche","Search emoji":"","Search results":"Suchergebnisse","sec. ago":"","seconds ago":"","Select a tag":"Schlagwort auswählen","Select provider":"",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smart Picker":"","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten","Start typing to search":"",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um Zeitzone zu suchen","Unable to search the group":"Die Gruppe konnte nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"de_DE",translations:{"{tag} (invisible)":"{tag} (unsichtbar)","{tag} (restricted)":"{tag} (eingeschränkt)","a few seconds ago":"vor ein paar Sekunden",Actions:"Aktionen",'Actions for item with name "{name}"':'Aktionen für Element mit dem Namen "{name}“',Activities:"Aktivitäten","Animals & Nature":"Tiere & Natur","Any link":"Irgendein Link","Anything shared with the same group of people will show up here":"Alles, das mit derselben Gruppe von Personen geteilt wird, wird hier angezeigt","Avatar of {displayName}":"Avatar von {displayName}","Avatar of {displayName}, {status}":"Avatar von {displayName}, {status}",Back:"Zurück","Back to provider selection":"Zurück zur Anbieterauswahl","Cancel changes":"Änderungen verwerfen","Change name":"Namen ändern",Choose:"Auswählen","Clear search":"Suche leeren","Clear text":"Klartext",Close:"Schließen","Close modal":"Modal schließen","Close navigation":"Navigation schließen","Close sidebar":"Seitenleiste schließen","Close Smart Picker":"Intelligente Auswahl schließen","Collapse menu":"Menü einklappen","Confirm changes":"Änderungen bestätigen",Custom:"Benutzerdefiniert","Edit item":"Objekt bearbeiten","Enter link":"Link eingeben","Error getting related resources. Please contact your system administrator if you have any questions.":"Fehler beim Abrufen verwandter Ressourcen. Bei Fragen wenden Sie sich bitte an Ihren Systemadministrator.","External documentation for {name}":"Externe Dokumentation für {name}",Favorite:"Favorit",Flags:"Flaggen","Food & Drink":"Essen & Trinken","Frequently used":"Häufig verwendet",Global:"Global","Go back to the list":"Zurück zur Liste","Hide password":"Passwort verbergen",'Load more "{options}""':'Weitere "{options}“ laden',"Message limit of {count} characters reached":"Nachrichtenlimit von {count} Zeichen erreicht","More items …":"Weitere Elemente …","More options":"Mehr Optionen",Next:"Weiter","No emoji found":"Kein Emoji gefunden","No link provider found":"Kein Linkanbieter gefunden","No results":"Keine Ergebnisse",Objects:"Objekte","Open contact menu":"Kontaktmenü öffnen",'Open link to "{resourceName}"':'Link zu "{resourceName}“ öffnen',"Open menu":"Menü öffnen","Open navigation":"Navigation öffnen","Open settings menu":"Einstellungsmenü öffnen","Password is secure":"Passwort ist sicher","Pause slideshow":"Diashow pausieren","People & Body":"Menschen & Körper","Pick a date":"Ein Datum auswählen","Pick a date and a time":"Datum und Uhrzeit auswählen","Pick a month":"Einen Monat auswählen","Pick a time":"Eine Uhrzeit auswählen","Pick a week":"Eine Woche auswählen","Pick a year":"Ein Jahr auswählen","Pick an emoji":"Ein Emoji auswählen","Please select a time zone:":"Bitte eine Zeitzone auswählen:",Previous:"Vorherige","Provider icon":"Anbietersymbol","Raw link {options}":"Unverarbeiteter Link {Optionen}","Related resources":"Verwandte Ressourcen",Search:"Suche","Search emoji":"Emoji suchen","Search results":"Suchergebnisse","sec. ago":"Sek. zuvor","seconds ago":"Sekunden zuvor","Select a tag":"Schlagwort auswählen","Select provider":"Anbieter auswählen",Settings:"Einstellungen","Settings navigation":"Einstellungen für die Navigation","Show password":"Passwort anzeigen","Smart Picker":"Intelligente Auswahl","Smileys & Emotion":"Smileys & Emotionen","Start slideshow":"Diashow starten","Start typing to search":"Mit der Eingabe beginnen, um zu suchen",Submit:"Einreichen",Symbols:"Symbole","Travel & Places":"Reisen & Orte","Type to search time zone":"Tippen, um eine Zeitzone zu suchen","Unable to search the group":"Die Gruppe kann nicht durchsucht werden","Undo changes":"Änderungen rückgängig machen",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Nachricht schreiben, "@" um jemanden zu erwähnen, ":" für die automatische Vervollständigung von Emojis …'}},{locale:"el",translations:{"{tag} (invisible)":"{tag} (αόρατο)","{tag} (restricted)":"{tag} (περιορισμένο)","a few seconds ago":"",Actions:"Ενέργειες",'Actions for item with name "{name}"':"",Activities:"Δραστηριότητες","Animals & Nature":"Ζώα & Φύση","Any link":"","Anything shared with the same group of people will show up here":"Οτιδήποτε μοιράζεται με την ίδια ομάδα ατόμων θα εμφανίζεται εδώ","Avatar of {displayName}":"Άβαταρ του {displayName}","Avatar of {displayName}, {status}":"Άβαταρ του {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Ακύρωση αλλαγών","Change name":"",Choose:"Επιλογή","Clear search":"","Clear text":"Εκκαθάριση κειμένου",Close:"Κλείσιμο","Close modal":"Βοηθητικό κλείσιμο","Close navigation":"Κλείσιμο πλοήγησης","Close sidebar":"Κλείσιμο πλευρικής μπάρας","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Επιβεβαίωση αλλαγών",Custom:"Προσαρμογή","Edit item":"Επεξεργασία","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Αγαπημένα",Flags:"Σημαίες","Food & Drink":"Φαγητό & Ποτό","Frequently used":"Συχνά χρησιμοποιούμενο",Global:"Καθολικό","Go back to the list":"Επιστροφή στην αρχική λίστα ","Hide password":"Απόκρυψη κωδικού πρόσβασης",'Load more "{options}""':"","Message limit of {count} characters reached":"Συμπληρώθηκε το όριο των {count} χαρακτήρων του μηνύματος","More items …":"Περισσότερα στοιχεία …","More options":"",Next:"Επόμενο","No emoji found":"Δεν βρέθηκε emoji","No link provider found":"","No results":"Κανένα αποτέλεσμα",Objects:"Αντικείμενα","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Άνοιγμα πλοήγησης","Open settings menu":"","Password is secure":"Ο κωδικός πρόσβασης είναι ασφαλής","Pause slideshow":"Παύση προβολής διαφανειών","People & Body":"Άνθρωποι & Σώμα","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Επιλέξτε ένα emoji","Please select a time zone:":"Παρακαλούμε επιλέξτε μια ζώνη ώρας:",Previous:"Προηγούμενο","Provider icon":"","Raw link {options}":"","Related resources":"Σχετικοί πόροι",Search:"Αναζήτηση","Search emoji":"","Search results":"Αποτελέσματα αναζήτησης","sec. ago":"","seconds ago":"","Select a tag":"Επιλογή ετικέτας","Select provider":"",Settings:"Ρυθμίσεις","Settings navigation":"Πλοήγηση ρυθμίσεων","Show password":"Εμφάνιση κωδικού πρόσβασης","Smart Picker":"","Smileys & Emotion":"Φατσούλες & Συναίσθημα","Start slideshow":"Έναρξη προβολής διαφανειών","Start typing to search":"",Submit:"Υποβολή",Symbols:"Σύμβολα","Travel & Places":"Ταξίδια & Τοποθεσίες","Type to search time zone":"Πληκτρολογήστε για αναζήτηση ζώνης ώρας","Unable to search the group":"Δεν είναι δυνατή η αναζήτηση της ομάδας","Undo changes":"Αναίρεση Αλλαγών",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Γράψτε μήνυμα, χρησιμοποιείστε "@" για να αναφέρετε κάποιον, χρησιμοποιείστε ":" για αυτόματη συμπλήρωση emoji …'}},{locale:"en_GB",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)","a few seconds ago":"a few seconds ago",Actions:"Actions",'Actions for item with name "{name}"':'Actions for item with name "{name}"',Activities:"Activities","Animals & Nature":"Animals & Nature","Any link":"Any link","Anything shared with the same group of people will show up here":"Anything shared with the same group of people will show up here","Avatar of {displayName}":"Avatar of {displayName}","Avatar of {displayName}, {status}":"Avatar of {displayName}, {status}",Back:"Back","Back to provider selection":"Back to provider selection","Cancel changes":"Cancel changes","Change name":"Change name",Choose:"Choose","Clear search":"Clear search","Clear text":"Clear text",Close:"Close","Close modal":"Close modal","Close navigation":"Close navigation","Close sidebar":"Close sidebar","Close Smart Picker":"Close Smart Picker","Collapse menu":"Collapse menu","Confirm changes":"Confirm changes",Custom:"Custom","Edit item":"Edit item","Enter link":"Enter link","Error getting related resources. Please contact your system administrator if you have any questions.":"Error getting related resources. Please contact your system administrator if you have any questions.","External documentation for {name}":"External documentation for {name}",Favorite:"Favourite",Flags:"Flags","Food & Drink":"Food & Drink","Frequently used":"Frequently used",Global:"Global","Go back to the list":"Go back to the list","Hide password":"Hide password",'Load more "{options}""':'Load more "{options}""',"Message limit of {count} characters reached":"Message limit of {count} characters reached","More items …":"More items …","More options":"More options",Next:"Next","No emoji found":"No emoji found","No link provider found":"No link provider found","No results":"No results",Objects:"Objects","Open contact menu":"Open contact menu",'Open link to "{resourceName}"':'Open link to "{resourceName}"',"Open menu":"Open menu","Open navigation":"Open navigation","Open settings menu":"Open settings menu","Password is secure":"Password is secure","Pause slideshow":"Pause slideshow","People & Body":"People & Body","Pick a date":"Pick a date","Pick a date and a time":"Pick a date and a time","Pick a month":"Pick a month","Pick a time":"Pick a time","Pick a week":"Pick a week","Pick a year":"Pick a year","Pick an emoji":"Pick an emoji","Please select a time zone:":"Please select a time zone:",Previous:"Previous","Provider icon":"Provider icon","Raw link {options}":"Raw link {options}","Related resources":"Related resources",Search:"Search","Search emoji":"Search emoji","Search results":"Search results","sec. ago":"sec. ago","seconds ago":"seconds ago","Select a tag":"Select a tag","Select provider":"Select provider",Settings:"Settings","Settings navigation":"Settings navigation","Show password":"Show password","Smart Picker":"Smart Picker","Smileys & Emotion":"Smileys & Emotion","Start slideshow":"Start slideshow","Start typing to search":"Start typing to search",Submit:"Submit",Symbols:"Symbols","Travel & Places":"Travel & Places","Type to search time zone":"Type to search time zone","Unable to search the group":"Unable to search the group","Undo changes":"Undo changes",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Write message, use "@" to mention someone, use ":" for emoji autocompletion …'}},{locale:"eo",translations:{"{tag} (invisible)":"{tag} (kaŝita)","{tag} (restricted)":"{tag} (limigita)","a few seconds ago":"",Actions:"Agoj",'Actions for item with name "{name}"':"",Activities:"Aktiveco","Animals & Nature":"Bestoj & Naturo","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Elektu","Clear search":"","Clear text":"",Close:"Fermu","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"Propra","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Flagoj","Food & Drink":"Manĝaĵo & Trinkaĵo","Frequently used":"Ofte uzataj",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"La limo je {count} da literoj atingita","More items …":"","More options":"",Next:"Sekva","No emoji found":"La emoĝio forestas","No link provider found":"","No results":"La rezulto forestas",Objects:"Objektoj","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Payzi bildprezenton","People & Body":"Homoj & Korpo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Elekti emoĝion ","Please select a time zone:":"",Previous:"Antaŭa","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Serĉi","Search emoji":"","Search results":"Serĉrezultoj","sec. ago":"","seconds ago":"","Select a tag":"Elektu etikedon","Select provider":"",Settings:"Agordo","Settings navigation":"Agorda navigado","Show password":"","Smart Picker":"","Smileys & Emotion":"Ridoj kaj Emocioj","Start slideshow":"Komenci bildprezenton","Start typing to search":"",Submit:"",Symbols:"Signoj","Travel & Places":"Vojaĵoj & Lokoj","Type to search time zone":"","Unable to search the group":"Ne eblas serĉi en la grupo","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restringido)","a few seconds ago":"hace unos pocos segundos",Actions:"Acciones",'Actions for item with name "{name}"':'Acciones para el elemento con nombre "{name}"',Activities:"Actividades","Animals & Nature":"Animales y naturaleza","Any link":"Cualquier enlace","Anything shared with the same group of people will show up here":"Cualquier cosa que sea compartida con el mismo grupo de personas se mostrará aquí","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"Atrás","Back to provider selection":"Volver a la selección de proveedor","Cancel changes":"Cancelar cambios","Change name":"Cambiar nombre",Choose:"Elegir","Clear search":"Limpiar búsqueda","Clear text":"Limpiar texto",Close:"Cerrar","Close modal":"Cerrar modal","Close navigation":"Cerrar navegación","Close sidebar":"Cerrar barra lateral","Close Smart Picker":"Cerrar selector inteligente","Collapse menu":"Ocultar menú","Confirm changes":"Confirmar cambios",Custom:"Personalizado","Edit item":"Editar elemento","Enter link":"Ingrese enlace","Error getting related resources. Please contact your system administrator if you have any questions.":"Error al obtener recursos relacionados. Por favor, contacta a tu administrador del sistema si tienes alguna pregunta.","External documentation for {name}":"Documentación externa para {name}",Favorite:"Favorito",Flags:"Banderas","Food & Drink":"Comida y bebida","Frequently used":"Usado con frecuenca",Global:"Global","Go back to the list":"Volver a la lista","Hide password":"Ocultar contraseña",'Load more "{options}""':'Cargar más "{options}"',"Message limit of {count} characters reached":"El mensaje ha alcanzado el límite de {count} caracteres","More items …":"Más ítems...","More options":"Más opciones",Next:"Siguiente","No emoji found":"No hay ningún emoji","No link provider found":"No se encontró ningún proveedor de enlaces","No results":" Ningún resultado",Objects:"Objetos","Open contact menu":"Abrir menú de contactos",'Open link to "{resourceName}"':'Abrir enlace a "{resourceName}"',"Open menu":"Abrir menú","Open navigation":"Abrir navegación","Open settings menu":"Abrir menú de ajustes","Password is secure":"La contraseña es segura","Pause slideshow":"Pausar la presentación ","People & Body":"Personas y cuerpos","Pick a date":"Seleccione una fecha","Pick a date and a time":"Seleccione una fecha y hora","Pick a month":"Seleccione un mes","Pick a time":"Seleccione una hora","Pick a week":"Seleccione una semana","Pick a year":"Seleccione un año","Pick an emoji":"Elegir un emoji","Please select a time zone:":"Por favor elige un huso de horario:",Previous:"Anterior","Provider icon":"Ícono del proveedor","Raw link {options}":"Enlace directo {options}","Related resources":"Recursos relacionados",Search:"Buscar","Search emoji":"Buscar emoji","Search results":"Resultados de la búsqueda","sec. ago":"hace segundos","seconds ago":"segundos atrás","Select a tag":"Seleccione una etiqueta","Select provider":"Seleccione proveedor",Settings:"Ajustes","Settings navigation":"Navegación por ajustes","Show password":"Mostrar contraseña","Smart Picker":"Selector inteligente","Smileys & Emotion":"Smileys y emoticonos","Start slideshow":"Iniciar la presentación","Start typing to search":"Comience a escribir para buscar",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viajes y lugares","Type to search time zone":"Escribe para buscar un huso de horario","Unable to search the group":"No es posible buscar en el grupo","Undo changes":"Deshacer cambios",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escribir mensaje, utilice "@" para mencionar a alguien, utilice ":" para autocompletado de emojis ...'}},{locale:"es_419",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_AR",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_CL",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_CO",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_CR",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_DO",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_EC",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restricted)","a few seconds ago":"hace unos segundos",Actions:"Acciones",'Actions for item with name "{name}"':'Acciones para el elemento con nombre "{name}"',Activities:"Actividades","Animals & Nature":"Animales y Naturaleza","Any link":"Cualquier enlace","Anything shared with the same group of people will show up here":"Cualquier cosa compartida con el mismo grupo de personas aparecerá aquí.","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"Atrás","Back to provider selection":"Volver a la selección de proveedor","Cancel changes":"Cancelar cambios","Change name":"Cambiar nombre",Choose:"Elegir","Clear search":"Limpiar búsqueda","Clear text":"Limpiar texto",Close:"Cerrar","Close modal":"Cerrar modal","Close navigation":"Cerrar navegación","Close sidebar":"Cerrar barra lateral","Close Smart Picker":"Cerrar selector inteligente","Collapse menu":"Ocultar menú","Confirm changes":"Confirmar cambios",Custom:"Personalizado","Edit item":"Editar elemento","Enter link":"Ingresar enlace","Error getting related resources. Please contact your system administrator if you have any questions.":"Error al obtener recursos relacionados. Por favor, contacta a tu administrador del sistema si tienes alguna pregunta.","External documentation for {name}":"Documentación externa para {name}",Favorite:"Favorito",Flags:"Marcas","Food & Drink":"Comida y Bebida","Frequently used":"Frecuentemente utilizado",Global:"Global","Go back to the list":"Volver a la lista","Hide password":"Ocultar contraseña",'Load more "{options}""':'Cargar más "{options}"',"Message limit of {count} characters reached":"Se ha alcanzado el límite de caracteres del mensaje {count}","More items …":"Más elementos...","More options":"Más opciones",Next:"Siguiente","No emoji found":"No se encontró ningún emoji","No link provider found":"No se encontró ningún proveedor de enlaces","No results":"Sin resultados",Objects:"Objetos","Open contact menu":"Abrir menú de contactos",'Open link to "{resourceName}"':'Abrir enlace a "{resourceName}"',"Open menu":"Abrir menú","Open navigation":"Abrir navegación","Open settings menu":"Abrir menú de configuración","Password is secure":"La contraseña es segura","Pause slideshow":"Pausar presentación de diapositivas","People & Body":"Personas y Cuerpo","Pick a date":"Seleccionar una fecha","Pick a date and a time":"Seleccionar una fecha y una hora","Pick a month":"Seleccionar un mes","Pick a time":"Seleccionar una semana","Pick a week":"Seleccionar una semana","Pick a year":"Seleccionar un año","Pick an emoji":"Seleccionar un emoji","Please select a time zone:":"Por favor, selecciona una zona horaria:",Previous:"Anterior","Provider icon":"Ícono del proveedor","Raw link {options}":"Enlace directo {options}","Related resources":"Recursos relacionados",Search:"Buscar","Search emoji":"Buscar emoji","Search results":"Resultados de búsqueda","sec. ago":"hace segundos","seconds ago":"Segundos atrás","Select a tag":"Seleccionar una etiqueta","Select provider":"Seleccionar proveedor",Settings:"Configuraciones","Settings navigation":"Navegación de configuraciones","Show password":"Mostrar contraseña","Smart Picker":"Selector inteligente","Smileys & Emotion":"Caritas y Emociones","Start slideshow":"Iniciar presentación de diapositivas","Start typing to search":"Comienza a escribir para buscar",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viajes y Lugares","Type to search time zone":"Escribe para buscar la zona horaria","Unable to search the group":"No se puede buscar en el grupo","Undo changes":"Deshacer cambios",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escribir mensaje, usar "@" para mencionar a alguien, usar ":" para autocompletar emojis...'}},{locale:"es_GT",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_HN",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_MX",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_NI",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_PA",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_PE",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_PR",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_PY",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_SV",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"es_UY",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"et_EE",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"eu",translations:{"{tag} (invisible)":"{tag} (ikusezina)","{tag} (restricted)":"{tag} (mugatua)","a few seconds ago":"",Actions:"Ekintzak",'Actions for item with name "{name}"':"",Activities:"Jarduerak","Animals & Nature":"Animaliak eta Natura","Any link":"","Anything shared with the same group of people will show up here":"Pertsona-talde berarekin partekatutako edozer agertuko da hemen","Avatar of {displayName}":"{displayName}-(e)n irudia","Avatar of {displayName}, {status}":"{displayName} -(e)n irudia, {status}",Back:"","Back to provider selection":"","Cancel changes":"Ezeztatu aldaketak","Change name":"",Choose:"Aukeratu","Clear search":"","Clear text":"Garbitu testua",Close:"Itxi","Close modal":"Itxi modala","Close navigation":"Itxi nabigazioa","Close sidebar":"Itxi albo-barra","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Baieztatu aldaketak",Custom:"Pertsonalizatua","Edit item":"Editatu elementua","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Gogokoa",Flags:"Banderak","Food & Drink":"Janaria eta edariak","Frequently used":"Askotan erabilia",Global:"Globala","Go back to the list":"Bueltatu zerrendara","Hide password":"Ezkutatu pasahitza",'Load more "{options}""':"","Message limit of {count} characters reached":"Mezuaren {count} karaketere-limitera heldu zara","More items …":"Elementu gehiago …","More options":"",Next:"Hurrengoa","No emoji found":"Ez da emojirik aurkitu","No link provider found":"","No results":"Emaitzarik ez",Objects:"Objektuak","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Ireki nabigazioa","Open settings menu":"","Password is secure":"Pasahitza segurua da","Pause slideshow":"Pausatu diaporama","People & Body":"Jendea eta gorputza","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Hautatu emoji bat","Please select a time zone:":"Mesedez hautatu ordu-zona bat:",Previous:"Aurrekoa","Provider icon":"","Raw link {options}":"","Related resources":"Erlazionatutako baliabideak",Search:"Bilatu","Search emoji":"","Search results":"Bilaketa emaitzak","sec. ago":"","seconds ago":"","Select a tag":"Hautatu etiketa bat","Select provider":"",Settings:"Ezarpenak","Settings navigation":"Nabigazio ezarpenak","Show password":"Erakutsi pasahitza","Smart Picker":"","Smileys & Emotion":"Smileyak eta emozioa","Start slideshow":"Hasi diaporama","Start typing to search":"",Submit:"Bidali",Symbols:"Sinboloak","Travel & Places":"Bidaiak eta lekuak","Type to search time zone":"Idatzi ordu-zona bat bilatzeko","Unable to search the group":"Ezin izan da taldea bilatu","Undo changes":"Aldaketak desegin",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Idatzi mezua, erabili "@" norbait aipatzeko, erabili ":" emojiak automatikoki osatzeko...'}},{locale:"fa",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"fi",translations:{"{tag} (invisible)":"{tag} (näkymätön)","{tag} (restricted)":"{tag} (rajoitettu)","a few seconds ago":"",Actions:"Toiminnot",'Actions for item with name "{name}"':"",Activities:"Aktiviteetit","Animals & Nature":"Eläimet & luonto","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Käyttäjän {displayName} avatar","Avatar of {displayName}, {status}":"Käyttäjän {displayName} avatar, {status}",Back:"","Back to provider selection":"","Cancel changes":"Peruuta muutokset","Change name":"",Choose:"Valitse","Clear search":"","Clear text":"",Close:"Sulje","Close modal":"","Close navigation":"Sulje navigaatio","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Vahvista muutokset",Custom:"Mukautettu","Edit item":"Muokkaa kohdetta","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Liput","Food & Drink":"Ruoka & juoma","Frequently used":"Usein käytetyt",Global:"Yleinen","Go back to the list":"Siirry takaisin listaan","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Viestin merkken enimmäisimäärä {count} täynnä ","More items …":"","More options":"",Next:"Seuraava","No emoji found":"Emojia ei löytynyt","No link provider found":"","No results":"Ei tuloksia",Objects:"Esineet & asiat","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Avaa navigaatio","Open settings menu":"","Password is secure":"","Pause slideshow":"Keskeytä diaesitys","People & Body":"Ihmiset & keho","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Valitse emoji","Please select a time zone:":"Valitse aikavyöhyke:",Previous:"Edellinen","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Etsi","Search emoji":"","Search results":"Hakutulokset","sec. ago":"","seconds ago":"","Select a tag":"Valitse tagi","Select provider":"",Settings:"Asetukset","Settings navigation":"Asetusnavigaatio","Show password":"","Smart Picker":"","Smileys & Emotion":"Hymiöt & tunteet","Start slideshow":"Aloita diaesitys","Start typing to search":"",Submit:"Lähetä",Symbols:"Symbolit","Travel & Places":"Matkustus & kohteet","Type to search time zone":"Kirjoita etsiäksesi aikavyöhyke","Unable to search the group":"Ryhmää ei voi hakea","Undo changes":"Kumoa muutokset",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"fo",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"fr",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (restreint)","a few seconds ago":"il y a quelques instants",Actions:"Actions",'Actions for item with name "{name}"':"",Activities:"Activités","Animals & Nature":"Animaux & Nature","Any link":"","Anything shared with the same group of people will show up here":"Tout ce qui est partagé avec le même groupe de personnes apparaîtra ici","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"Retour","Back to provider selection":"","Cancel changes":"Annuler les modifications","Change name":"Modifier le nom",Choose:"Choisir","Clear search":"Effacer la recherche","Clear text":"Effacer le texte",Close:"Fermer","Close modal":"Fermer la fenêtre","Close navigation":"Fermer la navigation","Close sidebar":"Fermer la barre latérale","Close Smart Picker":"","Collapse menu":"Réduire le menu","Confirm changes":"Confirmer les modifications",Custom:"Personnalisé","Edit item":"Éditer l'élément","Enter link":"Saisissez le lien","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"Documentation externe pour {name}",Favorite:"Favori",Flags:"Drapeaux","Food & Drink":"Nourriture & Boissons","Frequently used":"Utilisés fréquemment",Global:"Global","Go back to the list":"Retourner à la liste","Hide password":"Cacher le mot de passe",'Load more "{options}""':"","Message limit of {count} characters reached":"Limite de messages de {count} caractères atteinte","More items …":"Plus d'éléments...","More options":"Plus d'options",Next:"Suivant","No emoji found":"Pas d’émoji trouvé","No link provider found":"","No results":"Aucun résultat",Objects:"Objets","Open contact menu":"Ouvrir le menu Contact",'Open link to "{resourceName}"':"","Open menu":"Ouvrir le menu","Open navigation":"Ouvrir la navigation","Open settings menu":"Ouvrir le menu Paramètres","Password is secure":"Le mot de passe est sécurisé","Pause slideshow":"Mettre le diaporama en pause","People & Body":"Personnes & Corps","Pick a date":"Sélectionner une date","Pick a date and a time":"Sélectionner une date et une heure","Pick a month":"Sélectionner un mois","Pick a time":"Sélectionner une heure","Pick a week":"Sélectionner une semaine","Pick a year":"Sélectionner une année","Pick an emoji":"Choisissez un émoji","Please select a time zone:":"Sélectionnez un fuseau horaire : ",Previous:"Précédent","Provider icon":"","Raw link {options}":"","Related resources":"Ressources liées",Search:"Chercher","Search emoji":"Rechercher un emoji","Search results":"Résultats de recherche","sec. ago":"","seconds ago":"","Select a tag":"Sélectionnez une balise","Select provider":"",Settings:"Paramètres","Settings navigation":"Navigation dans les paramètres","Show password":"Afficher le mot de passe","Smart Picker":"","Smileys & Emotion":"Smileys & Émotions","Start slideshow":"Démarrer le diaporama","Start typing to search":"",Submit:"Valider",Symbols:"Symboles","Travel & Places":"Voyage & Lieux","Type to search time zone":"Saisissez les premiers lettres pour rechercher un fuseau horaire","Unable to search the group":"Impossible de chercher le groupe","Undo changes":"Annuler les changements",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Écrire un message, utiliser "@" pour mentionner une personne, ":" pour l\'autocomplétion des émojis...'}},{locale:"gd",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"gl",translations:{"{tag} (invisible)":"{tag} (invisíbel)","{tag} (restricted)":"{tag} (restrinxido)","a few seconds ago":"",Actions:"Accións",'Actions for item with name "{name}"':"",Activities:"Actividades","Animals & Nature":"Animais e natureza","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"Cancelar os cambios","Change name":"",Choose:"Escoller","Clear search":"","Clear text":"",Close:"Pechar","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Confirma os cambios",Custom:"Personalizado","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Bandeiras","Food & Drink":"Comida e bebida","Frequently used":"Usado con frecuencia",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Acadouse o límite de {count} caracteres por mensaxe","More items …":"","More options":"",Next:"Seguinte","No emoji found":"Non se atopou ningún «emoji»","No link provider found":"","No results":"Sen resultados",Objects:"Obxectos","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Pausar o diaporama","People & Body":"Persoas e corpo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Escolla un «emoji»","Please select a time zone:":"",Previous:"Anterir","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Buscar","Search emoji":"","Search results":"Resultados da busca","sec. ago":"","seconds ago":"","Select a tag":"Seleccione unha etiqueta","Select provider":"",Settings:"Axustes","Settings navigation":"Navegación polos axustes","Show password":"","Smart Picker":"","Smileys & Emotion":"Sorrisos e emocións","Start slideshow":"Iniciar o diaporama","Start typing to search":"",Submit:"Enviar",Symbols:"Símbolos","Travel & Places":"Viaxes e lugares","Type to search time zone":"","Unable to search the group":"Non foi posíbel buscar o grupo","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"he",translations:{"{tag} (invisible)":"{tag} (נסתר)","{tag} (restricted)":"{tag} (מוגבל)","a few seconds ago":"לפני מספר שניות",Actions:"פעולות",'Actions for item with name "{name}"':"פעולות לפריט בשם „{name}”",Activities:"פעילויות","Animals & Nature":"חיות וטבע","Any link":"קישור כלשהו","Anything shared with the same group of people will show up here":"כל מה שמשותף עם אותה קבוצת האנשים יופיע כאן","Avatar of {displayName}":"תמונה ייצוגית של {displayName}","Avatar of {displayName}, {status}":"תמונה ייצוגית של {displayName}, {status}",Back:"חזרה","Back to provider selection":"חזרה לבחירת ספק","Cancel changes":"ביטול שינויים","Change name":"החלפת שם",Choose:"בחירה","Clear search":"פינוי חיפוש","Clear text":"פינוי טקסט",Close:"סגירה","Close modal":"סגירת החלונית","Close navigation":"סגירת הניווט","Close sidebar":"סגירת סרגל הצד","Close Smart Picker":"סגירת הבורר החכם","Collapse menu":"צמצום התפריט","Confirm changes":"אישור השינויים",Custom:"בהתאמה אישית","Edit item":"עריכת פריט","Enter link":"מילוי קישור","Error getting related resources. Please contact your system administrator if you have any questions.":"שגיאה בקבלת המשאבים הקשורים. נא ליצור קשר עם הנהלת המערכת אם יש לך שאלות.","External documentation for {name}":"תיעוד חיצוני עבור {name}",Favorite:"למועדפים",Flags:"דגלים","Food & Drink":"מזון ומשקאות","Frequently used":"בשימוש תדיר",Global:"כללי","Go back to the list":"חזרה לרשימה","Hide password":"הסתרת סיסמה",'Load more "{options}""':"טעינת „{options}” נוספות","Message limit of {count} characters reached":"הגעת למגבלה של {count} תווים","More items …":"פריטים נוספים…","More options":"אפשרויות נוספות",Next:"הבא","No emoji found":"לא נמצא אמוג׳י","No link provider found":"לא נמצא ספק קישורים","No results":"אין תוצאות",Objects:"חפצים","Open contact menu":"פתיחת תפריט קשר",'Open link to "{resourceName}"':"פתיחת קישור אל „{resourceName}”","Open menu":"פתיחת תפריט","Open navigation":"פתיחת ניווט","Open settings menu":"פתיחת תפריט הגדרות","Password is secure":"הסיסמה מאובטחת","Pause slideshow":"השהיית מצגת","People & Body":"אנשים וגוף","Pick a date":"נא לבחור תאריך","Pick a date and a time":"נא לבחור תאריך ושעה","Pick a month":"נא לבחור חודש","Pick a time":"נא לבחור שעה","Pick a week":"נא לבחור שבוע","Pick a year":"נא לבחור שנה","Pick an emoji":"נא לבחור אמוג׳י","Please select a time zone:":"נא לבחור אזור זמן:",Previous:"הקודם","Provider icon":"סמל ספק","Raw link {options}":"קישור גולמי {options}","Related resources":"משאבים קשורים",Search:"חיפוש","Search emoji":"חיפוש אמוג׳י","Search results":"תוצאות חיפוש","sec. ago":"לפני מספר שניות","seconds ago":"לפני מס׳ שניות","Select a tag":"בחירת תגית","Select provider":"בחירת ספק",Settings:"הגדרות","Settings navigation":"ניווט בהגדרות","Show password":"הצגת סיסמה","Smart Picker":"בורר חכם","Smileys & Emotion":"חייכנים ורגשונים","Start slideshow":"התחלת המצגת","Start typing to search":"התחלת הקלדה מחפשת",Submit:"הגשה",Symbols:"סמלים","Travel & Places":"טיולים ומקומות","Type to search time zone":"יש להקליד כדי לחפש אזור זמן","Unable to search the group":"לא ניתן לחפש בקבוצה","Undo changes":"ביטול שינויים",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"כאן ניתן לכתוב הודעה, אפשר להשתמש ב־„@” כדי לאזכר מישהו, ב־„:” להשלמה אוטומטית של אמוג׳י…"}},{locale:"hi_IN",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"hr",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"hsb",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"hu",translations:{"{tag} (invisible)":"{tag} (láthatatlan)","{tag} (restricted)":"{tag} (korlátozott)","a few seconds ago":"",Actions:"Műveletek",'Actions for item with name "{name}"':"",Activities:"Tevékenységek","Animals & Nature":"Állatok és természet","Any link":"","Anything shared with the same group of people will show up here":"Minden, amit ugyanazzal a csoporttal oszt meg, itt fog megjelenni","Avatar of {displayName}":"{displayName} profilképe","Avatar of {displayName}, {status}":"{displayName} profilképe, {status}",Back:"","Back to provider selection":"","Cancel changes":"Változtatások elvetése","Change name":"",Choose:"Válassszon","Clear search":"","Clear text":"Szöveg törlése",Close:"Bezárás","Close modal":"Ablak bezárása","Close navigation":"Navigáció bezárása","Close sidebar":"Oldalsáv bezárása","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Változtatások megerősítése",Custom:"Egyéni","Edit item":"Elem szerkesztése","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Kedvenc",Flags:"Zászlók","Food & Drink":"Étel és ital","Frequently used":"Gyakran használt",Global:"Globális","Go back to the list":"Ugrás vissza a listához","Hide password":"Jelszó elrejtése",'Load more "{options}""':"","Message limit of {count} characters reached":"{count} karakteres üzenetkorlát elérve","More items …":"További elemek...","More options":"",Next:"Következő","No emoji found":"Nem található emodzsi","No link provider found":"","No results":"Nincs találat",Objects:"Tárgyak","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Navigáció megnyitása","Open settings menu":"","Password is secure":"A jelszó biztonságos","Pause slideshow":"Diavetítés szüneteltetése","People & Body":"Emberek és test","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Válasszon egy emodzsit","Please select a time zone:":"Válasszon időzónát:",Previous:"Előző","Provider icon":"","Raw link {options}":"","Related resources":"Kapcsolódó erőforrások",Search:"Keresés","Search emoji":"","Search results":"Találatok","sec. ago":"","seconds ago":"","Select a tag":"Válasszon címkét","Select provider":"",Settings:"Beállítások","Settings navigation":"Navigáció a beállításokban","Show password":"Jelszó megjelenítése","Smart Picker":"","Smileys & Emotion":"Mosolyok és érzelmek","Start slideshow":"Diavetítés indítása","Start typing to search":"",Submit:"Beküldés",Symbols:"Szimbólumok","Travel & Places":"Utazás és helyek","Type to search time zone":"Gépeljen az időzóna kereséséhez","Unable to search the group":"A csoport nem kereshető","Undo changes":"Változtatások visszavonása",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':"Írjon egy üzenetet, használja a „@”-ot valaki megemlítéséhet, illetve a „:”-ot az emodzsik automatikus kiegészítéséhez…"}},{locale:"hy",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ia",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"id",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ig",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"is",translations:{"{tag} (invisible)":"{tag} (ósýnilegt)","{tag} (restricted)":"{tag} (takmarkað)","a few seconds ago":"",Actions:"Aðgerðir",'Actions for item with name "{name}"':"",Activities:"Aðgerðir","Animals & Nature":"Dýr og náttúra","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Velja","Clear search":"","Clear text":"",Close:"Loka","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"Sérsniðið","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Flögg","Food & Drink":"Matur og drykkur","Frequently used":"Oftast notað",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"Næsta","No emoji found":"Ekkert tjáningartákn fannst","No link provider found":"","No results":"Engar niðurstöður",Objects:"Hlutir","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Gera hlé á skyggnusýningu","People & Body":"Fólk og líkami","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Veldu tjáningartákn","Please select a time zone:":"",Previous:"Fyrri","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Leita","Search emoji":"","Search results":"Leitarniðurstöður","sec. ago":"","seconds ago":"","Select a tag":"Veldu merki","Select provider":"",Settings:"Stillingar","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"Broskallar og tilfinningar","Start slideshow":"Byrja skyggnusýningu","Start typing to search":"",Submit:"",Symbols:"Tákn","Travel & Places":"Staðir og ferðalög","Type to search time zone":"","Unable to search the group":"Get ekki leitað í hópnum","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"it",translations:{"{tag} (invisible)":"{tag} (invisibile)","{tag} (restricted)":"{tag} (limitato)","a few seconds ago":"",Actions:"Azioni",'Actions for item with name "{name}"':"",Activities:"Attività","Animals & Nature":"Animali e natura","Any link":"","Anything shared with the same group of people will show up here":"Tutto ciò che è stato condiviso con lo stesso gruppo di persone viene visualizzato qui","Avatar of {displayName}":"Avatar di {displayName}","Avatar of {displayName}, {status}":"Avatar di {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Annulla modifiche","Change name":"",Choose:"Scegli","Clear search":"","Clear text":"Cancella il testo",Close:"Chiudi","Close modal":"Chiudi il messaggio modale","Close navigation":"Chiudi la navigazione","Close sidebar":"Chiudi la barra laterale","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Conferma modifiche",Custom:"Personalizzato","Edit item":"Modifica l'elemento","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Preferito",Flags:"Bandiere","Food & Drink":"Cibo e bevande","Frequently used":"Usati di frequente",Global:"Globale","Go back to the list":"Torna all'elenco","Hide password":"Nascondi la password",'Load more "{options}""':"","Message limit of {count} characters reached":"Limite dei messaggi di {count} caratteri raggiunto","More items …":"Più elementi ...","More options":"",Next:"Successivo","No emoji found":"Nessun emoji trovato","No link provider found":"","No results":"Nessun risultato",Objects:"Oggetti","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Apri la navigazione","Open settings menu":"","Password is secure":"La password è sicura","Pause slideshow":"Presentazione in pausa","People & Body":"Persone e corpo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Scegli un emoji","Please select a time zone:":"Si prega di selezionare un fuso orario:",Previous:"Precedente","Provider icon":"","Raw link {options}":"","Related resources":"Risorse correlate",Search:"Cerca","Search emoji":"","Search results":"Risultati di ricerca","sec. ago":"","seconds ago":"","Select a tag":"Seleziona un'etichetta","Select provider":"",Settings:"Impostazioni","Settings navigation":"Navigazione delle impostazioni","Show password":"Mostra la password","Smart Picker":"","Smileys & Emotion":"Faccine ed emozioni","Start slideshow":"Avvia presentazione","Start typing to search":"",Submit:"Invia",Symbols:"Simboli","Travel & Places":"Viaggi e luoghi","Type to search time zone":"Digita per cercare un fuso orario","Unable to search the group":"Impossibile cercare il gruppo","Undo changes":"Cancella i cambiamenti",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrivi un messaggio, "@" per menzionare qualcuno, ":" per il completamento automatico delle emoji ...'}},{locale:"ja",translations:{"{tag} (invisible)":"{タグ} (不可視)","{tag} (restricted)":"{タグ} (制限付)","a few seconds ago":"",Actions:"操作",'Actions for item with name "{name}"':"",Activities:"アクティビティ","Animals & Nature":"動物と自然","Any link":"","Anything shared with the same group of people will show up here":"同じグループで共有しているものは、全てここに表示されます","Avatar of {displayName}":"{displayName} のアバター","Avatar of {displayName}, {status}":"{displayName}, {status} のアバター",Back:"","Back to provider selection":"","Cancel changes":"変更をキャンセル","Change name":"",Choose:"選択","Clear search":"","Clear text":"テキストをクリア",Close:"閉じる","Close modal":"モーダルを閉じる","Close navigation":"ナビゲーションを閉じる","Close sidebar":"サイドバーを閉じる","Close Smart Picker":"","Collapse menu":"","Confirm changes":"変更を承認",Custom:"カスタム","Edit item":"編集","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"お気に入り",Flags:"国旗","Food & Drink":"食べ物と飲み物","Frequently used":"よく使うもの",Global:"全体","Go back to the list":"リストに戻る","Hide password":"パスワードを非表示",'Load more "{options}""':"","Message limit of {count} characters reached":"{count} 文字のメッセージ上限に達しています","More items …":"他のアイテム","More options":"",Next:"次","No emoji found":"絵文字が見つかりません","No link provider found":"","No results":"なし",Objects:"物","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"ナビゲーションを開く","Open settings menu":"","Password is secure":"パスワードは保護されています","Pause slideshow":"スライドショーを一時停止","People & Body":"様々な人と体の部位","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"絵文字を選択","Please select a time zone:":"タイムゾーンを選んで下さい：",Previous:"前","Provider icon":"","Raw link {options}":"","Related resources":"関連リソース",Search:"検索","Search emoji":"","Search results":"検索結果","sec. ago":"","seconds ago":"","Select a tag":"タグを選択","Select provider":"",Settings:"設定","Settings navigation":"ナビゲーション設定","Show password":"パスワードを表示","Smart Picker":"","Smileys & Emotion":"感情表現","Start slideshow":"スライドショーを開始","Start typing to search":"",Submit:"提出",Symbols:"記号","Travel & Places":"旅行と場所","Type to search time zone":"タイムゾーン検索のため入力してください","Unable to search the group":"グループを検索できません","Undo changes":"変更を取り消し",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'メッセージを記入、"@"でメンション、"："で絵文字の自動補完 ...'}},{locale:"ka",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ka_GE",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"kab",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"kk",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"km",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"kn",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ko",translations:{"{tag} (invisible)":"{tag}(숨김)","{tag} (restricted)":"{tag}(제한)","a few seconds ago":"방금 전",Actions:"",'Actions for item with name "{name}"':"",Activities:"활동","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"la",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"lb",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"lo",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"lt_LT",translations:{"{tag} (invisible)":"{tag} (nematoma)","{tag} (restricted)":"{tag} (apribota)","a few seconds ago":"",Actions:"Veiksmai",'Actions for item with name "{name}"':"",Activities:"Veiklos","Animals & Nature":"Gyvūnai ir gamta","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Pasirinkti","Clear search":"","Clear text":"",Close:"Užverti","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"Tinkinti","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Vėliavos","Food & Drink":"Maistas ir gėrimai","Frequently used":"Dažniausiai naudoti",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Pasiekta {count} simbolių žinutės riba","More items …":"","More options":"",Next:"Kitas","No emoji found":"Nerasta jaustukų","No link provider found":"","No results":"Nėra rezultatų",Objects:"Objektai","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Pristabdyti skaidrių rodymą","People & Body":"Žmonės ir kūnas","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Pasirinkti jaustuką","Please select a time zone:":"",Previous:"Ankstesnis","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Ieškoti","Search emoji":"","Search results":"Paieškos rezultatai","sec. ago":"","seconds ago":"","Select a tag":"Pasirinkti žymę","Select provider":"",Settings:"Nustatymai","Settings navigation":"Naršymas nustatymuose","Show password":"","Smart Picker":"","Smileys & Emotion":"Šypsenos ir emocijos","Start slideshow":"Pradėti skaidrių rodymą","Start typing to search":"",Submit:"Pateikti",Symbols:"Simboliai","Travel & Places":"Kelionės ir vietos","Type to search time zone":"","Unable to search the group":"Nepavyko atlikti paiešką grupėje","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"lv",translations:{"{tag} (invisible)":"{tag} (neredzams)","{tag} (restricted)":"{tag} (ierobežots)","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Izvēlēties","Clear search":"","Clear text":"",Close:"Aizvērt","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"Nākamais","No emoji found":"","No link provider found":"","No results":"Nav rezultātu",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Pauzēt slaidrādi","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"Iepriekšējais","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"Izvēlēties birku","Select provider":"",Settings:"Iestatījumi","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"Sākt slaidrādi","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"mk",translations:{"{tag} (invisible)":"{tag} (невидливо)","{tag} (restricted)":"{tag} (ограничено)","a few seconds ago":"",Actions:"Акции",'Actions for item with name "{name}"':"",Activities:"Активности","Animals & Nature":"Животни & Природа","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Аватар на {displayName}","Avatar of {displayName}, {status}":"Аватар на {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Откажи ги промените","Change name":"",Choose:"Избери","Clear search":"","Clear text":"",Close:"Затвори","Close modal":"Затвори модал","Close navigation":"Затвори навигација","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Потврди ги промените",Custom:"Прилагодени","Edit item":"Уреди","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Фаворити",Flags:"Знамиња","Food & Drink":"Храна & Пијалоци","Frequently used":"Најчесто користени",Global:"Глобално","Go back to the list":"Врати се на листата","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Ограничувањето на должината на пораката од {count} карактери е надминато","More items …":"","More options":"",Next:"Следно","No emoji found":"Не се пронајдени емотикони","No link provider found":"","No results":"Нема резултати",Objects:"Објекти","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Отвори навигација","Open settings menu":"","Password is secure":"","Pause slideshow":"Пузирај слајдшоу","People & Body":"Луѓе & Тело","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Избери емотикон","Please select a time zone:":"Изберете временска зона:",Previous:"Предходно","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Барај","Search emoji":"","Search results":"Резултати од барувањето","sec. ago":"","seconds ago":"","Select a tag":"Избери ознака","Select provider":"",Settings:"Параметри","Settings navigation":"Параметри за навигација","Show password":"","Smart Picker":"","Smileys & Emotion":"Смешковци & Емотикони","Start slideshow":"Стартувај слајдшоу","Start typing to search":"",Submit:"Испрати",Symbols:"Симболи","Travel & Places":"Патувања & Места","Type to search time zone":"Напишете за да пребарате временска зона","Unable to search the group":"Неможе да се принајде групата","Undo changes":"Врати ги промените",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"mn",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"mr",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ms_MY",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"my",translations:{"{tag} (invisible)":"{tag} (ကွယ်ဝှက်ထား)","{tag} (restricted)":"{tag} (ကန့်သတ်)","a few seconds ago":"",Actions:"လုပ်ဆောင်ချက်များ",'Actions for item with name "{name}"':"",Activities:"ပြုလုပ်ဆောင်တာများ","Animals & Nature":"တိရစ္ဆာန်များနှင့် သဘာဝ","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"{displayName} ၏ ကိုယ်ပွား","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်","Change name":"",Choose:"ရွေးချယ်ရန်","Clear search":"","Clear text":"",Close:"ပိတ်ရန်","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"ပြောင်းလဲမှုများ အတည်ပြုရန်",Custom:"အလိုကျချိန်ညှိမှု","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"အလံများ","Food & Drink":"အစားအသောက်","Frequently used":"မကြာခဏအသုံးပြုသော",Global:"ကမ္ဘာလုံးဆိုင်ရာ","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"ကန့်သတ် စာလုံးရေ {count} လုံး ပြည့်ပါပြီ","More items …":"","More options":"",Next:"နောက်သို့ဆက်ရန်","No emoji found":"အီမိုဂျီ ရှာဖွေမတွေ့နိုင်ပါ","No link provider found":"","No results":"ရလဒ်မရှိပါ",Objects:"အရာဝတ္ထုများ","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"စလိုက်ရှိုး ခေတ္တရပ်ရန်","People & Body":"လူပုဂ္ဂိုလ်များနှင့် ခန္ဓာကိုယ်","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"အီမိုဂျီရွေးရန်","Please select a time zone:":"ဒေသစံတော်ချိန် ရွေးချယ်ပေးပါ",Previous:"ယခင်","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"ရှာဖွေရန်","Search emoji":"","Search results":"ရှာဖွေမှု ရလဒ်များ","sec. ago":"","seconds ago":"","Select a tag":"tag ရွေးချယ်ရန်","Select provider":"",Settings:"ချိန်ညှိချက်များ","Settings navigation":"ချိန်ညှိချက်အညွှန်း","Show password":"","Smart Picker":"","Smileys & Emotion":"စမိုင်လီများနှင့် အီမိုရှင်း","Start slideshow":"စလိုက်ရှိုးအား စတင်ရန်","Start typing to search":"",Submit:"တင်သွင်းရန်",Symbols:"သင်္ကေတများ","Travel & Places":"ခရီးသွားလာခြင်းနှင့် နေရာများ","Type to search time zone":"ဒေသစံတော်ချိန်များ ရှာဖွေရန် စာရိုက်ပါ","Unable to search the group":"အဖွဲ့အား ရှာဖွေ၍ မရနိုင်ပါ","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"nb",translations:{"{tag} (invisible)":"{tag} (usynlig)","{tag} (restricted)":"{tag} (beskyttet)","a few seconds ago":"",Actions:"Handlinger",'Actions for item with name "{name}"':"",Activities:"Aktiviteter","Animals & Nature":"Dyr og natur","Any link":"","Anything shared with the same group of people will show up here":"Alt som er delt med den samme gruppen vil vises her","Avatar of {displayName}":"Avataren til {displayName}","Avatar of {displayName}, {status}":"{displayName}'s avatar, {status}",Back:"","Back to provider selection":"","Cancel changes":"Avbryt endringer","Change name":"",Choose:"Velg","Clear search":"","Clear text":"Fjern tekst",Close:"Lukk","Close modal":"Lukk modal","Close navigation":"Lukk navigasjon","Close sidebar":"Lukk sidepanel","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Bekreft endringer",Custom:"Tilpasset","Edit item":"Rediger","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favoritt",Flags:"Flagg","Food & Drink":"Mat og drikke","Frequently used":"Ofte brukt",Global:"Global","Go back to the list":"Gå tilbake til listen","Hide password":"Skjul passord",'Load more "{options}""':"","Message limit of {count} characters reached":"Karakter begrensing {count} nådd i melding","More items …":"Flere gjenstander...","More options":"",Next:"Neste","No emoji found":"Fant ingen emoji","No link provider found":"","No results":"Ingen resultater",Objects:"Objekter","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Åpne navigasjon","Open settings menu":"","Password is secure":"Passordet er sikkert","Pause slideshow":"Pause lysbildefremvisning","People & Body":"Mennesker og kropp","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Velg en emoji","Please select a time zone:":"Vennligst velg tidssone",Previous:"Forrige","Provider icon":"","Raw link {options}":"","Related resources":"Relaterte ressurser",Search:"Søk","Search emoji":"","Search results":"Søkeresultater","sec. ago":"","seconds ago":"","Select a tag":"Velg en merkelapp","Select provider":"",Settings:"Innstillinger","Settings navigation":"Navigasjonsinstillinger","Show password":"Vis passord","Smart Picker":"","Smileys & Emotion":"Smilefjes og følelser","Start slideshow":"Start lysbildefremvisning","Start typing to search":"",Submit:"Send",Symbols:"Symboler","Travel & Places":"Reise og steder","Type to search time zone":"Tast for å søke etter tidssone","Unable to search the group":"Kunne ikke søke i gruppen","Undo changes":"Tilbakestill endringer",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv melding, bruk "@" for å nevne noen, bruk ":" for autofullføring av emoji...'}},{locale:"ne",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"nl",translations:{"{tag} (invisible)":"{tag} (onzichtbaar)","{tag} (restricted)":"{tag} (beperkt)","a few seconds ago":"",Actions:"Acties",'Actions for item with name "{name}"':"",Activities:"Activiteiten","Animals & Nature":"Dieren & Natuur","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Avatar van {displayName}","Avatar of {displayName}, {status}":"Avatar van {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Wijzigingen annuleren","Change name":"",Choose:"Kies","Clear search":"","Clear text":"",Close:"Sluiten","Close modal":"","Close navigation":"Navigatie sluiten","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Wijzigingen bevestigen",Custom:"Aangepast","Edit item":"Item bewerken","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Vlaggen","Food & Drink":"Eten & Drinken","Frequently used":"Vaak gebruikt",Global:"Globaal","Go back to the list":"Ga terug naar de lijst","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Berichtlimiet van {count} karakters bereikt","More items …":"","More options":"",Next:"Volgende","No emoji found":"Geen emoji gevonden","No link provider found":"","No results":"Geen resultaten",Objects:"Objecten","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Navigatie openen","Open settings menu":"","Password is secure":"","Pause slideshow":"Pauzeer diavoorstelling","People & Body":"Mensen & Lichaam","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Kies een emoji","Please select a time zone:":"Selecteer een tijdzone:",Previous:"Vorige","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Zoeken","Search emoji":"","Search results":"Zoekresultaten","sec. ago":"","seconds ago":"","Select a tag":"Selecteer een label","Select provider":"",Settings:"Instellingen","Settings navigation":"Instellingen navigatie","Show password":"","Smart Picker":"","Smileys & Emotion":"Smileys & Emotie","Start slideshow":"Start diavoorstelling","Start typing to search":"",Submit:"Verwerken",Symbols:"Symbolen","Travel & Places":"Reizen & Plaatsen","Type to search time zone":"Type om de tijdzone te zoeken","Unable to search the group":"Kan niet in de groep zoeken","Undo changes":"Wijzigingen ongedaan maken",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"nn_NO",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"oc",translations:{"{tag} (invisible)":"{tag} (invisible)","{tag} (restricted)":"{tag} (limit)","a few seconds ago":"",Actions:"Accions",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"Causir","Clear search":"","Clear text":"",Close:"Tampar","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"Seguent","No emoji found":"","No link provider found":"","No results":"Cap de resultat",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"Metre en pausa lo diaporama","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"Precedent","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"Seleccionar una etiqueta","Select provider":"",Settings:"Paramètres","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"Lançar lo diaporama","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"pl",translations:{"{tag} (invisible)":"{tag} (niewidoczna)","{tag} (restricted)":"{tag} (ograniczona)","a few seconds ago":"",Actions:"Działania",'Actions for item with name "{name}"':"",Activities:"Aktywność","Animals & Nature":"Zwierzęta i natura","Any link":"","Anything shared with the same group of people will show up here":"Tutaj pojawi się wszystko, co zostało udostępnione tej samej grupie osób","Avatar of {displayName}":"Awatar {displayName}","Avatar of {displayName}, {status}":"Awatar {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Anuluj zmiany","Change name":"",Choose:"Wybierz","Clear search":"","Clear text":"Wyczyść tekst",Close:"Zamknij","Close modal":"Zamknij modal","Close navigation":"Zamknij nawigację","Close sidebar":"Zamknij pasek boczny","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Potwierdź zmiany",Custom:"Zwyczajne","Edit item":"Edytuj element","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Ulubiony",Flags:"Flagi","Food & Drink":"Jedzenie i picie","Frequently used":"Często używane",Global:"Globalnie","Go back to the list":"Powrót do listy","Hide password":"Ukryj hasło",'Load more "{options}""':"","Message limit of {count} characters reached":"Przekroczono limit wiadomości wynoszący {count} znaków","More items …":"Więcej pozycji…","More options":"",Next:"Następny","No emoji found":"Nie znaleziono emoji","No link provider found":"","No results":"Brak wyników",Objects:"Obiekty","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Otwórz nawigację","Open settings menu":"","Password is secure":"Hasło jest bezpieczne","Pause slideshow":"Wstrzymaj pokaz slajdów","People & Body":"Ludzie i ciało","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Wybierz emoji","Please select a time zone:":"Wybierz strefę czasową:",Previous:"Poprzedni","Provider icon":"","Raw link {options}":"","Related resources":"Powiązane zasoby",Search:"Szukaj","Search emoji":"","Search results":"Wyniki wyszukiwania","sec. ago":"","seconds ago":"","Select a tag":"Wybierz etykietę","Select provider":"",Settings:"Ustawienia","Settings navigation":"Ustawienia nawigacji","Show password":"Pokaż hasło","Smart Picker":"","Smileys & Emotion":"Buźki i emotikony","Start slideshow":"Rozpocznij pokaz slajdów","Start typing to search":"",Submit:"Wyślij",Symbols:"Symbole","Travel & Places":"Podróże i miejsca","Type to search time zone":"Wpisz, aby wyszukać strefę czasową","Unable to search the group":"Nie można przeszukać grupy","Undo changes":"Cofnij zmiany",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Napisz wiadomość, "@" aby o kimś wspomnieć, ":" dla autouzupełniania emoji…'}},{locale:"ps",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"pt_BR",translations:{"{tag} (invisible)":"{tag} (invisível)","{tag} (restricted)":"{tag} (restrito) ","a few seconds ago":"",Actions:"Ações",'Actions for item with name "{name}"':"",Activities:"Atividades","Animals & Nature":"Animais & Natureza","Any link":"","Anything shared with the same group of people will show up here":"Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Cancelar alterações","Change name":"",Choose:"Escolher","Clear search":"","Clear text":"Limpar texto",Close:"Fechar","Close modal":"Fechar modal","Close navigation":"Fechar navegação","Close sidebar":"Fechar barra lateral","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Confirmar alterações",Custom:"Personalizado","Edit item":"Editar item","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favorito",Flags:"Bandeiras","Food & Drink":"Comida & Bebida","Frequently used":"Mais usados",Global:"Global","Go back to the list":"Volte para a lista","Hide password":"Ocultar a senha",'Load more "{options}""':"","Message limit of {count} characters reached":"Limite de mensagem de {count} caracteres atingido","More items …":"Mais itens …","More options":"",Next:"Próximo","No emoji found":"Nenhum emoji encontrado","No link provider found":"","No results":"Sem resultados",Objects:"Objetos","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Abrir navegação","Open settings menu":"","Password is secure":"A senha é segura","Pause slideshow":"Pausar apresentação de slides","People & Body":"Pessoas & Corpo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Escolha um emoji","Please select a time zone:":"Selecione um fuso horário: ",Previous:"Anterior","Provider icon":"","Raw link {options}":"","Related resources":"Recursos relacionados",Search:"Pesquisar","Search emoji":"","Search results":"Resultados da pesquisa","sec. ago":"","seconds ago":"","Select a tag":"Selecionar uma tag","Select provider":"",Settings:"Configurações","Settings navigation":"Navegação de configurações","Show password":"Mostrar senha","Smart Picker":"","Smileys & Emotion":"Smiles & Emoções","Start slideshow":"Iniciar apresentação de slides","Start typing to search":"",Submit:"Enviar",Symbols:"Símbolo","Travel & Places":"Viagem & Lugares","Type to search time zone":"Digite para pesquisar o fuso horário ","Unable to search the group":"Não foi possível pesquisar o grupo","Undo changes":"Desfazer modificações",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escreva mensagens, use "@" para mencionar algum, use ":" for autocompletar emoji …'}},{locale:"pt_PT",translations:{"{tag} (invisible)":"{tag} (invisivel)","{tag} (restricted)":"{tag} (restrito)","a few seconds ago":"alguns segundos atrás",Actions:"Ações",'Actions for item with name "{name}"':'Ações para objeto com o nome "[name]"',Activities:"Atividades","Animals & Nature":"Animais e Natureza","Any link":"Qualquer link","Anything shared with the same group of people will show up here":"Qualquer coisa compartilhada com o mesmo grupo de pessoas aparecerá aqui","Avatar of {displayName}":"Avatar de {displayName}","Avatar of {displayName}, {status}":"Avatar de {displayName}, {status}",Back:"Voltar atrás","Back to provider selection":"Voltar à seleção de fornecedor","Cancel changes":"Cancelar alterações","Change name":"Alterar nome",Choose:"Escolher","Clear search":"Limpar a pesquisa","Clear text":"Limpar texto",Close:"Fechar","Close modal":"Fechar modal","Close navigation":"Fechar navegação","Close sidebar":"Fechar barra lateral","Close Smart Picker":'Fechar "Smart Picker"',"Collapse menu":"Comprimir menu","Confirm changes":"Confirmar alterações",Custom:"Personalizado","Edit item":"Editar item","Enter link":"Introduzir link","Error getting related resources. Please contact your system administrator if you have any questions.":"Erro em obter info relacionadas. Por favor contacte o administrador do sistema para esclarecimentos adicionais.","External documentation for {name}":"Documentação externa para {name}",Favorite:"Favorito",Flags:"Bandeiras","Food & Drink":"Comida e Bebida","Frequently used":"Mais utilizados",Global:"Global","Go back to the list":"Voltar para a lista","Hide password":"Ocultar a senha",'Load more "{options}""':'Obter mais "{options}""',"Message limit of {count} characters reached":"Atingido o limite de {count} carateres da mensagem.","More items …":"Mais itens …","More options":"Mais opções",Next:"Seguinte","No emoji found":"Nenhum emoji encontrado","No link provider found":"Nenhum fornecedor de link encontrado","No results":"Sem resultados",Objects:"Objetos","Open contact menu":"Abrir o menu de contato",'Open link to "{resourceName}"':'Abrir link para "{resourceName}"',"Open menu":"Abrir menu","Open navigation":"Abrir navegação","Open settings menu":"Abrir menu de configurações","Password is secure":"A senha é segura","Pause slideshow":"Pausar diaporama","People & Body":"Pessoas e Corpo","Pick a date":"Escolha uma data","Pick a date and a time":"Escolha uma data e um horário","Pick a month":"Escolha um mês","Pick a time":"Escolha um horário","Pick a week":"Escolha uma semana","Pick a year":"Escolha um ano","Pick an emoji":"Escolha um emoji","Please select a time zone:":"Por favor, selecione um fuso horário: ",Previous:"Anterior","Provider icon":"Icon do fornecedor","Raw link {options}":"Link inicial {options}","Related resources":"Recursos relacionados",Search:"Pesquisar","Search emoji":"Pesquisar emoji","Search results":"Resultados da pesquisa","sec. ago":"seg. atrás","seconds ago":"segundos atrás","Select a tag":"Selecionar uma etiqueta","Select provider":"Escolha de fornecedor",Settings:"Definições","Settings navigation":"Navegação de configurações","Show password":"Mostrar senha","Smart Picker":"Smart Picker","Smileys & Emotion":"Sorrisos e Emoções","Start slideshow":"Iniciar diaporama","Start typing to search":"Comece a digitar para pesquisar",Submit:"Submeter",Symbols:"Símbolos","Travel & Places":"Viagem e Lugares","Type to search time zone":"Digite para pesquisar o fuso horário ","Unable to search the group":"Não é possível pesquisar o grupo","Undo changes":"Anular alterações",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Escreva a mensagem, use "@" para mencionar alguém, use ":" para obter um emoji …'}},{locale:"ro",translations:{"{tag} (invisible)":"{tag} (invizibil)","{tag} (restricted)":"{tag} (restricționat)","a few seconds ago":"",Actions:"Acțiuni",'Actions for item with name "{name}"':"",Activities:"Activități","Animals & Nature":"Animale și natură","Any link":"","Anything shared with the same group of people will show up here":"Tot ceea ce este partajat cu același grup de persoane va fi afișat aici","Avatar of {displayName}":"Avatarul lui {displayName}","Avatar of {displayName}, {status}":"Avatarul lui {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Anulează modificările","Change name":"",Choose:"Alegeți","Clear search":"","Clear text":"Șterge textul",Close:"Închideți","Close modal":"Închideți modulul","Close navigation":"Închideți navigarea","Close sidebar":"Închide bara laterală","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Confirmați modificările",Custom:"Personalizat","Edit item":"Editați elementul","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Favorit",Flags:"Marcaje","Food & Drink":"Alimente și băuturi","Frequently used":"Utilizate frecvent",Global:"Global","Go back to the list":"Întoarceți-vă la listă","Hide password":"Ascunde parola",'Load more "{options}""':"","Message limit of {count} characters reached":"Limita mesajului de {count} caractere a fost atinsă","More items …":"Mai multe articole ...","More options":"",Next:"Următorul","No emoji found":"Nu s-a găsit niciun emoji","No link provider found":"","No results":"Nu există rezultate",Objects:"Obiecte","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Deschideți navigația","Open settings menu":"","Password is secure":"Parola este sigură","Pause slideshow":"Pauză prezentare de diapozitive","People & Body":"Oameni și corp","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Alege un emoji","Please select a time zone:":"Vă rugăm să selectați un fus orar:",Previous:"Anterior","Provider icon":"","Raw link {options}":"","Related resources":"Resurse legate",Search:"Căutare","Search emoji":"","Search results":"Rezultatele căutării","sec. ago":"","seconds ago":"","Select a tag":"Selectați o etichetă","Select provider":"",Settings:"Setări","Settings navigation":"Navigare setări","Show password":"Arată parola","Smart Picker":"","Smileys & Emotion":"Zâmbete și emoții","Start slideshow":"Începeți prezentarea de diapozitive","Start typing to search":"",Submit:"Trimiteți",Symbols:"Simboluri","Travel & Places":"Călătorii și locuri","Type to search time zone":"Tastați pentru a căuta fusul orar","Unable to search the group":"Imposibilitatea de a căuta în grup","Undo changes":"Anularea modificărilor",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Scrie un mesaj, folosește "@" pentru a menționa pe cineva, folosește ":" pentru autocompletarea cu emoji ...'}},{locale:"ru",translations:{"{tag} (invisible)":"{tag} (невидимое)","{tag} (restricted)":"{tag} (ограниченное)","a few seconds ago":"",Actions:"Действия ",'Actions for item with name "{name}"':"",Activities:"События","Animals & Nature":"Животные и природа ","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Фотография {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Отменить изменения","Change name":"",Choose:"Выберите","Clear search":"","Clear text":"",Close:"Закрыть","Close modal":"Закрыть модальное окно","Close navigation":"Закрыть навигацию","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Подтвердить изменения",Custom:"Пользовательское","Edit item":"Изменить элемент","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Флаги","Food & Drink":"Еда, напиток","Frequently used":"Часто используемый",Global:"Глобальный","Go back to the list":"Вернуться к списку","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Достигнуто ограничение на количество символов в {count}","More items …":"","More options":"",Next:"Следующее","No emoji found":"Эмодзи не найдено","No link provider found":"","No results":"Результаты отсуствуют",Objects:"Объекты","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Открыть навигацию","Open settings menu":"","Password is secure":"","Pause slideshow":"Приостановить показ слйдов","People & Body":"Люди и тело","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Выберите эмодзи","Please select a time zone:":"Пожалуйста, выберите часовой пояс:",Previous:"Предыдущее","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Поиск","Search emoji":"","Search results":"Результаты поиска","sec. ago":"","seconds ago":"","Select a tag":"Выберите метку","Select provider":"",Settings:"Параметры","Settings navigation":"Навигация по настройкам","Show password":"","Smart Picker":"","Smileys & Emotion":"Смайлики и эмоции","Start slideshow":"Начать показ слайдов","Start typing to search":"",Submit:"Утвердить",Symbols:"Символы","Travel & Places":"Путешествия и места","Type to search time zone":"Введите для поиска часового пояса","Unable to search the group":"Невозможно найти группу","Undo changes":"Отменить изменения",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sc",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"si",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sk",translations:{"{tag} (invisible)":"{tag} (neviditeľný)","{tag} (restricted)":"{tag} (obmedzený)","a few seconds ago":"",Actions:"Akcie",'Actions for item with name "{name}"':"",Activities:"Aktivity","Animals & Nature":"Zvieratá a príroda","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Avatar {displayName}","Avatar of {displayName}, {status}":"Avatar {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Zrušiť zmeny","Change name":"",Choose:"Vybrať","Clear search":"","Clear text":"",Close:"Zatvoriť","Close modal":"","Close navigation":"Zavrieť navigáciu","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Potvrdiť zmeny",Custom:"Zvyk","Edit item":"Upraviť položku","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"Vlajky","Food & Drink":"Jedlo a nápoje","Frequently used":"Často používané",Global:"Globálne","Go back to the list":"Naspäť na zoznam","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Limit správy na {count} znakov dosiahnutý","More items …":"","More options":"",Next:"Ďalší","No emoji found":"Nenašli sa žiadne emodži","No link provider found":"","No results":"Žiadne výsledky",Objects:"Objekty","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Otvoriť navigáciu","Open settings menu":"","Password is secure":"","Pause slideshow":"Pozastaviť prezentáciu","People & Body":"Ľudia a telo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Vyberte si emodži","Please select a time zone:":"Prosím vyberte časovú zónu:",Previous:"Predchádzajúci","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Hľadať","Search emoji":"","Search results":"Výsledky vyhľadávania","sec. ago":"","seconds ago":"","Select a tag":"Vybrať štítok","Select provider":"",Settings:"Nastavenia","Settings navigation":"Navigácia v nastaveniach","Show password":"","Smart Picker":"","Smileys & Emotion":"Smajlíky a emócie","Start slideshow":"Začať prezentáciu","Start typing to search":"",Submit:"Odoslať",Symbols:"Symboly","Travel & Places":"Cestovanie a miesta","Type to search time zone":"Začníte písať pre vyhľadávanie časovej zóny","Unable to search the group":"Skupinu sa nepodarilo nájsť","Undo changes":"Vrátiť zmeny",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sl",translations:{"{tag} (invisible)":"{tag} (nevidno)","{tag} (restricted)":"{tag} (omejeno)","a few seconds ago":"",Actions:"Dejanja",'Actions for item with name "{name}"':"",Activities:"Dejavnosti","Animals & Nature":"Živali in Narava","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Podoba {displayName}","Avatar of {displayName}, {status}":"Prikazna slika {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Prekliči spremembe","Change name":"",Choose:"Izbor","Clear search":"","Clear text":"Počisti besedilo",Close:"Zapri","Close modal":"Zapri pojavno okno","Close navigation":"Zapri krmarjenje","Close sidebar":"Zapri stransko vrstico","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Potrdi spremembe",Custom:"Po meri","Edit item":"Uredi predmet","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Priljubljeno",Flags:"Zastavice","Food & Drink":"Hrana in Pijača","Frequently used":"Pogostost uporabe",Global:"Splošno","Go back to the list":"Vrni se na seznam","Hide password":"Skrij geslo",'Load more "{options}""':"","Message limit of {count} characters reached":"Dosežena omejitev {count} znakov na sporočilo.","More items …":"Več predmetov ...","More options":"",Next:"Naslednji","No emoji found":"Ni najdenih izraznih ikon","No link provider found":"","No results":"Ni zadetkov",Objects:"Predmeti","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Odpri krmarjenje","Open settings menu":"","Password is secure":"Geslo je varno","Pause slideshow":"Ustavi predstavitev","People & Body":"Ljudje in Telo","Pick a date":"Izbor datuma","Pick a date and a time":"Izbor datuma in časa","Pick a month":"Izbor meseca","Pick a time":"Izbor časa","Pick a week":"Izbor tedna","Pick a year":"Izbor leta","Pick an emoji":"Izbor izrazne ikone","Please select a time zone:":"Izbor časovnega pasu:",Previous:"Predhodni","Provider icon":"","Raw link {options}":"","Related resources":"Povezani viri",Search:"Iskanje","Search emoji":"","Search results":"Zadetki iskanja","sec. ago":"","seconds ago":"","Select a tag":"Izbor oznake","Select provider":"",Settings:"Nastavitve","Settings navigation":"Krmarjenje nastavitev","Show password":"Pokaži geslo","Smart Picker":"","Smileys & Emotion":"Izrazne ikone","Start slideshow":"Začni predstavitev","Start typing to search":"",Submit:"Pošlji",Symbols:"Simboli","Travel & Places":"Potovanja in Kraji","Type to search time zone":"Vpišite niz za iskanje časovnega pasu","Unable to search the group":"Ni mogoče iskati po skupini","Undo changes":"Razveljavi spremembe",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sq",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sr",translations:{"{tag} (invisible)":"{tag} (nevidljivo)","{tag} (restricted)":"{tag} (ograničeno)","a few seconds ago":"",Actions:"Radnje",'Actions for item with name "{name}"':"",Activities:"Aktivnosti","Animals & Nature":"Životinje i Priroda","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"Avatar za {displayName}","Avatar of {displayName}, {status}":"Avatar za {displayName}, {status}",Back:"","Back to provider selection":"","Cancel changes":"Otkaži izmene","Change name":"",Choose:"Изаберите","Clear search":"","Clear text":"",Close:"Затвори","Close modal":"Zatvori modal","Close navigation":"Zatvori navigaciju","Close sidebar":"Zatvori bočnu traku","Close Smart Picker":"","Collapse menu":"","Confirm changes":"Potvrdite promene",Custom:"Po meri","Edit item":"Uredi stavku","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"Omiljeni",Flags:"Zastave","Food & Drink":"Hrana i Piće","Frequently used":"Često korišćeno",Global:"Globalno","Go back to the list":"Natrag na listu","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"Dostignuto je ograničenje za poruke od {count} znakova","More items …":"","More options":"",Next:"Следеће","No emoji found":"Nije pronađen nijedan emodži","No link provider found":"","No results":"Нема резултата",Objects:"Objekti","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"Otvori navigaciju","Open settings menu":"","Password is secure":"","Pause slideshow":"Паузирај слајд шоу","People & Body":"Ljudi i Telo","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"Izaberi emodži","Please select a time zone:":"Molimo izaberite vremensku zonu:",Previous:"Претходно","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"Pretraži","Search emoji":"","Search results":"Rezultati pretrage","sec. ago":"","seconds ago":"","Select a tag":"Изаберите ознаку","Select provider":"",Settings:"Поставке","Settings navigation":"Navigacija u podešavanjima","Show password":"","Smart Picker":"","Smileys & Emotion":"Smajli i Emocije","Start slideshow":"Покрени слајд шоу","Start typing to search":"",Submit:"Prihvati",Symbols:"Simboli","Travel & Places":"Putovanja i Mesta","Type to search time zone":"Ukucaj da pretražiš vremenske zone","Unable to search the group":"Nije moguće pretražiti grupu","Undo changes":"Poništi promene",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sr@latin",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"sv",translations:{"{tag} (invisible)":"{tag} (osynlig)","{tag} (restricted)":"{tag} (begränsad)","a few seconds ago":"några sekunder sedan",Actions:"Åtgärder",'Actions for item with name "{name}"':'Åtgärder för objekt med namn "{name}"',Activities:"Aktiviteter","Animals & Nature":"Djur & Natur","Any link":"Vilken länk som helst","Anything shared with the same group of people will show up here":"Något som delats med samma grupp av personer kommer att visas här","Avatar of {displayName}":"{displayName}s avatar","Avatar of {displayName}, {status}":"{displayName}s avatar, {status}",Back:"Tillbaka","Back to provider selection":"Tillbaka till leverantörsval","Cancel changes":"Avbryt ändringar","Change name":"Ändra namn",Choose:"Välj","Clear search":"Rensa sökning","Clear text":"Ta bort text",Close:"Stäng","Close modal":"Stäng modal","Close navigation":"Stäng navigering","Close sidebar":"Stäng sidopanel","Close Smart Picker":"Stäng Smart Picker","Collapse menu":"Komprimera menyn","Confirm changes":"Bekräfta ändringar",Custom:"Anpassad","Edit item":"Ändra","Enter link":"Ange länk","Error getting related resources. Please contact your system administrator if you have any questions.":"Det gick inte att hämta relaterade resurser. Kontakta din systemadministratör om du har några frågor.","External documentation for {name}":"Extern dokumentation för {name}",Favorite:"Favorit",Flags:"Flaggor","Food & Drink":"Mat & Dryck","Frequently used":"Används ofta",Global:"Global","Go back to the list":"Gå tillbaka till listan","Hide password":"Göm lössenordet",'Load more "{options}""':'Ladda fler "{options}""',"Message limit of {count} characters reached":"Meddelandegräns {count} tecken används","More items …":"Fler objekt","More options":"Fler alternativ",Next:"Nästa","No emoji found":"Hittade inga emojis","No link provider found":"Ingen länkleverantör hittades","No results":"Inga resultat",Objects:"Objekt","Open contact menu":"Öppna kontaktmenyn",'Open link to "{resourceName}"':'Öppna länken till "{resourceName}"',"Open menu":"Öppna menyn","Open navigation":"Öppna navigering","Open settings menu":"Öppna inställningsmenyn","Password is secure":"Lössenordet är säkert","Pause slideshow":"Pausa bildspelet","People & Body":"Kropp & Själ","Pick a date":"Välj datum","Pick a date and a time":"Välj datum och tid","Pick a month":"Välj månad","Pick a time":"Välj tid","Pick a week":"Välj vecka","Pick a year":"Välj år","Pick an emoji":"Välj en emoji","Please select a time zone:":"Välj tidszon:",Previous:"Föregående","Provider icon":"Leverantörsikon","Raw link {options}":"Oformaterad länk {options}","Related resources":"Relaterade resurser",Search:"Sök","Search emoji":"Sök emoji","Search results":"Sökresultat","sec. ago":"sek. sedan","seconds ago":"sekunder sedan","Select a tag":"Välj en tag","Select provider":"Välj leverantör",Settings:"Inställningar","Settings navigation":"Inställningsmeny","Show password":"Visa lössenordet","Smart Picker":"Smart Picker","Smileys & Emotion":"Selfies & Känslor","Start slideshow":"Starta bildspelet","Start typing to search":"Börja skriva för att söka",Submit:"Skicka",Symbols:"Symboler","Travel & Places":"Resor & Sevärdigheter","Type to search time zone":"Skriv för att välja tidszon","Unable to search the group":"Kunde inte söka i gruppen","Undo changes":"Ångra ändringar",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Skriv meddelande, använd "@" för att nämna någon, använd ":" för automatiska emojiförslag ...'}},{locale:"sw",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"ta",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"th",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"tk",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"tr",translations:{"{tag} (invisible)":"{tag} (görünmez)","{tag} (restricted)":"{tag} (kısıtlı)","a few seconds ago":"birkaç saniye önce",Actions:"İşlemler",'Actions for item with name "{name}"':"{name} adındaki öge için işlemler",Activities:"Etkinlikler","Animals & Nature":"Hayvanlar ve Doğa","Any link":"Herhangi bir bağlantı","Anything shared with the same group of people will show up here":"Aynı kişi grubu ile paylaşılan herşey burada görüntülenir","Avatar of {displayName}":"{displayName} avatarı","Avatar of {displayName}, {status}":"{displayName}, {status} avatarı",Back:"Geri","Back to provider selection":"Sağlayıcı seçimine dön","Cancel changes":"Değişiklikleri iptal et","Change name":"Adı değiştir",Choose:"Seçin","Clear search":"Aramayı temizle","Clear text":"Metni temizle",Close:"Kapat","Close modal":"Üste açılan pencereyi kapat","Close navigation":"Gezinmeyi kapat","Close sidebar":"Yan çubuğu kapat","Close Smart Picker":"Akıllı seçimi kapat","Collapse menu":"Menüyü daralt","Confirm changes":"Değişiklikleri onayla",Custom:"Özel","Edit item":"Ögeyi düzenle","Enter link":"Bağlantıyı yazın","Error getting related resources. Please contact your system administrator if you have any questions.":"İlgili kaynaklara ulaşılırken sorun çıktı. Herhangi bir sorunuz varsa lütfen sistem yöneticiniz ile görüşün ","External documentation for {name}":"{name} için dış belgeler",Favorite:"Sık kullanılanlara ekle",Flags:"Bayraklar","Food & Drink":"Yeme ve içme","Frequently used":"Sık kullanılanlar",Global:"Evrensel","Go back to the list":"Listeye dön","Hide password":"Parolayı gizle",'Load more "{options}""':'Diğer "{options}"',"Message limit of {count} characters reached":"{count} karakter ileti sınırına ulaşıldı","More items …":"Diğer ögeler…","More options":"Diğer seçenekler",Next:"Sonraki","No emoji found":"Herhangi bir emoji bulunamadı","No link provider found":"Bağlantı sağlayıcısı bulunamadı","No results":"Herhangi bir sonuç bulunamadı",Objects:"Nesneler","Open contact menu":"İletişim menüsünü aç",'Open link to "{resourceName}"':"{resourceName} bağlantısını aç","Open menu":"Menüyü aç","Open navigation":"Gezinmeyi aç","Open settings menu":"Ayarlar menüsünü aç","Password is secure":"Parola güvenli","Pause slideshow":"Slayt sunumunu duraklat","People & Body":"İnsanlar ve beden","Pick a date":"Bir tarih seçin","Pick a date and a time":"Bir tarih ve saat seçin","Pick a month":"Bir ay seçin","Pick a time":"Bir saat seçin","Pick a week":"Bir hafta seçin","Pick a year":"Bir yıl seçin","Pick an emoji":"Bir emoji seçin","Please select a time zone:":"Lütfen bir saat dilimi seçin:",Previous:"Önceki","Provider icon":"Sağlayıcı simgesi","Raw link {options}":"Ham bağlantı {options}","Related resources":"İlgili kaynaklar",Search:"Arama","Search emoji":"Emoji ara","Search results":"Arama sonuçları","sec. ago":"sn. önce","seconds ago":"saniye önce","Select a tag":"Bir etiket seçin","Select provider":"Sağlayıcı seçin",Settings:"Ayarlar","Settings navigation":"Gezinme ayarları","Show password":"Parolayı görüntüle","Smart Picker":"Akıllı seçim","Smileys & Emotion":"İfadeler ve duygular","Start slideshow":"Slayt sunumunu başlat","Start typing to search":"Aramak için yazmaya başlayın",Submit:"Gönder",Symbols:"Simgeler","Travel & Places":"Gezi ve yerler","Type to search time zone":"Saat dilimi aramak için yazmaya başlayın","Unable to search the group":"Grupta arama yapılamadı","Undo changes":"Değişiklikleri geri al",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'İleti yazın, birini anmak için @, otomatik emoji tamamlamak için ":" kullanın…'}},{locale:"ug",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"uk",translations:{"{tag} (invisible)":"{tag} (невидимий)","{tag} (restricted)":"{tag} (обмежений)","a few seconds ago":"декілька секунд тому",Actions:"Дії",'Actions for item with name "{name}"':'Дії для об\'єкту "{name}"',Activities:"Діяльність","Animals & Nature":"Тварини та природа","Any link":"Будь-яке посилання","Anything shared with the same group of people will show up here":"Будь-що доступне для цієї же групи людей буде показано тут","Avatar of {displayName}":"Аватар {displayName}","Avatar of {displayName}, {status}":"Аватар {displayName}, {status}",Back:"Назад","Back to provider selection":"Назад до вибору постачальника","Cancel changes":"Скасувати зміни","Change name":"Змінити назву",Choose:"Виберіть","Clear search":"Очистити пошук","Clear text":"Очистити текст",Close:"Закрити","Close modal":"Закрити модаль","Close navigation":"Закрити навігацію","Close sidebar":"Закрити бічну панель","Close Smart Picker":"Закрити асистент вибору","Collapse menu":"Згорнути меню","Confirm changes":"Підтвердити зміни",Custom:"Власне","Edit item":"Редагувати елемент","Enter link":"Зазначте посилання","Error getting related resources. Please contact your system administrator if you have any questions.":"Помилка під час отримання пов'язаних ресурсів. Будь ласка, сконтактуйте з системним адміністратором, якщо у вас виникли запитання.","External documentation for {name}":"Зовнішня документація для {name}",Favorite:"Із зірочкою",Flags:"Прапори","Food & Drink":"Їжа та напої","Frequently used":"Найчастіші",Global:"Глобальний","Go back to the list":"Повернутися до списку","Hide password":"Приховати пароль",'Load more "{options}""':'Завантажити більше "{options}"',"Message limit of {count} characters reached":"Вичерпано ліміт у {count} символів для повідомлення","More items …":"Більше об'єктів...","More options":"Більше об'єктів",Next:"Вперед","No emoji found":"Емоційки відсутні","No link provider found":"Не наведено посилання","No results":"Відсутні результати",Objects:"Об'єкти","Open contact menu":"Відкрити меню контактів",'Open link to "{resourceName}"':'Відкрити посилання на "{resourceName}"',"Open menu":"Відкрити меню","Open navigation":"Відкрити навігацію","Open settings menu":"Відкрити меню налаштувань","Password is secure":"Пароль безпечний","Pause slideshow":"Пауза у показі слайдів","People & Body":"Люди та жести","Pick a date":"Вибрати дату","Pick a date and a time":"Виберіть дату та час","Pick a month":"Виберіть місяць","Pick a time":"Виберіть час","Pick a week":"Виберіть тиждень","Pick a year":"Виберіть рік","Pick an emoji":"Виберіть емоційку","Please select a time zone:":"Виберіть часовий пояс:",Previous:"Назад","Provider icon":"Піктограма постачальника","Raw link {options}":"Пряме посилання {options}","Related resources":"Пов'язані ресурси",Search:"Пошук","Search emoji":"Шукати емоційки","Search results":"Результати пошуку","sec. ago":"с тому","seconds ago":"с тому","Select a tag":"Виберіть позначку","Select provider":"Виберіть постачальника",Settings:"Налаштування","Settings navigation":"Навігація у налаштуваннях","Show password":"Показати пароль","Smart Picker":"Асистент вибору","Smileys & Emotion":"Смайли та емоції","Start slideshow":"Почати показ слайдів","Start typing to search":"Почніть вводити для пошуку",Submit:"Надіслати",Symbols:"Символи","Travel & Places":"Поїздки та місця","Type to search time zone":"Введіть для пошуку часовий пояс","Unable to search the group":"Неможливо шукати в групі","Undo changes":"Скасувати зміни",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'Додайте "@", щоби згадати коористувача або ":" для вибору емоційки...'}},{locale:"ur_PK",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"uz",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"vi",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"zh_CN",translations:{"{tag} (invisible)":"{tag} （不可见）","{tag} (restricted)":"{tag} （受限）","a few seconds ago":"",Actions:"行为",'Actions for item with name "{name}"':"",Activities:"活动","Animals & Nature":"动物 & 自然","Any link":"","Anything shared with the same group of people will show up here":"与同组用户分享的所有内容都会显示于此","Avatar of {displayName}":"{displayName}的头像","Avatar of {displayName}, {status}":"{displayName}的头像，{status}",Back:"","Back to provider selection":"","Cancel changes":"取消更改","Change name":"",Choose:"选择","Clear search":"","Clear text":"清除文本",Close:"关闭","Close modal":"关闭窗口","Close navigation":"关闭导航","Close sidebar":"关闭侧边栏","Close Smart Picker":"","Collapse menu":"","Confirm changes":"确认更改",Custom:"自定义","Edit item":"编辑项目","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"喜爱",Flags:"旗帜","Food & Drink":"食物 & 饮品","Frequently used":"经常使用",Global:"全局","Go back to the list":"返回至列表","Hide password":"隐藏密码",'Load more "{options}""':"","Message limit of {count} characters reached":"已达到 {count} 个字符的消息限制","More items …":"更多项目…","More options":"",Next:"下一个","No emoji found":"表情未找到","No link provider found":"","No results":"无结果",Objects:"物体","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"开启导航","Open settings menu":"","Password is secure":"密码安全","Pause slideshow":"暂停幻灯片","People & Body":"人 & 身体","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"选择一个表情","Please select a time zone:":"请选择一个时区：",Previous:"上一个","Provider icon":"","Raw link {options}":"","Related resources":"相关资源",Search:"搜索","Search emoji":"","Search results":"搜索结果","sec. ago":"","seconds ago":"","Select a tag":"选择一个标签","Select provider":"",Settings:"设置","Settings navigation":"设置向导","Show password":"显示密码","Smart Picker":"","Smileys & Emotion":"笑脸 & 情感","Start slideshow":"开始幻灯片","Start typing to search":"",Submit:"提交",Symbols:"符号","Travel & Places":"旅游 & 地点","Type to search time zone":"打字以搜索时区","Unable to search the group":"无法搜索分组","Undo changes":"撤销更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'写信息，使用"@"来提及某人，使用":"进行表情符号自动完成 ...'}},{locale:"zh_HK",translations:{"{tag} (invisible)":"{tag} (隱藏)","{tag} (restricted)":"{tag} (受限)","a few seconds ago":"",Actions:"動作",'Actions for item with name "{name}"':"",Activities:"活動","Animals & Nature":"動物與自然","Any link":"","Anything shared with the same group of people will show up here":"與同一組人共享的任何內容都會顯示在此處","Avatar of {displayName}":"{displayName} 的頭像","Avatar of {displayName}, {status}":"{displayName} 的頭像，{status}",Back:"","Back to provider selection":"","Cancel changes":"取消更改","Change name":"",Choose:"選擇","Clear search":"","Clear text":"清除文本",Close:"關閉","Close modal":"關閉模態","Close navigation":"關閉導航","Close sidebar":"關閉側邊欄","Close Smart Picker":"","Collapse menu":"","Confirm changes":"確認更改",Custom:"自定義","Edit item":"編輯項目","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"喜愛",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"經常使用",Global:"全球的","Go back to the list":"返回清單","Hide password":"隱藏密碼",'Load more "{options}""':"","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制","More items …":"更多項目 …","More options":"",Next:"下一個","No emoji found":"未找到表情符號","No link provider found":"","No results":"無結果",Objects:"物件","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"開啟導航","Open settings menu":"","Password is secure":"密碼是安全的","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"選擇表情符號","Please select a time zone:":"請選擇時區：",Previous:"上一個","Provider icon":"","Raw link {options}":"","Related resources":"相關資源",Search:"搜尋","Search emoji":"","Search results":"搜尋結果","sec. ago":"","seconds ago":"","Select a tag":"選擇標籤","Select provider":"",Settings:"設定","Settings navigation":"設定值導覽","Show password":"顯示密碼","Smart Picker":"","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片","Start typing to search":"",Submit:"提交",Symbols:"標誌","Travel & Places":"旅遊與景點","Type to search time zone":"鍵入以搜索時區","Unable to search the group":"無法搜尋群組","Undo changes":"取消更改",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':'寫訊息，使用 "@" 來指代某人，使用 ":" 用於表情符號自動填充 ...'}},{locale:"zh_TW",translations:{"{tag} (invisible)":"{tag}（隱藏）","{tag} (restricted)":"{tag}（受限）","a few seconds ago":"幾秒前",Actions:"動作",'Actions for item with name "{name}"':"",Activities:"活動","Animals & Nature":"動物與自然","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"選擇","Clear search":"","Clear text":"",Close:"關閉","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"自定義","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"旗幟","Food & Drink":"食物與飲料","Frequently used":"最近使用",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"已達到訊息最多 {count} 字元限制","More items …":"","More options":"",Next:"下一個","No emoji found":"未找到表情符號","No link provider found":"","No results":"無結果",Objects:"物件","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"暫停幻燈片","People & Body":"人物","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"選擇表情符號","Please select a time zone:":"",Previous:"上一個","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"搜尋","Search emoji":"","Search results":"搜尋結果","sec. ago":"","seconds ago":"","Select a tag":"選擇標籤","Select provider":"",Settings:"設定","Settings navigation":"設定值導覽","Show password":"","Smart Picker":"","Smileys & Emotion":"表情","Start slideshow":"開始幻燈片","Start typing to search":"",Submit:"",Symbols:"標誌","Travel & Places":"旅遊與景點","Type to search time zone":"","Unable to search the group":"無法搜尋群組","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}},{locale:"zu_ZA",translations:{"{tag} (invisible)":"","{tag} (restricted)":"","a few seconds ago":"",Actions:"",'Actions for item with name "{name}"':"",Activities:"","Animals & Nature":"","Any link":"","Anything shared with the same group of people will show up here":"","Avatar of {displayName}":"","Avatar of {displayName}, {status}":"",Back:"","Back to provider selection":"","Cancel changes":"","Change name":"",Choose:"","Clear search":"","Clear text":"",Close:"","Close modal":"","Close navigation":"","Close sidebar":"","Close Smart Picker":"","Collapse menu":"","Confirm changes":"",Custom:"","Edit item":"","Enter link":"","Error getting related resources. Please contact your system administrator if you have any questions.":"","External documentation for {name}":"",Favorite:"",Flags:"","Food & Drink":"","Frequently used":"",Global:"","Go back to the list":"","Hide password":"",'Load more "{options}""':"","Message limit of {count} characters reached":"","More items …":"","More options":"",Next:"","No emoji found":"","No link provider found":"","No results":"",Objects:"","Open contact menu":"",'Open link to "{resourceName}"':"","Open menu":"","Open navigation":"","Open settings menu":"","Password is secure":"","Pause slideshow":"","People & Body":"","Pick a date":"","Pick a date and a time":"","Pick a month":"","Pick a time":"","Pick a week":"","Pick a year":"","Pick an emoji":"","Please select a time zone:":"",Previous:"","Provider icon":"","Raw link {options}":"","Related resources":"",Search:"","Search emoji":"","Search results":"","sec. ago":"","seconds ago":"","Select a tag":"","Select provider":"",Settings:"","Settings navigation":"","Show password":"","Smart Picker":"","Smileys & Emotion":"","Start slideshow":"","Start typing to search":"",Submit:"",Symbols:"","Travel & Places":"","Type to search time zone":"","Unable to search the group":"","Undo changes":"",'Write message, use "@" to mention someone, use ":" for emoji autocompletion …':""}}].forEach((function(e){var a={};for(var t in e.translations)e.translations[t].pluralId?a[t]={msgid:t,msgid_plural:e.translations[t].pluralId,msgstr:e.translations[t].msgstr}:a[t]={msgid:t,msgstr:[e.translations[t]]};i.addTranslation(e.locale,{translations:{"":a}})}));var n=i.build(),s=(n.ngettext.bind(n),n.gettext.bind(n));function r(e,a,t){this.r=e,this.g=a,this.b=t}function l(e,a,t){var o=[];o.push(a);for(var i=function(e,a){var t=new Array(3);return t[0]=(a[1].r-a[0].r)/e,t[1]=(a[1].g-a[0].g)/e,t[2]=(a[1].b-a[0].b)/e,t}(e,[a,t]),n=1;n<e;n++){var s=parseInt(a.r+i[0]*n,10),l=parseInt(a.g+i[1]*n,10),c=parseInt(a.b+i[2]*n,10);o.push(new r(s,l,c))}return o}const c=function(e){e||(e=6);var a=new r(182,70,157),t=new r(221,203,85),o=new r(0,130,201),i=l(e,a,t),n=l(e,t,o),s=l(e,o,a);return i.concat(n).concat(s)},m=__webpack_require__(/*! vue-material-design-icons/ArrowLeft.vue */ "./node_modules/vue-material-design-icons/ArrowLeft.vue");var d=t.n(m);const u=__webpack_require__(/*! vue-material-design-icons/Check.vue */ "./node_modules/vue-material-design-icons/Check.vue");var p=t.n(u);const h=__webpack_require__(/*! vue-material-design-icons/DotsHorizontal.vue */ "./node_modules/vue-material-design-icons/DotsHorizontal.vue");var g=t.n(h);const v=__webpack_require__(/*! vue-color */ "./node_modules/vue-color/dist/vue-color.min.js");var k=function(e){var a=e.toString(16);return 1===a.length?"0"+a:a};const y={name:"NcColorPicker",components:{ArrowLeft:d(),Check:p(),Chrome:v.Chrome,DotsHorizontal:g(),NcButton:e.default,NcPopover:a.default},props:{value:{type:String,required:!0},advancedFields:{type:Boolean,default:!1},palette:{type:Array,default:function(){return c(4).map((function(e){return"#"+k(e.r)+k(e.g)+k(e.b)}))},validator:function(e){return e.every((function(e){return/^#([a-f0-9]{3}|[a-f0-9]{6})$/i.test(e)}))}}},emits:["submit","close","update:open","update:value","input"],data:function(){return{currentColor:this.value,advanced:!1,ariaBack:s("Back"),ariaMore:s("More options")}},watch:{value:function(e){this.currentColor=e}},methods:{t:s,handleConfirm:function(){this.$emit("submit",this.currentColor),this.handleClose(),this.advanced=!1},handleClose:function(){this.$emit("close"),this.$emit("update:open",!1)},handleBack:function(){this.advanced=!1},handleMoreSettings:function(){this.advanced=!0},pickColor:function(e){"string"!=typeof e&&(e=this.currentColor.hex),this.currentColor=e,this.$emit("update:value",e),this.$emit("input",e)}}};var A=t(3379),f=t.n(A),C=t(7795),P=t.n(C),S=t(569),w=t.n(S),b=t(3565),N=t.n(b),j=t(9216),O=t.n(j),E=t(4589),x=t.n(E),z=t(3246),F={};F.styleTagTransform=x(),F.setAttributes=N(),F.insert=w().bind(null,"head"),F.domAPI=P(),F.insertStyleElement=O();f()(z.Z,F);z.Z&&z.Z.locals&&z.Z.locals;var B=t(1900),M=t(1554),T=t.n(M),G=(0,B.Z)(y,(function(){var e=this,a=e._self._c;return a("NcPopover",e._g(e._b({on:{"apply-hide":e.handleClose},scopedSlots:e._u([{key:"trigger",fn:function(){return[e._t("default")]},proxy:!0}],null,!0)},"NcPopover",e.$attrs,!1),e.$listeners),[e._v(" "),a("div",{staticClass:"color-picker",class:{"color-picker--advanced-fields":e.advanced&&e.advancedFields}},[a("transition",{attrs:{name:"slide",mode:"out-in"}},[e.advanced?e._e():a("div",{staticClass:"color-picker__simple"},e._l(e.palette,(function(t,o){return a("button",{key:o,staticClass:"color-picker__simple-color-circle",class:{"color-picker__simple-color-circle--active":t===e.currentColor},style:{"background-color":t},attrs:{type:"button"},on:{click:function(a){return e.pickColor(t)}}},[t===e.currentColor?a("Check",{attrs:{size:20}}):e._e()],1)})),0),e._v(" "),e.advanced?a("Chrome",{staticClass:"color-picker__advanced",attrs:{"disable-alpha":!0,"disable-fields":!e.advancedFields},on:{input:e.pickColor},model:{value:e.currentColor,callback:function(a){e.currentColor=a},expression:"currentColor"}}):e._e()],1),e._v(" "),a("div",{staticClass:"color-picker__navigation"},[e.advanced?a("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaBack},on:{click:e.handleBack},scopedSlots:e._u([{key:"icon",fn:function(){return[a("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)}):e._e(),e._v(" "),e.advanced?e._e():a("NcButton",{attrs:{type:"tertiary","aria-label":e.ariaMore},on:{click:e.handleMoreSettings},scopedSlots:e._u([{key:"icon",fn:function(){return[a("DotsHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,1056868794)}),e._v(" "),e.advanced?a("NcButton",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("\n\t\t\t\t"+e._s(e.t("Choose"))+"\n\t\t\t")]):e._e()],1)],1)])}),[],!1,null,"6cccc0ac",null);"function"==typeof T()&&T()(G);const R=G.exports})(),o})()));
//# sourceMappingURL=NcColorPicker.js.map

/***/ }),

/***/ "./apps/theming/src/helpers/refreshStyles.js":
/*!***************************************************!*\
  !*** ./apps/theming/src/helpers/refreshStyles.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refreshStyles: () => (/* binding */ refreshStyles)
/* harmony export */ });
/**
 * @copyright 2022 Christopher Ng <chrng8@gmail.com>
 *
 * @author Christopher Ng <chrng8@gmail.com>
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

const refreshStyles = () => {
  // Refresh server-side generated theming CSS
  [...document.head.querySelectorAll('link.theme')].forEach(theme => {
    const url = new URL(theme.href);
    url.searchParams.set('v', Date.now());
    const newTheme = theme.cloneNode();
    newTheme.href = url.toString();
    newTheme.onload = () => theme.remove();
    document.head.append(newTheme);
  });
};

/***/ }),

/***/ "./apps/theming/src/personal-settings.js":
/*!***********************************************!*\
  !*** ./apps/theming/src/personal-settings.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _UserThemes_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserThemes.vue */ "./apps/theming/src/UserThemes.vue");
/* harmony import */ var _helpers_refreshStyles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/refreshStyles.js */ "./apps/theming/src/helpers/refreshStyles.js");
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
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




vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.OC = OC;
vue__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.t = t;
const View = vue__WEBPACK_IMPORTED_MODULE_2__["default"].extend(_UserThemes_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
const theming = new View();
theming.$mount('#theming');
theming.$on('update:background', _helpers_refreshStyles_js__WEBPACK_IMPORTED_MODULE_1__.refreshStyles);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcSettingsSection.js */ "./node_modules/@nextcloud/vue/dist/Components/NcSettingsSection.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BackgroundSettings_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BackgroundSettings.vue */ "./apps/theming/src/components/BackgroundSettings.vue");
/* harmony import */ var _components_ItemPreview_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ItemPreview.vue */ "./apps/theming/src/components/ItemPreview.vue");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");







const availableThemes = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'themes', []);
const enforceTheme = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'enforceTheme', '');
const shortcutsDisabled = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'shortcutsDisabled', false);
const isUserThemingDisabled = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'isUserThemingDisabled');
console.debug('Available themes', availableThemes);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserThemes',
  components: {
    ItemPreview: _components_ItemPreview_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_3___default()),
    NcSettingsSection: (_nextcloud_vue_dist_Components_NcSettingsSection_js__WEBPACK_IMPORTED_MODULE_4___default()),
    BackgroundSettings: _components_BackgroundSettings_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data() {
    return {
      availableThemes,
      // Admin defined configs
      enforceTheme,
      shortcutsDisabled,
      isUserThemingDisabled
    };
  },
  computed: {
    themes() {
      return this.availableThemes.filter(theme => theme.type === 1);
    },
    fonts() {
      return this.availableThemes.filter(theme => theme.type === 2);
    },
    // Selected theme, fallback on first (default) if none
    selectedTheme() {
      return this.themes.find(theme => theme.enabled === true) || this.themes[0];
    },
    description() {
      // using the `t` replace method escape html, we have to do it manually :/
      return t('theming', 'Universal access is very important to us. We follow web standards and check to make everything usable also without mouse, and assistive software such as screenreaders. We aim to be compliant with the {guidelines}Web Content Accessibility Guidelines{linkend} 2.1 on AA level, with the high contrast theme even on AAA level.').replace('{guidelines}', this.guidelinesLink).replace('{linkend}', '</a>');
    },
    guidelinesLink() {
      return '<a target="_blank" href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="noreferrer nofollow">';
    },
    descriptionDetail() {
      return t('theming', 'If you find any issues, do not hesitate to report them on {issuetracker}our issue tracker{linkend}. And if you want to get involved, come join {designteam}our design team{linkend}!').replace('{issuetracker}', this.issuetrackerLink).replace('{designteam}', this.designteamLink).replace(/\{linkend\}/g, '</a>');
    },
    issuetrackerLink() {
      return '<a target="_blank" href="https://github.com/nextcloud/server/issues/" rel="noreferrer nofollow">';
    },
    designteamLink() {
      return '<a target="_blank" href="https://nextcloud.com/design" rel="noreferrer nofollow">';
    }
  },
  watch: {
    shortcutsDisabled(newState) {
      this.changeShortcutsDisabled(newState);
    }
  },
  methods: {
    // Refresh server-side generated theming CSS
    refreshGlobalStyles() {
      [...document.head.querySelectorAll('link.theme')].forEach(theme => {
        const url = new URL(theme.href);
        url.searchParams.set('v', Date.now());
        const newTheme = theme.cloneNode();
        newTheme.href = url.toString();
        newTheme.onload = () => theme.remove();
        document.head.append(newTheme);
      });
    },
    updateBackground(data) {
      this.background = data.type === 'custom' || data.type === 'default' ? data.type : data.value;
      this.refreshGlobalStyles();
    },
    changeTheme(_ref) {
      let {
        enabled,
        id
      } = _ref;
      // Reset selected and select new one
      this.themes.forEach(theme => {
        if (theme.id === id && enabled) {
          theme.enabled = true;
          return;
        }
        theme.enabled = false;
      });
      this.updateBodyAttributes();
      this.selectItem(enabled, id);
    },
    changeFont(_ref2) {
      let {
        enabled,
        id
      } = _ref2;
      // Reset selected and select new one
      this.fonts.forEach(font => {
        if (font.id === id && enabled) {
          font.enabled = true;
          return;
        }
        font.enabled = false;
      });
      this.updateBodyAttributes();
      this.selectItem(enabled, id);
    },
    async changeShortcutsDisabled(newState) {
      if (newState) {
        await (0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
          url: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/provisioning_api/api/v1/config/users/{appId}/{configKey}', {
            appId: 'theming',
            configKey: 'shortcuts_disabled'
          }),
          data: {
            configValue: 'yes'
          },
          method: 'POST'
        });
      } else {
        await (0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
          url: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/provisioning_api/api/v1/config/users/{appId}/{configKey}', {
            appId: 'theming',
            configKey: 'shortcuts_disabled'
          }),
          method: 'DELETE'
        });
      }
    },
    updateBodyAttributes() {
      const enabledThemesIDs = this.themes.filter(theme => theme.enabled === true).map(theme => theme.id);
      const enabledFontsIDs = this.fonts.filter(font => font.enabled === true).map(font => font.id);
      this.themes.forEach(theme => {
        document.body.toggleAttribute("data-theme-".concat(theme.id), theme.enabled);
      });
      this.fonts.forEach(font => {
        document.body.toggleAttribute("data-theme-".concat(font.id), font.enabled);
      });
      document.body.setAttribute('data-themes', [...enabledThemesIDs, ...enabledFontsIDs].join(','));
    },
    /**
     * Commit a change and force reload css
     * Fetching the file again will trigger the server update
     *
     * @param {boolean} enabled the theme state
     * @param {string} themeId the theme ID to change
     */
    async selectItem(enabled, themeId) {
      try {
        if (enabled) {
          await (0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
            url: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/theming/api/v1/theme/{themeId}/enable', {
              themeId
            }),
            method: 'PUT'
          });
        } else {
          await (0,_nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
            url: (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateOcsUrl)('apps/theming/api/v1/theme/{themeId}', {
              themeId
            }),
            method: 'DELETE'
          });
        }
      } catch (err) {
        console.error(err, err.response);
        OC.Notification.showTemporary(t('theming', err.response.data.ocs.meta.message + '. Unable to apply the setting.'));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/initial-state */ "./node_modules/@nextcloud/initial-state/dist/index.es.mjs");
/* harmony import */ var _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/index.es.mjs");
/* harmony import */ var vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-material-design-icons/Check.vue */ "./node_modules/vue-material-design-icons/Check.vue");
/* harmony import */ var vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-material-design-icons/Close.vue */ "./node_modules/vue-material-design-icons/Close.vue");
/* harmony import */ var vue_material_design_icons_ImageEdit_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-material-design-icons/ImageEdit.vue */ "./node_modules/vue-material-design-icons/ImageEdit.vue");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nextcloud_vue_dist_Components_NcColorPicker_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcColorPicker.js */ "./node_modules/@nextcloud/vue/dist/Components/NcColorPicker.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcColorPicker_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcColorPicker_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var node_vibrant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! node-vibrant */ "./node_modules/node-vibrant/lib/browser.js");
/* harmony import */ var node_vibrant__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(node_vibrant__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var node_vibrant_lib_color_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! node-vibrant/lib/color.js */ "./node_modules/node-vibrant/lib/color.js");
/* harmony import */ var _nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextcloud/dialogs */ "./node_modules/@nextcloud/dialogs/dist/index.mjs");
/* harmony import */ var _nextcloud_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextcloud/auth */ "./node_modules/@nextcloud/auth/dist/index.es.mjs");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");












const backgroundImage = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'backgroundImage');
const shippedBackgroundList = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'shippedBackgrounds');
const themingDefaultBackground = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'themingDefaultBackground');
const defaultShippedBackground = (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'defaultShippedBackground');
const prefixWithBaseUrl = url => (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateFilePath)('theming', '', 'img/background/') + url;
const picker = (0,_nextcloud_dialogs__WEBPACK_IMPORTED_MODULE_10__.getFilePickerBuilder)(t('theming', 'Select a background from your files')).setMultiSelect(false).setModal(true).setType(1).setMimeTypeFilter(['image/png', 'image/gif', 'image/jpeg', 'image/svg+xml', 'image/svg']).build();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'BackgroundSettings',
  components: {
    Check: vue_material_design_icons_Check_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Close: vue_material_design_icons_Close_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ImageEdit: vue_material_design_icons_ImageEdit_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NcColorPicker: (_nextcloud_vue_dist_Components_NcColorPicker_js__WEBPACK_IMPORTED_MODULE_7___default())
  },
  data() {
    return {
      loading: false,
      Theming: (0,_nextcloud_initial_state__WEBPACK_IMPORTED_MODULE_1__.loadState)('theming', 'data', {}),
      // User background image and color settings
      backgroundImage
    };
  },
  computed: {
    shippedBackgrounds() {
      return Object.keys(shippedBackgroundList).map(fileName => {
        return {
          name: fileName,
          url: prefixWithBaseUrl(fileName),
          preview: prefixWithBaseUrl('preview/' + fileName),
          details: shippedBackgroundList[fileName]
        };
      }).filter(background => {
        // If the admin did not changed the global background
        // let's hide the default background to not show it twice
        if (!this.isGlobalBackgroundDeleted && !this.isGlobalBackgroundDefault) {
          return background.name !== defaultShippedBackground;
        }
        return true;
      });
    },
    isGlobalBackgroundDefault() {
      return !!themingDefaultBackground;
    },
    isGlobalBackgroundDeleted() {
      return themingDefaultBackground === 'backgroundColor';
    },
    isBackgroundDisabled() {
      return this.backgroundImage === 'disabled' || !this.backgroundImage;
    }
  },
  methods: {
    /**
     * Do we need to invert the text if color is too bright?
     *
     * @param {string} color the hex color
     */
    invertTextColor(color) {
      return this.calculateLuma(color) > 0.6;
    },
    /**
     * Calculate luminance of provided hex color
     *
     * @param {string} color the hex color
     */
    calculateLuma(color) {
      const [red, green, blue] = this.hexToRGB(color);
      return (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
    },
    /**
     * Convert hex color to RGB
     *
     * @param {string} hex the hex color
     */
    hexToRGB(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
    },
    /**
     * Update local state
     *
     * @param {object} data destructuring object
     * @param {string} data.backgroundColor background color value
     * @param {string} data.backgroundImage background image value
     * @param {string} data.version cache buster number
     * @see https://github.com/nextcloud/server/blob/c78bd45c64d9695724fc44fe8453a88824b85f2f/apps/theming/lib/Controller/UserThemeController.php#L187-L191
     */
    async update(data) {
      // Update state
      this.backgroundImage = data.backgroundImage;
      this.Theming.color = data.backgroundColor;

      // Notify parent and reload style
      this.$emit('update:background');
      this.loading = false;
    },
    async setDefault() {
      this.loading = 'default';
      const result = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/theming/background/default'));
      this.update(result.data);
    },
    async setShipped(shipped) {
      this.loading = shipped;
      const result = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/theming/background/shipped'), {
        value: shipped
      });
      this.update(result.data);
    },
    async setFile(path) {
      let color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.loading = 'custom';
      const result = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/theming/background/custom'), {
        value: path,
        color
      });
      this.update(result.data);
    },
    async removeBackground() {
      this.loading = 'remove';
      const result = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].delete((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/theming/background/custom'));
      this.update(result.data);
    },
    async pickColor(event) {
      var _event$target, _this$Theming;
      this.loading = 'color';
      const color = (event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 || (_event$target = _event$target.dataset) === null || _event$target === void 0 ? void 0 : _event$target.color) || ((_this$Theming = this.Theming) === null || _this$Theming === void 0 ? void 0 : _this$Theming.color) || '#0082c9';
      const result = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].post((0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateUrl)('/apps/theming/background/color'), {
        color
      });
      this.update(result.data);
    },
    debouncePickColor: debounce__WEBPACK_IMPORTED_MODULE_6___default()(function () {
      this.pickColor(...arguments);
    }, 200),
    async pickFile() {
      const path = await picker.pick();
      this.loading = 'custom';

      // Extract primary color from image
      let response = null;
      let color = null;
      try {
        var _palette$DarkVibrant;
        const fileUrl = (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateRemoteUrl)('dav/files/' + (0,_nextcloud_auth__WEBPACK_IMPORTED_MODULE_11__.getCurrentUser)().uid + path);
        response = await _nextcloud_axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(fileUrl, {
          responseType: 'blob'
        });
        const blobUrl = URL.createObjectURL(response.data);
        const palette = await this.getColorPaletteFromBlob(blobUrl);

        // DarkVibrant is accessible AND visually pleasing
        // Vibrant is not accessible enough and others are boring
        color = palette === null || palette === void 0 || (_palette$DarkVibrant = palette.DarkVibrant) === null || _palette$DarkVibrant === void 0 ? void 0 : _palette$DarkVibrant.hex;
        this.setFile(path, color);

        // Log data
        console.debug('Extracted colour', color, 'from custom image', path, palette);
      } catch (error) {
        this.setFile(path);
        console.error('Unable to extract colour from custom image', {
          error,
          path,
          response,
          color
        });
      }
    },
    /**
     * Extract a Vibrant color palette from a blob URL
     *
     * @param {string} blobUrl the blob URL
     * @return {Promise<Palette>}
     */
    getColorPaletteFromBlob(blobUrl) {
      return new Promise((resolve, reject) => {
        const vibrant = new (node_vibrant__WEBPACK_IMPORTED_MODULE_8___default())(blobUrl);
        vibrant.getPalette((error, palette) => {
          if (error) {
            reject(error);
          }
          resolve(palette);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _nextcloud_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextcloud/router */ "./node_modules/@nextcloud/router/dist/index.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js */ "./node_modules/@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js");
/* harmony import */ var _nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ItemPreview',
  components: {
    NcCheckboxRadioSwitch: (_nextcloud_vue_dist_Components_NcCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    enforced: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    theme: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    unique: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    switchType() {
      return this.unique ? 'switch' : 'radio';
    },
    name() {
      return !this.unique ? this.type : null;
    },
    img() {
      return (0,_nextcloud_router__WEBPACK_IMPORTED_MODULE_0__.generateFilePath)('theming', 'img', this.theme.id + '.jpg');
    },
    checked: {
      get() {
        return this.selected;
      },
      set(checked) {
        console.debug('Changed theme', this.theme.id, checked);

        // If this is a radio, we can only enable
        if (!this.unique) {
          this.$emit('change', {
            enabled: true,
            id: this.theme.id
          });
          return;
        }

        // If this is a switch, we can disable the theme
        this.$emit('change', {
          enabled: checked === true,
          id: this.theme.id
        });
      }
    }
  },
  methods: {
    onToggle() {
      if (this.switchType === 'radio') {
        this.checked = true;
        return;
      }

      // Invert state
      this.checked = !this.checked;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=template&id=7ec2e6a8&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=template&id=7ec2e6a8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", [_c("NcSettingsSection", {
    staticClass: "theming",
    attrs: {
      name: _vm.t("theming", "Appearance and accessibility"),
      "limit-width": false
    }
  }, [_c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.description)
    }
  }), _vm._v(" "), _c("p", {
    domProps: {
      innerHTML: _vm._s(_vm.descriptionDetail)
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "theming__preview-list"
  }, _vm._l(_vm.themes, function (theme) {
    return _c("ItemPreview", {
      key: theme.id,
      attrs: {
        enforced: theme.id === _vm.enforceTheme,
        selected: _vm.selectedTheme.id === theme.id,
        theme: theme,
        unique: _vm.themes.length === 1,
        type: "theme"
      },
      on: {
        change: _vm.changeTheme
      }
    });
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "theming__preview-list"
  }, _vm._l(_vm.fonts, function (theme) {
    return _c("ItemPreview", {
      key: theme.id,
      attrs: {
        selected: theme.enabled,
        theme: theme,
        unique: _vm.fonts.length === 1,
        type: "font"
      },
      on: {
        change: _vm.changeFont
      }
    });
  }), 1)]), _vm._v(" "), _c("NcSettingsSection", {
    attrs: {
      name: _vm.t("theming", "Keyboard shortcuts")
    }
  }, [_c("p", [_vm._v(_vm._s(_vm.t("theming", "In some cases keyboard shortcuts can interfere with accessibility tools. In order to allow focusing on your tool correctly you can disable all keyboard shortcuts here. This will also disable all available shortcuts in apps.")))]), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    staticClass: "theming__preview-toggle",
    attrs: {
      checked: _vm.shortcutsDisabled,
      name: "shortcuts_disabled",
      type: "switch"
    },
    on: {
      "update:checked": function ($event) {
        _vm.shortcutsDisabled = $event;
      },
      change: _vm.changeShortcutsDisabled
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("theming", "Disable all keyboard shortcuts")) + "\n\t\t")])], 1), _vm._v(" "), _c("NcSettingsSection", {
    staticClass: "background",
    attrs: {
      name: _vm.t("theming", "Background"),
      "data-user-theming-background-disabled": ""
    }
  }, [_vm.isUserThemingDisabled ? [_c("p", [_vm._v(_vm._s(_vm.t("theming", "Customization has been disabled by your administrator")))])] : [_c("p", [_vm._v(_vm._s(_vm.t("theming", "Set a custom background")))]), _vm._v(" "), _c("BackgroundSettings", {
    staticClass: "background__grid",
    on: {
      "update:background": _vm.refreshGlobalStyles
    }
  })]], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=template&id=2cb9c9e7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=template&id=2cb9c9e7&scoped=true& ***!
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
  return _c("div", {
    staticClass: "background-selector",
    attrs: {
      "data-user-theming-background-settings": ""
    }
  }, [_c("button", {
    staticClass: "background background__filepicker",
    class: {
      "icon-loading": _vm.loading === "custom",
      "background--active": _vm.backgroundImage === "custom"
    },
    attrs: {
      "data-color-bright": _vm.invertTextColor(_vm.Theming.color),
      "data-user-theming-background-custom": "",
      tabindex: "0"
    },
    on: {
      click: _vm.pickFile
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("theming", "Custom background")) + "\n\t\t"), _vm.backgroundImage !== "custom" ? _c("ImageEdit", {
    attrs: {
      size: 26
    }
  }) : _vm._e(), _vm._v(" "), _c("Check", {
    attrs: {
      size: 44
    }
  })], 1), _vm._v(" "), _c("button", {
    staticClass: "background background__default",
    class: {
      "icon-loading": _vm.loading === "default",
      "background--active": _vm.backgroundImage === "default"
    },
    style: {
      "--border-color": _vm.Theming.defaultColor
    },
    attrs: {
      "data-color-bright": _vm.invertTextColor(_vm.Theming.defaultColor),
      "data-user-theming-background-default": "",
      tabindex: "0"
    },
    on: {
      click: _vm.setDefault
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("theming", "Default background")) + "\n\t\t"), _c("Check", {
    attrs: {
      size: 44
    }
  })], 1), _vm._v(" "), _c("NcColorPicker", {
    on: {
      input: _vm.debouncePickColor
    },
    model: {
      value: _vm.Theming.color,
      callback: function ($$v) {
        _vm.$set(_vm.Theming, "color", $$v);
      },
      expression: "Theming.color"
    }
  }, [_c("button", {
    staticClass: "background background__color",
    style: {
      backgroundColor: _vm.Theming.color,
      "--border-color": _vm.Theming.color
    },
    attrs: {
      "data-color": _vm.Theming.color,
      "data-color-bright": _vm.invertTextColor(_vm.Theming.color),
      "data-user-theming-background-color": "",
      tabindex: "0"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("theming", "Change color")) + "\n\t\t")])]), _vm._v(" "), _c("button", {
    staticClass: "background background__delete",
    class: {
      "background--active": _vm.isBackgroundDisabled
    },
    attrs: {
      "data-user-theming-background-clear": "",
      tabindex: "0"
    },
    on: {
      click: _vm.removeBackground
    }
  }, [_vm._v("\n\t\t" + _vm._s(_vm.t("theming", "No background")) + "\n\t\t"), !_vm.isBackgroundDisabled ? _c("Close", {
    attrs: {
      size: 32
    }
  }) : _vm._e(), _vm._v(" "), _c("Check", {
    attrs: {
      size: 44
    }
  })], 1), _vm._v(" "), _vm._l(_vm.shippedBackgrounds, function (shippedBackground) {
    return _c("button", {
      key: shippedBackground.name,
      staticClass: "background background__shipped",
      class: {
        "icon-loading": _vm.loading === shippedBackground.name,
        "background--active": _vm.backgroundImage === shippedBackground.name
      },
      style: {
        backgroundImage: "url(" + shippedBackground.preview + ")",
        "--border-color": shippedBackground.details.primary_color
      },
      attrs: {
        title: shippedBackground.details.attribution,
        "aria-label": shippedBackground.details.attribution,
        "data-color-bright": shippedBackground.details.theming === "dark",
        "data-user-theming-background-shipped": shippedBackground.name,
        tabindex: "0"
      },
      on: {
        click: function ($event) {
          return _vm.setShipped(shippedBackground.name);
        }
      }
    }, [_c("Check", {
      attrs: {
        size: 44
      }
    })], 1);
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=template&id=5d6fc2af&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=template&id=5d6fc2af&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    staticClass: "theming__preview",
    class: "theming__preview--" + _vm.theme.id
  }, [_c("div", {
    staticClass: "theming__preview-image",
    style: {
      backgroundImage: "url(" + _vm.img + ")"
    },
    on: {
      click: _vm.onToggle
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "theming__preview-description"
  }, [_c("h3", [_vm._v(_vm._s(_vm.theme.title))]), _vm._v(" "), _c("p", {
    staticClass: "theming__preview-explanation"
  }, [_vm._v(_vm._s(_vm.theme.description))]), _vm._v(" "), _vm.enforced ? _c("span", {
    staticClass: "theming__preview-warning",
    attrs: {
      role: "note"
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.t("theming", "Theme selection is enforced")) + "\n\t\t")]) : _vm._e(), _vm._v(" "), _c("NcCheckboxRadioSwitch", {
    staticClass: "theming__preview-toggle",
    attrs: {
      checked: _vm.checked,
      disabled: _vm.enforced,
      name: _vm.name,
      type: _vm.switchType
    },
    on: {
      "update:checked": function ($event) {
        _vm.checked = $event;
      }
    }
  }, [_vm._v("\n\t\t\t" + _vm._s(_vm.theme.enableLabel) + "\n\t\t")])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.theming p[data-v-7ec2e6a8] {
  max-width: 800px;
}
.theming[data-v-7ec2e6a8] a {
  font-weight: bold;
}
.theming[data-v-7ec2e6a8] a:hover, .theming[data-v-7ec2e6a8] a:focus {
  text-decoration: underline;
}
.theming__preview-list[data-v-7ec2e6a8] {
  --gap: 30px;
  display: grid;
  margin-top: var(--gap);
  column-gap: var(--gap);
  row-gap: var(--gap);
  grid-template-columns: 1fr 1fr;
}
.background__grid[data-v-7ec2e6a8] {
  margin-top: 30px;
}
@media (max-width: 1440px) {
.theming__preview-list[data-v-7ec2e6a8] {
    display: flex;
    flex-direction: column;
}
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.background-selector[data-v-2cb9c9e7] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.background-selector .background[data-v-2cb9c9e7] {
  overflow: hidden;
  width: 176px;
  height: 96px;
  margin: 8px;
  text-align: center;
  border: 2px solid var(--color-main-background);
  border-radius: var(--border-radius-large);
  background-position: center center;
  background-size: cover;
}
.background-selector .background__filepicker.background--active[data-v-2cb9c9e7] {
  color: white;
  background-image: var(--image-background);
}
.background-selector .background__default[data-v-2cb9c9e7] {
  background-color: var(--color-primary-default);
  background-image: var(--image-background-plain, var(--image-background-default));
}
.background-selector .background__filepicker[data-v-2cb9c9e7], .background-selector .background__default[data-v-2cb9c9e7], .background-selector .background__color[data-v-2cb9c9e7] {
  border-color: var(--color-border);
}
.background-selector .background__color[data-v-2cb9c9e7] {
  color: var(--color-primary-text);
  background-color: var(--color-primary-default);
}
.background-selector .background__default[data-v-2cb9c9e7], .background-selector .background__shipped[data-v-2cb9c9e7] {
  color: white;
}
.background-selector .background[data-color-bright][data-v-2cb9c9e7] {
  color: black;
}
.background-selector .background--active[data-v-2cb9c9e7], .background-selector .background[data-v-2cb9c9e7]:hover, .background-selector .background[data-v-2cb9c9e7]:focus {
  border: 2px solid var(--border-color, var(--color-primary-element)) !important;
}
.background-selector .background span[data-v-2cb9c9e7] {
  margin: 4px;
}
.background-selector .background .check-icon[data-v-2cb9c9e7] {
  display: none;
}
.background-selector .background--active:not(.icon-loading) .check-icon[data-v-2cb9c9e7] {
  display: block !important;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.theming__preview[data-v-5d6fc2af] {
  --ratio: 16;
  position: relative;
  display: flex;
  justify-content: flex-start;
  max-width: 800px;
}
.theming__preview[data-v-5d6fc2af],
.theming__preview *[data-v-5d6fc2af] {
  user-select: none;
}
.theming__preview-image[data-v-5d6fc2af] {
  flex-basis: calc(16px * var(--ratio));
  flex-shrink: 0;
  height: calc(10px * var(--ratio));
  margin-right: var(--gap);
  cursor: pointer;
  border-radius: var(--border-radius);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
}
.theming__preview-explanation[data-v-5d6fc2af] {
  margin-bottom: 10px;
}
.theming__preview-description[data-v-5d6fc2af] {
  display: flex;
  flex-direction: column;
}
.theming__preview-description h3[data-v-5d6fc2af] {
  font-weight: bold;
  margin-bottom: 0;
}
.theming__preview-description label[data-v-5d6fc2af] {
  padding: 12px 0;
}
.theming__preview--default[data-v-5d6fc2af] {
  grid-column: span 2;
}
.theming__preview-warning[data-v-5d6fc2af] {
  color: var(--color-warning);
}
@media (max-width: 682.6666666667px) {
.theming__preview[data-v-5d6fc2af] {
    flex-direction: column;
}
.theming__preview-image[data-v-5d6fc2af] {
    margin: 0;
}
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseFilter.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/defaults.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/defaults.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/lodash/filter.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/filter.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__(/*! ./_baseFilter */ "./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "./node_modules/node-vibrant/lib/browser.js":
/*!**************************************************!*\
  !*** ./node_modules/node-vibrant/lib/browser.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var vibrant_1 = __importDefault(__webpack_require__(/*! ./vibrant */ "./node_modules/node-vibrant/lib/vibrant.js"));
var browser_1 = __importDefault(__webpack_require__(/*! ./image/browser */ "./node_modules/node-vibrant/lib/image/browser.js"));
vibrant_1.default.DefaultOpts.ImageClass = browser_1.default;
module.exports = vibrant_1.default;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/builder.js":
/*!**************************************************!*\
  !*** ./node_modules/node-vibrant/lib/builder.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var vibrant_1 = __importDefault(__webpack_require__(/*! ./vibrant */ "./node_modules/node-vibrant/lib/vibrant.js"));
var clone = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
var Builder = /** @class */ (function () {
    function Builder(src, opts) {
        if (opts === void 0) { opts = {}; }
        this._src = src;
        this._opts = opts;
        this._opts.filters = clone(vibrant_1.default.DefaultOpts.filters);
    }
    Builder.prototype.maxColorCount = function (n) {
        this._opts.colorCount = n;
        return this;
    };
    Builder.prototype.maxDimension = function (d) {
        this._opts.maxDimension = d;
        return this;
    };
    Builder.prototype.addFilter = function (f) {
        this._opts.filters.push(f);
        return this;
    };
    Builder.prototype.removeFilter = function (f) {
        var i = this._opts.filters.indexOf(f);
        if (i > 0)
            this._opts.filters.splice(i);
        return this;
    };
    Builder.prototype.clearFilters = function () {
        this._opts.filters = [];
        return this;
    };
    Builder.prototype.quality = function (q) {
        this._opts.quality = q;
        return this;
    };
    Builder.prototype.useImageClass = function (imageClass) {
        this._opts.ImageClass = imageClass;
        return this;
    };
    Builder.prototype.useGenerator = function (generator) {
        this._opts.generator = generator;
        return this;
    };
    Builder.prototype.useQuantizer = function (quantizer) {
        this._opts.quantizer = quantizer;
        return this;
    };
    Builder.prototype.build = function () {
        return new vibrant_1.default(this._src, this._opts);
    };
    Builder.prototype.getPalette = function (cb) {
        return this.build().getPalette(cb);
    };
    Builder.prototype.getSwatches = function (cb) {
        return this.build().getPalette(cb);
    };
    return Builder;
}());
exports["default"] = Builder;
//# sourceMappingURL=builder.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/color.js":
/*!************************************************!*\
  !*** ./node_modules/node-vibrant/lib/color.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Swatch = void 0;
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/node-vibrant/lib/util.js");
var filter = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
var Swatch = /** @class */ (function () {
    function Swatch(rgb, population) {
        this._rgb = rgb;
        this._population = population;
    }
    Swatch.applyFilter = function (colors, f) {
        return typeof f === 'function'
            ? filter(colors, function (_a) {
                var r = _a.r, g = _a.g, b = _a.b;
                return f(r, g, b, 255);
            })
            : colors;
    };
    Object.defineProperty(Swatch.prototype, "r", {
        get: function () { return this._rgb[0]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "g", {
        get: function () { return this._rgb[1]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "b", {
        get: function () { return this._rgb[2]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "rgb", {
        get: function () { return this._rgb; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "hsl", {
        get: function () {
            if (!this._hsl) {
                var _a = this._rgb, r = _a[0], g = _a[1], b = _a[2];
                this._hsl = util_1.rgbToHsl(r, g, b);
            }
            return this._hsl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "hex", {
        get: function () {
            if (!this._hex) {
                var _a = this._rgb, r = _a[0], g = _a[1], b = _a[2];
                this._hex = util_1.rgbToHex(r, g, b);
            }
            return this._hex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "population", {
        get: function () { return this._population; },
        enumerable: false,
        configurable: true
    });
    Swatch.prototype.toJSON = function () {
        return {
            rgb: this.rgb,
            population: this.population
        };
    };
    // TODO: deprecate internally, use property instead
    Swatch.prototype.getRgb = function () { return this._rgb; };
    // TODO: deprecate internally, use property instead
    Swatch.prototype.getHsl = function () { return this.hsl; };
    // TODO: deprecate internally, use property instead
    Swatch.prototype.getPopulation = function () { return this._population; };
    // TODO: deprecate internally, use property instead
    Swatch.prototype.getHex = function () { return this.hex; };
    Swatch.prototype.getYiq = function () {
        if (!this._yiq) {
            var rgb = this._rgb;
            this._yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        }
        return this._yiq;
    };
    Object.defineProperty(Swatch.prototype, "titleTextColor", {
        get: function () {
            if (!this._titleTextColor) {
                this._titleTextColor = this.getYiq() < 200 ? '#fff' : '#000';
            }
            return this._titleTextColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Swatch.prototype, "bodyTextColor", {
        get: function () {
            if (!this._bodyTextColor) {
                this._bodyTextColor = this.getYiq() < 150 ? '#fff' : '#000';
            }
            return this._bodyTextColor;
        },
        enumerable: false,
        configurable: true
    });
    Swatch.prototype.getTitleTextColor = function () {
        return this.titleTextColor;
    };
    Swatch.prototype.getBodyTextColor = function () {
        return this.bodyTextColor;
    };
    return Swatch;
}());
exports.Swatch = Swatch;
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/filter/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-vibrant/lib/filter/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function defaultFilter(r, g, b, a) {
    return a >= 125 &&
        !(r > 250 && g > 250 && b > 250);
}
exports["default"] = defaultFilter;
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/filter/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/node-vibrant/lib/filter/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.combineFilters = void 0;
var default_1 = __webpack_require__(/*! ./default */ "./node_modules/node-vibrant/lib/filter/default.js");
Object.defineProperty(exports, "Default", ({ enumerable: true, get: function () { return default_1.default; } }));
function combineFilters(filters) {
    // TODO: caching
    if (!Array.isArray(filters) || filters.length === 0)
        return null;
    return function (r, g, b, a) {
        if (a === 0)
            return false;
        for (var i = 0; i < filters.length; i++) {
            if (!filters[i](r, g, b, a))
                return false;
        }
        return true;
    };
}
exports.combineFilters = combineFilters;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/generator/default.js":
/*!************************************************************!*\
  !*** ./node_modules/node-vibrant/lib/generator/default.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var color_1 = __webpack_require__(/*! ../color */ "./node_modules/node-vibrant/lib/color.js");
var util_1 = __webpack_require__(/*! ../util */ "./node_modules/node-vibrant/lib/util.js");
var defaults = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js");
var DefaultOpts = {
    targetDarkLuma: 0.26,
    maxDarkLuma: 0.45,
    minLightLuma: 0.55,
    targetLightLuma: 0.74,
    minNormalLuma: 0.3,
    targetNormalLuma: 0.5,
    maxNormalLuma: 0.7,
    targetMutesSaturation: 0.3,
    maxMutesSaturation: 0.4,
    targetVibrantSaturation: 1.0,
    minVibrantSaturation: 0.35,
    weightSaturation: 3,
    weightLuma: 6.5,
    weightPopulation: 0.5
};
function _findMaxPopulation(swatches) {
    var p = 0;
    swatches.forEach(function (s) {
        p = Math.max(p, s.getPopulation());
    });
    return p;
}
function _isAlreadySelected(palette, s) {
    return palette.Vibrant === s ||
        palette.DarkVibrant === s ||
        palette.LightVibrant === s ||
        palette.Muted === s ||
        palette.DarkMuted === s ||
        palette.LightMuted === s;
}
function _createComparisonValue(saturation, targetSaturation, luma, targetLuma, population, maxPopulation, opts) {
    function weightedMean() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sum = 0;
        var weightSum = 0;
        for (var i = 0; i < values.length; i += 2) {
            var value = values[i];
            var weight = values[i + 1];
            sum += value * weight;
            weightSum += weight;
        }
        return sum / weightSum;
    }
    function invertDiff(value, targetValue) {
        return 1 - Math.abs(value - targetValue);
    }
    return weightedMean(invertDiff(saturation, targetSaturation), opts.weightSaturation, invertDiff(luma, targetLuma), opts.weightLuma, population / maxPopulation, opts.weightPopulation);
}
function _findColorVariation(palette, swatches, maxPopulation, targetLuma, minLuma, maxLuma, targetSaturation, minSaturation, maxSaturation, opts) {
    var max = null;
    var maxValue = 0;
    swatches.forEach(function (swatch) {
        var _a = swatch.getHsl(), s = _a[1], l = _a[2];
        if (s >= minSaturation && s <= maxSaturation &&
            l >= minLuma && l <= maxLuma &&
            !_isAlreadySelected(palette, swatch)) {
            var value = _createComparisonValue(s, targetSaturation, l, targetLuma, swatch.getPopulation(), maxPopulation, opts);
            if (max === null || value > maxValue) {
                max = swatch;
                maxValue = value;
            }
        }
    });
    return max;
}
function _generateVariationColors(swatches, maxPopulation, opts) {
    var palette = {};
    // mVibrantSwatch = findColor(TARGET_NORMAL_LUMA, MIN_NORMAL_LUMA, MAX_NORMAL_LUMA,
    //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f);
    palette.Vibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetNormalLuma, opts.minNormalLuma, opts.maxNormalLuma, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
    // mLightVibrantSwatch = findColor(TARGET_LIGHT_LUMA, MIN_LIGHT_LUMA, 1f,
    //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f);
    palette.LightVibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetLightLuma, opts.minLightLuma, 1, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
    // mDarkVibrantSwatch = findColor(TARGET_DARK_LUMA, 0f, MAX_DARK_LUMA,
    //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f);
    palette.DarkVibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetDarkLuma, 0, opts.maxDarkLuma, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
    // mMutedSwatch = findColor(TARGET_NORMAL_LUMA, MIN_NORMAL_LUMA, MAX_NORMAL_LUMA,
    //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION);
    palette.Muted = _findColorVariation(palette, swatches, maxPopulation, opts.targetNormalLuma, opts.minNormalLuma, opts.maxNormalLuma, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
    // mLightMutedColor = findColor(TARGET_LIGHT_LUMA, MIN_LIGHT_LUMA, 1f,
    //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION);
    palette.LightMuted = _findColorVariation(palette, swatches, maxPopulation, opts.targetLightLuma, opts.minLightLuma, 1, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
    // mDarkMutedSwatch = findColor(TARGET_DARK_LUMA, 0f, MAX_DARK_LUMA,
    //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION);
    palette.DarkMuted = _findColorVariation(palette, swatches, maxPopulation, opts.targetDarkLuma, 0, opts.maxDarkLuma, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
    return palette;
}
function _generateEmptySwatches(palette, maxPopulation, opts) {
    if (palette.Vibrant === null && palette.DarkVibrant === null && palette.LightVibrant === null) {
        if (palette.DarkVibrant === null && palette.DarkMuted !== null) {
            var _a = palette.DarkMuted.getHsl(), h = _a[0], s = _a[1], l = _a[2];
            l = opts.targetDarkLuma;
            palette.DarkVibrant = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
        }
        if (palette.LightVibrant === null && palette.LightMuted !== null) {
            var _b = palette.LightMuted.getHsl(), h = _b[0], s = _b[1], l = _b[2];
            l = opts.targetDarkLuma;
            palette.DarkVibrant = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
        }
    }
    if (palette.Vibrant === null && palette.DarkVibrant !== null) {
        var _c = palette.DarkVibrant.getHsl(), h = _c[0], s = _c[1], l = _c[2];
        l = opts.targetNormalLuma;
        palette.Vibrant = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
    }
    else if (palette.Vibrant === null && palette.LightVibrant !== null) {
        var _d = palette.LightVibrant.getHsl(), h = _d[0], s = _d[1], l = _d[2];
        l = opts.targetNormalLuma;
        palette.Vibrant = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
    }
    if (palette.DarkVibrant === null && palette.Vibrant !== null) {
        var _e = palette.Vibrant.getHsl(), h = _e[0], s = _e[1], l = _e[2];
        l = opts.targetDarkLuma;
        palette.DarkVibrant = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
    }
    if (palette.LightVibrant === null && palette.Vibrant !== null) {
        var _f = palette.Vibrant.getHsl(), h = _f[0], s = _f[1], l = _f[2];
        l = opts.targetLightLuma;
        palette.LightVibrant = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
    }
    if (palette.Muted === null && palette.Vibrant !== null) {
        var _g = palette.Vibrant.getHsl(), h = _g[0], s = _g[1], l = _g[2];
        l = opts.targetMutesSaturation;
        palette.Muted = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
    }
    if (palette.DarkMuted === null && palette.DarkVibrant !== null) {
        var _h = palette.DarkVibrant.getHsl(), h = _h[0], s = _h[1], l = _h[2];
        l = opts.targetMutesSaturation;
        palette.DarkMuted = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
    }
    if (palette.LightMuted === null && palette.LightVibrant !== null) {
        var _j = palette.LightVibrant.getHsl(), h = _j[0], s = _j[1], l = _j[2];
        l = opts.targetMutesSaturation;
        palette.LightMuted = new color_1.Swatch(util_1.hslToRgb(h, s, l), 0);
    }
}
var DefaultGenerator = function (swatches, opts) {
    opts = defaults({}, opts, DefaultOpts);
    var maxPopulation = _findMaxPopulation(swatches);
    var palette = _generateVariationColors(swatches, maxPopulation, opts);
    _generateEmptySwatches(palette, maxPopulation, opts);
    return palette;
};
exports["default"] = DefaultGenerator;
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/generator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/node-vibrant/lib/generator/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var default_1 = __webpack_require__(/*! ./default */ "./node_modules/node-vibrant/lib/generator/default.js");
Object.defineProperty(exports, "Default", ({ enumerable: true, get: function () { return default_1.default; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/image/base.js":
/*!*****************************************************!*\
  !*** ./node_modules/node-vibrant/lib/image/base.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageBase = void 0;
var ImageBase = /** @class */ (function () {
    function ImageBase() {
    }
    ImageBase.prototype.scaleDown = function (opts) {
        var width = this.getWidth();
        var height = this.getHeight();
        var ratio = 1;
        if (opts.maxDimension > 0) {
            var maxSide = Math.max(width, height);
            if (maxSide > opts.maxDimension)
                ratio = opts.maxDimension / maxSide;
        }
        else {
            ratio = 1 / opts.quality;
        }
        if (ratio < 1)
            this.resize(width * ratio, height * ratio, ratio);
    };
    ImageBase.prototype.applyFilter = function (filter) {
        var imageData = this.getImageData();
        if (typeof filter === 'function') {
            var pixels = imageData.data;
            var n = pixels.length / 4;
            var offset = void 0, r = void 0, g = void 0, b = void 0, a = void 0;
            for (var i = 0; i < n; i++) {
                offset = i * 4;
                r = pixels[offset + 0];
                g = pixels[offset + 1];
                b = pixels[offset + 2];
                a = pixels[offset + 3];
                // Mark ignored color
                if (!filter(r, g, b, a))
                    pixels[offset + 3] = 0;
            }
        }
        return Promise.resolve(imageData);
    };
    return ImageBase;
}());
exports.ImageBase = ImageBase;
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/image/browser.js":
/*!********************************************************!*\
  !*** ./node_modules/node-vibrant/lib/image/browser.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var base_1 = __webpack_require__(/*! ./base */ "./node_modules/node-vibrant/lib/image/base.js");
var Url = __importStar(__webpack_require__(/*! url */ "./node_modules/url/url.js"));
function isRelativeUrl(url) {
    var u = Url.parse(url);
    return u.protocol === null &&
        u.host === null &&
        u.port === null;
}
function isSameOrigin(a, b) {
    var ua = Url.parse(a);
    var ub = Url.parse(b);
    // https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
    return ua.protocol === ub.protocol &&
        ua.hostname === ub.hostname &&
        ua.port === ub.port;
}
var BrowserImage = /** @class */ (function (_super) {
    __extends(BrowserImage, _super);
    function BrowserImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserImage.prototype._initCanvas = function () {
        var img = this.image;
        var canvas = this._canvas = document.createElement('canvas');
        var context = this._context = canvas.getContext('2d');
        canvas.className = 'vibrant-canvas';
        canvas.style.display = 'none';
        this._width = canvas.width = img.width;
        this._height = canvas.height = img.height;
        context.drawImage(img, 0, 0);
        document.body.appendChild(canvas);
    };
    BrowserImage.prototype.load = function (image) {
        var _this = this;
        var img = null;
        var src = null;
        if (typeof image === 'string') {
            img = document.createElement('img');
            if (!isRelativeUrl(image) && !isSameOrigin(window.location.href, image)) {
                img.crossOrigin = 'anonymous';
            }
            src = img.src = image;
        }
        else if (image instanceof HTMLImageElement) {
            img = image;
            src = image.src;
        }
        else {
            return Promise.reject(new Error("Cannot load buffer as an image in browser"));
        }
        this.image = img;
        return new Promise(function (resolve, reject) {
            var onImageLoad = function () {
                _this._initCanvas();
                resolve(_this);
            };
            if (img.complete) {
                // Already loaded
                onImageLoad();
            }
            else {
                img.onload = onImageLoad;
                img.onerror = function (e) { return reject(new Error("Fail to load image: " + src)); };
            }
        });
    };
    BrowserImage.prototype.clear = function () {
        this._context.clearRect(0, 0, this._width, this._height);
    };
    BrowserImage.prototype.update = function (imageData) {
        this._context.putImageData(imageData, 0, 0);
    };
    BrowserImage.prototype.getWidth = function () {
        return this._width;
    };
    BrowserImage.prototype.getHeight = function () {
        return this._height;
    };
    BrowserImage.prototype.resize = function (targetWidth, targetHeight, ratio) {
        var _a = this, canvas = _a._canvas, context = _a._context, img = _a.image;
        this._width = canvas.width = targetWidth;
        this._height = canvas.height = targetHeight;
        context.scale(ratio, ratio);
        context.drawImage(img, 0, 0);
    };
    BrowserImage.prototype.getPixelCount = function () {
        return this._width * this._height;
    };
    BrowserImage.prototype.getImageData = function () {
        return this._context.getImageData(0, 0, this._width, this._height);
    };
    BrowserImage.prototype.remove = function () {
        if (this._canvas && this._canvas.parentNode) {
            this._canvas.parentNode.removeChild(this._canvas);
        }
    };
    return BrowserImage;
}(base_1.ImageBase));
exports["default"] = BrowserImage;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/quantizer/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/node-vibrant/lib/quantizer/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebWorker = void 0;
var mmcq_1 = __webpack_require__(/*! ./mmcq */ "./node_modules/node-vibrant/lib/quantizer/mmcq.js");
Object.defineProperty(exports, "MMCQ", ({ enumerable: true, get: function () { return mmcq_1.default; } }));
exports.WebWorker = null;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/quantizer/mmcq.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-vibrant/lib/quantizer/mmcq.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var color_1 = __webpack_require__(/*! ../color */ "./node_modules/node-vibrant/lib/color.js");
var vbox_1 = __importDefault(__webpack_require__(/*! ./vbox */ "./node_modules/node-vibrant/lib/quantizer/vbox.js"));
var pqueue_1 = __importDefault(__webpack_require__(/*! ./pqueue */ "./node_modules/node-vibrant/lib/quantizer/pqueue.js"));
var fractByPopulations = 0.75;
function _splitBoxes(pq, target) {
    var lastSize = pq.size();
    while (pq.size() < target) {
        var vbox = pq.pop();
        if (vbox && vbox.count() > 0) {
            var _a = vbox.split(), vbox1 = _a[0], vbox2 = _a[1];
            pq.push(vbox1);
            if (vbox2 && vbox2.count() > 0)
                pq.push(vbox2);
            // No more new boxes, converged
            if (pq.size() === lastSize) {
                break;
            }
            else {
                lastSize = pq.size();
            }
        }
        else {
            break;
        }
    }
}
var MMCQ = function (pixels, opts) {
    if (pixels.length === 0 || opts.colorCount < 2 || opts.colorCount > 256) {
        throw new Error('Wrong MMCQ parameters');
    }
    var vbox = vbox_1.default.build(pixels);
    var hist = vbox.hist;
    var colorCount = Object.keys(hist).length;
    var pq = new pqueue_1.default(function (a, b) { return a.count() - b.count(); });
    pq.push(vbox);
    // first set of colors, sorted by population
    _splitBoxes(pq, fractByPopulations * opts.colorCount);
    // Re-order
    var pq2 = new pqueue_1.default(function (a, b) { return a.count() * a.volume() - b.count() * b.volume(); });
    pq2.contents = pq.contents;
    // next set - generate the median cuts using the (npix * vol) sorting.
    _splitBoxes(pq2, opts.colorCount - pq2.size());
    // calculate the actual colors
    return generateSwatches(pq2);
};
function generateSwatches(pq) {
    var swatches = [];
    while (pq.size()) {
        var v = pq.pop();
        var color = v.avg();
        var r = color[0], g = color[1], b = color[2];
        swatches.push(new color_1.Swatch(color, v.count()));
    }
    return swatches;
}
exports["default"] = MMCQ;
//# sourceMappingURL=mmcq.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/quantizer/pqueue.js":
/*!***********************************************************!*\
  !*** ./node_modules/node-vibrant/lib/quantizer/pqueue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var PQueue = /** @class */ (function () {
    function PQueue(comparator) {
        this._comparator = comparator;
        this.contents = [];
        this._sorted = false;
    }
    PQueue.prototype._sort = function () {
        if (!this._sorted) {
            this.contents.sort(this._comparator);
            this._sorted = true;
        }
    };
    PQueue.prototype.push = function (item) {
        this.contents.push(item);
        this._sorted = false;
    };
    PQueue.prototype.peek = function (index) {
        this._sort();
        index = typeof index === 'number' ? index : this.contents.length - 1;
        return this.contents[index];
    };
    PQueue.prototype.pop = function () {
        this._sort();
        return this.contents.pop();
    };
    PQueue.prototype.size = function () {
        return this.contents.length;
    };
    PQueue.prototype.map = function (mapper) {
        this._sort();
        return this.contents.map(mapper);
    };
    return PQueue;
}());
exports["default"] = PQueue;
//# sourceMappingURL=pqueue.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/quantizer/vbox.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-vibrant/lib/quantizer/vbox.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __webpack_require__(/*! ../util */ "./node_modules/node-vibrant/lib/util.js");
var VBox = /** @class */ (function () {
    function VBox(r1, r2, g1, g2, b1, b2, hist) {
        this._volume = -1;
        this._count = -1;
        this.dimension = { r1: r1, r2: r2, g1: g1, g2: g2, b1: b1, b2: b2 };
        this.hist = hist;
    }
    VBox.build = function (pixels, shouldIgnore) {
        var hn = 1 << (3 * util_1.SIGBITS);
        var hist = new Uint32Array(hn);
        var rmax;
        var rmin;
        var gmax;
        var gmin;
        var bmax;
        var bmin;
        var r;
        var g;
        var b;
        var a;
        rmax = gmax = bmax = 0;
        rmin = gmin = bmin = Number.MAX_VALUE;
        var n = pixels.length / 4;
        var i = 0;
        while (i < n) {
            var offset = i * 4;
            i++;
            r = pixels[offset + 0];
            g = pixels[offset + 1];
            b = pixels[offset + 2];
            a = pixels[offset + 3];
            // Ignored pixels' alpha is marked as 0 in filtering stage
            if (a === 0)
                continue;
            r = r >> util_1.RSHIFT;
            g = g >> util_1.RSHIFT;
            b = b >> util_1.RSHIFT;
            var index = util_1.getColorIndex(r, g, b);
            hist[index] += 1;
            if (r > rmax)
                rmax = r;
            if (r < rmin)
                rmin = r;
            if (g > gmax)
                gmax = g;
            if (g < gmin)
                gmin = g;
            if (b > bmax)
                bmax = b;
            if (b < bmin)
                bmin = b;
        }
        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, hist);
    };
    VBox.prototype.invalidate = function () {
        this._volume = this._count = -1;
        this._avg = null;
    };
    VBox.prototype.volume = function () {
        if (this._volume < 0) {
            var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
            this._volume = (r2 - r1 + 1) * (g2 - g1 + 1) * (b2 - b1 + 1);
        }
        return this._volume;
    };
    VBox.prototype.count = function () {
        if (this._count < 0) {
            var hist = this.hist;
            var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
            var c = 0;
            for (var r = r1; r <= r2; r++) {
                for (var g = g1; g <= g2; g++) {
                    for (var b = b1; b <= b2; b++) {
                        var index = util_1.getColorIndex(r, g, b);
                        c += hist[index];
                    }
                }
            }
            this._count = c;
        }
        return this._count;
    };
    VBox.prototype.clone = function () {
        var hist = this.hist;
        var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
        return new VBox(r1, r2, g1, g2, b1, b2, hist);
    };
    VBox.prototype.avg = function () {
        if (!this._avg) {
            var hist = this.hist;
            var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
            var ntot = 0;
            var mult = 1 << (8 - util_1.SIGBITS);
            var rsum = void 0;
            var gsum = void 0;
            var bsum = void 0;
            rsum = gsum = bsum = 0;
            for (var r = r1; r <= r2; r++) {
                for (var g = g1; g <= g2; g++) {
                    for (var b = b1; b <= b2; b++) {
                        var index = util_1.getColorIndex(r, g, b);
                        var h = hist[index];
                        ntot += h;
                        rsum += (h * (r + 0.5) * mult);
                        gsum += (h * (g + 0.5) * mult);
                        bsum += (h * (b + 0.5) * mult);
                    }
                }
            }
            if (ntot) {
                this._avg = [
                    ~~(rsum / ntot),
                    ~~(gsum / ntot),
                    ~~(bsum / ntot)
                ];
            }
            else {
                this._avg = [
                    ~~(mult * (r1 + r2 + 1) / 2),
                    ~~(mult * (g1 + g2 + 1) / 2),
                    ~~(mult * (b1 + b2 + 1) / 2)
                ];
            }
        }
        return this._avg;
    };
    VBox.prototype.contains = function (rgb) {
        var r = rgb[0], g = rgb[1], b = rgb[2];
        var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
        r >>= util_1.RSHIFT;
        g >>= util_1.RSHIFT;
        b >>= util_1.RSHIFT;
        return r >= r1 && r <= r2 &&
            g >= g1 && g <= g2 &&
            b >= b1 && b <= b2;
    };
    VBox.prototype.split = function () {
        var hist = this.hist;
        var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
        var count = this.count();
        if (!count)
            return [];
        if (count === 1)
            return [this.clone()];
        var rw = r2 - r1 + 1;
        var gw = g2 - g1 + 1;
        var bw = b2 - b1 + 1;
        var maxw = Math.max(rw, gw, bw);
        var accSum = null;
        var sum;
        var total;
        sum = total = 0;
        var maxd = null;
        if (maxw === rw) {
            maxd = 'r';
            accSum = new Uint32Array(r2 + 1);
            for (var r = r1; r <= r2; r++) {
                sum = 0;
                for (var g = g1; g <= g2; g++) {
                    for (var b = b1; b <= b2; b++) {
                        var index = util_1.getColorIndex(r, g, b);
                        sum += hist[index];
                    }
                }
                total += sum;
                accSum[r] = total;
            }
        }
        else if (maxw === gw) {
            maxd = 'g';
            accSum = new Uint32Array(g2 + 1);
            for (var g = g1; g <= g2; g++) {
                sum = 0;
                for (var r = r1; r <= r2; r++) {
                    for (var b = b1; b <= b2; b++) {
                        var index = util_1.getColorIndex(r, g, b);
                        sum += hist[index];
                    }
                }
                total += sum;
                accSum[g] = total;
            }
        }
        else {
            maxd = 'b';
            accSum = new Uint32Array(b2 + 1);
            for (var b = b1; b <= b2; b++) {
                sum = 0;
                for (var r = r1; r <= r2; r++) {
                    for (var g = g1; g <= g2; g++) {
                        var index = util_1.getColorIndex(r, g, b);
                        sum += hist[index];
                    }
                }
                total += sum;
                accSum[b] = total;
            }
        }
        var splitPoint = -1;
        var reverseSum = new Uint32Array(accSum.length);
        for (var i = 0; i < accSum.length; i++) {
            var d = accSum[i];
            if (splitPoint < 0 && d > total / 2)
                splitPoint = i;
            reverseSum[i] = total - d;
        }
        var vbox = this;
        function doCut(d) {
            var dim1 = d + '1';
            var dim2 = d + '2';
            var d1 = vbox.dimension[dim1];
            var d2 = vbox.dimension[dim2];
            var vbox1 = vbox.clone();
            var vbox2 = vbox.clone();
            var left = splitPoint - d1;
            var right = d2 - splitPoint;
            if (left <= right) {
                d2 = Math.min(d2 - 1, ~~(splitPoint + right / 2));
                d2 = Math.max(0, d2);
            }
            else {
                d2 = Math.max(d1, ~~(splitPoint - 1 - left / 2));
                d2 = Math.min(vbox.dimension[dim2], d2);
            }
            while (!accSum[d2])
                d2++;
            var c2 = reverseSum[d2];
            while (!c2 && accSum[d2 - 1])
                c2 = reverseSum[--d2];
            vbox1.dimension[dim2] = d2;
            vbox2.dimension[dim1] = d2 + 1;
            return [vbox1, vbox2];
        }
        return doCut(maxd);
    };
    return VBox;
}());
exports["default"] = VBox;
//# sourceMappingURL=vbox.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/util.js":
/*!***********************************************!*\
  !*** ./node_modules/node-vibrant/lib/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getColorIndex = exports.getColorDiffStatus = exports.hexDiff = exports.rgbDiff = exports.deltaE94 = exports.rgbToCIELab = exports.xyzToCIELab = exports.rgbToXyz = exports.hslToRgb = exports.rgbToHsl = exports.rgbToHex = exports.hexToRgb = exports.defer = exports.RSHIFT = exports.SIGBITS = exports.DELTAE94_DIFF_STATUS = void 0;
exports.DELTAE94_DIFF_STATUS = {
    NA: 0,
    PERFECT: 1,
    CLOSE: 2,
    GOOD: 10,
    SIMILAR: 50
};
exports.SIGBITS = 5;
exports.RSHIFT = 8 - exports.SIGBITS;
function defer() {
    var resolve;
    var reject;
    // eslint-disable-next-line promise/param-names
    var promise = new Promise(function (_resolve, _reject) {
        resolve = _resolve;
        reject = _reject;
    });
    // @ts-ignore
    return { resolve: resolve, reject: reject, promise: promise };
}
exports.defer = defer;
function hexToRgb(hex) {
    var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return m === null ? null : [m[1], m[2], m[3]].map(function (s) { return parseInt(s, 16); });
}
exports.hexToRgb = hexToRgb;
function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1, 7);
}
exports.rgbToHex = rgbToHex;
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h;
    var s;
    var l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        // @ts-ignore
        h /= 6;
    }
    // @ts-ignore
    return [h, s, l];
}
exports.rgbToHsl = rgbToHsl;
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    function hue2rgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    if (s === 0) {
        r = g = b = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - (l * s);
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - (1 / 3));
    }
    return [
        r * 255,
        g * 255,
        b * 255
    ];
}
exports.hslToRgb = hslToRgb;
function rgbToXyz(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    r = r > 0.04045 ? Math.pow((r + 0.005) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.005) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.005) / 1.055, 2.4) : b / 12.92;
    r *= 100;
    g *= 100;
    b *= 100;
    var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x, y, z];
}
exports.rgbToXyz = rgbToXyz;
function xyzToCIELab(x, y, z) {
    var REF_X = 95.047;
    var REF_Y = 100;
    var REF_Z = 108.883;
    x /= REF_X;
    y /= REF_Y;
    z /= REF_Z;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    var L = 116 * y - 16;
    var a = 500 * (x - y);
    var b = 200 * (y - z);
    return [L, a, b];
}
exports.xyzToCIELab = xyzToCIELab;
function rgbToCIELab(r, g, b) {
    var _a = rgbToXyz(r, g, b), x = _a[0], y = _a[1], z = _a[2];
    return xyzToCIELab(x, y, z);
}
exports.rgbToCIELab = rgbToCIELab;
function deltaE94(lab1, lab2) {
    var WEIGHT_L = 1;
    var WEIGHT_C = 1;
    var WEIGHT_H = 1;
    var L1 = lab1[0], a1 = lab1[1], b1 = lab1[2];
    var L2 = lab2[0], a2 = lab2[1], b2 = lab2[2];
    var dL = L1 - L2;
    var da = a1 - a2;
    var db = b1 - b2;
    var xC1 = Math.sqrt(a1 * a1 + b1 * b1);
    var xC2 = Math.sqrt(a2 * a2 + b2 * b2);
    var xDL = L2 - L1;
    var xDC = xC2 - xC1;
    var xDE = Math.sqrt(dL * dL + da * da + db * db);
    var xDH = (Math.sqrt(xDE) > Math.sqrt(Math.abs(xDL)) + Math.sqrt(Math.abs(xDC)))
        ? Math.sqrt(xDE * xDE - xDL * xDL - xDC * xDC)
        : 0;
    var xSC = 1 + 0.045 * xC1;
    var xSH = 1 + 0.015 * xC1;
    xDL /= WEIGHT_L;
    xDC /= WEIGHT_C * xSC;
    xDH /= WEIGHT_H * xSH;
    return Math.sqrt(xDL * xDL + xDC * xDC + xDH * xDH);
}
exports.deltaE94 = deltaE94;
function rgbDiff(rgb1, rgb2) {
    var lab1 = rgbToCIELab.apply(undefined, rgb1);
    var lab2 = rgbToCIELab.apply(undefined, rgb2);
    return deltaE94(lab1, lab2);
}
exports.rgbDiff = rgbDiff;
function hexDiff(hex1, hex2) {
    var rgb1 = hexToRgb(hex1);
    var rgb2 = hexToRgb(hex2);
    return rgbDiff(rgb1, rgb2);
}
exports.hexDiff = hexDiff;
function getColorDiffStatus(d) {
    if (d < exports.DELTAE94_DIFF_STATUS.NA) {
        return 'N/A';
    }
    // Not perceptible by human eyes
    if (d <= exports.DELTAE94_DIFF_STATUS.PERFECT) {
        return 'Perfect';
    }
    // Perceptible through close observation
    if (d <= exports.DELTAE94_DIFF_STATUS.CLOSE) {
        return 'Close';
    }
    // Perceptible at a glance
    if (d <= exports.DELTAE94_DIFF_STATUS.GOOD) {
        return 'Good';
    }
    // Colors are more similar than opposite
    if (d < exports.DELTAE94_DIFF_STATUS.SIMILAR) {
        return 'Similar';
    }
    return 'Wrong';
}
exports.getColorDiffStatus = getColorDiffStatus;
function getColorIndex(r, g, b) {
    return (r << (2 * exports.SIGBITS)) + (g << exports.SIGBITS) + b;
}
exports.getColorIndex = getColorIndex;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/node-vibrant/lib/vibrant.js":
/*!**************************************************!*\
  !*** ./node_modules/node-vibrant/lib/vibrant.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var color_1 = __webpack_require__(/*! ./color */ "./node_modules/node-vibrant/lib/color.js");
var builder_1 = __importDefault(__webpack_require__(/*! ./builder */ "./node_modules/node-vibrant/lib/builder.js"));
var Util = __importStar(__webpack_require__(/*! ./util */ "./node_modules/node-vibrant/lib/util.js"));
var Quantizer = __importStar(__webpack_require__(/*! ./quantizer */ "./node_modules/node-vibrant/lib/quantizer/index.js"));
var Generator = __importStar(__webpack_require__(/*! ./generator */ "./node_modules/node-vibrant/lib/generator/index.js"));
var Filters = __importStar(__webpack_require__(/*! ./filter */ "./node_modules/node-vibrant/lib/filter/index.js"));
var defaults = __webpack_require__(/*! lodash/defaults */ "./node_modules/lodash/defaults.js");
var Vibrant = /** @class */ (function () {
    function Vibrant(_src, opts) {
        this._src = _src;
        this.opts = defaults({}, opts, Vibrant.DefaultOpts);
        this.opts.combinedFilter = Filters.combineFilters(this.opts.filters);
    }
    Vibrant.from = function (src) {
        return new builder_1.default(src);
    };
    Vibrant.prototype._process = function (image, opts) {
        var quantizer = opts.quantizer, generator = opts.generator;
        image.scaleDown(opts);
        return image.applyFilter(opts.combinedFilter)
            .then(function (imageData) { return quantizer(imageData.data, opts); })
            .then(function (colors) { return color_1.Swatch.applyFilter(colors, opts.combinedFilter); })
            .then(function (colors) { return Promise.resolve(generator(colors)); });
    };
    Vibrant.prototype.palette = function () {
        return this.swatches();
    };
    Vibrant.prototype.swatches = function () {
        return this._palette;
    };
    Vibrant.prototype.getPalette = function (cb) {
        var _this = this;
        var image = new this.opts.ImageClass();
        var result = image.load(this._src)
            .then(function (image) { return _this._process(image, _this.opts); })
            .then(function (palette) {
            _this._palette = palette;
            image.remove();
            return palette;
        }, function (err) {
            image.remove();
            throw err;
        });
        if (cb)
            result.then(function (palette) { return cb(null, palette); }, function (err) { return cb(err); });
        return result;
    };
    Vibrant.Builder = builder_1.default;
    Vibrant.Quantizer = Quantizer;
    Vibrant.Generator = Generator;
    Vibrant.Filter = Filters;
    Vibrant.Util = Util;
    Vibrant.Swatch = color_1.Swatch;
    Vibrant.DefaultOpts = {
        colorCount: 64,
        quality: 5,
        generator: Generator.Default,
        ImageClass: null,
        quantizer: Quantizer.MMCQ,
        filters: [Filters.Default]
    };
    return Vibrant;
}());
exports["default"] = Vibrant;
//# sourceMappingURL=vibrant.js.map

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_style_index_0_id_7ec2e6a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_style_index_0_id_7ec2e6a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_style_index_0_id_7ec2e6a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_style_index_0_id_7ec2e6a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_style_index_0_id_7ec2e6a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss& ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_2cb9c9e7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_2cb9c9e7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_2cb9c9e7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_2cb9c9e7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_2cb9c9e7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_style_index_0_id_5d6fc2af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true&");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_style_index_0_id_5d6fc2af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_style_index_0_id_5d6fc2af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_style_index_0_id_5d6fc2af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_style_index_0_id_5d6fc2af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./apps/theming/src/UserThemes.vue":
/*!*****************************************!*\
  !*** ./apps/theming/src/UserThemes.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserThemes_vue_vue_type_template_id_7ec2e6a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserThemes.vue?vue&type=template&id=7ec2e6a8&scoped=true& */ "./apps/theming/src/UserThemes.vue?vue&type=template&id=7ec2e6a8&scoped=true&");
/* harmony import */ var _UserThemes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserThemes.vue?vue&type=script&lang=js& */ "./apps/theming/src/UserThemes.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserThemes_vue_vue_type_style_index_0_id_7ec2e6a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true& */ "./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserThemes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserThemes_vue_vue_type_template_id_7ec2e6a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserThemes_vue_vue_type_template_id_7ec2e6a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7ec2e6a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/UserThemes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/BackgroundSettings.vue":
/*!************************************************************!*\
  !*** ./apps/theming/src/components/BackgroundSettings.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BackgroundSettings_vue_vue_type_template_id_2cb9c9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackgroundSettings.vue?vue&type=template&id=2cb9c9e7&scoped=true& */ "./apps/theming/src/components/BackgroundSettings.vue?vue&type=template&id=2cb9c9e7&scoped=true&");
/* harmony import */ var _BackgroundSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackgroundSettings.vue?vue&type=script&lang=js& */ "./apps/theming/src/components/BackgroundSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _BackgroundSettings_vue_vue_type_style_index_0_id_2cb9c9e7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss& */ "./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BackgroundSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BackgroundSettings_vue_vue_type_template_id_2cb9c9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BackgroundSettings_vue_vue_type_template_id_2cb9c9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2cb9c9e7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/BackgroundSettings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./apps/theming/src/components/ItemPreview.vue":
/*!*****************************************************!*\
  !*** ./apps/theming/src/components/ItemPreview.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ItemPreview_vue_vue_type_template_id_5d6fc2af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemPreview.vue?vue&type=template&id=5d6fc2af&scoped=true& */ "./apps/theming/src/components/ItemPreview.vue?vue&type=template&id=5d6fc2af&scoped=true&");
/* harmony import */ var _ItemPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemPreview.vue?vue&type=script&lang=js& */ "./apps/theming/src/components/ItemPreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _ItemPreview_vue_vue_type_style_index_0_id_5d6fc2af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true& */ "./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ItemPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemPreview_vue_vue_type_template_id_5d6fc2af_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ItemPreview_vue_vue_type_template_id_5d6fc2af_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5d6fc2af",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "apps/theming/src/components/ItemPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-material-design-icons/ImageEdit.vue":
/*!**************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ImageEdit.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageEdit_vue_vue_type_template_id_112051ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageEdit.vue?vue&type=template&id=112051ee& */ "./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=template&id=112051ee&");
/* harmony import */ var _ImageEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageEdit.vue?vue&type=script&lang=js& */ "./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImageEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageEdit_vue_vue_type_template_id_112051ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImageEdit_vue_vue_type_template_id_112051ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-material-design-icons/ImageEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ImageEditIcon",
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

/***/ "./apps/theming/src/UserThemes.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./apps/theming/src/UserThemes.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserThemes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/BackgroundSettings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./apps/theming/src/components/BackgroundSettings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/components/ItemPreview.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./apps/theming/src/components/ItemPreview.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./apps/theming/src/UserThemes.vue?vue&type=template&id=7ec2e6a8&scoped=true&":
/*!************************************************************************************!*\
  !*** ./apps/theming/src/UserThemes.vue?vue&type=template&id=7ec2e6a8&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_template_id_7ec2e6a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_template_id_7ec2e6a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_template_id_7ec2e6a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserThemes.vue?vue&type=template&id=7ec2e6a8&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=template&id=7ec2e6a8&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/BackgroundSettings.vue?vue&type=template&id=2cb9c9e7&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./apps/theming/src/components/BackgroundSettings.vue?vue&type=template&id=2cb9c9e7&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_template_id_2cb9c9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_template_id_2cb9c9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_template_id_2cb9c9e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundSettings.vue?vue&type=template&id=2cb9c9e7&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=template&id=2cb9c9e7&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/ItemPreview.vue?vue&type=template&id=5d6fc2af&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./apps/theming/src/components/ItemPreview.vue?vue&type=template&id=5d6fc2af&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_template_id_5d6fc2af_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_template_id_5d6fc2af_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_template_id_5d6fc2af_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemPreview.vue?vue&type=template&id=5d6fc2af&scoped=true& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=template&id=5d6fc2af&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_UserThemes_vue_vue_type_style_index_0_id_7ec2e6a8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/UserThemes.vue?vue&type=style&index=0&id=7ec2e6a8&lang=scss&scoped=true&");


/***/ }),

/***/ "./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BackgroundSettings_vue_vue_type_style_index_0_id_2cb9c9e7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/BackgroundSettings.vue?vue&type=style&index=0&id=2cb9c9e7&scoped=true&lang=scss&");


/***/ }),

/***/ "./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPreview_vue_vue_type_style_index_0_id_5d6fc2af_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./apps/theming/src/components/ItemPreview.vue?vue&type=style&index=0&id=5d6fc2af&lang=scss&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_ImageEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/index.js??vue-loader-options!./ImageEdit.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_ImageEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=template&id=112051ee&":
/*!*********************************************************************************************!*\
  !*** ./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=template&id=112051ee& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ImageEdit_vue_vue_type_template_id_112051ee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ImageEdit_vue_vue_type_template_id_112051ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_vue_loader_lib_index_js_vue_loader_options_ImageEdit_vue_vue_type_template_id_112051ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../vue-loader/lib/index.js??vue-loader-options!./ImageEdit.vue?vue&type=template&id=112051ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=template&id=112051ee&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=template&id=112051ee&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-material-design-icons/ImageEdit.vue?vue&type=template&id=112051ee& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        staticClass: "material-design-icon image-edit-icon",
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
                d: "M22.7 14.3L21.7 15.3L19.7 13.3L20.7 12.3C20.8 12.2 20.9 12.1 21.1 12.1C21.2 12.1 21.4 12.2 21.5 12.3L22.8 13.6C22.9 13.8 22.9 14.1 22.7 14.3M13 19.9V22H15.1L21.2 15.9L19.2 13.9L13 19.9M21 5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11V19.1L12.1 18H5L8.5 13.5L11 16.5L14.5 12L16.1 14.1L21 9.1V5Z",
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

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

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
/******/ 			"theming-personal-theming": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core-common"], () => (__webpack_require__("./apps/theming/src/personal-settings.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=theming-personal-theming.js.map?v=0e4dafd064ac2d45c234