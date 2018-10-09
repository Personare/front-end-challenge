import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import './Card.scss';
import Modal from '../Modal/Modal';

class Card extends Component {
    static propTypes = {
        name: string.isRequired,
        front: string.isRequired,
        back: string.isRequired,
        isClosed: bool
    };

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
    }

    _getClassName() {
        const { isClosed } = this.props;

        return isClosed ? 'Card --closed' : 'Card';
    }

    _openModal() {
        const { isClosed } = this.props;

        if (isClosed) {
            this.setState({ modalIsOpen: !this.state.modalIsOpen });
        }
    }

    render() {
        const { name, front, back } = this.props;

        return (
            <div className={this._getClassName()} onClick={this._openModal.bind(this)}>
                <div className="Card__side --front">
                    <img src={front} alt={name} />
                </div>
                <div className="Card__side --back">
                    <img src={back} alt={name} />
                </div>

                <Modal
                    name={name}
                    image={front}
                    isOpen={this.state.modalIsOpen}
                    close={() => this.setState({ modalIsOpen: false })}
                />
            </div>
        );
    }
}

export default Card;
