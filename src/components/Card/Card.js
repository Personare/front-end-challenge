import React from 'react'
import styled from 'styled-components'
import { string, func, bool } from 'prop-types'

const Card = ({
  name,
  description,
  image,
  imagesUrl,
  imageBackCard,
  hasStart,
  onClick,
  width,
  height,
  cardBoard
}) => (
  <Wrapper onClick={onClick} image={image} cardBoard={cardBoard}>
    {name && <CardName>{name}</CardName>}
    <ImgWrapper
      image={image}
      imagesUrl={imagesUrl}
      imageBackCard={imageBackCard}
      hasStart={hasStart}
      width={width}
      height={height}
    />
    {description && <CardDescription>{description}</CardDescription>}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  box-shadow: ${({ cardBoard }) => (cardBoard ? '5px 5px 5px 0px rgba(0, 0, 0, 0.75)' : 'none')};
`

const CardName = styled.div`
  margin-bottom: 20px;
`
const CardDescription = styled.div`
  max-width: 300px;
  text-align: justify;
  margin-top: 20px;
`

const ImgWrapper = styled.img.attrs({
  src: ({
    image, imagesUrl, imageBackCard, hasStart
  }) => (hasStart ? imageBackCard : `${imagesUrl}${image}`)
})`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: transparent url('./assets/loading.gif') center no-repeat;
`

Card.propTypes = {
  name: string,
  description: string,
  image: string.isRequired,
  imagesUrl: string.isRequired,
  imageBackCard: string.isRequired,
  hasStart: bool,
  onClick: func,
  width: string,
  height: string,
  cardBoard: bool
}

Card.defaultProps = {
  name: '',
  description: '',
  hasStart: false,
  width: '100px',
  height: '200px',
  cardBoard: true,
  onClick: Function
}

export default Card
