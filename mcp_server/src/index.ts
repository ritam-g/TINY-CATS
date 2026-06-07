import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { recommendCatsTool } from "./tools/recommendCats.tool.ts";
import { getAllCatsTool } from "./tools/getAllCats.tools.ts";

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
server.registerTool(
    // name
    "getAllCats",
    // middleware
    {
        title: "Get All Cats",
        description: "Fetch a list of all cat breeds with their details.",
        inputSchema: z.object({}),
    },
    // controller
    async () => {
        // here will be the logic to get the cat breed recommendations based on the user preferences
        const result = await getAllCatsTool()
        return {
            content: [{
                type: "text",
                text: JSON.stringify(result)
            }]
        }
    }
)

const transport = new StdioServerTransport()

server.connect(transport)
// Start the server
console.log("Starting MCP Server...");

