import axios from 'axios';
import * as types from './actionTypes';
import { request, received } from '../shared/utils/baseActions';

export const fetchTarot = () => dispatch => {
    dispatch(request(types.FETCH_TAROT_REQUEST));

    return axios
        .get('/tarot.json')
        .then(response => dispatch(received(types.FETCH_TAROT_SUCCESS, response.data)))
        .catch(err => {
            console.log('AXIOS ERROR:', err.response);
        });
};

export const closeCards = () => ({
    type: types.CLOSE_CARDS
});

export const sortCards = () => ({
    type: types.SORT_CARDS
});
