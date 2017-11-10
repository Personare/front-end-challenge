import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { card, modalState, onClick } = this.props;

        return (
            <div className={'Modal is-' + modalState }>
                <span className='Modal__close' onClick={onClick}>X</span>

                {card && (
                    <div className='Modal__wrapper'>
                        <div className='CardPicture'>
                            <img className='CardPicture__image' src={card.imgUrl} />
                        </div>

                        <div className='Modal__content'>
                            <h1 className='primary-title'>{card.name}</h1>
                            <p className='body-text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default Modal;
