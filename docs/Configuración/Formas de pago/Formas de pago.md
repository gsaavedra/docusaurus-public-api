---
sidebar_position: 57
title: Formas de pago
description: Crear y listar Formas de pago
slug: /formas-de-pago
---


# Formas de pago
Listar, crear  formas de pago en Bsale. 

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Gestión de Formas de pago [Ver](https://www.youtube.com/watch?v=rbPfv1mVCzU) 

:::info
Para usar las formas de pago creadas, revisar arreglo `payments` en el envío del documento.
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /payment_types/1.json"
{
  "href": "https://api.bsale.cl/v1/payment_types/1.json",
  "id": 1,
  "name": "Deposito en Cuenta Corriente",
  "isVirtual": 1,
  "isCheck": 0,
  "maxCheck": null,
  "isCreditNote": 0,
  "isClientCredit": 0,
  "isCash": 0,
  "isCreditMemo": 0,
  "state": 0,
  "maxClientCuota": 0,
  "ledgerAccount": null,
  "ledgerCode": null,
  "isAgreementBank": 0,
  "agreementCode": ""
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del Formas de pago     | String       |
| **id**   | identificador único del Formas de pago   | Integer |
| **name**   | nombre de la forma de pago | String |
| **isVirtual**   | indica si se puede trabajar con la forma de pago en la web (el cheque no puede), No(0) o Si (1) | Boolean |
| **isCheck**   | indica si la forma de pago es cheque, No(0) o Si (1)| Boolean |
| **maxCheck**   | indica el máximo de cheques permitidos | Integer |
| **isCreditNote**   | indica si la forma de pago es una nota de crédito, No(0) o Si (1)| Boolean |
| **isClientCredit**   | indica si la forma de pago es crédito para un cliente, No(0) o Si (1)| Boolean |
| **isCash**   | indica si la forma de pago es efectivo, No(0) o Si (1)| Boolean |
| **isCreditMemo**   | indica si la forma de pago es un abono, No(0) o Si (1)| Boolean |
| **state**   | estado de la forma de pago activo(0) o inactivo (1) | Boolean |
| **maxClientCuota**   | indica el máximo de cuotas disponibles para un cliente | Integer |
| **ledgerAccount**   | indica la cuenta contable de la forma de pago | String |
| **ledgerCode**   | indica el código contable de la forma de pago | String |
| **isAgreementBank**   | indica si la forma de pago es un enlace bancario ejemplo caja vecina, No(0) o Si (1)| Boolean |
| **agreementCode**   | indica el código del enlace bancario | String |

## GET lista de formas de pago
- GET `/v1/payment_types.json` retornará todas los formas de pago.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **name**, Permite filtrar por nombre de la forma de pago.
- **ledgeraccount**, cuenta contable de la forma de pago
- **state**, boolean (0 o 1) indica si las formas de pago están activas(0) inactivas(1).
  
#### Ejemplos
- `GET /v1/payment_types.json?limit=10&offset=0`
- `GET /v1/payment_types.json?fields=[name,ledgeraccount]`
- `GET /v1/payment_types.json?state=0`


```json title="Response /payment_types.json "
{
  "href": "https://api.bsale.cl/v1/payment_types.json",
  "count": 4,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/payment_types/7.json",
      "id": 7,
      "name": "ABONO DE CLIENTE",
      "isVirtual": 0,
      "isCheck": 0,
      "maxCheck": null,
      "isCreditNote": 0,
      "isClientCredit": 0,
      "isCash": 0,
      "isCreditMemo": 1,
      "state": 0,
      "maxClientCuota": 0,
      "ledgerAccount": "",
      "ledgerCode": null,
      "isAgreementBank": 0,
      "agreementCode": null
    },
    {
      "href": "https://api.bsale.cl/v1/payment_types/5.json",
      "id": 5,
      "name": "CHEQUE",
      "isVirtual": 0,
      "isCheck": 1,
      "maxCheck": 3,
      "isCreditNote": 0,
      "isClientCredit": 0,
      "isCash": 0,
      "isCreditMemo": 0,
      "state": 0,
      "maxClientCuota": 0,
      "ledgerAccount": "1110201",
      "ledgerCode": null,
      "isAgreementBank": 0,
      "agreementCode": null,
      "dynamic_attributes": {
        "href": "https://api.bsale.cl/v1/payment_types/5/dynamic_attributes.json"
      }
    },
    {
      "href": "https://api.bsale.cl/v1/payment_types/4.json",
      "id": 4,
      "name": "CREDITO",
      "isVirtual": 0,
      "isCheck": 0,
      "maxCheck": null,
      "isCreditNote": 0,
      "isClientCredit": 1,
      "isCash": 0,
      "isCreditMemo": 0,
      "state": 0,
      "maxClientCuota": 0,
      "ledgerAccount": "",
      "ledgerCode": null,
      "isAgreementBank": 0,
      "agreementCode": null
    },
    {
      "href": "https://api.bsale.cl/v1/payment_types/1.json",
      "id": 1,
      "name": "EFECTIVO",
      "isVirtual": 0,
      "isCheck": 0,
      "maxCheck": null,
      "isCreditNote": 0,
      "isClientCredit": 0,
      "isCash": 1,
      "isCreditMemo": 0,
      "state": 0,
      "maxClientCuota": 0,
      "ledgerAccount": "1112401",
      "ledgerCode": null,
      "isAgreementBank": 0,
      "agreementCode": null
    },
    {
      "href": "https://api.bsale.cl/v1/payment_types/3.json",
      "id": 3,
      "name": "NOTA CREDITO DEVOLUCION",
      "isVirtual": 0,
      "isCheck": 0,
      "maxCheck": null,
      "isCreditNote": 1,
      "isClientCredit": 0,
      "isCash": 0,
      "isCreditMemo": 0,
      "state": 0,
      "maxClientCuota": 0,
      "ledgerAccount": "1112301",
      "ledgerCode": null,
      "isAgreementBank": 0,
      "agreementCode": null
    }
  ]
}
```
## GET una forma de pago
- GET `/v1/payment_types/7.json` retornará una forma de pago específica.

```json title="Response /payment_types/7.json"
{
  "href": "https://api.bsale.cl/v1/payment_types/7.json",
  "id": 7,
  "name": "ABONO DE CLIENTE",
  "isVirtual": 0,
  "isCheck": 0,
  "maxCheck": null,
  "isCreditNote": 0,
  "isClientCredit": 0,
  "isCash": 0,
  "isCreditMemo": 1,
  "state": 0,
  "maxClientCuota": 0,
  "ledgerAccount": "",
  "ledgerCode": null,
  "isAgreementBank": 0,
  "agreementCode": null
}
```
## GET cantidad de formas de pago
- GET `/v1/payment_types/count.json` Retornará cantidades de registros.

- **state**, boolean (0 o 1) indica si los Formas de pagos están activos(0) inactivos (1).
  
```json 
{
   "count": 6
}
```

## GET atributos dinamicos de la forma de pago
- GET `/v1/payment_types/5/dynamic_attributes.json` retornará los atributos dinamicos de la forma de pago y los detalles de esta si tiene.

```json
{
    "href": "https://api.bsale.cl/v1/dynamic_attributes.json",
    "count": 6,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.cl/v1/dynamic_attributes/2.json",
            "id": 2,
            "name": "Banco",
            "tip": "",
            "type": 4,
            "isMandatory": 1,
            "state": 0,
            "payment_type": {
                "href": "https://api.bsale.cl/v1/payment_types/5.json",
                "id": "5"
            }
        },
        {
            "href": "https://api.bsale.cl/v1/dynamic_attributes/3.json",
            "id": 3,
            "name": "Número",
            "tip": "",
            "type": 4,
            "isMandatory": 1,
            "state": 0,
            "payment_type": {
                "href": "https://api.bsale.cl/v1/payment_types/5.json",
                "id": "5"
            }
        },
        {
            "href": "https://api.bsale.cl/v1/dynamic_attributes/19.json",
            "id": 19,
            "name": "Nº Autoriza DICOM",
            "tip": "",
            "type": 3,
            "isMandatory": 1,
            "state": 1,
            "payment_type": {
                "href": "https://api.bsale.cl/v1/payment_types/5.json",
                "id": "5"
            }
        },
        {
            "href": "https://api.bsale.cl/v1/dynamic_attributes/94.json",
            "id": 94,
            "name": "Opcion",
            "tip": "",
            "type": 7,
            "isMandatory": 0,
            "state": 0,
            "payment_type": {
                "href": "https://api.bsale.cl/v1/payment_types/5.json",
                "id": "5"
            },
            "details": {
                "href": "https://api.bsale.cl/v1/dynamic_attributes/94/details.json",
                "count": 3,
                "limit": 25,
                "offset": 0,
                "items": [
                    {
                        "href": "https://api.bsale.cl/v1/dynamic_attributes/94/details/60.json",
                        "id": 60,
                        "name": "A",
                        "state": 0
                    },
                    {
                        "href": "https://api.bsale.cl/v1/dynamic_attributes/94/details/61.json",
                        "id": 61,
                        "name": "B",
                        "state": 0
                    },
                    {
                        "href": "https://api.bsale.cl/v1/dynamic_attributes/94/details/62.json",
                        "id": 62,
                        "name": "C",
                        "state": 0
                    }
                ]
            }
        },
        {
            "href": "https://api.bsale.cl/v1/dynamic_attributes/18.json",
            "id": 18,
            "name": "Titular",
            "tip": "",
            "type": 4,
            "isMandatory": 1,
            "state": 0,
            "payment_type": {
                "href": "https://api.bsale.cl/v1/payment_types/5.json",
                "id": "5"
            }
        },
        {
            "href": "https://api.bsale.cl/v1/dynamic_attributes/17.json",
            "id": 17,
            "name": "Vencimiento",
            "tip": "",
            "type": 1,
            "isMandatory": 1,
            "state": 1,
            "payment_type": {
                "href": "https://api.bsale.cl/v1/payment_types/5.json",
                "id": "5"
            }
        }
    ]
}
```

## POST una forma de pago
- POST `/v1/payment_types.json` 

:::tip

Para crear una forma de pago se debe considerar el tipo que tiene, por ejemplo si es efectivo se debe enviar el atributo `"isCash":1`, si es cheque `"isCheck":1`, en el caso de no requerir alguno de los tipos soportados solo se debe enviar el nombre
:::

Para crear una forma de pago, se debe enviar un JSON con la siguiente estructura:
### Ejemplo JSON

#### Sin especificar un tipo
```json
{
  "name":"Tarjeta de Debito"  
}
```
#### En el caso del cheque se debe enviar el máximo de cheques permitidos.
```json
{
  "name":"Cheque",
  "isCheck":1,
  "maxCheck":3
}
```
#### Si es abono de cliente.
```json
{
  "name":"Abono Cliente",
  "isCreditMemo":1
}
```
#### En caso de tener un enlace contable se puede enviar la cuenta contable y código contable.
```json
{
  "name":"Tarjeta de crédito",
  "ledgerAccount":"111-01",
  "ledgerCode": "1234"
}
```
### Atributos (opcional)
Si se desean usar atributos especiales para la forma de pago, se debe enviar la siguiente estructura en el arreglo `payments` del documento.

```json
{
    "payments": [
        {
            "paymentTypeId": 4,
            "amount": 1500,
            "contactDetails": [
                {
                    "id_atributo_formulario": 61,
                    "descripcion_atributo": "Operación 188373473"
                }
            ]
        }
    ]
}
```
- **paymentTypeId**, id forma de pago
- **id_atributo_formulario**, id atributo de forma de pago
- **descripcion_atributo**, dato que se almacena en atributo forma de pago

#### Respuesta
```json
{
  "href": "https://api.bsale.cl/v1/payment_types/10.json",
  "id": 10,
  "name": "Tarjeta de crédito",
  "isVirtual": 0,
  "isCheck": 0,
  "maxCheck": null,
  "isCreditNote": 0,
  "isClientCredit": 0,
  "isCash": 0,
  "isCreditMemo": 0,
  "state": 0,
  "maxClientCuota": 0,
  "ledgerAccount":"111-01",
  "ledgerCode": "1234",
  "isAgreementBank": 0,
  "agreementCode": null
}
```
