import mongoose from "mongoose";

export const productsModel = mongoose.model(
    "product",
    new mongoose.Schema(
        {
            id: Number,
            title: {
                type: String, unique: true
            },
            description: String,
            code: String,
            price: Number,
            status: Boolean,
            stock: Number,
            category: String,
        },
        {
            timestamps: true
        }
    )
)

/* "id": 3,
    "title": "escritorio4",
        "description": "prueba2",
            "code": "148",
                "price": 60000,
                    "status": true,
                        "stock": 3,
                            "category": "office",
                                "thumbnails": [
                                    "img1",
                                    "img3"
                                ] */