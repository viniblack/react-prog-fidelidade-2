import React from 'react';

import {
  BoxAll,
  Main,
  FidelizarLink,
} from '../../styles/pattern/box-all';

import { Img, TextByFidelizarMais } from '../../styles/byFidelizarMais/by-fidelizar-mais';

import FidelizarMais from '../../assets/img/fidelizarMais.png';

export default function ByFidelizarMais() {
  return (
    <Main marginBottom="2rem" top="4rem">
      <BoxAll
        flexDirection="column"
        alignItems="center"
        display="flex"
      >
        <TextByFidelizarMais
          margin="2em 1rem"
          align="center"
          size="1rem"
          height="1.5rem"
        >
          Programa de fidelidade desta loja é administrado pela Fidelizar Mais
        </TextByFidelizarMais>
        <Img src={FidelizarMais} />
        <FidelizarLink
          href="https://fidelizarmais.co/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Fidelizar Mais
        </FidelizarLink>
        <TextByFidelizarMais margin="1rem" weight="bold" size=".9rem">
          Verão 3.0
        </TextByFidelizarMais>
        <TextByFidelizarMais weight="bold" size=".9rem">
          &#169; 2017 a 2020
        </TextByFidelizarMais>
        <TextByFidelizarMais weight="bold" size=".9rem">
          todos os direitos reservados
        </TextByFidelizarMais>
      </BoxAll>
    </Main>
  );
}
