import React, { Component } from 'react';
import { fireEvent } from '../helpers/utils';
import { debounce } from 'underscore';

class Card extends Component {
    constructor(props) {
        super(props);

        this.updateDimensions = this.updateDimensions.bind(this);
        this.joinCard = this.joinCard.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", debounce(this.updateDimensions));;
        this.updateDimensions();
    }

    componentDidUpdate() {
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    joinCard(card) {
        let middleX = (card.parentNode.offsetWidth / 2) - (card.offsetWidth / 2);
        let middleViewHeight = (window.innerHeight / 2) - (card.offsetHeight / 2);

        card.style.webkitTransform = `translate(${middleX}px, ${middleViewHeight}px)`;
        card.style.transform = `translate(${middleX}px, ${middleViewHeight}px)`;
    }

    updateDimensions() {
        const { cardX, cardY, cardIndex, totalCards, gridCollumn } = this.props;
        const card = this.refs[cardIndex];

        if(this.props.shuffling === true) {
            return this.joinCard(card);
        }

        const cardWidth = card.offsetWidth
        const cardHeight = card.offsetHeight;
        const marginValue = 20;

        let marginRightTotal = cardX * marginValue;
        let marginTopTotal = cardY * marginValue;

        let leftPosition = (cardX * cardWidth) + marginRightTotal;
        let topPosition = (cardY * cardHeight) + marginTopTotal;

        card.style.webkitTransform = `translate(${leftPosition}px, ${topPosition}px)`;
        card.style.transform = `translate(${leftPosition}px, ${topPosition}px)`;

        // if is last card then set height to the parent
        if(cardIndex === (totalCards - 1)) {
            let parentHeight = ( (cardHeight + marginValue) * (totalCards / gridCollumn) );

            card.parentNode.style.height = `${parentHeight}px`;
            console.log("MUDOUUU");
        }

    }

    render() {
        const { flipped, cardIndex, imagesUrl, imageBackCard, onClick } = this.props;

        let classValue = flipped ? 'flipped' : '';

        return (
            <div
                className={'Card ' + classValue}
                ref={cardIndex}
                onClick={() => { this.props.onClick(cardIndex) }}
            >
                <div className='Card__wrapper'>
                    <div className='Card__side is-front'>
                        <img className='Card__image' src={imagesUrl} />
                    </div>
                    <div className='Card__side is-back h-hide'>
                        <img className='Card__image' src={imageBackCard} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;
