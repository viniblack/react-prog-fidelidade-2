import React from 'react';
import {
  AwardsImg,
  Box,
  BoxRight,
} from '../styles/redemptionAwards';

import ButtonRescue from './ButtonRescue';
import Img from '../assets/img/batata.jpg';

import '../styles/redemption-awards.css';

const RedemptionAwards = () => (
  <Box>
    <AwardsImg src={Img} alt="Prêmio" />
    <BoxRight>
      <p className="awards-box-text">Cupom de 5 reais de desconto</p>
      <p className="awards-box-price">100 pontos</p>
      <ButtonRescue />
    </BoxRight>
  </Box>
);

export default RedemptionAwards;
