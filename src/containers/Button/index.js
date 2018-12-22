import { connect } from 'react-redux'

import setIsShuffle from '../../actions/setIsShuffle'
import setShuffleCards from '../../actions/setShuffleCards'
import Button from '../../components/Button'

const mapStateToProps = state => ({
  isShuffle: state.isShuffle,
  cards: state.tarotCards.cards,
  isLoading: state.isLoading,
})

const mapDispatchToProps = {
  setIsShuffle,
  setShuffleCards,
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
