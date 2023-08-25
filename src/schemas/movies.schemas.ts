import { z } from "zod";

const moviesSchema = z.object({
    id: z.number(),
    name: z.string().min(1).max(50),
    description: z.string().nullable().optional(),
    duration: z.number().positive().int(),
    price: z.number().positive().int(),
});

const moviesCreateSchema = moviesSchema.omit({ id: true });

const moviesReadSchema = moviesSchema.array();

const moviesUpdateSchema = moviesSchema.partial();

const moviesSortSchema = z.enum([ "id", "duration", "price" ]).default( "id" );

const moviesPaginationSchema = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number().min(0),
    data: moviesReadSchema,
});

export {
    moviesSchema,
    moviesCreateSchema,
    moviesReadSchema,
    moviesUpdateSchema,
    moviesSortSchema,
    moviesPaginationSchema,
}