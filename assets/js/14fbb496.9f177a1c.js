"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[9097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:57,title:"Formas de pago",description:"Crear y listar Formas de pago",slug:"/formas-de-pago"},o="Formas de pago",l={unversionedId:"Configuraci\xf3n/Formas de pago/Formas de pago",id:"version-CL/Configuraci\xf3n/Formas de pago/Formas de pago",title:"Formas de pago",description:"Crear y listar Formas de pago",source:"@site/versioned_docs/version-CL/Configuraci\xf3n/Formas de pago/Formas de pago.md",sourceDirName:"Configuraci\xf3n/Formas de pago",slug:"/formas-de-pago",permalink:"/docusaurus-public-api/CL/formas-de-pago",draft:!1,tags:[],version:"CL",sidebarPosition:57,frontMatter:{sidebar_position:57,title:"Formas de pago",description:"Crear y listar Formas de pago",slug:"/formas-de-pago"},sidebar:"tutorialSidebar",previous:{title:"Tipos de despacho",permalink:"/docusaurus-public-api/CL/tipos-de-despacho"},next:{title:"Condici\xf3n de venta",permalink:"/docusaurus-public-api/CL/condicion-de-venta"}},s={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de formas de pago",id:"get-lista-de-formas-de-pago",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET una forma de pago",id:"get-una-forma-de-pago",level:2},{value:"GET cantidad de formas de pago",id:"get-cantidad-de-formas-de-pago",level:2},{value:"GET atributos dinamicos de la forma de pago",id:"get-atributos-dinamicos-de-la-forma-de-pago",level:2},{value:"POST una forma de pago",id:"post-una-forma-de-pago",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Sin especificar un tipo",id:"sin-especificar-un-tipo",level:4},{value:"En el caso del cheque se debe enviar el m\xe1ximo de cheques permitidos.",id:"en-el-caso-del-cheque-se-debe-enviar-el-m\xe1ximo-de-cheques-permitidos",level:4},{value:"Si es abono de cliente.",id:"si-es-abono-de-cliente",level:4},{value:"En caso de tener un enlace contable se puede enviar la cuenta contable y c\xf3digo contable.",id:"en-caso-de-tener-un-enlace-contable-se-puede-enviar-la-cuenta-contable-y-c\xf3digo-contable",level:4},{value:"Atributos (opcional)",id:"atributos-opcional",level:3},{value:"Respuesta",id:"respuesta",level:4}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"formas-de-pago"},"Formas de pago"),(0,r.kt)("p",null,"Listar, crear  formas de pago en Bsale. "),(0,r.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gesti\xf3n de Formas de pago ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rbPfv1mVCzU"},"Ver")," ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Para usar las formas de pago creadas, revisar arreglo ",(0,r.kt)("inlineCode",{parentName:"p"},"payments")," en el env\xedo del documento.")),(0,r.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,r.kt)("p",null,"Al realizar una petici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /payment_types/1.json"',title:'"Response','/payment_types/1.json"':!0},'{\n  "href": "https://api.bsale.io/v1/payment_types/1.json",\n  "id": 1,\n  "name": "Deposito en Cuenta Corriente",\n  "isVirtual": 1,\n  "isCheck": 0,\n  "maxCheck": null,\n  "isCreditNote": 0,\n  "isClientCredit": 0,\n  "isCash": 0,\n  "isCreditMemo": 0,\n  "state": 0,\n  "maxClientCuota": 0,\n  "ledgerAccount": null,\n  "ledgerCode": null,\n  "isAgreementBank": 0,\n  "agreementCode": ""\n}\n')),(0,r.kt)("h3",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"href")),(0,r.kt)("td",{parentName:"tr",align:null},"url del Formas de pago"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del Formas de pago"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"nombre de la forma de pago"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isVirtual")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si se puede trabajar con la forma de pago en la web (el cheque no puede), No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isCheck")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la forma de pago es cheque, No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"maxCheck")),(0,r.kt)("td",{parentName:"tr",align:null},"indica el m\xe1ximo de cheques permitidos"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isCreditNote")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la forma de pago es una nota de cr\xe9dito, No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isClientCredit")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la forma de pago es cr\xe9dito para un cliente, No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isCash")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la forma de pago es efectivo, No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isCreditMemo")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la forma de pago es un abono, No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"state")),(0,r.kt)("td",{parentName:"tr",align:null},"estado de la forma de pago activo(0) o inactivo (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"maxClientCuota")),(0,r.kt)("td",{parentName:"tr",align:null},"indica el m\xe1ximo de cuotas disponibles para un cliente"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ledgerAccount")),(0,r.kt)("td",{parentName:"tr",align:null},"indica la cuenta contable de la forma de pago"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ledgerCode")),(0,r.kt)("td",{parentName:"tr",align:null},"indica el c\xf3digo contable de la forma de pago"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"isAgreementBank")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la forma de pago es un enlace bancario ejemplo caja vecina, No(0) o Si (1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"agreementCode")),(0,r.kt)("td",{parentName:"tr",align:null},"indica el c\xf3digo del enlace bancario"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h2",{id:"get-lista-de-formas-de-pago"},"GET lista de formas de pago"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/payment_types.json")," retornar\xe1 todas los formas de pago.")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre de la forma de pago."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ledgeraccount"),", cuenta contable de la forma de pago"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si las formas de pago est\xe1n activas(0) inactivas(1).")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/payment_types.json?limit=10&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/payment_types.json?fields=[name,ledgeraccount]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/payment_types.json?state=0"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /payment_types.json "',title:'"Response',"/payment_types.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/payment_types.json",\n  "count": 4,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/payment_types/7.json",\n      "id": 7,\n      "name": "ABONO DE CLIENTE",\n      "isVirtual": 0,\n      "isCheck": 0,\n      "maxCheck": null,\n      "isCreditNote": 0,\n      "isClientCredit": 0,\n      "isCash": 0,\n      "isCreditMemo": 1,\n      "state": 0,\n      "maxClientCuota": 0,\n      "ledgerAccount": "",\n      "ledgerCode": null,\n      "isAgreementBank": 0,\n      "agreementCode": null\n    },\n    {\n      "href": "https://api.bsale.io/v1/payment_types/5.json",\n      "id": 5,\n      "name": "CHEQUE",\n      "isVirtual": 0,\n      "isCheck": 1,\n      "maxCheck": 3,\n      "isCreditNote": 0,\n      "isClientCredit": 0,\n      "isCash": 0,\n      "isCreditMemo": 0,\n      "state": 0,\n      "maxClientCuota": 0,\n      "ledgerAccount": "1110201",\n      "ledgerCode": null,\n      "isAgreementBank": 0,\n      "agreementCode": null,\n      "dynamic_attributes": {\n        "href": "https://api.bsale.io/v1/payment_types/5/dynamic_attributes.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/payment_types/4.json",\n      "id": 4,\n      "name": "CREDITO",\n      "isVirtual": 0,\n      "isCheck": 0,\n      "maxCheck": null,\n      "isCreditNote": 0,\n      "isClientCredit": 1,\n      "isCash": 0,\n      "isCreditMemo": 0,\n      "state": 0,\n      "maxClientCuota": 0,\n      "ledgerAccount": "",\n      "ledgerCode": null,\n      "isAgreementBank": 0,\n      "agreementCode": null\n    },\n    {\n      "href": "https://api.bsale.io/v1/payment_types/1.json",\n      "id": 1,\n      "name": "EFECTIVO",\n      "isVirtual": 0,\n      "isCheck": 0,\n      "maxCheck": null,\n      "isCreditNote": 0,\n      "isClientCredit": 0,\n      "isCash": 1,\n      "isCreditMemo": 0,\n      "state": 0,\n      "maxClientCuota": 0,\n      "ledgerAccount": "1112401",\n      "ledgerCode": null,\n      "isAgreementBank": 0,\n      "agreementCode": null\n    },\n    {\n      "href": "https://api.bsale.io/v1/payment_types/3.json",\n      "id": 3,\n      "name": "NOTA CREDITO DEVOLUCION",\n      "isVirtual": 0,\n      "isCheck": 0,\n      "maxCheck": null,\n      "isCreditNote": 1,\n      "isClientCredit": 0,\n      "isCash": 0,\n      "isCreditMemo": 0,\n      "state": 0,\n      "maxClientCuota": 0,\n      "ledgerAccount": "1112301",\n      "ledgerCode": null,\n      "isAgreementBank": 0,\n      "agreementCode": null\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-una-forma-de-pago"},"GET una forma de pago"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/payment_types/7.json")," retornar\xe1 una forma de pago espec\xedfica.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /payment_types/7.json"',title:'"Response','/payment_types/7.json"':!0},'{\n  "href": "https://api.bsale.io/v1/payment_types/7.json",\n  "id": 7,\n  "name": "ABONO DE CLIENTE",\n  "isVirtual": 0,\n  "isCheck": 0,\n  "maxCheck": null,\n  "isCreditNote": 0,\n  "isClientCredit": 0,\n  "isCash": 0,\n  "isCreditMemo": 1,\n  "state": 0,\n  "maxClientCuota": 0,\n  "ledgerAccount": "",\n  "ledgerCode": null,\n  "isAgreementBank": 0,\n  "agreementCode": null\n}\n')),(0,r.kt)("h2",{id:"get-cantidad-de-formas-de-pago"},"GET cantidad de formas de pago"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GET ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/payment_types/count.json")," Retornar\xe1 cantidades de registros.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los Formas de pagos est\xe1n activos(0) inactivos (1)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 6\n}\n')),(0,r.kt)("h2",{id:"get-atributos-dinamicos-de-la-forma-de-pago"},"GET atributos dinamicos de la forma de pago"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/payment_types/5/dynamic_attributes.json")," retornar\xe1 los atributos dinamicos de la forma de pago y los detalles de esta si tiene.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "href": "https://api.bsale.io/v1/dynamic_attributes.json",\n    "count": 6,\n    "limit": 25,\n    "offset": 0,\n    "items": [\n        {\n            "href": "https://api.bsale.io/v1/dynamic_attributes/2.json",\n            "id": 2,\n            "name": "Banco",\n            "tip": "",\n            "type": 4,\n            "isMandatory": 1,\n            "state": 0,\n            "payment_type": {\n                "href": "https://api.bsale.io/v1/payment_types/5.json",\n                "id": "5"\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/dynamic_attributes/3.json",\n            "id": 3,\n            "name": "N\xfamero",\n            "tip": "",\n            "type": 4,\n            "isMandatory": 1,\n            "state": 0,\n            "payment_type": {\n                "href": "https://api.bsale.io/v1/payment_types/5.json",\n                "id": "5"\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/dynamic_attributes/19.json",\n            "id": 19,\n            "name": "N\xba Autoriza DICOM",\n            "tip": "",\n            "type": 3,\n            "isMandatory": 1,\n            "state": 1,\n            "payment_type": {\n                "href": "https://api.bsale.io/v1/payment_types/5.json",\n                "id": "5"\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/dynamic_attributes/94.json",\n            "id": 94,\n            "name": "Opcion",\n            "tip": "",\n            "type": 7,\n            "isMandatory": 0,\n            "state": 0,\n            "payment_type": {\n                "href": "https://api.bsale.io/v1/payment_types/5.json",\n                "id": "5"\n            },\n            "details": {\n                "href": "https://api.bsale.io/v1/dynamic_attributes/94/details.json",\n                "count": 3,\n                "limit": 25,\n                "offset": 0,\n                "items": [\n                    {\n                        "href": "https://api.bsale.io/v1/dynamic_attributes/94/details/60.json",\n                        "id": 60,\n                        "name": "A",\n                        "state": 0\n                    },\n                    {\n                        "href": "https://api.bsale.io/v1/dynamic_attributes/94/details/61.json",\n                        "id": 61,\n                        "name": "B",\n                        "state": 0\n                    },\n                    {\n                        "href": "https://api.bsale.io/v1/dynamic_attributes/94/details/62.json",\n                        "id": 62,\n                        "name": "C",\n                        "state": 0\n                    }\n                ]\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/dynamic_attributes/18.json",\n            "id": 18,\n            "name": "Titular",\n            "tip": "",\n            "type": 4,\n            "isMandatory": 1,\n            "state": 0,\n            "payment_type": {\n                "href": "https://api.bsale.io/v1/payment_types/5.json",\n                "id": "5"\n            }\n        },\n        {\n            "href": "https://api.bsale.io/v1/dynamic_attributes/17.json",\n            "id": 17,\n            "name": "Vencimiento",\n            "tip": "",\n            "type": 1,\n            "isMandatory": 1,\n            "state": 1,\n            "payment_type": {\n                "href": "https://api.bsale.io/v1/payment_types/5.json",\n                "id": "5"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"post-una-forma-de-pago"},"POST una forma de pago"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/payment_types.json")," ")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Para crear una forma de pago se debe considerar el tipo que tiene, por ejemplo si es efectivo se debe enviar el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},'"isCash":1'),", si es cheque ",(0,r.kt)("inlineCode",{parentName:"p"},'"isCheck":1'),", en el caso de no requerir alguno de los tipos soportados solo se debe enviar el nombre")),(0,r.kt)("p",null,"Para crear una forma de pago, se debe enviar un JSON con la siguiente estructura:"),(0,r.kt)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,r.kt)("h4",{id:"sin-especificar-un-tipo"},"Sin especificar un tipo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name":"Tarjeta de Debito"  \n}\n')),(0,r.kt)("h4",{id:"en-el-caso-del-cheque-se-debe-enviar-el-m\xe1ximo-de-cheques-permitidos"},"En el caso del cheque se debe enviar el m\xe1ximo de cheques permitidos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name":"Cheque",\n  "isCheck":1,\n  "maxCheck":3\n}\n')),(0,r.kt)("h4",{id:"si-es-abono-de-cliente"},"Si es abono de cliente."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name":"Abono Cliente",\n  "isCreditMemo":1\n}\n')),(0,r.kt)("h4",{id:"en-caso-de-tener-un-enlace-contable-se-puede-enviar-la-cuenta-contable-y-c\xf3digo-contable"},"En caso de tener un enlace contable se puede enviar la cuenta contable y c\xf3digo contable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name":"Tarjeta de cr\xe9dito",\n  "ledgerAccount":"111-01",\n  "ledgerCode": "1234"\n}\n')),(0,r.kt)("h3",{id:"atributos-opcional"},"Atributos (opcional)"),(0,r.kt)("p",null,"Si se desean usar atributos especiales para la forma de pago, se debe enviar la siguiente estructura en el arreglo ",(0,r.kt)("inlineCode",{parentName:"p"},"payments")," del documento."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "payments": [\n        {\n            "paymentTypeId": 4,\n            "amount": 1500,\n            "contactDetails": [\n                {\n                    "id_atributo_formulario": 61,\n                    "descripcion_atributo": "Operaci\xf3n 188373473"\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"paymentTypeId"),", id forma de pago"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"id_atributo_formulario"),", id atributo de forma de pago"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"descripcion_atributo"),", dato que se almacena en atributo forma de pago")),(0,r.kt)("h4",{id:"respuesta"},"Respuesta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/payment_types/10.json",\n  "id": 10,\n  "name": "Tarjeta de cr\xe9dito",\n  "isVirtual": 0,\n  "isCheck": 0,\n  "maxCheck": null,\n  "isCreditNote": 0,\n  "isClientCredit": 0,\n  "isCash": 0,\n  "isCreditMemo": 0,\n  "state": 0,\n  "maxClientCuota": 0,\n  "ledgerAccount":"111-01",\n  "ledgerCode": "1234",\n  "isAgreementBank": 0,\n  "agreementCode": null\n}\n')))}u.isMDXComponent=!0}}]);