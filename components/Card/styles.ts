import styled, {css} from 'styled-components'

export const Card = styled.div`
  margin: .6rem;
`
export const CardContent = styled.div<{flipped:boolean}>`
  ${({flipped}) => css`
    position: relative;
    width: 120px;
    height: 200px;
    transition: transform 606ms ease-in-out;
    transform-style: preserve-3d;

    ${flipped && css`
      transform: rotateY(-180deg);
    `}
  `}  
`
const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  cursor: pointer;
  border-radius: 5px;
`
export const CardFaceFront = styled(CardFace)`
  width: 120px;
  height: 200px;
  overflow: hidden;
`
export const CardFaceBack = styled(CardFace)`
  align-self: center;
  background: #420027b9;
  border: 5px solid #ccc;   
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url('backCard.svg');
  transform: rotateY(-180deg);
`
