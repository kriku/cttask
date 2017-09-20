// for generators and promises
import "babel-polyfill";

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import { users } from './reducers';
import api from './services/api';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(users, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});

let unsubscribe = store.subscribe(() => console.log(store.getState()));

action('GET_CURRENT_USER');

// unsubscribe();
