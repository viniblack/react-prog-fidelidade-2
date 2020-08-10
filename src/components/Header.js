/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import {
  Title, Nav, Button,
} from '../styles/header';
import Banner from '../assets/img/banner2.png';
import Close from '../assets/img/close.svg';

import '../App.css';

const Header = () => (
  <>
    <Nav>
      <Title>Nome do programa de fidelidade</Title>
      <Button><img className="Close" src={Close} alt="Close" /></Button>
    </Nav>
    <img className="Banner" src={Banner} alt="banner" />
  </>
);

export default Header;
