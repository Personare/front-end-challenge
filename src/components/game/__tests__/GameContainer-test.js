import React from 'react'
import { shallow, mount } from 'enzyme'
import { GameContainer, ControlButton } from '../GameContainer'
import CardSet from '../CardSet'
import cards from '../__fixtures__/cards'
import { GAME_STATE } from '../constants'

it('renders without crashing', () => {
  shallow(<GameContainer />)
})

describe('GameContainer', () => {
  let target
  beforeAll(() => {
    target = shallow(
      <GameContainer
        tarot={cards}
        gameState={GAME_STATE.initial}
      />
    )
  })

  it('have start button', () => {
    const buttonStart = <ControlButton gameState={GAME_STATE.initial} />
    expect(target).toContainReact(buttonStart)
  })

  it('have card set', () => {
    const cardSet = <CardSet cards={cards} />
    expect(target).toContainReact(cardSet)
  })

})

describe('GameContainer > ControlButton', () => {
  it('have initial text', () => {
    expect(mount(<ControlButton />)).toHaveText("Iniciar")
  })
})
