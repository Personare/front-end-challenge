import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


const CardImage = ({ image, modClass = 'mod-front' }) => (
  <figure className={`card-image ${modClass}`}>
    <img src={image} />
  </figure>
);

CardImage.defaultProps = {
  modClass: 'mod-front'
};

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  modClass: PropTypes.string
};

export default CardImage;