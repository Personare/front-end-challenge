// @flow

import { delay } from 'redux-saga'
import { put, all, call, takeLatest } from 'redux-saga/effects'
import { GAME, TAROT } from './GameActions'
import { listTarot } from '../../api/api'
import {
  GAME_STATE,
  initialAnimationDuration,
  sortingAnimationDuration,
} from './constants'

import type { CardListType, SourceJsonType } from './Game.types'
type ApiFunc = () => void
type CommonSagaReturnType = Generator<any, any, void>

export const transformSourceTarotToCardTypeList = ({
  imagesUrl,
  imageBackCard,
  cards
} : SourceJsonType) : CardListType => cards.map(({ name, image }) => ({
  name,
  imageUrl: `${imagesUrl}${image}`,
  backImageUrl: imageBackCard
}))

export function* getTarot(api : ApiFunc) : CommonSagaReturnType {
  try {
    const tarot = transformSourceTarotToCardTypeList(yield call(api))
    yield put({ type: TAROT.SUCCESS, tarot })
  } catch (error) {
    yield put({ type: TAROT.FAILURE, error })
  }
}

export function* gameStart() : CommonSagaReturnType {
  try {
    yield put({ type: GAME.CHANGE_STATE, gameState: GAME_STATE.starting })
    yield call(delay, initialAnimationDuration)
    yield put({ type: GAME.CHANGE_STATE, gameState: GAME_STATE.sorting })
    yield call(delay, sortingAnimationDuration)
    yield put({ type: GAME.CHANGE_STATE, gameState: GAME_STATE.started })
  } catch (error) {
    yield put({ type: GAME.CHANGE_STATE, gameState: GAME_STATE.initial, error })
  }
}

export default function* root() : CommonSagaReturnType {
  yield all([
    takeLatest(TAROT.REQUEST, getTarot.bind(null, listTarot)),
    takeLatest(GAME.START, gameStart)
  ])
}
