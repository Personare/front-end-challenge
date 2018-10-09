import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTarot } from '../../../actions';
import Cards from './Cards';

const mapStateToProps = store => ({
    imagesUrl: store.tarotReducer.imagesUrl,
    imageBackCard: store.tarotReducer.imageBackCard,
    cards: store.tarotReducer.cards,
    isClosed: store.tarotReducer.isClosed
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchTarot }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards);
