import React from 'react'
import CardSet from '../CardSet'
import Card from '../Card'
import { shallow, mount } from 'enzyme'
import cards from '../__fixtures__/cards'

it('renders without errors', () => {
  shallow(<CardSet />)
})

describe('CardSet', () => {
  let target
  let onSelect = jest.fn()

  beforeEach(() => {
    target = shallow(<CardSet cards={cards} onSelect={onSelect} />)
  })

  it('list all cards', () => {
    cards.forEach(card => {
      const node = (
        <Card
          {...card}
          flip={false}
          shuffle={false}
          selectable={false}
          onSelect={onSelect}
        />
      )
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

  it('shuffle cards on shuffle mode', () => {
    target.setProps({ shuffle: true })
    cards.forEach(card => {
      const node = target.find(card) // find by props
      expect(node.length).toBe(1)
      expect(node).toHaveProp('shuffle', true)
    })
  })

  it('make cards selectable', () => {
    target.setProps({ selectable: true })
    cards.forEach(card => {
      const node = target.find(card) // find by props
      expect(node).toHaveProp('selectable', true)
    })
  })
})


describe('CardSet<mount>', () => {
  let target
  let onSelect = jest.fn()

  beforeEach(() => {
    target = mount(<CardSet cards={cards} onSelect={onSelect} />)
  })

  it('selected card emits onSelect', () => {
    target.setProps({ selectable: true })
    const card = cards[0]
    const node = target.find({ src: card.imageUrl }) // mounted
    expect(node.length).toBe(1)
    node.simulate('click')
    expect(onSelect.mock.calls.length).toBe(1)
    expect(onSelect.mock.calls[0][1].name).toBe(card.name)
  })

})
