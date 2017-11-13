import React from 'react';
import { shallow } from "enzyme";
import Modal from '../Modal';

const getMockCard = () => {
    return {
      "name": "A SACERDOTISA",
      "image": "arcano2.jpg"
    };
};

describe('Modal', () => {

    test('should render correctly', () => {
        const modalState = 'show';
        const props = { card: getMockCard(), modalState: modalState };
        const wrapper = shallow(<Modal {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should be open if state equals (show)', () => {
        const modalState = 'show';
        const props = { card: getMockCard(), modalState: modalState}
        const wrapper = shallow(<Modal {...props} />);

        expect(wrapper.find('.Modal').hasClass(`is-${modalState}`)).toBe(true);
    });

    test('should be close if state equals (hide)', () => {
        const modalState = 'hide';
        const props = { card: getMockCard(), modalState: modalState };
        const wrapper = shallow(<Modal {...props} />);

        expect(wrapper.find('.Modal').hasClass(`is-${modalState}`)).toBe(true);
    });

})
