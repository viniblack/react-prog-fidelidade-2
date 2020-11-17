import styled from 'styled-components';

const Img = styled.img`
  width: 10rem;
  margin-bottom: 1rem;
`;

const TextByFidelizarMais = styled.p((props) => ({
  fontSize: props.size,
  lineHeight: props.height,
  margin: props.margin,
  display: 'flex',
  justifyContent: 'center',
  fontWeight: props.weight,
  textAlign: props.align,
}));

export { Img, TextByFidelizarMais };
