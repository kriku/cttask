import api from './services/api';

export function users(state = {}, action) {
  switch (action.type) {
  case 'RECEIVE_USER_INFO':
    console.log('RECEIVE_USER_INFO');
    return action.data;
  case 'ERROR':
    return {error: action.data};
  default:
    console.log('DEFAULT_DISPATCHER');
    return state;
  }
}
