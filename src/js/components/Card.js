import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Card'>
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
