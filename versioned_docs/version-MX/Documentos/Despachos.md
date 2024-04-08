---
sidebar_position: 11
title: Envíos
description: Crear, editar y listar envíos
slug: /documentos/envíos
---


# Envíos

:::info
Un documento del tipo envío, siempre genera una salida de stock (cuando se controla stock)
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /v1/shippings/22.json"
{
  "href": "https://api.bsale.com.mx/v1/shippings/22.json",
  "id": 22,
  "shippingDate": 1370318400,
  "address": null,
  "municipality": "",
  "city": "",
  "recipient": null,
  "state": 0,
  "office": {
    "href": "https://api.bsale.com.mx/v1/offices/1.json",
    "id": "1"
  },
  "shipping_type": {
    "href": "https://api.bsale.com.mx/v1/shipping_types/1.json",
    "id": "1"
  },
  "guide": {
    "href": "https://api.bsale.com.mx/v1/documents/23.json",
    "id": "23"
  },
  "details": {
    "href": "https://api.bsale.com.mx/v1/shippings/22/details.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del documento envío     | String       |
| **id**   | identificador único del envío   | Integer |
| **shippingDate**   | fecha del envío   | Integer |
| **address**   | dirección del envío   | String |
| **municipality**   | comuna del envío  | String |
| **city**   | ciudad del envío   | String |
| **recipient**   | destinatario del envío    | String |
| **state**   | estado del descuento indica si el descuento esta activo(0) o inactivo (1)   | Boolean |
| **received**   | estado de la recepción traslado interno (0) No recibida (1) Recibida   | Boolean |
| **office**   | nodo que indica la relación con la sucursal en la que fue emitida el envío.   |  |
| **shipping_type**   | nodo que indica la relación con el tipo de envío.  |  |
| **guide**   | nodo que indica el documento de envío.  |  |
| **details**   | nodo que indica los detalles del envío.  |  |

## GET lista de envíos
- GET `/v1/shippings.json` retornará todos los envíos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **shippingdate**, Permite filtrar por fecha de devolución.
- **officeid**, Permite filtrar por sucursal.
- **shippingtypeid**, filtra por documento de referencia.
- **state**, boolean (0 o 1) indica si los documentos están activos(0) inactivos (1).
  
#### Ejemplos
- `GET /v1/shippings.json?limit=10&offset=0`
- `GET /v1/shippings.json?fields=[shippingdate,recipient]`
- `GET /v1/shippings.json?expand=[guide,shipping_type,details]`

```json title="Response /shippings.json "
{
  "href": "https://api.bsale.com.mx/v1/shippings.json",
  "count": 13430,
  "limit": 3,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.com.mx/v1/shippings/22.json",
      "id": 22,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.com.mx/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.com.mx/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.com.mx/v1/documents/23.json",
        "id": "23"
      },
      "details": {
        "href": "https://api.bsale.com.mx/v1/shippings/22/details.json"
      }
    },
    {
      "href": "https://api.bsale.com.mx/v1/shippings/23.json",
      "id": 23,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.com.mx/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.com.mx/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.com.mx/v1/documents/24.json",
        "id": "24"
      },
      "details": {
        "href": "https://api.bsale.com.mx/v1/shippings/23/details.json"
      }
    },
    {
      "href": "https://api.bsale.com.mx/v1/shippings/24.json",
      "id": 24,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.com.mx/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.com.mx/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.com.mx/v1/documents/25.json",
        "id": "25"
      },
      "details": {
        "href": "https://api.bsale.com.mx/v1/shippings/24/details.json"
      }
    }
  ]
}
```
## GET único envío
- GET `/v1/shippings/22.json ` retornará un envío específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.

#### Ejemplos
- `GET /v1/shippings/1.json?expand=[details]`

```json title="Response /shippings/22.json "
{
  "href": "https://api.bsale.com.mx/v1/shippings/22.json",
  "id": 22,
  "shippingDate": 1370318400,
  "address": null,
  "municipality": "",
  "city": "",
  "recipient": null,
  "state": 0,
  "office": {
    "href": "https://api.bsale.com.mx/v1/offices/1.json",
    "id": "1"
  },
  "shipping_type": {
    "href": "https://api.bsale.com.mx/v1/shipping_types/1.json",
    "id": "1"
  },
  "guide": {
    "href": "https://api.bsale.com.mx/v1/documents/23.json",
    "id": "23"
  },
  "details": {
    "href": "https://api.bsale.com.mx/v1/shippings/22/details.json"
  }
}
```

## GET detalles de un envío
- GET `GET /v1/shippings/22/details.json` retorna los detalles contenidos en un envío.

```json title="Response /shippings/22/details.json "
{
  "href": "https://api.bsale.com.mx/v1/shippings/22/details.json",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.com.mx/v1/shippings/22/details/31.json",
      "id": 31,
      "quantity": 1,
      "variantStock": 28,
      "variantCost": 0,
      "variant": {
        "href": "https://api.bsale.com.mx/v1/variants/8.json",
        "id": "8"
      }
    }
  ]
}
```

## GET un detalle de un envío
- GET `/v1/shippings/22/details/31.json` Retornará un detalle específico del envío.

```json title="Response /shippings/22/details/31.json "
{
  "href": "https://api.bsale.com.mx/v1/shippings/22/details/31.json",
  "id": 31,
  "quantity": 1,
  "variantStock": 28,
  "variantCost": 0,
  "variant": {
    "href": "https://api.bsale.com.mx/v1/variants/8.json",
    "id": "8"
  }
}
```

