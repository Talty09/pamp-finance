import React from "react";
import ReactDOM from "react-dom";

import useStyles from "./HomePageStyles";

function HomePage(props) {
  const classes = useStyles();
  return (
    <div className={classes.testHeading}>Home Page</div>
  )
}

HomePage.propTypes = {};

export default HomePage;