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

        const { imageBackCard, imagesUrl, cards } = this.props.tarot;
        const cardsItems = cards.map((card, index) => {
            return (
                <Card
                    key={index}
                    name={card.name}
                    imageBackCard={imageBackCard}
                    imagesUrl={imagesUrl + card.image}
                />
            );
        });

        return (
            <div className='CardList'>
                {cardsItems}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log( state );
    return {
        tarot: state.tarot
    };
};

export default connect(mapStateToProps)(CardList);

