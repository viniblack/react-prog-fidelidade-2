import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Awards from './pages/Awards';
import ByFidelizarMais from './pages/ByFidelizarMais';
import Challenge from './pages/Challenge';
import Extract from './pages/Extract';
import HowItWorks from './pages/HowItWorks';
import Regulation from './pages/Regulation';
import Search from './pages/Search';
import TermsUse from './pages/TermsUse';
import Test from './pages/Test';

const Routers = () => (
  <Switch>
    <Route path="/" component={Awards} exact />
    <Route path="/extrato" component={Extract} />
    <Route path="/busca" component={Search} />
    <Route path="/desafios" component={Challenge} />
    <Route path="/comofunciona" component={HowItWorks} />
    <Route path="/regulamento" component={Regulation} />
    <Route path="/termosdeuso" component={TermsUse} />
    <Route path="/byfidelizarmais" component={ByFidelizarMais} />
    <Route path="/test" component={Test} />
    <Route component={() => <div>Page 404!</div>} />
  </Switch>
);

export default Routers;
