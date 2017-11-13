import React from 'react';
import { shallow } from "enzyme";
import MagicBtn from '../MagicBtn';

describe('MagicBtn', () => {

    test('should render correctly width', () => {
        const wrapper = shallow(<MagicBtn text='iniciar' />);
        expect(wrapper).toMatchSnapshot();
    });

})
