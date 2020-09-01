import React from 'react';
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,

} from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles({

  nav: {
    backgroundColor: 'var(--color-title-nav)',
    position: 'fixed',
    width: '100%',
    bottom: 0,
    'border-radius': '0 0 10px 10px',
  },

  textBt: {
    /*  color: 'white',
     width: 1,
     'font-size': '1px', */

  },
  selecionado: {
    color: 'black',
  },

  padao: {
    marginRight: 5,
    color: 'white',
    width: 1,
    'font-size': '1px',
  },
  teste: {
    backgroundColor: 'red',
  },

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const windowWidth = window.innerWidth;
  let classMenu = 'visivel';
  if (windowWidth <= 400) {
    classMenu = ' invisivel';
  }

  let classOutros = 'visivel';
  if (windowWidth >= 400) {
    classOutros = ' invisivel';
  }

  return (

    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      classes={{ root: classes.nav }}
    >
      <BottomNavigationAction
        label="Prêmio"
        icon={<CardGiftcardIcon fontSize="small" />}
        className={classes.textBt}
        classes={{
          selected: classes.selecionado,
          root: classes.padao,
        }}
      />
      <BottomNavigationAction
        label="Extrato"
        value="folder"
        icon={<ReceiptIcon fontSize="small" />}
        classes={{
          root: classes.padao,
        }}
      />
      <BottomNavigationAction
        label="Busca"
        icon={<SearchIcon fontSize="small" />}
        classes={{
          root: classes.padao,
        }}
      />
      <BottomNavigationAction
        label="Desafios"
        icon={<SportsEsportsIcon fontSize="small" />}
        className={classMenu}
        classes={{
          root: classes.padao,
        }}
      />
      <BottomNavigationAction
        label="Outros"
        icon={<MoreHorizIcon fontSize="small" />}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        classes={{
          root: classes.padao,
        }}

      />

      <Menu

        id="simple-menu"
        getContentAnchorEl={null}
        className="teste"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} className={classOutros}>Desafios</MenuItem>
        <MenuItem onClick={handleClose}>Como funciona</MenuItem>
        <MenuItem
          onClick={handleClose}
          classes={{ selected: classes.selecionadoSubMenu }}
        >
          Regulamento
        </MenuItem>
        <MenuItem onClick={handleClose}>Termos de uso</MenuItem>
        <MenuItem onClick={handleClose}>By Fidelizar Mais</MenuItem>
      </Menu>
    </BottomNavigation>
  );
}
