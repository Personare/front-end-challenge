export const LOAD = 'game/LOAD';
export const START = 'game/START';
export const STOP = 'game/STOP';
export const SHUFFLE = 'game/SHUFFLE';
export const SELECT = 'game/SELECT';

export const loadData = (data) => ({
    type: LOAD,
    payload: data,
});

export const setCard = (id) => ({
    type: SELECT,
    payload: { id },
});

export const start = () => ({ type: START });

export const stop = () => ({ type: STOP });

export const shuffle = () => ({ type: SHUFFLE });

