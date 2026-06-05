import app from "./app.ts";
import connectDB from "./config/db.ts";

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    await connectDB()
    console.log(`Server is running on port ${port}`);
});