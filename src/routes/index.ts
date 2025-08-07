import { Router } from "express"
import { productsRoutes } from "./products-routes"
import { tablesRoutes } from "./tables-routes"
import { tablesSessionsRoutes } from "./tables-sessions-routes"

// this file calls the script routes related 

const routes = Router()

routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)

export {routes}