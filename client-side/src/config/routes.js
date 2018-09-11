import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Landing from '../pages/landing';
import Contact from '../pages/contact';
import Cost from '../pages/cost';

const RoutersExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/cost" component={Cost} />
      <Route path="/landing" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default RoutersExample;
