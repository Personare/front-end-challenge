import React from 'react';
import { shallow } from 'enzyme';
import { CardList } from '../../../src/containers/CardList/CardList';
import FullCard from '../../../src/components/FullCard/FullCard';
import { stopGame, loadCards } from '../../../src/actions';

describe('containers -> CardList', () => {
  it('deve renderizar corretamente', () => {
    const cards = [
      {
        name: 'O MAGO',
        image: 'arcano1.jpg',
      },
      {
        name: 'A SACERDOTISA',
        image: 'arcano2.jpg',
      },
    ];
    const order = [ 0, 1];
    const wrapper = shallow(<CardList
      stopGame={stopGame}
      loadCards={loadCards}
      order={order}
      cards={cards} />);

    expect(wrapper.find('.CardList')).toHaveLength(1);
    expect(wrapper.find(FullCard)).toHaveLength(2);
  });
});
