import React from 'react';

import AwardsBox from '../components/AwardsBox';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AwardsBox />
      <Navigation />
    </div>
  );
}

export default App;
