import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
    it('should call the callback function when button is clicked', () => {
        const callback = jest.fn();

        const wrapper = shallow(<Button onClick={callback} />);

        wrapper.find('button').simulate('click');

        expect(callback).toHaveBeenCalled();
    });

    it('should render correct text content', () => {
        const textContent = 'Hello!';

        const wrapper = shallow(<Button>{textContent}</Button>);

        expect(wrapper.text()).toBe(textContent);
    });

    it('should not call the callback if isClosed from store is true', () => {
        const callback = jest.fn();

        const wrapper = shallow(<Button isClosed={true} onClick={callback} />);
        wrapper.find('button').simulate('click');

        expect(callback).not.toHaveBeenCalled();
    });
});
