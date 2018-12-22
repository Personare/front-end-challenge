import React from 'react'

import styles from './App.module.css'
import Header from '../layouts/Header'
import Container from '../Container'
import Cards from '../../containers/Cards'
import Overlay from '../../containers/layouts/Overlay'

const App = () => (
  <div className={styles.app}>
    <Header />
    <Container>
      <Cards />
    </Container>
    <Overlay />
  </div>
)

export default App
