import { IS_LOADING } from '../action-types'

export default isLoading => dispatch => dispatch({
  type: IS_LOADING,
  payload: isLoading,
})
