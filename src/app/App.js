import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from '@material-ui/core/Box';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";

import footerSocialLinks from '../components/footer-social-links/FooterSocialLinks';

import './App.css';
import useStyles from './AppStyles';

import PampyIconButton from '../components/pampy-icon-button/PampyIconButton';

import HomePage from '../pages/home-page/HomePage';
import PampyPage from '../pages/pampy-page/PampyPage';
import PampXPage from '../pages/pampX-page/PampXPage';
import EthosPage from '../pages/ethos-page/EthosPage';
import TokenomicsPage from '../pages/tokenomics-page/TokenomicsPage';
import FooterSocialLinks from "../components/footer-social-links/FooterSocialLinks";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Router>
        <BrowserRouter>
          <header className={classes.header}>
            <AppBar 
                    disableGutters={true}>
                <Toolbar className={classes.toolBar}>
                  <Box display="flex" flexDirection="row">
                    <PampyIconButton />
                    <List display="flex" flexDirection="row" justifyContent="flex-center">
                      <ListItem className={classes.listItem}>
                        <Link to="pampy" className={classes.navLink}>
                          Pampy
                        </Link>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <Link to="pampx" className={classes.navLink}>
                          PampX
                        </Link>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <Link to="ethos" className={classes.navLink}>
                          Ethos
                        </Link>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                        <Link to="tokenomics" className={classes.navLink}>
                          Tokenomics
                        </Link>
                      </ListItem>                    
                    </List>
                  </Box>
                </Toolbar>
            </AppBar>
          </header>
          <div className={classes.main}>
            <Grid container>
              <Grid item >
               <Switch>
                  <Route
                     path="/"
                     exact
                     render={(props) => <HomePage {...props} />} 
                   />
                   <Route
                     path="/pampy"                  
                     render={(props) => <PampyPage {...props} />} 
                   />
                   <Route
                     path="/pampx"
                     render={(props) => <PampXPage {...props} />} 
                   />
                   <Route
                     path="/ethos"
                     render={(props) => <EthosPage {...props} />} 
                   />
                   <Route
                     path="/tokenomics"
                     render={(props) => <TokenomicsPage {...props} />} 
                   />
               </Switch>
              </Grid>
            </Grid>
          </div>
          <footer className={classes.footer}>
            <FooterSocialLinks />
          </footer>
        </BrowserRouter>
      </Router>
      
    </div>   
  );
}

export default App;
