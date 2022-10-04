---
sidebar_position: 32
title: Webhooks
description: Servicio de notificaciones pagos de documentos
slug: /pagos/webhooks
tags: 
 - webhooks
---

# Webhooks pagos

:::info
Para consumir los recursos notificados, se debe usar `https://api.bsale.io` como **url base**
:::

## Esructura JSON
Cada vez que en Bsale se ejecuta una acción sobre la información asociada a un pago, recibirás una notificación. En el caso en el que se cree un pago o se elimine recibirás el siguiente Json

```json
{
    "cpnId": 8849,
    "resource": "/v1/payments/3229.json",
    "resourceId": "3229",
    "topic": "payment",
    "action": "post",
    "send": 1646914861
}
```

#### Parámetros
- **cpnId**, Identificador de la instancia en la cual se generó la acción (Empresa)
- **resource**, Indicará donde puedes obtener el detalle del recurso que se notificó
- **resourceId**, Identificador único del recurso
- **topic**, Información respecto del tipo de recurso modificado, en este caso un documento.
- **action**, Identifica el tipo de acción en este caso es un POST por lo que se está informando la creación de un documento.
- **officeId**, En esta modificación se agrega el campo officeId, de manera de informar en la llamada de que sucursal se trata, esto para facilitar la identificación si corresponde o no ejecutar alguna tarea.

:::info

Es muy importante destacar que podrán obtener el objeto `document`, pero con los datos de stock disponible de cada variante incluida. Esto es de mucha utilidad cuando uno quiere mantener actualizado el inventario en un sistema externo. En este caso tendremos que:

**resource**, `GET /v2/stocks/documents/14417.json` 
si requieres sólo el stock de una sucursal en particular `GET /v2/stocks/documents/14417.json?office=2`

:::




