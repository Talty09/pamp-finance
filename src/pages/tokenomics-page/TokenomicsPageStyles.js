import {makeStyles} from '@material-ui/core/styles';
import moonImg from '../../lib/assets/img/moonDark.jpg';

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
      backgroundImage: `url(${moonImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: '90%',
      height: "auto",
      margin: '0 auto',      
    },
    statContainer: {
      margin: "0 auto",
      width: "75%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    statCard: {
      width: "auto",
      minHeight: "50px",
      backgroundColor: "rgba(66,66,66,0.75)",
      marginBottom: "20px",
    },
    statCardText: {
      fontFamily: "Proxima Nova Rg",
      fontSize: "1rem",
      color: "#ffffff",
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
    infoCard: {      
      margin: "10px auto",
      width: "75vw",
      backgroundColor: "rgba(66,66,66,0.75)",
      marginTop: "50px",
      marginBottom: "200px",      
    },    
    infoCardContent: {
      margin: "0 auto !important",      
    },
    infoTitleText: {
      fontFamily: "Proxima Nova Rg",
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#ffffff",
      textAlign: "center",
      paddingBottom: "20px",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center"
    },
    infoCardText: {
      fontFamily: "Proxima Nova Rg",
      fontSize: "1.25rem",
      color: "#ffffff",
      paddingBottom: "15px",
    },

  }),
  {index: 1},
);

export default useStyles;