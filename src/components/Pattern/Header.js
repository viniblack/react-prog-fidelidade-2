import React from 'react';

import {
  Button,
  Nav,
  Title,
} from '../../styles/pattern/header';
import Banner from '../../assets/img/banner2.png';
import Close from '../../assets/img/close.svg';

import '../../styles/pattern/header.css';

const Header = () => (
  <>
    <Nav>
      <Title>Nome do programa de fidelidade</Title>
      <Button><img className="close" src={Close} alt="Close" /></Button>
    </Nav>
    <img className="banner" src={Banner} alt="banner" />
  </>
);

export default Header;
