export interface Book extends SimpleBook{
    pageCount: number;
    longDescription: string;
    status: string;
    categories: [];
}

export interface SimpleBook {
    id: string;
    title: string;
    date: string;
    posterUrl: string;
    shortDescription: string;
    authors: [];
}

export interface BookDocument {
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: { $date: string };
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    status: string;
    authors: [];
    categories: [];
}

export function documentToSimpleBook(document: BookDocument): SimpleBook {
    return {
        id: document.isbn,
        title: document.title,
        posterUrl: document.thumbnailUrl,
        authors: document.authors,
        shortDescription: document.shortDescription,
        date: document.publishedDate?.$date
    }
}

export function documentToBook(document: BookDocument): Book {
    return {
        ...documentToSimpleBook(document),
        pageCount: document.pageCount,
        longDescription: document.longDescription,
        status: document.status,
        categories: document.categories,
    }
}
