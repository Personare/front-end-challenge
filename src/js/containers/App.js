import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal';
import { selectCardById } from '../reducers/modal';
import CardList from './CardList';
import Footer from './Footer';
import Modal from '../components/Modal';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { animationMode, isDisable, modalState, selectedCard, closeModal } = this.props;

        let mainClass = `${(animationMode !== '' ? 'is-animation' : '')} ${(isDisable ? 'is-disable' : '')}`;
        let contentClass = modalState === 'show' ? 'is-disable' : '';

        return (
            <div className={'l-main ' + mainClass}>
                <div className='l-container'>
                    <div className={'l-content ' + contentClass }>
                        <CardList />
                    </div>
                </div>

                <Footer />

                <Modal card={selectedCard} modalState={modalState} onClick={closeModal}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisable: state.gameState.isDisable,
        animationMode: state.gameState.animationMode,
        selectedCard: selectCardById(state),
        modalState: state.modal.modalState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch(closeModal());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
