import React from 'react';
import PropTypes from 'prop-types';

import CardImage from '../image';
import './index.css';

const CardFlip = ({ name = 'card', flipped = false, ...props }) => (
  <div className={`card-flip ${flipped ? 'mod-flipped' : ''}`}>
    <CardImage {...props.frontImage} modClass="mod-front" name={name} />
    <CardImage {...props.backImage} modClass="mod-back" name={name} />
  </div>
);

CardFlip.defaultProps = {
  name: 'card',
  flipped: false,
};

CardFlip.propTypes = {
  name: PropTypes.string,
  frontImage: PropTypes.objectOf(CardImage).isRequired,
  backImage: PropTypes.objectOf(CardImage).isRequired,
  flipped: PropTypes.bool,
};

export default CardFlip;
