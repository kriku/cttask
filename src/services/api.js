import fakedb from './fakedb'

const api = {
  user: {
    get: fakedb.getUser,
    add: fakedb.addUser
  },
  org: {
    get: fakedb.getOrg,
    set: fakedb.setOrg
  }
};

export default api;
