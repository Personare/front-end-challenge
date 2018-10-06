import React from 'react';
import { shallow } from 'enzyme';
import { Game } from '../../../src/containers/Game/Game';
import GameMenu from '../../../src/components/GameMenu/GameMenu';
import Card from '../../../src/components/Card/Card';
import SelectedCard from '../../../src/containers/SelectedCard/SelectedCard';
import Button from '../../../src/components/Button/Button';
import * as actions from '../../../src/actions';

describe('containers -> Game', () => {
  let wrapper;
  let game = {
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
  
  beforeEach(() => {
    game = {
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
    wrapper = shallow(<Game
      loadCards={actions.loadCards}
      selectCard={actions.selectCard}
      startGame={actions.startGame}
      stopGame={actions.stopGame}
      game={game}
    />);
  });

  it('deve renderizar corretamente', () => {
    expect(wrapper.find(GameMenu)).toHaveLength(1);
    expect(wrapper.find('section.Game')).toHaveLength(1);
    expect(wrapper.find(Card)).toHaveLength(2);
    expect(wrapper.find(SelectedCard)).toHaveLength(1);
  });

  it('deve chamar o metodo de iniciar o Game corretamente', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'startGame');

    expect(wrapper.find(GameMenu).first().dive().find('.GameMenu')).toHaveLength(1);
    expect(wrapper.find(GameMenu).first().dive().find(Button)).toHaveLength(1);
    wrapper.find(GameMenu).first().dive().find(Button).dive().find('button').simulate('click');
    expect(instance.startGame).toHaveBeenCalled();
  });

  it('deve chamar o metodo de parar o Game corretamente', () => {
    game.play = true;
    wrapper.setProps({ game });

    const instance = wrapper.instance();
    jest.spyOn(instance, 'stopGame');

    expect(wrapper.find(GameMenu).first().dive().find('.GameMenu')).toHaveLength(1);
    expect(wrapper.find(GameMenu).first().dive().find(Button)).toHaveLength(1);
    wrapper.find(GameMenu).first().dive().find(Button).dive().find('button').simulate('click');
    expect(instance.stopGame).toHaveBeenCalled();
  });

  it('deve chamar o metodo de selecionar o Card corretamente', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'selectCard');

    expect(wrapper.find(Card).first().dive().find('.CardContainer')).toHaveLength(1);
    wrapper.find(Card).first().dive().find('.CardContainer').simulate('click');
    expect(instance.selectCard).toHaveBeenCalled();
  });
});
