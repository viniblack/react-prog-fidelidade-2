import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routers from './routers';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routers />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
