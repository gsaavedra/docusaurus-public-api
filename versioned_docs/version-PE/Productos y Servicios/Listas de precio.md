---
sidebar_position: 24
title: Listas de precio
description: Crear, editar y listar precios
slug: /listas-de-precio
---

# Listas de precios
Listar y editar detalles de las listas de precio en Bsale. 

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación listas de precios [Ver](https://youtu.be/M8hXnw3nUDQ) 

:::info
Bsale gestiona 1 o más listas de precio. (Ej Lista de precios temporada, lista distribuidores, lista por mayor, etc). Pueden ser concebidas con distintos tipos de moneda (dolar, franco, uf, etc)

Para usar las lista de precio creadas, referenciar `priceListId` en el envío del documento.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /price_lists/3.json"
{
  "href": "https://api.bsale.io/v1/price_lists/3.json",
  "id": "3",
  "name": "LISTA USD",
  "description": null,
  "state": 0,
  "coin": {
    "href": "https://api.bsale.io/v1/coins/3.json",
    "id": "3"
  },
  "details": {
    "href": "https://api.bsale.io/v1/price_lists/3/details.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del recurso     | String       |
| **id**   | identificador único recurso   | Integer |
| **name** | nombre de la lista de precio | String |
| **state** | estado de la lista de precio indica si esta activo(0) o inactivo (1) | Boolean | 
| **coin** | nodo que indica la moneda que utiliza la lista de precio. | |
| **details** | nodo que indica los detalles de la lista de precio. | |

## GET listas de precio
- GET `/v1/price_lists.json` retornará todas las listas de precio.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre de la lista de precio.
- **coinid**, filtra por la moneda.
- **state**, boolean (0 o 1) indica si las listas de precio están activas(0) inactivas (1).
  
#### Ejemplos
- `GET /v1/price_lists.json?limit=10&offset=0`
- `GET /v1/price_lists.json?fields=[name,description,state]`
- `GET /v1/price_lists.json?coinid=1`
- `GET /v1/price_lists.json?expand=[coin,details]`


```json title="Response /price_lists.json "
{
  "href": "https://api.bsale.io/v1/price_lists.json",
  "count": 3,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/price_lists/1.json",
      "id": "1",
      "name": "Lista Base",
      "description": "",
      "state": 0,
      "coin": {
        "href": "https://api.bsale.io/v1/coins/1.json",
        "id": "1"
      },
      "details": {
        "href": "https://api.bsale.io/v1/price_lists/1/details.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/price_lists/2.json",
      "id": "2",
      "name": "En SOLES",
      "description": "",
      "state": 0,
      "coin": {
        "href": "https://api.bsale.io/v1/coins/2.json",
        "id": "2"
      },
      "details": {
        "href": "https://api.bsale.io/v1/price_lists/2/details.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/price_lists/3.json",
      "id": "3",
      "name": "LISTA USD",
      "description": null,
      "state": 0,
      "coin": {
        "href": "https://api.bsale.io/v1/coins/3.json",
        "id": "3"
      },
      "details": {
        "href": "https://api.bsale.io/v1/price_lists/3/details.json"
      }
    }
  ]
}
```
## GET una lista de precio
- GET `/v1/price_lists/3.json` retornará una lista de precio específica.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.

#### Ejemplos
- `GET /v1/price_lists/3.json?expand=[details,coin]`


```json title="Response /price_lists/3.json"
{
  "href": "https://api.bsale.io/v1/price_lists/3.json",
  "id": "3",
  "name": "LISTA USD",
  "description": null,
  "state": 0,
  "coin": {
    "href": "https://api.bsale.io/v1/coins/3.json",
    "id": "3"
  },
  "details": {
    "href": "https://api.bsale.io/v1/price_lists/3/details.json"
  }
}
```

## GET cantidad de listas de precio
- GET `/v1/price_lists/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los tipos de productos están activos(0) inactivos (1).
  
```json 
{
   "count": 3
}
```

## GET detalles de una lista de precio
- GET `/v1/price_lists/1/details.json` retorna el detalle de la lista de precio, acá se indica el valor de la variante.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **variantid**, filtra por el identificador de la variante (Integer)
- **code**, filtra por el SKU de la variante (String).
- **barcode**, filtra por el código de barras de la variante (String).

#### Ejemplos
- `GET /v1/price_lists/1/details.json?expand=[variant]`
- `GET /v1/price_lists/1/details.json?variantid=149`
- `GET /v1/price_lists/1/details.json?code=12345`
- `GET /v1/price_lists/1/details.json?barcode=45412431`

```json title="Response /price_lists/1/details.json"
{
  "href": "https://api.bsale.io/v1/price_lists/1/details.json",
  "count": 7634,
  "limit": 4,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/price_lists/1/details/663.json",
      "id": 663,
      "variantValue": 4590,
      "variantValueWithTaxes": 5462,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/388.json",
        "id": "388"
      }
    },
    {
      "href": "https://api.bsale.io/v1/price_lists/1/details/681.json",
      "id": 681,
      "variantValue": 25000.23,
      "variantValueWithTaxes": 29750,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/407.json",
        "id": "407"
      }
    },
    {
      "href": "https://api.bsale.io/v1/price_lists/1/details/683.json",
      "id": 683,
      "variantValue": 10000,
      "variantValueWithTaxes": 11900,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/426.json",
        "id": "426"
      }
    },
    {
      "href": "https://api.bsale.io/v1/price_lists/1/details/689.json",
      "id": 689,
      "variantValue": 10000,
      "variantValueWithTaxes": 11900,
      "variant": {
        "href": "https://api.bsale.io/v1/variant/460.json",
        "id": "460"
      }
    }
  ],
  "next": "https://api.bsale.io/v1/price_lists/1/details.json?limit=4&offset=4"
}
```
- **href**, url del detalle de la lista de precio (String).
- **id**, identificador único del detalle (Integer).
- **variantValue**, Valor neto de la variante (Float).
- **variantValueWithTaxes**, Valor con impuestos de la variante (Float).
- **variant**, nodo que indica la variante relacionada con el detalle de la lista de precio.

## GET un detalle de una lista de precio
- GET `/v1/price_lists/3/details/663.json` Retornará un detalle.
  
```json title="Response /price_lists/1/details/663.json"
{
  "href": "https://api.bsale.io/v1/price_lists/1/details/663.json",
  "id": 663,
  "variantValue": 4590,
  "variantValueWithTaxes": 5462,
  "variant": {
    "href": "https://api.bsale.io/v1/variant/388.json",
    "id": "388"
  }
}
```

:::note

**NO existe un POST** de lista de precio, debido a que las listas de precios comparten el total de productos de Bsale. Y sólo se puede editar sus valores, con el verbo `PUT` 

:::

## PUT un detalle de una lista de precio
:::info
El `id` (_1412 en el ejemplo_) que se debe agregar pertenece al **`id` de detalle** de Lista de precio. 
El _19_ de la url, corresponde al `id` de la lista de precio que se está editando.
:::

- PUT `/v1/price_lists/19/details/1412.json` 
Se debe enviar un Json con la siguiente estructura: 
### Ejemplo JSON

#### Envío
```json
{
   "variantValue": 2000,
   "id": 1412
}
```
#### Respuesta
```json
{
  "href": "https://api.bsale.io/v1/price_lists/19/details/1412.json",
  "variantValue": 2000,
  "variantValueWithTaxes": 2380,
  "variant": {
    "href": "https://api.bsale.io/v1/variant/351.json",
    "id": "351"
  },
  "id": 1412
}
```
