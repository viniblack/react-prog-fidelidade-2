import React from 'react';

import Header from '../components/Pattern/Header';

import HowItWorksBox from '../components/HowItWorks/HowItWorksBox';

import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function HowItWorks() {
  return (
    <div className="App">
      <Header />
      <HowItWorksBox />
      <Navigation />
    </div>
  );
}

export default HowItWorks;
