import {
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    LOADING_USER,
    LOADING_USER_REPOS,
    GET_USER_REPOS_ERROR,
    GET_USER_REPOS_SUCCESS,
    LOADING_USER_FOLLOW,
    GET_USER_FOLLOW_ERROR,
    GET_USER_FOLLOW_SUCCESS
} from './types';
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
        dispatch({ type: LOADING_USER });
        return axios.get(`https://api.github.com/users/${userName}`)
            .then(response => getUserSuccess(dispatch, response.data))
            .catch(error => getUserError(dispatch, error));
    };
};

const getUserReposSuccess = (dispatch, users) => {
    dispatch({
        type: GET_USER_REPOS_SUCCESS,
        payload: users
    });
};

const getUserReposError = (dispatch, error) => {
    dispatch({
        type: GET_USER_REPOS_ERROR,
        payload: error
    });
};

const getUserRepos = (userName) => {
    return dispatch => {
        dispatch({ type: LOADING_USER_REPOS });
        return axios.get(`https://api.github.com/users/${userName}/repos`)
            .then(response => getUserReposSuccess(dispatch, response.data))
            .catch(error => getUserReposError(dispatch, error));
    };
};

const getUserFollowSuccess = (dispatch, users) => {
    dispatch({
        type: GET_USER_FOLLOW_SUCCESS,
        payload: users
    });
};

const getUserFollowError = (dispatch, error) => {
    dispatch({
        type: GET_USER_FOLLOW_ERROR,
        payload: error
    });
};

const getUserFollow = (userName, followType) => {
    return dispatch => {
        dispatch({ type: LOADING_USER_FOLLOW });
        return axios.get(`https://api.github.com/users/${userName}/${followType}`)
            .then(response => getUserFollowSuccess(dispatch, response.data))
            .catch(error => getUserFollowError(dispatch, error));
    };
};

export default {
    getUser,
    getUserRepos,
    getUserFollow
};