import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Card from './Card'

describe('Card component', () => {
  const props = {
    name: 'O MAGO',
    image: 'arcano1.jpg',
    imagesUrl: `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/
        images/content/pt-br/product/tarot/marselha/162x341/`,
    imageBackCard: `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/
        images/content/pt-br/product/tarot/marselha/back-blue-card.png`,
    hasStart: false,
    onClick: Function,
    flipCard: false
  }

  it('should render correctly', () => {
    const tree = renderer.create(<Card {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should show the front of the card when game is not start', () => {
    const { image, imagesUrl } = props
    const tree = mount(<Card {...props} />)
    const imgSrc = `${imagesUrl}${image}`
    const imgWrapper = tree.find('img')

    expect(imgWrapper.prop('src')).toBe(imgSrc)
  })

  it('should show the back of the card when game was started', () => {
    const { imageBackCard } = props

    const tree = mount(<Card {...props} hasStart />)
    const imgWrapper = tree.find('img')

    expect(imgWrapper.prop('src')).toBe(imageBackCard)
  })
})
