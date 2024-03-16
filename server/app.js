import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import connectDB from "./config/connectDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.get("/home", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
