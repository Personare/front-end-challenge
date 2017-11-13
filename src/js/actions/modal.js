import {
    SELECT_CARD,
    OPEN_MODAL,
    CLOSE_MODAL
} from './actionsTypes';

export function selectCard(cardId) {
    return {
        type: SELECT_CARD,
        cardId
    };
}

export function openModal() {
    return {
        type: OPEN_MODAL
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    };
}
