import 'express-async-errors';
import express, { Application } from "express";
import { handleErrors } from './errors';
import { moviesRouter } from './routers';

const app: Application = express();

app.use( express.json() );

app.use("/movies", moviesRouter);

app.use( handleErrors );

export default app;