import React from 'react'
import styled from 'styled-components'
import tarot from '../../../tarot'

const Card = ({ name, image, imagesUrl, imageBackCard }) => {
    return <ImgWrapper image={image} imagesUrl={imagesUrl} />
}

const ImgWrapper = styled.img.attrs({
    src: ({ image, imagesUrl }) => `${imagesUrl}${image}`
})``
export default Card
