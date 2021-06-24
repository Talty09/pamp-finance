import React from "react";
import ReactDOM from "react-dom";

import useStyles from "./ContactPageStyles";

function ContactPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.testHeading}>Contact Page</div>
  )
}

ContactPage.propTypes = {};

export default ContactPage;