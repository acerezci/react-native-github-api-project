import { LOADING_USER_FOLLOW, GET_USER_FOLLOW_ERROR, GET_USER_FOLLOW_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    followList: [],
    error: null,
    loading: false
}

const followList = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_USER_FOLLOW:
            return { ...state, loading: true }
        case GET_USER_FOLLOW_SUCCESS:
            return { ...state, followList: action.payload, loading: false }
        case GET_USER_FOLLOW_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
};

export default followList;