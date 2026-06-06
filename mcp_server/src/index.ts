import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { recommendCats } from "./tools/recommendCats.tool.ts";

const NWS_API_BASE = "https://api.weather.gov";
const USER_AGENT = "weather-app/1.0";

// Create server instance
const server = new McpServer({
    name: "tiny-cats",
    version: "1.0.0",
});

server.registerTool("recommendCats", {
    title: "Recommend Cats",
    description: "Recommends cat breeds based on user preferences for kids and apartment living.",
    inputSchema: {
        kidsFriendly: z.boolean().describe("Indicates if the user prefers cat breeds that are good with kids."),
        apartmentFriendly: z.boolean().describe("Indicates if the user prefers cat breeds that are suitable for apartment living.")
    }

},
    async ({ kidsFriendly, apartmentFriendly }) => {
        const result = await recommendCats(kidsFriendly, apartmentFriendly)
        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify(result)
                }
            ]
        }
    }
)

const transport = new StdioServerTransport();
await server.connect(transport);

console.log("Starting MCP Server...")