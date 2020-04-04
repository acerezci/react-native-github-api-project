import { LOADING_USERS, GET_SEARCH_SUCCESS, GET_SEARCH_ERROR } from './types';
import axios from 'axios';

const getSearchSuccess = (dispatch, users) => {
    dispatch({
        type: GET_SEARCH_SUCCESS,
        payload: users
    });
};

const getSearchError = (dispatch, error) => {
    dispatch({
        type: GET_SEARCH_ERROR,
        payload: error
    });
};

const getSearchResult = (userName) => {
    return dispatch => {
        dispatch({ type: LOADING_USERS });
        return axios.get(`https://api.github.com/search/users?q=${userName}`)
            .then(response => getSearchSuccess(dispatch, response.data))
            .catch(error => getSearchError(dispatch, error));
    };
};

export default {
    getSearchResult
}