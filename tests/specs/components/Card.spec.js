import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../../src/components/Card/Card';
import TweenMax from 'gsap';

describe('components -> Card', () => {
  it('deve renderizar corretamente com as propriedades certas', () => {
    const wrapper = shallow(<Card />);
    const card = {
      card: 'https://imagesUrl.com.br/images/arcano1.jpg',
      imageBack: 'http://lorem.com.br/ipsum.jpg'
    };
    wrapper.setProps({
      card: card.card,
      imageBack: card.imageBack
    });
    
    const tweenMax = jest.spyOn(TweenMax, 'to')
      .mockImplementation(jest.fn);

    wrapper.setProps({ selected: true });

    expect(wrapper.find('article')).toHaveLength(1);
    expect(wrapper.find('.CardImage')).toHaveLength(1);
    expect(wrapper.find('.CardImage img').props().src).toEqual(card.card);
    expect(wrapper.find('.BackImage')).toHaveLength(1);
    expect(wrapper.find('.BackImage img').props().src).toEqual(card.imageBack);
    expect(tweenMax).toHaveBeenCalled();
  });
});
