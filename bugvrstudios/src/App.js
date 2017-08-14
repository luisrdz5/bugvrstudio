import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './footer';
import firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyDQzs4ohwJNWr2vjePVtuphsi5sgSuNiNo",
    authDomain: "bugvrstudio.firebaseapp.com",
    databaseURL: "https://bugvrstudio.firebaseio.com",
    projectId: "bugvrstudio",
    storageBucket: "bugvrstudio.appspot.com",
    messagingSenderId: "621054045661"
});

class App extends Component {
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
