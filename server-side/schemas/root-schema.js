const { BookType, BookResolver } = require('./types/book-type');
const { NameType, NameResolver, NameMutation } = require('./types/name-type');
const { CountryType, CountryResolver } = require('./types/country-type');
const { FoodType, FoodResolver, FoodMutation } = require('./types/food-type');

// Here is my root of all GraphQL queries
const Query = `
  type Query {
    countries(countryCode: String): [Country]
    books: [Book]
    names: [Name]
    foods: [Food]
  }

  type Mutation {
    createName(name: String!, lastname: String!): [Name]
    createFood(name: String!, quantity: Float!, price: Float!, category: String!, subCategory: String!, portionQuantity: Float!, portionType: String!, currency: String!, country: String!, state: String!, city: String!, neighbourhood: String): [Food]
  }
`;

const resolvers = {
  Query: {
    ...CountryResolver,
    ...BookResolver,
    ...NameResolver,
    ...FoodResolver
  },
  Mutation: {
    ...NameMutation,
    ...FoodMutation
  }
};

exports.typeDefs = [ Query, FoodType, CountryType, BookType, NameType ];
exports.resolvers = resolvers;
