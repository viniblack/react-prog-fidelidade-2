import styled from 'styled-components';

const BoxChallenge = styled.div((props) => ({
  borderRadius: '19px',
  height: props.height,
  background: 'white',
  margin: '0 1rem',
  display: 'grid',
  gridTemplateRows: props.row,
  marginBottom: '1.5rem',
}));

const TitleChallenge = styled.h2`
  font-size: 1rem;
  padding-top: .5rem;
  &::after {
    content: "";
    background-color: #9c9c9c;
    border-radius: 5px;
    height: .1rem;
    display: flex;
    
  }
`;

const SubtitleChallenge = styled.h3`
    font-size: .8rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export {
  BoxChallenge, TitleChallenge, SubtitleChallenge,
};
