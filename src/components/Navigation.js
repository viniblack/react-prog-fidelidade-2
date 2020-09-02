import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,

} from '@material-ui/core';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SearchIcon from '@material-ui/icons/Search';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../styles/navigation.css';

const useStyles = makeStyles({

  nav: {
    backgroundColor: 'var(--color-title-nav)',
    bottom: 0,
    'border-radius': '0 0 10px 10px',
    position: 'fixed',
    width: '100%',
  },

  padao: {
    color: 'white',
    marginRight: 5,
    width: 1,
    'font-size': '1px',
  },

  selecionado: {
    color: 'black',
  },

  ativo: {
    color: 'black',
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
        className={classes.textBt}
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
        }}
        icon={<CardGiftcardIcon fontSize="small" />}
      />
      <BottomNavigationAction
        label="Extrato"
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
        }}
        icon={<ReceiptIcon fontSize="small" />}
      />
      <BottomNavigationAction
        label="Busca"
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
        }}
        icon={<SearchIcon fontSize="small" />}
      />
      <BottomNavigationAction
        label="Desafios"
        className={classMenu}
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
        }}
        icon={<SportsEsportsIcon fontSize="small" />}
      />
      <BottomNavigationAction
        label="Outros"
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
          colorAction: classes.ativo,
        }}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        icon={<MoreHorizIcon fontSize="small" />}

      />

      <Menu
        id="simple-menu"
        getContentAnchorEl={null}
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
        <MenuItem
          className={classOutros}
          onClick={handleClose}
        >
          Desafios
        </MenuItem>
        <MenuItem
          onClick={handleClose}
        >
          Como funciona
        </MenuItem>
        <MenuItem
          onClick={handleClose}
        >
          Regulamento
        </MenuItem>
        <MenuItem
          onClick={handleClose}
        >
          Termos de uso
        </MenuItem>
        <MenuItem
          onClick={handleClose}
        >
          By Fidelizar Mais
        </MenuItem>
      </Menu>
    </BottomNavigation>
  );
}
