function Kw(r,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const a=Object.getOwnPropertyDescriptor(s,l);a&&Object.defineProperty(r,l,a.get?a:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function Pg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var oc={exports:{}},vs={},lc={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Qw(){if(tm)return se;tm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,F={};function A(I,L,ie){this.props=I,this.context=L,this.refs=F,this.updater=ie||P}A.prototype.isReactComponent={},A.prototype.setState=function(I,L){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,L,"setState")},A.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function Q(){}Q.prototype=A.prototype;function x(I,L,ie){this.props=I,this.context=L,this.refs=F,this.updater=ie||P}var z=x.prototype=new Q;z.constructor=x,R(z,A.prototype),z.isPureReactComponent=!0;var W=Array.isArray,ne=Object.prototype.hasOwnProperty,re={current:null},ge={key:!0,ref:!0,__self:!0,__source:!0};function Pe(I,L,ie){var ae,he={},fe=null,Ee=null;if(L!=null)for(ae in L.ref!==void 0&&(Ee=L.ref),L.key!==void 0&&(fe=""+L.key),L)ne.call(L,ae)&&!ge.hasOwnProperty(ae)&&(he[ae]=L[ae]);var _e=arguments.length-2;if(_e===1)he.children=ie;else if(1<_e){for(var Ne=Array(_e),wt=0;wt<_e;wt++)Ne[wt]=arguments[wt+2];he.children=Ne}if(I&&I.defaultProps)for(ae in _e=I.defaultProps,_e)he[ae]===void 0&&(he[ae]=_e[ae]);return{$$typeof:r,type:I,key:fe,ref:Ee,props:he,_owner:re.current}}function Ye(I,L){return{$$typeof:r,type:I.type,key:L,ref:I.ref,props:I.props,_owner:I._owner}}function ce(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Tt(I){var L={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ie){return L[ie]})}var ze=/\/+/g;function yt(I,L){return typeof I=="object"&&I!==null&&I.key!=null?Tt(""+I.key):L.toString(36)}function Lt(I,L,ie,ae,he){var fe=typeof I;(fe==="undefined"||fe==="boolean")&&(I=null);var Ee=!1;if(I===null)Ee=!0;else switch(fe){case"string":case"number":Ee=!0;break;case"object":switch(I.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=I,he=he(Ee),I=ae===""?"."+yt(Ee,0):ae,W(he)?(ie="",I!=null&&(ie=I.replace(ze,"$&/")+"/"),Lt(he,L,ie,"",function(wt){return wt})):he!=null&&(ce(he)&&(he=Ye(he,ie+(!he.key||Ee&&Ee.key===he.key?"":(""+he.key).replace(ze,"$&/")+"/")+I)),L.push(he)),1;if(Ee=0,ae=ae===""?".":ae+":",W(I))for(var _e=0;_e<I.length;_e++){fe=I[_e];var Ne=ae+yt(fe,_e);Ee+=Lt(fe,L,ie,Ne,he)}else if(Ne=w(I),typeof Ne=="function")for(I=Ne.call(I),_e=0;!(fe=I.next()).done;)fe=fe.value,Ne=ae+yt(fe,_e++),Ee+=Lt(fe,L,ie,Ne,he);else if(fe==="object")throw L=String(I),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Yt(I,L,ie){if(I==null)return I;var ae=[],he=0;return Lt(I,ae,"","",function(fe){return L.call(ie,fe,he++)}),ae}function dt(I){if(I._status===-1){var L=I._result;L=L(),L.then(function(ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=ie)},function(ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=ie)}),I._status===-1&&(I._status=0,I._result=L)}if(I._status===1)return I._result.default;throw I._result}var De={current:null},B={transition:null},X={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:B,ReactCurrentOwner:re};function $(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:Yt,forEach:function(I,L,ie){Yt(I,function(){L.apply(this,arguments)},ie)},count:function(I){var L=0;return Yt(I,function(){L++}),L},toArray:function(I){return Yt(I,function(L){return L})||[]},only:function(I){if(!ce(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},se.Component=A,se.Fragment=n,se.Profiler=l,se.PureComponent=x,se.StrictMode=s,se.Suspense=p,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,se.act=$,se.cloneElement=function(I,L,ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var ae=R({},I.props),he=I.key,fe=I.ref,Ee=I._owner;if(L!=null){if(L.ref!==void 0&&(fe=L.ref,Ee=re.current),L.key!==void 0&&(he=""+L.key),I.type&&I.type.defaultProps)var _e=I.type.defaultProps;for(Ne in L)ne.call(L,Ne)&&!ge.hasOwnProperty(Ne)&&(ae[Ne]=L[Ne]===void 0&&_e!==void 0?_e[Ne]:L[Ne])}var Ne=arguments.length-2;if(Ne===1)ae.children=ie;else if(1<Ne){_e=Array(Ne);for(var wt=0;wt<Ne;wt++)_e[wt]=arguments[wt+2];ae.children=_e}return{$$typeof:r,type:I.type,key:he,ref:fe,props:ae,_owner:Ee}},se.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:a,_context:I},I.Consumer=I},se.createElement=Pe,se.createFactory=function(I){var L=Pe.bind(null,I);return L.type=I,L},se.createRef=function(){return{current:null}},se.forwardRef=function(I){return{$$typeof:f,render:I}},se.isValidElement=ce,se.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:dt}},se.memo=function(I,L){return{$$typeof:g,type:I,compare:L===void 0?null:L}},se.startTransition=function(I){var L=B.transition;B.transition={};try{I()}finally{B.transition=L}},se.unstable_act=$,se.useCallback=function(I,L){return De.current.useCallback(I,L)},se.useContext=function(I){return De.current.useContext(I)},se.useDebugValue=function(){},se.useDeferredValue=function(I){return De.current.useDeferredValue(I)},se.useEffect=function(I,L){return De.current.useEffect(I,L)},se.useId=function(){return De.current.useId()},se.useImperativeHandle=function(I,L,ie){return De.current.useImperativeHandle(I,L,ie)},se.useInsertionEffect=function(I,L){return De.current.useInsertionEffect(I,L)},se.useLayoutEffect=function(I,L){return De.current.useLayoutEffect(I,L)},se.useMemo=function(I,L){return De.current.useMemo(I,L)},se.useReducer=function(I,L,ie){return De.current.useReducer(I,L,ie)},se.useRef=function(I){return De.current.useRef(I)},se.useState=function(I){return De.current.useState(I)},se.useSyncExternalStore=function(I,L,ie){return De.current.useSyncExternalStore(I,L,ie)},se.useTransition=function(){return De.current.useTransition()},se.version="18.3.1",se}var nm;function td(){return nm||(nm=1,lc.exports=Qw()),lc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Yw(){if(rm)return vs;rm=1;var r=td(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,g){var v,_={},w=null,P=null;g!==void 0&&(w=""+g),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(P=p.ref);for(v in p)s.call(p,v)&&!a.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:w,ref:P,props:_,_owner:l.current}}return vs.Fragment=n,vs.jsx=c,vs.jsxs=c,vs}var im;function Jw(){return im||(im=1,oc.exports=Yw()),oc.exports}var S=Jw(),O=td();const Rg=Pg(O),Xw=Kw({__proto__:null,default:Rg},[O]);var hl={},ac={exports:{}},_t={},uc={exports:{}},cc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Zw(){return sm||(sm=1,(function(r){function e(B,X){var $=B.length;B.push(X);e:for(;0<$;){var I=$-1>>>1,L=B[I];if(0<l(L,X))B[I]=X,B[$]=L,$=I;else break e}}function n(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var X=B[0],$=B.pop();if($!==X){B[0]=$;e:for(var I=0,L=B.length,ie=L>>>1;I<ie;){var ae=2*(I+1)-1,he=B[ae],fe=ae+1,Ee=B[fe];if(0>l(he,$))fe<L&&0>l(Ee,he)?(B[I]=Ee,B[fe]=$,I=fe):(B[I]=he,B[ae]=$,I=ae);else if(fe<L&&0>l(Ee,$))B[I]=Ee,B[fe]=$,I=fe;else break e}}return X}function l(B,X){var $=B.sortIndex-X.sortIndex;return $!==0?$:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,_=null,w=3,P=!1,R=!1,F=!1,A=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(B){for(var X=n(g);X!==null;){if(X.callback===null)s(g);else if(X.startTime<=B)s(g),X.sortIndex=X.expirationTime,e(p,X);else break;X=n(g)}}function W(B){if(F=!1,z(B),!R)if(n(p)!==null)R=!0,dt(ne);else{var X=n(g);X!==null&&De(W,X.startTime-B)}}function ne(B,X){R=!1,F&&(F=!1,Q(Pe),Pe=-1),P=!0;var $=w;try{for(z(X),_=n(p);_!==null&&(!(_.expirationTime>X)||B&&!Tt());){var I=_.callback;if(typeof I=="function"){_.callback=null,w=_.priorityLevel;var L=I(_.expirationTime<=X);X=r.unstable_now(),typeof L=="function"?_.callback=L:_===n(p)&&s(p),z(X)}else s(p);_=n(p)}if(_!==null)var ie=!0;else{var ae=n(g);ae!==null&&De(W,ae.startTime-X),ie=!1}return ie}finally{_=null,w=$,P=!1}}var re=!1,ge=null,Pe=-1,Ye=5,ce=-1;function Tt(){return!(r.unstable_now()-ce<Ye)}function ze(){if(ge!==null){var B=r.unstable_now();ce=B;var X=!0;try{X=ge(!0,B)}finally{X?yt():(re=!1,ge=null)}}else re=!1}var yt;if(typeof x=="function")yt=function(){x(ze)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Yt=Lt.port2;Lt.port1.onmessage=ze,yt=function(){Yt.postMessage(null)}}else yt=function(){A(ze,0)};function dt(B){ge=B,re||(re=!0,yt())}function De(B,X){Pe=A(function(){B(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_continueExecution=function(){R||P||(R=!0,dt(ne))},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ye=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(B){switch(w){case 1:case 2:case 3:var X=3;break;default:X=w}var $=w;w=X;try{return B()}finally{w=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=w;w=B;try{return X()}finally{w=$}},r.unstable_scheduleCallback=function(B,X,$){var I=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?I+$:I):$=I,B){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=$+L,B={id:v++,callback:X,priorityLevel:B,startTime:$,expirationTime:L,sortIndex:-1},$>I?(B.sortIndex=$,e(g,B),n(p)===null&&B===n(g)&&(F?(Q(Pe),Pe=-1):F=!0,De(W,$-I))):(B.sortIndex=L,e(p,B),R||P||(R=!0,dt(ne))),B},r.unstable_shouldYield=Tt,r.unstable_wrapCallback=function(B){var X=w;return function(){var $=w;w=X;try{return B.apply(this,arguments)}finally{w=$}}}})(cc)),cc}var om;function e0(){return om||(om=1,uc.exports=Zw()),uc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function t0(){if(lm)return _t;lm=1;var r=td(),e=e0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function a(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function w(t){return p.call(_,t)?!0:p.call(v,t)?!1:g.test(t)?_[t]=!0:(v[t]=!0,!1)}function P(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,o,u){if(i===null||typeof i>"u"||P(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function F(t,i,o,u,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){A[t]=new F(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];A[i]=new F(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){A[t]=new F(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){A[t]=new F(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){A[t]=new F(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){A[t]=new F(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){A[t]=new F(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){A[t]=new F(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){A[t]=new F(t,5,!1,t.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function x(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(Q,x);A[i]=new F(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(Q,x);A[i]=new F(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(Q,x);A[i]=new F(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){A[t]=new F(t,1,!1,t.toLowerCase(),null,!1,!1)}),A.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){A[t]=new F(t,1,!1,t.toLowerCase(),null,!0,!0)});function z(t,i,o,u){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,o,d,u)&&(o=null),u||d===null?w(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var W=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ne=Symbol.for("react.element"),re=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),Pe=Symbol.for("react.strict_mode"),Ye=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),Tt=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),yt=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),Yt=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),B=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,I;function L(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var ie=!1;function ae(t,i){if(!t||ie)return"";ie=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(N){var u=N}Reflect.construct(t,[],i)}else{try{i.call()}catch(N){u=N}t.call(i.prototype)}else{try{throw Error()}catch(N){u=N}t()}}catch(N){if(N&&u&&typeof N.stack=="string"){for(var d=N.stack.split(`
`),h=u.stack.split(`
`),m=d.length-1,y=h.length-1;1<=m&&0<=y&&d[m]!==h[y];)y--;for(;1<=m&&0<=y;m--,y--)if(d[m]!==h[y]){if(m!==1||y!==1)do if(m--,y--,0>y||d[m]!==h[y]){var E=`
`+d[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=y);break}}}finally{ie=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?L(t):""}function he(t){switch(t.tag){case 5:return L(t.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function fe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ge:return"Fragment";case re:return"Portal";case Ye:return"Profiler";case Pe:return"StrictMode";case yt:return"Suspense";case Lt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tt:return(t.displayName||"Context")+".Consumer";case ce:return(t._context.displayName||"Context")+".Provider";case ze:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yt:return i=t.displayName||null,i!==null?i:fe(t.type)||"Memo";case dt:i=t._payload,t=t._init;try{return fe(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===Pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function wt(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){u=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(m){u=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function to(t){t._valueTracker||(t._valueTracker=wt(t))}function oh(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ne(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function no(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fa(t,i){var o=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function lh(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=_e(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ah(t,i){i=i.checked,i!=null&&z(t,"checked",i,!1)}function pa(t,i){ah(t,i);var o=_e(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ma(t,i.type,o):i.hasOwnProperty("defaultValue")&&ma(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function uh(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ma(t,i,o){(i!=="number"||no(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Di=Array.isArray;function Dr(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+_e(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ga(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ch(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Di(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:_e(o)}}function dh(t,i){var o=_e(i.value),u=_e(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function hh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,ph=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Li(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){Xv.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Mi[i]=Mi[t]})});function mh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+i).trim():i+"px"}function gh(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=mh(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var Zv=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(t,i){if(i){if(Zv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ya(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wa=null;function Ea(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ca=null,Lr=null,Mr=null;function _h(t){if(t=rs(t)){if(typeof Ca!="function")throw Error(n(280));var i=t.stateNode;i&&(i=No(i),Ca(t.stateNode,t.type,i))}}function vh(t){Lr?Mr?Mr.push(t):Mr=[t]:Lr=t}function yh(){if(Lr){var t=Lr,i=Mr;if(Mr=Lr=null,_h(t),i)for(t=0;t<i.length;t++)_h(i[t])}}function wh(t,i){return t(i)}function Eh(){}var Sa=!1;function Ch(t,i,o){if(Sa)return t(i,o);Sa=!0;try{return wh(t,i,o)}finally{Sa=!1,(Lr!==null||Mr!==null)&&(Eh(),yh())}}function bi(t,i){var o=t.stateNode;if(o===null)return null;var u=No(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ia=!1;if(f)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{Ia=!1}function ey(t,i,o,u,d,h,m,y,E){var N=Array.prototype.slice.call(arguments,3);try{i.apply(o,N)}catch(M){this.onError(M)}}var Ui=!1,io=null,so=!1,Ta=null,ty={onError:function(t){Ui=!0,io=t}};function ny(t,i,o,u,d,h,m,y,E){Ui=!1,io=null,ey.apply(ty,arguments)}function ry(t,i,o,u,d,h,m,y,E){if(ny.apply(this,arguments),Ui){if(Ui){var N=io;Ui=!1,io=null}else throw Error(n(198));so||(so=!0,Ta=N)}}function lr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Sh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ih(t){if(lr(t)!==t)throw Error(n(188))}function iy(t){var i=t.alternate;if(!i){if(i=lr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Ih(d),t;if(h===u)return Ih(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=h;else{for(var m=!1,y=d.child;y;){if(y===o){m=!0,o=d,u=h;break}if(y===u){m=!0,u=d,o=h;break}y=y.sibling}if(!m){for(y=h.child;y;){if(y===o){m=!0,o=h,u=d;break}if(y===u){m=!0,u=h,o=d;break}y=y.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Th(t){return t=iy(t),t!==null?kh(t):null}function kh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=kh(t);if(i!==null)return i;t=t.sibling}return null}var Nh=e.unstable_scheduleCallback,xh=e.unstable_cancelCallback,sy=e.unstable_shouldYield,oy=e.unstable_requestPaint,Fe=e.unstable_now,ly=e.unstable_getCurrentPriorityLevel,ka=e.unstable_ImmediatePriority,Ph=e.unstable_UserBlockingPriority,oo=e.unstable_NormalPriority,ay=e.unstable_LowPriority,Rh=e.unstable_IdlePriority,lo=null,Jt=null;function uy(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(lo,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:hy,cy=Math.log,dy=Math.LN2;function hy(t){return t>>>=0,t===0?32:31-(cy(t)/dy|0)|0}var ao=64,uo=4194304;function ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function co(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var y=m&~d;y!==0?u=ji(y):(h&=m,h!==0&&(u=ji(h)))}else m=o&~d,m!==0?u=ji(m):h!==0&&(u=ji(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Mt(i),d=1<<o,u|=t[o],i&=~d;return u}function fy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function py(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Mt(h),y=1<<m,E=d[m];E===-1?((y&o)===0||(y&u)!==0)&&(d[m]=fy(y,i)):E<=i&&(t.expiredLanes|=y),h&=~y}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ah(){var t=ao;return ao<<=1,(ao&4194240)===0&&(ao=64),t}function xa(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function zi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=o}function my(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Mt(o),h=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~h}}function Pa(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Mt(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var ve=0;function Oh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Dh,Ra,Lh,Mh,bh,Aa=!1,ho=[],In=null,Tn=null,kn=null,Wi=new Map,Bi=new Map,Nn=[],gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,i){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Wi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(i.pointerId)}}function Vi(t,i,o,u,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:h,targetContainers:[d]},i!==null&&(i=rs(i),i!==null&&Ra(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function _y(t,i,o,u,d){switch(i){case"focusin":return In=Vi(In,t,i,o,u,d),!0;case"dragenter":return Tn=Vi(Tn,t,i,o,u,d),!0;case"mouseover":return kn=Vi(kn,t,i,o,u,d),!0;case"pointerover":var h=d.pointerId;return Wi.set(h,Vi(Wi.get(h)||null,t,i,o,u,d)),!0;case"gotpointercapture":return h=d.pointerId,Bi.set(h,Vi(Bi.get(h)||null,t,i,o,u,d)),!0}return!1}function Uh(t){var i=ar(t.target);if(i!==null){var o=lr(i);if(o!==null){if(i=o.tag,i===13){if(i=Sh(o),i!==null){t.blockedOn=i,bh(t.priority,function(){Lh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Da(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);wa=u,o.target.dispatchEvent(u),wa=null}else return i=rs(o),i!==null&&Ra(i),t.blockedOn=o,!1;i.shift()}return!0}function jh(t,i,o){fo(t)&&o.delete(i)}function vy(){Aa=!1,In!==null&&fo(In)&&(In=null),Tn!==null&&fo(Tn)&&(Tn=null),kn!==null&&fo(kn)&&(kn=null),Wi.forEach(jh),Bi.forEach(jh)}function Hi(t,i){t.blockedOn===i&&(t.blockedOn=null,Aa||(Aa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vy)))}function $i(t){function i(d){return Hi(d,t)}if(0<ho.length){Hi(ho[0],t);for(var o=1;o<ho.length;o++){var u=ho[o];u.blockedOn===t&&(u.blockedOn=null)}}for(In!==null&&Hi(In,t),Tn!==null&&Hi(Tn,t),kn!==null&&Hi(kn,t),Wi.forEach(i),Bi.forEach(i),o=0;o<Nn.length;o++)u=Nn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Nn.length&&(o=Nn[0],o.blockedOn===null);)Uh(o),o.blockedOn===null&&Nn.shift()}var br=W.ReactCurrentBatchConfig,po=!0;function yy(t,i,o,u){var d=ve,h=br.transition;br.transition=null;try{ve=1,Oa(t,i,o,u)}finally{ve=d,br.transition=h}}function wy(t,i,o,u){var d=ve,h=br.transition;br.transition=null;try{ve=4,Oa(t,i,o,u)}finally{ve=d,br.transition=h}}function Oa(t,i,o,u){if(po){var d=Da(t,i,o,u);if(d===null)Ya(t,i,u,mo,o),Fh(t,u);else if(_y(d,t,i,o,u))u.stopPropagation();else if(Fh(t,u),i&4&&-1<gy.indexOf(t)){for(;d!==null;){var h=rs(d);if(h!==null&&Dh(h),h=Da(t,i,o,u),h===null&&Ya(t,i,u,mo,o),h===d)break;d=h}d!==null&&u.stopPropagation()}else Ya(t,i,u,null,o)}}var mo=null;function Da(t,i,o,u){if(mo=null,t=Ea(u),t=ar(t),t!==null)if(i=lr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Sh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return mo=t,null}function zh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ly()){case ka:return 1;case Ph:return 4;case oo:case ay:return 16;case Rh:return 536870912;default:return 16}default:return 16}}var xn=null,La=null,go=null;function Wh(){if(go)return go;var t,i=La,o=i.length,u,d="value"in xn?xn.value:xn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(u=1;u<=m&&i[o-u]===d[h-u];u++);return go=d.slice(t,1<u?1-u:void 0)}function _o(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function vo(){return!0}function Bh(){return!1}function Et(t){function i(o,u,d,h,m){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?vo:Bh,this.isPropagationStopped=Bh,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),i}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=Et(Fr),Gi=$({},Fr,{view:0,detail:0}),Ey=Et(Gi),ba,Fa,qi,yo=$({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ja,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(ba=t.screenX-qi.screenX,Fa=t.screenY-qi.screenY):Fa=ba=0,qi=t),ba)},movementY:function(t){return"movementY"in t?t.movementY:Fa}}),Vh=Et(yo),Cy=$({},yo,{dataTransfer:0}),Sy=Et(Cy),Iy=$({},Gi,{relatedTarget:0}),Ua=Et(Iy),Ty=$({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),ky=Et(Ty),Ny=$({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xy=Et(Ny),Py=$({},Fr,{data:0}),Hh=Et(Py),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Oy[t])?!!i[t]:!1}function ja(){return Dy}var Ly=$({},Gi,{key:function(t){if(t.key){var i=Ry[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=_o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ja,charCode:function(t){return t.type==="keypress"?_o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),My=Et(Ly),by=$({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Et(by),Fy=$({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ja}),Uy=Et(Fy),jy=$({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zy=Et(jy),Wy=$({},yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),By=Et(Wy),Vy=[9,13,27,32],za=f&&"CompositionEvent"in window,Ki=null;f&&"documentMode"in document&&(Ki=document.documentMode);var Hy=f&&"TextEvent"in window&&!Ki,Gh=f&&(!za||Ki&&8<Ki&&11>=Ki),qh=" ",Kh=!1;function Qh(t,i){switch(t){case"keyup":return Vy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function $y(t,i){switch(t){case"compositionend":return Yh(i);case"keypress":return i.which!==32?null:(Kh=!0,qh);case"textInput":return t=i.data,t===qh&&Kh?null:t;default:return null}}function Gy(t,i){if(Ur)return t==="compositionend"||!za&&Qh(t,i)?(t=Wh(),go=La=xn=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gh&&i.locale!=="ko"?null:i.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!qy[t.type]:i==="textarea"}function Xh(t,i,o,u){vh(u),i=Io(i,"onChange"),0<i.length&&(o=new Ma("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var Qi=null,Yi=null;function Ky(t){_f(t,0)}function wo(t){var i=Vr(t);if(oh(i))return t}function Qy(t,i){if(t==="change")return i}var Zh=!1;if(f){var Wa;if(f){var Ba="oninput"in document;if(!Ba){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),Ba=typeof ef.oninput=="function"}Wa=Ba}else Wa=!1;Zh=Wa&&(!document.documentMode||9<document.documentMode)}function tf(){Qi&&(Qi.detachEvent("onpropertychange",nf),Yi=Qi=null)}function nf(t){if(t.propertyName==="value"&&wo(Yi)){var i=[];Xh(i,Yi,t,Ea(t)),Ch(Ky,i)}}function Yy(t,i,o){t==="focusin"?(tf(),Qi=i,Yi=o,Qi.attachEvent("onpropertychange",nf)):t==="focusout"&&tf()}function Jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wo(Yi)}function Xy(t,i){if(t==="click")return wo(i)}function Zy(t,i){if(t==="input"||t==="change")return wo(i)}function ew(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bt=typeof Object.is=="function"?Object.is:ew;function Ji(t,i){if(bt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!p.call(i,d)||!bt(t[d],i[d]))return!1}return!0}function rf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sf(t,i){var o=rf(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=rf(o)}}function of(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?of(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function lf(){for(var t=window,i=no();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=no(t.document)}return i}function Va(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function tw(t){var i=lf(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&of(o.ownerDocument.documentElement,o)){if(u!==null&&Va(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(u.start,d);u=u.end===void 0?h:Math.min(u.end,d),!t.extend&&h>u&&(d=u,u=h,h=d),d=sf(o,h);var m=sf(o,u);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>u?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nw=f&&"documentMode"in document&&11>=document.documentMode,jr=null,Ha=null,Xi=null,$a=!1;function af(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$a||jr==null||jr!==no(u)||(u=jr,"selectionStart"in u&&Va(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xi&&Ji(Xi,u)||(Xi=u,u=Io(Ha,"onSelect"),0<u.length&&(i=new Ma("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=jr)))}function Eo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var zr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Ga={},uf={};f&&(uf=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Co(t){if(Ga[t])return Ga[t];if(!zr[t])return t;var i=zr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in uf)return Ga[t]=i[o];return t}var cf=Co("animationend"),df=Co("animationiteration"),hf=Co("animationstart"),ff=Co("transitionend"),pf=new Map,mf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(t,i){pf.set(t,i),a(i,[t])}for(var qa=0;qa<mf.length;qa++){var Ka=mf[qa],rw=Ka.toLowerCase(),iw=Ka[0].toUpperCase()+Ka.slice(1);Pn(rw,"on"+iw)}Pn(cf,"onAnimationEnd"),Pn(df,"onAnimationIteration"),Pn(hf,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(ff,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function gf(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,ry(u,i,void 0,t),t.currentTarget=null}function _f(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var m=u.length-1;0<=m;m--){var y=u[m],E=y.instance,N=y.currentTarget;if(y=y.listener,E!==h&&d.isPropagationStopped())break e;gf(d,y,N),h=E}else for(m=0;m<u.length;m++){if(y=u[m],E=y.instance,N=y.currentTarget,y=y.listener,E!==h&&d.isPropagationStopped())break e;gf(d,y,N),h=E}}}if(so)throw t=Ta,so=!1,Ta=null,t}function Te(t,i){var o=i[nu];o===void 0&&(o=i[nu]=new Set);var u=t+"__bubble";o.has(u)||(vf(i,t,2,!1),o.add(u))}function Qa(t,i,o){var u=0;i&&(u|=4),vf(o,t,u,i)}var So="_reactListening"+Math.random().toString(36).slice(2);function es(t){if(!t[So]){t[So]=!0,s.forEach(function(o){o!=="selectionchange"&&(sw.has(o)||Qa(o,!1,t),Qa(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[So]||(i[So]=!0,Qa("selectionchange",!1,i))}}function vf(t,i,o,u){switch(zh(i)){case 1:var d=yy;break;case 4:d=wy;break;default:d=Oa}o=d.bind(null,i,o,t),d=void 0,!Ia||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Ya(t,i,o,u,d){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var m=u.tag;if(m===3||m===4){var y=u.stateNode.containerInfo;if(y===d||y.nodeType===8&&y.parentNode===d)break;if(m===4)for(m=u.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;m=m.return}for(;y!==null;){if(m=ar(y),m===null)return;if(E=m.tag,E===5||E===6){u=h=m;continue e}y=y.parentNode}}u=u.return}Ch(function(){var N=h,M=Ea(o),b=[];e:{var D=pf.get(t);if(D!==void 0){var V=Ma,G=t;switch(t){case"keypress":if(_o(o)===0)break e;case"keydown":case"keyup":V=My;break;case"focusin":G="focus",V=Ua;break;case"focusout":G="blur",V=Ua;break;case"beforeblur":case"afterblur":V=Ua;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Uy;break;case cf:case df:case hf:V=ky;break;case ff:V=zy;break;case"scroll":V=Ey;break;case"wheel":V=By;break;case"copy":case"cut":case"paste":V=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=$h}var q=(i&4)!==0,Ue=!q&&t==="scroll",T=q?D!==null?D+"Capture":null:D;q=[];for(var C=N,k;C!==null;){k=C;var U=k.stateNode;if(k.tag===5&&U!==null&&(k=U,T!==null&&(U=bi(C,T),U!=null&&q.push(ts(C,U,k)))),Ue)break;C=C.return}0<q.length&&(D=new V(D,G,null,o,M),b.push({event:D,listeners:q}))}}if((i&7)===0){e:{if(D=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",D&&o!==wa&&(G=o.relatedTarget||o.fromElement)&&(ar(G)||G[on]))break e;if((V||D)&&(D=M.window===M?M:(D=M.ownerDocument)?D.defaultView||D.parentWindow:window,V?(G=o.relatedTarget||o.toElement,V=N,G=G?ar(G):null,G!==null&&(Ue=lr(G),G!==Ue||G.tag!==5&&G.tag!==6)&&(G=null)):(V=null,G=N),V!==G)){if(q=Vh,U="onMouseLeave",T="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&(q=$h,U="onPointerLeave",T="onPointerEnter",C="pointer"),Ue=V==null?D:Vr(V),k=G==null?D:Vr(G),D=new q(U,C+"leave",V,o,M),D.target=Ue,D.relatedTarget=k,U=null,ar(M)===N&&(q=new q(T,C+"enter",G,o,M),q.target=k,q.relatedTarget=Ue,U=q),Ue=U,V&&G)t:{for(q=V,T=G,C=0,k=q;k;k=Wr(k))C++;for(k=0,U=T;U;U=Wr(U))k++;for(;0<C-k;)q=Wr(q),C--;for(;0<k-C;)T=Wr(T),k--;for(;C--;){if(q===T||T!==null&&q===T.alternate)break t;q=Wr(q),T=Wr(T)}q=null}else q=null;V!==null&&yf(b,D,V,q,!1),G!==null&&Ue!==null&&yf(b,Ue,G,q,!0)}}e:{if(D=N?Vr(N):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var K=Qy;else if(Jh(D))if(Zh)K=Zy;else{K=Jy;var Y=Yy}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(K=Xy);if(K&&(K=K(t,N))){Xh(b,K,o,M);break e}Y&&Y(t,D,N),t==="focusout"&&(Y=D._wrapperState)&&Y.controlled&&D.type==="number"&&ma(D,"number",D.value)}switch(Y=N?Vr(N):window,t){case"focusin":(Jh(Y)||Y.contentEditable==="true")&&(jr=Y,Ha=N,Xi=null);break;case"focusout":Xi=Ha=jr=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,af(b,o,M);break;case"selectionchange":if(nw)break;case"keydown":case"keyup":af(b,o,M)}var J;if(za)e:{switch(t){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Ur?Qh(t,o)&&(ee="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(Gh&&o.locale!=="ko"&&(Ur||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ur&&(J=Wh()):(xn=M,La="value"in xn?xn.value:xn.textContent,Ur=!0)),Y=Io(N,ee),0<Y.length&&(ee=new Hh(ee,t,null,o,M),b.push({event:ee,listeners:Y}),J?ee.data=J:(J=Yh(o),J!==null&&(ee.data=J)))),(J=Hy?$y(t,o):Gy(t,o))&&(N=Io(N,"onBeforeInput"),0<N.length&&(M=new Hh("onBeforeInput","beforeinput",null,o,M),b.push({event:M,listeners:N}),M.data=J))}_f(b,i)})}function ts(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Io(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=bi(t,o),h!=null&&u.unshift(ts(t,h,d)),h=bi(t,i),h!=null&&u.push(ts(t,h,d))),t=t.return}return u}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yf(t,i,o,u,d){for(var h=i._reactName,m=[];o!==null&&o!==u;){var y=o,E=y.alternate,N=y.stateNode;if(E!==null&&E===u)break;y.tag===5&&N!==null&&(y=N,d?(E=bi(o,h),E!=null&&m.unshift(ts(o,E,y))):d||(E=bi(o,h),E!=null&&m.push(ts(o,E,y)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var ow=/\r\n?/g,lw=/\u0000|\uFFFD/g;function wf(t){return(typeof t=="string"?t:""+t).replace(ow,`
`).replace(lw,"")}function To(t,i,o){if(i=wf(i),wf(t)!==i&&o)throw Error(n(425))}function ko(){}var Ja=null,Xa=null;function Za(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,aw=typeof clearTimeout=="function"?clearTimeout:void 0,Ef=typeof Promise=="function"?Promise:void 0,uw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ef<"u"?function(t){return Ef.resolve(null).then(t).catch(cw)}:eu;function cw(t){setTimeout(function(){throw t})}function tu(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),$i(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);$i(i)}function Rn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Cf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Br,ns="__reactProps$"+Br,on="__reactContainer$"+Br,nu="__reactEvents$"+Br,dw="__reactListeners$"+Br,hw="__reactHandles$"+Br;function ar(t){var i=t[Xt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[on]||o[Xt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Cf(t);t!==null;){if(o=t[Xt])return o;t=Cf(t)}return i}t=o,o=t.parentNode}return null}function rs(t){return t=t[Xt]||t[on],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function No(t){return t[ns]||null}var ru=[],Hr=-1;function An(t){return{current:t}}function ke(t){0>Hr||(t.current=ru[Hr],ru[Hr]=null,Hr--)}function Ce(t,i){Hr++,ru[Hr]=t.current,t.current=i}var On={},tt=An(On),ht=An(!1),ur=On;function $r(t,i){var o=t.type.contextTypes;if(!o)return On;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ft(t){return t=t.childContextTypes,t!=null}function xo(){ke(ht),ke(tt)}function Sf(t,i,o){if(tt.current!==On)throw Error(n(168));Ce(tt,i),Ce(ht,o)}function If(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return $({},o,u)}function Po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,ur=tt.current,Ce(tt,t),Ce(ht,ht.current),!0}function Tf(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=If(t,i,ur),u.__reactInternalMemoizedMergedChildContext=t,ke(ht),ke(tt),Ce(tt,t)):ke(ht),Ce(ht,o)}var ln=null,Ro=!1,iu=!1;function kf(t){ln===null?ln=[t]:ln.push(t)}function fw(t){Ro=!0,kf(t)}function Dn(){if(!iu&&ln!==null){iu=!0;var t=0,i=ve;try{var o=ln;for(ve=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}ln=null,Ro=!1}catch(d){throw ln!==null&&(ln=ln.slice(t+1)),Nh(ka,Dn),d}finally{ve=i,iu=!1}}return null}var Gr=[],qr=0,Ao=null,Oo=0,kt=[],Nt=0,cr=null,an=1,un="";function dr(t,i){Gr[qr++]=Oo,Gr[qr++]=Ao,Ao=t,Oo=i}function Nf(t,i,o){kt[Nt++]=an,kt[Nt++]=un,kt[Nt++]=cr,cr=t;var u=an;t=un;var d=32-Mt(u)-1;u&=~(1<<d),o+=1;var h=32-Mt(i)+d;if(30<h){var m=d-d%5;h=(u&(1<<m)-1).toString(32),u>>=m,d-=m,an=1<<32-Mt(i)+d|o<<d|u,un=h+t}else an=1<<h|o<<d|u,un=t}function su(t){t.return!==null&&(dr(t,1),Nf(t,1,0))}function ou(t){for(;t===Ao;)Ao=Gr[--qr],Gr[qr]=null,Oo=Gr[--qr],Gr[qr]=null;for(;t===cr;)cr=kt[--Nt],kt[Nt]=null,un=kt[--Nt],kt[Nt]=null,an=kt[--Nt],kt[Nt]=null}var Ct=null,St=null,xe=!1,Ft=null;function xf(t,i){var o=At(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Pf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Ct=t,St=Rn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Ct=t,St=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=cr!==null?{id:an,overflow:un}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=At(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Ct=t,St=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(xe){var i=St;if(i){var o=i;if(!Pf(t,i)){if(lu(t))throw Error(n(418));i=Rn(o.nextSibling);var u=Ct;i&&Pf(t,i)?xf(u,o):(t.flags=t.flags&-4097|2,xe=!1,Ct=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,xe=!1,Ct=t}}}function Rf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Do(t){if(t!==Ct)return!1;if(!xe)return Rf(t),xe=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Za(t.type,t.memoizedProps)),i&&(i=St)){if(lu(t))throw Af(),Error(n(418));for(;i;)xf(t,i),i=Rn(i.nextSibling)}if(Rf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){St=Rn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}St=null}}else St=Ct?Rn(t.stateNode.nextSibling):null;return!0}function Af(){for(var t=St;t;)t=Rn(t.nextSibling)}function Kr(){St=Ct=null,xe=!1}function uu(t){Ft===null?Ft=[t]:Ft.push(t)}var pw=W.ReactCurrentBatchConfig;function is(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var y=d.refs;m===null?delete y[h]:y[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Lo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Of(t){var i=t._init;return i(t._payload)}function Df(t){function i(T,C){if(t){var k=T.deletions;k===null?(T.deletions=[C],T.flags|=16):k.push(C)}}function o(T,C){if(!t)return null;for(;C!==null;)i(T,C),C=C.sibling;return null}function u(T,C){for(T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function d(T,C){return T=Wn(T,C),T.index=0,T.sibling=null,T}function h(T,C,k){return T.index=k,t?(k=T.alternate,k!==null?(k=k.index,k<C?(T.flags|=2,C):k):(T.flags|=2,C)):(T.flags|=1048576,C)}function m(T){return t&&T.alternate===null&&(T.flags|=2),T}function y(T,C,k,U){return C===null||C.tag!==6?(C=ec(k,T.mode,U),C.return=T,C):(C=d(C,k),C.return=T,C)}function E(T,C,k,U){var K=k.type;return K===ge?M(T,C,k.props.children,U,k.key):C!==null&&(C.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===dt&&Of(K)===C.type)?(U=d(C,k.props),U.ref=is(T,C,k),U.return=T,U):(U=il(k.type,k.key,k.props,null,T.mode,U),U.ref=is(T,C,k),U.return=T,U)}function N(T,C,k,U){return C===null||C.tag!==4||C.stateNode.containerInfo!==k.containerInfo||C.stateNode.implementation!==k.implementation?(C=tc(k,T.mode,U),C.return=T,C):(C=d(C,k.children||[]),C.return=T,C)}function M(T,C,k,U,K){return C===null||C.tag!==7?(C=yr(k,T.mode,U,K),C.return=T,C):(C=d(C,k),C.return=T,C)}function b(T,C,k){if(typeof C=="string"&&C!==""||typeof C=="number")return C=ec(""+C,T.mode,k),C.return=T,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ne:return k=il(C.type,C.key,C.props,null,T.mode,k),k.ref=is(T,null,C),k.return=T,k;case re:return C=tc(C,T.mode,k),C.return=T,C;case dt:var U=C._init;return b(T,U(C._payload),k)}if(Di(C)||X(C))return C=yr(C,T.mode,k,null),C.return=T,C;Lo(T,C)}return null}function D(T,C,k,U){var K=C!==null?C.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return K!==null?null:y(T,C,""+k,U);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:return k.key===K?E(T,C,k,U):null;case re:return k.key===K?N(T,C,k,U):null;case dt:return K=k._init,D(T,C,K(k._payload),U)}if(Di(k)||X(k))return K!==null?null:M(T,C,k,U,null);Lo(T,k)}return null}function V(T,C,k,U,K){if(typeof U=="string"&&U!==""||typeof U=="number")return T=T.get(k)||null,y(C,T,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ne:return T=T.get(U.key===null?k:U.key)||null,E(C,T,U,K);case re:return T=T.get(U.key===null?k:U.key)||null,N(C,T,U,K);case dt:var Y=U._init;return V(T,C,k,Y(U._payload),K)}if(Di(U)||X(U))return T=T.get(k)||null,M(C,T,U,K,null);Lo(C,U)}return null}function G(T,C,k,U){for(var K=null,Y=null,J=C,ee=C=0,qe=null;J!==null&&ee<k.length;ee++){J.index>ee?(qe=J,J=null):qe=J.sibling;var pe=D(T,J,k[ee],U);if(pe===null){J===null&&(J=qe);break}t&&J&&pe.alternate===null&&i(T,J),C=h(pe,C,ee),Y===null?K=pe:Y.sibling=pe,Y=pe,J=qe}if(ee===k.length)return o(T,J),xe&&dr(T,ee),K;if(J===null){for(;ee<k.length;ee++)J=b(T,k[ee],U),J!==null&&(C=h(J,C,ee),Y===null?K=J:Y.sibling=J,Y=J);return xe&&dr(T,ee),K}for(J=u(T,J);ee<k.length;ee++)qe=V(J,T,ee,k[ee],U),qe!==null&&(t&&qe.alternate!==null&&J.delete(qe.key===null?ee:qe.key),C=h(qe,C,ee),Y===null?K=qe:Y.sibling=qe,Y=qe);return t&&J.forEach(function(Bn){return i(T,Bn)}),xe&&dr(T,ee),K}function q(T,C,k,U){var K=X(k);if(typeof K!="function")throw Error(n(150));if(k=K.call(k),k==null)throw Error(n(151));for(var Y=K=null,J=C,ee=C=0,qe=null,pe=k.next();J!==null&&!pe.done;ee++,pe=k.next()){J.index>ee?(qe=J,J=null):qe=J.sibling;var Bn=D(T,J,pe.value,U);if(Bn===null){J===null&&(J=qe);break}t&&J&&Bn.alternate===null&&i(T,J),C=h(Bn,C,ee),Y===null?K=Bn:Y.sibling=Bn,Y=Bn,J=qe}if(pe.done)return o(T,J),xe&&dr(T,ee),K;if(J===null){for(;!pe.done;ee++,pe=k.next())pe=b(T,pe.value,U),pe!==null&&(C=h(pe,C,ee),Y===null?K=pe:Y.sibling=pe,Y=pe);return xe&&dr(T,ee),K}for(J=u(T,J);!pe.done;ee++,pe=k.next())pe=V(J,T,ee,pe.value,U),pe!==null&&(t&&pe.alternate!==null&&J.delete(pe.key===null?ee:pe.key),C=h(pe,C,ee),Y===null?K=pe:Y.sibling=pe,Y=pe);return t&&J.forEach(function(qw){return i(T,qw)}),xe&&dr(T,ee),K}function Ue(T,C,k,U){if(typeof k=="object"&&k!==null&&k.type===ge&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ne:e:{for(var K=k.key,Y=C;Y!==null;){if(Y.key===K){if(K=k.type,K===ge){if(Y.tag===7){o(T,Y.sibling),C=d(Y,k.props.children),C.return=T,T=C;break e}}else if(Y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===dt&&Of(K)===Y.type){o(T,Y.sibling),C=d(Y,k.props),C.ref=is(T,Y,k),C.return=T,T=C;break e}o(T,Y);break}else i(T,Y);Y=Y.sibling}k.type===ge?(C=yr(k.props.children,T.mode,U,k.key),C.return=T,T=C):(U=il(k.type,k.key,k.props,null,T.mode,U),U.ref=is(T,C,k),U.return=T,T=U)}return m(T);case re:e:{for(Y=k.key;C!==null;){if(C.key===Y)if(C.tag===4&&C.stateNode.containerInfo===k.containerInfo&&C.stateNode.implementation===k.implementation){o(T,C.sibling),C=d(C,k.children||[]),C.return=T,T=C;break e}else{o(T,C);break}else i(T,C);C=C.sibling}C=tc(k,T.mode,U),C.return=T,T=C}return m(T);case dt:return Y=k._init,Ue(T,C,Y(k._payload),U)}if(Di(k))return G(T,C,k,U);if(X(k))return q(T,C,k,U);Lo(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,C!==null&&C.tag===6?(o(T,C.sibling),C=d(C,k),C.return=T,T=C):(o(T,C),C=ec(k,T.mode,U),C.return=T,T=C),m(T)):o(T,C)}return Ue}var Qr=Df(!0),Lf=Df(!1),Mo=An(null),bo=null,Yr=null,cu=null;function du(){cu=Yr=bo=null}function hu(t){var i=Mo.current;ke(Mo),t._currentValue=i}function fu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function Jr(t,i){bo=t,cu=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(pt=!0),t.firstContext=null)}function xt(t){var i=t._currentValue;if(cu!==t)if(t={context:t,memoizedValue:i,next:null},Yr===null){if(bo===null)throw Error(n(308));Yr=t,bo.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return i}var hr=null;function pu(t){hr===null?hr=[t]:hr.push(t)}function Mf(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,pu(i)):(o.next=d.next,d.next=o),i.interleaved=o,cn(t,u)}function cn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Ln=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Mn(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(de&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,cn(t,o)}return d=u.interleaved,d===null?(i.next=i,pu(u)):(i.next=d.next,d.next=i),u.interleaved=i,cn(t,o)}function Fo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Pa(t,o)}}function Ff(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Uo(t,i,o,u){var d=t.updateQueue;Ln=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,y=d.shared.pending;if(y!==null){d.shared.pending=null;var E=y,N=E.next;E.next=null,m===null?h=N:m.next=N,m=E;var M=t.alternate;M!==null&&(M=M.updateQueue,y=M.lastBaseUpdate,y!==m&&(y===null?M.firstBaseUpdate=N:y.next=N,M.lastBaseUpdate=E))}if(h!==null){var b=d.baseState;m=0,M=N=E=null,y=h;do{var D=y.lane,V=y.eventTime;if((u&D)===D){M!==null&&(M=M.next={eventTime:V,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var G=t,q=y;switch(D=i,V=o,q.tag){case 1:if(G=q.payload,typeof G=="function"){b=G.call(V,b,D);break e}b=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=q.payload,D=typeof G=="function"?G.call(V,b,D):G,D==null)break e;b=$({},b,D);break e;case 2:Ln=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,D=d.effects,D===null?d.effects=[y]:D.push(y))}else V={eventTime:V,lane:D,tag:y.tag,payload:y.payload,callback:y.callback,next:null},M===null?(N=M=V,E=b):M=M.next=V,m|=D;if(y=y.next,y===null){if(y=d.shared.pending,y===null)break;D=y,y=D.next,D.next=null,d.lastBaseUpdate=D,d.shared.pending=null}}while(!0);if(M===null&&(E=b),d.baseState=E,d.firstBaseUpdate=N,d.lastBaseUpdate=M,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);mr|=m,t.lanes=m,t.memoizedState=b}}function Uf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var ss={},Zt=An(ss),os=An(ss),ls=An(ss);function fr(t){if(t===ss)throw Error(n(174));return t}function gu(t,i){switch(Ce(ls,i),Ce(os,t),Ce(Zt,ss),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_a(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=_a(i,t)}ke(Zt),Ce(Zt,i)}function Xr(){ke(Zt),ke(os),ke(ls)}function jf(t){fr(ls.current);var i=fr(Zt.current),o=_a(i,t.type);i!==o&&(Ce(os,t),Ce(Zt,o))}function _u(t){os.current===t&&(ke(Zt),ke(os))}var Re=An(0);function jo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var vu=[];function yu(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var zo=W.ReactCurrentDispatcher,wu=W.ReactCurrentBatchConfig,pr=0,Ae=null,We=null,$e=null,Wo=!1,as=!1,us=0,mw=0;function nt(){throw Error(n(321))}function Eu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!bt(t[o],i[o]))return!1;return!0}function Cu(t,i,o,u,d,h){if(pr=h,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zo.current=t===null||t.memoizedState===null?yw:ww,t=o(u,d),as){h=0;do{if(as=!1,us=0,25<=h)throw Error(n(301));h+=1,$e=We=null,i.updateQueue=null,zo.current=Ew,t=o(u,d)}while(as)}if(zo.current=Ho,i=We!==null&&We.next!==null,pr=0,$e=We=Ae=null,Wo=!1,i)throw Error(n(300));return t}function Su(){var t=us!==0;return us=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Ae.memoizedState=$e=t:$e=$e.next=t,$e}function Pt(){if(We===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var i=$e===null?Ae.memoizedState:$e.next;if(i!==null)$e=i,We=t;else{if(t===null)throw Error(n(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},$e===null?Ae.memoizedState=$e=t:$e=$e.next=t}return $e}function cs(t,i){return typeof i=="function"?i(t):i}function Iu(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=We,d=u.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}u.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,u=u.baseState;var y=m=null,E=null,N=h;do{var M=N.lane;if((pr&M)===M)E!==null&&(E=E.next={lane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),u=N.hasEagerState?N.eagerState:t(u,N.action);else{var b={lane:M,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null};E===null?(y=E=b,m=u):E=E.next=b,Ae.lanes|=M,mr|=M}N=N.next}while(N!==null&&N!==h);E===null?m=u:E.next=y,bt(u,i.memoizedState)||(pt=!0),i.memoizedState=u,i.baseState=m,i.baseQueue=E,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do h=d.lane,Ae.lanes|=h,mr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Tu(t){var i=Pt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);bt(h,i.memoizedState)||(pt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,u]}function zf(){}function Wf(t,i){var o=Ae,u=Pt(),d=i(),h=!bt(u.memoizedState,d);if(h&&(u.memoizedState=d,pt=!0),u=u.queue,ku(Hf.bind(null,o,u,t),[t]),u.getSnapshot!==i||h||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,ds(9,Vf.bind(null,o,u,d,i),void 0,null),Ge===null)throw Error(n(349));(pr&30)!==0||Bf(o,i,d)}return d}function Bf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Vf(t,i,o,u){i.value=o,i.getSnapshot=u,$f(i)&&Gf(t)}function Hf(t,i,o){return o(function(){$f(i)&&Gf(t)})}function $f(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!bt(t,o)}catch{return!0}}function Gf(t){var i=cn(t,1);i!==null&&Wt(i,t,1,-1)}function qf(t){var i=en();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:t},i.queue=t,t=t.dispatch=vw.bind(null,Ae,t),[i.memoizedState,t]}function ds(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Ae.updateQueue,i===null?(i={lastEffect:null,stores:null},Ae.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Kf(){return Pt().memoizedState}function Bo(t,i,o,u){var d=en();Ae.flags|=t,d.memoizedState=ds(1|i,o,void 0,u===void 0?null:u)}function Vo(t,i,o,u){var d=Pt();u=u===void 0?null:u;var h=void 0;if(We!==null){var m=We.memoizedState;if(h=m.destroy,u!==null&&Eu(u,m.deps)){d.memoizedState=ds(i,o,h,u);return}}Ae.flags|=t,d.memoizedState=ds(1|i,o,h,u)}function Qf(t,i){return Bo(8390656,8,t,i)}function ku(t,i){return Vo(2048,8,t,i)}function Yf(t,i){return Vo(4,2,t,i)}function Jf(t,i){return Vo(4,4,t,i)}function Xf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Zf(t,i,o){return o=o!=null?o.concat([t]):null,Vo(4,4,Xf.bind(null,i,t),o)}function Nu(){}function ep(t,i){var o=Pt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function tp(t,i){var o=Pt();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function np(t,i,o){return(pr&21)===0?(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=o):(bt(o,i)||(o=Ah(),Ae.lanes|=o,mr|=o,t.baseState=!0),i)}function gw(t,i){var o=ve;ve=o!==0&&4>o?o:4,t(!0);var u=wu.transition;wu.transition={};try{t(!1),i()}finally{ve=o,wu.transition=u}}function rp(){return Pt().memoizedState}function _w(t,i,o){var u=jn(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},ip(t))sp(i,o);else if(o=Mf(t,i,o,u),o!==null){var d=ot();Wt(o,t,u,d),op(o,i,u)}}function vw(t,i,o){var u=jn(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(ip(t))sp(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,y=h(m,o);if(d.hasEagerState=!0,d.eagerState=y,bt(y,m)){var E=i.interleaved;E===null?(d.next=d,pu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=Mf(t,i,d,u),o!==null&&(d=ot(),Wt(o,t,u,d),op(o,i,u))}}function ip(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function sp(t,i){as=Wo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function op(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,Pa(t,o)}}var Ho={readContext:xt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},yw={readContext:xt,useCallback:function(t,i){return en().memoizedState=[t,i===void 0?null:i],t},useContext:xt,useEffect:Qf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Bo(4194308,4,Xf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Bo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Bo(4,2,t,i)},useMemo:function(t,i){var o=en();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=en();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=_w.bind(null,Ae,t),[u.memoizedState,t]},useRef:function(t){var i=en();return t={current:t},i.memoizedState=t},useState:qf,useDebugValue:Nu,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=qf(!1),i=t[0];return t=gw.bind(null,t[1]),en().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Ae,d=en();if(xe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ge===null)throw Error(n(349));(pr&30)!==0||Bf(u,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Qf(Hf.bind(null,u,h,t),[t]),u.flags|=2048,ds(9,Vf.bind(null,u,h,o,i),void 0,null),o},useId:function(){var t=en(),i=Ge.identifierPrefix;if(xe){var o=un,u=an;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=us++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=mw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},ww={readContext:xt,useCallback:ep,useContext:xt,useEffect:ku,useImperativeHandle:Zf,useInsertionEffect:Yf,useLayoutEffect:Jf,useMemo:tp,useReducer:Iu,useRef:Kf,useState:function(){return Iu(cs)},useDebugValue:Nu,useDeferredValue:function(t){var i=Pt();return np(i,We.memoizedState,t)},useTransition:function(){var t=Iu(cs)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:zf,useSyncExternalStore:Wf,useId:rp,unstable_isNewReconciler:!1},Ew={readContext:xt,useCallback:ep,useContext:xt,useEffect:ku,useImperativeHandle:Zf,useInsertionEffect:Yf,useLayoutEffect:Jf,useMemo:tp,useReducer:Tu,useRef:Kf,useState:function(){return Tu(cs)},useDebugValue:Nu,useDeferredValue:function(t){var i=Pt();return We===null?i.memoizedState=t:np(i,We.memoizedState,t)},useTransition:function(){var t=Tu(cs)[0],i=Pt().memoizedState;return[t,i]},useMutableSource:zf,useSyncExternalStore:Wf,useId:rp,unstable_isNewReconciler:!1};function Ut(t,i){if(t&&t.defaultProps){i=$({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function xu(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:$({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var $o={isMounted:function(t){return(t=t._reactInternals)?lr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=ot(),d=jn(t),h=dn(u,d);h.payload=i,o!=null&&(h.callback=o),i=Mn(t,h,d),i!==null&&(Wt(i,t,d,u),Fo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=ot(),d=jn(t),h=dn(u,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Mn(t,h,d),i!==null&&(Wt(i,t,d,u),Fo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=ot(),u=jn(t),d=dn(o,u);d.tag=2,i!=null&&(d.callback=i),i=Mn(t,d,u),i!==null&&(Wt(i,t,u,o),Fo(i,t,u))}};function lp(t,i,o,u,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,h,m):i.prototype&&i.prototype.isPureReactComponent?!Ji(o,u)||!Ji(d,h):!0}function ap(t,i,o){var u=!1,d=On,h=i.contextType;return typeof h=="object"&&h!==null?h=xt(h):(d=ft(i)?ur:tt.current,u=i.contextTypes,h=(u=u!=null)?$r(t,d):On),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$o,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function up(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&$o.enqueueReplaceState(i,i.state,null)}function Pu(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},mu(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=xt(h):(h=ft(i)?ur:tt.current,d.context=$r(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(xu(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&$o.enqueueReplaceState(d,d.state,null),Uo(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Zr(t,i){try{var o="",u=i;do o+=he(u),u=u.return;while(u);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Ru(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Au(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Cw=typeof WeakMap=="function"?WeakMap:Map;function cp(t,i,o){o=dn(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Xo||(Xo=!0,Gu=u),Au(t,i)},o}function dp(t,i,o){o=dn(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Au(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Au(t,i),typeof u!="function"&&(Fn===null?Fn=new Set([this]):Fn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function hp(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Cw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=bw.bind(null,t,i,o),i.then(t,t))}function fp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function pp(t,i,o,u,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=dn(-1,1),i.tag=2,Mn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var Sw=W.ReactCurrentOwner,pt=!1;function st(t,i,o,u){i.child=t===null?Lf(i,null,o,u):Qr(i,t.child,o,u)}function mp(t,i,o,u,d){o=o.render;var h=i.ref;return Jr(i,d),u=Cu(t,i,o,u,h,d),o=Su(),t!==null&&!pt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hn(t,i,d)):(xe&&o&&su(i),i.flags|=1,st(t,i,u,d),i.child)}function gp(t,i,o,u,d){if(t===null){var h=o.type;return typeof h=="function"&&!Zu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,_p(t,i,h,u,d)):(t=il(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ji,o(m,u)&&t.ref===i.ref)return hn(t,i,d)}return i.flags|=1,t=Wn(h,u),t.ref=i.ref,t.return=i,i.child=t}function _p(t,i,o,u,d){if(t!==null){var h=t.memoizedProps;if(Ji(h,u)&&t.ref===i.ref)if(pt=!1,i.pendingProps=u=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(pt=!0);else return i.lanes=t.lanes,hn(t,i,d)}return Ou(t,i,o,u,d)}function vp(t,i,o){var u=i.pendingProps,d=u.children,h=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ti,It),It|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ce(ti,It),It|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:o,Ce(ti,It),It|=u}else h!==null?(u=h.baseLanes|o,i.memoizedState=null):u=o,Ce(ti,It),It|=u;return st(t,i,d,o),i.child}function yp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ou(t,i,o,u,d){var h=ft(o)?ur:tt.current;return h=$r(i,h),Jr(i,d),o=Cu(t,i,o,u,h,d),u=Su(),t!==null&&!pt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,hn(t,i,d)):(xe&&u&&su(i),i.flags|=1,st(t,i,o,d),i.child)}function wp(t,i,o,u,d){if(ft(o)){var h=!0;Po(i)}else h=!1;if(Jr(i,d),i.stateNode===null)qo(t,i),ap(i,o,u),Pu(i,o,u,d),u=!0;else if(t===null){var m=i.stateNode,y=i.memoizedProps;m.props=y;var E=m.context,N=o.contextType;typeof N=="object"&&N!==null?N=xt(N):(N=ft(o)?ur:tt.current,N=$r(i,N));var M=o.getDerivedStateFromProps,b=typeof M=="function"||typeof m.getSnapshotBeforeUpdate=="function";b||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==u||E!==N)&&up(i,m,u,N),Ln=!1;var D=i.memoizedState;m.state=D,Uo(i,u,m,d),E=i.memoizedState,y!==u||D!==E||ht.current||Ln?(typeof M=="function"&&(xu(i,o,M,u),E=i.memoizedState),(y=Ln||lp(i,o,y,u,D,E,N))?(b||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),m.props=u,m.state=E,m.context=N,u=y):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,bf(t,i),y=i.memoizedProps,N=i.type===i.elementType?y:Ut(i.type,y),m.props=N,b=i.pendingProps,D=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=xt(E):(E=ft(o)?ur:tt.current,E=$r(i,E));var V=o.getDerivedStateFromProps;(M=typeof V=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==b||D!==E)&&up(i,m,u,E),Ln=!1,D=i.memoizedState,m.state=D,Uo(i,u,m,d);var G=i.memoizedState;y!==b||D!==G||ht.current||Ln?(typeof V=="function"&&(xu(i,o,V,u),G=i.memoizedState),(N=Ln||lp(i,o,N,u,D,G,E)||!1)?(M||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,G,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,G,E)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&D===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&D===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=G),m.props=u,m.state=G,m.context=E,u=N):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&D===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&D===t.memoizedState||(i.flags|=1024),u=!1)}return Du(t,i,o,u,h,d)}function Du(t,i,o,u,d,h){yp(t,i);var m=(i.flags&128)!==0;if(!u&&!m)return d&&Tf(i,o,!1),hn(t,i,h);u=i.stateNode,Sw.current=i;var y=m&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&m?(i.child=Qr(i,t.child,null,h),i.child=Qr(i,null,y,h)):st(t,i,y,h),i.memoizedState=u.state,d&&Tf(i,o,!0),i.child}function Ep(t){var i=t.stateNode;i.pendingContext?Sf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Sf(t,i.context,!1),gu(t,i.containerInfo)}function Cp(t,i,o,u,d){return Kr(),uu(d),i.flags|=256,st(t,i,o,u),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sp(t,i,o){var u=i.pendingProps,d=Re.current,h=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(d&2)!==0),y?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ce(Re,d&1),t===null)return au(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=u.children,t=u.fallback,h?(u=i.mode,h=i.child,m={mode:"hidden",children:m},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=m):h=sl(m,u,0,null),t=yr(t,u,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Mu(o),i.memoizedState=Lu,t):bu(i,m));if(d=t.memoizedState,d!==null&&(y=d.dehydrated,y!==null))return Iw(t,i,m,u,y,d,o);if(h){h=u.fallback,m=i.mode,d=t.child,y=d.sibling;var E={mode:"hidden",children:u.children};return(m&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=Wn(d,E),u.subtreeFlags=d.subtreeFlags&14680064),y!==null?h=Wn(y,h):(h=yr(h,m,o,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,m=t.child.memoizedState,m=m===null?Mu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Lu,u}return h=t.child,t=h.sibling,u=Wn(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function bu(t,i){return i=sl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Go(t,i,o,u){return u!==null&&uu(u),Qr(i,t.child,null,o),t=bu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Iw(t,i,o,u,d,h,m){if(o)return i.flags&256?(i.flags&=-257,u=Ru(Error(n(422))),Go(t,i,m,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=u.fallback,d=i.mode,u=sl({mode:"visible",children:u.children},d,0,null),h=yr(h,d,m,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&Qr(i,t.child,null,m),i.child.memoizedState=Mu(m),i.memoizedState=Lu,h);if((i.mode&1)===0)return Go(t,i,m,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var y=u.dgst;return u=y,h=Error(n(419)),u=Ru(h,u,void 0),Go(t,i,m,u)}if(y=(m&t.childLanes)!==0,pt||y){if(u=Ge,u!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|m))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,cn(t,d),Wt(u,t,d,-1))}return Xu(),u=Ru(Error(n(421))),Go(t,i,m,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=Fw.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,St=Rn(d.nextSibling),Ct=i,xe=!0,Ft=null,t!==null&&(kt[Nt++]=an,kt[Nt++]=un,kt[Nt++]=cr,an=t.id,un=t.overflow,cr=i),i=bu(i,u.children),i.flags|=4096,i)}function Ip(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),fu(t.return,i,o)}function Fu(t,i,o,u,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=o,h.tailMode=d)}function Tp(t,i,o){var u=i.pendingProps,d=u.revealOrder,h=u.tail;if(st(t,i,u.children,o),u=Re.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,o,i);else if(t.tag===19)Ip(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Ce(Re,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&jo(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Fu(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&jo(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Fu(i,!0,o,null,h);break;case"together":Fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function hn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),mr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Wn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Wn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Tw(t,i,o){switch(i.tag){case 3:Ep(i),Kr();break;case 5:jf(i);break;case 1:ft(i.type)&&Po(i);break;case 4:gu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Ce(Mo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ce(Re,Re.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Sp(t,i,o):(Ce(Re,Re.current&1),t=hn(t,i,o),t!==null?t.sibling:null);Ce(Re,Re.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Tp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ce(Re,Re.current),u)break;return null;case 22:case 23:return i.lanes=0,vp(t,i,o)}return hn(t,i,o)}var kp,Uu,Np,xp;kp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Uu=function(){},Np=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,fr(Zt.current);var h=null;switch(o){case"input":d=fa(t,d),u=fa(t,u),h=[];break;case"select":d=$({},d,{value:void 0}),u=$({},u,{value:void 0}),h=[];break;case"textarea":d=ga(t,d),u=ga(t,u),h=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=ko)}va(o,u);var m;o=null;for(N in d)if(!u.hasOwnProperty(N)&&d.hasOwnProperty(N)&&d[N]!=null)if(N==="style"){var y=d[N];for(m in y)y.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else N!=="dangerouslySetInnerHTML"&&N!=="children"&&N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&N!=="autoFocus"&&(l.hasOwnProperty(N)?h||(h=[]):(h=h||[]).push(N,null));for(N in u){var E=u[N];if(y=d!=null?d[N]:void 0,u.hasOwnProperty(N)&&E!==y&&(E!=null||y!=null))if(N==="style")if(y){for(m in y)!y.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&y[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(N,o)),o=E;else N==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,y=y?y.__html:void 0,E!=null&&y!==E&&(h=h||[]).push(N,E)):N==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(N,""+E):N!=="suppressContentEditableWarning"&&N!=="suppressHydrationWarning"&&(l.hasOwnProperty(N)?(E!=null&&N==="onScroll"&&Te("scroll",t),h||y===E||(h=[])):(h=h||[]).push(N,E))}o&&(h=h||[]).push("style",o);var N=h;(i.updateQueue=N)&&(i.flags|=4)}},xp=function(t,i,o,u){o!==u&&(i.flags|=4)};function hs(t,i){if(!xe)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function rt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function kw(t,i,o){var u=i.pendingProps;switch(ou(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(i),null;case 1:return ft(i.type)&&xo(),rt(i),null;case 3:return u=i.stateNode,Xr(),ke(ht),ke(tt),yu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Do(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ft!==null&&(Qu(Ft),Ft=null))),Uu(t,i),rt(i),null;case 5:_u(i);var d=fr(ls.current);if(o=i.type,t!==null&&i.stateNode!=null)Np(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return rt(i),null}if(t=fr(Zt.current),Do(i)){u=i.stateNode,o=i.type;var h=i.memoizedProps;switch(u[Xt]=i,u[ns]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",u),Te("close",u);break;case"iframe":case"object":case"embed":Te("load",u);break;case"video":case"audio":for(d=0;d<Zi.length;d++)Te(Zi[d],u);break;case"source":Te("error",u);break;case"img":case"image":case"link":Te("error",u),Te("load",u);break;case"details":Te("toggle",u);break;case"input":lh(u,h),Te("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Te("invalid",u);break;case"textarea":ch(u,h),Te("invalid",u)}va(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var y=h[m];m==="children"?typeof y=="string"?u.textContent!==y&&(h.suppressHydrationWarning!==!0&&To(u.textContent,y,t),d=["children",y]):typeof y=="number"&&u.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&To(u.textContent,y,t),d=["children",""+y]):l.hasOwnProperty(m)&&y!=null&&m==="onScroll"&&Te("scroll",u)}switch(o){case"input":to(u),uh(u,h,!0);break;case"textarea":to(u),hh(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=ko)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=m.createElement(o,{is:u.is}):(t=m.createElement(o),o==="select"&&(m=t,u.multiple?m.multiple=!0:u.size&&(m.size=u.size))):t=m.createElementNS(t,o),t[Xt]=i,t[ns]=u,kp(t,i,!1,!1),i.stateNode=t;e:{switch(m=ya(o,u),o){case"dialog":Te("cancel",t),Te("close",t),d=u;break;case"iframe":case"object":case"embed":Te("load",t),d=u;break;case"video":case"audio":for(d=0;d<Zi.length;d++)Te(Zi[d],t);d=u;break;case"source":Te("error",t),d=u;break;case"img":case"image":case"link":Te("error",t),Te("load",t),d=u;break;case"details":Te("toggle",t),d=u;break;case"input":lh(t,u),d=fa(t,u),Te("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=$({},u,{value:void 0}),Te("invalid",t);break;case"textarea":ch(t,u),d=ga(t,u),Te("invalid",t);break;default:d=u}va(o,d),y=d;for(h in y)if(y.hasOwnProperty(h)){var E=y[h];h==="style"?gh(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&ph(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Li(t,E):typeof E=="number"&&Li(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Te("scroll",t):E!=null&&z(t,h,E,m))}switch(o){case"input":to(t),uh(t,u,!1);break;case"textarea":to(t),hh(t);break;case"option":u.value!=null&&t.setAttribute("value",""+_e(u.value));break;case"select":t.multiple=!!u.multiple,h=u.value,h!=null?Dr(t,!!u.multiple,h,!1):u.defaultValue!=null&&Dr(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=ko)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return rt(i),null;case 6:if(t&&i.stateNode!=null)xp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=fr(ls.current),fr(Zt.current),Do(i)){if(u=i.stateNode,o=i.memoizedProps,u[Xt]=i,(h=u.nodeValue!==o)&&(t=Ct,t!==null))switch(t.tag){case 3:To(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(u.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Xt]=i,i.stateNode=u}return rt(i),null;case 13:if(ke(Re),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&St!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Af(),Kr(),i.flags|=98560,h=!1;else if(h=Do(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Xt]=i}else Kr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rt(i),h=!1}else Ft!==null&&(Qu(Ft),Ft=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Re.current&1)!==0?Be===0&&(Be=3):Xu())),i.updateQueue!==null&&(i.flags|=4),rt(i),null);case 4:return Xr(),Uu(t,i),t===null&&es(i.stateNode.containerInfo),rt(i),null;case 10:return hu(i.type._context),rt(i),null;case 17:return ft(i.type)&&xo(),rt(i),null;case 19:if(ke(Re),h=i.memoizedState,h===null)return rt(i),null;if(u=(i.flags&128)!==0,m=h.rendering,m===null)if(u)hs(h,!1);else{if(Be!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=jo(t),m!==null){for(i.flags|=128,hs(h,!1),u=m.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)h=o,t=u,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ce(Re,Re.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>ni&&(i.flags|=128,u=!0,hs(h,!1),i.lanes=4194304)}else{if(!u)if(t=jo(m),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),hs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!xe)return rt(i),null}else 2*Fe()-h.renderingStartTime>ni&&o!==1073741824&&(i.flags|=128,u=!0,hs(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,o=Re.current,Ce(Re,u?o&1|2:o&1),i):(rt(i),null);case 22:case 23:return Ju(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(It&1073741824)!==0&&(rt(i),i.subtreeFlags&6&&(i.flags|=8192)):rt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Nw(t,i){switch(ou(i),i.tag){case 1:return ft(i.type)&&xo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Xr(),ke(ht),ke(tt),yu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return _u(i),null;case 13:if(ke(Re),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Kr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ke(Re),null;case 4:return Xr(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var Ko=!1,it=!1,xw=typeof WeakSet=="function"?WeakSet:Set,H=null;function ei(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Le(t,i,u)}else o.current=null}function ju(t,i,o){try{o()}catch(u){Le(t,i,u)}}var Pp=!1;function Pw(t,i){if(Ja=po,t=lf(),Va(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,y=-1,E=-1,N=0,M=0,b=t,D=null;t:for(;;){for(var V;b!==o||d!==0&&b.nodeType!==3||(y=m+d),b!==h||u!==0&&b.nodeType!==3||(E=m+u),b.nodeType===3&&(m+=b.nodeValue.length),(V=b.firstChild)!==null;)D=b,b=V;for(;;){if(b===t)break t;if(D===o&&++N===d&&(y=m),D===h&&++M===u&&(E=m),(V=b.nextSibling)!==null)break;b=D,D=b.parentNode}b=V}o=y===-1||E===-1?null:{start:y,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(Xa={focusedElem:t,selectionRange:o},po=!1,H=i;H!==null;)if(i=H,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,H=t;else for(;H!==null;){i=H;try{var G=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var q=G.memoizedProps,Ue=G.memoizedState,T=i.stateNode,C=T.getSnapshotBeforeUpdate(i.elementType===i.type?q:Ut(i.type,q),Ue);T.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var k=i.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(U){Le(i,i.return,U)}if(t=i.sibling,t!==null){t.return=i.return,H=t;break}H=i.return}return G=Pp,Pp=!1,G}function fs(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&ju(i,o,h)}d=d.next}while(d!==u)}}function Qo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function zu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Rp(t){var i=t.alternate;i!==null&&(t.alternate=null,Rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Xt],delete i[ns],delete i[nu],delete i[dw],delete i[hw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ap(t){return t.tag===5||t.tag===3||t.tag===4}function Op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ko));else if(u!==4&&(t=t.child,t!==null))for(Wu(t,i,o),t=t.sibling;t!==null;)Wu(t,i,o),t=t.sibling}function Bu(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Bu(t,i,o),t=t.sibling;t!==null;)Bu(t,i,o),t=t.sibling}var Je=null,jt=!1;function bn(t,i,o){for(o=o.child;o!==null;)Dp(t,i,o),o=o.sibling}function Dp(t,i,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(lo,o)}catch{}switch(o.tag){case 5:it||ei(o,i);case 6:var u=Je,d=jt;Je=null,bn(t,i,o),Je=u,jt=d,Je!==null&&(jt?(t=Je,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Je.removeChild(o.stateNode));break;case 18:Je!==null&&(jt?(t=Je,o=o.stateNode,t.nodeType===8?tu(t.parentNode,o):t.nodeType===1&&tu(t,o),$i(t)):tu(Je,o.stateNode));break;case 4:u=Je,d=jt,Je=o.stateNode.containerInfo,jt=!0,bn(t,i,o),Je=u,jt=d;break;case 0:case 11:case 14:case 15:if(!it&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&((h&2)!==0||(h&4)!==0)&&ju(o,i,m),d=d.next}while(d!==u)}bn(t,i,o);break;case 1:if(!it&&(ei(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(y){Le(o,i,y)}bn(t,i,o);break;case 21:bn(t,i,o);break;case 22:o.mode&1?(it=(u=it)||o.memoizedState!==null,bn(t,i,o),it=u):bn(t,i,o);break;default:bn(t,i,o)}}function Lp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new xw),i.forEach(function(u){var d=Uw.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function zt(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var h=t,m=i,y=m;e:for(;y!==null;){switch(y.tag){case 5:Je=y.stateNode,jt=!1;break e;case 3:Je=y.stateNode.containerInfo,jt=!0;break e;case 4:Je=y.stateNode.containerInfo,jt=!0;break e}y=y.return}if(Je===null)throw Error(n(160));Dp(h,m,d),Je=null,jt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(N){Le(d,i,N)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Mp(i,t),i=i.sibling}function Mp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(i,t),tn(t),u&4){try{fs(3,t,t.return),Qo(3,t)}catch(q){Le(t,t.return,q)}try{fs(5,t,t.return)}catch(q){Le(t,t.return,q)}}break;case 1:zt(i,t),tn(t),u&512&&o!==null&&ei(o,o.return);break;case 5:if(zt(i,t),tn(t),u&512&&o!==null&&ei(o,o.return),t.flags&32){var d=t.stateNode;try{Li(d,"")}catch(q){Le(t,t.return,q)}}if(u&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,y=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&ah(d,h),ya(y,m);var N=ya(y,h);for(m=0;m<E.length;m+=2){var M=E[m],b=E[m+1];M==="style"?gh(d,b):M==="dangerouslySetInnerHTML"?ph(d,b):M==="children"?Li(d,b):z(d,M,b,N)}switch(y){case"input":pa(d,h);break;case"textarea":dh(d,h);break;case"select":var D=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var V=h.value;V!=null?Dr(d,!!h.multiple,V,!1):D!==!!h.multiple&&(h.defaultValue!=null?Dr(d,!!h.multiple,h.defaultValue,!0):Dr(d,!!h.multiple,h.multiple?[]:"",!1))}d[ns]=h}catch(q){Le(t,t.return,q)}}break;case 6:if(zt(i,t),tn(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(q){Le(t,t.return,q)}}break;case 3:if(zt(i,t),tn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{$i(i.containerInfo)}catch(q){Le(t,t.return,q)}break;case 4:zt(i,t),tn(t);break;case 13:zt(i,t),tn(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||($u=Fe())),u&4&&Lp(t);break;case 22:if(M=o!==null&&o.memoizedState!==null,t.mode&1?(it=(N=it)||M,zt(i,t),it=N):zt(i,t),tn(t),u&8192){if(N=t.memoizedState!==null,(t.stateNode.isHidden=N)&&!M&&(t.mode&1)!==0)for(H=t,M=t.child;M!==null;){for(b=H=M;H!==null;){switch(D=H,V=D.child,D.tag){case 0:case 11:case 14:case 15:fs(4,D,D.return);break;case 1:ei(D,D.return);var G=D.stateNode;if(typeof G.componentWillUnmount=="function"){u=D,o=D.return;try{i=u,G.props=i.memoizedProps,G.state=i.memoizedState,G.componentWillUnmount()}catch(q){Le(u,o,q)}}break;case 5:ei(D,D.return);break;case 22:if(D.memoizedState!==null){Up(b);continue}}V!==null?(V.return=D,H=V):Up(b)}M=M.sibling}e:for(M=null,b=t;;){if(b.tag===5){if(M===null){M=b;try{d=b.stateNode,N?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=b.stateNode,E=b.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,y.style.display=mh("display",m))}catch(q){Le(t,t.return,q)}}}else if(b.tag===6){if(M===null)try{b.stateNode.nodeValue=N?"":b.memoizedProps}catch(q){Le(t,t.return,q)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===t)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;M===b&&(M=null),b=b.return}M===b&&(M=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:zt(i,t),tn(t),u&4&&Lp(t);break;case 21:break;default:zt(i,t),tn(t)}}function tn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Ap(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Li(d,""),u.flags&=-33);var h=Op(t);Bu(t,h,d);break;case 3:case 4:var m=u.stateNode.containerInfo,y=Op(t);Wu(t,y,m);break;default:throw Error(n(161))}}catch(E){Le(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Rw(t,i,o){H=t,bp(t)}function bp(t,i,o){for(var u=(t.mode&1)!==0;H!==null;){var d=H,h=d.child;if(d.tag===22&&u){var m=d.memoizedState!==null||Ko;if(!m){var y=d.alternate,E=y!==null&&y.memoizedState!==null||it;y=Ko;var N=it;if(Ko=m,(it=E)&&!N)for(H=d;H!==null;)m=H,E=m.child,m.tag===22&&m.memoizedState!==null?jp(d):E!==null?(E.return=m,H=E):jp(d);for(;h!==null;)H=h,bp(h),h=h.sibling;H=d,Ko=y,it=N}Fp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,H=h):Fp(t)}}function Fp(t){for(;H!==null;){var i=H;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:it||Qo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!it)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ut(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Uf(i,h,u);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Uf(i,m,o)}break;case 5:var y=i.stateNode;if(o===null&&i.flags&4){o=y;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var N=i.alternate;if(N!==null){var M=N.memoizedState;if(M!==null){var b=M.dehydrated;b!==null&&$i(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}it||i.flags&512&&zu(i)}catch(D){Le(i,i.return,D)}}if(i===t){H=null;break}if(o=i.sibling,o!==null){o.return=i.return,H=o;break}H=i.return}}function Up(t){for(;H!==null;){var i=H;if(i===t){H=null;break}var o=i.sibling;if(o!==null){o.return=i.return,H=o;break}H=i.return}}function jp(t){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Qo(4,i)}catch(E){Le(i,o,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){Le(i,d,E)}}var h=i.return;try{zu(i)}catch(E){Le(i,h,E)}break;case 5:var m=i.return;try{zu(i)}catch(E){Le(i,m,E)}}}catch(E){Le(i,i.return,E)}if(i===t){H=null;break}var y=i.sibling;if(y!==null){y.return=i.return,H=y;break}H=i.return}}var Aw=Math.ceil,Yo=W.ReactCurrentDispatcher,Vu=W.ReactCurrentOwner,Rt=W.ReactCurrentBatchConfig,de=0,Ge=null,je=null,Xe=0,It=0,ti=An(0),Be=0,ps=null,mr=0,Jo=0,Hu=0,ms=null,mt=null,$u=0,ni=1/0,fn=null,Xo=!1,Gu=null,Fn=null,Zo=!1,Un=null,el=0,gs=0,qu=null,tl=-1,nl=0;function ot(){return(de&6)!==0?Fe():tl!==-1?tl:tl=Fe()}function jn(t){return(t.mode&1)===0?1:(de&2)!==0&&Xe!==0?Xe&-Xe:pw.transition!==null?(nl===0&&(nl=Ah()),nl):(t=ve,t!==0||(t=window.event,t=t===void 0?16:zh(t.type)),t)}function Wt(t,i,o,u){if(50<gs)throw gs=0,qu=null,Error(n(185));zi(t,o,u),((de&2)===0||t!==Ge)&&(t===Ge&&((de&2)===0&&(Jo|=o),Be===4&&zn(t,Xe)),gt(t,u),o===1&&de===0&&(i.mode&1)===0&&(ni=Fe()+500,Ro&&Dn()))}function gt(t,i){var o=t.callbackNode;py(t,i);var u=co(t,t===Ge?Xe:0);if(u===0)o!==null&&xh(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&xh(o),i===1)t.tag===0?fw(Wp.bind(null,t)):kf(Wp.bind(null,t)),uw(function(){(de&6)===0&&Dn()}),o=null;else{switch(Oh(u)){case 1:o=ka;break;case 4:o=Ph;break;case 16:o=oo;break;case 536870912:o=Rh;break;default:o=oo}o=Qp(o,zp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function zp(t,i){if(tl=-1,nl=0,(de&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ri()&&t.callbackNode!==o)return null;var u=co(t,t===Ge?Xe:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=rl(t,u);else{i=u;var d=de;de|=2;var h=Vp();(Ge!==t||Xe!==i)&&(fn=null,ni=Fe()+500,_r(t,i));do try{Lw();break}catch(y){Bp(t,y)}while(!0);du(),Yo.current=h,de=d,je!==null?i=0:(Ge=null,Xe=0,i=Be)}if(i!==0){if(i===2&&(d=Na(t),d!==0&&(u=d,i=Ku(t,d))),i===1)throw o=ps,_r(t,0),zn(t,u),gt(t,Fe()),o;if(i===6)zn(t,u);else{if(d=t.current.alternate,(u&30)===0&&!Ow(d)&&(i=rl(t,u),i===2&&(h=Na(t),h!==0&&(u=h,i=Ku(t,h))),i===1))throw o=ps,_r(t,0),zn(t,u),gt(t,Fe()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:vr(t,mt,fn);break;case 3:if(zn(t,u),(u&130023424)===u&&(i=$u+500-Fe(),10<i)){if(co(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){ot(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=eu(vr.bind(null,t,mt,fn),i);break}vr(t,mt,fn);break;case 4:if(zn(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var m=31-Mt(u);h=1<<m,m=i[m],m>d&&(d=m),u&=~h}if(u=d,u=Fe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Aw(u/1960))-u,10<u){t.timeoutHandle=eu(vr.bind(null,t,mt,fn),u);break}vr(t,mt,fn);break;case 5:vr(t,mt,fn);break;default:throw Error(n(329))}}}return gt(t,Fe()),t.callbackNode===o?zp.bind(null,t):null}function Ku(t,i){var o=ms;return t.current.memoizedState.isDehydrated&&(_r(t,i).flags|=256),t=rl(t,i),t!==2&&(i=mt,mt=o,i!==null&&Qu(i)),t}function Qu(t){mt===null?mt=t:mt.push.apply(mt,t)}function Ow(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],h=d.getSnapshot;d=d.value;try{if(!bt(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zn(t,i){for(i&=~Hu,i&=~Jo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mt(i),u=1<<o;t[o]=-1,i&=~u}}function Wp(t){if((de&6)!==0)throw Error(n(327));ri();var i=co(t,0);if((i&1)===0)return gt(t,Fe()),null;var o=rl(t,i);if(t.tag!==0&&o===2){var u=Na(t);u!==0&&(i=u,o=Ku(t,u))}if(o===1)throw o=ps,_r(t,0),zn(t,i),gt(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,vr(t,mt,fn),gt(t,Fe()),null}function Yu(t,i){var o=de;de|=1;try{return t(i)}finally{de=o,de===0&&(ni=Fe()+500,Ro&&Dn())}}function gr(t){Un!==null&&Un.tag===0&&(de&6)===0&&ri();var i=de;de|=1;var o=Rt.transition,u=ve;try{if(Rt.transition=null,ve=1,t)return t()}finally{ve=u,Rt.transition=o,de=i,(de&6)===0&&Dn()}}function Ju(){It=ti.current,ke(ti)}function _r(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,aw(o)),je!==null)for(o=je.return;o!==null;){var u=o;switch(ou(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&xo();break;case 3:Xr(),ke(ht),ke(tt),yu();break;case 5:_u(u);break;case 4:Xr();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:hu(u.type._context);break;case 22:case 23:Ju()}o=o.return}if(Ge=t,je=t=Wn(t.current,null),Xe=It=i,Be=0,ps=null,Hu=Jo=mr=0,mt=ms=null,hr!==null){for(i=0;i<hr.length;i++)if(o=hr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,u.next=m}o.pending=u}hr=null}return t}function Bp(t,i){do{var o=je;try{if(du(),zo.current=Ho,Wo){for(var u=Ae.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Wo=!1}if(pr=0,$e=We=Ae=null,as=!1,us=0,Vu.current=null,o===null||o.return===null){Be=1,ps=i,je=null;break}e:{var h=t,m=o.return,y=o,E=i;if(i=Xe,y.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var N=E,M=y,b=M.tag;if((M.mode&1)===0&&(b===0||b===11||b===15)){var D=M.alternate;D?(M.updateQueue=D.updateQueue,M.memoizedState=D.memoizedState,M.lanes=D.lanes):(M.updateQueue=null,M.memoizedState=null)}var V=fp(m);if(V!==null){V.flags&=-257,pp(V,m,y,h,i),V.mode&1&&hp(h,N,i),i=V,E=N;var G=i.updateQueue;if(G===null){var q=new Set;q.add(E),i.updateQueue=q}else G.add(E);break e}else{if((i&1)===0){hp(h,N,i),Xu();break e}E=Error(n(426))}}else if(xe&&y.mode&1){var Ue=fp(m);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),pp(Ue,m,y,h,i),uu(Zr(E,y));break e}}h=E=Zr(E,y),Be!==4&&(Be=2),ms===null?ms=[h]:ms.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var T=cp(h,E,i);Ff(h,T);break e;case 1:y=E;var C=h.type,k=h.stateNode;if((h.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Fn===null||!Fn.has(k)))){h.flags|=65536,i&=-i,h.lanes|=i;var U=dp(h,y,i);Ff(h,U);break e}}h=h.return}while(h!==null)}$p(o)}catch(K){i=K,je===o&&o!==null&&(je=o=o.return);continue}break}while(!0)}function Vp(){var t=Yo.current;return Yo.current=Ho,t===null?Ho:t}function Xu(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||(mr&268435455)===0&&(Jo&268435455)===0||zn(Ge,Xe)}function rl(t,i){var o=de;de|=2;var u=Vp();(Ge!==t||Xe!==i)&&(fn=null,_r(t,i));do try{Dw();break}catch(d){Bp(t,d)}while(!0);if(du(),de=o,Yo.current=u,je!==null)throw Error(n(261));return Ge=null,Xe=0,Be}function Dw(){for(;je!==null;)Hp(je)}function Lw(){for(;je!==null&&!sy();)Hp(je)}function Hp(t){var i=Kp(t.alternate,t,It);t.memoizedProps=t.pendingProps,i===null?$p(t):je=i,Vu.current=null}function $p(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=kw(o,i,It),o!==null){je=o;return}}else{if(o=Nw(o,i),o!==null){o.flags&=32767,je=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,je=null;return}}if(i=i.sibling,i!==null){je=i;return}je=i=t}while(i!==null);Be===0&&(Be=5)}function vr(t,i,o){var u=ve,d=Rt.transition;try{Rt.transition=null,ve=1,Mw(t,i,o,u)}finally{Rt.transition=d,ve=u}return null}function Mw(t,i,o,u){do ri();while(Un!==null);if((de&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(my(t,h),t===Ge&&(je=Ge=null,Xe=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Zo||(Zo=!0,Qp(oo,function(){return ri(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Rt.transition,Rt.transition=null;var m=ve;ve=1;var y=de;de|=4,Vu.current=null,Pw(t,o),Mp(o,t),tw(Xa),po=!!Ja,Xa=Ja=null,t.current=o,Rw(o),oy(),de=y,ve=m,Rt.transition=h}else t.current=o;if(Zo&&(Zo=!1,Un=t,el=d),h=t.pendingLanes,h===0&&(Fn=null),uy(o.stateNode),gt(t,Fe()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Xo)throw Xo=!1,t=Gu,Gu=null,t;return(el&1)!==0&&t.tag!==0&&ri(),h=t.pendingLanes,(h&1)!==0?t===qu?gs++:(gs=0,qu=t):gs=0,Dn(),null}function ri(){if(Un!==null){var t=Oh(el),i=Rt.transition,o=ve;try{if(Rt.transition=null,ve=16>t?16:t,Un===null)var u=!1;else{if(t=Un,Un=null,el=0,(de&6)!==0)throw Error(n(331));var d=de;for(de|=4,H=t.current;H!==null;){var h=H,m=h.child;if((H.flags&16)!==0){var y=h.deletions;if(y!==null){for(var E=0;E<y.length;E++){var N=y[E];for(H=N;H!==null;){var M=H;switch(M.tag){case 0:case 11:case 15:fs(8,M,h)}var b=M.child;if(b!==null)b.return=M,H=b;else for(;H!==null;){M=H;var D=M.sibling,V=M.return;if(Rp(M),M===N){H=null;break}if(D!==null){D.return=V,H=D;break}H=V}}}var G=h.alternate;if(G!==null){var q=G.child;if(q!==null){G.child=null;do{var Ue=q.sibling;q.sibling=null,q=Ue}while(q!==null)}}H=h}}if((h.subtreeFlags&2064)!==0&&m!==null)m.return=h,H=m;else e:for(;H!==null;){if(h=H,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:fs(9,h,h.return)}var T=h.sibling;if(T!==null){T.return=h.return,H=T;break e}H=h.return}}var C=t.current;for(H=C;H!==null;){m=H;var k=m.child;if((m.subtreeFlags&2064)!==0&&k!==null)k.return=m,H=k;else e:for(m=C;H!==null;){if(y=H,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:Qo(9,y)}}catch(K){Le(y,y.return,K)}if(y===m){H=null;break e}var U=y.sibling;if(U!==null){U.return=y.return,H=U;break e}H=y.return}}if(de=d,Dn(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(lo,t)}catch{}u=!0}return u}finally{ve=o,Rt.transition=i}}return!1}function Gp(t,i,o){i=Zr(o,i),i=cp(t,i,1),t=Mn(t,i,1),i=ot(),t!==null&&(zi(t,1,i),gt(t,i))}function Le(t,i,o){if(t.tag===3)Gp(t,t,o);else for(;i!==null;){if(i.tag===3){Gp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Fn===null||!Fn.has(u))){t=Zr(o,t),t=dp(i,t,1),i=Mn(i,t,1),t=ot(),i!==null&&(zi(i,1,t),gt(i,t));break}}i=i.return}}function bw(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=ot(),t.pingedLanes|=t.suspendedLanes&o,Ge===t&&(Xe&o)===o&&(Be===4||Be===3&&(Xe&130023424)===Xe&&500>Fe()-$u?_r(t,0):Hu|=o),gt(t,i)}function qp(t,i){i===0&&((t.mode&1)===0?i=1:(i=uo,uo<<=1,(uo&130023424)===0&&(uo=4194304)));var o=ot();t=cn(t,i),t!==null&&(zi(t,i,o),gt(t,o))}function Fw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),qp(t,o)}function Uw(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),qp(t,o)}var Kp;Kp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||ht.current)pt=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return pt=!1,Tw(t,i,o);pt=(t.flags&131072)!==0}else pt=!1,xe&&(i.flags&1048576)!==0&&Nf(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;qo(t,i),t=i.pendingProps;var d=$r(i,tt.current);Jr(i,o),d=Cu(null,i,u,t,d,o);var h=Su();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ft(u)?(h=!0,Po(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,mu(i),d.updater=$o,i.stateNode=d,d._reactInternals=i,Pu(i,u,t,o),i=Du(null,i,u,!0,h,o)):(i.tag=0,xe&&h&&su(i),st(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(qo(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=zw(u),t=Ut(u,t),d){case 0:i=Ou(null,i,u,t,o);break e;case 1:i=wp(null,i,u,t,o);break e;case 11:i=mp(null,i,u,t,o);break e;case 14:i=gp(null,i,u,Ut(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ut(u,d),Ou(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ut(u,d),wp(t,i,u,d,o);case 3:e:{if(Ep(i),t===null)throw Error(n(387));u=i.pendingProps,h=i.memoizedState,d=h.element,bf(t,i),Uo(i,u,null,o);var m=i.memoizedState;if(u=m.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Zr(Error(n(423)),i),i=Cp(t,i,u,o,d);break e}else if(u!==d){d=Zr(Error(n(424)),i),i=Cp(t,i,u,o,d);break e}else for(St=Rn(i.stateNode.containerInfo.firstChild),Ct=i,xe=!0,Ft=null,o=Lf(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Kr(),u===d){i=hn(t,i,o);break e}st(t,i,u,o)}i=i.child}return i;case 5:return jf(i),t===null&&au(i),u=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,Za(u,d)?m=null:h!==null&&Za(u,h)&&(i.flags|=32),yp(t,i),st(t,i,m,o),i.child;case 6:return t===null&&au(i),null;case 13:return Sp(t,i,o);case 4:return gu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=Qr(i,null,u,o):st(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ut(u,d),mp(t,i,u,d,o);case 7:return st(t,i,i.pendingProps,o),i.child;case 8:return st(t,i,i.pendingProps.children,o),i.child;case 12:return st(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Ce(Mo,u._currentValue),u._currentValue=m,h!==null)if(bt(h.value,m)){if(h.children===d.children&&!ht.current){i=hn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var y=h.dependencies;if(y!==null){m=h.child;for(var E=y.firstContext;E!==null;){if(E.context===u){if(h.tag===1){E=dn(-1,o&-o),E.tag=2;var N=h.updateQueue;if(N!==null){N=N.shared;var M=N.pending;M===null?E.next=E:(E.next=M.next,M.next=E),N.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),fu(h.return,o,i),y.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,y=m.alternate,y!==null&&(y.lanes|=o),fu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}st(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Jr(i,o),d=xt(d),u=u(d),i.flags|=1,st(t,i,u,o),i.child;case 14:return u=i.type,d=Ut(u,i.pendingProps),d=Ut(u.type,d),gp(t,i,u,d,o);case 15:return _p(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Ut(u,d),qo(t,i),i.tag=1,ft(u)?(t=!0,Po(i)):t=!1,Jr(i,o),ap(i,u,d),Pu(i,u,d,o),Du(null,i,u,!0,t,o);case 19:return Tp(t,i,o);case 22:return vp(t,i,o)}throw Error(n(156,i.tag))};function Qp(t,i){return Nh(t,i)}function jw(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,i,o,u){return new jw(t,i,o,u)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zw(t){if(typeof t=="function")return Zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ze)return 11;if(t===Yt)return 14}return 2}function Wn(t,i){var o=t.alternate;return o===null?(o=At(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function il(t,i,o,u,d,h){var m=2;if(u=t,typeof t=="function")Zu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case ge:return yr(o.children,d,h,i);case Pe:m=8,d|=8;break;case Ye:return t=At(12,o,i,d|2),t.elementType=Ye,t.lanes=h,t;case yt:return t=At(13,o,i,d),t.elementType=yt,t.lanes=h,t;case Lt:return t=At(19,o,i,d),t.elementType=Lt,t.lanes=h,t;case De:return sl(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ce:m=10;break e;case Tt:m=9;break e;case ze:m=11;break e;case Yt:m=14;break e;case dt:m=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=At(m,o,i,d),i.elementType=t,i.type=u,i.lanes=h,i}function yr(t,i,o,u){return t=At(7,t,u,i),t.lanes=o,t}function sl(t,i,o,u){return t=At(22,t,u,i),t.elementType=De,t.lanes=o,t.stateNode={isHidden:!1},t}function ec(t,i,o){return t=At(6,t,null,i),t.lanes=o,t}function tc(t,i,o){return i=At(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Ww(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function nc(t,i,o,u,d,h,m,y,E){return t=new Ww(t,i,o,y,E),i===1?(i=1,h===!0&&(i|=8)):i=0,h=At(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(h),t}function Bw(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Yp(t){if(!t)return On;t=t._reactInternals;e:{if(lr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ft(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ft(o))return If(t,o,i)}return i}function Jp(t,i,o,u,d,h,m,y,E){return t=nc(o,u,!0,t,d,h,m,y,E),t.context=Yp(null),o=t.current,u=ot(),d=jn(o),h=dn(u,d),h.callback=i??null,Mn(o,h,d),t.current.lanes=d,zi(t,d,u),gt(t,u),t}function ol(t,i,o,u){var d=i.current,h=ot(),m=jn(d);return o=Yp(o),i.context===null?i.context=o:i.pendingContext=o,i=dn(h,m),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Mn(d,i,m),t!==null&&(Wt(t,d,m,h),Fo(t,d,m)),m}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function rc(t,i){Xp(t,i),(t=t.alternate)&&Xp(t,i)}function Vw(){return null}var Zp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ic(t){this._internalRoot=t}al.prototype.render=ic.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ol(t,i,null,null)},al.prototype.unmount=ic.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;gr(function(){ol(null,t,null,null)}),i[on]=null}};function al(t){this._internalRoot=t}al.prototype.unstable_scheduleHydration=function(t){if(t){var i=Mh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Nn.length&&i!==0&&i<Nn[o].priority;o++);Nn.splice(o,0,t),o===0&&Uh(t)}};function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function em(){}function Hw(t,i,o,u,d){if(d){if(typeof u=="function"){var h=u;u=function(){var N=ll(m);h.call(N)}}var m=Jp(i,u,t,0,null,!1,!1,"",em);return t._reactRootContainer=m,t[on]=m.current,es(t.nodeType===8?t.parentNode:t),gr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var y=u;u=function(){var N=ll(E);y.call(N)}}var E=nc(t,0,!1,null,null,!1,!1,"",em);return t._reactRootContainer=E,t[on]=E.current,es(t.nodeType===8?t.parentNode:t),gr(function(){ol(i,E,o,u)}),E}function cl(t,i,o,u,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var y=d;d=function(){var E=ll(m);y.call(E)}}ol(i,m,t,d)}else m=Hw(o,i,t,d,u);return ll(m)}Dh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=ji(i.pendingLanes);o!==0&&(Pa(i,o|1),gt(i,Fe()),(de&6)===0&&(ni=Fe()+500,Dn()))}break;case 13:gr(function(){var u=cn(t,1);if(u!==null){var d=ot();Wt(u,t,1,d)}}),rc(t,1)}},Ra=function(t){if(t.tag===13){var i=cn(t,134217728);if(i!==null){var o=ot();Wt(i,t,134217728,o)}rc(t,134217728)}},Lh=function(t){if(t.tag===13){var i=jn(t),o=cn(t,i);if(o!==null){var u=ot();Wt(o,t,i,u)}rc(t,i)}},Mh=function(){return ve},bh=function(t,i){var o=ve;try{return ve=t,i()}finally{ve=o}},Ca=function(t,i,o){switch(i){case"input":if(pa(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=No(u);if(!d)throw Error(n(90));oh(u),pa(u,d)}}}break;case"textarea":dh(t,o);break;case"select":i=o.value,i!=null&&Dr(t,!!o.multiple,i,!1)}},wh=Yu,Eh=gr;var $w={usingClientEntryPoint:!1,Events:[rs,Vr,No,vh,yh,Yu]},_s={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gw={bundleType:_s.bundleType,version:_s.version,rendererPackageName:_s.rendererPackageName,rendererConfig:_s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Th(t),t===null?null:t.stateNode},findFiberByHostInstance:_s.findFiberByHostInstance||Vw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{lo=dl.inject(Gw),Jt=dl}catch{}}return _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$w,_t.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(i))throw Error(n(200));return Bw(t,i,null,o)},_t.createRoot=function(t,i){if(!sc(t))throw Error(n(299));var o=!1,u="",d=Zp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=nc(t,1,!1,null,null,o,!1,u,d),t[on]=i.current,es(t.nodeType===8?t.parentNode:t),new ic(i)},_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Th(i),t=t===null?null:t.stateNode,t},_t.flushSync=function(t){return gr(t)},_t.hydrate=function(t,i,o){if(!ul(i))throw Error(n(200));return cl(null,t,i,!0,o)},_t.hydrateRoot=function(t,i,o){if(!sc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,h="",m=Zp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Jp(i,null,t,1,o??null,d,!1,h,m),t[on]=i.current,es(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new al(i)},_t.render=function(t,i,o){if(!ul(i))throw Error(n(200));return cl(null,t,i,!1,o)},_t.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(gr(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[on]=null})}),!0):!1},_t.unstable_batchedUpdates=Yu,_t.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!ul(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return cl(t,i,o,!1,u)},_t.version="18.3.1-next-f1338f8080-20240426",_t}var am;function Ag(){if(am)return ac.exports;am=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ac.exports=t0(),ac.exports}var um;function n0(){if(um)return hl;um=1;var r=Ag();return hl.createRoot=r.createRoot,hl.hydrateRoot=r.hydrateRoot,hl}var r0=n0();const i0=Pg(r0);Ag();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rs(){return Rs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Rs.apply(this,arguments)}var qn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(qn||(qn={}));const cm="popstate";function s0(r){r===void 0&&(r={});function e(s,l){let{pathname:a,search:c,hash:f}=s.location;return Pc("",{pathname:a,search:c,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:Sl(l)}return l0(e,n,null,r)}function Oe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function nd(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function o0(){return Math.random().toString(36).substr(2,8)}function dm(r,e){return{usr:r.state,key:r.key,idx:e}}function Pc(r,e,n,s){return n===void 0&&(n=null),Rs({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||s||o0()})}function Sl(r){let{pathname:e="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ci(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function l0(r,e,n,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:a=!1}=s,c=l.history,f=qn.Pop,p=null,g=v();g==null&&(g=0,c.replaceState(Rs({},c.state,{idx:g}),""));function v(){return(c.state||{idx:null}).idx}function _(){f=qn.Pop;let A=v(),Q=A==null?null:A-g;g=A,p&&p({action:f,location:F.location,delta:Q})}function w(A,Q){f=qn.Push;let x=Pc(F.location,A,Q);g=v()+1;let z=dm(x,g),W=F.createHref(x);try{c.pushState(z,"",W)}catch(ne){if(ne instanceof DOMException&&ne.name==="DataCloneError")throw ne;l.location.assign(W)}a&&p&&p({action:f,location:F.location,delta:1})}function P(A,Q){f=qn.Replace;let x=Pc(F.location,A,Q);g=v();let z=dm(x,g),W=F.createHref(x);c.replaceState(z,"",W),a&&p&&p({action:f,location:F.location,delta:0})}function R(A){let Q=l.location.origin!=="null"?l.location.origin:l.location.href,x=typeof A=="string"?A:Sl(A);return x=x.replace(/ $/,"%20"),Oe(Q,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,Q)}let F={get action(){return f},get location(){return r(l,c)},listen(A){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(cm,_),p=A,()=>{l.removeEventListener(cm,_),p=null}},createHref(A){return e(l,A)},createURL:R,encodeLocation(A){let Q=R(A);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:w,replace:P,go(A){return c.go(A)}};return F}var hm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(hm||(hm={}));function a0(r,e,n){return n===void 0&&(n="/"),u0(r,e,n)}function u0(r,e,n,s){let l=typeof e=="string"?Ci(e):e,a=fi(l.pathname||"/",n);if(a==null)return null;let c=Og(r);c0(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let g=E0(a);f=y0(c[p],g)}return f}function Og(r,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let l=(a,c,f)=>{let p={relativePath:f===void 0?a.path||"":f,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};p.relativePath.startsWith("/")&&(Oe(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let g=Qn([s,p.relativePath]),v=n.concat(p);a.children&&a.children.length>0&&(Oe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Og(a.children,e,v,g)),!(a.path==null&&!a.index)&&e.push({path:g,score:_0(g,a.index),routesMeta:v})};return r.forEach((a,c)=>{var f;if(a.path===""||!((f=a.path)!=null&&f.includes("?")))l(a,c);else for(let p of Dg(a.path))l(a,c,p)}),e}function Dg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let c=Dg(s.join("/")),f=[];return f.push(...c.map(p=>p===""?a:[a,p].join("/"))),l&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function c0(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:v0(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const d0=/^:[\w-]+$/,h0=3,f0=2,p0=1,m0=10,g0=-2,fm=r=>r==="*";function _0(r,e){let n=r.split("/"),s=n.length;return n.some(fm)&&(s+=g0),e&&(s+=f0),n.filter(l=>!fm(l)).reduce((l,a)=>l+(d0.test(a)?h0:a===""?p0:m0),s)}function v0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function y0(r,e,n){let{routesMeta:s}=r,l={},a="/",c=[];for(let f=0;f<s.length;++f){let p=s[f],g=f===s.length-1,v=a==="/"?e:e.slice(a.length)||"/",_=Rc({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),w=p.route;if(!_)return null;Object.assign(l,_.params),c.push({params:l,pathname:Qn([a,_.pathname]),pathnameBase:k0(Qn([a,_.pathnameBase])),route:w}),_.pathnameBase!=="/"&&(a=Qn([a,_.pathnameBase]))}return c}function Rc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=w0(r.path,r.caseSensitive,r.end),l=e.match(n);if(!l)return null;let a=l[0],c=a.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:s.reduce((g,v,_)=>{let{paramName:w,isOptional:P}=v;if(w==="*"){let F=f[_]||"";c=a.slice(0,a.length-F.length).replace(/(.)\/+$/,"$1")}const R=f[_];return P&&!R?g[w]=void 0:g[w]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:a,pathnameBase:c,pattern:r}}function w0(r,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),nd(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function E0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nd(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function fi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}const C0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,S0=r=>C0.test(r);function I0(r,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:l=""}=typeof r=="string"?Ci(r):r,a;if(n)if(S0(n))a=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),nd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?a=pm(n.substring(1),"/"):a=pm(n,e)}else a=e;return{pathname:a,search:N0(s),hash:x0(l)}}function pm(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function dc(r,e,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T0(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rd(r,e){let n=T0(r);return e?n.map((s,l)=>l===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function id(r,e,n,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=Ci(r):(l=Rs({},r),Oe(!l.pathname||!l.pathname.includes("?"),dc("?","pathname","search",l)),Oe(!l.pathname||!l.pathname.includes("#"),dc("#","pathname","hash",l)),Oe(!l.search||!l.search.includes("#"),dc("#","search","hash",l)));let a=r===""||l.pathname==="",c=a?"/":l.pathname,f;if(c==null)f=n;else{let _=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),_-=1;l.pathname=w.join("/")}f=_>=0?e[_]:"/"}let p=I0(l,f),g=c&&c!=="/"&&c.endsWith("/"),v=(a||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}const Qn=r=>r.join("/").replace(/\/\/+/g,"/"),k0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),N0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,x0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function P0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Lg=["post","put","patch","delete"];new Set(Lg);const R0=["get",...Lg];new Set(R0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},As.apply(this,arguments)}const Kl=O.createContext(null),Mg=O.createContext(null),Cn=O.createContext(null),Ql=O.createContext(null),ir=O.createContext({outlet:null,matches:[],isDataRoute:!1}),bg=O.createContext(null);function A0(r,e){let{relative:n}=e===void 0?{}:e;Si()||Oe(!1);let{basename:s,navigator:l}=O.useContext(Cn),{hash:a,pathname:c,search:f}=Yl(r,{relative:n}),p=c;return s!=="/"&&(p=c==="/"?s:Qn([s,c])),l.createHref({pathname:p,search:f,hash:a})}function Si(){return O.useContext(Ql)!=null}function Ii(){return Si()||Oe(!1),O.useContext(Ql).location}function Fg(r){O.useContext(Cn).static||O.useLayoutEffect(r)}function sd(){let{isDataRoute:r}=O.useContext(ir);return r?H0():O0()}function O0(){Si()||Oe(!1);let r=O.useContext(Kl),{basename:e,future:n,navigator:s}=O.useContext(Cn),{matches:l}=O.useContext(ir),{pathname:a}=Ii(),c=JSON.stringify(rd(l,n.v7_relativeSplatPath)),f=O.useRef(!1);return Fg(()=>{f.current=!0}),O.useCallback(function(g,v){if(v===void 0&&(v={}),!f.current)return;if(typeof g=="number"){s.go(g);return}let _=id(g,JSON.parse(c),a,v.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Qn([e,_.pathname])),(v.replace?s.replace:s.push)(_,v.state,v)},[e,s,c,a,r])}function Yl(r,e){let{relative:n}=e===void 0?{}:e,{future:s}=O.useContext(Cn),{matches:l}=O.useContext(ir),{pathname:a}=Ii(),c=JSON.stringify(rd(l,s.v7_relativeSplatPath));return O.useMemo(()=>id(r,JSON.parse(c),a,n==="path"),[r,c,a,n])}function D0(r,e){return L0(r,e)}function L0(r,e,n,s){Si()||Oe(!1);let{navigator:l}=O.useContext(Cn),{matches:a}=O.useContext(ir),c=a[a.length-1],f=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let g=Ii(),v;if(e){var _;let A=typeof e=="string"?Ci(e):e;p==="/"||(_=A.pathname)!=null&&_.startsWith(p)||Oe(!1),v=A}else v=g;let w=v.pathname||"/",P=w;if(p!=="/"){let A=p.replace(/^\//,"").split("/");P="/"+w.replace(/^\//,"").split("/").slice(A.length).join("/")}let R=a0(r,{pathname:P}),F=j0(R&&R.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:Qn([p,l.encodeLocation?l.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:Qn([p,l.encodeLocation?l.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),a,n,s);return e&&F?O.createElement(Ql.Provider,{value:{location:As({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:qn.Pop}},F):F}function M0(){let r=V0(),e=P0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:l},n):null,null)}const b0=O.createElement(M0,null);class F0 extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(ir.Provider,{value:this.props.routeContext},O.createElement(bg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U0(r){let{routeContext:e,match:n,children:s}=r,l=O.useContext(Kl);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(ir.Provider,{value:e},s)}function j0(r,e,n,s){var l;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var a;if(!n)return null;if(n.errors)r=n.matches;else if((a=s)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let c=r,f=(l=n)==null?void 0:l.errors;if(f!=null){let v=c.findIndex(_=>_.route.id&&(f==null?void 0:f[_.route.id])!==void 0);v>=0||Oe(!1),c=c.slice(0,Math.min(c.length,v+1))}let p=!1,g=-1;if(n&&s&&s.v7_partialHydration)for(let v=0;v<c.length;v++){let _=c[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(g=v),_.route.id){let{loaderData:w,errors:P}=n,R=_.route.loader&&w[_.route.id]===void 0&&(!P||P[_.route.id]===void 0);if(_.route.lazy||R){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((v,_,w)=>{let P,R=!1,F=null,A=null;n&&(P=f&&_.route.id?f[_.route.id]:void 0,F=_.route.errorElement||b0,p&&(g<0&&w===0?($0("route-fallback"),R=!0,A=null):g===w&&(R=!0,A=_.route.hydrateFallbackElement||null)));let Q=e.concat(c.slice(0,w+1)),x=()=>{let z;return P?z=F:R?z=A:_.route.Component?z=O.createElement(_.route.Component,null):_.route.element?z=_.route.element:z=v,O.createElement(U0,{match:_,routeContext:{outlet:v,matches:Q,isDataRoute:n!=null},children:z})};return n&&(_.route.ErrorBoundary||_.route.errorElement||w===0)?O.createElement(F0,{location:n.location,revalidation:n.revalidation,component:F,error:P,children:x(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):x()},null)}var Ug=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(Ug||{}),jg=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(jg||{});function z0(r){let e=O.useContext(Kl);return e||Oe(!1),e}function W0(r){let e=O.useContext(Mg);return e||Oe(!1),e}function B0(r){let e=O.useContext(ir);return e||Oe(!1),e}function zg(r){let e=B0(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function V0(){var r;let e=O.useContext(bg),n=W0(),s=zg();return e!==void 0?e:(r=n.errors)==null?void 0:r[s]}function H0(){let{router:r}=z0(Ug.UseNavigateStable),e=zg(jg.UseNavigateStable),n=O.useRef(!1);return Fg(()=>{n.current=!0}),O.useCallback(function(l,a){a===void 0&&(a={}),n.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,As({fromRouteId:e},a)))},[r,e])}const mm={};function $0(r,e,n){mm[r]||(mm[r]=!0)}function G0(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function q0(r){let{to:e,replace:n,state:s,relative:l}=r;Si()||Oe(!1);let{future:a,static:c}=O.useContext(Cn),{matches:f}=O.useContext(ir),{pathname:p}=Ii(),g=sd(),v=id(e,rd(f,a.v7_relativeSplatPath),p,l==="path"),_=JSON.stringify(v);return O.useEffect(()=>g(JSON.parse(_),{replace:n,state:s,relative:l}),[g,_,l,n,s]),null}function si(r){Oe(!1)}function K0(r){let{basename:e="/",children:n=null,location:s,navigationType:l=qn.Pop,navigator:a,static:c=!1,future:f}=r;Si()&&Oe(!1);let p=e.replace(/^\/*/,"/"),g=O.useMemo(()=>({basename:p,navigator:a,static:c,future:As({v7_relativeSplatPath:!1},f)}),[p,f,a,c]);typeof s=="string"&&(s=Ci(s));let{pathname:v="/",search:_="",hash:w="",state:P=null,key:R="default"}=s,F=O.useMemo(()=>{let A=fi(v,p);return A==null?null:{location:{pathname:A,search:_,hash:w,state:P,key:R},navigationType:l}},[p,v,_,w,P,R,l]);return F==null?null:O.createElement(Cn.Provider,{value:g},O.createElement(Ql.Provider,{children:n,value:F}))}function Q0(r){let{children:e,location:n}=r;return D0(Ac(e),n)}new Promise(()=>{});function Ac(r,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(r,(s,l)=>{if(!O.isValidElement(s))return;let a=[...e,l];if(s.type===O.Fragment){n.push.apply(n,Ac(s.props.children,a));return}s.type!==si&&Oe(!1),!s.props.index||!s.props.children||Oe(!1);let c={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Ac(s.props.children,a)),n.push(c)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Il.apply(this,arguments)}function Wg(r,e){if(r==null)return{};var n={},s=Object.keys(r),l,a;for(a=0;a<s.length;a++)l=s[a],!(e.indexOf(l)>=0)&&(n[l]=r[l]);return n}function Y0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function J0(r,e){return r.button===0&&(!e||e==="_self")&&!Y0(r)}const X0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],eE="6";try{window.__reactRouterVersion=eE}catch{}const tE=O.createContext({isTransitioning:!1}),nE="startTransition",gm=Xw[nE];function rE(r){let{basename:e,children:n,future:s,window:l}=r,a=O.useRef();a.current==null&&(a.current=s0({window:l,v5Compat:!0}));let c=a.current,[f,p]=O.useState({action:c.action,location:c.location}),{v7_startTransition:g}=s||{},v=O.useCallback(_=>{g&&gm?gm(()=>p(_)):p(_)},[p,g]);return O.useLayoutEffect(()=>c.listen(v),[c,v]),O.useEffect(()=>G0(s),[s]),O.createElement(K0,{basename:e,children:n,location:f.location,navigationType:f.action,navigator:c,future:s})}const iE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oE=O.forwardRef(function(e,n){let{onClick:s,relative:l,reloadDocument:a,replace:c,state:f,target:p,to:g,preventScrollReset:v,viewTransition:_}=e,w=Wg(e,X0),{basename:P}=O.useContext(Cn),R,F=!1;if(typeof g=="string"&&sE.test(g)&&(R=g,iE))try{let z=new URL(window.location.href),W=g.startsWith("//")?new URL(z.protocol+g):new URL(g),ne=fi(W.pathname,P);W.origin===z.origin&&ne!=null?g=ne+W.search+W.hash:F=!0}catch{}let A=A0(g,{relative:l}),Q=aE(g,{replace:c,state:f,target:p,preventScrollReset:v,relative:l,viewTransition:_});function x(z){s&&s(z),z.defaultPrevented||Q(z)}return O.createElement("a",Il({},w,{href:R||A,onClick:F||a?s:x,ref:n,target:p}))}),fl=O.forwardRef(function(e,n){let{"aria-current":s="page",caseSensitive:l=!1,className:a="",end:c=!1,style:f,to:p,viewTransition:g,children:v}=e,_=Wg(e,Z0),w=Yl(p,{relative:_.relative}),P=Ii(),R=O.useContext(Mg),{navigator:F,basename:A}=O.useContext(Cn),Q=R!=null&&uE(w)&&g===!0,x=F.encodeLocation?F.encodeLocation(w).pathname:w.pathname,z=P.pathname,W=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;l||(z=z.toLowerCase(),W=W?W.toLowerCase():null,x=x.toLowerCase()),W&&A&&(W=fi(W,A)||W);const ne=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let re=z===x||!c&&z.startsWith(x)&&z.charAt(ne)==="/",ge=W!=null&&(W===x||!c&&W.startsWith(x)&&W.charAt(x.length)==="/"),Pe={isActive:re,isPending:ge,isTransitioning:Q},Ye=re?s:void 0,ce;typeof a=="function"?ce=a(Pe):ce=[a,re?"active":null,ge?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let Tt=typeof f=="function"?f(Pe):f;return O.createElement(oE,Il({},_,{"aria-current":Ye,className:ce,ref:n,style:Tt,to:p,viewTransition:g}),typeof v=="function"?v(Pe):v)});var Oc;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Oc||(Oc={}));var _m;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(_m||(_m={}));function lE(r){let e=O.useContext(Kl);return e||Oe(!1),e}function aE(r,e){let{target:n,replace:s,state:l,preventScrollReset:a,relative:c,viewTransition:f}=e===void 0?{}:e,p=sd(),g=Ii(),v=Yl(r,{relative:c});return O.useCallback(_=>{if(J0(_,n)){_.preventDefault();let w=s!==void 0?s:Sl(g)===Sl(v);p(r,{replace:w,state:l,preventScrollReset:a,relative:c,viewTransition:f})}},[g,p,v,s,l,n,r,a,c,f])}function uE(r,e){e===void 0&&(e={});let n=O.useContext(tE);n==null&&Oe(!1);let{basename:s}=lE(Oc.useViewTransitionState),l=Yl(r,{relative:e.relative});if(!n.isTransitioning)return!1;let a=fi(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=fi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Rc(l.pathname,c)!=null||Rc(l.pathname,a)!=null}const cE=()=>{};var vm={};/**
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
 */const Bg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const j=function(r,e){if(!r)throw Ti(e)},Ti=function(r){return new Error("Firebase Database ("+Bg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Vg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},dE=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const a=r[n++];e[s++]=String.fromCharCode((l&31)<<6|a&63)}else if(l>239&&l<365){const a=r[n++],c=r[n++],f=r[n++],p=((l&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const a=r[n++],c=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(a&63)<<6|c&63)}}return e.join("")},od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const a=r[l],c=l+1<r.length,f=c?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,v=a>>2,_=(a&3)<<4|f>>4;let w=(f&15)<<2|g>>6,P=g&63;p||(P=64,c||(w=64)),s.push(n[v],n[_],n[w],n[P])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Vg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):dE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const a=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const _=l<r.length?n[r.charAt(l)]:64;if(++l,a==null||f==null||g==null||_==null)throw new hE;const w=a<<2|f>>4;if(s.push(w),g!==64){const P=f<<4&240|g>>2;if(s.push(P),_!==64){const R=g<<6&192|_;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class hE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(r){const e=Vg(r);return od.encodeByteArray(e,!0)},Tl=function(r){return Hg(r).replace(/\./g,"")},kl=function(r){try{return od.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fE(r){return $g(void 0,r)}function $g(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pE(n)||(r[n]=$g(r[n],e[n]));return r}function pE(r){return r!=="__proto__"}/**
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
 */function mE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gE=()=>mE().__FIREBASE_DEFAULTS__,_E=()=>{if(typeof process>"u"||typeof vm>"u")return;const r=vm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},vE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&kl(r[1]);return e&&JSON.parse(e)},ld=()=>{try{return cE()||gE()||_E()||vE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Gg=r=>{var e,n;return(n=(e=ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},yE=r=>{const e=Gg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qg=()=>{var r;return(r=ld())===null||r===void 0?void 0:r.config},Kg=r=>{var e;return(e=ld())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */function ki(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qg(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function wE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Tl(JSON.stringify(n)),Tl(JSON.stringify(c)),""].join(".")}const Ss={};function EE(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ss))Ss[e]?r.emulator.push(e):r.prod.push(e);return r}function CE(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let ym=!1;function Yg(r,e){if(typeof window>"u"||typeof document>"u"||!ki(window.location.host)||Ss[r]===e||Ss[r]||ym)return;Ss[r]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",a=EE().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{ym=!0,c()},w}function v(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function _(){const w=CE(s),P=n("text"),R=document.getElementById(P)||document.createElement("span"),F=n("learnmore"),A=document.getElementById(F)||document.createElement("a"),Q=n("preprendIcon"),x=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const z=w.element;f(z),v(A,F);const W=g();p(x,Q),z.append(x,R,A,W),document.body.appendChild(z)}a?(R.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function SE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TE(){const r=ut();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function kE(){return Bg.NODE_ADMIN===!0}function NE(){try{return typeof indexedDB=="object"}catch{return!1}}function xE(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var a;e(((a=l.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const PE="FirebaseError";class sr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=PE,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,a=this.errors[e],c=a?RE(a,s):"Error",f=`${this.serviceName}: ${c} (${l}).`;return new sr(l,f,s)}}function RE(r,e){return r.replace(AE,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const AE=/\{\$([^}]+)}/g;/**
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
 */function Os(r){return JSON.parse(r)}function He(r){return JSON.stringify(r)}/**
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
 */const Xg=function(r){let e={},n={},s={},l="";try{const a=r.split(".");e=Os(kl(a[0])||""),n=Os(kl(a[1])||""),l=a[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},OE=function(r){const e=Xg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},DE=function(r){const e=Xg(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function sn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function pi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Dc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Nl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Tr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const a=r[l],c=e[l];if(wm(a)&&wm(c)){if(!Tr(a,c))return!1}else if(a!==c)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function wm(r){return r!==null&&typeof r=="object"}/**
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
 */class LE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const w=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],a=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,v;for(let _=0;_<80;_++){_<40?_<20?(g=f^a&(c^f),v=1518500249):(g=a^c^f,v=1859775393):_<60?(g=a&c|f&(a|c),v=2400959708):(g=a^c^f,v=3395469782);const w=(l<<5|l>>>27)+g+p+v+s[_]&4294967295;p=f,f=c,c=(a<<30|a>>>2)&4294967295,a=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const a=this.buf_;let c=this.inbuf_;for(;l<n;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(a[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}else for(;l<n;)if(a[c]=e[l],++c,++l,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[l]>>a&255,++s;return e}}function ME(r,e){const n=new bE(r,e);return n.subscribe.bind(n)}class bE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");FE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=hc),l.error===void 0&&(l.error=hc),l.complete===void 0&&(l.complete=hc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function hc(){}function Jl(r,e){return`${r} failed: ${e} argument `}/**
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
 */const UE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const a=l-55296;s++,j(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(a<<10)+c}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Xl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ct(r){return r&&r._delegate?r._delegate:r}class kr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class jE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Hs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(l)return null;throw a}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WE(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:l});s.resolve(a)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);s===f&&c.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(l,a);const c=this.instances.get(l);return c&&e(c,l),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zE(r){return r===wr?void 0:r}function WE(r){return r.instantiationMode==="EAGER"}/**
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
 */class BE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ye||(ye={}));const VE={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},HE=ye.INFO,$E={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},GE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=$E[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ud{constructor(e){this.name=e,this._logLevel=HE,this._logHandler=GE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const qE=(r,e)=>e.some(n=>r instanceof n);let Em,Cm;function KE(){return Em||(Em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QE(){return Cm||(Cm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zg=new WeakMap,Lc=new WeakMap,e_=new WeakMap,fc=new WeakMap,cd=new WeakMap;function YE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",a),r.removeEventListener("error",c)},a=()=>{n(Yn(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",a),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&Zg.set(n,r)}).catch(()=>{}),cd.set(e,r),e}function JE(r){if(Lc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",c),r.removeEventListener("abort",c)},a=()=>{n(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",a),r.addEventListener("error",c),r.addEventListener("abort",c)});Lc.set(r,e)}let Mc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Lc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||e_.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function XE(r){Mc=r(Mc)}function ZE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(pc(this),e,...n);return e_.set(s,e.sort?e.sort():[e]),Yn(s)}:QE().includes(r)?function(...e){return r.apply(pc(this),e),Yn(Zg.get(this))}:function(...e){return Yn(r.apply(pc(this),e))}}function eC(r){return typeof r=="function"?ZE(r):(r instanceof IDBTransaction&&JE(r),qE(r,KE())?new Proxy(r,Mc):r)}function Yn(r){if(r instanceof IDBRequest)return YE(r);if(fc.has(r))return fc.get(r);const e=eC(r);return e!==r&&(fc.set(r,e),cd.set(e,r)),e}const pc=r=>cd.get(r);function tC(r,e,{blocked:n,upgrade:s,blocking:l,terminated:a}={}){const c=indexedDB.open(r,e),f=Yn(c);return s&&c.addEventListener("upgradeneeded",p=>{s(Yn(c.result),p.oldVersion,p.newVersion,Yn(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{a&&p.addEventListener("close",()=>a()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const nC=["get","getKey","getAll","getAllKeys","count"],rC=["put","add","delete","clear"],mc=new Map;function Sm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(mc.get(e))return mc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=rC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||nC.includes(n)))return;const a=async function(c,...f){const p=this.transaction(c,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return mc.set(e,a),a}XE(r=>({...r,get:(e,n,s)=>Sm(e,n)||r.get(e,n,s),has:(e,n)=>!!Sm(e,n)||r.has(e,n)}));/**
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
 */class iC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function sC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",Im="0.13.2";/**
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
 */const yn=new ud("@firebase/app"),oC="@firebase/app-compat",lC="@firebase/analytics-compat",aC="@firebase/analytics",uC="@firebase/app-check-compat",cC="@firebase/app-check",dC="@firebase/auth",hC="@firebase/auth-compat",fC="@firebase/database",pC="@firebase/data-connect",mC="@firebase/database-compat",gC="@firebase/functions",_C="@firebase/functions-compat",vC="@firebase/installations",yC="@firebase/installations-compat",wC="@firebase/messaging",EC="@firebase/messaging-compat",CC="@firebase/performance",SC="@firebase/performance-compat",IC="@firebase/remote-config",TC="@firebase/remote-config-compat",kC="@firebase/storage",NC="@firebase/storage-compat",xC="@firebase/firestore",PC="@firebase/ai",RC="@firebase/firestore-compat",AC="firebase",OC="11.10.0";/**
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
 */const Fc="[DEFAULT]",DC={[bc]:"fire-core",[oC]:"fire-core-compat",[aC]:"fire-analytics",[lC]:"fire-analytics-compat",[cC]:"fire-app-check",[uC]:"fire-app-check-compat",[dC]:"fire-auth",[hC]:"fire-auth-compat",[fC]:"fire-rtdb",[pC]:"fire-data-connect",[mC]:"fire-rtdb-compat",[gC]:"fire-fn",[_C]:"fire-fn-compat",[vC]:"fire-iid",[yC]:"fire-iid-compat",[wC]:"fire-fcm",[EC]:"fire-fcm-compat",[CC]:"fire-perf",[SC]:"fire-perf-compat",[IC]:"fire-rc",[TC]:"fire-rc-compat",[kC]:"fire-gcs",[NC]:"fire-gcs-compat",[xC]:"fire-fst",[RC]:"fire-fst-compat",[PC]:"fire-vertex","fire-js":"fire-js",[AC]:"fire-js-all"};/**
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
 */const xl=new Map,LC=new Map,Uc=new Map;function Tm(r,e){try{r.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function mi(r){const e=r.name;if(Uc.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;Uc.set(e,r);for(const n of xl.values())Tm(n,r);for(const n of LC.values())Tm(n,r);return!0}function dd(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Bt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const MC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new $s("app","Firebase",MC);/**
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
 */class bC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
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
 */const xi=OC;function t_(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Jn.create("bad-app-name",{appName:String(l)});if(n||(n=qg()),!n)throw Jn.create("no-options");const a=xl.get(l);if(a){if(Tr(n,a.options)&&Tr(s,a.config))return a;throw Jn.create("duplicate-app",{appName:l})}const c=new BE(l);for(const p of Uc.values())c.addComponent(p);const f=new bC(n,s,c);return xl.set(l,f),f}function n_(r=Fc){const e=xl.get(r);if(!e&&r===Fc&&qg())return t_();if(!e)throw Jn.create("no-app",{appName:r});return e}function Xn(r,e,n){var s;let l=(s=DC[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const a=l.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${l}" with version "${e}":`];a&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(f.join(" "));return}mi(new kr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const FC="firebase-heartbeat-database",UC=1,Ds="firebase-heartbeat-store";let gc=null;function r_(){return gc||(gc=tC(FC,UC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ds)}catch(n){console.warn(n)}}}}).catch(r=>{throw Jn.create("idb-open",{originalErrorMessage:r.message})})),gc}async function jC(r){try{const n=(await r_()).transaction(Ds),s=await n.objectStore(Ds).get(i_(r));return await n.done,s}catch(e){if(e instanceof sr)yn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function km(r,e){try{const s=(await r_()).transaction(Ds,"readwrite");await s.objectStore(Ds).put(e,i_(r)),await s.done}catch(n){if(n instanceof sr)yn.warn(n.message);else{const s=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(s.message)}}}function i_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const zC=1024,WC=30;class BC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Nm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:l}),this._heartbeatsCache.heartbeats.length>WC){const c=$C(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){yn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nm(),{heartbeatsToSend:s,unsentEntries:l}=VC(this._heartbeatsCache.heartbeats),a=Tl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return yn.warn(n),""}}}function Nm(){return new Date().toISOString().substring(0,10)}function VC(r,e=zC){const n=[];let s=r.slice();for(const l of r){const a=n.find(c=>c.agent===l.agent);if(a){if(a.dates.push(l.date),xm(n)>e){a.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),xm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class HC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NE()?xE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function xm(r){return Tl(JSON.stringify({version:2,heartbeats:r})).length}function $C(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function GC(r){mi(new kr("platform-logger",e=>new iC(e),"PRIVATE")),mi(new kr("heartbeat",e=>new BC(e),"PRIVATE")),Xn(bc,Im,r),Xn(bc,Im,"esm2017"),Xn("fire-js","")}GC("");function hd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function s_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qC=s_,o_=new $s("auth","Firebase",s_());/**
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
 */const Pl=new ud("@firebase/auth");function KC(r,...e){Pl.logLevel<=ye.WARN&&Pl.warn(`Auth (${xi}): ${r}`,...e)}function vl(r,...e){Pl.logLevel<=ye.ERROR&&Pl.error(`Auth (${xi}): ${r}`,...e)}/**
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
 */function rn(r,...e){throw pd(r,...e)}function Gt(r,...e){return pd(r,...e)}function fd(r,e,n){const s=Object.assign(Object.assign({},qC()),{[e]:n});return new $s("auth","Firebase",s).create(e,{appName:r.name})}function Ir(r){return fd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function QC(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&rn(r,"argument-error"),fd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return o_.create(r,...e)}function te(r,e,...n){if(!r)throw pd(e,...n)}function mn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw vl(e),new Error(e)}function wn(r,e){r||mn(e)}/**
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
 */function jc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function YC(){return Pm()==="http:"||Pm()==="https:"}function Pm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function JC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YC()||IE()||"connection"in navigator)?navigator.onLine:!0}function XC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=ad()||Jg()}get(){return JC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function md(r,e){wn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class l_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tS=new Gs(3e4,6e4);function gd(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Pi(r,e,n,s,l={}){return a_(r,l,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const f=Ni(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},a);return SE()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&ki(r.emulatorConfig.host)&&(g.credentials="include"),l_.fetch()(await u_(r,r.config.apiHost,n,f),g)})}async function a_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},ZC),e);try{const l=new rS(r),a=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw pl(r,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const f=a.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw pl(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw pl(r,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw fd(r,v,g);rn(r,v)}}catch(l){if(l instanceof sr)throw l;rn(r,"network-request-failed",{message:String(l)})}}async function nS(r,e,n,s,l={}){const a=await Pi(r,e,n,s,l);return"mfaPendingCredential"in a&&rn(r,"multi-factor-auth-required",{_serverResponse:a}),a}async function u_(r,e,n,s){const l=`${e}${n}?${s}`,a=r,c=a.config.emulator?md(r.config,l):`${r.config.apiScheme}://${l}`;return eS.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}class rS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"network-request-failed")),tS.get())})}}function pl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Gt(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function iS(r,e){return Pi(r,"POST","/v1/accounts:delete",e)}async function Rl(r,e){return Pi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Is(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sS(r,e=!1){const n=ct(r),s=await n.getIdToken(e),l=_d(s);te(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const a=typeof l.firebase=="object"?l.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:l,token:s,authTime:Is(_c(l.auth_time)),issuedAtTime:Is(_c(l.iat)),expirationTime:Is(_c(l.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function _c(r){return Number(r)*1e3}function _d(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return vl("JWT malformed, contained fewer than 3 sections"),null;try{const l=kl(n);return l?JSON.parse(l):(vl("Failed to decode base64 JWT payload"),null)}catch(l){return vl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Rm(r){const e=_d(r);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sr&&oS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function oS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class lS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Al(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Ls(r,Rl(n,{idToken:s}));te(l==null?void 0:l.users.length,n,"internal-error");const a=l.users[0];r._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?c_(a.providerUserInfo):[],f=uS(r.providerData,c),p=r.isAnonymous,g=!(r.email&&a.passwordHash)&&!(f!=null&&f.length),v=p?g:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new zc(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(r,_)}async function aS(r){const e=ct(r);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uS(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function c_(r){return r.map(e=>{var{providerId:n}=e,s=hd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function cS(r,e){const n=await a_(r,{},async()=>{const s=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:a}=r.config,c=await u_(r,l,"/v1/token",`key=${a}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return r.emulatorConfig&&ki(r.emulatorConfig.host)&&(p.credentials="include"),l_.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dS(r,e){return Pi(r,"POST","/v2/accounts:revokeToken",gd(r,e))}/**
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
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Rm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:a}=await cS(e,n);this.updateTokensAndExpiration(s,l,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:a}=n,c=new li;return s&&(te(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(te(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),a&&(te(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Vn(r,e){te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,a=hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new zc(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sS(this,e)}reload(){return aS(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await Ls(this,iS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,a,c,f,p,g,v;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(l=n.email)!==null&&l!==void 0?l:void 0,P=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,R=(c=n.photoURL)!==null&&c!==void 0?c:void 0,F=(f=n.tenantId)!==null&&f!==void 0?f:void 0,A=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,Q=(g=n.createdAt)!==null&&g!==void 0?g:void 0,x=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:z,emailVerified:W,isAnonymous:ne,providerData:re,stsTokenManager:ge}=n;te(z&&ge,e,"internal-error");const Pe=li.fromJSON(this.name,ge);te(typeof z=="string",e,"internal-error"),Vn(_,e.name),Vn(w,e.name),te(typeof W=="boolean",e,"internal-error"),te(typeof ne=="boolean",e,"internal-error"),Vn(P,e.name),Vn(R,e.name),Vn(F,e.name),Vn(A,e.name),Vn(Q,e.name),Vn(x,e.name);const Ye=new Ht({uid:z,auth:e,email:w,emailVerified:W,displayName:_,isAnonymous:ne,photoURL:R,phoneNumber:P,tenantId:F,stsTokenManager:Pe,createdAt:Q,lastLoginAt:x});return re&&Array.isArray(re)&&(Ye.providerData=re.map(ce=>Object.assign({},ce))),A&&(Ye._redirectEventId=A),Ye}static async _fromIdTokenResponse(e,n,s=!1){const l=new li;l.updateFromServerResponse(n);const a=new Ht({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Al(a),a}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];te(l.localId!==void 0,"internal-error");const a=l.providerUserInfo!==void 0?c_(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(a!=null&&a.length),f=new li;f.updateFromIdToken(s);const p=new Ht({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:a,metadata:new zc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,g),p}}/**
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
 */const Am=new Map;function gn(r){wn(r instanceof Function,"Expected a class definition");let e=Am.get(r);return e?(wn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Am.set(r,e),e)}/**
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
 */class d_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d_.type="NONE";const Om=d_;/**
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
 */function yl(r,e,n){return`firebase:${r}:${e}:${n}`}class ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:a}=this.auth;this.fullUserKey=yl(this.userKey,l.apiKey,a),this.fullPersistenceKey=yl("persistence",l.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Rl(this.auth,{idToken:e}).catch(()=>{});return n?Ht._fromGetAccountInfoResponse(this.auth,n,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ai(gn(Om),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=l[0]||gn(Om);const c=yl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const v=await g._get(c);if(v){let _;if(typeof v=="string"){const w=await Rl(e,{idToken:v}).catch(()=>{});if(!w)break;_=await Ht._fromGetAccountInfoResponse(e,w,v)}else _=Ht._fromJSON(e,v);g!==a&&(f=_),a=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new ai(a,e,s):(a=p[0],f&&await a._set(c,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==a)try{await g._remove(c)}catch{}})),new ai(a,e,s))}}/**
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
 */function Dm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(m_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(v_(e))return"Webos";if(f_(e))return"Safari";if((e.includes("chrome/")||p_(e))&&!e.includes("edge/"))return"Chrome";if(g_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function h_(r=ut()){return/firefox\//i.test(r)}function f_(r=ut()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function p_(r=ut()){return/crios\//i.test(r)}function m_(r=ut()){return/iemobile/i.test(r)}function g_(r=ut()){return/android/i.test(r)}function __(r=ut()){return/blackberry/i.test(r)}function v_(r=ut()){return/webos/i.test(r)}function vd(r=ut()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function hS(r=ut()){var e;return vd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fS(){return TE()&&document.documentMode===10}function y_(r=ut()){return vd(r)||g_(r)||v_(r)||__(r)||/windows phone/i.test(r)||m_(r)}/**
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
 */function w_(r,e=[]){let n;switch(r){case"Browser":n=Dm(ut());break;case"Worker":n=`${Dm(ut())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${s}`}/**
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
 */class pS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((c,f)=>{try{const p=e(a);c(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function mS(r,e={}){return Pi(r,"GET","/v2/passwordPolicy",gd(r,e))}/**
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
 */const gS=6;class _S{constructor(e){var n,s,l,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:gS,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,a,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class vS{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lm(this),this.idTokenSubscription=new Lm(this),this.beforeStateQueue=new pS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var s,l,a;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Rl(this,{idToken:e}),s=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(l=p.user,a=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(Ir(this));const n=e?ct(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mS(this),n=new _S(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await dS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(f,this,"internal-error"),f.then(()=>{c||a(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zl(r){return ct(r)}class Lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ME(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yS(r){yd=r}function wS(r){return yd.loadJS(r)}function ES(){return yd.gapiScript}function CS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function SS(r,e){const n=dd(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),a=n.getOptions();if(Tr(a,e??{}))return l;rn(l,"already-initialized")}return n.initialize({options:e})}function IS(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function TS(r,e,n){const s=Zl(r);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,a=E_(e),{host:c,port:f}=kS(e),p=f===null?"":`:${f}`,g={url:`${a}//${c}${p}/`},v=Object.freeze({host:c,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(Tr(g,s.config.emulator)&&Tr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,ki(c)?(Qg(`${a}//${c}${p}`),Yg("Auth",!0)):NS()}function E_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function kS(r){const e=E_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const a=l[1];return{host:a,port:Mm(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:Mm(c)}}}function Mm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function NS(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class C_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
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
 */async function ui(r,e){return nS(r,"POST","/v1/accounts:signInWithIdp",gd(r,e))}/**
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
 */const xS="http://localhost";class Nr extends C_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,a=hd(n,["providerId","signInMethod"]);if(!s||!l)return null;const c=new Nr(s,l);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:xS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ni(n)}return e}}/**
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
 */class wd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qs extends wd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends qs{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return pn.credential(n,s)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class $n extends qs{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class Gn extends qs{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Gn.credential(n,s)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const a=await Ht._fromIdTokenResponse(e,s,l),c=bm(s);return new gi({user:a,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=bm(s);return new gi({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function bm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ol extends sr{constructor(e,n,s,l){var a;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Ol(e,n,s,l)}}function S_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(r,a,e,s):a})}async function PS(r,e,n=!1){const s=await Ls(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return gi._forOperation(r,"link",s)}/**
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
 */async function RS(r,e,n=!1){const{auth:s}=r;if(Bt(s.app))return Promise.reject(Ir(s));const l="reauthenticate";try{const a=await Ls(r,S_(s,l,e,r),n);te(a.idToken,s,"internal-error");const c=_d(a.idToken);te(c,s,"internal-error");const{sub:f}=c;return te(r.uid===f,s,"user-mismatch"),gi._forOperation(r,l,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&rn(s,"user-mismatch"),a}}/**
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
 */async function AS(r,e,n=!1){if(Bt(r.app))return Promise.reject(Ir(r));const s="signIn",l=await S_(r,s,e),a=await gi._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(a.user),a}function OS(r,e,n,s){return ct(r).onIdTokenChanged(e,n,s)}function DS(r,e,n){return ct(r).beforeAuthStateChanged(e,n)}function LS(r,e,n,s){return ct(r).onAuthStateChanged(e,n,s)}function MS(r){return ct(r).signOut()}const Dl="__sak";/**
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
 */class I_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bS=1e3,FS=10;class T_ extends I_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);fS()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,FS):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}T_.type="LOCAL";const US=T_;/**
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
 */class k_ extends I_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k_.type="SESSION";const N_=k_;/**
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
 */function jS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ea(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:a}=n.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(c).map(async g=>g(n.origin,a)),p=await jS(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
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
 */function Ed(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class zS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let a,c;return new Promise((f,p)=>{const g=Ed("",20);l.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(_){const w=_;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(w.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function nn(){return window}function WS(r){nn().location.href=r}/**
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
 */function x_(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function BS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function HS(){return x_()?self:null}/**
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
 */const P_="firebaseLocalStorageDb",$S=1,Ll="firebaseLocalStorage",R_="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ta(r,e){return r.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function GS(){const r=indexedDB.deleteDatabase(P_);return new Ks(r).toPromise()}function Wc(){const r=indexedDB.open(P_,$S);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ll,{keyPath:R_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ll)?e(s):(s.close(),await GS(),e(await Wc()))})})}async function Fm(r,e,n){const s=ta(r,!0).put({[R_]:e,value:n});return new Ks(s).toPromise()}async function qS(r,e){const n=ta(r,!1).get(e),s=await new Ks(n).toPromise();return s===void 0?null:s.value}function Um(r,e){const n=ta(r,!0).delete(e);return new Ks(n).toPromise()}const KS=800,QS=3;class A_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>QS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(HS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BS(),!this.activeServiceWorker)return;this.sender=new zS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wc();return await Fm(e,Dl,"1"),await Um(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>qS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const a=ta(l,!1).getAll();return new Ks(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:a}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(a)&&(this.notifyListeners(l,a),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A_.type="LOCAL";const YS=A_;new Gs(3e4,6e4);/**
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
 */function O_(r,e){return e?gn(e):(te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Cd extends C_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JS(r){return AS(r.auth,new Cd(r),r.bypassAuthState)}function XS(r){const{auth:e,user:n}=r;return te(n,e,"internal-error"),RS(n,new Cd(r),r.bypassAuthState)}async function ZS(r){const{auth:e,user:n}=r;return te(n,e,"internal-error"),PS(n,new Cd(r),r.bypassAuthState)}/**
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
 */class D_{constructor(e,n,s,l,a=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:a,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JS;case"linkViaPopup":case"linkViaRedirect":return ZS;case"reauthViaPopup":case"reauthViaRedirect":return XS;default:rn(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eI=new Gs(2e3,1e4);async function tI(r,e,n){if(Bt(r.app))return Promise.reject(Gt(r,"operation-not-supported-in-this-environment"));const s=Zl(r);QC(r,e,wd);const l=O_(s,n);return new Cr(s,"signInViaPopup",e,l).executeNotNull()}class Cr extends D_{constructor(e,n,s,l,a){super(e,n,l,a),this.provider=s,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eI.get())};e()}}Cr.currentPopupAction=null;/**
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
 */const nI="pendingRedirect",wl=new Map;class rI extends D_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const s=await iI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iI(r,e){const n=lI(e),s=oI(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function sI(r,e){wl.set(r._key(),e)}function oI(r){return gn(r._redirectPersistence)}function lI(r){return yl(nI,r.config.apiKey,r.name)}async function aI(r,e,n=!1){if(Bt(r.app))return Promise.reject(Ir(r));const s=Zl(r),l=O_(s,e),c=await new rI(s,l,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const uI=600*1e3;class cI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!L_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uI&&this.cachedEventUids.clear(),this.cachedEventUids.has(jm(e))}saveEventToCache(e){this.cachedEventUids.add(jm(e)),this.lastProcessedEventTime=Date.now()}}function jm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function L_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L_(r);default:return!1}}/**
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
 */async function hI(r,e={}){return Pi(r,"GET","/v1/projects",e)}/**
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
 */const fI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pI=/^https?/;async function mI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await hI(r);for(const n of e)try{if(gI(n))return}catch{}rn(r,"unauthorized-domain")}function gI(r){const e=jc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!pI.test(n))return!1;if(fI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const _I=new Gs(3e4,6e4);function zm(){const r=nn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function vI(r){return new Promise((e,n)=>{var s,l,a;function c(){zm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zm(),n(Gt(r,"network-request-failed"))},timeout:_I.get()})}if(!((l=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((a=nn().gapi)===null||a===void 0)&&a.load)c();else{const f=CS("iframefcb");return nn()[f]=()=>{gapi.load?c():n(Gt(r,"network-request-failed"))},wS(`${ES()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw El=null,e})}let El=null;function yI(r){return El=El||vI(r),El}/**
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
 */const wI=new Gs(5e3,15e3),EI="__/auth/iframe",CI="emulator/auth/iframe",SI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},II=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TI(r){const e=r.config;te(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?md(e,CI):`https://${r.config.authDomain}/${EI}`,s={apiKey:e.apiKey,appName:r.name,v:xi},l=II.get(r.config.apiHost);l&&(s.eid=l);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Ni(s).slice(1)}`}async function kI(r){const e=await yI(r),n=nn().gapi;return te(n,r,"internal-error"),e.open({where:document.body,url:TI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SI,dontclear:!0},s=>new Promise(async(l,a)=>{await s.restyle({setHideOnLeave:!1});const c=Gt(r,"network-request-failed"),f=nn().setTimeout(()=>{a(c)},wI.get());function p(){nn().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{a(c)})}))}/**
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
 */const NI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xI=500,PI=600,RI="_blank",AI="http://localhost";class Wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OI(r,e,n,s=xI,l=PI){const a=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},NI),{width:s.toString(),height:l.toString(),top:a,left:c}),g=ut().toLowerCase();n&&(f=p_(g)?RI:n),h_(g)&&(e=e||AI,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[P,R])=>`${w}${P}=${R},`,"");if(hS(g)&&f!=="_self")return DI(e||"",f),new Wm(null);const _=window.open(e||"",f,v);te(_,r,"popup-blocked");try{_.focus()}catch{}return new Wm(_)}function DI(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const LI="__/auth/handler",MI="emulator/auth/handler",bI=encodeURIComponent("fac");async function Bm(r,e,n,s,l,a){te(r.config.authDomain,r,"auth-domain-config-required"),te(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:xi,eventId:l};if(e instanceof wd){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Dc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,_]of Object.entries({}))c[v]=_}if(e instanceof qs){const v=e.getScopes().filter(_=>_!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${bI}=${encodeURIComponent(p)}`:"";return`${FI(r)}?${Ni(f).slice(1)}${g}`}function FI({config:r}){return r.emulator?md(r,MI):`https://${r.authDomain}/${LI}`}/**
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
 */const vc="webStorageSupport";class UI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N_,this._completeRedirectFn=aI,this._overrideRedirectResult=sI}async _openPopup(e,n,s,l){var a;wn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Bm(e,n,s,jc(),l);return OI(e,c,Ed())}async _openRedirect(e,n,s,l){await this._originValidation(e);const a=await Bm(e,n,s,jc(),l);return WS(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:a}=this.eventManagers[n];return l?Promise.resolve(l):(wn(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await kI(e),s=new cI(e);return n.register("authEvent",l=>(te(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vc,{type:vc},l=>{var a;const c=(a=l==null?void 0:l[0])===null||a===void 0?void 0:a[vc];c!==void 0&&n(!!c),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return y_()||f_()||vd()}}const jI=UI;var Vm="@firebase/auth",Hm="1.10.8";/**
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
 */class zI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function WI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BI(r){mi(new kr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;te(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(r)},g=new vS(s,l,a,p);return IS(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),mi(new kr("auth-internal",e=>{const n=Zl(e.getProvider("auth").getImmediate());return(s=>new zI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(Vm,Hm,WI(r)),Xn(Vm,Hm,"esm2017")}/**
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
 */const VI=300,HI=Kg("authIdTokenMaxAge")||VI;let $m=null;const $I=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>HI)return;const l=n==null?void 0:n.token;$m!==l&&($m=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function GI(r=n_()){const e=dd(r,"auth");if(e.isInitialized())return e.getImmediate();const n=SS(r,{popupRedirectResolver:jI,persistence:[YS,US,N_]}),s=Kg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const c=$I(a.toString());DS(n,c,()=>c(n.currentUser)),OS(n,f=>c(f))}}const l=Gg("auth");return l&&TS(n,`http://${l}`),n}function qI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}yS({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const a=Gt("internal-error");a.customData=l,n(a)},s.type="text/javascript",s.charset="UTF-8",qI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BI("Browser");var KI="firebase",QI="11.10.0";/**
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
 */Xn(KI,QI,"app");var Gm={};const qm="@firebase/database",Km="1.0.20";/**
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
 */let M_="";function YI(r){M_=r}/**
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
 */class JI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class XI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const b_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JI(e)}}catch{}return new XI},Sr=b_("localStorage"),ZI=b_("sessionStorage");/**
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
 */const ci=new ud("@firebase/database"),e1=(function(){let r=1;return function(){return r++}})(),F_=function(r){const e=UE(r),n=new LE;n.update(e);const s=n.digest();return od.encodeByteArray(s)},Qs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Qs.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let Ts=null,Qm=!0;const t1=function(r,e){j(!0,"Can't turn on custom loggers persistently."),ci.logLevel=ye.VERBOSE,Ts=ci.log.bind(ci)},Ze=function(...r){if(Qm===!0&&(Qm=!1,Ts===null&&ZI.get("logging_enabled")===!0&&t1()),Ts){const e=Qs.apply(null,r);Ts(e)}},Ys=function(r){return function(...e){Ze(r,...e)}},Bc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Qs(...r);ci.error(e)},En=function(...r){const e=`FIREBASE FATAL ERROR: ${Qs(...r)}`;throw ci.error(e),new Error(e)},at=function(...r){const e="FIREBASE WARNING: "+Qs(...r);ci.warn(e)},n1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},r1=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",xr="[MAX_NAME]",Ar=function(r,e){if(r===e)return 0;if(r===_i||e===xr)return-1;if(e===_i||r===xr)return 1;{const n=Ym(r),s=Ym(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},i1=function(r,e){return r===e?0:r<e?-1:1},ys=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+He(e))},Id=function(r){if(typeof r!="object"||r===null)return He(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=He(e[s]),n+=":",n+=Id(r[e[s]]);return n+="}",n},U_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function et(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const j_=function(r){j(!Sd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,a,c,f,p;r===0?(a=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=f+s,c=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(a=0,c=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(a%2?1:0),a=Math.floor(a/2);g.push(l?1:0),g.reverse();const v=g.join("");let _="";for(p=0;p<64;p+=8){let w=parseInt(v.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),_=_+w}return _.toLowerCase()},s1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},o1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function l1(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const a1=new RegExp("^-?(0*)\\d{1,10}$"),u1=-2147483648,c1=2147483647,Ym=function(r){if(a1.test(r)){const e=Number(r);if(e>=u1&&e<=c1)return e}return null},Ri=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},d1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ks=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class h1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Bt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class f1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class Cl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Cl.OWNER="owner";/**
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
 */const Td="5",z_="v",W_="s",B_="r",V_="f",H_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$_="ls",G_="p",Vc="ac",q_="websocket",K_="long_polling";/**
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
 */class Q_{constructor(e,n,s,l,a=!1,c="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function p1(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Y_(r,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let s;if(e===q_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===K_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);p1(r)&&(n.ns=r.namespace);const l=[];return et(n,(a,c)=>{l.push(a+"="+c)}),s+l.join("&")}/**
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
 */class m1{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fE(this.counters_)}}/**
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
 */const yc={},wc={};function kd(r){const e=r.toString();return yc[e]||(yc[e]=new m1),yc[e]}function g1(r,e){const n=r.toString();return wc[n]||(wc[n]=e()),wc[n]}/**
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
 */class _1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ri(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jm="start",v1="close",y1="pLPCommand",w1="pRTLPCB",J_="id",X_="pw",Z_="ser",E1="cb",C1="seg",S1="ts",I1="d",T1="dframe",ev=1870,tv=30,k1=ev-tv,N1=25e3,x1=3e4;class oi{constructor(e,n,s,l,a,c,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ys(e),this.stats_=kd(n),this.urlFn=p=>(this.appCheckToken&&(p[Vc]=this.appCheckToken),Y_(n,K_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(x1)),r1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Nd((...a)=>{const[c,f,p,g,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Jm)this.id=f,this.password=p;else if(c===v1)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,f]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jm]="t",s[Z_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[E1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[z_]=Td,this.transportSessionId&&(s[W_]=this.transportSessionId),this.lastSessionId&&(s[$_]=this.lastSessionId),this.applicationId&&(s[G_]=this.applicationId),this.appCheckToken&&(s[Vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&H_.test(location.hostname)&&(s[B_]=V_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!s1()&&!o1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Hg(n),l=U_(s,k1);for(let a=0;a<l.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[T1]="t",s[J_]=e,s[X_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Nd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=e1(),window[y1+this.uniqueCallbackIdentifier]=e,window[w1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Nd.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){Ze("frame writing exception"),f.stack&&Ze(f.stack),Ze(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ze("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[J_]=this.myID,e[X_]=this.myPW,e[Z_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tv+s.length<=ev;){const c=this.pendingSegs.shift();s=s+"&"+C1+l+"="+c.seg+"&"+S1+l+"="+c.ts+"&"+I1+l+"="+c.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(N1)),a=()=>{clearTimeout(l),s()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const P1=16384,R1=45e3;let Ml=null;typeof MozWebSocket<"u"?Ml=MozWebSocket:typeof WebSocket<"u"&&(Ml=WebSocket);class Vt{constructor(e,n,s,l,a,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ys(this.connId),this.stats_=kd(n),this.connURL=Vt.connectionURL_(n,c,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,a){const c={};return c[z_]=Td,typeof location<"u"&&location.hostname&&H_.test(location.hostname)&&(c[B_]=V_),n&&(c[W_]=n),s&&(c[$_]=s),l&&(c[Vc]=l),a&&(c[G_]=a),Y_(e,q_,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let s;kE(),this.mySock=new Ml(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ml!==null&&!Vt.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=U_(n,P1);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(R1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2;Vt.healthyTimeout=3e4;/**
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
 */class Ms{static get ALL_TRANSPORTS(){return[oi,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Vt&&Vt.isAvailable();let s=n&&!Vt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Vt];else{const l=this.transports_=[];for(const a of Ms.ALL_TRANSPORTS)a&&a.isAvailable()&&l.push(a);Ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ms.globalTransportInitialized_=!1;/**
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
 */const A1=6e4,O1=5e3,D1=10*1024,L1=100*1024,Ec="t",Xm="d",M1="s",Zm="r",b1="e",eg="o",tg="a",ng="n",rg="p",F1="h";class U1{constructor(e,n,s,l,a,c,f,p,g,v){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=a,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ys("c:"+this.id+":"),this.transportManager_=new Ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>L1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>D1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===tg?this.upgradeIfSecondaryHealthy_():n===Zm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===eg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ng,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ys("t",e),s=ys("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ys(Ec,e);if(Xm in e){const s=e[Xm];if(n===F1){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===ng){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===M1?this.onConnectionShutdown_(s):n===Zm?this.onReset_(s):n===b1?Bc("Server Error: "+s):n===eg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Td!==s&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(A1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class nv{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class rv{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let a=0;a<l.length;a++)if(l[a].callback===n&&(!s||s===l[a].context)){l.splice(a,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class bl extends rv{static getInstance(){return new bl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ad()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ig=32,sg=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new we("")}function oe(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function tr(r){return r.pieces_.length-r.pieceNum_}function Ie(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new we(r.pieces_,e)}function xd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function j1(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function bs(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function iv(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new we(e,0)}function Me(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new we(n,0)}function ue(r){return r.pieceNum_>=r.pieces_.length}function lt(r,e){const n=oe(r),s=oe(e);if(n===null)return e;if(n===s)return lt(Ie(r),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function z1(r,e){const n=bs(r,0),s=bs(e,0);for(let l=0;l<n.length&&l<s.length;l++){const a=Ar(n[l],s[l]);if(a!==0)return a}return n.length===s.length?0:n.length<s.length?-1:1}function Pd(r,e){if(tr(r)!==tr(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ot(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(tr(r)>tr(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class W1{constructor(e,n){this.errorPrefix_=n,this.parts_=bs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xl(this.parts_[s]);sv(this)}}function B1(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Xl(e),sv(r)}function V1(r){const e=r.parts_.pop();r.byteLength_-=Xl(e),r.parts_.length>0&&(r.byteLength_-=1)}function sv(r){if(r.byteLength_>sg)throw new Error(r.errorPrefix_+"has a key path longer than "+sg+" bytes ("+r.byteLength_+").");if(r.parts_.length>ig)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ig+") or object contains a cycle "+Er(r))}function Er(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class Rd extends rv{static getInstance(){return new Rd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ws=1e3,H1=300*1e3,og=30*1e3,$1=1.3,G1=3e4,q1="server_kill",lg=3;class vn extends nv{constructor(e,n,s,l,a,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=vn.nextPersistentConnectionId_++,this.log_=Ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ws,this.maxReconnectDelay_=H1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,a={r:l,a:e,b:n};this.log_(He(a)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Hs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,s,l){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(c).set(a,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const a={p:s},c="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,f=>{const p=f.d,g=f.s;vn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const s=pi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=og)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const a=l.s,c=l.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const a={p:e},c="n";l&&(a.q=s,a.t=l),this.sendRequest(c,a)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const a={p:n,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,a){this.initConnection_();const c={p:n,d:s};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bc("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>G1&&(this.reconnectDelay_=ws),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+vn.nextConnectionId_++,a=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,s())},g=function(_){j(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?Ze("getToken() completed but was canceled"):(Ze("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=w&&w.token,f=new U1(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,P=>{at(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(q1)},a))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&at(_),p())}}}interrupt(e){Ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dc(this.interruptReasons_)&&(this.reconnectDelay_=ws,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(a=>Id(a)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new we(e).toString();let l;if(this.listens.has(s)){const a=this.listens.get(s);l=a.get(n),a.delete(n),a.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lg&&(this.reconnectDelay_=og,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+M_.replace(/\./g,"-")]=1,ad()?e["framework.cordova"]=1:Jg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bl.getInstance().currentlyOnline();return Dc(this.interruptReasons_)&&e}}vn.nextPersistentConnectionId_=0;vn.nextConnectionId_=0;/**
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
 */class le{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new le(e,n)}}/**
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
 */class na{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new le(_i,e),l=new le(_i,n);return this.compare(s,l)!==0}minPost(){return le.MIN}}/**
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
 */let ml;class ov extends na{static get __EMPTY_NODE(){return ml}static set __EMPTY_NODE(e){ml=e}compare(e,n){return Ar(e.name,n.name)}isDefinedOn(e){throw Ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return le.MIN}maxPost(){return new le(xr,ml)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,ml)}toString(){return".key"}}const di=new ov;/**
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
 */class gl{constructor(e,n,s,l,a=null){this.isReverse_=l,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,l,a){this.key=e,this.value=n,this.color=s??Qe.RED,this.left=l??vt.EMPTY_NODE,this.right=a??vt.EMPTY_NODE}copy(e,n,s,l,a){return new Qe(e??this.key,n??this.value,s??this.color,l??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const a=s(e,l.key);return a<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):a===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return vt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class K1{copy(e,n,s,l,a){return this}insert(e,n,s){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(e,n=vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gl(this.root_,null,this.comparator_,!0,e)}}vt.EMPTY_NODE=new K1;/**
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
 */function Q1(r,e){return Ar(r.name,e.name)}function Ad(r,e){return Ar(r,e)}/**
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
 */let Hc;function Y1(r){Hc=r}const lv=function(r){return typeof r=="number"?"number:"+j_(r):"string:"+r},av=function(r){if(r.isLeafNode()){const e=r.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else j(r===Hc||r.isEmpty(),"priority of unexpected type.");j(r===Hc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ag;class Ke{static set __childrenNodeConstructor(e){ag=e}static get __childrenNodeConstructor(){return ag}constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),av(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:oe(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(j(s!==".priority"||tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=j_(this.value_):e+=this.value_,this.lazyHash_=F_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ke.VALUE_TYPE_ORDER.indexOf(n),a=Ke.VALUE_TYPE_ORDER.indexOf(s);return j(l>=0,"Unknown leaf type: "+n),j(a>=0,"Unknown leaf type: "+s),l===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let uv,cv;function J1(r){uv=r}function X1(r){cv=r}class Z1 extends na{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),a=s.compareTo(l);return a===0?Ar(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return le.MIN}maxPost(){return new le(xr,new Ke("[PRIORITY-POST]",cv))}makePost(e,n){const s=uv(e);return new le(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const be=new Z1;/**
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
 */const eT=Math.log(2);class tT{constructor(e){const n=a=>parseInt(Math.log(a)/eT,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fl=function(r,e,n,s){r.sort(e);const l=function(p,g){const v=g-p;let _,w;if(v===0)return null;if(v===1)return _=r[p],w=n?n(_):_,new Qe(w,_.node,Qe.BLACK,null,null);{const P=parseInt(v/2,10)+p,R=l(p,P),F=l(P+1,g);return _=r[P],w=n?n(_):_,new Qe(w,_.node,Qe.BLACK,R,F)}},a=function(p){let g=null,v=null,_=r.length;const w=function(R,F){const A=_-R,Q=_;_-=R;const x=l(A+1,Q),z=r[A],W=n?n(z):z;P(new Qe(W,z.node,F,null,x))},P=function(R){g?(g.left=R,g=R):(v=R,g=R)};for(let R=0;R<p.count;++R){const F=p.nextBitIsOne(),A=Math.pow(2,p.count-(R+1));F?w(A,Qe.BLACK):(w(A,Qe.BLACK),w(A,Qe.RED))}return v},c=new tT(r.length),f=a(c);return new vt(s||e,f)};/**
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
 */let Cc;const ii={};class _n{static get Default(){return j(ii&&be,"ChildrenNode.ts has not been loaded"),Cc=Cc||new _n({".priority":ii},{".priority":be}),Cc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=pi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof vt?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){j(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const a=n.getIterator(le.Wrap);let c=a.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=a.getNext();let f;l?f=Fl(s,e.getCompare()):f=ii;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new _n(v,g)}addToIndexes(e,n){const s=Nl(this.indexes_,(l,a)=>{const c=pi(this.indexSet_,a);if(j(c,"Missing index implementation for "+a),l===ii)if(c.isDefinedOn(e.node)){const f=[],p=n.getIterator(le.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Fl(f,c.getCompare())}else return ii;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new le(e.name,f))),p.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=Nl(this.indexes_,l=>{if(l===ii)return l;{const a=n.get(e.name);return a?l.remove(new le(e.name,a)):l}});return new _n(s,this.indexSet_)}}/**
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
 */let Es;class Z{static get EMPTY_NODE(){return Es||(Es=new Z(new vt(Ad),null,_n.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&av(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new le(e,n);let l,a;n.isEmpty()?(l=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?Es:this.priorityNode_;return new Z(l,c,a)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{j(oe(e)!==".priority"||tr(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ie(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,a=!0;if(this.forEachChild(be,(c,f)=>{n[c]=f.val(e),s++,a&&Z.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):a=!1}),!e&&a&&l<2*s){const c=[];for(const f in n)c[f]=n[f];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lv(this.getPriority().val())+":"),this.forEachChild(be,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":F_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const a=l.getPredecessorKey(new le(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new le(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new le(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,le.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)<0;)l.getNext(),a=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)>0;)l.getNext(),a=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Js?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(be),l=n.getIterator(be);let a=s.getNext(),c=l.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=s.getNext(),c=l.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nT extends Z{constructor(){super(new vt(Ad),Z.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const Js=new nT;Object.defineProperties(le,{MIN:{value:new le(_i,Z.EMPTY_NODE)},MAX:{value:new le(xr,Js)}});ov.__EMPTY_NODE=Z.EMPTY_NODE;Ke.__childrenNodeConstructor=Z;Y1(Js);X1(Js);/**
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
 */const rT=!0;function Ve(r,e=null){if(r===null)return Z.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ke(n,Ve(e))}if(!(r instanceof Array)&&rT){const n=[];let s=!1;if(et(r,(c,f)=>{if(c.substring(0,1)!=="."){const p=Ve(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new le(c,p)))}}),n.length===0)return Z.EMPTY_NODE;const a=Fl(n,Q1,c=>c.name,Ad);if(s){const c=Fl(n,be.getCompare());return new Z(a,Ve(e),new _n({".priority":c},{".priority":be}))}else return new Z(a,Ve(e),_n.Default)}else{let n=Z.EMPTY_NODE;return et(r,(s,l)=>{if(sn(r,s)&&s.substring(0,1)!=="."){const a=Ve(l);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(s,a))}}),n.updatePriority(Ve(e))}}J1(Ve);/**
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
 */class iT extends na{constructor(e){super(),this.indexPath_=e,j(!ue(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),a=s.compareTo(l);return a===0?Ar(e.name,n.name):a}makePost(e,n){const s=Ve(e),l=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new le(n,l)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,Js);return new le(xr,e)}toString(){return bs(this.indexPath_,0).join("/")}}/**
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
 */class sT extends na{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ar(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,n){const s=Ve(e);return new le(n,s)}toString(){return".value"}}const oT=new sT;/**
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
 */function dv(r){return{type:"value",snapshotNode:r}}function vi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Fs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Us(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function lT(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Od{constructor(e){this.index_=e}updateChild(e,n,s,l,a,c){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(Fs(n,f)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(vi(n,s)):c.trackChildChange(Us(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(be,(l,a)=>{n.hasChild(l)||s.trackChildChange(Fs(l,a))}),n.isLeafNode()||n.forEachChild(be,(l,a)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(a)||s.trackChildChange(Us(l,a,c))}else s.trackChildChange(vi(l,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class js{constructor(e){this.indexedFilter_=new Od(e.getIndex()),this.index_=e.getIndex(),this.startPost_=js.getStartPost_(e),this.endPost_=js.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,a,c){return this.matches(new le(n,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,a,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Z.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(Z.EMPTY_NODE);const a=this;return n.forEachChild(be,(c,f)=>{a.matches(new le(c,f))||(l=l.updateImmediateChild(c,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class aT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new js(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,a,c){return this.rangedFilter_.matches(new le(n,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,a,c):this.fullLimitUpdateChild_(e,n,s,a,c)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=Z.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const f=a.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(Z.EMPTY_NODE);let a;this.reverse_?a=l.getReverseIterator(this.index_):a=l.getIterator(this.index_);let c=0;for(;a.hasNext();){const f=a.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:l=l.updateImmediateChild(f.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,a){let c;if(this.reverse_){const _=this.index_.getCompare();c=(w,P)=>_(P,w)}else c=this.index_.getCompare();const f=e;j(f.numChildren()===this.limit_,"");const p=new le(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const P=w==null?1:c(w,p);if(v&&!s.isEmpty()&&P>=0)return a!=null&&a.trackChildChange(Us(n,s,_)),f.updateImmediateChild(n,s);{a!=null&&a.trackChildChange(Fs(n,_));const F=f.updateImmediateChild(n,Z.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(a!=null&&a.trackChildChange(vi(w.name,w.node)),F.updateImmediateChild(w.name,w.node)):F}}else return s.isEmpty()?e:v&&c(g,p)>=0?(a!=null&&(a.trackChildChange(Fs(g.name,g.node)),a.trackChildChange(vi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,Z.EMPTY_NODE)):e}}/**
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
 */class Dd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===be}copy(){const e=new Dd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uT(r){return r.loadsAllData()?new Od(r.getIndex()):r.hasLimit()?new aT(r):new js(r)}function ug(r){const e={};if(r.isDefault())return e;let n;if(r.index_===be?n="$priority":r.index_===oT?n="$value":r.index_===di?n="$key":(j(r.index_ instanceof iT,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=He(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=He(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+He(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=He(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+He(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function cg(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==be&&(e.i=r.index_.toString()),e}/**
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
 */class Ul extends nv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Ys("p:rest:"),this.listens_={}}listen(e,n,s,l){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=Ul.getListenId_(e,s),f={};this.listens_[c]=f;const p=ug(e._queryParams);this.restRequest_(a+".json",p,(g,v)=>{let _=v;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(a,_,!1,s),pi(this.listens_,c)===f){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",l(w,null)}})}unlisten(e,n){const s=Ul.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ug(e._queryParams),s=e._path.toString(),l=new Hs;return this.restRequest_(s+".json",n,(a,c)=>{let f=c;a===404&&(f=null,a=null),a===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,a])=>{l&&l.accessToken&&(n.auth=l.accessToken),a&&a.token&&(n.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(n);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Os(f.responseText)}catch{at("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&at("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
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
 */class cT{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jl(){return{value:null,children:new Map}}function hv(r,e,n){if(ue(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=oe(e);r.children.has(s)||r.children.set(s,jl());const l=r.children.get(s);e=Ie(e),hv(l,e,n)}}function $c(r,e,n){r.value!==null?n(e,r.value):dT(r,(s,l)=>{const a=new we(e.toString()+"/"+s);$c(l,a,n)})}function dT(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class hT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&et(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const dg=10*1e3,fT=30*1e3,pT=300*1e3;class mT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hT(e);const s=dg+(fT-dg)*Math.random();ks(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;et(e,(l,a)=>{a>0&&sn(this.statsToReport_,l)&&(n[l]=a,s=!0)}),s&&this.server_.reportStats(n),ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*pT))}}/**
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
 */var $t;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($t||($t={}));function Ld(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Md(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class zl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=$t.ACK_USER_WRITE,this.source=Ld()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new zl(me(),n,this.revert)}}else return j(oe(this.path)===e,"operationForChild called for unrelated child."),new zl(Ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class zs{constructor(e,n){this.source=e,this.path=n,this.type=$t.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new zs(this.source,me()):new zs(this.source,Ie(this.path))}}/**
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
 */class Pr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=$t.OVERWRITE}operationForChild(e){return ue(this.path)?new Pr(this.source,me(),this.snap.getImmediateChild(e)):new Pr(this.source,Ie(this.path),this.snap)}}/**
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
 */class yi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=$t.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new Pr(this.source,me(),n.value):new yi(this.source,me(),n)}else return j(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yi(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class nr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class gT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _T(r,e,n,s){const l=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(lT(c.childName,c.snapshotNode))}),Cs(r,l,"child_removed",e,s,n),Cs(r,l,"child_added",e,s,n),Cs(r,l,"child_moved",a,s,n),Cs(r,l,"child_changed",e,s,n),Cs(r,l,"value",e,s,n),l}function Cs(r,e,n,s,l,a){const c=s.filter(f=>f.type===n);c.sort((f,p)=>yT(r,f,p)),c.forEach(f=>{const p=vT(r,f,a);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function vT(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function yT(r,e,n){if(e.childName==null||n.childName==null)throw Ti("Should only compare child_ events.");const s=new le(e.childName,e.snapshotNode),l=new le(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function ra(r,e){return{eventCache:r,serverCache:e}}function Ns(r,e,n,s){return ra(new nr(e,n,s),r.serverCache)}function fv(r,e,n,s){return ra(r.eventCache,new nr(e,n,s))}function Wl(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Rr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let Sc;const wT=()=>(Sc||(Sc=new vt(i1)),Sc);class Se{static fromObject(e){let n=new Se(null);return et(e,(s,l)=>{n=n.set(new we(s),l)}),n}constructor(e,n=wT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ue(e))return null;{const s=oe(e),l=this.children.get(s);if(l!==null){const a=l.findRootMostMatchingPathAndValue(Ie(e),n);return a!=null?{path:Me(new we(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(Ie(e)):new Se(null)}}set(e,n){if(ue(e))return new Se(n,this.children);{const s=oe(e),a=(this.children.get(s)||new Se(null)).set(Ie(e),n),c=this.children.insert(s,a);return new Se(this.value,c)}}remove(e){if(ue(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const l=s.remove(Ie(e));let a;return l.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,l),this.value===null&&a.isEmpty()?new Se(null):new Se(this.value,a)}else return this}}get(e){if(ue(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(Ie(e)):null}}setTree(e,n){if(ue(e))return n;{const s=oe(e),a=(this.children.get(s)||new Se(null)).setTree(Ie(e),n);let c;return a.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,a),new Se(this.value,c)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,a)=>{s[l]=a.fold_(Me(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ue(e))return null;{const a=oe(e),c=this.children.get(a);return c?c.findOnPath_(Ie(e),Me(n,a),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const l=oe(e),a=this.children.get(l);return a?a.foreachOnPath_(Ie(e),Me(n,l),s):new Se(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new Se(null))}}function xs(r,e,n){if(ue(e))return new qt(new Se(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let a=s.value;const c=lt(l,e);return a=a.updateChild(c,n),new qt(r.writeTree_.set(l,a))}else{const l=new Se(n),a=r.writeTree_.setTree(e,l);return new qt(a)}}}function Gc(r,e,n){let s=r;return et(n,(l,a)=>{s=xs(s,Me(e,l),a)}),s}function hg(r,e){if(ue(e))return qt.empty();{const n=r.writeTree_.setTree(e,new Se(null));return new qt(n)}}function qc(r,e){return Or(r,e)!=null}function Or(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function fg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(be,(s,l)=>{e.push(new le(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new le(s,l.value))}),e}function Zn(r,e){if(ue(e))return r;{const n=Or(r,e);return n!=null?new qt(new Se(n)):new qt(r.writeTree_.subtree(e))}}function Kc(r){return r.writeTree_.isEmpty()}function wi(r,e){return pv(me(),r.writeTree_,e)}function pv(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,a)=>{l===".priority"?(j(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):n=pv(Me(r,l),a,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Me(r,".priority"),s)),n}}/**
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
 */function ia(r,e){return vv(e,r)}function ET(r,e,n,s,l){j(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=xs(r.visibleWrites,e,n)),r.lastWriteId=s}function CT(r,e,n,s){j(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Gc(r.visibleWrites,e,n),r.lastWriteId=s}function ST(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function IT(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,a=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=n&&TT(f,s.path)?l=!1:Ot(s.path,f.path)&&(a=!0)),c--}if(l){if(a)return kT(r),!0;if(s.snap)r.visibleWrites=hg(r.visibleWrites,s.path);else{const f=s.children;et(f,p=>{r.visibleWrites=hg(r.visibleWrites,Me(s.path,p))})}return!0}else return!1}function TT(r,e){if(r.snap)return Ot(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Ot(Me(r.path,n),e))return!0;return!1}function kT(r){r.visibleWrites=mv(r.allWrites,NT,me()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function NT(r){return r.visible}function mv(r,e,n){let s=qt.empty();for(let l=0;l<r.length;++l){const a=r[l];if(e(a)){const c=a.path;let f;if(a.snap)Ot(n,c)?(f=lt(n,c),s=xs(s,f,a.snap)):Ot(c,n)&&(f=lt(c,n),s=xs(s,me(),a.snap.getChild(f)));else if(a.children){if(Ot(n,c))f=lt(n,c),s=Gc(s,f,a.children);else if(Ot(c,n))if(f=lt(c,n),ue(f))s=Gc(s,me(),a.children);else{const p=pi(a.children,oe(f));if(p){const g=p.getChild(Ie(f));s=xs(s,me(),g)}}}else throw Ti("WriteRecord should have .snap or .children")}}return s}function gv(r,e,n,s,l){if(!s&&!l){const a=Or(r.visibleWrites,e);if(a!=null)return a;{const c=Zn(r.visibleWrites,e);if(Kc(c))return n;if(n==null&&!qc(c,me()))return null;{const f=n||Z.EMPTY_NODE;return wi(c,f)}}}else{const a=Zn(r.visibleWrites,e);if(!l&&Kc(a))return n;if(!l&&n==null&&!qc(a,me()))return null;{const c=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Ot(g.path,e)||Ot(e,g.path))},f=mv(r.allWrites,c,e),p=n||Z.EMPTY_NODE;return wi(f,p)}}}function xT(r,e,n){let s=Z.EMPTY_NODE;const l=Or(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(be,(a,c)=>{s=s.updateImmediateChild(a,c)}),s;if(n){const a=Zn(r.visibleWrites,e);return n.forEachChild(be,(c,f)=>{const p=wi(Zn(a,new we(c)),f);s=s.updateImmediateChild(c,p)}),fg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const a=Zn(r.visibleWrites,e);return fg(a).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function PT(r,e,n,s,l){j(s||l,"Either existingEventSnap or existingServerSnap must exist");const a=Me(e,n);if(qc(r.visibleWrites,a))return null;{const c=Zn(r.visibleWrites,a);return Kc(c)?l.getChild(n):wi(c,l.getChild(n))}}function RT(r,e,n,s){const l=Me(e,n),a=Or(r.visibleWrites,l);if(a!=null)return a;if(s.isCompleteForChild(n)){const c=Zn(r.visibleWrites,l);return wi(c,s.getNode().getImmediateChild(n))}else return null}function AT(r,e){return Or(r.visibleWrites,e)}function OT(r,e,n,s,l,a,c){let f;const p=Zn(r.visibleWrites,e),g=Or(p,me());if(g!=null)f=g;else if(n!=null)f=wi(p,n);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const v=[],_=c.getCompare(),w=a?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let P=w.getNext();for(;P&&v.length<l;)_(P,s)!==0&&v.push(P),P=w.getNext();return v}else return[]}function DT(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function Bl(r,e,n,s){return gv(r.writeTree,r.treePath,e,n,s)}function Fd(r,e){return xT(r.writeTree,r.treePath,e)}function pg(r,e,n,s){return PT(r.writeTree,r.treePath,e,n,s)}function Vl(r,e){return AT(r.writeTree,Me(r.treePath,e))}function LT(r,e,n,s,l,a){return OT(r.writeTree,r.treePath,e,n,s,l,a)}function Ud(r,e,n){return RT(r.writeTree,r.treePath,e,n)}function _v(r,e){return vv(Me(r.treePath,e),r.writeTree)}function vv(r,e){return{treePath:r,writeTree:e}}/**
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
 */class MT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const a=l.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(s,Us(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(s,Fs(s,l.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(s,vi(s,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(s,Us(s,e.snapshotNode,l.oldSnap));else throw Ti("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class bT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const yv=new bT;class jd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ud(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),a=LT(this.writes_,l,n,1,s,e);return a.length===0?null:a[0]}}/**
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
 */function FT(r){return{filter:r}}function UT(r,e){j(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function jT(r,e,n,s,l){const a=new MT;let c,f;if(n.type===$t.OVERWRITE){const g=n;g.source.fromUser?c=Qc(r,e,g.path,g.snap,s,l,a):(j(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ue(g.path),c=Hl(r,e,g.path,g.snap,s,l,f,a))}else if(n.type===$t.MERGE){const g=n;g.source.fromUser?c=WT(r,e,g.path,g.children,s,l,a):(j(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=Yc(r,e,g.path,g.children,s,l,f,a))}else if(n.type===$t.ACK_USER_WRITE){const g=n;g.revert?c=HT(r,e,g.path,s,l,a):c=BT(r,e,g.path,g.affectedTree,s,l,a)}else if(n.type===$t.LISTEN_COMPLETE)c=VT(r,e,n.path,s,a);else throw Ti("Unknown operation type: "+n.type);const p=a.getChanges();return zT(e,c,p),{viewCache:c,changes:p}}function zT(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=Wl(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&n.push(dv(Wl(e)))}}function wv(r,e,n,s,l,a){const c=e.eventCache;if(Vl(s,n)!=null)return e;{let f,p;if(ue(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Rr(e),v=g instanceof Z?g:Z.EMPTY_NODE,_=Fd(s,v);f=r.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const g=Bl(s,Rr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,a)}else{const g=oe(n);if(g===".priority"){j(tr(n)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const _=pg(s,n,v,p);_!=null?f=r.filter.updatePriority(v,_):f=c.getNode()}else{const v=Ie(n);let _;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=pg(s,n,c.getNode(),p);w!=null?_=c.getNode().getImmediateChild(g).updateChild(v,w):_=c.getNode().getImmediateChild(g)}else _=Ud(s,g,e.serverCache);_!=null?f=r.filter.updateChild(c.getNode(),g,_,v,l,a):f=c.getNode()}}return Ns(e,f,c.isFullyInitialized()||ue(n),r.filter.filtersNodes())}}function Hl(r,e,n,s,l,a,c,f){const p=e.serverCache;let g;const v=c?r.filter:r.filter.getIndexedFilter();if(ue(n))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const P=p.getNode().updateChild(n,s);g=v.updateFullNode(p.getNode(),P,null)}else{const P=oe(n);if(!p.isCompleteForPath(n)&&tr(n)>1)return e;const R=Ie(n),A=p.getNode().getImmediateChild(P).updateChild(R,s);P===".priority"?g=v.updatePriority(p.getNode(),A):g=v.updateChild(p.getNode(),P,A,R,yv,null)}const _=fv(e,g,p.isFullyInitialized()||ue(n),v.filtersNodes()),w=new jd(l,_,a);return wv(r,_,n,l,w,f)}function Qc(r,e,n,s,l,a,c){const f=e.eventCache;let p,g;const v=new jd(l,e,a);if(ue(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Ns(e,g,!0,r.filter.filtersNodes());else{const _=oe(n);if(_===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=Ns(e,g,f.isFullyInitialized(),f.isFiltered());else{const w=Ie(n),P=f.getNode().getImmediateChild(_);let R;if(ue(w))R=s;else{const F=v.getCompleteChild(_);F!=null?xd(w)===".priority"&&F.getChild(iv(w)).isEmpty()?R=F:R=F.updateChild(w,s):R=Z.EMPTY_NODE}if(P.equals(R))p=e;else{const F=r.filter.updateChild(f.getNode(),_,R,w,v,c);p=Ns(e,F,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function mg(r,e){return r.eventCache.isCompleteForChild(e)}function WT(r,e,n,s,l,a,c){let f=e;return s.foreach((p,g)=>{const v=Me(n,p);mg(e,oe(v))&&(f=Qc(r,f,v,g,l,a,c))}),s.foreach((p,g)=>{const v=Me(n,p);mg(e,oe(v))||(f=Qc(r,f,v,g,l,a,c))}),f}function gg(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Yc(r,e,n,s,l,a,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ue(n)?g=s:g=new Se(null).setTree(n,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((_,w)=>{if(v.hasChild(_)){const P=e.serverCache.getNode().getImmediateChild(_),R=gg(r,P,w);p=Hl(r,p,new we(_),R,l,a,c,f)}}),g.children.inorderTraversal((_,w)=>{const P=!e.serverCache.isCompleteForChild(_)&&w.value===null;if(!v.hasChild(_)&&!P){const R=e.serverCache.getNode().getImmediateChild(_),F=gg(r,R,w);p=Hl(r,p,new we(_),F,l,a,c,f)}}),p}function BT(r,e,n,s,l,a,c){if(Vl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ue(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Hl(r,e,n,p.getNode().getChild(n),l,a,f,c);if(ue(n)){let g=new Se(null);return p.getNode().forEachChild(di,(v,_)=>{g=g.set(new we(v),_)}),Yc(r,e,n,g,l,a,f,c)}else return e}else{let g=new Se(null);return s.foreach((v,_)=>{const w=Me(n,v);p.isCompleteForPath(w)&&(g=g.set(v,p.getNode().getChild(w)))}),Yc(r,e,n,g,l,a,f,c)}}function VT(r,e,n,s,l){const a=e.serverCache,c=fv(e,a.getNode(),a.isFullyInitialized()||ue(n),a.isFiltered());return wv(r,c,n,s,yv,l)}function HT(r,e,n,s,l,a){let c;if(Vl(s,n)!=null)return e;{const f=new jd(s,e,l),p=e.eventCache.getNode();let g;if(ue(n)||oe(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=Bl(s,Rr(e));else{const _=e.serverCache.getNode();j(_ instanceof Z,"serverChildren would be complete if leaf node"),v=Fd(s,_)}v=v,g=r.filter.updateFullNode(p,v,a)}else{const v=oe(n);let _=Ud(s,v,e.serverCache);_==null&&e.serverCache.isCompleteForChild(v)&&(_=p.getImmediateChild(v)),_!=null?g=r.filter.updateChild(p,v,_,Ie(n),f,a):e.eventCache.getNode().hasChild(v)?g=r.filter.updateChild(p,v,Z.EMPTY_NODE,Ie(n),f,a):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Bl(s,Rr(e)),c.isLeafNode()&&(g=r.filter.updateFullNode(g,c,a)))}return c=e.serverCache.isFullyInitialized()||Vl(s,me())!=null,Ns(e,g,c,r.filter.filtersNodes())}}/**
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
 */class $T{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Od(s.getIndex()),a=uT(s);this.processor_=FT(a);const c=n.serverCache,f=n.eventCache,p=l.updateFullNode(Z.EMPTY_NODE,c.getNode(),null),g=a.updateFullNode(Z.EMPTY_NODE,f.getNode(),null),v=new nr(p,c.isFullyInitialized(),l.filtersNodes()),_=new nr(g,f.isFullyInitialized(),a.filtersNodes());this.viewCache_=ra(_,v),this.eventGenerator_=new gT(this.query_)}get query(){return this.query_}}function GT(r){return r.viewCache_.serverCache.getNode()}function qT(r){return Wl(r.viewCache_)}function KT(r,e){const n=Rr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function _g(r){return r.eventRegistrations_.length===0}function QT(r,e){r.eventRegistrations_.push(e)}function vg(r,e,n){const s=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(n,l);c&&s.push(c)})}if(e){let l=[];for(let a=0;a<r.eventRegistrations_.length;++a){const c=r.eventRegistrations_[a];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function yg(r,e,n,s){e.type===$t.MERGE&&e.source.queryId!==null&&(j(Rr(r.viewCache_),"We should always have a full cache before handling merges"),j(Wl(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,a=jT(r.processor_,l,e,n,s);return UT(r.processor_,a.viewCache),j(a.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,Ev(r,a.changes,a.viewCache.eventCache.getNode(),null)}function YT(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(be,(a,c)=>{s.push(vi(a,c))}),n.isFullyInitialized()&&s.push(dv(n.getNode())),Ev(r,s,n.getNode(),e)}function Ev(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return _T(r.eventGenerator_,e,n,l)}/**
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
 */let $l;class Cv{constructor(){this.views=new Map}}function JT(r){j(!$l,"__referenceConstructor has already been defined"),$l=r}function XT(){return j($l,"Reference.ts has not been loaded"),$l}function ZT(r){return r.views.size===0}function zd(r,e,n,s){const l=e.source.queryId;if(l!==null){const a=r.views.get(l);return j(a!=null,"SyncTree gave us an op for an invalid query."),yg(a,e,n,s)}else{let a=[];for(const c of r.views.values())a=a.concat(yg(c,e,n,s));return a}}function Sv(r,e,n,s,l){const a=e._queryIdentifier,c=r.views.get(a);if(!c){let f=Bl(n,l?s:null),p=!1;f?p=!0:s instanceof Z?(f=Fd(n,s),p=!1):(f=Z.EMPTY_NODE,p=!1);const g=ra(new nr(f,p,!1),new nr(s,l,!1));return new $T(e,g)}return c}function ek(r,e,n,s,l,a){const c=Sv(r,e,s,l,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),QT(c,n),YT(c,n)}function tk(r,e,n,s){const l=e._queryIdentifier,a=[];let c=[];const f=rr(r);if(l==="default")for(const[p,g]of r.views.entries())c=c.concat(vg(g,n,s)),_g(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||a.push(g.query));else{const p=r.views.get(l);p&&(c=c.concat(vg(p,n,s)),_g(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||a.push(p.query)))}return f&&!rr(r)&&a.push(new(XT())(e._repo,e._path)),{removed:a,events:c}}function Iv(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function er(r,e){let n=null;for(const s of r.views.values())n=n||KT(s,e);return n}function Tv(r,e){if(e._queryParams.loadsAllData())return sa(r);{const s=e._queryIdentifier;return r.views.get(s)}}function kv(r,e){return Tv(r,e)!=null}function rr(r){return sa(r)!=null}function sa(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Gl;function nk(r){j(!Gl,"__referenceConstructor has already been defined"),Gl=r}function rk(){return j(Gl,"Reference.ts has not been loaded"),Gl}let ik=1;class wg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=DT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Nv(r,e,n,s,l){return ET(r.pendingWriteTree_,e,n,s,l),l?Ai(r,new Pr(Ld(),e,n)):[]}function sk(r,e,n,s){CT(r.pendingWriteTree_,e,n,s);const l=Se.fromObject(n);return Ai(r,new yi(Ld(),e,l))}function Kn(r,e,n=!1){const s=ST(r.pendingWriteTree_,e);if(IT(r.pendingWriteTree_,e)){let a=new Se(null);return s.snap!=null?a=a.set(me(),!0):et(s.children,c=>{a=a.set(new we(c),!0)}),Ai(r,new zl(s.path,a,n))}else return[]}function Xs(r,e,n){return Ai(r,new Pr(Md(),e,n))}function ok(r,e,n){const s=Se.fromObject(n);return Ai(r,new yi(Md(),e,s))}function lk(r,e){return Ai(r,new zs(Md(),e))}function ak(r,e,n){const s=Bd(r,n);if(s){const l=Vd(s),a=l.path,c=l.queryId,f=lt(a,e),p=new zs(bd(c),f);return Hd(r,a,p)}else return[]}function ql(r,e,n,s,l=!1){const a=e._path,c=r.syncPointTree_.get(a);let f=[];if(c&&(e._queryIdentifier==="default"||kv(c,e))){const p=tk(c,e,n,s);ZT(c)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const g=p.removed;if(f=p.events,!l){const v=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(a,(w,P)=>rr(P));if(v&&!_){const w=r.syncPointTree_.subtree(a);if(!w.isEmpty()){const P=dk(w);for(let R=0;R<P.length;++R){const F=P[R],A=F.query,Q=Av(r,F);r.listenProvider_.startListening(Ps(A),Ws(r,A),Q.hashFn,Q.onComplete)}}}!_&&g.length>0&&!s&&(v?r.listenProvider_.stopListening(Ps(e),null):g.forEach(w=>{const P=r.queryToTagMap.get(oa(w));r.listenProvider_.stopListening(Ps(w),P)}))}hk(r,g)}return f}function xv(r,e,n,s){const l=Bd(r,s);if(l!=null){const a=Vd(l),c=a.path,f=a.queryId,p=lt(c,e),g=new Pr(bd(f),p,n);return Hd(r,c,g)}else return[]}function uk(r,e,n,s){const l=Bd(r,s);if(l){const a=Vd(l),c=a.path,f=a.queryId,p=lt(c,e),g=Se.fromObject(n),v=new yi(bd(f),p,g);return Hd(r,c,v)}else return[]}function Jc(r,e,n,s=!1){const l=e._path;let a=null,c=!1;r.syncPointTree_.foreachOnPath(l,(w,P)=>{const R=lt(w,l);a=a||er(P,R),c=c||rr(P)});let f=r.syncPointTree_.get(l);f?(c=c||rr(f),a=a||er(f,me())):(f=new Cv,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;a!=null?p=!0:(p=!1,a=Z.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((P,R)=>{const F=er(R,me());F&&(a=a.updateImmediateChild(P,F))}));const g=kv(f,e);if(!g&&!e._queryParams.loadsAllData()){const w=oa(e);j(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const P=fk();r.queryToTagMap.set(w,P),r.tagToQueryMap.set(P,w)}const v=ia(r.pendingWriteTree_,l);let _=ek(f,e,n,v,a,p);if(!g&&!c&&!s){const w=Tv(f,e);_=_.concat(pk(r,e,w))}return _}function Wd(r,e,n){const l=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(c,f)=>{const p=lt(c,e),g=er(f,p);if(g)return g});return gv(l,e,a,n,!0)}function ck(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,v)=>{const _=lt(g,n);s=s||er(v,_)});let l=r.syncPointTree_.get(n);l?s=s||er(l,me()):(l=new Cv,r.syncPointTree_=r.syncPointTree_.set(n,l));const a=s!=null,c=a?new nr(s,!0,!1):null,f=ia(r.pendingWriteTree_,e._path),p=Sv(l,e,f,a?c.getNode():Z.EMPTY_NODE,a);return qT(p)}function Ai(r,e){return Pv(e,r.syncPointTree_,null,ia(r.pendingWriteTree_,me()))}function Pv(r,e,n,s){if(ue(r.path))return Rv(r,e,n,s);{const l=e.get(me());n==null&&l!=null&&(n=er(l,me()));let a=[];const c=oe(r.path),f=r.operationForChild(c),p=e.children.get(c);if(p&&f){const g=n?n.getImmediateChild(c):null,v=_v(s,c);a=a.concat(Pv(f,p,g,v))}return l&&(a=a.concat(zd(l,r,s,n))),a}}function Rv(r,e,n,s){const l=e.get(me());n==null&&l!=null&&(n=er(l,me()));let a=[];return e.children.inorderTraversal((c,f)=>{const p=n?n.getImmediateChild(c):null,g=_v(s,c),v=r.operationForChild(c);v&&(a=a.concat(Rv(v,f,p,g)))}),l&&(a=a.concat(zd(l,r,s,n))),a}function Av(r,e){const n=e.query,s=Ws(r,n);return{hashFn:()=>(GT(e)||Z.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?ak(r,n._path,s):lk(r,n._path);{const a=l1(l,n);return ql(r,n,null,a)}}}}function Ws(r,e){const n=oa(e);return r.queryToTagMap.get(n)}function oa(r){return r._path.toString()+"$"+r._queryIdentifier}function Bd(r,e){return r.tagToQueryMap.get(e)}function Vd(r){const e=r.indexOf("$");return j(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new we(r.substr(0,e))}}function Hd(r,e,n){const s=r.syncPointTree_.get(e);j(s,"Missing sync point for query tag that we're tracking");const l=ia(r.pendingWriteTree_,e);return zd(s,n,l,null)}function dk(r){return r.fold((e,n,s)=>{if(n&&rr(n))return[sa(n)];{let l=[];return n&&(l=Iv(n)),et(s,(a,c)=>{l=l.concat(c)}),l}})}function Ps(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(rk())(r._repo,r._path):r}function hk(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=oa(s),a=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(a)}}}function fk(){return ik++}function pk(r,e,n){const s=e._path,l=Ws(r,e),a=Av(r,n),c=r.listenProvider_.startListening(Ps(e),l,a.hashFn,a.onComplete),f=r.syncPointTree_.subtree(s);if(l)j(!rr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,v,_)=>{if(!ue(g)&&v&&rr(v))return[sa(v).query];{let w=[];return v&&(w=w.concat(Iv(v).map(P=>P.query))),et(_,(P,R)=>{w=w.concat(R)}),w}});for(let g=0;g<p.length;++g){const v=p[g];r.listenProvider_.stopListening(Ps(v),Ws(r,v))}}return c}/**
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
 */class $d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new $d(n)}node(){return this.node_}}class Gd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Gd(this.syncTree_,n)}node(){return Wd(this.syncTree_,this.path_)}}const mk=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Eg=function(r,e,n){if(!r||typeof r!="object")return r;if(j(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return gk(r[".sv"],e,n);if(typeof r[".sv"]=="object")return _k(r[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},gk=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+r)}},_k=function(r,e,n){r.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&j(!1,"Unexpected increment value: "+s);const l=e.node();if(j(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},Ov=function(r,e,n,s){return qd(e,new Gd(n,r),s)},Dv=function(r,e,n){return qd(r,new $d(e),n)};function qd(r,e,n){const s=r.getPriority().val(),l=Eg(s,e.getImmediateChild(".priority"),n);let a;if(r.isLeafNode()){const c=r,f=Eg(c.getValue(),e,n);return f!==c.getValue()||l!==c.getPriority().val()?new Ke(f,Ve(l)):r}else{const c=r;return a=c,l!==c.getPriority().val()&&(a=a.updatePriority(new Ke(l))),c.forEachChild(be,(f,p)=>{const g=qd(p,e.getImmediateChild(f),n);g!==p&&(a=a.updateImmediateChild(f,g))}),a}}/**
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
 */class Kd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Qd(r,e){let n=e instanceof we?e:new we(e),s=r,l=oe(n);for(;l!==null;){const a=pi(s.node.children,l)||{children:{},childCount:0};s=new Kd(l,s,a),n=Ie(n),l=oe(n)}return s}function Oi(r){return r.node.value}function Lv(r,e){r.node.value=e,Xc(r)}function Mv(r){return r.node.childCount>0}function vk(r){return Oi(r)===void 0&&!Mv(r)}function la(r,e){et(r.node.children,(n,s)=>{e(new Kd(n,r,s))})}function bv(r,e,n,s){n&&e(r),la(r,l=>{bv(l,e,!0)})}function yk(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Zs(r){return new we(r.parent===null?r.name:Zs(r.parent)+"/"+r.name)}function Xc(r){r.parent!==null&&wk(r.parent,r.name,r)}function wk(r,e,n){const s=vk(n),l=sn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Xc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Xc(r))}/**
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
 */const Ek=/[\[\].#$\/\u0000-\u001F\u007F]/,Ck=/[\[\].#$\u0000-\u001F\u007F]/,Ic=10*1024*1024,Yd=function(r){return typeof r=="string"&&r.length!==0&&!Ek.test(r)},Fv=function(r){return typeof r=="string"&&r.length!==0&&!Ck.test(r)},Sk=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Fv(r)},Ik=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Sd(r)||r&&typeof r=="object"&&sn(r,".sv")},Uv=function(r,e,n,s){s&&e===void 0||aa(Jl(r,"value"),e,n)},aa=function(r,e,n){const s=n instanceof we?new W1(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Er(s));if(typeof e=="function")throw new Error(r+"contains a function "+Er(s)+" with contents = "+e.toString());if(Sd(e))throw new Error(r+"contains "+e.toString()+" "+Er(s));if(typeof e=="string"&&e.length>Ic/3&&Xl(e)>Ic)throw new Error(r+"contains a string greater than "+Ic+" utf8 bytes "+Er(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,a=!1;if(et(e,(c,f)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!Yd(c)))throw new Error(r+" contains an invalid key ("+c+") "+Er(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);B1(s,c),aa(r,f,s),V1(s)}),l&&a)throw new Error(r+' contains ".value" child '+Er(s)+" in addition to actual children.")}},Tk=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const a=bs(s);for(let c=0;c<a.length;c++)if(!(a[c]===".priority"&&c===a.length-1)){if(!Yd(a[c]))throw new Error(r+"contains an invalid key ("+a[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(z1);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Ot(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},kk=function(r,e,n,s){const l=Jl(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const a=[];et(e,(c,f)=>{const p=new we(c);if(aa(l,f,Me(n,p)),xd(p)===".priority"&&!Ik(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");a.push(p)}),Tk(l,a)},jv=function(r,e,n,s){if(!Fv(n))throw new Error(Jl(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Nk=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jv(r,e,n)},Jd=function(r,e){if(oe(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},xk=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sk(n))throw new Error(Jl(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Pk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ua(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],a=l.getPath();n!==null&&!Pd(a,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(l)}n&&r.eventLists_.push(n)}function zv(r,e,n){ua(r,n),Wv(r,s=>Pd(s,e))}function Dt(r,e,n){ua(r,n),Wv(r,s=>Ot(s,e)||Ot(e,s))}function Wv(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const a=l.path;e(a)?(Rk(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function Rk(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Ts&&Ze("event: "+n.toString()),Ri(s)}}}/**
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
 */const Ak="repo_interrupt",Ok=25;class Dk{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Pk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jl(),this.transactionQueueTree_=new Kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lk(r,e,n){if(r.stats_=kd(r.repoInfo_),r.forceRestClient_||d1())r.server_=new Ul(r.repoInfo_,(s,l,a,c)=>{Cg(r,s,l,a,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Sg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new vn(r.repoInfo_,e,(s,l,a,c)=>{Cg(r,s,l,a,c)},s=>{Sg(r,s)},s=>{Mk(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=g1(r.repoInfo_,()=>new mT(r.stats_,r.server_)),r.infoData_=new cT,r.infoSyncTree_=new wg({startListening:(s,l,a,c)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Xs(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),Xd(r,"connected",!1),r.serverSyncTree_=new wg({startListening:(s,l,a,c)=>(r.server_.listen(s,a,l,(f,p)=>{const g=c(f,p);Dt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function Bv(r){const n=r.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ca(r){return mk({timestamp:Bv(r)})}function Cg(r,e,n,s,l){r.dataUpdateCount++;const a=new we(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(l)if(s){const p=Nl(n,g=>Ve(g));c=uk(r.serverSyncTree_,a,p,l)}else{const p=Ve(n);c=xv(r.serverSyncTree_,a,p,l)}else if(s){const p=Nl(n,g=>Ve(g));c=ok(r.serverSyncTree_,a,p)}else{const p=Ve(n);c=Xs(r.serverSyncTree_,a,p)}let f=a;c.length>0&&(f=Ei(r,a)),Dt(r.eventQueue_,f,c)}function Sg(r,e){Xd(r,"connected",e),e===!1&&jk(r)}function Mk(r,e){et(e,(n,s)=>{Xd(r,n,s)})}function Xd(r,e,n){const s=new we("/.info/"+e),l=Ve(n);r.infoData_.updateSnapshot(s,l);const a=Xs(r.infoSyncTree_,s,l);Dt(r.eventQueue_,s,a)}function Zd(r){return r.nextWriteId_++}function bk(r,e,n){const s=ck(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const a=Ve(l).withIndex(e._queryParams.getIndex());Jc(r.serverSyncTree_,e,n,!0);let c;if(e._queryParams.loadsAllData())c=Xs(r.serverSyncTree_,e._path,a);else{const f=Ws(r.serverSyncTree_,e);c=xv(r.serverSyncTree_,e._path,a,f)}return Dt(r.eventQueue_,e._path,c),ql(r.serverSyncTree_,e,n,null,!0),a},l=>(eo(r,"get for query "+He(e)+" failed: "+l),Promise.reject(new Error(l))))}function Fk(r,e,n,s,l){eo(r,"set",{path:e.toString(),value:n,priority:s});const a=ca(r),c=Ve(n,s),f=Wd(r.serverSyncTree_,e),p=Dv(c,f,a),g=Zd(r),v=Nv(r.serverSyncTree_,e,p,g,!0);ua(r.eventQueue_,v),r.server_.put(e.toString(),c.val(!0),(w,P)=>{const R=w==="ok";R||at("set at "+e+" failed: "+w);const F=Kn(r.serverSyncTree_,g,!R);Dt(r.eventQueue_,e,F),Zc(r,l,w,P)});const _=th(r,e);Ei(r,_),Dt(r.eventQueue_,_,[])}function Uk(r,e,n,s){eo(r,"update",{path:e.toString(),value:n});let l=!0;const a=ca(r),c={};if(et(n,(f,p)=>{l=!1,c[f]=Ov(Me(e,f),Ve(p),r.serverSyncTree_,a)}),l)Ze("update() called with empty data.  Don't do anything."),Zc(r,s,"ok",void 0);else{const f=Zd(r),p=sk(r.serverSyncTree_,e,c,f);ua(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,v)=>{const _=g==="ok";_||at("update at "+e+" failed: "+g);const w=Kn(r.serverSyncTree_,f,!_),P=w.length>0?Ei(r,e):e;Dt(r.eventQueue_,P,w),Zc(r,s,g,v)}),et(n,g=>{const v=th(r,Me(e,g));Ei(r,v)}),Dt(r.eventQueue_,e,[])}}function jk(r){eo(r,"onDisconnectEvents");const e=ca(r),n=jl();$c(r.onDisconnect_,me(),(l,a)=>{const c=Ov(l,a,r.serverSyncTree_,e);hv(n,l,c)});let s=[];$c(n,me(),(l,a)=>{s=s.concat(Xs(r.serverSyncTree_,l,a));const c=th(r,l);Ei(r,c)}),r.onDisconnect_=jl(),Dt(r.eventQueue_,me(),s)}function zk(r,e,n){let s;oe(e._path)===".info"?s=Jc(r.infoSyncTree_,e,n):s=Jc(r.serverSyncTree_,e,n),zv(r.eventQueue_,e._path,s)}function Wk(r,e,n){let s;oe(e._path)===".info"?s=ql(r.infoSyncTree_,e,n):s=ql(r.serverSyncTree_,e,n),zv(r.eventQueue_,e._path,s)}function Bk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(Ak)}function eo(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Ze(n,...e)}function Zc(r,e,n,s){e&&Ri(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let a=l;s&&(a+=": "+s);const c=new Error(a);c.code=l,e(c)}})}function Vv(r,e,n){return Wd(r.serverSyncTree_,e,n)||Z.EMPTY_NODE}function eh(r,e=r.transactionQueueTree_){if(e||da(r,e),Oi(e)){const n=$v(r,e);j(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&Vk(r,Zs(e),n)}else Mv(e)&&la(e,n=>{eh(r,n)})}function Vk(r,e,n){const s=n.map(g=>g.currentWriteId),l=Vv(r,e,s);let a=l;const c=l.hash();for(let g=0;g<n.length;g++){const v=n[g];j(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const _=lt(e,v.path);a=a.updateChild(_,v.currentOutputSnapshotRaw)}const f=a.val(!0),p=e;r.server_.put(p.toString(),f,g=>{eo(r,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const _=[];for(let w=0;w<n.length;w++)n[w].status=2,v=v.concat(Kn(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&_.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();da(r,Qd(r.transactionQueueTree_,e)),eh(r,r.transactionQueueTree_),Dt(r.eventQueue_,e,v);for(let w=0;w<_.length;w++)Ri(_[w])}else{if(g==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{at("transaction at "+p.toString()+" failed: "+g);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=g}Ei(r,e)}},c)}function Ei(r,e){const n=Hv(r,e),s=Zs(n),l=$v(r,n);return Hk(r,l,s),s}function Hk(r,e,n){if(e.length===0)return;const s=[];let l=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=lt(n,p.path);let v=!1,_;if(j(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,_=p.abortReason,l=l.concat(Kn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=Ok)v=!0,_="maxretry",l=l.concat(Kn(r.serverSyncTree_,p.currentWriteId,!0));else{const w=Vv(r,p.path,c);p.currentInputSnapshot=w;const P=e[f].update(w.val());if(P!==void 0){aa("transaction failed: Data returned ",P,p.path);let R=Ve(P);typeof P=="object"&&P!=null&&sn(P,".priority")||(R=R.updatePriority(w.getPriority()));const A=p.currentWriteId,Q=ca(r),x=Dv(R,w,Q);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=x,p.currentWriteId=Zd(r),c.splice(c.indexOf(A),1),l=l.concat(Nv(r.serverSyncTree_,p.path,x,p.currentWriteId,p.applyLocally)),l=l.concat(Kn(r.serverSyncTree_,A,!0))}else v=!0,_="nodata",l=l.concat(Kn(r.serverSyncTree_,p.currentWriteId,!0))}Dt(r.eventQueue_,n,l),l=[],v&&(e[f].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(_),!1,null))))}da(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ri(s[f]);eh(r,r.transactionQueueTree_)}function Hv(r,e){let n,s=r.transactionQueueTree_;for(n=oe(e);n!==null&&Oi(s)===void 0;)s=Qd(s,n),e=Ie(e),n=oe(e);return s}function $v(r,e){const n=[];return Gv(r,e,n),n.sort((s,l)=>s.order-l.order),n}function Gv(r,e,n){const s=Oi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);la(e,l=>{Gv(r,l,n)})}function da(r,e){const n=Oi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,Lv(e,n.length>0?n:void 0)}la(e,s=>{da(r,s)})}function th(r,e){const n=Zs(Hv(r,e)),s=Qd(r.transactionQueueTree_,e);return yk(s,l=>{Tc(r,l)}),Tc(r,s),bv(s,l=>{Tc(r,l)}),n}function Tc(r,e){const n=Oi(e);if(n){const s=[];let l=[],a=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(j(a===c-1,"All SENT items should be at beginning of queue."),a=c,n[c].status=3,n[c].abortReason="set"):(j(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),l=l.concat(Kn(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?Lv(e,void 0):n.length=a+1,Dt(r.eventQueue_,Zs(e),l);for(let c=0;c<s.length;c++)Ri(s[c])}}/**
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
 */function $k(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function Gk(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):at(`Invalid query segment '${n}' in query '${r}'`)}return e}const Ig=function(r,e){const n=qk(r),s=n.namespace;n.domain==="firebase.com"&&En(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&En("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||n1();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Q_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new we(n.pathString)}},qk=function(r){let e="",n="",s="",l="",a="",c=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let v=r.indexOf("/");v===-1&&(v=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(v,_)),v<_&&(l=$k(r.substring(v,_)));const w=Gk(r.substring(Math.min(r.length,_)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const P=e.slice(0,g);if(P.toLowerCase()==="localhost")n="localhost";else if(P.split(".").length<=2)n=P;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),a=s}"ns"in w&&(a=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:f,pathString:l,namespace:a}};/**
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
 */const Tg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Kk=(function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let l;const a=new Array(8);for(l=7;l>=0;l--)a[l]=Tg.charAt(n%64),n=Math.floor(n/64);j(n===0,"Cannot push at time == 0");let c=a.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)c+=Tg.charAt(e[l]);return j(c.length===20,"nextPushId: Length should be 20."),c}})();/**
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
 */class Qk{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class Yk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class qv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class nh{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ue(this._path)?null:xd(this._path)}get ref(){return new Sn(this._repo,this._path)}get _queryIdentifier(){const e=cg(this._queryParams),n=Id(e);return n==="{}"?"default":n}get _queryObject(){return cg(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof nh))return!1;const n=this._repo===e._repo,s=Pd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+j1(this._path)}}class Sn extends nh{constructor(e,n){super(e,n,new Dd,!1)}get parent(){const e=iv(this._path);return e===null?null:new Sn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),s=Vs(this.ref,e);return new Bs(this._node.getChild(n),s,be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Bs(l,Vs(this.ref,s),be)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Kt(r,e){return r=ct(r),r._checkNotDeleted("ref"),e!==void 0?Vs(r._root,e):r._root}function Vs(r,e){return r=ct(r),oe(r._path)===null?Nk("child","path",e):jv("child","path",e),new Sn(r._repo,Me(r._path,e))}function Jk(r,e){r=ct(r),Jd("push",r._path),Uv("push",e,r._path,!0);const n=Bv(r._repo),s=Kk(n),l=Vs(r,s),a=Vs(r,s);let c;return c=Promise.resolve(a),l.then=c.then.bind(c),l.catch=c.then.bind(c,void 0),l}function kg(r){return Jd("remove",r._path),Xk(r,null)}function Xk(r,e){r=ct(r),Jd("set",r._path),Uv("set",e,r._path,!1);const n=new Hs;return Fk(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function hi(r,e){kk("update",e,r._path);const n=new Hs;return Uk(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function rh(r){r=ct(r);const e=new qv(()=>{}),n=new ha(e);return bk(r._repo,r,n).then(s=>new Bs(s,new Sn(r._repo,r._path),r._queryParams.getIndex()))}class ha{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Qk("value",this,new Bs(e.snapshotNode,new Sn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Yk(this,e,n):null}matches(e){return e instanceof ha?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Zk(r,e,n,s,l){const a=new qv(n,void 0),c=new ha(a);return zk(r._repo,r,c),()=>Wk(r._repo,r,c)}function eN(r,e,n,s){return Zk(r,"value",e)}JT(Sn);nk(Sn);/**
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
 */const tN="FIREBASE_DATABASE_EMULATOR_HOST",ed={};let nN=!1;function rN(r,e,n,s){const l=e.lastIndexOf(":"),a=e.substring(0,l),c=ki(a);r.repoInfo_=new Q_(e,c,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function iN(r,e,n,s,l){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||En("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ze("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=Ig(a,l),f=c.repoInfo,p;typeof process<"u"&&Gm&&(p=Gm[tN]),p?(a=`http://${p}?ns=${f.namespace}`,c=Ig(a,l),f=c.repoInfo):c.repoInfo.secure;const g=new f1(r.name,r.options,e);xk("Invalid Firebase Database URL",c),ue(c.path)||En("Database URL must point to the root of a Firebase Database (not including a child path).");const v=oN(f,r,g,new h1(r,n));return new lN(v,r)}function sN(r,e){const n=ed[e];(!n||n[r.key]!==r)&&En(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Bk(r),delete n[r.key]}function oN(r,e,n,s){let l=ed[e.name];l||(l={},ed[e.name]=l);let a=l[r.toURLString()];return a&&En("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new Dk(r,nN,n,s),l[r.toURLString()]=a,a}class lN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&En("Cannot call "+e+" on a deleted database.")}}function aN(r=n_(),e){const n=dd(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=yE("database");s&&uN(n,...s)}return n}function uN(r,e,n,s={}){r=ct(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,a=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Tr(s,a.repoInfo_.emulatorOptions))return;En("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(a.repoInfo_.nodeAdmin)s.mockUserToken&&En('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Cl(Cl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:wE(s.mockUserToken,r.app.options.projectId);c=new Cl(f)}ki(e)&&(Qg(e),Yg("Database",!0)),rN(a,l,s,c)}/**
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
 */function cN(r){YI(xi),mi(new kr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return iN(s,l,a,n)},"PUBLIC").setMultipleInstances(!0)),Xn(qm,Km,r),Xn(qm,Km,"esm2017")}vn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};vn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};cN();const dN={apiKey:"AIzaSyBP4VP0zfXMDGhWmparJAnue-2mIpgDWfE",authDomain:"budgetduo-96f22.firebaseapp.com",databaseURL:"https://budgetduo-96f22-default-rtdb.firebaseio.com",projectId:"budgetduo-96f22",storageBucket:"budgetduo-96f22.firebasestorage.app",messagingSenderId:"44840005819",appId:"1:44840005819:web:5344367cda9a500a4a799e"},Kv=t_(dN),Qt=aN(Kv),kc=GI(Kv),hN=new pn,Qv=O.createContext(null);function fN({children:r}){const[e,n]=O.useState(null),[s,l]=O.useState(!0);O.useEffect(()=>LS(kc,p=>{n(p),l(!1)}),[]);const a=async()=>{try{await tI(kc,hN)}catch(f){throw console.error("Erreur de connexion:",f),f}},c=async()=>{try{await MS(kc)}catch(f){console.error("Erreur de déconnexion:",f)}};return s?S.jsxs("div",{className:"loading-screen",children:[S.jsx("div",{className:"loading-spinner"}),S.jsx("p",{children:"Chargement..."})]}):S.jsx(Qv.Provider,{value:{user:e,login:a,logout:c},children:r})}function ih(){const r=O.useContext(Qv);if(!r)throw new Error("useAuth doit être utilisé dans un AuthProvider");return r}const Nc=600,xc=600,pN=.6,_l=80,mN=.4;function gN(r){return new Promise((e,n)=>{const s=new FileReader;s.onload=l=>{const a=new Image;a.onload=()=>{const c=document.createElement("canvas");let{width:f,height:p}=a;f>p?f>Nc&&(p=Math.round(p*Nc/f),f=Nc):p>xc&&(f=Math.round(f*xc/p),p=xc),c.width=f,c.height=p,c.getContext("2d").drawImage(a,0,0,f,p);const v=c.toDataURL("image/jpeg",pN);e(v)},a.onerror=()=>n(new Error("Impossible de charger l'image")),a.src=l.target.result},s.onerror=()=>n(new Error("Impossible de lire le fichier")),s.readAsDataURL(r)})}function _N(r){return new Promise((e,n)=>{const s=new FileReader;s.onload=l=>{const a=new Image;a.onload=()=>{const c=document.createElement("canvas");c.width=_l,c.height=_l;const f=c.getContext("2d"),p=Math.min(a.width,a.height),g=(a.width-p)/2,v=(a.height-p)/2;f.drawImage(a,g,v,p,p,0,0,_l,_l);const _=c.toDataURL("image/jpeg",mN);e(_)},a.onerror=()=>n(new Error("Impossible de charger l'image")),a.src=l.target.result},s.onerror=()=>n(new Error("Impossible de lire le fichier")),s.readAsDataURL(r)})}const or="stockduloft/items",sh="stockduloft/photos";async function Yv(r){const e=Kt(Qt,`${sh}/${r}`),n=await rh(e);return n.exists()&&n.val().photoBase64||null}async function vN({uniqueId:r,description:e,price:n,photoFile:s,category:l,itemDate:a}){const c={uniqueId:r.toUpperCase().trim(),description:e.trim(),price:parseFloat(n),hasPhoto:!1,category:l||"",status:"inventory",itemDate:a||new Date().toISOString().split("T")[0],consignmentStore:"",consignmentDate:null,saleDate:null,sellerName:"",createdAt:Date.now(),updatedAt:Date.now()},f=Kt(Qt,or),p=Jk(f);if(await hi(p,c),s){const[g,v]=await Promise.all([gN(s),_N(s)]),_=Kt(Qt,`${sh}/${p.key}`);await hi(_,{photoBase64:g}),await hi(p,{hasPhoto:!0,thumbnail:v}),c.hasPhoto=!0,c.thumbnail=v}return{id:p.key,...c}}async function yN(r){const e=Kt(Qt,`${or}/${r}`),n=Kt(Qt,`${sh}/${r}`);await kg(n),await kg(e)}async function Jv(r){const e=Kt(Qt,or),n=await rh(e);if(!n.exists())return null;const s=r.toUpperCase().trim();let l=null;return n.forEach(a=>{const c=a.val();c.uniqueId===s&&(l={id:a.key,...c})}),l&&l.hasPhoto&&(l.photoBase64=await Yv(l.id)),l}async function Ng(r="ADL"){const e=Kt(Qt,or),n=await rh(e);let s=0;n.exists()&&n.forEach(a=>{const p=(a.val().uniqueId||"").match(new RegExp(`^${r}-(\\d+)$`,"i"));if(p){const g=parseInt(p[1],10);g>s&&(s=g)}});const l=s+1;return`${r}-${String(l).padStart(3,"0")}`}async function wN(r,e,n=null,s=null,l=""){const a=Kt(Qt,`${or}/${r}`),c={status:"sold",sellerName:e.trim(),saleDate:n||new Date().toISOString().split("T")[0],marketName:l.trim(),updatedAt:Date.now()};s!==null&&(c.salePrice=parseFloat(s)),await hi(a,c)}async function EN(r,e,n=null){const s=Kt(Qt,`${or}/${r}`);await hi(s,{status:"consignment",consignmentStore:e.trim(),consignmentDate:n||new Date().toISOString().split("T")[0],updatedAt:Date.now()})}async function CN(r){const e=Kt(Qt,`${or}/${r}`);await hi(e,{status:"inventory",consignmentStore:"",consignmentDate:null,saleDate:null,salePrice:null,marketName:"",sellerName:"",updatedAt:Date.now()})}function SN(r){const e=Kt(Qt,or);return eN(e,s=>{const l=[];s.exists()&&s.forEach(a=>{l.push({id:a.key,...a.val()})}),l.sort((a,c)=>(c.createdAt||0)-(a.createdAt||0)),r(l)})}const xg={all:"Tous",inventory:"En stock",consignment:"En consigne",sold:"Vendus"},IN={inventory:"#2ecc71",consignment:"#f39c12",sold:"#e74c3c"};function TN(){const[r,e]=O.useState([]),[n,s]=O.useState("all"),[l,a]=O.useState(""),[c,f]=O.useState(null),[p,g]=O.useState(!0),[v,_]=O.useState({});O.useEffect(()=>SN(z=>{e(z),g(!1)}),[]);const w=async x=>{if(c===x.id){f(null);return}if(f(x.id),!v[x.id]){if(x.photoBase64)_(z=>({...z,[x.id]:x.photoBase64}));else if(x.hasPhoto){const z=await Yv(x.id);z&&_(W=>({...W,[x.id]:z}))}}},P=r.filter(x=>{var ne,re;const z=n==="all"||x.status===n,W=l===""||((ne=x.uniqueId)==null?void 0:ne.toLowerCase().includes(l.toLowerCase()))||((re=x.description)==null?void 0:re.toLowerCase().includes(l.toLowerCase()));return z&&W}),R={all:r.length,inventory:r.filter(x=>x.status==="inventory").length,consignment:r.filter(x=>x.status==="consignment").length,sold:r.filter(x=>x.status==="sold").length},F=async x=>{confirm(`Remettre "${x.uniqueId}" en inventaire?`)&&(await CN(x.id),f(null))},A=async x=>{confirm(`Supprimer définitivement "${x.uniqueId}"?`)&&(await yN(x.id),f(null),_(z=>{const W={...z};return delete W[x.id],W}))},Q=async x=>{const z=prompt("Nom du commerce pour la consigne:");z&&(await EN(x.id,z),f(null))};return p?S.jsxs("div",{className:"page-loading",children:[S.jsx("div",{className:"loading-spinner"}),S.jsx("p",{children:"Chargement de l'inventaire..."})]}):S.jsxs("div",{className:"page inventory-page",children:[S.jsxs("div",{className:"search-bar",children:[S.jsx("input",{type:"text",placeholder:"🔍 Rechercher par # ou description...",value:l,onChange:x=>a(x.target.value),className:"search-input"}),l&&S.jsx("button",{className:"search-clear",onClick:()=>a(""),children:"✕"})]}),S.jsx("div",{className:"status-filters",children:Object.entries(xg).map(([x,z])=>S.jsxs("button",{className:`filter-btn ${n===x?"active":""}`,onClick:()=>s(x),children:[z,S.jsx("span",{className:"filter-count",children:R[x]})]},x))}),P.length===0?S.jsxs("div",{className:"empty-state",children:[S.jsx("p",{className:"empty-icon",children:"📭"}),S.jsx("p",{children:l?"Aucun résultat trouvé":"Aucun item dans cette catégorie"})]}):S.jsx("div",{className:"items-list",children:P.map(x=>{var z,W,ne;return S.jsxs("div",{className:`item-card ${c===x.id?"expanded":""}`,onClick:()=>w(x),children:[S.jsxs("div",{className:"item-row",children:[S.jsx("div",{className:"item-photo",children:x.thumbnail?S.jsx("img",{src:x.thumbnail,alt:x.description,className:"item-thumbnail"}):x.hasPhoto||x.photoBase64?S.jsx("div",{className:"photo-placeholder",children:"🖼️"}):S.jsx("div",{className:"photo-placeholder",children:"📷"})}),S.jsxs("div",{className:"item-info",children:[S.jsxs("div",{className:"item-id-row",children:[S.jsxs("span",{className:"item-unique-id",children:["#",x.uniqueId]}),S.jsx("span",{className:"item-status-badge",style:{backgroundColor:IN[x.status]},children:xg[x.status]})]}),S.jsx("p",{className:"item-description",children:x.description}),S.jsxs("div",{className:"item-meta",children:[S.jsxs("span",{className:"item-price",children:[(z=x.price)==null?void 0:z.toFixed(2)," $"]}),x.itemDate&&S.jsxs("span",{className:"item-date",children:["🧵 ",x.itemDate]}),x.status==="consignment"&&S.jsxs("span",{className:"item-consignment",children:["📍 ",x.consignmentStore," ",x.consignmentDate&&`(${x.consignmentDate})`]}),x.status==="sold"&&S.jsxs("span",{className:"item-sold-info",children:[x.salePrice&&x.salePrice!==x.price?S.jsxs(S.Fragment,{children:[S.jsxs("s",{children:[(W=x.price)==null?void 0:W.toFixed(2)," $"]})," → ",(ne=x.salePrice)==null?void 0:ne.toFixed(2)," $ · "]}):"",x.saleDate," — ",x.sellerName,x.marketName?` · 📍 ${x.marketName}`:""]})]})]})]}),c===x.id&&S.jsxs("div",{onClick:re=>re.stopPropagation(),children:[v[x.id]&&S.jsx("div",{className:"item-expanded-photo",children:S.jsx("img",{src:v[x.id],alt:x.description})}),x.hasPhoto&&!v[x.id]&&S.jsx("div",{className:"item-expanded-photo loading",children:S.jsx("div",{className:"loading-spinner"})}),S.jsxs("div",{className:"item-actions",children:[x.status==="inventory"&&S.jsx("button",{className:"btn btn-small btn-consign",onClick:()=>Q(x),children:"📍 Consigne"}),(x.status==="consignment"||x.status==="sold")&&S.jsx("button",{className:"btn btn-small btn-return",onClick:()=>F(x),children:"📦 Retour inventaire"}),S.jsx("button",{className:"btn btn-small btn-delete",onClick:()=>A(x),children:"🗑️ Supprimer"})]})]})]},x.id)})})]})}function kN(){const r=sd(),e=O.useRef(null),[n,s]=O.useState({uniqueId:"",description:"",price:"",category:"",itemDate:new Date().toISOString().split("T")[0]}),[l,a]=O.useState(null),[c,f]=O.useState(null),[p,g]=O.useState(!1),[v,_]=O.useState(""),[w,P]=O.useState("");O.useEffect(()=>{Ng("SDL").then(W=>{s(ne=>({...ne,uniqueId:W})),P(W)})},[]);const R=W=>{const{name:ne,value:re}=W.target;s(ge=>({...ge,[ne]:re})),ne==="uniqueId"&&_("")},F=W=>{var ge;const ne=(ge=W.target.files)==null?void 0:ge[0];if(!ne)return;a(ne);const re=new FileReader;re.onload=Pe=>f(Pe.target.result),re.readAsDataURL(ne)},A=()=>{var W;(W=e.current)==null||W.click()},Q=()=>{a(null),f(null),e.current&&(e.current.value="")},x=()=>{s(W=>({...W,uniqueId:w})),_("")},z=async W=>{if(W.preventDefault(),_(""),!n.uniqueId.trim()){_("Le numéro unique est requis");return}if(!n.price||parseFloat(n.price)<=0){_("Le prix doit être supérieur à 0");return}if(await Jv(n.uniqueId)){const re=await Ng("SDL");P(re),_(`Le numéro "${n.uniqueId.toUpperCase()}" existe déjà !`);return}g(!0);try{await vN({uniqueId:n.uniqueId,description:n.description,price:n.price,category:n.category,itemDate:n.itemDate,photoFile:l}),r("/")}catch(re){console.error("Erreur:",re),_("Erreur lors de la sauvegarde. Réessayez.")}finally{g(!1)}};return S.jsxs("div",{className:"page add-item-page",children:[S.jsx("h2",{className:"page-title",children:"Nouvel item"}),S.jsxs("form",{onSubmit:z,className:"add-form",children:[S.jsxs("div",{className:"photo-section",children:[S.jsx("input",{ref:e,type:"file",accept:"image/*",capture:"environment",onChange:F,className:"hidden-input"}),c?S.jsxs("div",{className:"photo-preview-container",children:[S.jsx("img",{src:c,alt:"Aperçu",className:"photo-preview"}),S.jsx("button",{type:"button",className:"photo-remove",onClick:Q,children:"✕"})]}):S.jsxs("button",{type:"button",className:"photo-capture-btn",onClick:A,children:[S.jsx("span",{className:"capture-icon",children:"📷"}),S.jsx("span",{children:"Prendre une photo"})]})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Numéro unique *"}),S.jsx("input",{type:"text",name:"uniqueId",value:n.uniqueId,onChange:R,placeholder:"Ex: SDL-001",className:"form-input",autoComplete:"off",style:{textTransform:"uppercase"}})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Description"}),S.jsx("input",{type:"text",name:"description",value:n.description,onChange:R,placeholder:"Ex: Sac à main fleuri",className:"form-input"})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Prix ($) *"}),S.jsx("input",{type:"number",name:"price",value:n.price,onChange:R,placeholder:"0.00",className:"form-input",step:"0.01",min:"0",inputMode:"decimal"})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Catégorie"}),S.jsx("input",{type:"text",name:"category",value:n.category,onChange:R,placeholder:"Ex: Sacs, Vêtements, Accessoires...",className:"form-input"})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Date de création"}),S.jsx("input",{type:"date",name:"itemDate",value:n.itemDate,onChange:R,className:"form-input"})]}),v&&S.jsxs("div",{className:"error-block",children:[S.jsx("p",{className:"error-text",children:v}),w&&v.includes("existe déjà")&&S.jsxs("button",{type:"button",className:"btn btn-small btn-suggest",onClick:x,children:["Utiliser ",w]})]}),S.jsxs("div",{className:"form-actions",children:[S.jsx("button",{type:"submit",className:"btn btn-primary btn-full",disabled:p,children:p?"Sauvegarde en cours...":"✓ Ajouter à l'inventaire"}),S.jsx("button",{type:"button",className:"btn btn-secondary btn-full",onClick:()=>r("/"),children:"Annuler"})]})]})]})}function NN(){var Pe,Ye;const{user:r}=ih(),[e,n]=O.useState("ADL-"),[s,l]=O.useState(null),[a,c]=O.useState(((Pe=r==null?void 0:r.displayName)==null?void 0:Pe.split(" ")[0])||""),[f,p]=O.useState(new Date().toISOString().split("T")[0]),[g,v]=O.useState(""),[_,w]=O.useState(()=>localStorage.getItem("sdl_marketName")||""),[P,R]=O.useState(!1),[F,A]=O.useState(!1),[Q,x]=O.useState(""),[z,W]=O.useState(""),ne=async ce=>{var Tt;if(ce==null||ce.preventDefault(),!!e.trim()){R(!0),x(""),W(""),l(null);try{const ze=await Jv(e);if(!ze){x(`Aucun item trouvé avec le numéro "${e.toUpperCase()}"`);return}if(ze.status==="sold"){x(`Cet item est déjà vendu (${ze.saleDate} par ${ze.sellerName})`);return}l(ze),v(((Tt=ze.price)==null?void 0:Tt.toFixed(2))||"")}catch(ze){console.error(ze),x("Erreur de recherche. Réessayez.")}finally{R(!1)}}},re=async()=>{if(!(!s||!a.trim())){A(!0),x("");try{const ce=parseFloat(g)||s.price;await wN(s.id,a,f,ce,_),W(`✓ ${s.uniqueId} vendu pour ${ce.toFixed(2)} $${_?` au ${_}`:""}`),l(null),n("ADL-"),v("")}catch(ce){console.error(ce),x("Erreur lors de la vente. Réessayez.")}finally{A(!1)}}},ge=()=>{n("ADL-"),l(null),v(""),x(""),W("")};return S.jsxs("div",{className:"page sale-page",children:[S.jsx("h2",{className:"page-title",children:"💰 Vente rapide"}),S.jsx("form",{onSubmit:ne,className:"sale-search-form",children:S.jsxs("div",{className:"sale-search-row",children:[S.jsx("input",{type:"text",value:e,onChange:ce=>n(ce.target.value.toUpperCase()),placeholder:"Ex: ADL-001",className:"form-input sale-search-input",autoComplete:"off",autoFocus:!0}),S.jsx("button",{type:"submit",className:"btn btn-primary sale-search-btn",disabled:P||!e.trim(),children:P?"...":"🔍"})]})}),z&&S.jsxs("div",{className:"sale-success",children:[S.jsx("p",{children:z}),S.jsx("button",{className:"btn btn-primary btn-full",onClick:ge,children:"Prochaine vente"})]}),Q&&S.jsxs("div",{className:"sale-error",children:[S.jsx("p",{children:Q}),S.jsx("button",{className:"btn btn-secondary",onClick:ge,children:"Réessayer"})]}),s&&S.jsxs("div",{className:"sale-confirmation",children:[S.jsxs("div",{className:"sale-item-card",children:[s.photoBase64?S.jsx("img",{src:s.photoBase64,alt:s.description,className:"sale-item-photo"}):S.jsx("div",{className:"sale-photo-placeholder",children:"📷"}),S.jsxs("div",{className:"sale-item-details",children:[S.jsxs("span",{className:"sale-item-id",children:["#",s.uniqueId]}),S.jsx("p",{className:"sale-item-desc",children:s.description}),S.jsxs("p",{className:"sale-item-price",children:[(Ye=s.price)==null?void 0:Ye.toFixed(2)," $"]}),s.status==="consignment"&&S.jsxs("p",{className:"sale-item-consign",children:["📍 En consigne: ",s.consignmentStore]})]})]}),S.jsxs("div",{className:"sale-form",children:[S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Prix de vente ($)"}),S.jsxs("div",{className:"sale-price-row",children:[S.jsx("input",{type:"number",value:g,onChange:ce=>v(ce.target.value),className:"form-input",step:"0.01",min:"0",inputMode:"decimal"}),parseFloat(g)<s.price&&S.jsxs("span",{className:"sale-discount",children:["Rabais de ",(s.price-parseFloat(g)).toFixed(2)," $"]})]})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Vendeuse"}),S.jsx("input",{type:"text",value:a,onChange:ce=>c(ce.target.value),className:"form-input",placeholder:"Nom de la vendeuse"})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Marché / Point de vente"}),S.jsx("input",{type:"text",value:_,onChange:ce=>{w(ce.target.value),localStorage.setItem("sdl_marketName",ce.target.value)},className:"form-input",placeholder:"Ex: Marché Jean-Talon, Facebook, etc."})]}),S.jsxs("div",{className:"form-group",children:[S.jsx("label",{className:"form-label",children:"Date de vente"}),S.jsx("input",{type:"date",value:f,onChange:ce=>p(ce.target.value),className:"form-input"})]}),S.jsxs("div",{className:"sale-actions",children:[S.jsx("button",{className:"btn btn-sell btn-full",onClick:re,disabled:F||!a.trim(),children:F?"En cours...":`Confirmer la vente — ${parseFloat(g||0).toFixed(2)} $`}),S.jsx("button",{className:"btn btn-secondary btn-full",onClick:ge,children:"Annuler"})]})]})]}),!s&&!Q&&!z&&S.jsxs("div",{className:"sale-hint",children:[S.jsx("p",{className:"hint-icon",children:"🏷️"}),S.jsxs("p",{children:["Entre le numéro de l'étiquette",S.jsx("br",{}),"pour enregistrer une vente"]})]})]})}function xN(){return S.jsxs("div",{className:"page about-page",children:[S.jsx("h2",{className:"page-title",children:"ℹ️ À propos"}),S.jsxs("div",{className:"about-card",children:[S.jsx("h3",{children:"✂️ Stock du Loft"}),S.jsx("p",{className:"about-version",children:"Version 1.0"}),S.jsx("p",{className:"about-description",children:"Application de gestion d'inventaire conçue pour les artisans et créateurs. Gérez vos articles, suivez vos consignes et enregistrez vos ventes en toute simplicité."}),S.jsxs("div",{className:"about-features",children:[S.jsx("h4",{children:"Fonctionnalités"}),S.jsxs("ul",{children:[S.jsx("li",{children:"📦 Gestion d'inventaire avec numéros uniques (ADL-001, ADL-002...)"}),S.jsx("li",{children:"📸 Photos des articles avec miniatures rapides"}),S.jsx("li",{children:"💰 Vente rapide par numéro d'article"}),S.jsx("li",{children:"📍 Suivi des consignes chez les marchands"}),S.jsx("li",{children:"🏷️ Rabais et prix de vente personnalisés"}),S.jsx("li",{children:"🔄 Synchronisation en temps réel"}),S.jsx("li",{children:"🔒 Authentification sécurisée Google"}),S.jsx("li",{children:"📱 Application installable (PWA)"})]})]}),S.jsxs("div",{className:"about-author",children:[S.jsxs("p",{children:["Créé par ",S.jsx("strong",{children:"Jean-Marc Lacroix"})]}),S.jsx("p",{children:"© 2026 — Tous droits réservés"}),S.jsx("p",{style:{marginTop:"12px"},children:"💬 Commentaires et suggestions bienvenus"}),S.jsx("a",{href:"mailto:lacroix.jeanmarc@gmail.com",className:"about-email",children:"📧 lacroix.jeanmarc@gmail.com"})]})]})]})}function PN(){const{login:r}=ih(),[e,n]=O.useState(""),[s,l]=O.useState(!1),a=async()=>{n(""),l(!0);try{await r()}catch{n("Erreur de connexion. Réessayez.")}finally{l(!1)}};return S.jsx("div",{className:"login-page",children:S.jsxs("div",{className:"login-card",children:[S.jsx("div",{className:"login-logo",children:"✂️"}),S.jsx("h1",{className:"login-title",children:"Stock du Loft"}),S.jsxs("p",{className:"login-subtitle",children:["Gestion d'inventaire pour",S.jsx("br",{}),"L'Atelier du Loft"]}),S.jsx("button",{onClick:a,className:"btn btn-primary btn-login",disabled:s,children:s?"Connexion...":"🔑 Se connecter avec Google"}),e&&S.jsx("p",{className:"error-text",children:e})]})})}function RN(){var n;const{user:r,logout:e}=ih();return r?S.jsxs("div",{className:"app",children:[S.jsx("header",{className:"app-header",children:S.jsxs("div",{className:"header-content",children:[S.jsxs("h1",{className:"app-title",children:[S.jsx("span",{className:"title-icon",children:"✂️"}),"Stock du Loft"]}),S.jsxs("div",{className:"header-user",children:[S.jsx("span",{className:"user-name",children:(n=r.displayName)==null?void 0:n.split(" ")[0]}),S.jsx("button",{onClick:e,className:"btn-logout",title:"Déconnexion",children:"↗"})]})]})}),S.jsx("main",{className:"app-main",children:S.jsxs(Q0,{children:[S.jsx(si,{path:"/",element:S.jsx(TN,{})}),S.jsx(si,{path:"/add",element:S.jsx(kN,{})}),S.jsx(si,{path:"/sale",element:S.jsx(NN,{})}),S.jsx(si,{path:"/about",element:S.jsx(xN,{})}),S.jsx(si,{path:"*",element:S.jsx(q0,{to:"/",replace:!0})})]})}),S.jsxs("nav",{className:"bottom-nav",children:[S.jsxs(fl,{to:"/",end:!0,className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[S.jsx("span",{className:"nav-icon",children:"📦"}),S.jsx("span",{className:"nav-label",children:"Inventaire"})]}),S.jsxs(fl,{to:"/sale",className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[S.jsx("span",{className:"nav-icon",children:"💰"}),S.jsx("span",{className:"nav-label",children:"Vente"})]}),S.jsxs(fl,{to:"/add",className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[S.jsx("span",{className:"nav-icon",children:"➕"}),S.jsx("span",{className:"nav-label",children:"Ajouter"})]}),S.jsxs(fl,{to:"/about",className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[S.jsx("span",{className:"nav-icon",children:"ℹ️"}),S.jsx("span",{className:"nav-label",children:"Info"})]})]})]}):S.jsx(PN,{})}function AN(){return S.jsx(fN,{children:S.jsx(RN,{})})}i0.createRoot(document.getElementById("root")).render(S.jsx(Rg.StrictMode,{children:S.jsx(rE,{children:S.jsx(AN,{})})}));
