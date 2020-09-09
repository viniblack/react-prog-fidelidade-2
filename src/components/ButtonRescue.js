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
    background: 'var(--color-title-nav)',
  },
  confirm: {
    color: 'white',
    background: '#05ed14',
  },
  cancel: {
    color: 'white',
    background: '#e81010',
  },
  dialogText: {
    color: '#000000d1',
  },

});

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
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
        <DialogTitle>
          Confirme seu resgate
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="primary" classes={{ root: classes.dialogText }}>
            Para confirmar o resgate deste prêmio:
            <b> Cupom de 5 reais de desconto, </b>
            clique em
            <b> Confirmar.</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            classes={{
              textSecondary: classes.cancel,
            }}
            color="secondary"
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            classes={{
              textPrimary: classes.confirm,
            }}
            color="primary"
            onClick={handleClose}
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
