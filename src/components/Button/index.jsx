import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({ text, isShuffle, setShuffle }) => {
  return (
    <button
      className={styles.button}
      onClick={() => setShuffle(true)}
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
  setShuffle: PropTypes.func.isRequired,
  isShuffle: PropTypes.bool.isRequired,
}

export default Button
