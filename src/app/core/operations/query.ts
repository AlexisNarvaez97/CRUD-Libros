import gql from "graphql-tag";

export const listBooks = gql`
query {
    books {
    id
    name
    editorial
    registerDate
    author {
      id
      name
      lastname
      email
    }
  }
}
`;


export const listAuthors = gql `
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
