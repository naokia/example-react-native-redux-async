import * as types from './actionTypes';

export function request() {
    return dispatch => {
        dispatch(requesting());
        return fetch('https://httpbin.org/ip')
            .then(response => response.json())
            .then(json => dispatch(receive(json)));
    };
}

export function requesting() {
    return {
        type: types.HTTP_REQUESTING
    }
}

export function receive(json) {
    return {
        type: types.HTTP_SUCCESS,
        ipAddress: json.origin,
        receivedAt: Date.now()
    }
}

export function success() {
    return {
        type: types.HTTP_SUCCESS
    };
}

export function failure() {
    return {
        type: types.HTTP_FAILURE
    };
}
