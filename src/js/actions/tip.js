import {
    CHANGE_TIP_STATE
} from '../actions/actionsTypes';

export function changeTipState(tipState) {
    return {
        type: CHANGE_TIP_STATE,
        tipState
    };
}
