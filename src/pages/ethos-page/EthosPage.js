import React from "react";
import ReactDOM from "react-dom";

import useStyles from "./EthosPageStyles";

function EthosPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.testHeading}>Ethos Page</div>
  )
}

EthosPage.propTypes = {};

export default EthosPage;