import React, { Component } from 'react';
import { array, string } from 'prop-types';
import { isFirstRender } from '../../../shared/utils/frontend';
import Card from '../../molecules/Card/Card';
import './Cards.scss';

class Cards extends Component {
    static propTypes = {
        imagesUrl: string,
        imageBackCard: string,
        cards: array
    };

    componentWillMount() {
        const { fetchTarot } = this.props;

        fetchTarot();
    }

    render() {
        const { imagesUrl, imageBackCard, cards } = this.props;

        if (isFirstRender(cards)) {
            return null;
        }

        return (
            <ul className="Cards">
                {cards.map((card, key) => (
                    <Card key={key} name={card.name} front={imagesUrl + card.image} back={imageBackCard} />
                ))}
            </ul>
        );
    }
}

export default Cards;
