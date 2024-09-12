import mongoose from 'mongoose'

export const connDB = async () => {
    try {
        mongoose.connect(
            "mongodb://localhost:27017/"
        )
        console.log("DB conectada")
    } catch (error) {
        console.log("error al conectar con DB", error)
    }
}