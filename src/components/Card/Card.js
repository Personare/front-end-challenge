import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ name, front, back }) => (
    <div className="Card">
        <div className="Card__side --front">
            <img src={front} alt={name} />
        </div>
        <div className="Card__side --back">
            <img src={back} alt={name} />
        </div>
    </div>
);

Card.propTypes = {
    name: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired
};

export default Card;
