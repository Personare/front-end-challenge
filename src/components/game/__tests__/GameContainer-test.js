import React from 'react'
import { shallow, mount } from 'enzyme'
import GameContainer, { ControlButton } from '../GameContainer'

it('renders without crashing', () => {
  shallow(<GameContainer />)
})

describe('GameContainer', () => {
  let target
  beforeAll(() => {
    target = shallow(<GameContainer />)
  })

  it('have start button', () => {
    const buttonStart = <ControlButton />
    expect(target).toContainReact(buttonStart)
  })
})

describe('GameContainer > ControlButton', () => {
  it('have initial text', () => {
    expect(mount(<ControlButton />)).toHaveText("Iniciar")
  })
})
