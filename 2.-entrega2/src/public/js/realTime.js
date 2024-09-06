console.log("hola mundo desde socket realtime")
const inputMensaje = document.getElementById("mensaje")

const divProducts = document.getElementById("divProducts")

function enviarMensaje() {
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let code = document.getElementById('code').value
    let price = document.getElementById('price').value
    let status = document.getElementById('status').value
    let stock = document.getElementById('stock').value
    let category = document.getElementById('category').value
    let producto = {
        title: title,
        description: description,
        code: code,
        price: price,
        status: status,
        stock: stock,
        category: category
    }

    console.log(producto)
    socket.emit("nuevoProducto", producto);
    document.getElementById('title').value = ''
    document.getElementById('description').value = ''
    document.getElementById('code').value = ''
    document.getElementById('price').value = ''
    document.getElementById('status').value = ''
    document.getElementById('stock').value = ''
    document.getElementById('category').value = ''
}


const socket = io()

socket.on("previousProducts", productos => {
    productos.forEach(producto => {
        let p = document.createElement("p")
        p.classList.add("producto")
        let s = document.createElement("strong")
        let sp = document.createElement("span")
        let i = document.createElement("i")
        let d = document.createElement("button")

        s.textContent = producto.title
        sp.textContent = " - "
        i.textContent = producto.description
        d.textContent = "Eliminar"
        p.append(s, sp, i, d)
        d.onclick = function () {
            console.log("me eliminaste", producto.id)
            socket.emit("deleteProduct", producto.id)
            p.remove()
        }
        divProducts.append(p)
        divProducts.scrollTop = divProducts.scrollHeight
    })
})

socket.on("newProduct", product => {
    console.log("Se creo un nuevo producto")
    let p = document.createElement("p")
    p.classList.add("producto")
    let s = document.createElement("strong")
    let sp = document.createElement("span")
    let i = document.createElement("i")
    let d = document.createElement("button")

    s.textContent = product.title
    sp.textContent = " hola"
    i.textContent = product.description
    d.textContent = "Eliminar"
    p.append(s, sp, i, d)
    d.onclick = function () {
        console.log("me eliminaste", product.id)
        socket.emit("deleteProduct", product.id)
        p.remove()
    }
    divProducts.append(p)
    divProducts.scrollTop = divProducts.scrollHeight

})

socket.on("deletedProduct", id => {
    console.log("Producto eliminado", id)

})


socket.on("nuevoMensaje", (nombre, mensaje) => {
    let p = document.createElement("p")
    p.classList.add("mensaje")
    let s = document.createElement("strong")
    let sp = document.createElement("span")
    let i = document.createElement("i")

    s.textContent = nombre
    sp.textContent = " dice "
    i.textContent = mensaje
    p.append(s, sp, i)
    divMensajes.append(p)
    divMensajes.scrollTop = divMensajes.scrollHeight

})

/* const divTemperatura = document.getElementById('temperatura')
 */
/* socket.on("nuevaLecturaTemperatura", datos => {
    //console.log(`La temperatura actual es de °${datos}`)
    divTemperatura.textContent = `La temperatura actual es de °${datos}`
}) */

/* socket.on("nuevoMensaje", (nombre, mensaje) => {
    let p = document.createElement("p")
    p.classList.add("mensaje")
    let s = document.createElement("strong")
    let sp = document.createElement("span")
    let i = document.createElement("i")

    s.textContent = nombre
    sp.textContent = " dice "
    i.textContent = mensaje
    p.append(s, sp, i)
    divMensajes.append(p)
    divMensajes.scrollTop = divMensajes.scrollHeight

}) */



/* socket.on("mensajesPrevios", mensajes => {
    mensajes.forEach(datos => {
        let p = document.createElement("p")
        p.classList.add("mensaje")
        let s = document.createElement("strong")
        let sp = document.createElement("span")
        let i = document.createElement("i")

        s.textContent = datos.nombre
        sp.textContent = " dice "
        i.textContent = datos.mensaje
        p.append(s, sp, i)
        divMensajes.append(p)
        divMensajes.scrollTop = divMensajes.scrollHeight
    })
}) */


/* socket.on("nuevo", datos => {
    //console.log(`La temperatura actual es de °${datos}`)
    divTemperatura.textContent = `La temperatura actual es de °${datos}`
}) */

/*
socket.on("previousProducts", products => {
    console.log(products)
    products.forEach(product => {
        let p = document.createElement("p")
        p.classList.add("mensaje")
        let s = document.createElement("strong")
        let sp = document.createElement("span")
        let i = document.createElement("i")

        s.textContent = product.title
        sp.textContent = " dice "
        i.textContent = product.description
        p.append(s, sp, i)
        divMensajes.append(p)
        divMensajes.scrollTop = divMensajes.scrollHeight
    })
}) */

/* este está casi listo */
/* socket.on("nuevo", dato => {
    console.log(dato)
    let p = document.createElement("p")
    p.classList.add("producto")
    let s = document.createElement("strong")
    let sp = document.createElement("span")
    let i = document.createElement("i")
    s.textContent = nombre
    sp.textContent = " dice "
    i.textContent = dato.title
    p.append(s, sp, i)
    divProductos.append(p)
    divProductos.scrollTop = divProductos.scrollHeight

})
 */
/* socket.on("nuevo", datos => {
    console.log(`Se ha creado un nuevo producto ${datos.title}`)
}) */

/* //ejemplo mandando dos datos
socket.on("nuevo2", (user, dato) => {
    console.log(`se ha creado el usuario ${user}`, dato)
})
 */
/* socket.on("saludo", saludo => {
    console.log(saludo)
    if (nombre) {
        socket.emit("id", nombre)
    }
}
) */

//para escuchar cuando otros usuarios se conectan 
/* socket.on("nuevoUsuario", nombre => {
    console.log(`${nombre} se ha unido al server..!`);

}) */

/* inputMensaje.addEventListener("keyup", e => {
    //console.log(e, e.target.value)
    if (e.code === "Enter" && e.target.value.trim().length > 0) {
        socket.emit("mensaje", e.target.value.trim())
        e.target.value = ""
        e.target.focus()
    }
    console.log(obj)
}) */