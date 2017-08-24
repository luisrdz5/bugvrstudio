import React, { Component } from 'react';
class Body extends Component {

  render() {
    return (
  <div className="container">
    <div className="section">

      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">3d_rotation</i></h2>
            <h5 className="center">Realidad Virtual</h5>
            <p className="light">Es cuando la persona tiene una inmersión en un entorno de Escenas y objetos de aparencia real que son generados por Tecnologia.</p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">smartphone</i></h2>
            <h5 className="center">Realidad Aumentada</h5>
            <p className="light">Es la visualización de un entorno real a travez de un dispositivo tecnologico (Actualmente Smartphones) en el cual se monta una realidad visual generada por la tecnologia. </p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center light-blue-text"><i className="material-icons">visibility</i></h2>
            <h5 className="center">Realidad Mixta</h5>

            <p className="light">Es la combinación de Realidad Virtual y Realidad Aumentada. Por medio de dispositivos se tiene la sensación de estar en el mundo real interactuando con objetos o personas generadas por tecnologia.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      );
  }
}

export default Body;