import styled from 'styled-components';

const BoxAll = styled.div((props) => ({
  borderRadius: '19px',
  marginBottom: props.marginBottom,
  paddingTop: props.paddingTop,
  margin: props.margin,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: props.color,
}));

const Main = styled.div((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '2rem',
  position: 'relative',
  top: props.top,
  marginBottom: props.marginBottom,
}));

const SectionTitle = styled.h2`
  align-items: center;
  display: flex;

  font-size: 1.2rem; 
  margin: 0 1rem;

`;

const TextPattern = styled.p`
font-size: 1rem;
line-height: 1rem;
margin: .7em 1rem;
`;

const Fidelizar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5em;
  width: 100%;
  bottom: 0;
  position: fixed;
  background-color: #e0e0e0;
  border-radius: 0 0 10px 10px;
  font-size: .7em;
  
`;

const FidelizarLink = styled.a`
  display: flex;
  align-items: center;
  color: #AD1F2E;

`;

const LogoFidelizar = styled.img`
  max-width: 15px;
  margin: 0 .3rem;
`;

export {
  BoxAll, Main, SectionTitle, TextPattern,
  Fidelizar, LogoFidelizar, FidelizarLink,
};
