---
sidebar_position: 12
title: Devoluciones
description: Crear y listar devoluciones
slug: /devoluciones
---
# Devoluciones
Endpoint para la generación de documentos del tipo devolución/anulaciones de ventas. (_Nota de crédito electrónica, nota de débito electrónica_). 

:::info
Siempre se debe referenciar el `id` del documento venta que se desea devolver junto a sus detalles. 
:::


Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación de nota de crédito [Ver](https://youtu.be/Oo6KCvIhyeQ) 

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /returns/1.json"
{
  "href": "https://api.bsale.io/v1/returns/1.json",
  "id": 1,
  "code": "137615600351",
  "returnDate": 1376107200,
  "motive": "Cambio a Factura",
  "type": 1,
  "priceAdjustment": 0,
  "editTexts": 0,
  "amount": 27541,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "reference_document": {
    "href": "https://api.bsale.io/v1/documents/472.json",
    "id": "472"
  },
  "credit_note": {
    "href": "https://api.bsale.io/v1/documents/477.json",
    "id": "477"
  },
  "details": {
    "href": "https://api.bsale.io/v1/returns/1/details.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url de la devolución       | String       |
| **id**      | identificador único de la devolución | Integer       |
| **code**      | código interno único de la la devolución | String       |
| **returnDate**      | fecha de la devolución | Integer |
| **motive**      | razón de por que fue efectuada la devolución| String       |
| **type**      | identifica si la forma de pago de la devolución  | Integer |
| **priceAdjustment**      | indica si la nota de crédito relacionada fue por ajuste de precio No(0) o Si(1) | Boolean |
| **editTexts**      | indica si la nota de crédito relacionada fue por corrección de texto (forma) No(0) o Si(1) | Boolean |
| **amount**      | monto total de la devolución | Float       |
| **office**      | nodo que indica la relación con la sucursal en la que fue emitida la devolución. | |
| **reference_document**      | nodo que indica la relación con el documento de referencia que se devuelve. |  |
| **credit_note**      | nodo que indica el documento nota de crédito. |  |
| **details**      | nodo que indica los detalles de la devolución. |  |

## GET lista de devoluciones
- GET `/v1/returns.json` retorna todas las devoluciones.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **returndate**, Permite filtrar por fecha de devolución.
- **code**, filtra por código de la devolución.
- **type**, filtra por tipo de devolución.
- **officeid**, Permite filtrar por sucursal.
- **referencedocumentid**, filtra por documento de referencia.
- **creditnoteid**, filtra por el id de la nota de crédito.
  
#### Ejemplos
- `GET /v1/returns.json?limit=10&offset=0`
- `GET /v1/returns.json?fields=[returndate,motive]`
- `GET /v1/returns.json?expand=[reference_document,credit_note,details]`

```json title="Response /returns.json "
{
  "href": "https://api.bsale.io/v1/returns.json",
  "count": 49,
  "limit": 2,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/returns/1.json",
      "id": 1,
      "code": "137615600351",
      "returnDate": 1376107200,
      "motive": "Cambio a Factura",
      "type": 1,
      "priceAdjustment": 0,
      "editTexts": 0,
      "amount": 27541,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "reference_document": {
        "href": "https://api.bsale.io/v1/documents/472.json",
        "id": "472"
      },
      "credit_note": {
        "href": "https://api.bsale.io/v1/documents/477.json",
        "id": "477"
      },
      "details": {
        "href": "https://api.bsale.io/v1/returns/1/details.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/returns/2.json",
      "id": 2,
      "code": "137668322351",
      "returnDate": 1376625600,
      "motive": "error de ventas",
      "type": 0,
      "priceAdjustment": 0,
      "editTexts": 0,
      "amount": 21488,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "reference_document": {
        "href": "https://api.bsale.io/v1/documents/527.json",
        "id": "527"
      },
      "credit_note": {
        "href": "https://api.bsale.io/v1/documents/529.json",
        "id": "529"
      },
      "details": {
        "href": "https://api.bsale.io/v1/returns/2/details.json"
      }
    }
  ]
} 
```

## GET una devolución
- GET `/v1/returns/1.json` retorna una única devolución.

#### Parámetros
- **expand**, permite expandir instancias y colecciones.

#### Ejemplos
- `GET /v1/returns/1.json?expand=[credit_note]`

```json title="Response /returns.json "
{
  "href": "https://api.bsale.io/v1/returns/1.json",
  "id": 1,
  "code": "137615600351",
  "returnDate": 1376107200,
  "motive": "Cambio a Factura",
  "type": 1,
  "priceAdjustment": 0,
  "editTexts": 0,
  "amount": 27541,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "reference_document": {
    "href": "https://api.bsale.io/v1/documents/472.json",
    "id": "472"
  },
  "credit_note": {
    "href": "https://api.bsale.io/v1/documents/477.json",
    "id": "477"
  },
  "details": {
    "href": "https://api.bsale.io/v1/returns/1/details.json"
  }
}
```
## GET detalles de una devolución
- GET `/v1/returns/1/details.json` 

```json title="Response /returns/1/details.json "
{
  "href": "https://api.bsale.io/v1/returns/1/details.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/returns/1/details/1.json",
      "id": 1,
      "quantity": 2.8,
      "quantityDevStock": 2.8,
      "variantStock": 59.37,
      "variantCost": 3200
    },
    {
      "href": "https://api.bsale.io/v1/returns/1/details/2.json",
      "id": 2,
      "quantity": 1.64,
      "quantityDevStock": 1.64,
      "variantStock": 45.44,
      "variantCost": 3200
    }
  ]
}
```

## GET un detalle de una devolución
- GET `/v1/returns/1/details/1.json` 

```json title="Response /returns/1/details/1.json"
{
   "href": "https://api.bsale.io/v1/returns/1/details/1.json",
   "id": 1,
   "quantity": 2.8,
   "quantityDevStock": 2.8,
   "variantStock": 59.37,
   "variantCost": 3200.0
}
```
