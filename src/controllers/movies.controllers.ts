import { Request, Response } from "express";
import { IMovieRead, IMovieUpdate, IMoviesCreate } from "../interfaces";
import { moviesServices } from "../services";
import { moviesSortSchema } from "../schemas";

const create = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const movie: IMoviesCreate = req.body;

    const newMovie = await moviesServices.create(movie);

    return res.status(201).json(newMovie);
};

const read = async (
    req: Request,
    res: Response
): Promise<Response<IMovieRead>> => {
    const {
        page,
        perPage,
        order,
        sort
    } = req.query;

    const newSort = moviesSortSchema.parse(sort);

    const movies = await moviesServices.read(page, perPage, order, newSort);

    return res.status(200).json(movies);
};

const update = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const payload: IMovieUpdate = req.body;

    const idMovie: number = parseInt( req.params.idMovie );

    const movie = await moviesServices.update( payload, idMovie );

    return res.status(200).json(movie);
};

const destroy = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const idMovie = parseInt( req.params.idMovie );

    await moviesServices.destroy(idMovie);

    return res.status(204).send();
};

export default {
    create,
    read,
    update,
    destroy
}