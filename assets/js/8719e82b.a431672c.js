"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[4433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:51,title:"Descuentos",description:"Listar descuentos",slug:"/descuentos"},o="Descuentos",i={unversionedId:"Configuraci\xf3n/Descuentos",id:"version-PE/Configuraci\xf3n/Descuentos",title:"Descuentos",description:"Listar descuentos",source:"@site/versioned_docs/version-PE/Configuraci\xf3n/Descuentos.md",sourceDirName:"Configuraci\xf3n",slug:"/descuentos",permalink:"/docusaurus-public-api/PE/descuentos",draft:!1,tags:[],version:"PE",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"Descuentos",description:"Listar descuentos",slug:"/descuentos"},sidebar:"tutorialSidebar",previous:{title:"Atributos din\xe1micos",permalink:"/docusaurus-public-api/PE/atributos-dinamicos"},next:{title:"Sucursales",permalink:"/docusaurus-public-api/PE/sucursales"}},l={},u=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de descuentos",id:"get-lista-de-descuentos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un descuento",id:"get-un-descuento",level:2},{value:"GET cantidad de descuentos",id:"get-cantidad-de-descuentos",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"descuentos"},"Descuentos"),(0,r.kt)("p",null,"Consulta descuentos creados, todos los descuentos se trabajan porcentualmente. Si se desea usar el descuento, ver documentos."),(0,r.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gesti\xf3n descuentos ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=494ofFQGNuY"},"Ver")," ")),(0,r.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,r.kt)("p",null,"Al realizar una petici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /discounts/1.json"',title:'"Response','/discounts/1.json"':!0},'{\n  "href": "https://api.bsale.io/v1/discounts/1.json",\n  "id": 1,\n  "name": "Ajuste Precio",\n  "percentage": "14.3",\n  "state": 1,\n  "automatic": 0\n}\n')),(0,r.kt)("h3",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"href")),(0,r.kt)("td",{parentName:"tr",align:null},"url del pago"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del pago"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre del descuento"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("p",null,"| ",(0,r.kt)("strong",{parentName:"p"},"percentage"),", porcentaje del descuento (String).\n| ",(0,r.kt)("strong",{parentName:"p"},"state"),", estado del descuento indica si el descuento esta activo(0) o inactivo (1) (Boolean).\n| ",(0,r.kt)("strong",{parentName:"p"},"automatic"),", indica si el descuento se aplica autom\xe1ticamente, No(0) o Si (1) (Boolean)."),(0,r.kt)("h2",{id:"get-lista-de-descuentos"},"GET lista de descuentos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/discounts.json")," retornar\xe1 todos los descuentos.")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre del descuento."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"percentage"),", filtra por porcentaje de descuento."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los descuentos est\xe1n activos(0) inactivos(1).")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/discounts.json?limit=10&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/discounts.json?fields=[name,percentage,state]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /discounts.json "',title:'"Response',"/discounts.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/discounts.json",\n  "count": 3,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/discounts/1.json",\n      "id": 1,\n      "name": "Ajuste Precio",\n      "percentage": "14.3",\n      "state": 1,\n      "automatic": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/discounts/3.json",\n      "id": 3,\n      "name": "Descuento CPT",\n      "percentage": "75.0",\n      "state": 0,\n      "automatic": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/discounts/2.json",\n      "id": 2,\n      "name": "Descuento Imagestion",\n      "percentage": "25.0",\n      "state": 1,\n      "automatic": 0\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-un-descuento"},"GET un descuento"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/discounts/1.json")," retornar\xe1 un descuento.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /discounts/1.json"',title:'"Response','/discounts/1.json"':!0},'{\n  "href": "https://api.bsale.io/v1/discounts/1.json",\n  "id": 1,\n  "name": "Descuentos cliente preferencial",\n  "percentage": "14.3",\n  "state": 1,\n  "automatic": 0\n}\n')),(0,r.kt)("h2",{id:"get-cantidad-de-descuentos"},"GET cantidad de descuentos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/clients/discounts.json")," Retornar\xe1 cantidades de registros.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los clientess est\xe1n activos(0) inactivos (1)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 3\n}\n')))}p.isMDXComponent=!0}}]);