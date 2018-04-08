import React from 'react';
import PropTypes from 'prop-types';


const CardImage = ({ image, modClass = '' }) => (
  <figure className={`card-image ${modClass}`}>
    <img src={image} />
  </figure>
);

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  modClass: PropTypes.string
};

export default CardImage;