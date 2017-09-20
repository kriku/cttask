import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import api from './services/api';

export function* getUser(data) {
  try {
    let res = yield api.user.get(data.id);
    yield put({type: 'RECEIVE_USER_INFO', data: res});
  } catch (err) {
    yield put({type: 'ERROR', data: err});
  }
}

export function* watchGetUser() {
  yield takeEvery('GET_USER', getUser);
}

export function* addUser(data) {
  try {
    let res = yield api.user.add(data.user);
    yield put({type: 'USER_IS_ADD', data: res});
  } catch (err) {
    yield put({type: 'ERROR', data: err});
  }
}

export function* watchAddUser() {
  yield takeEvery('ADD_USER', addUser);
}

export function* getOrg(data) {
  try {
    let res = yield api.org.get(data.id);
    yield put({type: 'RECEIVE_ORG_INFO', data: res});
  } catch (err) {
    yield put({type: 'ERROR', data: err});
  }
}

export function* watchGetOrg() {
  yield takeEvery('GET_ORG', getOrg);
}

export function* setOrg(data) {
  try {
    let res = yield api.org.set(data.id, data.organization);
    yield put({type: 'ORG_IS_ADD', data: res});
  } catch (err) {
    yield put({type: 'ERROR', data: err});
  }
}

export function* watchSetOrg() {
  yield takeEvery('SET_ORG', setOrg);
}

export default function* rootSaga() {
  yield all([
    watchGetUser(),
    watchAddUser(),
    watchGetOrg(),
    watchSetOrg()
  ]);
}
