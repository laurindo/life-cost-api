import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import RouterExample from './routes';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <RouterExample />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
