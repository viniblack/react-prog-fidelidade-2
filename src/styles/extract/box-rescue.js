import styled from 'styled-components';

const Box = styled.div`
  display: grid;
  grid-template-columns: 1.5rem 1fr .25fr;
  grid-template-rows: 1rem 2rem;
  padding: .5rem;
  
  &::after {
    content: "";
    grid-row: 2 / 3;
    margin: 1.3rem 0;
    position: relative;
    display: block;
    background-color: #9c9c9c;
    border-radius: 5px;
    height: 2.5rem;
    left: .5rem;
    width: 5%;
    top: -15px;
  }
`;

const ExtractTitle = styled.h2`
  align-items: center;
  display: flex;
  font-size: 1rem;
  grid-column: 2 / 3;
  padding-left: .5rem;
  font-weight: normal;
`;

const ExtractSubTitle = styled.h3`
  align-items:center;
  display: flex;
  font-size: .8rem;
  grid-column: 2 / 3;
  padding-left: .5rem;
  font-weight: normal;  
`;
const Date = styled.p`
  justify-content: flex-end;
  align-items:center;
  display: flex;
  font-size: .7rem;
  grid-column: 3 / 3;
  grid-row: 1 / 2;
  padding-left: .5rem;
  color: #919191;
`;

const PointAccumulation = styled.p`
  justify-content: flex-end;
  display: flex;
  font-size: 1rem;
  grid-column: 0 / 1;
  padding-left: .5rem;
  color: #e81010;
  align-items: center;
`;

const PointRescue = styled.p((props) => ({
  justifyContent: 'flex-end',
  display: 'flex',
  fontSize: '1rem',
  gridColumn: 0 / 1,
  paddingLeft: '.5rem',
  color: props.color,
}));

const BoxAllExtract = styled.div((props) => ({
  borderRadius: '19px',
  marginBottom: props.margin,
}));

export {
  Box,
  Date,
  ExtractTitle,
  ExtractSubTitle,
  PointAccumulation,
  PointRescue,
  BoxAllExtract,
};
