import React from 'react'
import PropTypes from 'prop-types'

import styles from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => (
  <div className={styles.message}>
    {message}
  </div>
)

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage
