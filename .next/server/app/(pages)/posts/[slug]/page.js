(()=>{var e={};e.id=8265,e.ids=[8265],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},3837:e=>{"use strict";e.exports=require("util")},1528:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>m,routeModule:()=>h,tree:()=>d});var o=n(3137),s=n(4647),r=n(4183),a=n.n(r),l=n(1775),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);n.d(t,i);let c=o.AppPageRouteModule,d=["",{children:["(pages)",{children:["posts",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,1333)),"C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\(pages)\\posts\\[slug]\\page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(n.bind(n,5653)),"C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\(pages)\\not-found.tsx"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,3719)),"C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,1918,23)),"next/dist/client/components/not-found-error"]}],m=["C:\\Users\\masdu\\Desktop\\newproject\\src\\app\\(pages)\\posts\\[slug]\\page.tsx"],p="/(pages)/posts/[slug]/page",u={require:n,loadChunk:()=>Promise.resolve()},h=new c({definition:{kind:s.x.APP_PAGE,page:"/(pages)/posts/[slug]/page",pathname:"/posts/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},6415:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,1297,23)),Promise.resolve().then(n.t.bind(n,2796,23)),Promise.resolve().then(n.bind(n,3940)),Promise.resolve().then(n.bind(n,9496)),Promise.resolve().then(n.bind(n,5223)),Promise.resolve().then(n.bind(n,4011)),Promise.resolve().then(n.bind(n,966)),Promise.resolve().then(n.bind(n,7855))},7855:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PremiumContent:()=>V});var o=n(80),s=n(9885),r=n.n(s),a=n(1440),l=n.n(a);let i=`categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`,c=({disableAppearance:e,disableLabel:t}={})=>`{
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
}`,d=`
mimeType
filename
width
height
alt
caption
`,m=`media {
  ${d}
}`,p=`meta {
  title
  image {
    ${d}
  }
  description
}`,u=`
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${c()}
  }
}
`,h=`
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${c()}
  }
}
`,_=`
...on MediaBlock {
  blockType
  invertBackground
  position
  ${m}
}
`,g=`
...on Archive {
  blockType
  introContent
  populateBy
  relationTo
  ${i}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${p}
      }
      ...on Project {
        id
        slug
        title
        ${p}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${i}
        ${p}
      }
      ...on Project {
        id
        slug
        title
        ${i}
        ${p}
      }
    }
  }
  populatedDocsTotal
}
`,x=`
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        premiumContent {
          ${u}
          ${h}
          ${_}
          ${g}
        }
      }
    }
  }
`;var j=n(8693),v=n(5223),b=n(5964),f=n(3060),y=n(9893),k=n.n(y),P=n(2915),T=n(7468),C=n.n(T);let N=({top:e="medium",bottom:t="medium",className:n,children:s})=>o.jsx("div",{className:[n,C()[`top-${e}`],C()[`bottom-${t}`]].filter(Boolean).join(" "),children:s});var w=n(9520),A=n.n(w),$=n(3940),B=n(3728),H=n.n(B),D=n(8995),q=n(4175),F=n.n(q),R=n(2627),G=n(3240),S=n.n(G);let Z=e=>e?.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase();var E=n(1817),M=n.n(E);let U=e=>{let{id:t,className:n,children:s,invert:r}=e;return o.jsx("div",{id:t,className:[r&&M().invert,n].filter(Boolean).join(" "),children:s})},L={cta:({links:e,richText:t,invertBackground:n})=>o.jsx(b.T,{children:o.jsx(N,{className:[A().callToAction,n&&A().invert].filter(Boolean).join(" "),children:(0,o.jsxs)("div",{className:A().wrap,children:[o.jsx("div",{className:A().content,children:o.jsx(f.Z,{className:A().richText,content:t})}),o.jsx("div",{className:A().linkGroup,children:(e||[]).map(({link:e},t)=>o.jsx(P.g,{...e,invert:n},t))})]})})}),content:e=>{let{columns:t}=e;return o.jsx(b.T,{className:H().content,children:o.jsx("div",{className:H().grid,children:t&&t.length>0&&t.map((e,t)=>{let{enableLink:n,richText:s,link:r,size:a}=e;return(0,o.jsxs)("div",{className:[H().column,H()[`column--${a}`]].join(" "),children:[o.jsx(f.Z,{content:s}),n&&o.jsx(P.g,{className:H().link,...r})]},t)})})})},mediaBlock:e=>{let t;let{media:n,position:s="default",staticImage:r}=e;return n&&"object"==typeof n&&(t=n.caption),(0,o.jsxs)("div",{className:F().mediaBlock,children:["fullscreen"===s&&o.jsx("div",{className:F().fullscreen,children:o.jsx(D.p,{resource:n,src:r})}),"default"===s&&o.jsx(b.T,{children:o.jsx(D.p,{resource:n,src:r})}),t&&o.jsx(b.T,{className:F().caption,children:o.jsx(f.Z,{content:t})})]})},archive:e=>{let{introContent:t,id:n,relationTo:s,populateBy:r,limit:a,populatedDocs:l,populatedDocsTotal:i,selectedDocs:c,categories:d}=e;return(0,o.jsxs)("div",{id:`block-${n}`,className:k().archiveBlock,children:[t&&o.jsx(b.T,{className:k().introContent,children:o.jsx(f.Z,{content:t})}),o.jsx(v.CollectionArchive,{populateBy:r,relationTo:s,populatedDocs:l,populatedDocsTotal:i,selectedDocs:c,categories:d,limit:a,sort:"-publishedAt"})]})},relatedPosts:e=>{let{introContent:t,docs:n,relationTo:s}=e;return(0,o.jsxs)("div",{className:S().relatedPosts,children:[t&&o.jsx(b.T,{className:S().introContent,children:o.jsx(f.Z,{content:t})}),o.jsx(b.T,{children:o.jsx("div",{className:S().grid,children:n?.map((e,t)=>"string"==typeof e?null:o.jsx("div",{className:[S().column,2===n.length&&S()["cols-half"],n.length>=3&&S()["cols-thirds"]].filter(Boolean).join(" "),children:o.jsx(R.Z,{relationTo:s,doc:e,showCategories:!0})},t))})})]})},comments:$.CommentsBlock},W=e=>{let{disableTopPadding:t,blocks:n}=e,r=n&&Array.isArray(n)&&n.length>0;return r?o.jsx(s.Fragment,{children:n.map((e,s)=>{let{blockName:r,blockType:a}=e;if(a&&a in L){let l=L[a],i="invertBackground"in e&&"cta"!==a&&e.invertBackground,c=n[s-1],d=c&&"invertBackground"in c&&c?.invertBackground,m="large",p="large";if(c&&!!i==!!d&&(m="none"),s===n.length-1&&(p="large"),t&&0===s&&(m="none"),l)return o.jsx(U,{invert:i,children:o.jsx(N,{top:m,bottom:p,children:o.jsx(l,{id:Z(r),...e})})},s)}return null})}):null};var O=n(2215),X=n.n(O);let Y=e=>{let t=Array.from(Array(e.number||1).keys());return o.jsx("div",{className:X().loading,children:t.map((e,t)=>o.jsx("div",{className:X().shimmer},t))})};var K=n(2655);let V=e=>{let{postSlug:t,disableTopPadding:n}=e,{user:a}=(0,j.a)(),[i,c]=r().useState(!1),[d,m]=r().useState(),p=r().useRef(!1),u=r().useRef(!1);return((0,s.useEffect)(()=>{if(!a||p.current||u.current)return;p.current=!0,u.current=!0;let e=Date.now(),n=async()=>{c(!0);try{let n=await fetch("http://localhost:3000/api/graphql",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:x,variables:{slug:t}})})?.then(e=>e.json())?.then(e=>e?.data?.Posts.docs[0]?.premiumContent);n&&m(n);let o=Date.now();o-e<1e3&&await new Promise(t=>setTimeout(t,500-(o-e))),c(!1)}catch(e){console.error(e),c(!1)}};n(),u.current=!1},[a,t]),void 0===a)?null:null===a?o.jsx(b.T,{children:o.jsx(N,{bottom:"large",top:"none",children:o.jsx(K.v,{message:(0,o.jsxs)(o.Fragment,{children:["This content is gated behind authentication. You must be ",o.jsx(l(),{href:`/login?redirect=${encodeURIComponent(window.location.pathname)}`,children:"logged in"})," to view this content."]})})})}):i?o.jsx(b.T,{children:o.jsx(N,{bottom:"large",top:"none",children:o.jsx(Y,{})})}):d&&0!==d.length?o.jsx(W,{blocks:d,disableTopPadding:n}):o.jsx(b.T,{children:o.jsx(N,{bottom:"large",top:"none",children:o.jsx(K.v,{message:"Log in to unlock this premium content."})})})}},9893:e=>{e.exports={archiveBlock:"ArchiveBlock_archiveBlock__5UEq_",introContent:"ArchiveBlock_introContent__H4Ko0"},e.exports.__checksum="35096ecb5b22"},9520:e=>{e.exports={callToAction:"CallToAction_callToAction__WNeXD",invert:"CallToAction_invert__tvOO1",wrap:"CallToAction_wrap__AK9_4",content:"CallToAction_content__BiisP",linkGroup:"CallToAction_linkGroup__jZg4Y"},e.exports.__checksum="32442875b3b7"},3728:e=>{e.exports={grid:"Content_grid__7xRAI","column--oneThird":"Content_column--oneThird__HyYv1","column--half":"Content_column--half___Gx1x","column--twoThirds":"Content_column--twoThirds__QXm6g","column--full":"Content_column--full__D_eoS",column:"Content_column__bhKOQ",link:"Content_link__5_dJG"},e.exports.__checksum="7ea6d385335b"},4175:e=>{e.exports={mediaBlock:"MediaBlock_mediaBlock__kLxM0",caption:"MediaBlock_caption__vE6Rw"},e.exports.__checksum="9103938fdf7c"},3240:e=>{e.exports={introContent:"RelatedPosts_introContent__rC_B_",grid:"RelatedPosts_grid__6I_Hu",column:"RelatedPosts_column__CatHL","cols-half":"RelatedPosts_cols-half__S3xN3","cols-thirds":"RelatedPosts_cols-thirds___Q5VW"},e.exports.__checksum="ff78876dbaaf"},1817:e=>{e.exports={invert:"BackgroundColor_invert__8yPWe"},e.exports.__checksum="043799d422a9"},2215:e=>{e.exports={loading:"LoadingShimmer_loading__sK7Rg",shimmer:"LoadingShimmer_shimmer__YtrFI"},e.exports.__checksum="eba6cbe2403e"},7468:e=>{e.exports={"top-large":"VerticalPadding_top-large__Fdv3J","top-medium":"VerticalPadding_top-medium__8WZul","bottom-large":"VerticalPadding_bottom-large__W6wnm","bottom-medium":"VerticalPadding_bottom-medium__T9Qsp"},e.exports.__checksum="275c76d22479"},4884:e=>{e.exports={leader:"PostHero_leader__dXb5O",postHero:"PostHero_postHero__n2saY",content:"PostHero_content__AqcUA",title:"PostHero_title___txbY",warning:"PostHero_warning__AFn65",meta:"PostHero_meta__yXA9E",description:"PostHero_description__yk3mG",media:"PostHero_media__azoTa",mediaWrapper:"PostHero_mediaWrapper__yXeZK",image:"PostHero_image__lH8GL",placeholder:"PostHero_placeholder__F_Gvi",caption:"PostHero_caption__UCHRf"},e.exports.__checksum="b8a7638b6840"},1333:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w,dynamic:()=>N,generateMetadata:()=>$,generateStaticParams:()=>A});var o=n(8144),s=n(3830),r=n.n(s),a=n(9859),l=n(6465),i=n(6825),c=n(9882),d=n(1933),m=n(77),p=n(7536);let u=(0,p.createProxy)(String.raw`C:\Users\masdu\Desktop\newproject\src\app\_components\PremiumContent\index.tsx`),{__esModule:h,$$typeof:_}=u;u.default;let g=u.PremiumContent;var x=n(4602),j=n.n(x),v=n(3205),b=n(6355),f=n(702),y=n(6993),k=n(4884),P=n.n(k);let T=({post:e})=>{let{id:t,title:n,categories:r,meta:{image:a,description:l}={},publishedAt:i,populatedAuthors:c}=e;return o.jsx(s.Fragment,{children:(0,o.jsxs)(v.T,{className:P().postHero,children:[(0,o.jsxs)("div",{className:P().content,children:[o.jsx("div",{className:P().leader,children:o.jsx("div",{className:P().categories,children:r?.map((e,t)=>{if("object"==typeof e&&null!==e){let{title:n}=e,a=t===r.length-1;return o.jsxs(s.Fragment,{children:[n||"Untitled category",!a&&o.jsx(s.Fragment,{children:", \xa0"})]},t)}return null})})}),o.jsx("h1",{className:P().title,children:n}),(0,o.jsxs)("p",{className:P().meta,children:[c&&(0,o.jsxs)(s.Fragment,{children:["By ",c.map((e,t)=>{let{name:n}=e,r=t===c.length-1,a=t===c.length-2;return(0,o.jsxs)(s.Fragment,{children:[n,a&&c.length>2&&o.jsx(s.Fragment,{children:", "}),a&&2===c.length&&o.jsx(s.Fragment,{children:" "}),!r&&c.length>1&&o.jsx(s.Fragment,{children:"and "})]},t)})]}),i&&(0,o.jsxs)(s.Fragment,{children:[" on ",(0,y.o)(i)]})]}),o.jsx("div",{children:(0,o.jsxs)("p",{className:P().description,children:[`${l?`${l} `:""}To edit this post, `,o.jsx(j(),{href:`http://localhost:3000/admin/collections/posts/${t}`,children:"navigate to the admin dashboard"}),"."]})})]}),(0,o.jsxs)("div",{className:P().media,children:[(0,o.jsxs)("div",{className:P().mediaWrapper,children:[!a&&o.jsx("div",{className:P().placeholder,children:"No image"}),a&&"string"!=typeof a&&o.jsx(b.p,{imgClassName:P().image,resource:a,fill:!0})]}),a&&"string"!=typeof a&&a?.caption&&o.jsx(f.Z,{content:a.caption,className:P().caption})]})]})})};var C=n(839);let N="force-dynamic";async function w({params:{slug:e}}){let{isEnabled:t}=(0,a.draftMode)(),n=null;try{n=await (0,c.D)({collection:"posts",slug:e,draft:t})}catch(e){console.error(e)}n||(0,l.notFound)();let s=await (0,i.t)({doc:n?.id}),{layout:d,relatedPosts:p,enablePremiumContent:u,premiumContent:h}=n;return(0,o.jsxs)(r().Fragment,{children:[o.jsx(T,{post:n}),o.jsx(m.n,{blocks:d}),u&&o.jsx(g,{postSlug:e,disableTopPadding:!0}),o.jsx(m.n,{disableTopPadding:!0,blocks:[{blockType:"comments",blockName:"Comments",relationTo:"posts",introContent:[{type:"h4",children:[{text:"Comments"}]},{type:"p",children:[{text:'Authenticated users can leave comments on this post. All new comments are given the status "draft" until they are approved by an admin. Draft comments are not accessible to the public and will not show up on this page until it is marked as "published". To manage all comments, '},{type:"link",url:"/admin/collections/comments",children:[{text:"navigate to the admin dashboard"}]},{text:"."}]}],doc:n,comments:s},{blockType:"relatedPosts",blockName:"Related Posts",relationTo:"posts",introContent:[{type:"h4",children:[{text:"Related posts"}]},{type:"p",children:[{text:'The posts displayed here are individually selected for this page. Admins can select any number of related posts to display here and the layout will adjust accordingly. Alternatively, you could swap this out for the "Archive" block to automatically populate posts by category complete with pagination. To manage related posts, '},{type:"link",url:`/admin/collections/posts/${n.id}`,children:[{text:"navigate to the admin dashboard"}]},{text:"."}]}],docs:p}]})]})}async function A(){try{let e=await (0,d.N)("posts");return e?.map(({slug:e})=>e)}catch(e){return[]}}async function $({params:{slug:e}}){let{isEnabled:t}=(0,a.draftMode)(),n=null;try{n=await (0,c.D)({collection:"posts",slug:e,draft:t})}catch(e){}return(0,C.v)({doc:n})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),o=t.X(0,[4650,2560,345,3497,5094,6558,9859,6465,2451,1073,6420,7507,702,484,7770,4613,7617,9217,3435],()=>n(1528));module.exports=o})();