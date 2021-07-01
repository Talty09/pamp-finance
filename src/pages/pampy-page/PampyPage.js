import React from "react";
import ReactDOM from "react-dom";
import useStyles from "./PampyPageStyles";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import NavigationIcon from '@material-ui/icons/Navigation';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import DeskImage from '../../lib/assets/img/desk.jpg';

function PampyPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.headingContainer}>
        <img className={classes.deskImg} src={DeskImage} />
        <div className={classes.imgContentContainer}>
          <div className={classes.imgText}>
            Pampy Coin
          </div>
          <Card className={classes.infoCard}>
            <CardContent>
              <div className={classes.listHeading}>
                How To Get PAMPY
              </div>
              <Divider variant="middle" className={classes.listDivider} />
              <div className={classes.stepContainer}>
                <Typography variant="subtitle1" className={classes.wrapIcon}>
                  <NavigationIcon className={classes.listIcon} /> 
                  <div className={classes.iconText}>
                  Navigate to 
                  <a className={classes.swapLink} href="https://exchange.pancakeswap.finance/#/swap" target="_blank">
                    PancakeSwap
                  </a>
                   and swap BNB for PAMPY
                  </div>                  
                </Typography>
              </div>

              <div className={classes.stepContainer}>
                <Typography variant="subtitle1" className={classes.wrapIcon}>
                  <KeyboardIcon className={classes.listIcon} /> 
                  <div className={classes.iconText}>
                    Enter the contact address: <p className={classes.contractAddress}>0x0a695De36514080C37712267edA8AC61aD6Cf209</p>
                  </div>                  
                </Typography>
              </div>

              <div className={classes.stepContainer}>
                <Typography variant="subtitle1" className={classes.wrapIcon}>
                  <InfoIcon className={classes.listIcon} /> 
                  <div className={classes.iconText}>
                    Set Slipage above 5%
                  </div>                  
                </Typography>
              </div>

              <div className={classes.stepContainer}>
                <Typography variant="subtitle1" className={classes.wrapIcon}>
                  <AccountBalanceWalletIcon className={classes.listIcon} /> 
                  <div className={classes.iconText}>
                    Get PAMPY
                  </div>                  
                </Typography>
              </div>

            </CardContent>
          </Card>
          
        </div>        
      </div>
    </div>
  )
}

PampyPage.propTypes = {};

export default PampyPage;