export interface Book {

    id: number;
    name: string;
    editorial: string;
    registerDate: string;
    year: string;
    language: string;
    author: Autor;
}

export interface PostBook {
    name: string;
    editorial: string;
    author_id: string;
    year: string;
    language: string;
}

export interface Autor {
    id: number;
    name: string;
    lastname: string;
    email: string;
}