const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Name {
    name: String
    lastname: String
  }

  type Query {
    books: [Book]
    names: [Name]
  }
`;

export default typeDefs;
