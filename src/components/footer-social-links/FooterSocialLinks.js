import React from 'react';
import Box from '@material-ui/core/Box';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import TelegramIcon from "../../lib/assets/img/telegram-icon.png";
import TwitterIcon from "../../lib/assets/img/twitter-icon.png";
import DiscordIcon from "../../lib/assets/img/discord-icon.png";
import RedditIcon from "../../lib/assets/img/reddit-icon.png";

import useStyles from './FooterSocialLinksStyles';

function FooterSocialLinks(props) {
  const classes = useStyles();
    return (
      <Box display="flex" flexDirection="row">
      <List display="flex" flexDirection="row" justifyContent="flex-center">
        <ListItem className={classes.listItem}>
          <a href="https://t.me/LetsGetPampyChat" target="_blank">
            <img src={TelegramIcon} className={classes.socialIcon}  />
          </a>
        </ListItem>
        <ListItem className={classes.listItem}>
          <a href="https://twitter.com/CoinPampy" target="_blank">
            <img src={TwitterIcon} className={classes.socialIcon}  />
          </a>
        </ListItem>
        <ListItem className={classes.listItem}>
          <a href="https://discord.com/invite/4GZJYF72" target="_blank">
            <img src={DiscordIcon} className={classes.socialIcon}  />
          </a>
        </ListItem>
        <ListItem className={classes.listItem}>
          <a href="https://www.reddit.com/r/PAMPY/" target="_blank">
            <img src={RedditIcon} className={classes.socialIcon} />
          </a>
        </ListItem>
      </List>
    </Box>
  );
  
};

export default FooterSocialLinks;
