import { Request, Response, NextFunction } from "express";
import { IMovieRepository } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const checkIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const repository: IMovieRepository = AppDataSource.getRepository(Movie);

    const idMovie = parseInt(req.params.idMovie);

    const movieFound = await repository.findOne({
        where: { id: idMovie }
    });

    if (!movieFound) {
        throw new AppError("Movie not found", 404);
    };

    return next();
};