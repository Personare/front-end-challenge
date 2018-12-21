import { connect } from 'react-redux'

import CardImage from '../../components/Cards/CardImage'

const mapStateToProps = state => ({
  currentCard: state.currentCard,
})

export default connect(mapStateToProps)(CardImage)
