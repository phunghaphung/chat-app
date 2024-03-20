import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import connectDB from "./config/connectDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";
import path from "path";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (res, req) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

server.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
