import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(logger));

const reduxStore = createStore(reducer, enhancer);


export default reduxStore;
