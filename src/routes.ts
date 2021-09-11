import {Express, Request, Response} from "express";
import {getBookHandler} from "./controller/book.controller";

export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.get("/books", getBookHandler);
    app.get("/books:id", getBookHandler);
}
