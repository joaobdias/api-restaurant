import { Router } from "express"
import { ProductController } from "@/controllers/products-controller"

// this file calls the products router controller related

const productsRoutes = Router()
const productsController = new ProductController

productsRoutes.get("/", productsController.index)

export {productsRoutes}