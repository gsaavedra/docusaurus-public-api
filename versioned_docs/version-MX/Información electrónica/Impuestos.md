---
sidebar_position: 62
title: Impuestos
description: Listar Impuestos
slug: /impuestos
---


# Impuestos
Listar impuestos creados en Bsale. 

:::info
Para usar los impuestos creados, usar el nodo taxId o taxes en el envío del documento.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /taxes/1.json"
{
  "href": "https://api.bsale.cl/v1/taxes/1.json",
  "id": 1,
  "name": "IVA",
  "percentage": "19.0",
  "forAllProducts": 0,
  "ledgerAccount": null,
  "code": "14",
  "state": 0
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del Impuestos     | String       |
| **id**   | identificador único del Impuestos   | Integer |
| **name**   | nombre del impuesto | String |
| **percentage**   | porcentaje de impuesto | Float |
| **forAllProducts**   | indica si es aplicado para todos los productos, No(0) o Si (1)| Boolean |
| **ledgerAccount**   | cuenta contable del impuesto | String |
| **code**   | código del impuesto | Boolean |
| **state**   | estado del impuesto indica si el impuesto esta activo(0) o inactivo (1) | Boolean |

## GET lista de Impuestos
- GET `/v1/taxes.json` retornará todos los Impuestos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre del impuesto.
- **percentage**, filtra por porcentaje de impuesto.
- **code**, filtra código.
- **ledgeraccount**, filtra por cuenta contable.
- **state**, boolean (0 o 1) indica si los impuestos están activos(0) inactivos(1).
  
#### Ejemplos
- `GET /v1/taxes.json?limit=10&offset=0`
- `GET /v1/taxes.json?fields=[name,percentage,state]`


```json title="Response /taxes.json "
{
  "href": "https://api.bsale.cl/v1/taxes.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/taxes/2.json",
      "id": 2,
      "name": "Exento",
      "percentage": "0.0",
      "forAllProducts": 1,
      "ledgerAccount": null,
      "code": "0",
      "state": 0
    },
    {
      "href": "https://api.bsale.cl/v1/taxes/1.json",
      "id": 1,
      "name": "IVA",
      "percentage": "19.0",
      "forAllProducts": 0,
      "ledgerAccount": null,
      "code": "0",
      "state": 0
    }
  ]
}
```
## GET un impuesto
- GET `/v1/taxes/1.json` retornará un tipo de impuesto.

```json title="Response /taxes/1.json"
{
  "href": "https://api.bsale.cl/v1/taxes/1.json",
  "id": 1,
  "name": "IVA",
  "percentage": "19.0",
  "forAllProducts": 0,
  "ledgerAccount": null,
  "code": "0",
  "state": 0
}
```

## GET cantidad de Impuestos
- GET `/v1/taxes/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los impuestoss están activos(0) inactivos (1).
  
```json 
{
   "count": 3
}
```
