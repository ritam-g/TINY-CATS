import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

let client: Client;
export async function testMcpService() {
    // my goal will be here
    //first i will create a client instance and connect it to the mcp server using the stdio transport

    const transport = new StdioClientTransport({
        command:"npx",
        args:["tsx","../mcp_server/src/index.ts"]
    })

    client = new Client({
        name: "tiny-cats-mcp-client",
        version: "1.0.0"
    })

   await client.connect(transport)

   return client
}