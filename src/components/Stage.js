import React, { PropTypes } from 'react';
import { Menu } from 'components/Menu';
import { Card } from 'components/Card';

export const Stage = (props) => (
    <div className="stage">
        <Menu />
        <div className="cards-list">
            {props.order.map(id =>
                <Card
                    key={id}
                    name={props.cards[id].name}
                    frontImg={props.cards[id].image}
                    backImg={props.cards[id].imageBackCard}
                />
            )}
        </div>
    </div>
);

Stage.propTypes = {
    order: PropTypes.array.isRequired,
    cards: PropTypes.shape({
        name: PropTypes.string,
        frontImg: PropTypes.string,
        backImg: PropTypes.string,
    }),
};
