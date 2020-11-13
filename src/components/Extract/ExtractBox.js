import React from 'react';

import FieldSearch from '../Pattern/FieldSearch';

import { Rescue, Score } from './ComponentsExtract';

import {
  SectionTitle,
  Main,
} from '../../styles/pattern/box-all';

import {
  BoxAllExtract,
} from '../../styles/extract/box-rescue';

export default function PageExtract() {
  return (
    <Main top="6rem">
      <FieldSearch />
      <SectionTitle>Extrato </SectionTitle>
      <BoxAllExtract margin="2rem">
        <Rescue />
        <Score />
        <Rescue />
        <Score />
        <Score />
        <Score />
        <Rescue />
        <Rescue />
      </BoxAllExtract>
    </Main>
  );
}
