import React from 'react';

import Button from '../Button/Button';
import './GameMenu.sass';

const gameMenu = (props) => (
  <nav className="GameMenu">
    {
      props.play ?
        <Button click={props.stop}>Mostrar Cartas</Button> :
        <Button click={props.start}>Iniciar Jogo</Button>
    }
  </nav>
);

export default gameMenu;
