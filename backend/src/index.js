import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.routes.js";
import cors from "cors";
import path from "path";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";
dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();
app.use(express.json());

app.use(cookieParser());//allows us to parse the cookie

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.get("/",(req,res)=>{
  res.send('Hello from backend!');
  }
)


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
});