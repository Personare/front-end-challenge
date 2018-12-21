import React from 'react'
import ReactDOM from 'react-dom'

import App from '../components/App'

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

  ReactDOM.render(<App {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
