import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './actionTypes';


export const fetchMovies = () => async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    try {

        const asyncfunction = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`)
        const data = await asyncfunction.json();
        const response = { data };
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
};