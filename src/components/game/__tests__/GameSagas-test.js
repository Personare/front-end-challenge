import { put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import nock from 'nock'
import GameSagas, {
  getTarot,
  transformSourceTarotToCardTypeList,
  gameStart
} from '../GameSagas'
import * as actions from '../GameActions'
import cards, { sourceJson } from '../__fixtures__/cards'
import {
  apiBase,
  apiTarotEndpoint,
  listTarot
} from '../../../api/api'
import * as consts from '../constants'

// Scenarios
describe('GameSagas', () => {
  describe('getTarot', () => {
    it('dispatches SUCCESS with the response', () => {
      const gen = getTarot(listTarot, { payload: {} })
      expect(gen.next().value).toEqual(call(listTarot))
      expect(gen.next(sourceJson).value).toEqual(
        put({ type: actions.TAROT.SUCCESS, tarot: cards })
      )
    })

    it('dispatches FAILURE after error', () => {
      const gen = getTarot(listTarot, { payload: {} })
      expect(gen.next().value).toEqual(call(listTarot))
      expect(gen.throw('error').value).toEqual(
        put({
          type: actions.TAROT.FAILURE,
          error: 'error'
        })
      )
    })
  })

  describe('gameStart', () => {
    it('dispatches GAME_STARTED when done', () => {
      const gen = gameStart({ payload: {} })
      expect(gen.next().value).toEqual(
        put({
          type: actions.GAME.CHANGE_STATE,
          gameState: consts.GAME_STATE.starting,
        })
      )

      expect(gen.next().value).toEqual(call(delay, consts.initialAnimationDuration))

      expect(gen.next().value).toEqual(
        put({
          type: actions.GAME.CHANGE_STATE,
          gameState: consts.GAME_STATE.sorting,
        })
      )

      expect(gen.next().value).toEqual(call(delay, consts.sortingAnimationDuration))

      expect(gen.next().value).toEqual(
        put({
          type: actions.GAME.CHANGE_STATE,
          gameState: consts.GAME_STATE.started,
        })
      )
    })
  })
})
