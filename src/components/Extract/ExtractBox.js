import React from 'react';

import FieldSearch from '../Pattern/FieldSearch';

import { Rescue, Score } from './ComponentsExtract';

import {
  BoxAll,
  SectionTitle,
  Main,
} from '../../styles/pattern/box-all';

export default function PageExtract() {
  return (
    <Main>
      <FieldSearch />
      <SectionTitle>Extrato </SectionTitle>
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
