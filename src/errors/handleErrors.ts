
import { Request, Response, NextFunction } from "express";

import { z } from "zod";
import { AppError } from "./AppError";



export const handleErrors = (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    
    if ( err instanceof AppError ) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    };

    if ( err instanceof z.ZodError ) {
        return res.status(400).json({ 
            message: err.flatten().fieldErrors, 
        });
    };

    console.log(err);

    return res.status(500).json({
        message: "Internal server error.",
    })    
}