import React from 'react';
import {
  AwardsText,
  BoxAll,
  Main,
} from '../styles/awards';
import AwardsRedemption from './AwardsRedemption';

import FieldSearch from './FieldSearch';

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
