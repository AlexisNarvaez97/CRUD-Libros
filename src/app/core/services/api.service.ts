import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { listBooks, listAuthors, author, book } from '../operations/query';
import { map } from "rxjs/operators";
import { registerA, updateAuthorInput, deleteA, registerB, updateBookInput } from '../operations/mutations';
import { RegisterAuthor } from '../../shared/models/author.interface';
import { PostBook } from '../../shared/models/book.model';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  getBooks() {
    return this.apollo
      .watchQuery({
        query: listBooks,
        fetchPolicy: "network-only"
      })
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.books;
        })
      );
  }

  getAuthors() {
    return this.apollo
    .watchQuery({
      query: listAuthors,
      fetchPolicy: "network-only"
    })
    .valueChanges.pipe(
      map((result: any) => {
        return result.data.authors;
      })
    );
  }

  registerAuthor(author: RegisterAuthor) {
    return this.apollo
    .mutate({
      mutation: registerA,
      variables: {
        author
      }
    });
  }

  registerBook(book: PostBook) {
    return this.apollo
    .mutate({
      mutation: registerB,
      variables: {
        book
      }
    });
  }

  getAuthor(id: number) {
    return this.apollo
    .watchQuery({
      query: author,
      variables: {
        id
      },
      fetchPolicy: "network-only"
    })
    .valueChanges.pipe(
      map((result: any) => {
        return result.data.author;
      })
    );
  }

  getBook(id: number) {
    return this.apollo
    .watchQuery({
      query: book,
      variables: {
        id
      },
      fetchPolicy: "network-only"
    })
    .valueChanges.pipe(
      map((result: any) => {
        return result.data.book;
      })
    );
  }

  updateAuthor(id: number, updateAuthor: any) {
    console.log('AuthorUpdate', updateAuthor);
    return this.apollo
    .mutate({
      mutation: updateAuthorInput,
      variables: {
        updateAuthor,
        id
      }
    });
  }

  updateBook(id: number, updateBook: any) {
    return this.apollo
    .mutate({
      mutation: updateBookInput,
      variables: {
        updateBook,
        id
      }
    });
  }

  deleteAuthor(id: number) {
    return this.apollo
    .mutate({
      mutation: deleteA,
      variables: {
        id
      }
    });
  }

}


export interface UpdateAuthor {
  name: string;
  lastname: string;
}