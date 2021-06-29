import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(
  (theme) => ({
    item: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
  {index: 1},
);

export default useStyles;
