import {makeStyles} from '@material-ui/core/styles';
import deskImage from '../../lib/assets/img/desk.jpg';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%"
    },
    content: {
      margin: "auto",
      width: "90%",
      display: "flex",
      flexDirection: "column",      
      alignItems: "left",
      justifyContent: "center"
    },
    headingWrapper: {
      margin: "auto 0",
      backgroundImage: `url(${deskImage})`,
      backgroundSize: "cover",
      overflow: "hidden"
    },
    heading: {
      color: "#ffffff",
      fontSize: "4rem",
      fontWeight: "400",
      paddingLeft: "1vh"
    },
    headingContainer: {
      margin: "auto 0",      
    },
    deskImg: {
      height: "75%",
      width: "100%",
    },
    imgContentContainer: {
      width: "50%",
      position: "absolute",
      top: "25%",
      left: "50%",
      transform: 'translate(-50%,-20%)', 
    },
    imgText: {     
      margin: "0 auto", 
      color: "#ffffff",
      fontSize: "6rem",
      fontWeight: "400",
      textShadow: "3px 3px 2px #000000",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    listHeading: {
      margin: "0 auto",
      fontFamily: "Proxima Nova Rg",
      fontSize: "1.75rem",
      color: "#ffffff",
      textShadow: "1px 1px 1px #000000",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },    
    listDivider: {      
      background: "#ED45A0",            
    },
    avatar: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    listIcon: {
      fontSize: "xx-large",
      color: "#ffffff",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      display: "inline-flex",
    },
    infoCard: {
      margin: "0 auto", 
      width: "75%",
      backgroundColor: "#424242",
      opacity: "75%",
    },
    stepText: {
      fontFamily: "Proxima Nova Rg",
      color: "#ffffff",
      textSize: "1rem",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
    },
    stepContainer: {
      display: "flex",
      flexDirection: "row",
      padding: "25px",
    },
    wrapIcon: {      
      fontFamily: "Proxima Nova Rg",
      color: "#ffffff",
      fontSize: "1rem",
    },
    iconText: {
      display: "inline-flex",
      paddingLeft: "20px",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
    },
    swapLink: {
      display: "inline-flex",
      paddingLeft: "2px",
      paddingRight: "2px",
      fontFamily: "Proxima Nova Rg",
      color: "#ED45A0", 
      fontWeight: "600",
      textDecoration: "none",
      "&:hover,&:focus": {
        color: '#ED45A0',
      },       
    },
    contractAddress: {
      display: "flex",
      paddingLeft: "2px",
      paddingRight: "2px",
      fontFamily: "Proxima Nova Rg",
      color: "#ED45A0", 
    }
  }),
  {index: 1},
);

export default useStyles;