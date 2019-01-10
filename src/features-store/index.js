import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer, notification } from './reducer';
import saga from './saga';

export function generateStore(initialState) {
    const sageMiddleware = createSagaMiddleware();
    const store = createStore(reducer, initialState, applyMiddleware(sageMiddleware));
    sageMiddleware.run(saga);
    notification(store);
    return store;
}

