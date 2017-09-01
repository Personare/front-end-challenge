import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { GameContainer, Game, ControlButton, l18n } from '../GameContainer'
import CardSet from '../CardSet'
import cards from '../__fixtures__/cards'
import { GAME_STATE } from '../constants'

describe('GameContainer', () => {
  let tarotRequestAction
  let props
  beforeAll(() => {
    tarotRequestAction = jest.fn()
    props = { tarotRequestAction }
  })

  it('renders without crashing', () => {
    shallow(<GameContainer />)
    render(<GameContainer {...props} />)
  })

  it('call tarotRequestAction after mount', () => {
    mount(<GameContainer {...props} />)
    expect(tarotRequestAction.mock.calls.length).toBe(1)
  })
})

describe('Game', () => {
  let target
  let handleStartClick
  beforeAll(() => {
    handleStartClick = jest.fn()
    target = shallow(
      <Game
        cards={cards}
        gameState={GAME_STATE.initial}
        handleStartClick={handleStartClick}
      />
    )
  })

  it('have start button', () => {
    const buttonStart = (
      <ControlButton
        gameState={GAME_STATE.initial}
        handleStartClick={handleStartClick}
      />
    )
    expect(target).toContainReact(buttonStart)
  })

  it('have card set', () => {
    const cardSet = <CardSet cards={cards} flip={false} />
    expect(target).toContainReact(cardSet)
  })

  it('flip CardSet on game starting', () => {
    target.setProps({ gameState: GAME_STATE.starting })
    const cardSet = target.find({ cards })
    expect(cardSet.length).toBe(1)
    expect(cardSet).toHaveProp('flip', true)
  })

})

describe('Game<mount>', () => {
  let target
  let handleStartClick
  beforeAll(() => {
    handleStartClick = jest.fn()
    target = mount(
      <Game
        tarot={cards}
        gameState={GAME_STATE.initial}
        handleStartClick={handleStartClick}
      />
    )
  })

  it('call handleStartClick after click', () => {
    const btFound = target.find(ControlButton)
    btFound.simulate('click')
    expect(handleStartClick.mock.calls.length).toBe(1)
    btFound.simulate('click')
    btFound.simulate('click')
    expect(handleStartClick.mock.calls.length).toBe(3)
  })
})

describe('GameContainer > ControlButton', () => {
  it('have initial button text', () => {
    expect(mount(<ControlButton />)).toHaveText(l18n.start)
  })

  it('have restart button text', () => {
    expect(mount(
      <ControlButton
        gameState={GAME_STATE.starting}
      />
    )).toHaveText(l18n.restart)
  })

  it('have sorting text', () => {
    expect(mount(
      <ControlButton
        gameState={GAME_STATE.sorting}
      />
    )).toHaveText(l18n.sorting)
  })
})
