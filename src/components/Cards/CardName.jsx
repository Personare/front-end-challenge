import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.css'

const CardName = ({ isShuffle, text }) => (
  isShuffle
    ? null
    : <div className={styles.text}>{text}</div>
)

CardName.propTypes = {
  text: PropTypes.string.isRequired,
  isShuffle: PropTypes.bool.isRequired,
}

export default CardName
