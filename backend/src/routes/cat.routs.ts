import { Router } from "express";
import { createCatController, getAllCatController, getquerycatController, getSingleCatController, recommendCatsController } from "../controller/cat.controller.ts";

const catRouter = Router();

catRouter.post('/create', createCatController)
catRouter.get('/', getquerycatController)
catRouter.get('/search/all', getAllCatController)
catRouter.get('/:id', getSingleCatController)
catRouter.post('/recommend', recommendCatsController)

export default catRouter