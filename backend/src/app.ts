import express from 'express';
import catRouter from './routes/cat.route.ts';
import morgan from 'morgan'
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

export default app