// src/components/About/index.js
import React, { Component } from 'react';
import Header from '../Header';
import CuerpoLogin from '../CuerpoLogin';
import Footer from '../Footer';


import './style.css';

export default class Blog extends Component {

  render() {
    return (
        <div className="Blog">
          <Header />
          <CuerpoLogin />
          <Footer />
        </div> 
    );
  }
}