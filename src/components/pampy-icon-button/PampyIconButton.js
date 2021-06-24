import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import useStyles from './PampyIconButtonStyles';
import {ROUTES} from '../../constants/routes';
import IconButton from '@material-ui/core/IconButton';
import pampyLogo from '../../lib/assets/img/HomeLogo.png';


function PampyIconButton(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleHomeLogoClick = useCallback(() => history.push(ROUTES.HOME_PAGE), [history]);
  return (
    <IconButton
      onClick={handleHomeLogoClick}>
      <img className={classes.logoLinkImg} src={pampyLogo} />
    </IconButton>
  );
}

export default PampyIconButton;