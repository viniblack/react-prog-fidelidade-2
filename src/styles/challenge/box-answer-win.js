import styled from 'styled-components';

const AnswerWin = styled.div`
  background: white;
  display:flex;
  height: 20rem;
  margin: 0 1rem;
  &::after {
    content: "";
    grid-row: 2 / 3;
    margin: 1.3rem 0;
    position: relative;
    display: inline-flex;
    background-color: #9c9c9c;
    border-radius: 5px;
    height: .1rem;
    left: -1rem;
    width: 200%;
    top: -15px;
  }

`;

const TextAnswerWin = styled.div`
  margin: .5rem 1rem;
  font-size: 1rem;

`;

export { AnswerWin, TextAnswerWin };
