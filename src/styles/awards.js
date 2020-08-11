/* eslint-disable linebreak-style */
// eslint-disable-next-line import/prefer-default-export
import styled from 'styled-components';

export const Main = styled.div`
  align-items: center;
  justify-content: center;

`;

export const ButtonSearch = styled.button`
  background-color: var(--color-title-nav);
  border: none;
  font-size: 1rem;
  padding: .2rem;

  border-radius: 0 7px 7px 0 ;
  box-shadow: 4px 4px #3b3b3b;
  
  
  @media (min-width: 400px) {
    align-items: center;
    justify-content: center;

    padding: .38rem;

  }
  
  @media (min-width: 500px) {
    box-shadow: 5px 5px #3b3b3b;

  }

  @media (min-width: 1400px) {
    box-shadow: 4px 5px #3b3b3b;
    padding: .89rem;

  }
`;

export const AwardsText = styled.h2`
  align-items: center;
  display: flex;

  font-size: 1.2rem; 
  margin-left: 1.5rem;
  margin-top: 1.5rem;

`;
