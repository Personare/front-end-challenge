import React, { Component } from 'react'
import { Card } from '../../components'
import { getCards } from '../../services'
import styled from 'styled-components'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            cards: [],
            imagesUrl: '',
            imageBackCard: '',
            hasStart: false
        }

        this.startGame = this.startGame.bind(this)
        this.choosenCard = this.choosenCard.bind(this)
    }

    startGame() {
        this.setState({ hasStart: true })
        console.log('hasStart', this.state.hasStart)
    }

    choosenCard() {
        this.setState({ hasStart: false })
    }

    renderCardList() {
        const { cards, imagesUrl, imageBackCard, hasStart } = this.state

        return cards.map(({ name, image }) => (
            <Card
                key={name}
                name={name}
                image={image}
                imagesUrl={imagesUrl}
                imageBackCard={imageBackCard}
                hasStart={hasStart}
                onClick={this.choosenCard}
            />
        ))
    }

    render() {
        return (
            <HomeContainer>
                <button onClick={this.startGame}>Iniciar jogo</button>
                <CardsContainer>{this.renderCardList()}</CardsContainer>
            </HomeContainer>
        )
    }

    componentDidMount() {
        getCards().then(response => {
            this.setState({
                cards: response.cards,
                imagesUrl: response.imagesUrl,
                imageBackCard: response.imageBackCard
            })
        })
    }
}

const HomeContainer = styled.div``

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
