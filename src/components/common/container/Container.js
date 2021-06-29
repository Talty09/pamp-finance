import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';

const Container = React.forwardRef((props, ref) => {
  const {children, isReset, ...rest} = props;

  return (
    <Grid {...rest} container innerRef={ref}>
      {children}
    </Grid>
  );
});

Container.defaultProps = {
  spacing: 3,
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
};

export default Container;
