import React from 'react';

export const Card = (props) => {
    return (
        <div className="card">
            <div className="front">
                <img src={props.frontImg} alt={props.name} />
            </div>
            <div className="back">
                <img src={props.backImg} alt={props.name} />
            </div>
        </div>
    );
};
