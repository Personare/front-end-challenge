import React from 'react';
import { shallow } from 'enzyme';
import TweenMax from 'gsap';
import { SelectedCard } from '../../../src/containers/SelectedCard/SelectedCard';
import FullCard from '../../../src/components/FullCard/FullCard';

describe('containers -> SelectedCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SelectedCard />);
  });

  it('deve renderizar corretamente sem os detalhes da carta se não houver item', () => {
    expect(wrapper.find('.SelectedCard')).toHaveLength(1);
    expect(wrapper.find(FullCard)).toHaveLength(0);
  });

  it('deve exibir o compomente FullCard', () => {
    const tweenMax = jest.spyOn(TweenMax, 'to')
      .mockImplementation(jest.fn);
    wrapper.setProps({ item: { name: 'O MAGO', image: 'arcano1.jpg' } });

    expect(wrapper.find(FullCard)).toHaveLength(1);
    expect(tweenMax).toHaveBeenCalled();
  });
});
