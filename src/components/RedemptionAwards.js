/* eslint-disable linebreak-style */
import React from 'react';
import '../App.css';
/* import {
  Button,
} from '@material-ui/core';
import RedeemIcon from '@material-ui/icons/Redeem'; */
import { Box, AwardsImg, BoxRight } from '../styles/redemptionAwards';

import Img from '../assets/img/batata.jpg';
import ButtonRescue from './ButtonRescue';

const RedemptionAwards = () => (
  <>
    <Box>
      <AwardsImg src={Img} alt="Prêmio" />
      <BoxRight>
        <p className="awards-box-text">Cupom de 5 reais de desconto</p>
        <p className="awards-box-price">100 pontos</p>

        {/* <Button variant="contained" size="small" color="primary"
        startIcon={<RedeemIcon />}>
          Resgatar
        </Button> */}

        <ButtonRescue />

      </BoxRight>
    </Box>
  </>
);

export default RedemptionAwards;
