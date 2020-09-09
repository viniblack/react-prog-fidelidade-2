import React from 'react';
import {
  AwardsText,
  ButtonSearch,
  BoxAll,
  Main,
} from '../styles/awards';
import RedemptionAwards from './RedemptionAwards';
import Search from '../assets/img/search.svg';

import '../styles/awards-box.css';

const Awards = () => (
  <Main>
    <form id="search">
      <div className="input-block">
        <input type="number" id="subject" />
        <ButtonSearch><img className="bt-search" src={Search} alt="Close" /></ButtonSearch>
      </div>
    </form>
    <AwardsText>Prêmios </AwardsText>
    <BoxAll>
      <RedemptionAwards />
      <RedemptionAwards />
      <RedemptionAwards />
      <RedemptionAwards />
      <RedemptionAwards />
      <RedemptionAwards />
    </BoxAll>
  </Main>
);

export default Awards;
