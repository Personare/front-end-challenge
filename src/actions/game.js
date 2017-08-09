export const LOAD = 'game/LOAD';
export const START = 'game/START';
export const STOP = 'game/STOP';
export const SHUFFLE = 'game/SHUFFLE';

export const loadData = (data) => ({
    type: LOAD,
    payload: data,
});

export const start = () => ({ type: START });

export const stop = () => ({ type: STOP });

export const shuffle = () => ({ type: SHUFFLE });
