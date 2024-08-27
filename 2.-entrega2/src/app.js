
import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import { Server } from 'socket.io'
import productRouter from "./routes/products.router.js"
import cartRouter from "./routes/cart.router.js"
import viewsRouter from './routes/views.router.js'
/* import { join } from "path"
import path from 'path';
const currentDir = path.dirname(__filename); */

console.log(__dirname, "desde app")

let serverSocket
/* console.log(productRouter) */

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//Configuración de handlebars-------------------------
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

//indicamos que deseamos que public se vuelva estático. en la ruta raíz se mostrará el index.html
app.use(express.static(__dirname + '/public'))


//configuración de rutas------------------------
app.use(
    "/api/products",
    // pongo un middleware para poder usar el serverSocket en el fronted
    (req, res, next) => {
        req.socket = serverSocket
        next()
    },
    productRouter
)
/* app.use("/api/products", productRouter) */
app.use("/api/carts", cartRouter)



app.use('/', viewsRouter)

const serverHTTP = app.listen(8080, () => console.log("Listening on Port 8080"))

serverSocket = new Server(serverHTTP)

serverSocket.on("connection", socket => {
    console.log(`se conectó un cliente con id ${socket.id}`)

    //envia solo al que se acaba de conectar
    socket.emit("saludo", `Bienvenido. soy el server. Identificate...`)

    // a todos menos al que acaba de emitir el evento
    socket.on("id", nombre => {
        console.log(`el cliente ${socket.id} se ha identificado como ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    //emitir a todos
})


/* app.listen(8080, () => console.log("Servidor arriba en el puerto 8080")) */ 