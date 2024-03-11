---
sidebar_position: 54
title: Monedas
description: Listar Monedas
slug: /monedas
---


# Monedas
Listar Monedas configuradas en Bsale.


:::info
Bsale soporta el uso de **1 o más monedas**. (Ej, USD en factura de exportación). Para su uso, se debe crear una lista de precio en base a la moneda creada.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /coins/1.json"
{
      "href": "https://api.bsale.io/v1/coins/1.json",
      "id": 1,
      "name": "SOL",
      "symbol": "S/",
      "decimals": 2,
      "roundDecimals": 2,
      "totalRound": 0,
      "isoCode": "PEN"
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del Monedas     | String       |
| **id**   | identificador único del Monedas   | Integer |
| **name**   | nombre de la moneda | String |
| **symbol**   | símbolo de la moneda | String |
| **decimals**   | decimales que permite la moneda. | |
| **totalRound**   | indica si la moneda redondea totales, No(0) o Si (1) | Boolean |

## GET lista de Monedas
- GET `/v1/coins.json` retornará todos las Monedas.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre de la moneda.
- **symbol**, filtra por símbolo de la moneda.
- **state**, (0 o 1) indica si las monedas están activas(0) inactivas(1).
- **default**, permite filtrar la moneda por defecto del sistema.
  
#### Ejemplos
- `GET /v1/coins.json?limit=10&offset=0`
- `GET /v1/coins.json?fields=[name,symbol,state]`
- `GET /v1/coins.json?default=true`

```json title="Response /coins.json "
{
    "href": "https://api.bsale.io/v1/coins.json",
    "count": 2,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.io/v1/coins/2.json",
            "id": 2,
            "name": "DOLAR",
            "symbol": "US$",
            "decimals": 2,
            "roundDecimals": 2,
            "totalRound": 1,
            "isoCode": "USD"
        },
        {
            "href": "https://api.bsale.io/v1/coins/1.json",
            "id": 1,
            "name": "SOL",
            "symbol": "S/",
            "decimals": 2,
            "roundDecimals": 2,
            "totalRound": 0,
            "isoCode": "PEN"
        }
    ]
}
```
## GET un moneda
- GET `/v1/coins/1.json` retornará un moneda específica.

```json title="Response /coins/2.json"
{
    "href": "https://api.bsale.io/v1/coins/2.json",
    "id": 2,
    "name": "DOLAR",
    "symbol": "US$",
    "decimals": 2,
    "roundDecimals": 2,
    "totalRound": 1,
    "isoCode": "USD"
}
```
## GET tipo cambio moneda
- GET `/v1/coins/2/exchange_rate/1533223010.json` Retornará el tipo de cambio de una moneda para una específica.

:::tip
En el ejemplo, donde 2 es el `id` de la moneda y `1533223010` es la fecha en unix time (02/08/2018).
:::

```json 
{
  "exchangeRate": 27204.23
}
```
- **startDate**, fecha de inicio de las ventas (Integer).
- **endDate**, fecha fin de las ventas (Integer).
- **total**, total vendido (Float).
- **sellers**, nodo que representa a los Monedas que generaron documentos en la fecha de la consulta.
- **subtotal**, total vendido por el moneda (ventas menos devoluciones), puede incluir impuesto depende la configuración de Bsale (Float).
- **taxSubtotal**, total de impuestos generados por el moneda (Float).
- **sales**, nodo que representa a los documentos de venta generados por el moneda.
- **returns**, nodo que representa las devoluciones asignadas al moneda.

## GET ventas por Monedas
- GET `/v1/coins/128/sales.json` Retornará los documentos de venta asignados a la moneda.

#### Parámetros
- **startdate**, fecha de inicio de ventas , por defecto es la fecha del dia de la petición (Integer).
- **enddate**, fecha fin de ventas, por defecto es la fecha del dia de la petición (Integer).

#### Ejemplos
- `GET /v1/coins/128/sales.json?startdate=1438560000&enddate=1438560000`
  
```json 
{
    "href": "https://api.bsale.io/v1/coins/1/sales.json?startdate=1576022400&enddate=1576022400",
    "count": 1,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.io/v1/documents/83.json",
            "id": 83,
            "name": "BOLETA MANUAL",
            "number": 39
        }
    ]
}
```
## GET cantidad de monedas
- GET `/v1/coins/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los clientess están activos(0) inactivos (1).
  
```json 
{
   "count": 3
}
```