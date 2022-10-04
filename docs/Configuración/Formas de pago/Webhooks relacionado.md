---
sidebar_position: 59
title: Webhooks 
description: Servicio de notificaciones de pagos
slug: /formas-de-pago/webhooks
tags: 
 - webhooks
---

# Webhooks pagos (BETA)
:::info
Para consumir los recursos notificados, se debe usar `https://api.bsale.io` como **url base**
:::

## Notificación productos
### Esructura JSON
Cada vez que en Bsale se ejecuta una acción sobre la información asociada a un pago, recibirás una notificación. En el caso en el que se cree un pago o se elimine recibirás el siguiente `JSON`

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
En el caso que en bsale se haga una actualización de la información de un pago, recibirás:
```json
{
  "cpnId": 8849,
  "resource": "/v1/payments/3223.json",
  "resourceId": "3223",
  "topic": "payment",
  "action": "put",
  "send": 1647012534
}
```
:::tip
Es importante que tengas presente que no existirán notificaciones asociadas a acciones del tipo `DELETE` ya que Bsale entiende como edición del pago, proceso que es informado mediante una notificación `PUT`.
:::

### Parámetros
- **cpnId**, Identificador de la instancia en la cual se generó la acción (Empresa)
- **resource**, Indicará donde puedes obtener el detalle del recurso que se notificó
- **resourceId**, Identificador único de producto
- **topic**, Información respecto del tipo de recurso modificado, en este caso un `payment`.
- **action**, Identifica el tipo de acción en este caso son posible sólo acciones `POST` y `PUT`
