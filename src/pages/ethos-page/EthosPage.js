import React from "react";
import ReactDOM from "react-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Container from '../../components/common/container/Container';

import useStyles from "./EthosPageStyles";

function EthosPage(props) {
  const classes = useStyles();
  return (
    <Container className={classes.containerWrapper}>
      <Container className={classes.itemContainer}>
          <Typography className={classes.heading}>
            Ethos
          </Typography>

          <Card className={classes.card}>
            <CardHeader
              title={
                <Typography className={classes.titleText}>
                  Per le gente
                </Typography>
              }
              subheader={
                <Typography className={classes.subheaderText}>
                  We are you. You are us. We are PAMPY.
                </Typography>
              }
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.infoText}>
                Pampy Coin started as an experiment. 
              </Typography>
              <Typography className={classes.infoText}>
                A few members of the Vefam investment community launched a token on Binance Smart Chain with a small amount of locked liquidity. The mission was to provide the community with a meme coin made by the people, for the people. The family quickly mobilized to add value to the meme. Pampy Coin aims to give pamp to the people who hold it, through charitable donations and strategic buy and burn events, funded by the PampX liquidity pool, managed by Pamp Finance LLC.
              </Typography>
              <Typography className={classes.infoText}>
                Vive la pamp.
              </Typography>
            </CardContent>
          </Card>
      </Container>
    </Container>
  )
}

EthosPage.propTypes = {};

export default EthosPage;