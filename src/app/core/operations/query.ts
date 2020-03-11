import gql from "graphql-tag";

export const listBooks = gql`
  query {
    books {
      id
      name
      editorial
      registerDate
      year
      language
      author {
        id
        name
        lastname
        email
      }
    }
  }
`;

export const listAuthors = gql`
  query {
    authors {
      id
      name
      lastname
      email
      registerDate
    }
  }
`;

export const author = gql`
  query author($id: Int!) {
    author(id: $id) {
      id
      name
      lastname
      email
      registerDate
    }
  }
`;

export const book = gql`
  query book($id: Int!) {
    book(id: $id) {
      id
      name
      editorial
      registerDate
      year
      language
      author_id
      author {
        id
        name
        lastname
        email
      }
    }
  }
`;
