import {
    CHANGE_TIP_STATE
} from '../actions/actionsTypes';

export function tipState(state = 'hide', action) {
    switch (action.type) {
        case CHANGE_TIP_STATE:
            return action.tipState;

        default:
            return state;
    }
}
