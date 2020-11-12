import styled from 'styled-components';

const BoxAll = styled.div((props) => ({
  borderRadius: '19px',
  marginBottom: props.marginBottom,
  margin: props.margin,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: props.color,
}));

const Main = styled.div`
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  position: relative; 
  top: 6rem; 
`;

const SectionTitle = styled.h2`
  align-items: center;
  display: flex;

  font-size: 1.2rem; 
  margin-left: 1.5rem;

`;

const TextPattern = styled.p`
  margin-top: .5em;
  font-size: 1rem;
  line-height: 1rem;
  text-align: justify;
  text-justify: inter-word;
}
`;

export {
  BoxAll, Main, SectionTitle, TextPattern,
};
