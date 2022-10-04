---
sidebar_position: 21
title: Tipos de productos y servicios
description: Crear, editar y listar tipos de productos
slug: /tipos-de-productos-y-servicios
---


# Tipos de productos y servicios

Listar, editar, crear y eliminar tipos de producto

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación Tipos de producto [Ver](https://www.youtube.com/watch?v=TXMq5CH8TUY) 

:::info
Para que un producto pueda asociarse a un tipo de producto, **primero se debe crear el tipo de producto** y referenciar su id en la creación del producto.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /product_types/2.json"
{
  "href": "https://api.bsale.cl/v1/product_types/2.json",
  "id": 2,
  "name": "Sin Tipo de Producto",
  "isEditable": 1,
  "state": 0,
  "imagestionCategoryId": 0,
  "prestashopCategoryId": 0,
  "attributes": {
    "href": "https://api.bsale.cl/v1/product_types/2/attributes.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del tipo de producto     | String       |
| **id**   | identificador único del tipo de producto   | Integer |
| **name** | nombre del del tipo de producto | String | 
| **isEditable** | indica si el tipo de producto se puede editar No(0) o Si (1) | Boolean |
| **state** | estado del tipo de producto activo(0) o inactivo (1)  | Boolean |
| **imagestionCategoryId** | identificador en imagestion _legacy_ | Integer | 
| **prestashopCategoryId** | identificador en prestashop _legacy_ | Integer |

## GET lista de tipos de producto
- GET `/v1/product_types.json` retornará todos los tipos de producto.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre tipo producto.
- **state**, boolean (0 o 1) indica si los tipos de producto están activos(0) inactivos(1).
  
#### Ejemplos
- `GET /v1/product_types.json?limit=10&offset=0`
- `GET /v1/product_types.json?fields=[name,state]`
- `GET /v1/product_types.json?state=0`


```json title="Response /product_types.json "
{
  "href": "https://api.bsale.cl/v1/product_types.json",
  "count": 4,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/product_types/30.json",
      "id": 30,
      "name": "Accesorios Computación",
      "isEditable": 1,
      "state": 0,
      "imagestionCategoryId": 0,
      "prestashopCategoryId": 0,
      "attributes": {
        "href": "https://api.bsale.cl/v1/product_types/30/attributes.json"
      }
    },
    {
      "href": "https://api.bsale.cl/v1/product_types/9.json",
      "id": 9,
      "name": "Arriendo de producto",
      "isEditable": 1,
      "state": 0,
      "imagestionCategoryId": 0,
      "prestashopCategoryId": 0,
      "attributes": {
        "href": "https://api.bsale.cl/v1/product_types/9/attributes.json"
      }
    },
    {
      "href": "https://api.bsale.cl/v1/product_types/16.json",
      "id": 16,
      "name": "ARRIENDOS CHILEAN",
      "isEditable": 1,
      "state": 0,
      "imagestionCategoryId": 0,
      "prestashopCategoryId": 0,
      "attributes": {
        "href": "https://api.bsale.cl/v1/product_types/16/attributes.json"
      }
    },
    {
      "href": "https://api.bsale.cl/v1/product_types/5.json",
      "id": 5,
      "name": "Artículos Oficina",
      "isEditable": 1,
      "state": 0,
      "imagestionCategoryId": 0,
      "prestashopCategoryId": 0,
      "attributes": {
        "href": "https://api.bsale.cl/v1/product_types/5/attributes.json"
      }
    }
  ]
}
```
## GET un tipo de producto
- GET `/v1/product_types/2.json` retornará un tipo de producto específico.

```json title="Response /product_types/2.json"
{
  "href": "https://api.bsale.cl/v1/product_types/2.json",
  "id": 2,
  "name": "Sin Tipo de Producto",
  "isEditable": 1,
  "state": 0,
  "imagestionCategoryId": 0,
  "prestashopCategoryId": 0,
  "attributes": {
    "href": "https://api.bsale.cl/v1/product_types/2/attributes.json"
  }
}
```

## GET productos asociados a un tipo de producto
- GET `GET /v1/product_types/3/products.json` retorna un arreglo de los productos que pertenezcan al tipo de producto.

```json
{
  "href": "https://api.bsale.cl/v1/products.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/products/2.json",
      "id": 2,
      "name": "Asesoria Informatica Imagestion Capacitacion",
      "description": "",
      "classification": 1,
      "ledgerAccount": "",
      "costCenter": "",
      "allowDecimal": 1,
      "stockControl": 0,
      "printDetailPack": 0,
      "state": 0,
      "prestashopProductId": 0,
      "presashopAttributeId": 0,
      "product_type": {
        "href": "https://api.bsale.cl/v1/product_types/3.json",
        "id": "3"
      }
    },
    {
      "href": "https://api.bsale.cl/v1/products/49.json",
      "id": 49,
      "name": "Etravel Capacitacion",
      "description": "",
      "classification": 1,
      "ledgerAccount": "",
      "costCenter": "",
      "allowDecimal": 1,
      "stockControl": 0,
      "printDetailPack": 0,
      "state": 0,
      "prestashopProductId": 0,
      "presashopAttributeId": 0,
      "product_type": {
        "href": "https://api.bsale.cl/v1/product_types/3.json",
        "id": "3"
      }
    }
  ]
}
```

## GET cantidad de tipos de producto
- GET `/v1/product_types/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los tipos de productos están activos(0) inactivos (1).
  
```json 
{
   "count": 1926
}
```

## GET atributos de un tipo de producto
- GET `/v1/product_types/44/attributes.json` Retornará atributos asociados al tipo de producto.
  
```json title="Response /product_types/44/attributes.json"
{
  "href": "https://api.bsale.cl/v1/product_types/44/attributes.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/product_types/44/attributes/46.json",
      "id": 46,
      "name": "Fabricante",
      "isMandatory": 0,
      "generateVariantName": 1,
      "hasOptions": 1,
      "options": "Nintendo|Microsoft|Sony",
      "state": 0
    },
    {
      "href": "https://api.bsale.cl/v1/product_types/44/attributes/47.json",
      "id": 47,
      "name": "Sistema",
      "isMandatory": 0,
      "generateVariantName": 1,
      "hasOptions": 1,
      "options": "Wii U|Xone|PS4",
      "state": 0
    }
  ]
}
```

#### GET un atributo de un tipo de producto específico
- GET `/v1/product_types/156/attributes/93.json` Retornará un atributo asociados al tipo de producto.
  
```json title="Response /product_types/156/attributes/93.json"
{
  "href": "https://api.bsale.cl/v1/product_types/156/attributes/93.json",
  "id": 93,
  "name": "atributito",
  "isMandatory": 0,
  "generateVariantName": 0,
  "hasOptions": 0,
  "options": "",
  "state": 0
}
```

## POST un tipo de producto
- POST `/v1/product_types.json` 

Para crear un tipo de producto, se debe enviar un JSON con la siguiente estructura:
### Ejemplo JSON

#### Envío
```json
{
  "name": "Discos físicos"
}
```
- **name**, nombre del tipo de producto (String).
 
### Atributos (opcional)
Si se desean crear atributos especiales para el tipo de producto se debe enviar la siguiente estructura.

```json
{
  "name": "Discos físicos",
  "attributes": [
    {
      "name": "Fabricante",
      "isMandatory": 0,
      "generateVariantName": 1,
      "hasOptions": 1,
      "options": "Nintendo|Microsoft|Sony",
      "state": 0
    },
    {
      "name": "Sistema",
      "isMandatory": 0,
      "generateVariantName": 1,
      "hasOptions": 1,
      "options": "Wii U|Xone|PS4",
      "state": 0
    }
  ]
}
```
- **name**, nombre del atributo (String).
- **isMandatory**, indica si el atributo es obligatorio, 0 es No 1 es Si (Boolean).
- **generateVariantName**, indica si el atributo se usara para generar el nombre de la variante, 0 es No 1 es Si(Boolean).
- **hasOptions**, indica si el atributo tendrá opciones, 0 es No 1 es Si (Boolean).
- **options**, opciones del atributo, se separan con el carácter "|" (String).
- **state**, indica el estado del atributo, 0 Activo 1 Inactivo (Boolean).

#### Respuesta
```json
{
  "href": "https://api.bsale.cl/v1/product_types/44.json",
  "id": 44,
  "name": "Discos físicos",
  "isEditable": 1,
  "state": 0,
  "imagestionCategoryId": 0,
  "prestashopCategoryId": 0,
  "attributes": {
    "href": "https://api.bsale.cl/v1/product_types/44/attributes.json"
  }
}
```

## PUT un tipo de producto
- PUT `/v1/product_types/44.json` 

Se debe enviar un Json con la siguiente estructura.
### Ejemplo JSON

#### Envío
```json
{
  "id": 44,
  "name": "Consolas Next GEN 2",
  "attributes": [
    {
      "id": 1,
      "name": "Fabricante",
      "isMandatory": 0,
      "generateVariantName": 1,
      "hasOptions": 1,
      "options": "Nintendo|Microsoft|Sony",
      "state": 0
    },
    {
      "id": 2,
      "name": "Sistema",
      "isMandatory": 0,
      "generateVariantName": 1,
      "hasOptions": 1,
      "options": "Wii U|Xone|PS4",
      "state": 0
    }
  ]
}
```
#### Respuesta
```json
{
  "href": "https://api.bsale.cl/v1/product_types/44.json",
  "id": 44,
  "name": "Consolas Next GEN",
  "isEditable": 1,
  "state": 0,
  "imagestionCategoryId": 0,
  "prestashopCategoryId": 0,
  "attributes": {
    "href": "https://api.bsale.cl/v1/product_types/44/attributes.json"
  }
}
```
:::caution
Si se desea cambiar los atributos se debe enviar el `id` de lo contrario se crea otro atributo.
:::

## DELETE un tipo producto virtualmente
- DELETE `/v1/product_types/44.json ` 
Cambia el estado del tipo producto.

:::danger
El producto no estará visible mediante interfaz y tendrá un `state` 99
:::

```json
{
   "href": "https://api.bsale.cl/v1/product_types/44.json",
   "id": 44,
   "name": "Consolas Next GEN 2",
   "isEditable": 1,
   "state": 1,
   "imagestionCategoryId": 0,
   "prestashopCategoryId": 0,
   "attributes": {
       "href": "https://api.bsale.cl/v1/product_types/44/attributes.json"
   }
}
```

