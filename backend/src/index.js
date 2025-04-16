import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.routes.js";
import cors from "cors"
import { connectDB } from "./lib/db.js";
dotenv.config();
const app = express();

app.use(express.json());

app.use(cookieParser());//allows us to parse the cookie

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

const PORT = process.env.PORT;

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
});