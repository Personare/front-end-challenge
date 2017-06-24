import React, { Component } from 'react';
import FlipCard from 'react-flipcard';
import './Card.css';
import Modal from 'react-modal';
import CardDetail from './CardDetail';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {isFlipped: true, modalIsOpen: false};
        this.showBack = this.showBack.bind(this);
        this.showFront = this.showFront.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    showBack() {
        this.setState({isFlipped: true});
    }

    showFront() {
        this.setState({isFlipped: false});
    }

    handleOnFlip(flipped) {
        if (flipped) {
            console.log(flipped)
        }
    }

    render() {
        return (
        <div>
             {this.state.modalIsOpen ?
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Descrição da carta"
                >
                    <button onClick={this.closeModal} style={{ float: "right" }}>Fechar</button>
                    <CardDetail {...this.props}/>
                    
                </Modal>
            : null}

            <FlipCard
                disabled={true}
                flipped={this.state.isFlipped}
                onFlip={this.handleOnFlip}
            >
                <div onClick={this.showBack}>
                    <img src="https://s-media-cache-ak0.pinimg.com/736x/04/28/6f/04286fcde886e39da380842ff98ab9b5.jpg" alt=""/>
                </div>
                <div>
                    <h3>{this.props.name}</h3>
                    <img src={this.props.url + this.props.image} alt="" onClick={this.showFront} />
                    <button onClick={this.openModal}>Ler Mais</button>
                </div>
            </FlipCard>
        </div>
        );
    }
};

export default Card;
