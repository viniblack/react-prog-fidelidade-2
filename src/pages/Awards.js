import React from 'react';

import Header from '../components/Header';
import AwardsBox from '../components/AwardsBox';
import Navigation from '../components/Navigation';
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
