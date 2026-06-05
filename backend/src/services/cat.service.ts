import catModel from "../model/Cat.model.ts";

export async function createCatService(payload: object) {
    return await catModel.create(payload);
}
export async function getAllCatService() {
    return await catModel.find();
}
export async function getSingleCatService(id) {
    return await catModel.findById(id);
}

