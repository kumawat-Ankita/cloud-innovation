// action.js
import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

export const login = (credentials) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await axios.post('https://reqres.in/api/login', credentials);
        const { token } = response.data;

        // Store token in local storage
        localStorage.setItem('token', token);

        // Dispatch success action with token
        dispatch({ type: LOGIN_SUCCESS, payload: { isAuth: true, token } });
    } catch (error) {
        // Dispatch error action with a descriptive message
        dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.error || 'Login failed. Please try again.' });
    }
};
