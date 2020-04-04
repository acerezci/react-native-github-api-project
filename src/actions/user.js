import { GET_USER_SUCCESS, GET_USER_ERROR, SEARCHING_USER } from './types';
import axios from 'axios';

const getUserSuccess = (dispatch, users) => {
    dispatch({
        type: GET_USER_SUCCESS,
        payload: users
    });
};

const getUserError = (dispatch, error) => {
    dispatch({
        type: GET_USER_ERROR,
        payload: error
    });
};

const getUser = (userName) => {
    return dispatch => {
        dispatch({ type: SEARCHING_USER });
        return axios.get(`https://api.github.com/users/${userName}`)
            .then(response => getUserSuccess(dispatch, response.data))
            .catch(error => getUserError(dispatch, error));
    };
};

export default {
    getUser
};