import React from 'react'
import PropTypes from 'prop-types'

import styles from './CardInfo.module.css'

const CardInfo = ({ name }) => (
  <div className={styles.info}>
    <h2 className={styles.title}>
      {name}
    </h2>
    <p className={styles.description}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>
  </div>
)

CardInfo.propTypes = {
  name: PropTypes.string.isRequired,
}

export default CardInfo
