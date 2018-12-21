import { IS_SHUFFLE } from '../action-types'

export default isShuffle => dispatch => dispatch({
  type: IS_SHUFFLE,
  payload: isShuffle,
})
