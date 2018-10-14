import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import sinon from 'sinon'
import Button from './Button'

describe('Button', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Button onClick={Function} type="button">
        Button text
      </Button>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with default props', () => {
    const tree = renderer.create(
      <Button onClick={Function}>
        Button text
      </Button>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should call onClick function', () => {
    const spy = sinon.spy()
    const tree = mount(
      <Button onClick={spy}>
        Button text
      </Button>
    )

    tree.find('button').simulate('click')

    expect(spy.called).toMatchSnapshot()
  })
})
