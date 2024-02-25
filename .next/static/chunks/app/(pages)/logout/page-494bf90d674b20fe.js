(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[366],{7184:function(e,r,t){Promise.resolve().then(t.t.bind(t,9329,23)),Promise.resolve().then(t.bind(t,5739))},5739:function(e,r,t){"use strict";t.r(r),t.d(r,{LogoutPage:function(){return i}});var o=t(7437),n=t(2265),l=t(1396),a=t.n(l),s=t(7992);let i=e=>{let{settings:r}=e,{postsPage:t,projectsPage:l}=r||{},{logout:i}=(0,s.a)(),[c,u]=(0,n.useState)(""),[d,h]=(0,n.useState)("");(0,n.useEffect)(()=>{let e=async()=>{try{await i(),u("Logged out successfully.")}catch(e){h("You are already logged out.")}};e()},[i]);let p="object"==typeof t&&(null==t?void 0:t.slug),f="object"==typeof l&&(null==l?void 0:l.slug);return(0,o.jsx)(n.Fragment,{children:(d||c)&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:d||c}),(0,o.jsxs)("p",{children:["What would you like to do next? ",p&&f&&(0,o.jsx)(n.Fragment,{children:"Browse "}),p&&(0,o.jsx)(n.Fragment,{children:(0,o.jsx)(a(),{href:"/".concat(t.slug),children:"all posts"})}),p&&f&&(0,o.jsx)(n.Fragment,{children:" or "}),f&&(0,o.jsx)(n.Fragment,{children:(0,o.jsx)(a(),{href:"/".concat(l.slug),children:"all projects"})})," To log back in, ",(0,o.jsx)(a(),{href:"/login",children:"click here"}),"."]})]})})}},7992:function(e,r,t){"use strict";t.d(r,{H:function(){return a},a:function(){return s}});var o=t(7437),n=t(2265);let l=(0,n.createContext)({}),a=e=>{let{children:r}=e,[t,a]=(0,n.useState)(),[s,i]=(0,n.useState)(),c=(0,n.useCallback)(async e=>{try{let t=await fetch("".concat("http://localhost:3000","/api/users/create"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})});if(t.ok){var r;let{data:e,errors:o}=await t.json();if(o)throw Error(o[0].message);a(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user),i("loggedIn")}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),u=(0,n.useCallback)(async e=>{try{let r=await fetch("".concat("http://localhost:3000","/api/users/login"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});if(r.ok){let{user:e,errors:t}=await r.json();if(t)throw Error(t[0].message);return a(e),i("loggedIn"),e}throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),d=(0,n.useCallback)(async()=>{try{let e=await fetch("".concat("http://localhost:3000","/api/users/logout"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok)a(null),i("loggedOut");else throw Error("An error occurred while attempting to logout.")}catch(e){throw Error("An error occurred while attempting to logout.")}},[]);(0,n.useEffect)(()=>{let e=async()=>{try{let e=await fetch("".concat("http://localhost:3000","/api/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let{user:r}=await e.json();a(r||null),i(r?"loggedIn":void 0)}else throw Error("An error occurred while fetching your account.")}catch(e){throw a(null),Error("An error occurred while fetching your account.")}};e()},[]);let h=(0,n.useCallback)(async e=>{try{let t=await fetch("".concat("http://localhost:3000","/api/users/forgot-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email})});if(t.ok){var r;let{data:e,errors:o}=await t.json();if(o)throw Error(o[0].message);a(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),p=(0,n.useCallback)(async e=>{try{let o=await fetch("".concat("http://localhost:3000","/api/users/reset-password"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,passwordConfirm:e.passwordConfirm,token:e.token})});if(o.ok){var r,t;let{data:e,errors:n}=await o.json();if(n)throw Error(n[0].message);a(null==e?void 0:null===(r=e.loginUser)||void 0===r?void 0:r.user),i((null==e?void 0:null===(t=e.loginUser)||void 0===t?void 0:t.user)?"loggedIn":void 0)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]);return(0,o.jsx)(l.Provider,{value:{user:t,setUser:a,login:u,logout:d,create:c,resetPassword:p,forgotPassword:h,status:s},children:r})},s=()=>(0,n.useContext)(l)},9329:function(e){e.exports={logout:"logout_logout__psvE6"},e.exports.__checksum="afd5d6642f79"},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=t(2265),n=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var o,l={},c=null,u=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)a.call(r,o)&&!i.hasOwnProperty(o)&&(l[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===l[o]&&(l[o]=r[o]);return{$$typeof:n,type:e,key:c,ref:u,props:l,_owner:s.current}}r.Fragment=l,r.jsx=c,r.jsxs=c},7437:function(e,r,t){"use strict";e.exports=t(622)},1396:function(e,r,t){e.exports=t(4724)}},function(e){e.O(0,[724,971,864,744],function(){return e(e.s=7184)}),_N_E=e.O()}]);