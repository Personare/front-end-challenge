import { connect } from 'react-redux'

import Card from '../../components/Cards/Card'

const mapStateToProps = state => ({
  isShuffle: state.isShuffle,
})

export default connect(mapStateToProps)(Card)
