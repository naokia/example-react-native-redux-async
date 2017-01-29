import * as types from '../actions/actionTypes'

const initialState = {
    text: "",
    isRequesting: false
};

export default function http(state = initialState, action = {}) {
    switch (action.type){
        case types.HTTP_REQUEST:
            return Object.assign({}, state, {
                isRequesting: true
            });
        case types.HTTP_REQUESTING:
            return Object.assign({}, state, {
                isRequesting: true
            });
        case types.HTTP_SUCCESS:
            return Object.assign({}, state, {
                text: action.ipAddress,
                isRequesting: false
            });
        case types.HTTP_FAILURE:
            return Object.assign({}, state, {
                text: action.error,
                isRequesting: false
            });
        default:
            return state;
    }
}
