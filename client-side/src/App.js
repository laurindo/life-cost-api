import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import ExhangeRate from './ExchangeRates';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <video autoPlay={true} loop="" muted={true} className="video-full" id="bgvideo">
            <source src="https://ak03-video-cdn.slidely.com/promoVideos/videos/5b/96/5b96c11f7a97fd9706829fd9/preview.mp4?dv=3" type="video/mp4" />
          </video>
          <ExhangeRate />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
