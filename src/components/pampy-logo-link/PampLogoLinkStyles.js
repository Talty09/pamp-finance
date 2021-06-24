import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      margin: 'auto',
    },
    logoLinkImg: {
      verticalAlign: 'middle',
      maxHeight: '41px',
      position: 'relative',
      display: 'inline-flex',
    },
  }),
  {index: 1},
);

export default useStyles;