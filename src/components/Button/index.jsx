import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({
  isLoading,
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
      disabled={isLoading || isShuffle || !cards.length}
    >
      {text}
    </button>
  )
}
Button.defaultProps = {
  text: 'Embaralhar cartas',
}

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  text: PropTypes.string,
  setIsShuffle: PropTypes.func.isRequired,
  setShuffleCards: PropTypes.func.isRequired,
  isShuffle: PropTypes.bool.isRequired,
  cards: PropTypes.array.isRequired,
}

export default Button
