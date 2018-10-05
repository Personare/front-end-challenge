import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationItem = ({ isActive, to, label }) => {
  const classes = [];
  if (isActive) {
    classes.push('active');
  }

  return (
    <li className={classes.join(' ')}>
      <Link to={to}>
        {label}
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  isActive: PropTypes.bool,
  to: PropTypes.string,
  label: PropTypes.string,
};

export default withRouter(({ location, ...props }) => {
  const isActive = location.pathname === props.to;

  return <NavigationItem {...props} isActive={isActive} />;
});
