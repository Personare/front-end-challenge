import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import './GameMenu.styl';

const gameMenu = props => (
  <nav className="GameMenu">
    {
      props.play
        ? <Button click={props.stop} btnType="Btn-default">Mostrar Cartas</Button>
        : <Button click={props.start} btnType="Btn-default">Iniciar Jogo</Button>
    }
  </nav>
);

gameMenu.propTypes = {
  play: PropTypes.bool,
  stop: PropTypes.func,
  start: PropTypes.func,
};

export default gameMenu;
