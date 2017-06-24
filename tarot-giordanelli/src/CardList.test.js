import React from 'react';
import { mount } from 'enzyme';
import CardList from './CardList';

it('renders without crashing', () => {
  const wrapper = mount(<CardList />);
  expect(wrapper.find('button')).toHaveLength(2);
});
