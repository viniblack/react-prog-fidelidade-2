import React from 'react';

import {

} from '@material-ui/core';

import {
  AwardsText,
  Main,
} from '../../styles/awards/awards';

import FieldSearch from '../Pattern/FieldSearch';

import { BoxRescue, BoxScore } from './ComponentsExtract';

import BoxAll from '../../styles/pattern/box-all';

export default function PageExtract() {
  return (
    <Main>
      <FieldSearch />
      <AwardsText>Extrato </AwardsText>
      <BoxAll>
        <BoxRescue />
        <BoxScore />
      </BoxAll>
    </Main>
  );
}
