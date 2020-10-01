import React from 'react';

import FieldSearch from '../Pattern/FieldSearch';

import {
  BoxAll,
  AwardsText,
  Main,
} from '../../styles/pattern/box-all';

import { AnswerWin, TextAnswerWin } from '../../styles/challenge/box-answer-win';

import BoxChallenge from '../../styles/challenge/challenge';

export default function ChallengeBox() {
  return (
    <Main>
      <FieldSearch />
      <AwardsText>Desavios </AwardsText>
      <BoxAll margin="1rem">
        <BoxChallenge>
          <AnswerWin>
            <TextAnswerWin>
              Responda e ganhe
            </TextAnswerWin>
          </AnswerWin>
        </BoxChallenge>
      </BoxAll>
    </Main>
  );
}
