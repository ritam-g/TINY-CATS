import axios from "axios"

export const recommendCats = async (kidsFriendly: boolean, apartmentFriendly: boolean) => {

    const response = await axios.post('http://localhost:3000/api/cats/recommend', {
        kidsFriendly,
        apartmentFriendly
    })

    return response.data

}

