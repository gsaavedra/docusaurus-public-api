"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[3935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:61,title:"C\xf3digos tributarios",description:"Listar c\xf3digos tributarios",slug:"/codigos-tributarios"},o="C\xf3digos tributarios",s={unversionedId:"Informaci\xf3n SII/C\xf3digos tributarios",id:"version-CL/Informaci\xf3n SII/C\xf3digos tributarios",title:"C\xf3digos tributarios",description:"Listar c\xf3digos tributarios",source:"@site/versioned_docs/version-CL/Informaci\xf3n SII/C\xf3digos tributarios.md",sourceDirName:"Informaci\xf3n SII",slug:"/codigos-tributarios",permalink:"/docusaurus-public-api/CL/codigos-tributarios",draft:!1,tags:[],version:"CL",sidebarPosition:61,frontMatter:{sidebar_position:61,title:"C\xf3digos tributarios",description:"Listar c\xf3digos tributarios",slug:"/codigos-tributarios"},sidebar:"tutorialSidebar",previous:{title:"Tipos de libro",permalink:"/docusaurus-public-api/CL/tipos-de-libros"},next:{title:"Impuestos",permalink:"/docusaurus-public-api/CL/impuestos"}},l={},d=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de C\xf3digos tributarios",id:"get-lista-de-c\xf3digos-tributarios",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET \xfanico c\xf3digo tributario",id:"get-\xfanico-c\xf3digo-tributario",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"c\xf3digos-tributarios"},"C\xf3digos tributarios"),(0,i.kt)("p",null,"Hace referencia a los c\xf3digos del Tipo Documento Tributario Electr\xf3nico, adem\xe1s de otras referencias v\xe1lidas ante SII. Puedes encontrar mas detalles en ",(0,i.kt)("a",{parentName:"p",href:"https://www.sii.cl/factura_electronica/formato_dte.pdf"},"\xe9ste link")," (P\xe1g. 11)"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Consultar c\xf3digos de aduana SII ",(0,i.kt)("a",{parentName:"p",href:"http://comext.aduana.cl:7001/codigos/"},"Ver"))),(0,i.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,i.kt)("p",null,"Al realizar una petici\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /dte_codes/8.json"',title:'"Response','/dte_codes/8.json"':!0},'{\n   "href": "https://api.bsale.io/v1/dte_codes/8.json",\n   "id": 8,\n   "name": "Factura Electr\xf3nica",\n   "codeSii": "33",\n   "state": 0\n}\n')),(0,i.kt)("h3",{id:"atributos"},"Atributos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"href")),(0,i.kt)("td",{parentName:"tr",align:null},"url del C\xf3digos tributarios"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del C\xf3digos tributarios"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"nombre del c\xf3digo tributario"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"codeSii")),(0,i.kt)("td",{parentName:"tr",align:null},"c\xf3digo tributario"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:null},"estado del c\xf3digo tributario indica si esta activo(0) o inactivo (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,i.kt)("h2",{id:"get-lista-de-c\xf3digos-tributarios"},"GET lista de C\xf3digos tributarios"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/dte_codes.json")," retornar\xe1 todos los C\xf3digos tributarios.")),(0,i.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre del c\xf3digo tributario."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"codesii"),", filtra por c\xf3digo tributario."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si las monedas est\xe1n activas(0) inactivas(1).")),(0,i.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/dte_codes.json?limit=10&offset=0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/dte_codes.json?fields=[name,codesii,state]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /dte_codes.json "',title:'"Response',"/dte_codes.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/dte_codes.json",\n  "count": 38,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/28.json",\n      "id": 28,\n      "name": "AWB (Air Will Bill)",\n      "codeSii": 809,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/27.json",\n      "id": 27,\n      "name": "B/L (Conocimiento de embarque)",\n      "codeSii": 808,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/35.json",\n      "id": 35,\n      "name": "Boleta",\n      "codeSii": 35,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/10.json",\n      "id": 10,\n      "name": "Boleta Electr\xf3nica",\n      "codeSii": 39,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/1.json",\n      "id": 1,\n      "name": "Boleta Exenta",\n      "codeSii": 38,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/11.json",\n      "id": 11,\n      "name": "Boleta Exenta Electr\xf3nica",\n      "codeSii": 41,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/30.json",\n      "id": 30,\n      "name": "Carta de Porte",\n      "codeSii": 811,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/33.json",\n      "id": 33,\n      "name": "Certificado de Dep\xf3sito Bolsa Prod. Chile",\n      "codeSii": 814,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/22.json",\n      "id": 22,\n      "name": "Contrato",\n      "codeSii": 803,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/38.json",\n      "id": 38,\n      "name": "Declaraci\xf3n de Ingreso (DIN)",\n      "codeSii": 914,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/26.json",\n      "id": 26,\n      "name": "DUS",\n      "codeSii": 807,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/36.json",\n      "id": 36,\n      "name": "Factura",\n      "codeSii": 30,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/2.json",\n      "id": 2,\n      "name": "Factura de Compra",\n      "codeSii": 45,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/12.json",\n      "id": 12,\n      "name": "Factura de Compra Electr\xf3nica",\n      "codeSii": 46,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/17.json",\n      "id": 17,\n      "name": "Factura de Exportaci\xf3n Electr\xf3nica",\n      "codeSii": 110,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/8.json",\n      "id": 8,\n      "name": "Factura Electr\xf3nica",\n      "codeSii": 33,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/37.json",\n      "id": 37,\n      "name": "Factura Exenta",\n      "codeSii": 32,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/9.json",\n      "id": 9,\n      "name": "Factura No Afecta o Exenta Electr\xf3nica",\n      "codeSii": 34,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/25.json",\n      "id": 25,\n      "name": "Ficha ChileCompra",\n      "codeSii": 806,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/15.json",\n      "id": 15,\n      "name": "Gu\xeda de Despacho",\n      "codeSii": 50,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/16.json",\n      "id": 16,\n      "name": "Gu\xeda de Despacho Electr\xf3nica",\n      "codeSii": 52,\n      "state": 0\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/5.json",\n      "id": 5,\n      "name": "Liquidaci\xf3n",\n      "codeSii": 103,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/6.json",\n      "id": 6,\n      "name": "Liquidaci\xf3n Factura",\n      "codeSii": 40,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/7.json",\n      "id": 7,\n      "name": "Liquidaci\xf3n-Factura Electr\xf3nica",\n      "codeSii": 43,\n      "state": 1\n    },\n    {\n      "href": "https://api.bsale.io/v1/dte_codes/29.json",\n      "id": 29,\n      "name": "MIC/DTA",\n      "codeSii": 810,\n      "state": 1\n    }\n  ],\n  "next": "https://api.bsale.io/v1/dte_codes.json?limit=25&offset=25"\n}\n')),(0,i.kt)("h2",{id:"get-\xfanico-c\xf3digo-tributario"},"GET \xfanico c\xf3digo tributario"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/dte_codes/1.json")," retornar\xe1 un tipo de c\xf3digo tributario")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /dte_codes/8.json"',title:'"Response','/dte_codes/8.json"':!0},'{\n  "href": "https://api.bsale.io/v1/dte_codes/8.json",\n  "id": 8,\n  "name": "Factura Electr\xf3nica",\n  "codeSii": "33",\n  "state": 0\n}\n')))}u.isMDXComponent=!0}}]);