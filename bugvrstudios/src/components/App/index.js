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
  constructor () {
    super()
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
}

  state = {
    user: null
}

   componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
}

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log('Te has desconectado correctamente'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
}
  render() {
    return (
        <div className="App">
          <Header  appName='BugVRStudios'
          user={this.state.user}
          onAuth={this.handleAuth}
          onLogout={this.handleLogout}/>
          <Body />
          <Footer />
        </div>
    );
  }
}


export default App;
