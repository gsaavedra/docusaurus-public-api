---
sidebar_position: 5
title: Webhooks
description: Servicio de notificaciones
slug: /documentos/webhooks
tags: 
 - webhooks
---

# Webhooks documentos

## Esructura JSON
Cada vez que en Bsale se genere un documento recibirás una notificación POST a la URL que definiste con la siguiente estructura:

```json
{
   "cpnId": 2,
   "resource": "/documents/14417.json",
   "resourceId": "14417",
   "topic": "document",
   "action": "post",
   "officeId": "2"
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




