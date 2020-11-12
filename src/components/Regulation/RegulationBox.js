import React from 'react';

import {
  BoxAll,
  SectionTitle,
  Main,
  TextPattern,
} from '../../styles/pattern/box-all';

import {
  Img, Points, Line, List, ListLi,
} from '../../styles/regulation/regulation-box';

import '../../styles/regulation/regulation-box.css';

import Register from '../../assets/img/regulation/01.png';
import Birthday from '../../assets/img/regulation/02.png';
import Friend from '../../assets/img/regulation/03.png';
import Answer from '../../assets/img/regulation/04.png';
import Contract from '../../assets/img/regulation/05.png';
import Rule from '../../assets/img/regulation/06.png';
import Exchange from '../../assets/img/regulation/07.png';

export default function ReagulationBox() {
  return (
    <Main>
      <SectionTitle>Regulamento</SectionTitle>
      <BoxAll margin="1rem" color="white" paddingTop="1rem">
        <Img src={Register} alt="banner" />
        <SectionTitle>Cadastre-se e ganhe</SectionTitle>
        <TextPattern>
          Cadastre-se em nossa loja em até 24h você será cadastrado em nosso programa de fidelidade.
          <br />
          E como presente de boas vindas você ganha
          <Points> 80 pontos </Points>
        </TextPattern>
        <Line />

        <Img src={Birthday} alt="banner" />
        <SectionTitle>Feliz aniversário!</SectionTitle>
        <TextPattern>
          E é claro que não podemos esquecer dessa data tão especial não é mesmo?
          <br />
          Em seu aniversário como presente você ganha mais
          para aproveitar essa data tão querida
          <Points> 100 pontos </Points>
        </TextPattern>
        <Line />

        <Img src={Friend} alt="banner" />
        <SectionTitle>Indique e ganhe</SectionTitle>
        <TextPattern>
          Indicando um amigo você pode receber mais pontos
          Ganhe mais
          <span className="point"> 100 pontos</span>
          a cada nova indicação
          <br />
          <br />
          Como faço para ganhar?
          <List>
            <ListLi>Seu amigo(a) indicado não podeser nosso cliente;</ListLi>
            <ListLi>O indicado tem que fazer o cadastro e fazer a primeira compra;</ListLi>
            <ListLi>Em até 24h você receberá seus pontos</ListLi>
          </List>
        </TextPattern>
        <Line />

        <Img src={Answer} alt="banner" />
        <SectionTitle>Responda e ganhe!</SectionTitle>
        <TextPattern>
          Sua opinião é muito importante para gente!
          Envie sua opinião sobre nossa loja, atendimento, produtos e ganhe
          <Points> 50 pontos </Points>
        </TextPattern>
        <TextPattern>
          Você pode enviar sua opinião a cada 60 dias e ganhar pontos a cada vez que responde.
        </TextPattern>
        <TextPattern>
          É muito importante ouvi-lo, fale como foi seu atendimento,
          como poderiamos melhorar, pois estamos procurando melhorar
          a cada dia que passa para fazê-lo ainda mais feliz.
        </TextPattern>
        <Line />

        <Img src={Contract} alt="banner" />
        <SectionTitle>
          Quem pode participar do programa de fidelidade Gravidicas Store?
        </SectionTitle>
        <TextPattern>
          O cadastro no programa de fidelidade na Gravidicas Store
          é automático após realizar o cadastro no site
          www.gravidicasstore.com.br, todos os clientes da loja
          Gravidicas Store participaram
        </TextPattern>
        <Line />

        <Img src={Rule} alt="banner" />
        <SectionTitle>Feliz aniversário!</SectionTitle>
        <TextPattern>
          A cada R$ 01,00 (um real) em compras na loja Gravidicas Store
          o cliente fidelidade acumula 1 (um) ponto.
        </TextPattern>
        <TextPattern>
          Esta paridade poderá ser alterada para patamares superiores em função
          de promoções especiais realizadas ao longo do ano
          ou a qualquer momento, a critério da Gravidicas Store.
        </TextPattern>
        <Line />

        <Img src={Exchange} alt="banner" />
        <SectionTitle>Como trocar meus pontos?</SectionTitle>
        <TextPattern>
          <List>
            <ListLi>
              A solicitação de prêmios poderá ser realizada somente pelo
              titular do programa de fidelidade da Gravidicas Store.
            </ListLi>
            <ListLi>
              No ato da solicitação e após a aprovação do resgate os pontos
              referente ao prêmio solicitado serão debitados automaticamente.
            </ListLi>
            <ListLi>
              Após emitido o comprovante de solicitação de resgate de prêmios
              (enviado por e-mail) o cliente não poderá mais solicitar o
              cancelamento do mesmo nem mesmo a troca por algum valor em dinheiro.
            </ListLi>
            <ListLi>
              A Gravidicas Store reserva-se ao direito de cancelar a solicitação
              de resgate de prêmios nos casos de falsificação, fraude,
              mau uso do benefício ou em casos em que o cliente não possua o
              número de pontos necessários para a troca do prêmio ou até por
              falta em estoque.
            </ListLi>
            <ListLi>
              A solicitação do resgate pode ser efetuada junto com o pedido.
              Caso seja solicitado em outra data, o custo com o frete ficará a
              cargo do solicitante (aplicado apenas para resgate de produtos físicos).
            </ListLi>
          </List>
        </TextPattern>
      </BoxAll>
    </Main>
  );
}
