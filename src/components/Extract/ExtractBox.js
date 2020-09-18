import React from 'react';

import {

} from '@material-ui/core';

import {
  AwardsText,
  Main,
} from '../../styles/awards/awards';

import FieldSearch from '../Pattern/FieldSearch';

import { Rescue, Score } from './ComponentsExtract';

import BoxAll from '../../styles/pattern/box-all';

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
