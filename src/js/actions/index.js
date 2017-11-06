import {
    FETCHING_DATA,
    RECEIVE_DATA
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
    return function(dispatch) {

        dispatch(fetchingData(true));

        return axios.get(DATA_URL)
            .then(response => {
                dispatch(receiveCards(response.data));
                dispatch(fetchingData(false));
            });
    }
}
