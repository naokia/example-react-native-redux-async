import * as types from '../actions/actionTypes'

const initialState = {
    ipAddress: "1.2.3.4"
};

export default function http(state = initialState, action = {}) {
    return {
        ipAddress: state.ipAddress
    };
}
