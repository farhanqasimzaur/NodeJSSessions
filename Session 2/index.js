const express = require('express');
const app = express();
const users = require('./users');

app.use('/users', users);

app.listen(4000, () => console.log('Server listening on port 4000'));