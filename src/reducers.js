import api from './services/api';

export function users(state = {}, action) {
  switch (action.type) {
  case 'RECEIVE_USER_INFO':
    console.log('RECEIVE_USER_INFO:');
    return action.data;
  case 'RECEIVE_ORG_INFO':
    console.log('RECEIVE_ORG_INFO:');
    return action.data;
  case 'USER_IS_ADD':
  case 'ORG_IS_ADD':
    console.log('SUCCESS: ' + action.data);
    return state;
  case 'ERROR':
    console.log('ERROR:');
    return Object.assign({}, state, {error: action.data});
  default:
    console.log('DEFAULT_DISPATCHER: ', action.type);
    return state;
  }
}
