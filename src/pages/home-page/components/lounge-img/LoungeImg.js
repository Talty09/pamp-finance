import React from "react";
import ReactDOM from "react-dom";
import useStyles from './LoungeImgStyles';
import Grid from "@material-ui/core/Grid";

import LoungeJpeg from "../../../../lib/assets/img/Main.jpeg";
import GetPampyButton from "../../../../components/get-pampy-button/GetPampyButton";

function LoungeImg(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.imgContainer}>
      <img className={classes.loungeImg} src={LoungeJpeg} />
    </Grid>      
  )
}

export default LoungeImg;