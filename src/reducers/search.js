import { SEARCHING_USERS, GET_SEARCH_ERROR, GET_SEARCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    users: [],
    total_count: -1,
    error: null,
    loading: false,
}

const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCHING_USERS:
            return { ...state, loading: true }
        case GET_SEARCH_SUCCESS:
            return { ...state, users: action.payload.items, loading: false, total_count: action.payload.total_count }
        case GET_SEARCH_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
};

export default search;