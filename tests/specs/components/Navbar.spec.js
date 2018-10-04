import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../../src/components/Navbar/Navbar';
import NavigationItem from '../../../src/components/Navbar/NavigationItem/NavigationItem';

describe('components -> Navbar', () => {
  it('deve renderizar corretamente', () => {
    const wrapper = shallow(<Navbar />);

    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
});
