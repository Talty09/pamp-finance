import React from 'react';
import PropTypes from 'prop-types';
import {Paper as MuiPaper} from '@material-ui/core';
import useStyles from './PaperStyles';
import clsx from 'clsx';

function Paper(props) {
  const {children, elevation, className} = props;
  const classes = useStyles();

  return (
    <MuiPaper className={clsx(classes.paper, className)} elevation={elevation}>
      {children}
    </MuiPaper>
  );
}

Paper.defaultProps = {
  elevation: 5,
};

Paper.propTypes = {
  className: PropTypes.string,
  elevation: PropTypes.number,
};

export default Paper;
