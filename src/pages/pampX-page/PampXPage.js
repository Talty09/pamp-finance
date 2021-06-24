import React from "react";
import ReactDOM from "react-dom";

import useStyles from "./PampXPageStyles";

function PampXPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.testHeading}>PampX Page</div>
  )
}

PampXPage.propTypes = {};

export default PampXPage;