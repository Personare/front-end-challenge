import { put, call, takeLatest } from 'redux-saga/effects'
import nock from 'nock'
import GameSagas, { getTarot } from '../GameSagas'
import * as actions from '../GameActions'
import {
  apiBase,
  apiTarotEndpoint,
  listTarot
} from '../../../api/api'

// Mock
const mockedTarotResponse = {
  "imagesUrl": "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/",
  "imageBackCard": "https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png",
  "cards": [
    {
      "name": "O MAGO",
      "image": "arcano1.jpg"
    },
    {
      "name": "A SACERDOTISA",
      "image": "arcano2.jpg"
    }
  ]
}

// Scenarios
describe('GameSagas', () => {
  describe('getTarot', () => {
    it('dispatches SUCCESS with the response', () => {
      const gen = getTarot(listTarot, { payload: {} })
      expect(gen.next().value).toEqual(call(listTarot))
      expect(gen.next(mockedTarotResponse).value).toEqual(
        put({ type: actions.TAROT.SUCCESS, tarot: mockedTarotResponse })
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
