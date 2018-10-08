import React, { Component } from 'react';
import { string } from 'prop-types';
import './Card.scss';
import Modal from '../Modal/Modal';

class Card extends Component {
    static propTypes = {
        name: string.isRequired,
        front: string.isRequired,
        back: string.isRequired
    };

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
    }

    render() {
        const { name, front, back } = this.props;

        return (
            <div className="Card" onClick={() => this.setState({ modalIsOpen: !this.state.modalIsOpen })}>
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
                    onClick={() => this.setState({ modalIsOpen: false })}
                />
            </div>
        );
    }
}

export default Card;
