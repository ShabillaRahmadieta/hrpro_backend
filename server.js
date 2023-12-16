import express from "express";
import authentication from "./routes/auth-route.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todo from "./routes/todo-route.js";

dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => console.log(error));

db.once("open", () => console.log("database connected"));

const app = express();

app.use(express.json());

app.use("/api", authentication);

app.use("/api/todo", todo);

app.listen(process.env.PORT, () => console.log("Server started"));
