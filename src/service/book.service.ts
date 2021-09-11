import {Book, BookDocument, documentToBook, documentToSimpleBook, SimpleBook} from "../model/book.model";
import {Utility} from "../util/utility";

const booksDS: Array<BookDocument> = Utility.readFromFile('dummy-books.json');

export async function getBooks(from: number = 0, to: number = 50): Promise<Array<SimpleBook>> {
    return booksDS.filter(item => item.isbn).slice(from, to).map(documentToSimpleBook);
}

export async function getBookById(bookId: string): Promise<Book | null> {
    const found = booksDS.find(book => book.isbn === bookId);
    if (found) {
        return documentToBook(found);
    }
    return null;
}
