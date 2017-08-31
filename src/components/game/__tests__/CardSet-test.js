import React from 'react'
import CardSet from '../CardSet'
import Card from '../Card'
import { shallow } from 'enzyme'
import cards from '../__fixtures__/cards'

it('renders without errors', () => {
  shallow(<CardSet />)
})

describe('CardSet', () => {
  let target

  beforeAll(() => {
    target = shallow(<CardSet cards={cards} />)
  })

  it('list all cards', () => {
    cards.forEach(card => {
      const node = <Card {...card} />
      expect(target).toContainReact(node)
    })
  })
})
