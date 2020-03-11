export interface Book {

    id: number;
    name: string;
    editorial: string;
    registerDate: string;
    year: string;
    language: string;
    author: Autor;
}

export interface Autor {
    id: number;
    name: string;
    lastname: string;
    email: string;
}