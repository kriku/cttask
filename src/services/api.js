var requestFakeServer = function(req) {
  console.log('requestFakeServer', req);
  return new Promise((resolve, reject) => {
    let dice = Math.random()*10;
    if (dice > 10) reject('Internal server error');
    resolve('horay! ' + req);
  });
}

const api = {
  user: {
    get: requestFakeServer,
    add: requestFakeServer
  }
};

export default api;
