import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { listBooks, listAuthors, author } from '../operations/query';
import { map } from "rxjs/operators";
import { registerA, updateAuthorInput } from '../operations/mutations';
import { RegisterAuthor } from '../../shared/models/author.interface';

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
}


export interface UpdateAuthor {
  name: string;
  lastname: string;
}