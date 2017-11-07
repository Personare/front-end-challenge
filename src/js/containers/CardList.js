import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';

class CardList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(!this.props.tarot) {
            return (<span>loading...</span>);
        }

        let breakLine = 0;
        let row = 0;

        const { imageBackCard, imagesUrl, cards } = this.props.tarot;
        const totalCards = cards.length;

        const cardsItems = cards.map((card, index) => {

            if ( index % this.props.gridCols === 0 && index > 0 ) {
                breakLine += this.props.gridCols;
                row = row + 1;
            }

            const cardX = index - breakLine;
            const cardY = row;

            return (
                <Card
                    key={index}
                    name={card.name}
                    imageBackCard={imageBackCard}
                    imagesUrl={imagesUrl + card.image}
                    cardIndex={index}
                    cardX={cardX}
                    cardY={cardY}
                />
            );
        });

        return (
            <div className='CardList' ref='cardList' style={{height: (totalCards * 9) + 'px'}}>
                {cardsItems}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tarot: state.tarot
    };
};

export default connect(mapStateToProps)(CardList);

