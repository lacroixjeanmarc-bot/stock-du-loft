function Ww(r,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(r,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function Ig(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ic={exports:{}},gs={},sc={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Bw(){if(Xp)return re;Xp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function w(S){return S===null||typeof S!="object"?null:(S=_&&S[_]||S["@@iterator"],typeof S=="function"?S:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,N={};function x(S,D,ne){this.props=S,this.context=D,this.refs=N,this.updater=ne||P}x.prototype.isReactComponent={},x.prototype.setState=function(S,D){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,D,"setState")},x.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function q(){}q.prototype=x.prototype;function V(S,D,ne){this.props=S,this.context=D,this.refs=N,this.updater=ne||P}var G=V.prototype=new q;G.constructor=V,A(G,x.prototype),G.isPureReactComponent=!0;var Q=Array.isArray,ge=Object.prototype.hasOwnProperty,ye={current:null},ue={key:!0,ref:!0,__self:!0,__source:!0};function we(S,D,ne){var oe,ce={},de=null,Ee=null;if(D!=null)for(oe in D.ref!==void 0&&(Ee=D.ref),D.key!==void 0&&(de=""+D.key),D)ge.call(D,oe)&&!ue.hasOwnProperty(oe)&&(ce[oe]=D[oe]);var pe=arguments.length-2;if(pe===1)ce.children=ne;else if(1<pe){for(var Ne=Array(pe),yt=0;yt<pe;yt++)Ne[yt]=arguments[yt+2];ce.children=Ne}if(S&&S.defaultProps)for(oe in pe=S.defaultProps,pe)ce[oe]===void 0&&(ce[oe]=pe[oe]);return{$$typeof:r,type:S,key:de,ref:Ee,props:ce,_owner:ye.current}}function ut(S,D){return{$$typeof:r,type:S.type,key:D,ref:S.ref,props:S.props,_owner:S._owner}}function nt(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function nn(S){var D={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ne){return D[ne]})}var Gt=/\/+/g;function vt(S,D){return typeof S=="object"&&S!==null&&S.key!=null?nn(""+S.key):D.toString(36)}function Ot(S,D,ne,oe,ce){var de=typeof S;(de==="undefined"||de==="boolean")&&(S=null);var Ee=!1;if(S===null)Ee=!0;else switch(de){case"string":case"number":Ee=!0;break;case"object":switch(S.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=S,ce=ce(Ee),S=oe===""?"."+vt(Ee,0):oe,Q(ce)?(ne="",S!=null&&(ne=S.replace(Gt,"$&/")+"/"),Ot(ce,D,ne,"",function(yt){return yt})):ce!=null&&(nt(ce)&&(ce=ut(ce,ne+(!ce.key||Ee&&Ee.key===ce.key?"":(""+ce.key).replace(Gt,"$&/")+"/")+S)),D.push(ce)),1;if(Ee=0,oe=oe===""?".":oe+":",Q(S))for(var pe=0;pe<S.length;pe++){de=S[pe];var Ne=oe+vt(de,pe);Ee+=Ot(de,D,ne,Ne,ce)}else if(Ne=w(S),typeof Ne=="function")for(S=Ne.call(S),pe=0;!(de=S.next()).done;)de=de.value,Ne=oe+vt(de,pe++),Ee+=Ot(de,D,ne,Ne,ce);else if(de==="object")throw D=String(S),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return Ee}function Kt(S,D,ne){if(S==null)return S;var oe=[],ce=0;return Ot(S,oe,"","",function(de){return D.call(ne,de,ce++)}),oe}function ct(S){if(S._status===-1){var D=S._result;D=D(),D.then(function(ne){(S._status===0||S._status===-1)&&(S._status=1,S._result=ne)},function(ne){(S._status===0||S._status===-1)&&(S._status=2,S._result=ne)}),S._status===-1&&(S._status=0,S._result=D)}if(S._status===1)return S._result.default;throw S._result}var Oe={current:null},j={transition:null},X={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:j,ReactCurrentOwner:ye};function B(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:Kt,forEach:function(S,D,ne){Kt(S,function(){D.apply(this,arguments)},ne)},count:function(S){var D=0;return Kt(S,function(){D++}),D},toArray:function(S){return Kt(S,function(D){return D})||[]},only:function(S){if(!nt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},re.Component=x,re.Fragment=n,re.Profiler=l,re.PureComponent=V,re.StrictMode=s,re.Suspense=p,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,re.act=B,re.cloneElement=function(S,D,ne){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var oe=A({},S.props),ce=S.key,de=S.ref,Ee=S._owner;if(D!=null){if(D.ref!==void 0&&(de=D.ref,Ee=ye.current),D.key!==void 0&&(ce=""+D.key),S.type&&S.type.defaultProps)var pe=S.type.defaultProps;for(Ne in D)ge.call(D,Ne)&&!ue.hasOwnProperty(Ne)&&(oe[Ne]=D[Ne]===void 0&&pe!==void 0?pe[Ne]:D[Ne])}var Ne=arguments.length-2;if(Ne===1)oe.children=ne;else if(1<Ne){pe=Array(Ne);for(var yt=0;yt<Ne;yt++)pe[yt]=arguments[yt+2];oe.children=pe}return{$$typeof:r,type:S.type,key:ce,ref:de,props:oe,_owner:Ee}},re.createContext=function(S){return S={$$typeof:c,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:u,_context:S},S.Consumer=S},re.createElement=we,re.createFactory=function(S){var D=we.bind(null,S);return D.type=S,D},re.createRef=function(){return{current:null}},re.forwardRef=function(S){return{$$typeof:f,render:S}},re.isValidElement=nt,re.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:ct}},re.memo=function(S,D){return{$$typeof:g,type:S,compare:D===void 0?null:D}},re.startTransition=function(S){var D=j.transition;j.transition={};try{S()}finally{j.transition=D}},re.unstable_act=B,re.useCallback=function(S,D){return Oe.current.useCallback(S,D)},re.useContext=function(S){return Oe.current.useContext(S)},re.useDebugValue=function(){},re.useDeferredValue=function(S){return Oe.current.useDeferredValue(S)},re.useEffect=function(S,D){return Oe.current.useEffect(S,D)},re.useId=function(){return Oe.current.useId()},re.useImperativeHandle=function(S,D,ne){return Oe.current.useImperativeHandle(S,D,ne)},re.useInsertionEffect=function(S,D){return Oe.current.useInsertionEffect(S,D)},re.useLayoutEffect=function(S,D){return Oe.current.useLayoutEffect(S,D)},re.useMemo=function(S,D){return Oe.current.useMemo(S,D)},re.useReducer=function(S,D,ne){return Oe.current.useReducer(S,D,ne)},re.useRef=function(S){return Oe.current.useRef(S)},re.useState=function(S){return Oe.current.useState(S)},re.useSyncExternalStore=function(S,D,ne){return Oe.current.useSyncExternalStore(S,D,ne)},re.useTransition=function(){return Oe.current.useTransition()},re.version="18.3.1",re}var Zp;function ed(){return Zp||(Zp=1,sc.exports=Bw()),sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Vw(){if(em)return gs;em=1;var r=ed(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,g){var v,_={},w=null,P=null;g!==void 0&&(w=""+g),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(P=p.ref);for(v in p)s.call(p,v)&&!u.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:w,ref:P,props:_,_owner:l.current}}return gs.Fragment=n,gs.jsx=c,gs.jsxs=c,gs}var tm;function Hw(){return tm||(tm=1,ic.exports=Vw()),ic.exports}var R=Hw(),M=ed();const Tg=Ig(M),$w=Ww({__proto__:null,default:Tg},[M]);var dl={},oc={exports:{}},gt={},lc={exports:{}},ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Gw(){return nm||(nm=1,(function(r){function e(j,X){var B=j.length;j.push(X);e:for(;0<B;){var S=B-1>>>1,D=j[S];if(0<l(D,X))j[S]=X,j[B]=D,B=S;else break e}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var X=j[0],B=j.pop();if(B!==X){j[0]=B;e:for(var S=0,D=j.length,ne=D>>>1;S<ne;){var oe=2*(S+1)-1,ce=j[oe],de=oe+1,Ee=j[de];if(0>l(ce,B))de<D&&0>l(Ee,ce)?(j[S]=Ee,j[de]=B,S=de):(j[S]=ce,j[oe]=B,S=oe);else if(de<D&&0>l(Ee,B))j[S]=Ee,j[de]=B,S=de;else break e}}return X}function l(j,X){var B=j.sortIndex-X.sortIndex;return B!==0?B:j.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,_=null,w=3,P=!1,A=!1,N=!1,x=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(j){for(var X=n(g);X!==null;){if(X.callback===null)s(g);else if(X.startTime<=j)s(g),X.sortIndex=X.expirationTime,e(p,X);else break;X=n(g)}}function Q(j){if(N=!1,G(j),!A)if(n(p)!==null)A=!0,ct(ge);else{var X=n(g);X!==null&&Oe(Q,X.startTime-j)}}function ge(j,X){A=!1,N&&(N=!1,q(we),we=-1),P=!0;var B=w;try{for(G(X),_=n(p);_!==null&&(!(_.expirationTime>X)||j&&!nn());){var S=_.callback;if(typeof S=="function"){_.callback=null,w=_.priorityLevel;var D=S(_.expirationTime<=X);X=r.unstable_now(),typeof D=="function"?_.callback=D:_===n(p)&&s(p),G(X)}else s(p);_=n(p)}if(_!==null)var ne=!0;else{var oe=n(g);oe!==null&&Oe(Q,oe.startTime-X),ne=!1}return ne}finally{_=null,w=B,P=!1}}var ye=!1,ue=null,we=-1,ut=5,nt=-1;function nn(){return!(r.unstable_now()-nt<ut)}function Gt(){if(ue!==null){var j=r.unstable_now();nt=j;var X=!0;try{X=ue(!0,j)}finally{X?vt():(ye=!1,ue=null)}}else ye=!1}var vt;if(typeof V=="function")vt=function(){V(Gt)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Kt=Ot.port2;Ot.port1.onmessage=Gt,vt=function(){Kt.postMessage(null)}}else vt=function(){x(Gt,0)};function ct(j){ue=j,ye||(ye=!0,vt())}function Oe(j,X){we=x(function(){j(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){A||P||(A=!0,ct(ge))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ut=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(j){switch(w){case 1:case 2:case 3:var X=3;break;default:X=w}var B=w;w=X;try{return j()}finally{w=B}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,X){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var B=w;w=j;try{return X()}finally{w=B}},r.unstable_scheduleCallback=function(j,X,B){var S=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?S+B:S):B=S,j){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=B+D,j={id:v++,callback:X,priorityLevel:j,startTime:B,expirationTime:D,sortIndex:-1},B>S?(j.sortIndex=B,e(g,j),n(p)===null&&j===n(g)&&(N?(q(we),we=-1):N=!0,Oe(Q,B-S))):(j.sortIndex=D,e(p,j),A||P||(A=!0,ct(ge))),j},r.unstable_shouldYield=nn,r.unstable_wrapCallback=function(j){var X=w;return function(){var B=w;w=X;try{return j.apply(this,arguments)}finally{w=B}}}})(ac)),ac}var rm;function Kw(){return rm||(rm=1,lc.exports=Gw()),lc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function qw(){if(im)return gt;im=1;var r=ed(),e=Kw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function w(t){return p.call(_,t)?!0:p.call(v,t)?!1:g.test(t)?_[t]=!0:(v[t]=!0,!1)}function P(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,o,a){if(i===null||typeof i>"u"||P(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(t,i,o,a,d,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new N(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];x[i]=new N(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new N(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new N(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new N(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new N(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new N(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new N(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new N(t,5,!1,t.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function V(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(q,V);x[i]=new N(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(q,V);x[i]=new N(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(q,V);x[i]=new N(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new N(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new N(t,1,!1,t.toLowerCase(),null,!0,!0)});function G(t,i,o,a){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,o,d,a)&&(o=null),a||d===null?w(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,a=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var Q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),ye=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),nt=Symbol.for("react.provider"),nn=Symbol.for("react.context"),Gt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),Ot=Symbol.for("react.suspense_list"),Kt=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),j=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var B=Object.assign,S;function D(t){if(S===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+t}var ne=!1;function oe(t,i){if(!t||ne)return"";ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){var a=k}Reflect.construct(t,[],i)}else{try{i.call()}catch(k){a=k}t.call(i.prototype)}else{try{throw Error()}catch(k){a=k}t()}}catch(k){if(k&&a&&typeof k.stack=="string"){for(var d=k.stack.split(`
`),h=a.stack.split(`
`),m=d.length-1,y=h.length-1;1<=m&&0<=y&&d[m]!==h[y];)y--;for(;1<=m&&0<=y;m--,y--)if(d[m]!==h[y]){if(m!==1||y!==1)do if(m--,y--,0>y||d[m]!==h[y]){var E=`
`+d[m].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=m&&0<=y);break}}}finally{ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?D(t):""}function ce(t){switch(t.tag){case 5:return D(t.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return t=oe(t.type,!1),t;case 11:return t=oe(t.type.render,!1),t;case 1:return t=oe(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ue:return"Fragment";case ye:return"Portal";case ut:return"Profiler";case we:return"StrictMode";case vt:return"Suspense";case Ot:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nn:return(t.displayName||"Context")+".Consumer";case nt:return(t._context.displayName||"Context")+".Provider";case Gt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kt:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case ct:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function eo(t){t._valueTracker||(t._valueTracker=yt(t))}function rh(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Ne(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function to(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function da(t,i){var o=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ih(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function sh(t,i){i=i.checked,i!=null&&G(t,"checked",i,!1)}function ha(t,i){sh(t,i);var o=pe(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?fa(t,i.type,o):i.hasOwnProperty("defaultValue")&&fa(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function oh(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function fa(t,i,o){(i!=="number"||to(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ai=Array.isArray;function Dr(t,i,o,a){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&a&&(t[o].defaultSelected=!0)}else{for(o=""+pe(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,a&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function pa(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lh(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ai(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:pe(o)}}function ah(t,i){var o=pe(i.value),a=pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function uh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ch(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ma(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ch(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,dh=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Oi(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$v=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(t){$v.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Di[i]=Di[t]})});function hh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Di.hasOwnProperty(t)&&Di[t]?(""+i).trim():i+"px"}function fh(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,d=hh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,d):t[o]=d}}var Gv=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ga(t,i){if(i){if(Gv[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function _a(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function ya(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wa=null,Lr=null,Mr=null;function ph(t){if(t=ts(t)){if(typeof wa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ko(i),wa(t.stateNode,t.type,i))}}function mh(t){Lr?Mr?Mr.push(t):Mr=[t]:Lr=t}function gh(){if(Lr){var t=Lr,i=Mr;if(Mr=Lr=null,ph(t),i)for(t=0;t<i.length;t++)ph(i[t])}}function _h(t,i){return t(i)}function vh(){}var Ea=!1;function yh(t,i,o){if(Ea)return t(i,o);Ea=!0;try{return _h(t,i,o)}finally{Ea=!1,(Lr!==null||Mr!==null)&&(vh(),gh())}}function Li(t,i){var o=t.stateNode;if(o===null)return null;var a=ko(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Ca=!1;if(f)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){Ca=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{Ca=!1}function Kv(t,i,o,a,d,h,m,y,E){var k=Array.prototype.slice.call(arguments,3);try{i.apply(o,k)}catch(L){this.onError(L)}}var bi=!1,ro=null,io=!1,Sa=null,qv={onError:function(t){bi=!0,ro=t}};function Qv(t,i,o,a,d,h,m,y,E){bi=!1,ro=null,Kv.apply(qv,arguments)}function Yv(t,i,o,a,d,h,m,y,E){if(Qv.apply(this,arguments),bi){if(bi){var k=ro;bi=!1,ro=null}else throw Error(n(198));io||(io=!0,Sa=k)}}function ir(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function wh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Eh(t){if(ir(t)!==t)throw Error(n(188))}function Jv(t){var i=t.alternate;if(!i){if(i=ir(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(a=d.return,a!==null){o=a;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return Eh(d),t;if(h===a)return Eh(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=d,a=h;else{for(var m=!1,y=d.child;y;){if(y===o){m=!0,o=d,a=h;break}if(y===a){m=!0,a=d,o=h;break}y=y.sibling}if(!m){for(y=h.child;y;){if(y===o){m=!0,o=h,a=d;break}if(y===a){m=!0,a=h,o=d;break}y=y.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Ch(t){return t=Jv(t),t!==null?Sh(t):null}function Sh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Sh(t);if(i!==null)return i;t=t.sibling}return null}var Ih=e.unstable_scheduleCallback,Th=e.unstable_cancelCallback,Xv=e.unstable_shouldYield,Zv=e.unstable_requestPaint,be=e.unstable_now,ey=e.unstable_getCurrentPriorityLevel,Ia=e.unstable_ImmediatePriority,kh=e.unstable_UserBlockingPriority,so=e.unstable_NormalPriority,ty=e.unstable_LowPriority,Nh=e.unstable_IdlePriority,oo=null,qt=null;function ny(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(oo,t,void 0,(t.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:sy,ry=Math.log,iy=Math.LN2;function sy(t){return t>>>=0,t===0?32:31-(ry(t)/iy|0)|0}var lo=64,ao=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function uo(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,d=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var y=m&~d;y!==0?a=Fi(y):(h&=m,h!==0&&(a=Fi(h)))}else m=o&~d,m!==0?a=Fi(m):h!==0&&(a=Fi(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&d)===0&&(d=a&-a,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-Dt(i),d=1<<o,a|=t[o],i&=~d;return a}function oy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ly(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-Dt(h),y=1<<m,E=d[m];E===-1?((y&o)===0||(y&a)!==0)&&(d[m]=oy(y,i)):E<=i&&(t.expiredLanes|=y),h&=~y}}function Ta(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rh(){var t=lo;return lo<<=1,(lo&4194240)===0&&(lo=64),t}function ka(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Ui(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Dt(i),t[i]=o}function ay(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Dt(o),h=1<<d;i[d]=0,a[d]=-1,t[d]=-1,o&=~h}}function Na(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-Dt(o),d=1<<a;d&i|t[a]&i&&(t[a]|=i),o&=~d}}var me=0;function Ph(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var xh,Ra,Ah,Oh,Dh,Pa=!1,co=[],Cn=null,Sn=null,In=null,ji=new Map,zi=new Map,Tn=[],uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(t,i){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":ji.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(i.pointerId)}}function Wi(t,i,o,a,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[d]},i!==null&&(i=ts(i),i!==null&&Ra(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function cy(t,i,o,a,d){switch(i){case"focusin":return Cn=Wi(Cn,t,i,o,a,d),!0;case"dragenter":return Sn=Wi(Sn,t,i,o,a,d),!0;case"mouseover":return In=Wi(In,t,i,o,a,d),!0;case"pointerover":var h=d.pointerId;return ji.set(h,Wi(ji.get(h)||null,t,i,o,a,d)),!0;case"gotpointercapture":return h=d.pointerId,zi.set(h,Wi(zi.get(h)||null,t,i,o,a,d)),!0}return!1}function Mh(t){var i=sr(t.target);if(i!==null){var o=ir(i);if(o!==null){if(i=o.tag,i===13){if(i=wh(o),i!==null){t.blockedOn=i,Dh(t.priority,function(){Ah(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ho(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Aa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);va=a,o.target.dispatchEvent(a),va=null}else return i=ts(o),i!==null&&Ra(i),t.blockedOn=o,!1;i.shift()}return!0}function bh(t,i,o){ho(t)&&o.delete(i)}function dy(){Pa=!1,Cn!==null&&ho(Cn)&&(Cn=null),Sn!==null&&ho(Sn)&&(Sn=null),In!==null&&ho(In)&&(In=null),ji.forEach(bh),zi.forEach(bh)}function Bi(t,i){t.blockedOn===i&&(t.blockedOn=null,Pa||(Pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dy)))}function Vi(t){function i(d){return Bi(d,t)}if(0<co.length){Bi(co[0],t);for(var o=1;o<co.length;o++){var a=co[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Cn!==null&&Bi(Cn,t),Sn!==null&&Bi(Sn,t),In!==null&&Bi(In,t),ji.forEach(i),zi.forEach(i),o=0;o<Tn.length;o++)a=Tn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<Tn.length&&(o=Tn[0],o.blockedOn===null);)Mh(o),o.blockedOn===null&&Tn.shift()}var br=Q.ReactCurrentBatchConfig,fo=!0;function hy(t,i,o,a){var d=me,h=br.transition;br.transition=null;try{me=1,xa(t,i,o,a)}finally{me=d,br.transition=h}}function fy(t,i,o,a){var d=me,h=br.transition;br.transition=null;try{me=4,xa(t,i,o,a)}finally{me=d,br.transition=h}}function xa(t,i,o,a){if(fo){var d=Aa(t,i,o,a);if(d===null)qa(t,i,a,po,o),Lh(t,a);else if(cy(d,t,i,o,a))a.stopPropagation();else if(Lh(t,a),i&4&&-1<uy.indexOf(t)){for(;d!==null;){var h=ts(d);if(h!==null&&xh(h),h=Aa(t,i,o,a),h===null&&qa(t,i,a,po,o),h===d)break;d=h}d!==null&&a.stopPropagation()}else qa(t,i,a,null,o)}}var po=null;function Aa(t,i,o,a){if(po=null,t=ya(a),t=sr(t),t!==null)if(i=ir(t),i===null)t=null;else if(o=i.tag,o===13){if(t=wh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return po=t,null}function Fh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ey()){case Ia:return 1;case kh:return 4;case so:case ty:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var kn=null,Oa=null,mo=null;function Uh(){if(mo)return mo;var t,i=Oa,o=i.length,a,d="value"in kn?kn.value:kn.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===d[h-a];a++);return mo=d.slice(t,1<a?1-a:void 0)}function go(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function jh(){return!1}function wt(t){function i(o,a,d,h,m){this._reactName=o,this._targetInst=d,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(o=t[y],this[y]=o?o(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_o:jh,this.isPropagationStopped=jh,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Da=wt(Fr),Hi=B({},Fr,{view:0,detail:0}),py=wt(Hi),La,Ma,$i,vo=B({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(La=t.screenX-$i.screenX,Ma=t.screenY-$i.screenY):Ma=La=0,$i=t),La)},movementY:function(t){return"movementY"in t?t.movementY:Ma}}),zh=wt(vo),my=B({},vo,{dataTransfer:0}),gy=wt(my),_y=B({},Hi,{relatedTarget:0}),ba=wt(_y),vy=B({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),yy=wt(vy),wy=B({},Fr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ey=wt(wy),Cy=B({},Fr,{data:0}),Wh=wt(Cy),Sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ty[t])?!!i[t]:!1}function Fa(){return ky}var Ny=B({},Hi,{key:function(t){if(t.key){var i=Sy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fa,charCode:function(t){return t.type==="keypress"?go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ry=wt(Ny),Py=B({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=wt(Py),xy=B({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fa}),Ay=wt(xy),Oy=B({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=wt(Oy),Ly=B({},vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),My=wt(Ly),by=[9,13,27,32],Ua=f&&"CompositionEvent"in window,Gi=null;f&&"documentMode"in document&&(Gi=document.documentMode);var Fy=f&&"TextEvent"in window&&!Gi,Vh=f&&(!Ua||Gi&&8<Gi&&11>=Gi),Hh=" ",$h=!1;function Gh(t,i){switch(t){case"keyup":return by.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function Uy(t,i){switch(t){case"compositionend":return Kh(i);case"keypress":return i.which!==32?null:($h=!0,Hh);case"textInput":return t=i.data,t===Hh&&$h?null:t;default:return null}}function jy(t,i){if(Ur)return t==="compositionend"||!Ua&&Gh(t,i)?(t=Uh(),mo=Oa=kn=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vh&&i.locale!=="ko"?null:i.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!zy[t.type]:i==="textarea"}function Qh(t,i,o,a){mh(a),i=So(i,"onChange"),0<i.length&&(o=new Da("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Ki=null,qi=null;function Wy(t){pf(t,0)}function yo(t){var i=Vr(t);if(rh(i))return t}function By(t,i){if(t==="change")return i}var Yh=!1;if(f){var ja;if(f){var za="oninput"in document;if(!za){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),za=typeof Jh.oninput=="function"}ja=za}else ja=!1;Yh=ja&&(!document.documentMode||9<document.documentMode)}function Xh(){Ki&&(Ki.detachEvent("onpropertychange",Zh),qi=Ki=null)}function Zh(t){if(t.propertyName==="value"&&yo(qi)){var i=[];Qh(i,qi,t,ya(t)),yh(Wy,i)}}function Vy(t,i,o){t==="focusin"?(Xh(),Ki=i,qi=o,Ki.attachEvent("onpropertychange",Zh)):t==="focusout"&&Xh()}function Hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yo(qi)}function $y(t,i){if(t==="click")return yo(i)}function Gy(t,i){if(t==="input"||t==="change")return yo(i)}function Ky(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Lt=typeof Object.is=="function"?Object.is:Ky;function Qi(t,i){if(Lt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var d=o[a];if(!p.call(i,d)||!Lt(t[d],i[d]))return!1}return!0}function ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tf(t,i){var o=ef(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ef(o)}}function nf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?nf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function rf(){for(var t=window,i=to();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=to(t.document)}return i}function Wa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function qy(t){var i=rf(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&nf(o.ownerDocument.documentElement,o)){if(a!==null&&Wa(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(a.start,d);a=a.end===void 0?h:Math.min(a.end,d),!t.extend&&h>a&&(d=a,a=h,h=d),d=tf(o,h);var m=tf(o,a);d&&m&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qy=f&&"documentMode"in document&&11>=document.documentMode,jr=null,Ba=null,Yi=null,Va=!1;function sf(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Va||jr==null||jr!==to(a)||(a=jr,"selectionStart"in a&&Wa(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Yi&&Qi(Yi,a)||(Yi=a,a=So(Ba,"onSelect"),0<a.length&&(i=new Da("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=jr)))}function wo(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var zr={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Ha={},of={};f&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function Eo(t){if(Ha[t])return Ha[t];if(!zr[t])return t;var i=zr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in of)return Ha[t]=i[o];return t}var lf=Eo("animationend"),af=Eo("animationiteration"),uf=Eo("animationstart"),cf=Eo("transitionend"),df=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,i){df.set(t,i),u(i,[t])}for(var $a=0;$a<hf.length;$a++){var Ga=hf[$a],Yy=Ga.toLowerCase(),Jy=Ga[0].toUpperCase()+Ga.slice(1);Nn(Yy,"on"+Jy)}Nn(lf,"onAnimationEnd"),Nn(af,"onAnimationIteration"),Nn(uf,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(cf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function ff(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,Yv(a,i,void 0,t),t.currentTarget=null}function pf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],d=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var y=a[m],E=y.instance,k=y.currentTarget;if(y=y.listener,E!==h&&d.isPropagationStopped())break e;ff(d,y,k),h=E}else for(m=0;m<a.length;m++){if(y=a[m],E=y.instance,k=y.currentTarget,y=y.listener,E!==h&&d.isPropagationStopped())break e;ff(d,y,k),h=E}}}if(io)throw t=Sa,io=!1,Sa=null,t}function Te(t,i){var o=i[eu];o===void 0&&(o=i[eu]=new Set);var a=t+"__bubble";o.has(a)||(mf(i,t,2,!1),o.add(a))}function Ka(t,i,o){var a=0;i&&(a|=4),mf(o,t,a,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[Co]){t[Co]=!0,s.forEach(function(o){o!=="selectionchange"&&(Xy.has(o)||Ka(o,!1,t),Ka(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Co]||(i[Co]=!0,Ka("selectionchange",!1,i))}}function mf(t,i,o,a){switch(Fh(i)){case 1:var d=hy;break;case 4:d=fy;break;default:d=xa}o=d.bind(null,i,o,t),d=void 0,!Ca||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),a?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function qa(t,i,o,a,d){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var y=a.stateNode.containerInfo;if(y===d||y.nodeType===8&&y.parentNode===d)break;if(m===4)for(m=a.return;m!==null;){var E=m.tag;if((E===3||E===4)&&(E=m.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;m=m.return}for(;y!==null;){if(m=sr(y),m===null)return;if(E=m.tag,E===5||E===6){a=h=m;continue e}y=y.parentNode}}a=a.return}yh(function(){var k=h,L=ya(o),b=[];e:{var O=df.get(t);if(O!==void 0){var z=Da,H=t;switch(t){case"keypress":if(go(o)===0)break e;case"keydown":case"keyup":z=Ry;break;case"focusin":H="focus",z=ba;break;case"focusout":H="blur",z=ba;break;case"beforeblur":case"afterblur":z=ba;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Ay;break;case lf:case af:case uf:z=yy;break;case cf:z=Dy;break;case"scroll":z=py;break;case"wheel":z=My;break;case"copy":case"cut":case"paste":z=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Bh}var $=(i&4)!==0,Fe=!$&&t==="scroll",I=$?O!==null?O+"Capture":null:O;$=[];for(var C=k,T;C!==null;){T=C;var F=T.stateNode;if(T.tag===5&&F!==null&&(T=F,I!==null&&(F=Li(C,I),F!=null&&$.push(Zi(C,F,T)))),Fe)break;C=C.return}0<$.length&&(O=new z(O,H,null,o,L),b.push({event:O,listeners:$}))}}if((i&7)===0){e:{if(O=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",O&&o!==va&&(H=o.relatedTarget||o.fromElement)&&(sr(H)||H[rn]))break e;if((z||O)&&(O=L.window===L?L:(O=L.ownerDocument)?O.defaultView||O.parentWindow:window,z?(H=o.relatedTarget||o.toElement,z=k,H=H?sr(H):null,H!==null&&(Fe=ir(H),H!==Fe||H.tag!==5&&H.tag!==6)&&(H=null)):(z=null,H=k),z!==H)){if($=zh,F="onMouseLeave",I="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&($=Bh,F="onPointerLeave",I="onPointerEnter",C="pointer"),Fe=z==null?O:Vr(z),T=H==null?O:Vr(H),O=new $(F,C+"leave",z,o,L),O.target=Fe,O.relatedTarget=T,F=null,sr(L)===k&&($=new $(I,C+"enter",H,o,L),$.target=T,$.relatedTarget=Fe,F=$),Fe=F,z&&H)t:{for($=z,I=H,C=0,T=$;T;T=Wr(T))C++;for(T=0,F=I;F;F=Wr(F))T++;for(;0<C-T;)$=Wr($),C--;for(;0<T-C;)I=Wr(I),T--;for(;C--;){if($===I||I!==null&&$===I.alternate)break t;$=Wr($),I=Wr(I)}$=null}else $=null;z!==null&&gf(b,O,z,$,!1),H!==null&&Fe!==null&&gf(b,Fe,H,$,!0)}}e:{if(O=k?Vr(k):window,z=O.nodeName&&O.nodeName.toLowerCase(),z==="select"||z==="input"&&O.type==="file")var K=By;else if(qh(O))if(Yh)K=Gy;else{K=Hy;var Y=Vy}else(z=O.nodeName)&&z.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(K=$y);if(K&&(K=K(t,k))){Qh(b,K,o,L);break e}Y&&Y(t,O,k),t==="focusout"&&(Y=O._wrapperState)&&Y.controlled&&O.type==="number"&&fa(O,"number",O.value)}switch(Y=k?Vr(k):window,t){case"focusin":(qh(Y)||Y.contentEditable==="true")&&(jr=Y,Ba=k,Yi=null);break;case"focusout":Yi=Ba=jr=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,sf(b,o,L);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":sf(b,o,L)}var J;if(Ua)e:{switch(t){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Ur?Gh(t,o)&&(ee="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(Vh&&o.locale!=="ko"&&(Ur||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Ur&&(J=Uh()):(kn=L,Oa="value"in kn?kn.value:kn.textContent,Ur=!0)),Y=So(k,ee),0<Y.length&&(ee=new Wh(ee,t,null,o,L),b.push({event:ee,listeners:Y}),J?ee.data=J:(J=Kh(o),J!==null&&(ee.data=J)))),(J=Fy?Uy(t,o):jy(t,o))&&(k=So(k,"onBeforeInput"),0<k.length&&(L=new Wh("onBeforeInput","beforeinput",null,o,L),b.push({event:L,listeners:k}),L.data=J))}pf(b,i)})}function Zi(t,i,o){return{instance:t,listener:i,currentTarget:o}}function So(t,i){for(var o=i+"Capture",a=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Li(t,o),h!=null&&a.unshift(Zi(t,h,d)),h=Li(t,i),h!=null&&a.push(Zi(t,h,d))),t=t.return}return a}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gf(t,i,o,a,d){for(var h=i._reactName,m=[];o!==null&&o!==a;){var y=o,E=y.alternate,k=y.stateNode;if(E!==null&&E===a)break;y.tag===5&&k!==null&&(y=k,d?(E=Li(o,h),E!=null&&m.unshift(Zi(o,E,y))):d||(E=Li(o,h),E!=null&&m.push(Zi(o,E,y)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var Zy=/\r\n?/g,ew=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(Zy,`
`).replace(ew,"")}function Io(t,i,o){if(i=_f(i),_f(t)!==i&&o)throw Error(n(425))}function To(){}var Qa=null,Ya=null;function Ja(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xa=typeof setTimeout=="function"?setTimeout:void 0,tw=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,nw=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(t){return vf.resolve(null).then(t).catch(rw)}:Xa;function rw(t){setTimeout(function(){throw t})}function Za(t,i){var o=i,a=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(a===0){t.removeChild(d),Vi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=d}while(o);Vi(i)}function Rn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function yf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Br,es="__reactProps$"+Br,rn="__reactContainer$"+Br,eu="__reactEvents$"+Br,iw="__reactListeners$"+Br,sw="__reactHandles$"+Br;function sr(t){var i=t[Qt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[rn]||o[Qt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=yf(t);t!==null;){if(o=t[Qt])return o;t=yf(t)}return i}t=o,o=t.parentNode}return null}function ts(t){return t=t[Qt]||t[rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ko(t){return t[es]||null}var tu=[],Hr=-1;function Pn(t){return{current:t}}function ke(t){0>Hr||(t.current=tu[Hr],tu[Hr]=null,Hr--)}function Ce(t,i){Hr++,tu[Hr]=t.current,t.current=i}var xn={},Xe=Pn(xn),dt=Pn(!1),or=xn;function $r(t,i){var o=t.type.contextTypes;if(!o)return xn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ht(t){return t=t.childContextTypes,t!=null}function No(){ke(dt),ke(Xe)}function wf(t,i,o){if(Xe.current!==xn)throw Error(n(168));Ce(Xe,i),Ce(dt,o)}function Ef(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var d in a)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return B({},o,a)}function Ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xn,or=Xe.current,Ce(Xe,t),Ce(dt,dt.current),!0}function Cf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Ef(t,i,or),a.__reactInternalMemoizedMergedChildContext=t,ke(dt),ke(Xe),Ce(Xe,t)):ke(dt),Ce(dt,o)}var sn=null,Po=!1,nu=!1;function Sf(t){sn===null?sn=[t]:sn.push(t)}function ow(t){Po=!0,Sf(t)}function An(){if(!nu&&sn!==null){nu=!0;var t=0,i=me;try{var o=sn;for(me=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}sn=null,Po=!1}catch(d){throw sn!==null&&(sn=sn.slice(t+1)),Ih(Ia,An),d}finally{me=i,nu=!1}}return null}var Gr=[],Kr=0,xo=null,Ao=0,It=[],Tt=0,lr=null,on=1,ln="";function ar(t,i){Gr[Kr++]=Ao,Gr[Kr++]=xo,xo=t,Ao=i}function If(t,i,o){It[Tt++]=on,It[Tt++]=ln,It[Tt++]=lr,lr=t;var a=on;t=ln;var d=32-Dt(a)-1;a&=~(1<<d),o+=1;var h=32-Dt(i)+d;if(30<h){var m=d-d%5;h=(a&(1<<m)-1).toString(32),a>>=m,d-=m,on=1<<32-Dt(i)+d|o<<d|a,ln=h+t}else on=1<<h|o<<d|a,ln=t}function ru(t){t.return!==null&&(ar(t,1),If(t,1,0))}function iu(t){for(;t===xo;)xo=Gr[--Kr],Gr[Kr]=null,Ao=Gr[--Kr],Gr[Kr]=null;for(;t===lr;)lr=It[--Tt],It[Tt]=null,ln=It[--Tt],It[Tt]=null,on=It[--Tt],It[Tt]=null}var Et=null,Ct=null,Re=!1,Mt=null;function Tf(t,i){var o=Pt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function kf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Et=t,Ct=Rn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Et=t,Ct=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=lr!==null?{id:on,overflow:ln}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Pt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Et=t,Ct=null,!0):!1;default:return!1}}function su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ou(t){if(Re){var i=Ct;if(i){var o=i;if(!kf(t,i)){if(su(t))throw Error(n(418));i=Rn(o.nextSibling);var a=Et;i&&kf(t,i)?Tf(a,o):(t.flags=t.flags&-4097|2,Re=!1,Et=t)}}else{if(su(t))throw Error(n(418));t.flags=t.flags&-4097|2,Re=!1,Et=t}}}function Nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Oo(t){if(t!==Et)return!1;if(!Re)return Nf(t),Re=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ja(t.type,t.memoizedProps)),i&&(i=Ct)){if(su(t))throw Rf(),Error(n(418));for(;i;)Tf(t,i),i=Rn(i.nextSibling)}if(Nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Ct=Rn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Ct=null}}else Ct=Et?Rn(t.stateNode.nextSibling):null;return!0}function Rf(){for(var t=Ct;t;)t=Rn(t.nextSibling)}function qr(){Ct=Et=null,Re=!1}function lu(t){Mt===null?Mt=[t]:Mt.push(t)}var lw=Q.ReactCurrentBatchConfig;function ns(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var d=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var y=d.refs;m===null?delete y[h]:y[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Do(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Pf(t){var i=t._init;return i(t._payload)}function xf(t){function i(I,C){if(t){var T=I.deletions;T===null?(I.deletions=[C],I.flags|=16):T.push(C)}}function o(I,C){if(!t)return null;for(;C!==null;)i(I,C),C=C.sibling;return null}function a(I,C){for(I=new Map;C!==null;)C.key!==null?I.set(C.key,C):I.set(C.index,C),C=C.sibling;return I}function d(I,C){return I=jn(I,C),I.index=0,I.sibling=null,I}function h(I,C,T){return I.index=T,t?(T=I.alternate,T!==null?(T=T.index,T<C?(I.flags|=2,C):T):(I.flags|=2,C)):(I.flags|=1048576,C)}function m(I){return t&&I.alternate===null&&(I.flags|=2),I}function y(I,C,T,F){return C===null||C.tag!==6?(C=Xu(T,I.mode,F),C.return=I,C):(C=d(C,T),C.return=I,C)}function E(I,C,T,F){var K=T.type;return K===ue?L(I,C,T.props.children,F,T.key):C!==null&&(C.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ct&&Pf(K)===C.type)?(F=d(C,T.props),F.ref=ns(I,C,T),F.return=I,F):(F=rl(T.type,T.key,T.props,null,I.mode,F),F.ref=ns(I,C,T),F.return=I,F)}function k(I,C,T,F){return C===null||C.tag!==4||C.stateNode.containerInfo!==T.containerInfo||C.stateNode.implementation!==T.implementation?(C=Zu(T,I.mode,F),C.return=I,C):(C=d(C,T.children||[]),C.return=I,C)}function L(I,C,T,F,K){return C===null||C.tag!==7?(C=gr(T,I.mode,F,K),C.return=I,C):(C=d(C,T),C.return=I,C)}function b(I,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Xu(""+C,I.mode,T),C.return=I,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ge:return T=rl(C.type,C.key,C.props,null,I.mode,T),T.ref=ns(I,null,C),T.return=I,T;case ye:return C=Zu(C,I.mode,T),C.return=I,C;case ct:var F=C._init;return b(I,F(C._payload),T)}if(Ai(C)||X(C))return C=gr(C,I.mode,T,null),C.return=I,C;Do(I,C)}return null}function O(I,C,T,F){var K=C!==null?C.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return K!==null?null:y(I,C,""+T,F);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ge:return T.key===K?E(I,C,T,F):null;case ye:return T.key===K?k(I,C,T,F):null;case ct:return K=T._init,O(I,C,K(T._payload),F)}if(Ai(T)||X(T))return K!==null?null:L(I,C,T,F,null);Do(I,T)}return null}function z(I,C,T,F,K){if(typeof F=="string"&&F!==""||typeof F=="number")return I=I.get(T)||null,y(C,I,""+F,K);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ge:return I=I.get(F.key===null?T:F.key)||null,E(C,I,F,K);case ye:return I=I.get(F.key===null?T:F.key)||null,k(C,I,F,K);case ct:var Y=F._init;return z(I,C,T,Y(F._payload),K)}if(Ai(F)||X(F))return I=I.get(T)||null,L(C,I,F,K,null);Do(C,F)}return null}function H(I,C,T,F){for(var K=null,Y=null,J=C,ee=C=0,$e=null;J!==null&&ee<T.length;ee++){J.index>ee?($e=J,J=null):$e=J.sibling;var he=O(I,J,T[ee],F);if(he===null){J===null&&(J=$e);break}t&&J&&he.alternate===null&&i(I,J),C=h(he,C,ee),Y===null?K=he:Y.sibling=he,Y=he,J=$e}if(ee===T.length)return o(I,J),Re&&ar(I,ee),K;if(J===null){for(;ee<T.length;ee++)J=b(I,T[ee],F),J!==null&&(C=h(J,C,ee),Y===null?K=J:Y.sibling=J,Y=J);return Re&&ar(I,ee),K}for(J=a(I,J);ee<T.length;ee++)$e=z(J,I,ee,T[ee],F),$e!==null&&(t&&$e.alternate!==null&&J.delete($e.key===null?ee:$e.key),C=h($e,C,ee),Y===null?K=$e:Y.sibling=$e,Y=$e);return t&&J.forEach(function(zn){return i(I,zn)}),Re&&ar(I,ee),K}function $(I,C,T,F){var K=X(T);if(typeof K!="function")throw Error(n(150));if(T=K.call(T),T==null)throw Error(n(151));for(var Y=K=null,J=C,ee=C=0,$e=null,he=T.next();J!==null&&!he.done;ee++,he=T.next()){J.index>ee?($e=J,J=null):$e=J.sibling;var zn=O(I,J,he.value,F);if(zn===null){J===null&&(J=$e);break}t&&J&&zn.alternate===null&&i(I,J),C=h(zn,C,ee),Y===null?K=zn:Y.sibling=zn,Y=zn,J=$e}if(he.done)return o(I,J),Re&&ar(I,ee),K;if(J===null){for(;!he.done;ee++,he=T.next())he=b(I,he.value,F),he!==null&&(C=h(he,C,ee),Y===null?K=he:Y.sibling=he,Y=he);return Re&&ar(I,ee),K}for(J=a(I,J);!he.done;ee++,he=T.next())he=z(J,I,ee,he.value,F),he!==null&&(t&&he.alternate!==null&&J.delete(he.key===null?ee:he.key),C=h(he,C,ee),Y===null?K=he:Y.sibling=he,Y=he);return t&&J.forEach(function(zw){return i(I,zw)}),Re&&ar(I,ee),K}function Fe(I,C,T,F){if(typeof T=="object"&&T!==null&&T.type===ue&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case ge:e:{for(var K=T.key,Y=C;Y!==null;){if(Y.key===K){if(K=T.type,K===ue){if(Y.tag===7){o(I,Y.sibling),C=d(Y,T.props.children),C.return=I,I=C;break e}}else if(Y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ct&&Pf(K)===Y.type){o(I,Y.sibling),C=d(Y,T.props),C.ref=ns(I,Y,T),C.return=I,I=C;break e}o(I,Y);break}else i(I,Y);Y=Y.sibling}T.type===ue?(C=gr(T.props.children,I.mode,F,T.key),C.return=I,I=C):(F=rl(T.type,T.key,T.props,null,I.mode,F),F.ref=ns(I,C,T),F.return=I,I=F)}return m(I);case ye:e:{for(Y=T.key;C!==null;){if(C.key===Y)if(C.tag===4&&C.stateNode.containerInfo===T.containerInfo&&C.stateNode.implementation===T.implementation){o(I,C.sibling),C=d(C,T.children||[]),C.return=I,I=C;break e}else{o(I,C);break}else i(I,C);C=C.sibling}C=Zu(T,I.mode,F),C.return=I,I=C}return m(I);case ct:return Y=T._init,Fe(I,C,Y(T._payload),F)}if(Ai(T))return H(I,C,T,F);if(X(T))return $(I,C,T,F);Do(I,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,C!==null&&C.tag===6?(o(I,C.sibling),C=d(C,T),C.return=I,I=C):(o(I,C),C=Xu(T,I.mode,F),C.return=I,I=C),m(I)):o(I,C)}return Fe}var Qr=xf(!0),Af=xf(!1),Lo=Pn(null),Mo=null,Yr=null,au=null;function uu(){au=Yr=Mo=null}function cu(t){var i=Lo.current;ke(Lo),t._currentValue=i}function du(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function Jr(t,i){Mo=t,au=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ft=!0),t.firstContext=null)}function kt(t){var i=t._currentValue;if(au!==t)if(t={context:t,memoizedValue:i,next:null},Yr===null){if(Mo===null)throw Error(n(308));Yr=t,Mo.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return i}var ur=null;function hu(t){ur===null?ur=[t]:ur.push(t)}function Of(t,i,o,a){var d=i.interleaved;return d===null?(o.next=o,hu(i)):(o.next=d.next,d.next=o),i.interleaved=o,an(t,a)}function an(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var On=!1;function fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Dn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ae&2)!==0){var d=a.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),a.pending=i,an(t,o)}return d=a.interleaved,d===null?(i.next=i,hu(a)):(i.next=d.next,d.next=i),a.interleaved=i,an(t,o)}function bo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Na(t,o)}}function Lf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Fo(t,i,o,a){var d=t.updateQueue;On=!1;var h=d.firstBaseUpdate,m=d.lastBaseUpdate,y=d.shared.pending;if(y!==null){d.shared.pending=null;var E=y,k=E.next;E.next=null,m===null?h=k:m.next=k,m=E;var L=t.alternate;L!==null&&(L=L.updateQueue,y=L.lastBaseUpdate,y!==m&&(y===null?L.firstBaseUpdate=k:y.next=k,L.lastBaseUpdate=E))}if(h!==null){var b=d.baseState;m=0,L=k=E=null,y=h;do{var O=y.lane,z=y.eventTime;if((a&O)===O){L!==null&&(L=L.next={eventTime:z,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var H=t,$=y;switch(O=i,z=o,$.tag){case 1:if(H=$.payload,typeof H=="function"){b=H.call(z,b,O);break e}b=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=$.payload,O=typeof H=="function"?H.call(z,b,O):H,O==null)break e;b=B({},b,O);break e;case 2:On=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,O=d.effects,O===null?d.effects=[y]:O.push(y))}else z={eventTime:z,lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},L===null?(k=L=z,E=b):L=L.next=z,m|=O;if(y=y.next,y===null){if(y=d.shared.pending,y===null)break;O=y,y=O.next,O.next=null,d.lastBaseUpdate=O,d.shared.pending=null}}while(!0);if(L===null&&(E=b),d.baseState=E,d.firstBaseUpdate=k,d.lastBaseUpdate=L,i=d.shared.interleaved,i!==null){d=i;do m|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);hr|=m,t.lanes=m,t.memoizedState=b}}function Mf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],d=a.callback;if(d!==null){if(a.callback=null,a=o,typeof d!="function")throw Error(n(191,d));d.call(a)}}}var rs={},Yt=Pn(rs),is=Pn(rs),ss=Pn(rs);function cr(t){if(t===rs)throw Error(n(174));return t}function pu(t,i){switch(Ce(ss,i),Ce(is,t),Ce(Yt,rs),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ma(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ma(i,t)}ke(Yt),Ce(Yt,i)}function Xr(){ke(Yt),ke(is),ke(ss)}function bf(t){cr(ss.current);var i=cr(Yt.current),o=ma(i,t.type);i!==o&&(Ce(is,t),Ce(Yt,o))}function mu(t){is.current===t&&(ke(Yt),ke(is))}var Pe=Pn(0);function Uo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gu=[];function _u(){for(var t=0;t<gu.length;t++)gu[t]._workInProgressVersionPrimary=null;gu.length=0}var jo=Q.ReactCurrentDispatcher,vu=Q.ReactCurrentBatchConfig,dr=0,xe=null,je=null,Ve=null,zo=!1,os=!1,ls=0,aw=0;function Ze(){throw Error(n(321))}function yu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Lt(t[o],i[o]))return!1;return!0}function wu(t,i,o,a,d,h){if(dr=h,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=t===null||t.memoizedState===null?hw:fw,t=o(a,d),os){h=0;do{if(os=!1,ls=0,25<=h)throw Error(n(301));h+=1,Ve=je=null,i.updateQueue=null,jo.current=pw,t=o(a,d)}while(os)}if(jo.current=Vo,i=je!==null&&je.next!==null,dr=0,Ve=je=xe=null,zo=!1,i)throw Error(n(300));return t}function Eu(){var t=ls!==0;return ls=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?xe.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Nt(){if(je===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var i=Ve===null?xe.memoizedState:Ve.next;if(i!==null)Ve=i,je=t;else{if(t===null)throw Error(n(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ve===null?xe.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function as(t,i){return typeof i=="function"?i(t):i}function Cu(t){var i=Nt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=je,d=a.baseQueue,h=o.pending;if(h!==null){if(d!==null){var m=d.next;d.next=h.next,h.next=m}a.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,a=a.baseState;var y=m=null,E=null,k=h;do{var L=k.lane;if((dr&L)===L)E!==null&&(E=E.next={lane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),a=k.hasEagerState?k.eagerState:t(a,k.action);else{var b={lane:L,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null};E===null?(y=E=b,m=a):E=E.next=b,xe.lanes|=L,hr|=L}k=k.next}while(k!==null&&k!==h);E===null?m=a:E.next=y,Lt(a,i.memoizedState)||(ft=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=E,o.lastRenderedState=a}if(t=o.interleaved,t!==null){d=t;do h=d.lane,xe.lanes|=h,hr|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Su(t){var i=Nt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var m=d=d.next;do h=t(h,m.action),m=m.next;while(m!==d);Lt(h,i.memoizedState)||(ft=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Ff(){}function Uf(t,i){var o=xe,a=Nt(),d=i(),h=!Lt(a.memoizedState,d);if(h&&(a.memoizedState=d,ft=!0),a=a.queue,Iu(Wf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||Ve!==null&&Ve.memoizedState.tag&1){if(o.flags|=2048,us(9,zf.bind(null,o,a,d,i),void 0,null),He===null)throw Error(n(349));(dr&30)!==0||jf(o,i,d)}return d}function jf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=xe.updateQueue,i===null?(i={lastEffect:null,stores:null},xe.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function zf(t,i,o,a){i.value=o,i.getSnapshot=a,Bf(i)&&Vf(t)}function Wf(t,i,o){return o(function(){Bf(i)&&Vf(t)})}function Bf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Lt(t,o)}catch{return!0}}function Vf(t){var i=an(t,1);i!==null&&jt(i,t,1,-1)}function Hf(t){var i=Jt();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},i.queue=t,t=t.dispatch=dw.bind(null,xe,t),[i.memoizedState,t]}function us(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=xe.updateQueue,i===null?(i={lastEffect:null,stores:null},xe.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function $f(){return Nt().memoizedState}function Wo(t,i,o,a){var d=Jt();xe.flags|=t,d.memoizedState=us(1|i,o,void 0,a===void 0?null:a)}function Bo(t,i,o,a){var d=Nt();a=a===void 0?null:a;var h=void 0;if(je!==null){var m=je.memoizedState;if(h=m.destroy,a!==null&&yu(a,m.deps)){d.memoizedState=us(i,o,h,a);return}}xe.flags|=t,d.memoizedState=us(1|i,o,h,a)}function Gf(t,i){return Wo(8390656,8,t,i)}function Iu(t,i){return Bo(2048,8,t,i)}function Kf(t,i){return Bo(4,2,t,i)}function qf(t,i){return Bo(4,4,t,i)}function Qf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Yf(t,i,o){return o=o!=null?o.concat([t]):null,Bo(4,4,Qf.bind(null,i,t),o)}function Tu(){}function Jf(t,i){var o=Nt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&yu(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Xf(t,i){var o=Nt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&yu(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function Zf(t,i,o){return(dr&21)===0?(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=o):(Lt(o,i)||(o=Rh(),xe.lanes|=o,hr|=o,t.baseState=!0),i)}function uw(t,i){var o=me;me=o!==0&&4>o?o:4,t(!0);var a=vu.transition;vu.transition={};try{t(!1),i()}finally{me=o,vu.transition=a}}function ep(){return Nt().memoizedState}function cw(t,i,o){var a=Fn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},tp(t))np(i,o);else if(o=Of(t,i,o,a),o!==null){var d=it();jt(o,t,a,d),rp(o,i,a)}}function dw(t,i,o){var a=Fn(t),d={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(tp(t))np(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,y=h(m,o);if(d.hasEagerState=!0,d.eagerState=y,Lt(y,m)){var E=i.interleaved;E===null?(d.next=d,hu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=Of(t,i,d,a),o!==null&&(d=it(),jt(o,t,a,d),rp(o,i,a))}}function tp(t){var i=t.alternate;return t===xe||i!==null&&i===xe}function np(t,i){os=zo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function rp(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Na(t,o)}}var Vo={readContext:kt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},hw={readContext:kt,useCallback:function(t,i){return Jt().memoizedState=[t,i===void 0?null:i],t},useContext:kt,useEffect:Gf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Wo(4194308,4,Qf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Wo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Wo(4,2,t,i)},useMemo:function(t,i){var o=Jt();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=Jt();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=cw.bind(null,xe,t),[a.memoizedState,t]},useRef:function(t){var i=Jt();return t={current:t},i.memoizedState=t},useState:Hf,useDebugValue:Tu,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Hf(!1),i=t[0];return t=uw.bind(null,t[1]),Jt().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=xe,d=Jt();if(Re){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),He===null)throw Error(n(349));(dr&30)!==0||jf(a,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,Gf(Wf.bind(null,a,h,t),[t]),a.flags|=2048,us(9,zf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=Jt(),i=He.identifierPrefix;if(Re){var o=ln,a=on;o=(a&~(1<<32-Dt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=ls++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=aw++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},fw={readContext:kt,useCallback:Jf,useContext:kt,useEffect:Iu,useImperativeHandle:Yf,useInsertionEffect:Kf,useLayoutEffect:qf,useMemo:Xf,useReducer:Cu,useRef:$f,useState:function(){return Cu(as)},useDebugValue:Tu,useDeferredValue:function(t){var i=Nt();return Zf(i,je.memoizedState,t)},useTransition:function(){var t=Cu(as)[0],i=Nt().memoizedState;return[t,i]},useMutableSource:Ff,useSyncExternalStore:Uf,useId:ep,unstable_isNewReconciler:!1},pw={readContext:kt,useCallback:Jf,useContext:kt,useEffect:Iu,useImperativeHandle:Yf,useInsertionEffect:Kf,useLayoutEffect:qf,useMemo:Xf,useReducer:Su,useRef:$f,useState:function(){return Su(as)},useDebugValue:Tu,useDeferredValue:function(t){var i=Nt();return je===null?i.memoizedState=t:Zf(i,je.memoizedState,t)},useTransition:function(){var t=Su(as)[0],i=Nt().memoizedState;return[t,i]},useMutableSource:Ff,useSyncExternalStore:Uf,useId:ep,unstable_isNewReconciler:!1};function bt(t,i){if(t&&t.defaultProps){i=B({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function ku(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:B({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Ho={isMounted:function(t){return(t=t._reactInternals)?ir(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=it(),d=Fn(t),h=un(a,d);h.payload=i,o!=null&&(h.callback=o),i=Dn(t,h,d),i!==null&&(jt(i,t,d,a),bo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=it(),d=Fn(t),h=un(a,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Dn(t,h,d),i!==null&&(jt(i,t,d,a),bo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=it(),a=Fn(t),d=un(o,a);d.tag=2,i!=null&&(d.callback=i),i=Dn(t,d,a),i!==null&&(jt(i,t,a,o),bo(i,t,a))}};function ip(t,i,o,a,d,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Qi(o,a)||!Qi(d,h):!0}function sp(t,i,o){var a=!1,d=xn,h=i.contextType;return typeof h=="object"&&h!==null?h=kt(h):(d=ht(i)?or:Xe.current,a=i.contextTypes,h=(a=a!=null)?$r(t,d):xn),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ho,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function op(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&Ho.enqueueReplaceState(i,i.state,null)}function Nu(t,i,o,a){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},fu(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=kt(h):(h=ht(i)?or:Xe.current,d.context=$r(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ku(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ho.enqueueReplaceState(d,d.state,null),Fo(t,o,d,a),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Zr(t,i){try{var o="",a=i;do o+=ce(a),a=a.return;while(a);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Ru(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Pu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var mw=typeof WeakMap=="function"?WeakMap:Map;function lp(t,i,o){o=un(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Jo||(Jo=!0,Hu=a),Pu(t,i)},o}function ap(t,i,o){o=un(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var d=i.value;o.payload=function(){return a(d)},o.callback=function(){Pu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Pu(t,i),typeof a!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function up(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new mw;var d=new Set;a.set(i,d)}else d=a.get(i),d===void 0&&(d=new Set,a.set(i,d));d.has(o)||(d.add(o),t=Pw.bind(null,t,i,o),i.then(t,t))}function cp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function dp(t,i,o,a,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=un(-1,1),i.tag=2,Dn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var gw=Q.ReactCurrentOwner,ft=!1;function rt(t,i,o,a){i.child=t===null?Af(i,null,o,a):Qr(i,t.child,o,a)}function hp(t,i,o,a,d){o=o.render;var h=i.ref;return Jr(i,d),a=wu(t,i,o,a,h,d),o=Eu(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,cn(t,i,d)):(Re&&o&&ru(i),i.flags|=1,rt(t,i,a,d),i.child)}function fp(t,i,o,a,d){if(t===null){var h=o.type;return typeof h=="function"&&!Ju(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,pp(t,i,h,a,d)):(t=rl(o.type,null,a,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Qi,o(m,a)&&t.ref===i.ref)return cn(t,i,d)}return i.flags|=1,t=jn(h,a),t.ref=i.ref,t.return=i,i.child=t}function pp(t,i,o,a,d){if(t!==null){var h=t.memoizedProps;if(Qi(h,a)&&t.ref===i.ref)if(ft=!1,i.pendingProps=a=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(ft=!0);else return i.lanes=t.lanes,cn(t,i,d)}return xu(t,i,o,a,d)}function mp(t,i,o){var a=i.pendingProps,d=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ti,St),St|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ce(ti,St),St|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Ce(ti,St),St|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,Ce(ti,St),St|=a;return rt(t,i,d,o),i.child}function gp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function xu(t,i,o,a,d){var h=ht(o)?or:Xe.current;return h=$r(i,h),Jr(i,d),o=wu(t,i,o,a,h,d),a=Eu(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,cn(t,i,d)):(Re&&a&&ru(i),i.flags|=1,rt(t,i,o,d),i.child)}function _p(t,i,o,a,d){if(ht(o)){var h=!0;Ro(i)}else h=!1;if(Jr(i,d),i.stateNode===null)Go(t,i),sp(i,o,a),Nu(i,o,a,d),a=!0;else if(t===null){var m=i.stateNode,y=i.memoizedProps;m.props=y;var E=m.context,k=o.contextType;typeof k=="object"&&k!==null?k=kt(k):(k=ht(o)?or:Xe.current,k=$r(i,k));var L=o.getDerivedStateFromProps,b=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function";b||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==a||E!==k)&&op(i,m,a,k),On=!1;var O=i.memoizedState;m.state=O,Fo(i,a,m,d),E=i.memoizedState,y!==a||O!==E||dt.current||On?(typeof L=="function"&&(ku(i,o,L,a),E=i.memoizedState),(y=On||ip(i,o,y,a,O,E,k))?(b||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=E),m.props=a,m.state=E,m.context=k,a=y):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Df(t,i),y=i.memoizedProps,k=i.type===i.elementType?y:bt(i.type,y),m.props=k,b=i.pendingProps,O=m.context,E=o.contextType,typeof E=="object"&&E!==null?E=kt(E):(E=ht(o)?or:Xe.current,E=$r(i,E));var z=o.getDerivedStateFromProps;(L=typeof z=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==b||O!==E)&&op(i,m,a,E),On=!1,O=i.memoizedState,m.state=O,Fo(i,a,m,d);var H=i.memoizedState;y!==b||O!==H||dt.current||On?(typeof z=="function"&&(ku(i,o,z,a),H=i.memoizedState),(k=On||ip(i,o,k,a,O,H,E)||!1)?(L||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,H,E),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,H,E)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&O===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&O===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=H),m.props=a,m.state=H,m.context=E,a=k):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&O===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&O===t.memoizedState||(i.flags|=1024),a=!1)}return Au(t,i,o,a,h,d)}function Au(t,i,o,a,d,h){gp(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return d&&Cf(i,o,!1),cn(t,i,h);a=i.stateNode,gw.current=i;var y=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=Qr(i,t.child,null,h),i.child=Qr(i,null,y,h)):rt(t,i,y,h),i.memoizedState=a.state,d&&Cf(i,o,!0),i.child}function vp(t){var i=t.stateNode;i.pendingContext?wf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&wf(t,i.context,!1),pu(t,i.containerInfo)}function yp(t,i,o,a,d){return qr(),lu(d),i.flags|=256,rt(t,i,o,a),i.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Du(t){return{baseLanes:t,cachePool:null,transitions:null}}function wp(t,i,o){var a=i.pendingProps,d=Pe.current,h=!1,m=(i.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(d&2)!==0),y?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Ce(Pe,d&1),t===null)return ou(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=m):h=il(m,a,0,null),t=gr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Du(o),i.memoizedState=Ou,t):Lu(i,m));if(d=t.memoizedState,d!==null&&(y=d.dehydrated,y!==null))return _w(t,i,m,a,y,d,o);if(h){h=a.fallback,m=i.mode,d=t.child,y=d.sibling;var E={mode:"hidden",children:a.children};return(m&1)===0&&i.child!==d?(a=i.child,a.childLanes=0,a.pendingProps=E,i.deletions=null):(a=jn(d,E),a.subtreeFlags=d.subtreeFlags&14680064),y!==null?h=jn(y,h):(h=gr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Du(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Ou,a}return h=t.child,t=h.sibling,a=jn(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Lu(t,i){return i=il({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function $o(t,i,o,a){return a!==null&&lu(a),Qr(i,t.child,null,o),t=Lu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function _w(t,i,o,a,d,h,m){if(o)return i.flags&256?(i.flags&=-257,a=Ru(Error(n(422))),$o(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,d=i.mode,a=il({mode:"visible",children:a.children},d,0,null),h=gr(h,d,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&Qr(i,t.child,null,m),i.child.memoizedState=Du(m),i.memoizedState=Ou,h);if((i.mode&1)===0)return $o(t,i,m,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var y=a.dgst;return a=y,h=Error(n(419)),a=Ru(h,a,void 0),$o(t,i,m,a)}if(y=(m&t.childLanes)!==0,ft||y){if(a=He,a!==null){switch(m&-m){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|m))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,an(t,d),jt(a,t,d,-1))}return Yu(),a=Ru(Error(n(421))),$o(t,i,m,a)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=xw.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,Ct=Rn(d.nextSibling),Et=i,Re=!0,Mt=null,t!==null&&(It[Tt++]=on,It[Tt++]=ln,It[Tt++]=lr,on=t.id,ln=t.overflow,lr=i),i=Lu(i,a.children),i.flags|=4096,i)}function Ep(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),du(t.return,i,o)}function Mu(t,i,o,a,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=d)}function Cp(t,i,o){var a=i.pendingProps,d=a.revealOrder,h=a.tail;if(rt(t,i,a.children,o),a=Pe.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ep(t,o,i);else if(t.tag===19)Ep(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Ce(Pe,a),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Uo(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Mu(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Uo(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Mu(i,!0,o,null,h);break;case"together":Mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Go(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function cn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),hr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=jn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=jn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function vw(t,i,o){switch(i.tag){case 3:vp(i),qr();break;case 5:bf(i);break;case 1:ht(i.type)&&Ro(i);break;case 4:pu(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,d=i.memoizedProps.value;Ce(Lo,a._currentValue),a._currentValue=d;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(Ce(Pe,Pe.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?wp(t,i,o):(Ce(Pe,Pe.current&1),t=cn(t,i,o),t!==null?t.sibling:null);Ce(Pe,Pe.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Cp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ce(Pe,Pe.current),a)break;return null;case 22:case 23:return i.lanes=0,mp(t,i,o)}return cn(t,i,o)}var Sp,bu,Ip,Tp;Sp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},bu=function(){},Ip=function(t,i,o,a){var d=t.memoizedProps;if(d!==a){t=i.stateNode,cr(Yt.current);var h=null;switch(o){case"input":d=da(t,d),a=da(t,a),h=[];break;case"select":d=B({},d,{value:void 0}),a=B({},a,{value:void 0}),h=[];break;case"textarea":d=pa(t,d),a=pa(t,a),h=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=To)}ga(o,a);var m;o=null;for(k in d)if(!a.hasOwnProperty(k)&&d.hasOwnProperty(k)&&d[k]!=null)if(k==="style"){var y=d[k];for(m in y)y.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else k!=="dangerouslySetInnerHTML"&&k!=="children"&&k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&k!=="autoFocus"&&(l.hasOwnProperty(k)?h||(h=[]):(h=h||[]).push(k,null));for(k in a){var E=a[k];if(y=d!=null?d[k]:void 0,a.hasOwnProperty(k)&&E!==y&&(E!=null||y!=null))if(k==="style")if(y){for(m in y)!y.hasOwnProperty(m)||E&&E.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in E)E.hasOwnProperty(m)&&y[m]!==E[m]&&(o||(o={}),o[m]=E[m])}else o||(h||(h=[]),h.push(k,o)),o=E;else k==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,y=y?y.__html:void 0,E!=null&&y!==E&&(h=h||[]).push(k,E)):k==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(k,""+E):k!=="suppressContentEditableWarning"&&k!=="suppressHydrationWarning"&&(l.hasOwnProperty(k)?(E!=null&&k==="onScroll"&&Te("scroll",t),h||y===E||(h=[])):(h=h||[]).push(k,E))}o&&(h=h||[]).push("style",o);var k=h;(i.updateQueue=k)&&(i.flags|=4)}},Tp=function(t,i,o,a){o!==a&&(i.flags|=4)};function cs(t,i){if(!Re)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function et(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function yw(t,i,o){var a=i.pendingProps;switch(iu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(i),null;case 1:return ht(i.type)&&No(),et(i),null;case 3:return a=i.stateNode,Xr(),ke(dt),ke(Xe),_u(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Oo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Mt!==null&&(Ku(Mt),Mt=null))),bu(t,i),et(i),null;case 5:mu(i);var d=cr(ss.current);if(o=i.type,t!==null&&i.stateNode!=null)Ip(t,i,o,a,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return et(i),null}if(t=cr(Yt.current),Oo(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[Qt]=i,a[es]=h,t=(i.mode&1)!==0,o){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(d=0;d<Ji.length;d++)Te(Ji[d],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":ih(a,h),Te("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Te("invalid",a);break;case"textarea":lh(a,h),Te("invalid",a)}ga(o,h),d=null;for(var m in h)if(h.hasOwnProperty(m)){var y=h[m];m==="children"?typeof y=="string"?a.textContent!==y&&(h.suppressHydrationWarning!==!0&&Io(a.textContent,y,t),d=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&Io(a.textContent,y,t),d=["children",""+y]):l.hasOwnProperty(m)&&y!=null&&m==="onScroll"&&Te("scroll",a)}switch(o){case"input":eo(a),oh(a,h,!0);break;case"textarea":eo(a),uh(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=To)}a=d,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ch(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[Qt]=i,t[es]=a,Sp(t,i,!1,!1),i.stateNode=t;e:{switch(m=_a(o,a),o){case"dialog":Te("cancel",t),Te("close",t),d=a;break;case"iframe":case"object":case"embed":Te("load",t),d=a;break;case"video":case"audio":for(d=0;d<Ji.length;d++)Te(Ji[d],t);d=a;break;case"source":Te("error",t),d=a;break;case"img":case"image":case"link":Te("error",t),Te("load",t),d=a;break;case"details":Te("toggle",t),d=a;break;case"input":ih(t,a),d=da(t,a),Te("invalid",t);break;case"option":d=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},d=B({},a,{value:void 0}),Te("invalid",t);break;case"textarea":lh(t,a),d=pa(t,a),Te("invalid",t);break;default:d=a}ga(o,d),y=d;for(h in y)if(y.hasOwnProperty(h)){var E=y[h];h==="style"?fh(t,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&dh(t,E)):h==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Oi(t,E):typeof E=="number"&&Oi(t,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?E!=null&&h==="onScroll"&&Te("scroll",t):E!=null&&G(t,h,E,m))}switch(o){case"input":eo(t),oh(t,a,!1);break;case"textarea":eo(t),uh(t);break;case"option":a.value!=null&&t.setAttribute("value",""+pe(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Dr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Dr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=To)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return et(i),null;case 6:if(t&&i.stateNode!=null)Tp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=cr(ss.current),cr(Yt.current),Oo(i)){if(a=i.stateNode,o=i.memoizedProps,a[Qt]=i,(h=a.nodeValue!==o)&&(t=Et,t!==null))switch(t.tag){case 3:Io(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Io(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Qt]=i,i.stateNode=a}return et(i),null;case 13:if(ke(Pe),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Ct!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Rf(),qr(),i.flags|=98560,h=!1;else if(h=Oo(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Qt]=i}else qr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;et(i),h=!1}else Mt!==null&&(Ku(Mt),Mt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Pe.current&1)!==0?ze===0&&(ze=3):Yu())),i.updateQueue!==null&&(i.flags|=4),et(i),null);case 4:return Xr(),bu(t,i),t===null&&Xi(i.stateNode.containerInfo),et(i),null;case 10:return cu(i.type._context),et(i),null;case 17:return ht(i.type)&&No(),et(i),null;case 19:if(ke(Pe),h=i.memoizedState,h===null)return et(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)cs(h,!1);else{if(ze!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=Uo(t),m!==null){for(i.flags|=128,cs(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ce(Pe,Pe.current&1|2),i.child}t=t.sibling}h.tail!==null&&be()>ni&&(i.flags|=128,a=!0,cs(h,!1),i.lanes=4194304)}else{if(!a)if(t=Uo(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),cs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Re)return et(i),null}else 2*be()-h.renderingStartTime>ni&&o!==1073741824&&(i.flags|=128,a=!0,cs(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=be(),i.sibling=null,o=Pe.current,Ce(Pe,a?o&1|2:o&1),i):(et(i),null);case 22:case 23:return Qu(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(St&1073741824)!==0&&(et(i),i.subtreeFlags&6&&(i.flags|=8192)):et(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function ww(t,i){switch(iu(i),i.tag){case 1:return ht(i.type)&&No(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Xr(),ke(dt),ke(Xe),_u(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return mu(i),null;case 13:if(ke(Pe),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));qr()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ke(Pe),null;case 4:return Xr(),null;case 10:return cu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Ko=!1,tt=!1,Ew=typeof WeakSet=="function"?WeakSet:Set,W=null;function ei(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){De(t,i,a)}else o.current=null}function Fu(t,i,o){try{o()}catch(a){De(t,i,a)}}var kp=!1;function Cw(t,i){if(Qa=fo,t=rf(),Wa(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var d=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,y=-1,E=-1,k=0,L=0,b=t,O=null;t:for(;;){for(var z;b!==o||d!==0&&b.nodeType!==3||(y=m+d),b!==h||a!==0&&b.nodeType!==3||(E=m+a),b.nodeType===3&&(m+=b.nodeValue.length),(z=b.firstChild)!==null;)O=b,b=z;for(;;){if(b===t)break t;if(O===o&&++k===d&&(y=m),O===h&&++L===a&&(E=m),(z=b.nextSibling)!==null)break;b=O,O=b.parentNode}b=z}o=y===-1||E===-1?null:{start:y,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ya={focusedElem:t,selectionRange:o},fo=!1,W=i;W!==null;)if(i=W,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,W=t;else for(;W!==null;){i=W;try{var H=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var $=H.memoizedProps,Fe=H.memoizedState,I=i.stateNode,C=I.getSnapshotBeforeUpdate(i.elementType===i.type?$:bt(i.type,$),Fe);I.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){De(i,i.return,F)}if(t=i.sibling,t!==null){t.return=i.return,W=t;break}W=i.return}return H=kp,kp=!1,H}function ds(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&Fu(i,o,h)}d=d.next}while(d!==a)}}function qo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Uu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Np(t){var i=t.alternate;i!==null&&(t.alternate=null,Np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Qt],delete i[es],delete i[eu],delete i[iw],delete i[sw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rp(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=To));else if(a!==4&&(t=t.child,t!==null))for(ju(t,i,o),t=t.sibling;t!==null;)ju(t,i,o),t=t.sibling}function zu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(zu(t,i,o),t=t.sibling;t!==null;)zu(t,i,o),t=t.sibling}var qe=null,Ft=!1;function Ln(t,i,o){for(o=o.child;o!==null;)xp(t,i,o),o=o.sibling}function xp(t,i,o){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(oo,o)}catch{}switch(o.tag){case 5:tt||ei(o,i);case 6:var a=qe,d=Ft;qe=null,Ln(t,i,o),qe=a,Ft=d,qe!==null&&(Ft?(t=qe,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):qe.removeChild(o.stateNode));break;case 18:qe!==null&&(Ft?(t=qe,o=o.stateNode,t.nodeType===8?Za(t.parentNode,o):t.nodeType===1&&Za(t,o),Vi(t)):Za(qe,o.stateNode));break;case 4:a=qe,d=Ft,qe=o.stateNode.containerInfo,Ft=!0,Ln(t,i,o),qe=a,Ft=d;break;case 0:case 11:case 14:case 15:if(!tt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var h=d,m=h.destroy;h=h.tag,m!==void 0&&((h&2)!==0||(h&4)!==0)&&Fu(o,i,m),d=d.next}while(d!==a)}Ln(t,i,o);break;case 1:if(!tt&&(ei(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(y){De(o,i,y)}Ln(t,i,o);break;case 21:Ln(t,i,o);break;case 22:o.mode&1?(tt=(a=tt)||o.memoizedState!==null,Ln(t,i,o),tt=a):Ln(t,i,o);break;default:Ln(t,i,o)}}function Ap(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Ew),i.forEach(function(a){var d=Aw.bind(null,t,a);o.has(a)||(o.add(a),a.then(d,d))})}}function Ut(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var d=o[a];try{var h=t,m=i,y=m;e:for(;y!==null;){switch(y.tag){case 5:qe=y.stateNode,Ft=!1;break e;case 3:qe=y.stateNode.containerInfo,Ft=!0;break e;case 4:qe=y.stateNode.containerInfo,Ft=!0;break e}y=y.return}if(qe===null)throw Error(n(160));xp(h,m,d),qe=null,Ft=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(k){De(d,i,k)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Op(i,t),i=i.sibling}function Op(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(i,t),Xt(t),a&4){try{ds(3,t,t.return),qo(3,t)}catch($){De(t,t.return,$)}try{ds(5,t,t.return)}catch($){De(t,t.return,$)}}break;case 1:Ut(i,t),Xt(t),a&512&&o!==null&&ei(o,o.return);break;case 5:if(Ut(i,t),Xt(t),a&512&&o!==null&&ei(o,o.return),t.flags&32){var d=t.stateNode;try{Oi(d,"")}catch($){De(t,t.return,$)}}if(a&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,y=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&sh(d,h),_a(y,m);var k=_a(y,h);for(m=0;m<E.length;m+=2){var L=E[m],b=E[m+1];L==="style"?fh(d,b):L==="dangerouslySetInnerHTML"?dh(d,b):L==="children"?Oi(d,b):G(d,L,b,k)}switch(y){case"input":ha(d,h);break;case"textarea":ah(d,h);break;case"select":var O=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var z=h.value;z!=null?Dr(d,!!h.multiple,z,!1):O!==!!h.multiple&&(h.defaultValue!=null?Dr(d,!!h.multiple,h.defaultValue,!0):Dr(d,!!h.multiple,h.multiple?[]:"",!1))}d[es]=h}catch($){De(t,t.return,$)}}break;case 6:if(Ut(i,t),Xt(t),a&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch($){De(t,t.return,$)}}break;case 3:if(Ut(i,t),Xt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Vi(i.containerInfo)}catch($){De(t,t.return,$)}break;case 4:Ut(i,t),Xt(t);break;case 13:Ut(i,t),Xt(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(Vu=be())),a&4&&Ap(t);break;case 22:if(L=o!==null&&o.memoizedState!==null,t.mode&1?(tt=(k=tt)||L,Ut(i,t),tt=k):Ut(i,t),Xt(t),a&8192){if(k=t.memoizedState!==null,(t.stateNode.isHidden=k)&&!L&&(t.mode&1)!==0)for(W=t,L=t.child;L!==null;){for(b=W=L;W!==null;){switch(O=W,z=O.child,O.tag){case 0:case 11:case 14:case 15:ds(4,O,O.return);break;case 1:ei(O,O.return);var H=O.stateNode;if(typeof H.componentWillUnmount=="function"){a=O,o=O.return;try{i=a,H.props=i.memoizedProps,H.state=i.memoizedState,H.componentWillUnmount()}catch($){De(a,o,$)}}break;case 5:ei(O,O.return);break;case 22:if(O.memoizedState!==null){Mp(b);continue}}z!==null?(z.return=O,W=z):Mp(b)}L=L.sibling}e:for(L=null,b=t;;){if(b.tag===5){if(L===null){L=b;try{d=b.stateNode,k?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=b.stateNode,E=b.memoizedProps.style,m=E!=null&&E.hasOwnProperty("display")?E.display:null,y.style.display=hh("display",m))}catch($){De(t,t.return,$)}}}else if(b.tag===6){if(L===null)try{b.stateNode.nodeValue=k?"":b.memoizedProps}catch($){De(t,t.return,$)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===t)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;L===b&&(L=null),b=b.return}L===b&&(L=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Ut(i,t),Xt(t),a&4&&Ap(t);break;case 21:break;default:Ut(i,t),Xt(t)}}function Xt(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Rp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Oi(d,""),a.flags&=-33);var h=Pp(t);zu(t,h,d);break;case 3:case 4:var m=a.stateNode.containerInfo,y=Pp(t);ju(t,y,m);break;default:throw Error(n(161))}}catch(E){De(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Sw(t,i,o){W=t,Dp(t)}function Dp(t,i,o){for(var a=(t.mode&1)!==0;W!==null;){var d=W,h=d.child;if(d.tag===22&&a){var m=d.memoizedState!==null||Ko;if(!m){var y=d.alternate,E=y!==null&&y.memoizedState!==null||tt;y=Ko;var k=tt;if(Ko=m,(tt=E)&&!k)for(W=d;W!==null;)m=W,E=m.child,m.tag===22&&m.memoizedState!==null?bp(d):E!==null?(E.return=m,W=E):bp(d);for(;h!==null;)W=h,Dp(h),h=h.sibling;W=d,Ko=y,tt=k}Lp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,W=h):Lp(t)}}function Lp(t){for(;W!==null;){var i=W;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:tt||qo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!tt)if(o===null)a.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:bt(i.type,o.memoizedProps);a.componentDidUpdate(d,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Mf(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Mf(i,m,o)}break;case 5:var y=i.stateNode;if(o===null&&i.flags&4){o=y;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var k=i.alternate;if(k!==null){var L=k.memoizedState;if(L!==null){var b=L.dehydrated;b!==null&&Vi(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}tt||i.flags&512&&Uu(i)}catch(O){De(i,i.return,O)}}if(i===t){W=null;break}if(o=i.sibling,o!==null){o.return=i.return,W=o;break}W=i.return}}function Mp(t){for(;W!==null;){var i=W;if(i===t){W=null;break}var o=i.sibling;if(o!==null){o.return=i.return,W=o;break}W=i.return}}function bp(t){for(;W!==null;){var i=W;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qo(4,i)}catch(E){De(i,o,E)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var d=i.return;try{a.componentDidMount()}catch(E){De(i,d,E)}}var h=i.return;try{Uu(i)}catch(E){De(i,h,E)}break;case 5:var m=i.return;try{Uu(i)}catch(E){De(i,m,E)}}}catch(E){De(i,i.return,E)}if(i===t){W=null;break}var y=i.sibling;if(y!==null){y.return=i.return,W=y;break}W=i.return}}var Iw=Math.ceil,Qo=Q.ReactCurrentDispatcher,Wu=Q.ReactCurrentOwner,Rt=Q.ReactCurrentBatchConfig,ae=0,He=null,Ue=null,Qe=0,St=0,ti=Pn(0),ze=0,hs=null,hr=0,Yo=0,Bu=0,fs=null,pt=null,Vu=0,ni=1/0,dn=null,Jo=!1,Hu=null,Mn=null,Xo=!1,bn=null,Zo=0,ps=0,$u=null,el=-1,tl=0;function it(){return(ae&6)!==0?be():el!==-1?el:el=be()}function Fn(t){return(t.mode&1)===0?1:(ae&2)!==0&&Qe!==0?Qe&-Qe:lw.transition!==null?(tl===0&&(tl=Rh()),tl):(t=me,t!==0||(t=window.event,t=t===void 0?16:Fh(t.type)),t)}function jt(t,i,o,a){if(50<ps)throw ps=0,$u=null,Error(n(185));Ui(t,o,a),((ae&2)===0||t!==He)&&(t===He&&((ae&2)===0&&(Yo|=o),ze===4&&Un(t,Qe)),mt(t,a),o===1&&ae===0&&(i.mode&1)===0&&(ni=be()+500,Po&&An()))}function mt(t,i){var o=t.callbackNode;ly(t,i);var a=uo(t,t===He?Qe:0);if(a===0)o!==null&&Th(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&Th(o),i===1)t.tag===0?ow(Up.bind(null,t)):Sf(Up.bind(null,t)),nw(function(){(ae&6)===0&&An()}),o=null;else{switch(Ph(a)){case 1:o=Ia;break;case 4:o=kh;break;case 16:o=so;break;case 536870912:o=Nh;break;default:o=so}o=Gp(o,Fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Fp(t,i){if(el=-1,tl=0,(ae&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ri()&&t.callbackNode!==o)return null;var a=uo(t,t===He?Qe:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=nl(t,a);else{i=a;var d=ae;ae|=2;var h=zp();(He!==t||Qe!==i)&&(dn=null,ni=be()+500,pr(t,i));do try{Nw();break}catch(y){jp(t,y)}while(!0);uu(),Qo.current=h,ae=d,Ue!==null?i=0:(He=null,Qe=0,i=ze)}if(i!==0){if(i===2&&(d=Ta(t),d!==0&&(a=d,i=Gu(t,d))),i===1)throw o=hs,pr(t,0),Un(t,a),mt(t,be()),o;if(i===6)Un(t,a);else{if(d=t.current.alternate,(a&30)===0&&!Tw(d)&&(i=nl(t,a),i===2&&(h=Ta(t),h!==0&&(a=h,i=Gu(t,h))),i===1))throw o=hs,pr(t,0),Un(t,a),mt(t,be()),o;switch(t.finishedWork=d,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:mr(t,pt,dn);break;case 3:if(Un(t,a),(a&130023424)===a&&(i=Vu+500-be(),10<i)){if(uo(t,0)!==0)break;if(d=t.suspendedLanes,(d&a)!==a){it(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Xa(mr.bind(null,t,pt,dn),i);break}mr(t,pt,dn);break;case 4:if(Un(t,a),(a&4194240)===a)break;for(i=t.eventTimes,d=-1;0<a;){var m=31-Dt(a);h=1<<m,m=i[m],m>d&&(d=m),a&=~h}if(a=d,a=be()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Iw(a/1960))-a,10<a){t.timeoutHandle=Xa(mr.bind(null,t,pt,dn),a);break}mr(t,pt,dn);break;case 5:mr(t,pt,dn);break;default:throw Error(n(329))}}}return mt(t,be()),t.callbackNode===o?Fp.bind(null,t):null}function Gu(t,i){var o=fs;return t.current.memoizedState.isDehydrated&&(pr(t,i).flags|=256),t=nl(t,i),t!==2&&(i=pt,pt=o,i!==null&&Ku(i)),t}function Ku(t){pt===null?pt=t:pt.push.apply(pt,t)}function Tw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var d=o[a],h=d.getSnapshot;d=d.value;try{if(!Lt(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Un(t,i){for(i&=~Bu,i&=~Yo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Dt(i),a=1<<o;t[o]=-1,i&=~a}}function Up(t){if((ae&6)!==0)throw Error(n(327));ri();var i=uo(t,0);if((i&1)===0)return mt(t,be()),null;var o=nl(t,i);if(t.tag!==0&&o===2){var a=Ta(t);a!==0&&(i=a,o=Gu(t,a))}if(o===1)throw o=hs,pr(t,0),Un(t,i),mt(t,be()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,mr(t,pt,dn),mt(t,be()),null}function qu(t,i){var o=ae;ae|=1;try{return t(i)}finally{ae=o,ae===0&&(ni=be()+500,Po&&An())}}function fr(t){bn!==null&&bn.tag===0&&(ae&6)===0&&ri();var i=ae;ae|=1;var o=Rt.transition,a=me;try{if(Rt.transition=null,me=1,t)return t()}finally{me=a,Rt.transition=o,ae=i,(ae&6)===0&&An()}}function Qu(){St=ti.current,ke(ti)}function pr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,tw(o)),Ue!==null)for(o=Ue.return;o!==null;){var a=o;switch(iu(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&No();break;case 3:Xr(),ke(dt),ke(Xe),_u();break;case 5:mu(a);break;case 4:Xr();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:cu(a.type._context);break;case 22:case 23:Qu()}o=o.return}if(He=t,Ue=t=jn(t.current,null),Qe=St=i,ze=0,hs=null,Bu=Yo=hr=0,pt=fs=null,ur!==null){for(i=0;i<ur.length;i++)if(o=ur[i],a=o.interleaved,a!==null){o.interleaved=null;var d=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=d,a.next=m}o.pending=a}ur=null}return t}function jp(t,i){do{var o=Ue;try{if(uu(),jo.current=Vo,zo){for(var a=xe.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}zo=!1}if(dr=0,Ve=je=xe=null,os=!1,ls=0,Wu.current=null,o===null||o.return===null){ze=1,hs=i,Ue=null;break}e:{var h=t,m=o.return,y=o,E=i;if(i=Qe,y.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var k=E,L=y,b=L.tag;if((L.mode&1)===0&&(b===0||b===11||b===15)){var O=L.alternate;O?(L.updateQueue=O.updateQueue,L.memoizedState=O.memoizedState,L.lanes=O.lanes):(L.updateQueue=null,L.memoizedState=null)}var z=cp(m);if(z!==null){z.flags&=-257,dp(z,m,y,h,i),z.mode&1&&up(h,k,i),i=z,E=k;var H=i.updateQueue;if(H===null){var $=new Set;$.add(E),i.updateQueue=$}else H.add(E);break e}else{if((i&1)===0){up(h,k,i),Yu();break e}E=Error(n(426))}}else if(Re&&y.mode&1){var Fe=cp(m);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),dp(Fe,m,y,h,i),lu(Zr(E,y));break e}}h=E=Zr(E,y),ze!==4&&(ze=2),fs===null?fs=[h]:fs.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var I=lp(h,E,i);Lf(h,I);break e;case 1:y=E;var C=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Mn===null||!Mn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var F=ap(h,y,i);Lf(h,F);break e}}h=h.return}while(h!==null)}Bp(o)}catch(K){i=K,Ue===o&&o!==null&&(Ue=o=o.return);continue}break}while(!0)}function zp(){var t=Qo.current;return Qo.current=Vo,t===null?Vo:t}function Yu(){(ze===0||ze===3||ze===2)&&(ze=4),He===null||(hr&268435455)===0&&(Yo&268435455)===0||Un(He,Qe)}function nl(t,i){var o=ae;ae|=2;var a=zp();(He!==t||Qe!==i)&&(dn=null,pr(t,i));do try{kw();break}catch(d){jp(t,d)}while(!0);if(uu(),ae=o,Qo.current=a,Ue!==null)throw Error(n(261));return He=null,Qe=0,ze}function kw(){for(;Ue!==null;)Wp(Ue)}function Nw(){for(;Ue!==null&&!Xv();)Wp(Ue)}function Wp(t){var i=$p(t.alternate,t,St);t.memoizedProps=t.pendingProps,i===null?Bp(t):Ue=i,Wu.current=null}function Bp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=yw(o,i,St),o!==null){Ue=o;return}}else{if(o=ww(o,i),o!==null){o.flags&=32767,Ue=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Ue=null;return}}if(i=i.sibling,i!==null){Ue=i;return}Ue=i=t}while(i!==null);ze===0&&(ze=5)}function mr(t,i,o){var a=me,d=Rt.transition;try{Rt.transition=null,me=1,Rw(t,i,o,a)}finally{Rt.transition=d,me=a}return null}function Rw(t,i,o,a){do ri();while(bn!==null);if((ae&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(ay(t,h),t===He&&(Ue=He=null,Qe=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Xo||(Xo=!0,Gp(so,function(){return ri(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Rt.transition,Rt.transition=null;var m=me;me=1;var y=ae;ae|=4,Wu.current=null,Cw(t,o),Op(o,t),qy(Ya),fo=!!Qa,Ya=Qa=null,t.current=o,Sw(o),Zv(),ae=y,me=m,Rt.transition=h}else t.current=o;if(Xo&&(Xo=!1,bn=t,Zo=d),h=t.pendingLanes,h===0&&(Mn=null),ny(o.stateNode),mt(t,be()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],a(d.value,{componentStack:d.stack,digest:d.digest});if(Jo)throw Jo=!1,t=Hu,Hu=null,t;return(Zo&1)!==0&&t.tag!==0&&ri(),h=t.pendingLanes,(h&1)!==0?t===$u?ps++:(ps=0,$u=t):ps=0,An(),null}function ri(){if(bn!==null){var t=Ph(Zo),i=Rt.transition,o=me;try{if(Rt.transition=null,me=16>t?16:t,bn===null)var a=!1;else{if(t=bn,bn=null,Zo=0,(ae&6)!==0)throw Error(n(331));var d=ae;for(ae|=4,W=t.current;W!==null;){var h=W,m=h.child;if((W.flags&16)!==0){var y=h.deletions;if(y!==null){for(var E=0;E<y.length;E++){var k=y[E];for(W=k;W!==null;){var L=W;switch(L.tag){case 0:case 11:case 15:ds(8,L,h)}var b=L.child;if(b!==null)b.return=L,W=b;else for(;W!==null;){L=W;var O=L.sibling,z=L.return;if(Np(L),L===k){W=null;break}if(O!==null){O.return=z,W=O;break}W=z}}}var H=h.alternate;if(H!==null){var $=H.child;if($!==null){H.child=null;do{var Fe=$.sibling;$.sibling=null,$=Fe}while($!==null)}}W=h}}if((h.subtreeFlags&2064)!==0&&m!==null)m.return=h,W=m;else e:for(;W!==null;){if(h=W,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ds(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,W=I;break e}W=h.return}}var C=t.current;for(W=C;W!==null;){m=W;var T=m.child;if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,W=T;else e:for(m=C;W!==null;){if(y=W,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:qo(9,y)}}catch(K){De(y,y.return,K)}if(y===m){W=null;break e}var F=y.sibling;if(F!==null){F.return=y.return,W=F;break e}W=y.return}}if(ae=d,An(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(oo,t)}catch{}a=!0}return a}finally{me=o,Rt.transition=i}}return!1}function Vp(t,i,o){i=Zr(o,i),i=lp(t,i,1),t=Dn(t,i,1),i=it(),t!==null&&(Ui(t,1,i),mt(t,i))}function De(t,i,o){if(t.tag===3)Vp(t,t,o);else for(;i!==null;){if(i.tag===3){Vp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mn===null||!Mn.has(a))){t=Zr(o,t),t=ap(i,t,1),i=Dn(i,t,1),t=it(),i!==null&&(Ui(i,1,t),mt(i,t));break}}i=i.return}}function Pw(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=it(),t.pingedLanes|=t.suspendedLanes&o,He===t&&(Qe&o)===o&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>be()-Vu?pr(t,0):Bu|=o),mt(t,i)}function Hp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ao,ao<<=1,(ao&130023424)===0&&(ao=4194304)));var o=it();t=an(t,i),t!==null&&(Ui(t,i,o),mt(t,o))}function xw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Hp(t,o)}function Aw(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),Hp(t,o)}var $p;$p=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||dt.current)ft=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ft=!1,vw(t,i,o);ft=(t.flags&131072)!==0}else ft=!1,Re&&(i.flags&1048576)!==0&&If(i,Ao,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Go(t,i),t=i.pendingProps;var d=$r(i,Xe.current);Jr(i,o),d=wu(null,i,a,t,d,o);var h=Eu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ht(a)?(h=!0,Ro(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fu(i),d.updater=Ho,i.stateNode=d,d._reactInternals=i,Nu(i,a,t,o),i=Au(null,i,a,!0,h,o)):(i.tag=0,Re&&h&&ru(i),rt(null,i,d,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Go(t,i),t=i.pendingProps,d=a._init,a=d(a._payload),i.type=a,d=i.tag=Dw(a),t=bt(a,t),d){case 0:i=xu(null,i,a,t,o);break e;case 1:i=_p(null,i,a,t,o);break e;case 11:i=hp(null,i,a,t,o);break e;case 14:i=fp(null,i,a,bt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:bt(a,d),xu(t,i,a,d,o);case 1:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:bt(a,d),_p(t,i,a,d,o);case 3:e:{if(vp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,d=h.element,Df(t,i),Fo(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Zr(Error(n(423)),i),i=yp(t,i,a,o,d);break e}else if(a!==d){d=Zr(Error(n(424)),i),i=yp(t,i,a,o,d);break e}else for(Ct=Rn(i.stateNode.containerInfo.firstChild),Et=i,Re=!0,Mt=null,o=Af(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(qr(),a===d){i=cn(t,i,o);break e}rt(t,i,a,o)}i=i.child}return i;case 5:return bf(i),t===null&&ou(i),a=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,m=d.children,Ja(a,d)?m=null:h!==null&&Ja(a,h)&&(i.flags|=32),gp(t,i),rt(t,i,m,o),i.child;case 6:return t===null&&ou(i),null;case 13:return wp(t,i,o);case 4:return pu(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=Qr(i,null,a,o):rt(t,i,a,o),i.child;case 11:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:bt(a,d),hp(t,i,a,d,o);case 7:return rt(t,i,i.pendingProps,o),i.child;case 8:return rt(t,i,i.pendingProps.children,o),i.child;case 12:return rt(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,d=i.pendingProps,h=i.memoizedProps,m=d.value,Ce(Lo,a._currentValue),a._currentValue=m,h!==null)if(Lt(h.value,m)){if(h.children===d.children&&!dt.current){i=cn(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var y=h.dependencies;if(y!==null){m=h.child;for(var E=y.firstContext;E!==null;){if(E.context===a){if(h.tag===1){E=un(-1,o&-o),E.tag=2;var k=h.updateQueue;if(k!==null){k=k.shared;var L=k.pending;L===null?E.next=E:(E.next=L.next,L.next=E),k.pending=E}}h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),du(h.return,o,i),y.lanes|=o;break}E=E.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,y=m.alternate,y!==null&&(y.lanes|=o),du(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}rt(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,a=i.pendingProps.children,Jr(i,o),d=kt(d),a=a(d),i.flags|=1,rt(t,i,a,o),i.child;case 14:return a=i.type,d=bt(a,i.pendingProps),d=bt(a.type,d),fp(t,i,a,d,o);case 15:return pp(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,d=i.pendingProps,d=i.elementType===a?d:bt(a,d),Go(t,i),i.tag=1,ht(a)?(t=!0,Ro(i)):t=!1,Jr(i,o),sp(i,a,d),Nu(i,a,d,o),Au(null,i,a,!0,t,o);case 19:return Cp(t,i,o);case 22:return mp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return Ih(t,i)}function Ow(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,i,o,a){return new Ow(t,i,o,a)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dw(t){if(typeof t=="function")return Ju(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gt)return 11;if(t===Kt)return 14}return 2}function jn(t,i){var o=t.alternate;return o===null?(o=Pt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function rl(t,i,o,a,d,h){var m=2;if(a=t,typeof t=="function")Ju(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case ue:return gr(o.children,d,h,i);case we:m=8,d|=8;break;case ut:return t=Pt(12,o,i,d|2),t.elementType=ut,t.lanes=h,t;case vt:return t=Pt(13,o,i,d),t.elementType=vt,t.lanes=h,t;case Ot:return t=Pt(19,o,i,d),t.elementType=Ot,t.lanes=h,t;case Oe:return il(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nt:m=10;break e;case nn:m=9;break e;case Gt:m=11;break e;case Kt:m=14;break e;case ct:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Pt(m,o,i,d),i.elementType=t,i.type=a,i.lanes=h,i}function gr(t,i,o,a){return t=Pt(7,t,a,i),t.lanes=o,t}function il(t,i,o,a){return t=Pt(22,t,a,i),t.elementType=Oe,t.lanes=o,t.stateNode={isHidden:!1},t}function Xu(t,i,o){return t=Pt(6,t,null,i),t.lanes=o,t}function Zu(t,i,o){return i=Pt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Lw(t,i,o,a,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ec(t,i,o,a,d,h,m,y,E){return t=new Lw(t,i,o,y,E),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Pt(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(h),t}function Mw(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Kp(t){if(!t)return xn;t=t._reactInternals;e:{if(ir(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ht(o))return Ef(t,o,i)}return i}function qp(t,i,o,a,d,h,m,y,E){return t=ec(o,a,!0,t,d,h,m,y,E),t.context=Kp(null),o=t.current,a=it(),d=Fn(o),h=un(a,d),h.callback=i??null,Dn(o,h,d),t.current.lanes=d,Ui(t,d,a),mt(t,a),t}function sl(t,i,o,a){var d=i.current,h=it(),m=Fn(d);return o=Kp(o),i.context===null?i.context=o:i.pendingContext=o,i=un(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Dn(d,i,m),t!==null&&(jt(t,d,m,h),bo(t,d,m)),m}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function tc(t,i){Qp(t,i),(t=t.alternate)&&Qp(t,i)}function bw(){return null}var Yp=typeof reportError=="function"?reportError:function(t){console.error(t)};function nc(t){this._internalRoot=t}ll.prototype.render=nc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));sl(t,i,null,null)},ll.prototype.unmount=nc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;fr(function(){sl(null,t,null,null)}),i[rn]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Tn.length&&i!==0&&i<Tn[o].priority;o++);Tn.splice(o,0,t),o===0&&Mh(t)}};function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jp(){}function Fw(t,i,o,a,d){if(d){if(typeof a=="function"){var h=a;a=function(){var k=ol(m);h.call(k)}}var m=qp(i,a,t,0,null,!1,!1,"",Jp);return t._reactRootContainer=m,t[rn]=m.current,Xi(t.nodeType===8?t.parentNode:t),fr(),m}for(;d=t.lastChild;)t.removeChild(d);if(typeof a=="function"){var y=a;a=function(){var k=ol(E);y.call(k)}}var E=ec(t,0,!1,null,null,!1,!1,"",Jp);return t._reactRootContainer=E,t[rn]=E.current,Xi(t.nodeType===8?t.parentNode:t),fr(function(){sl(i,E,o,a)}),E}function ul(t,i,o,a,d){var h=o._reactRootContainer;if(h){var m=h;if(typeof d=="function"){var y=d;d=function(){var E=ol(m);y.call(E)}}sl(i,m,t,d)}else m=Fw(o,i,t,d,a);return ol(m)}xh=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Fi(i.pendingLanes);o!==0&&(Na(i,o|1),mt(i,be()),(ae&6)===0&&(ni=be()+500,An()))}break;case 13:fr(function(){var a=an(t,1);if(a!==null){var d=it();jt(a,t,1,d)}}),tc(t,1)}},Ra=function(t){if(t.tag===13){var i=an(t,134217728);if(i!==null){var o=it();jt(i,t,134217728,o)}tc(t,134217728)}},Ah=function(t){if(t.tag===13){var i=Fn(t),o=an(t,i);if(o!==null){var a=it();jt(o,t,i,a)}tc(t,i)}},Oh=function(){return me},Dh=function(t,i){var o=me;try{return me=t,i()}finally{me=o}},wa=function(t,i,o){switch(i){case"input":if(ha(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var d=ko(a);if(!d)throw Error(n(90));rh(a),ha(a,d)}}}break;case"textarea":ah(t,o);break;case"select":i=o.value,i!=null&&Dr(t,!!o.multiple,i,!1)}},_h=qu,vh=fr;var Uw={usingClientEntryPoint:!1,Events:[ts,Vr,ko,mh,gh,qu]},ms={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jw={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ch(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{oo=cl.inject(jw),qt=cl}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw,gt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(i))throw Error(n(200));return Mw(t,i,null,o)},gt.createRoot=function(t,i){if(!rc(t))throw Error(n(299));var o=!1,a="",d=Yp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ec(t,1,!1,null,null,o,!1,a,d),t[rn]=i.current,Xi(t.nodeType===8?t.parentNode:t),new nc(i)},gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ch(i),t=t===null?null:t.stateNode,t},gt.flushSync=function(t){return fr(t)},gt.hydrate=function(t,i,o){if(!al(i))throw Error(n(200));return ul(null,t,i,!0,o)},gt.hydrateRoot=function(t,i,o){if(!rc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,d=!1,h="",m=Yp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=qp(i,null,t,1,o??null,d,!1,h,m),t[rn]=i.current,Xi(t),a)for(t=0;t<a.length;t++)o=a[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new ll(i)},gt.render=function(t,i,o){if(!al(i))throw Error(n(200));return ul(null,t,i,!1,o)},gt.unmountComponentAtNode=function(t){if(!al(t))throw Error(n(40));return t._reactRootContainer?(fr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[rn]=null})}),!0):!1},gt.unstable_batchedUpdates=qu,gt.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!al(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ul(t,i,o,!1,a)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var sm;function kg(){if(sm)return oc.exports;sm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),oc.exports=qw(),oc.exports}var om;function Qw(){if(om)return dl;om=1;var r=kg();return dl.createRoot=r.createRoot,dl.hydrateRoot=r.hydrateRoot,dl}var Yw=Qw();const Jw=Ig(Yw);kg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ps(){return Ps=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Ps.apply(this,arguments)}var $n;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})($n||($n={}));const lm="popstate";function Xw(r){r===void 0&&(r={});function e(s,l){let{pathname:u,search:c,hash:f}=s.location;return Rc("",{pathname:u,search:c,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:wl(l)}return e0(e,n,null,r)}function Ae(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function td(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zw(){return Math.random().toString(36).substr(2,8)}function am(r,e){return{usr:r.state,key:r.key,idx:e}}function Rc(r,e,n,s){return n===void 0&&(n=null),Ps({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?wi(e):e,{state:n,key:e&&e.key||s||Zw()})}function wl(r){let{pathname:e="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function wi(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function e0(r,e,n,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:u=!1}=s,c=l.history,f=$n.Pop,p=null,g=v();g==null&&(g=0,c.replaceState(Ps({},c.state,{idx:g}),""));function v(){return(c.state||{idx:null}).idx}function _(){f=$n.Pop;let x=v(),q=x==null?null:x-g;g=x,p&&p({action:f,location:N.location,delta:q})}function w(x,q){f=$n.Push;let V=Rc(N.location,x,q);g=v()+1;let G=am(V,g),Q=N.createHref(V);try{c.pushState(G,"",Q)}catch(ge){if(ge instanceof DOMException&&ge.name==="DataCloneError")throw ge;l.location.assign(Q)}u&&p&&p({action:f,location:N.location,delta:1})}function P(x,q){f=$n.Replace;let V=Rc(N.location,x,q);g=v();let G=am(V,g),Q=N.createHref(V);c.replaceState(G,"",Q),u&&p&&p({action:f,location:N.location,delta:0})}function A(x){let q=l.location.origin!=="null"?l.location.origin:l.location.href,V=typeof x=="string"?x:wl(x);return V=V.replace(/ $/,"%20"),Ae(q,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,q)}let N={get action(){return f},get location(){return r(l,c)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(lm,_),p=x,()=>{l.removeEventListener(lm,_),p=null}},createHref(x){return e(l,x)},createURL:A,encodeLocation(x){let q=A(x);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:w,replace:P,go(x){return c.go(x)}};return N}var um;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(um||(um={}));function t0(r,e,n){return n===void 0&&(n="/"),n0(r,e,n)}function n0(r,e,n,s){let l=typeof e=="string"?wi(e):e,u=di(l.pathname||"/",n);if(u==null)return null;let c=Ng(r);r0(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let g=p0(u);f=h0(c[p],g)}return f}function Ng(r,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let l=(u,c,f)=>{let p={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};p.relativePath.startsWith("/")&&(Ae(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let g=Kn([s,p.relativePath]),v=n.concat(p);u.children&&u.children.length>0&&(Ae(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Ng(u.children,e,v,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:c0(g,u.index),routesMeta:v})};return r.forEach((u,c)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,c);else for(let p of Rg(u.path))l(u,c,p)}),e}function Rg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let c=Rg(s.join("/")),f=[];return f.push(...c.map(p=>p===""?u:[u,p].join("/"))),l&&f.push(...c),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function r0(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:d0(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const i0=/^:[\w-]+$/,s0=3,o0=2,l0=1,a0=10,u0=-2,cm=r=>r==="*";function c0(r,e){let n=r.split("/"),s=n.length;return n.some(cm)&&(s+=u0),e&&(s+=o0),n.filter(l=>!cm(l)).reduce((l,u)=>l+(i0.test(u)?s0:u===""?l0:a0),s)}function d0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function h0(r,e,n){let{routesMeta:s}=r,l={},u="/",c=[];for(let f=0;f<s.length;++f){let p=s[f],g=f===s.length-1,v=u==="/"?e:e.slice(u.length)||"/",_=Pc({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),w=p.route;if(!_)return null;Object.assign(l,_.params),c.push({params:l,pathname:Kn([u,_.pathname]),pathnameBase:y0(Kn([u,_.pathnameBase])),route:w}),_.pathnameBase!=="/"&&(u=Kn([u,_.pathnameBase]))}return c}function Pc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=f0(r.path,r.caseSensitive,r.end),l=e.match(n);if(!l)return null;let u=l[0],c=u.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:s.reduce((g,v,_)=>{let{paramName:w,isOptional:P}=v;if(w==="*"){let N=f[_]||"";c=u.slice(0,u.length-N.length).replace(/(.)\/+$/,"$1")}const A=f[_];return P&&!A?g[w]=void 0:g[w]=(A||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:c,pattern:r}}function f0(r,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),td(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function p0(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return td(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function di(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}const m0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,g0=r=>m0.test(r);function _0(r,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:l=""}=typeof r=="string"?wi(r):r,u;if(n)if(g0(n))u=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),td(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?u=dm(n.substring(1),"/"):u=dm(n,e)}else u=e;return{pathname:u,search:w0(s),hash:E0(l)}}function dm(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function uc(r,e,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function v0(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function nd(r,e){let n=v0(r);return e?n.map((s,l)=>l===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function rd(r,e,n,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=wi(r):(l=Ps({},r),Ae(!l.pathname||!l.pathname.includes("?"),uc("?","pathname","search",l)),Ae(!l.pathname||!l.pathname.includes("#"),uc("#","pathname","hash",l)),Ae(!l.search||!l.search.includes("#"),uc("#","search","hash",l)));let u=r===""||l.pathname==="",c=u?"/":l.pathname,f;if(c==null)f=n;else{let _=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),_-=1;l.pathname=w.join("/")}f=_>=0?e[_]:"/"}let p=_0(l,f),g=c&&c!=="/"&&c.endsWith("/"),v=(u||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}const Kn=r=>r.join("/").replace(/\/\/+/g,"/"),y0=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),w0=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,E0=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function C0(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Pg=["post","put","patch","delete"];new Set(Pg);const S0=["get",...Pg];new Set(S0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},xs.apply(this,arguments)}const $l=M.createContext(null),xg=M.createContext(null),wn=M.createContext(null),Gl=M.createContext(null),nr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Ag=M.createContext(null);function I0(r,e){let{relative:n}=e===void 0?{}:e;Ei()||Ae(!1);let{basename:s,navigator:l}=M.useContext(wn),{hash:u,pathname:c,search:f}=Kl(r,{relative:n}),p=c;return s!=="/"&&(p=c==="/"?s:Kn([s,c])),l.createHref({pathname:p,search:f,hash:u})}function Ei(){return M.useContext(Gl)!=null}function Ci(){return Ei()||Ae(!1),M.useContext(Gl).location}function Og(r){M.useContext(wn).static||M.useLayoutEffect(r)}function id(){let{isDataRoute:r}=M.useContext(nr);return r?F0():T0()}function T0(){Ei()||Ae(!1);let r=M.useContext($l),{basename:e,future:n,navigator:s}=M.useContext(wn),{matches:l}=M.useContext(nr),{pathname:u}=Ci(),c=JSON.stringify(nd(l,n.v7_relativeSplatPath)),f=M.useRef(!1);return Og(()=>{f.current=!0}),M.useCallback(function(g,v){if(v===void 0&&(v={}),!f.current)return;if(typeof g=="number"){s.go(g);return}let _=rd(g,JSON.parse(c),u,v.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Kn([e,_.pathname])),(v.replace?s.replace:s.push)(_,v.state,v)},[e,s,c,u,r])}function Kl(r,e){let{relative:n}=e===void 0?{}:e,{future:s}=M.useContext(wn),{matches:l}=M.useContext(nr),{pathname:u}=Ci(),c=JSON.stringify(nd(l,s.v7_relativeSplatPath));return M.useMemo(()=>rd(r,JSON.parse(c),u,n==="path"),[r,c,u,n])}function k0(r,e){return N0(r,e)}function N0(r,e,n,s){Ei()||Ae(!1);let{navigator:l}=M.useContext(wn),{matches:u}=M.useContext(nr),c=u[u.length-1],f=c?c.params:{};c&&c.pathname;let p=c?c.pathnameBase:"/";c&&c.route;let g=Ci(),v;if(e){var _;let x=typeof e=="string"?wi(e):e;p==="/"||(_=x.pathname)!=null&&_.startsWith(p)||Ae(!1),v=x}else v=g;let w=v.pathname||"/",P=w;if(p!=="/"){let x=p.replace(/^\//,"").split("/");P="/"+w.replace(/^\//,"").split("/").slice(x.length).join("/")}let A=t0(r,{pathname:P}),N=O0(A&&A.map(x=>Object.assign({},x,{params:Object.assign({},f,x.params),pathname:Kn([p,l.encodeLocation?l.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?p:Kn([p,l.encodeLocation?l.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),u,n,s);return e&&N?M.createElement(Gl.Provider,{value:{location:xs({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:$n.Pop}},N):N}function R0(){let r=b0(),e=C0(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:l},n):null,null)}const P0=M.createElement(R0,null);class x0 extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(nr.Provider,{value:this.props.routeContext},M.createElement(Ag.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function A0(r){let{routeContext:e,match:n,children:s}=r,l=M.useContext($l);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(nr.Provider,{value:e},s)}function O0(r,e,n,s){var l;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var u;if(!n)return null;if(n.errors)r=n.matches;else if((u=s)!=null&&u.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let c=r,f=(l=n)==null?void 0:l.errors;if(f!=null){let v=c.findIndex(_=>_.route.id&&(f==null?void 0:f[_.route.id])!==void 0);v>=0||Ae(!1),c=c.slice(0,Math.min(c.length,v+1))}let p=!1,g=-1;if(n&&s&&s.v7_partialHydration)for(let v=0;v<c.length;v++){let _=c[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(g=v),_.route.id){let{loaderData:w,errors:P}=n,A=_.route.loader&&w[_.route.id]===void 0&&(!P||P[_.route.id]===void 0);if(_.route.lazy||A){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((v,_,w)=>{let P,A=!1,N=null,x=null;n&&(P=f&&_.route.id?f[_.route.id]:void 0,N=_.route.errorElement||P0,p&&(g<0&&w===0?(U0("route-fallback"),A=!0,x=null):g===w&&(A=!0,x=_.route.hydrateFallbackElement||null)));let q=e.concat(c.slice(0,w+1)),V=()=>{let G;return P?G=N:A?G=x:_.route.Component?G=M.createElement(_.route.Component,null):_.route.element?G=_.route.element:G=v,M.createElement(A0,{match:_,routeContext:{outlet:v,matches:q,isDataRoute:n!=null},children:G})};return n&&(_.route.ErrorBoundary||_.route.errorElement||w===0)?M.createElement(x0,{location:n.location,revalidation:n.revalidation,component:N,error:P,children:V(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):V()},null)}var Dg=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(Dg||{}),Lg=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Lg||{});function D0(r){let e=M.useContext($l);return e||Ae(!1),e}function L0(r){let e=M.useContext(xg);return e||Ae(!1),e}function M0(r){let e=M.useContext(nr);return e||Ae(!1),e}function Mg(r){let e=M0(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function b0(){var r;let e=M.useContext(Ag),n=L0(),s=Mg();return e!==void 0?e:(r=n.errors)==null?void 0:r[s]}function F0(){let{router:r}=D0(Dg.UseNavigateStable),e=Mg(Lg.UseNavigateStable),n=M.useRef(!1);return Og(()=>{n.current=!0}),M.useCallback(function(l,u){u===void 0&&(u={}),n.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,xs({fromRouteId:e},u)))},[r,e])}const hm={};function U0(r,e,n){hm[r]||(hm[r]=!0)}function j0(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function z0(r){let{to:e,replace:n,state:s,relative:l}=r;Ei()||Ae(!1);let{future:u,static:c}=M.useContext(wn),{matches:f}=M.useContext(nr),{pathname:p}=Ci(),g=id(),v=rd(e,nd(f,u.v7_relativeSplatPath),p,l==="path"),_=JSON.stringify(v);return M.useEffect(()=>g(JSON.parse(_),{replace:n,state:s,relative:l}),[g,_,l,n,s]),null}function Es(r){Ae(!1)}function W0(r){let{basename:e="/",children:n=null,location:s,navigationType:l=$n.Pop,navigator:u,static:c=!1,future:f}=r;Ei()&&Ae(!1);let p=e.replace(/^\/*/,"/"),g=M.useMemo(()=>({basename:p,navigator:u,static:c,future:xs({v7_relativeSplatPath:!1},f)}),[p,f,u,c]);typeof s=="string"&&(s=wi(s));let{pathname:v="/",search:_="",hash:w="",state:P=null,key:A="default"}=s,N=M.useMemo(()=>{let x=di(v,p);return x==null?null:{location:{pathname:x,search:_,hash:w,state:P,key:A},navigationType:l}},[p,v,_,w,P,A,l]);return N==null?null:M.createElement(wn.Provider,{value:g},M.createElement(Gl.Provider,{children:n,value:N}))}function B0(r){let{children:e,location:n}=r;return k0(xc(e),n)}new Promise(()=>{});function xc(r,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(r,(s,l)=>{if(!M.isValidElement(s))return;let u=[...e,l];if(s.type===M.Fragment){n.push.apply(n,xc(s.props.children,u));return}s.type!==Es&&Ae(!1),!s.props.index||!s.props.children||Ae(!1);let c={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=xc(s.props.children,u)),n.push(c)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},El.apply(this,arguments)}function bg(r,e){if(r==null)return{};var n={},s=Object.keys(r),l,u;for(u=0;u<s.length;u++)l=s[u],!(e.indexOf(l)>=0)&&(n[l]=r[l]);return n}function V0(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function H0(r,e){return r.button===0&&(!e||e==="_self")&&!V0(r)}const $0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],G0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],K0="6";try{window.__reactRouterVersion=K0}catch{}const q0=M.createContext({isTransitioning:!1}),Q0="startTransition",fm=$w[Q0];function Y0(r){let{basename:e,children:n,future:s,window:l}=r,u=M.useRef();u.current==null&&(u.current=Xw({window:l,v5Compat:!0}));let c=u.current,[f,p]=M.useState({action:c.action,location:c.location}),{v7_startTransition:g}=s||{},v=M.useCallback(_=>{g&&fm?fm(()=>p(_)):p(_)},[p,g]);return M.useLayoutEffect(()=>c.listen(v),[c,v]),M.useEffect(()=>j0(s),[s]),M.createElement(W0,{basename:e,children:n,location:f.location,navigationType:f.action,navigator:c,future:s})}const J0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z0=M.forwardRef(function(e,n){let{onClick:s,relative:l,reloadDocument:u,replace:c,state:f,target:p,to:g,preventScrollReset:v,viewTransition:_}=e,w=bg(e,$0),{basename:P}=M.useContext(wn),A,N=!1;if(typeof g=="string"&&X0.test(g)&&(A=g,J0))try{let G=new URL(window.location.href),Q=g.startsWith("//")?new URL(G.protocol+g):new URL(g),ge=di(Q.pathname,P);Q.origin===G.origin&&ge!=null?g=ge+Q.search+Q.hash:N=!0}catch{}let x=I0(g,{relative:l}),q=tE(g,{replace:c,state:f,target:p,preventScrollReset:v,relative:l,viewTransition:_});function V(G){s&&s(G),G.defaultPrevented||q(G)}return M.createElement("a",El({},w,{href:A||x,onClick:N||u?s:V,ref:n,target:p}))}),cc=M.forwardRef(function(e,n){let{"aria-current":s="page",caseSensitive:l=!1,className:u="",end:c=!1,style:f,to:p,viewTransition:g,children:v}=e,_=bg(e,G0),w=Kl(p,{relative:_.relative}),P=Ci(),A=M.useContext(xg),{navigator:N,basename:x}=M.useContext(wn),q=A!=null&&nE(w)&&g===!0,V=N.encodeLocation?N.encodeLocation(w).pathname:w.pathname,G=P.pathname,Q=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;l||(G=G.toLowerCase(),Q=Q?Q.toLowerCase():null,V=V.toLowerCase()),Q&&x&&(Q=di(Q,x)||Q);const ge=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let ye=G===V||!c&&G.startsWith(V)&&G.charAt(ge)==="/",ue=Q!=null&&(Q===V||!c&&Q.startsWith(V)&&Q.charAt(V.length)==="/"),we={isActive:ye,isPending:ue,isTransitioning:q},ut=ye?s:void 0,nt;typeof u=="function"?nt=u(we):nt=[u,ye?"active":null,ue?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let nn=typeof f=="function"?f(we):f;return M.createElement(Z0,El({},_,{"aria-current":ut,className:nt,ref:n,style:nn,to:p,viewTransition:g}),typeof v=="function"?v(we):v)});var Ac;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Ac||(Ac={}));var pm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(pm||(pm={}));function eE(r){let e=M.useContext($l);return e||Ae(!1),e}function tE(r,e){let{target:n,replace:s,state:l,preventScrollReset:u,relative:c,viewTransition:f}=e===void 0?{}:e,p=id(),g=Ci(),v=Kl(r,{relative:c});return M.useCallback(_=>{if(H0(_,n)){_.preventDefault();let w=s!==void 0?s:wl(g)===wl(v);p(r,{replace:w,state:l,preventScrollReset:u,relative:c,viewTransition:f})}},[g,p,v,s,l,n,r,u,c,f])}function nE(r,e){e===void 0&&(e={});let n=M.useContext(q0);n==null&&Ae(!1);let{basename:s}=eE(Ac.useViewTransitionState),l=Kl(r,{relative:e.relative});if(!n.isTransitioning)return!1;let u=di(n.currentLocation.pathname,s)||n.currentLocation.pathname,c=di(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Pc(l.pathname,c)!=null||Pc(l.pathname,u)!=null}const rE=()=>{};var mm={};/**
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
 */const Fg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(r,e){if(!r)throw Si(e)},Si=function(r){return new Error("Firebase Database ("+Fg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const Ug=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},iE=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],c=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],c=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|c&63)}}return e.join("")},sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],c=l+1<r.length,f=c?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,v=u>>2,_=(u&3)<<4|f>>4;let w=(f&15)<<2|g>>6,P=g&63;p||(P=64,c||(w=64)),s.push(n[v],n[_],n[w],n[P])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ug(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):iE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const _=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||_==null)throw new sE;const w=u<<2|f>>4;if(s.push(w),g!==64){const P=f<<4&240|g>>2;if(s.push(P),_!==64){const A=g<<6&192|_;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class sE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jg=function(r){const e=Ug(r);return sd.encodeByteArray(e,!0)},Cl=function(r){return jg(r).replace(/\./g,"")},Sl=function(r){try{return sd.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oE(r){return zg(void 0,r)}function zg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lE(n)||(r[n]=zg(r[n],e[n]));return r}function lE(r){return r!=="__proto__"}/**
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
 */function aE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uE=()=>aE().__FIREBASE_DEFAULTS__,cE=()=>{if(typeof process>"u"||typeof mm>"u")return;const r=mm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},dE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Sl(r[1]);return e&&JSON.parse(e)},od=()=>{try{return rE()||uE()||cE()||dE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Wg=r=>{var e,n;return(n=(e=od())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},hE=r=>{const e=Wg(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Bg=()=>{var r;return(r=od())===null||r===void 0?void 0:r.config},Vg=r=>{var e;return(e=od())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class Vs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ii(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hg(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function fE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Cl(JSON.stringify(n)),Cl(JSON.stringify(c)),""].join(".")}const Cs={};function pE(){const r={prod:[],emulator:[]};for(const e of Object.keys(Cs))Cs[e]?r.emulator.push(e):r.prod.push(e);return r}function mE(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let gm=!1;function $g(r,e){if(typeof window>"u"||typeof document>"u"||!Ii(window.location.host)||Cs[r]===e||Cs[r]||gm)return;Cs[r]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=pE().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{gm=!0,c()},w}function v(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function _(){const w=mE(s),P=n("text"),A=document.getElementById(P)||document.createElement("span"),N=n("learnmore"),x=document.getElementById(N)||document.createElement("a"),q=n("preprendIcon"),V=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const G=w.element;f(G),v(x,N);const Q=g();p(V,q),G.append(V,A,x,Q),document.body.appendChild(G)}u?(A.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function gE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _E(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vE(){const r=lt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function yE(){return Fg.NODE_ADMIN===!0}function wE(){try{return typeof indexedDB=="object"}catch{return!1}}function EE(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const CE="FirebaseError";class rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=CE,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],c=u?SE(u,s):"Error",f=`${this.serviceName}: ${c} (${l}).`;return new rr(l,f,s)}}function SE(r,e){return r.replace(IE,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const IE=/\{\$([^}]+)}/g;/**
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
 */function As(r){return JSON.parse(r)}function Be(r){return JSON.stringify(r)}/**
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
 */const Kg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=As(Sl(u[0])||""),n=As(Sl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},TE=function(r){const e=Kg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kE=function(r){const e=Kg(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function tn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function hi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Oc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Il(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Cr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],c=e[l];if(_m(u)&&_m(c)){if(!Cr(u,c))return!1}else if(u!==c)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function _m(r){return r!==null&&typeof r=="object"}/**
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
 */function Ti(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class NE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const w=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,v;for(let _=0;_<80;_++){_<40?_<20?(g=f^u&(c^f),v=1518500249):(g=u^c^f,v=1859775393):_<60?(g=u&c|f&(u|c),v=2400959708):(g=u^c^f,v=3395469782);const w=(l<<5|l>>>27)+g+p+v+s[_]&4294967295;p=f,f=c,c=(u<<30|u>>>2)&4294967295,u=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let c=this.inbuf_;for(;l<n;){if(c===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[c]=e.charCodeAt(l),++c,++l,c===this.blockSize){this.compress_(u),c=0;break}}else for(;l<n;)if(u[c]=e[l],++c,++l,c===this.blockSize){this.compress_(u),c=0;break}}this.inbuf_=c,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function RE(r,e){const n=new PE(r,e);return n.subscribe.bind(n)}class PE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=dc),l.error===void 0&&(l.error=dc),l.complete===void 0&&(l.complete=dc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function dc(){}function ql(r,e){return`${r} failed: ${e} argument `}/**
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
 */const AE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;l=65536+(u<<10)+c}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Ql=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function at(r){return r&&r._delegate?r._delegate:r}class Sr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _r="[DEFAULT]";/**
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
 */class OE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LE(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&c.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const c=this.instances.get(l);return c&&e(c,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:DE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DE(r){return r===_r?void 0:r}function LE(r){return r.instantiationMode==="EAGER"}/**
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
 */class ME{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(_e||(_e={}));const bE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},FE=_e.INFO,UE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},jE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=UE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ad{constructor(e){this.name=e,this._logLevel=FE,this._logHandler=jE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const zE=(r,e)=>e.some(n=>r instanceof n);let vm,ym;function WE(){return vm||(vm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BE(){return ym||(ym=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qg=new WeakMap,Dc=new WeakMap,Qg=new WeakMap,hc=new WeakMap,ud=new WeakMap;function VE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",c)},u=()=>{n(qn(r.result)),l()},c=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&qg.set(n,r)}).catch(()=>{}),ud.set(e,r),e}function HE(r){if(Dc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",c),r.removeEventListener("abort",c)},u=()=>{n(),l()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",c),r.addEventListener("abort",c)});Dc.set(r,e)}let Lc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Dc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Qg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function $E(r){Lc=r(Lc)}function GE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(fc(this),e,...n);return Qg.set(s,e.sort?e.sort():[e]),qn(s)}:BE().includes(r)?function(...e){return r.apply(fc(this),e),qn(qg.get(this))}:function(...e){return qn(r.apply(fc(this),e))}}function KE(r){return typeof r=="function"?GE(r):(r instanceof IDBTransaction&&HE(r),zE(r,WE())?new Proxy(r,Lc):r)}function qn(r){if(r instanceof IDBRequest)return VE(r);if(hc.has(r))return hc.get(r);const e=KE(r);return e!==r&&(hc.set(r,e),ud.set(e,r)),e}const fc=r=>ud.get(r);function qE(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const c=indexedDB.open(r,e),f=qn(c);return s&&c.addEventListener("upgradeneeded",p=>{s(qn(c.result),p.oldVersion,p.newVersion,qn(c.transaction),p)}),n&&c.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const QE=["get","getKey","getAll","getAllKeys","count"],YE=["put","add","delete","clear"],pc=new Map;function wm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=YE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||QE.includes(n)))return;const u=async function(c,...f){const p=this.transaction(c,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return pc.set(e,u),u}$E(r=>({...r,get:(e,n,s)=>wm(e,n)||r.get(e,n,s),has:(e,n)=>!!wm(e,n)||r.has(e,n)}));/**
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
 */class JE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function XE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Em="0.13.2";/**
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
 */const _n=new ad("@firebase/app"),ZE="@firebase/app-compat",eC="@firebase/analytics-compat",tC="@firebase/analytics",nC="@firebase/app-check-compat",rC="@firebase/app-check",iC="@firebase/auth",sC="@firebase/auth-compat",oC="@firebase/database",lC="@firebase/data-connect",aC="@firebase/database-compat",uC="@firebase/functions",cC="@firebase/functions-compat",dC="@firebase/installations",hC="@firebase/installations-compat",fC="@firebase/messaging",pC="@firebase/messaging-compat",mC="@firebase/performance",gC="@firebase/performance-compat",_C="@firebase/remote-config",vC="@firebase/remote-config-compat",yC="@firebase/storage",wC="@firebase/storage-compat",EC="@firebase/firestore",CC="@firebase/ai",SC="@firebase/firestore-compat",IC="firebase",TC="11.10.0";/**
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
 */const bc="[DEFAULT]",kC={[Mc]:"fire-core",[ZE]:"fire-core-compat",[tC]:"fire-analytics",[eC]:"fire-analytics-compat",[rC]:"fire-app-check",[nC]:"fire-app-check-compat",[iC]:"fire-auth",[sC]:"fire-auth-compat",[oC]:"fire-rtdb",[lC]:"fire-data-connect",[aC]:"fire-rtdb-compat",[uC]:"fire-fn",[cC]:"fire-fn-compat",[dC]:"fire-iid",[hC]:"fire-iid-compat",[fC]:"fire-fcm",[pC]:"fire-fcm-compat",[mC]:"fire-perf",[gC]:"fire-perf-compat",[_C]:"fire-rc",[vC]:"fire-rc-compat",[yC]:"fire-gcs",[wC]:"fire-gcs-compat",[EC]:"fire-fst",[SC]:"fire-fst-compat",[CC]:"fire-vertex","fire-js":"fire-js",[IC]:"fire-js-all"};/**
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
 */const Tl=new Map,NC=new Map,Fc=new Map;function Cm(r,e){try{r.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function fi(r){const e=r.name;if(Fc.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,r);for(const n of Tl.values())Cm(n,r);for(const n of NC.values())Cm(n,r);return!0}function cd(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function zt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const RC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Hs("app","Firebase",RC);/**
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
 */class PC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const ki=TC;function Yg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bc,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw Qn.create("bad-app-name",{appName:String(l)});if(n||(n=Bg()),!n)throw Qn.create("no-options");const u=Tl.get(l);if(u){if(Cr(n,u.options)&&Cr(s,u.config))return u;throw Qn.create("duplicate-app",{appName:l})}const c=new ME(l);for(const p of Fc.values())c.addComponent(p);const f=new PC(n,s,c);return Tl.set(l,f),f}function Jg(r=bc){const e=Tl.get(r);if(!e&&r===bc&&Bg())return Yg();if(!e)throw Qn.create("no-app",{appName:r});return e}function Yn(r,e,n){var s;let l=(s=kC[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const u=l.match(/\s|\//),c=e.match(/\s|\//);if(u||c){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(f.join(" "));return}fi(new Sr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const xC="firebase-heartbeat-database",AC=1,Os="firebase-heartbeat-store";let mc=null;function Xg(){return mc||(mc=qE(xC,AC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Os)}catch(n){console.warn(n)}}}}).catch(r=>{throw Qn.create("idb-open",{originalErrorMessage:r.message})})),mc}async function OC(r){try{const n=(await Xg()).transaction(Os),s=await n.objectStore(Os).get(Zg(r));return await n.done,s}catch(e){if(e instanceof rr)_n.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Sm(r,e){try{const s=(await Xg()).transaction(Os,"readwrite");await s.objectStore(Os).put(e,Zg(r)),await s.done}catch(n){if(n instanceof rr)_n.warn(n.message);else{const s=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(s.message)}}}function Zg(r){return`${r.name}!${r.options.appId}`}/**
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
 */const DC=1024,LC=30;class MC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Im();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(c=>c.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>LC){const c=UC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_n.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Im(),{heartbeatsToSend:s,unsentEntries:l}=bC(this._heartbeatsCache.heartbeats),u=Cl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return _n.warn(n),""}}}function Im(){return new Date().toISOString().substring(0,10)}function bC(r,e=DC){const n=[];let s=r.slice();for(const l of r){const u=n.find(c=>c.agent===l.agent);if(u){if(u.dates.push(l.date),Tm(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Tm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class FC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wE()?EE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Tm(r){return Cl(JSON.stringify({version:2,heartbeats:r})).length}function UC(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function jC(r){fi(new Sr("platform-logger",e=>new JE(e),"PRIVATE")),fi(new Sr("heartbeat",e=>new MC(e),"PRIVATE")),Yn(Mc,Em,r),Yn(Mc,Em,"esm2017"),Yn("fire-js","")}jC("");function dd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zC=e_,t_=new Hs("auth","Firebase",e_());/**
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
 */const kl=new ad("@firebase/auth");function WC(r,...e){kl.logLevel<=_e.WARN&&kl.warn(`Auth (${ki}): ${r}`,...e)}function ml(r,...e){kl.logLevel<=_e.ERROR&&kl.error(`Auth (${ki}): ${r}`,...e)}/**
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
 */function en(r,...e){throw fd(r,...e)}function Ht(r,...e){return fd(r,...e)}function hd(r,e,n){const s=Object.assign(Object.assign({},zC()),{[e]:n});return new Hs("auth","Firebase",s).create(e,{appName:r.name})}function Er(r){return hd(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function BC(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&en(r,"argument-error"),hd(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return t_.create(r,...e)}function te(r,e,...n){if(!r)throw fd(e,...n)}function fn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ml(e),new Error(e)}function vn(r,e){r||fn(e)}/**
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
 */function Uc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function VC(){return km()==="http:"||km()==="https:"}function km(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function HC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VC()||_E()||"connection"in navigator)?navigator.onLine:!0}function $C(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class $s{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=ld()||Gg()}get(){return HC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pd(r,e){vn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class n_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qC=new $s(3e4,6e4);function md(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ni(r,e,n,s,l={}){return r_(r,l,async()=>{let u={},c={};s&&(e==="GET"?c=s:u={body:JSON.stringify(s)});const f=Ti(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:p},u);return gE()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&Ii(r.emulatorConfig.host)&&(g.credentials="include"),n_.fetch()(await i_(r,r.config.apiHost,n,f),g)})}async function r_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},GC),e);try{const l=new YC(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const c=await u.json();if("needConfirmation"in c)throw hl(r,"account-exists-with-different-credential",c);if(u.ok&&!("errorMessage"in c))return c;{const f=u.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw hl(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw hl(r,"user-disabled",c);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw hd(r,v,g);en(r,v)}}catch(l){if(l instanceof rr)throw l;en(r,"network-request-failed",{message:String(l)})}}async function QC(r,e,n,s,l={}){const u=await Ni(r,e,n,s,l);return"mfaPendingCredential"in u&&en(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function i_(r,e,n,s){const l=`${e}${n}?${s}`,u=r,c=u.config.emulator?pd(r.config,l):`${r.config.apiScheme}://${l}`;return KC.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(c).toString():c}class YC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),qC.get())})}}function hl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Ht(r,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function JC(r,e){return Ni(r,"POST","/v1/accounts:delete",e)}async function Nl(r,e){return Ni(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ss(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XC(r,e=!1){const n=at(r),s=await n.getIdToken(e),l=gd(s);te(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,c=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ss(gc(l.auth_time)),issuedAtTime:Ss(gc(l.iat)),expirationTime:Ss(gc(l.exp)),signInProvider:c||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function gc(r){return Number(r)*1e3}function gd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return ml("JWT malformed, contained fewer than 3 sections"),null;try{const l=Sl(n);return l?JSON.parse(l):(ml("Failed to decode base64 JWT payload"),null)}catch(l){return ml("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Nm(r){const e=gd(r);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ds(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rr&&ZC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ZC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class eS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Rl(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Ds(r,Nl(n,{idToken:s}));te(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const c=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?s_(u.providerUserInfo):[],f=nS(r.providerData,c),p=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),v=p?g:!1,_={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new jc(u.createdAt,u.lastLoginAt),isAnonymous:v};Object.assign(r,_)}async function tS(r){const e=at(r);await Rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nS(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function s_(r){return r.map(e=>{var{providerId:n}=e,s=dd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function rS(r,e){const n=await r_(r,{},async()=>{const s=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,c=await i_(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return r.emulatorConfig&&Ii(r.emulatorConfig.host)&&(p.credentials="include"),n_.fetch()(c,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iS(r,e){return Ni(r,"POST","/v2/accounts:revokeToken",md(r,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Nm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await rS(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,c=new oi;return s&&(te(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),l&&(te(typeof l=="string","internal-error",{appName:e}),c.accessToken=l),u&&(te(typeof u=="number","internal-error",{appName:e}),c.expirationTime=u),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Wn(r,e){te(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new jc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ds(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XC(this,e)}reload(){return tS(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Rl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await Ds(this,JC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,c,f,p,g,v;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(l=n.email)!==null&&l!==void 0?l:void 0,P=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,A=(c=n.photoURL)!==null&&c!==void 0?c:void 0,N=(f=n.tenantId)!==null&&f!==void 0?f:void 0,x=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,q=(g=n.createdAt)!==null&&g!==void 0?g:void 0,V=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:G,emailVerified:Q,isAnonymous:ge,providerData:ye,stsTokenManager:ue}=n;te(G&&ue,e,"internal-error");const we=oi.fromJSON(this.name,ue);te(typeof G=="string",e,"internal-error"),Wn(_,e.name),Wn(w,e.name),te(typeof Q=="boolean",e,"internal-error"),te(typeof ge=="boolean",e,"internal-error"),Wn(P,e.name),Wn(A,e.name),Wn(N,e.name),Wn(x,e.name),Wn(q,e.name),Wn(V,e.name);const ut=new Bt({uid:G,auth:e,email:w,emailVerified:Q,displayName:_,isAnonymous:ge,photoURL:A,phoneNumber:P,tenantId:N,stsTokenManager:we,createdAt:q,lastLoginAt:V});return ye&&Array.isArray(ye)&&(ut.providerData=ye.map(nt=>Object.assign({},nt))),x&&(ut._redirectEventId=x),ut}static async _fromIdTokenResponse(e,n,s=!1){const l=new oi;l.updateFromServerResponse(n);const u=new Bt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Rl(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];te(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?s_(l.providerUserInfo):[],c=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new oi;f.updateFromIdToken(s);const p=new Bt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new jc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
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
 */const Rm=new Map;function pn(r){vn(r instanceof Function,"Expected a class definition");let e=Rm.get(r);return e?(vn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Rm.set(r,e),e)}/**
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
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o_.type="NONE";const Pm=o_;/**
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
 */function gl(r,e,n){return`firebase:${r}:${e}:${n}`}class li{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=gl(this.userKey,l.apiKey,u),this.fullPersistenceKey=gl("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Nl(this.auth,{idToken:e}).catch(()=>{});return n?Bt._fromGetAccountInfoResponse(this.auth,n,e):null}return Bt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new li(pn(Pm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||pn(Pm);const c=gl(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const v=await g._get(c);if(v){let _;if(typeof v=="string"){const w=await Nl(e,{idToken:v}).catch(()=>{});if(!w)break;_=await Bt._fromGetAccountInfoResponse(e,w,v)}else _=Bt._fromJSON(e,v);g!==u&&(f=_),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new li(u,e,s):(u=p[0],f&&await u._set(c,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(c)}catch{}})),new li(u,e,s))}}/**
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
 */function xm(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h_(e))return"Blackberry";if(f_(e))return"Webos";if(a_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function l_(r=lt()){return/firefox\//i.test(r)}function a_(r=lt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(r=lt()){return/crios\//i.test(r)}function c_(r=lt()){return/iemobile/i.test(r)}function d_(r=lt()){return/android/i.test(r)}function h_(r=lt()){return/blackberry/i.test(r)}function f_(r=lt()){return/webos/i.test(r)}function _d(r=lt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function sS(r=lt()){var e;return _d(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oS(){return vE()&&document.documentMode===10}function p_(r=lt()){return _d(r)||d_(r)||f_(r)||h_(r)||/windows phone/i.test(r)||c_(r)}/**
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
 */function m_(r,e=[]){let n;switch(r){case"Browser":n=xm(lt());break;case"Worker":n=`${xm(lt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ki}/${s}`}/**
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
 */class lS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((c,f)=>{try{const p=e(u);c(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function aS(r,e={}){return Ni(r,"GET","/v2/passwordPolicy",md(r,e))}/**
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
 */const uS=6;class cS{constructor(e){var n,s,l,u;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=c.minPasswordLength)!==null&&n!==void 0?n:uS,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class dS{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Am(this),this.idTokenSubscription=new Am(this),this.beforeStateQueue=new lS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nl(this,{idToken:e}),s=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(c){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$C()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(Er(this));const n=e?at(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aS(this),n=new cS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await iS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(f,this,"internal-error"),f.then(()=>{c||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{c=!0,p()}}else{const p=e.addObserver(n);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yl(r){return at(r)}class Am{constructor(e){this.auth=e,this.observer=null,this.addObserver=RE(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hS(r){vd=r}function fS(r){return vd.loadJS(r)}function pS(){return vd.gapiScript}function mS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function gS(r,e){const n=cd(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Cr(u,e??{}))return l;en(l,"already-initialized")}return n.initialize({options:e})}function _S(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function vS(r,e,n){const s=Yl(r);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=g_(e),{host:c,port:f}=yS(e),p=f===null?"":`:${f}`,g={url:`${u}//${c}${p}/`},v=Object.freeze({host:c,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(Cr(g,s.config.emulator)&&Cr(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Ii(c)?(Hg(`${u}//${c}${p}`),$g("Auth",!0)):wS()}function g_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function yS(r){const e=g_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Om(s.substr(u.length+1))}}else{const[u,c]=s.split(":");return{host:u,port:Om(c)}}}function Om(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function wS(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class __{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function ai(r,e){return QC(r,"POST","/v1/accounts:signInWithIdp",md(r,e))}/**
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
 */const ES="http://localhost";class Ir extends __{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=dd(n,["providerId","signInMethod"]);if(!s||!l)return null;const c=new Ir(s,l);return c.idToken=u.idToken||void 0,c.accessToken=u.accessToken||void 0,c.secret=u.secret,c.nonce=u.nonce,c.pendingToken=u.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return ai(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ai(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ai(e,n)}buildRequest(){const e={requestUri:ES,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
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
 */class yd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gs extends yd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends Gs{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class hn extends Gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class Vn extends Gs{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */class Hn extends Gs{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Hn.credential(n,s)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await Bt._fromIdTokenResponse(e,s,l),c=Dm(s);return new pi({user:u,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Dm(s);return new pi({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Dm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Pl extends rr{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Pl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Pl(e,n,s,l)}}function v_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Pl._fromErrorAndOperation(r,u,e,s):u})}async function CS(r,e,n=!1){const s=await Ds(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return pi._forOperation(r,"link",s)}/**
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
 */async function SS(r,e,n=!1){const{auth:s}=r;if(zt(s.app))return Promise.reject(Er(s));const l="reauthenticate";try{const u=await Ds(r,v_(s,l,e,r),n);te(u.idToken,s,"internal-error");const c=gd(u.idToken);te(c,s,"internal-error");const{sub:f}=c;return te(r.uid===f,s,"user-mismatch"),pi._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&en(s,"user-mismatch"),u}}/**
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
 */async function IS(r,e,n=!1){if(zt(r.app))return Promise.reject(Er(r));const s="signIn",l=await v_(r,s,e),u=await pi._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}function TS(r,e,n,s){return at(r).onIdTokenChanged(e,n,s)}function kS(r,e,n){return at(r).beforeAuthStateChanged(e,n)}function NS(r,e,n,s){return at(r).onAuthStateChanged(e,n,s)}function RS(r){return at(r).signOut()}const xl="__sak";/**
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
 */class y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const PS=1e3,xS=10;class w_ extends y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},u=this.storage.getItem(s);oS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,xS):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},PS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w_.type="LOCAL";const AS=w_;/**
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
 */class E_ extends y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E_.type="SESSION";const C_=E_;/**
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
 */function OS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Jl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,c=this.handlersMap[l];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(c).map(async g=>g(n.origin,u)),p=await OS(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
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
 */function wd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class DS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,c;return new Promise((f,p)=>{const g=wd("",20);l.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:l,onMessage(_){const w=_;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(w.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(c),l.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Zt(){return window}function LS(r){Zt().location.href=r}/**
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
 */function S_(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function MS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bS(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function FS(){return S_()?self:null}/**
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
 */const I_="firebaseLocalStorageDb",US=1,Al="firebaseLocalStorage",T_="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xl(r,e){return r.transaction([Al],e?"readwrite":"readonly").objectStore(Al)}function jS(){const r=indexedDB.deleteDatabase(I_);return new Ks(r).toPromise()}function zc(){const r=indexedDB.open(I_,US);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Al,{keyPath:T_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Al)?e(s):(s.close(),await jS(),e(await zc()))})})}async function Lm(r,e,n){const s=Xl(r,!0).put({[T_]:e,value:n});return new Ks(s).toPromise()}async function zS(r,e){const n=Xl(r,!1).get(e),s=await new Ks(n).toPromise();return s===void 0?null:s.value}function Mm(r,e){const n=Xl(r,!0).delete(e);return new Ks(n).toPromise()}const WS=800,BS=3;class k_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>BS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance(FS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MS(),!this.activeServiceWorker)return;this.sender=new DS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zc();return await Lm(e,xl,"1"),await Mm(e,xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>zS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Xl(l,!1).getAll();return new Ks(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k_.type="LOCAL";const VS=k_;new $s(3e4,6e4);/**
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
 */function N_(r,e){return e?pn(e):(te(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Ed extends __{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HS(r){return IS(r.auth,new Ed(r),r.bypassAuthState)}function $S(r){const{auth:e,user:n}=r;return te(n,e,"internal-error"),SS(n,new Ed(r),r.bypassAuthState)}async function GS(r){const{auth:e,user:n}=r;return te(n,e,"internal-error"),CS(n,new Ed(r),r.bypassAuthState)}/**
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
 */class R_{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HS;case"linkViaPopup":case"linkViaRedirect":return GS;case"reauthViaPopup":case"reauthViaRedirect":return $S;default:en(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KS=new $s(2e3,1e4);async function qS(r,e,n){if(zt(r.app))return Promise.reject(Ht(r,"operation-not-supported-in-this-environment"));const s=Yl(r);BC(r,e,yd);const l=N_(s,n);return new yr(s,"signInViaPopup",e,l).executeNotNull()}class yr extends R_{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KS.get())};e()}}yr.currentPopupAction=null;/**
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
 */const QS="pendingRedirect",_l=new Map;class YS extends R_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const s=await JS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JS(r,e){const n=eI(e),s=ZS(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function XS(r,e){_l.set(r._key(),e)}function ZS(r){return pn(r._redirectPersistence)}function eI(r){return gl(QS,r.config.apiKey,r.name)}async function tI(r,e,n=!1){if(zt(r.app))return Promise.reject(Er(r));const s=Yl(r),l=N_(s,e),c=await new YS(s,l,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const nI=600*1e3;class rI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!P_(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nI&&this.cachedEventUids.clear(),this.cachedEventUids.has(bm(e))}saveEventToCache(e){this.cachedEventUids.add(bm(e)),this.lastProcessedEventTime=Date.now()}}function bm(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function P_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P_(r);default:return!1}}/**
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
 */async function sI(r,e={}){return Ni(r,"GET","/v1/projects",e)}/**
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
 */const oI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lI=/^https?/;async function aI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await sI(r);for(const n of e)try{if(uI(n))return}catch{}en(r,"unauthorized-domain")}function uI(r){const e=Uc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!lI.test(n))return!1;if(oI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const cI=new $s(3e4,6e4);function Fm(){const r=Zt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function dI(r){return new Promise((e,n)=>{var s,l,u;function c(){Fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fm(),n(Ht(r,"network-request-failed"))},timeout:cI.get()})}if(!((l=(s=Zt().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=Zt().gapi)===null||u===void 0)&&u.load)c();else{const f=mS("iframefcb");return Zt()[f]=()=>{gapi.load?c():n(Ht(r,"network-request-failed"))},fS(`${pS()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw vl=null,e})}let vl=null;function hI(r){return vl=vl||dI(r),vl}/**
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
 */const fI=new $s(5e3,15e3),pI="__/auth/iframe",mI="emulator/auth/iframe",gI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vI(r){const e=r.config;te(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?pd(e,mI):`https://${r.config.authDomain}/${pI}`,s={apiKey:e.apiKey,appName:r.name,v:ki},l=_I.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ti(s).slice(1)}`}async function yI(r){const e=await hI(r),n=Zt().gapi;return te(n,r,"internal-error"),e.open({where:document.body,url:vI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gI,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const c=Ht(r,"network-request-failed"),f=Zt().setTimeout(()=>{u(c)},fI.get());function p(){Zt().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(c)})}))}/**
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
 */const wI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EI=500,CI=600,SI="_blank",II="http://localhost";class Um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TI(r,e,n,s=EI,l=CI){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},wI),{width:s.toString(),height:l.toString(),top:u,left:c}),g=lt().toLowerCase();n&&(f=u_(g)?SI:n),l_(g)&&(e=e||II,p.scrollbars="yes");const v=Object.entries(p).reduce((w,[P,A])=>`${w}${P}=${A},`,"");if(sS(g)&&f!=="_self")return kI(e||"",f),new Um(null);const _=window.open(e||"",f,v);te(_,r,"popup-blocked");try{_.focus()}catch{}return new Um(_)}function kI(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const NI="__/auth/handler",RI="emulator/auth/handler",PI=encodeURIComponent("fac");async function jm(r,e,n,s,l,u){te(r.config.authDomain,r,"auth-domain-config-required"),te(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:ki,eventId:l};if(e instanceof yd){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Oc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,_]of Object.entries({}))c[v]=_}if(e instanceof Gs){const v=e.getScopes().filter(_=>_!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${PI}=${encodeURIComponent(p)}`:"";return`${xI(r)}?${Ti(f).slice(1)}${g}`}function xI({config:r}){return r.emulator?pd(r,RI):`https://${r.authDomain}/${NI}`}/**
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
 */const _c="webStorageSupport";class AI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=C_,this._completeRedirectFn=tI,this._overrideRedirectResult=XS}async _openPopup(e,n,s,l){var u;vn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await jm(e,n,s,Uc(),l);return TI(e,c,wd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await jm(e,n,s,Uc(),l);return LS(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(vn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yI(e),s=new rI(e);return n.register("authEvent",l=>(te(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},l=>{var u;const c=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[_c];c!==void 0&&n(!!c),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||a_()||_d()}}const OI=AI;var zm="@firebase/auth",Wm="1.10.8";/**
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
 */class DI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LI(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MI(r){fi(new Sr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;te(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(r)},g=new dS(s,l,u,p);return _S(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fi(new Sr("auth-internal",e=>{const n=Yl(e.getProvider("auth").getImmediate());return(s=>new DI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(zm,Wm,LI(r)),Yn(zm,Wm,"esm2017")}/**
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
 */const bI=300,FI=Vg("authIdTokenMaxAge")||bI;let Bm=null;const UI=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>FI)return;const l=n==null?void 0:n.token;Bm!==l&&(Bm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function jI(r=Jg()){const e=cd(r,"auth");if(e.isInitialized())return e.getImmediate();const n=gS(r,{popupRedirectResolver:OI,persistence:[VS,AS,C_]}),s=Vg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const c=UI(u.toString());kS(n,c,()=>c(n.currentUser)),TS(n,f=>c(f))}}const l=Wg("auth");return l&&vS(n,`http://${l}`),n}function zI(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}hS({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=Ht("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",zI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MI("Browser");var WI="firebase",BI="11.10.0";/**
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
 */Yn(WI,BI,"app");var Vm={};const Hm="@firebase/database",$m="1.0.20";/**
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
 */let x_="";function VI(r){x_=r}/**
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
 */class HI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:As(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $I{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const A_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HI(e)}}catch{}return new $I},wr=A_("localStorage"),GI=A_("sessionStorage");/**
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
 */const ui=new ad("@firebase/database"),KI=(function(){let r=1;return function(){return r++}})(),O_=function(r){const e=AE(r),n=new NE;n.update(e);const s=n.digest();return sd.encodeByteArray(s)},qs=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=qs.apply(null,s):typeof s=="object"?e+=Be(s):e+=s,e+=" "}return e};let Is=null,Gm=!0;const qI=function(r,e){U(!0,"Can't turn on custom loggers persistently."),ui.logLevel=_e.VERBOSE,Is=ui.log.bind(ui)},Ye=function(...r){if(Gm===!0&&(Gm=!1,Is===null&&GI.get("logging_enabled")===!0&&qI()),Is){const e=qs.apply(null,r);Is(e)}},Qs=function(r){return function(...e){Ye(r,...e)}},Wc=function(...r){const e="FIREBASE INTERNAL ERROR: "+qs(...r);ui.error(e)},yn=function(...r){const e=`FIREBASE FATAL ERROR: ${qs(...r)}`;throw ui.error(e),new Error(e)},ot=function(...r){const e="FIREBASE WARNING: "+qs(...r);ui.warn(e)},QI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},YI=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mi="[MIN_NAME]",Tr="[MAX_NAME]",Rr=function(r,e){if(r===e)return 0;if(r===mi||e===Tr)return-1;if(e===mi||r===Tr)return 1;{const n=Km(r),s=Km(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},JI=function(r,e){return r===e?0:r<e?-1:1},_s=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Be(e))},Sd=function(r){if(typeof r!="object"||r===null)return Be(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Be(e[s]),n+=":",n+=Sd(r[e[s]]);return n+="}",n},D_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function Je(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const L_=function(r){U(!Cd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,c,f,p;r===0?(u=0,c=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,c=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,c=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const v=g.join("");let _="";for(p=0;p<64;p+=8){let w=parseInt(v.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),_=_+w}return _.toLowerCase()},XI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function e1(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const t1=new RegExp("^-?(0*)\\d{1,10}$"),n1=-2147483648,r1=2147483647,Km=function(r){if(t1.test(r)){const e=Number(r);if(e>=n1&&e<=r1)return e}return null},Ri=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},i1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class s1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class o1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class yl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yl.OWNER="owner";/**
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
 */const Id="5",M_="v",b_="s",F_="r",U_="f",j_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,z_="ls",W_="p",Bc="ac",B_="websocket",V_="long_polling";/**
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
 */class H_{constructor(e,n,s,l,u=!1,c="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function l1(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function $_(r,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===B_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===V_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);l1(r)&&(n.ns=r.namespace);const l=[];return Je(n,(u,c)=>{l.push(u+"="+c)}),s+l.join("&")}/**
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
 */class a1{constructor(){this.counters_={}}incrementCounter(e,n=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oE(this.counters_)}}/**
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
 */const vc={},yc={};function Td(r){const e=r.toString();return vc[e]||(vc[e]=new a1),vc[e]}function u1(r,e){const n=r.toString();return yc[n]||(yc[n]=e()),yc[n]}/**
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
 */class c1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ri(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qm="start",d1="close",h1="pLPCommand",f1="pRTLPCB",G_="id",K_="pw",q_="ser",p1="cb",m1="seg",g1="ts",_1="d",v1="dframe",Q_=1870,Y_=30,y1=Q_-Y_,w1=25e3,E1=3e4;class si{constructor(e,n,s,l,u,c,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Qs(e),this.stats_=Td(n),this.urlFn=p=>(this.appCheckToken&&(p[Bc]=this.appCheckToken),$_(n,V_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new c1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(E1)),YI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kd((...u)=>{const[c,f,p,g,v]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===qm)this.id=f,this.password=p;else if(c===d1)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...u)=>{const[c,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[qm]="t",s[q_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[p1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[M_]=Id,this.transportSessionId&&(s[b_]=this.transportSessionId),this.lastSessionId&&(s[z_]=this.lastSessionId),this.applicationId&&(s[W_]=this.applicationId),this.appCheckToken&&(s[Bc]=this.appCheckToken),typeof location<"u"&&location.hostname&&j_.test(location.hostname)&&(s[F_]=U_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){si.forceAllow_=!0}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){return si.forceAllow_?!0:!si.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XI()&&!ZI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jg(n),l=D_(s,y1);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[v1]="t",s[G_]=e,s[K_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KI(),window[h1+this.uniqueCallbackIdentifier]=e,window[f1+this.uniqueCallbackIdentifier]=n,this.myIFrame=kd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){Ye("frame writing exception"),f.stack&&Ye(f.stack),Ye(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[G_]=this.myID,e[K_]=this.myPW,e[q_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Y_+s.length<=Q_;){const c=this.pendingSegs.shift();s=s+"&"+m1+l+"="+c.seg+"&"+g1+l+"="+c.ts+"&"+_1+l+"="+c.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(w1)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const C1=16384,S1=45e3;let Ol=null;typeof MozWebSocket<"u"?Ol=MozWebSocket:typeof WebSocket<"u"&&(Ol=WebSocket);class Wt{constructor(e,n,s,l,u,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Qs(this.connId),this.stats_=Td(n),this.connURL=Wt.connectionURL_(n,c,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const c={};return c[M_]=Id,typeof location<"u"&&location.hostname&&j_.test(location.hostname)&&(c[F_]=U_),n&&(c[b_]=n),s&&(c[z_]=s),l&&(c[Bc]=l),u&&(c[W_]=u),$_(e,B_,c)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let s;yE(),this.mySock=new Ol(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ol!==null&&!Wt.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=As(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=D_(n,C1);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(S1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Wt.responsesRequiredToBeHealthy=2;Wt.healthyTimeout=3e4;/**
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
 */class Ls{static get ALL_TRANSPORTS(){return[si,Wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Wt&&Wt.isAvailable();let s=n&&!Wt.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Wt];else{const l=this.transports_=[];for(const u of Ls.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Ls.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ls.globalTransportInitialized_=!1;/**
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
 */const I1=6e4,T1=5e3,k1=10*1024,N1=100*1024,wc="t",Qm="d",R1="s",Ym="r",P1="e",Jm="o",Xm="a",Zm="n",eg="p",x1="h";class A1{constructor(e,n,s,l,u,c,f,p,g,v){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Qs("c:"+this.id+":"),this.transportManager_=new Ls(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>N1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>k1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(wc in e){const n=e[wc];n===Xm?this.upgradeIfSecondaryHealthy_():n===Ym?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_s("t",e),s=_s("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:eg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_s("t",e),s=_s("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_s(wc,e);if(Qm in e){const s=e[Qm];if(n===x1){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Zm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===R1?this.onConnectionShutdown_(s):n===Ym?this.onReset_(s):n===P1?Wc("Server Error: "+s):n===Jm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Id!==s&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(I1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(T1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:eg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class J_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class X_{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Dl extends X_{static getInstance(){return new Dl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ld()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const tg=32,ng=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new ve("")}function ie(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function Zn(r){return r.pieces_.length-r.pieceNum_}function Ie(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new ve(r.pieces_,e)}function Nd(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function O1(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Ms(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Z_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new ve(e,0)}function Le(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof ve)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new ve(n,0)}function le(r){return r.pieceNum_>=r.pieces_.length}function st(r,e){const n=ie(r),s=ie(e);if(n===null)return e;if(n===s)return st(Ie(r),Ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function D1(r,e){const n=Ms(r,0),s=Ms(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Rr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function Rd(r,e){if(Zn(r)!==Zn(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function xt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(Zn(r)>Zn(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class L1{constructor(e,n){this.errorPrefix_=n,this.parts_=Ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ql(this.parts_[s]);ev(this)}}function M1(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Ql(e),ev(r)}function b1(r){const e=r.parts_.pop();r.byteLength_-=Ql(e),r.parts_.length>0&&(r.byteLength_-=1)}function ev(r){if(r.byteLength_>ng)throw new Error(r.errorPrefix_+"has a key path longer than "+ng+" bytes ("+r.byteLength_+").");if(r.parts_.length>tg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tg+") or object contains a cycle "+vr(r))}function vr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class Pd extends X_{static getInstance(){return new Pd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const vs=1e3,F1=300*1e3,rg=30*1e3,U1=1.3,j1=3e4,z1="server_kill",ig=3;class gn extends J_{constructor(e,n,s,l,u,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gn.nextPersistentConnectionId_++,this.log_=Qs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vs,this.maxReconnectDelay_=F1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Dl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Be(u)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Vs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+u),this.listens.has(c)||this.listens.set(c,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(c).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(c).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},c="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(c,u,f=>{const p=f.d,g=f.s;gn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tn(e,"w")){const s=hi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=TE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,c=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},c="n";l&&(u.q=s,u.t=l),this.sendRequest(c,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,c=>{l&&setTimeout(()=>{l(c.s,c.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const c={p:n,d:s};u!==void 0&&(c.h=u),this.outstandingPuts_.push({action:e,request:c,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Be(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wc("Unrecognized action received from server: "+Be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>j1&&(this.reconnectDelay_=vs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*U1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+gn.nextConnectionId_++,u=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,s())},g=function(_){U(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,w]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=w&&w.token,f=new A1(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,P=>{ot(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(z1)},u))}catch(_){this.log_("Failed to get token: "+_),c||(this.repoInfo_.nodeAdmin&&ot(_),p())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Oc(this.interruptReasons_)&&(this.reconnectDelay_=vs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Sd(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new ve(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ig&&(this.reconnectDelay_=rg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ig&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+x_.replace(/\./g,"-")]=1,ld()?e["framework.cordova"]=1:Gg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Dl.getInstance().currentlyOnline();return Oc(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
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
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
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
 */class Zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new se(mi,e),l=new se(mi,n);return this.compare(s,l)!==0}minPost(){return se.MIN}}/**
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
 */let fl;class tv extends Zl{static get __EMPTY_NODE(){return fl}static set __EMPTY_NODE(e){fl=e}compare(e,n){return Rr(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(Tr,fl)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,fl)}toString(){return".key"}}const ci=new tv;/**
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
 */class pl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=n?s(e.key,n):1,l&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Ke.RED,this.left=l??_t.EMPTY_NODE,this.right=u??_t.EMPTY_NODE}copy(e,n,s,l,u){return new Ke(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class W1{copy(e,n,s,l,u){return this}insert(e,n,s){return new Ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pl(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new W1;/**
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
 */function B1(r,e){return Rr(r.name,e.name)}function xd(r,e){return Rr(r,e)}/**
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
 */let Vc;function V1(r){Vc=r}const nv=function(r){return typeof r=="number"?"number:"+L_(r):"string:"+r},rv=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else U(r===Vc||r.isEmpty(),"priority of unexpected type.");U(r===Vc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sg;class Ge{static set __childrenNodeConstructor(e){sg=e}static get __childrenNodeConstructor(){return sg}constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ie(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=L_(this.value_):e+=this.value_,this.lazyHash_=O_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ge.VALUE_TYPE_ORDER.indexOf(n),u=Ge.VALUE_TYPE_ORDER.indexOf(s);return U(l>=0,"Unknown leaf type: "+n),U(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let iv,sv;function H1(r){iv=r}function $1(r){sv=r}class G1 extends Zl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Rr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(Tr,new Ge("[PRIORITY-POST]",sv))}makePost(e,n){const s=iv(e);return new se(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const Me=new G1;/**
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
 */const K1=Math.log(2);class q1{constructor(e){const n=u=>parseInt(Math.log(u)/K1,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ll=function(r,e,n,s){r.sort(e);const l=function(p,g){const v=g-p;let _,w;if(v===0)return null;if(v===1)return _=r[p],w=n?n(_):_,new Ke(w,_.node,Ke.BLACK,null,null);{const P=parseInt(v/2,10)+p,A=l(p,P),N=l(P+1,g);return _=r[P],w=n?n(_):_,new Ke(w,_.node,Ke.BLACK,A,N)}},u=function(p){let g=null,v=null,_=r.length;const w=function(A,N){const x=_-A,q=_;_-=A;const V=l(x+1,q),G=r[x],Q=n?n(G):G;P(new Ke(Q,G.node,N,null,V))},P=function(A){g?(g.left=A,g=A):(v=A,g=A)};for(let A=0;A<p.count;++A){const N=p.nextBitIsOne(),x=Math.pow(2,p.count-(A+1));N?w(x,Ke.BLACK):(w(x,Ke.BLACK),w(x,Ke.RED))}return v},c=new q1(r.length),f=u(c);return new _t(s||e,f)};/**
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
 */let Ec;const ii={};class mn{static get Default(){return U(ii&&Me,"ChildrenNode.ts has not been loaded"),Ec=Ec||new mn({".priority":ii},{".priority":Me}),Ec}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==ci,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(se.Wrap);let c=u.getNext();for(;c;)l=l||e.isDefinedOn(c.node),s.push(c),c=u.getNext();let f;l?f=Ll(s,e.getCompare()):f=ii;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new mn(v,g)}addToIndexes(e,n){const s=Il(this.indexes_,(l,u)=>{const c=hi(this.indexSet_,u);if(U(c,"Missing index implementation for "+u),l===ii)if(c.isDefinedOn(e.node)){const f=[],p=n.getIterator(se.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Ll(f,c.getCompare())}else return ii;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new se(e.name,f))),p.insert(e,e.node)}});return new mn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Il(this.indexes_,l=>{if(l===ii)return l;{const u=n.get(e.name);return u?l.remove(new se(e.name,u)):l}});return new mn(s,this.indexSet_)}}/**
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
 */let ys;class Z{static get EMPTY_NODE(){return ys||(ys=new Z(new _t(xd),null,mn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&rv(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ys}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ys:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new se(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const c=l.isEmpty()?ys:this.priorityNode_;return new Z(l,c,u)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{U(ie(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ie(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Me,(c,f)=>{n[c]=f.val(e),s++,u&&Z.INTEGER_REGEXP_.test(c)?l=Math.max(l,Number(c)):u=!1}),!e&&u&&l<2*s){const c=[];for(const f in n)c[f]=n[f];return c}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nv(this.getPriority().val())+":"),this.forEachChild(Me,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":O_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new se(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,se.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ys?-1:0}withIndex(e){if(e===ci||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ci||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Me),l=n.getIterator(Me);let u=s.getNext(),c=l.getNext();for(;u&&c;){if(u.name!==c.name||!u.node.equals(c.node))return!1;u=s.getNext(),c=l.getNext()}return u===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===ci?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Q1 extends Z{constructor(){super(new _t(xd),Z.EMPTY_NODE,mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const Ys=new Q1;Object.defineProperties(se,{MIN:{value:new se(mi,Z.EMPTY_NODE)},MAX:{value:new se(Tr,Ys)}});tv.__EMPTY_NODE=Z.EMPTY_NODE;Ge.__childrenNodeConstructor=Z;V1(Ys);$1(Ys);/**
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
 */const Y1=!0;function We(r,e=null){if(r===null)return Z.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ge(n,We(e))}if(!(r instanceof Array)&&Y1){const n=[];let s=!1;if(Je(r,(c,f)=>{if(c.substring(0,1)!=="."){const p=We(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new se(c,p)))}}),n.length===0)return Z.EMPTY_NODE;const u=Ll(n,B1,c=>c.name,xd);if(s){const c=Ll(n,Me.getCompare());return new Z(u,We(e),new mn({".priority":c},{".priority":Me}))}else return new Z(u,We(e),mn.Default)}else{let n=Z.EMPTY_NODE;return Je(r,(s,l)=>{if(tn(r,s)&&s.substring(0,1)!=="."){const u=We(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(We(e))}}H1(We);/**
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
 */class J1 extends Zl{constructor(e){super(),this.indexPath_=e,U(!le(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Rr(e.name,n.name):u}makePost(e,n){const s=We(e),l=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new se(n,l)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,Ys);return new se(Tr,e)}toString(){return Ms(this.indexPath_,0).join("/")}}/**
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
 */class X1 extends Zl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Rr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const s=We(e);return new se(n,s)}toString(){return".value"}}const Z1=new X1;/**
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
 */function ov(r){return{type:"value",snapshotNode:r}}function gi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function bs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Fs(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function eT(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Ad{constructor(e){this.index_=e}updateChild(e,n,s,l,u,c){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(n)?c.trackChildChange(bs(n,f)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(gi(n,s)):c.trackChildChange(Fs(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Me,(l,u)=>{n.hasChild(l)||s.trackChildChange(bs(l,u))}),n.isLeafNode()||n.forEachChild(Me,(l,u)=>{if(e.hasChild(l)){const c=e.getImmediateChild(l);c.equals(u)||s.trackChildChange(Fs(l,u,c))}else s.trackChildChange(gi(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Us{constructor(e){this.indexedFilter_=new Ad(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Us.getStartPost_(e),this.endPost_=Us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,c){return this.matches(new se(n,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,c)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Z.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(Z.EMPTY_NODE);const u=this;return n.forEachChild(Me,(c,f)=>{u.matches(new se(c,f))||(l=l.updateImmediateChild(c,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class tT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,c){return this.rangedFilter_.matches(new se(n,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,c):this.fullLimitUpdateChild_(e,n,s,u,c)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=Z.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;u.hasNext()&&c<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(Z.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let c=0;for(;u.hasNext();){const f=u.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:l=l.updateImmediateChild(f.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let c;if(this.reverse_){const _=this.index_.getCompare();c=(w,P)=>_(P,w)}else c=this.index_.getCompare();const f=e;U(f.numChildren()===this.limit_,"");const p=new se(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const P=w==null?1:c(w,p);if(v&&!s.isEmpty()&&P>=0)return u!=null&&u.trackChildChange(Fs(n,s,_)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(bs(n,_));const N=f.updateImmediateChild(n,Z.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(u!=null&&u.trackChildChange(gi(w.name,w.node)),N.updateImmediateChild(w.name,w.node)):N}}else return s.isEmpty()?e:v&&c(g,p)>=0?(u!=null&&(u.trackChildChange(bs(g.name,g.node)),u.trackChildChange(gi(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,Z.EMPTY_NODE)):e}}/**
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
 */class Od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mi}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nT(r){return r.loadsAllData()?new Ad(r.getIndex()):r.hasLimit()?new tT(r):new Us(r)}function og(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Me?n="$priority":r.index_===Z1?n="$value":r.index_===ci?n="$key":(U(r.index_ instanceof J1,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Be(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Be(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Be(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Be(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Be(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function lg(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Me&&(e.i=r.index_.toString()),e}/**
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
 */class Ml extends J_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Qs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const c=Ml.getListenId_(e,s),f={};this.listens_[c]=f;const p=og(e._queryParams);this.restRequest_(u+".json",p,(g,v)=>{let _=v;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(u,_,!1,s),hi(this.listens_,c)===f){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",l(w,null)}})}unlisten(e,n){const s=Ml.getListenId_(e,n);delete this.listens_[s]}get(e){const n=og(e._queryParams),s=e._path.toString(),l=new Vs;return this.restRequest_(s+".json",n,(u,c)=>{let f=c;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ti(n);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=As(f.responseText)}catch{ot("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&ot("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
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
 */class rT{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function bl(){return{value:null,children:new Map}}function lv(r,e,n){if(le(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ie(e);r.children.has(s)||r.children.set(s,bl());const l=r.children.get(s);e=Ie(e),lv(l,e,n)}}function Hc(r,e,n){r.value!==null?n(e,r.value):iT(r,(s,l)=>{const u=new ve(e.toString()+"/"+s);Hc(l,u,n)})}function iT(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class sT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const ag=10*1e3,oT=30*1e3,lT=300*1e3;class aT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sT(e);const s=ag+(oT-ag)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(l,u)=>{u>0&&tn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*lT))}}/**
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
 */var Vt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Vt||(Vt={}));function Dd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ld(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Md(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class Fl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Vt.ACK_USER_WRITE,this.source=Dd()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new Fl(fe(),n,this.revert)}}else return U(ie(this.path)===e,"operationForChild called for unrelated child."),new Fl(Ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class js{constructor(e,n){this.source=e,this.path=n,this.type=Vt.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new js(this.source,fe()):new js(this.source,Ie(this.path))}}/**
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
 */class kr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Vt.OVERWRITE}operationForChild(e){return le(this.path)?new kr(this.source,fe(),this.snap.getImmediateChild(e)):new kr(this.source,Ie(this.path),this.snap)}}/**
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
 */class _i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Vt.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new kr(this.source,fe(),n.value):new _i(this.source,fe(),n)}else return U(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,Ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class er{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class uT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cT(r,e,n,s){const l=[],u=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&u.push(eT(c.childName,c.snapshotNode))}),ws(r,l,"child_removed",e,s,n),ws(r,l,"child_added",e,s,n),ws(r,l,"child_moved",u,s,n),ws(r,l,"child_changed",e,s,n),ws(r,l,"value",e,s,n),l}function ws(r,e,n,s,l,u){const c=s.filter(f=>f.type===n);c.sort((f,p)=>hT(r,f,p)),c.forEach(f=>{const p=dT(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function dT(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function hT(r,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const s=new se(e.childName,e.snapshotNode),l=new se(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
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
 */function ea(r,e){return{eventCache:r,serverCache:e}}function ks(r,e,n,s){return ea(new er(e,n,s),r.serverCache)}function av(r,e,n,s){return ea(r.eventCache,new er(e,n,s))}function Ul(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Nr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let Cc;const fT=()=>(Cc||(Cc=new _t(JI)),Cc);class Se{static fromObject(e){let n=new Se(null);return Je(e,(s,l)=>{n=n.set(new ve(s),l)}),n}constructor(e,n=fT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(le(e))return null;{const s=ie(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ie(e),n);return u!=null?{path:Le(new ve(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(Ie(e)):new Se(null)}}set(e,n){if(le(e))return new Se(n,this.children);{const s=ie(e),u=(this.children.get(s)||new Se(null)).set(Ie(e),n),c=this.children.insert(s,u);return new Se(this.value,c)}}remove(e){if(le(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const l=s.remove(Ie(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Se(null):new Se(this.value,u)}else return this}}get(e){if(le(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(Ie(e)):null}}setTree(e,n){if(le(e))return n;{const s=ie(e),u=(this.children.get(s)||new Se(null)).setTree(Ie(e),n);let c;return u.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,u),new Se(this.value,c)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Le(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(le(e))return null;{const u=ie(e),c=this.children.get(u);return c?c.findOnPath_(Ie(e),Le(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const l=ie(e),u=this.children.get(l);return u?u.foreachOnPath_(Ie(e),Le(n,l),s):new Se(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Le(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class $t{constructor(e){this.writeTree_=e}static empty(){return new $t(new Se(null))}}function Ns(r,e,n){if(le(e))return new $t(new Se(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const c=st(l,e);return u=u.updateChild(c,n),new $t(r.writeTree_.set(l,u))}else{const l=new Se(n),u=r.writeTree_.setTree(e,l);return new $t(u)}}}function $c(r,e,n){let s=r;return Je(n,(l,u)=>{s=Ns(s,Le(e,l),u)}),s}function ug(r,e){if(le(e))return $t.empty();{const n=r.writeTree_.setTree(e,new Se(null));return new $t(n)}}function Gc(r,e){return Pr(r,e)!=null}function Pr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(st(n.path,e)):null}function cg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(s,l)=>{e.push(new se(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new se(s,l.value))}),e}function Jn(r,e){if(le(e))return r;{const n=Pr(r,e);return n!=null?new $t(new Se(n)):new $t(r.writeTree_.subtree(e))}}function Kc(r){return r.writeTree_.isEmpty()}function vi(r,e){return uv(fe(),r.writeTree_,e)}function uv(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(U(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=uv(Le(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(Le(r,".priority"),s)),n}}/**
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
 */function ta(r,e){return fv(e,r)}function pT(r,e,n,s,l){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=Ns(r.visibleWrites,e,n)),r.lastWriteId=s}function mT(r,e,n,s){U(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=$c(r.visibleWrites,e,n),r.lastWriteId=s}function gT(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function _T(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,c=r.allWrites.length-1;for(;l&&c>=0;){const f=r.allWrites[c];f.visible&&(c>=n&&vT(f,s.path)?l=!1:xt(s.path,f.path)&&(u=!0)),c--}if(l){if(u)return yT(r),!0;if(s.snap)r.visibleWrites=ug(r.visibleWrites,s.path);else{const f=s.children;Je(f,p=>{r.visibleWrites=ug(r.visibleWrites,Le(s.path,p))})}return!0}else return!1}function vT(r,e){if(r.snap)return xt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&xt(Le(r.path,n),e))return!0;return!1}function yT(r){r.visibleWrites=cv(r.allWrites,wT,fe()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function wT(r){return r.visible}function cv(r,e,n){let s=$t.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const c=u.path;let f;if(u.snap)xt(n,c)?(f=st(n,c),s=Ns(s,f,u.snap)):xt(c,n)&&(f=st(c,n),s=Ns(s,fe(),u.snap.getChild(f)));else if(u.children){if(xt(n,c))f=st(n,c),s=$c(s,f,u.children);else if(xt(c,n))if(f=st(c,n),le(f))s=$c(s,fe(),u.children);else{const p=hi(u.children,ie(f));if(p){const g=p.getChild(Ie(f));s=Ns(s,fe(),g)}}}else throw Si("WriteRecord should have .snap or .children")}}return s}function dv(r,e,n,s,l){if(!s&&!l){const u=Pr(r.visibleWrites,e);if(u!=null)return u;{const c=Jn(r.visibleWrites,e);if(Kc(c))return n;if(n==null&&!Gc(c,fe()))return null;{const f=n||Z.EMPTY_NODE;return vi(c,f)}}}else{const u=Jn(r.visibleWrites,e);if(!l&&Kc(u))return n;if(!l&&n==null&&!Gc(u,fe()))return null;{const c=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(xt(g.path,e)||xt(e,g.path))},f=cv(r.allWrites,c,e),p=n||Z.EMPTY_NODE;return vi(f,p)}}}function ET(r,e,n){let s=Z.EMPTY_NODE;const l=Pr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Me,(u,c)=>{s=s.updateImmediateChild(u,c)}),s;if(n){const u=Jn(r.visibleWrites,e);return n.forEachChild(Me,(c,f)=>{const p=vi(Jn(u,new ve(c)),f);s=s.updateImmediateChild(c,p)}),cg(u).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const u=Jn(r.visibleWrites,e);return cg(u).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function CT(r,e,n,s,l){U(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Le(e,n);if(Gc(r.visibleWrites,u))return null;{const c=Jn(r.visibleWrites,u);return Kc(c)?l.getChild(n):vi(c,l.getChild(n))}}function ST(r,e,n,s){const l=Le(e,n),u=Pr(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const c=Jn(r.visibleWrites,l);return vi(c,s.getNode().getImmediateChild(n))}else return null}function IT(r,e){return Pr(r.visibleWrites,e)}function TT(r,e,n,s,l,u,c){let f;const p=Jn(r.visibleWrites,e),g=Pr(p,fe());if(g!=null)f=g;else if(n!=null)f=vi(p,n);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const v=[],_=c.getCompare(),w=u?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let P=w.getNext();for(;P&&v.length<l;)_(P,s)!==0&&v.push(P),P=w.getNext();return v}else return[]}function kT(){return{visibleWrites:$t.empty(),allWrites:[],lastWriteId:-1}}function jl(r,e,n,s){return dv(r.writeTree,r.treePath,e,n,s)}function bd(r,e){return ET(r.writeTree,r.treePath,e)}function dg(r,e,n,s){return CT(r.writeTree,r.treePath,e,n,s)}function zl(r,e){return IT(r.writeTree,Le(r.treePath,e))}function NT(r,e,n,s,l,u){return TT(r.writeTree,r.treePath,e,n,s,l,u)}function Fd(r,e,n){return ST(r.writeTree,r.treePath,e,n)}function hv(r,e){return fv(Le(r.treePath,e),r.writeTree)}function fv(r,e){return{treePath:r,writeTree:e}}/**
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
 */class RT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Fs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,bs(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,gi(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Fs(s,e.snapshotNode,l.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class PT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const pv=new PT;class Ud{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),u=NT(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function xT(r){return{filter:r}}function AT(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function OT(r,e,n,s,l){const u=new RT;let c,f;if(n.type===Vt.OVERWRITE){const g=n;g.source.fromUser?c=qc(r,e,g.path,g.snap,s,l,u):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!le(g.path),c=Wl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Vt.MERGE){const g=n;g.source.fromUser?c=LT(r,e,g.path,g.children,s,l,u):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=Qc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Vt.ACK_USER_WRITE){const g=n;g.revert?c=FT(r,e,g.path,s,l,u):c=MT(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Vt.LISTEN_COMPLETE)c=bT(r,e,n.path,s,u);else throw Si("Unknown operation type: "+n.type);const p=u.getChanges();return DT(e,c,p),{viewCache:c,changes:p}}function DT(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Ul(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(ov(Ul(e)))}}function mv(r,e,n,s,l,u){const c=e.eventCache;if(zl(s,n)!=null)return e;{let f,p;if(le(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Nr(e),v=g instanceof Z?g:Z.EMPTY_NODE,_=bd(s,v);f=r.filter.updateFullNode(e.eventCache.getNode(),_,u)}else{const g=jl(s,Nr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ie(n);if(g===".priority"){U(Zn(n)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const _=dg(s,n,v,p);_!=null?f=r.filter.updatePriority(v,_):f=c.getNode()}else{const v=Ie(n);let _;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=dg(s,n,c.getNode(),p);w!=null?_=c.getNode().getImmediateChild(g).updateChild(v,w):_=c.getNode().getImmediateChild(g)}else _=Fd(s,g,e.serverCache);_!=null?f=r.filter.updateChild(c.getNode(),g,_,v,l,u):f=c.getNode()}}return ks(e,f,c.isFullyInitialized()||le(n),r.filter.filtersNodes())}}function Wl(r,e,n,s,l,u,c,f){const p=e.serverCache;let g;const v=c?r.filter:r.filter.getIndexedFilter();if(le(n))g=v.updateFullNode(p.getNode(),s,null);else if(v.filtersNodes()&&!p.isFiltered()){const P=p.getNode().updateChild(n,s);g=v.updateFullNode(p.getNode(),P,null)}else{const P=ie(n);if(!p.isCompleteForPath(n)&&Zn(n)>1)return e;const A=Ie(n),x=p.getNode().getImmediateChild(P).updateChild(A,s);P===".priority"?g=v.updatePriority(p.getNode(),x):g=v.updateChild(p.getNode(),P,x,A,pv,null)}const _=av(e,g,p.isFullyInitialized()||le(n),v.filtersNodes()),w=new Ud(l,_,u);return mv(r,_,n,l,w,f)}function qc(r,e,n,s,l,u,c){const f=e.eventCache;let p,g;const v=new Ud(l,e,u);if(le(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=ks(e,g,!0,r.filter.filtersNodes());else{const _=ie(n);if(_===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=ks(e,g,f.isFullyInitialized(),f.isFiltered());else{const w=Ie(n),P=f.getNode().getImmediateChild(_);let A;if(le(w))A=s;else{const N=v.getCompleteChild(_);N!=null?Nd(w)===".priority"&&N.getChild(Z_(w)).isEmpty()?A=N:A=N.updateChild(w,s):A=Z.EMPTY_NODE}if(P.equals(A))p=e;else{const N=r.filter.updateChild(f.getNode(),_,A,w,v,c);p=ks(e,N,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function hg(r,e){return r.eventCache.isCompleteForChild(e)}function LT(r,e,n,s,l,u,c){let f=e;return s.foreach((p,g)=>{const v=Le(n,p);hg(e,ie(v))&&(f=qc(r,f,v,g,l,u,c))}),s.foreach((p,g)=>{const v=Le(n,p);hg(e,ie(v))||(f=qc(r,f,v,g,l,u,c))}),f}function fg(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Qc(r,e,n,s,l,u,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;le(n)?g=s:g=new Se(null).setTree(n,s);const v=e.serverCache.getNode();return g.children.inorderTraversal((_,w)=>{if(v.hasChild(_)){const P=e.serverCache.getNode().getImmediateChild(_),A=fg(r,P,w);p=Wl(r,p,new ve(_),A,l,u,c,f)}}),g.children.inorderTraversal((_,w)=>{const P=!e.serverCache.isCompleteForChild(_)&&w.value===null;if(!v.hasChild(_)&&!P){const A=e.serverCache.getNode().getImmediateChild(_),N=fg(r,A,w);p=Wl(r,p,new ve(_),N,l,u,c,f)}}),p}function MT(r,e,n,s,l,u,c){if(zl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(le(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Wl(r,e,n,p.getNode().getChild(n),l,u,f,c);if(le(n)){let g=new Se(null);return p.getNode().forEachChild(ci,(v,_)=>{g=g.set(new ve(v),_)}),Qc(r,e,n,g,l,u,f,c)}else return e}else{let g=new Se(null);return s.foreach((v,_)=>{const w=Le(n,v);p.isCompleteForPath(w)&&(g=g.set(v,p.getNode().getChild(w)))}),Qc(r,e,n,g,l,u,f,c)}}function bT(r,e,n,s,l){const u=e.serverCache,c=av(e,u.getNode(),u.isFullyInitialized()||le(n),u.isFiltered());return mv(r,c,n,s,pv,l)}function FT(r,e,n,s,l,u){let c;if(zl(s,n)!=null)return e;{const f=new Ud(s,e,l),p=e.eventCache.getNode();let g;if(le(n)||ie(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=jl(s,Nr(e));else{const _=e.serverCache.getNode();U(_ instanceof Z,"serverChildren would be complete if leaf node"),v=bd(s,_)}v=v,g=r.filter.updateFullNode(p,v,u)}else{const v=ie(n);let _=Fd(s,v,e.serverCache);_==null&&e.serverCache.isCompleteForChild(v)&&(_=p.getImmediateChild(v)),_!=null?g=r.filter.updateChild(p,v,_,Ie(n),f,u):e.eventCache.getNode().hasChild(v)?g=r.filter.updateChild(p,v,Z.EMPTY_NODE,Ie(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=jl(s,Nr(e)),c.isLeafNode()&&(g=r.filter.updateFullNode(g,c,u)))}return c=e.serverCache.isFullyInitialized()||zl(s,fe())!=null,ks(e,g,c,r.filter.filtersNodes())}}/**
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
 */class UT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Ad(s.getIndex()),u=nT(s);this.processor_=xT(u);const c=n.serverCache,f=n.eventCache,p=l.updateFullNode(Z.EMPTY_NODE,c.getNode(),null),g=u.updateFullNode(Z.EMPTY_NODE,f.getNode(),null),v=new er(p,c.isFullyInitialized(),l.filtersNodes()),_=new er(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=ea(_,v),this.eventGenerator_=new uT(this.query_)}get query(){return this.query_}}function jT(r){return r.viewCache_.serverCache.getNode()}function zT(r){return Ul(r.viewCache_)}function WT(r,e){const n=Nr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function pg(r){return r.eventRegistrations_.length===0}function BT(r,e){r.eventRegistrations_.push(e)}function mg(r,e,n){const s=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const c=u.createCancelEvent(n,l);c&&s.push(c)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const c=r.eventRegistrations_[u];if(!c.matches(e))l.push(c);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function gg(r,e,n,s){e.type===Vt.MERGE&&e.source.queryId!==null&&(U(Nr(r.viewCache_),"We should always have a full cache before handling merges"),U(Ul(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=OT(r.processor_,l,e,n,s);return AT(r.processor_,u.viewCache),U(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,gv(r,u.changes,u.viewCache.eventCache.getNode(),null)}function VT(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(u,c)=>{s.push(gi(u,c))}),n.isFullyInitialized()&&s.push(ov(n.getNode())),gv(r,s,n.getNode(),e)}function gv(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return cT(r.eventGenerator_,e,n,l)}/**
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
 */let Bl;class _v{constructor(){this.views=new Map}}function HT(r){U(!Bl,"__referenceConstructor has already been defined"),Bl=r}function $T(){return U(Bl,"Reference.ts has not been loaded"),Bl}function GT(r){return r.views.size===0}function jd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return U(u!=null,"SyncTree gave us an op for an invalid query."),gg(u,e,n,s)}else{let u=[];for(const c of r.views.values())u=u.concat(gg(c,e,n,s));return u}}function vv(r,e,n,s,l){const u=e._queryIdentifier,c=r.views.get(u);if(!c){let f=jl(n,l?s:null),p=!1;f?p=!0:s instanceof Z?(f=bd(n,s),p=!1):(f=Z.EMPTY_NODE,p=!1);const g=ea(new er(f,p,!1),new er(s,l,!1));return new UT(e,g)}return c}function KT(r,e,n,s,l,u){const c=vv(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),BT(c,n),VT(c,n)}function qT(r,e,n,s){const l=e._queryIdentifier,u=[];let c=[];const f=tr(r);if(l==="default")for(const[p,g]of r.views.entries())c=c.concat(mg(g,n,s)),pg(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(c=c.concat(mg(p,n,s)),pg(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!tr(r)&&u.push(new($T())(e._repo,e._path)),{removed:u,events:c}}function yv(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Xn(r,e){let n=null;for(const s of r.views.values())n=n||WT(s,e);return n}function wv(r,e){if(e._queryParams.loadsAllData())return na(r);{const s=e._queryIdentifier;return r.views.get(s)}}function Ev(r,e){return wv(r,e)!=null}function tr(r){return na(r)!=null}function na(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Vl;function QT(r){U(!Vl,"__referenceConstructor has already been defined"),Vl=r}function YT(){return U(Vl,"Reference.ts has not been loaded"),Vl}let JT=1;class _g{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=kT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cv(r,e,n,s,l){return pT(r.pendingWriteTree_,e,n,s,l),l?Pi(r,new kr(Dd(),e,n)):[]}function XT(r,e,n,s){mT(r.pendingWriteTree_,e,n,s);const l=Se.fromObject(n);return Pi(r,new _i(Dd(),e,l))}function Gn(r,e,n=!1){const s=gT(r.pendingWriteTree_,e);if(_T(r.pendingWriteTree_,e)){let u=new Se(null);return s.snap!=null?u=u.set(fe(),!0):Je(s.children,c=>{u=u.set(new ve(c),!0)}),Pi(r,new Fl(s.path,u,n))}else return[]}function Js(r,e,n){return Pi(r,new kr(Ld(),e,n))}function ZT(r,e,n){const s=Se.fromObject(n);return Pi(r,new _i(Ld(),e,s))}function ek(r,e){return Pi(r,new js(Ld(),e))}function tk(r,e,n){const s=Wd(r,n);if(s){const l=Bd(s),u=l.path,c=l.queryId,f=st(u,e),p=new js(Md(c),f);return Vd(r,u,p)}else return[]}function Hl(r,e,n,s,l=!1){const u=e._path,c=r.syncPointTree_.get(u);let f=[];if(c&&(e._queryIdentifier==="default"||Ev(c,e))){const p=qT(c,e,n,s);GT(c)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const v=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(u,(w,P)=>tr(P));if(v&&!_){const w=r.syncPointTree_.subtree(u);if(!w.isEmpty()){const P=ik(w);for(let A=0;A<P.length;++A){const N=P[A],x=N.query,q=kv(r,N);r.listenProvider_.startListening(Rs(x),zs(r,x),q.hashFn,q.onComplete)}}}!_&&g.length>0&&!s&&(v?r.listenProvider_.stopListening(Rs(e),null):g.forEach(w=>{const P=r.queryToTagMap.get(ra(w));r.listenProvider_.stopListening(Rs(w),P)}))}sk(r,g)}return f}function Sv(r,e,n,s){const l=Wd(r,s);if(l!=null){const u=Bd(l),c=u.path,f=u.queryId,p=st(c,e),g=new kr(Md(f),p,n);return Vd(r,c,g)}else return[]}function nk(r,e,n,s){const l=Wd(r,s);if(l){const u=Bd(l),c=u.path,f=u.queryId,p=st(c,e),g=Se.fromObject(n),v=new _i(Md(f),p,g);return Vd(r,c,v)}else return[]}function Yc(r,e,n,s=!1){const l=e._path;let u=null,c=!1;r.syncPointTree_.foreachOnPath(l,(w,P)=>{const A=st(w,l);u=u||Xn(P,A),c=c||tr(P)});let f=r.syncPointTree_.get(l);f?(c=c||tr(f),u=u||Xn(f,fe())):(f=new _v,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=Z.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((P,A)=>{const N=Xn(A,fe());N&&(u=u.updateImmediateChild(P,N))}));const g=Ev(f,e);if(!g&&!e._queryParams.loadsAllData()){const w=ra(e);U(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const P=ok();r.queryToTagMap.set(w,P),r.tagToQueryMap.set(P,w)}const v=ta(r.pendingWriteTree_,l);let _=KT(f,e,n,v,u,p);if(!g&&!c&&!s){const w=wv(f,e);_=_.concat(lk(r,e,w))}return _}function zd(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(c,f)=>{const p=st(c,e),g=Xn(f,p);if(g)return g});return dv(l,e,u,n,!0)}function rk(r,e){const n=e._path;let s=null;r.syncPointTree_.foreachOnPath(n,(g,v)=>{const _=st(g,n);s=s||Xn(v,_)});let l=r.syncPointTree_.get(n);l?s=s||Xn(l,fe()):(l=new _v,r.syncPointTree_=r.syncPointTree_.set(n,l));const u=s!=null,c=u?new er(s,!0,!1):null,f=ta(r.pendingWriteTree_,e._path),p=vv(l,e,f,u?c.getNode():Z.EMPTY_NODE,u);return zT(p)}function Pi(r,e){return Iv(e,r.syncPointTree_,null,ta(r.pendingWriteTree_,fe()))}function Iv(r,e,n,s){if(le(r.path))return Tv(r,e,n,s);{const l=e.get(fe());n==null&&l!=null&&(n=Xn(l,fe()));let u=[];const c=ie(r.path),f=r.operationForChild(c),p=e.children.get(c);if(p&&f){const g=n?n.getImmediateChild(c):null,v=hv(s,c);u=u.concat(Iv(f,p,g,v))}return l&&(u=u.concat(jd(l,r,s,n))),u}}function Tv(r,e,n,s){const l=e.get(fe());n==null&&l!=null&&(n=Xn(l,fe()));let u=[];return e.children.inorderTraversal((c,f)=>{const p=n?n.getImmediateChild(c):null,g=hv(s,c),v=r.operationForChild(c);v&&(u=u.concat(Tv(v,f,p,g)))}),l&&(u=u.concat(jd(l,r,s,n))),u}function kv(r,e){const n=e.query,s=zs(r,n);return{hashFn:()=>(jT(e)||Z.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?tk(r,n._path,s):ek(r,n._path);{const u=e1(l,n);return Hl(r,n,null,u)}}}}function zs(r,e){const n=ra(e);return r.queryToTagMap.get(n)}function ra(r){return r._path.toString()+"$"+r._queryIdentifier}function Wd(r,e){return r.tagToQueryMap.get(e)}function Bd(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new ve(r.substr(0,e))}}function Vd(r,e,n){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const l=ta(r.pendingWriteTree_,e);return jd(s,n,l,null)}function ik(r){return r.fold((e,n,s)=>{if(n&&tr(n))return[na(n)];{let l=[];return n&&(l=yv(n)),Je(s,(u,c)=>{l=l.concat(c)}),l}})}function Rs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(YT())(r._repo,r._path):r}function sk(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=ra(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function ok(){return JT++}function lk(r,e,n){const s=e._path,l=zs(r,e),u=kv(r,n),c=r.listenProvider_.startListening(Rs(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)U(!tr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,v,_)=>{if(!le(g)&&v&&tr(v))return[na(v).query];{let w=[];return v&&(w=w.concat(yv(v).map(P=>P.query))),Je(_,(P,A)=>{w=w.concat(A)}),w}});for(let g=0;g<p.length;++g){const v=p[g];r.listenProvider_.stopListening(Rs(v),zs(r,v))}}return c}/**
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
 */class Hd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hd(n)}node(){return this.node_}}class $d{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new $d(this.syncTree_,n)}node(){return zd(this.syncTree_,this.path_)}}const ak=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},vg=function(r,e,n){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return uk(r[".sv"],e,n);if(typeof r[".sv"]=="object")return ck(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},uk=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+r)}},ck=function(r,e,n){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const l=e.node();if(U(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const c=l.getValue();return typeof c!="number"?s:c+s},Nv=function(r,e,n,s){return Gd(e,new $d(n,r),s)},Rv=function(r,e,n){return Gd(r,new Hd(e),n)};function Gd(r,e,n){const s=r.getPriority().val(),l=vg(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const c=r,f=vg(c.getValue(),e,n);return f!==c.getValue()||l!==c.getPriority().val()?new Ge(f,We(l)):r}else{const c=r;return u=c,l!==c.getPriority().val()&&(u=u.updatePriority(new Ge(l))),c.forEachChild(Me,(f,p)=>{const g=Gd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class Kd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function qd(r,e){let n=e instanceof ve?e:new ve(e),s=r,l=ie(n);for(;l!==null;){const u=hi(s.node.children,l)||{children:{},childCount:0};s=new Kd(l,s,u),n=Ie(n),l=ie(n)}return s}function xi(r){return r.node.value}function Pv(r,e){r.node.value=e,Jc(r)}function xv(r){return r.node.childCount>0}function dk(r){return xi(r)===void 0&&!xv(r)}function ia(r,e){Je(r.node.children,(n,s)=>{e(new Kd(n,r,s))})}function Av(r,e,n,s){n&&e(r),ia(r,l=>{Av(l,e,!0)})}function hk(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xs(r){return new ve(r.parent===null?r.name:Xs(r.parent)+"/"+r.name)}function Jc(r){r.parent!==null&&fk(r.parent,r.name,r)}function fk(r,e,n){const s=dk(n),l=tn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Jc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Jc(r))}/**
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
 */const pk=/[\[\].#$\/\u0000-\u001F\u007F]/,mk=/[\[\].#$\u0000-\u001F\u007F]/,Sc=10*1024*1024,Qd=function(r){return typeof r=="string"&&r.length!==0&&!pk.test(r)},Ov=function(r){return typeof r=="string"&&r.length!==0&&!mk.test(r)},gk=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Ov(r)},_k=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!Cd(r)||r&&typeof r=="object"&&tn(r,".sv")},Dv=function(r,e,n,s){s&&e===void 0||sa(ql(r,"value"),e,n)},sa=function(r,e,n){const s=n instanceof ve?new L1(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+vr(s));if(typeof e=="function")throw new Error(r+"contains a function "+vr(s)+" with contents = "+e.toString());if(Cd(e))throw new Error(r+"contains "+e.toString()+" "+vr(s));if(typeof e=="string"&&e.length>Sc/3&&Ql(e)>Sc)throw new Error(r+"contains a string greater than "+Sc+" utf8 bytes "+vr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Je(e,(c,f)=>{if(c===".value")l=!0;else if(c!==".priority"&&c!==".sv"&&(u=!0,!Qd(c)))throw new Error(r+" contains an invalid key ("+c+") "+vr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);M1(s,c),sa(r,f,s),b1(s)}),l&&u)throw new Error(r+' contains ".value" child '+vr(s)+" in addition to actual children.")}},vk=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Ms(s);for(let c=0;c<u.length;c++)if(!(u[c]===".priority"&&c===u.length-1)){if(!Qd(u[c]))throw new Error(r+"contains an invalid key ("+u[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(D1);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&xt(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},yk=function(r,e,n,s){const l=ql(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Je(e,(c,f)=>{const p=new ve(c);if(sa(l,f,Le(n,p)),Nd(p)===".priority"&&!_k(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),vk(l,u)},Lv=function(r,e,n,s){if(!Ov(n))throw new Error(ql(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wk=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Lv(r,e,n)},Yd=function(r,e){if(ie(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},Ek=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gk(n))throw new Error(ql(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ck{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oa(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Rd(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function Mv(r,e,n){oa(r,n),bv(r,s=>Rd(s,e))}function At(r,e,n){oa(r,n),bv(r,s=>xt(s,e)||xt(e,s))}function bv(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(Sk(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function Sk(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Is&&Ye("event: "+n.toString()),Ri(s)}}}/**
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
 */const Ik="repo_interrupt",Tk=25;class kk{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ck,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=bl(),this.transactionQueueTree_=new Kd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Nk(r,e,n){if(r.stats_=Td(r.repoInfo_),r.forceRestClient_||i1())r.server_=new Ml(r.repoInfo_,(s,l,u,c)=>{yg(r,s,l,u,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>wg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Be(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new gn(r.repoInfo_,e,(s,l,u,c)=>{yg(r,s,l,u,c)},s=>{wg(r,s)},s=>{Rk(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=u1(r.repoInfo_,()=>new aT(r.stats_,r.server_)),r.infoData_=new rT,r.infoSyncTree_=new _g({startListening:(s,l,u,c)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=Js(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),Jd(r,"connected",!1),r.serverSyncTree_=new _g({startListening:(s,l,u,c)=>(r.server_.listen(s,u,l,(f,p)=>{const g=c(f,p);At(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function Fv(r){const n=r.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function la(r){return ak({timestamp:Fv(r)})}function yg(r,e,n,s,l){r.dataUpdateCount++;const u=new ve(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let c=[];if(l)if(s){const p=Il(n,g=>We(g));c=nk(r.serverSyncTree_,u,p,l)}else{const p=We(n);c=Sv(r.serverSyncTree_,u,p,l)}else if(s){const p=Il(n,g=>We(g));c=ZT(r.serverSyncTree_,u,p)}else{const p=We(n);c=Js(r.serverSyncTree_,u,p)}let f=u;c.length>0&&(f=yi(r,u)),At(r.eventQueue_,f,c)}function wg(r,e){Jd(r,"connected",e),e===!1&&Ok(r)}function Rk(r,e){Je(e,(n,s)=>{Jd(r,n,s)})}function Jd(r,e,n){const s=new ve("/.info/"+e),l=We(n);r.infoData_.updateSnapshot(s,l);const u=Js(r.infoSyncTree_,s,l);At(r.eventQueue_,s,u)}function Xd(r){return r.nextWriteId_++}function Pk(r,e,n){const s=rk(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const u=We(l).withIndex(e._queryParams.getIndex());Yc(r.serverSyncTree_,e,n,!0);let c;if(e._queryParams.loadsAllData())c=Js(r.serverSyncTree_,e._path,u);else{const f=zs(r.serverSyncTree_,e);c=Sv(r.serverSyncTree_,e._path,u,f)}return At(r.eventQueue_,e._path,c),Hl(r.serverSyncTree_,e,n,null,!0),u},l=>(Zs(r,"get for query "+Be(e)+" failed: "+l),Promise.reject(new Error(l))))}function xk(r,e,n,s,l){Zs(r,"set",{path:e.toString(),value:n,priority:s});const u=la(r),c=We(n,s),f=zd(r.serverSyncTree_,e),p=Rv(c,f,u),g=Xd(r),v=Cv(r.serverSyncTree_,e,p,g,!0);oa(r.eventQueue_,v),r.server_.put(e.toString(),c.val(!0),(w,P)=>{const A=w==="ok";A||ot("set at "+e+" failed: "+w);const N=Gn(r.serverSyncTree_,g,!A);At(r.eventQueue_,e,N),Xc(r,l,w,P)});const _=eh(r,e);yi(r,_),At(r.eventQueue_,_,[])}function Ak(r,e,n,s){Zs(r,"update",{path:e.toString(),value:n});let l=!0;const u=la(r),c={};if(Je(n,(f,p)=>{l=!1,c[f]=Nv(Le(e,f),We(p),r.serverSyncTree_,u)}),l)Ye("update() called with empty data.  Don't do anything."),Xc(r,s,"ok",void 0);else{const f=Xd(r),p=XT(r.serverSyncTree_,e,c,f);oa(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,v)=>{const _=g==="ok";_||ot("update at "+e+" failed: "+g);const w=Gn(r.serverSyncTree_,f,!_),P=w.length>0?yi(r,e):e;At(r.eventQueue_,P,w),Xc(r,s,g,v)}),Je(n,g=>{const v=eh(r,Le(e,g));yi(r,v)}),At(r.eventQueue_,e,[])}}function Ok(r){Zs(r,"onDisconnectEvents");const e=la(r),n=bl();Hc(r.onDisconnect_,fe(),(l,u)=>{const c=Nv(l,u,r.serverSyncTree_,e);lv(n,l,c)});let s=[];Hc(n,fe(),(l,u)=>{s=s.concat(Js(r.serverSyncTree_,l,u));const c=eh(r,l);yi(r,c)}),r.onDisconnect_=bl(),At(r.eventQueue_,fe(),s)}function Dk(r,e,n){let s;ie(e._path)===".info"?s=Yc(r.infoSyncTree_,e,n):s=Yc(r.serverSyncTree_,e,n),Mv(r.eventQueue_,e._path,s)}function Lk(r,e,n){let s;ie(e._path)===".info"?s=Hl(r.infoSyncTree_,e,n):s=Hl(r.serverSyncTree_,e,n),Mv(r.eventQueue_,e._path,s)}function Mk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(Ik)}function Zs(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),Ye(n,...e)}function Xc(r,e,n,s){e&&Ri(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const c=new Error(u);c.code=l,e(c)}})}function Uv(r,e,n){return zd(r.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Zd(r,e=r.transactionQueueTree_){if(e||aa(r,e),xi(e)){const n=zv(r,e);U(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&bk(r,Xs(e),n)}else xv(e)&&ia(e,n=>{Zd(r,n)})}function bk(r,e,n){const s=n.map(g=>g.currentWriteId),l=Uv(r,e,s);let u=l;const c=l.hash();for(let g=0;g<n.length;g++){const v=n[g];U(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const _=st(e,v.path);u=u.updateChild(_,v.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{Zs(r,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const _=[];for(let w=0;w<n.length;w++)n[w].status=2,v=v.concat(Gn(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&_.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();aa(r,qd(r.transactionQueueTree_,e)),Zd(r,r.transactionQueueTree_),At(r.eventQueue_,e,v);for(let w=0;w<_.length;w++)Ri(_[w])}else{if(g==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{ot("transaction at "+p.toString()+" failed: "+g);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=g}yi(r,e)}},c)}function yi(r,e){const n=jv(r,e),s=Xs(n),l=zv(r,n);return Fk(r,l,s),s}function Fk(r,e,n){if(e.length===0)return;const s=[];let l=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=st(n,p.path);let v=!1,_;if(U(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,_=p.abortReason,l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=Tk)v=!0,_="maxretry",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0));else{const w=Uv(r,p.path,c);p.currentInputSnapshot=w;const P=e[f].update(w.val());if(P!==void 0){sa("transaction failed: Data returned ",P,p.path);let A=We(P);typeof P=="object"&&P!=null&&tn(P,".priority")||(A=A.updatePriority(w.getPriority()));const x=p.currentWriteId,q=la(r),V=Rv(A,w,q);p.currentOutputSnapshotRaw=A,p.currentOutputSnapshotResolved=V,p.currentWriteId=Xd(r),c.splice(c.indexOf(x),1),l=l.concat(Cv(r.serverSyncTree_,p.path,V,p.currentWriteId,p.applyLocally)),l=l.concat(Gn(r.serverSyncTree_,x,!0))}else v=!0,_="nodata",l=l.concat(Gn(r.serverSyncTree_,p.currentWriteId,!0))}At(r.eventQueue_,n,l),l=[],v&&(e[f].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(_),!1,null))))}aa(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ri(s[f]);Zd(r,r.transactionQueueTree_)}function jv(r,e){let n,s=r.transactionQueueTree_;for(n=ie(e);n!==null&&xi(s)===void 0;)s=qd(s,n),e=Ie(e),n=ie(e);return s}function zv(r,e){const n=[];return Wv(r,e,n),n.sort((s,l)=>s.order-l.order),n}function Wv(r,e,n){const s=xi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);ia(e,l=>{Wv(r,l,n)})}function aa(r,e){const n=xi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,Pv(e,n.length>0?n:void 0)}ia(e,s=>{aa(r,s)})}function eh(r,e){const n=Xs(jv(r,e)),s=qd(r.transactionQueueTree_,e);return hk(s,l=>{Ic(r,l)}),Ic(r,s),Av(s,l=>{Ic(r,l)}),n}function Ic(r,e){const n=xi(e);if(n){const s=[];let l=[],u=-1;for(let c=0;c<n.length;c++)n[c].status===3||(n[c].status===1?(U(u===c-1,"All SENT items should be at beginning of queue."),u=c,n[c].status=3,n[c].abortReason="set"):(U(n[c].status===0,"Unexpected transaction status in abort"),n[c].unwatcher(),l=l.concat(Gn(r.serverSyncTree_,n[c].currentWriteId,!0)),n[c].onComplete&&s.push(n[c].onComplete.bind(null,new Error("set"),!1,null))));u===-1?Pv(e,void 0):n.length=u+1,At(r.eventQueue_,Xs(e),l);for(let c=0;c<s.length;c++)Ri(s[c])}}/**
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
 */function Uk(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function jk(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ot(`Invalid query segment '${n}' in query '${r}'`)}return e}const Eg=function(r,e){const n=zk(r),s=n.namespace;n.domain==="firebase.com"&&yn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QI();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new H_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new ve(n.pathString)}},zk=function(r){let e="",n="",s="",l="",u="",c=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let v=r.indexOf("/");v===-1&&(v=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(v,_)),v<_&&(l=Uk(r.substring(v,_)));const w=jk(r.substring(Math.min(r.length,_)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const P=e.slice(0,g);if(P.toLowerCase()==="localhost")n="localhost";else if(P.split(".").length<=2)n=P;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),u=s}"ns"in w&&(u=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:c,scheme:f,pathString:l,namespace:u}};/**
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
 */const Cg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Wk=(function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Cg.charAt(n%64),n=Math.floor(n/64);U(n===0,"Cannot push at time == 0");let c=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)c+=Cg.charAt(e[l]);return U(c.length===20,"nextPushId: Length should be 20."),c}})();/**
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
 */class Bk{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Be(this.snapshot.exportVal())}}class Vk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Bv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class th{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return le(this._path)?null:Nd(this._path)}get ref(){return new En(this._repo,this._path)}get _queryIdentifier(){const e=lg(this._queryParams),n=Sd(e);return n==="{}"?"default":n}get _queryObject(){return lg(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof th))return!1;const n=this._repo===e._repo,s=Rd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+O1(this._path)}}class En extends th{constructor(e,n){super(e,n,new Od,!1)}get parent(){const e=Z_(this._path);return e===null?null:new En(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ws{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),s=Bs(this.ref,e);return new Ws(this._node.getChild(n),s,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Ws(l,Bs(this.ref,s),Me)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xr(r,e){return r=at(r),r._checkNotDeleted("ref"),e!==void 0?Bs(r._root,e):r._root}function Bs(r,e){return r=at(r),ie(r._path)===null?wk("child","path",e):Lv("child","path",e),new En(r._repo,Le(r._path,e))}function Hk(r,e){r=at(r),Yd("push",r._path),Dv("push",e,r._path,!0);const n=Fv(r._repo),s=Wk(n),l=Bs(r,s),u=Bs(r,s);let c;return c=Promise.resolve(u),l.then=c.then.bind(c),l.catch=c.then.bind(c,void 0),l}function $k(r){return Yd("remove",r._path),Gk(r,null)}function Gk(r,e){r=at(r),Yd("set",r._path),Dv("set",e,r._path,!1);const n=new Vs;return xk(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function ua(r,e){yk("update",e,r._path);const n=new Vs;return Ak(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}function Kk(r){r=at(r);const e=new Bv(()=>{}),n=new ca(e);return Pk(r._repo,r,n).then(s=>new Ws(s,new En(r._repo,r._path),r._queryParams.getIndex()))}class ca{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Bk("value",this,new Ws(e.snapshotNode,new En(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Vk(this,e,n):null}matches(e){return e instanceof ca?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qk(r,e,n,s,l){const u=new Bv(n,void 0),c=new ca(u);return Dk(r._repo,r,c),()=>Lk(r._repo,r,c)}function Qk(r,e,n,s){return qk(r,"value",e)}HT(En);QT(En);/**
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
 */const Yk="FIREBASE_DATABASE_EMULATOR_HOST",Zc={};let Jk=!1;function Xk(r,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),c=Ii(u);r.repoInfo_=new H_(e,c,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function Zk(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=Eg(u,l),f=c.repoInfo,p;typeof process<"u"&&Vm&&(p=Vm[Yk]),p?(u=`http://${p}?ns=${f.namespace}`,c=Eg(u,l),f=c.repoInfo):c.repoInfo.secure;const g=new o1(r.name,r.options,e);Ek("Invalid Firebase Database URL",c),le(c.path)||yn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=tN(f,r,g,new s1(r,n));return new nN(v,r)}function eN(r,e){const n=Zc[e];(!n||n[r.key]!==r)&&yn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Mk(r),delete n[r.key]}function tN(r,e,n,s){let l=Zc[e.name];l||(l={},Zc[e.name]=l);let u=l[r.toURLString()];return u&&yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new kk(r,Jk,n,s),l[r.toURLString()]=u,u}class nN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Nk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new En(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yn("Cannot call "+e+" on a deleted database.")}}function rN(r=Jg(),e){const n=cd(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=hE("database");s&&iN(n,...s)}return n}function iN(r,e,n,s={}){r=at(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Cr(s,u.repoInfo_.emulatorOptions))return;yn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new yl(yl.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:fE(s.mockUserToken,r.app.options.projectId);c=new yl(f)}Ii(e)&&(Hg(e),$g("Database",!0)),Xk(u,l,s,c)}/**
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
 */function sN(r){VI(ki),fi(new Sr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return Zk(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Yn(Hm,$m,r),Yn(Hm,$m,"esm2017")}gn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};gn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};sN();const oN={apiKey:"AIzaSyBP4VP0zfXMDGhWmparJAnue-2mIpgDWfE",authDomain:"budgetduo-96f22.firebaseapp.com",databaseURL:"https://budgetduo-96f22-default-rtdb.firebaseio.com",projectId:"budgetduo-96f22",storageBucket:"budgetduo-96f22.firebasestorage.app",messagingSenderId:"44840005819",appId:"1:44840005819:web:5344367cda9a500a4a799e"},Vv=Yg(oN),Ar=rN(Vv),Tc=jI(Vv),lN=new hn,Hv=M.createContext(null);function aN({children:r}){const[e,n]=M.useState(null),[s,l]=M.useState(!0);M.useEffect(()=>NS(Tc,p=>{n(p),l(!1)}),[]);const u=async()=>{try{await qS(Tc,lN)}catch(f){throw console.error("Erreur de connexion:",f),f}},c=async()=>{try{await RS(Tc)}catch(f){console.error("Erreur de déconnexion:",f)}};return s?R.jsxs("div",{className:"loading-screen",children:[R.jsx("div",{className:"loading-spinner"}),R.jsx("p",{children:"Chargement..."})]}):R.jsx(Hv.Provider,{value:{user:e,login:u,logout:c},children:r})}function nh(){const r=M.useContext(Hv);if(!r)throw new Error("useAuth doit être utilisé dans un AuthProvider");return r}const kc=600,Nc=600,uN=.6;function cN(r){return new Promise((e,n)=>{const s=new FileReader;s.onload=l=>{const u=new Image;u.onload=()=>{const c=document.createElement("canvas");let{width:f,height:p}=u;f>p?f>kc&&(p=Math.round(p*kc/f),f=kc):p>Nc&&(f=Math.round(f*Nc/p),p=Nc),c.width=f,c.height=p,c.getContext("2d").drawImage(u,0,0,f,p);const v=c.toDataURL("image/jpeg",uN);e(v)},u.onerror=()=>n(new Error("Impossible de charger l'image")),u.src=l.target.result},s.onerror=()=>n(new Error("Impossible de lire le fichier")),s.readAsDataURL(r)})}const Or="stockduloft/items";async function dN({uniqueId:r,description:e,price:n,photoFile:s,category:l}){let u="";s&&(u=await cN(s));const c={uniqueId:r.toUpperCase().trim(),description:e.trim(),price:parseFloat(n),photoBase64:u,category:l||"",status:"inventory",consignmentStore:"",saleDate:null,sellerName:"",createdAt:Date.now(),updatedAt:Date.now()},f=xr(Ar,Or),p=Hk(f);return await ua(p,c),{id:p.key,...c}}async function hN(r){const e=xr(Ar,`${Or}/${r}`);await $k(e)}async function fN(r){const e=xr(Ar,Or),n=await Kk(e);if(!n.exists())return null;const s=r.toUpperCase().trim();let l=null;return n.forEach(u=>{const c=u.val();c.uniqueId===s&&(l={id:u.key,...c})}),l}async function pN(r,e,n=null){const s=xr(Ar,`${Or}/${r}`);await ua(s,{status:"sold",sellerName:e.trim(),saleDate:n||new Date().toISOString().split("T")[0],updatedAt:Date.now()})}async function mN(r,e){const n=xr(Ar,`${Or}/${r}`);await ua(n,{status:"consignment",consignmentStore:e.trim(),updatedAt:Date.now()})}async function gN(r){const e=xr(Ar,`${Or}/${r}`);await ua(e,{status:"inventory",consignmentStore:"",saleDate:null,sellerName:"",updatedAt:Date.now()})}function _N(r){const e=xr(Ar,Or);return Qk(e,s=>{const l=[];s.exists()&&s.forEach(u=>{l.push({id:u.key,...u.val()})}),l.sort((u,c)=>(c.createdAt||0)-(u.createdAt||0)),r(l)})}const Sg={all:"Tous",inventory:"En stock",consignment:"En consigne",sold:"Vendus"},vN={inventory:"#2ecc71",consignment:"#f39c12",sold:"#e74c3c"};function yN(){const[r,e]=M.useState([]),[n,s]=M.useState("all"),[l,u]=M.useState(""),[c,f]=M.useState(null),[p,g]=M.useState(!0);M.useEffect(()=>_N(x=>{e(x),g(!1)}),[]);const v=r.filter(N=>{var V,G;const x=n==="all"||N.status===n,q=l===""||((V=N.uniqueId)==null?void 0:V.toLowerCase().includes(l.toLowerCase()))||((G=N.description)==null?void 0:G.toLowerCase().includes(l.toLowerCase()));return x&&q}),_={all:r.length,inventory:r.filter(N=>N.status==="inventory").length,consignment:r.filter(N=>N.status==="consignment").length,sold:r.filter(N=>N.status==="sold").length},w=async N=>{confirm(`Remettre "${N.uniqueId}" en inventaire?`)&&(await gN(N.id),f(null))},P=async N=>{confirm(`Supprimer définitivement "${N.uniqueId}"?`)&&(await hN(N.id),f(null))},A=async N=>{const x=prompt("Nom du commerce pour la consigne:");x&&(await mN(N.id,x),f(null))};return p?R.jsxs("div",{className:"page-loading",children:[R.jsx("div",{className:"loading-spinner"}),R.jsx("p",{children:"Chargement de l'inventaire..."})]}):R.jsxs("div",{className:"page inventory-page",children:[R.jsxs("div",{className:"search-bar",children:[R.jsx("input",{type:"text",placeholder:"🔍 Rechercher par # ou description...",value:l,onChange:N=>u(N.target.value),className:"search-input"}),l&&R.jsx("button",{className:"search-clear",onClick:()=>u(""),children:"✕"})]}),R.jsx("div",{className:"status-filters",children:Object.entries(Sg).map(([N,x])=>R.jsxs("button",{className:`filter-btn ${n===N?"active":""}`,onClick:()=>s(N),children:[x,R.jsx("span",{className:"filter-count",children:_[N]})]},N))}),v.length===0?R.jsxs("div",{className:"empty-state",children:[R.jsx("p",{className:"empty-icon",children:"📭"}),R.jsx("p",{children:l?"Aucun résultat trouvé":"Aucun item dans cette catégorie"})]}):R.jsx("div",{className:"items-list",children:v.map(N=>{var x;return R.jsxs("div",{className:`item-card ${c===N.id?"expanded":""}`,onClick:()=>f(c===N.id?null:N.id),children:[R.jsxs("div",{className:"item-row",children:[R.jsx("div",{className:"item-photo",children:N.photoBase64?R.jsx("img",{src:N.photoBase64,alt:N.description,loading:"lazy"}):R.jsx("div",{className:"photo-placeholder",children:"📷"})}),R.jsxs("div",{className:"item-info",children:[R.jsxs("div",{className:"item-id-row",children:[R.jsxs("span",{className:"item-unique-id",children:["#",N.uniqueId]}),R.jsx("span",{className:"item-status-badge",style:{backgroundColor:vN[N.status]},children:Sg[N.status]})]}),R.jsx("p",{className:"item-description",children:N.description}),R.jsxs("div",{className:"item-meta",children:[R.jsxs("span",{className:"item-price",children:[(x=N.price)==null?void 0:x.toFixed(2)," $"]}),N.status==="consignment"&&R.jsxs("span",{className:"item-consignment",children:["📍 ",N.consignmentStore]}),N.status==="sold"&&R.jsxs("span",{className:"item-sold-info",children:[N.saleDate," — ",N.sellerName]})]})]})]}),c===N.id&&R.jsxs("div",{className:"item-actions",onClick:q=>q.stopPropagation(),children:[N.status==="inventory"&&R.jsx("button",{className:"btn btn-small btn-consign",onClick:()=>A(N),children:"📍 Consigne"}),(N.status==="consignment"||N.status==="sold")&&R.jsx("button",{className:"btn btn-small btn-return",onClick:()=>w(N),children:"📦 Retour inventaire"}),R.jsx("button",{className:"btn btn-small btn-delete",onClick:()=>P(N),children:"🗑️ Supprimer"})]})]},N.id)})})]})}function wN(){const r=id(),e=M.useRef(null),[n,s]=M.useState({uniqueId:"",description:"",price:"",category:""}),[l,u]=M.useState(null),[c,f]=M.useState(null),[p,g]=M.useState(!1),[v,_]=M.useState(""),w=q=>{const{name:V,value:G}=q.target;s(Q=>({...Q,[V]:G}))},P=q=>{var Q;const V=(Q=q.target.files)==null?void 0:Q[0];if(!V)return;u(V);const G=new FileReader;G.onload=ge=>f(ge.target.result),G.readAsDataURL(V)},A=()=>{var q;(q=e.current)==null||q.click()},N=()=>{u(null),f(null),e.current&&(e.current.value="")},x=async q=>{if(q.preventDefault(),_(""),!n.uniqueId.trim()){_("Le numéro unique est requis");return}if(!n.price||parseFloat(n.price)<=0){_("Le prix doit être supérieur à 0");return}g(!0);try{await dN({uniqueId:n.uniqueId,description:n.description,price:n.price,category:n.category,photoFile:l}),r("/")}catch(V){console.error("Erreur:",V),_("Erreur lors de la sauvegarde. Réessayez.")}finally{g(!1)}};return R.jsxs("div",{className:"page add-item-page",children:[R.jsx("h2",{className:"page-title",children:"Nouvel item"}),R.jsxs("form",{onSubmit:x,className:"add-form",children:[R.jsxs("div",{className:"photo-section",children:[R.jsx("input",{ref:e,type:"file",accept:"image/*",capture:"environment",onChange:P,className:"hidden-input"}),c?R.jsxs("div",{className:"photo-preview-container",children:[R.jsx("img",{src:c,alt:"Aperçu",className:"photo-preview"}),R.jsx("button",{type:"button",className:"photo-remove",onClick:N,children:"✕"})]}):R.jsxs("button",{type:"button",className:"photo-capture-btn",onClick:A,children:[R.jsx("span",{className:"capture-icon",children:"📷"}),R.jsx("span",{children:"Prendre une photo"})]})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{className:"form-label",children:"Numéro unique *"}),R.jsx("input",{type:"text",name:"uniqueId",value:n.uniqueId,onChange:w,placeholder:"Ex: SDL-001",className:"form-input",autoComplete:"off",style:{textTransform:"uppercase"}})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{className:"form-label",children:"Description"}),R.jsx("input",{type:"text",name:"description",value:n.description,onChange:w,placeholder:"Ex: Sac à main fleuri",className:"form-input"})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{className:"form-label",children:"Prix ($) *"}),R.jsx("input",{type:"number",name:"price",value:n.price,onChange:w,placeholder:"0.00",className:"form-input",step:"0.01",min:"0",inputMode:"decimal"})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{className:"form-label",children:"Catégorie"}),R.jsx("input",{type:"text",name:"category",value:n.category,onChange:w,placeholder:"Ex: Sacs, Vêtements, Accessoires...",className:"form-input"})]}),v&&R.jsx("p",{className:"error-text",children:v}),R.jsxs("div",{className:"form-actions",children:[R.jsx("button",{type:"submit",className:"btn btn-primary btn-full",disabled:p,children:p?"Sauvegarde en cours...":"✓ Ajouter à l'inventaire"}),R.jsx("button",{type:"button",className:"btn btn-secondary btn-full",onClick:()=>r("/"),children:"Annuler"})]})]})]})}function EN(){var Q,ge,ye;const{user:r}=nh(),[e,n]=M.useState(""),[s,l]=M.useState(null),[u,c]=M.useState(((Q=r==null?void 0:r.displayName)==null?void 0:Q.split(" ")[0])||""),[f,p]=M.useState(new Date().toISOString().split("T")[0]),[g,v]=M.useState(!1),[_,w]=M.useState(!1),[P,A]=M.useState(""),[N,x]=M.useState(""),q=async ue=>{if(ue==null||ue.preventDefault(),!!e.trim()){v(!0),A(""),x(""),l(null);try{const we=await fN(e);if(!we){A(`Aucun item trouvé avec le numéro "${e.toUpperCase()}"`);return}if(we.status==="sold"){A(`Cet item est déjà vendu (${we.saleDate} par ${we.sellerName})`);return}l(we)}catch(we){console.error(we),A("Erreur de recherche. Réessayez.")}finally{v(!1)}}},V=async()=>{if(!(!s||!u.trim())){w(!0),A("");try{await pN(s.id,u,f),x(`✓ ${s.uniqueId} vendu pour ${s.price.toFixed(2)} $ par ${u}`),l(null),n("")}catch(ue){console.error(ue),A("Erreur lors de la vente. Réessayez.")}finally{w(!1)}}},G=()=>{n(""),l(null),A(""),x("")};return R.jsxs("div",{className:"page sale-page",children:[R.jsx("h2",{className:"page-title",children:"💰 Vente rapide"}),R.jsx("form",{onSubmit:q,className:"sale-search-form",children:R.jsxs("div",{className:"sale-search-row",children:[R.jsx("input",{type:"text",value:e,onChange:ue=>n(ue.target.value.toUpperCase()),placeholder:"Numéro de l'item (ex: SDL-001)",className:"form-input sale-search-input",autoComplete:"off",autoFocus:!0}),R.jsx("button",{type:"submit",className:"btn btn-primary sale-search-btn",disabled:g||!e.trim(),children:g?"...":"🔍"})]})}),N&&R.jsxs("div",{className:"sale-success",children:[R.jsx("p",{children:N}),R.jsx("button",{className:"btn btn-primary btn-full",onClick:G,children:"Prochaine vente"})]}),P&&R.jsxs("div",{className:"sale-error",children:[R.jsx("p",{children:P}),R.jsx("button",{className:"btn btn-secondary",onClick:G,children:"Réessayer"})]}),s&&R.jsxs("div",{className:"sale-confirmation",children:[R.jsxs("div",{className:"sale-item-card",children:[s.photoBase64?R.jsx("img",{src:s.photoBase64,alt:s.description,className:"sale-item-photo"}):R.jsx("div",{className:"sale-photo-placeholder",children:"📷"}),R.jsxs("div",{className:"sale-item-details",children:[R.jsxs("span",{className:"sale-item-id",children:["#",s.uniqueId]}),R.jsx("p",{className:"sale-item-desc",children:s.description}),R.jsxs("p",{className:"sale-item-price",children:[(ge=s.price)==null?void 0:ge.toFixed(2)," $"]}),s.status==="consignment"&&R.jsxs("p",{className:"sale-item-consign",children:["📍 En consigne: ",s.consignmentStore]})]})]}),R.jsxs("div",{className:"sale-form",children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{className:"form-label",children:"Vendeuse"}),R.jsx("input",{type:"text",value:u,onChange:ue=>c(ue.target.value),className:"form-input",placeholder:"Nom de la vendeuse"})]}),R.jsxs("div",{className:"form-group",children:[R.jsx("label",{className:"form-label",children:"Date de vente"}),R.jsx("input",{type:"date",value:f,onChange:ue=>p(ue.target.value),className:"form-input"})]}),R.jsxs("div",{className:"sale-actions",children:[R.jsx("button",{className:"btn btn-sell btn-full",onClick:V,disabled:_||!u.trim(),children:_?"En cours...":`Confirmer la vente — ${(ye=s.price)==null?void 0:ye.toFixed(2)} $`}),R.jsx("button",{className:"btn btn-secondary btn-full",onClick:G,children:"Annuler"})]})]})]}),!s&&!P&&!N&&R.jsxs("div",{className:"sale-hint",children:[R.jsx("p",{className:"hint-icon",children:"🏷️"}),R.jsxs("p",{children:["Entre le numéro de l'étiquette",R.jsx("br",{}),"pour enregistrer une vente"]})]})]})}function CN(){const{login:r}=nh(),[e,n]=M.useState(""),[s,l]=M.useState(!1),u=async()=>{n(""),l(!0);try{await r()}catch{n("Erreur de connexion. Réessayez.")}finally{l(!1)}};return R.jsx("div",{className:"login-page",children:R.jsxs("div",{className:"login-card",children:[R.jsx("div",{className:"login-logo",children:"✂️"}),R.jsx("h1",{className:"login-title",children:"Stock du Loft"}),R.jsxs("p",{className:"login-subtitle",children:["Gestion d'inventaire pour",R.jsx("br",{}),"L'Atelier du Loft"]}),R.jsx("button",{onClick:u,className:"btn btn-primary btn-login",disabled:s,children:s?"Connexion...":"🔑 Se connecter avec Google"}),e&&R.jsx("p",{className:"error-text",children:e})]})})}function SN(){var n;const{user:r,logout:e}=nh();return r?R.jsxs("div",{className:"app",children:[R.jsx("header",{className:"app-header",children:R.jsxs("div",{className:"header-content",children:[R.jsxs("h1",{className:"app-title",children:[R.jsx("span",{className:"title-icon",children:"✂️"}),"Stock du Loft"]}),R.jsxs("div",{className:"header-user",children:[R.jsx("span",{className:"user-name",children:(n=r.displayName)==null?void 0:n.split(" ")[0]}),R.jsx("button",{onClick:e,className:"btn-logout",title:"Déconnexion",children:"↗"})]})]})}),R.jsx("main",{className:"app-main",children:R.jsxs(B0,{children:[R.jsx(Es,{path:"/",element:R.jsx(yN,{})}),R.jsx(Es,{path:"/add",element:R.jsx(wN,{})}),R.jsx(Es,{path:"/sale",element:R.jsx(EN,{})}),R.jsx(Es,{path:"*",element:R.jsx(z0,{to:"/",replace:!0})})]})}),R.jsxs("nav",{className:"bottom-nav",children:[R.jsxs(cc,{to:"/",end:!0,className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[R.jsx("span",{className:"nav-icon",children:"📦"}),R.jsx("span",{className:"nav-label",children:"Inventaire"})]}),R.jsxs(cc,{to:"/sale",className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[R.jsx("span",{className:"nav-icon",children:"💰"}),R.jsx("span",{className:"nav-label",children:"Vente"})]}),R.jsxs(cc,{to:"/add",className:({isActive:s})=>`nav-item ${s?"active":""}`,children:[R.jsx("span",{className:"nav-icon",children:"➕"}),R.jsx("span",{className:"nav-label",children:"Ajouter"})]})]})]}):R.jsx(CN,{})}function IN(){return R.jsx(aN,{children:R.jsx(SN,{})})}Jw.createRoot(document.getElementById("root")).render(R.jsx(Tg.StrictMode,{children:R.jsx(Y0,{children:R.jsx(IN,{})})}));
