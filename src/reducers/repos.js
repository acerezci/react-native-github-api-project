import { GET_USER_REPOS_ERROR, GET_USER_REPOS_SUCCESS, LOADING_USER_REPOS } from '../actions/types';

const INITIAL_STATE = {
    repos: [],
    error: null,
    loading: false
}

const repos = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_USER_REPOS:
            return { ...state, loading: true }
        case GET_USER_REPOS_SUCCESS:
            return { ...state, repos: action.payload, loading: false }
        case GET_USER_REPOS_ERROR:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    }
};

export default repos;