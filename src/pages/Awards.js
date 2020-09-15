import React from 'react';

import Header from '../components/Pattern/Header';
import AwardsBox from '../components/Awards/AwardsBox';
import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function Awards() {
  return (
    <div className="App">
      <Header />
      <AwardsBox />
      <Navigation />
    </div>
  );
}

export default Awards;
