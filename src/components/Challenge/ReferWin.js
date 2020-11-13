import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

import DoneIcon from '@material-ui/icons/Done';

import { BoxChallenge, TitleChallenge, SubtitleChallenge } from '../../styles/challenge/challenge';

const useStyles = makeStyles({
  root: {
    background: '#E8E8E8',
    display: 'flex',
    justifyContent: 'space-between',
  },

  input: {
    paddingLeft: '1em',
  },

  test: {
  },
});

export default function ReferWin() {
  const classes = useStyles();
  return (
    <BoxChallenge maxWidth="37rem" minWidth="20rem" height="9rem" row="2.5rem">

      <TitleChallenge>
        Indique e ganhe
      </TitleChallenge>
      <SubtitleChallenge>
        Indique um amigo e ganhe 100 pontos
      </SubtitleChallenge>
      <FormControl component="fieldset">
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel classes={{ root: classes.test }} size="small" value="Email" control={<Radio color="primary" />} label="Email" />
          <FormControlLabel size="small" value="Whatsapp" control={<Radio color="primary" />} label="Whatsapp" />
        </RadioGroup>
      </FormControl>

      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder=""
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <DoneIcon
            classes={{
              root: classes.test,
            }}
          />
        </IconButton>
      </Paper>
    </BoxChallenge>
  );
}
