import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


const app = express();
const port = process.env.PORT || 4000;

//midleware
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(",")
  : ["http://localhost:5173"];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB connect
connectDB();

// routes
app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("APIWorking");
});
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
