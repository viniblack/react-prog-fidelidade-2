import React from 'react';

import {

} from '@material-ui/core';

import {
  AwardsText,
  Main,
} from '../styles/awards';

import FieldSearch from './FieldSearch';

import { BoxRescue, BoxScore } from './ComponentsExtract';

export default function PageExtract() {
  return (
    <Main>
      <FieldSearch />
      <AwardsText>Extrato </AwardsText>
      <BoxRescue />
      <BoxScore />
    </Main>
  );
}
