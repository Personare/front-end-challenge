import React from 'react'
import Card, {
  CardImage,
  FlipperFront,
  FlipperBack,
  FlipContainer,
} from '../Card'
import { shallow, mount } from 'enzyme'
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

  it('flips', () => {
    target.setProps({ flip: true })
    const flipperFront = target.find(FlipperFront)
    expect(flipperFront.length).toBe(1)
    expect(flipperFront).toHaveProp('flip', true)

    const flipperBack = target.find(FlipperBack)
    expect(flipperBack.length).toBe(1)
    expect(flipperBack).toHaveProp('flip', true)
  })

  it('shuffle', () => {
    target.setProps({ shuffle: true })
    const flipperFront = target.find(FlipContainer)
    expect(flipperFront.length).toBe(1)
    expect(flipperFront).toHaveProp('shuffle', true)
  })

  it('make selectable', () => {
    target.setProps({ selectable: true })
    const flipperFront = target.find(FlipContainer)
    expect(flipperFront).toHaveProp('selectable', true)
  })
})

describe('Card<mount>', () => {
  let target
  let onSelect
  beforeEach(() => {
    onSelect = jest.fn()
    target = mount(<Card {...card} onSelect={onSelect} />)
  })

  it('flip back after click on selectable mode', () => {
    target.setProps({ selectable: true })
    target.simulate('click')
    expect(onSelect.mock.calls.length).toBe(1)
    expect(target.state().selected).toBe(true)
  })

  it('by pass clicks on not selectable mode', () => {
    target.setProps({ selectable: false })
    target.simulate('click')
    expect(onSelect.mock.calls.length).toBe(0)
    expect(target.state().selected).toBe(false)
  })
})
