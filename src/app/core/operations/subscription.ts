import gql from "graphql-tag";

export const changeBooks = gql`
  subscription {
    changeBooks {
      id
      name
      editorial
      year
      language
      registerDate
      author {
        id
        name
      }
    }
  }
`;

export const changeAuthors = gql`
  subscription {
    changeAuthors {
      id
      name
      lastname
      email
      registerDate
    }
  }
`;
