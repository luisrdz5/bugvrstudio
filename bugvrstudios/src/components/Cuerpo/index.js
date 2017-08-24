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
              <div className="col s12 m4">
                <div className="icon-block">
                  <h5 className="center">Blog</h5>
                  <p className="light">Es cuando la persona tiene una inmersión en un entorno de Escenas y objetos de aparencia real que son generados por Tecnologia.</p>
                </div>
              </div>

              <div className="col s12 m8">
                <div className="icon-block">
                  <h5 className="center">Aqui Va el Blog</h5>
                  <p className="light">Es la visualización de un entorno real a travez de un dispositivo tecnologico (Actualmente Smartphones) en el cual se monta una realidad visual generada por la tecnologia. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}