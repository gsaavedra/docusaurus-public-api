---
title: Envíos
description: Genera envíos mediante tienda en línea Bsale
slug: /envíos
---

# API Envíos

El equipo de Bsale ha puesto a disposición de la comunidad de desarrolladores endpoints y webhooks para la comunicación con distintos tipos de courriers de envíos. Pudiendo notificar despachos, estados de éstos y obtención de sus detalles.
Para autenticar las peticiones en todos los endpoints se debe enviar en la cabecera el parámetro `access_token`

:::info
**Url base**
https://courier.bsale.io
:::

## GET una orden
- GET `/v1/couriers/orders/:id.json` retorna la información de una orden para un courier.

#### Parámetros
- **id**, id de la orden (Integer).
- **expand**, opcional para expandir nodos (String) 

#### Ejemplos
- `GET /v1/couriers/orders/:idOrder.json?expand=orders.details`
- `GET /v1/couriers/orders/:idOrder.json?expand=orders.deliveryType`


```json title="Response /couriers/orders/:idOrder.json "
{
  "code": 200,
  "data": {
    "id": 32,
    "origin": {
      "country": "Chile",
      "state": "Región Metropolitana",
      "city": "Santiago",
      "district": "Buin",
      "address": "Camino Padre Hurtado 5696",
      "zipcode": "",
      "latitude": "0.0",
      "longitude": "0.0"
    },
    "destination": {
      "country": "Chile",
      "state": "Región Metropolitana",
      "city": "",
      "district": "Vitacura",
      "address": "mar jonico 7995",
      "buildingNumber": "",
      "zipcode": "",
      "latitude": "0.0",
      "longitude": "0.0"
    },
    "packagingType": 0,
    "contact": {
      "firstName": "Stefany Milagros",
      "lastName": "Palma Giron",
      "email": "sgcobranzas@gmail.com",
      "code": "",
      "phone": "941257211"
    },
    "comment": "A dos cuadras del colegio Sagrado Corazon de Jesús",
    "deliveryType": {
      "id": 3,
      "name": "Overnight",
      "code": "over001",
      "courierId": 2
    },
    "courierId": 2,
    "sellerId": 1,
    "stateId": 6,
    "label": "",
    "trackingNumber": "",
    "details": [
      {
        "id": 2,
        "description": "el ananá de Pablo HUESO",
        "quantity": 1,
        "weight": 5,
        "length": 5,
        "width": 5,
        "height": 5
      }
    ]
  }
}
```
#### Atributos
| Atributo      | Descripción | Tipo dato |
| ----------- | ----------- | ----------- |
| **origin** |  objeto con la información desde donde se despachará | Object | 
| **country** |  país | String | 
| **state** |  región(Chile)/departamento(Perú) | String | 
| **city** |  ciudad | String | 
| **district** |  comuna(Chile)/distrito(Perú) | String | 
| **address** |  dirección | String |
| **zipcode** |  código postal | String |
| **latitude** |  latitud | String |
| **longitude** |  longitud | String |
| **destination** |  objeto con la información de destino del despacho | Object |
| **country** |  país | String |
| **state** |  región(Chile)/departamento(Perú) | String |
| **city** |  ciudad | String |
| **district** |  comuna(Chile)/distrito(Perú) | String |
| **address** |  nombre de la calle | String |
| **buildingNumber** |  numero de la propiedad | String |
| **zipcode** |  código postal | String |
| **latitude** |  latitud (no disponible actualmente) | String |
| **longitude** |  longitud (no disponible actualmente) | String |
| **contact** |  objeto con la información de contacto del destinatario | Object |
| **firstName** |  nombre  | String |
| **lastName** |  apellido | String |
| **email** |  email de contacto | String |
| **code** |  código del destinatario | String |
| **phone** |  teléfono | String |
| **seller** |  información de contacto del remitente | Object |
| **comment** |  comentario opcional | String |
| **packagingType** |  despacho en múltiples paquetes(0-no/1-si) | Integer |
| **deliveryTypes** |  tipo de despacho (expand: orders.deliveryType) | Object |
| **courierId** |  id del courier | Integer |
| **sellerId** |  id del seller | Integer |
| **stateId** |  id del estado del despacho | Integer  |
| **label** |  etiqueta del pedido | String |
| **trackingNumber** |  numero de seguimiento | String |
| **details** |  detalle del despacho (expand: orders.details) | Object |
| **description** |  descripción del detalle | String |
| **quantity** |  cantidad | Float |
| **weight** | Peso en kg  | Float |
| **length**|  Largo en cm  | Float |
| **width** | Ancho en cm  | Float |
| **height** | Altura en cm | Float |


## POST estados del despacho
- POST `/v1/logs.json` registra de movimientos y estados del despacho.

#### Parámetros
- **id**, id de la orden (Integer)
- **description**, descripción del detalle (String)
- **stateId**, id del estado (Integer)

:::tip

El **id** sólo lo obtendrás en el evento notificación que te llegue desde el webhook y se notifica como `resourceId`.

:::

#### Estados del despacho
:::note
- **1** Por retirar (Listo para despacho)
- **2** En tránsito (Despachado)
- **3** Entregado (Entregado)
- **4** Problema con la entrega (Error al despachar)
- **5** Problema con los datos (Error al despachar)
- **6** Anulado

![Estados](https://i.imgur.com/4BxgaHL.png)

:::
```json title="Response /logs.json "
{
   "orderId": 122,
   "description": "paquete despachado",
   "stateId": 2
}
```

## POST url seguimiento y etiqueta
- POST `/v1/couriers/orders/:id/label.json` registra la etiqueta y número de seguimiento

#### Parámetros
- **orderId**, id de la orden (Integer)
- **trackingNumber**  Código de seguimiento (String)
- **label** Url externa de etiqueta (Integer)

```json title="Response /documents/421.json "
{
   "orderId": 14861,
   "trackingNumber": "909981888-F",
   "label": "http://courierdemo.com/storage/img9099decode.jpg"
}
```

# Webhooks Envíos

## Esructura JSON
Se realizará una petición POST al endpoint que designe el Courier, la cual contendrá en su cuerpo el siguiente detalle:

```json
{
    "cpnId": 33250,
    "sellerId": 7,
    "userToken": "5882317a9a3555abc25e582ac585e94f5b792494",
    "resource": "/v1/couriers/orders/17170.json",
    "resourceId": "17170",
    "topic": "courierOrder",
    "action": "post",
    "send": 1629741015
}
```

#### Parámetros
- **sellerId**, id de la empresa que solicita la orden (Integer)
- **resource**, Endpoint para obtener la información del recurso (String)
- **resourceId**, id del recurso notificado (String)
- **topic**, motivo o recurso de la notificación (String)
- **action**, verbo REST de la notificación (String)
- **send**, UNIX Timestamp de la notificación (Integer)



