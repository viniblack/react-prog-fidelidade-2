/* eslint-disable no-unused-vars */
import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DoneIcon from '@material-ui/icons/Done';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import {
  TitleAnswerWin, TextAnswerWin, SubtitleAnswerWin, NoteBox, Note,
} from '../../styles/challenge/box-answer-win';

import BoxChallenge from '../../styles/challenge/challenge';

const NoteNumber = [
  { text: '0' },
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' },
  { text: '5' },
  { text: '6' },
  { text: '7' },
  { text: '8' },
  { text: '9' },
  { text: '10' },
];

export default function AnswerWin() {
  return (
    <BoxChallenge>
      <TitleAnswerWin>
        Responda e ganhe
        {/* <AddIcon />
      <RemoveIcon /> */}
      </TitleAnswerWin>
      <SubtitleAnswerWin>
        Responda a pesquisa e ganhe 50 pontos
      </SubtitleAnswerWin>
      <TextAnswerWin>
        Em uma escala de 0 a 10, o quanto você recomendaria a FIDELIZAR MAIS a um amigo ou familiar?
      </TextAnswerWin>
      <NoteBox>
        {NoteNumber.map((item) => (
          <Note>{item.text}</Note>
        ))}
      </NoteBox>
      <TextareaAutosize
        rowsMin={5}
        aria-label="maximum height"
        placeholder="Escreva em poucas palavras o motivo de sua nota..."
      />
      <Button variant="contained" color="primary" size="small">
        <DoneIcon />
        Enviar
      </Button>
    </BoxChallenge>
  );
}
