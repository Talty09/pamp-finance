import React from "react";
import ReactDOM from "react-dom";
import useStyles from "./HomePageStyles";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import LoungeImg from "./components/lounge-img/LoungeImg";
import LoungeJpeg from "../../lib/assets/img/Main.jpeg";
import GetPampyButton from "../../components/get-pampy-button/GetPampyButton";

import Paper from "../../components/common/paper/Paper";
import Container from "../../components/common/container/Container";
import Item from "../../components/common/item/Item";

function HomePage(props) {
  const classes = useStyles();
  return (
    <div className={classes.imgBox}>
      <div className={classes.imgWrap}>
        <img className={classes.loungeImg} src={LoungeJpeg} />
      </div>
      <div className={classes.pampyBtnContainer}>
        <GetPampyButton />
      </div>
    </div>
  )
}

HomePage.propTypes = {};

export default HomePage;