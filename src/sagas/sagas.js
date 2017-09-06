import { fork } from 'redux-saga/effects';
import gameSagas from '../components/game/GameSagas'

export default function* startForman() {
  yield fork(gameSagas)
}
