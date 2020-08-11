/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const Box = styled.div`
  align-items: center;
  background: var(--color-background-box);
  border-radius: 10px;
  display: flex;
  flex-grow: 1;
  justify-content: space;

  margin: 5px 10px; 
  padding: 1rem;

`;

export const BoxRight = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  margin-left: 1em;
`;

export const AwardsImg = styled.img`
  border-radius: 5px;
  width: 6rem;
  
`;
