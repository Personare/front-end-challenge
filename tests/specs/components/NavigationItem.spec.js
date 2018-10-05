import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import NavigationItem from '../../../src/components/Navbar/NavigationItem/NavigationItem';

describe('components -> Navbar -> NavigationItem', () => {
  it('deve renderizar corretamente', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <NavigationItem to="/" label="Test" />
      </MemoryRouter>
    );

    expect(wrapper.find('li')).toHaveLength(1);
  });
});
