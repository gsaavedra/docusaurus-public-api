"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[8264],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(a),c=i,v=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(v,o(o({ref:e},d),{},{components:a})):n.createElement(v,o({ref:e},d))}));function c(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1629:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:22,title:"Variantes",description:"Crear, editar y listar variantes",slug:"/variantes"},o="Variantes",s={unversionedId:"Productos y Servicios/Variantes",id:"version-CL/Productos y Servicios/Variantes",title:"Variantes",description:"Crear, editar y listar variantes",source:"@site/versioned_docs/version-CL/Productos y Servicios/Variantes.md",sourceDirName:"Productos y Servicios",slug:"/variantes",permalink:"/docusaurus-public-api/CL/variantes",draft:!1,tags:[],version:"CL",sidebarPosition:22,frontMatter:{sidebar_position:22,title:"Variantes",description:"Crear, editar y listar variantes",slug:"/variantes"},sidebar:"tutorialSidebar",previous:{title:"Tipos de productos y servicios",permalink:"/docusaurus-public-api/CL/tipos-de-productos-y-servicios"},next:{title:"Stocks",permalink:"/docusaurus-public-api/CL/stocks"}},l={},p=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de variantes",id:"get-lista-de-variantes",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET una variante",id:"get-una-variante",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET cantidad de variantes",id:"get-cantidad-de-variantes",level:2},{value:"GET valores de atributos de una variante",id:"get-valores-de-atributos-de-una-variante",level:2},{value:"GET un valor de atributo especifico de una variante",id:"get-un-valor-de-atributo-especifico-de-una-variante",level:4},{value:"GET costo de una variante",id:"get-costo-de-una-variante",level:2},{value:"POST una variante",id:"post-una-variante",level:2},{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"Env\xedo",id:"env\xedo",level:4},{value:"Atributos (opcional)",id:"atributos-opcional",level:3},{value:"Respuesta",id:"respuesta",level:4},{value:"PUT una variante",id:"put-una-variante",level:2},{value:"Ejemplo JSON",id:"ejemplo-json-1",level:3},{value:"Env\xedo",id:"env\xedo-1",level:4},{value:"Respuesta",id:"respuesta-1",level:4},{value:"DELETE una variante virtualmente",id:"delete-una-variante-virtualmente",level:2}],d={toc:p};function u(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"variantes"},"Variantes"),(0,i.kt)("p",null,"Listar variante(s), costos, cantidades, crear, editar y eliminar variantes."),(0,i.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creaci\xf3n variantes ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=eY3YBu3b-j0"},"Ver")," ")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Una variante s\xf3lo puede tener 1 producto "padre", pero 1 producto puede tener 1 o m\xe1s variantes. Ej, (Nombre Producto) Poleron Blanco, (Nombre Variantes) Talla L, Talla M, Talla S. '),(0,i.kt)("p",{parentName:"admonition"},"El producto debe ser creado antes de crear la variante. Para vender un producto/variante creado, se debe indicar en el nodo details del documento.")),(0,i.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,i.kt)("p",null,"Al realizar una petici\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /variants/2373.json"',title:'"Response','/variants/2373.json"':!0},'{\n  "href": "https://api.bsale.io/v1/variants/2373.json",\n  "id": 2373,\n  "description": "240 ML",\n  "unlimitedStock": 0,\n  "allowNegativeStock": 0,\n  "state": 0,\n  "barCode": "1441310864",\n  "code": "1441310864",\n  "imagestionCenterCost": 0,\n  "imagestionAccount": 0,\n  "imagestionConceptCod": 0,\n  "imagestionProyectCod": 0,\n  "imagestionCategoryCod": 0,\n  "imagestionProductId": 0,\n  "serialNumber": 0,\n  "prestashopCombinationId": 0,\n  "prestashopValueId": 0,\n  "product": {\n    "href": "https://api.bsale.io/v1/products/656.json",\n    "id": "656"\n  },\n  "attribute_values": {\n    "href": "https://api.bsale.io/v1/variants/2373/attribute_values.json"\n  },\n  "costs": {\n    "href": "https://api.bsale.io/v1/variants/2373/costs.json"\n  }\n}\n')),(0,i.kt)("h3",{id:"atributos"},"Atributos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,i.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,i.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"href")),(0,i.kt)("td",{parentName:"tr",align:null},"url del tipo de producto"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"identificador \xfanico del tipo de producto"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"description")),(0,i.kt)("td",{parentName:"tr",align:null},"nombre de la variante"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"unlimitedStock")),(0,i.kt)("td",{parentName:"tr",align:null},"indica si la variante posee stock ilimitado No(0) o Si (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"allowNegativeStock")),(0,i.kt)("td",{parentName:"tr",align:null},"indica si la variante permite stock negativo No(0) o Si (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"state")),(0,i.kt)("td",{parentName:"tr",align:null},"estado de la variante activo(0) o inactivo (1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"barCode")),(0,i.kt)("td",{parentName:"tr",align:null},"c\xf3digo de barras de la variante"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"code")),(0,i.kt)("td",{parentName:"tr",align:null},"SKU de la variante"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"imagestionCenterCost")),(0,i.kt)("td",{parentName:"tr",align:null},"centro de costo imagestion"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"imagestionAccount")),(0,i.kt)("td",{parentName:"tr",align:null},"cuenta imagestion"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"imagestionConceptCod")),(0,i.kt)("td",{parentName:"tr",align:null},"concepto imagestion"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"imagestionProyectCod")),(0,i.kt)("td",{parentName:"tr",align:null},"proyecto imagestion"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"imagestionCategoryCod")),(0,i.kt)("td",{parentName:"tr",align:null},"categor\xeda imagestion"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"imagestionProductId")),(0,i.kt)("td",{parentName:"tr",align:null},"producto imagestion"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"serialNumber")),(0,i.kt)("td",{parentName:"tr",align:null},"indica si la variante posee numero de serie No(0) Si(1)"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"prestashopCombinationId")),(0,i.kt)("td",{parentName:"tr",align:null},"identificador en prestashop ",(0,i.kt)("em",{parentName:"td"},"legacy")),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"prestashopValueId")),(0,i.kt)("td",{parentName:"tr",align:null},"identificador en prestashop ",(0,i.kt)("em",{parentName:"td"},"legacy")),(0,i.kt)("td",{parentName:"tr",align:null},"Integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"product")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con el producto"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"attribute_values")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica los valores de los atributos del tipo de producto"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"costs")),(0,i.kt)("td",{parentName:"tr",align:null},"nodo que indica el costo de la variante"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"get-lista-de-variantes"},"GET lista de variantes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/variants.json")," retornar\xe1 todos todas las variantes.")),(0,i.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),", Permite filtrar por nombre de la variante."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"barcode"),", filtra por c\xf3digo de barra de la variante."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"code"),", filtra por c\xf3digo (SKU) de la variante."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"serialnumber"),", filtra por numero de serie de la variante."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"productid"),", filtra variantes por el id del producto."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"state"),", boolean (0 o 1) indica si las variantes est\xe1n activas(0) o inactivas (1).")),(0,i.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/variants.json?limit=10&offset=0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/variants.json?fields=[description,barCode,code]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/variants.json?state=0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/variants.json?productid=26")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/variants.json?expand=[product]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /variants.json "',title:'"Response',"/variants.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/variants.json",\n  "count": 868,\n  "limit": 3,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/variants/1548.json",\n      "id": 1548,\n      "description": "120 ML",\n      "unlimitedStock": 0,\n      "allowNegativeStock": 0,\n      "state": 0,\n      "barCode": "1401291513",\n      "code": "1401291513",\n      "imagestionCenterCost": 0,\n      "imagestionAccount": 0,\n      "imagestionConceptCod": 0,\n      "imagestionProyectCod": 0,\n      "imagestionCategoryCod": 0,\n      "imagestionProductId": 0,\n      "serialNumber": 0,\n      "prestashopCombinationId": 0,\n      "prestashopValueId": 0,\n      "product": {\n        "href": "https://api.bsale.io/v1/products/416.json",\n        "id": "416"\n      },\n      "attribute_values": {\n        "href": "https://api.bsale.io/v1/variants/1548/attribute_values.json"\n      },\n      "costs": {\n        "href": "https://api.bsale.io/v1/variants/1548/costs.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/variants/1555.json",\n      "id": 1555,\n      "description": "150 ML",\n      "unlimitedStock": 0,\n      "allowNegativeStock": 0,\n      "state": 0,\n      "barCode": "1400786476",\n      "code": "1400786476",\n      "imagestionCenterCost": 0,\n      "imagestionAccount": 0,\n      "imagestionConceptCod": 0,\n      "imagestionProyectCod": 0,\n      "imagestionCategoryCod": 0,\n      "imagestionProductId": 0,\n      "serialNumber": 0,\n      "prestashopCombinationId": 0,\n      "prestashopValueId": 0,\n      "product": {\n        "href": "https://api.bsale.io/v1/products/420.json",\n        "id": "420"\n      },\n      "attribute_values": {\n        "href": "https://api.bsale.io/v1/variants/1555/attribute_values.json"\n      },\n      "costs": {\n        "href": "https://api.bsale.io/v1/variants/1555/costs.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/variants/2101.json",\n      "id": 2101,\n      "description": "300 ML",\n      "unlimitedStock": 0,\n      "allowNegativeStock": 0,\n      "state": 0,\n      "barCode": "1423687401",\n      "code": "1423687401",\n      "imagestionCenterCost": 0,\n      "imagestionAccount": 0,\n      "imagestionConceptCod": 0,\n      "imagestionProyectCod": 0,\n      "imagestionCategoryCod": 0,\n      "imagestionProductId": 0,\n      "serialNumber": 0,\n      "prestashopCombinationId": 0,\n      "prestashopValueId": 0,\n      "product": {\n        "href": "https://api.bsale.io/v1/products/588.json",\n        "id": "588"\n      },\n      "attribute_values": {\n        "href": "https://api.bsale.io/v1/variants/2101/attribute_values.json"\n      },\n      "costs": {\n        "href": "https://api.bsale.io/v1/variants/2101/costs.json"\n      }\n    }\n  ],\n  "next": "https://api.bsale.io/v1/variants.json?limit=3&offset=3"\n}\n')),(0,i.kt)("h2",{id:"get-una-variante"},"GET una variante"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/variants/2373.json")," retornar\xe1 una variante espec\xedfica.")),(0,i.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n.")),(0,i.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /v1/variants/5730.json?expand=[product]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /variants/2373.json"',title:'"Response','/variants/2373.json"':!0},'{\n  "href": "https://api.bsale.io/v1/variants/2373.json",\n  "id": 2373,\n  "description": "240 ML",\n  "unlimitedStock": 0,\n  "allowNegativeStock": 0,\n  "state": 0,\n  "barCode": "1441310864",\n  "code": "1441310864",\n  "imagestionCenterCost": 0,\n  "imagestionAccount": 0,\n  "imagestionConceptCod": 0,\n  "imagestionProyectCod": 0,\n  "imagestionCategoryCod": 0,\n  "imagestionProductId": 0,\n  "serialNumber": 0,\n  "prestashopCombinationId": 0,\n  "prestashopValueId": 0,\n  "product": {\n    "href": "https://api.bsale.io/v1/products/656.json",\n    "id": "656"\n  },\n  "attribute_values": {\n    "href": "https://api.bsale.io/v1/variants/2373/attribute_values.json"\n  },\n  "costs": {\n    "href": "https://api.bsale.io/v1/variants/2373/costs.json"\n  }\n}\n')),(0,i.kt)("h2",{id:"get-cantidad-de-variantes"},"GET cantidad de variantes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"GET ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/variants/count.json")," Retornar\xe1 cantidades de registros.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"state"),", boolean (0 o 1) indica si los tipos de productos est\xe1n activos(0) inactivos (1)."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "count": 8001\n}\n')),(0,i.kt)("h2",{id:"get-valores-de-atributos-de-una-variante"},"GET valores de atributos de una variante"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/variants/5730/attribute_values.json")," retorna la informaci\xf3n almacenada en los atributos de una variante.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/variants/5730/attribute_values.json",\n  "count": 4,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/variants/5730/attribute_values/34192.json",\n      "id": 34192,\n      "description": "Microsoft",\n      "attribute": {\n        "href": "https://api.bsale.io/v1/product_types/6/attributes/25.json",\n        "id": "25"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/variants/5730/attribute_values/34193.json",\n      "id": 34193,\n      "description": "14-09-2010",\n      "attribute": {\n        "href": "https://api.bsale.io/v1/product_types/6/attributes/28.json",\n        "id": "28"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/variants/5730/attribute_values/34194.json",\n      "id": 34194,\n      "description": "Multi idiomas (Regi\xf3n Latinoamerica) ",\n      "attribute": {\n        "href": "https://api.bsale.io/v1/product_types/6/attributes/29.json",\n        "id": "29"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/variants/5730/attribute_values/34195.json",\n      "id": 34195,\n      "description": "365 / 24hrs",\n      "attribute": {\n        "href": "https://api.bsale.io/v1/product_types/6/attributes/24.json",\n        "id": "24"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"get-un-valor-de-atributo-especifico-de-una-variante"},"GET un valor de atributo especifico de una variante"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/variants/531/attribute_values/2.json")," Retornar\xe1 un atributo asociados a la variante.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /variants/531/attribute_values/2.json"',title:'"Response','/variants/531/attribute_values/2.json"':!0},'{\n  "href": "https://api.bsale.io/v1/variants/531/attribute_values/2.json",\n  "id": 2,\n  "description": "SI",\n  "attribute": {\n    "href": "https://api.bsale.io/v1/product_types/8/attributes/12.json",\n    "id": "12"\n  }\n}\n')),(0,i.kt)("h2",{id:"get-costo-de-una-variante"},"GET costo de una variante"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GET ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/variants/2375/costs.json")," Retornar\xe1 el costo previamente asignado a la variante.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /variants/2375/costs.json"',title:'"Response','/variants/2375/costs.json"':!0},'{\n  "averageCost": "4140.0",\n  "history": [\n    {\n      "reception_detail": {\n        "href": "https://api.bsale.io/v1/stocks/receptions/2539/details/7734.json",\n        "id": 7734\n      },\n      "admissionDate": 1441238400,\n      "cost": 4140,\n      "availableFifo": 1\n    },\n    {\n      "reception_detail": {\n        "href": "https://api.bsale.io/v1/stocks/receptions/2542/details/7744.json",\n        "id": 7744\n      },\n      "admissionDate": 1441324800,\n      "cost": 4140,\n      "availableFifo": 1\n    }\n  ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"averageCost"),", costo promedio de una variante (Float)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"history"),", nodo que indica el costo de la variante en cada recepci\xf3n que ha tenido."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reception_detail"),", no que indica el detalle de recepci\xf3n de la variante."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"admissionDate"),", fecha de recepci\xf3n (Integer)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"cost"),", costo de la variante al momento de la recepci\xf3n (Float)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"availableFifo"),", cantidad disponible de la variante de una recepci\xf3n espec\xedfica (Integer).")),(0,i.kt)("h2",{id:"post-una-variante"},"POST una variante"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"POST ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/variants.json")," ")),(0,i.kt)("p",null,"Para crear una variante, se debe enviar un JSON con la siguiente estructura:"),(0,i.kt)("h3",{id:"ejemplo-json"},"Ejemplo JSON"),(0,i.kt)("h4",{id:"env\xedo"},"Env\xedo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "productId": 595,\n   "description": "Age of empires II"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name"),", nombre del tipo de producto (String).")),(0,i.kt)("h3",{id:"atributos-opcional"},"Atributos (opcional)"),(0,i.kt)("p",null,"Si el tipo de producto al que pertenece la variante posee atributos, se deben enviar los valores que estos van a tener, junto con el ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," del atributo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "productId": 595,\n  "description": "Age of empires II",\n  "attribute_values": [\n    {\n      "description": "Windows",\n      "attributeId": 46\n    },\n    {\n      "description": "Estrategia",\n      "attributeId": 47\n    }\n  ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"description"),", Valor del atributo (String)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attributeId"),", identificador \xfanico del atributo esto viene del tipo de producto (Integer). ")),(0,i.kt)("h4",{id:"respuesta"},"Respuesta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/variants/2110.json",\n  "id": 2110,\n  "description": "Age of empires II",\n  "unlimitedStock": 0,\n  "allowNegativeStock": 0,\n  "state": 0,\n  "barCode": 1415381671,\n  "code": 1415381671,\n  "imagestionCenterCost": 0,\n  "imagestionAccount": 0,\n  "imagestionConceptCod": 0,\n  "imagestionProyectCod": 0,\n  "imagestionCategoryCod": 0,\n  "imagestionProductId": 0,\n  "serialNumber": 0,\n  "prestashopCombinationId": 0,\n  "prestashopValueId": 0,\n  "product": {\n    "href": "https://api.bsale.io/v1/products/595.json",\n    "id": "595"\n  },\n  "attribute_values": {\n    "href": "https://api.bsale.io/v1/variants/2110/attribute_values.json"\n  }\n}\n')),(0,i.kt)("h2",{id:"put-una-variante"},"PUT una variante"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PUT ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/variants/2110.json")," ")),(0,i.kt)("p",null,"Se debe enviar un Json con la siguiente estructura: "),(0,i.kt)("h3",{id:"ejemplo-json-1"},"Ejemplo JSON"),(0,i.kt)("h4",{id:"env\xedo-1"},"Env\xedo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 2110,\n  "productId": 595,\n  "description": "Age of empires 2",\n  "attribute_values": [\n    {\n      "description": "Windows OS",\n      "attributeId": 46\n    },\n    {\n      "description": "Estrategia",\n      "attributeId": 47\n    }\n  ]\n}\n')),(0,i.kt)("h4",{id:"respuesta-1"},"Respuesta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/variants/2110.json",\n  "id": 2110,\n  "description": "Age of empires 2",\n  "unlimitedStock": 0,\n  "allowNegativeStock": 0,\n  "state": 0,\n  "barCode": 1415381671,\n  "code": 1415381671,\n  "imagestionCenterCost": 0,\n  "imagestionAccount": 0,\n  "imagestionConceptCod": 0,\n  "imagestionProyectCod": 0,\n  "imagestionCategoryCod": 0,\n  "imagestionProductId": 0,\n  "serialNumber": 0,\n  "prestashopCombinationId": 0,\n  "prestashopValueId": 0,\n  "product": {\n    "href": "https://api.bsale.io/v1/products/595.json",\n    "id": "595"\n  },\n  "attribute_values": {\n    "href": "https://api.bsale.io/v1/variants/2110/attribute_values.json"\n  }\n}\n')),(0,i.kt)("h2",{id:"delete-una-variante-virtualmente"},"DELETE una variante virtualmente"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DELETE ",(0,i.kt)("inlineCode",{parentName:"li"},"/v1/variants/2110.json"),"\nCambia el estado de la variante")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"La variante no estar\xe1 visible mediante interfaz y tendr\xe1 un ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," 99")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "href": "https://api.bsale.io/v1/variants/2110.json",\n  "id": 2110,\n  "description": "Nintendo Wii U Basic Controller",\n  "unlimitedStock": 0,\n  "allowNegativeStock": 0,\n  "state": 1,\n  "barCode": 1415381671,\n  "code": 1415381671,\n  "imagestionCenterCost": 0,\n  "imagestionAccount": 0,\n  "imagestionConceptCod": 0,\n  "imagestionProyectCod": 0,\n  "imagestionCategoryCod": 0,\n  "imagestionProductId": 0,\n  "serialNumber": 0,\n  "prestashopCombinationId": 0,\n  "prestashopValueId": 0,\n  "product": {\n    "href": "https://api.bsale.io/v1/products/595.json",\n    "id": "595"\n  },\n  "attribute_values": {\n    "href": "https://api.bsale.io/v1/variants/2110/attribute_values.json"\n  }\n}\n')))}u.isMDXComponent=!0}}]);