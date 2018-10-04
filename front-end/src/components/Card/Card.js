import React from "react";
import classNames from "classnames";

import "./card.scss";

const Card = ({ imagesUrl, imageBackCard, card, onClick }) => (
    <div
        role="presentation"
        className={classNames("card", { hover: card.isActive })}
        onClick={onClick.bind(this, card)}
    >
        <div className="card__flipper">
            <div
                className="card__page card__page--front"
                style={{ background: `url(${imageBackCard})` }}
            />
            <div
                className="card__page card__page--back"
                style={{ background: `url(${imagesUrl}${card.image})` }}
            >
                <div className="card__name">{card.name}</div>
            </div>
        </div>
    </div>
);

export default Card;
