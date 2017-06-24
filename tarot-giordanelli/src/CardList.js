import React, { Component } from 'react';
import shuffle from 'lodash/shuffle';
import FlipMove from 'react-flip-move';
import './CardList.css';
import Card from './Card';

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {cards: [], imagesUrl: ''};
        this.sortShuffle = this.sortShuffle.bind(this);
        this.showAllCards = this.showAllCards.bind(this);
    }  

    componentDidMount() {
        var self = this;
        var request = new XMLHttpRequest();
        
        request.open('GET', this.props.ajax, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                self.setState(data);
            } else {
                console.log("We reached our target server, but it returned an error")
            }
        };

        request.onerror = function() {
             console.log("There was a connection error of some sort")
        };
    
        request.send();
    }

    showAllCards(){
        for(var key in this.refs){
            this.refs[key].showBack();
        }       
    }

    sortShuffle() {
        for(var key in this.refs){
            this.refs[key].showFront();
        }
        this.setState({
            cards: shuffle(this.state.cards)
        });
    }

    render() {
        return (
        <div id="shuffle">
            <button onClick={this.showAllCards}>Mostrar as Cartas</button>
            <button onClick={this.sortShuffle}>Embaralhar as Cartas</button>

            <FlipMove typeName="ul">
                {this.state.cards.map(card => {
                    var id = card.image.slice(0, -4);
                    return (
                        <li key={id} className="card">
                            <Card ref={id} {...card} url={this.state.imagesUrl} />
                        </li>
                    );
                })}
            </FlipMove>
        </div>
        );
    }
}

export default CardList;