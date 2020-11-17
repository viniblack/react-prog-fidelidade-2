import React from 'react';

import Header from '../components/Pattern/Header';
import ByFidelizarMaisBox from '../components/ByFidelizarMais/ByFidelizarMaisBox';

import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function ByFidelizarMais() {
  return (
    <div className="App">
      <Header />
      <ByFidelizarMaisBox />
      <Navigation />
    </div>
  );
}

export default ByFidelizarMais;
