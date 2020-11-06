import React from 'react';

import Header from '../components/Pattern/Header';

import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function HowItWorks() {
  return (
    <div className="App">
      <Header />
      <p className="test">
        Como Funciona
      </p>
      <Navigation />
    </div>
  );
}

export default HowItWorks;
