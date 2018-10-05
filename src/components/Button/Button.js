import React from 'react';
import './Button.styl';

const button = (props) => {
  let classes = [ 'Btn' ];
  if (props.btnType) {
    classes.push(props.btnType);
  }

  return (
    <button
      className={ classes.join(' ') }
      onClick={props.click}>
      {props.children}
    </button>
  );
}

export default button;
