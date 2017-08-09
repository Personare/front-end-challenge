import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { start, stop, shuffle } from 'actions/game';

const Menu = (props) => (
    <section className="menu">
        {!props.play ?
            <a className="start" onClick={props.start}>start</a>
            :
            <a className="stop" onClick={props.stop}>stop</a>
        }
    </section>
);

Menu.propTypes = {
    start: PropTypes.func,
    stop: PropTypes.func,
    play: PropTypes.bool,
};

const mapStateToProps = ({ game }) => ({
    play: game.play,
});

export default connect(mapStateToProps, { start, stop, shuffle })(Menu);
