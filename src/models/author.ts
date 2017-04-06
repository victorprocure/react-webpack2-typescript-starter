import { IBook } from './book';

export interface IAuthor {
    name: string,
    image: string,
    books: IBook[];
}