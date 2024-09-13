import mongoose from "mongoose";

export const cartsModel = mongoose.model(
    "cart",
    new mongoose.Schema(
        {
            id: Number,
            products: {
                type: [
                    {
                        product: {
                            type: mongoose.Schema.Types.ObjectId,
                            //esto es solo para que no este en rojo
                            ref: products.product
                        }
                    }
                ]
            }
        },
        {
            timestamps: true
        }
    )
)

/* 
"id": 1,
          "products": [
               {
                    "product": 1,
                    "quantity": 7
               }
          ]
                                ] */