import * as types from '../actions/actionTypes'

const initialState = {
    ipAddress: ""
};

export default function http(state = initialState, action = {}) {
    switch (action.type){
        case types.HTTP_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case types.HTTP_REQUESTING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case types.HTTP_SUCCESS:
            return Object.assign({}, state, {
                ipAddress: action.ipAddress,
                isFetching: false
            });
        default:
            return state;
    }
}
