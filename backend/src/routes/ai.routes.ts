import { Router } from "express";
import { askAiController } from "../controller/ai.controller.ts";

const aiRoute = Router()

aiRoute.post('/ask',askAiController)


export default aiRoute