'use strict';

var _schemas = require('./schemas');

var _require = require('apollo-server'),
    ApolloServer = _require.ApolloServer;

var server = new ApolloServer({ schema: _schemas.schema });

server.listen().then(function (_ref) {
  var url = _ref.url;

  console.log('\uD83D\uDE80  Server ready at ' + url);
});
//# sourceMappingURL=index.js.map