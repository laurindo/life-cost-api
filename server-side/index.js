const { ApolloServer } = require('apollo-server');
import { schema } from './schemas';
const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
