import * as types from './actionTypes';

export function request() {
    return dispatch => {
        dispatch(requesting());
        return fetch('https://httpbin.org/ip')
            .then(response => response.json())
            .then(json => dispatch(success(json)))
            .catch(error => dispatch(failure(error)));
    };
}

export function requesting() {
    return {
        type: types.HTTP_REQUESTING
    }
}

export function success(json) {
    return {
        type: types.HTTP_SUCCESS,
        ipAddress: json.origin,
        receivedAt: Date.now()
    }
}

export function failure(error) {
    return {
        type: types.HTTP_FAILURE,
        error: error.message
    };
}
