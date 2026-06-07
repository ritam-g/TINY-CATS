import express from 'express';
import catRouter from './routes/cat.route.ts';
import morgan from 'morgan'
import aiRoute from './routes/ai.routes.ts';
import aiRecomandedRoute from './routes/aiRecomanded.route.ts';
import testMcpRoute from './routes/test-mcp.route.ts';
/**  
 * @description This is the main express app
 * 
 */
const app = express();
/**  
* @description This is the middleware for the express app
*/

app.use(express.json())
app.use(morgan('dev'))
/** 
 * @description This is the route for the express app
 */
app.use('/api/cats', catRouter)
app.use('/api/ai', aiRoute)
app.use('/api/aiRecommend', aiRecomandedRoute)
app.use('/api/mcp', testMcpRoute)


export default app