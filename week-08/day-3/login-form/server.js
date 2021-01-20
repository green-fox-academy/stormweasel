'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('/login-form.html', { root: './public' })
});

app.post('/login', (req, res) => {
  if (req.body.username && req.body.password) {
    console.log('bobo');
  }
  res.send({ message: `You've logged in dear ${req.body.username}` });
});

app.listen(3000);
console.log('Server is running on PORT:3000');