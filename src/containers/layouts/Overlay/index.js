import { connect } from 'react-redux'

import Overlay from '../../../components/layouts/Overlay'

const mapStateToProps = state => ({
  isActive: !!state.currentCard.index,
})

export default connect(mapStateToProps)(Overlay)
