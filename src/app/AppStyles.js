import {makeStyles} from '@material-ui/core/styles';
import {fontWeightBold} from '../lib/styles/mui-config';

const useStyles = makeStyles(
  (theme) => ({
    root: {
    
    },
    wrapper: {
      height: "100vh",
      display: "flex",
      flexDirection: "column"
    },
    header: {
      display: "flex",
      height: "75px",
      backgroundColor: "red",
    },
    main: {
      flex: "auto",
      backgroundColor: "#000000",
    },
    appFooter: {
      display: "flex",
      flex: "auto",
      height: "180px",
      backgroundColor: "#000000",
    },
    containerFluid: {
      
    },
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      "@media (min-width: 576px)": {
        maxWidth: "540px",
      },
      "@media (min-width: 768px)": {
        maxWidth: "720px",
      },
      "@media (min-width: 992px)": {
        maxWidth: "960px",
      },
      "@media (min-width: 1200px)": {
        maxWidth: "1140px",
      },
    },
    appBar: {
      display: "flex",
      border: "0",
      borderRadius: "3px",
      color: "#fff",      
      width: "100%",
      backgroundColor: "#000",
      boxShadow:
        "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
      transition: "all 150ms ease 0s",
      alignItems: "center",
      flexFlow: "row nowrap",
      justifyContent: "flex-start",
      position: "absolute",
      zIndex: "unset",
      height: "75px",
    },
    listItem: {
      float: "left",
      color: "#ffffff",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0px",
      padding: "0",
    },
    navLink: {
      color: "inherit",
      position: "relative",
      padding: "0.9375rem",
      fontWeight: "300",
      fontSize: "16px",
      borderRadius: "3px",
      lineHeight: "16px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover,&:focus": {
        color: '#ED45A0',
      },
    },
    grid: {
      marginRight: "-15px",
      marginLeft: "-15px",
      width: "auto",
    },
    gridItem : {
      position: "relative",
      width: "100%",
      minHeight: "1px",
      paddingRight: "15px",
      paddingLeft: "15px",
      flexBasis: "auto",
    },
    toolBar: {
      backgroundColor: "#000",
      height: '75px',
      margin: 'auto 0',
    },
    socialLinkIcons: {
      
    },
  }),
  {index: 1},
);

export default useStyles;