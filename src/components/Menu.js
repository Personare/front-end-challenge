import React, { PropTypes } from 'react';

export const Menu = (props) => (
    <section className="menu">
        {!props.play ?
            <div className="start" onClick={props.onStart}>/ COMEÇAR /</div>
            :
            <div className="stop" onClick={props.onStop}>/ EXIBIR TODAS AS CARTAS /</div>
        }
    </section>
);

Menu.propTypes = {
    start: PropTypes.func,
    stop: PropTypes.func,
    play: PropTypes.bool,
};
