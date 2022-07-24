import styled from 'styled-components'
import media from 'styled-media-query'
import {ButtonProps} from './index'

export const Button = styled.button<ButtonProps>`
  align-self: center;
  background-color: rgb(205, 0, 107);
  color: #FFF;
  cursor: pointer;
  font-size: 2rem;
  padding: 16px;
  width: 150px;
  border: none;

  &:active {
    background-color: rgb(161, 35, 101);
  }

  &:hover {
    background-color: rgb(161, 35, 101);
  }
  ${media.greaterThan('large')`
    grid-column-start: span 2;
    justify-self: center;
    width: 200px;
    font-size: 1rem;`
  }
`
