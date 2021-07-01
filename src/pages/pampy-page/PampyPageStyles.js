import {makeStyles} from '@material-ui/core/styles';
import deskImage from '../../lib/assets/img/desk.jpg';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      
    },

    testContainer: {      
      margin: "0 auto",
      height: "100vh",
    },

    containerWrapper: {
      display: "block",
    },
    itemContainer: {
      flexDirection: "column",
      paddingTop: "100px",
      backgroundImage: `url(${deskImage})`,
      backgroundSize: "cover",
      width: '90%',
      margin: 'auto',      
    },
    heading: {
      margin: "0 auto", 
      color: "#ffffff",
      fontSize: "calc(4rem + 1vw)",
      fontWeight: "400",
      textShadow: "3px 3px 2px #000000",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    howToHeading: {
      fontFamily: "Proxima Nova Rg",
      fontSize: "calc(.75rem + 1vw)",
      margin: "0 auto", 
      color: "#ffffff",
      textShadow: "2px 2px 1px #000000",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    card: {      
      margin: "10px auto",
      width: "75vw",
      backgroundColor: "#424242",
      opacity: "75%",
    },    
    cardHeading: {
      margin: "0 auto !important",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    avatar: {
      backgroundColor: "gray",
      margin: "0 auto !important",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    cardContent: {
      margin: "0 auto !important",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    contentContainer: {
      verticalAlign: "middle",
      display: "flex",
      flexDirection: "row",
    },
    wrapIcon: {      
      fontFamily: "Proxima Nova Rg",
      color: "#ffffff",
      fontSize: "1rem",
      fontSize: "2vmin",
    },
    listIcon: {
      fontSize: "1rem",
      fontSize: "2vmin",
      color: "#ffffff",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      display: "inline-flex",
    },
    iconText: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",

    },
    swapLink: {
      display: "inline-flex",      
      fontFamily: "Proxima Nova Rg",
      fontSize: "1rem",
      fontSize: "2vmin",
      color: "#ffffff",
      textDecoration: "none",
      "&:hover,&:focus": {
        color: '#ED45A0',
      },       
    },
    contractAddress: {
      fontFamily: "Proxima Nova Rg",
      color: "#ED45A0", 
    },
    nonLinkText: {
      fontFamily: "Proxima Nova Rg",
      color: "#ffffff",
      fontSize: "1rem",
      fontSize: "2vmin",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
    },
    greenDiv: {
      backgroundColor: "green",
      height: "100px",
      width: "100px",
    },
    redDiv: {
      backgroundColor: "red",
      height: "100px",
      width: "100px",
    }
  }),
  {index: 1},
);

export default useStyles;