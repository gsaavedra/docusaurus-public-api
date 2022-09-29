---
sidebar_position: 60
title: Tipos de libro
description: Listar Tipos de libro
slug: /tipos-de-libros
---


# Tipos de libro
Listar, libros. Podrás obtener información de libros que Bsale acumula según compras y ventas se registran. 


:::info
Los libros, fueron los registros que se llevaban como los registros de compra y venta que acumula SII.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /book_types/1.json"
{
   "href": "https://api.bsale.cl/v1/book_types/1.json",
   "id": 1,
   "name": "Libro Venta",
   "dteProcess": "Venta",
   "code": "0",
   "state": 1
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del Tipos de libro     | String       |
| **id**   | identificador único del Tipos de libro   | Integer |
| **name**   | nombre del del tipo de libro | String |
| **dteProcess**   | proceso al que pertenece el tipo de libro | String | 
| **code**   | código interno del tipo de libro | String |
| **state**   | estado del tipo de documento activo(0) o inactivo (1) | Boolean |

## GET lista de Tipos de libro
- GET `/v1/book_types.json` retornará todos los Tipos de libro.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre tipo libro.
- **dteprocess**, filtra por proceso.
- **code**, filtra por código interno.
- **state**, boolean (0 o 1) indica si los tipos de libro están activos(0) inactivos(1).
  
#### Ejemplos
- `GET /v1/book_types.json?limit=10&offset=0`
- `GET /v1/book_types.json?fields=[name,code,state]`


```json title="Response /book_types.json "
{
  "href": "https://api.bsale.cl/v1/book_types.json",
  "count": 3,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/book_types/3.json",
      "id": 3,
      "name": "Libro Boleta",
      "dteProcess": "Boleta",
      "code": "2",
      "state": 0
    },
    {
      "href": "https://api.bsale.cl/v1/book_types/2.json",
      "id": 2,
      "name": "Libro Compra",
      "dteProcess": "Compra",
      "code": "1",
      "state": 1
    },
    {
      "href": "https://api.bsale.cl/v1/book_types/1.json",
      "id": 1,
      "name": "Libro Venta",
      "dteProcess": "Venta",
      "code": "0",
      "state": 1
    }
  ]
}
```
## GET un tipo de libro
- GET `/v1/book_types/1.json` retornará un tipo de libro específico.

```json title="Response /book_types/1.json"
{
  "href": "https://api.bsale.cl/v1/book_types/1.json",
  "id": 1,
  "name": "Libro Venta",
  "dteProcess": "Venta",
  "code": "0",
  "state": 1
}
```

## GET cantidad de Tipos de libro
- GET `/v1/book_types/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los Tipos de libros están activos(0) inactivos (1).
  
```json 
{
   "count": 3
}
```
