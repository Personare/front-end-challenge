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
      const node = <Card {...card} flip={false} />
      expect(target).toContainReact(node)
    })
  })

  it('flip cards on flip mode', () => {
    target.setProps({ flip: true })
    cards.forEach(card => {
      const node = target.find(card) // find by props
      expect(node.length).toBe(1)
      expect(node).toHaveProp('flip', true)
    })
  })
})
