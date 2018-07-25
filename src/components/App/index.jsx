import React, { Component } from 'react'

import Deck from '../Deck'
import Cta from '../Buttons/cta'

const initialState = {
    classBackCard: ''
}

class App extends Component {
    constructor(props) {
        super(props)

        this.startGame = this.startGame.bind(this)

        this.state = {
            ...initialState
        }
    }

    startGame() {
        this.setState({ classBackCard: 'back-card' })
    }

    clearGame() {
        console.log( 'reset' )
    }

    render() {
        return(
            <div className="wrap">
                <Cta title="Começar jogo" click={this.startGame} />
                <Deck classStart={this.state.classBackCard} />
            </div>
        )
    }
}

export default App;
