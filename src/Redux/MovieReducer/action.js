import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from './actionTypes';
import { mockData } from './mockData';

export const fetchMovies = () => async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    try {
        // Simulating an API call with mock data
        const response = { data: mockData.movies };
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
};