"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[9642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=i(r),b=n,m=g["".concat(s,".").concat(b)]||g[b]||p[b]||a;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const a={slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},l=void 0,u={permalink:"/docusaurus-public-api/blog/welcome",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/docusaurus-public-api/blog/tags/facebook"},{label:"hello",permalink:"/docusaurus-public-api/blog/tags/hello"},{label:"docusaurus",permalink:"/docusaurus-public-api/blog/tags/docusaurus"}],hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"},{name:"Yangshun Tay",title:"Front End Engineer @ Facebook",url:"https://github.com/yangshun",imageURL:"https://github.com/yangshun.png",key:"yangshun"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["slorber","yangshun"],tags:["facebook","hello","docusaurus"]},prevItem:{title:"Long Blog Post",permalink:"/docusaurus-public-api/blog/long-blog-post"},nextItem:{title:"MDX Blog Post",permalink:"/docusaurus-public-api/blog/mdx-blog-post"}},s={authorsImageUrls:[void 0,void 0]},i=[],c={toc:i};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,n.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,n.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,n.kt)("p",null,"Regular blog authors can be added to ",(0,n.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,n.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,n.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus Plushie",src:r(560).Z,width:"1500",height:"500"})),(0,n.kt)("p",null,"The blog supports tags as well!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,n.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}p.isMDXComponent=!0},560:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);