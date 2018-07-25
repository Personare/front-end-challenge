import React, { Component } from 'react'

import Deck from '../Deck'
import Cta from '../Buttons/cta'

const initialState = {
    classBackCard: '',
    cardOpen: null,
    classOpen: '',
    game: false,
    textButtonCta: 'Começar Jogo'
}

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...initialState
        }

        this.startGame = this.startGame.bind(this)
        this.handleCard = this.handleCard.bind(this)
    }

    startGame() {
        if( this.state.game ) {
            this.setState({ ...initialState })
            return
        }

        this.setState({
            classBackCard: 'back-card',
            game: true,
            textButtonCta: 'Reiniciar Jogo'
        })
    }

    handleCard(cardId) {
        if( this.state.cardOpen !== null || !this.state.game ) {
            return
        }

        this.setState({
            cardOpen: cardId,
            classOpen: 'open-card'
        })
    }

    render() {
        return(
            <div className="wrap">
                <Cta title={this.state.textButtonCta} click={this.startGame} />
                <Deck
                    initialGame={this.state.game}
                    classStart={this.state.classBackCard}
                    handleCard={this.handleCard}
                    cardOpen={this.state.cardOpen}
                    classOpen={this.state.classOpen} />
            </div>
        )
    }
}

export default App;
