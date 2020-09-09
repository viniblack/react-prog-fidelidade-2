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

import { Link } from 'react-router-dom';

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
    opacity: 1,
    paddingTop: '9em',
    width: 1,
    'font-size': '1px',
  },

  selecionado: {
    color: 'black',
  },

  ativo: {
    color: 'black',
  },

  menu: {
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

  let { classMenu, classOutros } = 'visivel';
  if (windowWidth <= 400) {
    classMenu = ' invisivel';
  } else {
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

      <Link to="/">
        <BottomNavigationAction
          label="Prêmio"
          className={classes.textBt}
          classes={{
            root: classes.padao,
            selected: classes.selecionado,
          }}
          icon={<CardGiftcardIcon fontSize="small" />}
        />
      </Link>

      <Link to="/extrato">
        <BottomNavigationAction
          label="Extrato"
          classes={{
            root: classes.padao,
            selected: classes.selecionado,
          }}
          icon={<ReceiptIcon fontSize="small" />}
        />
      </Link>

      <Link to="/busca">
        <BottomNavigationAction
          label="Busca"
          classes={{
            root: classes.padao,
            selected: classes.selecionado,
          }}
          icon={<SearchIcon fontSize="small" />}
        />
      </Link>

      <Link to="/desafios">
        <BottomNavigationAction
          label="Desafios"
          className={classMenu}
          classes={{
            root: classes.padao,
            selected: classes.selecionado,
          }}
          icon={<SportsEsportsIcon fontSize="small" />}
        />
      </Link>

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
        classes={{
          root: classes.menu,
        }}
      >
        <Link to="/desafios">
          <MenuItem
            className={classOutros}
            onClick={handleClose}
          >
            Desafios
          </MenuItem>
        </Link>

        <Link to="/comofunciona">
          <MenuItem
            onClick={handleClose}
          >
            Como funciona
          </MenuItem>
        </Link>
        <Link to="/regulamento">
          <MenuItem
            onClick={handleClose}
          >
            Regulamento
          </MenuItem>
        </Link>

        <Link to="/termosdeuso">
          <MenuItem
            onClick={handleClose}
          >
            Termos de uso
          </MenuItem>
        </Link>

        <Link to="/byfidelizarmais">
          <MenuItem
            onClick={handleClose}
          >
            By Fidelizar Mais
          </MenuItem>
        </Link>
      </Menu>
    </BottomNavigation>
  );
}
