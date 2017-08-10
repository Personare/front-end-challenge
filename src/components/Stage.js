import React, { PropTypes } from 'react';
import { Card } from 'components/Card';

export const Stage = (props) => (
    <div className="stage">
        <div className="cards-list">
            {props.order.map(id =>
                <Card
                    key={id}
                    name={props.cards[id].name}
                    frontImg={props.cards[id].image}
                    backImg={props.cards[id].imageBackCard}
                    onClick={() => props.setCard(id)}
                    selected={props.play && props.selected === id}
                />
            )}
        </div>
    </div>
);

Stage.propTypes = {
    order: PropTypes.array.isRequired,
    play: PropTypes.bool,
    setCard: PropTypes.func,
    cards: PropTypes.shape({
        name: PropTypes.string,
        frontImg: PropTypes.string,
        backImg: PropTypes.string,
    }),
    selected: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
};
