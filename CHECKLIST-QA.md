# QA Checklist — QuiénDaMás

Ejecutar antes de cada deploy. Marcar cada ítem. Si alguno falla, no deployar.

---

## 1. Autenticación

- [ ] Login con email funciona (recibe magic link, entra a vidriera.html)
- [ ] Sesión persiste al recargar la página
- [ ] Sin sesión, ver vidriera es posible (modo solo lectura)
- [ ] Sin sesión, intentar comprar redirige a login.html

---

## 2. Publicar artículo (como vendedor)

- [ ] Crear nueva publicación con foto, título, precio y categoría
- [ ] El artículo aparece en la vidriera en la categoría correcta
- [ ] Editar artículo existente
- [ ] Pausar y reactivar artículo

---

## 3. Carrito de tiendas (flujo completo)

- [ ] Abrir `tienda.html?id=<vendedor_id>` — se ve nombre del comercio y productos
- [ ] Agregar producto al carrito — aparece badge en botón flotante
- [ ] Recargar la página — el carrito persiste (localStorage)
- [ ] Abrir drawer del carrito — muestra los items correctos con precios
- [ ] Cambiar cantidad (+ y −) desde el drawer
- [ ] Eliminar item individual desde el drawer
- [ ] Vaciar carrito — desaparece el botón flotante y se limpia localStorage
- [ ] No poder comprar en la propia tienda (mensaje de error correcto)
- [ ] Checkout → modal de entrega aparece (retiro / delivery si el comercio tiene)
- [ ] Click en "Pagar online" → redirige a Mercado Pago
- [ ] Volver de MP → carrito limpio (localStorage vacío)

---

## 4. Panel del comerciante — pedidos.html

- [ ] Usuario sin cuenta de negocio ve mensaje de error (no accede al panel)
- [ ] Cuenta de negocio ve sus pedidos en tiempo real
- [ ] Badge "X nuevos" aparece cuando hay pedidos en estado "pendiente"
- [ ] Filtros (Todos / Pendientes / En preparación / Listos / Entregados) funcionan
- [ ] Botón "Empezar preparación" cambia estado a `en_preparacion`
- [ ] Botón "Marcar listo para retirar" cambia estado a `listo`
- [ ] Botón "Confirmar entrega" cambia estado a `entregado`
- [ ] Cancelar pedido pide confirmación y cambia estado a `cancelado`
- [ ] Datos del comprador visibles para pagos online
- [ ] Para pagos en efectivo, botón "Ver datos del comprador" abre modal

---

## 5. Notificaciones

- [ ] Campanita muestra badge cuando hay notificaciones no leídas
- [ ] Al hacer click en una notificación se navega al artículo correspondiente
- [ ] Comerciante recibe notificación (email + campanita) cuando llega un pedido nuevo

---

## 6. Panel Admin — admin.html

- [ ] Solo accesible con email lauraarrieta4@gmail.com
- [ ] Tabla de ventas carga correctamente
- [ ] Botón "Liberar fondos" llama a mp-liberar (confirmar visualmente)
- [ ] Botón "Reembolsar" llama a mp-reembolsar (confirmar visualmente)
- [ ] Limpieza de notificaciones viejas funciona

---

## 7. PWA

- [ ] En Chrome / Safari mobile: "Agregar a la pantalla de inicio" aparece
- [ ] La app instalada abre vidriera.html (no browser chrome)
- [ ] Después de un deploy, la app actualizada se carga (sin cache stale)

---

## 8. Regresión visual rápida

- [ ] vidriera.html carga en mobile sin scroll horizontal
- [ ] tienda.html carga con foto del comercio y productos
- [ ] pedidos.html carga sin errores en consola
- [ ] admin.html carga sin errores en consola
