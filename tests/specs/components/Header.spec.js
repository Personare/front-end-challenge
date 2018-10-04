import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../src/components/Header/Header';
import Navbar from '../../../src/components/Navbar/Navbar';

describe('components -> Header', () => {
  it('deve renderizar corretamente', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
})
