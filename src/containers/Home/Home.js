import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from '../../components'
import getCards from '../../services'

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      cards: [],
      imagesUrl: '',
      imageBackCard: '',
      hasStart: false,
      currentIndex: null
    }

    this.startGame = this.startGame.bind(this)
    this.choosenCard = this.choosenCard.bind(this)
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

  startGame() {
    const { cards } = this.state
    const randomicCards = cards.sort(() => 0.5 - Math.random())
    this.setState({ hasStart: true, cards: randomicCards })
  }

  choosenCard(index) {
    this.setState({ currentIndex: index })
  }

  renderCardList() {
    const {
      cards, imagesUrl, imageBackCard, currentIndex, hasStart
    } = this.state

    return cards.map(({ name, image }, index) => (
      <Card
        key={name}
        name={name}
        image={image}
        imagesUrl={imagesUrl}
        imageBackCard={imageBackCard}
        hasStart={hasStart}
        flipCard={currentIndex === index}
        onClick={() => this.choosenCard(index)}
      />
    ))
  }

  render() {
    return (
      <HomeContainer>
        <button type="button" onClick={this.startGame}>
          Iniciar jogo
        </button>
        <CardsContainer>{this.renderCardList()}</CardsContainer>
      </HomeContainer>
    )
  }
}

const HomeContainer = styled.div``

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
