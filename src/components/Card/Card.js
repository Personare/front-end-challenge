import React from 'react'
import styled from 'styled-components'

const Card = ({
    name,
    image,
    imagesUrl,
    imageBackCard,
    hasStart,
    onClick,
    flipCard
}) => {
    return (
        <Wrapper onClick={onClick} image={image}>
            <ImgWrapper
                image={image}
                imagesUrl={imagesUrl}
                imageBackCard={imageBackCard}
                hasStart={hasStart}
                flipCard={flipCard}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin: 10px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
`

const ImgWrapper = styled.img.attrs({
    src: ({ image, imagesUrl, imageBackCard, hasStart, flipCard }) =>
        hasStart && !flipCard ? imageBackCard : `${imagesUrl}${image}`
})`
    width: 100px;
    height: 200px;
    background: transparent url('./assets/loading.gif') center no-repeat;
`
export default Card
