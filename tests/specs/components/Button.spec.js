import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../src/components/Button/Button';

describe('components -> Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('deve renderizar corretamente', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('deve renderizar com as classes corretamente', () => {
    wrapper.setProps({ btnType: "Test" });

    expect(wrapper.find('button').hasClass('Btn')).toBeTruthy();
    expect(wrapper.find('button').hasClass('Test')).toBeTruthy();
  });

  it('deve renderizar o texto correto', () => {
    wrapper.setProps({ children: 'Test Text' });

    expect(wrapper.find('button').text()).toEqual('Test Text');
  });
});
