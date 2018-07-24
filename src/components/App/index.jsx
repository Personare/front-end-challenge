import React, { Component } from 'react'

import Deck from '../Deck'
import Cta from '../Buttons/cta'

class App extends Component {
    render() {
        return(
            <div className="wrap">
                <Cta title="Começar jogo" />
                <Deck />
            </div>
        )
    }
}

export default App;
