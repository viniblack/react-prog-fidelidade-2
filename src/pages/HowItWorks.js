import React from 'react';

import Header from '../components/Pattern/Header';

import AwardsImage from '../components/Awards/AwardsImage';
import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function HowItWorks() {
  return (
    <div className="App">
      {/* <Header /> */}
      <AwardsImage />
      <Navigation />
    </div>
  );
}

export default HowItWorks;
