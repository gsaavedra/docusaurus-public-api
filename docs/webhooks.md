---

title: webhooks
description: Servicio de notificaciones mediante eventos
slug: /webhooks
---

# Bsale webkooks

El equipo de Bsale ha puesto a disposición de la comunidad de desarrolladores un conjunto de notificaciones o Webhooks, la cual permite que puedas estar informado cuando en Bsale se ejecuten determinadas acciones, como la creación de un documento, la creación de un producto, la actualización del stock etc.. Esto evitará que tengas que estar preguntando cada cierto tiempo si algo ha cambiado en Bsale. Estas notificaciones o "callback", son informadas mediante webhooks o también conocidos como "user-defined HTTP callbacks", a mediante un POST a una URL que configures para ello. De esta manera por ejemplo cada vez que en Bsale se cree un nuevo documento, te avisaremos mediante una llamada POST a la URL que definiste, con una estructura JSON que contiene la información que te permitirá obtener el documento creado.

Con los datos enviados en el estructura JSON podrás llamar a nuestra API.

:::info
**Url base**
https://api.bsale.io
:::
