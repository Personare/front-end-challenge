import React from 'react';
import PropTypes from 'prop-types';

import CardImage from '../image';

const CardFlip = ({ frontImage, backImage, flipped = false }) => (
  <div className={`card-flip ${flipped ? 'mod-flipped' : ''}`}>
    {frontImage && <CardImage {...frontImage} modClass={'mod-front'} />}
    {backImage && <CardImage {...backImage} modClass={'mod-back'}/>}
  </div>
);

CardFlip.propTypes = {
  frontImage: PropTypes.objectOf(CardImage),
  backImage: PropTypes.objectOf(CardImage),
  flipped: PropTypes.bool
};

export default CardFlip;