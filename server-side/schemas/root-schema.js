const { BookType, BookResolver } = require('./types/book-type');
const { NameType, NameResolver, NameMutation } = require('./types/name-type');
const { CountryType, CountryResolver } = require('./types/country-type');

// Here is my root of all GraphQL queries
const Query = `
  type Query {
    countries(countryCode: String): [Country]
    books: [Book]
    names: [Name]
  }

  type Mutation {
    createName(name: String!, lastname: String!): [Name]
  }
`;

const resolvers = {
  Query: {
    ...CountryResolver,
    ...BookResolver,
    ...NameResolver
  },
  Mutation: {
    ...NameMutation
  }
};

exports.typeDefs = [ Query, CountryType, BookType, NameType ];
exports.resolvers = resolvers;
