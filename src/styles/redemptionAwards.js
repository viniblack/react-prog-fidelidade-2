/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const Box = styled.div`
  align-items: center;
/*   background: var(--color-background-box); */
  
  border-radius: 10px;
  display: flex;
  flex-grow: 1;

  padding: 1rem;

`;

export const BoxRight = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  margin-left: 1em;

  &::after {
    content: "";
    position: relative;
    
    background-color: #9c9c9c;
    border-radius: 5px;
    height: 2px;
    top: 1rem;
    width: 100%;
  
  }
`;

export const AwardsImg = styled.img`
  border-radius: 5px;
  width: 6rem;
  
  @media (min-width: 400px) {
    width: 8rem;
  }

`;
