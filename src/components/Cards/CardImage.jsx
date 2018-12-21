import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.css'

const CardImage = ({ currentCard, isShuffle, item }) => {
  let imageKey = (isShuffle && currentCard.id !== item.id) ? 'imageBackCard' : 'imageUrl'

  return (
    <img
      src={item[imageKey]}
      className={styles.image}
      alt={item.name}
    />
  )
}

CardImage.propTypes = {
  currentCard: PropTypes.object.isRequired,
  isShuffle: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageBackCard: PropTypes.string.isRequired,
  }).isRequired,
}

export default CardImage
