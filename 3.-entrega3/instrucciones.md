## Primera Pre-entrega
Desarrollar el servidor basado en Node.JS y express, que escuche en el puerto 8080 y disponga de dos grupos de rutas: /products y /carts. Dichos endpoints estarán implementados con el router de express, con las siguientes especificaciones:

Para el manejo de productos, el cual tendrá su router en /api/products/ , configurar las siguientes rutas:
✅  La ruta raíz GET / deberá listar todos los productos de la base.
✅  La ruta GET /:pid deberá traer sólo el producto con el id proporcionado
✅  La ruta raíz POST / deberá agregar un nuevo producto con los campos:
    - id: Number/String (A tu elección, el id NO se manda desde body, se autogenera como lo hemos visto desde los primeros entregables, asegurando que NUNCA se repetirán los ids en el archivo.
    - title:String,
    - description:String
    - code:String
    - price:Number
    - status:Boolean
    - stock:Number
    - category:String
    - thumbnails: Array de Strings que contengan las rutas donde están almacenadas las imágenes referentes a dicho producto
✅  La ruta PUT /:pid deberá tomar un producto y actualizarlo por los campos enviados desde body. NUNCA se debe actualizar o eliminar el id al momento de hacer dicha actualización.
✅ La ruta DELETE /:pid deberá eliminar el producto con el pid indicado. 

Para el carrito, el cual tendrá su router en /api/carts/, configurar dos rutas:

✅ La ruta raíz POST / deberá crear un nuevo carrito con la siguiente estructura:
    - Id:Number/String (A tu elección, de igual manera como con los productos, debes asegurar que nunca se dupliquen los ids y que este se autogenere).
    - products: Array que contendrá objetos que representen cada producto

✅  La ruta GET /:cid deberá listar los productos que pertenezcan al carrito con el parámetro cid proporcionados.
✅  La ruta POST  /:cid/product/:pid deberá agregar el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:
    - product: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)
    - quantity: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.
    - Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto. 

✅ La persistencia de la información se implementará utilizando el file system, donde los archivos: “products.json” y “carts.json” respaldarán la información. Para ello, deberás utilizar el productManager desarrollado en el desafío anterior y crear un cartManager que gestionen el almacenamiento de dichos archivos json.
✅  No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.

✅  Link al repositorio de Github con el proyecto completo, sin la carpeta de Node_modules.

## Segunda Pre-entrega

### Consigna

* [ ] 

* [X] ~~*Configurar nuestro proyecto para que trabaje con Handlebars y websocket.*~~ [2024-09-11]

### Apecto a considerar
* [ ] Configurar el servidor para integrar el motor de plantillas Handlebars e instalar un servidor de socket.io al mismo.
* [ ] Crear una vista “index.handlebars” la cual contenga una lista de todos los productos agregados hasta el momento y que se encuentre en la ruta “/products”
* [ ] Además, crear una vista “realTimeProducts.handlebars”, la cual estará en la ruta “/realtimeproducts” en nuestro views router, ésta contendrá la misma lista de productos, sin embargo, ésta trabajará sólo con websockets.
* [ ] Al trabajar con websockets, cada vez que creemos un producto nuevo, o bien cada vez que eliminemos un producto, se debe actualizar automáticamente en dicha vista la lista.
* [ ] Ya que la conexión entre una consulta HTTP y websocket no está contemplada dentro de la clase. Se recomienda que para la creación de un producto se creen un formulario simple y para su eliminación que se añada un botón “Eliminar” en cada producto en la vista  realTimeProducts.handlebars. Para que el contenido se gestione desde websockets y no HTTP.
* [ ] Para la creación del producto no es necesario añadir el dato “thumbnails”. Es decir, el envío de archivos desde el navegador.
* [ ] Si se desea hacer con HTTP, deberás buscar la forma de utilizar el servidor de Sockets dentro de la petición POST.


* [ ] no se como hacer dinamico la lista de productos con handlebars porque con el ejemplo era con un html estatico

### testing

Se instalará y correrá el servidor en el puerto indicado.
El servidor debe levantarse sin problema.
Se abrirá la ruta raíz
Debe visualizarse el contenido de la vista index.handlebars
No se debe activar el websocket aún.
Se buscará en la url del navegador la ruta “/realtimeproducts”.
Se corroborará que el servidor haya conectado con el cliente, en la consola del servidor deberá mostrarse un mensaje de “cliente conectado”.
Se debe mostrar la lista de productos y se corroborará que se esté enviando desde websocket.
 

crear: CTRL + Shift + c
marcar: CTRL + Shift + Enter
