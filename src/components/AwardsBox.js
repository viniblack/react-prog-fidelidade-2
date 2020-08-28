import React from 'react';

import {
  AwardsText,
  Main,
  ButtonSearch,
  BoxAll,
} from '../styles/awards';
import Search from '../assets/img/search.svg';
import RedemptionAwards from './RedemptionAwards';
import Navigation from './Navigation';

const Awards = () => (
  <Main>
    <form id="search">
      <div className="input-block">
        <input type="number" id="subject" />
        <ButtonSearch><img className="bt-search" src={Search} alt="Close" /></ButtonSearch>
      </div>
    </form>
    <AwardsText> </AwardsText>
    <BoxAll>
      <RedemptionAwards />
      <RedemptionAwards />
      <RedemptionAwards />
      <RedemptionAwards />
      <RedemptionAwards />
      <RedemptionAwards />
    </BoxAll>
    <Navigation />
  </Main>
);

export default Awards;
