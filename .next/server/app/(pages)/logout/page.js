(()=>{var e={};e.id=5366,e.ids=[5366],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},4723:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>g,originalPathname:()=>d,pages:()=>p,routeModule:()=>x,tree:()=>c});var r=s(3137),o=s(4647),n=s(4183),a=s.n(n),l=s(1775),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);s.d(t,i);let u=r.AppPageRouteModule,c=["",{children:["(pages)",{children:["logout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9877)),"C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\(pages)\\logout\\page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.bind(s,5653)),"C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\(pages)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,3719)),"C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\(pages)\\logout\\page.tsx"],d="/(pages)/logout/page",g={require:s,loadChunk:()=>Promise.resolve()},x=new u({definition:{kind:o.x.APP_PAGE,page:"/(pages)/logout/page",pathname:"/logout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},638:(e,t,s)=>{Promise.resolve().then(s.bind(s,2416))},2416:(e,t,s)=>{"use strict";s.r(t),s.d(t,{LogoutPage:()=>i});var r=s(80),o=s(9885),n=s(1440),a=s.n(n),l=s(8693);let i=e=>{let{settings:t}=e,{postsPage:s,projectsPage:n}=t||{},{logout:i}=(0,l.a)(),[u,c]=(0,o.useState)(""),[p,d]=(0,o.useState)("");(0,o.useEffect)(()=>{let e=async()=>{try{await i(),c("Logged out successfully.")}catch(e){d("You are already logged out.")}};e()},[i]);let g="object"==typeof s&&s?.slug,x="object"==typeof n&&n?.slug;return r.jsx(o.Fragment,{children:(p||u)&&(0,r.jsxs)("div",{children:[r.jsx("h1",{children:p||u}),(0,r.jsxs)("p",{children:["What would you like to do next? ",g&&x&&r.jsx(o.Fragment,{children:"Browse "}),g&&r.jsx(o.Fragment,{children:r.jsx(a(),{href:`/${s.slug}`,children:"all posts"})}),g&&x&&r.jsx(o.Fragment,{children:" or "}),x&&r.jsx(o.Fragment,{children:r.jsx(a(),{href:`/${n.slug}`,children:"all projects"})})," To log back in, ",r.jsx(a(),{href:"/login",children:"click here"}),"."]})]})})}},4928:e=>{e.exports={logout:"logout_logout__psvE6"},e.exports.__checksum="ce56bea073e9"},9877:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>h});var r=s(8144);s(3830);var o=s(8996),n=s(3205),a=s(2208),l=s(7536);let i=(0,l.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\(pages)\logout\LogoutPage\index.tsx`),{__esModule:u,$$typeof:c}=i;i.default;let p=i.LogoutPage;var d=s(4928),g=s.n(d);async function x(){let e=null;try{e=await (0,o.wv)()}catch(e){}return r.jsx(n.T,{className:g().logout,children:r.jsx(p,{settings:e})})}let h={title:"Logout",description:"You have been logged out.",openGraph:(0,a.T)({title:"Logout",url:"/logout"})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[4650,2560,345,6420,7507],()=>s(4723));module.exports=r})();