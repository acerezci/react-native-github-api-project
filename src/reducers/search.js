import { LOADING_USERS, GET_SEARCH_ERROR, GET_SEARCH_SUCCESS, RESET_SEARCH_DATA } from '../actions/types';

const INITIAL_STATE = {
    users: [],
    total_count: -1,
    error: null,
    loading: false,
}

const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_USERS:
            return { ...state, loading: true }
        case GET_SEARCH_SUCCESS:
            return { ...state, users: action.payload.items, loading: false, total_count: action.payload.total_count }
        case GET_SEARCH_ERROR:
            return { ...state, error: action.payload, loading: false }
        case RESET_SEARCH_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default search;