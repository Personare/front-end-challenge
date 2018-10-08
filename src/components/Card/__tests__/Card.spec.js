import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card', () => {
    const imageBackCard = 'https://dkw5ssdvaqf8l.cloudfront.net/back.jpg';

    const card = {
        name: 'O MAGO',
        image: 'arcano1.jpg'
    };

    it('renders front card img with card.image as src and card.name as alt', () => {
        const wrapper = shallow(<Card name={card.name} front={card.image} back={imageBackCard} />);
        const img = wrapper
            .find('img')
            .first()
            .getElement();

        expect(img.props.src).toBe(card.image);
        expect(img.props.alt).toBe(card.name);
    });

    it('render back card img with imageBackCard as src', () => {
        const wrapper = shallow(<Card name={card.name} front={card.image} back={imageBackCard} />);
        const img = wrapper
            .find('img')
            .last()
            .getElement();

        expect(img.props.src).toBe(imageBackCard);
    });
});
