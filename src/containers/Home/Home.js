import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Modal } from '../../components'
import getCards from '../../services'
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
      imagesUrl, imageBackCard, showModalFlag, currentCard
    } = this.state
    const { name, image } = currentCard

    return (
      <HomeContainer>
        <button type="button" onClick={this.startGame}>
          Iniciar jogo
        </button>
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
