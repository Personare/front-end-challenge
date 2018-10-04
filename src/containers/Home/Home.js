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
            imageBackCard: ''
        }
    }

    render() {
        const { cards, imagesUrl, imageBackCard } = this.state

        const cardList = cards.map(({ name, image }) => {
            return (
                <Card
                    key={name}
                    name={name}
                    image={image}
                    imagesUrl={imagesUrl}
                    imageBackCard={imageBackCard}
                />
            )
        })

        return <Wrapper>{cardList}</Wrapper>
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

const Wrapper = styled.div``
