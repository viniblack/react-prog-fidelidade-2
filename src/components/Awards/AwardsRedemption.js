import React from 'react';

import '../../styles/awards/redemption-awards.css';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
/* import Img from '../../assets/img/batata.jpg'; */

import {
  AwardsImg,
  Box,
  BoxRight,
} from '../../styles/awards/redemptionAwards';

import Batata from '../../assets/img/batata.jpg';
import ButtonRescue from './ButtonRescue';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    width: 300,
  },
  media: {
    height: 0,
    paddingTop: '55%', // 16:9
  },
}));

export default function RedemptionAwards() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <div>
        <AwardsImg src={Batata} alt="Prêmio" onClick={handleOpen} />

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Card className={classes.root}>
              <CardHeader
                title="Detalhe"
              />
              <CardMedia
                className={classes.media}
                image={Batata}
              />
              <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                  Cupom de 5 reais de desconto
                </Typography>
              </CardContent>
            </Card>
          </Fade>
        </Modal>
      </div>
      <BoxRight>
        <p className="awards-box-text">Cupom de 5 reais de desconto</p>
        <p className="awards-box-price">100 pontos</p>
        <ButtonRescue />
      </BoxRight>
    </Box>
  );
}
