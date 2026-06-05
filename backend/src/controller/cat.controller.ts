import { createCatService } from "../services/cat.service.ts";

export async function createCatController(req: Request, res: Response) {
    let result = await createCatService(req.body!)
    return res.status(201).json(result)
}