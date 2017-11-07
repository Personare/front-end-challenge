import {
    FETCHING_DATA,
    RECEIVE_DATA,
    CHANGE_GRID_COL
} from './actionsTypes';
import axios from 'axios';

const DATA_URL = 'https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json';

export const receiveCards = (data) => ({
    type: RECEIVE_DATA,
    data
});

export const fetchingData = (isLoading) => ({
    type: FETCHING_DATA,
    isLoading
});

export function getAllCards() {
    return (dispatch) => {
        dispatch(fetchingData(true));

        return axios.get(DATA_URL)
            .then(response => {
                dispatch(receiveCards(response.data));
                dispatch(fetchingData(false));
            });
    }
}

export const changeGridCols = (totalCols) => ({
    type: CHANGE_GRID_COL,
    gridCols: totalCols
})
