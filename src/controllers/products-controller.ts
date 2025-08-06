import { NextFunction, Request, Response } from "express";

// this script defines what really happens when the user try to acess the endpoint

class ProductController { // method which returns the index (all values related to product controller) in Product routes
    async index ( request: Request, response: Response, next: NextFunction){
        try {
            
            return response.json({message: "Ok"})
        } catch (error) {
            next(error)
        }
    }

}

export { ProductController }