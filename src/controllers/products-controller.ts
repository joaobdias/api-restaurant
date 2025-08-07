import { NextFunction, Request, Response } from "express";
import { knex } from "@/database/knex"
import { AppError } from "@/utils/appError"; 
import { z } from "zod"

// this script defines what really happens when the user try to acess the endpoint

class ProductController { // method which returns the index (all values related to product controller) in Product routes
    async index ( request: Request, response: Response, next: NextFunction){
        try {
            const {name} = request.query
            const products = await knex<ProductRepository>("products")
            .select()
            // .whereLike("name", `%${name ?? ""}%`)
            // .orderBy("name")
            
            return response.json(products)
        } catch (error) {
            next(error) // send to error treatment middleware
        }
    }

    async create (request: Request, response: Response, next: NextFunction){
        try {
            
            const bodySchema = z.object({
                name: z.string().trim().min(6), // zod to validate data (name and price)
                price: z.number().gt(0)
            })

            const { name, price } = bodySchema.parse(request.body)

            await knex<ProductRepository>("products") // using the new created type - product-repository
            .insert({name, price})

            return response.status(201).json()

        } catch (error) {
            next(error)
        }
    }

    async update (request: Request, response: Response, next: NextFunction){
        try {

            const id = z.string()
            .transform((value) => Number(value)) // zod validate from string
            .refine((value) => !isNaN(value))
            .parse(request.params.id)

            const bodySchema = z.object({
                name: z.string().trim().min(6), // zod to validate data (name and price) from object
                price: z.number().gt(0)
            })

            const {name, price} = bodySchema.parse(request.body)

            const product = await knex<ProductRepository>("products")
            .select()
            .where({id})
            .first() // reduce options

            if (!product) { // go directly to catch with this
                throw new AppError("Product not found")
            }

            await knex<ProductRepository>("products")
            .update({name, price, updated_at: knex.fn.now()})
            .where({id})

            return response.json()

        } catch (error) {

            next(error) // go to server.ts -> error handling with specific error
        }
    }

    async remove (request: Request, response: Response, next: NextFunction){
        try {
            const id = z.string().transform((value) => Number(value)) // zod validate from string
            .refine((value) => !isNaN(value))
            .parse(request.params.id)

            const product = await knex<ProductRepository>("products")
            .select()
            .where({id})
            .first() // reduce options

            if (!product) {
                throw new AppError("Product not found")
            }

            await knex<ProductRepository>("products").delete().where({id})

            return response.json()
        } catch (error) {
            next(error)
        }
    }
}

export { ProductController }