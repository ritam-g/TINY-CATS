import type { Request, Response } from "express";
import { testMcpService } from "../services/test-mcp.service.ts";
import main from "../services/ai.service.ts";

export async function testMcpController(req: Request, res: Response) {
    const client = await testMcpService()

    const tools = await client.listTools()

    const catData = await client.callTool({
        name: "getCatBreedRecommendations",
        arguments: {
            apartmentFriendly: true,
            kidsFriendly: true
        }
    })
    

    const prompt = `
    Avaialble Cats
    ${JSON.stringify(catData.content[0].text)}
    recommend me a cat breed that is good for apartment and good with kids
    `

    const aiResponse = await main(prompt)

    return res.status(200).json({
        message: "MCP test successful",
        tools,
        result: aiResponse
    })
}