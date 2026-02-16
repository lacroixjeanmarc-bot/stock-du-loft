function Yw(r,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const a=Object.getOwnPropertyDescriptor(s,l);a&&Object.defineProperty(r,l,a.get?a:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function Ag(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ac={exports:{}},_s={},uc={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Jw(){if(nm)return ae;nm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,x={};function O(I,b,le){this.props=I,this.context=b,this.refs=x,this.updater=le||P}O.prototype.isReactComponent={},O.prototype.setState=function(I,b){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,b,"setState")},O.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Q(){}Q.prototype=O.prototype;function W(I,b,le){this.props=I,this.context=b,this.refs=x,this.updater=le||P}var H=W.prototype=new Q;H.constructor=W,R(H,O.prototype),H.isPureReactComponent=!0;var z=Array.isArray,re=Object.prototype.hasOwnProperty,se={current:null},pe={key:!0,ref:!0,__self:!0,__source:!0};function Ie(I,b,le){var de,me={},ge=null,ke=null;if(b!=null)for(de in b.ref!==void 0&&(ke=b.ref),b.key!==void 0&&(ge=""+b.key),b)re.call(b,de)&&!pe.hasOwnProperty(de)&&(me[de]=b[de]);var ye=arguments.length-2;if(ye===1)me.children=le;else if(1<ye){for(var Ae=Array(ye),kt=0;kt<ye;kt++)Ae[kt]=arguments[kt+2];me.children=Ae}if(I&&I.defaultProps)for(de in ye=I.defaultProps,ye)me[de]===void 0&&(me[de]=ye[de]);return{$$typeof:r,type:I,key:ge,ref:ke,props:me,_owner:se.current}}function D(I,b){return{$$typeof:r,type:I.type,key:b,ref:I.ref,props:I.props,_owner:I._owner}}function oe(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function De(I){var b={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(le){return b[le]})}var $e=/\/+/g;function Ce(I,b){return typeof I=="object"&&I!==null&&I.key!=null?De(""+I.key):b.toString(36)}function ie(I,b,le,de,me){var ge=typeof I;(ge==="undefined"||ge==="boolean")&&(I=null);var ke=!1;if(I===null)ke=!0;else switch(ge){case"string":case"number":ke=!0;break;case"object":switch(I.$$typeof){case r:case e:ke=!0}}if(ke)return ke=I,me=me(ke),I=de===""?"."+Ce(ke,0):de,z(me)?(le="",I!=null&&(le=I.replace($e,"$&/")+"/"),ie(me,b,le,"",function(kt){return kt})):me!=null&&(oe(me)&&(me=D(me,le+(!me.key||ke&&ke.key===me.key?"":(""+me.key).replace($e,"$&/")+"/")+I)),b.push(me)),1;if(ke=0,de=de===""?".":de+":",z(I))for(var ye=0;ye<I.length;ye++){ge=I[ye];var Ae=de+Ce(ge,ye);ke+=ie(ge,b,le,Ae,me)}else if(Ae=E(I),typeof Ae=="function")for(I=Ae.call(I),ye=0;!(ge=I.next()).done;)ge=ge.value,Ae=de+Ce(ge,ye++),ke+=ie(ge,b,le,Ae,me);else if(ge==="object")throw b=String(I),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ke}function Ye(I,b,le){if(I==null)return I;var de=[],me=0;return ie(I,de,"","",function(ge){return b.call(le,ge,me++)}),de}function Le(I){if(I._status===-1){var b=I._result;b=b(),b.then(function(le){(I._status===0||I._status===-1)&&(I._status=1,I._result=le)},function(le){(I._status===0||I._status===-1)&&(I._status=2,I._result=le)}),I._status===-1&&(I._status=0,I._result=b)}if(I._status===1)return I._result.default;throw I._result}var je={current:null},B={transition:null},Z={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:B,ReactCurrentOwner:se};function G(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:Ye,forEach:function(I,b,le){Ye(I,function(){b.apply(this,arguments)},le)},count:function(I){var b=0;return Ye(I,function(){b++}),b},toArray:function(I){return Ye(I,function(b){return b})||[]},only:function(I){if(!oe(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ae.Component=O,ae.Fragment=n,ae.Profiler=l,ae.PureComponent=W,ae.StrictMode=s,ae.Suspense=p,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ae.act=G,ae.cloneElement=function(I,b,le){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var de=R({},I.props),me=I.key,ge=I.ref,ke=I._owner;if(b!=null){if(b.ref!==void 0&&(ge=b.ref,ke=se.current),b.key!==void 0&&(me=""+b.key),I.type&&I.type.defaultProps)var ye=I.type.defaultProps;for(Ae in b)re.call(b,Ae)&&!pe.hasOwnProperty(Ae)&&(de[Ae]=b[Ae]===void 0&&ye!==void 0?ye[Ae]:b[Ae])}var Ae=arguments.length-2;if(Ae===1)de.children=le;else if(1<Ae){ye=Array(Ae);for(var kt=0;kt<Ae;kt++)ye[kt]=arguments[kt+2];de.children=ye}return{$$typeof:r,type:I.type,key:me,ref:ge,props:de,_owner:ke}},ae.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:a,_context:I},I.Consumer=I},ae.createElement=Ie,ae.createFactory=function(I){var b=Ie.bind(null,I);return b.type=I,b},ae.createRef=function(){return{current:null}},ae.forwardRef=function(I){return{$$typeof:f,render:I}},ae.isValidElement=oe,ae.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:Le}},ae.memo=function(I,b){return{$$typeof:g,type:I,compare:b===void 0?null:b}},ae.startTransition=function(I){var b=B.transition;B.transition={};try{I()}finally{B.transition=b}},ae.unstable_act=G,ae.useCallback=function(I,b){return je.current.useCallback(I,b)},ae.useContext=function(I){return je.current.useContext(I)},ae.useDebugValue=function(){},ae.useDeferredValue=function(I){return je.current.useDeferredValue(I)},ae.useEffect=function(I,b){return je.current.useEffect(I,b)},ae.useId=function(){return je.current.useId()},ae.useImperativeHandle=function(I,b,le){return je.current.useImperativeHandle(I,b,le)},ae.useInsertionEffect=function(I,b){return je.current.useInsertionEffect(I,b)},ae.useLayoutEffect=function(I,b){return je.current.useLayoutEffect(I,b)},ae.useMemo=function(I,b){return je.current.useMemo(I,b)},ae.useReducer=function(I,b,le){return je.current.useReducer(I,b,le)},ae.useRef=function(I){return je.current.useRef(I)},ae.useState=function(I){return je.current.useState(I)},ae.useSyncExternalStore=function(I,b,le){return je.current.useSyncExternalStore(I,b,le)},ae.useTransition=function(){return je.current.useTransition()},ae.version="18.3.1",ae}var rm;function rd(){return rm||(rm=1,uc.exports=Jw()),uc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Xw(){if(im)return _s;im=1;var r=rd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,g){var y,v={},E=null,P=null;g!==void 0&&(E=""+g),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(P=p.ref);for(y in p)s.call(p,y)&&!a.hasOwnProperty(y)&&(v[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)v[y]===void 0&&(v[y]=p[y]);return{$$typeof:e,type:f,key:E,ref:P,props:v,_owner:l.current}}return _s.Fragment=n,_s.jsx=c,_s.jsxs=c,_s}var sm;function Zw(){return sm||(sm=1,ac.exports=Xw()),ac.exports}var _=Zw(),A=rd();const Og=Ag(A),e0=Yw({__proto__:null,default:Og},[A]);var hl={},cc={exports:{}},Ct={},dc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function t0(){return om||(om=1,(function(r){function e(B,Z){var G=B.length;B.push(Z);e:for(;0<G;){var I=G-1>>>1,b=B[I];if(0<l(b,Z))B[I]=Z,B[G]=b,G=I;else break e}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var Z=B[0],G=B.pop();if(G!==Z){B[0]=G;e:for(var I=0,b=B.length,le=b>>>1;I<le;){var de=2*(I+1)-1,me=B[de],ge=de+1,ke=B[ge];if(0>l(me,G))ge<b&&0>l(ke,me)?(B[I]=ke,B[ge]=G,I=ge):(B[I]=me,B[de]=G,I=de);else if(ge<b&&0>l(ke,G))B[I]=ke,B[ge]=G,I=ge;else break e}}return Z}function l(B,Z){var G=B.sortIndex-Z.sortIndex;return G!==0?G:B.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],y=1,v=null,E=3,P=!1,R=!1,x=!1,O=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(B){for(var Z=n(g);Z!==null;){if(Z.callback===null)s(g);else if(Z.startTime<=B)s(g),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(g)}}function z(B){if(x=!1,H(B),!R)if(n(p)!==null)R=!0,Le(re);else{var Z=n(g);Z!==null&&je(z,Z.startTime-B)}}function re(B,Z){R=!1,x&&(x=!1,Q(Ie),Ie=-1),P=!0;var G=E;try{for(H(Z),v=n(p);v!==null&&(!(v.expirationTime>Z)||B&&!De());){var I=v.callback;if(typeof I=="function"){v.callback=null,E=v.priorityLevel;var b=I(v.expirationTime<=Z);Z=r.unstable_now(),typeof b=="function"?v.callback=b:v===n(p)&&s(p),H(Z)}else s(p);v=n(p)}if(v!==null)var le=!0;else{var de=n(g);de!==null&&je(z,de.startTime-Z),le=!1}return le}finally{v=null,E=G,P=!1}}var se=!1,pe=null,Ie=-1,D=5,oe=-1;function De(){return!(r.unstable_now()-oe<D)}function $e(){if(pe!==null){var B=r.unstable_now();oe=B;var Z=!0;try{Z=pe(!0,B)}finally{Z?Ce():(se=!1,pe=null)}}else se=!1}var Ce;if(typeof W=="function")Ce=function(){W($e)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Ye=ie.port2;ie.port1.onmessage=$e,Ce=function(){Ye.postMessage(null)}}else Ce=function(){O($e,0)};function Le(B){pe=B,se||(se=!0,Ce())}function je(B,Z){Ie=O(function(){B(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){R||P||(R=!0,Le(re))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(B){switch(E){case 1:case 2:case 3:var Z=3;break;default:Z=E}var G=E;E=Z;try{return B()}finally{E=G}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=E;E=B;try{return Z()}finally{E=G}},r.unstable_scheduleCallback=function(B,Z,G){var I=r.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?I+G:I):G=I,B){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=G+b,B={id:y++,callback:Z,priorityLevel:B,startTime:G,expirationTime:b,sortIndex:-1},G>I?(B.sortIndex=G,e(g,B),n(p)===null&&B===n(g)&&(x?(Q(Ie),Ie=-1):x=!0,je(z,G-I))):(B.sortIndex=b,e(p,B),R||P||(R=!0,Le(re))),B},r.unstable_shouldYield=De,r.unstable_wrapCallback=function(B){var Z=E;return function(){var G=E;E=Z;try{return B.apply(this,arguments)}finally{E=G}}}})(hc)),hc}var lm;function n0(){return lm||(lm=1,dc.exports=t0()),dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function r0(){if(am)return Ct;am=1;var r=rd(),e=n0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function a(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function E(t){return p.call(v,t)?!0:p.call(y,t)?!1:g.test(t)?v[t]=!0:(y[t]=!0,!1)}function P(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,o,u){if(i===null||typeof i>"u"||P(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function x(t,i,o,u,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){O[t]=new x(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];O[i]=new x(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){O[t]=new x(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){O[t]=new x(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){O[t]=new x(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){O[t]=new x(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){O[t]=new x(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){O[t]=new x(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){O[t]=new x(t,5,!1,t.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function W(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(Q,W);O[i]=new x(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(Q,W);O[i]=new x(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(Q,W);O[i]=new x(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){O[t]=new x(t,1,!1,t.toLowerCase(),null,!1,!1)}),O.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){O[t]=new x(t,1,!1,t.toLowerCase(),null,!0,!0)});function H(t,i,o,u){var d=O.hasOwnProperty(i)?O[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,o,d,u)&&(o=null),u||d===null?E(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var z=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),se=Symbol.for("react.portal"),pe=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),De=Symbol.for("react.context"),$e=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),B=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,I;function b(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var le=!1;function de(t,i){if(!t||le)return"";le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var u=N}Reflect.construct(t,[],i)}else{try{i.call()}catch(N){u=N}t.call(i.prototype)}else{try{throw Error()}catch(N){u=N}t()}}catch(N){if(N&&u&&typeof N.stack=="string"){for(var d=N.stack.split(`
`),h=u.stack.split(`
`),m=d.length-1,w=h.length-1;1<=m&&0<=w&&d[m]!==h[w];)w--;for(;1<=m&&0<=w;m--,w--)if(d[m]!==h[w]){if(m!==1||w!==1)do if(m--,w--,0>w||d[m]!==h[w]){var S=`
`+d[m].replace(" at new "," at ");return t.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",t.displayName)),S}while(1<=m&&0<=w);break}}}finally{le=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?b(t):""}function me(t){switch(t.tag){case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return t=de(t.type,!1),t;case 11:return t=de(t.type.render,!1),t;case 1:return t=de(t.type,!0),t;default:return""}}function ge(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pe:return"Fragment";case se:return"Portal";case D:return"Profiler";case Ie:return"StrictMode";case Ce:return"Suspense";case ie:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case De:return(t.displayName||"Context")+".Consumer";case oe:return(t._context.displayName||"Context")+".Provider";case $e:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ye:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case Le:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}function ke(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ae(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kt(t){var i=Ae(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){u=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(m){u=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function to(t){t._valueTracker||(t._valueTracker=kt(t))}function lh(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ae(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function no(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ma(t,i){var o=i.checked;return G({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ah(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function uh(t,i){i=i.checked,i!=null&&H(t,"checked",i,!1)}function ga(t,i){uh(t,i);var o=ye(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?va(t,i.type,o):i.hasOwnProperty("defaultValue")&&va(t,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function ch(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function va(t,i,o){(i!=="number"||no(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Di=Array.isArray;function br(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function _a(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return G({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Di(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ye(o)}}function hh(t,i){var o=ye(i.value),u=ye(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function fh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ph(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ph(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,mh=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Li(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ey=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(t){ey.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),bi[i]=bi[t]})});function gh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||bi.hasOwnProperty(t)&&bi[t]?(""+i).trim():i+"px"}function vh(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=gh(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var ty=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(t,i){if(i){if(ty[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ea(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function Ca(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ia=null,Mr=null,Fr=null;function _h(t){if(t=rs(t)){if(typeof Ia!="function")throw Error(n(280));var i=t.stateNode;i&&(i=No(i),Ia(t.stateNode,t.type,i))}}function yh(t){Mr?Fr?Fr.push(t):Fr=[t]:Mr=t}function wh(){if(Mr){var t=Mr,i=Fr;if(Fr=Mr=null,_h(t),i)for(t=0;t<i.length;t++)_h(i[t])}}function Eh(t,i){return t(i)}function Sh(){}var ka=!1;function Ch(t,i,o){if(ka)return t(i,o);ka=!0;try{return Eh(t,i,o)}finally{ka=!1,(Mr!==null||Fr!==null)&&(Sh(),wh())}}function Mi(t,i){var o=t.stateNode;if(o===null)return null;var u=No(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ta=!1;if(f)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){Ta=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{Ta=!1}function ny(t,i,o,u,d,h,m,w,S){var N=Array.prototype.slice.call(arguments,3);try{i.apply(o,N)}catch(M){this.onError(M)}}var ji=!1,io=null,so=!1,Na=null,ry={onError:function(t){ji=!0,io=t}};function iy(t,i,o,u,d,h,m,w,S){ji=!1,io=null,ny.apply(ry,arguments)}function sy(t,i,o,u,d,h,m,w,S){if(iy.apply(this,arguments),ji){if(ji){var N=io;ji=!1,io=null}else throw Error(n(198));so||(so=!0,Na=N)}}function ar(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Ih(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function kh(t){if(ar(t)!==t)throw Error(n(188))}function oy(t){var i=t.alternate;if(!i){if(i=ar(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return kh(d),t;if(h===u)return kh(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=h;else{for(var m=!1,w=d.child;w;){if(w===o){m=!0,o=d,u=h;break}if(w===u){m=!0,u=d,o=h;break}w=w.sibling}if(!m){for(w=h.child;w;){if(w===o){m=!0,o=h,u=d;break}if(w===u){m=!0,u=h,o=d;break}w=w.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Th(t){return t=oy(t),t!==null?Nh(t):null}function Nh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Nh(t);if(i!==null)return i;t=t.sibling}return null}var xh=e.unstable_scheduleCallback,Ph=e.unstable_cancelCallback,ly=e.unstable_shouldYield,ay=e.unstable_requestPaint,We=e.unstable_now,uy=e.unstable_getCurrentPriorityLevel,xa=e.unstable_ImmediatePriority,Rh=e.unstable_UserBlockingPriority,oo=e.unstable_NormalPriority,cy=e.unstable_LowPriority,Ah=e.unstable_IdlePriority,lo=null,Jt=null;function dy(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(lo,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:py,hy=Math.log,fy=Math.LN2;function py(t){return t>>>=0,t===0?32:31-(hy(t)/fy|0)|0}var ao=64,uo=4194304;function Ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function co(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var w=m&~d;w!==0?u=Ui(w):(h&=m,h!==0&&(u=Ui(h)))}else m=o&~d,m!==0?u=Ui(m):h!==0&&(u=Ui(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-jt(i),d=1<<o,u|=t[o],i&=~d;return u}function my(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gy(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-jt(h),w=1<<m,S=d[m];S===-1?((w&o)===0||(w&u)!==0)&&(d[m]=my(w,i)):S<=i&&(t.expiredLanes|=w),h&=~w}}function Pa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Oh(){var t=ao;return ao<<=1,(ao&4194240)===0&&(ao=64),t}function Ra(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function zi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-jt(i),t[i]=o}function vy(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-jt(o),h=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~h}}function Aa(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-jt(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var we=0;function Dh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Lh,Oa,bh,Mh,Fh,Da=!1,ho=[],kn=null,Tn=null,Nn=null,Bi=new Map,Wi=new Map,xn=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(t,i){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Bi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(i.pointerId)}}function Vi(t,i,o,u,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:h,targetContainers:[d]},i!==null&&(i=rs(i),i!==null&&Oa(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function yy(t,i,o,u,d){switch(i){case"focusin":return kn=Vi(kn,t,i,o,u,d),!0;case"dragenter":return Tn=Vi(Tn,t,i,o,u,d),!0;case"mouseover":return Nn=Vi(Nn,t,i,o,u,d),!0;case"pointerover":var h=d.pointerId;return Bi.set(h,Vi(Bi.get(h)||null,t,i,o,u,d)),!0;case"gotpointercapture":return h=d.pointerId,Wi.set(h,Vi(Wi.get(h)||null,t,i,o,u,d)),!0}return!1}function Uh(t){var i=ur(t.target);if(i!==null){var o=ar(i);if(o!==null){if(i=o.tag,i===13){if(i=Ih(o),i!==null){t.blockedOn=i,Fh(t.priority,function(){bh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=ba(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);Sa=u,o.target.dispatchEvent(u),Sa=null}else return i=rs(o),i!==null&&Oa(i),t.blockedOn=o,!1;i.shift()}return!0}function zh(t,i,o){fo(t)&&o.delete(i)}function wy(){Da=!1,kn!==null&&fo(kn)&&(kn=null),Tn!==null&&fo(Tn)&&(Tn=null),Nn!==null&&fo(Nn)&&(Nn=null),Bi.forEach(zh),Wi.forEach(zh)}function Hi(t,i){t.blockedOn===i&&(t.blockedOn=null,Da||(Da=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wy)))}function $i(t){function i(d){return Hi(d,t)}if(0<ho.length){Hi(ho[0],t);for(var o=1;o<ho.length;o++){var u=ho[o];u.blockedOn===t&&(u.blockedOn=null)}}for(kn!==null&&Hi(kn,t),Tn!==null&&Hi(Tn,t),Nn!==null&&Hi(Nn,t),Bi.forEach(i),Wi.forEach(i),o=0;o<xn.length;o++)u=xn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<xn.length&&(o=xn[0],o.blockedOn===null);)Uh(o),o.blockedOn===null&&xn.shift()}var jr=z.ReactCurrentBatchConfig,po=!0;function Ey(t,i,o,u){var d=we,h=jr.transition;jr.transition=null;try{we=1,La(t,i,o,u)}finally{we=d,jr.transition=h}}function Sy(t,i,o,u){var d=we,h=jr.transition;jr.transition=null;try{we=4,La(t,i,o,u)}finally{we=d,jr.transition=h}}function La(t,i,o,u){if(po){var d=ba(t,i,o,u);if(d===null)Xa(t,i,u,mo,o),jh(t,u);else if(yy(d,t,i,o,u))u.stopPropagation();else if(jh(t,u),i&4&&-1<_y.indexOf(t)){for(;d!==null;){var h=rs(d);if(h!==null&&Lh(h),h=ba(t,i,o,u),h===null&&Xa(t,i,u,mo,o),h===d)break;d=h}d!==null&&u.stopPropagation()}else Xa(t,i,u,null,o)}}var mo=null;function ba(t,i,o,u){if(mo=null,t=Ca(u),t=ur(t),t!==null)if(i=ar(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Ih(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return mo=t,null}function Bh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uy()){case xa:return 1;case Rh:return 4;case oo:case cy:return 16;case Ah:return 536870912;default:return 16}default:return 16}}var Pn=null,Ma=null,go=null;function Wh(){if(go)return go;var t,i=Ma,o=i.length,u,d="value"in Pn?Pn.value:Pn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(u=1;u<=m&&i[o-u]===d[h-u];u++);return go=d.slice(t,1<u?1-u:void 0)}function vo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function Vh(){return!1}function Tt(t){function i(o,u,d,h,m){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_o:Vh,this.isPropagationStopped=Vh,this}return G(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fa=Tt(Ur),Gi=G({},Ur,{view:0,detail:0}),Cy=Tt(Gi),ja,Ua,qi,yo=G({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ba,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(ja=t.screenX-qi.screenX,Ua=t.screenY-qi.screenY):Ua=ja=0,qi=t),ja)},movementY:function(t){return"movementY"in t?t.movementY:Ua}}),Hh=Tt(yo),Iy=G({},yo,{dataTransfer:0}),ky=Tt(Iy),Ty=G({},Gi,{relatedTarget:0}),za=Tt(Ty),Ny=G({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=Tt(Ny),Py=G({},Ur,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ry=Tt(Py),Ay=G({},Ur,{data:0}),$h=Tt(Ay),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ly[t])?!!i[t]:!1}function Ba(){return by}var My=G({},Gi,{key:function(t){if(t.key){var i=Oy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ba,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fy=Tt(My),jy=G({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=Tt(jy),Uy=G({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ba}),zy=Tt(Uy),By=G({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=Tt(By),Vy=G({},yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hy=Tt(Vy),$y=[9,13,27,32],Wa=f&&"CompositionEvent"in window,Ki=null;f&&"documentMode"in document&&(Ki=document.documentMode);var Gy=f&&"TextEvent"in window&&!Ki,qh=f&&(!Wa||Ki&&8<Ki&&11>=Ki),Kh=" ",Qh=!1;function Yh(t,i){switch(t){case"keyup":return $y.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function qy(t,i){switch(t){case"compositionend":return Jh(i);case"keypress":return i.which!==32?null:(Qh=!0,Kh);case"textInput":return t=i.data,t===Kh&&Qh?null:t;default:return null}}function Ky(t,i){if(zr)return t==="compositionend"||!Wa&&Yh(t,i)?(t=Wh(),go=Ma=Pn=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qh&&i.locale!=="ko"?null:i.data;default:return null}}var Qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Qy[t.type]:i==="textarea"}function Zh(t,i,o,u){yh(u),i=Io(i,"onChange"),0<i.length&&(o=new Fa("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Qi=null,Yi=null;function Yy(t){_f(t,0)}function wo(t){var i=$r(t);if(lh(i))return t}function Jy(t,i){if(t==="change")return i}var ef=!1;if(f){var Va;if(f){var Ha="oninput"in document;if(!Ha){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),Ha=typeof tf.oninput=="function"}Va=Ha}else Va=!1;ef=Va&&(!document.documentMode||9<document.documentMode)}function nf(){Qi&&(Qi.detachEvent("onpropertychange",rf),Yi=Qi=null)}function rf(t){if(t.propertyName==="value"&&wo(Yi)){var i=[];Zh(i,Yi,t,Ca(t)),Ch(Yy,i)}}function Xy(t,i,o){t==="focusin"?(nf(),Qi=i,Yi=o,Qi.attachEvent("onpropertychange",rf)):t==="focusout"&&nf()}function Zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wo(Yi)}function ew(t,i){if(t==="click")return wo(i)}function tw(t,i){if(t==="input"||t==="change")return wo(i)}function nw(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ut=typeof Object.is=="function"?Object.is:nw;function Ji(t,i){if(Ut(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!Ut(t[d],i[d]))return!1}return!0}function sf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function of(t,i){var o=sf(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=sf(o)}}function lf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?lf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function af(){for(var t=window,i=no();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=no(t.document)}return i}function $a(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function rw(t){var i=af(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&lf(o.ownerDocument.documentElement,o)){if(u!==null&&$a(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(u.start,d);u=u.end===void 0?h:Math.min(u.end,d),!t.extend&&h>u&&(d=u,u=h,h=d),d=of(o,h);var m=of(o,u);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>u?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iw=f&&"documentMode"in document&&11>=document.documentMode,Br=null,Ga=null,Xi=null,qa=!1;function uf(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qa||Br==null||Br!==no(u)||(u=Br,"selectionStart"in u&&$a(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xi&&Ji(Xi,u)||(Xi=u,u=Io(Ga,"onSelect"),0<u.length&&(i=new Fa("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=Br)))}function Eo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Wr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Ka={},cf={};f&&(cf=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function So(t){if(Ka[t])return Ka[t];if(!Wr[t])return t;var i=Wr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in cf)return Ka[t]=i[o];return t}var df=So("animationend"),hf=So("animationiteration"),ff=So("animationstart"),pf=So("transitionend"),mf=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(t,i){mf.set(t,i),a(i,[t])}for(var Qa=0;Qa<gf.length;Qa++){var Ya=gf[Qa],sw=Ya.toLowerCase(),ow=Ya[0].toUpperCase()+Ya.slice(1);Rn(sw,"on"+ow)}Rn(df,"onAnimationEnd"),Rn(hf,"onAnimationIteration"),Rn(ff,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(pf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function vf(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,sy(u,i,void 0,t),t.currentTarget=null}function _f(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var m=u.length-1;0<=m;m--){var w=u[m],S=w.instance,N=w.currentTarget;if(w=w.listener,S!==h&&d.isPropagationStopped())break e;vf(d,w,N),h=S}else for(m=0;m<u.length;m++){if(w=u[m],S=w.instance,N=w.currentTarget,w=w.listener,S!==h&&d.isPropagationStopped())break e;vf(d,w,N),h=S}}}if(so)throw t=Na,so=!1,Na=null,t}function Pe(t,i){var o=i[iu];o===void 0&&(o=i[iu]=new Set);var u=t+"__bubble";o.has(u)||(yf(i,t,2,!1),o.add(u))}function Ja(t,i,o){var u=0;i&&(u|=4),yf(o,t,u,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function es(t){if(!t[Co]){t[Co]=!0,s.forEach(function(o){o!=="selectionchange"&&(lw.has(o)||Ja(o,!1,t),Ja(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Co]||(i[Co]=!0,Ja("selectionchange",!1,i))}}function yf(t,i,o,u){switch(Bh(i)){case 1:var d=Ey;break;case 4:d=Sy;break;default:d=La}o=d.bind(null,i,o,t),d=void 0,!Ta||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Xa(t,i,o,u,d){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var m=u.tag;if(m===3||m===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(m===4)for(m=u.return;m!==null;){var S=m.tag;if((S===3||S===4)&&(S=m.stateNode.containerInfo,S===d||S.nodeType===8&&S.parentNode===d))return;m=m.return}for(;w!==null;){if(m=ur(w),m===null)return;if(S=m.tag,S===5||S===6){u=h=m;continue e}w=w.parentNode}}u=u.return}Ch(function(){var N=h,M=Ca(o),F=[];e:{var L=mf.get(t);if(L!==void 0){var V=Fa,q=t;switch(t){case"keypress":if(vo(o)===0)break e;case"keydown":case"keyup":V=Fy;break;case"focusin":q="focus",V=za;break;case"focusout":q="blur",V=za;break;case"beforeblur":case"afterblur":V=za;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=zy;break;case df:case hf:case ff:V=xy;break;case pf:V=Wy;break;case"scroll":V=Cy;break;case"wheel":V=Hy;break;case"copy":case"cut":case"paste":V=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Gh}var K=(i&4)!==0,Ve=!K&&t==="scroll",k=K?L!==null?L+"Capture":null:L;K=[];for(var C=N,T;C!==null;){T=C;var j=T.stateNode;if(T.tag===5&&j!==null&&(T=j,k!==null&&(j=Mi(C,k),j!=null&&K.push(ts(C,j,T)))),Ve)break;C=C.return}0<K.length&&(L=new V(L,q,null,o,M),F.push({event:L,listeners:K}))}}if((i&7)===0){e:{if(L=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",L&&o!==Sa&&(q=o.relatedTarget||o.fromElement)&&(ur(q)||q[on]))break e;if((V||L)&&(L=M.window===M?M:(L=M.ownerDocument)?L.defaultView||L.parentWindow:window,V?(q=o.relatedTarget||o.toElement,V=N,q=q?ur(q):null,q!==null&&(Ve=ar(q),q!==Ve||q.tag!==5&&q.tag!==6)&&(q=null)):(V=null,q=N),V!==q)){if(K=Hh,j="onMouseLeave",k="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(K=Gh,j="onPointerLeave",k="onPointerEnter",C="pointer"),Ve=V==null?L:$r(V),T=q==null?L:$r(q),L=new K(j,C+"leave",V,o,M),L.target=Ve,L.relatedTarget=T,j=null,ur(M)===N&&(K=new K(k,C+"enter",q,o,M),K.target=T,K.relatedTarget=Ve,j=K),Ve=j,V&&q)t:{for(K=V,k=q,C=0,T=K;T;T=Vr(T))C++;for(T=0,j=k;j;j=Vr(j))T++;for(;0<C-T;)K=Vr(K),C--;for(;0<T-C;)k=Vr(k),T--;for(;C--;){if(K===k||k!==null&&K===k.alternate)break t;K=Vr(K),k=Vr(k)}K=null}else K=null;V!==null&&wf(F,L,V,K,!1),q!==null&&Ve!==null&&wf(F,Ve,q,K,!0)}}e:{if(L=N?$r(N):window,V=L.nodeName&&L.nodeName.toLowerCase(),V==="select"||V==="input"&&L.type==="file")var Y=Jy;else if(Xh(L))if(ef)Y=tw;else{Y=Zy;var J=Xy}else(V=L.nodeName)&&V.toLowerCase()==="input"&&(L.type==="checkbox"||L.type==="radio")&&(Y=ew);if(Y&&(Y=Y(t,N))){Zh(F,Y,o,M);break e}J&&J(t,L,N),t==="focusout"&&(J=L._wrapperState)&&J.controlled&&L.type==="number"&&va(L,"number",L.value)}switch(J=N?$r(N):window,t){case"focusin":(Xh(J)||J.contentEditable==="true")&&(Br=J,Ga=N,Xi=null);break;case"focusout":Xi=Ga=Br=null;break;case"mousedown":qa=!0;break;case"contextmenu":case"mouseup":case"dragend":qa=!1,uf(F,o,M);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":uf(F,o,M)}var X;if(Wa)e:{switch(t){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else zr?Yh(t,o)&&(te="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(te="onCompositionStart");te&&(qh&&o.locale!=="ko"&&(zr||te!=="onCompositionStart"?te==="onCompositionEnd"&&zr&&(X=Wh()):(Pn=M,Ma="value"in Pn?Pn.value:Pn.textContent,zr=!0)),J=Io(N,te),0<J.length&&(te=new $h(te,t,null,o,M),F.push({event:te,listeners:J}),X?te.data=X:(X=Jh(o),X!==null&&(te.data=X)))),(X=Gy?qy(t,o):Ky(t,o))&&(N=Io(N,"onBeforeInput"),0<N.length&&(M=new $h("onBeforeInput","beforeinput",null,o,M),F.push({event:M,listeners:N}),M.data=X))}_f(F,i)})}function ts(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Io(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Mi(t,o),h!=null&&u.unshift(ts(t,h,d)),h=Mi(t,i),h!=null&&u.push(ts(t,h,d))),t=t.return}return u}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wf(t,i,o,u,d){for(var h=i._reactName,m=[];o!==null&&o!==u;){var w=o,S=w.alternate,N=w.stateNode;if(S!==null&&S===u)break;w.tag===5&&N!==null&&(w=N,d?(S=Mi(o,h),S!=null&&m.unshift(ts(o,S,w))):d||(S=Mi(o,h),S!=null&&m.push(ts(o,S,w)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var aw=/\r\n?/g,uw=/\u0000|\uFFFD/g;function Ef(t){return(typeof t=="string"?t:""+t).replace(aw,`
`).replace(uw,"")}function ko(t,i,o){if(i=Ef(i),Ef(t)!==i&&o)throw Error(n(425))}function To(){}var Za=null,eu=null;function tu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,cw=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,dw=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(t){return Sf.resolve(null).then(t).catch(hw)}:nu;function hw(t){setTimeout(function(){throw t})}function ru(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),$i(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);$i(i)}function An(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Cf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Hr,ns="__reactProps$"+Hr,on="__reactContainer$"+Hr,iu="__reactEvents$"+Hr,fw="__reactListeners$"+Hr,pw="__reactHandles$"+Hr;function ur(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[on]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Cf(t);t!==null;){if(o=t[Xt])return o;t=Cf(t)}return i}t=o,o=t.parentNode}return null}function rs(t){return t=t[Xt]||t[on],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $r(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function No(t){return t[ns]||null}var su=[],Gr=-1;function On(t){return{current:t}}function Re(t){0>Gr||(t.current=su[Gr],su[Gr]=null,Gr--)}function Te(t,i){Gr++,su[Gr]=t.current,t.current=i}var Dn={},at=On(Dn),_t=On(!1),cr=Dn;function qr(t,i){var o=t.type.contextTypes;if(!o)return Dn;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function yt(t){return t=t.childContextTypes,t!=null}function xo(){Re(_t),Re(at)}function If(t,i,o){if(at.current!==Dn)throw Error(n(168));Te(at,i),Te(_t,o)}function kf(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,ke(t)||"Unknown",d));return G({},o,u)}function Po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,cr=at.current,Te(at,t),Te(_t,_t.current),!0}function Tf(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=kf(t,i,cr),u.__reactInternalMemoizedMergedChildContext=t,Re(_t),Re(at),Te(at,t)):Re(_t),Te(_t,o)}var ln=null,Ro=!1,ou=!1;function Nf(t){ln===null?ln=[t]:ln.push(t)}function mw(t){Ro=!0,Nf(t)}function Ln(){if(!ou&&ln!==null){ou=!0;var t=0,i=we;try{var o=ln;for(we=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}ln=null,Ro=!1}catch(d){throw ln!==null&&(ln=ln.slice(t+1)),xh(xa,Ln),d}finally{we=i,ou=!1}}return null}var Kr=[],Qr=0,Ao=null,Oo=0,Rt=[],At=0,dr=null,an=1,un="";function hr(t,i){Kr[Qr++]=Oo,Kr[Qr++]=Ao,Ao=t,Oo=i}function xf(t,i,o){Rt[At++]=an,Rt[At++]=un,Rt[At++]=dr,dr=t;var u=an;t=un;var d=32-jt(u)-1;u&=~(1<<d),o+=1;var h=32-jt(i)+d;if(30<h){var m=d-d%5;h=(u&(1<<m)-1).toString(32),u>>=m,d-=m,an=1<<32-jt(i)+d|o<<d|u,un=h+t}else an=1<<h|o<<d|u,un=t}function lu(t){t.return!==null&&(hr(t,1),xf(t,1,0))}function au(t){for(;t===Ao;)Ao=Kr[--Qr],Kr[Qr]=null,Oo=Kr[--Qr],Kr[Qr]=null;for(;t===dr;)dr=Rt[--At],Rt[At]=null,un=Rt[--At],Rt[At]=null,an=Rt[--At],Rt[At]=null}var Nt=null,xt=null,Oe=!1,zt=null;function Pf(t,i){var o=bt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Rf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nt=t,xt=An(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nt=t,xt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=dr!==null?{id:an,overflow:un}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=bt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nt=t,xt=null,!0):!1;default:return!1}}function uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cu(t){if(Oe){var i=xt;if(i){var o=i;if(!Rf(t,i)){if(uu(t))throw Error(n(418));i=An(o.nextSibling);var u=Nt;i&&Rf(t,i)?Pf(u,o):(t.flags=t.flags&-4097|2,Oe=!1,Nt=t)}}else{if(uu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Oe=!1,Nt=t}}}function Af(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Do(t){if(t!==Nt)return!1;if(!Oe)return Af(t),Oe=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!tu(t.type,t.memoizedProps)),i&&(i=xt)){if(uu(t))throw Of(),Error(n(418));for(;i;)Pf(t,i),i=An(i.nextSibling)}if(Af(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){xt=An(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}xt=null}}else xt=Nt?An(t.stateNode.nextSibling):null;return!0}function Of(){for(var t=xt;t;)t=An(t.nextSibling)}function Yr(){xt=Nt=null,Oe=!1}function du(t){zt===null?zt=[t]:zt.push(t)}var gw=z.ReactCurrentBatchConfig;function is(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var w=d.refs;m===null?delete w[h]:w[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Lo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Df(t){var i=t._init;return i(t._payload)}function Lf(t){function i(k,C){if(t){var T=k.deletions;T===null?(k.deletions=[C],k.flags|=16):T.push(C)}}function o(k,C){if(!t)return null;for(;C!==null;)i(k,C),C=C.sibling;return null}function u(k,C){for(k=new Map;C!==null;)C.key!==null?k.set(C.key,C):k.set(C.index,C),C=C.sibling;return k}function d(k,C){return k=Wn(k,C),k.index=0,k.sibling=null,k}function h(k,C,T){return k.index=T,t?(T=k.alternate,T!==null?(T=T.index,T<C?(k.flags|=2,C):T):(k.flags|=2,C)):(k.flags|=1048576,C)}function m(k){return t&&k.alternate===null&&(k.flags|=2),k}function w(k,C,T,j){return C===null||C.tag!==6?(C=nc(T,k.mode,j),C.return=k,C):(C=d(C,T),C.return=k,C)}function S(k,C,T,j){var Y=T.type;return Y===pe?M(k,C,T.props.children,j,T.key):C!==null&&(C.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Le&&Df(Y)===C.type)?(j=d(C,T.props),j.ref=is(k,C,T),j.return=k,j):(j=il(T.type,T.key,T.props,null,k.mode,j),j.ref=is(k,C,T),j.return=k,j)}function N(k,C,T,j){return C===null||C.tag!==4||C.stateNode.containerInfo!==T.containerInfo||C.stateNode.implementation!==T.implementation?(C=rc(T,k.mode,j),C.return=k,C):(C=d(C,T.children||[]),C.return=k,C)}function M(k,C,T,j,Y){return C===null||C.tag!==7?(C=wr(T,k.mode,j,Y),C.return=k,C):(C=d(C,T),C.return=k,C)}function F(k,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return C=nc(""+C,k.mode,T),C.return=k,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case re:return T=il(C.type,C.key,C.props,null,k.mode,T),T.ref=is(k,null,C),T.return=k,T;case se:return C=rc(C,k.mode,T),C.return=k,C;case Le:var j=C._init;return F(k,j(C._payload),T)}if(Di(C)||Z(C))return C=wr(C,k.mode,T,null),C.return=k,C;Lo(k,C)}return null}function L(k,C,T,j){var Y=C!==null?C.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return Y!==null?null:w(k,C,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case re:return T.key===Y?S(k,C,T,j):null;case se:return T.key===Y?N(k,C,T,j):null;case Le:return Y=T._init,L(k,C,Y(T._payload),j)}if(Di(T)||Z(T))return Y!==null?null:M(k,C,T,j,null);Lo(k,T)}return null}function V(k,C,T,j,Y){if(typeof j=="string"&&j!==""||typeof j=="number")return k=k.get(T)||null,w(C,k,""+j,Y);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case re:return k=k.get(j.key===null?T:j.key)||null,S(C,k,j,Y);case se:return k=k.get(j.key===null?T:j.key)||null,N(C,k,j,Y);case Le:var J=j._init;return V(k,C,T,J(j._payload),Y)}if(Di(j)||Z(j))return k=k.get(T)||null,M(C,k,j,Y,null);Lo(C,j)}return null}function q(k,C,T,j){for(var Y=null,J=null,X=C,te=C=0,Ze=null;X!==null&&te<T.length;te++){X.index>te?(Ze=X,X=null):Ze=X.sibling;var ve=L(k,X,T[te],j);if(ve===null){X===null&&(X=Ze);break}t&&X&&ve.alternate===null&&i(k,X),C=h(ve,C,te),J===null?Y=ve:J.sibling=ve,J=ve,X=Ze}if(te===T.length)return o(k,X),Oe&&hr(k,te),Y;if(X===null){for(;te<T.length;te++)X=F(k,T[te],j),X!==null&&(C=h(X,C,te),J===null?Y=X:J.sibling=X,J=X);return Oe&&hr(k,te),Y}for(X=u(k,X);te<T.length;te++)Ze=V(X,k,te,T[te],j),Ze!==null&&(t&&Ze.alternate!==null&&X.delete(Ze.key===null?te:Ze.key),C=h(Ze,C,te),J===null?Y=Ze:J.sibling=Ze,J=Ze);return t&&X.forEach(function(Vn){return i(k,Vn)}),Oe&&hr(k,te),Y}function K(k,C,T,j){var Y=Z(T);if(typeof Y!="function")throw Error(n(150));if(T=Y.call(T),T==null)throw Error(n(151));for(var J=Y=null,X=C,te=C=0,Ze=null,ve=T.next();X!==null&&!ve.done;te++,ve=T.next()){X.index>te?(Ze=X,X=null):Ze=X.sibling;var Vn=L(k,X,ve.value,j);if(Vn===null){X===null&&(X=Ze);break}t&&X&&Vn.alternate===null&&i(k,X),C=h(Vn,C,te),J===null?Y=Vn:J.sibling=Vn,J=Vn,X=Ze}if(ve.done)return o(k,X),Oe&&hr(k,te),Y;if(X===null){for(;!ve.done;te++,ve=T.next())ve=F(k,ve.value,j),ve!==null&&(C=h(ve,C,te),J===null?Y=ve:J.sibling=ve,J=ve);return Oe&&hr(k,te),Y}for(X=u(k,X);!ve.done;te++,ve=T.next())ve=V(X,k,te,ve.value,j),ve!==null&&(t&&ve.alternate!==null&&X.delete(ve.key===null?te:ve.key),C=h(ve,C,te),J===null?Y=ve:J.sibling=ve,J=ve);return t&&X.forEach(function(Qw){return i(k,Qw)}),Oe&&hr(k,te),Y}function Ve(k,C,T,j){if(typeof T=="object"&&T!==null&&T.type===pe&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case re:e:{for(var Y=T.key,J=C;J!==null;){if(J.key===Y){if(Y=T.type,Y===pe){if(J.tag===7){o(k,J.sibling),C=d(J,T.props.children),C.return=k,k=C;break e}}else if(J.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Le&&Df(Y)===J.type){o(k,J.sibling),C=d(J,T.props),C.ref=is(k,J,T),C.return=k,k=C;break e}o(k,J);break}else i(k,J);J=J.sibling}T.type===pe?(C=wr(T.props.children,k.mode,j,T.key),C.return=k,k=C):(j=il(T.type,T.key,T.props,null,k.mode,j),j.ref=is(k,C,T),j.return=k,k=j)}return m(k);case se:e:{for(J=T.key;C!==null;){if(C.key===J)if(C.tag===4&&C.stateNode.containerInfo===T.containerInfo&&C.stateNode.implementation===T.implementation){o(k,C.sibling),C=d(C,T.children||[]),C.return=k,k=C;break e}else{o(k,C);break}else i(k,C);C=C.sibling}C=rc(T,k.mode,j),C.return=k,k=C}return m(k);case Le:return J=T._init,Ve(k,C,J(T._payload),j)}if(Di(T))return q(k,C,T,j);if(Z(T))return K(k,C,T,j);Lo(k,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,C!==null&&C.tag===6?(o(k,C.sibling),C=d(C,T),C.return=k,k=C):(o(k,C),C=nc(T,k.mode,j),C.return=k,k=C),m(k)):o(k,C)}return Ve}var Jr=Lf(!0),bf=Lf(!1),bo=On(null),Mo=null,Xr=null,hu=null;function fu(){hu=Xr=Mo=null}function pu(t){var i=bo.current;Re(bo),t._currentValue=i}function mu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Zr(t,i){Mo=t,hu=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(wt=!0),t.firstContext=null)}function Ot(t){var i=t._currentValue;if(hu!==t)if(t={context:t,memoizedValue:i,next:null},Xr===null){if(Mo===null)throw Error(n(308));Xr=t,Mo.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return i}var fr=null;function gu(t){fr===null?fr=[t]:fr.push(t)}function Mf(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,gu(i)):(o.next=d.next,d.next=o),i.interleaved=o,cn(t,u)}function cn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var bn=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ff(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Mn(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(fe&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,cn(t,o)}return d=u.interleaved,d===null?(i.next=i,gu(u)):(i.next=d.next,d.next=i),u.interleaved=i,cn(t,o)}function Fo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Aa(t,o)}}function jf(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function jo(t,i,o,u){var d=t.updateQueue;bn=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var S=w,N=S.next;S.next=null,m===null?h=N:m.next=N,m=S;var M=t.alternate;M!==null&&(M=M.updateQueue,w=M.lastBaseUpdate,w!==m&&(w===null?M.firstBaseUpdate=N:w.next=N,M.lastBaseUpdate=S))}if(h!==null){var F=d.baseState;m=0,M=N=S=null,w=h;do{var L=w.lane,V=w.eventTime;if((u&L)===L){M!==null&&(M=M.next={eventTime:V,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var q=t,K=w;switch(L=i,V=o,K.tag){case 1:if(q=K.payload,typeof q=="function"){F=q.call(V,F,L);break e}F=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=K.payload,L=typeof q=="function"?q.call(V,F,L):q,L==null)break e;F=G({},F,L);break e;case 2:bn=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,L=d.effects,L===null?d.effects=[w]:L.push(w))}else V={eventTime:V,lane:L,tag:w.tag,payload:w.payload,callback:w.callback,next:null},M===null?(N=M=V,S=F):M=M.next=V,m|=L;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;L=w,w=L.next,L.next=null,d.lastBaseUpdate=L,d.shared.pending=null}}while(!0);if(M===null&&(S=F),d.baseState=S,d.firstBaseUpdate=N,d.lastBaseUpdate=M,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);gr|=m,t.lanes=m,t.memoizedState=F}}function Uf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var ss={},Zt=On(ss),os=On(ss),ls=On(ss);function pr(t){if(t===ss)throw Error(n(174));return t}function _u(t,i){switch(Te(ls,i),Te(os,t),Te(Zt,ss),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ya(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ya(i,t)}Re(Zt),Te(Zt,i)}function ei(){Re(Zt),Re(os),Re(ls)}function zf(t){pr(ls.current);var i=pr(Zt.current),o=ya(i,t.type);i!==o&&(Te(os,t),Te(Zt,o))}function yu(t){os.current===t&&(Re(Zt),Re(os))}var be=On(0);function Uo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wu=[];function Eu(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var zo=z.ReactCurrentDispatcher,Su=z.ReactCurrentBatchConfig,mr=0,Me=null,Ge=null,Je=null,Bo=!1,as=!1,us=0,vw=0;function ut(){throw Error(n(321))}function Cu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ut(t[o],i[o]))return!1;return!0}function Iu(t,i,o,u,d,h){if(mr=h,Me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zo.current=t===null||t.memoizedState===null?Ew:Sw,t=o(u,d),as){h=0;do{if(as=!1,us=0,25<=h)throw Error(n(301));h+=1,Je=Ge=null,i.updateQueue=null,zo.current=Cw,t=o(u,d)}while(as)}if(zo.current=Ho,i=Ge!==null&&Ge.next!==null,mr=0,Je=Ge=Me=null,Bo=!1,i)throw Error(n(300));return t}function ku(){var t=us!==0;return us=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Me.memoizedState=Je=t:Je=Je.next=t,Je}function Dt(){if(Ge===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var i=Je===null?Me.memoizedState:Je.next;if(i!==null)Je=i,Ge=t;else{if(t===null)throw Error(n(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Je===null?Me.memoizedState=Je=t:Je=Je.next=t}return Je}function cs(t,i){return typeof i=="function"?i(t):i}function Tu(t){var i=Dt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Ge,d=u.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}u.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,u=u.baseState;var w=m=null,S=null,N=h;do{var M=N.lane;if((mr&M)===M)S!==null&&(S=S.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),u=N.hasEagerState?N.eagerState:t(u,N.action);else{var F={lane:M,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};S===null?(w=S=F,m=u):S=S.next=F,Me.lanes|=M,gr|=M}N=N.next}while(N!==null&&N!==h);S===null?m=u:S.next=w,Ut(u,i.memoizedState)||(wt=!0),i.memoizedState=u,i.baseState=m,i.baseQueue=S,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do h=d.lane,Me.lanes|=h,gr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Nu(t){var i=Dt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);Ut(h,i.memoizedState)||(wt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,u]}function Bf(){}function Wf(t,i){var o=Me,u=Dt(),d=i(),h=!Ut(u.memoizedState,d);if(h&&(u.memoizedState=d,wt=!0),u=u.queue,xu($f.bind(null,o,u,t),[t]),u.getSnapshot!==i||h||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,ds(9,Hf.bind(null,o,u,d,i),void 0,null),Xe===null)throw Error(n(349));(mr&30)!==0||Vf(o,i,d)}return d}function Vf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Me.updateQueue,i===null?(i={lastEffect:null,stores:null},Me.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Hf(t,i,o,u){i.value=o,i.getSnapshot=u,Gf(i)&&qf(t)}function $f(t,i,o){return o(function(){Gf(i)&&qf(t)})}function Gf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ut(t,o)}catch{return!0}}function qf(t){var i=cn(t,1);i!==null&&Ht(i,t,1,-1)}function Kf(t){var i=en();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},i.queue=t,t=t.dispatch=ww.bind(null,Me,t),[i.memoizedState,t]}function ds(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Me.updateQueue,i===null?(i={lastEffect:null,stores:null},Me.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Qf(){return Dt().memoizedState}function Wo(t,i,o,u){var d=en();Me.flags|=t,d.memoizedState=ds(1|i,o,void 0,u===void 0?null:u)}function Vo(t,i,o,u){var d=Dt();u=u===void 0?null:u;var h=void 0;if(Ge!==null){var m=Ge.memoizedState;if(h=m.destroy,u!==null&&Cu(u,m.deps)){d.memoizedState=ds(i,o,h,u);return}}Me.flags|=t,d.memoizedState=ds(1|i,o,h,u)}function Yf(t,i){return Wo(8390656,8,t,i)}function xu(t,i){return Vo(2048,8,t,i)}function Jf(t,i){return Vo(4,2,t,i)}function Xf(t,i){return Vo(4,4,t,i)}function Zf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ep(t,i,o){return o=o!=null?o.concat([t]):null,Vo(4,4,Zf.bind(null,i,t),o)}function Pu(){}function tp(t,i){var o=Dt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Cu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function np(t,i){var o=Dt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Cu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function rp(t,i,o){return(mr&21)===0?(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=o):(Ut(o,i)||(o=Oh(),Me.lanes|=o,gr|=o,t.baseState=!0),i)}function _w(t,i){var o=we;we=o!==0&&4>o?o:4,t(!0);var u=Su.transition;Su.transition={};try{t(!1),i()}finally{we=o,Su.transition=u}}function ip(){return Dt().memoizedState}function yw(t,i,o){var u=zn(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},sp(t))op(i,o);else if(o=Mf(t,i,o,u),o!==null){var d=ft();Ht(o,t,u,d),lp(o,i,u)}}function ww(t,i,o){var u=zn(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(sp(t))op(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,w=h(m,o);if(d.hasEagerState=!0,d.eagerState=w,Ut(w,m)){var S=i.interleaved;S===null?(d.next=d,gu(i)):(d.next=S.next,S.next=d),i.interleaved=d;return}}catch{}finally{}o=Mf(t,i,d,u),o!==null&&(d=ft(),Ht(o,t,u,d),lp(o,i,u))}}function sp(t){var i=t.alternate;return t===Me||i!==null&&i===Me}function op(t,i){as=Bo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function lp(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Aa(t,o)}}var Ho={readContext:Ot,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},Ew={readContext:Ot,useCallback:function(t,i){return en().memoizedState=[t,i===void 0?null:i],t},useContext:Ot,useEffect:Yf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Wo(4194308,4,Zf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Wo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Wo(4,2,t,i)},useMemo:function(t,i){var o=en();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=en();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=yw.bind(null,Me,t),[u.memoizedState,t]},useRef:function(t){var i=en();return t={current:t},i.memoizedState=t},useState:Kf,useDebugValue:Pu,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Kf(!1),i=t[0];return t=_w.bind(null,t[1]),en().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Me,d=en();if(Oe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Xe===null)throw Error(n(349));(mr&30)!==0||Vf(u,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Yf($f.bind(null,u,h,t),[t]),u.flags|=2048,ds(9,Hf.bind(null,u,h,o,i),void 0,null),o},useId:function(){var t=en(),i=Xe.identifierPrefix;if(Oe){var o=un,u=an;o=(u&~(1<<32-jt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=us++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=vw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Sw={readContext:Ot,useCallback:tp,useContext:Ot,useEffect:xu,useImperativeHandle:ep,useInsertionEffect:Jf,useLayoutEffect:Xf,useMemo:np,useReducer:Tu,useRef:Qf,useState:function(){return Tu(cs)},useDebugValue:Pu,useDeferredValue:function(t){var i=Dt();return rp(i,Ge.memoizedState,t)},useTransition:function(){var t=Tu(cs)[0],i=Dt().memoizedState;return[t,i]},useMutableSource:Bf,useSyncExternalStore:Wf,useId:ip,unstable_isNewReconciler:!1},Cw={readContext:Ot,useCallback:tp,useContext:Ot,useEffect:xu,useImperativeHandle:ep,useInsertionEffect:Jf,useLayoutEffect:Xf,useMemo:np,useReducer:Nu,useRef:Qf,useState:function(){return Nu(cs)},useDebugValue:Pu,useDeferredValue:function(t){var i=Dt();return Ge===null?i.memoizedState=t:rp(i,Ge.memoizedState,t)},useTransition:function(){var t=Nu(cs)[0],i=Dt().memoizedState;return[t,i]},useMutableSource:Bf,useSyncExternalStore:Wf,useId:ip,unstable_isNewReconciler:!1};function Bt(t,i){if(t&&t.defaultProps){i=G({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ru(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:G({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var $o={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=ft(),d=zn(t),h=dn(u,d);h.payload=i,o!=null&&(h.callback=o),i=Mn(t,h,d),i!==null&&(Ht(i,t,d,u),Fo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=ft(),d=zn(t),h=dn(u,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Mn(t,h,d),i!==null&&(Ht(i,t,d,u),Fo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ft(),u=zn(t),d=dn(o,u);d.tag=2,i!=null&&(d.callback=i),i=Mn(t,d,u),i!==null&&(Ht(i,t,u,o),Fo(i,t,u))}};function ap(t,i,o,u,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,h,m):i.prototype&&i.prototype.isPureReactComponent?!Ji(o,u)||!Ji(d,h):!0}function up(t,i,o){var u=!1,d=Dn,h=i.contextType;return typeof h=="object"&&h!==null?h=Ot(h):(d=yt(i)?cr:at.current,u=i.contextTypes,h=(u=u!=null)?qr(t,d):Dn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$o,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function cp(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&$o.enqueueReplaceState(i,i.state,null)}function Au(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},vu(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Ot(h):(h=yt(i)?cr:at.current,d.context=qr(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ru(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&$o.enqueueReplaceState(d,d.state,null),jo(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,i){try{var o="",u=i;do o+=me(u),u=u.return;while(u);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Ou(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Du(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Iw=typeof WeakMap=="function"?WeakMap:Map;function dp(t,i,o){o=dn(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Xo||(Xo=!0,Ku=u),Du(t,i)},o}function hp(t,i,o){o=dn(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Du(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Du(t,i),typeof u!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function fp(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Iw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=jw.bind(null,t,i,o),i.then(t,t))}function pp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function mp(t,i,o,u,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=dn(-1,1),i.tag=2,Mn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var kw=z.ReactCurrentOwner,wt=!1;function ht(t,i,o,u){i.child=t===null?bf(i,null,o,u):Jr(i,t.child,o,u)}function gp(t,i,o,u,d){o=o.render;var h=i.ref;return Zr(i,d),u=Iu(t,i,o,u,h,d),o=ku(),t!==null&&!wt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hn(t,i,d)):(Oe&&o&&lu(i),i.flags|=1,ht(t,i,u,d),i.child)}function vp(t,i,o,u,d){if(t===null){var h=o.type;return typeof h=="function"&&!tc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,_p(t,i,h,u,d)):(t=il(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ji,o(m,u)&&t.ref===i.ref)return hn(t,i,d)}return i.flags|=1,t=Wn(h,u),t.ref=i.ref,t.return=i,i.child=t}function _p(t,i,o,u,d){if(t!==null){var h=t.memoizedProps;if(Ji(h,u)&&t.ref===i.ref)if(wt=!1,i.pendingProps=u=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(wt=!0);else return i.lanes=t.lanes,hn(t,i,d)}return Lu(t,i,o,u,d)}function yp(t,i,o){var u=i.pendingProps,d=u.children,h=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(ri,Pt),Pt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Te(ri,Pt),Pt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:o,Te(ri,Pt),Pt|=u}else h!==null?(u=h.baseLanes|o,i.memoizedState=null):u=o,Te(ri,Pt),Pt|=u;return ht(t,i,d,o),i.child}function wp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Lu(t,i,o,u,d){var h=yt(o)?cr:at.current;return h=qr(i,h),Zr(i,d),o=Iu(t,i,o,u,h,d),u=ku(),t!==null&&!wt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hn(t,i,d)):(Oe&&u&&lu(i),i.flags|=1,ht(t,i,o,d),i.child)}function Ep(t,i,o,u,d){if(yt(o)){var h=!0;Po(i)}else h=!1;if(Zr(i,d),i.stateNode===null)qo(t,i),up(i,o,u),Au(i,o,u,d),u=!0;else if(t===null){var m=i.stateNode,w=i.memoizedProps;m.props=w;var S=m.context,N=o.contextType;typeof N=="object"&&N!==null?N=Ot(N):(N=yt(o)?cr:at.current,N=qr(i,N));var M=o.getDerivedStateFromProps,F=typeof M=="function"||typeof m.getSnapshotBeforeUpdate=="function";F||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==u||S!==N)&&cp(i,m,u,N),bn=!1;var L=i.memoizedState;m.state=L,jo(i,u,m,d),S=i.memoizedState,w!==u||L!==S||_t.current||bn?(typeof M=="function"&&(Ru(i,o,M,u),S=i.memoizedState),(w=bn||ap(i,o,w,u,L,S,N))?(F||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=S),m.props=u,m.state=S,m.context=N,u=w):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,Ff(t,i),w=i.memoizedProps,N=i.type===i.elementType?w:Bt(i.type,w),m.props=N,F=i.pendingProps,L=m.context,S=o.contextType,typeof S=="object"&&S!==null?S=Ot(S):(S=yt(o)?cr:at.current,S=qr(i,S));var V=o.getDerivedStateFromProps;(M=typeof V=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w!==F||L!==S)&&cp(i,m,u,S),bn=!1,L=i.memoizedState,m.state=L,jo(i,u,m,d);var q=i.memoizedState;w!==F||L!==q||_t.current||bn?(typeof V=="function"&&(Ru(i,o,V,u),q=i.memoizedState),(N=bn||ap(i,o,N,u,L,q,S)||!1)?(M||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,q,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,q,S)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&L===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&L===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=q),m.props=u,m.state=q,m.context=S,u=N):(typeof m.componentDidUpdate!="function"||w===t.memoizedProps&&L===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&L===t.memoizedState||(i.flags|=1024),u=!1)}return bu(t,i,o,u,h,d)}function bu(t,i,o,u,d,h){wp(t,i);var m=(i.flags&128)!==0;if(!u&&!m)return d&&Tf(i,o,!1),hn(t,i,h);u=i.stateNode,kw.current=i;var w=m&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&m?(i.child=Jr(i,t.child,null,h),i.child=Jr(i,null,w,h)):ht(t,i,w,h),i.memoizedState=u.state,d&&Tf(i,o,!0),i.child}function Sp(t){var i=t.stateNode;i.pendingContext?If(t,i.pendingContext,i.pendingContext!==i.context):i.context&&If(t,i.context,!1),_u(t,i.containerInfo)}function Cp(t,i,o,u,d){return Yr(),du(d),i.flags|=256,ht(t,i,o,u),i.child}var Mu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ip(t,i,o){var u=i.pendingProps,d=be.current,h=!1,m=(i.flags&128)!==0,w;if((w=m)||(w=t!==null&&t.memoizedState===null?!1:(d&2)!==0),w?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Te(be,d&1),t===null)return cu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=u.children,t=u.fallback,h?(u=i.mode,h=i.child,m={mode:"hidden",children:m},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=m):h=sl(m,u,0,null),t=wr(t,u,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fu(o),i.memoizedState=Mu,t):ju(i,m));if(d=t.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return Tw(t,i,m,u,w,d,o);if(h){h=u.fallback,m=i.mode,d=t.child,w=d.sibling;var S={mode:"hidden",children:u.children};return(m&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=S,i.deletions=null):(u=Wn(d,S),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?h=Wn(w,h):(h=wr(h,m,o,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,m=t.child.memoizedState,m=m===null?Fu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Mu,u}return h=t.child,t=h.sibling,u=Wn(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function ju(t,i){return i=sl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Go(t,i,o,u){return u!==null&&du(u),Jr(i,t.child,null,o),t=ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Tw(t,i,o,u,d,h,m){if(o)return i.flags&256?(i.flags&=-257,u=Ou(Error(n(422))),Go(t,i,m,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=u.fallback,d=i.mode,u=sl({mode:"visible",children:u.children},d,0,null),h=wr(h,d,m,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&Jr(i,t.child,null,m),i.child.memoizedState=Fu(m),i.memoizedState=Mu,h);if((i.mode&1)===0)return Go(t,i,m,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,h=Error(n(419)),u=Ou(h,u,void 0),Go(t,i,m,u)}if(w=(m&t.childLanes)!==0,wt||w){if(u=Xe,u!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|m))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,cn(t,d),Ht(u,t,d,-1))}return ec(),u=Ou(Error(n(421))),Go(t,i,m,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Uw.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,xt=An(d.nextSibling),Nt=i,Oe=!0,zt=null,t!==null&&(Rt[At++]=an,Rt[At++]=un,Rt[At++]=dr,an=t.id,un=t.overflow,dr=i),i=ju(i,u.children),i.flags|=4096,i)}function kp(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),mu(t.return,i,o)}function Uu(t,i,o,u,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=o,h.tailMode=d)}function Tp(t,i,o){var u=i.pendingProps,d=u.revealOrder,h=u.tail;if(ht(t,i,u.children,o),u=be.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kp(t,o,i);else if(t.tag===19)kp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Te(be,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Uo(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Uu(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Uo(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Uu(i,!0,o,null,h);break;case"together":Uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function hn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),gr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Wn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Wn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Nw(t,i,o){switch(i.tag){case 3:Sp(i),Yr();break;case 5:zf(i);break;case 1:yt(i.type)&&Po(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Te(bo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Te(be,be.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ip(t,i,o):(Te(be,be.current&1),t=hn(t,i,o),t!==null?t.sibling:null);Te(be,be.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Tp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Te(be,be.current),u)break;return null;case 22:case 23:return i.lanes=0,yp(t,i,o)}return hn(t,i,o)}var Np,zu,xp,Pp;Np=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zu=function(){},xp=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,pr(Zt.current);var h=null;switch(o){case"input":d=ma(t,d),u=ma(t,u),h=[];break;case"select":d=G({},d,{value:void 0}),u=G({},u,{value:void 0}),h=[];break;case"textarea":d=_a(t,d),u=_a(t,u),h=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=To)}wa(o,u);var m;o=null;for(N in d)if(!u.hasOwnProperty(N)&&d.hasOwnProperty(N)&&d[N]!=null)if(N==="style"){var w=d[N];for(m in w)w.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(l.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in u){var S=u[N];if(w=d!=null?d[N]:void 0,u.hasOwnProperty(N)&&S!==w&&(S!=null||w!=null))if(N==="style")if(w){for(m in w)!w.hasOwnProperty(m)||S&&S.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in S)S.hasOwnProperty(m)&&w[m]!==S[m]&&(o||(o={}),o[m]=S[m])}else o||(h||(h=[]),h.push(N,o)),o=S;else N==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,w=w?w.__html:void 0,S!=null&&w!==S&&(h=h||[]).push(N,S)):N==="children"?typeof S!="string"&&typeof S!="number"||(h=h||[]).push(N,""+S):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(l.hasOwnProperty(N)?(S!=null&&N==="onScroll"&&Pe("scroll",t),h||w===S||(h=[])):(h=h||[]).push(N,S))}o&&(h=h||[]).push("style",o);var N=h;(i.updateQueue=N)&&(i.flags|=4)}},Pp=function(t,i,o,u){o!==u&&(i.flags|=4)};function hs(t,i){if(!Oe)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function ct(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function xw(t,i,o){var u=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(i),null;case 1:return yt(i.type)&&xo(),ct(i),null;case 3:return u=i.stateNode,ei(),Re(_t),Re(at),Eu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Do(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zt!==null&&(Ju(zt),zt=null))),zu(t,i),ct(i),null;case 5:yu(i);var d=pr(ls.current);if(o=i.type,t!==null&&i.stateNode!=null)xp(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return ct(i),null}if(t=pr(Zt.current),Do(i)){u=i.stateNode,o=i.type;var h=i.memoizedProps;switch(u[Xt]=i,u[ns]=h,t=(i.mode&1)!==0,o){case"dialog":Pe("cancel",u),Pe("close",u);break;case"iframe":case"object":case"embed":Pe("load",u);break;case"video":case"audio":for(d=0;d<Zi.length;d++)Pe(Zi[d],u);break;case"source":Pe("error",u);break;case"img":case"image":case"link":Pe("error",u),Pe("load",u);break;case"details":Pe("toggle",u);break;case"input":ah(u,h),Pe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Pe("invalid",u);break;case"textarea":dh(u,h),Pe("invalid",u)}wa(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var w=h[m];m==="children"?typeof w=="string"?u.textContent!==w&&(h.suppressHydrationWarning!==!0&&ko(u.textContent,w,t),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(h.suppressHydrationWarning!==!0&&ko(u.textContent,w,t),d=["children",""+w]):l.hasOwnProperty(m)&&w!=null&&m==="onScroll"&&Pe("scroll",u)}switch(o){case"input":to(u),ch(u,h,!0);break;case"textarea":to(u),fh(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=To)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ph(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=m.createElement(o,{is:u.is}):(t=m.createElement(o),o==="select"&&(m=t,u.multiple?m.multiple=!0:u.size&&(m.size=u.size))):t=m.createElementNS(t,o),t[Xt]=i,t[ns]=u,Np(t,i,!1,!1),i.stateNode=t;e:{switch(m=Ea(o,u),o){case"dialog":Pe("cancel",t),Pe("close",t),d=u;break;case"iframe":case"object":case"embed":Pe("load",t),d=u;break;case"video":case"audio":for(d=0;d<Zi.length;d++)Pe(Zi[d],t);d=u;break;case"source":Pe("error",t),d=u;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),d=u;break;case"details":Pe("toggle",t),d=u;break;case"input":ah(t,u),d=ma(t,u),Pe("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=G({},u,{value:void 0}),Pe("invalid",t);break;case"textarea":dh(t,u),d=_a(t,u),Pe("invalid",t);break;default:d=u}wa(o,d),w=d;for(h in w)if(w.hasOwnProperty(h)){var S=w[h];h==="style"?vh(t,S):h==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&mh(t,S)):h==="children"?typeof S=="string"?(o!=="textarea"||S!=="")&&Li(t,S):typeof S=="number"&&Li(t,""+S):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?S!=null&&h==="onScroll"&&Pe("scroll",t):S!=null&&H(t,h,S,m))}switch(o){case"input":to(t),ch(t,u,!1);break;case"textarea":to(t),fh(t);break;case"option":u.value!=null&&t.setAttribute("value",""+ye(u.value));break;case"select":t.multiple=!!u.multiple,h=u.value,h!=null?br(t,!!u.multiple,h,!1):u.defaultValue!=null&&br(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=To)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ct(i),null;case 6:if(t&&i.stateNode!=null)Pp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=pr(ls.current),pr(Zt.current),Do(i)){if(u=i.stateNode,o=i.memoizedProps,u[Xt]=i,(h=u.nodeValue!==o)&&(t=Nt,t!==null))switch(t.tag){case 3:ko(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ko(u.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Xt]=i,i.stateNode=u}return ct(i),null;case 13:if(Re(be),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&xt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Of(),Yr(),i.flags|=98560,h=!1;else if(h=Do(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Yr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ct(i),h=!1}else zt!==null&&(Ju(zt),zt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(be.current&1)!==0?qe===0&&(qe=3):ec())),i.updateQueue!==null&&(i.flags|=4),ct(i),null);case 4:return ei(),zu(t,i),t===null&&es(i.stateNode.containerInfo),ct(i),null;case 10:return pu(i.type._context),ct(i),null;case 17:return yt(i.type)&&xo(),ct(i),null;case 19:if(Re(be),h=i.memoizedState,h===null)return ct(i),null;if(u=(i.flags&128)!==0,m=h.rendering,m===null)if(u)hs(h,!1);else{if(qe!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Uo(t),m!==null){for(i.flags|=128,hs(h,!1),u=m.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)h=o,t=u,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Te(be,be.current&1|2),i.child}t=t.sibling}h.tail!==null&&We()>ii&&(i.flags|=128,u=!0,hs(h,!1),i.lanes=4194304)}else{if(!u)if(t=Uo(m),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),hs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Oe)return ct(i),null}else 2*We()-h.renderingStartTime>ii&&o!==1073741824&&(i.flags|=128,u=!0,hs(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=We(),i.sibling=null,o=be.current,Te(be,u?o&1|2:o&1),i):(ct(i),null);case 22:case 23:return Zu(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Pt&1073741824)!==0&&(ct(i),i.subtreeFlags&6&&(i.flags|=8192)):ct(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Pw(t,i){switch(au(i),i.tag){case 1:return yt(i.type)&&xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ei(),Re(_t),Re(at),Eu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return yu(i),null;case 13:if(Re(be),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Yr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Re(be),null;case 4:return ei(),null;case 10:return pu(i.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var Ko=!1,dt=!1,Rw=typeof WeakSet=="function"?WeakSet:Set,$=null;function ni(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Ue(t,i,u)}else o.current=null}function Bu(t,i,o){try{o()}catch(u){Ue(t,i,u)}}var Rp=!1;function Aw(t,i){if(Za=po,t=af(),$a(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,w=-1,S=-1,N=0,M=0,F=t,L=null;t:for(;;){for(var V;F!==o||d!==0&&F.nodeType!==3||(w=m+d),F!==h||u!==0&&F.nodeType!==3||(S=m+u),F.nodeType===3&&(m+=F.nodeValue.length),(V=F.firstChild)!==null;)L=F,F=V;for(;;){if(F===t)break t;if(L===o&&++N===d&&(w=m),L===h&&++M===u&&(S=m),(V=F.nextSibling)!==null)break;F=L,L=F.parentNode}F=V}o=w===-1||S===-1?null:{start:w,end:S}}else o=null}o=o||{start:0,end:0}}else o=null;for(eu={focusedElem:t,selectionRange:o},po=!1,$=i;$!==null;)if(i=$,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,$=t;else for(;$!==null;){i=$;try{var q=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var K=q.memoizedProps,Ve=q.memoizedState,k=i.stateNode,C=k.getSnapshotBeforeUpdate(i.elementType===i.type?K:Bt(i.type,K),Ve);k.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(j){Ue(i,i.return,j)}if(t=i.sibling,t!==null){t.return=i.return,$=t;break}$=i.return}return q=Rp,Rp=!1,q}function fs(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Bu(i,o,h)}d=d.next}while(d!==u)}}function Qo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Wu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Ap(t){var i=t.alternate;i!==null&&(t.alternate=null,Ap(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[ns],delete i[iu],delete i[fw],delete i[pw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Op(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Op(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=To));else if(u!==4&&(t=t.child,t!==null))for(Vu(t,i,o),t=t.sibling;t!==null;)Vu(t,i,o),t=t.sibling}function Hu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Hu(t,i,o),t=t.sibling;t!==null;)Hu(t,i,o),t=t.sibling}var nt=null,Wt=!1;function Fn(t,i,o){for(o=o.child;o!==null;)Lp(t,i,o),o=o.sibling}function Lp(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(lo,o)}catch{}switch(o.tag){case 5:dt||ni(o,i);case 6:var u=nt,d=Wt;nt=null,Fn(t,i,o),nt=u,Wt=d,nt!==null&&(Wt?(t=nt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):nt.removeChild(o.stateNode));break;case 18:nt!==null&&(Wt?(t=nt,o=o.stateNode,t.nodeType===8?ru(t.parentNode,o):t.nodeType===1&&ru(t,o),$i(t)):ru(nt,o.stateNode));break;case 4:u=nt,d=Wt,nt=o.stateNode.containerInfo,Wt=!0,Fn(t,i,o),nt=u,Wt=d;break;case 0:case 11:case 14:case 15:if(!dt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&((h&2)!==0||(h&4)!==0)&&Bu(o,i,m),d=d.next}while(d!==u)}Fn(t,i,o);break;case 1:if(!dt&&(ni(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(w){Ue(o,i,w)}Fn(t,i,o);break;case 21:Fn(t,i,o);break;case 22:o.mode&1?(dt=(u=dt)||o.memoizedState!==null,Fn(t,i,o),dt=u):Fn(t,i,o);break;default:Fn(t,i,o)}}function bp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Rw),i.forEach(function(u){var d=zw.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var h=t,m=i,w=m;e:for(;w!==null;){switch(w.tag){case 5:nt=w.stateNode,Wt=!1;break e;case 3:nt=w.stateNode.containerInfo,Wt=!0;break e;case 4:nt=w.stateNode.containerInfo,Wt=!0;break e}w=w.return}if(nt===null)throw Error(n(160));Lp(h,m,d),nt=null,Wt=!1;var S=d.alternate;S!==null&&(S.return=null),d.return=null}catch(N){Ue(d,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mp(i,t),i=i.sibling}function Mp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),tn(t),u&4){try{fs(3,t,t.return),Qo(3,t)}catch(K){Ue(t,t.return,K)}try{fs(5,t,t.return)}catch(K){Ue(t,t.return,K)}}break;case 1:Vt(i,t),tn(t),u&512&&o!==null&&ni(o,o.return);break;case 5:if(Vt(i,t),tn(t),u&512&&o!==null&&ni(o,o.return),t.flags&32){var d=t.stateNode;try{Li(d,"")}catch(K){Ue(t,t.return,K)}}if(u&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,w=t.type,S=t.updateQueue;if(t.updateQueue=null,S!==null)try{w==="input"&&h.type==="radio"&&h.name!=null&&uh(d,h),Ea(w,m);var N=Ea(w,h);for(m=0;m<S.length;m+=2){var M=S[m],F=S[m+1];M==="style"?vh(d,F):M==="dangerouslySetInnerHTML"?mh(d,F):M==="children"?Li(d,F):H(d,M,F,N)}switch(w){case"input":ga(d,h);break;case"textarea":hh(d,h);break;case"select":var L=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var V=h.value;V!=null?br(d,!!h.multiple,V,!1):L!==!!h.multiple&&(h.defaultValue!=null?br(d,!!h.multiple,h.defaultValue,!0):br(d,!!h.multiple,h.multiple?[]:"",!1))}d[ns]=h}catch(K){Ue(t,t.return,K)}}break;case 6:if(Vt(i,t),tn(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(K){Ue(t,t.return,K)}}break;case 3:if(Vt(i,t),tn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{$i(i.containerInfo)}catch(K){Ue(t,t.return,K)}break;case 4:Vt(i,t),tn(t);break;case 13:Vt(i,t),tn(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(qu=We())),u&4&&bp(t);break;case 22:if(M=o!==null&&o.memoizedState!==null,t.mode&1?(dt=(N=dt)||M,Vt(i,t),dt=N):Vt(i,t),tn(t),u&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!M&&(t.mode&1)!==0)for($=t,M=t.child;M!==null;){for(F=$=M;$!==null;){switch(L=$,V=L.child,L.tag){case 0:case 11:case 14:case 15:fs(4,L,L.return);break;case 1:ni(L,L.return);var q=L.stateNode;if(typeof q.componentWillUnmount=="function"){u=L,o=L.return;try{i=u,q.props=i.memoizedProps,q.state=i.memoizedState,q.componentWillUnmount()}catch(K){Ue(u,o,K)}}break;case 5:ni(L,L.return);break;case 22:if(L.memoizedState!==null){Up(F);continue}}V!==null?(V.return=L,$=V):Up(F)}M=M.sibling}e:for(M=null,F=t;;){if(F.tag===5){if(M===null){M=F;try{d=F.stateNode,N?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(w=F.stateNode,S=F.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null,w.style.display=gh("display",m))}catch(K){Ue(t,t.return,K)}}}else if(F.tag===6){if(M===null)try{F.stateNode.nodeValue=N?"":F.memoizedProps}catch(K){Ue(t,t.return,K)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===t)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===t)break e;for(;F.sibling===null;){if(F.return===null||F.return===t)break e;M===F&&(M=null),F=F.return}M===F&&(M=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Vt(i,t),tn(t),u&4&&bp(t);break;case 21:break;default:Vt(i,t),tn(t)}}function tn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Op(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Li(d,""),u.flags&=-33);var h=Dp(t);Hu(t,h,d);break;case 3:case 4:var m=u.stateNode.containerInfo,w=Dp(t);Vu(t,w,m);break;default:throw Error(n(161))}}catch(S){Ue(t,t.return,S)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ow(t,i,o){$=t,Fp(t)}function Fp(t,i,o){for(var u=(t.mode&1)!==0;$!==null;){var d=$,h=d.child;if(d.tag===22&&u){var m=d.memoizedState!==null||Ko;if(!m){var w=d.alternate,S=w!==null&&w.memoizedState!==null||dt;w=Ko;var N=dt;if(Ko=m,(dt=S)&&!N)for($=d;$!==null;)m=$,S=m.child,m.tag===22&&m.memoizedState!==null?zp(d):S!==null?(S.return=m,$=S):zp(d);for(;h!==null;)$=h,Fp(h),h=h.sibling;$=d,Ko=w,dt=N}jp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,$=h):jp(t)}}function jp(t){for(;$!==null;){var i=$;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:dt||Qo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!dt)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Bt(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Uf(i,h,u);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Uf(i,m,o)}break;case 5:var w=i.stateNode;if(o===null&&i.flags&4){o=w;var S=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&o.focus();break;case"img":S.src&&(o.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var M=N.memoizedState;if(M!==null){var F=M.dehydrated;F!==null&&$i(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}dt||i.flags&512&&Wu(i)}catch(L){Ue(i,i.return,L)}}if(i===t){$=null;break}if(o=i.sibling,o!==null){o.return=i.return,$=o;break}$=i.return}}function Up(t){for(;$!==null;){var i=$;if(i===t){$=null;break}var o=i.sibling;if(o!==null){o.return=i.return,$=o;break}$=i.return}}function zp(t){for(;$!==null;){var i=$;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Qo(4,i)}catch(S){Ue(i,o,S)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(S){Ue(i,d,S)}}var h=i.return;try{Wu(i)}catch(S){Ue(i,h,S)}break;case 5:var m=i.return;try{Wu(i)}catch(S){Ue(i,m,S)}}}catch(S){Ue(i,i.return,S)}if(i===t){$=null;break}var w=i.sibling;if(w!==null){w.return=i.return,$=w;break}$=i.return}}var Dw=Math.ceil,Yo=z.ReactCurrentDispatcher,$u=z.ReactCurrentOwner,Lt=z.ReactCurrentBatchConfig,fe=0,Xe=null,He=null,rt=0,Pt=0,ri=On(0),qe=0,ps=null,gr=0,Jo=0,Gu=0,ms=null,Et=null,qu=0,ii=1/0,fn=null,Xo=!1,Ku=null,jn=null,Zo=!1,Un=null,el=0,gs=0,Qu=null,tl=-1,nl=0;function ft(){return(fe&6)!==0?We():tl!==-1?tl:tl=We()}function zn(t){return(t.mode&1)===0?1:(fe&2)!==0&&rt!==0?rt&-rt:gw.transition!==null?(nl===0&&(nl=Oh()),nl):(t=we,t!==0||(t=window.event,t=t===void 0?16:Bh(t.type)),t)}function Ht(t,i,o,u){if(50<gs)throw gs=0,Qu=null,Error(n(185));zi(t,o,u),((fe&2)===0||t!==Xe)&&(t===Xe&&((fe&2)===0&&(Jo|=o),qe===4&&Bn(t,rt)),St(t,u),o===1&&fe===0&&(i.mode&1)===0&&(ii=We()+500,Ro&&Ln()))}function St(t,i){var o=t.callbackNode;gy(t,i);var u=co(t,t===Xe?rt:0);if(u===0)o!==null&&Ph(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&Ph(o),i===1)t.tag===0?mw(Wp.bind(null,t)):Nf(Wp.bind(null,t)),dw(function(){(fe&6)===0&&Ln()}),o=null;else{switch(Dh(u)){case 1:o=xa;break;case 4:o=Rh;break;case 16:o=oo;break;case 536870912:o=Ah;break;default:o=oo}o=Yp(o,Bp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Bp(t,i){if(tl=-1,nl=0,(fe&6)!==0)throw Error(n(327));var o=t.callbackNode;if(si()&&t.callbackNode!==o)return null;var u=co(t,t===Xe?rt:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=rl(t,u);else{i=u;var d=fe;fe|=2;var h=Hp();(Xe!==t||rt!==i)&&(fn=null,ii=We()+500,_r(t,i));do try{Mw();break}catch(w){Vp(t,w)}while(!0);fu(),Yo.current=h,fe=d,He!==null?i=0:(Xe=null,rt=0,i=qe)}if(i!==0){if(i===2&&(d=Pa(t),d!==0&&(u=d,i=Yu(t,d))),i===1)throw o=ps,_r(t,0),Bn(t,u),St(t,We()),o;if(i===6)Bn(t,u);else{if(d=t.current.alternate,(u&30)===0&&!Lw(d)&&(i=rl(t,u),i===2&&(h=Pa(t),h!==0&&(u=h,i=Yu(t,h))),i===1))throw o=ps,_r(t,0),Bn(t,u),St(t,We()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:yr(t,Et,fn);break;case 3:if(Bn(t,u),(u&130023424)===u&&(i=qu+500-We(),10<i)){if(co(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){ft(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=nu(yr.bind(null,t,Et,fn),i);break}yr(t,Et,fn);break;case 4:if(Bn(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var m=31-jt(u);h=1<<m,m=i[m],m>d&&(d=m),u&=~h}if(u=d,u=We()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Dw(u/1960))-u,10<u){t.timeoutHandle=nu(yr.bind(null,t,Et,fn),u);break}yr(t,Et,fn);break;case 5:yr(t,Et,fn);break;default:throw Error(n(329))}}}return St(t,We()),t.callbackNode===o?Bp.bind(null,t):null}function Yu(t,i){var o=ms;return t.current.memoizedState.isDehydrated&&(_r(t,i).flags|=256),t=rl(t,i),t!==2&&(i=Et,Et=o,i!==null&&Ju(i)),t}function Ju(t){Et===null?Et=t:Et.push.apply(Et,t)}function Lw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],h=d.getSnapshot;d=d.value;try{if(!Ut(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bn(t,i){for(i&=~Gu,i&=~Jo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-jt(i),u=1<<o;t[o]=-1,i&=~u}}function Wp(t){if((fe&6)!==0)throw Error(n(327));si();var i=co(t,0);if((i&1)===0)return St(t,We()),null;var o=rl(t,i);if(t.tag!==0&&o===2){var u=Pa(t);u!==0&&(i=u,o=Yu(t,u))}if(o===1)throw o=ps,_r(t,0),Bn(t,i),St(t,We()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,yr(t,Et,fn),St(t,We()),null}function Xu(t,i){var o=fe;fe|=1;try{return t(i)}finally{fe=o,fe===0&&(ii=We()+500,Ro&&Ln())}}function vr(t){Un!==null&&Un.tag===0&&(fe&6)===0&&si();var i=fe;fe|=1;var o=Lt.transition,u=we;try{if(Lt.transition=null,we=1,t)return t()}finally{we=u,Lt.transition=o,fe=i,(fe&6)===0&&Ln()}}function Zu(){Pt=ri.current,Re(ri)}function _r(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,cw(o)),He!==null)for(o=He.return;o!==null;){var u=o;switch(au(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&xo();break;case 3:ei(),Re(_t),Re(at),Eu();break;case 5:yu(u);break;case 4:ei();break;case 13:Re(be);break;case 19:Re(be);break;case 10:pu(u.type._context);break;case 22:case 23:Zu()}o=o.return}if(Xe=t,He=t=Wn(t.current,null),rt=Pt=i,qe=0,ps=null,Gu=Jo=gr=0,Et=ms=null,fr!==null){for(i=0;i<fr.length;i++)if(o=fr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,u.next=m}o.pending=u}fr=null}return t}function Vp(t,i){do{var o=He;try{if(fu(),zo.current=Ho,Bo){for(var u=Me.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Bo=!1}if(mr=0,Je=Ge=Me=null,as=!1,us=0,$u.current=null,o===null||o.return===null){qe=1,ps=i,He=null;break}e:{var h=t,m=o.return,w=o,S=i;if(i=rt,w.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var N=S,M=w,F=M.tag;if((M.mode&1)===0&&(F===0||F===11||F===15)){var L=M.alternate;L?(M.updateQueue=L.updateQueue,M.memoizedState=L.memoizedState,M.lanes=L.lanes):(M.updateQueue=null,M.memoizedState=null)}var V=pp(m);if(V!==null){V.flags&=-257,mp(V,m,w,h,i),V.mode&1&&fp(h,N,i),i=V,S=N;var q=i.updateQueue;if(q===null){var K=new Set;K.add(S),i.updateQueue=K}else q.add(S);break e}else{if((i&1)===0){fp(h,N,i),ec();break e}S=Error(n(426))}}else if(Oe&&w.mode&1){var Ve=pp(m);if(Ve!==null){(Ve.flags&65536)===0&&(Ve.flags|=256),mp(Ve,m,w,h,i),du(ti(S,w));break e}}h=S=ti(S,w),qe!==4&&(qe=2),ms===null?ms=[h]:ms.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var k=dp(h,S,i);jf(h,k);break e;case 1:w=S;var C=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(jn===null||!jn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var j=hp(h,w,i);jf(h,j);break e}}h=h.return}while(h!==null)}Gp(o)}catch(Y){i=Y,He===o&&o!==null&&(He=o=o.return);continue}break}while(!0)}function Hp(){var t=Yo.current;return Yo.current=Ho,t===null?Ho:t}function ec(){(qe===0||qe===3||qe===2)&&(qe=4),Xe===null||(gr&268435455)===0&&(Jo&268435455)===0||Bn(Xe,rt)}function rl(t,i){var o=fe;fe|=2;var u=Hp();(Xe!==t||rt!==i)&&(fn=null,_r(t,i));do try{bw();break}catch(d){Vp(t,d)}while(!0);if(fu(),fe=o,Yo.current=u,He!==null)throw Error(n(261));return Xe=null,rt=0,qe}function bw(){for(;He!==null;)$p(He)}function Mw(){for(;He!==null&&!ly();)$p(He)}function $p(t){var i=Qp(t.alternate,t,Pt);t.memoizedProps=t.pendingProps,i===null?Gp(t):He=i,$u.current=null}function Gp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=xw(o,i,Pt),o!==null){He=o;return}}else{if(o=Pw(o,i),o!==null){o.flags&=32767,He=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,He=null;return}}if(i=i.sibling,i!==null){He=i;return}He=i=t}while(i!==null);qe===0&&(qe=5)}function yr(t,i,o){var u=we,d=Lt.transition;try{Lt.transition=null,we=1,Fw(t,i,o,u)}finally{Lt.transition=d,we=u}return null}function Fw(t,i,o,u){do si();while(Un!==null);if((fe&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(vy(t,h),t===Xe&&(He=Xe=null,rt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Zo||(Zo=!0,Yp(oo,function(){return si(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Lt.transition,Lt.transition=null;var m=we;we=1;var w=fe;fe|=4,$u.current=null,Aw(t,o),Mp(o,t),rw(eu),po=!!Za,eu=Za=null,t.current=o,Ow(o),ay(),fe=w,we=m,Lt.transition=h}else t.current=o;if(Zo&&(Zo=!1,Un=t,el=d),h=t.pendingLanes,h===0&&(jn=null),dy(o.stateNode),St(t,We()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Xo)throw Xo=!1,t=Ku,Ku=null,t;return(el&1)!==0&&t.tag!==0&&si(),h=t.pendingLanes,(h&1)!==0?t===Qu?gs++:(gs=0,Qu=t):gs=0,Ln(),null}function si(){if(Un!==null){var t=Dh(el),i=Lt.transition,o=we;try{if(Lt.transition=null,we=16>t?16:t,Un===null)var u=!1;else{if(t=Un,Un=null,el=0,(fe&6)!==0)throw Error(n(331));var d=fe;for(fe|=4,$=t.current;$!==null;){var h=$,m=h.child;if(($.flags&16)!==0){var w=h.deletions;if(w!==null){for(var S=0;S<w.length;S++){var N=w[S];for($=N;$!==null;){var M=$;switch(M.tag){case 0:case 11:case 15:fs(8,M,h)}var F=M.child;if(F!==null)F.return=M,$=F;else for(;$!==null;){M=$;var L=M.sibling,V=M.return;if(Ap(M),M===N){$=null;break}if(L!==null){L.return=V,$=L;break}$=V}}}var q=h.alternate;if(q!==null){var K=q.child;if(K!==null){q.child=null;do{var Ve=K.sibling;K.sibling=null,K=Ve}while(K!==null)}}$=h}}if((h.subtreeFlags&2064)!==0&&m!==null)m.return=h,$=m;else e:for(;$!==null;){if(h=$,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:fs(9,h,h.return)}var k=h.sibling;if(k!==null){k.return=h.return,$=k;break e}$=h.return}}var C=t.current;for($=C;$!==null;){m=$;var T=m.child;if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,$=T;else e:for(m=C;$!==null;){if(w=$,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Qo(9,w)}}catch(Y){Ue(w,w.return,Y)}if(w===m){$=null;break e}var j=w.sibling;if(j!==null){j.return=w.return,$=j;break e}$=w.return}}if(fe=d,Ln(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(lo,t)}catch{}u=!0}return u}finally{we=o,Lt.transition=i}}return!1}function qp(t,i,o){i=ti(o,i),i=dp(t,i,1),t=Mn(t,i,1),i=ft(),t!==null&&(zi(t,1,i),St(t,i))}function Ue(t,i,o){if(t.tag===3)qp(t,t,o);else for(;i!==null;){if(i.tag===3){qp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(jn===null||!jn.has(u))){t=ti(o,t),t=hp(i,t,1),i=Mn(i,t,1),t=ft(),i!==null&&(zi(i,1,t),St(i,t));break}}i=i.return}}function jw(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=ft(),t.pingedLanes|=t.suspendedLanes&o,Xe===t&&(rt&o)===o&&(qe===4||qe===3&&(rt&130023424)===rt&&500>We()-qu?_r(t,0):Gu|=o),St(t,i)}function Kp(t,i){i===0&&((t.mode&1)===0?i=1:(i=uo,uo<<=1,(uo&130023424)===0&&(uo=4194304)));var o=ft();t=cn(t,i),t!==null&&(zi(t,i,o),St(t,o))}function Uw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Kp(t,o)}function zw(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Kp(t,o)}var Qp;Qp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||_t.current)wt=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return wt=!1,Nw(t,i,o);wt=(t.flags&131072)!==0}else wt=!1,Oe&&(i.flags&1048576)!==0&&xf(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;qo(t,i),t=i.pendingProps;var d=qr(i,at.current);Zr(i,o),d=Iu(null,i,u,t,d,o);var h=ku();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,yt(u)?(h=!0,Po(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,vu(i),d.updater=$o,i.stateNode=d,d._reactInternals=i,Au(i,u,t,o),i=bu(null,i,u,!0,h,o)):(i.tag=0,Oe&&h&&lu(i),ht(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(qo(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Ww(u),t=Bt(u,t),d){case 0:i=Lu(null,i,u,t,o);break e;case 1:i=Ep(null,i,u,t,o);break e;case 11:i=gp(null,i,u,t,o);break e;case 14:i=vp(null,i,u,Bt(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Bt(u,d),Lu(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Bt(u,d),Ep(t,i,u,d,o);case 3:e:{if(Sp(i),t===null)throw Error(n(387));u=i.pendingProps,h=i.memoizedState,d=h.element,Ff(t,i),jo(i,u,null,o);var m=i.memoizedState;if(u=m.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ti(Error(n(423)),i),i=Cp(t,i,u,o,d);break e}else if(u!==d){d=ti(Error(n(424)),i),i=Cp(t,i,u,o,d);break e}else for(xt=An(i.stateNode.containerInfo.firstChild),Nt=i,Oe=!0,zt=null,o=bf(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Yr(),u===d){i=hn(t,i,o);break e}ht(t,i,u,o)}i=i.child}return i;case 5:return zf(i),t===null&&cu(i),u=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,tu(u,d)?m=null:h!==null&&tu(u,h)&&(i.flags|=32),wp(t,i),ht(t,i,m,o),i.child;case 6:return t===null&&cu(i),null;case 13:return Ip(t,i,o);case 4:return _u(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Jr(i,null,u,o):ht(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Bt(u,d),gp(t,i,u,d,o);case 7:return ht(t,i,i.pendingProps,o),i.child;case 8:return ht(t,i,i.pendingProps.children,o),i.child;case 12:return ht(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Te(bo,u._currentValue),u._currentValue=m,h!==null)if(Ut(h.value,m)){if(h.children===d.children&&!_t.current){i=hn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var w=h.dependencies;if(w!==null){m=h.child;for(var S=w.firstContext;S!==null;){if(S.context===u){if(h.tag===1){S=dn(-1,o&-o),S.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var M=N.pending;M===null?S.next=S:(S.next=M.next,M.next=S),N.pending=S}}h.lanes|=o,S=h.alternate,S!==null&&(S.lanes|=o),mu(h.return,o,i),w.lanes|=o;break}S=S.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),mu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}ht(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Zr(i,o),d=Ot(d),u=u(d),i.flags|=1,ht(t,i,u,o),i.child;case 14:return u=i.type,d=Bt(u,i.pendingProps),d=Bt(u.type,d),vp(t,i,u,d,o);case 15:return _p(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Bt(u,d),qo(t,i),i.tag=1,yt(u)?(t=!0,Po(i)):t=!1,Zr(i,o),up(i,u,d),Au(i,u,d,o),bu(null,i,u,!0,t,o);case 19:return Tp(t,i,o);case 22:return yp(t,i,o)}throw Error(n(156,i.tag))};function Yp(t,i){return xh(t,i)}function Bw(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,i,o,u){return new Bw(t,i,o,u)}function tc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ww(t){if(typeof t=="function")return tc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$e)return 11;if(t===Ye)return 14}return 2}function Wn(t,i){var o=t.alternate;return o===null?(o=bt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function il(t,i,o,u,d,h){var m=2;if(u=t,typeof t=="function")tc(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case pe:return wr(o.children,d,h,i);case Ie:m=8,d|=8;break;case D:return t=bt(12,o,i,d|2),t.elementType=D,t.lanes=h,t;case Ce:return t=bt(13,o,i,d),t.elementType=Ce,t.lanes=h,t;case ie:return t=bt(19,o,i,d),t.elementType=ie,t.lanes=h,t;case je:return sl(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oe:m=10;break e;case De:m=9;break e;case $e:m=11;break e;case Ye:m=14;break e;case Le:m=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=bt(m,o,i,d),i.elementType=t,i.type=u,i.lanes=h,i}function wr(t,i,o,u){return t=bt(7,t,u,i),t.lanes=o,t}function sl(t,i,o,u){return t=bt(22,t,u,i),t.elementType=je,t.lanes=o,t.stateNode={isHidden:!1},t}function nc(t,i,o){return t=bt(6,t,null,i),t.lanes=o,t}function rc(t,i,o){return i=bt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Vw(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ic(t,i,o,u,d,h,m,w,S){return t=new Vw(t,i,o,w,S),i===1?(i=1,h===!0&&(i|=8)):i=0,h=bt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(h),t}function Hw(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Jp(t){if(!t)return Dn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(yt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(yt(o))return kf(t,o,i)}return i}function Xp(t,i,o,u,d,h,m,w,S){return t=ic(o,u,!0,t,d,h,m,w,S),t.context=Jp(null),o=t.current,u=ft(),d=zn(o),h=dn(u,d),h.callback=i??null,Mn(o,h,d),t.current.lanes=d,zi(t,d,u),St(t,u),t}function ol(t,i,o,u){var d=i.current,h=ft(),m=zn(d);return o=Jp(o),i.context===null?i.context=o:i.pendingContext=o,i=dn(h,m),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Mn(d,i,m),t!==null&&(Ht(t,d,m,h),Fo(t,d,m)),m}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function sc(t,i){Zp(t,i),(t=t.alternate)&&Zp(t,i)}function $w(){return null}var em=typeof reportError=="function"?reportError:function(t){console.error(t)};function oc(t){this._internalRoot=t}al.prototype.render=oc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ol(t,i,null,null)},al.prototype.unmount=oc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;vr(function(){ol(null,t,null,null)}),i[on]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var i=Mh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<xn.length&&i!==0&&i<xn[o].priority;o++);xn.splice(o,0,t),o===0&&Uh(t)}};function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tm(){}function Gw(t,i,o,u,d){if(d){if(typeof u=="function"){var h=u;u=function(){var N=ll(m);h.call(N)}}var m=Xp(i,u,t,0,null,!1,!1,"",tm);return t._reactRootContainer=m,t[on]=m.current,es(t.nodeType===8?t.parentNode:t),vr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var N=ll(S);w.call(N)}}var S=ic(t,0,!1,null,null,!1,!1,"",tm);return t._reactRootContainer=S,t[on]=S.current,es(t.nodeType===8?t.parentNode:t),vr(function(){ol(i,S,o,u)}),S}function cl(t,i,o,u,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var w=d;d=function(){var S=ll(m);w.call(S)}}ol(i,m,t,d)}else m=Gw(o,i,t,d,u);return ll(m)}Lh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Ui(i.pendingLanes);o!==0&&(Aa(i,o|1),St(i,We()),(fe&6)===0&&(ii=We()+500,Ln()))}break;case 13:vr(function(){var u=cn(t,1);if(u!==null){var d=ft();Ht(u,t,1,d)}}),sc(t,1)}},Oa=function(t){if(t.tag===13){var i=cn(t,134217728);if(i!==null){var o=ft();Ht(i,t,134217728,o)}sc(t,134217728)}},bh=function(t){if(t.tag===13){var i=zn(t),o=cn(t,i);if(o!==null){var u=ft();Ht(o,t,i,u)}sc(t,i)}},Mh=function(){return we},Fh=function(t,i){var o=we;try{return we=t,i()}finally{we=o}},Ia=function(t,i,o){switch(i){case"input":if(ga(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=No(u);if(!d)throw Error(n(90));lh(u),ga(u,d)}}}break;case"textarea":hh(t,o);break;case"select":i=o.value,i!=null&&br(t,!!o.multiple,i,!1)}},Eh=Xu,Sh=vr;var qw={usingClientEntryPoint:!1,Events:[rs,$r,No,yh,wh,Xu]},vs={findFiberByHostInstance:ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kw={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Th(t),t===null?null:t.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||$w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{lo=dl.inject(Kw),Jt=dl}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw,Ct.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(i))throw Error(n(200));return Hw(t,i,null,o)},Ct.createRoot=function(t,i){if(!lc(t))throw Error(n(299));var o=!1,u="",d=em;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ic(t,1,!1,null,null,o,!1,u,d),t[on]=i.current,es(t.nodeType===8?t.parentNode:t),new oc(i)},Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Th(i),t=t===null?null:t.stateNode,t},Ct.flushSync=function(t){return vr(t)},Ct.hydrate=function(t,i,o){if(!ul(i))throw Error(n(200));return cl(null,t,i,!0,o)},Ct.hydrateRoot=function(t,i,o){if(!lc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,h="",m=em;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Xp(i,null,t,1,o??null,d,!1,h,m),t[on]=i.current,es(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new al(i)},Ct.render=function(t,i,o){if(!ul(i))throw Error(n(200));return cl(null,t,i,!1,o)},Ct.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(vr(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[on]=null})}),!0):!1},Ct.unstable_batchedUpdates=Xu,Ct.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!ul(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return cl(t,i,o,!1,u)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var um;function Dg(){if(um)return cc.exports;um=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),cc.exports=r0(),cc.exports}var cm;function i0(){if(cm)return hl;cm=1;var r=Dg();return hl.createRoot=r.createRoot,hl.hydrateRoot=r.hydrateRoot,hl}var s0=i0();const o0=Ag(s0);Dg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rs(){return Rs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Rs.apply(this,arguments)}var Kn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Kn||(Kn={}));const dm="popstate";function l0(r){r===void 0&&(r={});function e(s,l){let{pathname:a,search:c,hash:f}=s.location;return Ac("",{pathname:a,search:c,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:Cl(l)}return u0(e,n,null,r)}function Fe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function id(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function a0(){return Math.random().toString(36).substr(2,8)}function hm(r,e){return{usr:r.state,key:r.key,idx:e}}function Ac(r,e,n,s){return n===void 0&&(n=null),Rs({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||s||a0()})}function Cl(r){let{pathname:e="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ci(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function u0(r,e,n,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:a=!1}=s,c=l.history,f=Kn.Pop,p=null,g=y();g==null&&(g=0,c.replaceState(Rs({},c.state,{idx:g}),""));function y(){return(c.state||{idx:null}).idx}function v(){f=Kn.Pop;let O=y(),Q=O==null?null:O-g;g=O,p&&p({action:f,location:x.location,delta:Q})}function E(O,Q){f=Kn.Push;let W=Ac(x.location,O,Q);g=y()+1;let H=hm(W,g),z=x.createHref(W);try{c.pushState(H,"",z)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;l.location.assign(z)}a&&p&&p({action:f,location:x.location,delta:1})}function P(O,Q){f=Kn.Replace;let W=Ac(x.location,O,Q);g=y();let H=hm(W,g),z=x.createHref(W);c.replaceState(H,"",z),a&&p&&p({action:f,location:x.location,delta:0})}function R(O){let Q=l.location.origin!=="null"?l.location.origin:l.location.href,W=typeof O=="string"?O:Cl(O);return W=W.replace(/ $/,"%20"),Fe(Q,"No window.location.(origin|href) available to create URL for href: "+W),new URL(W,Q)}let x={get action(){return f},get location(){return r(l,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(dm,v),p=O,()=>{l.removeEventListener(dm,v),p=null}},createHref(O){return e(l,O)},createURL:R,encodeLocation(O){let Q=R(O);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:E,replace:P,go(O){return c.go(O)}};return x}var fm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(fm||(fm={}));function c0(r,e,n){return n===void 0&&(n="/"),d0(r,e,n)}function d0(r,e,n,s){let l=typeof e=="string"?Ci(e):e,a=pi(l.pathname||"/",n);if(a==null)return null;let c=Lg(r);h0(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let g=C0(a);f=E0(c[p],g)}return f}function Lg(r,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let l=(a,c,f)=>{let p={relativePath:f===void 0?a.path||"":f,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(Fe(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let g=Yn([s,p.relativePath]),y=n.concat(p);a.children&&a.children.length>0&&(Fe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Lg(a.children,e,y,g)),!(a.path==null&&!a.index)&&e.push({path:g,score:y0(g,a.index),routesMeta:y})};return r.forEach((a,c)=>{var f;if(a.path===""||!((f=a.path)!=null&&f.includes("?")))l(a,c);else for(let p of bg(a.path))l(a,c,p)}),e}function bg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let c=bg(s.join("/")),f=[];return f.push(...c.map(p=>p===""?a:[a,p].join("/"))),l&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function h0(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:w0(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const f0=/^:[\w-]+$/,p0=3,m0=2,g0=1,v0=10,_0=-2,pm=r=>r==="*";function y0(r,e){let n=r.split("/"),s=n.length;return n.some(pm)&&(s+=_0),e&&(s+=m0),n.filter(l=>!pm(l)).reduce((l,a)=>l+(f0.test(a)?p0:a===""?g0:v0),s)}function w0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function E0(r,e,n){let{routesMeta:s}=r,l={},a="/",c=[];for(let f=0;f<s.length;++f){let p=s[f],g=f===s.length-1,y=a==="/"?e:e.slice(a.length)||"/",v=Oc({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y),E=p.route;if(!v)return null;Object.assign(l,v.params),c.push({params:l,pathname:Yn([a,v.pathname]),pathnameBase:x0(Yn([a,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(a=Yn([a,v.pathnameBase]))}return c}function Oc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=S0(r.path,r.caseSensitive,r.end),l=e.match(n);if(!l)return null;let a=l[0],c=a.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:s.reduce((g,y,v)=>{let{paramName:E,isOptional:P}=y;if(E==="*"){let x=f[v]||"";c=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const R=f[v];return P&&!R?g[E]=void 0:g[E]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:a,pathnameBase:c,pattern:r}}function S0(r,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),id(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function C0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return id(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function pi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}const I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k0=r=>I0.test(r);function T0(r,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:l=""}=typeof r=="string"?Ci(r):r,a;if(n)if(k0(n))a=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),id(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?a=mm(n.substring(1),"/"):a=mm(n,e)}else a=e;return{pathname:a,search:P0(s),hash:R0(l)}}function mm(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function fc(r,e,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N0(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function sd(r,e){let n=N0(r);return e?n.map((s,l)=>l===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function od(r,e,n,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=Ci(r):(l=Rs({},r),Fe(!l.pathname||!l.pathname.includes("?"),fc("?","pathname","search",l)),Fe(!l.pathname||!l.pathname.includes("#"),fc("#","pathname","hash",l)),Fe(!l.search||!l.search.includes("#"),fc("#","search","hash",l)));let a=r===""||l.pathname==="",c=a?"/":l.pathname,f;if(c==null)f=n;else{let v=e.length-1;if(!s&&c.startsWith("..")){let E=c.split("/");for(;E[0]==="..";)E.shift(),v-=1;l.pathname=E.join("/")}f=v>=0?e[v]:"/"}let p=T0(l,f),g=c&&c!=="/"&&c.endsWith("/"),y=(a||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}const Yn=r=>r.join("/").replace(/\/\/+/g,"/"),x0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),P0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,R0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function A0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Mg=["post","put","patch","delete"];new Set(Mg);const O0=["get",...Mg];new Set(O0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},As.apply(this,arguments)}const Ql=A.createContext(null),Fg=A.createContext(null),Sn=A.createContext(null),Yl=A.createContext(null),or=A.createContext({outlet:null,matches:[],isDataRoute:!1}),jg=A.createContext(null);function D0(r,e){let{relative:n}=e===void 0?{}:e;Ii()||Fe(!1);let{basename:s,navigator:l}=A.useContext(Sn),{hash:a,pathname:c,search:f}=Jl(r,{relative:n}),p=c;return s!=="/"&&(p=c==="/"?s:Yn([s,c])),l.createHref({pathname:p,search:f,hash:a})}function Ii(){return A.useContext(Yl)!=null}function Or(){return Ii()||Fe(!1),A.useContext(Yl).location}function Ug(r){A.useContext(Sn).static||A.useLayoutEffect(r)}function ld(){let{isDataRoute:r}=A.useContext(or);return r?G0():L0()}function L0(){Ii()||Fe(!1);let r=A.useContext(Ql),{basename:e,future:n,navigator:s}=A.useContext(Sn),{matches:l}=A.useContext(or),{pathname:a}=Or(),c=JSON.stringify(sd(l,n.v7_relativeSplatPath)),f=A.useRef(!1);return Ug(()=>{f.current=!0}),A.useCallback(function(g,y){if(y===void 0&&(y={}),!f.current)return;if(typeof g=="number"){s.go(g);return}let v=od(g,JSON.parse(c),a,y.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Yn([e,v.pathname])),(y.replace?s.replace:s.push)(v,y.state,y)},[e,s,c,a,r])}function Jl(r,e){let{relative:n}=e===void 0?{}:e,{future:s}=A.useContext(Sn),{matches:l}=A.useContext(or),{pathname:a}=Or(),c=JSON.stringify(sd(l,s.v7_relativeSplatPath));return A.useMemo(()=>od(r,JSON.parse(c),a,n==="path"),[r,c,a,n])}function b0(r,e){return M0(r,e)}function M0(r,e,n,s){Ii()||Fe(!1);let{navigator:l}=A.useContext(Sn),{matches:a}=A.useContext(or),c=a[a.length-1],f=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let g=Or(),y;if(e){var v;let O=typeof e=="string"?Ci(e):e;p==="/"||(v=O.pathname)!=null&&v.startsWith(p)||Fe(!1),y=O}else y=g;let E=y.pathname||"/",P=E;if(p!=="/"){let O=p.replace(/^\//,"").split("/");P="/"+E.replace(/^\//,"").split("/").slice(O.length).join("/")}let R=c0(r,{pathname:P}),x=B0(R&&R.map(O=>Object.assign({},O,{params:Object.assign({},f,O.params),pathname:Yn([p,l.encodeLocation?l.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?p:Yn([p,l.encodeLocation?l.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),a,n,s);return e&&x?A.createElement(Yl.Provider,{value:{location:As({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Kn.Pop}},x):x}function F0(){let r=$0(),e=A0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:l},n):null,null)}const j0=A.createElement(F0,null);class U0 extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(or.Provider,{value:this.props.routeContext},A.createElement(jg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z0(r){let{routeContext:e,match:n,children:s}=r,l=A.useContext(Ql);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(or.Provider,{value:e},s)}function B0(r,e,n,s){var l;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var a;if(!n)return null;if(n.errors)r=n.matches;else if((a=s)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let c=r,f=(l=n)==null?void 0:l.errors;if(f!=null){let y=c.findIndex(v=>v.route.id&&(f==null?void 0:f[v.route.id])!==void 0);y>=0||Fe(!1),c=c.slice(0,Math.min(c.length,y+1))}let p=!1,g=-1;if(n&&s&&s.v7_partialHydration)for(let y=0;y<c.length;y++){let v=c[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=y),v.route.id){let{loaderData:E,errors:P}=n,R=v.route.loader&&E[v.route.id]===void 0&&(!P||P[v.route.id]===void 0);if(v.route.lazy||R){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((y,v,E)=>{let P,R=!1,x=null,O=null;n&&(P=f&&v.route.id?f[v.route.id]:void 0,x=v.route.errorElement||j0,p&&(g<0&&E===0?(q0("route-fallback"),R=!0,O=null):g===E&&(R=!0,O=v.route.hydrateFallbackElement||null)));let Q=e.concat(c.slice(0,E+1)),W=()=>{let H;return P?H=x:R?H=O:v.route.Component?H=A.createElement(v.route.Component,null):v.route.element?H=v.route.element:H=y,A.createElement(z0,{match:v,routeContext:{outlet:y,matches:Q,isDataRoute:n!=null},children:H})};return n&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?A.createElement(U0,{location:n.location,revalidation:n.revalidation,component:x,error:P,children:W(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):W()},null)}var zg=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(zg||{}),Bg=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Bg||{});function W0(r){let e=A.useContext(Ql);return e||Fe(!1),e}function V0(r){let e=A.useContext(Fg);return e||Fe(!1),e}function H0(r){let e=A.useContext(or);return e||Fe(!1),e}function Wg(r){let e=H0(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function $0(){var r;let e=A.useContext(jg),n=V0(),s=Wg();return e!==void 0?e:(r=n.errors)==null?void 0:r[s]}function G0(){let{router:r}=W0(zg.UseNavigateStable),e=Wg(Bg.UseNavigateStable),n=A.useRef(!1);return Ug(()=>{n.current=!0}),A.useCallback(function(l,a){a===void 0&&(a={}),n.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,As({fromRouteId:e},a)))},[r,e])}const gm={};function q0(r,e,n){gm[r]||(gm[r]=!0)}function K0(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Q0(r){let{to:e,replace:n,state:s,relative:l}=r;Ii()||Fe(!1);let{future:a,static:c}=A.useContext(Sn),{matches:f}=A.useContext(or),{pathname:p}=Or(),g=ld(),y=od(e,sd(f,a.v7_relativeSplatPath),p,l==="path"),v=JSON.stringify(y);return A.useEffect(()=>g(JSON.parse(v),{replace:n,state:s,relative:l}),[g,v,l,n,s]),null}function li(r){Fe(!1)}function Y0(r){let{basename:e="/",children:n=null,location:s,navigationType:l=Kn.Pop,navigator:a,static:c=!1,future:f}=r;Ii()&&Fe(!1);let p=e.replace(/^\/*/,"/"),g=A.useMemo(()=>({basename:p,navigator:a,static:c,future:As({v7_relativeSplatPath:!1},f)}),[p,f,a,c]);typeof s=="string"&&(s=Ci(s));let{pathname:y="/",search:v="",hash:E="",state:P=null,key:R="default"}=s,x=A.useMemo(()=>{let O=pi(y,p);return O==null?null:{location:{pathname:O,search:v,hash:E,state:P,key:R},navigationType:l}},[p,y,v,E,P,R,l]);return x==null?null:A.createElement(Sn.Provider,{value:g},A.createElement(Yl.Provider,{children:n,value:x}))}function J0(r){let{children:e,location:n}=r;return b0(Dc(e),n)}new Promise(()=>{});function Dc(r,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(r,(s,l)=>{if(!A.isValidElement(s))return;let a=[...e,l];if(s.type===A.Fragment){n.push.apply(n,Dc(s.props.children,a));return}s.type!==li&&Fe(!1),!s.props.index||!s.props.children||Fe(!1);let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Dc(s.props.children,a)),n.push(c)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Il.apply(this,arguments)}function Vg(r,e){if(r==null)return{};var n={},s=Object.keys(r),l,a;for(a=0;a<s.length;a++)l=s[a],!(e.indexOf(l)>=0)&&(n[l]=r[l]);return n}function X0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Z0(r,e){return r.button===0&&(!e||e==="_self")&&!X0(r)}const eE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],tE=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],nE="6";try{window.__reactRouterVersion=nE}catch{}const rE=A.createContext({isTransitioning:!1}),iE="startTransition",vm=e0[iE];function sE(r){let{basename:e,children:n,future:s,window:l}=r,a=A.useRef();a.current==null&&(a.current=l0({window:l,v5Compat:!0}));let c=a.current,[f,p]=A.useState({action:c.action,location:c.location}),{v7_startTransition:g}=s||{},y=A.useCallback(v=>{g&&vm?vm(()=>p(v)):p(v)},[p,g]);return A.useLayoutEffect(()=>c.listen(y),[c,y]),A.useEffect(()=>K0(s),[s]),A.createElement(Y0,{basename:e,children:n,location:f.location,navigationType:f.action,navigator:c,future:s})}const oE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aE=A.forwardRef(function(e,n){let{onClick:s,relative:l,reloadDocument:a,replace:c,state:f,target:p,to:g,preventScrollReset:y,viewTransition:v}=e,E=Vg(e,eE),{basename:P}=A.useContext(Sn),R,x=!1;if(typeof g=="string"&&lE.test(g)&&(R=g,oE))try{let H=new URL(window.location.href),z=g.startsWith("//")?new URL(H.protocol+g):new URL(g),re=pi(z.pathname,P);z.origin===H.origin&&re!=null?g=re+z.search+z.hash:x=!0}catch{}let O=D0(g,{relative:l}),Q=cE(g,{replace:c,state:f,target:p,preventScrollReset:y,relative:l,viewTransition:v});function W(H){s&&s(H),H.defaultPrevented||Q(H)}return A.createElement("a",Il({},E,{href:R||O,onClick:x||a?s:W,ref:n,target:p}))}),fl=A.forwardRef(function(e,n){let{"aria-current":s="page",caseSensitive:l=!1,className:a="",end:c=!1,style:f,to:p,viewTransition:g,children:y}=e,v=Vg(e,tE),E=Jl(p,{relative:v.relative}),P=Or(),R=A.useContext(Fg),{navigator:x,basename:O}=A.useContext(Sn),Q=R!=null&&dE(E)&&g===!0,W=x.encodeLocation?x.encodeLocation(E).pathname:E.pathname,H=P.pathname,z=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;l||(H=H.toLowerCase(),z=z?z.toLowerCase():null,W=W.toLowerCase()),z&&O&&(z=pi(z,O)||z);const re=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let se=H===W||!c&&H.startsWith(W)&&H.charAt(re)==="/",pe=z!=null&&(z===W||!c&&z.startsWith(W)&&z.charAt(W.length)==="/"),Ie={isActive:se,isPending:pe,isTransitioning:Q},D=se?s:void 0,oe;typeof a=="function"?oe=a(Ie):oe=[a,se?"active":null,pe?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let De=typeof f=="function"?f(Ie):f;return A.createElement(aE,Il({},v,{"aria-current":D,className:oe,ref:n,style:De,to:p,viewTransition:g}),typeof y=="function"?y(Ie):y)});var Lc;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Lc||(Lc={}));var _m;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(_m||(_m={}));function uE(r){let e=A.useContext(Ql);return e||Fe(!1),e}function cE(r,e){let{target:n,replace:s,state:l,preventScrollReset:a,relative:c,viewTransition:f}=e===void 0?{}:e,p=ld(),g=Or(),y=Jl(r,{relative:c});return A.useCallback(v=>{if(Z0(v,n)){v.preventDefault();let E=s!==void 0?s:Cl(g)===Cl(y);p(r,{replace:E,state:l,preventScrollReset:a,relative:c,viewTransition:f})}},[g,p,y,s,l,n,r,a,c,f])}function dE(r,e){e===void 0&&(e={});let n=A.useContext(rE);n==null&&Fe(!1);let{basename:s}=uE(Lc.useViewTransitionState),l=Jl(r,{relative:e.relative});if(!n.isTransitioning)return!1;let a=pi(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=pi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Oc(l.pathname,c)!=null||Oc(l.pathname,a)!=null}const hE=()=>{};var ym={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=function(r,e){if(!r)throw ki(e)},ki=function(r){return new Error("Firebase Database ("+Hg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},fE=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const a=r[n++];e[s++]=String.fromCharCode((l&31)<<6|a&63)}else if(l>239&&l<365){const a=r[n++],c=r[n++],f=r[n++],p=((l&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=r[n++],c=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(a&63)<<6|c&63)}}return e.join("")},ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const a=r[l],c=l+1<r.length,f=c?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,y=a>>2,v=(a&3)<<4|f>>4;let E=(f&15)<<2|g>>6,P=g&63;p||(P=64,c||(E=64)),s.push(n[y],n[v],n[E],n[P])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray($g(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):fE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const a=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const v=l<r.length?n[r.charAt(l)]:64;if(++l,a==null||f==null||g==null||v==null)throw new pE;const E=a<<2|f>>4;if(s.push(E),g!==64){const P=f<<4&240|g>>2;if(s.push(P),v!==64){const R=g<<6&192|v;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class pE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gg=function(r){const e=$g(r);return ad.encodeByteArray(e,!0)},kl=function(r){return Gg(r).replace(/\./g,"")},Tl=function(r){try{return ad.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(r){return qg(void 0,r)}function qg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gE(n)||(r[n]=qg(r[n],e[n]));return r}function gE(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=()=>vE().__FIREBASE_DEFAULTS__,yE=()=>{if(typeof process>"u"||typeof ym>"u")return;const r=ym.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},wE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Tl(r[1]);return e&&JSON.parse(e)},ud=()=>{try{return hE()||_E()||yE()||wE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Kg=r=>{var e,n;return(n=(e=ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},EE=r=>{const e=Kg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qg=()=>{var r;return(r=ud())===null||r===void 0?void 0:r.config},Yg=r=>{var e;return(e=ud())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jg(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[kl(JSON.stringify(n)),kl(JSON.stringify(c)),""].join(".")}const Cs={};function CE(){const r={prod:[],emulator:[]};for(const e of Object.keys(Cs))Cs[e]?r.emulator.push(e):r.prod.push(e);return r}function IE(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let wm=!1;function Xg(r,e){if(typeof window>"u"||typeof document>"u"||!Ti(window.location.host)||Cs[r]===e||Cs[r]||wm)return;Cs[r]=e;function n(E){return`__firebase__banner__${E}`}const s="__firebase__banner",a=CE().prod.length>0;function c(){const E=document.getElementById(s);E&&E.remove()}function f(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function p(E,P){E.setAttribute("width","24"),E.setAttribute("id",P),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function g(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{wm=!0,c()},E}function y(E,P){E.setAttribute("id",P),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function v(){const E=IE(s),P=n("text"),R=document.getElementById(P)||document.createElement("span"),x=n("learnmore"),O=document.getElementById(x)||document.createElement("a"),Q=n("preprendIcon"),W=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const H=E.element;f(H),y(O,x);const z=g();p(W,Q),H.append(W,R,O,z),document.body.appendChild(H)}a?(R.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function kE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NE(){const r=gt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function xE(){return Hg.NODE_ADMIN===!0}function PE(){try{return typeof indexedDB=="object"}catch{return!1}}function RE(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var a;e(((a=l.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="FirebaseError";class lr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=AE,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,a=this.errors[e],c=a?OE(a,s):"Error",f=`${this.serviceName}: ${c} (${l}).`;return new lr(l,f,s)}}function OE(r,e){return r.replace(DE,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const DE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(r){return JSON.parse(r)}function Qe(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=function(r){let e={},n={},s={},l="";try{const a=r.split(".");e=Os(Tl(a[0])||""),n=Os(Tl(a[1])||""),l=a[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},LE=function(r){const e=ev(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bE=function(r){const e=ev(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function mi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function bc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Tr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const a=r[l],c=e[l];if(Em(a)&&Em(c)){if(!Tr(a,c))return!1}else if(a!==c)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Em(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const E=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(E<<1|E>>>31)&4294967295}let l=this.chain_[0],a=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,y;for(let v=0;v<80;v++){v<40?v<20?(g=f^a&(c^f),y=1518500249):(g=a^c^f,y=1859775393):v<60?(g=a&c|f&(a|c),y=2400959708):(g=a^c^f,y=3395469782);const E=(l<<5|l>>>27)+g+p+y+s[v]&4294967295;p=f,f=c,c=(a<<30|a>>>2)&4294967295,a=l,l=E}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const a=this.buf_;let c=this.inbuf_;for(;l<n;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(a[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}else for(;l<n;)if(a[c]=e[l],++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[l]>>a&255,++s;return e}}function FE(r,e){const n=new jE(r,e);return n.subscribe.bind(n)}class jE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");UE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=pc),l.error===void 0&&(l.error=pc),l.complete===void 0&&(l.complete=pc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function pc(){}function Xl(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const a=l-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(a<<10)+c}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Zl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(r){return r&&r._delegate?r._delegate:r}class Nr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Hs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(l)return null;throw a}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VE(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:l});s.resolve(a)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);s===f&&c.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(l,a);const c=this.instances.get(l);return c&&e(c,l),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:WE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WE(r){return r===Er?void 0:r}function VE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ee||(Ee={}));const $E={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},GE=Ee.INFO,qE={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},KE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=qE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=GE,this._logHandler=KE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$E[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const QE=(r,e)=>e.some(n=>r instanceof n);let Sm,Cm;function YE(){return Sm||(Sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JE(){return Cm||(Cm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tv=new WeakMap,Mc=new WeakMap,nv=new WeakMap,mc=new WeakMap,hd=new WeakMap;function XE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{n(Jn(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&tv.set(n,r)}).catch(()=>{}),hd.set(e,r),e}function ZE(r){if(Mc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{n(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});Mc.set(r,e)}let Fc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Mc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||nv.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function eS(r){Fc=r(Fc)}function tS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(gc(this),e,...n);return nv.set(s,e.sort?e.sort():[e]),Jn(s)}:JE().includes(r)?function(...e){return r.apply(gc(this),e),Jn(tv.get(this))}:function(...e){return Jn(r.apply(gc(this),e))}}function nS(r){return typeof r=="function"?tS(r):(r instanceof IDBTransaction&&ZE(r),QE(r,YE())?new Proxy(r,Fc):r)}function Jn(r){if(r instanceof IDBRequest)return XE(r);if(mc.has(r))return mc.get(r);const e=nS(r);return e!==r&&(mc.set(r,e),hd.set(e,r)),e}const gc=r=>hd.get(r);function rS(r,e,{blocked:n,upgrade:s,blocking:l,terminated:a}={}){const c=indexedDB.open(r,e),f=Jn(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Jn(c.result),p.oldVersion,p.newVersion,Jn(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{a&&p.addEventListener("close",()=>a()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const iS=["get","getKey","getAll","getAllKeys","count"],sS=["put","add","delete","clear"],vc=new Map;function Im(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=sS.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||iS.includes(n)))return;const a=async function(c,...f){const p=this.transaction(c,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return vc.set(e,a),a}eS(r=>({...r,get:(e,n,s)=>Im(e,n)||r.get(e,n,s),has:(e,n)=>!!Im(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lS(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jc="@firebase/app",km="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new dd("@firebase/app"),aS="@firebase/app-compat",uS="@firebase/analytics-compat",cS="@firebase/analytics",dS="@firebase/app-check-compat",hS="@firebase/app-check",fS="@firebase/auth",pS="@firebase/auth-compat",mS="@firebase/database",gS="@firebase/data-connect",vS="@firebase/database-compat",_S="@firebase/functions",yS="@firebase/functions-compat",wS="@firebase/installations",ES="@firebase/installations-compat",SS="@firebase/messaging",CS="@firebase/messaging-compat",IS="@firebase/performance",kS="@firebase/performance-compat",TS="@firebase/remote-config",NS="@firebase/remote-config-compat",xS="@firebase/storage",PS="@firebase/storage-compat",RS="@firebase/firestore",AS="@firebase/ai",OS="@firebase/firestore-compat",DS="firebase",LS="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="[DEFAULT]",bS={[jc]:"fire-core",[aS]:"fire-core-compat",[cS]:"fire-analytics",[uS]:"fire-analytics-compat",[hS]:"fire-app-check",[dS]:"fire-app-check-compat",[fS]:"fire-auth",[pS]:"fire-auth-compat",[mS]:"fire-rtdb",[gS]:"fire-data-connect",[vS]:"fire-rtdb-compat",[_S]:"fire-fn",[yS]:"fire-fn-compat",[wS]:"fire-iid",[ES]:"fire-iid-compat",[SS]:"fire-fcm",[CS]:"fire-fcm-compat",[IS]:"fire-perf",[kS]:"fire-perf-compat",[TS]:"fire-rc",[NS]:"fire-rc-compat",[xS]:"fire-gcs",[PS]:"fire-gcs-compat",[RS]:"fire-fst",[OS]:"fire-fst-compat",[AS]:"fire-vertex","fire-js":"fire-js",[DS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map,MS=new Map,zc=new Map;function Tm(r,e){try{r.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function gi(r){const e=r.name;if(zc.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,r);for(const n of xl.values())Tm(n,r);for(const n of MS.values())Tm(n,r);return!0}function fd(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function $t(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new $s("app","Firebase",FS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=LS;function rv(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Uc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Xn.create("bad-app-name",{appName:String(l)});if(n||(n=Qg()),!n)throw Xn.create("no-options");const a=xl.get(l);if(a){if(Tr(n,a.options)&&Tr(s,a.config))return a;throw Xn.create("duplicate-app",{appName:l})}const c=new HE(l);for(const p of zc.values())c.addComponent(p);const f=new jS(n,s,c);return xl.set(l,f),f}function iv(r=Uc){const e=xl.get(r);if(!e&&r===Uc&&Qg())return rv();if(!e)throw Xn.create("no-app",{appName:r});return e}function Zn(r,e,n){var s;let l=(s=bS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const a=l.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${l}" with version "${e}":`];a&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(f.join(" "));return}gi(new Nr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="firebase-heartbeat-database",zS=1,Ds="firebase-heartbeat-store";let _c=null;function sv(){return _c||(_c=rS(US,zS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ds)}catch(n){console.warn(n)}}}}).catch(r=>{throw Xn.create("idb-open",{originalErrorMessage:r.message})})),_c}async function BS(r){try{const n=(await sv()).transaction(Ds),s=await n.objectStore(Ds).get(ov(r));return await n.done,s}catch(e){if(e instanceof lr)yn.warn(e.message);else{const n=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function Nm(r,e){try{const s=(await sv()).transaction(Ds,"readwrite");await s.objectStore(Ds).put(e,ov(r)),await s.done}catch(n){if(n instanceof lr)yn.warn(n.message);else{const s=Xn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(s.message)}}}function ov(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=1024,VS=30;class HS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=xm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:l}),this._heartbeatsCache.heartbeats.length>VS){const c=qS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){yn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xm(),{heartbeatsToSend:s,unsentEntries:l}=$S(this._heartbeatsCache.heartbeats),a=kl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return yn.warn(n),""}}}function xm(){return new Date().toISOString().substring(0,10)}function $S(r,e=WS){const n=[];let s=r.slice();for(const l of r){const a=n.find(c=>c.agent===l.agent);if(a){if(a.dates.push(l.date),Pm(n)>e){a.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Pm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class GS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PE()?RE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Pm(r){return kl(JSON.stringify({version:2,heartbeats:r})).length}function qS(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(r){gi(new Nr("platform-logger",e=>new oS(e),"PRIVATE")),gi(new Nr("heartbeat",e=>new HS(e),"PRIVATE")),Zn(jc,km,r),Zn(jc,km,"esm2017"),Zn("fire-js","")}KS("");function pd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function lv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QS=lv,av=new $s("auth","Firebase",lv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new dd("@firebase/auth");function YS(r,...e){Pl.logLevel<=Ee.WARN&&Pl.warn(`Auth (${xi}): ${r}`,...e)}function _l(r,...e){Pl.logLevel<=Ee.ERROR&&Pl.error(`Auth (${xi}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(r,...e){throw gd(r,...e)}function Qt(r,...e){return gd(r,...e)}function md(r,e,n){const s=Object.assign(Object.assign({},QS()),{[e]:n});return new $s("auth","Firebase",s).create(e,{appName:r.name})}function kr(r){return md(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JS(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&rn(r,"argument-error"),md(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return av.create(r,...e)}function ne(r,e,...n){if(!r)throw gd(e,...n)}function mn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw _l(e),new Error(e)}function wn(r,e){r||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function XS(){return Rm()==="http:"||Rm()==="https:"}function Rm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XS()||TE()||"connection"in navigator)?navigator.onLine:!0}function eC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=cd()||Zg()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(r,e){wn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rC=new Gs(3e4,6e4);function _d(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Pi(r,e,n,s,l={}){return cv(r,l,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const f=Ni(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},a);return kE()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&Ti(r.emulatorConfig.host)&&(g.credentials="include"),uv.fetch()(await dv(r,r.config.apiHost,n,f),g)})}async function cv(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},tC),e);try{const l=new sC(r),a=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw pl(r,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const f=a.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw pl(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw pl(r,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw md(r,y,g);rn(r,y)}}catch(l){if(l instanceof lr)throw l;rn(r,"network-request-failed",{message:String(l)})}}async function iC(r,e,n,s,l={}){const a=await Pi(r,e,n,s,l);return"mfaPendingCredential"in a&&rn(r,"multi-factor-auth-required",{_serverResponse:a}),a}async function dv(r,e,n,s){const l=`${e}${n}?${s}`,a=r,c=a.config.emulator?vd(r.config,l):`${r.config.apiScheme}://${l}`;return nC.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}class sC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Qt(this.auth,"network-request-failed")),rC.get())})}}function pl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Qt(r,e,s);return l.customData._tokenResponse=n,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(r,e){return Pi(r,"POST","/v1/accounts:delete",e)}async function Rl(r,e){return Pi(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lC(r,e=!1){const n=vt(r),s=await n.getIdToken(e),l=yd(s);ne(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const a=typeof l.firebase=="object"?l.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:l,token:s,authTime:Is(yc(l.auth_time)),issuedAtTime:Is(yc(l.iat)),expirationTime:Is(yc(l.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function yc(r){return Number(r)*1e3}function yd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return _l("JWT malformed, contained fewer than 3 sections"),null;try{const l=Tl(n);return l?JSON.parse(l):(_l("Failed to decode base64 JWT payload"),null)}catch(l){return _l("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Am(r){const e=yd(r);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof lr&&aC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function aC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Ls(r,Rl(n,{idToken:s}));ne(l==null?void 0:l.users.length,n,"internal-error");const a=l.users[0];r._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?hv(a.providerUserInfo):[],f=dC(r.providerData,c),p=r.isAnonymous,g=!(r.email&&a.passwordHash)&&!(f!=null&&f.length),y=p?g:!1,v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new Wc(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(r,v)}async function cC(r){const e=vt(r);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dC(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function hv(r){return r.map(e=>{var{providerId:n}=e,s=pd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hC(r,e){const n=await cv(r,{},async()=>{const s=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:a}=r.config,c=await dv(r,l,"/v1/token",`key=${a}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return r.emulatorConfig&&Ti(r.emulatorConfig.host)&&(p.credentials="include"),uv.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fC(r,e){return Pi(r,"POST","/v2/accounts:revokeToken",_d(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Am(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Am(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:a}=await hC(e,n);this.updateTokensAndExpiration(s,l,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:a}=n,c=new ui;return s&&(ne(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(ne(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),a&&(ne(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(r,e){ne(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,a=pd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Wc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lC(this,e)}reload(){return cC(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await Ls(this,oC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,a,c,f,p,g,y;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,E=(l=n.email)!==null&&l!==void 0?l:void 0,P=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,R=(c=n.photoURL)!==null&&c!==void 0?c:void 0,x=(f=n.tenantId)!==null&&f!==void 0?f:void 0,O=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Q=(g=n.createdAt)!==null&&g!==void 0?g:void 0,W=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:H,emailVerified:z,isAnonymous:re,providerData:se,stsTokenManager:pe}=n;ne(H&&pe,e,"internal-error");const Ie=ui.fromJSON(this.name,pe);ne(typeof H=="string",e,"internal-error"),Hn(v,e.name),Hn(E,e.name),ne(typeof z=="boolean",e,"internal-error"),ne(typeof re=="boolean",e,"internal-error"),Hn(P,e.name),Hn(R,e.name),Hn(x,e.name),Hn(O,e.name),Hn(Q,e.name),Hn(W,e.name);const D=new qt({uid:H,auth:e,email:E,emailVerified:z,displayName:v,isAnonymous:re,photoURL:R,phoneNumber:P,tenantId:x,stsTokenManager:Ie,createdAt:Q,lastLoginAt:W});return se&&Array.isArray(se)&&(D.providerData=se.map(oe=>Object.assign({},oe))),O&&(D._redirectEventId=O),D}static async _fromIdTokenResponse(e,n,s=!1){const l=new ui;l.updateFromServerResponse(n);const a=new qt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Al(a),a}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];ne(l.localId!==void 0,"internal-error");const a=l.providerUserInfo!==void 0?hv(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(a!=null&&a.length),f=new ui;f.updateFromIdToken(s);const p=new qt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:a,metadata:new Wc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Map;function gn(r){wn(r instanceof Function,"Expected a class definition");let e=Om.get(r);return e?(wn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Om.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fv.type="NONE";const Dm=fv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(r,e,n){return`firebase:${r}:${e}:${n}`}class ci{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:a}=this.auth;this.fullUserKey=yl(this.userKey,l.apiKey,a),this.fullPersistenceKey=yl("persistence",l.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Rl(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ci(gn(Dm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=l[0]||gn(Dm);const c=yl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const y=await g._get(c);if(y){let v;if(typeof y=="string"){const E=await Rl(e,{idToken:y}).catch(()=>{});if(!E)break;v=await qt._fromGetAccountInfoResponse(e,E,y)}else v=qt._fromJSON(e,y);g!==a&&(f=v),a=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new ci(a,e,s):(a=p[0],f&&await a._set(c,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==a)try{await g._remove(c)}catch{}})),new ci(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yv(e))return"Blackberry";if(wv(e))return"Webos";if(mv(e))return"Safari";if((e.includes("chrome/")||gv(e))&&!e.includes("edge/"))return"Chrome";if(_v(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pv(r=gt()){return/firefox\//i.test(r)}function mv(r=gt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gv(r=gt()){return/crios\//i.test(r)}function vv(r=gt()){return/iemobile/i.test(r)}function _v(r=gt()){return/android/i.test(r)}function yv(r=gt()){return/blackberry/i.test(r)}function wv(r=gt()){return/webos/i.test(r)}function wd(r=gt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function pC(r=gt()){var e;return wd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mC(){return NE()&&document.documentMode===10}function Ev(r=gt()){return wd(r)||_v(r)||wv(r)||yv(r)||/windows phone/i.test(r)||vv(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(r,e=[]){let n;switch(r){case"Browser":n=Lm(gt());break;case"Worker":n=`${Lm(gt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((c,f)=>{try{const p=e(a);c(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(r,e={}){return Pi(r,"GET","/v2/passwordPolicy",_d(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=6;class yC{constructor(e){var n,s,l,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:_C,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,a,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bm(this),this.idTokenSubscription=new bm(this),this.beforeStateQueue=new gC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var s,l,a;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rl(this,{idToken:e}),s=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($t(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(l=p.user,a=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(kr(this));const n=e?vt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vC(this),n=new yC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await fC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(f,this,"internal-error"),f.then(()=>{c||a(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ea(r){return vt(r)}class bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=FE(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ed={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EC(r){Ed=r}function SC(r){return Ed.loadJS(r)}function CC(){return Ed.gapiScript}function IC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(r,e){const n=fd(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),a=n.getOptions();if(Tr(a,e??{}))return l;rn(l,"already-initialized")}return n.initialize({options:e})}function TC(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function NC(r,e,n){const s=ea(r);ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,a=Cv(e),{host:c,port:f}=xC(e),p=f===null?"":`:${f}`,g={url:`${a}//${c}${p}/`},y=Object.freeze({host:c,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ne(Tr(g,s.config.emulator)&&Tr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Ti(c)?(Jg(`${a}//${c}${p}`),Xg("Auth",!0)):PC()}function Cv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function xC(r){const e=Cv(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const a=l[1];return{host:a,port:Mm(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:Mm(c)}}}function Mm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function PC(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(r,e){return iC(r,"POST","/v1/accounts:signInWithIdp",_d(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="http://localhost";class xr extends Iv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,a=pd(n,["providerId","signInMethod"]);if(!s||!l)return null;const c=new xr(s,l);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,di(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:RC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends qs{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends qs{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends qs{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const a=await qt._fromIdTokenResponse(e,s,l),c=Fm(s);return new vi({user:a,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Fm(s);return new vi({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Fm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends lr{constructor(e,n,s,l){var a;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Ol(e,n,s,l)}}function kv(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(r,a,e,s):a})}async function AC(r,e,n=!1){const s=await Ls(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return vi._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(r,e,n=!1){const{auth:s}=r;if($t(s.app))return Promise.reject(kr(s));const l="reauthenticate";try{const a=await Ls(r,kv(s,l,e,r),n);ne(a.idToken,s,"internal-error");const c=yd(a.idToken);ne(c,s,"internal-error");const{sub:f}=c;return ne(r.uid===f,s,"user-mismatch"),vi._forOperation(r,l,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&rn(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(r,e,n=!1){if($t(r.app))return Promise.reject(kr(r));const s="signIn",l=await kv(r,s,e),a=await vi._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(a.user),a}function LC(r,e,n,s){return vt(r).onIdTokenChanged(e,n,s)}function bC(r,e,n){return vt(r).beforeAuthStateChanged(e,n)}function MC(r,e,n,s){return vt(r).onAuthStateChanged(e,n,s)}function FC(r){return vt(r).signOut()}const Dl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=1e3,UC=10;class Nv extends Tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ev(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);mC()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,UC):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},jC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nv.type="LOCAL";const zC=Nv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends Tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xv.type="SESSION";const Pv=xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ta(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:a}=n.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(c).map(async g=>g(n.origin,a)),p=await BC(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let a,c;return new Promise((f,p)=>{const g=Cd("",20);l.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(v){const E=v;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(E.data.response);break;default:clearTimeout(y),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function VC(r){nn().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function HC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $C(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function GC(){return Rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av="firebaseLocalStorageDb",qC=1,Ll="firebaseLocalStorage",Ov="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(r,e){return r.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function KC(){const r=indexedDB.deleteDatabase(Av);return new Ks(r).toPromise()}function Vc(){const r=indexedDB.open(Av,qC);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ll,{keyPath:Ov})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ll)?e(s):(s.close(),await KC(),e(await Vc()))})})}async function jm(r,e,n){const s=na(r,!0).put({[Ov]:e,value:n});return new Ks(s).toPromise()}async function QC(r,e){const n=na(r,!1).get(e),s=await new Ks(n).toPromise();return s===void 0?null:s.value}function Um(r,e){const n=na(r,!0).delete(e);return new Ks(n).toPromise()}const YC=800,JC=3;class Dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>JC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(GC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HC(),!this.activeServiceWorker)return;this.sender=new WC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$C()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vc();return await jm(e,Dl,"1"),await Um(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>jm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>QC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const a=na(l,!1).getAll();return new Ks(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:a}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(a)&&(this.notifyListeners(l,a),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dv.type="LOCAL";const XC=Dv;new Gs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(r,e){return e?gn(e):(ne(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends Iv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZC(r){return DC(r.auth,new Id(r),r.bypassAuthState)}function eI(r){const{auth:e,user:n}=r;return ne(n,e,"internal-error"),OC(n,new Id(r),r.bypassAuthState)}async function tI(r){const{auth:e,user:n}=r;return ne(n,e,"internal-error"),AC(n,new Id(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n,s,l,a=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:a,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZC;case"linkViaPopup":case"linkViaRedirect":return tI;case"reauthViaPopup":case"reauthViaRedirect":return eI;default:rn(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=new Gs(2e3,1e4);async function rI(r,e,n){if($t(r.app))return Promise.reject(Qt(r,"operation-not-supported-in-this-environment"));const s=ea(r);JS(r,e,Sd);const l=Lv(s,n);return new Cr(s,"signInViaPopup",e,l).executeNotNull()}class Cr extends bv{constructor(e,n,s,l,a){super(e,n,l,a),this.provider=s,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Cd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nI.get())};e()}}Cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="pendingRedirect",wl=new Map;class sI extends bv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const s=await oI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oI(r,e){const n=uI(e),s=aI(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function lI(r,e){wl.set(r._key(),e)}function aI(r){return gn(r._redirectPersistence)}function uI(r){return yl(iI,r.config.apiKey,r.name)}async function cI(r,e,n=!1){if($t(r.app))return Promise.reject(kr(r));const s=ea(r),l=Lv(s,e),c=await new sI(s,l,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=600*1e3;class hI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Mv(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dI&&this.cachedEventUids.clear(),this.cachedEventUids.has(zm(e))}saveEventToCache(e){this.cachedEventUids.add(zm(e)),this.lastProcessedEventTime=Date.now()}}function zm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Mv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mv(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(r,e={}){return Pi(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gI=/^https?/;async function vI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await pI(r);for(const n of e)try{if(_I(n))return}catch{}rn(r,"unauthorized-domain")}function _I(r){const e=Bc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!gI.test(n))return!1;if(mI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new Gs(3e4,6e4);function Bm(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function wI(r){return new Promise((e,n)=>{var s,l,a;function c(){Bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bm(),n(Qt(r,"network-request-failed"))},timeout:yI.get()})}if(!((l=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((a=nn().gapi)===null||a===void 0)&&a.load)c();else{const f=IC("iframefcb");return nn()[f]=()=>{gapi.load?c():n(Qt(r,"network-request-failed"))},SC(`${CC()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw El=null,e})}let El=null;function EI(r){return El=El||wI(r),El}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Gs(5e3,15e3),CI="__/auth/iframe",II="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NI(r){const e=r.config;ne(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?vd(e,II):`https://${r.config.authDomain}/${CI}`,s={apiKey:e.apiKey,appName:r.name,v:xi},l=TI.get(r.config.apiHost);l&&(s.eid=l);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Ni(s).slice(1)}`}async function xI(r){const e=await EI(r),n=nn().gapi;return ne(n,r,"internal-error"),e.open({where:document.body,url:NI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},s=>new Promise(async(l,a)=>{await s.restyle({setHideOnLeave:!1});const c=Qt(r,"network-request-failed"),f=nn().setTimeout(()=>{a(c)},SI.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RI=500,AI=600,OI="_blank",DI="http://localhost";class Wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LI(r,e,n,s=RI,l=AI){const a=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},PI),{width:s.toString(),height:l.toString(),top:a,left:c}),g=gt().toLowerCase();n&&(f=gv(g)?OI:n),pv(g)&&(e=e||DI,p.scrollbars="yes");const y=Object.entries(p).reduce((E,[P,R])=>`${E}${P}=${R},`,"");if(pC(g)&&f!=="_self")return bI(e||"",f),new Wm(null);const v=window.open(e||"",f,y);ne(v,r,"popup-blocked");try{v.focus()}catch{}return new Wm(v)}function bI(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="__/auth/handler",FI="emulator/auth/handler",jI=encodeURIComponent("fac");async function Vm(r,e,n,s,l,a){ne(r.config.authDomain,r,"auth-domain-config-required"),ne(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:xi,eventId:l};if(e instanceof Sd){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",bc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries({}))c[y]=v}if(e instanceof qs){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(c.scopes=y.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await r._getAppCheckToken(),g=p?`#${jI}=${encodeURIComponent(p)}`:"";return`${UI(r)}?${Ni(f).slice(1)}${g}`}function UI({config:r}){return r.emulator?vd(r,FI):`https://${r.authDomain}/${MI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class zI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pv,this._completeRedirectFn=cI,this._overrideRedirectResult=lI}async _openPopup(e,n,s,l){var a;wn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Vm(e,n,s,Bc(),l);return LI(e,c,Cd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const a=await Vm(e,n,s,Bc(),l);return VC(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:a}=this.eventManagers[n];return l?Promise.resolve(l):(wn(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xI(e),s=new hI(e);return n.register("authEvent",l=>(ne(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},l=>{var a;const c=(a=l==null?void 0:l[0])===null||a===void 0?void 0:a[wc];c!==void 0&&n(!!c),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ev()||mv()||wd()}}const BI=zI;var Hm="@firebase/auth",$m="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HI(r){gi(new Nr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;ne(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sv(r)},g=new wC(s,l,a,p);return TC(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gi(new Nr("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(s=>new WI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(Hm,$m,VI(r)),Zn(Hm,$m,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=300,GI=Yg("authIdTokenMaxAge")||$I;let Gm=null;const qI=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>GI)return;const l=n==null?void 0:n.token;Gm!==l&&(Gm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function KI(r=iv()){const e=fd(r,"auth");if(e.isInitialized())return e.getImmediate();const n=kC(r,{popupRedirectResolver:BI,persistence:[XC,zC,Pv]}),s=Yg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=qI(a.toString());bC(n,c,()=>c(n.currentUser)),LC(n,f=>c(f))}}const l=Kg("auth");return l&&NC(n,`http://${l}`),n}function QI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}EC({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const a=Qt("internal-error");a.customData=l,n(a)},s.type="text/javascript",s.charset="UTF-8",QI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HI("Browser");var YI="firebase",JI="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(YI,JI,"app");var qm={};const Km="@firebase/database",Qm="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fv="";function XI(r){Fv=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZI(e)}}catch{}return new e1},Ir=jv("localStorage"),t1=jv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new dd("@firebase/database"),n1=(function(){let r=1;return function(){return r++}})(),Uv=function(r){const e=zE(r),n=new ME;n.update(e);const s=n.digest();return ad.encodeByteArray(s)},Qs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Qs.apply(null,s):typeof s=="object"?e+=Qe(s):e+=s,e+=" "}return e};let ks=null,Ym=!0;const r1=function(r,e){U(!0,"Can't turn on custom loggers persistently."),hi.logLevel=Ee.VERBOSE,ks=hi.log.bind(hi)},it=function(...r){if(Ym===!0&&(Ym=!1,ks===null&&t1.get("logging_enabled")===!0&&r1()),ks){const e=Qs.apply(null,r);ks(e)}},Ys=function(r){return function(...e){it(r,...e)}},Hc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Qs(...r);hi.error(e)},En=function(...r){const e=`FIREBASE FATAL ERROR: ${Qs(...r)}`;throw hi.error(e),new Error(e)},mt=function(...r){const e="FIREBASE WARNING: "+Qs(...r);hi.warn(e)},i1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},kd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},s1=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",Pr="[MAX_NAME]",Dr=function(r,e){if(r===e)return 0;if(r===_i||e===Pr)return-1;if(e===_i||r===Pr)return 1;{const n=Jm(r),s=Jm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},o1=function(r,e){return r===e?0:r<e?-1:1},ys=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Qe(e))},Td=function(r){if(typeof r!="object"||r===null)return Qe(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Qe(e[s]),n+=":",n+=Td(r[e[s]]);return n+="}",n},zv=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function lt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const Bv=function(r){U(!kd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,a,c,f,p;r===0?(a=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=f+s,c=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(a=0,c=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(a%2?1:0),a=Math.floor(a/2);g.push(l?1:0),g.reverse();const y=g.join("");let v="";for(p=0;p<64;p+=8){let E=parseInt(y.substr(p,8),2).toString(16);E.length===1&&(E="0"+E),v=v+E}return v.toLowerCase()},l1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},a1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function u1(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const c1=new RegExp("^-?(0*)\\d{1,10}$"),d1=-2147483648,h1=2147483647,Jm=function(r){if(c1.test(r)){const e=Number(r);if(e>=d1&&e<=h1)return e}return null},Ri=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},f1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,$t(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class Sl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="5",Wv="v",Vv="s",Hv="r",$v="f",Gv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qv="ls",Kv="p",$c="ac",Qv="websocket",Yv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,s,l,a=!1,c="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ir.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ir.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function g1(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Xv(r,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===Qv)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Yv)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);g1(r)&&(n.ns=r.namespace);const l=[];return lt(n,(a,c)=>{l.push(a+"="+c)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={},Sc={};function xd(r){const e=r.toString();return Ec[e]||(Ec[e]=new v1),Ec[e]}function _1(r,e){const n=r.toString();return Sc[n]||(Sc[n]=e()),Sc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ri(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="start",w1="close",E1="pLPCommand",S1="pRTLPCB",Zv="id",e_="pw",t_="ser",C1="cb",I1="seg",k1="ts",T1="d",N1="dframe",n_=1870,r_=30,x1=n_-r_,P1=25e3,R1=3e4;class ai{constructor(e,n,s,l,a,c,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ys(e),this.stats_=xd(n),this.urlFn=p=>(this.appCheckToken&&(p[$c]=this.appCheckToken),Xv(n,Yv,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new y1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R1)),s1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pd((...a)=>{const[c,f,p,g,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Xm)this.id=f,this.password=p;else if(c===w1)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,f]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Xm]="t",s[t_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[C1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wv]=Nd,this.transportSessionId&&(s[Vv]=this.transportSessionId),this.lastSessionId&&(s[qv]=this.lastSessionId),this.applicationId&&(s[Kv]=this.applicationId),this.appCheckToken&&(s[$c]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gv.test(location.hostname)&&(s[Hv]=$v);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ai.forceAllow_=!0}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){return ai.forceAllow_?!0:!ai.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!l1()&&!a1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Gg(n),l=zv(s,x1);for(let a=0;a<l.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[N1]="t",s[Zv]=e,s[e_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=n1(),window[E1+this.uniqueCallbackIdentifier]=e,window[S1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pd.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){it("frame writing exception"),f.stack&&it(f.stack),it(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zv]=this.myID,e[e_]=this.myPW,e[t_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+r_+s.length<=n_;){const c=this.pendingSegs.shift();s=s+"&"+I1+l+"="+c.seg+"&"+k1+l+"="+c.ts+"&"+T1+l+"="+c.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(P1)),a=()=>{clearTimeout(l),s()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=16384,O1=45e3;let bl=null;typeof MozWebSocket<"u"?bl=MozWebSocket:typeof WebSocket<"u"&&(bl=WebSocket);class Gt{constructor(e,n,s,l,a,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ys(this.connId),this.stats_=xd(n),this.connURL=Gt.connectionURL_(n,c,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,a){const c={};return c[Wv]=Nd,typeof location<"u"&&location.hostname&&Gv.test(location.hostname)&&(c[Hv]=$v),n&&(c[Vv]=n),s&&(c[qv]=s),l&&(c[$c]=l),a&&(c[Kv]=a),Xv(e,Qv,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ir.set("previous_websocket_failure",!0);try{let s;xE(),this.mySock=new bl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bl!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Ir.isInMemoryStorage||Ir.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ir.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zv(n,A1);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(O1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static get ALL_TRANSPORTS(){return[ai,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Gt&&Gt.isAvailable();let s=n&&!Gt.previouslyFailed();if(e.webSocketOnly&&(n||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Gt];else{const l=this.transports_=[];for(const a of bs.ALL_TRANSPORTS)a&&a.isAvailable()&&l.push(a);bs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=6e4,L1=5e3,b1=10*1024,M1=100*1024,Cc="t",Zm="d",F1="s",eg="r",j1="e",tg="o",ng="a",rg="n",ig="p",U1="h";class z1{constructor(e,n,s,l,a,c,f,p,g,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=a,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ys("c:"+this.id+":"),this.transportManager_=new bs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>M1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>b1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cc in e){const n=e[Cc];n===ng?this.upgradeIfSecondaryHealthy_():n===eg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ig,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ng,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ys(Cc,e);if(Zm in e){const s=e[Zm];if(n===U1){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===rg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===F1?this.onConnectionShutdown_(s):n===eg?this.onReset_(s):n===j1?Hc("Server Error: "+s):n===tg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Nd!==s&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(D1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(L1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ig,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ir.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let a=0;a<l.length;a++)if(l[a].callback===n&&(!s||s===l[a].context)){l.splice(a,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends s_{static getInstance(){return new Ml}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=32,og=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Se("")}function ue(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function rr(r){return r.pieces_.length-r.pieceNum_}function xe(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Se(r.pieces_,e)}function Rd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function B1(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ms(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function o_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new Se(e,0)}function ze(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof Se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Se(n,0)}function he(r){return r.pieceNum_>=r.pieces_.length}function pt(r,e){const n=ue(r),s=ue(e);if(n===null)return e;if(n===s)return pt(xe(r),xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function W1(r,e){const n=Ms(r,0),s=Ms(e,0);for(let l=0;l<n.length&&l<s.length;l++){const a=Dr(n[l],s[l]);if(a!==0)return a}return n.length===s.length?0:n.length<s.length?-1:1}function Ad(r,e){if(rr(r)!==rr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Mt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(rr(r)>rr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class V1{constructor(e,n){this.errorPrefix_=n,this.parts_=Ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Zl(this.parts_[s]);l_(this)}}function H1(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Zl(e),l_(r)}function $1(r){const e=r.parts_.pop();r.byteLength_-=Zl(e),r.parts_.length>0&&(r.byteLength_-=1)}function l_(r){if(r.byteLength_>og)throw new Error(r.errorPrefix_+"has a key path longer than "+og+" bytes ("+r.byteLength_+").");if(r.parts_.length>sg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sg+") or object contains a cycle "+Sr(r))}function Sr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends s_{static getInstance(){return new Od}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=1e3,G1=300*1e3,lg=30*1e3,q1=1.3,K1=3e4,Q1="server_kill",ag=3;class _n extends i_{constructor(e,n,s,l,a,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=_n.nextPersistentConnectionId_++,this.log_=Ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ws,this.maxReconnectDelay_=G1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Od.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ml.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,a={r:l,a:e,b:n};this.log_(Qe(a)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Hs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,s,l){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(c).set(a,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const a={p:s},c="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,f=>{const p=f.d,g=f.s;_n.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const s=mi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=LE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const a=l.s,c=l.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const a={p:e},c="n";l&&(a.q=s,a.t=l),this.sendRequest(c,a)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const a={p:n,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,a){this.initConnection_();const c={p:n,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hc("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>K1&&(this.reconnectDelay_=ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*q1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+_n.nextConnectionId_++,a=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,s())},g=function(v){U(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,E]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=E&&E.token,f=new z1(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,P=>{mt(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(Q1)},a))}catch(v){this.log_("Failed to get token: "+v),c||(this.repoInfo_.nodeAdmin&&mt(v),p())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bc(this.interruptReasons_)&&(this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(a=>Td(a)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Se(e).toString();let l;if(this.listens.has(s)){const a=this.listens.get(s);l=a.get(n),a.delete(n),a.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ag&&(this.reconnectDelay_=lg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ag&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fv.replace(/\./g,"-")]=1,cd()?e["framework.cordova"]=1:Zg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ml.getInstance().currentlyOnline();return bc(this.interruptReasons_)&&e}}_n.nextPersistentConnectionId_=0;_n.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ce(_i,e),l=new ce(_i,n);return this.compare(s,l)!==0}minPost(){return ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;class a_ extends ra{static get __EMPTY_NODE(){return ml}static set __EMPTY_NODE(e){ml=e}compare(e,n){return Dr(e.name,n.name)}isDefinedOn(e){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ce.MIN}maxPost(){return new ce(Pr,ml)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ce(e,ml)}toString(){return".key"}}const fi=new a_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s,l,a=null){this.isReverse_=l,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,s,l,a){this.key=e,this.value=n,this.color=s??tt.RED,this.left=l??It.EMPTY_NODE,this.right=a??It.EMPTY_NODE}copy(e,n,s,l,a){return new tt(e??this.key,n??this.value,s??this.color,l??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const a=s(e,l.key);return a<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):a===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return It.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class Y1{copy(e,n,s,l,a){return this}insert(e,n,s){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class It{constructor(e,n=It.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new It(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new It(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gl(this.root_,null,this.comparator_,!0,e)}}It.EMPTY_NODE=new Y1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(r,e){return Dr(r.name,e.name)}function Dd(r,e){return Dr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc;function X1(r){Gc=r}const u_=function(r){return typeof r=="number"?"number:"+Bv(r):"string:"+r},c_=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else U(r===Gc||r.isEmpty(),"priority of unexpected type.");U(r===Gc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug;class et{static set __childrenNodeConstructor(e){ug=e}static get __childrenNodeConstructor(){return ug}constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),c_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:ue(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ue(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||rr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+u_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bv(this.value_):e+=this.value_,this.lazyHash_=Uv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=et.VALUE_TYPE_ORDER.indexOf(n),a=et.VALUE_TYPE_ORDER.indexOf(s);return U(l>=0,"Unknown leaf type: "+n),U(a>=0,"Unknown leaf type: "+s),l===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d_,h_;function Z1(r){d_=r}function ek(r){h_=r}class tk extends ra{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),a=s.compareTo(l);return a===0?Dr(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ce.MIN}maxPost(){return new ce(Pr,new et("[PRIORITY-POST]",h_))}makePost(e,n){const s=d_(e);return new ce(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const Be=new tk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=Math.log(2);class rk{constructor(e){const n=a=>parseInt(Math.log(a)/nk,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fl=function(r,e,n,s){r.sort(e);const l=function(p,g){const y=g-p;let v,E;if(y===0)return null;if(y===1)return v=r[p],E=n?n(v):v,new tt(E,v.node,tt.BLACK,null,null);{const P=parseInt(y/2,10)+p,R=l(p,P),x=l(P+1,g);return v=r[P],E=n?n(v):v,new tt(E,v.node,tt.BLACK,R,x)}},a=function(p){let g=null,y=null,v=r.length;const E=function(R,x){const O=v-R,Q=v;v-=R;const W=l(O+1,Q),H=r[O],z=n?n(H):H;P(new tt(z,H.node,x,null,W))},P=function(R){g?(g.left=R,g=R):(y=R,g=R)};for(let R=0;R<p.count;++R){const x=p.nextBitIsOne(),O=Math.pow(2,p.count-(R+1));x?E(O,tt.BLACK):(E(O,tt.BLACK),E(O,tt.RED))}return y},c=new rk(r.length),f=a(c);return new It(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;const oi={};class vn{static get Default(){return U(oi&&Be,"ChildrenNode.ts has not been loaded"),Ic=Ic||new vn({".priority":oi},{".priority":Be}),Ic}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof It?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const a=n.getIterator(ce.Wrap);let c=a.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let f;l?f=Fl(s,e.getCompare()):f=oi;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=f,new vn(y,g)}addToIndexes(e,n){const s=Nl(this.indexes_,(l,a)=>{const c=mi(this.indexSet_,a);if(U(c,"Missing index implementation for "+a),l===oi)if(c.isDefinedOn(e.node)){const f=[],p=n.getIterator(ce.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Fl(f,c.getCompare())}else return oi;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new ce(e.name,f))),p.insert(e,e.node)}});return new vn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Nl(this.indexes_,l=>{if(l===oi)return l;{const a=n.get(e.name);return a?l.remove(new ce(e.name,a)):l}});return new vn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class ee{static get EMPTY_NODE(){return Es||(Es=new ee(new It(Dd),null,vn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&c_(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ce(e,n);let l,a;n.isEmpty()?(l=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?Es:this.priorityNode_;return new ee(l,c,a)}}updateChild(e,n){const s=ue(e);if(s===null)return n;{U(ue(e)!==".priority"||rr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(xe(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,a=!0;if(this.forEachChild(Be,(c,f)=>{n[c]=f.val(e),s++,a&&ee.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):a=!1}),!e&&a&&l<2*s){const c=[];for(const f in n)c[f]=n[f];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+u_(this.getPriority().val())+":"),this.forEachChild(Be,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Uv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const a=l.getPredecessorKey(new ce(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ce.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)<0;)l.getNext(),a=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ce.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)>0;)l.getNext(),a=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Js?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ee(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Be),l=n.getIterator(Be);let a=s.getNext(),c=l.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=l.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ik extends ee{constructor(){super(new It(Dd),ee.EMPTY_NODE,vn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ee.EMPTY_NODE}isEmpty(){return!1}}const Js=new ik;Object.defineProperties(ce,{MIN:{value:new ce(_i,ee.EMPTY_NODE)},MAX:{value:new ce(Pr,Js)}});a_.__EMPTY_NODE=ee.EMPTY_NODE;et.__childrenNodeConstructor=ee;X1(Js);ek(Js);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=!0;function Ke(r,e=null){if(r===null)return ee.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new et(n,Ke(e))}if(!(r instanceof Array)&&sk){const n=[];let s=!1;if(lt(r,(c,f)=>{if(c.substring(0,1)!=="."){const p=Ke(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new ce(c,p)))}}),n.length===0)return ee.EMPTY_NODE;const a=Fl(n,J1,c=>c.name,Dd);if(s){const c=Fl(n,Be.getCompare());return new ee(a,Ke(e),new vn({".priority":c},{".priority":Be}))}else return new ee(a,Ke(e),vn.Default)}else{let n=ee.EMPTY_NODE;return lt(r,(s,l)=>{if(sn(r,s)&&s.substring(0,1)!=="."){const a=Ke(l);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(s,a))}}),n.updatePriority(Ke(e))}}Z1(Ke);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok extends ra{constructor(e){super(),this.indexPath_=e,U(!he(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),a=s.compareTo(l);return a===0?Dr(e.name,n.name):a}makePost(e,n){const s=Ke(e),l=ee.EMPTY_NODE.updateChild(this.indexPath_,s);return new ce(n,l)}maxPost(){const e=ee.EMPTY_NODE.updateChild(this.indexPath_,Js);return new ce(Pr,e)}toString(){return Ms(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk extends ra{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Dr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ce.MIN}maxPost(){return ce.MAX}makePost(e,n){const s=Ke(e);return new ce(n,s)}toString(){return".value"}}const ak=new lk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(r){return{type:"value",snapshotNode:r}}function yi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Fs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function js(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function uk(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.index_=e}updateChild(e,n,s,l,a,c){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(Fs(n,f)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(yi(n,s)):c.trackChildChange(js(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Be,(l,a)=>{n.hasChild(l)||s.trackChildChange(Fs(l,a))}),n.isLeafNode()||n.forEachChild(Be,(l,a)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(a)||s.trackChildChange(js(l,a,c))}else s.trackChildChange(yi(l,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ee.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.indexedFilter_=new Ld(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Us.getStartPost_(e),this.endPost_=Us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,a,c){return this.matches(new ce(n,s))||(s=ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,a,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ee.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(ee.EMPTY_NODE);const a=this;return n.forEachChild(Be,(c,f)=>{a.matches(new ce(c,f))||(l=l.updateImmediateChild(c,ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,a,c){return this.rangedFilter_.matches(new ce(n,s))||(s=ee.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,a,c):this.fullLimitUpdateChild_(e,n,s,a,c)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=ee.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const f=a.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(ee.EMPTY_NODE);let a;this.reverse_?a=l.getReverseIterator(this.index_):a=l.getIterator(this.index_);let c=0;for(;a.hasNext();){const f=a.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:l=l.updateImmediateChild(f.name,ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,a){let c;if(this.reverse_){const v=this.index_.getCompare();c=(E,P)=>v(P,E)}else c=this.index_.getCompare();const f=e;U(f.numChildren()===this.limit_,"");const p=new ce(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let E=l.getChildAfterChild(this.index_,g,this.reverse_);for(;E!=null&&(E.name===n||f.hasChild(E.name));)E=l.getChildAfterChild(this.index_,E,this.reverse_);const P=E==null?1:c(E,p);if(y&&!s.isEmpty()&&P>=0)return a!=null&&a.trackChildChange(js(n,s,v)),f.updateImmediateChild(n,s);{a!=null&&a.trackChildChange(Fs(n,v));const x=f.updateImmediateChild(n,ee.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(a!=null&&a.trackChildChange(yi(E.name,E.node)),x.updateImmediateChild(E.name,E.node)):x}}else return s.isEmpty()?e:y&&c(g,p)>=0?(a!=null&&(a.trackChildChange(Fs(g.name,g.node)),a.trackChildChange(yi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dk(r){return r.loadsAllData()?new Ld(r.getIndex()):r.hasLimit()?new ck(r):new Us(r)}function cg(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Be?n="$priority":r.index_===ak?n="$value":r.index_===fi?n="$key":(U(r.index_ instanceof ok,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Qe(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Qe(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Qe(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Qe(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Qe(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function dg(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Be&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends i_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Ys("p:rest:"),this.listens_={}}listen(e,n,s,l){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=jl.getListenId_(e,s),f={};this.listens_[c]=f;const p=cg(e._queryParams);this.restRequest_(a+".json",p,(g,y)=>{let v=y;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(a,v,!1,s),mi(this.listens_,c)===f){let E;g?g===401?E="permission_denied":E="rest_error:"+g:E="ok",l(E,null)}})}unlisten(e,n){const s=jl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=cg(e._queryParams),s=e._path.toString(),l=new Hs;return this.restRequest_(s+".json",n,(a,c)=>{let f=c;a===404&&(f=null,a=null),a===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,a])=>{l&&l.accessToken&&(n.auth=l.accessToken),a&&a.token&&(n.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(n);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Os(f.responseText)}catch{mt("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&mt("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(){this.rootNode_=ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return{value:null,children:new Map}}function p_(r,e,n){if(he(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ue(e);r.children.has(s)||r.children.set(s,Ul());const l=r.children.get(s);e=xe(e),p_(l,e,n)}}function qc(r,e,n){r.value!==null?n(e,r.value):fk(r,(s,l)=>{const a=new Se(e.toString()+"/"+s);qc(l,a,n)})}function fk(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&lt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=10*1e3,mk=30*1e3,gk=300*1e3;class vk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pk(e);const s=hg+(mk-hg)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;lt(e,(l,a)=>{a>0&&sn(this.statsToReport_,l)&&(n[l]=a,s=!0)}),s&&this.server_.reportStats(n),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*gk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function Md(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Kt.ACK_USER_WRITE,this.source=Md()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new zl(_e(),n,this.revert)}}else return U(ue(this.path)===e,"operationForChild called for unrelated child."),new zl(xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return he(this.path)?new zs(this.source,_e()):new zs(this.source,xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Kt.OVERWRITE}operationForChild(e){return he(this.path)?new Rr(this.source,_e(),this.snap.getImmediateChild(e)):new Rr(this.source,xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Kt.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Rr(this.source,_e(),n.value):new wi(this.source,_e(),n)}else return U(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wi(this.source,xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yk(r,e,n,s){const l=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(uk(c.childName,c.snapshotNode))}),Ss(r,l,"child_removed",e,s,n),Ss(r,l,"child_added",e,s,n),Ss(r,l,"child_moved",a,s,n),Ss(r,l,"child_changed",e,s,n),Ss(r,l,"value",e,s,n),l}function Ss(r,e,n,s,l,a){const c=s.filter(f=>f.type===n);c.sort((f,p)=>Ek(r,f,p)),c.forEach(f=>{const p=wk(r,f,a);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function wk(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function Ek(r,e,n){if(e.childName==null||n.childName==null)throw ki("Should only compare child_ events.");const s=new ce(e.childName,e.snapshotNode),l=new ce(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(r,e){return{eventCache:r,serverCache:e}}function Ns(r,e,n,s){return ia(new ir(e,n,s),r.serverCache)}function m_(r,e,n,s){return ia(r.eventCache,new ir(e,n,s))}function Bl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Ar(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc;const Sk=()=>(kc||(kc=new It(o1)),kc);class Ne{static fromObject(e){let n=new Ne(null);return lt(e,(s,l)=>{n=n.set(new Se(s),l)}),n}constructor(e,n=Sk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(he(e))return null;{const s=ue(e),l=this.children.get(s);if(l!==null){const a=l.findRootMostMatchingPathAndValue(xe(e),n);return a!=null?{path:ze(new Se(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=ue(e),s=this.children.get(n);return s!==null?s.subtree(xe(e)):new Ne(null)}}set(e,n){if(he(e))return new Ne(n,this.children);{const s=ue(e),a=(this.children.get(s)||new Ne(null)).set(xe(e),n),c=this.children.insert(s,a);return new Ne(this.value,c)}}remove(e){if(he(e))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const n=ue(e),s=this.children.get(n);if(s){const l=s.remove(xe(e));let a;return l.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,l),this.value===null&&a.isEmpty()?new Ne(null):new Ne(this.value,a)}else return this}}get(e){if(he(e))return this.value;{const n=ue(e),s=this.children.get(n);return s?s.get(xe(e)):null}}setTree(e,n){if(he(e))return n;{const s=ue(e),a=(this.children.get(s)||new Ne(null)).setTree(xe(e),n);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new Ne(this.value,c)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,a)=>{s[l]=a.fold_(ze(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(he(e))return null;{const a=ue(e),c=this.children.get(a);return c?c.findOnPath_(xe(e),ze(n,a),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(he(e))return this;{this.value&&s(n,this.value);const l=ue(e),a=this.children.get(l);return a?a.foreachOnPath_(xe(e),ze(n,l),s):new Ne(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(ze(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new Ne(null))}}function xs(r,e,n){if(he(e))return new Yt(new Ne(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let a=s.value;const c=pt(l,e);return a=a.updateChild(c,n),new Yt(r.writeTree_.set(l,a))}else{const l=new Ne(n),a=r.writeTree_.setTree(e,l);return new Yt(a)}}}function Kc(r,e,n){let s=r;return lt(n,(l,a)=>{s=xs(s,ze(e,l),a)}),s}function fg(r,e){if(he(e))return Yt.empty();{const n=r.writeTree_.setTree(e,new Ne(null));return new Yt(n)}}function Qc(r,e){return Lr(r,e)!=null}function Lr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(pt(n.path,e)):null}function pg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(s,l)=>{e.push(new ce(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ce(s,l.value))}),e}function er(r,e){if(he(e))return r;{const n=Lr(r,e);return n!=null?new Yt(new Ne(n)):new Yt(r.writeTree_.subtree(e))}}function Yc(r){return r.writeTree_.isEmpty()}function Ei(r,e){return g_(_e(),r.writeTree_,e)}function g_(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,a)=>{l===".priority"?(U(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):n=g_(ze(r,l),a,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(ze(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(r,e){return w_(e,r)}function Ck(r,e,n,s,l){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=xs(r.visibleWrites,e,n)),r.lastWriteId=s}function Ik(r,e,n,s){U(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Kc(r.visibleWrites,e,n),r.lastWriteId=s}function kk(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function Tk(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,a=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=n&&Nk(f,s.path)?l=!1:Mt(s.path,f.path)&&(a=!0)),c--}if(l){if(a)return xk(r),!0;if(s.snap)r.visibleWrites=fg(r.visibleWrites,s.path);else{const f=s.children;lt(f,p=>{r.visibleWrites=fg(r.visibleWrites,ze(s.path,p))})}return!0}else return!1}function Nk(r,e){if(r.snap)return Mt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Mt(ze(r.path,n),e))return!0;return!1}function xk(r){r.visibleWrites=v_(r.allWrites,Pk,_e()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function Pk(r){return r.visible}function v_(r,e,n){let s=Yt.empty();for(let l=0;l<r.length;++l){const a=r[l];if(e(a)){const c=a.path;let f;if(a.snap)Mt(n,c)?(f=pt(n,c),s=xs(s,f,a.snap)):Mt(c,n)&&(f=pt(c,n),s=xs(s,_e(),a.snap.getChild(f)));else if(a.children){if(Mt(n,c))f=pt(n,c),s=Kc(s,f,a.children);else if(Mt(c,n))if(f=pt(c,n),he(f))s=Kc(s,_e(),a.children);else{const p=mi(a.children,ue(f));if(p){const g=p.getChild(xe(f));s=xs(s,_e(),g)}}}else throw ki("WriteRecord should have .snap or .children")}}return s}function __(r,e,n,s,l){if(!s&&!l){const a=Lr(r.visibleWrites,e);if(a!=null)return a;{const c=er(r.visibleWrites,e);if(Yc(c))return n;if(n==null&&!Qc(c,_e()))return null;{const f=n||ee.EMPTY_NODE;return Ei(c,f)}}}else{const a=er(r.visibleWrites,e);if(!l&&Yc(a))return n;if(!l&&n==null&&!Qc(a,_e()))return null;{const c=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Mt(g.path,e)||Mt(e,g.path))},f=v_(r.allWrites,c,e),p=n||ee.EMPTY_NODE;return Ei(f,p)}}}function Rk(r,e,n){let s=ee.EMPTY_NODE;const l=Lr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Be,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(n){const a=er(r.visibleWrites,e);return n.forEachChild(Be,(c,f)=>{const p=Ei(er(a,new Se(c)),f);s=s.updateImmediateChild(c,p)}),pg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=er(r.visibleWrites,e);return pg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function Ak(r,e,n,s,l){U(s||l,"Either existingEventSnap or existingServerSnap must exist");const a=ze(e,n);if(Qc(r.visibleWrites,a))return null;{const c=er(r.visibleWrites,a);return Yc(c)?l.getChild(n):Ei(c,l.getChild(n))}}function Ok(r,e,n,s){const l=ze(e,n),a=Lr(r.visibleWrites,l);if(a!=null)return a;if(s.isCompleteForChild(n)){const c=er(r.visibleWrites,l);return Ei(c,s.getNode().getImmediateChild(n))}else return null}function Dk(r,e){return Lr(r.visibleWrites,e)}function Lk(r,e,n,s,l,a,c){let f;const p=er(r.visibleWrites,e),g=Lr(p,_e());if(g!=null)f=g;else if(n!=null)f=Ei(p,n);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const y=[],v=c.getCompare(),E=a?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let P=E.getNext();for(;P&&y.length<l;)v(P,s)!==0&&y.push(P),P=E.getNext();return y}else return[]}function bk(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function Wl(r,e,n,s){return __(r.writeTree,r.treePath,e,n,s)}function Ud(r,e){return Rk(r.writeTree,r.treePath,e)}function mg(r,e,n,s){return Ak(r.writeTree,r.treePath,e,n,s)}function Vl(r,e){return Dk(r.writeTree,ze(r.treePath,e))}function Mk(r,e,n,s,l,a){return Lk(r.writeTree,r.treePath,e,n,s,l,a)}function zd(r,e,n){return Ok(r.writeTree,r.treePath,e,n)}function y_(r,e){return w_(ze(r.treePath,e),r.writeTree)}function w_(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const a=l.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(s,js(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(s,Fs(s,l.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(s,yi(s,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(s,js(s,e.snapshotNode,l.oldSnap));else throw ki("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const E_=new jk;class Bd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ir(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ar(this.viewCache_),a=Mk(this.writes_,l,n,1,s,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(r){return{filter:r}}function zk(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function Bk(r,e,n,s,l){const a=new Fk;let c,f;if(n.type===Kt.OVERWRITE){const g=n;g.source.fromUser?c=Jc(r,e,g.path,g.snap,s,l,a):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!he(g.path),c=Hl(r,e,g.path,g.snap,s,l,f,a))}else if(n.type===Kt.MERGE){const g=n;g.source.fromUser?c=Vk(r,e,g.path,g.children,s,l,a):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=Xc(r,e,g.path,g.children,s,l,f,a))}else if(n.type===Kt.ACK_USER_WRITE){const g=n;g.revert?c=Gk(r,e,g.path,s,l,a):c=Hk(r,e,g.path,g.affectedTree,s,l,a)}else if(n.type===Kt.LISTEN_COMPLETE)c=$k(r,e,n.path,s,a);else throw ki("Unknown operation type: "+n.type);const p=a.getChanges();return Wk(e,c,p),{viewCache:c,changes:p}}function Wk(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=Bl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&n.push(f_(Bl(e)))}}function S_(r,e,n,s,l,a){const c=e.eventCache;if(Vl(s,n)!=null)return e;{let f,p;if(he(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Ar(e),y=g instanceof ee?g:ee.EMPTY_NODE,v=Ud(s,y);f=r.filter.updateFullNode(e.eventCache.getNode(),v,a)}else{const g=Wl(s,Ar(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,a)}else{const g=ue(n);if(g===".priority"){U(rr(n)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const v=mg(s,n,y,p);v!=null?f=r.filter.updatePriority(y,v):f=c.getNode()}else{const y=xe(n);let v;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const E=mg(s,n,c.getNode(),p);E!=null?v=c.getNode().getImmediateChild(g).updateChild(y,E):v=c.getNode().getImmediateChild(g)}else v=zd(s,g,e.serverCache);v!=null?f=r.filter.updateChild(c.getNode(),g,v,y,l,a):f=c.getNode()}}return Ns(e,f,c.isFullyInitialized()||he(n),r.filter.filtersNodes())}}function Hl(r,e,n,s,l,a,c,f){const p=e.serverCache;let g;const y=c?r.filter:r.filter.getIndexedFilter();if(he(n))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const P=p.getNode().updateChild(n,s);g=y.updateFullNode(p.getNode(),P,null)}else{const P=ue(n);if(!p.isCompleteForPath(n)&&rr(n)>1)return e;const R=xe(n),O=p.getNode().getImmediateChild(P).updateChild(R,s);P===".priority"?g=y.updatePriority(p.getNode(),O):g=y.updateChild(p.getNode(),P,O,R,E_,null)}const v=m_(e,g,p.isFullyInitialized()||he(n),y.filtersNodes()),E=new Bd(l,v,a);return S_(r,v,n,l,E,f)}function Jc(r,e,n,s,l,a,c){const f=e.eventCache;let p,g;const y=new Bd(l,e,a);if(he(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Ns(e,g,!0,r.filter.filtersNodes());else{const v=ue(n);if(v===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Ns(e,g,f.isFullyInitialized(),f.isFiltered());else{const E=xe(n),P=f.getNode().getImmediateChild(v);let R;if(he(E))R=s;else{const x=y.getCompleteChild(v);x!=null?Rd(E)===".priority"&&x.getChild(o_(E)).isEmpty()?R=x:R=x.updateChild(E,s):R=ee.EMPTY_NODE}if(P.equals(R))p=e;else{const x=r.filter.updateChild(f.getNode(),v,R,E,y,c);p=Ns(e,x,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function gg(r,e){return r.eventCache.isCompleteForChild(e)}function Vk(r,e,n,s,l,a,c){let f=e;return s.foreach((p,g)=>{const y=ze(n,p);gg(e,ue(y))&&(f=Jc(r,f,y,g,l,a,c))}),s.foreach((p,g)=>{const y=ze(n,p);gg(e,ue(y))||(f=Jc(r,f,y,g,l,a,c))}),f}function vg(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Xc(r,e,n,s,l,a,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;he(n)?g=s:g=new Ne(null).setTree(n,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((v,E)=>{if(y.hasChild(v)){const P=e.serverCache.getNode().getImmediateChild(v),R=vg(r,P,E);p=Hl(r,p,new Se(v),R,l,a,c,f)}}),g.children.inorderTraversal((v,E)=>{const P=!e.serverCache.isCompleteForChild(v)&&E.value===null;if(!y.hasChild(v)&&!P){const R=e.serverCache.getNode().getImmediateChild(v),x=vg(r,R,E);p=Hl(r,p,new Se(v),x,l,a,c,f)}}),p}function Hk(r,e,n,s,l,a,c){if(Vl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(he(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Hl(r,e,n,p.getNode().getChild(n),l,a,f,c);if(he(n)){let g=new Ne(null);return p.getNode().forEachChild(fi,(y,v)=>{g=g.set(new Se(y),v)}),Xc(r,e,n,g,l,a,f,c)}else return e}else{let g=new Ne(null);return s.foreach((y,v)=>{const E=ze(n,y);p.isCompleteForPath(E)&&(g=g.set(y,p.getNode().getChild(E)))}),Xc(r,e,n,g,l,a,f,c)}}function $k(r,e,n,s,l){const a=e.serverCache,c=m_(e,a.getNode(),a.isFullyInitialized()||he(n),a.isFiltered());return S_(r,c,n,s,E_,l)}function Gk(r,e,n,s,l,a){let c;if(Vl(s,n)!=null)return e;{const f=new Bd(s,e,l),p=e.eventCache.getNode();let g;if(he(n)||ue(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Wl(s,Ar(e));else{const v=e.serverCache.getNode();U(v instanceof ee,"serverChildren would be complete if leaf node"),y=Ud(s,v)}y=y,g=r.filter.updateFullNode(p,y,a)}else{const y=ue(n);let v=zd(s,y,e.serverCache);v==null&&e.serverCache.isCompleteForChild(y)&&(v=p.getImmediateChild(y)),v!=null?g=r.filter.updateChild(p,y,v,xe(n),f,a):e.eventCache.getNode().hasChild(y)?g=r.filter.updateChild(p,y,ee.EMPTY_NODE,xe(n),f,a):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Wl(s,Ar(e)),c.isLeafNode()&&(g=r.filter.updateFullNode(g,c,a)))}return c=e.serverCache.isFullyInitialized()||Vl(s,_e())!=null,Ns(e,g,c,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Ld(s.getIndex()),a=dk(s);this.processor_=Uk(a);const c=n.serverCache,f=n.eventCache,p=l.updateFullNode(ee.EMPTY_NODE,c.getNode(),null),g=a.updateFullNode(ee.EMPTY_NODE,f.getNode(),null),y=new ir(p,c.isFullyInitialized(),l.filtersNodes()),v=new ir(g,f.isFullyInitialized(),a.filtersNodes());this.viewCache_=ia(v,y),this.eventGenerator_=new _k(this.query_)}get query(){return this.query_}}function Kk(r){return r.viewCache_.serverCache.getNode()}function Qk(r){return Bl(r.viewCache_)}function Yk(r,e){const n=Ar(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function _g(r){return r.eventRegistrations_.length===0}function Jk(r,e){r.eventRegistrations_.push(e)}function yg(r,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(n,l);c&&s.push(c)})}if(e){let l=[];for(let a=0;a<r.eventRegistrations_.length;++a){const c=r.eventRegistrations_[a];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function wg(r,e,n,s){e.type===Kt.MERGE&&e.source.queryId!==null&&(U(Ar(r.viewCache_),"We should always have a full cache before handling merges"),U(Bl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,a=Bk(r.processor_,l,e,n,s);return zk(r.processor_,a.viewCache),U(a.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,C_(r,a.changes,a.viewCache.eventCache.getNode(),null)}function Xk(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(a,c)=>{s.push(yi(a,c))}),n.isFullyInitialized()&&s.push(f_(n.getNode())),C_(r,s,n.getNode(),e)}function C_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return yk(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;class I_{constructor(){this.views=new Map}}function Zk(r){U(!$l,"__referenceConstructor has already been defined"),$l=r}function eT(){return U($l,"Reference.ts has not been loaded"),$l}function tT(r){return r.views.size===0}function Wd(r,e,n,s){const l=e.source.queryId;if(l!==null){const a=r.views.get(l);return U(a!=null,"SyncTree gave us an op for an invalid query."),wg(a,e,n,s)}else{let a=[];for(const c of r.views.values())a=a.concat(wg(c,e,n,s));return a}}function k_(r,e,n,s,l){const a=e._queryIdentifier,c=r.views.get(a);if(!c){let f=Wl(n,l?s:null),p=!1;f?p=!0:s instanceof ee?(f=Ud(n,s),p=!1):(f=ee.EMPTY_NODE,p=!1);const g=ia(new ir(f,p,!1),new ir(s,l,!1));return new qk(e,g)}return c}function nT(r,e,n,s,l,a){const c=k_(r,e,s,l,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),Jk(c,n),Xk(c,n)}function rT(r,e,n,s){const l=e._queryIdentifier,a=[];let c=[];const f=sr(r);if(l==="default")for(const[p,g]of r.views.entries())c=c.concat(yg(g,n,s)),_g(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||a.push(g.query));else{const p=r.views.get(l);p&&(c=c.concat(yg(p,n,s)),_g(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||a.push(p.query)))}return f&&!sr(r)&&a.push(new(eT())(e._repo,e._path)),{removed:a,events:c}}function T_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function tr(r,e){let n=null;for(const s of r.views.values())n=n||Yk(s,e);return n}function N_(r,e){if(e._queryParams.loadsAllData())return oa(r);{const s=e._queryIdentifier;return r.views.get(s)}}function x_(r,e){return N_(r,e)!=null}function sr(r){return oa(r)!=null}function oa(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl;function iT(r){U(!Gl,"__referenceConstructor has already been defined"),Gl=r}function sT(){return U(Gl,"Reference.ts has not been loaded"),Gl}let oT=1;class Eg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=bk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function P_(r,e,n,s,l){return Ck(r.pendingWriteTree_,e,n,s,l),l?Ai(r,new Rr(Md(),e,n)):[]}function lT(r,e,n,s){Ik(r.pendingWriteTree_,e,n,s);const l=Ne.fromObject(n);return Ai(r,new wi(Md(),e,l))}function Qn(r,e,n=!1){const s=kk(r.pendingWriteTree_,e);if(Tk(r.pendingWriteTree_,e)){let a=new Ne(null);return s.snap!=null?a=a.set(_e(),!0):lt(s.children,c=>{a=a.set(new Se(c),!0)}),Ai(r,new zl(s.path,a,n))}else return[]}function Xs(r,e,n){return Ai(r,new Rr(Fd(),e,n))}function aT(r,e,n){const s=Ne.fromObject(n);return Ai(r,new wi(Fd(),e,s))}function uT(r,e){return Ai(r,new zs(Fd(),e))}function cT(r,e,n){const s=Hd(r,n);if(s){const l=$d(s),a=l.path,c=l.queryId,f=pt(a,e),p=new zs(jd(c),f);return Gd(r,a,p)}else return[]}function ql(r,e,n,s,l=!1){const a=e._path,c=r.syncPointTree_.get(a);let f=[];if(c&&(e._queryIdentifier==="default"||x_(c,e))){const p=rT(c,e,n,s);tT(c)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const g=p.removed;if(f=p.events,!l){const y=g.findIndex(E=>E._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(a,(E,P)=>sr(P));if(y&&!v){const E=r.syncPointTree_.subtree(a);if(!E.isEmpty()){const P=fT(E);for(let R=0;R<P.length;++R){const x=P[R],O=x.query,Q=D_(r,x);r.listenProvider_.startListening(Ps(O),Bs(r,O),Q.hashFn,Q.onComplete)}}}!v&&g.length>0&&!s&&(y?r.listenProvider_.stopListening(Ps(e),null):g.forEach(E=>{const P=r.queryToTagMap.get(la(E));r.listenProvider_.stopListening(Ps(E),P)}))}pT(r,g)}return f}function R_(r,e,n,s){const l=Hd(r,s);if(l!=null){const a=$d(l),c=a.path,f=a.queryId,p=pt(c,e),g=new Rr(jd(f),p,n);return Gd(r,c,g)}else return[]}function dT(r,e,n,s){const l=Hd(r,s);if(l){const a=$d(l),c=a.path,f=a.queryId,p=pt(c,e),g=Ne.fromObject(n),y=new wi(jd(f),p,g);return Gd(r,c,y)}else return[]}function Zc(r,e,n,s=!1){const l=e._path;let a=null,c=!1;r.syncPointTree_.foreachOnPath(l,(E,P)=>{const R=pt(E,l);a=a||tr(P,R),c=c||sr(P)});let f=r.syncPointTree_.get(l);f?(c=c||sr(f),a=a||tr(f,_e())):(f=new I_,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;a!=null?p=!0:(p=!1,a=ee.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((P,R)=>{const x=tr(R,_e());x&&(a=a.updateImmediateChild(P,x))}));const g=x_(f,e);if(!g&&!e._queryParams.loadsAllData()){const E=la(e);U(!r.queryToTagMap.has(E),"View does not exist, but we have a tag");const P=mT();r.queryToTagMap.set(E,P),r.tagToQueryMap.set(P,E)}const y=sa(r.pendingWriteTree_,l);let v=nT(f,e,n,y,a,p);if(!g&&!c&&!s){const E=N_(f,e);v=v.concat(gT(r,e,E))}return v}function Vd(r,e,n){const l=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(c,f)=>{const p=pt(c,e),g=tr(f,p);if(g)return g});return __(l,e,a,n,!0)}function hT(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,y)=>{const v=pt(g,n);s=s||tr(y,v)});let l=r.syncPointTree_.get(n);l?s=s||tr(l,_e()):(l=new I_,r.syncPointTree_=r.syncPointTree_.set(n,l));const a=s!=null,c=a?new ir(s,!0,!1):null,f=sa(r.pendingWriteTree_,e._path),p=k_(l,e,f,a?c.getNode():ee.EMPTY_NODE,a);return Qk(p)}function Ai(r,e){return A_(e,r.syncPointTree_,null,sa(r.pendingWriteTree_,_e()))}function A_(r,e,n,s){if(he(r.path))return O_(r,e,n,s);{const l=e.get(_e());n==null&&l!=null&&(n=tr(l,_e()));let a=[];const c=ue(r.path),f=r.operationForChild(c),p=e.children.get(c);if(p&&f){const g=n?n.getImmediateChild(c):null,y=y_(s,c);a=a.concat(A_(f,p,g,y))}return l&&(a=a.concat(Wd(l,r,s,n))),a}}function O_(r,e,n,s){const l=e.get(_e());n==null&&l!=null&&(n=tr(l,_e()));let a=[];return e.children.inorderTraversal((c,f)=>{const p=n?n.getImmediateChild(c):null,g=y_(s,c),y=r.operationForChild(c);y&&(a=a.concat(O_(y,f,p,g)))}),l&&(a=a.concat(Wd(l,r,s,n))),a}function D_(r,e){const n=e.query,s=Bs(r,n);return{hashFn:()=>(Kk(e)||ee.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?cT(r,n._path,s):uT(r,n._path);{const a=u1(l,n);return ql(r,n,null,a)}}}}function Bs(r,e){const n=la(e);return r.queryToTagMap.get(n)}function la(r){return r._path.toString()+"$"+r._queryIdentifier}function Hd(r,e){return r.tagToQueryMap.get(e)}function $d(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Se(r.substr(0,e))}}function Gd(r,e,n){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const l=sa(r.pendingWriteTree_,e);return Wd(s,n,l,null)}function fT(r){return r.fold((e,n,s)=>{if(n&&sr(n))return[oa(n)];{let l=[];return n&&(l=T_(n)),lt(s,(a,c)=>{l=l.concat(c)}),l}})}function Ps(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(sT())(r._repo,r._path):r}function pT(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=la(s),a=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(a)}}}function mT(){return oT++}function gT(r,e,n){const s=e._path,l=Bs(r,e),a=D_(r,n),c=r.listenProvider_.startListening(Ps(e),l,a.hashFn,a.onComplete),f=r.syncPointTree_.subtree(s);if(l)U(!sr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,y,v)=>{if(!he(g)&&y&&sr(y))return[oa(y).query];{let E=[];return y&&(E=E.concat(T_(y).map(P=>P.query))),lt(v,(P,R)=>{E=E.concat(R)}),E}});for(let g=0;g<p.length;++g){const y=p[g];r.listenProvider_.stopListening(Ps(y),Bs(r,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qd(n)}node(){return this.node_}}class Kd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new Kd(this.syncTree_,n)}node(){return Vd(this.syncTree_,this.path_)}}const vT=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Sg=function(r,e,n){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return _T(r[".sv"],e,n);if(typeof r[".sv"]=="object")return yT(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},_T=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+r)}},yT=function(r,e,n){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const l=e.node();if(U(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},L_=function(r,e,n,s){return Qd(e,new Kd(n,r),s)},b_=function(r,e,n){return Qd(r,new qd(e),n)};function Qd(r,e,n){const s=r.getPriority().val(),l=Sg(s,e.getImmediateChild(".priority"),n);let a;if(r.isLeafNode()){const c=r,f=Sg(c.getValue(),e,n);return f!==c.getValue()||l!==c.getPriority().val()?new et(f,Ke(l)):r}else{const c=r;return a=c,l!==c.getPriority().val()&&(a=a.updatePriority(new et(l))),c.forEachChild(Be,(f,p)=>{const g=Qd(p,e.getImmediateChild(f),n);g!==p&&(a=a.updateImmediateChild(f,g))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Jd(r,e){let n=e instanceof Se?e:new Se(e),s=r,l=ue(n);for(;l!==null;){const a=mi(s.node.children,l)||{children:{},childCount:0};s=new Yd(l,s,a),n=xe(n),l=ue(n)}return s}function Oi(r){return r.node.value}function M_(r,e){r.node.value=e,ed(r)}function F_(r){return r.node.childCount>0}function wT(r){return Oi(r)===void 0&&!F_(r)}function aa(r,e){lt(r.node.children,(n,s)=>{e(new Yd(n,r,s))})}function j_(r,e,n,s){n&&e(r),aa(r,l=>{j_(l,e,!0)})}function ET(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Zs(r){return new Se(r.parent===null?r.name:Zs(r.parent)+"/"+r.name)}function ed(r){r.parent!==null&&ST(r.parent,r.name,r)}function ST(r,e,n){const s=wT(n),l=sn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,ed(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,ed(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=/[\[\].#$\/\u0000-\u001F\u007F]/,IT=/[\[\].#$\u0000-\u001F\u007F]/,Tc=10*1024*1024,Xd=function(r){return typeof r=="string"&&r.length!==0&&!CT.test(r)},U_=function(r){return typeof r=="string"&&r.length!==0&&!IT.test(r)},kT=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),U_(r)},TT=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!kd(r)||r&&typeof r=="object"&&sn(r,".sv")},z_=function(r,e,n,s){s&&e===void 0||ua(Xl(r,"value"),e,n)},ua=function(r,e,n){const s=n instanceof Se?new V1(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Sr(s));if(typeof e=="function")throw new Error(r+"contains a function "+Sr(s)+" with contents = "+e.toString());if(kd(e))throw new Error(r+"contains "+e.toString()+" "+Sr(s));if(typeof e=="string"&&e.length>Tc/3&&Zl(e)>Tc)throw new Error(r+"contains a string greater than "+Tc+" utf8 bytes "+Sr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,a=!1;if(lt(e,(c,f)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!Xd(c)))throw new Error(r+" contains an invalid key ("+c+") "+Sr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);H1(s,c),ua(r,f,s),$1(s)}),l&&a)throw new Error(r+' contains ".value" child '+Sr(s)+" in addition to actual children.")}},NT=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const a=Ms(s);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!Xd(a[c]))throw new Error(r+"contains an invalid key ("+a[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(W1);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Mt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},xT=function(r,e,n,s){const l=Xl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const a=[];lt(e,(c,f)=>{const p=new Se(c);if(ua(l,f,ze(n,p)),Rd(p)===".priority"&&!TT(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(p)}),NT(l,a)},B_=function(r,e,n,s){if(!U_(n))throw new Error(Xl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},PT=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),B_(r,e,n)},Zd=function(r,e){if(ue(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},RT=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kT(n))throw new Error(Xl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ca(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],a=l.getPath();n!==null&&!Ad(a,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(l)}n&&r.eventLists_.push(n)}function W_(r,e,n){ca(r,n),V_(r,s=>Ad(s,e))}function Ft(r,e,n){ca(r,n),V_(r,s=>Mt(s,e)||Mt(e,s))}function V_(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const a=l.path;e(a)?(OT(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function OT(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();ks&&it("event: "+n.toString()),Ri(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="repo_interrupt",LT=25;class bT{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ul(),this.transactionQueueTree_=new Yd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MT(r,e,n){if(r.stats_=xd(r.repoInfo_),r.forceRestClient_||f1())r.server_=new jl(r.repoInfo_,(s,l,a,c)=>{Cg(r,s,l,a,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Ig(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new _n(r.repoInfo_,e,(s,l,a,c)=>{Cg(r,s,l,a,c)},s=>{Ig(r,s)},s=>{FT(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=_1(r.repoInfo_,()=>new vk(r.stats_,r.server_)),r.infoData_=new hk,r.infoSyncTree_=new Eg({startListening:(s,l,a,c)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Xs(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),eh(r,"connected",!1),r.serverSyncTree_=new Eg({startListening:(s,l,a,c)=>(r.server_.listen(s,a,l,(f,p)=>{const g=c(f,p);Ft(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function H_(r){const n=r.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function da(r){return vT({timestamp:H_(r)})}function Cg(r,e,n,s,l){r.dataUpdateCount++;const a=new Se(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(l)if(s){const p=Nl(n,g=>Ke(g));c=dT(r.serverSyncTree_,a,p,l)}else{const p=Ke(n);c=R_(r.serverSyncTree_,a,p,l)}else if(s){const p=Nl(n,g=>Ke(g));c=aT(r.serverSyncTree_,a,p)}else{const p=Ke(n);c=Xs(r.serverSyncTree_,a,p)}let f=a;c.length>0&&(f=Si(r,a)),Ft(r.eventQueue_,f,c)}function Ig(r,e){eh(r,"connected",e),e===!1&&BT(r)}function FT(r,e){lt(e,(n,s)=>{eh(r,n,s)})}function eh(r,e,n){const s=new Se("/.info/"+e),l=Ke(n);r.infoData_.updateSnapshot(s,l);const a=Xs(r.infoSyncTree_,s,l);Ft(r.eventQueue_,s,a)}function th(r){return r.nextWriteId_++}function jT(r,e,n){const s=hT(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const a=Ke(l).withIndex(e._queryParams.getIndex());Zc(r.serverSyncTree_,e,n,!0);let c;if(e._queryParams.loadsAllData())c=Xs(r.serverSyncTree_,e._path,a);else{const f=Bs(r.serverSyncTree_,e);c=R_(r.serverSyncTree_,e._path,a,f)}return Ft(r.eventQueue_,e._path,c),ql(r.serverSyncTree_,e,n,null,!0),a},l=>(eo(r,"get for query "+Qe(e)+" failed: "+l),Promise.reject(new Error(l))))}function UT(r,e,n,s,l){eo(r,"set",{path:e.toString(),value:n,priority:s});const a=da(r),c=Ke(n,s),f=Vd(r.serverSyncTree_,e),p=b_(c,f,a),g=th(r),y=P_(r.serverSyncTree_,e,p,g,!0);ca(r.eventQueue_,y),r.server_.put(e.toString(),c.val(!0),(E,P)=>{const R=E==="ok";R||mt("set at "+e+" failed: "+E);const x=Qn(r.serverSyncTree_,g,!R);Ft(r.eventQueue_,e,x),td(r,l,E,P)});const v=rh(r,e);Si(r,v),Ft(r.eventQueue_,v,[])}function zT(r,e,n,s){eo(r,"update",{path:e.toString(),value:n});let l=!0;const a=da(r),c={};if(lt(n,(f,p)=>{l=!1,c[f]=L_(ze(e,f),Ke(p),r.serverSyncTree_,a)}),l)it("update() called with empty data.  Don't do anything."),td(r,s,"ok",void 0);else{const f=th(r),p=lT(r.serverSyncTree_,e,c,f);ca(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,y)=>{const v=g==="ok";v||mt("update at "+e+" failed: "+g);const E=Qn(r.serverSyncTree_,f,!v),P=E.length>0?Si(r,e):e;Ft(r.eventQueue_,P,E),td(r,s,g,y)}),lt(n,g=>{const y=rh(r,ze(e,g));Si(r,y)}),Ft(r.eventQueue_,e,[])}}function BT(r){eo(r,"onDisconnectEvents");const e=da(r),n=Ul();qc(r.onDisconnect_,_e(),(l,a)=>{const c=L_(l,a,r.serverSyncTree_,e);p_(n,l,c)});let s=[];qc(n,_e(),(l,a)=>{s=s.concat(Xs(r.serverSyncTree_,l,a));const c=rh(r,l);Si(r,c)}),r.onDisconnect_=Ul(),Ft(r.eventQueue_,_e(),s)}function WT(r,e,n){let s;ue(e._path)===".info"?s=Zc(r.infoSyncTree_,e,n):s=Zc(r.serverSyncTree_,e,n),W_(r.eventQueue_,e._path,s)}function VT(r,e,n){let s;ue(e._path)===".info"?s=ql(r.infoSyncTree_,e,n):s=ql(r.serverSyncTree_,e,n),W_(r.eventQueue_,e._path,s)}function HT(r){r.persistentConnection_&&r.persistentConnection_.interrupt(DT)}function eo(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),it(n,...e)}function td(r,e,n,s){e&&Ri(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let a=l;s&&(a+=": "+s);const c=new Error(a);c.code=l,e(c)}})}function $_(r,e,n){return Vd(r.serverSyncTree_,e,n)||ee.EMPTY_NODE}function nh(r,e=r.transactionQueueTree_){if(e||ha(r,e),Oi(e)){const n=q_(r,e);U(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&$T(r,Zs(e),n)}else F_(e)&&aa(e,n=>{nh(r,n)})}function $T(r,e,n){const s=n.map(g=>g.currentWriteId),l=$_(r,e,s);let a=l;const c=l.hash();for(let g=0;g<n.length;g++){const y=n[g];U(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const v=pt(e,y.path);a=a.updateChild(v,y.currentOutputSnapshotRaw)}const f=a.val(!0),p=e;r.server_.put(p.toString(),f,g=>{eo(r,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const v=[];for(let E=0;E<n.length;E++)n[E].status=2,y=y.concat(Qn(r.serverSyncTree_,n[E].currentWriteId)),n[E].onComplete&&v.push(()=>n[E].onComplete(null,!0,n[E].currentOutputSnapshotResolved)),n[E].unwatcher();ha(r,Jd(r.transactionQueueTree_,e)),nh(r,r.transactionQueueTree_),Ft(r.eventQueue_,e,y);for(let E=0;E<v.length;E++)Ri(v[E])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{mt("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}Si(r,e)}},c)}function Si(r,e){const n=G_(r,e),s=Zs(n),l=q_(r,n);return GT(r,l,s),s}function GT(r,e,n){if(e.length===0)return;const s=[];let l=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=pt(n,p.path);let y=!1,v;if(U(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,v=p.abortReason,l=l.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=LT)y=!0,v="maxretry",l=l.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0));else{const E=$_(r,p.path,c);p.currentInputSnapshot=E;const P=e[f].update(E.val());if(P!==void 0){ua("transaction failed: Data returned ",P,p.path);let R=Ke(P);typeof P=="object"&&P!=null&&sn(P,".priority")||(R=R.updatePriority(E.getPriority()));const O=p.currentWriteId,Q=da(r),W=b_(R,E,Q);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=W,p.currentWriteId=th(r),c.splice(c.indexOf(O),1),l=l.concat(P_(r.serverSyncTree_,p.path,W,p.currentWriteId,p.applyLocally)),l=l.concat(Qn(r.serverSyncTree_,O,!0))}else y=!0,v="nodata",l=l.concat(Qn(r.serverSyncTree_,p.currentWriteId,!0))}Ft(r.eventQueue_,n,l),l=[],y&&(e[f].status=2,(function(E){setTimeout(E,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}ha(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ri(s[f]);nh(r,r.transactionQueueTree_)}function G_(r,e){let n,s=r.transactionQueueTree_;for(n=ue(e);n!==null&&Oi(s)===void 0;)s=Jd(s,n),e=xe(e),n=ue(e);return s}function q_(r,e){const n=[];return K_(r,e,n),n.sort((s,l)=>s.order-l.order),n}function K_(r,e,n){const s=Oi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);aa(e,l=>{K_(r,l,n)})}function ha(r,e){const n=Oi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,M_(e,n.length>0?n:void 0)}aa(e,s=>{ha(r,s)})}function rh(r,e){const n=Zs(G_(r,e)),s=Jd(r.transactionQueueTree_,e);return ET(s,l=>{Nc(r,l)}),Nc(r,s),j_(s,l=>{Nc(r,l)}),n}function Nc(r,e){const n=Oi(e);if(n){const s=[];let l=[],a=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(U(a===c-1,"All SENT items should be at beginning of queue."),a=c,n[c].status=3,n[c].abortReason="set"):(U(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),l=l.concat(Qn(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?M_(e,void 0):n.length=a+1,Ft(r.eventQueue_,Zs(e),l);for(let c=0;c<s.length;c++)Ri(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function KT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):mt(`Invalid query segment '${n}' in query '${r}'`)}return e}const kg=function(r,e){const n=QT(r),s=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||i1();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Jv(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Se(n.pathString)}},QT=function(r){let e="",n="",s="",l="",a="",c=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let y=r.indexOf("/");y===-1&&(y=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(y,v)),y<v&&(l=qT(r.substring(y,v)));const E=KT(r.substring(Math.min(r.length,v)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const P=e.slice(0,g);if(P.toLowerCase()==="localhost")n="localhost";else if(P.split(".").length<=2)n=P;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),a=s}"ns"in E&&(a=E.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:f,pathString:l,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",YT=(function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let l;const a=new Array(8);for(l=7;l>=0;l--)a[l]=Tg.charAt(n%64),n=Math.floor(n/64);U(n===0,"Cannot push at time == 0");let c=a.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)c+=Tg.charAt(e[l]);return U(c.length===20,"nextPushId: Length should be 20."),c}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class XT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return he(this._path)?null:Rd(this._path)}get ref(){return new Cn(this._repo,this._path)}get _queryIdentifier(){const e=dg(this._queryParams),n=Td(e);return n==="{}"?"default":n}get _queryObject(){return dg(this._queryParams)}isEqual(e){if(e=vt(e),!(e instanceof ih))return!1;const n=this._repo===e._repo,s=Ad(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+B1(this._path)}}class Cn extends ih{constructor(e,n){super(e,n,new bd,!1)}get parent(){const e=o_(this._path);return e===null?null:new Cn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ws{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),s=Vs(this.ref,e);return new Ws(this._node.getChild(n),s,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ws(l,Vs(this.ref,s),Be)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function st(r,e){return r=vt(r),r._checkNotDeleted("ref"),e!==void 0?Vs(r._root,e):r._root}function Vs(r,e){return r=vt(r),ue(r._path)===null?PT("child","path",e):B_("child","path",e),new Cn(r._repo,ze(r._path,e))}function ZT(r,e){r=vt(r),Zd("push",r._path),z_("push",e,r._path,!0);const n=H_(r._repo),s=YT(n),l=Vs(r,s),a=Vs(r,s);let c;return c=Promise.resolve(a),l.then=c.then.bind(c),l.catch=c.then.bind(c,void 0),l}function Ng(r){return Zd("remove",r._path),eN(r,null)}function eN(r,e){r=vt(r),Zd("set",r._path),z_("set",e,r._path,!1);const n=new Hs;return UT(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function nr(r,e){xT("update",e,r._path);const n=new Hs;return zT(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function fa(r){r=vt(r);const e=new Q_(()=>{}),n=new pa(e);return jT(r._repo,r,n).then(s=>new Ws(s,new Cn(r._repo,r._path),r._queryParams.getIndex()))}class pa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new JT("value",this,new Ws(e.snapshotNode,new Cn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new XT(this,e,n):null}matches(e){return e instanceof pa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function tN(r,e,n,s,l){const a=new Q_(n,void 0),c=new pa(a);return WT(r._repo,r,c),()=>VT(r._repo,r,c)}function Kl(r,e,n,s){return tN(r,"value",e)}Zk(Cn);iT(Cn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="FIREBASE_DATABASE_EMULATOR_HOST",nd={};let rN=!1;function iN(r,e,n,s){const l=e.lastIndexOf(":"),a=e.substring(0,l),c=Ti(a);r.repoInfo_=new Jv(e,c,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function sN(r,e,n,s,l){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=kg(a,l),f=c.repoInfo,p;typeof process<"u"&&qm&&(p=qm[nN]),p?(a=`http://${p}?ns=${f.namespace}`,c=kg(a,l),f=c.repoInfo):c.repoInfo.secure;const g=new m1(r.name,r.options,e);RT("Invalid Firebase Database URL",c),he(c.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const y=lN(f,r,g,new p1(r,n));return new aN(y,r)}function oN(r,e){const n=nd[e];(!n||n[r.key]!==r)&&En(`Database ${e}(${r.repoInfo_}) has already been deleted.`),HT(r),delete n[r.key]}function lN(r,e,n,s){let l=nd[e.name];l||(l={},nd[e.name]=l);let a=l[r.toURLString()];return a&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new bT(r,rN,n,s),l[r.toURLString()]=a,a}class aN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function uN(r=iv(),e){const n=fd(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=EE("database");s&&cN(n,...s)}return n}function cN(r,e,n,s={}){r=vt(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,a=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Tr(s,a.repoInfo_.emulatorOptions))return;En("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(a.repoInfo_.nodeAdmin)s.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Sl(Sl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:SE(s.mockUserToken,r.app.options.projectId);c=new Sl(f)}Ti(e)&&(Jg(e),Xg("Database",!0)),iN(a,l,s,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(r){XI(xi),gi(new Nr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return sN(s,l,a,n)},"PUBLIC").setMultipleInstances(!0)),Zn(Km,Qm,r),Zn(Km,Qm,"esm2017")}_n.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};_n.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};dN();const hN={apiKey:"AIzaSyCrFLv4OkNYI86ll6U0Xjo5OegDaUzqFMA",authDomain:"stockduloft.firebaseapp.com",databaseURL:"https://stockduloft-default-rtdb.firebaseio.com",projectId:"stockduloft",storageBucket:"stockduloft.firebasestorage.app",messagingSenderId:"375022059708",appId:"1:375022059708:web:f059d080070233a5b590b9",measurementId:"G-C7CW1SSW2Z"},Y_=rv(hN),ot=uN(Y_),xc=KI(Y_),fN=new pn,J_=A.createContext(null);function pN({children:r}){const[e,n]=A.useState(null),[s,l]=A.useState(!0);A.useEffect(()=>MC(xc,p=>{n(p),l(!1)}),[]);const a=async()=>{try{await rI(xc,fN)}catch(f){throw console.error("Erreur de connexion:",f),f}},c=async()=>{try{await FC(xc)}catch(f){console.error("Erreur de déconnexion:",f)}};return s?_.jsxs("div",{className:"loading-screen",children:[_.jsx("div",{className:"loading-spinner"}),_.jsx("p",{children:"Chargement..."})]}):_.jsx(J_.Provider,{value:{user:e,login:a,logout:c},children:r})}function sh(){const r=A.useContext(J_);if(!r)throw new Error("useAuth doit être utilisé dans un AuthProvider");return r}const Pc=600,Rc=600,mN=.6,vl=80,gN=.4;function vN(r){return new Promise((e,n)=>{const s=new FileReader;s.onload=l=>{const a=new Image;a.onload=()=>{const c=document.createElement("canvas");let{width:f,height:p}=a;f>p?f>Pc&&(p=Math.round(p*Pc/f),f=Pc):p>Rc&&(f=Math.round(f*Rc/p),p=Rc),c.width=f,c.height=p,c.getContext("2d").drawImage(a,0,0,f,p);const y=c.toDataURL("image/jpeg",mN);e(y)},a.onerror=()=>n(new Error("Impossible de charger l'image")),a.src=l.target.result},s.onerror=()=>n(new Error("Impossible de lire le fichier")),s.readAsDataURL(r)})}function _N(r){return new Promise((e,n)=>{const s=new FileReader;s.onload=l=>{const a=new Image;a.onload=()=>{const c=document.createElement("canvas");c.width=vl,c.height=vl;const f=c.getContext("2d"),p=Math.min(a.width,a.height),g=(a.width-p)/2,y=(a.height-p)/2;f.drawImage(a,g,y,p,p,0,0,vl,vl);const v=c.toDataURL("image/jpeg",gN);e(v)},a.onerror=()=>n(new Error("Impossible de charger l'image")),a.src=l.target.result},s.onerror=()=>n(new Error("Impossible de lire le fichier")),s.readAsDataURL(r)})}const In="stockduloft/items",oh="stockduloft/photos";async function X_(r){const e=st(ot,`${oh}/${r}`),n=await fa(e);return n.exists()&&n.val().photoBase64||null}async function yN({uniqueId:r,description:e,price:n,photoFile:s,category:l,itemDate:a}){const c={uniqueId:r.toUpperCase().trim(),description:e.trim(),price:parseFloat(n),hasPhoto:!1,category:l||"",status:"inventory",itemDate:a||new Date().toISOString().split("T")[0],consignmentStore:"",consignmentDate:null,saleDate:null,sellerName:"",createdAt:Date.now(),updatedAt:Date.now()},f=st(ot,In),p=ZT(f);if(await nr(p,c),s){const[g,y]=await Promise.all([vN(s),_N(s)]),v=st(ot,`${oh}/${p.key}`);await nr(v,{photoBase64:g}),await nr(p,{hasPhoto:!0,thumbnail:y}),c.hasPhoto=!0,c.thumbnail=y}return{id:p.key,...c}}async function wN(r,e){const n=st(ot,`${In}/${r}`);await nr(n,{...e,updatedAt:Date.now()})}async function EN(r){const e=st(ot,`${In}/${r}`),n=st(ot,`${oh}/${r}`);await Ng(n),await Ng(e)}async function Z_(r){const e=st(ot,In),n=await fa(e);if(!n.exists())return null;const s=r.toUpperCase().trim();let l=null;return n.forEach(a=>{const c=a.val();c.uniqueId===s&&(l={id:a.key,...c})}),l&&l.hasPhoto&&(l.photoBase64=await X_(l.id)),l}async function xg(r="ADL"){const e=st(ot,In),n=await fa(e);let s=0;n.exists()&&n.forEach(a=>{const p=(a.val().uniqueId||"").match(new RegExp(`^${r}-(\\d+)$`,"i"));if(p){const g=parseInt(p[1],10);g>s&&(s=g)}});const l=s+1;return`${r}-${String(l).padStart(3,"0")}`}async function SN(r,e,n=null,s=null,l="",a=!1,c=""){const f=st(ot,`${In}/${r}`),p={status:"sold",sellerName:e.trim(),saleDate:n||new Date().toISOString().split("T")[0],marketName:l.trim(),isGift:a,giftNote:a?c.trim():"",updatedAt:Date.now()};a?p.salePrice=0:s!==null&&(p.salePrice=parseFloat(s)),await nr(f,p)}async function CN(r,e,n=null){const s=st(ot,`${In}/${r}`);await nr(s,{status:"consignment",consignmentStore:e.trim(),consignmentDate:n||new Date().toISOString().split("T")[0],updatedAt:Date.now()})}async function IN(r){const e=st(ot,`${In}/${r}`);await nr(e,{status:"inventory",consignmentStore:"",consignmentDate:null,saleDate:null,salePrice:null,marketName:"",sellerName:"",isGift:!1,giftNote:"",updatedAt:Date.now()})}function kN(r){const e=st(ot,In);return Kl(e,s=>{const l=[];s.exists()&&s.forEach(a=>{l.push({id:a.key,...a.val()})}),l.sort((a,c)=>(c.createdAt||0)-(a.createdAt||0)),r(l)})}const Pg={all:"Tous",inventory:"En stock",consignment:"En consigne",sold:"Vendus"},TN={inventory:"#2ecc71",consignment:"#f39c12",sold:"#e74c3c"};function NN(){const[r,e]=A.useState([]),[n,s]=A.useState("all"),[l,a]=A.useState(""),[c,f]=A.useState(null),[p,g]=A.useState(!0),[y,v]=A.useState({}),[E,P]=A.useState(null),[R,x]=A.useState({description:"",price:"",category:""});A.useEffect(()=>kN(oe=>{e(oe),g(!1)}),[]);const O=async D=>{if(c===D.id){f(null);return}if(f(D.id),!y[D.id]){if(D.photoBase64)v(oe=>({...oe,[D.id]:D.photoBase64}));else if(D.hasPhoto){const oe=await X_(D.id);oe&&v(De=>({...De,[D.id]:oe}))}}},Q=r.filter(D=>{var $e,Ce;const oe=n==="all"||D.status===n,De=l===""||(($e=D.uniqueId)==null?void 0:$e.toLowerCase().includes(l.toLowerCase()))||((Ce=D.description)==null?void 0:Ce.toLowerCase().includes(l.toLowerCase()));return oe&&De}),W={all:r.length,inventory:r.filter(D=>D.status==="inventory").length,consignment:r.filter(D=>D.status==="consignment").length,sold:r.filter(D=>D.status==="sold").length},H=D=>{var oe;P(D.id),x({description:D.description||"",price:((oe=D.price)==null?void 0:oe.toString())||"",category:D.category||""})},z=async D=>{await wN(D.id,{description:R.description.trim(),price:parseFloat(R.price)||0,category:R.category.trim()}),P(null)},re=()=>{P(null)},se=async D=>{confirm(`Remettre "${D.uniqueId}" en inventaire?`)&&(await IN(D.id),f(null))},pe=async D=>{confirm(`Supprimer définitivement "${D.uniqueId}"?`)&&(await EN(D.id),f(null),v(oe=>{const De={...oe};return delete De[D.id],De}))},Ie=async D=>{const oe=prompt("Nom du commerce pour la consigne:");oe&&(await CN(D.id,oe),f(null))};return p?_.jsxs("div",{className:"page-loading",children:[_.jsx("div",{className:"loading-spinner"}),_.jsx("p",{children:"Chargement de l'inventaire..."})]}):_.jsxs("div",{className:"page inventory-page",children:[_.jsxs("div",{className:"search-bar",children:[_.jsx("input",{type:"text",placeholder:"🔍 Rechercher par # ou description...",value:l,onChange:D=>a(D.target.value),className:"search-input"}),l&&_.jsx("button",{className:"search-clear",onClick:()=>a(""),children:"✕"})]}),_.jsx("div",{className:"status-filters",children:Object.entries(Pg).map(([D,oe])=>_.jsxs("button",{className:`filter-btn ${n===D?"active":""}`,onClick:()=>s(D),children:[oe,_.jsx("span",{className:"filter-count",children:W[D]})]},D))}),Q.length===0?_.jsxs("div",{className:"empty-state",children:[_.jsx("p",{className:"empty-icon",children:"📭"}),_.jsx("p",{children:l?"Aucun résultat trouvé":"Aucun item dans cette catégorie"})]}):_.jsx("div",{className:"items-list",children:Q.map(D=>{var oe,De,$e;return _.jsxs("div",{className:`item-card ${c===D.id?"expanded":""}`,onClick:()=>O(D),children:[_.jsxs("div",{className:"item-row",children:[_.jsx("div",{className:"item-photo",children:D.thumbnail?_.jsx("img",{src:D.thumbnail,alt:D.description,className:"item-thumbnail"}):D.hasPhoto||D.photoBase64?_.jsx("div",{className:"photo-placeholder",children:"🖼️"}):_.jsx("div",{className:"photo-placeholder",children:"📷"})}),_.jsxs("div",{className:"item-info",children:[_.jsxs("div",{className:"item-id-row",children:[_.jsxs("span",{className:"item-unique-id",children:["#",D.uniqueId]}),_.jsx("span",{className:"item-status-badge",style:{backgroundColor:TN[D.status]},children:Pg[D.status]})]}),_.jsx("p",{className:"item-description",children:D.description}),_.jsxs("div",{className:"item-meta",children:[_.jsxs("span",{className:"item-price",children:[(oe=D.price)==null?void 0:oe.toFixed(2)," $"]}),D.itemDate&&_.jsxs("span",{className:"item-date",children:["🧵 ",D.itemDate]}),D.status==="consignment"&&_.jsxs("span",{className:"item-consignment",children:["📍 ",D.consignmentStore," ",D.consignmentDate&&`(${D.consignmentDate})`]}),D.status==="sold"&&_.jsxs("span",{className:"item-sold-info",children:[D.isGift?_.jsxs(_.Fragment,{children:["🎁 Cadeau",D.giftNote?` — ${D.giftNote}`:""," · "]}):D.salePrice&&D.salePrice!==D.price?_.jsxs(_.Fragment,{children:[_.jsxs("s",{children:[(De=D.price)==null?void 0:De.toFixed(2)," $"]})," → ",($e=D.salePrice)==null?void 0:$e.toFixed(2)," $ · "]}):"",D.saleDate," — ",D.sellerName,D.marketName?` · 📍 ${D.marketName}`:""]})]})]})]}),c===D.id&&_.jsxs("div",{onClick:Ce=>Ce.stopPropagation(),children:[y[D.id]&&_.jsx("div",{className:"item-expanded-photo",children:_.jsx("img",{src:y[D.id],alt:D.description})}),D.hasPhoto&&!y[D.id]&&_.jsx("div",{className:"item-expanded-photo loading",children:_.jsx("div",{className:"loading-spinner"})}),_.jsx("div",{className:"item-actions",children:E===D.id?_.jsxs("div",{className:"item-edit-form",children:[_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Description"}),_.jsx("input",{type:"text",value:R.description,onChange:Ce=>x(ie=>({...ie,description:Ce.target.value})),className:"form-input"})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Prix ($)"}),_.jsx("input",{type:"number",value:R.price,onChange:Ce=>x(ie=>({...ie,price:Ce.target.value})),className:"form-input",step:"0.01",min:"0",inputMode:"decimal"})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Catégorie"}),_.jsx("input",{type:"text",value:R.category,onChange:Ce=>x(ie=>({...ie,category:Ce.target.value})),className:"form-input"})]}),_.jsxs("div",{className:"item-edit-actions",children:[_.jsx("button",{className:"btn btn-small btn-save",onClick:()=>z(D),children:"✓ Sauvegarder"}),_.jsx("button",{className:"btn btn-small btn-secondary",onClick:re,children:"Annuler"})]})]}):_.jsxs(_.Fragment,{children:[_.jsx("button",{className:"btn btn-small btn-edit",onClick:()=>H(D),children:"✏️ Modifier"}),D.status==="inventory"&&_.jsx("button",{className:"btn btn-small btn-consign",onClick:()=>Ie(D),children:"📍 Consigne"}),(D.status==="consignment"||D.status==="sold")&&_.jsx("button",{className:"btn btn-small btn-return",onClick:()=>se(D),children:"📦 Retour inventaire"}),_.jsx("button",{className:"btn btn-small btn-delete",onClick:()=>pe(D),children:"🗑️ Supprimer"})]})})]})]},D.id)})})]})}function xN(){const r=ld(),e=A.useRef(null),[n,s]=A.useState({uniqueId:"",description:"",price:"",category:"",itemDate:new Date().toISOString().split("T")[0]}),[l,a]=A.useState(null),[c,f]=A.useState(null),[p,g]=A.useState(!1),[y,v]=A.useState(""),[E,P]=A.useState("");A.useEffect(()=>{xg("ADL").then(z=>{s(re=>({...re,uniqueId:z})),P(z)})},[]);const R=z=>{const{name:re,value:se}=z.target;s(pe=>({...pe,[re]:se})),re==="uniqueId"&&v("")},x=z=>{var pe;const re=(pe=z.target.files)==null?void 0:pe[0];if(!re)return;a(re);const se=new FileReader;se.onload=Ie=>f(Ie.target.result),se.readAsDataURL(re)},O=()=>{var z;(z=e.current)==null||z.click()},Q=()=>{a(null),f(null),e.current&&(e.current.value="")},W=()=>{s(z=>({...z,uniqueId:E})),v("")},H=async z=>{if(z.preventDefault(),v(""),!n.uniqueId.trim()){v("Le numéro unique est requis");return}if(!n.price||parseFloat(n.price)<=0){v("Le prix doit être supérieur à 0");return}if(await Z_(n.uniqueId)){const se=await xg("ADL");P(se),v(`Le numéro "${n.uniqueId.toUpperCase()}" existe déjà !`);return}g(!0);try{await yN({uniqueId:n.uniqueId,description:n.description,price:n.price,category:n.category,itemDate:n.itemDate,photoFile:l}),r("/")}catch(se){console.error("Erreur:",se),v("Erreur lors de la sauvegarde. Réessayez.")}finally{g(!1)}};return _.jsxs("div",{className:"page add-item-page",children:[_.jsx("h2",{className:"page-title",children:"Nouvel item"}),_.jsxs("form",{onSubmit:H,className:"add-form",children:[_.jsxs("div",{className:"photo-section",children:[_.jsx("input",{ref:e,type:"file",accept:"image/*",capture:"environment",onChange:x,className:"hidden-input"}),c?_.jsxs("div",{className:"photo-preview-container",children:[_.jsx("img",{src:c,alt:"Aperçu",className:"photo-preview"}),_.jsx("button",{type:"button",className:"photo-remove",onClick:Q,children:"✕"})]}):_.jsxs("button",{type:"button",className:"photo-capture-btn",onClick:O,children:[_.jsx("span",{className:"capture-icon",children:"📷"}),_.jsx("span",{children:"Prendre une photo"})]})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Numéro unique *"}),_.jsx("input",{type:"text",name:"uniqueId",value:n.uniqueId,onChange:R,placeholder:"Ex: ADL-001",className:"form-input",autoComplete:"off",style:{textTransform:"uppercase"}})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Description"}),_.jsx("input",{type:"text",name:"description",value:n.description,onChange:R,placeholder:"Ex: Sac à main fleuri",className:"form-input"})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Prix ($) *"}),_.jsx("input",{type:"number",name:"price",value:n.price,onChange:R,placeholder:"0.00",className:"form-input",step:"0.01",min:"0",inputMode:"decimal"})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Catégorie"}),_.jsx("input",{type:"text",name:"category",value:n.category,onChange:R,placeholder:"Ex: Sacs, Vêtements, Accessoires...",className:"form-input"})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Date de création"}),_.jsx("input",{type:"date",name:"itemDate",value:n.itemDate,onChange:R,className:"form-input"})]}),y&&_.jsxs("div",{className:"error-block",children:[_.jsx("p",{className:"error-text",children:y}),E&&y.includes("existe déjà")&&_.jsxs("button",{type:"button",className:"btn btn-small btn-suggest",onClick:W,children:["Utiliser ",E]})]}),_.jsxs("div",{className:"form-actions",children:[_.jsx("button",{type:"submit",className:"btn btn-primary btn-full",disabled:p,children:p?"Sauvegarde en cours...":"✓ Ajouter à l'inventaire"}),_.jsx("button",{type:"button",className:"btn btn-secondary btn-full",onClick:()=>r("/"),children:"Annuler"})]})]})]})}function PN(){var $e,Ce;const{user:r}=sh(),[e,n]=A.useState("ADL-"),[s,l]=A.useState(null),[a,c]=A.useState((($e=r==null?void 0:r.displayName)==null?void 0:$e.split(" ")[0])||""),[f,p]=A.useState(new Date().toISOString().split("T")[0]),[g,y]=A.useState(""),[v,E]=A.useState(()=>localStorage.getItem("sdl_marketName")||""),[P,R]=A.useState(!1),[x,O]=A.useState(!1),[Q,W]=A.useState(""),[H,z]=A.useState(""),[re,se]=A.useState(!1),[pe,Ie]=A.useState(""),D=async ie=>{var Ye;if(ie==null||ie.preventDefault(),!!e.trim()){R(!0),W(""),z(""),l(null);try{const Le=await Z_(e);if(!Le){W(`Aucun item trouvé avec le numéro "${e.toUpperCase()}"`);return}if(Le.status==="sold"){W(`Cet item est déjà vendu (${Le.saleDate} par ${Le.sellerName})`);return}l(Le),y(((Ye=Le.price)==null?void 0:Ye.toFixed(2))||"")}catch(Le){console.error(Le),W("Erreur de recherche. Réessayez.")}finally{R(!1)}}},oe=async()=>{if(!(!s||!a.trim())){O(!0),W("");try{const ie=re?0:parseFloat(g)||s.price;await SN(s.id,a,f,ie,v,re,pe);const Ye=re?`✓ ${s.uniqueId} donné en cadeau${pe?` — ${pe}`:""}`:`✓ ${s.uniqueId} vendu pour ${ie.toFixed(2)} $${v?` au ${v}`:""}`;z(Ye),l(null),n("ADL-"),y(""),se(!1),Ie("")}catch(ie){console.error(ie),W("Erreur lors de la vente. Réessayez.")}finally{O(!1)}}},De=()=>{n("ADL-"),l(null),y(""),W(""),z(""),se(!1),Ie("")};return _.jsxs("div",{className:"page sale-page",children:[_.jsx("h2",{className:"page-title",children:"💰 Vente rapide"}),_.jsx("form",{onSubmit:D,className:"sale-search-form",children:_.jsxs("div",{className:"sale-search-row",children:[_.jsx("input",{type:"text",value:e,onChange:ie=>n(ie.target.value.toUpperCase()),placeholder:"Ex: ADL-001",className:"form-input sale-search-input",autoComplete:"off",autoFocus:!0}),_.jsx("button",{type:"submit",className:"btn btn-primary sale-search-btn",disabled:P||!e.trim(),children:P?"...":"🔍"})]})}),H&&_.jsxs("div",{className:"sale-success",children:[_.jsx("p",{children:H}),_.jsx("button",{className:"btn btn-primary btn-full",onClick:De,children:"Prochaine vente"})]}),Q&&_.jsxs("div",{className:"sale-error",children:[_.jsx("p",{children:Q}),_.jsx("button",{className:"btn btn-secondary",onClick:De,children:"Réessayer"})]}),s&&_.jsxs("div",{className:"sale-confirmation",children:[_.jsxs("div",{className:"sale-item-card",children:[s.photoBase64?_.jsx("img",{src:s.photoBase64,alt:s.description,className:"sale-item-photo"}):_.jsx("div",{className:"sale-photo-placeholder",children:"📷"}),_.jsxs("div",{className:"sale-item-details",children:[_.jsxs("span",{className:"sale-item-id",children:["#",s.uniqueId]}),_.jsx("p",{className:"sale-item-desc",children:s.description}),_.jsxs("p",{className:"sale-item-price",children:[(Ce=s.price)==null?void 0:Ce.toFixed(2)," $"]}),s.status==="consignment"&&_.jsxs("p",{className:"sale-item-consign",children:["📍 En consigne: ",s.consignmentStore]})]})]}),_.jsxs("div",{className:"sale-form",children:[_.jsx("div",{className:"form-group",children:_.jsxs("label",{className:"gift-toggle",children:[_.jsx("input",{type:"checkbox",checked:re,onChange:ie=>{var Ye;se(ie.target.checked),ie.target.checked?y("0"):y(((Ye=s.price)==null?void 0:Ye.toFixed(2))||"")}}),_.jsx("span",{children:"🎁 Donné en cadeau"})]})}),re&&_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Note"}),_.jsx("input",{type:"text",value:pe,onChange:ie=>Ie(ie.target.value),className:"form-input",placeholder:"Ex: Cadeau pour maman, échange, etc."})]}),!re&&_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Prix de vente ($)"}),_.jsxs("div",{className:"sale-price-row",children:[_.jsx("input",{type:"number",value:g,onChange:ie=>y(ie.target.value),className:"form-input",step:"0.01",min:"0",inputMode:"decimal"}),parseFloat(g)<s.price&&_.jsxs("span",{className:"sale-discount",children:["Rabais de ",(s.price-parseFloat(g)).toFixed(2)," $"]})]})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Vendeuse"}),_.jsx("input",{type:"text",value:a,onChange:ie=>c(ie.target.value),className:"form-input",placeholder:"Nom de la vendeuse"})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Marché / Point de vente"}),_.jsx("input",{type:"text",value:v,onChange:ie=>{E(ie.target.value),localStorage.setItem("sdl_marketName",ie.target.value)},className:"form-input",placeholder:"Ex: Marché Jean-Talon, Facebook, etc."})]}),_.jsxs("div",{className:"form-group",children:[_.jsx("label",{className:"form-label",children:"Date de vente"}),_.jsx("input",{type:"date",value:f,onChange:ie=>p(ie.target.value),className:"form-input"})]}),_.jsxs("div",{className:"sale-actions",children:[_.jsx("button",{className:"btn btn-sell btn-full",onClick:oe,disabled:x||!a.trim(),children:x?"En cours...":re?"🎁 Confirmer le cadeau":`Confirmer la vente — ${parseFloat(g||0).toFixed(2)} $`}),_.jsx("button",{className:"btn btn-secondary btn-full",onClick:De,children:"Annuler"})]})]})]}),!s&&!Q&&!H&&_.jsxs("div",{className:"sale-hint",children:[_.jsx("p",{className:"hint-icon",children:"🏷️"}),_.jsxs("p",{children:["Entre le numéro de l'étiquette",_.jsx("br",{}),"pour enregistrer une vente"]})]})]})}const Rg="stockduloft/settings";function RN(){const[r,e]=A.useState(7);A.useEffect(()=>{const s=st(ot,Rg);return Kl(s,a=>{a.exists()&&a.val().vitrineSoldDays!==void 0&&e(a.val().vitrineSoldDays)})},[]);const n=async s=>{const l=parseInt(s);e(l),await nr(st(ot,Rg),{vitrineSoldDays:l})};return _.jsxs("div",{className:"page about-page",children:[_.jsx("h2",{className:"page-title",children:"ℹ️ À propos"}),_.jsxs("div",{className:"about-card",style:{marginBottom:"12px"},children:[_.jsx("h4",{children:"⚙️ Paramètres Vitrine"}),_.jsxs("div",{className:"form-group",style:{marginTop:"10px"},children:[_.jsx("label",{className:"form-label",children:"Afficher les articles vendus pendant :"}),_.jsxs("select",{value:r,onChange:s=>n(s.target.value),className:"form-input",children:[_.jsx("option",{value:0,children:"Ne pas afficher"}),_.jsx("option",{value:3,children:"3 jours"}),_.jsx("option",{value:7,children:"7 jours (1 semaine)"}),_.jsx("option",{value:14,children:"14 jours (2 semaines)"}),_.jsx("option",{value:30,children:"30 jours (1 mois)"})]}),_.jsx("p",{className:"about-setting-hint",children:"Les articles vendus apparaîtront avec un bandeau « VENDU » dans la vitrine publique."})]})]}),_.jsxs("div",{className:"about-card",children:[_.jsx("div",{className:"about-logo",children:_.jsx("img",{src:"/pwa-192x192.png",alt:"Stock du Loft"})}),_.jsx("h3",{children:"✂️ Stock du Loft"}),_.jsx("p",{className:"about-version",children:"Version 1.0"}),_.jsx("p",{className:"about-description",children:"Application de gestion d'inventaire conçue pour les artisans et créateurs. Gérez vos articles, suivez vos consignes et enregistrez vos ventes en toute simplicité."}),_.jsxs("div",{className:"about-features",children:[_.jsx("h4",{children:"Fonctionnalités"}),_.jsxs("ul",{children:[_.jsx("li",{children:"📦 Gestion d'inventaire avec numéros uniques (ADL-001, ADL-002...)"}),_.jsx("li",{children:"📸 Photos des articles avec miniatures rapides"}),_.jsx("li",{children:"💰 Vente rapide par numéro d'article"}),_.jsx("li",{children:"📍 Suivi des consignes chez les marchands"}),_.jsx("li",{children:"🏷️ Rabais et prix de vente personnalisés"}),_.jsx("li",{children:"🔄 Synchronisation en temps réel"}),_.jsx("li",{children:"🔒 Authentification sécurisée Google"}),_.jsx("li",{children:"📱 Application installable (PWA)"})]})]}),_.jsxs("div",{className:"about-author",children:[_.jsxs("p",{children:["Créé par ",_.jsx("strong",{children:"Jean-Marc Lacroix"})]}),_.jsx("p",{children:"© 2026 — Tous droits réservés"}),_.jsx("p",{style:{marginTop:"12px"},children:"💬 Commentaires et suggestions bienvenus"}),_.jsx("a",{href:"mailto:lacroix.jeanmarc@gmail.com",className:"about-email",children:"📧 lacroix.jeanmarc@gmail.com"})]}),_.jsxs("div",{className:"about-donate",children:[_.jsx("p",{children:"☕ Vous aimez cette application?"}),_.jsx("p",{children:"Payez-moi un café par Virement Interac :"}),_.jsx("p",{className:"about-donate-email",children:"lacroix.jeanmarc@gmail.com"})]})]})]})}const AN="stockduloft/items",ON="stockduloft/photos",DN="stockduloft/settings";function LN(r,e){if(r.status!=="sold"||!r.saleDate)return!1;const n=new Date(r.saleDate);return(new Date-n)/(1e3*60*60*24)<=e}function bN(){const[r,e]=A.useState([]),[n,s]=A.useState(!0),[l,a]=A.useState("all"),[c,f]=A.useState(null),[p,g]=A.useState({}),[y,v]=A.useState(7);A.useEffect(()=>{const x=st(ot,DN);return Kl(x,Q=>{if(Q.exists()){const W=Q.val();W.vitrineSoldDays!==void 0&&v(W.vitrineSoldDays)}})},[]),A.useEffect(()=>{const x=st(ot,AN);return Kl(x,Q=>{const W=[];Q.exists()&&Q.forEach(H=>{const z={id:H.key,...H.val()};(z.status==="inventory"||z.status==="consignment"||LN(z,y))&&W.push(z)}),W.sort((H,z)=>(z.createdAt||0)-(H.createdAt||0)),e(W),s(!1),W.forEach(async H=>{if(H.hasPhoto&&!H.photoBase64)try{const z=st(ot,`${ON}/${H.id}`),re=await fa(z);re.exists()&&g(se=>({...se,[H.id]:re.val().photoBase64}))}catch(z){console.error("Erreur photo:",z)}})})},[y]);const E=[...new Set(r.map(x=>x.category).filter(Boolean))].sort(),P=l==="all"?r:r.filter(x=>x.category===l),R=async x=>{if(c===x.id){f(null);return}f(x.id)};return n?_.jsx("div",{className:"vitrine",children:_.jsxs("div",{className:"vitrine-loading",children:[_.jsx("div",{className:"loading-spinner"}),_.jsx("p",{children:"Chargement du catalogue..."})]})}):_.jsxs("div",{className:"vitrine",children:[_.jsxs("header",{className:"vitrine-header",children:[_.jsx("img",{src:"/pwa-192x192.png",alt:"Logo",className:"vitrine-logo"}),_.jsxs("div",{children:[_.jsx("h1",{className:"vitrine-title",children:"✂️ L'Atelier du Loft"}),_.jsx("p",{className:"vitrine-subtitle-name",children:"Josée Bourgouin"}),_.jsxs("p",{className:"vitrine-subtitle",children:[P.length," article",P.length>1?"s":""," disponible",P.length>1?"s":""]})]})]}),E.length>0&&_.jsxs("div",{className:"vitrine-filters",children:[_.jsx("button",{className:`vitrine-filter-btn ${l==="all"?"active":""}`,onClick:()=>a("all"),children:"Tous"}),E.map(x=>_.jsx("button",{className:`vitrine-filter-btn ${l===x?"active":""}`,onClick:()=>a(x),children:x},x))]}),P.length===0?_.jsxs("div",{className:"vitrine-empty",children:[_.jsx("p",{children:"🏷️"}),_.jsx("p",{children:"Aucun article disponible pour le moment"})]}):_.jsx("div",{className:"vitrine-grid",children:P.map(x=>{var O;return _.jsxs("div",{className:`vitrine-card ${c===x.id?"expanded":""}`,onClick:()=>R(x),children:[_.jsxs("div",{className:"vitrine-card-photo",children:[p[x.id]?_.jsx("img",{src:p[x.id],alt:x.description}):x.photoBase64?_.jsx("img",{src:x.photoBase64,alt:x.description}):x.thumbnail?_.jsx("img",{src:x.thumbnail,alt:x.description,className:"vitrine-thumb-blur"}):_.jsx("div",{className:"vitrine-card-no-photo",children:"📷"}),x.status==="sold"&&_.jsx("div",{className:"vitrine-sold-overlay",children:_.jsx("span",{children:"VENDU"})})]}),_.jsxs("div",{className:"vitrine-card-info",children:[_.jsx("p",{className:"vitrine-card-desc",children:x.description||"Sans description"}),_.jsxs("p",{className:"vitrine-card-price",children:[(O=x.price)==null?void 0:O.toFixed(2)," $"]}),x.category&&_.jsx("span",{className:"vitrine-card-category",children:x.category})]}),c===x.id&&_.jsxs("div",{className:"vitrine-card-expanded",onClick:Q=>Q.stopPropagation(),children:[(p[x.id]||x.photoBase64)&&_.jsx("img",{src:p[x.id]||x.photoBase64,alt:x.description,className:"vitrine-full-photo"}),_.jsxs("div",{className:"vitrine-card-details",children:[_.jsx("p",{children:_.jsxs("strong",{children:["#",x.uniqueId]})}),x.status==="consignment"&&_.jsxs("p",{children:["📍 En consigne: ",x.consignmentStore]}),x.itemDate&&_.jsxs("p",{children:["🧵 Créé le ",x.itemDate]})]})]})]},x.id)})}),_.jsxs("footer",{className:"vitrine-footer",children:[_.jsx("p",{children:"✂️ L'Atelier du Loft — Josée Bourgouin"}),_.jsx("p",{className:"vitrine-footer-cta",children:"Écrivez-moi si quelque chose vous intéresse!"}),_.jsx("a",{href:"mailto:Josée.Bourgouin@gmail.com",children:"📧 Josée.Bourgouin@gmail.com"})]})]})}function MN(){const{login:r}=sh(),[e,n]=A.useState(""),[s,l]=A.useState(!1),a=async()=>{n(""),l(!0);try{await r()}catch{n("Erreur de connexion. Réessayez.")}finally{l(!1)}};return _.jsx("div",{className:"login-page",children:_.jsxs("div",{className:"login-card",children:[_.jsx("div",{className:"login-logo",children:"✂️"}),_.jsx("h1",{className:"login-title",children:"Stock du Loft"}),_.jsxs("p",{className:"login-subtitle",children:["Gestion d'inventaire pour",_.jsx("br",{}),"L'Atelier du Loft"]}),_.jsx("button",{onClick:a,className:"btn btn-primary btn-login",disabled:s,children:s?"Connexion...":"🔑 Se connecter avec Google"}),e&&_.jsx("p",{className:"error-text",children:e})]})})}function FN(){var s;const{user:r,logout:e}=sh();return Or().pathname==="/vitrine"?_.jsx(bN,{}):r?_.jsxs("div",{className:"app",children:[_.jsx("header",{className:"app-header",children:_.jsxs("div",{className:"header-content",children:[_.jsxs("h1",{className:"app-title",children:[_.jsx("span",{className:"title-icon",children:"✂️"}),"Stock du Loft"]}),_.jsxs("div",{className:"header-user",children:[_.jsx("span",{className:"user-name",children:(s=r.displayName)==null?void 0:s.split(" ")[0]}),_.jsx("button",{onClick:e,className:"btn-logout",title:"Déconnexion",children:"↗"})]})]})}),_.jsx("main",{className:"app-main",children:_.jsxs(J0,{children:[_.jsx(li,{path:"/",element:_.jsx(NN,{})}),_.jsx(li,{path:"/add",element:_.jsx(xN,{})}),_.jsx(li,{path:"/sale",element:_.jsx(PN,{})}),_.jsx(li,{path:"/about",element:_.jsx(RN,{})}),_.jsx(li,{path:"*",element:_.jsx(Q0,{to:"/",replace:!0})})]})}),_.jsxs("nav",{className:"bottom-nav",children:[_.jsxs(fl,{to:"/",end:!0,className:({isActive:l})=>`nav-item ${l?"active":""}`,children:[_.jsx("span",{className:"nav-icon",children:"📦"}),_.jsx("span",{className:"nav-label",children:"Inventaire"})]}),_.jsxs(fl,{to:"/sale",className:({isActive:l})=>`nav-item ${l?"active":""}`,children:[_.jsx("span",{className:"nav-icon",children:"💰"}),_.jsx("span",{className:"nav-label",children:"Vente"})]}),_.jsxs(fl,{to:"/add",className:({isActive:l})=>`nav-item ${l?"active":""}`,children:[_.jsx("span",{className:"nav-icon",children:"➕"}),_.jsx("span",{className:"nav-label",children:"Ajouter"})]}),_.jsxs(fl,{to:"/about",className:({isActive:l})=>`nav-item ${l?"active":""}`,children:[_.jsx("span",{className:"nav-icon",children:"ℹ️"}),_.jsx("span",{className:"nav-label",children:"Info"})]})]})]}):_.jsx(MN,{})}function jN(){return _.jsx(pN,{children:_.jsx(FN,{})})}o0.createRoot(document.getElementById("root")).render(_.jsx(Og.StrictMode,{children:_.jsx(sE,{children:_.jsx(jN,{})})}));
