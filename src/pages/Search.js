import React from 'react';

import Header from '../components/Pattern/Header';

import Navigation from '../components/Pattern/Navigation';
import '../App.css';

function Search() {
  return (
    <div className="App">
      <Header />
      <p className="test">
        Busca
      </p>
      <Navigation />
    </div>
  );
}

export default Search;
