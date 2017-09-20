let users = [{
  id: 0,
  name: 'Todd',
  organization: 0,
  scopes: ['management', 'orders']
}];
let organizations = [
  {name: 'Hooray!', info: 'Todd is the best'},
  {name: 'Horsin\' around', info: 'Listed on Netflix'}
];

var fakePromise = function(res) {
  return new Promise((resolve, reject) => {
    if (!res) reject('Value is undefined or null');
    let dice = Math.random()*10;
    if (dice > 8) reject('Internal server error');
    resolve(res);
  });
};

var addUser = function(user) {
  return new Promise((resolve, reject) => {
    if (user.id && user.name && user.org) {
      users.push(user);
      resolve(200);
    } else reject('Incorrect user schema');
  });
};

var setOrg = function(id, organization) {
  return new Promise((resolve, reject) => {
    if (organizations[id]) {
      if (organization.name && organization.info) {
        organizations[id].name = organization.name;
        organizations[id].info = organization.info;
        resolve(200);
      } else reject('Bad organization schema');
    } else reject('Organization not defined');
  });
};

export default {
  getUser: (id) => fakePromise(users[id]),
  addUser: (user) => addUser(user),
  getOrg: (id) => fakePromise(organizations[id.toString()]),
  setOrg: (id, organization) => setOrg(id, organization)
};
