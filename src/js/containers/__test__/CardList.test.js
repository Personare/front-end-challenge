import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Unwrapped as UnwrappedCardList } from '../CardList';
import Card from '../../components/Card';

// setup enzyme
Enzyme.configure({ adapter: new Adapter() });

const getMockCards = () => {
    return {
        "imagesUrl": "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/",
        "imageBackCard": "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png",
        "cards": [
            {
              "name": "O MAGO",
              "image": "arcano1.jpg",
              "flipped": false,
              "position": 0
            },
            {
              "name": "A SACERDOTISA",
              "image": "arcano2.jpg",
              "flipped": false,
              "position": 1
            },
            {
              "name": "A IMPERATRIZ",
              "image": "arcano3.jpg",
              "flipped": false,
              "position": 2
            }
        ]
    };
};

function getMockProps() {
    return {
        data: getMockCards(),
        isLoading: false,
        animationMode: '',
        gridCollumn: 6
    };
}

describe("CardList component", () => {

    it('renders correctly', () => {
        const props = getMockProps();
        const cardList = shallow(<UnwrappedCardList {...props}/>);

        expect(cardList).toMatchSnapshot();
    });

    it('renders the right amount of cards', () => {
        const props = getMockProps();
        const cardList = shallow(<UnwrappedCardList {...props} />);
        const cardsCount = props.data.cards.length;

        expect(cardList.find(Card).length).toBe(cardsCount);
    });

});
