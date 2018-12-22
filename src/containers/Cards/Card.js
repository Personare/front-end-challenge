import { connect } from 'react-redux'

import setCurrentCard from '../../actions/setCurrentCard'
import Card from '../../components/Cards/Card'

const mapStateToProps = state => ({
  isShuffle: state.isShuffle,
  currentCard: state.currentCard,
})

const mapDispatchToProps = {
  setCurrentCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
