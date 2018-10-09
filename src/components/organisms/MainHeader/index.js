import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeCards, sortCards } from '../../../actions';
import MainHeader from './MainHeader';

const mapStateToProps = store => ({
    isClosed: store.tarotReducer.isClosed
});

const mapDispatchToProps = dispatch => bindActionCreators({ closeCards, sortCards }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainHeader);
