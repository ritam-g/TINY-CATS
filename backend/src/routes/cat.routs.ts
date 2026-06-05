import { Router } from "express";
import { createCatController } from "../controller/cat.controller.ts";

const catRouter = Router();

catRouter.post('/create', createCatController)
catRouter.get('/', (req, res) => {
})
catRouter.get('/serch/all', (req, res) => {
})
catRouter.get('/:id', (req, res) => {
})
catRouter.post('/recommend', (req, res) => {
})

export default catRouter