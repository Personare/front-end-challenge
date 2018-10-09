import { connect } from 'react-redux';
import Button from './Button';

const mapStateToProps = store => ({
    isClosed: store.tarotReducer.isClosed
});

export default connect(mapStateToProps)(Button);
