---
sidebar_position: 51
title: Descuentos
description: Listar descuentos
slug: /descuentos
---


# Descuentos
Consulta descuentos creados, todos los descuentos se trabajan porcentualmente. Si se desea usar el descuento, ver documentos.

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Gestión descuentos [Ver](https://www.youtube.com/watch?v=494ofFQGNuY) 

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```json title="Response /discounts/1.json"
{
  "href": "https://api.bsale.cl/v1/discounts/1.json",
  "id": 1,
  "name": "Ajuste Precio",
  "percentage": "14.3",
  "state": 1,
  "automatic": 0
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del pago     | String       |
| **id**   | identificador único del pago  | Integer |
| **name**   | nombre del descuento | String |
| **percentage**, porcentaje del descuento (String).
| **state**, estado del descuento indica si el descuento esta activo(0) o inactivo (1) (Boolean).
| **automatic**, indica si el descuento se aplica automáticamente, No(0) o Si (1) (Boolean).

## GET lista de descuentos
- GET `/v1/discounts.json` retornará todos los descuentos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre del descuento.
- **percentage**, filtra por porcentaje de descuento.
- **state**, boolean (0 o 1) indica si los descuentos están activos(0) inactivos(1).
  
#### Ejemplos
- `GET /v1/discounts.json?limit=10&offset=0`
- `GET /v1/discounts.json?fields=[name,percentage,state]`

```json title="Response /discounts.json "
{
  "href": "https://api.bsale.cl/v1/discounts.json",
  "count": 3,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/discounts/1.json",
      "id": 1,
      "name": "Ajuste Precio",
      "percentage": "14.3",
      "state": 1,
      "automatic": 0
    },
    {
      "href": "https://api.bsale.cl/v1/discounts/3.json",
      "id": 3,
      "name": "Descuento CPT",
      "percentage": "75.0",
      "state": 0,
      "automatic": 0
    },
    {
      "href": "https://api.bsale.cl/v1/discounts/2.json",
      "id": 2,
      "name": "Descuento Imagestion",
      "percentage": "25.0",
      "state": 1,
      "automatic": 0
    }
  ]
}
```
## GET un descuento
- GET `/v1/discounts/1.json` retornará un descuento.

```json title="Response /discounts/1.json"
{
  "href": "https://api.bsale.cl/v1/discounts/1.json",
  "id": 1,
  "name": "Descuentos cliente preferencial",
  "percentage": "14.3",
  "state": 1,
  "automatic": 0
}
```
## GET cantidad de descuentos
- GET `/v1/clients/discounts.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los clientess están activos(0) inactivos (1).
  
```json 
{
   "count": 3
}
```