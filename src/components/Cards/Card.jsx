import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Card.module.css'
import CardName from './CardName'
import CardImage from './CardImage'

const Card = ({ isShuffle, item }) => (
  <div
    className={classNames(styles.card, {
      [styles.backcard]: isShuffle,
    })}
  >
    <CardImage isShuffle={isShuffle} item={item} />
    <CardName isShuffle={isShuffle} text={item.name} />
  </div>
)

Card.propTypes = {
  isShuffle: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
