import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history: History): Reducer =>
    combineReducers({
        // router: connectRouter(history),
    });

export default rootReducer;
