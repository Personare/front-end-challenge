import axios from 'axios';
import { FETCH_TAROT_REQUEST, FETCH_TAROT_SUCCESS, SORT_CARDS } from './actionTypes';
import { request, received } from '../shared/utils/baseActions';

export const fetchTarot = () => dispatch => {
    dispatch(request(FETCH_TAROT_REQUEST));

    return axios
        .get('/tarot.json')
        .then(response => dispatch(received(FETCH_TAROT_SUCCESS, response.data)))
        .catch(err => {
            console.log('AXIOS ERROR:', err.response);
        });
};

export const sortCards = () => ({
    type: SORT_CARDS
});
