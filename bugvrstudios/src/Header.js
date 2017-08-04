import React, { Component } from 'react';
import logo from './bugvrlogo.png';

class Header extends Component {
  render() {
    return (
      <nav className="deep-orange darken-1" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">
            <img src={logo} className="App-logo" alt="logo" /> BugVRStudio
            </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Portafolio</a></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Portafolio</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      );
  }
}

export default Header;