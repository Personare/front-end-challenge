import request from '../helpers/request'
import parseTarotCards from '../helpers/parseTarotCards'
import {
  TAROT_CARDS_SUCCESS,
  TAROT_CARDS_FAIL,
  IS_LOADING,
} from '../action-types'

const { REACT_APP_TAROT_CARDS_API: TAROT_CARDS_API } = process.env

export default () => async dispatch => {
  const { error, ...data } = await request(TAROT_CARDS_API)

  dispatch({
    type: error ? TAROT_CARDS_FAIL : TAROT_CARDS_SUCCESS,
    payload: error ? error : parseTarotCards(data),
  })

  dispatch({
    type: IS_LOADING,
    payload: false,
  })
}
