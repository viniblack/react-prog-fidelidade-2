import styled from 'styled-components';

const Main = styled.div((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '2rem',
  position: 'relative',
  top: props.top,
  marginBottom: props.marginBottom,
}));

const BoxAll = styled.div((props) => ({
  display: props.display,
  margin: props.margin,
  marginBottom: props.marginBottom,
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
  padding: props.padding,
  flexDirection: props.flexDirection,
  alignItems: props.alignItems,
  background: props.color,
  borderRadius: '10px',
}));

const SectionTitle = styled.h2`
  align-items: center;
  display: flex;

  font-size: 1rem; 
  margin: 0 1rem;

`;

const TextPattern = styled.p`
font-size: .9rem;
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
  font-weight: bold;
`;

const LogoFidelizar = styled.img`
  max-width: 15px;
  margin: 0 .3rem;
`;

const ListOl = styled.ol`
margin-top: .5em;
line-height: 1rem;
margin: 1rem;
line-height: 1rem;
`;

const ListUl = styled.ul`
margin-top: .5em;
line-height: 1rem;
margin: 0rem 2rem;
line-height: 1rem;
font-size: .9rem;
`;

const ListLi = styled.li`
margin-top: .5em;
`;

const Img = styled.img`
  width: 5rem;
`;

export {
  BoxAll, Main, SectionTitle, TextPattern, Fidelizar,
  LogoFidelizar, FidelizarLink, ListOl, ListLi, Img,
  ListUl,
};
