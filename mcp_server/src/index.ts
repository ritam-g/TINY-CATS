import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { recommendCatsTool } from "./tools/recommendCats.tool.ts";

// Create server instance
const server = new McpServer({
    name: "tiny-cats-mcp-server",
    version: "1.0.0",
});


// regester the tools

server.registerTool(
    // name
    "getCatBreedRecommendations",
    // middleware
    {
        title: "Get Cat Breed Recommendations",
        description: "Get cat breed recommendations based on user preferences of apartment friendliness and kid friendliness.",
        inputSchema: z.object({
            apartmentFriendly: z.boolean(),
            kidsFriendly: z.boolean()
        }),
    },  
    // controller
    async ({ apartmentFriendly, kidsFriendly }) => {
        // here will be the logic to get the cat breed recommendations based on the user preferences
        const result = await recommendCatsTool(apartmentFriendly, kidsFriendly)
        return {
            content: [{
                type: "text",
                text: JSON.stringify(result)
            }]
        }
    }
)

// Start the server
console.log("Starting MCP Server...");

