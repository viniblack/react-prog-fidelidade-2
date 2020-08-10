/* eslint-disable linebreak-style */
// eslint-disable-next-line import/prefer-default-export
import styled from 'styled-components';

export const Main = styled.h2`
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



  input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(red, blue);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: textfield;
    background-color: -internal-light-dark(rgb(155, 155, 255), rgb(39, 49, 519))!important;
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 0px 0px!important;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(328, 111, 118), rgb(125, 193, 121))!important;
    border-image: initial;
}

  
  @media (min-width: 400px) {
    align-items: center;
    justify-content: center;

    padding: .38rem;

  }
  
  @media (min-width: 500px) {
    box-shadow: 5px 5px #3b3b3b;

  }
`;

export const AwardsText = styled.h2`
  align-items: center;
  display: flex;

  font-size: 1rem; 
  margin-left: 15px;
  margin-top: 1rem;

`;
