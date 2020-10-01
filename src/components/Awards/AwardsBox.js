import React from 'react';

import AwardsRedemption from './AwardsRedemption';
import Banner from '../../assets/img/banner2.png';

import {
  BoxAll,
  AwardsText,

} from '../../styles/pattern/box-all';

import FieldSearch from '../Pattern/FieldSearch';

import '../../styles/awards/awards.css';

const AwardsBox = () => (
  <>
    <img className="banner" src={Banner} alt="banner" />
    <FieldSearch />
    <AwardsText>Prêmios </AwardsText>
    <BoxAll margin="3rem">
      <AwardsRedemption />
      <AwardsRedemption />
      <AwardsRedemption />
      <AwardsRedemption />
      <AwardsRedemption />
      <AwardsRedemption />
    </BoxAll>
  </>
);

export default AwardsBox;
