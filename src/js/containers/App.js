import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGame, restartGame } from '../actions/game';
import { changeTipState } from '../actions/tip';
import CardList from './CardList';
import MagicBtn from '../components/MagicBtn';
import Tip from '../components/Tip';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { initGame, restartGame, animationMode, isDisable, gameStarted, tipState, changeTipState} = this.props;
        let elementClass = `${(animationMode !== '' ? 'is-animation' : '')} ${(isDisable ? 'is-disable' : '')}`;

        return (
            <div className={'l-main ' + elementClass}>
                <div className='l-container h-all-center'>
                    <div className='l-content'>
                        <CardList />
                    </div>
                </div>

                <footer className="Footer">
                    <Tip tipState={tipState} changeTipState={changeTipState} />

                    {gameStarted ? (
                        <MagicBtn text='Reiniciar' gameInit={restartGame} />
                    ) : (
                        <MagicBtn text='Iniciar' gameInit={initGame} />
                    )}
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let isDisable = state.appState.step.length > 0 ? 'is-disable' : '';

    return {
        isDisable: state.gameState.isDisable,
        animationMode: state.gameState.animationMode,
        gameStarted: state.gameState.gameStarted,
        tipState: state.tipState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initGame: () => {
            dispatch(initGame());
        },
        changeTipState: (tipState) => {
            dispatch(changeTipState(tipState));
        },
        restartGame: () => {
            dispatch(restartGame());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
