import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ backImage, image }) => (
  <figure className="card" />
)

Card.propTypes = {
  backImage: PropTypes.string,
  image: PropTypes.string,
}
