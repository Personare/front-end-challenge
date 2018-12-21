import React from 'react'
import ReactDOM from 'react-dom'

import Cards from '../components/Cards'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const props = {
    isLoading: true,
    setIsLoading: (isLoading) => {
      expect(isLoading).toBe(true)
    },
    getTarotCards: (param) => {
      expect(param).toBe(undefined)
    },
  }

  ReactDOM.render(<Cards {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
