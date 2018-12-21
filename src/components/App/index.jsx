import React from 'react'

import styles from './App.module.css'
import Header from '../layouts/Header'
import Cards from '../../containers/Cards'

const App = () => (
  <div className={styles.app}>
    <Header />
    <Cards />
  </div>
)

export default App
