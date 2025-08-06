import { Router } from "express"

import {productsRoutes} from "./products-routes"

// this file calls the script routes related

const routes = Router()
routes.use("/products", productsRoutes)

export {routes}