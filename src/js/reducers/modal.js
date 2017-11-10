import {
    SELECT_CARD,
    OPEN_MODAL,
    CLOSE_MODAL
} from '../actions/actionsTypes';

export function modal(state = { selectedCard: null, modalState: 'hide' }, action) {
    console.log('ACTION: ', action.cardId)
    switch (action.type) {
        case SELECT_CARD:
            return {
                ...state,
                selectedCard: action.cardId
            };

        case OPEN_MODAL:
            return {
                ...state,
                modalState: 'show'
            }

        case CLOSE_MODAL:
            return {
                ...state,
                modalState: 'hide'
            }

        default:
            return state
    }
}

export function selectCardById(state) {
    const currentSelectedCard = state.modal.selectedCard;

    if(currentSelectedCard === null ) return null;

    return {
        ...state.data.cards[currentSelectedCard],
        imgUrl: state.data.imagesUrl + state.data.cards[currentSelectedCard].image
    };
}
