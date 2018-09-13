import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import RouterExample from './config/routes';
import store from './config/store';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <div>
            <RouterExample />
          </div>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
