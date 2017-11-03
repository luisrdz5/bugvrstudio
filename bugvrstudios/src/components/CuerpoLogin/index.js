// src/components/About/index.js
import React from 'react';


import './style.css';

function CuerpoLogin () {
    return (
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12">
                <div className="icon-block col s6  offset-s3 ">
                  <h5 className="center">Iniciar Sesión</h5>
                  <div>
                    <button className="btn-large valign-wrapper orange darken-1 col s12 ">Iniciar Sesión con Facebook <i className="fa fa-facebook-official fa-2x right valign-wrapper " aria-hidden="true"></i></button>
                    <button className="btn-large valign-wrapper orange darken-1 col s12">Iniciar Sesión con Twitter <i className="fa fa-twitter-square fa-2x right valign-wrapper" aria-hidden="true"></i></button>
                    <button className="btn-large valign-wrapper orange darken-1 col s12" >Iniciar Sesión con Google <i className="fa fa-google fa-2x right valign-wrapper" aria-hidden="true"></i></button>
                    <button className="btn-large valign-wrapper orange darken-1 col s12">Iniciar Sesión con Correo Electrónico <i className="fa fa-envelope fa-2x right valign-wrapper" aria-hidden="true"></i></button>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}


export default CuerpoLogin;