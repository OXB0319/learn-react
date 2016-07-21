import { createStore, applyMiddleware } from 'redux';
import listReducer from './listReducer';

const logger = (store) => (next) => (action) => {
    console.log('dispatching:', action);
    return next(action);
};

const listStore = createStore(
    listReducer,
    applyMiddleware(logger) // enhance the store with the logger middleware
);

export default listStore;