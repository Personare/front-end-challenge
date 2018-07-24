import React, { Component } from 'react'

class Cta extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="button-container">
                <button className="button-cta">{this.props.title}</button>
            </div>
        )
    }
}

export default Cta
