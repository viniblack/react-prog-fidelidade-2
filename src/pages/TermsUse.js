import React from 'react';

import Header from '../components/Pattern/Header';

import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function Extract() {
  return (
    <div className="App">
      <Header />
      Termos de uso
      <Navigation />
    </div>
  );
}

export default Extract;
