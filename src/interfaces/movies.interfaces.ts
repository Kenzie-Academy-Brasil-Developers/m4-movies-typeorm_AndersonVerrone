import { z } from "zod";

import { 
    moviesCreateSchema, 
    moviesPaginationSchema, 
    moviesReadSchema, 
    moviesSchema, 
    moviesSortSchema, 
    moviesUpdateSchema 
} from "../schemas";

import { 
    DeepPartial, 
    Repository 
} from "typeorm";

import { Movie } from "../entities";

type IMovie = z.infer<typeof moviesSchema>;
type IMoviesCreate = z.infer<typeof moviesCreateSchema>;
type IMovieUpdate = DeepPartial<Movie>;
type IMovieUpdateBody = z.infer<typeof moviesUpdateSchema>;
type IMovieRepository= Repository<Movie>;
type IMovieRead = z.infer<typeof moviesReadSchema>;
type IMovieSort = z.infer<typeof moviesSortSchema>;
type IMoviePagination = z.infer<typeof moviesPaginationSchema>;

export {
    IMovie,
    IMoviesCreate,
    IMovieUpdate,
    IMovieUpdateBody,
    IMovieRepository,
    IMovieRead,
    IMovieSort,
    IMoviePagination
};