import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      
    },
    btnContainer: {
      margin: 'auto',   
    },
    btnMain: {
      paddingLeft: "15px",
      paddingRight: "15px",
      color: "#ffffff",
      fontSize: "24px",
      fontWeight: "1000",
      alignItems: "center",
      textDecoration: "none",
      borderStyle: "solid",
      borderColor: "#ED45A0",
      "&:hover,&:focus": {
        backgroundColor: "#181818",
        borderStyle: "none",
        borderWidth: "4px",
      },
    },
  }),
  {index: 1},
);

export default useStyles;