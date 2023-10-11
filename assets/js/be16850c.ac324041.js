"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[5071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=o,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:55,title:"Tipos de documentos",description:"Listar y editar Tipos de documentos",slug:"/tipos-de-documentos"},r="Tipos de documentos",l={unversionedId:"Configuraci\xf3n/Tipos de documentos",id:"version-PE/Configuraci\xf3n/Tipos de documentos",title:"Tipos de documentos",description:"Listar y editar Tipos de documentos",source:"@site/versioned_docs/version-PE/Configuraci\xf3n/Tipos de documentos.md",sourceDirName:"Configuraci\xf3n",slug:"/tipos-de-documentos",permalink:"/docusaurus-public-api/PE/tipos-de-documentos",draft:!1,tags:[],version:"PE",sidebarPosition:55,frontMatter:{sidebar_position:55,title:"Tipos de documentos",description:"Listar y editar Tipos de documentos",slug:"/tipos-de-documentos"},sidebar:"tutorialSidebar",previous:{title:"Monedas",permalink:"/docusaurus-public-api/PE/monedas"},next:{title:"Tipos de despacho",permalink:"/docusaurus-public-api/PE/tipos-de-despacho"}},d={},s=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de Tipos de documentos",id:"get-lista-de-tipos-de-documentos",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET un tipo de documento",id:"get-un-tipo-de-documento",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET cantidad de tipos de documentos",id:"get-cantidad-de-tipos-de-documentos",level:2},{value:"GET CAF actual de un tipo de documento",id:"get-caf-actual-de-un-tipo-de-documento",level:2},{value:"Par\xe1metros",id:"par\xe1metros-2",level:4},{value:"Ejemplos",id:"ejemplos-2",level:4},{value:"GET folios disponibles de un tipo de documento",id:"get-folios-disponibles-de-un-tipo-de-documento",level:2},{value:"Par\xe1metros",id:"par\xe1metros-3",level:4},{value:"Ejemplos",id:"ejemplos-3",level:4},{value:"PUT un tipo de documento",id:"put-un-tipo-de-documento",level:2},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Respuesta",id:"respuesta",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tipos-de-documentos"},"Tipos de documentos"),(0,o.kt)("p",null,"Listar y editar tipos de documentos configuradas en Bsale."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Para que un tipo de documento pueda ser referenciado, es importante que su ",(0,o.kt)("strong",{parentName:"p"},"estado sea 0"),". (",(0,o.kt)("inlineCode",{parentName:"p"},"state=0"),")")),(0,o.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,o.kt)("p",null,"Al realizar una petici\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /document_types/1.json"',title:'"Response','/document_types/1.json"':!0},'{\n  "href": "https://api.bsale.io/v1/document_types/1.json",\n  "id": 1,\n  "name": "NOTA VENTA",\n  "initialNumber": 1,\n  "codeSii": "",\n  "isElectronicDocument": 0,\n  "breakdownTax": 1,\n  "use": 0,\n  "isSalesNote": 1,\n  "isExempt": 0,\n  "restrictsTax": 0,\n  "useClient": 1,\n  "messageBodyFormat": null,\n  "thermalPrinter": 1,\n  "state": 0,\n  "copyNumber": 3,\n  "isCreditNote": 0,\n  "continuedHigh": 0,\n  "ledgerAccount": null,\n  "ipadPrint": 0,\n  "ipadPrintHigh": "0"\n}\n')),(0,o.kt)("h3",{id:"atributos"},"Atributos"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"href")),(0,o.kt)("td",{parentName:"tr",align:null},"url del Tipos de documentos"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del Tipos de documentos"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"nombre del del tipo de documento"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"initialNumber")),(0,o.kt)("td",{parentName:"tr",align:null},"folio inicial del tipo de documento"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"codeSii")),(0,o.kt)("td",{parentName:"tr",align:null},"c\xf3digo tributario del tipo de documento"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"isElectronicDocument")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento es electr\xf3nico No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"breakdownTax")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento desglosa impuesto No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"use")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el uso que se le da al tipo de documento venta(0), devoluci\xf3n(1), despacho(2), liquidaci\xf3n(3)"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"isSalesNote")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento es una nota de venta No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"isExempt")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento es exento No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"restrictsTax")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento restringe impuestos No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"useClient")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento requiere un cliente No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"messageBodyFormat")),(0,o.kt)("td",{parentName:"tr",align:null},"formato del tipo de documento"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"thermalPrinter")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento es impreso en impresora t\xe9rmica No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"state")),(0,o.kt)("td",{parentName:"tr",align:null},"estado del tipo de documento activo(0) o inactivo (1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"copyNumber")),(0,o.kt)("td",{parentName:"tr",align:null},"numero de copias del tipo de documento"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"isCreditNote")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento es una nota de cr\xe9dito No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"continuedHigh")),(0,o.kt)("td",{parentName:"tr",align:null},"indica si el tipo de documento se imprime con alto continuo No(0) o Si(1)"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ledgerAccount")),(0,o.kt)("td",{parentName:"tr",align:null},"cuenta contable del tipo de documento"),(0,o.kt)("td",{parentName:"tr",align:null},"String")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ipadPrint")),(0,o.kt)("td",{parentName:"tr",align:null},"configuraci\xf3n para Ipad"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"ipadPrintHigh")),(0,o.kt)("td",{parentName:"tr",align:null},"configuraci\xf3n para Ipad"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean")))),(0,o.kt)("h2",{id:"get-lista-de-tipos-de-documentos"},"GET lista de Tipos de documentos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/document_types.json")," retornar\xe1 todos los Tipos de documentos.")),(0,o.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),", Permite filtrar por nombre del tipo de documento."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"codesii"),", filtra por el c\xf3digo tributario del tipo de documento (String)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ledgeraccount"),", filtra por la cuenta contable del tipo de documento."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"booktypeid"),", filtra por el tipo de libro que pertenece (Integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"iselectronicdocument"),", permite filtrar si el tipo de documento es electr\xf3nico No(0) o Si(1) (Boolean)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"issalesnote"),", permite filtrar si el tipo de documento es una nota de venta No(0) o Si(1) (Boolean)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si los tipos de documento est\xe1n activos(0) inactivos(1).")),(0,o.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types.json?limit=10&offset=0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types.json?fields=[codesii,ledgeraccount,state]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types.json?expand=[book_type]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types.json?codesii=33")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types.json?state=0"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /document_types.json "',title:'"Response',"/document_types.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/document_types.json",\n  "count": 3,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/document_types/2.json",\n      "id": 2,\n      "name": "FACTURA EXENTA O NO AFECTA ELECTRONICA",\n      "initialNumber": 1,\n      "codeSii": "34",\n      "isElectronicDocument": 1,\n      "breakdownTax": 1,\n      "use": 0,\n      "isSalesNote": 0,\n      "isExempt": 1,\n      "restrictsTax": 0,\n      "useClient": 1,\n      "messageBodyFormat": "",\n      "thermalPrinter": 1,\n      "state": 0,\n      "copyNumber": 2,\n      "isCreditNote": 0,\n      "continuedHigh": 0,\n      "ledgerAccount": null,\n      "ipadPrint": 0,\n      "ipadPrintHigh": "0",\n      "book_type": {\n        "href": "https://api.bsale.io/v1/book_types/1.json",\n        "id": "1"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/document_types/3.json",\n      "id": 3,\n      "name": "NOTA CREDITO ELECTRONICA",\n      "initialNumber": 43,\n      "codeSii": "61",\n      "isElectronicDocument": 1,\n      "breakdownTax": 1,\n      "use": 1,\n      "isSalesNote": 0,\n      "isExempt": 0,\n      "restrictsTax": 0,\n      "useClient": 1,\n      "messageBodyFormat": "",\n      "thermalPrinter": 1,\n      "state": 0,\n      "copyNumber": 0,\n      "isCreditNote": 1,\n      "continuedHigh": 0,\n      "ledgerAccount": null,\n      "ipadPrint": 0,\n      "ipadPrintHigh": "0",\n      "book_type": {\n        "href": "https://api.bsale.io/v1/book_types/1.json",\n        "id": "1"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/document_types/1.json",\n      "id": 1,\n      "name": "NOTA VENTA",\n      "initialNumber": 1,\n      "codeSii": "",\n      "isElectronicDocument": 0,\n      "breakdownTax": 1,\n      "use": 0,\n      "isSalesNote": 1,\n      "isExempt": 0,\n      "restrictsTax": 0,\n      "useClient": 1,\n      "messageBodyFormat": null,\n      "thermalPrinter": 1,\n      "state": 0,\n      "copyNumber": 3,\n      "isCreditNote": 0,\n      "continuedHigh": 0,\n      "ledgerAccount": null,\n      "ipadPrint": 0,\n      "ipadPrintHigh": "0"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"get-un-tipo-de-documento"},"GET un tipo de documento"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/document_types/1.json")," retornar\xe1 un tipo de documento espec\xedfico.")),(0,o.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones.")),(0,o.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types/1.json?expand=[book_type]"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /document_types/1.json"',title:'"Response','/document_types/1.json"':!0},'{\n  "href": "https://api.bsale.io/v1/document_types/1.json",\n  "id": 1,\n  "name": "NOTA VENTA",\n  "initialNumber": 1,\n  "codeSii": "",\n  "isElectronicDocument": 0,\n  "breakdownTax": 1,\n  "use": 0,\n  "isSalesNote": 1,\n  "isExempt": 0,\n  "restrictsTax": 0,\n  "useClient": 1,\n  "messageBodyFormat": null,\n  "thermalPrinter": 1,\n  "state": 0,\n  "copyNumber": 3,\n  "isCreditNote": 0,\n  "continuedHigh": 0,\n  "ledgerAccount": null,\n  "ipadPrint": 0,\n  "ipadPrintHigh": "0"\n}\n')),(0,o.kt)("h2",{id:"get-cantidad-de-tipos-de-documentos"},"GET cantidad de tipos de documentos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/document_types/count.json")," Retornar\xe1 cantidades de registros.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los clientess est\xe1n activos(0) inactivos (1)."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 13\n}\n')),(0,o.kt)("h2",{id:"get-caf-actual-de-un-tipo-de-documento"},"GET CAF actual de un tipo de documento"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/document_types/caf.json")," Retornar\xe1 el archivo CAF.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'CAF, proviene de "',(0,o.kt)("strong",{parentName:"p"},"C\xf3digo de Asignaci\xf3n de Folios"),'". ',(0,o.kt)("a",{parentName:"p",href:"https://www.sii.cl/preguntas_frecuentes/catastro/001_012_2020.htm#:~:text=%C2%BFQu%C3%A9%20significa%20el%20C%C3%B3digo%20de,Documentos%20Tributarios%20Electr%C3%B3nicos%20(DTE)%3F&text=El%20CAF%20en%20los%20DTE,procedimientos%20establecidos%20por%20el%20SII."},"Ver")," ")),(0,o.kt)("h4",{id:"par\xe1metros-2"},"Par\xe1metros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"codesii"),", filtra por el c\xf3digo tributario del tipo de documento (String)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"documenttypeid"),", filtra por el identificador del tipo de documento (Integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"nextnumber"),", filtra por el pr\xf3ximo folio que se desea utilizar (integer).")),(0,o.kt)("h4",{id:"ejemplos-2"},"Ejemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types/caf.json?codesii=33")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types/caf.json?documenttypeid=1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types/caf.json?codesii=33&nextnumber=51"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "startDate": 1522292400,\n  "expirationDate": 1546225200,\n  "startNumber": 5,\n  "endNumber": 5,\n  "lastNumberUsed": 0,\n  "numbersAvailable": 2,\n  "expired": false\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"startDate"),", fecha en que inicia el caf (integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"expirationDate"),", fecha en que vence el caf (integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"startNumber"),", folio inicial del caf (integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"endNumber"),", folio final del caf (integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lastNumberUsed"),", ultimo folio utilizado para el tipo de documento (integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"numbersAvailable"),", folios disponibles para el tipo de documento (Integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"expired"),", indica si el caf esta expirado (Boolean)")),(0,o.kt)("h2",{id:"get-folios-disponibles-de-un-tipo-de-documento"},"GET folios disponibles de un tipo de documento"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GET ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/document_types/number_availables.json")," Retornar\xe1 registros de n\xfameros de folios.")),(0,o.kt)("h4",{id:"par\xe1metros-3"},"Par\xe1metros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"codesii"),", filtra por el c\xf3digo tributario del tipo de documento (String)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"documenttypeid"),", filtra por el identificador del tipo de documento (Integer).")),(0,o.kt)("h4",{id:"ejemplos-3"},"Ejemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types/number_availables.json?codesii=33")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /v1/document_types/number_availables.json?documenttypeid=1"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "numbers_available": 2574,\n   "last": 32119\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"numbers_available"),", folios disponibles para el tipo de documento (Integer)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"last"),", ultimo folio utilizado para el tipo de documento (integer).")),(0,o.kt)("h2",{id:"put-un-tipo-de-documento"},"PUT un tipo de documento"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PUT ",(0,o.kt)("inlineCode",{parentName:"li"},"/v1/document_types.json")," ")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'Solo es posible editar "Nombre del documento", "Estado" y "Si requiere datos de cliente"')),(0,o.kt)("h4",{id:"env\xedo"},"Env\xedo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "Documento Boleta",\n   "state": 1,\n   "useClient": 1\n}\n')),(0,o.kt)("h4",{id:"respuesta"},"Respuesta"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/document_types/10.json",\n  "id": 10,\n  "name": "Documento Boleta",\n  "initialNumber": 1,\n  "codeSii": "35",\n  "isElectronicDocument": 0,\n  "breakdownTax": 0,\n  "use": 0,\n  "isSalesNote": 0,\n  "isExempt": 0,\n  "restrictsTax": 1,\n  "useClient": 1,\n  "messageBodyFormat": null,\n  "thermalPrinter": 1,\n  "state": 1,\n  "copyNumber": 0,\n  "isCreditNote": 0,\n  "continuedHigh": 1,\n  "ledgerAccount": "",\n  "ipadPrint": 0,\n  "ipadPrintHigh": 0,\n  "restrictClientType": 2,\n  "useMaxDays": 0,\n  "maxDays": -1,\n  "book_type": {\n    "href": "https://api.bsale.io/v1/book_types/1.json",\n    "id": "1"\n  }\n}\n')))}u.isMDXComponent=!0}}]);