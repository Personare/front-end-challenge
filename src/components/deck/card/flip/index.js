import React from 'react';
import PropTypes from 'prop-types';

import CardImage from '../image';

const CardFlip = ({ frontImage, backImage, flipped = false }) => (
  <div className={`card-flip ${flipped ? 'mod-flipped' : ''}`}>
    <CardImage {...frontImage} modClass="mod-front" />
    <CardImage {...backImage} modClass="mod-back" />
  </div>
);

CardFlip.defaultProps = {
  flipped: false
};

CardFlip.propTypes = {
  frontImage: PropTypes.objectOf(CardImage).isRequired,
  backImage: PropTypes.objectOf(CardImage).isRequired,
  flipped: PropTypes.bool
};

export default CardFlip;
