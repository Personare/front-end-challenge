import React from 'react'

import styles from './Header.module.css'
import Button from '../../Button'

const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.title}>
      TAROT DO DIA
    </h1>
    <p className={styles.description}>
      Escolha um momento tranquilo para o jogo e feche os olhos por alguns instantes. Concentre-se e peça mentalmente uma orientação para o seu dia. Você só pode tirar uma carta, por isso, quando se sentir preparado embaralhe as cartas.
    </p>
    <Button />
  </div>
)

export default Header
