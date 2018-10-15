import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Home from './Home'

describe('Home', () => {
  const state = {
    cards: [
      {
        image: 'arcano1.jpg',
        name: 'O MAGO'
      },
      {
        image: 'arcano2.jpg',
        name: 'A SACERDOTISA'
      }
    ],
    currentCard: {
      image: 'arcano2.jpg',
      name: 'A SACERDOTISA'
    },
    hasStart: false,
    imageBackCard: `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/
      images/content/pt-br/product/tarot/marselha/back-blue-card.png`,
    imagesUrl: `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/
      content/pt-br/product/tarot/marselha/162x341/`,
    showModalFlag: false
  }

  it('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should startGame when clicks on start button', () => {
    const tree = mount(<Home />)
    tree.find('button').simulate('click')
    expect(tree.state().hasStart).toBe(true)
  })

  it('should show modal when clicks on card', () => {
    const image = 'arcano1.jpg'
    const name = 'O MAGO'
    const tree = mount(<Home />)
    tree.setState({ ...state, hasStart: true })

    tree
      .find('Home')
      .first()
      .instance()
      .choosenCard(name, image)
    expect(tree.state().showModalFlag).toBe(true)
  })

  it('should close modal when call closeModal function', () => {
    const tree = mount(<Home />)
    tree.setState({ ...state, hasStart: true, showModalFlag: true })

    tree
      .find('Home')
      .first()
      .instance()
      .closeModal()

    expect(tree.state().showModalFlag).toBe(false)
  })

  it('should restart game when restartGame is called', () => {
    const tree = mount(<Home />)
    tree.setState({ ...state, hasStart: true, showModalFlag: true })

    tree
      .find('Home')
      .first()
      .instance()
      .restartGame()

    expect(tree.state()).toEqual(state)
  })
})
