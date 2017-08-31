// @flow

import { put, call, takeLatest } from 'redux-saga/effects'
import { TAROT } from './GameActions'
import { listTarot } from '../../api/api'

import type { CardListType, SourceJsonType } from './Game.types'
type ApiFunc = () => void
type CommonSagaReturnType = Generator<void, any, void>

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

export default function* root() : CommonSagaReturnType {
  yield takeLatest(TAROT.REQUEST, getTarot.bind(null, listTarot))
}
