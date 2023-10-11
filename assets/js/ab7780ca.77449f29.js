"use strict";(self.webpackChunkdocusaurus_public_api=self.webpackChunkdocusaurus_public_api||[]).push([[5253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(v,i(i({ref:t},d),{},{components:n})):a.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6775),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=v({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var f=n(2389);const g="tabList__CuJ",N="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",N,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function j(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},6367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={sidebar_position:12,title:"Devoluciones",description:"Crear y listar devoluciones",slug:"/devoluciones"},s="Devoluciones",u={unversionedId:"Documentos/Devoluciones",id:"version-MX/Documentos/Devoluciones",title:"Devoluciones",description:"Crear y listar devoluciones",source:"@site/versioned_docs/version-MX/Documentos/Devoluciones.md",sourceDirName:"Documentos",slug:"/devoluciones",permalink:"/docusaurus-public-api/MX/devoluciones",draft:!1,tags:[],version:"MX",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Devoluciones",description:"Crear y listar devoluciones",slug:"/devoluciones"},sidebar:"tutorialSidebar",previous:{title:"Despachos",permalink:"/docusaurus-public-api/MX/documentos/env\xedos"},next:{title:"Webhooks",permalink:"/docusaurus-public-api/MX/documentos/webhooks"}},d={},c=[{value:"Estructura JSON",id:"estructura-json",level:2},{value:"Atributos",id:"atributos",level:3},{value:"GET lista de devoluciones",id:"get-lista-de-devoluciones",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Ejemplos",id:"ejemplos",level:4},{value:"GET una devoluci\xf3n",id:"get-una-devoluci\xf3n",level:2},{value:"Par\xe1metros",id:"par\xe1metros-1",level:4},{value:"Ejemplos",id:"ejemplos-1",level:4},{value:"GET detalles de una devoluci\xf3n",id:"get-detalles-de-una-devoluci\xf3n",level:2},{value:"GET un detalle de una devoluci\xf3n",id:"get-un-detalle-de-una-devoluci\xf3n",level:2},{value:"POST una devoluci\xf3n",id:"post-una-devoluci\xf3n",level:2},{value:"Referencias y fechas",id:"referencias-y-fechas",level:3},{value:"Cliente de una devoluci\xf3n",id:"cliente-de-una-devoluci\xf3n",level:3},{value:"Detalles de la devoluci\xf3n",id:"detalles-de-la-devoluci\xf3n",level:3},{value:"Tipos de una devoluci\xf3n",id:"tipos-de-una-devoluci\xf3n",level:4},{value:"Forma de pago en nueva venta",id:"forma-de-pago-en-nueva-venta",level:3},{value:"Ejemplo JSON",id:"ejemplo-json",level:2},{value:"Env\xedo",id:"env\xedo",level:3},{value:"Respuesta",id:"respuesta",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"devoluciones"},"Devoluciones"),(0,r.kt)("p",null,"Endpoint para la generaci\xf3n de documentos del tipo devoluci\xf3n/anulaciones de ventas. (",(0,r.kt)("em",{parentName:"p"},"Nota de cr\xe9dito electr\xf3nica, nota de d\xe9bito electr\xf3nica"),"). "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Siempre se debe referenciar el ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," del documento venta que se desea devolver junto a sus detalles. ")),(0,r.kt)("p",null,"C\xf3mo funciona la interfaz de Bsale, mira \xe9stos videos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creaci\xf3n de nota de cr\xe9dito ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/Oo6KCvIhyeQ"},"Ver")," ")),(0,r.kt)("h2",{id:"estructura-json"},"Estructura JSON"),(0,r.kt)("p",null,"Al realizar una petici\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP"),", el servicio retornara un JSON con la siguiente estructura:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Response /returns/1.json"',title:'"Response','/returns/1.json"':!0},'{\n  "href": "https://api.bsale.io/v1/returns/1.json",\n  "id": 1,\n  "code": "137615600351",\n  "returnDate": 1376107200,\n  "motive": "Cambio a Factura",\n  "type": 1,\n  "priceAdjustment": 0,\n  "editTexts": 0,\n  "amount": 27541,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "reference_document": {\n    "href": "https://api.bsale.io/v1/documents/472.json",\n    "id": "472"\n  },\n  "credit_note": {\n    "href": "https://api.bsale.io/v1/documents/477.json",\n    "id": "477"\n  },\n  "details": {\n    "href": "https://api.bsale.io/v1/returns/1/details.json"\n  }\n}\n')),(0,r.kt)("h3",{id:"atributos"},"Atributos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Atributo"),(0,r.kt)("th",{parentName:"tr",align:null},"Descripci\xf3n"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo dato"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"href")),(0,r.kt)("td",{parentName:"tr",align:null},"url de la devoluci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"identificador \xfanico de la devoluci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"c\xf3digo interno \xfanico de la la devoluci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"returnDate")),(0,r.kt)("td",{parentName:"tr",align:null},"fecha de la devoluci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"motive")),(0,r.kt)("td",{parentName:"tr",align:null},"raz\xf3n de por que fue efectuada la devoluci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"identifica si la forma de pago de la devoluci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"priceAdjustment")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la nota de cr\xe9dito relacionada fue por ajuste de precio No(0) o Si(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"editTexts")),(0,r.kt)("td",{parentName:"tr",align:null},"indica si la nota de cr\xe9dito relacionada fue por correcci\xf3n de texto (forma) No(0) o Si(1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},"monto total de la devoluci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"Float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"office")),(0,r.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con la sucursal en la que fue emitida la devoluci\xf3n."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"reference_document")),(0,r.kt)("td",{parentName:"tr",align:null},"nodo que indica la relaci\xf3n con el documento de referencia que se devuelve."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"credit_note")),(0,r.kt)("td",{parentName:"tr",align:null},"nodo que indica el documento nota de cr\xe9dito."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"details")),(0,r.kt)("td",{parentName:"tr",align:null},"nodo que indica los detalles de la devoluci\xf3n."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"get-lista-de-devoluciones"},"GET lista de devoluciones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/returns.json")," retorna todas las devoluciones.")),(0,r.kt)("h4",{id:"par\xe1metros"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"limit"),", limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el m\xe1ximo permitido es 50."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"offset"),", permite paginar los items de una respuesta JSON, por defecto el offset es 0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields"),", solo devolver atributos espec\xedficos de un recurso"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones para traer relaciones en una sola petici\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"returndate"),", Permite filtrar por fecha de devoluci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"code"),", filtra por c\xf3digo de la devoluci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),", filtra por tipo de devoluci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"officeid"),", Permite filtrar por sucursal."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"referencedocumentid"),", filtra por documento de referencia."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"creditnoteid"),", filtra por el id de la nota de cr\xe9dito.")),(0,r.kt)("h4",{id:"ejemplos"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/returns.json?limit=10&offset=0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/returns.json?fields=[returndate,motive]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/returns.json?expand=[reference_document,credit_note,details]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /returns.json "',title:'"Response',"/returns.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/returns.json",\n  "count": 49,\n  "limit": 2,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/returns/1.json",\n      "id": 1,\n      "code": "137615600351",\n      "returnDate": 1376107200,\n      "motive": "Cambio a Factura",\n      "type": 1,\n      "priceAdjustment": 0,\n      "editTexts": 0,\n      "amount": 27541,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      },\n      "reference_document": {\n        "href": "https://api.bsale.io/v1/documents/472.json",\n        "id": "472"\n      },\n      "credit_note": {\n        "href": "https://api.bsale.io/v1/documents/477.json",\n        "id": "477"\n      },\n      "details": {\n        "href": "https://api.bsale.io/v1/returns/1/details.json"\n      }\n    },\n    {\n      "href": "https://api.bsale.io/v1/returns/2.json",\n      "id": 2,\n      "code": "137668322351",\n      "returnDate": 1376625600,\n      "motive": "error de ventas",\n      "type": 0,\n      "priceAdjustment": 0,\n      "editTexts": 0,\n      "amount": 21488,\n      "office": {\n        "href": "https://api.bsale.io/v1/offices/1.json",\n        "id": "1"\n      },\n      "reference_document": {\n        "href": "https://api.bsale.io/v1/documents/527.json",\n        "id": "527"\n      },\n      "credit_note": {\n        "href": "https://api.bsale.io/v1/documents/529.json",\n        "id": "529"\n      },\n      "details": {\n        "href": "https://api.bsale.io/v1/returns/2/details.json"\n      }\n    }\n  ]\n} \n')),(0,r.kt)("h2",{id:"get-una-devoluci\xf3n"},"GET una devoluci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/returns/1.json")," retorna una \xfanica devoluci\xf3n.")),(0,r.kt)("h4",{id:"par\xe1metros-1"},"Par\xe1metros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expand"),", permite expandir instancias y colecciones.")),(0,r.kt)("h4",{id:"ejemplos-1"},"Ejemplos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET /v1/returns/1.json?expand=[credit_note]"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /returns.json "',title:'"Response',"/returns.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/returns/1.json",\n  "id": 1,\n  "code": "137615600351",\n  "returnDate": 1376107200,\n  "motive": "Cambio a Factura",\n  "type": 1,\n  "priceAdjustment": 0,\n  "editTexts": 0,\n  "amount": 27541,\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "reference_document": {\n    "href": "https://api.bsale.io/v1/documents/472.json",\n    "id": "472"\n  },\n  "credit_note": {\n    "href": "https://api.bsale.io/v1/documents/477.json",\n    "id": "477"\n  },\n  "details": {\n    "href": "https://api.bsale.io/v1/returns/1/details.json"\n  }\n}\n')),(0,r.kt)("h2",{id:"get-detalles-de-una-devoluci\xf3n"},"GET detalles de una devoluci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/returns/1/details.json")," ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /returns/1/details.json "',title:'"Response',"/returns/1/details.json":!0,'"':!0},'{\n  "href": "https://api.bsale.io/v1/returns/1/details.json",\n  "count": 2,\n  "limit": 25,\n  "offset": 0,\n  "items": [\n    {\n      "href": "https://api.bsale.io/v1/returns/1/details/1.json",\n      "id": 1,\n      "quantity": 2.8,\n      "quantityDevStock": 2.8,\n      "variantStock": 59.37,\n      "variantCost": 3200\n    },\n    {\n      "href": "https://api.bsale.io/v1/returns/1/details/2.json",\n      "id": 2,\n      "quantity": 1.64,\n      "quantityDevStock": 1.64,\n      "variantStock": 45.44,\n      "variantCost": 3200\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"get-un-detalle-de-una-devoluci\xf3n"},"GET un detalle de una devoluci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GET ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/returns/1/details/1.json")," ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response /returns/1/details/1.json"',title:'"Response','/returns/1/details/1.json"':!0},'{\n   "href": "https://api.bsale.io/v1/returns/1/details/1.json",\n   "id": 1,\n   "quantity": 2.8,\n   "quantityDevStock": 2.8,\n   "variantStock": 59.37,\n   "variantCost": 3200.0\n}\n')),(0,r.kt)("h2",{id:"post-una-devoluci\xf3n"},"POST una devoluci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST ",(0,r.kt)("inlineCode",{parentName:"li"},"/v1/returns.json"),"\nPara crear una devoluci\xf3n y su respectiva nota da cr\xe9dito se debe enviar un JSON con la siguiente estructura:")),(0,r.kt)("h3",{id:"referencias-y-fechas"},"Referencias y fechas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "documentTypeId": 9,\n  "officeId": 1,\n  "referenceDocumentId": 11528,\n  "emissionDate": 1407384000,\n  "motive": "Bonificaci\xf3n por pago",\n  "declare": 1,\n  "priceAdjustment": 1,\n  "editTexts": 0,\n  "type": 1\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"documentTypeId"),", Id del tipo de documento que indicara si es factura, boleta, nota de venta etc. (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"officeId"),", Id de la sucursal donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"referenceDocumentId"),", Id del documento original al cual se le va hacer la devoluci\xf3n (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"emissionDate"),", Fecha de emisi\xf3n de la devoluci\xf3n, se env\xeda en formato GMT (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"expirationDate"),", Fecha vencimiento de la devoluci\xf3n, se env\xeda en formato GMT (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"motive"),", Indica el motivo de la devoluci\xf3n (String)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"declare"),", Si se desea declarar el documento al Servicio de impuestos internos se env\xeda 1, en caso contrario un 0 (Boolean)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"priceAdjustment"),", Si la devoluci\xf3n corresponde a un ajuste de precio de los productos se env\xeda ",(0,r.kt)("strong",{parentName:"li"},"1"),", en caso contrario 0 (Boolean)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),", Indica como se va a devolver el dinero del documento, ",(0,r.kt)("strong",{parentName:"li"},"0")," para devoluci\xf3n dinero, ",(0,r.kt)("strong",{parentName:"li"},"1")," para forma pago nueva venta, ",(0,r.kt)("strong",{parentName:"li"},"2")," para abono linea de cr\xe9dito (Condonaci\xf3n), ",(0,r.kt)("strong",{parentName:"li"},"3")," para otra devoluci\xf3n (Integer).")),(0,r.kt)("h3",{id:"cliente-de-una-devoluci\xf3n"},"Cliente de una devoluci\xf3n"),(0,r.kt)("p",null,"Para las notas de cr\xe9dito ",(0,r.kt)("strong",{parentName:"p"},"es obligatorio")," especificar el cliente."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Para le generaci\xf3n de devoluciones, el cliente es obligatorio. Si el documento de referencia tiene asociado datos de cliente, se deben indicar los mismos datos en la devoluci\xf3n.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client": {\n    "code": "XAXX010101000",\n    "city": "Ciudad de M\xe9xico",\n    "district": "JUAREZ",\n    "company": "PUBLICO EN GENERAL",\n    "address": "VARSOVIA 111"\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"code"),", Rut del cliente (String)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"city"),", Ciudad del cliente  (String)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"company"),", Raz\xf3n social del cliente (String)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"municipality"),", Comuna del cliente (String)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"activity"),", Giro del cliente (String)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"address"),", Direcci\xf3n del cliente (String). "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"firstName"),", Nombre de persona (String)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lastName"),", Apellido de persona (String).")),(0,r.kt)("h3",{id:"detalles-de-la-devoluci\xf3n"},"Detalles de la devoluci\xf3n"),(0,r.kt)("h4",{id:"tipos-de-una-devoluci\xf3n"},"Tipos de una devoluci\xf3n"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"quant",label:"Ajustar precios",default:!0,mdxType:"TabItem"},"Si se desea crear una devoluci\xf3n para ajustar el precio de los productos, se debe enviar el editTexts en 0 y el priceAdjustment en 1, ademas de enviar en el nodo details solo los detalles que van a cambiar de precio del documento original (quantity = 0, unitValue = nuevo precio)"),(0,r.kt)(i.Z,{value:"texts",label:"Devolver cantidades",mdxType:"TabItem"},"Si se desea crear una devoluci\xf3n solo para retornar productos, se debe enviar el editTexts en 0 y el priceAdjustment en 0, ademas de enviar en el nodo details solo los detalles que van a cambiar de cantidad del documento original (quantity = nueva cantidad, unitValue = 0).")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Adem\xe1s de indicar el ",(0,r.kt)("inlineCode",{parentName:"p"},"referenceDocumentId")," se debe referenciar el id de detalle de la venta: ",(0,r.kt)("inlineCode",{parentName:"p"},"documentDetailId"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=" Ejemplo devoluci\xf3n cantidades"',title:'"',Ejemplo:!0,"devoluci\xf3n":!0,'cantidades"':!0},'{\n  "details": [\n    {\n      "documentDetailId": 21493,\n      "quantity": 1,\n      "unitValue": 0\n    }\n  ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Opcionalmente si generas una nota de cr\xe9dito que ajusta el precio del documento original, puedes cambiar la descripcion del del item con el atributo comment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Ejemplo ajuste de precios"',title:'"Ejemplo',ajuste:!0,de:!0,'precios"':!0},'{\n  "details": [\n    {\n      "documentDetailId": 21493,\n      "comment": "Nueva descripci\xf3n del item",\n      "quantity": 1,\n      "unitValue": 0\n    }\n  ]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"documentDetailId"),", Id del ","[detalle del documento]"," original que se va a devolver (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantity"),", Cantidad a devolver (Float)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"unitValue"),", Valor unitario neto del detalle (String). ","[detalle del documento]")),(0,r.kt)("h3",{id:"forma-de-pago-en-nueva-venta"},"Forma de pago en nueva venta"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Para generar este tipo de devoluci\xf3n es obligatorio especificar el cliente.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    "payments": [\n        {\n            "recordDate": 1639667641,\n            "amount": 11900,\n            "paymentTypeId": 3,\n            "documentTypeId": 9,\n            "number": 125\n        }\n    ]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"documentTypeId"),", Id del tipo de documento de la nota de cr\xe9dito (Integer)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"number"),", folio de la nota de cr\xe9dito devoluci\xf3n (Integer).")),(0,r.kt)("h2",{id:"ejemplo-json"},"Ejemplo JSON"),(0,r.kt)("h3",{id:"env\xedo"},"Env\xedo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="POST /returns.json "',title:'"POST',"/returns.json":!0,'"':!0},'{\n  "documentTypeId": 9,\n  "officeId": 1,\n  "expirationDate": 1407384000,\n  "emissionDate": 1407384000,\n  "referenceDocumentId": 11528,\n  "motive": "Descuento o bonificaci\xf3n",\n  "declareSii": 1,\n  "priceAdjustment": 1,\n  "editTexts": 0,\n  "type": 1,\n  "client": {\n    "code": "XAXX010101000",\n    "city": "Ciudad de M\xe9xico",\n    "district": "JUAREZ",\n    "company": "PUBLICO EN GENERAL",\n    "address": "VARSOVIA 111"\n  },\n  "details": [\n    {\n      "documentDetailId": 21493,\n      "quantity": 0,\n      "unitValue": 1250\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"respuesta"},"Respuesta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="201 Response /returns.json "',title:'"201',Response:!0,"/returns.json":!0,'"':!0},'{\n  "credit_note": {\n    "href": "https://api.bsale.io/v1/documents/11539.json",\n    "id": "11539"\n  },\n  "reference_document": {\n    "href": "https://api.bsale.io/v1/documents/11528.json",\n    "id": "11528"\n  },\n  "amount": 6490,\n  "code": "140745397411",\n  "type": 1,\n  "editTexts": 0,\n  "href": "https://api.bsale.io/v1/returns/71.json",\n  "returnDate": 1407384000,\n  "details": {\n    "href": "https://api.bsale.io/v1/returns/71/details.json"\n  },\n  "office": {\n    "href": "https://api.bsale.io/v1/offices/1.json",\n    "id": "1"\n  },\n  "motive": "Descuento o bonificaci\xf3n",\n  "priceAdjustment": 0,\n  "id": 71\n}\n')))}m.isMDXComponent=!0}}]);