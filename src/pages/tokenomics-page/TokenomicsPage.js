import React from "react";
import ReactDOM from "react-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Container from '../../components/common/container/Container';

import useStyles from "./TokenomicsPageStyles";

function TokenomicsPage(props) {
  const classes = useStyles();
  return (
    <Container className={classes.containerWrapper}>
      <Container className={classes.itemContainer}>
        <Typography className={classes.heading}>
          Tokenomics
        </Typography>
        <Container className={classes.statContainer}>

          <Card className={classes.statCard}>
            <CardContent>
              <Typography className={classes.statCardText}>
                Total Supply: 210,000,000,000
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.statCard}>
            <CardContent>
              <Typography className={classes.statCardText}>
                5% of each transaction adds to the liquidity pool on PancakeSwap V2. 
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.statCard}>
            <CardContent>
              <Typography className={classes.statCardText}>
                No other fees, 

                No Inflation.
              </Typography>
            </CardContent>
          </Card>

        </Container>

        <Card className={classes.infoCard}>
          <CardHeader 
          title={
            <Typography className={classes.infoTitleText}>
              Liquidity is locked through Unicrypt.
            </Typography>
          }
          />
          <CardContent className={classes.infoCardContent}>
            <Typography className={classes.infoCardText}>
              10% of the initial supply held by the dev wallet for marketing and development of the project. The remaining 90% of coins were added to liquidity on Pancakeswap V2, initial liquidity locked for 14 years in an effort to foster organic growth for Pampy Coin.
            </Typography>
          </CardContent>
        </Card>

      </Container>
    </Container>
  )
}

TokenomicsPage.propTypes = {};

export default TokenomicsPage;