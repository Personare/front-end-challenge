import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);

        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        const { cardX, cardY, cardIndex } = this.props;
        const element = this.refs[cardIndex];

        let totalMargens = cardX * 20;
        let leftPosition = cardX * element.offsetWidth + totalMargens;

        let totalTopMargins = cardY * 20;
        let topPosition = cardY * element.offsetHeight + totalTopMargins;

        let parent = element.parentNode;
        let parentHeight = (element.offsetHeight + 20) * (cardY + 1) - 20;

        parent.style.height = `${parentHeight}px`;
        element.style.left = `${leftPosition}px`;
        element.style.top = `${topPosition}px`;
    }

    render() {
        return (
            <div className='Card'
                 style={{ left: this.props.cardX, top: this.props.cardY }}
                 ref={this.props.cardIndex}
            >
                <div className='Card__wrapper'>
                    <div className='Card__side is-front'>
                        <img className='Card__image' src={this.props.imagesUrl} />
                    </div>
                    <div className='Card__side is-back h-hide'>
                        <img className='Card__image' src={this.props.imageBackCard} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Card;
