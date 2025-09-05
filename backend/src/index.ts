import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import dashboard from './routes/index.js'
import mongoose from "mongoose";
dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";


app.use(cors({
  origin: process.env.FRONTEND_URL, 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, 
}));
app.use(express.json())

app.use("/api", dashboard);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Node!");
});

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

start();
