import React, { Component } from 'react';
import Cards        from './tarot.json'
import Shuffle      from 'react-shuffle'; 
import { Modal, Button }   from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './TarotList.css';


class TarotList extends Component {
    state = { 
        cards: [],
        showModal: false,
        selectedCard: {
            name: null, 
            image: null,
            description: null
        }
    }

    constructor(props) {
        super(props);
        this.getCards       = this.getCards.bind(this);
        this.turnCards      = this.turnCards.bind(this);
        this.chooseCard     = this.chooseCard.bind(this); 
    }

    componentDidMount() {
        var cards, 
        self = this,
        request = new XMLHttpRequest();
        
        request.onload = function (e) {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    self.getCards(JSON.parse(request.responseText));
                }
            }
        };
        request.open("GET", '/tarot.json', true);
        request.send(null);
    }

    getCards(cards) {
        var selectedCard = { image: null, name: null };
        cards.selectedCard = selectedCard;
    	this.setState(cards); 
    }

    turnCards() { 
        Cards.turned    = true;
        Cards.cards     = this.shuffle(Cards.cards);

        if (this.state.showModal)
            Cards.showModal = false;
        
        this.setState(Cards); 
    }

    chooseCard(card, index) {
        var state = this.state; 
        var selected = state.cards[index]; 

        selected.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus nibh sed dolor porta, eu maximus lectus feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec tristique turpis. Phasellus malesuada mollis suscipit. Curabitur massa lorem, aliquet eget blandit vitae, cursus nec sapien. Suspendisse condimentum efficitur dolor at ultrices. Suspendisse sollicitudin felis sit amet risus dapibus ultricies. Integer odio nisl, feugiat eget diam sit amet, mollis tempus turpis. Cras sit amet interdum lectus. Proin vestibulum porta condimentum. Curabitur aliquet venenatis pulvinar. Nulla facilisi. Nunc scelerisque tellus sit amet augue volutpat, et interdum mi molestie. Morbi aliquet turpis sed velit bibendum elementum."
        state.selectedCard = selected; 
        state.showModal = true; 
        this.setState(state); 
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

    goBack() {
        window.location.reload();
    }

    render() {
        
        var cardTurned = "img/card-turned.jpg"; 
        
        return (
        	<div>
                {this.state.turned ? (
                    <div className="col-md-12 ">
                        <button className="btn btn-lg btn-default disabled">
                        As cartas foram embaralhadas, selecione uma.</button>
                        <button className="btn btn-sm btn-default pull-right" onClick={this.goBack}>
                        <span role="img" aria-label="Voltar">↩</span></button>
                    </div>
                ) : (
                    <div className="col-md-12 ">
                        <button className="btn btn-lg btn-default" onClick={this.turnCards}>Iniciar Jogo 
                        <span role="img" aria-label="Atom">⚛️</span></button>
                    </div>
                )}
                <Shuffle duration={500}>
        		{this.state.turned ? (
                    this.state.cards.map((card, index) => (
                        <div className="col-md-2" key={index} data-toggle="modal" data-target="#cardModal">
                            <div className="card">
                                <img className='card-img-top' src={cardTurned} 
                                onClick={() => this.chooseCard(card, index)} alt=""/>
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

                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title><span role="img" aria-label="Atom">⚛️</span> {this.state.selectedCard.name}</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-4">
                                <img className='card-img-top' src={this.state.imagesUrl + this.state.selectedCard.image} 
                                alt={this.state.selectedCard.name} />
                            </div>
                            <div className="col-md-8">
                                <h4>{this.state.selectedCard.description}</h4>
                            </div>
                        </div>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <div className="col-md-12">
                            <Button onClick={this.turnCards}>Embaralhar novamente</Button>
                        </div>
                    </Modal.Footer>
                </Modal>
        	</div>
        );
    }
}

export default TarotList
