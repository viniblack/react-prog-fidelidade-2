import React from 'react';

import Header from '../components/Pattern/Header';

import TermsUseBox from '../components/TermsUse/TermsUseBox';

import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function TermsUse() {
  return (
    <div className="App">
      <Header />
      <TermsUseBox />
      <Navigation />
    </div>
  );
}

export default TermsUse;
