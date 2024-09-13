
import { cartsModels } from "./models/productsModels"
class CartManager {

    static async getCarts() {
        return await cartsModels.find().lean()
    }//fin read

    static async addCart(cart = {}) {
        let newCart = await cartsModels.create(cart)
        return newCart.toJSON()
        //se envía en toJSON para desidratarlo ya que el  create no tiene el metodo .lean
    }//fin create

    static async updateCart(id, updateCart = {}) {
        return await cartsModels.findByIdAndUpdate(id, updateCart, { new: true }).lean()
    }//fin update

    static async deleteCart(id) {
        return await cartsModels.findByIdAndDelete(id).lean()

    }//fin delete

}


export default CartManager

