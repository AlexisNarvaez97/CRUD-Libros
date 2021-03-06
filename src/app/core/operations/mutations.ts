import gql from "graphql-tag";

export const registerA = gql`
  mutation addAuthor($author: AuthorInput) {
    registerAuthor(author: $author) {
      status
      message
      author {
        id
        name
        lastname
        email
        registerDate
      }
    }
  }
`;

export const updateAuthorInput = gql`
  mutation updateAuth($updateAuthor: UpdateAuthInput, $id: Int!) {
    updateAuthor(id: $id, updateAuthor: $updateAuthor) {
      status
      message
    }
  }
`;

export const deleteA = gql `
  mutation deleteAuthor($id: Int!) {
    deleteAuthor(id: $id) {
      status
      message
    }
  }
`;

export const registerB = gql`
  mutation addBook($book: BookInput) {
    registerBook(book: $book) {
      status
      message
      book {
        id
        name
        editorial
        registerDate
        author_id
        year
        language
      }
    }
  }
`;

export const updateBookInput = gql`
  mutation updateBook($updateBook: UpdateInput, $id: Int!) {
  updateBook(id: $id, updateBook: $updateBook) {
    status
    message
  }
}
`;


export const deleteB = gql `
  mutation deleteBook($id: Int!) {
    deleteBook(id: $id) {
      status
      message
    }
  }
`;
