import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)
    }

    getClassOpen() {
        return this.props.cardOpen === this.props.cardId ? this.props.classOpen : ''
    }

    render() {
        return(
            <div className={`card-wrap ${this.getClassOpen()}`} onClick={() => this.props.handleCard(this.props.cardId)}>
                <div className="card">
                    <img src={this.props.imgCard} alt={this.props.imgCardName} className="card-front"/>
                    <img src={this.props.imgCardBack} alt="background card" className="card-back"/>

                    <div className="card-description">
                        <h2 className="card-title">
                            title
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, modi?
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
