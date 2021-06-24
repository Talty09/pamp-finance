import React from "react";
import ReactDOM from "react-dom";

import useStyles from "./PampyPageStyles";

function PampyPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.testHeading}>Pampy Page</div>
  )
}

PampyPage.propTypes = {};

export default PampyPage;