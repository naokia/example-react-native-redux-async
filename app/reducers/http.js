import * as types from '../actions/actionTypes'

const initialState = {
    text: "",
    isFetching: false
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
                text: action.ipAddress,
                isFetching: false
            });
        case types.HTTP_FAILURE:
            return Object.assign({}, state, {
                text: action.error,
                isFetching: false
            });
        default:
            return state;
    }
}
