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

import { Link as RouterLink } from 'react-router-dom';

import '../../styles/pattern/navigation.css';

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
    opacity: 1,
    paddingTop: '9em',
    width: 1,
    'font-size': '1px',
  },

  selecionado: {
    color: 'black',
  },

  menu: {
    color: 'black',
  },

});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [/* value */, setValue] = React.useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const windowWidth = window.innerWidth;

  let { classMenu, classOutros } = 'visivel';
  if (windowWidth <= 400) {
    classMenu = ' invisivel';
  } else {
    classOutros = ' invisivel';
  }

  return (
    <BottomNavigation
      /* value={value} */
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      classes={{ root: classes.nav }}
    >

      <BottomNavigationAction
        label="Prêmio"
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
        }}
        icon={<CardGiftcardIcon fontSize="small" />}
        component={RouterLink}
        to="/"
      />

      <BottomNavigationAction
        label="Extrato"
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
        }}
        icon={<ReceiptIcon fontSize="small" />}
        component={RouterLink}
        to="/extrato"
      />

      <BottomNavigationAction
        label="Busca"
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
        }}
        icon={<SearchIcon fontSize="small" />}
        component={RouterLink}
        to="/busca"
      />

      <BottomNavigationAction
        label="Desafios"
        className={classMenu}
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
        }}
        icon={<SportsEsportsIcon fontSize="small" />}
        component={RouterLink}
        to="/desafios"
      />

      <BottomNavigationAction
        label="Outros"
        classes={{
          root: classes.padao,
          selected: classes.selecionado,
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
        classes={{
          paper: classes.menu,
        }}
      >

        <MenuItem
          className={classOutros}
          onClick={handleClose}
          component={RouterLink}
          to="/desafios"
        >
          Desafios
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/comofunciona"
        >
          Como funciona
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/regulamento"
        >
          Regulamento
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/termosdeuso"
        >
          Termos de uso
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          component={RouterLink}
          to="/byfidelizarmais"
        >
          By Fidelizar Mais
        </MenuItem>

      </Menu>
    </BottomNavigation>
  );
}
