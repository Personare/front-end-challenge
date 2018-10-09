import React, { Component } from 'react'
import styled from 'styled-components'
import {
  func, node, arrayOf, oneOfType, string
} from 'prop-types'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleKeyUp(e) {
    const { onClose } = this.props
    if (e.keyCode === 27) {
      e.preventDefault()
      onClose()
      window.removeEventListener('keyup', this.handleKeyUp, false)
    }
  }

  render() {
    const { onClose, children, title } = this.props

    return (
      <Wrapper>
        <ModalOverlay onClick={onClose} />
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              {title}
              <CloseIcon onClick={onClose} />
            </ModalHeader>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </ModalContent>
        </ModalContainer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  visibility: ${props => props.visibilityStatus};
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.76);
`

const ModalContainer = styled.div.attrs({
  'data-modal': 'modal-content'
})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  text-align: center;
  padding: 4px;
  cursor: pointer;
`

const ModalContent = styled.div.attrs({
  'data-modal': 'modal-dialog'
})`
  position: relative;
  outline: 0;
  width: auto;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: default;
  border-radius: 3px;
  width: auto;
  margin: 30px auto;
  background-color: #ffffff;

  @media (max-width: 575px) {
    min-width: 100%;
    height: 100%;
    overflow: auto;
    margin: 0;
  }
`

const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ModalHeader = styled.div`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 600;
`

const CloseIcon = styled.img.attrs({
  src: './assets/close_icon.svg'
})`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;
`

Modal.propTypes = {
  onClose: func.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
  title: string
}

Modal.defaultProps = {
  title: ''
}
export default Modal
