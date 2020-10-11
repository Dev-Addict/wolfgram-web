import {combineReducers, createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export type AppDispatch = typeof store.dispatch;

export default store;
