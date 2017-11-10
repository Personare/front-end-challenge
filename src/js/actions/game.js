import { shuffleCardsPositions, waitAnimation, fireEvent } from '../helpers/utils';
import { changeTipState } from './tip';
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

export function openModal(id) {
    console.log('abriu');
};

export function shuffleCards(cards) {
    const shuffledcards = shuffleCardsPositions(cards);

    return {
        type: CHANGE_CARDS,
        cards: shuffledcards
    }
}

export function flipCard(id) {
    return {
        type: FLIP_CARD,
        cardId: id
    }
}

export function flipCardThenOpenModal(id) {
    return (dispatch, getState) => {
        if (!getState().game.cards[id].flipped) {
            return false;
        }

        dispatch(flipCard(id));

        return waitAnimation(id).then((id) => {
            openModal();
        });
    }
}

export function flipAllCards(side, getState) {
    let cards = getState().game.cards;
    let isFlipped = side === 'back' ? true : false;

    let newCards = cards.map(card => {
        card.flipped = isFlipped;
        return card;
    });

    console.log(isFlipped);

    return {
        type: FLIP_ALL_CARDS,
        newCards
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
        dispatch(flipAllCards('back', getState));

        dispatch(changeTipState('hide'));

        return waitAnimation()
                .then(() => {
                    dispatch(changeAnimationMode('joining'));
                    return waitAnimation();
                })
                .then(() => {
                    let cards = getState().game.cards;
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

        return waitAnimation()
                .then(() => {
                    dispatch(toggleDisable(false));

                    // to make sure card positions has recalculate
                    fireEvent('resize');
                });
    };
}
