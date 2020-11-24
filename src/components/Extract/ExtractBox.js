import React from 'react';

import FieldSearch from '../Pattern/FieldSearch';

import { Rescue, Score } from './ComponentsExtract';

import {
  SectionTitle,
  Main,
  BoxAll,
} from '../../styles/pattern/box-all';

export default function PageExtract() {
  return (
    <Main top="6rem">
      <FieldSearch />
      <SectionTitle>Extrato </SectionTitle>
      <BoxAll margin="1rem" padding="1rem" color="white">
        <Rescue />
        <Score />
        <Rescue />
        <Score />
        <Score />
        <Score />
        <Rescue />
        <Rescue />
        <Rescue />
        <Rescue />
        <Score />
        <Rescue />
        <Score />
        <Rescue />
        <Rescue />
        <Score />
        <Score />
        <Rescue />
        <Score />
        <Rescue />
        <Score />
        <Score />
        <Score />
        <Rescue />
        <Rescue />
        <Rescue />
        <Rescue />
        <Score />
        <Rescue />
        <Score />
        <Rescue />
        <Rescue />
        <Score />
        <Score />
      </BoxAll>
    </Main>
  );
}
