import express, { Request, Response } from "express";
import cors from 'cors';

const PORT = 5000;

const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Node!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
