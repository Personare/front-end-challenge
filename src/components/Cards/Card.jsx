import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.css'

const Card = ({ item }) => (
  <div className={styles.card}>
    <img
      src={item.imageUrl}
      className={styles.image}
      alt={item.name}
    />
    <div className={styles.text}>
      {item.name}
    </div>
  </div>
)

Card.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
