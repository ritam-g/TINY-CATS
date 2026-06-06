import { Router } from "express";
import { aiRecommendController } from "../controller/aiRecomanded.controller.ts";

const aiRecomandedRoute = Router()

aiRecomandedRoute.post('/ask', aiRecommendController)


export default aiRecomandedRoute