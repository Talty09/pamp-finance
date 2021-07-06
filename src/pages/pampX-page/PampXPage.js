import React from "react";
import ReactDOM from "react-dom";
import useStyles from "./PampXPageStyles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Container from '../../components/common/container/Container';

function PampXPage(props) {
  const classes = useStyles();
  return (
    <Container className={classes.containerWrapper}>
      <Container className={classes.itemContainer}>
          <Typography className={classes.heading}>
            PampX
          </Typography>

          <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.infoText}>
              Pamp Finance LLC. was founded in May of 2021. The primary business function of the LLC is to manage the PampX liquidity pool in support of Pampy Coin.
            </Typography>
            <Divider variant="middle" className={classes.infoDivider} />
            <Typography className={classes.infoText}>
            The PampX liquidity pool serves the Pampy Coin through strategic buy and burn events. Pamp Finance, LLC. is responsible for the management of the pool and allocating pool rewards that are generated. 
            </Typography>
          </CardContent>
          </Card>

      </Container>
    </Container>
  )
}

PampXPage.propTypes = {};

export default PampXPage;