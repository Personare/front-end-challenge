import React from 'react';
import { shallow } from 'enzyme';
import { Game } from '../../../src/containers/Game/Game';
import GameMenu from '../../../src/components/GameMenu/GameMenu';
import Card from '../../../src/components/Card/Card';
import SelectedCard from '../../../src/containers/SelectedCard/SelectedCard';
import * as actions from '../../../src/actions';

describe('containers -> Game', () => {
  it('deve renderizar corretamente', () => {
    const game = {
      cards: {
        0: {
          name: 'O MAGO',
          image: 'arcano1.jpg',
        },
        1: {
          name: 'A SACERDOTISA',
          image: 'arcano2.jpg',
        }
      },
      order: [ 0, 1],
      play: false,
      selected: false,
    };

    const wrapper = shallow(<Game
      loadCards={actions.loadCards}
      selectCard={actions.selectCard}
      startGame={actions.startGame}
      stopGame={actions.stopGame}
      game={game}
    />);

    expect(wrapper.find(GameMenu)).toHaveLength(1);
    expect(wrapper.find('section.Game')).toHaveLength(1);
    expect(wrapper.find(Card)).toHaveLength(2);
    expect(wrapper.find(SelectedCard)).toHaveLength(1);
  });
});
