const express = require("express");
import { Request, Response } from "express";
import quizQuestions from "./quizQuestions";
const app = express();

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello, world!");
});

app.get("/quiz", (req: Request, res:Response) => {
    res.status(200).json(quizQuestions)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});