import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


const CardImage = ({ name = 'card', image, modClass = 'mod-front' }) => (
  <figure className={`card-image ${modClass}`}>
    <img src={image} alt={name} />
  </figure>
);

CardImage.defaultProps = {
  name: 'card',
  modClass: 'mod-front',
};

CardImage.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
  modClass: PropTypes.string,
};

export default CardImage;
