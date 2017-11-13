import React, { Component } from 'react';

class Tip extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.changeTipState('show');
        }, 1000);
    }

    render() {
        let { tipState } = this.props;

        return (
            <span className={'Tip is-' + tipState}>
                <p className="primary-text">
                    Clique em "iniciar" para começar
                </p>
            </span>
        );
    }
};

export default Tip;
