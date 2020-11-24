import React from 'react';

import {
  BoxAll,
  SectionTitle,
  Main,
  TextPattern,
  ListOl,
  ListLi,
} from '../../styles/pattern/box-all';

export default function TermsUseBox() {
  return (
    <Main marginBottom="2rem" top="4rem">
      <SectionTitle>Termos de uso</SectionTitle>
      <BoxAll
        margin="1rem"
        color="white"
        marginBottom="100px"
        display="flex"
      >
        <TextPattern>
          <ListOl>
            <ListLi>
              O cliente no ato de sua adesão ao PROGRAMA FIDELIDADE autoriza a
              Gravidicas Store utilizar para fins administrativos e de marketing
              todos os seus dados constantes da Ficha de Inscrição e as informações
              de consumo geradas nas lojas Gravidicas Store, desde que respeitadas
              as Disposições Legais vigentes.
            </ListLi>
            <ListLi>
              Os pontos acumulados não podem em hipótese alguma ser convertidos
              em dinheiro. Caso o cliente não possua a quantidade de pontos
              suficientes para efetuar a troca pelo prêmio, não será permitido
              complementar a quantia faltante em dinheiro ou qualquer outro meio
              de pagamento.
            </ListLi>

            <ListLi>
              A Gravidicas Store reserva-se ao direito de cancelar o Programa
              Fidelidade do cliente nos casos de mau uso, falsificação ou de
              fraude de qualquer espécie, sem aviso prévio ao cliente, e ainda
              anular o saldo de pontos vigente.
            </ListLi>

            <ListLi>
              A participação dos clientes Gravidicas Store ao programa de fidelidade
              será regulada exclusivamente por este
            </ListLi>
          </ListOl>
        </TextPattern>
      </BoxAll>
    </Main>
  );
}
