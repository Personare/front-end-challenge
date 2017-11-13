import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGame, restartGame } from '../actions/game';
import { changeTipState } from '../actions/tip';
import MagicBtn from '../components/MagicBtn';
import Tip from '../components/Tip';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { gameStarted, tipState, changeTipState, initGame, restartGame } = this.props;

        return (
            <footer className="Footer">
                <Tip tipState={tipState} changeTipState={changeTipState} />

                {gameStarted ? (
                    <MagicBtn text='Reiniciar' gameInit={restartGame} />
                ) : (
                    <MagicBtn text='Iniciar' gameInit={initGame} />
                )}
            </footer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameStarted: state.gameState.gameStarted,
        tipState: state.tipState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTipState: (tipState) => {
            dispatch(changeTipState(tipState));
        },
        initGame: () => {
            dispatch(initGame());
        },
        restartGame: () => {
            dispatch(restartGame());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
