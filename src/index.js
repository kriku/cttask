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

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch({type: 'GET_USER', id: 0});
let bojack = {
  id:1,
  name: 'Bojack',
  org: 'Horsin\' around',
  scopes: ['orders']
};
store.dispatch({type: 'ADD_USER', user: bojack});
store.dispatch({type: 'GET_USER', id: 1});

store.dispatch({type: 'GET_ORG', id: 0});

let pblivin = {
  name: 'PB Livin',
  info: 'Several failed business ventures'
}

// ha!! b e a u t i f u l mutations!
store.dispatch({type: 'SET_ORG', id: 0, organization: pblivin});
store.dispatch({type: 'GET_ORG', id: 0});

// unsubscribe();
