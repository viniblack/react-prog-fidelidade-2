import styled from 'styled-components';

const TextAnswerWin = styled.p`
  margin-top: .5em;
  font-size: .8rem;
  line-height: 1.2;
  
`;

const NoteBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Note = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  width: 1.1rem;
  height:1.5rem;
  padding: .6rem;
  margin: .3em;
  color: white;
  &:nth-child(1) {
    background-color: #b72026;
    border: 1px solid #b72026;
  }
  &:nth-child(2) {
    background-color: #d91e29;
    border: 1px solid #d91e29;
  }
  &:nth-child(3) {
    background-color: #f05125;
    border: 1px solid #f05125;
  }
  &:nth-child(4) {
    background-color: #f3701f;
    border: 1px solid #f3701f;
  }
  &:nth-child(5) {
    background-color: #f9a824;
    border: 1px solid #f9a824;
  }
  &:nth-child(6) {
    background-color: #ffc70f;
    border: 1px solid #ffc70f;
  }
  &:nth-child(7) {
    background-color: #d9cc23;
    border: 1px solid #d9cc23;
  }
  &:nth-child(8) {
    background-color: #dadb25;
    border: 1px solid #dadb25;
  }
  &:nth-child(9) {
    background-color: #c4d92b;
    border: 1px solid #c4d92b;
  }
  &:nth-child(10) {
    background-color: #b1d137;
    border: 1px solid #b1d137;
  }
  &:nth-child(11) {
    background-color: #66b54d;
    border: 1px solid #66b54d;
  }
`;

export {
  TextAnswerWin, NoteBox, Note,
};
