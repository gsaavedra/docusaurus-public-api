---
sidebar_position: 58
title: Condición de venta
description: Crear y listar Condición de venta
slug: /condicion-de-venta
---


# Condición de venta
Listar condiciones de venta creadas en Bsale. Condiciones del tipo "30 días", "45 días", "90 días" etc. Las condiciones de venta son modificables desde Bsale.

:::info
Sólo se pueden asociar condiciones de venta, cuando se usa formas de pago del tipo **crédito**.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /sale_conditions/1.json"
{
  "href": "https://api.bsale.io/v1/sale_conditions/1.json",
  "id": 1,
  "name": "Al dia",
  "timeCondition": 7,
  "timeUnity": 0,
  "state": 0
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del Condición de venta     | String       |
| **id**   | identificador único del Condición de venta   | Integer |
| **name**   |  nombre de la condición | String |
| **timeCondition**   |  tiempo de la condición | Integer |
| **timeUnity**   |  unidad de tiempo de la condicion | Integer |
| **state**   |  estado de la condición indica si esta activa(0) o inactiva(1) | Boolean | 

## GET lista de condicines de venta
- GET `/v1/sale_conditions.json` retornará todas las condiciones de venta creadas.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **timecondition**, permite filtrar por tiempo de la condición de venta.
- **timeunity**, filtra por la unidad de tiempo.
- **state**, boolean (0 o 1) indica si las condiciones de venta están activas(0) inactivas(1).
  
#### Ejemplos
- `GET /v1/sale_conditions.json?limit=10&offset=0`
- `GET /v1/sale_conditions.json?fields=[name,ledgeraccount]`
- `GET /v1/sale_conditions.json?state=0`


```json title="Response /sale_conditions.json "
{
  "href": "https://api.bsale.io/v1/sale_conditions.json",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/sale_conditions/1.json",
      "id": 1,
      "name": "Al dia",
      "timeCondition": 7,
      "timeUnity": 0,
      "state": 0
    }
  ]
}
```
## GET una condición de venta
- GET `/v1/sale_conditions/1.json` retornará una condición de venta específica.

```json title="Response /sale_conditions/1.json"
{
  "href": "https://api.bsale.io/v1/sale_conditions/1.json",
  "id": 1,
  "name": "Al dia",
  "timeCondition": 7,
  "timeUnity": 0,
  "state": 0
}
```
## GET cantidad de condiciones de venta
- GET `/v1/sale_conditions/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si las condición de ventas están activos(0) inactivos (1).
  
```json 
{
   "count": 2
}
```
