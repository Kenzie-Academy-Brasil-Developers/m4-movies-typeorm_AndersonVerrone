import { Request, Response, NextFunction } from "express";
import { IMovieRepository } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const checkNameExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const repository: IMovieRepository = AppDataSource.getRepository(Movie);

    const name = req.body.name;

    if ( name ) {
        const nameFound = await repository.exist({
            where: { name: name },
        });

        if ( nameFound ) {
            throw new AppError("Movie already exists.", 409);
        };
    };

    return next();
};