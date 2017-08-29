import React, { Component } from 'react';
import logo from './bugvrlogo.png';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <nav className="orange darken-1" role="navigation">
        <div className="nav-wrapper container ">    
          <Link  to="/">
            <img src={logo} className="App-logo" alt="logo" />     BugVRStudio
          </Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/"> Inicio </Link></li>
            <li><Link to="/blog"> Blog </Link></li>
            <li><Link to="/portafolio"> Portafolio </Link></li>
          </ul>
          <ul id="nav-mobile" className="side-nav">
            <li><Link to="/"> Inicio </Link></li>
            <li><Link to="/blog"> Blog </Link></li>
            <li><Link to="/portafolio"> Portafolio </Link></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      );
  }
}

export default Header;