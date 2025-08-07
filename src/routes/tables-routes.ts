import { Router } from "express"
import { TableController } from "@/controllers/tables-controller"

// this file calls the products router controller related

const tablesRoutes = Router()
const tablesController = new TableController()

tablesRoutes.get("/", tablesController.index)


export {tablesRoutes}