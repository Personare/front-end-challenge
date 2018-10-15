import React, { Component } from 'react'
import styled from 'styled-components'
import { Button, Card, Modal } from '../../components'
import getCards from '../../services'
import { randomicArray } from '../../utils/utils'
import { CARD_DESCRIPTION } from '../../utils/messages'

export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      cards: [],
      imagesUrl: '',
      imageBackCard: '',
      hasStart: false,
      showModalFlag: false,
      currentCard: {
        name: '',
        image: ''
      }
    }

    this.startGame = this.startGame.bind(this)
    this.choosenCard = this.choosenCard.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.restartGame = this.restartGame.bind(this)
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
    const randomicCards = randomicArray(cards)
    this.setState({ hasStart: true, cards: randomicCards })
  }

  restartGame() {
    const { cards } = this.state
    this.closeModal()
    this.setState({ hasStart: false, cards })
  }

  choosenCard(name, image) {
    const { hasStart } = this.state
    if (hasStart) {
      this.setState({
        showModalFlag: true,
        currentCard: {
          name,
          image
        }
      })
    }
  }

  closeModal() {
    this.setState({ showModalFlag: false })
  }

  renderCardList() {
    const {
      cards, imagesUrl, imageBackCard, hasStart
    } = this.state

    return cards.map(({ name, image }) => (
      <Card
        key={name}
        image={image}
        imagesUrl={imagesUrl}
        imageBackCard={imageBackCard}
        hasStart={hasStart}
        onClick={() => this.choosenCard(name, image)}
      />
    ))
  }

  render() {
    const {
      imagesUrl, imageBackCard, showModalFlag, currentCard, hasStart
    } = this.state
    const { name, image } = currentCard

    return (
      <HomeContainer>
        {!hasStart && <Button onClick={this.startGame}>Start</Button>}

        {showModalFlag && (
          <Modal onClose={this.closeModal} title="Carta escolhida">
            <Card
              key={name}
              description={CARD_DESCRIPTION}
              name={name}
              image={image}
              imagesUrl={imagesUrl}
              imageBackCard={imageBackCard}
              width="200px"
              height="400px"
              cardBoard={false}
            />
            <Button onClick={this.restartGame}>Play Again</Button>
          </Modal>
        )}
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
