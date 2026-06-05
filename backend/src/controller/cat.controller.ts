import type { Request, Response } from "express";
import { createCatService, getAllCatService, getQueryCatService, getRecomandedCatService, getSingleCatService } from "../services/cat.service.ts";

export async function createCatController(req: Request, res: Response) {
    try {
        console.log(req.body)
        let result = await createCatService(req.body!)
        return res.status(201).json({
            message: "cat created successfully",
            data: result,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}
export async function getAllCatController(req: Request, res: Response) {
    const result = await getAllCatService()
    return res.status(200).json({
        message: "cat fetched successfully",
        data: result,
        success: true
    })
}
export async function getSingleCatController(req: Request, res: Response) {
    const catId = req.params.id as string
    const result = await getSingleCatService(catId)
    return res.status(200).json({
        message: "cat fetched successfully",
        data: result,
        success: true
    })
}

export async function getquerycatController(req: Request, res: Response) {
    const query = req.query.q as string

    const result = await getQueryCatService(query)
    return res.status(200).json({
        message: "cat fetched successfully",
        data: result,
        success: true
    })
}
export async function recommendCatsController(req: Request, res: Response) {
    const { apartmentFriendly,
        kidsFriendly } = req.body

    const result = await getRecomandedCatService(apartmentFriendly, kidsFriendly)
    return res.status(200).json({
        message: "cat fetched successfully",
        data: result,
        success: true
    })
}

