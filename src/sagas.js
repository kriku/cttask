import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import api from './services/api';

export function* getCurrentUser(data) {

  try {
    let req = yield api.user.get('TODD supposed to be here');
    yield put({type: 'RECEIVE_USER_INFO', data: req});
  } catch (err) {
    yield put({type: 'ERROR', data: err});
  }

  // console.log(req);
  // req.then((data) => {
  //   return data;
  // });
  // yield* req.then(function* (data) {
  //     yield put({type: 'RECEIVE_USER_INFO', data: data});
  // });
  //   .then(function* (data) {
  //   yield put({type: 'RECEIVE_USER_INFO', data: data});
  //   console.log(data);
  // }).catch(function* (data) {
  //   yield put({type: 'ERROR', data: data});
  //   console.log(data);
  // });
  // yield delay(1000);
  // yield put({type: 'RECEIVE_USER_INFO', data: {name: 'TODD'}});
}

export function* watchGetCurrentUser() {
  yield takeEvery('GET_CURRENT_USER', getCurrentUser);
}

export default function* rootSaga() {
  yield all([
    watchGetCurrentUser()
  ]);
}
