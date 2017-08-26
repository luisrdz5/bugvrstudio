// src/components/About/index.js
import React, { Component } from 'react';
/*import classnames from 'classnames';*/

import './style.css';

export default class Cuerpo extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
/*    const { className, ...props } = this.props;*/
    return (
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12">
                <div className="icon-block col s6  offset-s3 ">
                  <h5 className="center">Iniciar Sesión</h5>
                  <div className="collection">
                    <a href="#!" className="collection-item">Iniciar Sesión con Facebook <span className="badge"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></span></a>
                    <a href="#!" className="collection-item">Iniciar Sesión con Twitter <span className="badge"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></span></a>
                    <a href="#!" className="collection-item">Iniciar Sesión con Google <span className="badge"><i className="fa fa-google fa-2x" aria-hidden="true"></i></span></a>
                    <a href="#!" className="collection-item">Iniciar Sesión con Correo Electrónico <span className="badge"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></span></a>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}