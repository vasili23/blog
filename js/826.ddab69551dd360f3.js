"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[826],{43751:function(e,t,n){var r=n(67294);t.Z=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",width:24,height:24},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M6 18 18 6M6 6l12 12"}))}},60445:function(e,t,n){n.d(t,{V:function(){return te}});var r=n(67294),o=n(32984),l=n(12351),i=n(23784),u=n(61363),a=n(64103),c=n(19946),s=n(84575),f=n(3855);function d(e,t,n,o){let l=(0,f.E)(n);(0,r.useEffect)((()=>{function n(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}var p=n(14879),m=n(15466);function v(...e){return(0,r.useMemo)((()=>(0,m.r)(...e)),[...e])}var g=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(g||{}),h=n(16723);let E=new Set,w=new Map;function y(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function b(e){let t=w.get(e);!t||(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function C(e,t=!0){(0,h.e)((()=>{if(!t||!e.current)return;let n=e.current,r=(0,m.r)(n);if(r){E.add(n);for(let e of w.keys())e.contains(n)&&(b(e),w.delete(e));return r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement){for(let t of E)if(e.contains(t))return;1===E.size&&(w.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),y(e))}})),()=>{if(E.delete(n),E.size>0)r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement&&!w.has(e)){for(let t of E)if(e.contains(t))return;w.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),y(e)}}));else for(let e of w.keys())b(e),w.delete(e)}}}),[t])}var T=n(73935);let P=(0,r.createContext)(!1);function S(e){return r.createElement(P.Provider,{value:e.force},e.children)}var A=n(82180);let O=r.Fragment,k=(0,l.yV)((function(e,t){let n=e,o=(0,r.useRef)(null),u=(0,i.T)((0,i.h)((e=>{o.current=e})),t),a=v(o),c=function(e){let t=(0,r.useContext)(P),n=(0,r.useContext)(R),o=v(e),[l,i]=(0,r.useState)((()=>{if(!t&&null!==n||"undefined"==typeof window)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==l&&(null!=o&&o.body.contains(l)||null==o||o.body.appendChild(l))}),[l,o]),(0,r.useEffect)((()=>{t||null!==n&&i(n.current)}),[n,i,t]),l}(o),[s]=(0,r.useState)((()=>{var e;return"undefined"==typeof window?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null})),f=(0,A.H)();return(0,h.e)((()=>{if(c&&s)return c.appendChild(s),()=>{var e;!c||!s||(c.removeChild(s),c.childNodes.length<=0&&(null==(e=c.parentElement)||e.removeChild(c)))}}),[c,s]),f&&c&&s?(0,T.createPortal)((0,l.sY)({ourProps:{ref:u},theirProps:n,defaultTag:O,name:"Portal"}),s):null})),D=r.Fragment,R=(0,r.createContext)(null),N=(0,l.yV)((function(e,t){let{target:n,...o}=e,u={ref:(0,i.T)(t)};return r.createElement(R.Provider,{value:n},(0,l.sY)({ourProps:u,theirProps:o,defaultTag:D,name:"Popover.Group"}))})),M=Object.assign(k,{Group:N}),x=(0,r.createContext)(null);function F(){let e=(0,r.useContext)(x);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,F),e}return e}function L(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,r.useCallback)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n})))),[]),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(x.Provider,{value:o},e.children)}),[t])]}let j=(0,l.yV)((function(e,t){let n=F(),r=`headlessui-description-${(0,c.M)()}`,o=(0,i.T)(t);(0,h.e)((()=>n.register(r)),[r,n.register]);let u=e,a={ref:o,...n.props,id:r};return(0,l.sY)({ourProps:a,theirProps:u,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}));var I=n(16567);let H=(0,r.createContext)((()=>{}));H.displayName="StackContext";var Y=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Y||{});function $({children:e,onUpdate:t,type:n,element:o}){let l=(0,r.useContext)(H),i=(0,r.useCallback)(((...e)=>{null==t||t(...e),l(...e)}),[l,t]);return(0,h.e)((()=>(i(0,n,o),()=>i(1,n,o))),[i,n,o]),r.createElement(H.Provider,{value:i},e)}var V,U=n(4503),B=((V=B||{})[V.Open=0]="Open",V[V.Closed=1]="Closed",V),_=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(_||{});let W={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},q=(0,r.createContext)(null);function G(e){let t=(0,r.useContext)(q);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}function z(e,t){return(0,o.E)(t.type,W,e,t)}q.displayName="DialogContext";let Z=l.AN.RenderStrategy|l.AN.Static,J=(0,l.yV)((function(e,t){let{open:n,onClose:a,initialFocus:f,__demoMode:h=!1,...E}=e,[w,y]=(0,r.useState)(0),b=(0,I.oJ)();void 0===n&&null!==b&&(n=(0,o.E)(b,{[I.ZM.Open]:!0,[I.ZM.Closed]:!1}));let T=(0,r.useRef)(new Set),P=(0,r.useRef)(null),O=(0,i.T)(P,t),k=v(P),D=e.hasOwnProperty("open")||null!==b,R=e.hasOwnProperty("onClose");if(!D&&!R)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!D)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!R)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof n)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if("function"!=typeof a)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let N=n?0:1,[x,F]=(0,r.useReducer)(z,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),j=(0,r.useCallback)((()=>a(!1)),[a]),H=(0,r.useCallback)((e=>F({type:0,id:e})),[F]),V=!!(0,A.H)()&&!h&&0===N,B=w>1,_=null!==(0,r.useContext)(q),W=function(e,t=30,{initialFocus:n,containers:o}={}){let l=(0,r.useRef)(null),i=(0,r.useRef)(null),a=(0,p.t)(),c=Boolean(16&t),f=Boolean(2&t),m=v(e);return(0,r.useEffect)((()=>{!c||l.current||(l.current=null==m?void 0:m.activeElement)}),[c,m]),(0,r.useEffect)((()=>{if(c)return()=>{(0,s.C5)(l.current),l.current=null}}),[c]),(0,r.useEffect)((()=>{if(!f)return;let t=e.current;if(!t)return;let r=null==m?void 0:m.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===r)return void(i.current=r)}else if(t.contains(r))return void(i.current=r);null!=n&&n.current?(0,s.C5)(n.current):(0,s.jA)(t,s.TO.First)===s.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.current=null==m?void 0:m.activeElement}),[e,n,f,m]),d(null==m?void 0:m.defaultView,"keydown",(n=>{!(4&t)||!e.current||n.key===u.R.Tab&&(n.preventDefault(),(0,s.jA)(e.current,(n.shiftKey?s.TO.Previous:s.TO.Next)|s.TO.WrapAround)===s.fE.Success&&(i.current=null==m?void 0:m.activeElement))})),d(null==m?void 0:m.defaultView,"focus",(n=>{if(!(8&t))return;let r=new Set(null==o?void 0:o.current);if(r.add(e),!r.size)return;let l=i.current;if(!l||!a.current)return;let u=n.target;u&&u instanceof HTMLElement?function(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}(r,u)?(i.current=u,(0,s.C5)(u)):(n.preventDefault(),n.stopPropagation(),(0,s.C5)(l)):(0,s.C5)(i.current)}),!0),l}(P,V?(0,o.E)(B?"parent":"leaf",{parent:g.RestoreFocus,leaf:g.All&~g.FocusLock}):g.None,{initialFocus:f,containers:T});C(P,!!B&&V),(0,U.O)((()=>{var e,t;return[...Array.from(null!=(e=null==k?void 0:k.querySelectorAll("body > *"))?e:[]).filter((e=>!(!(e instanceof HTMLElement)||e.contains(W.current)||x.panelRef.current&&e.contains(x.panelRef.current)))),null!=(t=x.panelRef.current)?t:P.current]}),(()=>{0===N&&(B||j())}),U.A.IgnoreScrollbars),d(null==k?void 0:k.defaultView,"keydown",(e=>{e.key===u.R.Escape&&0===N&&(B||(e.preventDefault(),e.stopPropagation(),j()))})),(0,r.useEffect)((()=>{var e;if(0!==N||_)return;let t=(0,m.r)(P);if(!t)return;let n=t.documentElement,r=null!=(e=t.defaultView)?e:window,o=n.style.overflow,l=n.style.paddingRight,i=r.innerWidth-n.clientWidth;return n.style.overflow="hidden",n.style.paddingRight=`${i}px`,()=>{n.style.overflow=o,n.style.paddingRight=l}}),[N,_]),(0,r.useEffect)((()=>{if(0!==N||!P.current)return;let e=new IntersectionObserver((e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&j()}));return e.observe(P.current),()=>e.disconnect()}),[N,P,j]);let[G,J]=L(),X=`headlessui-dialog-${(0,c.M)()}`,K=(0,r.useMemo)((()=>[{dialogState:N,close:j,setTitleId:H},x]),[N,x,j,H]),Q=(0,r.useMemo)((()=>({open:0===N})),[N]),ee={ref:O,id:X,role:"dialog","aria-modal":0===N||void 0,"aria-labelledby":x.titleId,"aria-describedby":G,onClick(e){e.stopPropagation()}};return r.createElement($,{type:"Dialog",element:P,onUpdate:(0,r.useCallback)(((e,t,n)=>{"Dialog"===t&&(0,o.E)(e,{[Y.Add](){T.current.add(n),y((e=>e+1))},[Y.Remove](){T.current.add(n),y((e=>e-1))}})}),[])},r.createElement(S,{force:!0},r.createElement(M,null,r.createElement(q.Provider,{value:K},r.createElement(M.Group,{target:P},r.createElement(S,{force:!1},r.createElement(J,{slot:Q,name:"Dialog.Description"},(0,l.sY)({ourProps:ee,theirProps:E,slot:Q,defaultTag:"div",features:Z,visible:0===N,name:"Dialog"}))))))))})),X=(0,l.yV)((function(e,t){let[{dialogState:n,close:o}]=G("Dialog.Overlay"),u=(0,i.T)(t),s=`headlessui-dialog-overlay-${(0,c.M)()}`,f=(0,r.useCallback)((e=>{if(e.target===e.currentTarget){if((0,a.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),o()}}),[o]),d=(0,r.useMemo)((()=>({open:0===n})),[n]);return(0,l.sY)({ourProps:{ref:u,id:s,"aria-hidden":!0,onClick:f},theirProps:e,slot:d,defaultTag:"div",name:"Dialog.Overlay"})})),K=(0,l.yV)((function(e,t){let[{dialogState:n},o]=G("Dialog.Backdrop"),u=(0,i.T)(t),a=`headlessui-dialog-backdrop-${(0,c.M)()}`;(0,r.useEffect)((()=>{if(null===o.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[o.panelRef]);let s=(0,r.useMemo)((()=>({open:0===n})),[n]);return r.createElement(S,{force:!0},r.createElement(M,null,(0,l.sY)({ourProps:{ref:u,id:a,"aria-hidden":!0},theirProps:e,slot:s,defaultTag:"div",name:"Dialog.Backdrop"})))})),Q=(0,l.yV)((function(e,t){let[{dialogState:n},o]=G("Dialog.Panel"),u=(0,i.T)(t,o.panelRef),a=`headlessui-dialog-panel-${(0,c.M)()}`,s=(0,r.useMemo)((()=>({open:0===n})),[n]);return(0,l.sY)({ourProps:{ref:u,id:a},theirProps:e,slot:s,defaultTag:"div",name:"Dialog.Panel"})})),ee=(0,l.yV)((function(e,t){let[{dialogState:n,setTitleId:o}]=G("Dialog.Title"),u=`headlessui-dialog-title-${(0,c.M)()}`,a=(0,i.T)(t);(0,r.useEffect)((()=>(o(u),()=>o(null))),[u,o]);let s=(0,r.useMemo)((()=>({open:0===n})),[n]);return(0,l.sY)({ourProps:{ref:a,id:u},theirProps:e,slot:s,defaultTag:"h2",name:"Dialog.Title"})})),te=Object.assign(J,{Backdrop:K,Panel:Q,Overlay:X,Title:ee,Description:j})},61363:function(e,t,n){n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},19946:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(67294),l=n(16723),i=n(82180);let u=0;function a(){return++u}let c=null!=(r=o.useId)?r:function(){let e=(0,i.H)(),[t,n]=o.useState(e?a:null);return(0,l.e)((()=>{null===t&&n(a())}),[t]),null!=t?""+t:void 0}},14879:function(e,t,n){n.d(t,{t:function(){return l}});var r=n(67294),o=n(16723);function l(){let e=(0,r.useRef)(!1);return(0,o.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},16723:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(67294);const o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},3855:function(e,t,n){n.d(t,{E:function(){return l}});var r=n(67294),o=n(16723);function l(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},4503:function(e,t,n){n.d(t,{A:function(){return a},O:function(){return c}});var r=n(67294),o=n(81021),l=n(3855);function i(e,t,n){let o=(0,l.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}var u,a=((u=a||{})[u.None=1]="None",u[u.IgnoreScrollbars=2]="IgnoreScrollbars",u);function c(e,t,n=1){let u=(0,r.useRef)(!1),a=(0,l.E)((r=>{if(u.current)return;u.current=!0,(0,o.Y)((()=>{u.current=!1}));let l=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),i=r.target;if(i.ownerDocument.documentElement.contains(i)){if(2==(2&n)){let e=20,t=i.ownerDocument.documentElement;if(r.clientX>t.clientWidth-e||r.clientX<e||r.clientY>t.clientHeight-e||r.clientY<e)return}for(let e of l){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(i))return}return t(r,i)}}));i("pointerdown",((...e)=>a.current(...e))),i("mousedown",((...e)=>a.current(...e)))}},82180:function(e,t,n){n.d(t,{H:function(){return l}});var r=n(67294);let o={serverHandoffComplete:!1};function l(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),e}},23784:function(e,t,n){n.d(t,{T:function(){return i},h:function(){return l}});var r=n(67294);let o=Symbol();function l(e,t=!0){return Object.assign(e,{[o]:t})}function i(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,r.useCallback)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}),[t]);return e.every((e=>null==e||(null==e?void 0:e[o])))?void 0:n}},16567:function(e,t,n){n.d(t,{ZM:function(){return i},oJ:function(){return u},up:function(){return a}});var r=n(67294);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var l,i=((l=i||{})[l.Open=0]="Open",l[l.Closed=1]="Closed",l);function u(){return(0,r.useContext)(o)}function a({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},64103:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},84575:function(e,t,n){n.d(t,{C5:function(){return f},TO:function(){return u},fE:function(){return a},jA:function(){return m},z2:function(){return p}});let r=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var o,l,i,u=((i=u||{})[i.First=1]="First",i[i.Previous=2]="Previous",i[i.Next=4]="Next",i[i.Last=8]="Last",i[i.WrapAround=16]="WrapAround",i[i.NoScroll=32]="NoScroll",i),a=((l=a||{})[l.Error=0]="Error",l[l.Overflow=1]="Overflow",l[l.Success=2]="Success",l[l.Underflow=3]="Underflow",l),c=((o=c||{})[o.Previous=-1]="Previous",o[o.Next=1]="Next",o),s=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(s||{});function f(e){null==e||e.focus({preventScroll:!0})}let d=["textarea","input"].join(",");function p(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function m(e,t){let n,o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?p(e):function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(r))}(e),i=o.activeElement,u=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,l.indexOf(i))-1;if(4&t)return Math.max(0,l.indexOf(i))+1;if(8&t)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},s=0,f=l.length;do{if(s>=f||s+f<=0)return 0;let e=a+s;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}n=l[e],null==n||n.focus(c),s+=u}while(n!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,d))&&n}(n)&&n.select(),n.hasAttribute("tabindex")||n.setAttribute("tabindex","0"),2}},32984:function(e,t,n){function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},81021:function(e,t,n){function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:function(){return r}})},15466:function(e,t,n){function r(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}n.d(t,{r:function(){return r}})},12351:function(e,t,n){n.d(t,{AN:function(){return u},l4:function(){return a},oA:function(){return p},sY:function(){return c},yV:function(){return d}});var r,o,l=n(67294),i=n(32984),u=((o=u||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),a=((r=a||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:u}){let a=f(t,e);if(l)return s(a,n,r,u);let c=null!=o?o:0;if(2&c){let{static:e=!1,...t}=a;if(e)return s(t,n,r,u)}if(1&c){let{unmount:e=!0,...t}=a;return(0,i.E)(e?0:1,{0:()=>null,1:()=>s({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return s(a,n,r,u)}function s(e,t={},n,r){let{as:o=n,children:i,refName:u="ref",...a}=m(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},s="function"==typeof i?i(t):i;if(a.className&&"function"==typeof a.className&&(a.className=a.className(t)),o===l.Fragment&&Object.keys(p(a)).length>0){if(!(0,l.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,l.cloneElement)(s,Object.assign({},f(s.props,p(m(a,["ref"]))),c))}return(0,l.createElement)(o,Object.assign({},m(a,["ref"]),o!==l.Fragment&&c),s)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t){let r=n[e];for(let e of r){if(t.defaultPrevented)return;e(t)}}});return t}function d(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function m(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);