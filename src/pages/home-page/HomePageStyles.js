import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
    },
    imgBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    imgWrap: {
      margin: "auto 0",
    },
    loungeImg: {
      display: "block",
      width: "100%",
      heignt: "auto",
      margin: "auto"
    },
    pampyBtnContainer: {
      marginTop: "50px",
      marginBottom: "50px"
    },
  }),
  {index: 1},
);

export default useStyles;