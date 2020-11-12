import React from 'react';

import Header from '../components/Pattern/Header';
import RegulationBox from '../components/Regulation/RegulationBox';
import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function Regulation() {
  return (
    <div className="App">
      <Header />
      <RegulationBox />
      <Navigation />
    </div>
  );
}

export default Regulation;
