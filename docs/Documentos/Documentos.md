---
sidebar_position: 1
title: Documentos
description: Crear, editar y listar documentos
slug: /documentos
---

# Documentos
**Crear documentos del tipo venta** (Boleta, Factura electrónica, etc) o **documentos asociados al proceso de venta** (notas de venta, cotizaciones, etc). 

Listar documentos generados en Bsale, del tipo venta, pre-venta, despachos, etc. Se puede obtener detalles, referencias, datos generales, etc. 

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación de factura [Ver](https://www.youtube.com/watch?v=oHOyQud9Vq4) 
- Creación de boleta [Ver](https://www.youtube.com/watch?v=UfxkD3EkrXc)
- Creación de pre-venta [Ver](https://www.youtube.com/watch?v=pqaaaI25EKo)

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /documents.json"
{
  "href": "https://api.bsale.cl/v1/documents/382.json",
  "id": 382,
  "emissionDate": 1463540400,
  "expirationDate": 1464663600,
  "generationDate": 1463593575,
  "rcofDate": 1464663600,
  "number": 1,
  "totalAmount": 14280,
  "netAmount": 12000,
  "taxAmount": 2280,
  "exemptAmount": 0,
  "exportTotalAmount": 0,
  "exportNetAmount": 0,
  "exportTaxAmount": 0,
  "exportExemptAmount": 0,
  "commissionRate": 0,
  "commissionNetAmount": 0,
  "commissionTaxAmount": 0,
  "commissionTotalAmount": 0,
  "percentageTaxWithheld": 0,
  "purchaseTaxAmount": 0,
  "purchaseTotalAmount": 0,
  "urlTimbre": null,
  "ted": null,
  "urlPublicView": "http://app2.bsale.cl/view/2/a2d9b4da5128?sfd=99",
  "urlPdf": "http://app2.bsale.cl/view/2/a2d9b4da5128.pdf?sfd=99",
  "urlPublicViewOriginal": "http://app2.bsale.cl/view/2/a2d9b4da5128",
  "urlPdfOriginal": "http://app2.bsale.cl/view/2/a2d9b4da5128.pdf",
  "token": "a2d9b4da5128",
  "state": 0,
  "userId": 2,
  "urlXml": null,
  "address": null,
  "municipality": null,
  "city": null,
  "informedSii": 1,
  "responseMsgSii": null,
  "document_type": {
    "href": "https://api.bsale.cl/v1/document_types/1.json",
    "id": "1"
  },
  "client": {
    "href": "https://api.bsale.cl/v1/clients/7.json",
    "id": "7"
  },
  "office": {
    "href": "https://api.bsale.cl/v1/offices/2.json",
    "id": "2"
  },
  "user": {
    "href": "https://api.bsale.cl/v1/users/2.json",
    "id": "2"
  },
  "references": {
    "href": "https://api.bsale.cl/v1/documents/382/references.json"
  },
  "document_taxes": {
    "href": "https://api.bsale.cl/v1/documents/382/document_taxes.json"
  },
  "details": {
    "href": "https://api.bsale.cl/v1/documents/382/details.json"
  },
  "sellers": {
    "href": "https://api.bsale.cl/v1/documents/382/sellers.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del documento       | String       |
| **emissionDate**   | fecha de emisión del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).        | Integer        |
| **expirationDate**   | fecha de vencimiento del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha)        | Integer        |
| **generationDate**   | fecha y hora en que se genero el documento        | Integer        |
| **rcofDate**   | fecha de envío RCOF        | Integer        |
| **number**   | folio del documento        | Integer        |
| **totalAmount**   | monto total del documento        | Float        |
| **netAmount**   | monto neto del documento        | Float        |
| **taxAmount**   | monto de impuestos del documento        | Float        |
| **exemptAmount**   | monto exento del documento        | Float        |
| **exportTotalAmount**   | monto total del documento de exportación        | Float        |
| **exportNetAmount**   | monto neto del documento de exportación        | Float        |
| **exportTaxAmount**   | monto de impuestos del documento de exportación        | Float        |
| **exportExemptAmount**   | porcentaje de la comisión en la liquidación del documento         | Float        |
| **commissionRate**   | porcentaje de la comisión en la liquidación del documento         | Float        |
| **commissionNetAmount**   | monto neto de la comisión en la liquidación del documento        | Float        |
| **commissionTaxAmount**   | monto de impuesto de la comisión en la liquidación del documento        | Float        |
| **commissionTotalAmount**   |  monto total de la comisión en la liquidación del documento        | Float        |
| **percentageTaxWithheld**   | porcentaje de impuesto retenido para los documentos de compra        | Float        |
|  **purchaseTaxAmount**   | monto de impuesto retenido para los documentos de compra        | Float        |
|  **purchaseTotalAmount**   | monto total del documento de compra         | Float        |
|  **ted**   | ted del documento en caso de ser electrónico.        | Text        |
|  **urlTimbre**   | url de la firma de un documento        | Text        |
| **urlPublicView**   | url publica para visualizar el documento, con todas sus copias         | Text        |
|  **urlPdf**   | url del pdf del documento, con todas sus copias         | Text        |
|  **urlPublicViewOriginal**   | url publica para visualizar el documento, solo muestra el original        | Text        |
|  **urlPdfOriginal**   | url del pdf del documento, solo muestra el original        | Text        |
|  **token**   | token único del documento        | String        |
|  **state**   | estado del documento indica si el documento esta activo(0) o inactivo (1)         | Boolean        |
|  **urlXml**   | respaldo del documento electrónico         | String        |
|  **address**   | dirección del documento        | String        |
|  **municipality**   | comuna del documento        | String        |
|  **city**   | ciudad del documento        | String        |
|  **informedSii**   | indica si el documento fue informado al SII, 0 es correcto, 1 es enviado, 2 es rechazado        | Integer        |
| **responseMsgSii**   | respuesta de la declaración del documento al SII en caso de ser electrónico        | String        |
| **document_type**   | nodo que indica el tipo del documento al cual pertenece el documento.        | Text        |
| **client**   | nodo que indica el cliente al cual se le emitió el documento.        | Text        |
| **office**   | nodo que indica la sucursal a la cual pertenece el documento.        | Text        |
| **user**   | nodo que indica el usuario que emitió el documento.        | Text        |
| **references**   | nodo que indica las referencias de un documento.        | Text        |
| **document_taxes**   | nodo que indica el detalle de impuesto de un documento.        | Text        |
| **details**   | nodo que indica los detalles de un documento.        | Text        |
| **relatedDetailId**   | id detalle relacionado al documento.         | Text        |
| **sellers**   | nodo que indica los vendedores de un documento, pueden ser mas de 1 por ejemplo al emitir un documento a partir de varias notas de venta.        | Text        |

## GET lista de documentos
- GET `/v1/documents.json` retorna todos los documentos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **emissiondate**, filtra documentos por la fecha de emisión.
- **expirationdate**, filtra documentos por la fecha de vencimiento.
- **emissiondaterange**, filtra documentos por un rango de fecha.
- **number**, filtra documentos por el folio.
- **token**, filtra documentos por el token.
- **documenttypeid**, filtra documentos por el tipo de documento.
- **clientid**, filtra documentos por el cliente.
- **clientcode**, filtra rut del cliente.
- **officeid**, filtra documentos por la sucursal.
- **saleconditionid**, filtra documentos por la condición de venta.
- **informedsii**, filtra documentos si fue declarado en el SII, 0 es correcto, 1 es enviado, 2 es rechazado (Integer).
- **codesii**, filtra documentos por el código tributario.
- **totalamount**, filtra documentos por el monto total.
- **referencecode**, filtra documentos por el código tributario de una referencia (ej. el código de una orden de compra).
- **referencenumber**, filtra documentos por el folio de una referencia (ej. el folio de una orden de compra).
- **state**, boolean (0 o 1) indica si los documentos están activos(0) inactivos (1).
  
#### Ejemplos
- `GET /v1/documents.json?limit=50&offset=0`
- `GET /v1/documents.json?fields=[number,totalAmount]`
- `GET /v1/documents.json?number=53`
- `GET /v1/documents.json?documenttypeid=1`
- `GET /v1/documents.json?informedsii=0`
- `GET /v1/documents.json?expand=[document_types,client,office,details,payments]`
- `GET /v1/documents.json?emissiondate=1309478400&-expirationdate=1309478400&state=0`
- `GET /v1/documents.json?emissiondaterange=[1414800000,1417391990]`
- `GET /v1/documents.json?codesii=33&totalamount=14280`
- `GET /v1/documents.json?referencecode=801`
- `GET /v1/documents.json?referencenumber=123`
- `GET /v1/documents.json?referencecode=801&referencenumber=123`
- `GET /v1/documents.json?rcofdate=1629244800`
- `GET /v1/documents.json?detailid=5350`
- `GET /v1/documents.json?expand=details,payments`  

## GET único documento
- GET `/v1/documents/421.json` retorna un único documento.

#### Parámetros
- **expand**, permite expandir instancias y colecciones.

#### Ejemplos
- `GET /v1/documents/421.json?expand=[document_type,office]`
- `GET /v1/documents/421.json?expand=details,payments`

```json title="Response /documents/421.json "
{
  "href": "https://api.bsale.cl/v1/documents/421.json",
  "id": 421,
  "emissionDate": 1351652400,
  "expirationDate": 1351652400,
  "rcofDate": 1351652400,
  "number": 1,
  "totalAmount": 5117000,
  "netAmount": 4300000,
  "taxAmount": 817000,
  "exemptAmount": 0,
  "exportTotalAmount": 0,
  "exportNetAmount": 0,
  "exportTaxAmount": 0,
  "exportExemptAmount": 0,
  "commissionRate": 0,
  "commissionNetAmount": 0,
  "commissionTaxAmount": 0,
  "commissionTotalAmount": 0,
  "percentageTaxWithheld": 0,
  "purchaseTaxAmount": 0,
  "purchaseTotalAmount": 0,
  "urlTimbre": null,
  "ted": null,
  "urlPublicView": "http://app2.bsale.cl/view/2/f806d6a6ae73?sfd=99",
  "urlPdf": "http://app2.bsale.cl/view/2/f806d6a6ae73.pdf?sfd=99",
  "urlPublicViewOriginal": "http://app2.bsale.cl/view/2/f806d6a6ae73",
  "urlPdfOriginal": "http://app2.bsale.cl/view/2/f806d6a6ae73.pdf",
  "token": "f806d6a6ae73",
  "state": 0,
  "urlXml": null,
  "address": "San Francisco 402, jj perez 7248",
  "municipality": "Santiago",
  "city": "Santiago",
  "informedSii": 2,
  "responseMsgSii": null,
  "document_type": {
    "href": "https://api.bsale.cl/v1/document_types/4.json",
    "id": "4"
  },
  "client": {
    "href": "https://api.bsale.cl/v1/clients/7.json",
    "id": "7"
  },
  "office": {
    "href": "https://api.bsale.cl/v1/offices/2.json",
    "id": "2"
  },
  "user": {
    "href": "https://api.bsale.cl/v1/users/2.json",
    "id": "2"
  },
  "references": {
    "href": "https://api.bsale.cl/v1/documents/421/references.json"
  },
  "document_taxes": {
    "href": "https://api.bsale.cl/v1/documents/421/document_taxes.json"
  },
  "details": {
    "href": "https://api.bsale.cl/v1/documents/421/details.json"
  },
  "sellers": {
    "href": "https://api.bsale.cl/v1/documents/421/sellers.json"
  }
}
```
## Resúmenes
### GET resumen de documentos emitidos
- GET `/v1/documents/summary.json` retorna resumen de documentos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones.
- **emissiondaterange**, filtra por rango de fecha de emisión.
- **generationdaterange**, filtra por rango de fecha de generación.
- **codesii**, Código documento basado en los identificadores del SII, pueden ser varios separados por coma.
- **perdocument**, Boolean (0 o 1) indica si el resultado lo agrupa por documento.

#### Ejemplos
- `GET /v1/documents.json?limit=10&offset=0`
- `GET /v1/documents/summary.json?emissiondaterange=[1404187200,1406779200]`
- `GET /v1/documents/summary.json?generationdaterange=[1404187200,1406779200]`
- `GET /v1/documents/summary.json?codesii=[33,31]`
- `GET /v1/documents/summary.json?perdocument=1`
- `GET /v1/documents/summary.json?rcofdaterange=[1627776000,1627862400]&codesii=[39]`

```json title="Response /documents/summary.json?codesii=[39]"
[
  {
    "generationDate": "",
    "emissionDate": "",
    "documentTypeName": "Boleta Electrónica",
    "codeSii": "39",
    "month": 7,
    "year": 2014,
    "officeId": 2,
    "officeName": "Los Angeles",
    "officeCostCenter": "",
    "count": 1,
    "totalNetAmount": 2791,
    "totalTaxAmount": 530,
    "totalAmount": 3321,
    "totalExemptAmount": 0,
    "taxes": [
      {
        "taxId": 1,
        "taxName": "IVA",
        "taxAmount": 530
      }
    ],
    "details": [
      {
        "itemLedgerAccount": "",
        "totalNetAmount": 2791
      }
    ],
    "documentId": 10383,
    "documentNumber": 9093
  },
  {
    "generationDate": "",
    "emissionDate": "",
    "documentTypeName": "Boleta Electrónica",
    "codeSii": "39",
    "month": 7,
    "year": 2014,
    "officeId": 2,
    "officeName": "Los Angeles",
    "officeCostCenter": "",
    "count": 1,
    "totalNetAmount": 15132,
    "totalTaxAmount": 2875,
    "totalAmount": 18007,
    "totalExemptAmount": 0,
    "taxes": [
      {
        "taxId": 1,
        "taxName": "IVA",
        "taxAmount": 2875
      }
    ],
    "details": [
      {
        "itemLedgerAccount": "",
        "totalNetAmount": 15132
      }
    ],
    "documentId": 10384,
    "documentNumber": 9094
  }
]
```
### GET resumen de ventas Boletas electrónicas
- GET `/v1/documents/summary/ticket.json` retorna resumen de boletas.

#### Parámetros
- **rcofdaterange**, Filtra por rango de fecha de RCOF

#### Ejemplos
- `GET /v1/documents/summary/ticket.json?rcofdaterange=[1635724800,1638230400]`

```json title="Response /documents/summary/ticket.json?rcofdaterange=[1635724800,1638230400]"
[
  {
    "codeSii": "39",
    "documentTypeName": "BOLETA ELECTRÓNICA T",
    "count": 233,
    "totalNetAmount": 432340,
    "totalExemptAmount": 123333,
    "totalIvaAmount": 324344,
    "totalAmount": 7787654
  }
]
```
### GET cantidad de documentos
- GET `/v1/documents/count.json` retorna cantidad de registros.

#### Parámetros
- **state**, permite filtrar por estado, activos (0) inactivos (1).

#### Ejemplos
- `GET /v1/documents/count.json?state=0`

```json title="Response /documents/count.json?state=0 "
{
   "count": 1449
}
```
### GET costos de una venta
- GET `/v1/documents/costs.json` retorna los costos asociados a la venta.

:::info
Entrega los costos asociados a una venta solo si los productos fueron despachados (`dispatch=1`).
:::

#### Parámetros
- **documentid**, filtra por el id del documento.
- **number**, filtra documentos por el folio.
- **codesii**, filtra documentos por el código tributario.

#### Ejemplos
- `GET /v1/documents/costs.json?documentid=145071`
- `GET /v1/documents/costs.json?codesii=33&number=320`


```json title="Response /documents/145071.json "
{
  "href": "https://api.bsale.cl/v1/documents/145071.json",
  "id": 145071,
  "name": "FACTURA ELECTRONICA",
  "number": 320,
  "totalCost": 37949,
  "cost_detail": [
    {
      "variant": {
        "href": "https://api.bsale.cl/v1/variants/6884.json",
        "id": 6884,
        "description": "Morado",
        "code": "DD1009M"
      },
      "shipping_detail": {
        "href": "https://api.bsale.cl/v1/shippings/121576/details/290425.json",
        "id": 290425,
        "quantity": 1,
        "variantStock": 0,
        "variantCost": 25611,
        "variantTotalCost": 25611
      }
    },
    {
      "variant": {
        "href": "https://api.bsale.cl/v1/variants/11272.json",
        "id": 11272,
        "description": "Morado",
        "code": "CE3703"
      },
      "shipping_detail": {
        "href": "https://api.bsale.cl/v1/shippings/121576/details/290426.json",
        "id": 290426,
        "quantity": 1,
        "variantStock": 0,
        "variantCost": 4948,
        "variantTotalCost": 4948
      }
    },
    {
      "variant": {
        "href": "https://api.bsale.cl/v1/variants/6949.json",
        "id": 6949,
        "description": "Rojo",
        "code": "HB1026"
      },
      "shipping_detail": {
        "href": "https://api.bsale.cl/v1/shippings/121576/details/290427.json",
        "id": 290427,
        "quantity": 2,
        "variantStock": 15,
        "variantCost": 3695,
        "variantTotalCost": 7390
      }
    }
  ]
}
```
## Detalles
### GET detalles de un documento
- GET `/v1/documents/12644/details.json` retorna todos los detalles de un documento.

```json title="Response /documents/4139/details.json"
{
    "href": "https://api.bsale.cl/v1/documents/4139/details.json",
    "count": 1,
    "limit": 25,
    "offset": 0,
    "items": [
        {
            "href": "https://api.bsale.cl/v1/documents/4139/details/6182.json",
            "id": 6182,
            "lineNumber": 0,
            "quantity": 1.0,
            "netUnitValue": 15285.0,
            "totalUnitValue": 27500.0,
            "netAmount": 15285.0,
            "taxAmount": 12215.0,
            "totalAmount": 27500.0,
            "netDiscount": 0.0,
            "totalDiscount": 0.0,
            "variant": {
                "href": "https://api.bsale.cl/v1/variants/8045.json",
                "id": 8045,
                "description": "Standard",
                "code": "1661885024042"
            },
            "note": "",
            "relatedDetailId": 0
        }
    ]
}
```
### GET un detalle de un documento
- GET `/v1/documents/2467/details/3216.json` retorna un único detalle.

```json title="Response /documents/4139/details/6182.json"
{
    "href": "https://api.bsale.cl/v1/documents/4139/details/6182.json",
    "id": 6182,
    "lineNumber": 0,
    "quantity": 1.0,
    "netUnitValue": 15285.0,
    "totalUnitValue": 27500.0,
    "netAmount": 15285.0,
    "taxAmount": 12215.0,
    "totalAmount": 27500.0,
    "netDiscount": 0.0,
    "totalDiscount": 0.0,
    "variant": {
        "href": "https://api.bsale.cl/v1/variants/8045.json",
        "id": 8045,
        "description": "Standard",
        "code": "1661885024042"
    },
    "note": "",
    "relatedDetailId": 0
}
```
## Relaciones
### GET referencias de un documento
- GET `/v1/documents/11561/references.json` retorna referencias del documento.

:::info

Retorna sólo referencias electrónicas (**XML**).

:::
```json title="Response /documents/4139/references.json "
{
  "href": "https://api.bsale.cl/v1/documents/4139/references.json",
  "count": 2,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/documents/4139/references/5.json",
      "id": 5,
      "referenceDate": 1407643200,
      "number": "123",
      "reason": "Orden de Compra 123",
      "dte_code": {
        "href": "https://api.bsale.cl/v1/dte_codes/20.json",
        "id": "20"
      }
    },
    {
      "href": "https://api.bsale.cl/v1/documents/4139/references/6.json",
      "id": 6,
      "referenceDate": 1407643200,
      "number": "456",
      "reason": "Guia despacho 456",
      "dte_code": {
        "href": "https://api.bsale.cl/v1/dte_codes/15.json",
        "id": "15"
      }
    }
  ]
}
```

### GET una referencia de un documento
- GET `/v1/documents/11561/references/5.json` retorna una única referencia.

```json title="Response /documents/11561/references/5.json "
{
  "href": "https://api.bsale.cl/v1/documents/11561/references/5.json",
  "id": 5,
  "referenceDate": 1407643200,
  "number": "123",
  "reason": "Orden de Compra 123",
  "dte_code": {
    "href": "https://api.bsale.cl/v1/dte_codes/20.json",
    "id": "20"
  }
}
```
### GET impuestos de un documento
- GET `/v1/documents/12644/document_taxes.json` retorna los impuestos asociados al documento.

```json title="Response /documents/12644/document_taxes.json "
{
  "href": "https://api.bsale.cl/v1/documents/12644/document_taxes.json",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/documents/12644/document_taxes/12626.json",
      "id": 12626,
      "totalAmount": 797,
      "exemptAmount": 0,
      "tax": {
        "href": "https://api.bsale.cl/v1/taxes/1.json",
        "id": "1"
      }
    }
  ]
}
```
### GET un impuesto de un documento
- GET `/v1/documents/12644/document_taxes/12626.json` retorna un único impuesto asociado al documento.

```json title="Response /documents/12644/document_taxes/12626.json "
{
  "href": "https://api.bsale.cl/v1/documents/12644/document_taxes/12626.json",
  "id": 12626,
  "totalAmount": 797,
  "exemptAmount": 0,
  "tax": {
    "href": "https://api.bsale.cl/v1/taxes/1.json",
    "id": "1"
  }
}
```
### GET vendedores de un documento
- GET `/v1/documents/421/sellers.json` retorna vendedor del documento.

```json title="Response /documents/421/sellers.json "
{
  "href": "https://api.bsale.cl/v1/documents/421/sellers.json",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/users/2.json",
      "id": 2,
      "firstName": "Vendedor Demo",
      "lastName": "Bsale"
    }
  ]
}
```
### GET atributos dinamicos de un documento
- GET `/v1/documents/9682/attributes.json` 

:::info

Retorna los atributos dinámicos, **no electrónicos**. Check [this `api`](#).

:::

```json title="Response /documents/9682/attributes.json "
{
  "href": "https://api.bsale.cl/v1/documents/9682/attributes.json",
  "count": 3,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.cl/v1/dynamic_attributes/70.json",
      "id": 70,
      "name": "DETALLE DE PAGO",
      "value": ""
    },
    {
      "href": "https://api.bsale.cl/v1/dynamic_attributes/90.json",
      "id": 90,
      "name": "Tipo Descuento",
      "value": ""
    },
    {
      "href": "https://api.bsale.cl/v1/dynamic_attributes/92.json",
      "id": 92,
      "name": "SubTotal Venta",
      "value": ""
    }
  ]
}
```

## POST un documento
- POST `/v1/documents.json`

Para crear un documento de venta ya sea electrónico (Factura y Boleta Electrónica) o no (Nota de venta, Factura y Boleta manual), se debe enviar un JSON con la siguiente estructura:

### Referencias y fechas

```json
{
  "documentTypeId": 8,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1407715200,
  "expirationDate": 1407715200,
  "declareSii": 1
}
```
- **documentTypeId**, Id del tipo de documento que indicara si es factura, boleta, nota de venta etc. (Integer).
- **officeId**, Id de la sucursal donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer).
- **priceListId**, Id de la lista de precio utilizada por el documento, si no es especificada se utilizara la lista de precio por defecto de la sucursal (Integer).
- **emissionDate**, Fecha de emisión del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).
- **expirationDate**, Fecha vencimiento del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).
- **declareSii**, Si se desea declarar el documento al Servicio de impuestos internos se envía 1, en caso contrario un 0 (Boolean).

:::note
Opcionalmente puedes utilizar el parámetro **codeSii** en vez de **documentTypeId** si conoces el código tributario del documento.
:::

Si se necesita generar una **liquidación de factura**, se debe enviar el porcentaje de la comisión (`commissionRate`) junto al tipo de documento que se desea liquidar (`commissionCodeSii`).
```json title="POST /documents.json "
{
  "codeSii": 39,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1407715200,
  "expirationDate": 1407715200,
  "declareSii": 1,
  "commissionRate": 20,
  "commissionCodeSii": 33
}
```
Si se necesita generar una **factura de compra**, puedes enviar el porcentaje de impuesto que deseas retener (`percentageTaxWithheld`) en este caso es 35%.
```json title="POST /documents.json "
{
  "codeSii": 46,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1407715200,
  "expirationDate": 1407715200,
  "declareSii": 1,
  "percentageTaxWithheld": 35
}
```
### Vendedor
Es posible que necesites asociar un vendedor diferente al que hace la petición para crear el documento, para eso debes enviar el atributo `sellerId`, con el `id` vendedor (usuario) en Bsale.
```json 
{
   "sellerId": 5
}
```
### Descuento stock
Puedes manejar si el documento, resta o no stock de tu inventario.
Si vas a entregar inmediatamente tus productos puedes enviar el atributos dispatch en 1 el cual despacha y rebaja el stock de los productos.

:::note

Esto funcionara siempre y cuando el producto tenga stock en la sucursal indicada.
No funciona con el envío de glosas (`comment`).

:::

```json 
{
   "dispatch": 1
}
```

### Renovaciones en nota de venta 
Para documentos pre-venta, es posible que desees facturar de forma recurrente, puedes enviar una renovación a la pre-venta para que en cierta fecha esté disponible a facturar. (Ver más)
```json 
{
   "renovationId": 1,
   "renovationDate": 1585160716
}
```
- **renovationId**, Identificador del evento de renovación.
- **renovationDate**, Fecha de la renovación. 