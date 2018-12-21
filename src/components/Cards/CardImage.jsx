import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.css'

const CardImage = ({ selected, isShuffle, item }) => (
  <img
    src={item[isShuffle && !selected ? 'imageBackCard' : 'imageUrl']}
    className={styles.image}
    alt={item.name}
  />
)

CardImage.propTypes = {
  selected: PropTypes.bool.isRequired,
  isShuffle: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageBackCard: PropTypes.string.isRequired,
  }).isRequired,
}

export default CardImage
