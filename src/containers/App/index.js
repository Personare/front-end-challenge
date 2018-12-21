import { connect } from 'react-redux'

import setIsLoading from '../../actions/setIsLoading'
import getTarotCards from '../../actions/getTarotCards'
import App from '../../components/App'

const mapStateToProps = state => ({
  isLoading: state.isLoading,
})

const mapDispatchToProps = {
  setIsLoading,
  getTarotCards,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
