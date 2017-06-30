import React, { Component } from 'react';
import Cards        from './tarot.json'
import Shuffle      from 'react-shuffle'; 
import { Modal }   from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './TarotList.css';


class TarotList extends Component {
    state = { cards: [] }

    constructor(props) {
        super(props);
        this.getCards       = this.getCards.bind(this);
        this.shuffleCards   = this.shuffleCards.bind(this);
        this.turnCards      = this.turnCards.bind(this); 
    }

    componentDidMount() {
        this.getCards();
    }

    getCards() {
    	this.setState(Cards); 
    }

    shuffleCards() { 
       var state    = this.state; 
       state.cards  = this.shuffle(state.cards); 
       
       this.setState(state); 
    }

    turnCards() { 
        Cards.turned    = true;
        Cards.cards     = this.shuffle(Cards.cards);  
        
        this.setState(Cards); 
    }

    chooseCard(card, index) {
        console.log(card); 
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    render() {
        
        var cardTurned = "img/card-turned.jpg"; 

        return (
        	<div>
                {this.state.turned ? (
                    <div className="col-md-12 ">
                        <button className="btn btn-lg btn-default disabled">As cartas foram embaralhadas, selecione uma.</button>
                    </div>
                ) : (
                    <div className="col-md-12 ">
                        <button className="btn btn-lg btn-default" onClick={this.turnCards}>Iniciar Jogo <span role="img" aria-label="Atom">⚛️</span></button>
                    </div>
                )}
                <Shuffle duration={500}>
        		{this.state.turned ? (
                    this.state.cards.map((card, index) => (
                        <div className="col-md-2" key={index} data-toggle="modal" data-target="#cardModal">
                            <div className="card">
                                <img className='card-img-top' src={cardTurned} onClick={() => this.chooseCard(card, index)} alt=""/>
                            </div>
                        </div>
                    ))
                ) : (
                    this.state.cards.map((card, index) => (
                        <div className="col-md-2" key={index}>
                            <div className="card">
                                <img className='card-img-top' src={this.state.imagesUrl + card.image} alt={card.name} />
                            </div>
                        </div>
                    ))
                )}
                
                </Shuffle>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Carta -> xxxx</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <div className="col-md-4">
                            <img className='card-img-top' src={this.state.imagesUrl + card.selectedCard.image} alt={card.selectedCard.name} />
                        </div>
                        <div className="col-md-8">
                            <h4>Descrição da carta xxxx</h4>
                        </div>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
        	</div>
        );
    }
}

export default TarotList
