const { BookType, BookResolver } = require('./types/book-type');
const { CategoryType, CategoryResolver, CategoryMutation } = require('./types/category-type');
const { CountryType, CountryResolver } = require('./types/country-type');
const { FoodType, FoodResolver, FoodMutation } = require('./types/food-type');

// Here is my root of all GraphQL queries
const Query = `
  type Query {
    countries(countryCode: String): [Country]
    books: [Book]
    categories: [Category]
    foods: [Food]
  }

  type Mutation {
    createCategory(id: String!, name: String!): [Category]
    createFood(name: String!, quantity: Float!, price: Float!, category: String!, subCategory: String!, portionQuantity: Float!, portionType: String!, currency: String!, country: String!, state: String!, city: String!, neighbourhood: String): [Food]
  }
`;

const resolvers = {
  Query: {
    ...CountryResolver,
    ...BookResolver,
    ...CategoryResolver,
    ...FoodResolver
  },
  Mutation: {
    ...CategoryMutation,
    ...FoodMutation
  }
};

exports.typeDefs = [ Query, FoodType, CountryType, BookType, CategoryType ];
exports.resolvers = resolvers;
