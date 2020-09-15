import React from 'react';

import Header from '../components/Pattern/Header';
import Navigation from '../components/Pattern/Navigation';
import '../App.css';
import ExtractBox from '../components/Extract/ExtractBox';

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
