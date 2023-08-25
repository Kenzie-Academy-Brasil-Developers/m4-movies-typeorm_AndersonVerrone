import { Router } from "express";
import { checkIdExists, checkNameExists, validateBody } from "../middlewares";
import { moviesCreateSchema, moviesUpdateSchema } from "../schemas";
import { moviesControllers } from "../controllers";

export const moviesRouter: Router = Router();

moviesRouter.use("/:idMovie", checkIdExists);

moviesRouter.post("", checkNameExists, validateBody(moviesCreateSchema), moviesControllers.create);

moviesRouter.get("", moviesControllers.read);

moviesRouter.patch("/:idMovie", validateBody(moviesUpdateSchema), checkNameExists, moviesControllers.update);

moviesRouter.delete("/:idMovie", moviesControllers.destroy);