import { put, call, takeLatest } from 'redux-saga/effects'
import { TAROT } from './GameActions'
import { listTarot } from '../../api/api'

export function* getTarot(api) {

  try {
    const tarot = yield call(api)
    yield put({ type: TAROT.SUCCESS, tarot })
  } catch (error) {
    yield put({ type: TAROT.FAILURE, error })
  }
}

export default function* root() {
  yield takeLatest(TAROT.REQUEST, getTarot.bind(null, listTarot))
}
