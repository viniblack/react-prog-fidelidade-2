import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import {
  Box, ExtractTitle, ExtractSubTitle, Date, PointAccumulation, PointRescue,
} from '../../styles/extract/box-rescue';

const useStyles = makeStyles({
  rescue: {
    color: '#e81010',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridRow: '1 / 2',
  },

  score: {
    color: '#05ed14',
    display: 'flex',
  },
});

export function Rescue() {
  const classes = useStyles();

  return (
    <Box>
      <FiberManualRecordIcon
        fontSize="small"
        classes={{
          root: classes.rescue,
        }}
      />
      <ExtractTitle>Resgate de pontos</ExtractTitle>
      <ExtractSubTitle>Azulejo Decorativo Cantinho Do Café </ExtractSubTitle>
      <Date> 07 out</Date>
      <PointAccumulation> 500 pt</PointAccumulation>
    </Box>
  );
}

export function Score() {
  const classes = useStyles();

  return (
    <Box>
      <FiberManualRecordIcon
        fontSize="small"
        classes={{
          root: classes.score,
        }}
      />
      <ExtractTitle>Acumulo de pontos</ExtractTitle>
      <ExtractSubTitle>Compra / Pedido</ExtractSubTitle>
      <Date> 07 out</Date>
      <PointRescue color="#10e814"> 500 pt</PointRescue>
    </Box>
  );
}
