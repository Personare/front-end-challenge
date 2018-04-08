import React from 'react';
import PropTypes from 'prop-types';

import CardImage from '../image';

const CardFlip = ({ frontCard, backCard, flipped = false }) => (
  <div className={`'card-flip ${flipped ? 'mod-flipped' : ''}'`}>
    {frontCard && <CardImage {...frontCard} modClass={'mod-front'} />}
    {backCard && <CardImage {...backCard} modClass={'mod-back'}/>}
  </div>
);

CardFlip.propTypes = {
  frontCard: PropTypes.objectOf(CardImage),
  backCard: PropTypes.objectOf(CardImage),
  flipped: PropTypes.bool
};

export default CardFlip;