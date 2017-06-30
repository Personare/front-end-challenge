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

                <div className="modal fade" id="cardModal" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Carta -> Nome da Carta</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="col-md-4">
                                    <img className='card-img-top' src={cardTurned} alt=""/>
                                </div>
                                <div className="col-md-8">
                                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices risus vel libero dignissim faucibus. Nam tortor felis, pulvinar ut magna ut, tincidunt mattis mauris. Sed dictum mi pretium est rutrum convallis. Sed non pretium ligula. Quisque eleifend leo ut tortor vehicula, eget consequat urna commodo. Mauris et posuere dui. Integer posuere lacus ut malesuada lobortis. Phasellus suscipit maximus purus nec semper. Quisque ut rhoncus tellus. Nullam et lacus arcu. Nulla ante elit, iaculis at metus at, cursus congue velit. Fusce at turpis lectus. Pellentesque eget efficitur lorem, et egestas tortor. Pellentesque sed ornare lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Suspendisse auctor varius aliquet. Donec at libero a velit bibendum tempor ut sed diam. Maecenas et placerat nibh. Fusce luctus metus lectus, ac facilisis tortor imperdiet id. Nullam tristique dictum nibh a tristique. Pellentesque ornare molestie mattis. Nulla eget semper dui, convallis egestas massa. Pellentesque eleifend porttitor augue in scelerisque. Integer sollicitudin, sapien venenatis tempus varius, metus arcu molestie nibh, in commodo eros enim a erat. Fusce sed sagittis leo, non sollicitudin diam. Sed sodales massa vitae augue volutpat, sit amet finibus lorem pretium.</h2>
                                    <p></p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.shuffleCards}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
        	</div>
        );
    }
}

export default TarotList
