import { Router } from "express"
export const router = Router()


router.get('/products', (req, res) => {
    console.log("vista paginada")
    res.setHeader('Content-type', 'text/html')
    res.status(200).render("productsPaginate")
})