import React from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends React.Component {
  render() {
    return (
      <ul className="nav">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    );
  }
}

export default NavMenu;
