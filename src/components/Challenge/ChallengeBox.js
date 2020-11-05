import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AnswerWin from './AnswerWin';
import FieldSearch from '../Pattern/FieldSearch';

import {
  BoxAll,
  SectionTitle,
  Main,
} from '../../styles/pattern/box-all';

import BoxChallenge from '../../styles/challenge/challenge';

const useStyles = makeStyles({
  open: {
    color: 'red',
  },

  close: {
    color: 'blue',
    display: 'none',
  },

});

export default function ChallengeBox() {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <Main>
      <FieldSearch />
      <SectionTitle>Desavios </SectionTitle>
      <BoxAll margin="1rem">
        <BoxChallenge>
          <AnswerWin />
        </BoxChallenge>
      </BoxAll>
    </Main>
  );
}
