import type { Request, Response } from "express";
import { aiReccomendationService } from "../services/aiRecomanded.service.ts";


export async function aiRecommendController(req: Request, res: Response) {
    try {
        const { apartmentFriendly, kidsFriendly } = req.body
        const result = await aiReccomendationService(apartmentFriendly, kidsFriendly)
        return res.status(200).json({
            message: "cat fetched successfully",
            data: result,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching cat",
            success: false
        })
    }
}