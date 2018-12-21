import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({ text }) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: 'Embaralhar cartas',
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button
