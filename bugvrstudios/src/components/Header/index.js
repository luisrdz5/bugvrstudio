import React from 'react';
import logo from './bugvrlogo.png';
import { Link } from 'react-router';


function Header ({ appName, user, onAuth, onLogout }) {

  function renderUserData () {
    return (
            <Link to="/Logout">
                <button
                  className='waves-effect waves-light btn blue darken-1'
                >
                  Logout
                </button>
              </Link>

    )
}
 function renderLoginButton () {
    return (
              <Link to="/login">
                <button
                  className='waves-effect waves-light btn blue darken-1'
                >
                  Login
                </button>
              </Link>
    )
  }


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
            <li>
                {user ? renderUserData() : renderLoginButton()}
            </li>
          </ul>
          <ul id="nav-mobile" className="side-nav">
            <li><Link to="/"> Inicio </Link></li>
            <li><Link to="/blog"> Blog </Link></li>
            <li><Link to="/portafolio"> Portafolio </Link></li>        
            <li>
                {user ? renderUserData() : renderLoginButton()}
            </li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
      )
}

export default Header;