import React from 'react';
import { shallow } from 'enzyme';
import GameMenu from '../../../src/components/GameMenu/GameMenu';
import Button from '../../../src/components/Button/Button';

describe('components -> GameMenu', () => {
  it('deve renderizar corretamente com o botão certo se o jogo não tiver iniciado', () => {
    const wrapper = shallow(<GameMenu />);

    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.contains(<Button btnType="Btn-default">Iniciar Jogo</Button>)).toBeTruthy();
  });

  it('deve renderizar corretamente com o botão certo se o jogo tiver iniciado', () => {
    const wrapper = shallow(<GameMenu />);
    wrapper.setProps({ play: true });

    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.contains(<Button btnType="Btn-default">Mostrar Cartas</Button>)).toBeTruthy();
  });
});
