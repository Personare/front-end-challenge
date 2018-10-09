export const request = type => ({
    type
});

export const received = (type, payload) => ({
    type,
    payload
});

export const error = type => ({
    type
});
