import * as types from './actionTypes';

export function request() {
    return {
        type: types.HTTP_REQUEST
    };
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
