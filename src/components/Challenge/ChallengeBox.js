import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AnswerWin from './AnswerWin';
import ReferWin from './ReferWin';
import FieldSearch from '../Pattern/FieldSearch';

import {
  BoxAll,
  SectionTitle,
  Main,
} from '../../styles/pattern/box-all';

import { BoxChallenge } from '../../styles/challenge/challenge';

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
    <Main top="6rem">
      <FieldSearch />
      <SectionTitle>Desafios </SectionTitle>
      <BoxAll marginBottom="1rem" paddingTop="1rem" paddingBottom="1rem">
        <BoxChallenge>
          <AnswerWin />
        </BoxChallenge>
        <BoxChallenge>
          <ReferWin />
        </BoxChallenge>
      </BoxAll>
    </Main>
  );
}
