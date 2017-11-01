// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import login from './components/login';
import NotFound from './components/NotFound';
import blog from './components/blog';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDQzs4ohwJNWr2vjePVtuphsi5sgSuNiNo",
    authDomain: "bugvrstudio.firebaseapp.com",
    databaseURL: "https://bugvrstudio.firebaseio.com",
    projectId: "bugvrstudio",
    storageBucket: "bugvrstudio.appspot.com",
    messagingSenderId: "621054045661"
});


const Routes = (props) => (
  <Router {...props}>
    <Route path='/'  component={App} />
    <Route path='/login'  component={login} />
    <Route path='/blog'  component={blog}  />
    <Route path='*'  component={NotFound} />
  </Router>
);

export default Routes;