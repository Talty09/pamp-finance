import React from "react";
import ReactDOM from "react-dom";

import useStyles from "./TokenomicsPageStyles";

function TokenomicsPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.testHeading}>Tokenomics Page</div>
  )
}

TokenomicsPage.propTypes = {};

export default TokenomicsPage;