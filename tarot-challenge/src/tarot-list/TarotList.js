import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TarotList.css';
import cards from './tarot.json'

class TarotList extends Component {
    state = { cards: [] }

    constructor(props) {
        super(props);

        //Os métodos da classe não tem acesso ao this por padrão.. estranho hm
        this.getCards = this.getCards.bind(this);
    }

    getCards() {
    	this.setState(cards); 
    }

    componentDidMount() {
        this.getCards();
    }

    shuffleCards() { }

    hideCards() { }

    render() {
        
        return (
        	<div>
        		{this.state.cards.map((card, index) => (
	        		<div className="col-md-2" key={index}>
				        <div className="card">
				        	<img className='card-img-top' src={this.state.imagesUrl + card.image} alt={card.name} />
				        </div>
				    </div>
			    ))}
        	</div>
        );
    }
}

export default TarotList
