import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import { campsites } from './campsites';
//import { comments } from './comments';
//import { promotions } from './promotions';
import { recipes } from './recipes';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            //campsites,
            //comments,
            recipes,
            //promotions
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}