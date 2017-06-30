import React, { Component } from 'react';
import axios from 'axios/dist/axios.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class TarotList extends Component {
    state = { cards: [] }

    constructor(props) {
        super(props);

        this.getCards = this.getCards.bind(this);
    }

    getCards() {

    	var self = this;

        //obtém os cards com axios e adiciona ao state
        axios.get('/tarot.json')
            .then(function(response) {
                self.setState(response.data);
            })
            .catch(function(error) {
                //Toma alguma outra ação de erro.
                console.log(error);
            });

    }

    componentDidMount() {
        this.getCards();
    }

    render() {
        
        return (
        	<div>
        		{this.state.cards.map((card, index) => ( 
	        		<div className="col-md-2">
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
