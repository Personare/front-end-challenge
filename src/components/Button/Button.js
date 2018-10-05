import React from 'react';
import PropTypes from 'prop-types';

import './Button.styl';

const button = (props) => {
  const classes = ['Btn'];
  if (props.btnType) {
    classes.push(props.btnType);
  }

  return (
    <button
      className={classes.join(' ')}
      onClick={props.click}
      type="button"
    >
      {props.children}
    </button>
  );
};

button.propTypes = {
  btnType: PropTypes.string,
  click: PropTypes.func,
  children: PropTypes.string,
};

export default button;
