(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5339:function(e,t,n){Promise.resolve().then(n.t.bind(n,4724,23)),Promise.resolve().then(n.t.bind(n,4244,23)),Promise.resolve().then(n.bind(n,209)),Promise.resolve().then(n.bind(n,4780)),Promise.resolve().then(n.t.bind(n,806,23)),Promise.resolve().then(n.t.bind(n,6433,23)),Promise.resolve().then(n.bind(n,7316)),Promise.resolve().then(n.bind(n,4560)),Promise.resolve().then(n.t.bind(n,7580,23)),Promise.resolve().then(n.bind(n,3050)),Promise.resolve().then(n.bind(n,3965))},3443:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return l},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?o[l]=!!n[e]:o.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":l&&(o.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),o}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let c=t.map(o).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(l(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(a-i.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return v},default:function(){return g}});let r=n(1024),o=n(8533),l=r._(n(4887)),a=o._(n(2265)),i=n(3305),s=n(3443),c=n(4913),u=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:l,children:a="",strategy:i="afterInteractive",onError:c,stylesheets:h}=e,m=n||t;if(m&&d.has(m))return;if(u.has(t)){d.add(m),u.get(t).then(r,c);return}let v=()=>{o&&o(),d.add(m)},_=document.createElement("script"),g=new Promise((e,t)=>{_.addEventListener("load",function(t){e(),r&&r.call(this,t),v()}),_.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(l?(_.innerHTML=l.__html||"",v()):a?(_.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",v()):t&&(_.src=t,u.set(t,g)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();_.setAttribute(e,r)}"worker"===i&&_.setAttribute("type","text/partytown"),_.setAttribute("data-nscript",i),h&&p(h),document.body.appendChild(_)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function v(e){e.forEach(m),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function _(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:u,stylesheets:f,...p}=e,{updateScripts:m,scripts:v,getIsSsr:_,appDir:g,nonce:y}=(0,a.useContext)(i.HeadManagerContext),w=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;w.current||(o&&e&&d.has(e)&&o(),w.current=!0)},[o,t,n]);let b=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!b.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),b.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(m?(v[s]=(v[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:u,...p}]),m(v)):_&&_()?d.add(t||n):_&&!_()&&h(e)),g){if(f&&f.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),a.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===s&&n&&l.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(_,"__nextScript",{value:!0});let g=_;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},209:function(e,t,n){"use strict";n.r(t),n.d(t,{AdminBar:function(){return p}});var r=n(7437),o=n(2265),l=n(4033),a=n(3135),i=n(7992),s=n(1120),c=n(1006),u=n.n(c);let d={pages:{singular:"Page",plural:"Pages"},posts:{singular:"Post",plural:"Posts"},projects:{singular:"Project",plural:"Projects"}},f=()=>(0,r.jsx)("span",{children:"Dashboard"}),p=e=>{var t,n,c;let{adminBarProps:p}=e||{},h=(0,l.useSelectedLayoutSegments)(),m=(null==d?void 0:d[null==h?void 0:h[1]])?null==h?void 0:h[1]:"pages",[v,_]=o.useState(!1),{user:g}=(0,i.a)();(0,o.useEffect)(()=>{g&&_(!0)},[g]);let y=null==g?void 0:null===(t=g.roles)||void 0===t?void 0:t.includes("admin");return y?(0,r.jsx)("div",{className:[u().adminBar,v&&u().show].filter(Boolean).join(" "),children:(0,r.jsx)(s.T,{className:u().blockContainer,children:(0,o.createElement)(a.PayloadAdminBar,{...p,collection:m,collectionLabels:{singular:(null===(n=d[m])||void 0===n?void 0:n.singular)||"Page",plural:(null===(c=d[m])||void 0===c?void 0:c.plural)||"Pages"},key:null==g?void 0:g.id,cmsURL:"http://localhost:3000",className:u().payloadAdminBar,classNames:{user:u().user,logo:u().logo,controls:u().controls},logo:(0,r.jsx)(f,{}),style:{position:"relative",zIndex:"unset",padding:0,backgroundColor:"transparent"}})})}):null}},4780:function(e,t,n){"use strict";n.r(t),n.d(t,{Button:function(){return s}});var r=n(7437);n(2265);var o=n(1396),l=n.n(o),a=n(7636),i=n.n(a);let s=e=>{let{el:t="link",label:n,newTab:o,href:a,appearance:s,className:c,onClick:u,type:d="button",disabled:f,invert:p}=e,h=t,m=o?{target:"_blank",rel:"noopener noreferrer"}:{},v=[i().button,c,i()["appearance--".concat(s)],p&&i()["".concat(s,"--invert")]].filter(Boolean).join(" "),_=(0,r.jsx)("div",{className:i().content,children:(0,r.jsx)("span",{className:i().label,children:n})});if((u||"submit"===d)&&(h="button"),"link"===h)return(0,r.jsx)(l(),{href:a||"",className:v,...m,onClick:u,children:_});let g=h;return(0,r.jsx)(g,{href:a,className:v,type:d,...m,onClick:u,disabled:f,children:_})}},7860:function(e,t,n){"use strict";n.d(t,{T:function(){return o}});var r=n(7437);n(2265);let o=e=>{let{className:t,rotate:n}=e;return(0,r.jsx)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:t,style:{transform:"number"==typeof n?"rotate(".concat(n||0,"deg)"):void 0},children:(0,r.jsx)("path",{d:"M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z",stroke:"currentColor",fill:"none",vectorEffect:"non-scaling-stroke"})})}},1120:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});var r=n(7437),o=n(2265),l=n(7580),a=n.n(l);let i=(0,o.forwardRef)((e,t)=>{let{left:n=!0,right:o=!0,className:l,children:i}=e;return(0,r.jsx)("div",{ref:t,className:[a().gutter,n&&a().gutterLeft,o&&a().gutterRight,l].filter(Boolean).join(" "),children:i})});i.displayName="Gutter"},7316:function(e,t,n){"use strict";n.r(t),n.d(t,{HeaderNav:function(){return u}});var r=n(7437);n(2265);var o=n(1396),l=n.n(o),a=n(7992),i=n(5060),s=n(5072),c=n.n(s);let u=e=>{let{header:t}=e,n=(null==t?void 0:t.navItems)||[],{user:o}=(0,a.a)();return(0,r.jsxs)("nav",{className:[c().nav,void 0===o&&c().hide].filter(Boolean).join(" "),children:[n.map((e,t)=>{let{link:n}=e;return(0,r.jsx)(i.g,{...n,appearance:"none"},t)}),o&&(0,r.jsx)(l(),{href:"/account",children:"Account"})]})}},5060:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(7437);n(2265);var o=n(1396),l=n.n(o),a=n(4780);let i=e=>{let{type:t,url:n,newTab:o,reference:i,label:s,appearance:c,children:u,className:d,invert:f}=e,p="reference"===t&&"object"==typeof(null==i?void 0:i.value)&&i.value.slug?"".concat((null==i?void 0:i.relationTo)!=="pages"?"/".concat(null==i?void 0:i.relationTo):"","/").concat(i.value.slug):n;return p?!c&&(p||n)?(0,r.jsxs)(l(),{...o?{target:"_blank",rel:"noopener noreferrer"}:{},href:p||n,className:d,children:[s&&s,u&&u]}):(0,r.jsx)(a.Button,{className:d,newTab:o,href:p,appearance:c,label:s,invert:f}):null}},7992:function(e,t,n){"use strict";n.d(t,{H:function(){return a},a:function(){return i}});var r=n(7437),o=n(2265);let l=(0,o.createContext)({}),a=e=>{let{children:t}=e,[n,a]=(0,o.useState)(),[i,s]=(0,o.useState)(),c=(0,o.useCallback)(async e=>{try{let n=await fetch("".concat("http://localhost:3000","/api/users/create"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})});if(n.ok){var t;let{data:e,errors:r}=await n.json();if(r)throw Error(r[0].message);a(null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user),s("loggedIn")}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),u=(0,o.useCallback)(async e=>{try{let t=await fetch("".concat("http://localhost:3000","/api/users/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});if(t.ok){let{user:e,errors:n}=await t.json();if(n)throw Error(n[0].message);return a(e),s("loggedIn"),e}throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),d=(0,o.useCallback)(async()=>{try{let e=await fetch("".concat("http://localhost:3000","/api/users/logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok)a(null),s("loggedOut");else throw Error("An error occurred while attempting to logout.")}catch(e){throw Error("An error occurred while attempting to logout.")}},[]);(0,o.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("http://localhost:3000","/api/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let{user:t}=await e.json();a(t||null),s(t?"loggedIn":void 0)}else throw Error("An error occurred while fetching your account.")}catch(e){throw a(null),Error("An error occurred while fetching your account.")}};e()},[]);let f=(0,o.useCallback)(async e=>{try{let n=await fetch("".concat("http://localhost:3000","/api/users/forgot-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email})});if(n.ok){var t;let{data:e,errors:r}=await n.json();if(r)throw Error(r[0].message);a(null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),p=(0,o.useCallback)(async e=>{try{let r=await fetch("".concat("http://localhost:3000","/api/users/reset-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,passwordConfirm:e.passwordConfirm,token:e.token})});if(r.ok){var t,n;let{data:e,errors:o}=await r.json();if(o)throw Error(o[0].message);a(null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user),s((null==e?void 0:null===(n=e.loginUser)||void 0===n?void 0:n.user)?"loggedIn":void 0)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]);return(0,r.jsx)(l.Provider,{value:{user:n,setUser:a,login:u,logout:d,create:c,resetPassword:p,forgotPassword:f,status:i},children:t})},i=()=>(0,o.useContext)(l)},3965:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeSelector:function(){return c}});var r=n(7437),o=n(2265),l=n(7860),a=n(8),i=n(9931),s=n.n(i);let c=()=>{let e=o.useRef(null),{setTheme:t}=(0,a.F)(),[n,i]=o.useState(!1),c=n=>{"auto"===n?(t(null),e.current&&(e.current.value="auto")):t(n)};return o.useEffect(()=>{let t=window.localStorage.getItem("payload-theme");e.current&&(e.current.value=null!=t?t:"auto",i(!0))},[]),(0,r.jsx)("div",{className:[s().selectContainer,!n&&s().hidden].filter(Boolean).join(" "),children:(0,r.jsxs)("label",{htmlFor:"theme",children:[(0,r.jsxs)("select",{id:"theme",onChange:e=>c(e.target.value),ref:e,className:s().select,children:[(0,r.jsx)("option",{value:"auto",children:"Auto"}),(0,r.jsx)("option",{value:"light",children:"Light"}),(0,r.jsx)("option",{value:"dark",children:"Dark"})]}),(0,r.jsxs)("div",{className:s().selectIcon,children:[(0,r.jsx)(l.T,{className:s().iconUp}),(0,r.jsx)(l.T,{className:s().iconDown})]})]})})}},8:function(e,t,n){"use strict";n.d(t,{f:function(){return c},F:function(){return u}});var r=n(7437),o=n(2265),l=!!window.document&&!!window.document.createElement;let a="payload-theme",i=()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t="boolean"==typeof e.matches;return t?e.matches?"dark":"light":null},s=(0,o.createContext)({theme:void 0,setTheme:()=>null}),c=e=>{let{children:t}=e,[n,c]=(0,o.useState)(l?document.documentElement.getAttribute("data-theme"):void 0),u=(0,o.useCallback)(e=>{if(null===e){window.localStorage.removeItem(a);let e=i();document.documentElement.setAttribute("data-theme",e||""),e&&c(e)}else c(e),window.localStorage.setItem(a,e),document.documentElement.setAttribute("data-theme",e)},[]);return(0,o.useEffect)(()=>{let e="light",t=window.localStorage.getItem(a);if(t&&["light","dark"].includes(t))e=t;else{let t=i();t&&(e=t)}document.documentElement.setAttribute("data-theme",e),c(e)},[]),(0,r.jsx)(s.Provider,{value:{theme:n,setTheme:u},children:t})},u=()=>(0,o.useContext)(s)},3050:function(e,t,n){"use strict";n.r(t),n.d(t,{Providers:function(){return a}});var r=n(7437);n(2265);var o=n(7992),l=n(8);let a=e=>{let{children:t}=e;return(0,r.jsx)(l.f,{children:(0,r.jsx)(o.H,{children:t})})}},4560:function(e,t,n){"use strict";n.r(t),t.default="ac2353319419"},1006:function(e){e.exports={adminBar:"AdminBar_adminBar__ceGCp",payloadAdminBar:"AdminBar_payloadAdminBar__skl88",show:"AdminBar_show__g8VSt",controls:"AdminBar_controls__qLraR",user:"AdminBar_user__F84n_",logo:"AdminBar_logo__0UGR_",blockContainer:"AdminBar_blockContainer__sOKl5",hr:"AdminBar_hr__FMeNP"},e.exports.__checksum="0d8c60d35009"},7636:function(e){e.exports={label:"Button_label__pYjjJ",button:"Button_button__QvmpL",content:"Button_content__rz2Uk","appearance--primary":"Button_appearance--primary__aXtFJ","appearance--secondary":"Button_appearance--secondary__67RnZ","primary--invert":"Button_primary--invert__abvn4","secondary--invert":"Button_secondary--invert__OpT85","appearance--default":"Button_appearance--default__Hxo2A","appearance--none":"Button_appearance--none__nd_sY"},e.exports.__checksum="feca588f12e7"},6433:function(e){e.exports={footer:"Footer_footer__3uw59",wrap:"Footer_wrap__EQ_jB",logo:"Footer_logo__o5wYk",nav:"Footer_nav__juVyT"},e.exports.__checksum="63da58df71e8"},7580:function(e){e.exports={gutter:"Gutter_gutter__QB0_n",gutterLeft:"Gutter_gutterLeft__9iSai",gutterRight:"Gutter_gutterRight__4jfEx"},e.exports.__checksum="8b7edfbc03b1"},5072:function(e){e.exports={nav:"Nav_nav__GahsC",hide:"Nav_hide__HQv51"},e.exports.__checksum="f0d0e2b5fdfe"},806:function(e){e.exports={header:"Header_header__2BMEc",wrap:"Header_wrap__cI07q",logo:"Header_logo__70M_H"},e.exports.__checksum="ec64accd935b"},9931:function(e){e.exports={selectContainer:"ThemeSelector_selectContainer__tv6h2",hidden:"ThemeSelector_hidden__sgN9V",select:"ThemeSelector_select__eRj0j",selectIcon:"ThemeSelector_selectIcon__1YhOf",iconUp:"ThemeSelector_iconUp__880pT",iconDown:"ThemeSelector_iconDown__TooOC"},e.exports.__checksum="8232bf7de82f"},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,l={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:l,_owner:i.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(4724)},4033:function(e,t,n){e.exports=n(290)},3135:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return l(t,e),t},i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,l){function a(e){try{s(r.next(e))}catch(e){l(e)}}function i(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,i)}s((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,l,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PayloadAdminBar=void 0;var c=a(n(2265)),u={email:"dev@email.com",id:"12345"};t.PayloadAdminBar=function(e){var t=e.cmsURL,n=void 0===t?"http://localhost:8000":t,o=e.apiPath,l=void 0===o?"/api":o,a=e.adminPath,d=void 0===a?"/admin":a,f=e.collection,p=e.collectionLabels,h=e.id,m=e.logo,v=e.className,_=e.logoProps,g=e.editProps,y=e.createProps,w=e.userProps,b=e.logoutProps,x=e.divProps,E=e.style,j=e.unstyled,k=e.onAuthChange,S=e.classNames,P=e.devMode,N=e.preview,O=e.onPreviewExit,C=e.previewProps,A=(0,c.useState)(),T=A[0],I=A[1];if((0,c.useEffect)(function(){i(void 0,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(""+n+l+"/users/me",{method:"get",credentials:"include"})];case 1:return[4,t.sent().json()];case 2:return(e=t.sent().user)?I(e):!0!==P?I(null):I(u),[3,4];case 3:return console.warn(t.sent()),!0===P&&I(u),[3,4];case 4:return[2]}})})},[n,d,l]),(0,c.useEffect)(function(){"function"==typeof k&&k(T)},[T,k]),T){var B=T.email,L=T.id;return c.default.createElement("div",{className:v,style:r(r({},!0!==j?{fontSize:"small",position:"fixed",display:"flex",minWidth:"0",alignItems:"center",top:0,left:0,width:"100%",padding:"0.5rem",zIndex:99999,boxSizing:"border-box",backgroundColor:"#222",color:"#fff",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"}:{}),E)},c.default.createElement("a",r({href:""+n+d,className:null==S?void 0:S.logo},_,{style:r({},!0!==j?r({marginRight:"10px",flexShrink:0,display:"flex",height:"20px",textDecoration:"none",color:"inherit",alignItems:"center"},(null==_?void 0:_.style)?r({},_.style):{}):{})}),m||"Payload CMS"),c.default.createElement("a",r({href:""+n+d+"/collections/users/"+L,target:"_blank",rel:"noopener noreferrer",className:null==S?void 0:S.user},w,{style:r({},!0!==j?r({marginRight:"10px",display:"block",minWidth:"50px",overflow:"hidden",textOverflow:"ellipsis",textDecoration:"none",whiteSpace:"nowrap",color:"inherit"},(null==w?void 0:w.style)?r({},w.style):{}):{})}),c.default.createElement("span",{style:r({},!0!==j?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},B||"Profile")),c.default.createElement("div",r({className:null==S?void 0:S.controls},x,{style:r({},!0!==j?r({display:"flex",marginRight:"10px",flexShrink:1,flexGrow:1,alignItems:"center",justifyContent:"flex-end"},(null==x?void 0:x.style)?r({},x.style):{}):{})}),f&&h&&c.default.createElement("a",r({href:""+n+d+"/collections/"+f+"/"+h,target:"_blank",rel:"noopener noreferrer",className:null==S?void 0:S.edit},g,{style:r({display:"block"},!0!==j?r({marginRight:"10px",textDecoration:"none",color:"inherit",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",flexShrink:1},(null==g?void 0:g.style)?r({},g.style):{}):{})}),c.default.createElement("span",{style:r({},!0!==j?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"Edit "+((null==p?void 0:p.singular)||"page"))),f&&c.default.createElement("a",r({href:""+n+d+"/collections/"+f+"/create",target:"_blank",rel:"noopener noreferrer",className:null==S?void 0:S.create},y,{style:r({},!0!==j?r({flexShrink:1,display:"block",textDecoration:"none",color:"inherit",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},(null==y?void 0:y.style)?r({},y.style):{}):{})}),c.default.createElement("span",{style:r({},!0!==j?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"New "+((null==p?void 0:p.singular)||"page"))),N&&c.default.createElement("button",r({className:null==S?void 0:S.preview,onClick:O},C,{style:r({},!0!==j?r({marginLeft:"10px",background:"none",border:"none",padding:0,cursor:"pointer",color:"inherit",fontFamily:"inherit",fontSize:"inherit"},(null==C?void 0:C.style)?r({},C.style):{}):{})}),"Exit preview mode")),c.default.createElement("a",r({href:""+n+d+"/logout",target:"_blank",rel:"noopener noreferrer",className:null==S?void 0:S.logout},b,{style:r({},!0!==j?r({textDecoration:"none",color:"inherit",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",display:"block",flexShrink:1},(null==b?void 0:b.style)?r({},b.style):{}):{})}),c.default.createElement("span",{style:r({},!0!==j?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"Logout")))}return null}}},function(e){e.O(0,[724,971,864,744],function(){return e(e.s=5339)}),_N_E=e.O()}]);