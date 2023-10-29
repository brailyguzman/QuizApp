const express = require("express");
import { Request, Response } from "express";
import quizQuestions from "./quizQuestions";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello, world!");
});

app.get("/quiz", (req: Request, res: Response) => {
    res.send(quizQuestions);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
