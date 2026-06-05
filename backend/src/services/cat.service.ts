import catModel from "../model/Cat.model.ts";

export async function createCatService(payload: object) {
    return await catModel.create(payload);
}
export async function getAllCatService() {
    return await catModel.find();
}
export async function getSingleCatService(id: string) {
    return await catModel.findById(id);
}
export async function getRecomandedCatService(apartmentFriendly: boolean, kidsFriendly: boolean) {
    return await catModel.find({
        apartmentFriendly,
        kidsFriendly
    })
}
/**  
 * @description it will serch on cat name and breed 
 * @param {string} query
 * @returns {Promise<ICat[]>}
 */
export async function getQueryCatService(query: string) {

    return await catModel.find({
        $or: [
            { name: { $regex: query, $options: 'i' } },
            { breed: { $regex: query, $options: 'i' } },
        ]
    })
}


