exports.id=702,exports.ids=[702],exports.modules={1675:e=>{e.exports={label:"Label_label__jIJix"},e.exports.__checksum="cf68d07545a2"},4690:e=>{e.exports={largeBody:"LargeBody_largeBody__4csV5"},e.exports.__checksum="b3616a11d61f"},3585:e=>{e.exports={richText:"RichText_richText__8IUJ0"},e.exports.__checksum="4b21345af45c"},702:(e,r,l)=>{"use strict";l.d(r,{Z:()=>m});var n=l(8144),c=l(3830),s=l(6789),i=l.n(s),t=l(2766),h=l(1675),d=l.n(h);let a=({children:e})=>n.jsx("p",{className:d().label,children:e});var x=l(4690),o=l.n(x);let u=({children:e})=>n.jsx("p",{className:o().largeBody,children:e});var j=l(584);let p=e=>e?.map((e,r)=>{if(t.xv.isText(e)){let l=n.jsx("span",{dangerouslySetInnerHTML:{__html:i()(e.text)}});return e.bold&&(l=n.jsx("strong",{children:l},r)),e.code&&(l=n.jsx("code",{children:l},r)),e.italic&&(l=n.jsx("em",{children:l},r)),e.underline&&(l=n.jsx("span",{style:{textDecoration:"underline"},children:l},r)),e.strikethrough&&(l=n.jsx("span",{style:{textDecoration:"line-through"},children:l},r)),n.jsx(c.Fragment,{children:l},r)}if(!e)return null;switch(e.type){case"h1":return n.jsx("h1",{children:p(e?.children)},r);case"h2":return n.jsx("h2",{children:p(e?.children)},r);case"h3":return n.jsx("h3",{children:p(e?.children)},r);case"h4":return n.jsx("h4",{children:p(e?.children)},r);case"h5":return n.jsx("h5",{children:p(e?.children)},r);case"h6":return n.jsx("h6",{children:p(e?.children)},r);case"quote":return n.jsx("blockquote",{children:p(e?.children)},r);case"ul":return n.jsx("ul",{children:p(e?.children)},r);case"ol":return n.jsx("ol",{children:p(e.children)},r);case"li":return n.jsx("li",{children:p(e.children)},r);case"link":return n.jsx(j.g,{type:"internal"===e.linkType?"reference":"custom",url:e.url,reference:e.doc,newTab:!!e?.newTab,children:p(e?.children)},r);case"label":return n.jsx(a,{children:p(e?.children)},r);case"large-body":return n.jsx(u,{children:p(e?.children)},r);default:return n.jsx("p",{children:p(e?.children)},r)}})||[];var _=l(3585),b=l.n(_);let m=({className:e,content:r})=>r?n.jsx("div",{className:[b().richText,e].filter(Boolean).join(" "),children:p(r)}):null}};