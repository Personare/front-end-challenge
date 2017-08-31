import React from 'react'
import Card, { CardImage } from '../Card'
import { shallow } from 'enzyme'
import cards from '../__fixtures__/cards'

const card = cards[0]

it('renders without errors', () => {
  shallow(<Card />)
})

describe('Card', () => {
  let target
  beforeAll(() => {
    target = shallow(<Card {...card} />)
  })

  it('have front image', () => {
    const img = <CardImage src={card.imageUrl} />
    expect(target).toContainReact(img)
  })

  it('have back image', () => {
    const img = <CardImage src={card.backImageUrl} />
    expect(target).toContainReact(img)
  })
})
