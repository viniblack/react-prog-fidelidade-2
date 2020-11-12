import styled from 'styled-components';

const Img = styled.img`
  width: 5rem;
`;
const Points = styled.h3`
  color: #AC2424;
  margin-top: .5em;
  display: grid;
  text-align: center;
`;

const Line = styled.hr`
  margin-bottom: 1rem;
  border-top: 1px solid #858585;
  width: 90%;
`;

const List = styled.ol`
margin-top: .5em;
font-size: 1rem;
line-height: 1rem;
margin: 1rem;
line-height: 1rem;
`;

const ListLi = styled.li`
margin-top: .5em;
`;

export {
  Img, Points, Line, List, ListLi,
};
