import React from 'react';
import PropTypes from 'prop-types';
import {Grid as MuiGrid} from '@material-ui/core';

import useStyles from './ItemStyles';
import clsx from 'clsx';

function Item(props) {
  const {children, className, ...rest} = props;
  const classes = useStyles(props);

  return (
    <MuiGrid className={clsx(classes.item, className)} item {...rest}>
      {children}
    </MuiGrid>
  );
}

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  xs: PropTypes.number,
};

export default Item;
