import React from 'react';

import Button from '../Button/Button';
import './GameMenu.styl';

const gameMenu = (props) => (
  <nav className="GameMenu">
    {
      props.play ?
        <Button click={props.stop} btnType="Btn-default">Mostrar Cartas</Button> :
        <Button click={props.start} btnType="Btn-default">Iniciar Jogo</Button>
    }
  </nav>
);

export default gameMenu;
