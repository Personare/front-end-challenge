import React, { Component } from 'react';
import { connect } from 'react-redux';
import MagicBtn from '../components/MagicBtn';
import CardList from './CardList';
import { getBreakpoint } from '../helpers';
import { changeGridCols } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);

        this.setGridColumn = this.setGridColumn.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.setGridColumn);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setGridColumn);
    }

    componentWillMount() {
        this.setGridColumn();
    }

    setGridColumn() {
        var currentBreakpoint = getBreakpoint();
        let totalCols = 8;

        if (currentBreakpoint === 'tablet') {
            totalCols = 4;
        } else if (currentBreakpoint === 'phone') {
            totalCols = 2;
        } else if (currentBreakpoint === 'smallPhone') {
            totalCols = 2;
        }

        this.props.setGridCols(totalCols);
    }

    render() {
        return (
            <div className='l-main'>
                <div className='l-container h-all-center'>
                    <header>
                        <p className="primary-text">
                            Bem vindo! Clique em iniciar para começar
                        </p>

                        <MagicBtn text='Iniciar' />
                    </header>

                    <div className='l-content'>
                        <CardList gridCols={this.props.gridCols} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gridCols: state.appState.gridCols
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setGridCols: (totalCols) => { dispatch(changeGridCols(totalCols)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
