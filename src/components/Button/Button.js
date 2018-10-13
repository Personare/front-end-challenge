import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  oneOfType, arrayOf, node, func, string
} from 'prop-types'

const Button = ({ children, onClick, type }) => (
  <CustomButton onClick={onClick} type={type}>
    {children}
  </CustomButton>
)

const zoomInOut = keyframes`
  from {
    transform: scale(0.8)
  }

  to {
    transform: scale(1)
  }
`

const CustomButton = styled.button`
    height: 100px;
    width: 100%;
    background-color: #3498DB;
    max-width: 100px;
    border-radius: 100%;
    border: none;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 20px;
    color:  #ffffff;
    animation: ${zoomInOut} 1s alternate infinite;
`

Button.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  onClick: func.isRequired,
  type: string
}


Button.defaultProps = {
  type: 'button'
}
export default Button
