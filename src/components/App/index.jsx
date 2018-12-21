import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  componentDidMount() {
    const { setIsLoading, getTarotCards } = this.props

    setIsLoading(true)
    getTarotCards()
  }

  render() {
    return (
      <h1>
        Hello App
      </h1>
    )
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  getTarotCards: PropTypes.func.isRequired,
}

export default App
