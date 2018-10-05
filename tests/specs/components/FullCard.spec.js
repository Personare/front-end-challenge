import React from 'react';
import { shallow } from 'enzyme';
import FullCard from '../../../src/components/FullCard/FullCard';

describe('components -> FullCard', () => {
  it('o componente deve renderizar corretamente de acordo com as propriedades passadas', () => {
    const wrapper = shallow(<FullCard />);
    const card = {
      image: 'https://imagesUrl.com.br/images/arcano1.jpg',
      name: 'O MAGO'
    };
    wrapper.setProps({
      image: card.image,
      name: card.name
    });

    expect(wrapper.find('article')).toHaveLength(1);
    expect(wrapper.find('img').filterWhere(img => img.src === card.image)).toBeTruthy();
    expect(wrapper.find('img').filterWhere(img => img.alt === card.name)).toBeTruthy();
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').text()).toEqual(card.name);
    expect(wrapper.find('p')).toHaveLength(2);
  });
});
