import React from 'react';
import { shallow } from "enzyme";
import CardPicture from '../CardPicture';

describe('CardPicture', () => {

    test('should render correctly', () => {
        const wrapper = shallow(<CardPicture imgUrl='http://via.placeholder.com/162×341' />);
        expect(wrapper).toMatchSnapshot();
    });

})
