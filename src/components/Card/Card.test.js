import React from 'react'
import Card from './Card'
import renderer from 'react-test-renderer'

describe('Card component', () => {
    const props = {
        name: 'O MAGO',
        image: 'arcano1.jpg',
        imagesUrl:
            'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/arcano.jpj',
        imageBackCard:
            '"https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png"',
        hasStart: false,
        onClick: Function,
        flipCard: false
    }

    it('should render correctly', () => {
        const tree = renderer.create(<Card {...props} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
