import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
  rescue: {
    color: 'red',
  },
  score: {
    color: 'green',
  },
});

export function BoxRescue() {
  const classes = useStyles();

  return (
    <div>
      <FiberManualRecordIcon
        fontSize="large"
        classes={{
          root: classes.rescue,
        }}
      />
    </div>
  );
}

export function BoxScore() {
  const classes = useStyles();

  return (
    <div>
      <FiberManualRecordIcon
        fontSize="large"
        classes={{
          root: classes.score,
        }}
      />
    </div>
  );
}
