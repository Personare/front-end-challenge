import React from 'react'

import styles from './Header.module.css'
import Container from '../../Container'
import Title from './Title'
import Description from './Description'
import Button from '../../../containers/Button'

const Header = () => (
  <div className={styles.header}>
    <Container classes={styles.container}>
      <Title />
      <Description />
      <Button />
    </Container>
  </div>
)

export default Header
