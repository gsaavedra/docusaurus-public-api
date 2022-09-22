---
sidebar_position: 3
title: Devoluciones
description: Crear y listar devoluciones
slug: /devoluciones
---


# Devoluciones

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
  
```
