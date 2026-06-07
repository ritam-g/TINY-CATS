import axios from "axios"

export async function getAllCatsTool(): Promise<any[]> {
    // Implementation for getting all cats
    const response = await axios.get("http://localhost:3000/api/cats/search/all")
    return response.data.data
}