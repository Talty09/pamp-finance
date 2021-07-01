import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      margin: 'auto',
    },
    linkContainer: {
      paddingLeft: "24px"
    },
    logoLinkImg: {
      verticalAlign: 'middle',
      maxHeight: '41px',
      position: 'relative',
      display: 'inline-flex',
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
    socialIcon: {
      height: "30px",
      width: "30px"
    },
  }),
  {index: 1},
);

export default useStyles;