import React from 'react';

import {
  SectionTitle,
  Main,
  BoxAll,
  TextPattern,
  TermoImg,
  ListUl,
  ListLi,
} from '../../styles/pattern/box-all';

import Premio from '../../assets/img/howItWorks/1.gif';
import ImgPremio from '../../assets/img/howItWorks/2.gif';
import Resgate from '../../assets/img/howItWorks/3.gif';
import Extrato from '../../assets/img/howItWorks/4.gif';
import Desafio from '../../assets/img/howItWorks/5.jpg';
import Regulamento from '../../assets/img/howItWorks/6.gif';
import Termos from '../../assets/img/howItWorks/7.jpg';

export default function HowItWorksBox() {
  return (
    <Main marginBottom="2rem" top="4rem" paddingBottom="2.5rem">
      <SectionTitle>Como Funciona</SectionTitle>
      <BoxAll
        flexDirection="column"
        alignItems="center"
        margin=".5rem"
        color="white"
        padding="1rem"
        display="flex"
      >
        <TextPattern>
          Vamos ao passo a passo do botão do programa de fidelidade para entender
          como ele funciona.
        </TextPattern>

        <TextPattern>
          Na parte inferior do botão você consegue navegar por todas as páginas
          do programa de fidelidade
        </TextPattern>

        <img src={Premio} alt="loading..." />

        <TextPattern>
          1 - Depois que você clicar em cima do botão do programa de fidelidade,
          irá aparecer algumas opções:
        </TextPattern>

        <ListUl>
          <ListLi>
            Opção para selecionar cupom ou produto
          </ListLi>
          <ListLi>
            Campo para inserir CPF ou CNPJ para consultar pontos;
          </ListLi>
          <ListLi>
            Os prêmios disponíveis para resgate
          </ListLi>
          <ListLi>
            Na parte inferior você consegue acessar outros recursos do programa de fidelidade
          </ListLi>
        </ListUl>

        <TextPattern>
          Clicando na imagem do prêmio você consegue ver a imagem do prêmio ampliada
          e ver a descrição do prêmio
        </TextPattern>

        <img src={ImgPremio} alt="loading..." />

        <TextPattern>
          Clicando em Resgatar ira aparecer um tela de confirmação para resgatar aquele prêmio
        </TextPattern>

        <img src={Resgate} alt="loading..." />

        <TextPattern>
          2 - A próxima página é do extrato, onde você pode consultar o seu histórico
          de pontuação e resgate no programa de fidelidade
        </TextPattern>

        <TextPattern>
          Informando o seu CPF ou CNPJ e clicando na lupa ira consultar seu
          histórico no de acumulo e resgate;
        </TextPattern>

        <img src={Extrato} alt="loading..." />

        <TextPattern>
          3 - A próxima página é de desafio, onde você encontra alguns desafios dinsponíveis como:

          1. Resnda e ganhe
          2. Indique e ganhe
        </TextPattern>

        <TermoImg src={Desafio} alt="loading..." />

        <TextPattern>
          4 - A próxima página é de regulamento, onde você pode entender como o
          programa de fidelidade funciona
        </TextPattern>

        <img src={Regulamento} alt="loading..." />

        <TextPattern>
          5 - A próxima página é de Termos de uso, onde você pode ver as regras
          do programa de fidelidade
        </TextPattern>

        <TermoImg src={Termos} alt="loading..." />
      </BoxAll>
    </Main>
  );
}
