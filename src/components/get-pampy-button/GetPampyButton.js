import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import useStyles from './GetPampyButtonStyles';

function GetPampyButton(props) {
  const classes = useStyles();
  const history = useHistory();


  return (
    
    <div className={classes.btnContainer}>

      <a className={classes.btnMain} href="https://exchange.pancakeswap.finance/#/swap" target="_blank">
        GET PAMPY
      </a>
    </div>
  );
}

export default GetPampyButton;