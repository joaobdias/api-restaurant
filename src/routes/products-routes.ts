import { Router } from "express"
import { ProductController } from "@/controllers/products-controller"

// this file calls the products router controller related

const productsRoutes = Router()
const productsController = new ProductController

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", productsController.create)
productsRoutes.put("/:id", productsController.update)
productsRoutes.delete("/:id", productsController.remove)

export {productsRoutes}