import * as actions from '../GameActions'
import { GAME_STATE } from '../constants'

describe('Game Actions Types', () => {
  it('tarot request actions types', () => {
    expect(actions.TAROT.REQUEST).toBe('TAROT_REQUEST')
    expect(actions.TAROT.SUCCESS).toBe('TAROT_SUCCESS')
    expect(actions.TAROT.FAILURE).toBe('TAROT_FAILURE')
  })

  it('tarot build a action', () => {
    expect(actions.tarotRequestAction()).toEqual({
      type: actions.TAROT.REQUEST
    })
  })

  it('game actions types', () => {
    expect(actions.GAME.START).toBe('GAME_START')
    expect(actions.GAME.CHANGE_STATE).toBe('GAME_CHANGE_STATE')
  })

  it('startGame action', () => {
    expect(actions.gameStartAction()).toEqual({
      type: actions.GAME.START,
      gameState: GAME_STATE.starting
    })
  })
})
