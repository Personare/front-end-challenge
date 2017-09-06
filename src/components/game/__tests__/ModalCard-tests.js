import React from 'react'
import { shallow, mount, render } from 'enzyme'
import ModalCard, { ModalTitle, DescriptionArea } from '../ModalCard'
import cards from '../__fixtures__/cards'

const card = cards[0]

describe('ModalCard', () => {
  it('renders without crashing', () => {
    shallow(<ModalCard card={card} />)
    render(<ModalCard card={card} />)
  })

  it('renders image', () => {
    const target = mount(<ModalCard card={card} />)
    expect(target.find({ src: card.imageUrl }).length).toBe(1)
  })

  it('renders card content', () => {
    const target = mount(<ModalCard card={card} />)
    expect(target.find(ModalTitle)).toHaveText(card.name)
    expect(target.find(DescriptionArea)).toHaveText(card.content)
  })
})
