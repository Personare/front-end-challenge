import { put, call, takeLatest } from 'redux-saga/effects'
import nock from 'nock'
import GameSagas, { getTarot, transformSourceTarotToCardTypeList } from '../GameSagas'
import * as actions from '../GameActions'
import cards, { sourceJson } from '../__fixtures__/cards'
import {
  apiBase,
  apiTarotEndpoint,
  listTarot
} from '../../../api/api'

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
})
