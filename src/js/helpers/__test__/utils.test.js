import {
    shuffleCardsPositions,
    manipulateData
} from '../utils';

const getShuffleMock = () => {
    return [
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
    ];
};

const getManipulateMock = () => {
    return {
        "imagesUrl": "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/",
        "imageBackCard": "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png",
        "cards": [
            {
              "name": "O MAGO",
              "image": "arcano1.jpg",
            },
            {
              "name": "A SACERDOTISA",
              "image": "arcano2.jpg",
            },
            {
              "name": "A IMPERATRIZ",
              "image": "arcano3.jpg",
            }
        ]
    };
};

describe('shuffleCardsPositions', () => {

    test('returns a different array', () => {
        const cardsData = getShuffleMock();
        const result = shuffleCardsPositions(cardsData);

        expect(result).not.toBe(cardsData);
    });

    test('position should not be equals', () => {
        const cardsData = getShuffleMock();
        const result = shuffleCardsPositions(cardsData);

        const cardsPosition = cardsData.map((card) => card.position);
        const resultPositions = result.map((card) => card.position);

        expect(cardsPosition).toEqual(resultPositions);
    });

});


describe('manipulateData', () => {

    test('returns a different object', () => {
        const dataObj = getManipulateMock();
        const result = manipulateData(dataObj);

        expect(result).not.toBe(dataObj);
    });

    test('adds property position to cards', () => {
        const dataObj = getManipulateMock();
        const result = manipulateData(dataObj);

        expect(result.cards[0]).toHaveProperty('position');
    });

    test('adds property flipped to cards', () => {
        const dataObj = getManipulateMock();
        const result = manipulateData(dataObj);

        expect(result.cards[0]).toHaveProperty('flipped');
    });

});
