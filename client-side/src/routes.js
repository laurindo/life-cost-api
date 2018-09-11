import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Landing from './pages/landing';

const RoutersExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/landing">Landing</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Landing} />
      <Route path="/landing" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default RoutersExample;
