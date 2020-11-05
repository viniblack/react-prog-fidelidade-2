import styled from 'styled-components';

const ButtonSearch = styled.button`
  background-color: var(--color-title-nav);
  border: none;
  font-size: 1rem;
  padding: .2rem;

  border-radius: 0 7px 7px 0 ;
  box-shadow: 4px 4px var(--color-box-shadow);
  
  
  @media (min-width: 400px) {
    align-items: center;
    justify-content: center;

    padding: .38rem;

  }
  
  @media (min-width: 700px) {
    box-shadow: 5px 5px var(--color-box-shadow);

  }

  @media (min-width: 1400px) {
    box-shadow: 4px 5px var(--color-box-shadow);
    padding: .89rem;

  }
`;

/* const Main = styled.div`
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
 */
export {
  ButtonSearch as default,
};
