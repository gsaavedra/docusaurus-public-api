---
sidebar_position: 25
title: Webhooks
description: Servicio de notificaciones de productos y servicios
slug: /productos-y-servicios/webhooks
tags: 
 - webhooks
---

# Webhooks productos
:::info
Para consumir los recursos notificados, se debe usar `https://api.bsale.io` como **url base**
:::

## Notificación productos
### Esructura JSON
Cada vez que en Bsale se ejecuta una acción sobre la información asociada a un producto, recibirás una notificación. En el caso en el que se cree un producto recibirás el siguiente `JSON`

```json
{
  "cpnId": 2,
  "resource": "/v2/products/952.json",
  "resourceId": "952",
  "topic": "product",
  "action": "post",
  "send": 1503500856
}
```
En el caso que en bsale se haga una actualización de la información de un producto, recibirás:
```json
{
  "cpnId": 2,
  "resource": "/v2/products/952.json",
  "resourceId": "952",
  "topic": "product",
  "action": "put",
  "send": 1503500856
}
```
:::tip
Es importante que tengas presente que no existirán notificaciones asociadas a acciones del tipo `DELETE` ya que en Bsale no es posible borrar un producto, sólo se desactiva, proceso que es informado mediante una notificación `PUT`.
:::

### Parámetros
- **cpnId**, Identificador de la instancia en la cual se generó la acción (Empresa)
- **resource**, Indicará donde puedes obtener el detalle del recurso que se notificó
- **resourceId**, Identificador único de producto
- **topic**, Información respecto del tipo de recurso modificado, en este caso un producto.
- **action**, Identifica el tipo de acción en este caso son posible sólo acciones `POST` y `PUT`

## Notificación variantes
### Esructura JSON
Cada vez que en Bsale se ejecuta una acción sobre la información asociada a una variante, recibirás una notificación. En el caso en el que se cree ua variante recibirás el siguiente `JSON`

```json
{
  "cpnId": 2,
  "resource": "/v2/variants/7079.json",
  "resourceId": "7079",
  "topic": "variant",
  "action": "post",
  "send": 1503500856
}
```
En el caso que en bsale se haga una actualización de la información de una variante , recibirás:
```json
{
  "cpnId": 2,
  "resource": "/v2/variants/7079.json",
  "resourceId": "7079",
  "topic": "variant",
  "action": "put",
  "send": 1503500856
}
```
:::tip
Es importante que tengas presente que no existirán notificaciones asociadas a acciones del tipo `DELETE` ya que en Bsale no es posible borrar una variante, sólo se desactiva, proceso que es informado mediante una notificación `PUT`.
:::

### Parámetros
- **cpnId**, Identificador de la instancia en la cual se generó la acción (Empresa)
- **resource**, Indicará donde puedes obtener el detalle del recurso que se notificó
- **resourceId**, Identificador único de la variante
- **topic**, Información respecto del tipo de recurso modificado, en este caso variant.
- **action**, Identifica el tipo de acción en este caso son posible sólo acciones `POST` y `PUT`

## Notificación de precios
### Esructura JSON
Cada vez que en Bsale se ejecuta una acción sobre la información asociada a la modificación del precio de una variante, recibirás una notificación. Es muy importante destacar que en este caso **sólo existen notificaciones de actualizaciones de precio**, por lo que la única acción notificada será `PUT`

```json
{
  "cpnId": 2,
  "resource": "/v2/price_lists/2/details.json?variant=7079",
  "resourceId": "7079",
  "topic": "price",
  "action": "put",
  "officeId": "2",
  "send": 1503500856
}
```
:::tip
Se debe tener presente que bsale maneja los precios en listas de precio, es decir una misma variante puede tener diferentes precios.
:::

### Parámetros
- **cpnId**, Identificador de la instancia en la cual se generó la acción (Empresa)
- **resource**, Indicará donde puedes obtener el detalle del recurso que se notificó
- **resourceId**, Identificador único de la variante
- **topic**, Información respecto del tipo de recurso modificado, en este caso `price`.
- **action**, Identifica el tipo de acción en este caso son posible sólo acciones `POST` y `PUT`
- **priceListId**, identificador de la lista de precios que fue modificada

## Notificación de stock
### Esructura JSON
Cada vez que en Bsale se ejecuta una acción sobre la información asociada al stock de una variante, recibirás una notificación. Es muy importante destacar que en este caso sólo existen notificaciones de **actualizaciones de Stock**, por lo que la única acción notificada será `PUT`

```json
{
  "cpnId": 2,
  "resource": "/v2/stocks.json?variant=7079&office=1",
  "resourceId": "7079",
  "topic": "stock",
  "action": "put",
  "officeId": "1",
  "send": 1503500856
}
```
:::tip
Es importante que tengas presente que estas notificaciones representan movimientos de entradas y salidas de stock, ya sea por **recepción** de productos, **tomas de inventario**, **consumos** o **despachos**.
- Se debe complementar con la lectura de [Webhooks de documentos]
:::

### Parámetros
- **cpnId**, Identificador de la instancia en la cual se generó la acción (Empresa)
- **resource**, Indicará donde puedes obtener el detalle del recurso que se notificó
- **resourceId**, Identificador único de la variante
- **topic**, Información respecto del tipo de recurso modificado, en este caso `stock`.
- **action**, Identifica el tipo de acción en este caso son posible sólo acciones `PUT`
- **officeId**, identificador de la sucursal en la cual se generó la modificación del stock
