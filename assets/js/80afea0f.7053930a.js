"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[8099],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),u=a(6775),s=a(1980),i=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,i]=b({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var v=a(2389);const h="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=i[a].value;n!==u&&(p(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},9373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const u={slug:"caso-de-uso-ejemplo",title:"Este es un ejemplo de caso de uso",authors:["Hector"],tags:["documentos","stock","CL","PE","MX"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1,draft:!1,unlisted:!1},s=void 0,i={permalink:"/docusaurus-public-api/use-cases/caso-de-uso-ejemplo",source:"@site/use-cases/2020-12-01-ejemplo.md",title:"Este es un ejemplo de caso de uso",description:"Todo caso de uso debe contener un enunciado, que deber\xe1 describir el caso planteado. Indicando el pa\xeds que afecta",date:"2020-12-01T00:00:00.000Z",formattedDate:"December 1, 2020",tags:[{label:"documentos",permalink:"/docusaurus-public-api/use-cases/tags/documentos"},{label:"stock",permalink:"/docusaurus-public-api/use-cases/tags/stock"},{label:"CL",permalink:"/docusaurus-public-api/use-cases/tags/cl"},{label:"PE",permalink:"/docusaurus-public-api/use-cases/tags/pe"},{label:"MX",permalink:"/docusaurus-public-api/use-cases/tags/mx"}],hasTruncateMarker:!0,authors:[{name:"Hector Alvarado",title:"API/Integraciones",url:"https://www.bsale.cl/sheet/integraciones",imageURL:"https://i.imgur.com/U0LjsQz.png",key:"Hector"}],frontMatter:{slug:"caso-de-uso-ejemplo",title:"Este es un ejemplo de caso de uso",authors:["Hector"],tags:["documentos","stock","CL","PE","MX"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1,draft:!1,unlisted:!1},prevItem:{title:"\xbfC\xf3mo crear una Factura electr\xf3nica?",permalink:"/docusaurus-public-api/use-cases/como-crear-una-factura-api-bsale"}},c={authorsImageUrls:[void 0]},p=[{value:"T\xedtulo Nivel 2",id:"t\xedtulo-nivel-2",level:2},{value:"T\xedtulo Nivel 3",id:"t\xedtulo-nivel-3",level:3},{value:"T\xedtulo Nivel 4",id:"t\xedtulo-nivel-4",level:4},{value:"Hiperv\xednculos",id:"hiperv\xednculos",level:2},{value:"Im\xe1genes",id:"im\xe1genes",level:2},{value:"Tablas",id:"tablas",level:2},{value:"Bloques",id:"bloques",level:2},{value:"GET Endpoint",id:"get-endpoint",level:2},{value:"Ejemplos",id:"ejemplos",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Todo caso de uso debe contener un enunciado, que deber\xe1 describir el caso planteado. Indicando el pa\xeds que afecta"),(0,r.kt)("p",null,"Se deber\xe1 introducir al tema, describiendo el flujo, proceso u operaci\xf3n dentro de Bsale. "),(0,r.kt)("h2",{id:"t\xedtulo-nivel-2"},"T\xedtulo Nivel 2"),(0,r.kt)("h3",{id:"t\xedtulo-nivel-3"},"T\xedtulo Nivel 3"),(0,r.kt)("h4",{id:"t\xedtulo-nivel-4"},"T\xedtulo Nivel 4"),(0,r.kt)("h2",{id:"hiperv\xednculos"},"Hiperv\xednculos"),(0,r.kt)("p",null,"This is reference-style link. ",(0,r.kt)("a",{parentName:"p",href:"Despacho",title:"opcional descr"},"enlace")),(0,r.kt)("h2",{id:"im\xe1genes"},"Im\xe1genes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.imagestion.cl/images/logo_bsale.png",alt:"Example banner"})),(0,r.kt)("h2",{id:"tablas"},"Tablas"),(0,r.kt)(l.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.kt)(o.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.kt)(o.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,r.kt)("h2",{id:"bloques"},"Bloques"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Some ",(0,r.kt)("strong",{parentName:"p"},"content")," with ",(0,r.kt)("em",{parentName:"p"},"Markdown")," ",(0,r.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.kt)("a",{parentName:"p",href:"#"},"this ",(0,r.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,r.kt)("h1",{id:"estructura-get"},"Estructura GET"),(0,r.kt)("h2",{id:"get-endpoint"},"GET Endpoint"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/documents.json")," retorna todos los documentos.")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/documents.json?limit=50&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/documents.json?fields=[number,totalAmount]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response Recurso.json "',title:'"Response',"Recurso.json":!0,'"':!0},'            "guide": {\n                "href": "https://api.bsale.cl/v1/documents/1510.json",\n                "id": "1510",\n                "number": 1,\n                "urlPublicView": "https://app2.bsale.cl/view/8849/0ac5ee433f00?sfd=99",\n                "urlPdf": "https://app2.bsale.cl/view/8849/0ac5ee433f00.pdf?sfd=99",\n                "urlPublicViewOriginal": "https://app2.bsale.cl/view/8849/0ac5ee433f00",\n                "urlPdfOriginal": "https://app2.bsale.cl/view/8849/0ac5ee433f00.pdf"\n            }\n')))}m.isMDXComponent=!0}}]);