import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from './AuthReducer/reducer';
import { movieReducer } from './MovieReducer/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    movie: movieReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
