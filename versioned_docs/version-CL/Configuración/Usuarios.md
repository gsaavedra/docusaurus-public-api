---
sidebar_position: 53
title: Usuarios
description: Listar Usuarios
slug: /usuarios
---


# Usuarios
Listar usuarios creados, como también leer ventas y devoluciones por usuario.


:::info
Desde la vista de un documento, un usuario es un **emisor** del documento. Como tambien el **vendedor**.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /users/2.json"

        {
            "href": "https://api.bsale.cl/v1/users/2.json",
            "id": 2,
            "firstName": "Gabriel",
            "lastName": "Seguel",
            "email": "gseguel@bsale-prueba.cl",
            "state": 0,
            "office": {
                "href": "https://api.bsale.cl/v1/offices/1.json",
                "id": "1"
            }
        }
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del Usuarios     | String       |
| **id**   | identificador único del Usuarios   | Integer |
| **firstName**   |  nombre del usuario | String |
| **lastName**   |  apellido del usuario | String |
| **email**   |  correo electrónico del usuario | String |
| **state**   |  estado del usuario indica si esta activo(0) o inactivo (1) | Boolean |
| **office**   |  nodo que indica la sucursal por defecto configurada para la usuario.

## GET lista de Usuarios
- GET `/v1/users.json` retornará todos las Usuarios.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **firstname**, filtra los usuarios por nombre.
- **lastname**, filtra los usuarios por apellido.
- **email**, filtra los usuarios por email.
- **officeid**, recupera los usuarios por la sucursal que tienen asignada.
- **state**, boolean (0 o 1) indica si los usuarios están activos(0) inactivos (1).
  
#### Ejemplos
- `GET /v1/users.json?limit=10&offset=0`
- `GET /v1/users.json?fields=[firstname,lastname]`
- `GET /v1/users.json?officeid=1`
- `GET /v1/users.json?expand=[office]`
- `GET /v1/users.json?state=0`


```json title="Response /users.json "
{
    "href": "https://api.bsale.cl/v1/users.json",
    "count": 2,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.cl/v1/users/2.json",
            "id": 2,
            "firstName": "Gabriel",
            "lastName": "Seguel",
            "email": "gseguel@bsale-prueba.cl",
            "state": 0,
            "office": {
                "href": "https://api.bsale.cl/v1/offices/1.json",
                "id": "1"
            }
        },
        {
            "href": "https://api.bsale.cl/v1/users/1.json",
            "id": 1,
            "firstName": "Soporte ",
            "lastName": "bsale",
            "email": "support@imaginex.cl",
            "state": 0,
            "office": {
                "href": "https://api.bsale.cl/v1/offices/1.json",
                "id": "1"
            }
        }
    ]
}
```
## GET un usuario
- GET `/v1/users/1.json` retornará un usuario específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones.

#### Ejemplo
- `GET /v1/clients/32.json?expand=[office]`

```json title="Response /users/10.json"
{
    "href": "https://api.bsale.cl/v1/users/10.json",
    "id": 1,
    "firstName": "Juan",
    "lastName": "Otto",
    "email": "ottoj@gmail.com",
    "state": 0,
    "office": {
        "href": "https://api.bsale.cl/v1/offices/3.json",
        "id": "3"
    }
}
```
## GET resumen de ventas por usuario
- GET `/v1/users/sales_summary.json` Retornará las ventas de los usuarios dentro de un rango de fecha. **(Requiere uso de filtro)**

#### Parámetros
- **userid**, recupera las ventas para un usuario específico (Integer).
- **startdate**, fecha de inicio de ventas , por defecto es la fecha del dia de la petición (Integer).
- **enddate**, fecha fin de ventas, por defecto es la fecha del dia de la petición (Integer).
#### Ejemplos
- `GET /v1/users/sales_summary.json?userid=113`
- `GET /v1/users/sales_summary.json?startdate=1438560000&enddate=1438560000`
- `GET /v1/users/sales_summary.json?startdate=1438560000&enddate=1438560000&userid=113`

```json 
{
    "startDate": 1576022400,
    "endDate": 1576022400,
    "total": 22500.0,
    "sellers": [
        {
            "href": "https://api.bsale.cl/v1/users/2.json",
            "id": 2,
            "fullName": "Gabriel Seguel",
            "subtotal": 7500.0,
            "taxSubtotal": 1197.0,
            "sales": {
                "href": "https://api.bsale.cl/v1/users/2/sales.json?startdate=1576022400&enddate=1576022400"
            },
            "returns": {
                "href": "https://api.bsale.cl/v1/users/2/returns.json?startdate=1576022400&enddate=1576022400"
            }
        },
        {
            "href": "https://api.bsale.cl/v1/users/1.json",
            "id": 1,
            "fullName": "Soporte  bsale",
            "subtotal": 15000.0,
            "taxSubtotal": 2395.0,
            "sales": {
                "href": "https://api.bsale.cl/v1/users/1/sales.json?startdate=1576022400&enddate=1576022400"
            },
            "returns": {
                "href": "https://api.bsale.cl/v1/users/1/returns.json?startdate=1576022400&enddate=1576022400"
            }
        }
    ]
}
```
- **startDate**, fecha de inicio de las ventas (Integer).
- **endDate**, fecha fin de las ventas (Integer).
- **total**, total vendido (Float).
- **sellers**, nodo que representa a los usuarios que generaron documentos en la fecha de la consulta.
- **subtotal**, total vendido por el usuario (ventas menos devoluciones), puede incluir impuesto depende la configuración de Bsale (Float).
- **taxSubtotal**, total de impuestos generados por el usuario (Float).
- **sales**, nodo que representa a los documentos de venta generados por el usuario.
- **returns**, nodo que representa las devoluciones asignadas al usuario.

## GET ventas por usuarios
- GET `/v1/users/128/sales.json` Retornará los documentos de venta asignados al usuario..

#### Parámetros
- **startdate**, fecha de inicio de ventas , por defecto es la fecha del dia de la petición (Integer).
- **enddate**, fecha fin de ventas, por defecto es la fecha del dia de la petición (Integer).

#### Ejemplos
- `GET /v1/users/128/sales.json?startdate=1438560000&enddate=1438560000`
  
```json 
{
    "href": "https://api.bsale.cl/v1/users/1/sales.json?startdate=1576022400&enddate=1576022400",
    "count": 1,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.cl/v1/documents/83.json",
            "id": 83,
            "name": "BOLETA MANUAL (no valido al SII)",
            "number": 39
        }
    ]
}
```

## GET devoluciones por usuarios
- GET `/v1/users/128/returns.json` Retornará las devoluciones asignados al usuario..

#### Parámetros
- **startdate**, fecha de inicio de las devoluciones , por defecto es la fecha del dia de la petición (Integer).
- **enddate**, fecha fin de devoluciones, por defecto es la fecha del dia de la petición (Integer).

#### Ejemplos
- `GET /v1/users/2/returns.json?startdate=1570884055000&enddate=1576154470`

```json 
{
  "href": "https://api.bsale.cl/v1/users/128/returns.json?startdate=1438560000&enddate=1438560000",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/documents/6604.json",
      "id": 6604,
      "name": "Nota de crédito",
      "number": 50
    },
    {
      "href": "https://api.bsale.cl/v1/documents/6606.json",
      "id": 6606,
      "name": "Nota de crédito",
      "number": 60
    }
  ]
}
```