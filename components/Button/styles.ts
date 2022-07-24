import styled from 'styled-components'
import media from 'styled-media-query'
import {ButtonProps} from './index'

export const Button = styled.button<ButtonProps>`
  align-self: center;
  background-color: rgb(205, 0, 107);
  color: #FFF;
  cursor: pointer;
  font-size: 2rem;
  width: 95%;
  border: none;
  padding: 1rem;
  margin: auto 5%;

  &:active {
    background-color: rgb(161, 35, 101);
  }

  &:hover {
    background-color: rgb(161, 35, 101);
  }

  ${media.greaterThan('medium')`
    width: 300px;
    font-size: 1.3rem;`
  }
`
