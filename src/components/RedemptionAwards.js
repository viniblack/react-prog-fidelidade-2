/* eslint-disable linebreak-style */
import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import RedeemIcon from '@material-ui/icons/Redeem';
import { Box, AwardsImg, BoxRight } from '../styles/redemptionAwards';

import Img from '../assets/img/batata.jpg';

const RedemptionAwards = () => (
  <>
    <Box>
      <AwardsImg src={Img} alt="Prêmio" />
      <BoxRight>
        <p className="awards-box-text">Cupom de 5 reais de desconto</p>
        <p className="awards-box-price">100 pontos</p>

        <Button variant="contained" size="small" color="primary" startIcon={<RedeemIcon />}>
          Resgatar
        </Button>

      </BoxRight>
    </Box>
  </>
);

export default RedemptionAwards;
