import React, { Component } from 'react'
import axios from 'axios'

import Card from './card'

class Deck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cards: [],
            imagesUrl: [],
            imageBackCard: []
        }
    }

    componentDidMount() {
        axios.get(`./../tarot.json`)
            .then((res) => {
                const imageBackCard = res.data.imageBackCard
                const cards = res.data.cards
                const imagesUrl = res.data.imagesUrl

                this.setState({ cards })
                this.setState({ imagesUrl })
                this.setState({ imageBackCard })
            })
    }

    render() {
        return(
            <div className={`${this.props.classStart} card-list`}>
                {this.state.cards.map((card, index) =>
                    <Card
                        key={index}
                        imgCard={this.state.imagesUrl + card.image}
                        imgCardName={card.name}
                        imgCardBack={this.state.imageBackCard} />
                )}
            </div>
        )
    }
}

export default Deck
