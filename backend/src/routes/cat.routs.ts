import { Router } from "express";
import { createCatController, getAllCatController, getquerycatController, getSingleCatController } from "../controller/cat.controller.ts";

const catRouter = Router();

catRouter.post('/create', createCatController)
catRouter.get('/', getquerycatController)
catRouter.get('/serch/all', getAllCatController)
catRouter.get('/:id', getSingleCatController)
catRouter.post('/recommend', (req, res) => {
})

export default catRouter