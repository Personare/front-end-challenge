import React, { Component } from 'react'

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

export default App
