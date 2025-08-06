import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/appError";
import { ZodError } from "zod"

export function errorHandling(error: any, request: Request, response: Response, _: NextFunction){
    if (error instanceof AppError){ // error defined by us
        return response.status(error.statusCode).json({message: error.message})
    }

    if (error instanceof ZodError) return response.status(400).json({ message: "validation error", issues: error.format() })

    return response.status(500).json({message: error.message}) // return generic error
}