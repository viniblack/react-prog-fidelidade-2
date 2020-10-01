import styled from 'styled-components';

const BoxAll = styled.div((props) => ({
  /* margin: 10px; */
  /* box-shadow: 19px 15px 50px 10px #a5a5a5; */
  borderRadius: '19px',
  marginBottom: props.margin,
}));

const Main = styled.div`
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  position: relative; 
  top: 6rem; 
`;

const AwardsText = styled.h2`
  align-items: center;
  display: flex;

  font-size: 1.2rem; 
  margin-left: 1.5rem;

`;

export { BoxAll, Main, AwardsText };
