import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({
  setIsShuffle,
  setShuffleCards,
  cards,
  isShuffle,
  text,
}) => {
  const handleClick = () => {
    setIsShuffle(true)
    setShuffleCards(cards)
  }

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      disabled={isShuffle}
    >
      {text}
    </button>
  )
}
Button.defaultProps = {
  text: 'Embaralhar cartas',
}

Button.propTypes = {
  text: PropTypes.string,
  setIsShuffle: PropTypes.func.isRequired,
  setShuffleCards: PropTypes.func.isRequired,
  isShuffle: PropTypes.bool.isRequired,
  cards: PropTypes.array.isRequired,
}

export default Button
