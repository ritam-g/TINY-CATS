import axios from "axios";

export async function recommendCatsTool(apartmentFriendly: boolean, kidsFriendly: boolean) {
    // here will be the recommend call logig right
    const response = await axios.post("http://localhost:3000/api/aiRecommend/ask", {
        apartmentFriendly,
        kidsFriendly
    })

    return response.data.data
}