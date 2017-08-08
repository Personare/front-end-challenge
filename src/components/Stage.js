import React from 'react';
import { Menu } from 'components/Menu';
import { Card } from 'components/Card';

export const Stage = (props) => (
    <div className="stage">
        <Menu />
        <div className="cards-list">
            {props.order.map(item =>
                <Card { ...item} />
            )}
        </div>
    </div>
);
