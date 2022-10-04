---
sidebar_position: 59.1
title: Webhooks 
description: Obtención datos instancia
slug: /configuracion/webhooks
tags: 
 - webhooks
---

# Webhooks instancia

:::info
Para consumir el recurso de la instancia, se debe usar `https://credential.bsale.io` como **url base**
:::

#### Ejemplo
- `GET /v1/instances/basic/d466gsgs287da0ffbe9dd56eb058095fa13hgs772cb0c1d9e.json` 

#### Respuesta

```json
{
  "id": 129577,
  "code":"98765432-1",
  "name": "Empresa Bsale Demo SA",
  "state": 0,
  "country": "CL",
  "trial": 0,
  "trialEnd": 1493335314
}
```

#### Parámetros
- **id**, Identificador de la instancia en la cual está asociado el `access_token`
- **code**, Rut empresa
- **name**, Nombre empresa
- **state**, Estado empresa
- **country**, País empresa
- **trial**, Empresa prueba 30 días (1), definitiva (0)
- **trialEnd**, fecha unix termino trial





