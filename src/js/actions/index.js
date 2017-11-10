import {
    FETCHING_PENDING,
    FETCHING_DONE
} from './actionsTypes';

import axios from 'axios';
import { manipulateData } from '../helpers/utils';

const DATA_URL = 'https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json';

export function getAllCards() {
    return (dispatch) => {
        dispatch(fetchingData());

        return axios.get(DATA_URL)
            .then(response => {
                let newData = manipulateData(response.data);

                dispatch(fetchingDone(newData));
            });
    };
}

export function fetchingData() {
    return {
        type: FETCHING_PENDING
    }
};

export function fetchingDone(cards) {
    console.log("feching finished");
    return {
        type: FETCHING_DONE,
        cards
    }
}




