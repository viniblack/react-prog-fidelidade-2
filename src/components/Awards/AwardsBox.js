import React from 'react';
import {
  AwardsText,
  Main,
} from '../../styles/awards/awards';
import AwardsRedemption from './AwardsRedemption';

import BoxAll from '../../styles/pattern/box-all';

import FieldSearch from '../Pattern/FieldSearch';

const Awards = () => (
  <Main>
    <FieldSearch />
    <AwardsText>Prêmios </AwardsText>
    <BoxAll>
      <AwardsRedemption />
      <AwardsRedemption />
      <AwardsRedemption />
      <AwardsRedemption />
      <AwardsRedemption />
      <AwardsRedemption />
    </BoxAll>
  </Main>
);

export default Awards;
