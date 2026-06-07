import { Router } from "express";
import { testMcpController } from "../controller/test-mcp.controller.ts";

const testMcpRoute = Router();

testMcpRoute.get('/test-mcp', testMcpController)

export default testMcpRoute