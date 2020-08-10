/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import { AwardsText, Main, ButtonSearch } from '../styles/awards';
import Search from '../assets/img/search.svg';

const Awards = () => (
  <Main>
    <form id="search">
      <div className="input-block">
        <input type="number" id="subject" />
        <ButtonSearch><img className="bt-search" src={Search} alt="Close" /></ButtonSearch>
      </div>
    </form>
    <AwardsText>Prêmios</AwardsText>
  </Main>
);

export default Awards;
