const express = require('express');
const app = express();

var KYC = require('./contract.js');

app.get('/viewUserInfo/:userhash', (req, res) => {
  var userinfo = KYC.viewUserInfo(req.params.userhash);
  res.send(userinfo);
});

app.listen(3400, () => console.log('Server running on port 3400'));