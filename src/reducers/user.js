import { GET_USER_ERROR, GET_USER_SUCCESS, LOADING_USER } from '../actions/types';

const INITIAL_STATE = {
    user: {},
    error: null,
    loading: false
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_USER:
            return { ...state, loading: true }
        case GET_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false }
        case GET_USER_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
};

export default user;