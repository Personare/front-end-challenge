import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGame, restartGame } from '../actions/game';
import { closeModal } from '../actions/modal';
import { selectCardById } from '../reducers/modal';
import { changeTipState } from '../actions/tip';
import CardList from './CardList';
import MagicBtn from '../components/MagicBtn';
import Tip from '../components/Tip';
import Modal from '../components/Modal';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            initGame, restartGame, animationMode, isDisable, gameStarted,
            tipState, changeTipState, modalState, selectedCard, closeModal
        } = this.props;

        let mainClass = `${(animationMode !== '' ? 'is-animation' : '')} ${(isDisable ? 'is-disable' : '')}`;
        let contentClass = modalState === 'show' ? 'is-disable' : '';

        return (
            <div className={'l-main ' + mainClass}>
                <div className='l-container'>
                    <div className={'l-content ' + contentClass }>
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

                <Modal card={selectedCard} modalState={modalState} onClick={closeModal}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisable: state.gameState.isDisable,
        animationMode: state.gameState.animationMode,
        gameStarted: state.gameState.gameStarted,
        tipState: state.tipState,
        selectedCard: selectCardById(state),
        modalState: state.modal.modalState
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
        },
        closeModal: () => {
            dispatch(closeModal());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
