/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  makeStyles,
} from '@material-ui/core';
import Draggable from 'react-draggable';
import RedeemIcon from '@material-ui/icons/Redeem';

const useStyles = makeStyles({
  redemptionAward: {
    height: '60%',
  },
  rescue: {
    width: '100%',
  },

});

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClickOpen}
        startIcon={<RedeemIcon />}
        classes={{ root: classes.rescue }}

      >
        Resgatar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        classes={{ container: classes.redemptionAward }}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Confirme seu resgate
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para confirmar o resgate deste prêmio: Cupom de 5 reais de desconto,
            clique em Confirmar.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
