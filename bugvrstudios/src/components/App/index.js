// src/components/App/index.js
import React, { Component } from 'react';
/*import ReactDOM from 'react-dom';*/
import './style.css';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import firebase from 'firebase';
// Import routing components
/*import {Router, Route} from 'react-router';*/





class App extends Component {

	handleAuth (){
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
			.then( result => console.log(`${result.user.email} ha iniciado sesión`))
			.catch( error => console.log(`Error ${error.code} ${error.message}`))
	}
  render() {
    return (
        <div className="App">
          <Header />
          <Body />
          <Footer />
        </div>
    );
  }
}


export default App;
