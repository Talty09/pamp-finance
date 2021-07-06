import {makeStyles} from '@material-ui/core/styles';
import vaultImage from '../../lib/assets/img/vault_edited.jpg';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      
    },
    containerWrapper: {
      display: "block",
    },
    itemContainer: {
      flexDirection: "column",
      paddingTop: "100px",
      paddingBottom: "100px",
      backgroundImage: `url(${vaultImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: '90%',
      height: "auto",
      margin: '0 auto',      
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
    card: {      
      margin: "10px auto",
      width: "75vw",
      backgroundColor: "rgba(66,66,66,0.75)",
      marginTop: "50px",
      marginBottom: "200px",      
    },    
    cardContent: {
      margin: "0 auto !important",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    infoText: {
      fontFamily: "Proxima Nova Rg",
      fontSize: "1.25rem",
      color: "#ffffff",
    },
    infoDivider: {
      marginTop: "25px",
      marginBottom: "25px",
      background: "#ED45A0",  
    }
  }),
  {index: 1},
);

export default useStyles;