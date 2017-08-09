import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import game from 'reducers/game';

const rootReducer = combineReducers({
    routing: routerReducer,
    game,
});

export default rootReducer;
