import React from 'react';

import FieldSearch from '../Pattern/FieldSearch';

import { Rescue, Score } from './ComponentsExtract';

import {
  BoxAll,
  AwardsText,
  Main,
} from '../../styles/pattern/box-all';

export default function PageExtract() {
  return (
    <Main>
      <FieldSearch />
      <AwardsText>Extrato </AwardsText>
      <BoxAll margin="1rem">
        <Rescue />
        <Score />
        <Rescue />
        <Score />
        <Score />
        <Score />
        <Rescue />
        <Rescue />
      </BoxAll>
    </Main>
  );
}
