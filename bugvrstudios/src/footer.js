import React, { Component } from 'react';

class footer extends Component {
  render() {
    return (
  <footer className="page-footer orange">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Bug Vr Studios</h5>
          <p className="grey-text text-lighten-4">
            Somos un grupo de profesionales entusiastas especialistas en Realidad Virtual, Realidad aumentada y Realidad Mixta.  
          </p>
        </div>
        <div className="col l3 s12">
          <ul>
            <li><a className="white-text" href="#!">Desarrollo de Experiencias</a></li>
            <li><a className="white-text" href="#!">Contactanos</a></li>
            <li><a className="white-text" href="#!">Privacidad</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Conecta con Nosotros</h5>
          <ul>
            <li><a className="white-text" href="https://www.facebook.com/Bugvrstudios-1883871325207863/"><i className="fa fa-facebook-official fa-3" aria-hidden="true"></i>  Bugvrstudios</a></li>
            <li><a className="white-text" href="https://www.youtube.com/channel/UCAMQ_U-QdmoNIJdt9vSExUQ"><i className="fa fa-youtube-play fa-3" aria-hidden="true"></i>  Bugvrstudios</a></li>            
            <li><a className="white-text" href="https://twitter.com/bugvrstudios"><i className="fa fa-twitter fa-3" aria-hidden="true"></i>  @bugvrstudios</a></li>
            <li><a className="white-text" href="https://www.instagram.com/bugvrstudios/"><i className="fa fa-instagram fa-3" aria-hidden="true"></i>  bugvrstudios</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>


      );
  }
}

export default footer;	