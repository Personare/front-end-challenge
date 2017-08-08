import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HelloWord } from 'views/HelloWord';

describe('HelloWord - <HelloWord />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HelloWord />);
    });

    it('should render the view component', () => {
        expect(wrapper.find('h1').text()).to.equal('Hello Word!');
    });
})
