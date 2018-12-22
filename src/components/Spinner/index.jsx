import React, { memo } from 'react'

import styles from './Spinner.module.css'

const Spinner = () => (
  <div className={styles.spinner} />
)

export default memo(Spinner)
