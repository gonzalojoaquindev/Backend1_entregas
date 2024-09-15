import mongoose from 'mongoose'
import { config } from "./config/config.js"

export const connDB = async () => {
    try {

        await mongoose.connect(
            config.MONGO_URL,
            { dbName: config.DB_NAME }
        )
        /* "mongodb://localhost:27017/", */
        /*  "mongodb+srv://gonzaloact:20dejulio@cluster0.7b3o3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
             {
                 dbName: "proyectoFinal"
 
             }*/
        console.log("DB conectada")
    } catch (error) {
        console.log("error al conectar con DB", error)
    }
}


/* import mongoose from "mongoose"
export const connDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://comis70140:CoderCoder@cluster0.3rdsx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                dbName: "clase16"
            }
        )
        console.log("DB conectada...!!!")
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
} */