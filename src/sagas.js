import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import api from './services/api';

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* getCurrentUser(data) {
  yield delay(1000);
  yield put({type: 'RECEIVE_USER_INFO', data: {name: 'TODD'}});
}

export function* watchGetCurrentUser() {
  yield takeEvery('GET_CURRENT_USER', getCurrentUser);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchGetCurrentUser()
  ]);
}
