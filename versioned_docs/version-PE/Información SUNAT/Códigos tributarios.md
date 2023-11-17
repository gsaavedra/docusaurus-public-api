---
sidebar_position: 61
title: Códigos tributarios
description: Listar códigos tributarios
slug: /codigos-tributarios
---

# Códigos tributarios
Hace referencia a los códigos del Tipo Documento Tributario Electrónico.


## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /cpe_codes/8.json"
{
   "href": "https://api.bsale.io/v1/dte_codes/8.json",
   "id": 8,
   "name": "FACTURA - A4",
   "code": "01",
   "state": 0
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del Códigos tributarios     | String       |
| **id**   | identificador único del Códigos tributarios   | Integer |
| **name**   | nombre del código tributario | String |
| **code**   | código tributario | String |
| **state**   | estado del código tributario indica si esta activo(0) o inactivo (1) | Boolean |

## GET lista de Códigos tributarios
- GET `/v1/cpe_codes.json` retornará todos los Códigos tributarios.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre del código tributario.
- **code**, filtra por código tributario.
- **state**, boolean (0 o 1) indica si las monedas están activas(0) inactivas(1).
  
#### Ejemplos
- `GET /v1/cpe_codes.json?limit=10&offset=0`
- `GET /v1/cpe_codes.json?fields=[name,code,state]`


```json title="Response /cpe_codes.json "
{
    "href": "https://api.bsale.io/v1/cpe_codes.json",
    "count": 73,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "id": 28,
            "href": "https://api.bsale.io/v1/cpe_codes/28.json",
            "code": "809",
            "name": "AWB (Air Will Bill)",
            "state": 1
        },
        {
            "id": 27,
            "href": "https://api.bsale.io/v1/cpe_codes/27.json",
            "code": "808",
            "name": "B/L (Conocimiento de embarque)",
            "state": 1
        },
        {
            "id": 35,
            "href": "https://api.bsale.io/v1/cpe_codes/35.json",
            "code": "35",
            "name": "Boleta",
            "state": 1
        },
        {
            "id": 45,
            "href": "https://api.bsale.io/v1/cpe_codes/45.json",
            "code": "99",
            "name": "BOLETA DE VENTA ",
            "state": 0
        },
        {
            "id": 64,
            "href": "https://api.bsale.io/v1/cpe_codes/64.json",
            "code": "03",
            "name": "Boleta de Venta - emitida por anticipos",
            "state": 1
        },
        {
            "id": 10,
            "href": "https://api.bsale.io/v1/cpe_codes/10.json",
            "code": "39",
            "name": "Boleta Electrónica",
            "state": 1
        },
        {
            "id": 1,
            "href": "https://api.bsale.io/v1/cpe_codes/1.json",
            "code": "38",
            "name": "Boleta Exenta",
            "state": 1
        },
        {
            "id": 11,
            "href": "https://api.bsale.io/v1/cpe_codes/11.json",
            "code": "41",
            "name": "Boleta Exenta Electrónica",
            "state": 1
        },
        {
            "id": 52,
            "href": "https://api.bsale.io/v1/cpe_codes/52.json",
            "code": "99",
            "name": "BOLETO DE VIAJE",
            "state": 0
        },
        {
            "id": 30,
            "href": "https://api.bsale.io/v1/cpe_codes/30.json",
            "code": "811",
            "name": "Carta de Porte",
            "state": 1
        },
        {
            "id": 33,
            "href": "https://api.bsale.io/v1/cpe_codes/33.json",
            "code": "814",
            "name": "Certificado de Depósito Bolsa Prod. Chile",
            "state": 1
        },
        {
            "id": 66,
            "href": "https://api.bsale.io/v1/cpe_codes/66.json",
            "code": "05",
            "name": "Código SCOP",
            "state": 0
        },
        {
            "id": 58,
            "href": "https://api.bsale.io/v1/cpe_codes/58.json",
            "code": "99",
            "name": "COMPROBANTE DE PAGO SEAE",
            "state": 0
        },
        {
            "id": 56,
            "href": "https://api.bsale.io/v1/cpe_codes/56.json",
            "code": "99",
            "name": "COMPROBANTE DE PERCEPCION",
            "state": 0
        },
        {
            "id": 57,
            "href": "https://api.bsale.io/v1/cpe_codes/57.json",
            "code": "99",
            "name": "COMPROBANTE DE PERCEPCION - VENTA INTERNA",
            "state": 0
        },
        {
            "id": 54,
            "href": "https://api.bsale.io/v1/cpe_codes/54.json",
            "code": "99",
            "name": "COMPROBANTE DE RETENCION",
            "state": 0
        },
        {
            "id": 22,
            "href": "https://api.bsale.io/v1/cpe_codes/22.json",
            "code": "803",
            "name": "Contrato",
            "state": 1
        },
        {
            "id": 38,
            "href": "https://api.bsale.io/v1/cpe_codes/38.json",
            "code": "914",
            "name": "Declaración de Ingreso (DIN)",
            "state": 1
        },
        {
            "id": 50,
            "href": "https://api.bsale.io/v1/cpe_codes/50.json",
            "code": "99",
            "name": "DOCUMENTO BAJO EL CONTROL DE LA SUPERINTENDENCIA DE BANCA Y SEGUROS",
            "state": 0
        },
        {
            "id": 53,
            "href": "https://api.bsale.io/v1/cpe_codes/53.json",
            "code": "99",
            "name": "DOCUMENTOS EMITIDOS POR LAS AFP",
            "state": 0
        },
        {
            "id": 26,
            "href": "https://api.bsale.io/v1/cpe_codes/26.json",
            "code": "807",
            "name": "DUS",
            "state": 1
        },
        {
            "id": 44,
            "href": "https://api.bsale.io/v1/cpe_codes/44.json",
            "code": "99",
            "name": "FACTURA",
            "state": 0
        },
        {
            "id": 36,
            "href": "https://api.bsale.io/v1/cpe_codes/36.json",
            "code": "30",
            "name": "Factura",
            "state": 1
        },
        {
            "id": 62,
            "href": "https://api.bsale.io/v1/cpe_codes/62.json",
            "code": "01",
            "name": "Factura - emitida para corregir error en el RUC",
            "state": 0
        },
        {
            "id": 63,
            "href": "https://api.bsale.io/v1/cpe_codes/63.json",
            "code": "02",
            "name": "Factura - emitida por anticipos",
            "state": 1
        }
    ],
    "next": "https://api.bsale.io/v1/cpe_codes.json?limit=25&offset=25"
}
```
## GET único código tributario
- GET `/v1/cpe_codes/1.json` retornará un tipo de código tributario

```json title="Response /cpe_codes/8.json"
{
  "href": "https://api.bsale.io/v1/cpe_codes/8.json",
  "id": 8,
  "name": "BOLETA - A4",
  "code": "03",
  "state": 0
}
```
