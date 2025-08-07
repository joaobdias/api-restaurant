import { Router } from "express"
import { OrdersController } from "@/controllers/orders-controller" 

// this file calls the products router controller related

const orderRoutes = Router()
const ordersController = new OrdersController()

orderRoutes.post("/", ordersController.create)
orderRoutes.get("/table-session/:id/total", ordersController.show)
orderRoutes.get("/table-session/:table_session_id", ordersController.index)

export {orderRoutes}