import React from 'react';

import AwardsRedemption from './AwardsRedemption';
import Banner from '../../assets/img/banner2.png';

import {
  BoxAll,
  SectionTitle,

} from '../../styles/pattern/box-all';

import FieldSearch from '../Pattern/FieldSearch';

import '../../styles/awards/awards.css';

export default function AwardsBox() {
  return (
    <>
      <img className="banner" src={Banner} alt="banner" />
      <FieldSearch />
      <SectionTitle>Prêmios </SectionTitle>
      <BoxAll display="flex" flexDirection="column" marginBottom="4rem">
        <AwardsRedemption />
        <AwardsRedemption />
        <AwardsRedemption />
        <AwardsRedemption />
        <AwardsRedemption />
        <AwardsRedemption />
      </BoxAll>
    </>
  );
}
