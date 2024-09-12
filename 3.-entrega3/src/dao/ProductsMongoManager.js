/* import { productsModel } from "./models/productsModels" */
import { productsModel } from "./models/productsModels.js"

class ProductsMongoManager {

    static async getProducts() {
        return await productsModel.find().lean()
    }//fin read

    static async addProduct(product = {}) {
        let newProduct = await productsModel.create(product)
        return newProduct.toJSON()
        //se envía en toJSON para desidratarlo ya que el  create no tiene el metodo .lean
    }//fin create

    static async updateProduct(id, updateProduct = {}) {
        return await productsModel.findByIdAndUpdate(id, updateProduct, { new: true }).lean()
    }//fin update

    static async deleteProduct(id) {
        return await productsModel.findByIdAndDelete(id).lean()

    }//fin delete


}

/* module.exports = ProductsManager */

export default ProductsMongoManager


/* ProductsManager.addProduct("cafetera", "Dolce Gusto", "123", 90000, true, 3, "linea blanca", ["foto1", "foto2"])

console.log(ProductsManager.getProducts()) */