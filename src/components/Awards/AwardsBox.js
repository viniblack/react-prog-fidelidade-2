import React from 'react';

import AwardsRedemption from './AwardsRedemption';
import Banner from '../../assets/img/banner2.png';

import {
  BoxAll,
  SectionTitle,
  Main,

} from '../../styles/pattern/box-all';

import FieldSearch from '../Pattern/FieldSearch';

import '../../styles/awards/awards.css';

export default function AwardsBox() {
  return (
    <Main>
      <img className="banner" src={Banner} alt="banner" />
      <FieldSearch />
      <SectionTitle>Prêmios </SectionTitle>
      <BoxAll display="flex" flexDirection="column" margin="1rem" marginBottom="100px" color="white" paddingBottom="2rem">
        <AwardsRedemption />
        <AwardsRedemption />
        <AwardsRedemption />
        <AwardsRedemption />
        <AwardsRedemption />
        <AwardsRedemption />
      </BoxAll>
    </Main>
  );
}
