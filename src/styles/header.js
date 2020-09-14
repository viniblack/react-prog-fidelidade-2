/* eslint-disable linebreak-style */
// eslint-disable-next-line import/prefer-default-export
import styled from 'styled-components';

const Nav = styled.nav`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 7;
  


  background-color: var(--color-title-nav);
  border-radius: 10px 10px 0 0 ;
  padding: 1rem;

`;

const Title = styled.h2`
  font-family: Heebo;
  text-justify:inherit;
  color: #fff;
  font-size: 1rem;
  margin-left: .3rem;

`;

const Button = styled.button`
  align-items: center;
  justify-content: center;

  background-color: var(--color-title-nav);
  border: none;
  font-size: 1.1rem;
  margin: .1rem .5rem 0;
  
`;

export { Nav, Title, Button };
