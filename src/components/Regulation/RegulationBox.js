import React from 'react';

import {
  BoxAll,
  SectionTitle,
  Main,
  TextPattern,
} from '../../styles/pattern/box-all';

import { Img, Points, Line } from '../../styles/regulation/regulation-box';

import Register from '../../assets/img/regulation/01.png';
import Birthday from '../../assets/img/regulation/02.png';

export default function ReagulationBox() {
  return (
    <Main>
      <SectionTitle>Regulamento</SectionTitle>
      <BoxAll margin="1rem" color="white">
        <Img src={Register} alt="banner" />
        <SectionTitle>Cadastre-se e ganhe</SectionTitle>
        <TextPattern>
          Cadastre-se em nossa loja em até 24h você será cadastrado em nosso programa de fidelidade.
          <br />
          E como presente de boas vindas você ganha
          <Points> 100 pontos </Points>
        </TextPattern>
        <Line />
        <Img src={Birthday} alt="banner" />
        <SectionTitle>Cadastre-se e ganhe</SectionTitle>
        <TextPattern>
          Cadastre-se em nossa loja em até 24h você será cadastrado em nosso programa de fidelidade.
          <br />
          E como presente de boas vindas você ganha
          <Points> 100 pontos </Points>
        </TextPattern>
        <Line />
      </BoxAll>
    </Main>
  );
}
