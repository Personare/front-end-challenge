import React from 'react'
import PropTypes from 'prop-types'

import styles from './Overlay.module.css'

const Overlay = ({ isActive }) => (
  isActive
    ? <div className={styles.overlay} />
    : null
)

Overlay.propTypes = {
  isActive: PropTypes.bool.isRequired,
}

export default Overlay
