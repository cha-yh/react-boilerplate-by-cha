import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules';
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';
// const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const middlewares = [
    ReduxThunk,
    penderMiddleware()
];

const store = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;