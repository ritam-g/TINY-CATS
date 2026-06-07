import type { Request, Response } from "express";
import { testMcpService } from "../services/test-mcp.service.ts";

export async function testMcpController(req: Request, res: Response) {
    const client =await testMcpService()

    const tools=await client.listTools()

    const result=await client.callTool({
        name:"getAllCats",
        arguments:{}
    })

    return res.status(200).json({
        message:"MCP test successful",
        tools,
        result
    })
}