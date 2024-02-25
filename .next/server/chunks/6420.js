exports.id=6420,exports.ids=[6420],exports.modules={8725:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9918,23)),Promise.resolve().then(r.t.bind(r,2057,23)),Promise.resolve().then(r.t.bind(r,6148,23)),Promise.resolve().then(r.t.bind(r,8359,23)),Promise.resolve().then(r.t.bind(r,1860,23)),Promise.resolve().then(r.t.bind(r,2427,23))},4229:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1297,23)),Promise.resolve().then(r.t.bind(r,2721,23)),Promise.resolve().then(r.bind(r,198)),Promise.resolve().then(r.bind(r,9496)),Promise.resolve().then(r.bind(r,3559)),Promise.resolve().then(r.bind(r,9881)),Promise.resolve().then(r.bind(r,2102))},198:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AdminBar:()=>m});var a=r(80),o=r(9885),n=r.n(o),s=r(7114),l=r(2383),i=r(8693),c=r(5964),d=r(2780),u=r.n(d);let h={pages:{singular:"Page",plural:"Pages"},posts:{singular:"Post",plural:"Posts"},projects:{singular:"Project",plural:"Projects"}},p=()=>a.jsx("span",{children:"Dashboard"}),m=e=>{let{adminBarProps:t}=e||{},r=(0,s.useSelectedLayoutSegments)(),d=h?.[r?.[1]]?r?.[1]:"pages",[m,g]=n().useState(!1),{user:f}=(0,i.a)();(0,o.useEffect)(()=>{f&&g(!0)},[f]);let _=f?.roles?.includes("admin");return _?a.jsx("div",{className:[u().adminBar,m&&u().show].filter(Boolean).join(" "),children:a.jsx(c.T,{className:u().blockContainer,children:(0,o.createElement)(l.PayloadAdminBar,{...t,collection:d,collectionLabels:{singular:h[d]?.singular||"Page",plural:h[d]?.plural||"Pages"},key:f?.id,cmsURL:"http://localhost:3000",className:u().payloadAdminBar,classNames:{user:u().user,logo:u().logo,controls:u().controls},logo:a.jsx(p,{}),style:{position:"relative",zIndex:"unset",padding:0,backgroundColor:"transparent"}})})}):null}},9496:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Button:()=>i});var a=r(80);r(9885);var o=r(1440),n=r.n(o),s=r(2186),l=r.n(s);let i=({el:e="link",label:t,newTab:r,href:o,appearance:s,className:i,onClick:c,type:d="button",disabled:u,invert:h})=>{let p=e,m=r?{target:"_blank",rel:"noopener noreferrer"}:{},g=[l().button,i,l()[`appearance--${s}`],h&&l()[`${s}--invert`]].filter(Boolean).join(" "),f=a.jsx("div",{className:l().content,children:a.jsx("span",{className:l().label,children:t})});if((c||"submit"===d)&&(p="button"),"link"===p)return a.jsx(n(),{href:o||"",className:g,...m,onClick:c,children:f});let _=p;return a.jsx(_,{href:o,className:g,type:d,...m,onClick:c,disabled:u,children:f})}},7002:(e,t,r)=>{"use strict";r.d(t,{T:()=>o});var a=r(80);r(9885);let o=({className:e,rotate:t})=>a.jsx("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:e,style:{transform:"number"==typeof t?`rotate(${t||0}deg)`:void 0},children:a.jsx("path",{d:"M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z",stroke:"currentColor",fill:"none",vectorEffect:"non-scaling-stroke"})})},5964:(e,t,r)=>{"use strict";r.d(t,{T:()=>l});var a=r(80),o=r(9885),n=r(5512),s=r.n(n);let l=(0,o.forwardRef)((e,t)=>{let{left:r=!0,right:o=!0,className:n,children:l}=e;return a.jsx("div",{ref:t,className:[s().gutter,r&&s().gutterLeft,o&&s().gutterRight,n].filter(Boolean).join(" "),children:l})});l.displayName="Gutter"},3559:(e,t,r)=>{"use strict";r.r(t),r.d(t,{HeaderNav:()=>d});var a=r(80);r(9885);var o=r(1440),n=r.n(o),s=r(8693),l=r(2915),i=r(4584),c=r.n(i);let d=({header:e})=>{let t=e?.navItems||[],{user:r}=(0,s.a)();return(0,a.jsxs)("nav",{className:[c().nav,void 0===r&&c().hide].filter(Boolean).join(" "),children:[t.map(({link:e},t)=>a.jsx(l.g,{...e,appearance:"none"},t)),r&&a.jsx(n(),{href:"/account",children:"Account"})]})}},2915:(e,t,r)=>{"use strict";r.d(t,{g:()=>l});var a=r(80);r(9885);var o=r(1440),n=r.n(o),s=r(9496);let l=({type:e,url:t,newTab:r,reference:o,label:l,appearance:i,children:c,className:d,invert:u})=>{let h="reference"===e&&"object"==typeof o?.value&&o.value.slug?`${o?.relationTo!=="pages"?`/${o?.relationTo}`:""}/${o.value.slug}`:t;return h?!i&&(h||t)?(0,a.jsxs)(n(),{...r?{target:"_blank",rel:"noopener noreferrer"}:{},href:h||t,className:d,children:[l&&l,c&&c]}):a.jsx(s.Button,{className:d,newTab:r,href:h,appearance:i,label:l,invert:u}):null}},8693:(e,t,r)=>{"use strict";r.d(t,{H:()=>s,a:()=>l});var a=r(80),o=r(9885);let n=(0,o.createContext)({}),s=({children:e})=>{let[t,r]=(0,o.useState)(),[s,l]=(0,o.useState)(),i=(0,o.useCallback)(async e=>{try{let t=await fetch("http://localhost:3000/api/users/create",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})});if(t.ok){let{data:e,errors:a}=await t.json();if(a)throw Error(a[0].message);r(e?.loginUser?.user),l("loggedIn")}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),c=(0,o.useCallback)(async e=>{try{let t=await fetch("http://localhost:3000/api/users/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})});if(t.ok){let{user:e,errors:a}=await t.json();if(a)throw Error(a[0].message);return r(e),l("loggedIn"),e}throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),d=(0,o.useCallback)(async()=>{try{let e=await fetch("http://localhost:3000/api/users/logout",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok)r(null),l("loggedOut");else throw Error("An error occurred while attempting to logout.")}catch(e){throw Error("An error occurred while attempting to logout.")}},[]);(0,o.useEffect)(()=>{let e=async()=>{try{let e=await fetch("http://localhost:3000/api/users/me",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}});if(e.ok){let{user:t}=await e.json();r(t||null),l(t?"loggedIn":void 0)}else throw Error("An error occurred while fetching your account.")}catch(e){throw r(null),Error("An error occurred while fetching your account.")}};e()},[]);let u=(0,o.useCallback)(async e=>{try{let t=await fetch("http://localhost:3000/api/users/forgot-password",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email})});if(t.ok){let{data:e,errors:a}=await t.json();if(a)throw Error(a[0].message);r(e?.loginUser?.user)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]),h=(0,o.useCallback)(async e=>{try{let t=await fetch("http://localhost:3000/api/users/reset-password",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,passwordConfirm:e.passwordConfirm,token:e.token})});if(t.ok){let{data:e,errors:a}=await t.json();if(a)throw Error(a[0].message);r(e?.loginUser?.user),l(e?.loginUser?.user?"loggedIn":void 0)}else throw Error("Invalid login")}catch(e){throw Error("An error occurred while attempting to login.")}},[]);return a.jsx(n.Provider,{value:{user:t,setUser:r,login:c,logout:d,create:i,resetPassword:h,forgotPassword:u,status:s},children:e})},l=()=>(0,o.useContext)(n)},2102:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ThemeSelector:()=>d});var a=r(80),o=r(9885),n=r.n(o),s=r(7002),l=r(9876),i=r(4067),c=r.n(i);let d=()=>{let e=n().useRef(null),{setTheme:t}=(0,l.F)(),[r,o]=n().useState(!1),i=r=>{"auto"===r?(t(null),e.current&&(e.current.value="auto")):t(r)};return n().useEffect(()=>{let t=window.localStorage.getItem("payload-theme");e.current&&(e.current.value=t??"auto",o(!0))},[]),a.jsx("div",{className:[c().selectContainer,!r&&c().hidden].filter(Boolean).join(" "),children:(0,a.jsxs)("label",{htmlFor:"theme",children:[(0,a.jsxs)("select",{id:"theme",onChange:e=>i(e.target.value),ref:e,className:c().select,children:[a.jsx("option",{value:"auto",children:"Auto"}),a.jsx("option",{value:"light",children:"Light"}),a.jsx("option",{value:"dark",children:"Dark"})]}),(0,a.jsxs)("div",{className:c().selectIcon,children:[a.jsx(s.T,{className:c().iconUp}),a.jsx(s.T,{className:c().iconDown})]})]})})}},9876:(e,t,r)=>{"use strict";r.d(t,{f:()=>i,F:()=>c});var a=r(80),o=r(9885);let n="payload-theme",s=()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),t="boolean"==typeof e.matches;return t?e.matches?"dark":"light":null},l=(0,o.createContext)({theme:void 0,setTheme:()=>null}),i=({children:e})=>{let[t,r]=(0,o.useState)(void 0),i=(0,o.useCallback)(e=>{if(null===e){window.localStorage.removeItem(n);let e=s();document.documentElement.setAttribute("data-theme",e||""),e&&r(e)}else r(e),window.localStorage.setItem(n,e),document.documentElement.setAttribute("data-theme",e)},[]);return(0,o.useEffect)(()=>{let e="light",t=window.localStorage.getItem(n);if(function(e){return!!e&&["light","dark"].includes(e)}(t))e=t;else{let t=s();t&&(e=t)}document.documentElement.setAttribute("data-theme",e),r(e)},[]),a.jsx(l.Provider,{value:{theme:t,setTheme:i},children:e})},c=()=>(0,o.useContext)(l)},9881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Providers:()=>s});var a=r(80);r(9885);var o=r(8693),n=r(9876);let s=({children:e})=>a.jsx(n.f,{children:a.jsx(o.H,{children:e})})},2780:e=>{e.exports={adminBar:"AdminBar_adminBar__ceGCp",payloadAdminBar:"AdminBar_payloadAdminBar__skl88",show:"AdminBar_show__g8VSt",controls:"AdminBar_controls__qLraR",user:"AdminBar_user__F84n_",logo:"AdminBar_logo__0UGR_",blockContainer:"AdminBar_blockContainer__sOKl5",hr:"AdminBar_hr__FMeNP"},e.exports.__checksum="1fee8b57c1b0"},2186:e=>{e.exports={label:"Button_label__pYjjJ",button:"Button_button__QvmpL",content:"Button_content__rz2Uk","appearance--primary":"Button_appearance--primary__aXtFJ","appearance--secondary":"Button_appearance--secondary__67RnZ","primary--invert":"Button_primary--invert__abvn4","secondary--invert":"Button_secondary--invert__OpT85","appearance--default":"Button_appearance--default__Hxo2A","appearance--none":"Button_appearance--none__nd_sY"},e.exports.__checksum="8326e3e0c865"},5763:e=>{e.exports={footer:"Footer_footer__3uw59",wrap:"Footer_wrap__EQ_jB",logo:"Footer_logo__o5wYk",nav:"Footer_nav__juVyT"},e.exports.__checksum="960ac8f5d145"},6127:e=>{e.exports={gutter:"Gutter_gutter__QB0_n",gutterLeft:"Gutter_gutterLeft__9iSai",gutterRight:"Gutter_gutterRight__4jfEx"},e.exports.__checksum="94916d64db3c"},5512:e=>{e.exports={gutter:"Gutter_gutter__QB0_n",gutterLeft:"Gutter_gutterLeft__9iSai",gutterRight:"Gutter_gutterRight__4jfEx"},e.exports.__checksum="94916d64db3c"},4584:e=>{e.exports={nav:"Nav_nav__GahsC",hide:"Nav_hide__HQv51"},e.exports.__checksum="14d6fe718f1d"},6890:e=>{e.exports={header:"Header_header__2BMEc",wrap:"Header_wrap__cI07q",logo:"Header_logo__70M_H"},e.exports.__checksum="f0af5df728e3"},4067:e=>{e.exports={selectContainer:"ThemeSelector_selectContainer__tv6h2",hidden:"ThemeSelector_hidden__sgN9V",select:"ThemeSelector_select__eRj0j",selectIcon:"ThemeSelector_selectIcon__1YhOf",iconUp:"ThemeSelector_iconUp__880pT",iconDown:"ThemeSelector_iconDown__TooOC"},e.exports.__checksum="5b5c2f1537ad"},8996:(e,t,r)=>{"use strict";r.d(t,{cm:()=>p,Qi:()=>h,wv:()=>u});var a=r(5603);let o=`
  Header {
    navItems {
      link ${(0,a.A)({disableAppearance:!0})}
		}
  }
`,n=`
query Header {
  ${o}
}
`,s=`
  Footer {
    navItems {
      link ${(0,a.A)({disableAppearance:!0})}
		}
  }
`,l=`
query Footer {
  ${s}
}
`,i=`
  Settings {
    postsPage {
      slug
    }
    projectsPage {
      slug
    }
  }
`,c=`
query Settings {
  ${i}
}
`;var d=r(109);async function u(){if(!d.k)throw Error("NEXT_PUBLIC_SERVER_URL not found");let e=await fetch(`${d.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-store",body:JSON.stringify({query:c})})?.then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching settings");return e.data?.Settings});return e}async function h(){if(!d.k)throw Error("NEXT_PUBLIC_SERVER_URL not found");let e=await fetch(`${d.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-store",body:JSON.stringify({query:n})})?.then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching header");return e.data?.Header});return e}async function p(){if(!d.k)throw Error("NEXT_PUBLIC_SERVER_URL not found");let e=await fetch(`${d.k}/api/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:l})}).then(e=>{if(!e.ok)throw Error("Error fetching doc");return e.json()})?.then(e=>{if(e?.errors)throw Error(e?.errors[0]?.message||"Error fetching footer");return e.data?.Footer});return e}},109:(e,t,r)=>{"use strict";r.d(t,{k:()=>a});let a=process.env.NEXT_BUILD?`http://127.0.0.1:${process.env.PORT||3e3}`:"http://localhost:3000"},600:(e,t,r)=>{"use strict";r.d(t,{z:()=>l});var a=r(7536);let o=(0,a.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_components\Button\index.tsx`),{__esModule:n,$$typeof:s}=o;o.default;let l=o.Button},3205:(e,t,r)=>{"use strict";r.d(t,{T:()=>l});var a=r(8144),o=r(3830),n=r(6127),s=r.n(n);let l=(0,o.forwardRef)((e,t)=>{let{left:r=!0,right:o=!0,className:n,children:l}=e;return a.jsx("div",{ref:t,className:[s().gutter,r&&s().gutterLeft,o&&s().gutterRight,n].filter(Boolean).join(" "),children:l})});l.displayName="Gutter"},584:(e,t,r)=>{"use strict";r.d(t,{g:()=>l});var a=r(8144);r(3830);var o=r(4602),n=r.n(o),s=r(600);let l=({type:e,url:t,newTab:r,reference:o,label:l,appearance:i,children:c,className:d,invert:u})=>{let h="reference"===e&&"object"==typeof o?.value&&o.value.slug?`${o?.relationTo!=="pages"?`/${o?.relationTo}`:""}/${o.value.slug}`:t;return h?!i&&(h||t)?(0,a.jsxs)(n(),{...r?{target:"_blank",rel:"noopener noreferrer"}:{},href:h||t,className:d,children:[l&&l,c&&c]}):a.jsx(s.z,{className:d,newTab:r,href:h,appearance:i,label:l,invert:u}):null}},5603:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=({disableAppearance:e,disableLabel:t}={})=>`{
  ${t?"":"label"}
  ${e?"":"appearance"}
  type
  newTab
  url
  reference {
    relationTo
    value {
      ...on Page {
        slug
      }
    }
  }
}`},2208:(e,t,r)=>{"use strict";r.d(t,{T:()=>o});let a={type:"website",siteName:"Payload Website Template",title:"Payload Website Template",description:"An open-source website built with Payload and Next.js.",images:[{url:"https://payloadcms.com/images/og-image.jpg"}]},o=e=>({...a,...e,images:e?.images?e.images:a.images})},3719:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>L,metadata:()=>U});var a=r(8144);r(3830);var o=r(7536);let n=(0,o.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_components\AdminBar\index.tsx`),{__esModule:s,$$typeof:l}=n;n.default;let i=n.AdminBar;var c=r(4602),d=r.n(c),u=r(8996);let h=(0,o.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_providers\Theme\ThemeSelector\index.tsx`),{__esModule:p,$$typeof:m}=h;h.default;let g=h.ThemeSelector;var f=r(3205),_=r(584),v=r(5763),w=r.n(v);async function y(){let e=null;try{e=await (0,u.cm)()}catch(e){}let t=e?.navItems||[];return a.jsx("footer",{className:w().footer,children:(0,a.jsxs)(f.T,{className:w().wrap,children:[a.jsx(d(),{href:"/",children:a.jsx("picture",{children:a.jsx("img",{className:w().logo,alt:"Payload Logo",src:"https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"})})}),(0,a.jsxs)("nav",{className:w().nav,children:[a.jsx(g,{}),t.map(({link:e},t)=>a.jsx(_.g,{...e},t)),a.jsx(d(),{href:"/admin",children:"Admin"}),a.jsx(d(),{href:"https://github.com/payloadcms/payload/tree/main/templates/website",target:"_blank",rel:"noopener noreferrer",children:"Source Code"}),a.jsx(d(),{href:"https://payloadcms.com",target:"_blank",rel:"noopener noreferrer",children:"Payload"})]})]})})}let x=(0,o.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_components\Header\Nav\index.tsx`),{__esModule:j,$$typeof:b}=x;x.default;let k=x.HeaderNav;var T=r(6890),P=r.n(T);async function E(){let e=null;try{e=await (0,u.Qi)()}catch(e){}return a.jsx(a.Fragment,{children:a.jsx("header",{className:P().header,children:(0,a.jsxs)(f.T,{className:P().wrap,children:[a.jsx(d(),{href:"/",children:a.jsx("img",{className:P().logo,alt:"Payload Logo",src:"https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"})}),a.jsx(k,{header:e})]})})})}let S=(0,o.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_providers\index.tsx`),{__esModule:N,$$typeof:B}=S;S.default;let C=S.Providers;var A=r(2777),I=r.n(A);let $=()=>a.jsx(I(),{id:"theme-script",strategy:"beforeInteractive",dangerouslySetInnerHTML:{__html:`
  (function () {
    function getImplicitPreference() {
      var mediaQuery = '(prefers-color-scheme: dark)'
      var mql = window.matchMedia(mediaQuery)
      var hasImplicitPreference = typeof mql.matches === 'boolean'

      if (hasImplicitPreference) {
        return mql.matches ? 'dark' : 'light'
      }

      return null
    }

    function themeIsValid(theme) {
      return theme === 'light' || theme === 'dark'
    }

    var themeToSet = 'light'
    var preference = window.localStorage.getItem('payload-theme')

    if (themeIsValid(preference)) {
      themeToSet = preference
    } else {
      var implicitPreference = getImplicitPreference()

      if (implicitPreference) {
        themeToSet = implicitPreference
      }
    }

    document.documentElement.setAttribute('data-theme', themeToSet)
  })();
  `}});var R=r(2208);async function L({children:e}){return(0,a.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,a.jsxs)("head",{children:[a.jsx($,{}),a.jsx("link",{rel:"icon",href:"/favicon.ico",sizes:"32x32"}),a.jsx("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"})]}),a.jsx("body",{children:(0,a.jsxs)(C,{children:[a.jsx(i,{}),a.jsx(E,{}),e,a.jsx(y,{})]})})]})}r(9453);let U={metadataBase:new URL("http://localhost:3000"),twitter:{card:"summary_large_image",creator:"@payloadcms"},openGraph:(0,R.T)()}},9453:()=>{}};