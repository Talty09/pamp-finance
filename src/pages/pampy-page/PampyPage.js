import React from "react";
import ReactDOM from "react-dom";
import useStyles from "./PampyPageStyles";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import NavigationIcon from '@material-ui/icons/Navigation';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import InfoIcon from '@material-ui/icons/Info';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

import Container from '../../components/common/container/Container';
import Item from '../../components/common/item/Item';

import DeskImage from '../../lib/assets/img/desk.jpg';

function PampyPage(props) {
  const classes = useStyles();
  return (    
    <Container className={classes.containerWrapper}>
      <Container className={classes.itemContainer}>
          <Typography className={classes.heading}>
            Pampy Coin
          </Typography>
          <Typography className={classes.howToHeading}>
                    How To Get PAMPY
          </Typography>

            <Card className={classes.card}>
              <CardHeader 
                title={
                    <Avatar aria-label="PancakeSwap" className={classes.avatar}>
                      <NavigationIcon className={classes.listIcon} />
                    </Avatar>
                }
                />
                <CardContent className={classes.cardContent}>
                  <Typography  className={classes.nonLinkText}>
                  <a className={classes.swapLink} href="https://exchange.pancakeswap.finance/#/swap" target="_blank">
                        Navigate to PancakeSwap and swap BNB for PAMPY
                        </a>
                  </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card}>
              <CardHeader 
                title={
                    <Avatar aria-label="EnterContract" className={classes.avatar}>
                      <KeyboardIcon className={classes.listIcon} />
                    </Avatar>
                }
              />
              <CardContent className={classes.cardContent}>
                <Typography  className={classes.nonLinkText}>
                  Enter the contact address: 0x0a695De36514080C37712267edA8AC61aD6Cf209
                </Typography>
              </CardContent>
            </Card>

            <Card className={classes.card}>
              <CardHeader 
                title={
                    <Avatar aria-label="SetSlipage" className={classes.avatar}>
                      <InfoIcon className={classes.listIcon} />
                    </Avatar>
                }
              />
              <CardContent className={classes.cardContent}>
                <Typography  className={classes.nonLinkText}>
                Set Slipage above 5%
                </Typography>
              </CardContent>
            </Card>

            <Card className={classes.card}>
              <CardHeader 
                title={
                    <Avatar aria-label="GetPAMPY" className={classes.avatar}>
                      <AccountBalanceWalletIcon className={classes.listIcon} />
                    </Avatar>
                }
              />
              <CardContent className={classes.cardContent}>
                <Typography  className={classes.nonLinkText}>
                  Get PAMPY
                </Typography>
              </CardContent>
            </Card>
          
      </Container>
    </Container>
    
  )
}

PampyPage.propTypes = {};

export default PampyPage;