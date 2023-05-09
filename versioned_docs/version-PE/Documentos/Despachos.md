---
sidebar_position: 11
title: Despachos (Guía de remisión)
description: Crear, editar y listar despachos
slug: /documentos/despachos
---


# Despacho (Guía de remisión)

Generación de documentos tipo despacho. _(ej Guías de remisión electrónicas)_, listar despachos generados, detalles incluidos en el despacho. .

Cómo funciona la interfaz de Bsale, mira éstos videos:

- Creación de una guía de remisión [Ver](https://youtu.be/XBAd_W8m_FI) 
- Creación de una guía de remisión a partir de otro documento [Ver](https://youtu.be/G6LMsLwv7v0)

:::info
Un documento del tipo despacho, siempre genera una salida de stock (cuando se controla stock)
:::

## Estructura JSON

Al realizar una petición `HTTP`, el servicio retornara un JSON con la siguiente estructura:

```js title="Response /v1/shippings/22.json"
{
  "href": "https://api.bsale.io/v1/shippings/22.json",
  "id": 22,
  "shippingDate": 1370318400,
  "address": null,
  "municipality": "",
  "city": "",
  "recipient": null,
  "state": 0,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "shipping_type": {
    "href": "https://api.bsale.io/v1/shipping_types/1.json",
    "id": "1"
  },
  "guide": {
    "href": "https://api.bsale.io/v1/documents/23.json",
    "id": "23"
  },
  "details": {
    "href": "https://api.bsale.io/v1/shippings/22/details.json"
  }
}
```

### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **href**      | url del documento despacho     | String       |
| **id**   | identificador único del despacho   | Integer |
| **shippingDate**   | fecha del despacho   | Integer |
| **address**   | dirección del despacho   | String |
| **municipality**   | comuna del despacho  | String |
| **city**   | ciudad del despacho   | String |
| **recipient**   | destinatario del despacho    | String |
| **state**   | estado del descuento indica si el descuento esta activo(0) o inactivo (1)   | Boolean |
| **office**   | nodo que indica la relación con la sucursal en la que fue emitida el despacho.   |  |
| **shipping_type**   | nodo que indica la relación con el tipo de despacho.  |  |
| **guide**   | nodo que indica el documento guía de despacho.  |  |
| **details**   | nodo que indica los detalles del despacho.  |  |

## GET lista de despachos
- GET `/v1/shippings.json` retornará todos los despachos.

#### Parámetros
- **limit**, limita la cantidad de items de una respuesta JSON, por defecto el limit es 25, el máximo permitido es 50.
- **offset**, permite paginar los items de una respuesta JSON, por defecto el offset es 0.
- **fields**, solo devolver atributos específicos de un recurso
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.
- **shippingdate**, Permite filtrar por fecha de devolución.
- **officeid**, Permite filtrar por sucursal.
- **shippingtypeid**, filtra por tipo de despacho
- **state**, boolean (0 o 1) indica si los documentos están activos(0) inactivos (1).
- **documentid**, id documento guía de remisión
  
#### Ejemplos
- `GET /v1/shippings.json?limit=10&offset=0`
- `GET /v1/shippings.json?fields=[shippingdate,recipient]`
- `GET /v1/shippings.json?expand=[guide,shipping_type,details]`

```json title="Response /shippings.json "
{
  "href": "https://api.bsale.io/v1/shippings.json",
  "count": 13430,
  "limit": 3,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/shippings/22.json",
      "id": 22,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.io/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.io/v1/documents/23.json",
        "id": "23"
      },
      "details": {
        "href": "https://api.bsale.io/v1/shippings/22/details.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/shippings/23.json",
      "id": 23,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.io/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.io/v1/documents/24.json",
        "id": "24"
      },
      "details": {
        "href": "https://api.bsale.io/v1/shippings/23/details.json"
      }
    },
    {
      "href": "https://api.bsale.io/v1/shippings/24.json",
      "id": 24,
      "shippingDate": 1370318400,
      "address": null,
      "municipality": "",
      "city": "",
      "recipient": null,
      "state": 0,
      "office": {
        "href": "https://api.bsale.io/v1/offices/1.json",
        "id": "1"
      },
      "shipping_type": {
        "href": "https://api.bsale.io/v1/shipping_types/1.json",
        "id": "1"
      },
      "guide": {
        "href": "https://api.bsale.io/v1/documents/25.json",
        "id": "25"
      },
      "details": {
        "href": "https://api.bsale.io/v1/shippings/24/details.json"
      }
    }
  ]
}
```
## GET único despacho
- GET `/v1/shippings/22.json ` retornará un despacho específico.

#### Parámetros
- **expand**, permite expandir instancias y colecciones para traer relaciones en una sola petición.

#### Ejemplos
- `GET /v1/shippings/1.json?expand=[details]`

```json title="Response /shippings/22.json "
{
  "href": "https://api.bsale.io/v1/shippings/22.json",
  "id": 22,
  "shippingDate": 1370318400,
  "address": null,
  "municipality": "",
  "city": "",
  "recipient": null,
  "state": 0,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "shipping_type": {
    "href": "https://api.bsale.io/v1/shipping_types/1.json",
    "id": "1"
  },
  "guide": {
    "href": "https://api.bsale.io/v1/documents/23.json",
    "id": "23"
  },
  "details": {
    "href": "https://api.bsale.io/v1/shippings/22/details.json"
  }
}
```

## GET detalles de un despacho
- GET `GET /v1/shippings/22/details.json` retorna los detalles contenidos en un despacho.

```json title="Response /shippings/22/details.json "
{
  "href": "https://api.bsale.io/v1/shippings/22/details.json",
  "count": 1,
  "limit": 25,
  "offset": 0,
  "items": [
    {
      "href": "https://api.bsale.io/v1/shippings/22/details/31.json",
      "id": 31,
      "quantity": 1,
      "variantStock": 28,
      "variantCost": 0,
      "variant": {
        "href": "https://api.bsale.io/v1/variants/8.json",
        "id": "8"
      }
    }
  ]
}
```

## GET un detalle de un despacho
- GET `/v1/shippings/22/details/31.json` Retornará un detalle específico del despacho.

```json title="Response /shippings/22/details/31.json "
{
  "href": "https://api.bsale.io/v1/shippings/22/details/31.json",
  "id": 31,
  "quantity": 1,
  "variantStock": 28,
  "variantCost": 0,
  "variant": {
    "href": "https://api.bsale.io/v1/variants/8.json",
    "id": "8"
  }
}
```

## POST un despacho
- POST `/v1/shippings.json` 

Para crear un documento del tipo despacho (manual o electrónico), se debe enviar un JSON con la siguiente estructura:

:::caution
La **generación de documentos de remisión** está en fase de pruebas, por lo que su uso debe ser notificado a ayuda@bsale.app para mantener su monitoreo y seguimiento.
:::

### Referencias y fechas

```json
{
  "documentTypeId": 20,
  "officeId": 1,
  "priceListId": 18,
  "emissionDate": 1603670400,
}
```
- **documentTypeId**, Id del tipo de documento, del tipo despacho. (Integer).
- **officeId**, Id de la sucursal donde se emite el documento, si no es especificada el documento quedara asignado a la sucursal por defecto del sistema (Integer).
- **priceListId**, Id de la lista de precio utilizada por el documento, si no es especificada se utilizara la lista de precio por defecto de la sucursal (Integer).
- **emissionDate**, Fecha de emisión del documento (Integer) (no se debe aplicar zona horaria, solo considerar la fecha).
- **shippingTypeId**, Id tipo de despacho (tipo de traslado) (Integer) 
- **municipality**, Comuna de despacho (String) 
- **address**, Dirección de despacho (String)
- **recipient**, Nombre quien recepciona despacho (String)

:::info
Se deben enviar los datos de dirección del cliente como direcciones del despacho
:::

### A partir de existente
Si se desea generar una guía a partir de otro documento, se debe enviar el identificador del detalle del documento original:

```json "
{
{
   "details": [
       {
           "detailId": 105,
           "quantity": 1
       }
   ],
}
```

- **detailId**, Id de detalle del documento de referencia
- **quantity**, Cantidad asociada al detalle

### Traslado interno
Si se desea generar una guía de traslado interno, se debe agregar al envío

```json 
{
 "officeId": 1,
 "destinationOfficeId":3,
 "shippingTypeId": 5
}
```

- **officeId**, Id de sucursal origen (donde se genera el documento)
- **destinationOfficeId**, Id sucursal destino
- **shippingTypeId**, Id tipo de despacho

#### Envío
```json title="POST /shippings.json"
{
  "documentTypeId": 7,
  "officeId": 1,
  "emissionDate": 1603670400,
  "shippingTypeId": 6,
  "municipality": "Lima",
  "city": "Lima",
  "address": "Miraflores",
  "declareSii": 1,
  "recipient": "Edison Packard",
  "details": [
    {
      "quantity": 500,
      "code": "1372685554",
      "netUnitValue": 12000
    }
  ],
  "client": {
    "code": "123456789",
    "municipality": "Lima",
    "activity": "Arriendo de maquinaria pesada",
    "company": "Maquinarías Express",
    "city": "Lima",
    "email": "apidespachos@bsale.com.pe",
    "address": "Los Alamos #122"
  }
}
```

#### Respuesta
```json title="201 Response /shippings.json "
{
  "href": "https://api.bsale.io/v1/shippings/1554.json",
  "id": 1554,
  "shippingDate": 1603670400,
  "address": "Miraflores 1005",
  "municipality": "Lima",
  "city": "Lima",
  "recipient": "Edison Packard",
  "state": 0,
  "office": {
    "href": "https://api.bsale.io/v1/offices/1.json",
    "id": "1"
  },
  "user": {
    "href": "https://api.bsale.io/v1/users/257.json",
    "id": "257"
  },
  "shipping_type": {
    "href": "https://api.bsale.io/v1/shipping_types/6.json",
    "id": "6"
  },
  "guide": {
    "href": "https://api.bsale.io/v1/documents/61716.json",
    "id": "61716"
  },
  "details": {
    "href": "https://api.bsale.io/v1/shippings/1554/details.json"
  }
}
```

### Tipo de transporte externo
Si se desea generar una guía de tipo transporte externo, se debe agregar al envío el nodo de atributos dinámicos (dynamicAttributes).


#### Envío
```json title="POST /shippings.json "
"dynamicAttributes": [
    {
        "alias": "shipmentTransportModeCode",
        "values": [
            "01"
        ]
    },
    {
        "alias": "shipmentCarrierCompanyName",
        "values": [
            "SED"
        ]
    },
    {
        "alias": "shipmentCarrierCode",
        "values": [
            "20538856674"
        ]
    },
    {
        "alias": "shipmentStartDate",
        "values": [
            "2023-04-12"
        ]
    },
    {
        "alias": "shipmentOriginAddressDescription",
        "values": [
            "Av Gral Diez Canseco Nro 527 "
        ]
    },
    {
        "alias": "shipmentOriginAddressId",
        "values": [
            "010101"
        ]
    },
    {
        "alias": "shipmentDeliveryAddressId",
        "values": [
            "010102"
        ]
    },
    {
        "alias": "shipmentGrossWeightMeasure",
        "values": [
            "3"
        ]
    },
]

```
### Tipo de transporte privado
Si se desea generar una guía de tipo transporte privado, se debe agregar al envío el nodo de atributos dinámicos (dynamicAttributes).

#### Envío
```json title="POST /shippings.json "
"dynamicAttributes": [
    {
        "alias": "shipmentTransportModeCode",
        "values": [
            "02"
        ]
    },
    {
        "alias": "shipmentCarrierCompanyName",
        "values": [
            "SED"
        ]
    },
    {
        "alias": "shipmentCarrierDriverCode",
        "values": [
            "20538856674"
        ]
    },
    {
        "alias": "shipmentCarrierDriverCodeType",
        "values": [
            "1"
        ]
    },
    {
        "alias": "shipmentCarrierPlateId",
        "values": [
            "HFPD19"
        ]
    },
    {
        "alias": "shipmentStartDate",
        "values": [
            "2023-04-12"
        ]
    },
    {
        "alias": "shipmentOriginAddressDescription",
        "values": [
            "Av Gral Diez Canseco Nro 527 "
        ]
    },
    {
        "alias": "shipmentOriginAddressId",
        "values": [
            "010101"
        ]
    },
    {
        "alias": "shipmentDeliveryAddressId",
        "values": [
            "010102"
        ]
    },
    {
        "alias": "shipmentGrossWeightMeasure",
        "values": [
            "3"
        ]
    },
    {
        "alias": "shipmentCarrierCompanySurname",
        "values": [
            "surname"
        ]
    },
    {
        "alias": "shipmentCarrierCompanyId",
        "values": [
            "123456789"
        ]
    }
]

```

- **dynamicAttributes**, atributos dinámicos de despacho (array)
- **alias**,  Corresponde al alias del atributo (string)
- **values**, Corresponde al valor del alias (array)

#### Parámetros de alias
- **shipmentTransportModeCode**, Modo de transporte
- **shipmentCarrierCompanyName**, Nombre de transportista
- **shipmentCarrierCode**, Id empresa de transporte
- **shipmentCarrierDriverCodeType**, Id Conductor
- **shipmentCarrierPlateId**, Número de placa
- **shipmentStartDate**, Fecha de inicio
- **shipmentOriginAddressDescription**, Dirección de origen
- **shipmentGrossWeightMeasure**, Peso bruto total KG
- **shipmentCarrierCompanySurname**, Apellidos del conductor
- **shipmentSupplierCodeType**, Apellidos del conductor
- **shipmentSupplierCode**, Id del proveedor
- **shipmentSupplierName**, Nombre del proveedor
- **shipmentCarrierCompanyId**, Número licencia del conductor
- **shipmentOriginAddressId**, Código de ubigeo de origen
- **shipmentDeliveryAddressId**, Código de ubigeo de destino
- **buyerCodeType**, Tipo id del comprador
- **buyerCode**, Id del comprador
- **buyerName**, Nombre del comprador