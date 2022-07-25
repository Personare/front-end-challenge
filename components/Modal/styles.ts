import styled,{ keyframes } from "styled-components"
import media from 'styled-media-query'

const scaleIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

export const Modal = styled.div`
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(5px);
  padding: .7rem;
  flex-direction: column;  
  border-radius: .5rem;
  display: flex;
  align-items: center;
  position: relative;
  -webkit-animation: ${scaleIn} 700ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
  animation: ${scaleIn} 700ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
  `
export const ModalBackDrop = styled.div`
  background-color: rgba($color: #000000c2, $alpha: 0.35);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center; 
`
export const ModalContainer = styled.div`
  width: 60%;
  ${media.lessThan('medium')`
    max-height: 100%;
    width: 90%;
  `}
`

export const ModalContent = styled.div`
  border-radius: .5rem;
  padding: 0.2rem; 
  backdrop-filter: blur(100px);
`
