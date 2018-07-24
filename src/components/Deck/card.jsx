import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
		super(props)
    }

    render() {
        return(
            <div className="card-wrap">
                <div className="card">
                    <img src={this.props.imgCard} alt={this.props.imgCardName} className="card-front"/>
                    <img src={this.props.imgCardBack} alt="background card" className="card-back"/>
                </div>
            </div>
        )
    }
}

export default Card
