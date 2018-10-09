import React from 'react';
import { shallow } from 'enzyme';
import Space from '../Space';

describe('Space', () => {
    it('renders correctly', () => {
        expect(shallow(<Space />).getElement()).toMatchSnapshot();
    });
});
