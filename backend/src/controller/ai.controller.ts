import type { Response, Request } from "express";
import generateContent from "../services/ai.service.ts";

export async function askAiController(req: Request, res: Response) {
    try {
        const { prompt } = req.body

        const result = await generateContent(prompt)

        return res.status(200).json({
            message: "cat fetched successfully",
            data: result,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}