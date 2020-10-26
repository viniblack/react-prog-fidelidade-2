import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FieldSearch from '../Pattern/FieldSearch';

import {
  BoxAll,
  AwardsText,
  Main,
} from '../../styles/pattern/box-all';

import { AnswerWin, TextAnswerWin } from '../../styles/challenge/box-answer-win';
import BoxChallenge from '../../styles/challenge/challenge';

function test() {
  return (

    console.log('oiiie')
  );
}

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
  const classes = useStyles();
  return (
    <Main>
      <FieldSearch />
      <AwardsText>Desavios </AwardsText>
      <BoxAll margin="1rem">
        <BoxChallenge>
          <AnswerWin>
            <TextAnswerWin>
              Responda e ganhe
              <div
                onClick={test}
                onKeyPress={test}
                role="button"
                tabIndex="0"
              >
                <AddIcon classes={{ root: classes.close }} />
                <RemoveIcon classes={{ root: classes.open }} />
              </div>
            </TextAnswerWin>
          </AnswerWin>
        </BoxChallenge>
      </BoxAll>
    </Main>
  );
}
