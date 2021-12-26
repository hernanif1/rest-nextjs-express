import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import posts from "./api/posts";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", posts);

const server = app.listen(3001, () =>
  console.log("🚀 Server ready at: http://localhost:3001")
);
