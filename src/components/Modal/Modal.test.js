import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import sinon from 'sinon'
import Modal from './Modal'

const Component = () => <div>Contents</div>

describe('Modal component', () => {
  const props = {
    onClose: Function,
    children: <Component />
  }

  it('should render correctly with all props', () => {
    const tree = renderer.create(<Modal {...props} title="" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly without title prop', () => {
    const tree = renderer.create(<Modal {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call onClose when click on closeIcon', () => {
    const spy = sinon.spy()
    const tree = mount(
      <Modal onClose={spy}>
        <Component />
      </Modal>
    )
    const closeIcon = tree.find('[data-modal="modal-close-icon"]')
    closeIcon.simulate('click')
    expect(spy.called).toBeTruthy()
  })

  it('should call onClose when Escape key is pressed', () => {
    const spy = sinon.spy()
    const eventCode = { keyCode: 27, preventDefault: Function }
    const tree = mount(
      <Modal onClose={spy}>
        <Component />
      </Modal>
    )
    tree
      .find('Modal')
      .instance()
      .handleKeyUp(eventCode)
    expect(spy.called).toBeTruthy()
  })
})
