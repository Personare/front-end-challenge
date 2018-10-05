import React from 'react'
import Card from './Card'
import renderer from 'react-test-renderer'

describe('Card component', () => {
    const props = {}
    it('should render correctly', () => {
        const tree = renderer.create(<Card />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
