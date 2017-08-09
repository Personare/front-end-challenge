import React, { PropTypes } from 'react';

export const Card = (props) => (
    <div className="card">
        <div className="front">
            <img src={props.frontImg} alt={props.name} />
        </div>
        <div className="back">
            <img src={props.backImg} alt={props.name} />
        </div>
    </div>
);

Card.propTypes = {
    name: PropTypes.string,
    frontImg: PropTypes.string,
    backImg: PropTypes.string,
};
