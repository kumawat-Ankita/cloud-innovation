// authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

const initialState = {
    isLoading: false,
    isAuth: false,
    token: '',
    isError: ''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: action.payload.token,
                isError: ''
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                token: '',
                isError: action.payload
            };
        default:
            return state;
    }
};
