import React from 'react';
import useStyles from './PampLogoLinkStyles';
import pampyLogo from '../../lib/assets/img/HomeLogo.png';
import {Link} from '@material-ui/core';

function PampyLogoLink(props) {
  const classes = useStyles();

  return (
    <Link to="/" className={classes.logoLink}>
      <img className={classes.logoLinkImg} src={pampyLogo} />
    </Link>
  );
}

 export default PampyLogoLink;