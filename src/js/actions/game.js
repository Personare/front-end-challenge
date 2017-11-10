import { shuffleCardsPositions, waitAnimation, fireEvent } from '../helpers/utils';
import { changeTipState } from './tip';
import { selectCard, openModal, closeModal } from './modal'
import {
    FLIP_CARD,
    FLIP_ALL_CARDS,
    CHANGE_STEP,
    CHANGE_CARDS,

    TOGGLE_DISABLE,
    INIT_GAME,
    CHANGE_GAME_START,
    CHANGE_GRID_COL,
    CHANGE_ANIMATION_MODE
} from './actionsTypes';

export function shuffleCards(cards) {
    let newCards = [ ...cards ];

    const shuffledcards = shuffleCardsPositions(newCards);

    return {
        type: CHANGE_CARDS,
        cards: shuffledcards
    }
}

export function flipCard(cardId) {
    return {
        type: FLIP_CARD,
        cardId
    }
}

export function flipCardThenOpenModal(cardId) {
    return (dispatch, getState) => {
        if (!getState().data.cards[cardId].flipped) {
            return false;
        }

        dispatch(toggleDisable(true));
        dispatch(flipCard(cardId));
        dispatch(selectCard(cardId));

        return waitAnimation().then(() => {
            dispatch(openModal());
            dispatch(toggleDisable(false));
        });
    }
}

export function flipAllCards(side) {
    let isFlipped = side === 'back' ? true : false;

    return {
        type: FLIP_ALL_CARDS,
        isFlipped
    }
}

export function changeAnimationMode(mode) {
    return {
        type: CHANGE_ANIMATION_MODE,
        mode
    };
}

export const changeGridCols = (totalCols) => {
    return {
        type: CHANGE_GRID_COL,
        gridCols: totalCols
    };
};

export function changeGameStarted(gameStarted) {
    return {
        type: CHANGE_GAME_START,
        gameStarted
    };
}

export function toggleDisable(isDisable) {
    return {
        type: TOGGLE_DISABLE,
        isDisable
    };
}

export function initGame() {
    return (dispatch, getState) => {
        dispatch(changeGameStarted(true));
        dispatch(toggleDisable(true));
        dispatch(changeAnimationMode('flippling'));

        dispatch(flipAllCards('back'));

        dispatch(changeTipState('hide'));

        return waitAnimation()
                .then(() => {
                    dispatch(changeAnimationMode('joining'));
                    return waitAnimation();
                })
                .then(() => {
                    let cards = getState().data.cards;
                    dispatch(shuffleCards(cards));
                    dispatch(changeAnimationMode('backPosition'));
                    return waitAnimation();
                })
                .then(() => {
                    dispatch(changeAnimationMode(''));
                    dispatch(toggleDisable(false));

                    // to make sure card positions has recalculate
                    fireEvent('resize');
                });
    };
};

export function restartGame() {
    return (dispatch, getState) => {
        dispatch(toggleDisable(true));
        dispatch(changeGameStarted(false));
        dispatch(flipAllCards('face', getState));
        dispatch(closeModal());

        return waitAnimation()
                .then(() => {
                    dispatch(toggleDisable(false));

                    // to make sure card positions has recalculate
                    fireEvent('resize');
                });
    };
}
