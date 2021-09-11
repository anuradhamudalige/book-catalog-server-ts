import { Request, Response } from "express";
import {getBookById, getBooks} from "../service/book.service";

export async function getBookHandler(req: Request, res: Response) {
    const id = req.params.id;
    let from: any = req.query.from;
    let to: any = req.query.to;

    from = from ? parseInt(from.toString(), 10) : from;
    to = to ? parseInt(to.toString(), 10) : to;

    const result = id
        ? await getBookById(id)
        : await getBooks(from, to);

    res.send(result);
}
