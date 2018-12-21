import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  getTarotCards: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
