import express from 'express';
import catRouter from './routes/cat.routs.ts';

/**  
 * @description This is the main express app
 * 
 */
const app = express();
/**  
 * @description This is the middleware for the express app
 */
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/cats', catRouter)

export default app