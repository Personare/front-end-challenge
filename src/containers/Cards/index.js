import { connect } from 'react-redux'

import setIsLoading from '../../actions/setIsLoading'
import getTarotCards from '../../actions/getTarotCards'
import Cards from '../../components/Cards'

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  tarotCards: state.tarotCards,
})

const mapDispatchToProps = {
  setIsLoading,
  getTarotCards,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
