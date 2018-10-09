import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash.merge';
import MainHeader from '../MainHeader';
import Button from '../../../atoms/Button';

describe('MainHeader', () => {
    function createWrapper(overrides) {
        const defaultProps = {
            isClosed: false,
            closeCards: jest.fn(),
            sortCards: jest.fn()
        };

        return shallow(<MainHeader {...merge(defaultProps, overrides)} />);
    }

    it('if isClosed === false should call closeCards and sortCards when button is clicked', () => {
        const props = {
            closeCards: jest.fn(),
            sortCards: jest.fn()
        };

        const wrapper = createWrapper(props);

        wrapper.find(Button).simulate('click');

        expect(props.closeCards).toHaveBeenCalled();
        expect(props.sortCards).toHaveBeenCalled();
    });

    it('if isClosed === true should call only sortCards when button is clicked', () => {
        const props = {
            isClosed: true,
            closeCards: jest.fn(),
            sortCards: jest.fn()
        };

        const wrapper = createWrapper(props);

        wrapper.find(Button).simulate('click');

        expect(props.closeCards).not.toHaveBeenCalled();
        expect(props.sortCards).toHaveBeenCalled();
    });
});
