"use strict";(()=>{var e={};e.id=6653,e.ids=[6653],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},2037:e=>{e.exports=require("os")},743:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>x,originalPathname:()=>m,requestAsyncStorage:()=>p,routeModule:()=>l,serverHooks:()=>v,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>g});var a={};r.r(a),r.d(a,{GET:()=>u}),r(5655);var n=r(3323),s=r(4647),o=r(561),i=r(6886);async function u(e){let t=e.nextUrl.searchParams.get("collection"),r=e.nextUrl.searchParams.get("slug"),a=e.nextUrl.searchParams.get("secret");return a&&a===process.env.NEXT_PRIVATE_REVALIDATION_KEY&&"string"==typeof t&&"string"==typeof r?"string"==typeof t&&"string"==typeof r?((0,o.revalidateTag)(`${t}_${r}`),i.Z.json({revalidated:!0,now:Date.now()})):i.Z.json({revalidated:!1,now:Date.now()}):new Response("Invalid request",{status:400})}let d=n.AppRouteRouteModule,l=new d({definition:{kind:s.x.APP_ROUTE,page:"/next/revalidate/route",pathname:"/next/revalidate",filename:"route",bundlePath:"app/next/revalidate/route"},resolvedPagePath:"C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\next\\revalidate\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:p,staticGenerationAsyncStorage:c,serverHooks:v,headerHooks:x,staticGenerationBailout:g}=l,m="/next/revalidate/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[3497,9727,5347],()=>r(743));module.exports=a})();