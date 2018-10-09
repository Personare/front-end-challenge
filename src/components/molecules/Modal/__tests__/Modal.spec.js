import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal', () => {
    const card = {
        name: 'O MAGO',
        image: 'arcano1.jpg'
    };

    it('should render Modal component only isOpen === true', () => {
        const wrapper = shallow(<Modal isOpen={true} />);
        expect(wrapper.find('div').exists()).toBeTruthy();
    });

    it('renders img with card.image as src and card.name as alt', () => {
        const wrapper = shallow(<Modal isOpen={true} name={card.name} image={card.image} />);
        const img = wrapper.find('img').getElement();

        expect(img.props.src).toBe(card.image);
        expect(img.props.alt).toBe(card.name);
    });
});
