import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../App.css';
import ExtractBox from '../components/ExtractBox';

function Extract() {
  return (
    <div className="App">
      <Header />
      <ExtractBox />
      <Navigation />
    </div>
  );
}

export default Extract;
