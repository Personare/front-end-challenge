export function getNewState(state, newState) {
    return Object.assign({}, state, newState);
}

export function isFirstRender(items) {
    return !items || items.length === 0 || Object.keys(items).length === 0;
}
