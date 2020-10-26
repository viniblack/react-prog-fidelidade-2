import styled from 'styled-components';

const AnswerWin = styled.div`
  background: white;
  height: 20rem;
  margin: 0 1rem;
  &::after {
    content: "";
    background-color: #9c9c9c;
    border-radius: 5px;
    height: .1rem;
    left: 81rem;
    display: flex;
    top: -15px;
  }

`;

const TextAnswerWin = styled.div`
  font-size: 1rem;
  padding: .7rem
`;

export { AnswerWin, TextAnswerWin };
