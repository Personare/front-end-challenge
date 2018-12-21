import { connect } from 'react-redux'

import setShuffle from '../../actions/setShuffle'
import Button from '../../components/Button'

const mapStateToProps = state => ({
  isShuffle: state.isShuffle,
})

const mapDispatchToProps = {
  setShuffle,
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
