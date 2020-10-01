import React from 'react';

import Header from '../components/Pattern/Header';

import Navigation from '../components/Pattern/Navigation';
import '../App.css';
import ChallengeBox from '../components/Challenge/ChallengeBox';

function Challenge() {
  return (
    <div className="App">
      <Header />
      <ChallengeBox />
      <Navigation />
    </div>
  );
}

export default Challenge;
