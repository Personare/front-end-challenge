import { TAROT_CARDS_SHUFFLE } from '../action-types'
import shuffleCards from '../helpers/shuffleCards'

export default ([...cards]) => ({
  type: TAROT_CARDS_SHUFFLE,
  payload: shuffleCards(cards),
})
