import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex"
import { AppError } from "@/utils/appError"; 
import { z } from "zod"

class TableController {

    async index ( request: Request, response: Response, next: NextFunction){
        try {

            const tables = await knex<TableRepository>("tables")
            .select()
            // .whereLike("name", `%${name ?? ""}%`)
            // .orderBy("name")
            
            return response.json(tables)
        } catch (error) {
            next(error) // send to error treatment middleware
        }
    }
}

export { TableController }