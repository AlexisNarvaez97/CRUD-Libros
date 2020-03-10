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
